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

import javax.xml.stream.XMLEventReader;

import org.opennms.core.utils.InetAddressUtils;
import org.opennms.netmgt.model.OnmsSeverity;
import org.opennms.netmgt.model.events.EventBuilder;
import org.opennms.netmgt.xml.event.Event;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//imports needed for new parser
import java.io.StringReader;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;
import org.apache.kafka.clients.consumer.ConsumerRecord;


import com.google.common.base.Strings;

public class EventsMapper {

    private static final Logger LOG = LoggerFactory.getLogger(EventsMapper.class);
    private static final Map<String, Consumer<XMLEvent>> handlers = new HashMap<>();

    private static final XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();

    // private static final EventBuilder opennms_event = new EventBuilder();

    static{
        // handlers.put("eventTime", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarm-id", event -> {
            opennms_event.setUei("uei.opennms.org/"+event.asCharacters().getData());
            opennms_event.setSource("Default");
            // log.info(event.asCharacters().getData());
        });

        //handlers.put("idalarm", handlers.get("alarm-id"));
        handlers.put("alarmNotificationOrigin", event -> {
            log.info(event.asCharacters().getData());
        });

        handlers.put("alarmResource", event -> {
            log.info(event.asCharacters().getData());
        });

        handlers.put("alarmResourceUiName", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("alarmSeverity", event -> {
            //severity
            opennms_event.setSeverity(OnmsSeverity.get(event.asCharacters().getData()).getLabel());
        });

        handlers.put("alarmStatus", event -> {
            
            log.info(event.asCharacters().getData());
        });

        // handlers.put("alarmText", event -> {
        //     if (event.isCharacters()) {
        //         String data = event.asCharacters().getData();
        //         if (!data.trim().isEmpty()) {
        //             log.info(" {}", data);
        //         }
        //     }
        // });
        // handlers.put("alarmText", event -> log.info(event.asCharacters().getData()));

        handlers.put("alarmType", event -> {
            log.info(event.asCharacters().getData());
        });

        handlers.put("alarmTypeId", event -> {
            //logMessage
            getString(event.asCharacters().getData()).ifPresent(opennms_event::setLogMessage);
        });

        // handlers.put("customField1", event -> log.info(event.asCharacters().getData()));
        // handlers.put("customField2", event -> log.info(event.asCharacters().getData()));
        // handlers.put("customField3", event -> log.info(event.asCharacters().getData()));
        handlers.put("deviceRefId", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("eventType", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("lastStatusChangeTime", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("neIpAddress", event -> {
            //ip address
            getString(event.asCharacters().getData()).ifPresent(ip -> opennms_event.setInterface(InetAddressUtils.getInetAddress(ip)));
        });

        handlers.put("objectId", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("proposedRepairAction", event -> {
            //description
            getString(event.asCharacters().getData()).ifPresent(opennms_event::setDescription);
        });

        handlers.put("raisedTime", event -> {
            // opennms_event.setTime(event.asCharacters().getData());
            log.info(event.asCharacters().getData());
        });

        handlers.put("serviceAffecting", event -> {
            
            log.info(event.asCharacters().getData());
        });

        handlers.put("tl1Cause", event -> {
            
            log.info(event.asCharacters().getData());
        });
    }

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

    public static Event xmlToEvent(ConsumerRecord<String, String> record) throws XMLStreamException{
        
        XMLEventReader xmlEventReader = xmlInputFactory.createXMLEventReader(new StringReader(record.value()));
        final EventBuilder opennms_event = new EventBuilder();

        while(xmlEventReader.hasNext()) {
            XMLEvent event = xmlEventReader.nextEvent();
            if (event.isStartElement()) {
                StartElement startElement = event.asStartElement();
                String elementName = startElement.getName().getLocalPart();
                Consumer<XMLEvent> handler = handlers.get(elementName);
                if (handler != null) {
                    handler.accept(xmlEventReader.nextEvent());
                }
            }else if (event.isEndElement() && event.asEndElement().getName().getLocalPart().equals("alarms")) {
                log.info("---- finished parsing ------");
            }
        }
        return opennms_event;
    }

    public static List<Event> mapProtobufToEvents(List<EventsProto.Event> pbEvents) {
        return pbEvents.stream().map(EventsMapper::toEvent).filter(Objects::nonNull).collect(Collectors.toList());
    }

    private static Optional<String> getString(String value) {
        if (!Strings.isNullOrEmpty(value)) {
            return Optional.of(value);
        }
        return Optional.empty();
    }
}
