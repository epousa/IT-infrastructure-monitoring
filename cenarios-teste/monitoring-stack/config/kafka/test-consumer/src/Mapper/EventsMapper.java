package Mapper;

import java.io.StringReader;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
// import javax.xml.stream.events.Characters;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EventsMapper {
    private static final Logger log = LoggerFactory.getLogger(EventsMapper.class);

    private static final Map<String, Consumer<XMLEvent>> handlers = new HashMap<>();

    static{
        handlers.put("alarm-id", event -> log.info(event.asCharacters().getData()));
        //handlers.put("idalarm", handlers.get("alarm-id"));
        handlers.put("alarmNotificationOrigin", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmResource", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmResourceUiName", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmSeverity", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmStatus", event -> log.info(event.asCharacters().getData()));
        // handlers.put("alarmText", event -> {
        //     if (event.isCharacters()) {
        //         String data = event.asCharacters().getData();
        //         if (!data.trim().isEmpty()) {
        //             log.info(" {}", data);
        //         }
        //     }
        // });
        // handlers.put("alarmText", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmType", event -> log.info(event.asCharacters().getData()));
        handlers.put("alarmTypeId", event -> log.info(event.asCharacters().getData()));
        // handlers.put("customField1", event -> log.info(event.asCharacters().getData()));
        // handlers.put("customField2", event -> log.info(event.asCharacters().getData()));
        // handlers.put("customField3", event -> log.info(event.asCharacters().getData()));
        handlers.put("deviceRefId", event -> log.info(event.asCharacters().getData()));
        handlers.put("eventType", event -> log.info(event.asCharacters().getData()));
        handlers.put("lastStatusChangeTime", event -> log.info(event.asCharacters().getData()));
        handlers.put("neIpAddress", event -> log.info(event.asCharacters().getData()));
        handlers.put("objectId", event -> log.info(event.asCharacters().getData()));
        handlers.put("proposedRepairAction", event -> log.info(event.asCharacters().getData()));
        handlers.put("raisedTime", event -> log.info(event.asCharacters().getData()));
        handlers.put("serviceAffecting", event -> log.info(event.asCharacters().getData()));
        handlers.put("tl1Cause", event -> log.info(event.asCharacters().getData()));
    }
    
    public static void xmlToEvent(ConsumerRecord<String, String> record) throws XMLStreamException{
        
        XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
        XMLEventReader xmlEventReader = xmlInputFactory.createXMLEventReader(new StringReader(record.value()));

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

    }

    // public static Event ToEvent{
    //     if (Strings.isNullOrEmpty(pbEvent.getUei())) {
    //         LOG.warn("Event will not be forwarded, `uei` is required field, skipped Event : \n {}", pbEvent);
    //         return null;
    //     }
    //     if (Strings.isNullOrEmpty(pbEvent.getSource())) {
    //         LOG.warn("Event will not be forwarded, `source` is required field, skipped Event : \n {}", pbEvent);
    //         return null;
    //     }

    //     final EventBuilder builder = new EventBuilder(pbEvent.getUei(), pbEvent.getSource());

    //     builder.setSeverity(OnmsSeverity.get(pbEvent.getSeverity().name()).getLabel());
    //     getString(pbEvent.getHost()).ifPresent(builder::setHost);
    //     if (pbEvent.getNodeId() > 0) {
    //         builder.setNodeid(pbEvent.getNodeId());
    //     }
    //     getString(pbEvent.getIpAddress()).ifPresent(ip -> builder.setInterface(InetAddressUtils.getInetAddress(ip)));
    //     getString(pbEvent.getServiceName()).ifPresent(builder::setService);
    //     if (pbEvent.getIfIndex() > 0) {
    //         builder.setIfIndex(pbEvent.getIfIndex());
    //     }
    //     getString(pbEvent.getDistPoller()).ifPresent(builder::setDistPoller);
    //     getString(pbEvent.getDescription()).ifPresent(builder::setDescription);
    //     getString(pbEvent.getLogDest()).ifPresent(builder::setLogDest);
    //     getString(pbEvent.getLogContent()).ifPresent(builder::setLogMessage);
    //     for (EventsProto.EventParameter p : pbEvent.getParameterList()) {
    //         builder.setParam(p.getName(), p.getValue());
    //     }
    //     return builder.getEvent();

    // }
    
    // public static List<Event> mapProtobufToEvents(List<EventsProto.Event> pbEvents) {
    //     return pbEvents.stream().map(EventsMapper::toEvent).filter(Objects::nonNull).collect(Collectors.toList());
    // }

    // private static Optional<String> getString(String value) {
    //     if (!Strings.isNullOrEmpty(value)) {
    //         return Optional.of(value);
    //     }
    //     return Optional.empty();
    // }
    
}

