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
 import javax.xml.stream.events.StartElement;
 import javax.xml.stream.events.XMLEvent;
 import org.apache.kafka.clients.consumer.ConsumerRecord;
 import java.text.ParseException;
 import java.text.SimpleDateFormat;
 import java.util.ArrayList;
 import java.util.Date;

 //imports needed to turn a event into an alarm
 import org.opennms.netmgt.xml.event.AlarmData;

 //imports needed to access opennms postgres database
 import java.sql.Connection;
 import java.sql.DriverManager;
 import java.sql.PreparedStatement;
 import java.sql.ResultSet;
 import java.sql.SQLException;

 public class EventsMapper{

     //Logger variable
     private static final Logger LOG = LoggerFactory.getLogger(EventsMapper.class);

     //Variables needed for xml event parser logic
     private static final XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
     private static EventBuilder opennms_event;
     private static AlarmData alarmData;

     //Variables needed to set the raised event time
     private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
     private static Date date;

     //Variables needed for accessing opennms postgres database
     private static final String jdbcUrl = "jdbc:postgresql://localhost:5432/opennms";
     private static final String username = "opennms";
     private static final String password = "opennms";
     private static final String query = "SELECT nodeid FROM node WHERE nodelabel = ?";

     private static final String uei_foundation = "uei.opennms.org/vendor/nokia/";
     private static String alarm_id = "";
     private static String uei = "";
     private static StringBuilder description;

     //Function to parse xml events
     public static Event toEventXml(ConsumerRecord<String, String> record) throws XMLStreamException{

         XMLEventReader xmlEventReader = xmlInputFactory.createXMLEventReader(new StringReader(record.value()));
         opennms_event = new EventBuilder();
         alarmData = new AlarmData();
         description = new StringBuilder();

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
                            uei = uei_foundation+nextEvent.asCharacters().getData().replaceAll(" ", "/");
                            
                            opennms_event.setUei(uei);
                            alarmData.setReductionKey(uei+":"+alarm_id);
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
                            try (Connection conn = DriverManager.getConnection(jdbcUrl, username, password)) {
                                // String query = "SELECT nodeid FROM node WHERE nodelabel = ?";
                                PreparedStatement pstmt = conn.prepareStatement(query);
                                pstmt.setString(1, nextEvent.asCharacters().getData());
                                ResultSet rs = pstmt.executeQuery();
                                while (rs.next()) {
                                    opennms_event.setNodeid(rs.getInt("nodeid"));
                                }
                                //To avoid org.postgresql.util.PSQLException: FATAL: sorry, too many clients already
                                conn.close();
                            } catch (SQLException e) {
                                e.printStackTrace();
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
                            description.append(elementName).append(": ").append(nextEvent.asCharacters().getData()).append(System.lineSeparator());
                        }
                        break;

                    case "tl1Cause":
                        nextEvent = xmlEventReader.nextEvent();
                        if (nextEvent.isCharacters()) {
                            description.append(elementName).append(": ").append(nextEvent.asCharacters().getData());
                            opennms_event.setDescription(description.toString());
                        }
                        break;  
                       
                    case "raisedTime":
                        nextEvent = xmlEventReader.nextEvent();
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

