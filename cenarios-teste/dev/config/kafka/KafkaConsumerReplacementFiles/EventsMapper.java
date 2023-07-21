/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2021 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2021 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

 package org.opennms.features.kafka.consumer.events;

 import java.util.List;
 import java.util.Objects;
 import java.util.Optional;
 import java.util.stream.Collectors;

 import org.opennms.core.utils.InetAddressUtils;
 import org.opennms.netmgt.model.OnmsSeverity;
 import org.opennms.netmgt.model.events.EventBuilder;
 import org.opennms.netmgt.xml.event.Event;
 import org.slf4j.Logger;
 import org.slf4j.LoggerFactory;

 import com.google.common.base.Strings;

 //imports needed for xml parser
 import javax.xml.stream.XMLEventReader;
 import java.io.StringReader;
 import java.util.function.Consumer;
 import javax.xml.stream.XMLInputFactory;
 import javax.xml.stream.XMLStreamException;
 import java.sql.SQLException;
 import javax.xml.stream.events.StartElement;
 import javax.xml.stream.events.XMLEvent;
 import org.apache.kafka.clients.consumer.ConsumerRecord;
 import java.text.ParseException;
 import java.text.SimpleDateFormat;
 import java.util.ArrayList;
 import java.util.Date;

 //imports needed to turn a event into an alarm
 import org.opennms.netmgt.xml.event.AlarmData;

 //imports needed to access opennms postgres database properly
 import org.opennms.core.db.DataSourceFactory;
 import org.opennms.core.utils.DBUtils;
 import java.sql.Connection;
 import java.sql.PreparedStatement;
 import java.sql.ResultSet;

 public class EventsMapper{

     //Logger variable
     private static final Logger LOG = LoggerFactory.getLogger(EventsMapper.class);

     //Function to parse xml events
     public static Event toEventXml(ConsumerRecord<String, String> record) throws XMLStreamException, SQLException{

         //Variables needed for xml event parser logic
         XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
         XMLEventReader xmlEventReader = xmlInputFactory.createXMLEventReader(new StringReader(record.value()));

         //Variables needed to set the event time
         SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
         Date date = new Date();

         EventBuilder opennms_event = new EventBuilder();
         AlarmData alarmData = new AlarmData();
         StringBuilder description = new StringBuilder();

         String uei_foundation = "uei.opennms.org/vendor/nokia/";
         StringBuilder uei = new StringBuilder();
         String alarm_id = new String();
         boolean flag = false;

         DBUtils d = new DBUtils();


         while(xmlEventReader.hasNext()) {
             XMLEvent nextEvent = xmlEventReader.nextEvent();
             
             if (nextEvent.isStartElement()) {
                StartElement startElement = nextEvent.asStartElement();
                String elementName = startElement.getName().getLocalPart();

                switch(elementName){
                    case "alarm-id":
                        nextEvent = xmlEventReader.nextEvent(); 
                        //Set alarm reduction key as {alarm-id}
                        if (nextEvent.isCharacters()) {
                            alarm_id = nextEvent.asCharacters().getData();
                            break;
                        }else{
                            LOG.warn("Event will not be forwarded, `alarm-id` is required field, skipped Event");
                            return null;
                        }

                    case "alarmResourceUiName":
                        nextEvent = xmlEventReader.nextEvent();
                        //Set event UEI as uei.opennms.org/vendor/nokia/{alarmResourceUiName}
                        if (nextEvent.isCharacters()) {
                            uei.append(uei_foundation).append(nextEvent.asCharacters().getData().replaceAll(" ", "/"));
                            
                            opennms_event.setUei(uei.toString());
                            alarmData.setReductionKey(uei.append(":").append(alarm_id).toString());
                            opennms_event.setSource("Default");
                            break;
                        }else{
                            LOG.warn("Event will not be forwarded, `uei` is required field, skipped Event");
                            return null;
                        }

                    case "alarmSeverity":
                        //severity
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters() && (nextEvent.asCharacters().getData().equalsIgnoreCase("Major")
                                                || nextEvent.asCharacters().getData().equalsIgnoreCase("Minor")
                                                || nextEvent.asCharacters().getData().equalsIgnoreCase("Critical")
                                                || nextEvent.asCharacters().getData().equalsIgnoreCase("Warning")
                                                || nextEvent.asCharacters().getData().equalsIgnoreCase("Normal")
                                                || nextEvent.asCharacters().getData().equalsIgnoreCase("Cleared"))){
                            opennms_event.setSeverity(OnmsSeverity.get(nextEvent.asCharacters().getData()).getLabel());
                        } else {
                            opennms_event.setSeverity(OnmsSeverity.get("Indeterminate").getLabel());
                        }
                        break;

                    case "alarmStatus":
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            //Set auto clean to false
                            alarmData.setAutoClean(false);

                            if(nextEvent.asCharacters().getData().equalsIgnoreCase("Active")){
                                alarmData.setAlarmType(1);
                            }else if (nextEvent.asCharacters().getData().equalsIgnoreCase("Cleared")){
                                opennms_event.setSeverity(OnmsSeverity.get("Normal").getLabel());
                                alarmData.setAlarmType(2);
                                //Set clear key as reduction key of the problem
                                alarmData.setClearKey(alarmData.getReductionKey());
                            }else{
                                alarmData.setAlarmType(3);
                            }

                        }else{
                            alarmData.setAlarmType(3);
                        }
                        opennms_event.setAlarmData(alarmData);
                        break;

                    case "alarmTypeId":
                        //logMessage
                        nextEvent = xmlEventReader.nextEvent();
                        opennms_event.setLogDest("logndisplay");
                        if (nextEvent.isCharacters()) {
                            opennms_event.setLogMessage(nextEvent.asCharacters().getData());
                        }else{
                            opennms_event.setLogMessage("No Log Message to display");
                        }
                        break;

                    case "deviceRefId":
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            try{
                                //Getting connection to database
                                Connection conn = DataSourceFactory.getInstance().getConnection();

                                //To close everything at the end
                                d.watch(conn);

                                //Preparing query
                                PreparedStatement pstmt = conn.prepareStatement("SELECT nodeid FROM node WHERE nodelabel = ?");
                                pstmt.setString(1, nextEvent.asCharacters().getData());

                                //To close everything at the end
                                d.watch(pstmt);

                                //Run query
                                ResultSet rs = pstmt.executeQuery();

                                //To close everything at the end
                                d.watch(rs);

                                //Check if theres a match
                                if(rs.next()){
                                    //If so fetch the node id and set it in the event
                                    opennms_event.setNodeid(rs.getInt("nodeid"));
                                }
                                
                            }finally {
                                //Close Everything. 
                                //This avoids errors like org.postgresql.util.PSQLException: FATAL: sorry, too many clients already
                                d.cleanUp();
                            }
                        }
                        break;

                    case "neIpAddress":
                        //ip address.
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            opennms_event.setInterface(InetAddressUtils.getInetAddress(nextEvent.asCharacters().getData()));
                        }
                        break;

                    case "proposedRepairAction":
                        //Operation Instructions
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            opennms_event.setOperationInstructions(nextEvent.asCharacters().getData());
                        }else{
                            opennms_event.setOperationInstructions("No Instructions to display");
                        }
                        break;
                    
                    case "alarmNotificationOrigin":
                    case "alarmResource":
                    case "alarmText":
                    case "durationOpen":
                    case "eventType":
                    case "objectId":
                    case "serviceAffecting":
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            description.append(elementName).append(": ").append(nextEvent.asCharacters().getData()).append("; ");
                        }
                        break;

                    case "tl1Cause":
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            description.append(elementName).append(": ").append(nextEvent.asCharacters().getData()).append(";");
                        }
                        // To guarantee description gets set
                        opennms_event.setDescription(description.toString());
                        break;  
                
                    case "clearedTime":  
                        nextEvent = xmlEventReader.nextEvent();
                        if(nextEvent.isCharacters()){
                            try {
                                opennms_event.setTime(dateFormat.parse(nextEvent.asCharacters().getData()));
                                flag = true;
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                        }else{
                            LOG.warn("Event will not be forwarded, `cleared time` is required field, skipped Event");
                            return null;
                        }
                        break;

                    case "raisedTime":
                        nextEvent = xmlEventReader.nextEvent();
                        if(flag == false){
                            if(nextEvent.isCharacters()){
                                try {
                                    opennms_event.setTime(dateFormat.parse(nextEvent.asCharacters().getData()));
                                } catch (ParseException e) {
                                    e.printStackTrace();
                                }
                            }else{
                                LOG.warn("Event will not be forwarded, `raised time` is required field, skipped Event");
                                return null;
                            }
                        }
                        
                        break;        
                }
             }
         }
         return opennms_event.getEvent();
     }

     //Function to parse protobuf events
     public static Event toEvent(EventsProto.Event pbEvent) {
         if (Strings.isNullOrEmpty(pbEvent.getUei())) {
             LOG.warn("Event will not be forwarded, `uei` is required field, skipped Event : \n {}", pbEvent);
             return null;
         }
         if (Strings.isNullOrEmpty(pbEvent.getSource())) {
             LOG.warn("Event will not be forwarded, `source` is required field, skipped Event : \n {}", pbEvent);
             return null;
         }
         final EventBuilder builder = new EventBuilder(pbEvent.getUei(), pbEvent.getSource());
         builder.setSeverity(OnmsSeverity.get(pbEvent.getSeverity().name()).getLabel());
         getString(pbEvent.getHost()).ifPresent(builder::setHost);
         if (pbEvent.getNodeId() > 0) {
             builder.setNodeid(pbEvent.getNodeId());
         }
         getString(pbEvent.getIpAddress()).ifPresent(ip -> builder.setInterface(InetAddressUtils.getInetAddress(ip)));
         getString(pbEvent.getServiceName()).ifPresent(builder::setService);
         if (pbEvent.getIfIndex() > 0) {
             builder.setIfIndex(pbEvent.getIfIndex());
         }
         getString(pbEvent.getDistPoller()).ifPresent(builder::setDistPoller);
         getString(pbEvent.getDescription()).ifPresent(builder::setDescription);
         getString(pbEvent.getLogDest()).ifPresent(builder::setLogDest);
         getString(pbEvent.getLogContent()).ifPresent(builder::setLogMessage);
         for (EventsProto.EventParameter p : pbEvent.getParameterList()) {
             builder.setParam(p.getName(), p.getValue());
         }
         return builder.getEvent();
     }

     //Function to parse protobuf events
     public static List<Event> mapProtobufToEvents(List<EventsProto.Event> pbEvents) {
         return pbEvents.stream().map(EventsMapper::toEvent).filter(Objects::nonNull).collect(Collectors.toList());
     }

     //Aux function to detect if a parameter is null or not
     private static Optional<String> getString(String value) {
         if (!Strings.isNullOrEmpty(value)) {
             return Optional.of(value);
         }
         return Optional.empty();
     }
 }

