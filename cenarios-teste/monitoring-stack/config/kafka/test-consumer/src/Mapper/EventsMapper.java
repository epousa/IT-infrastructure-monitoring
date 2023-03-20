package Mapper;

import java.io.StringReader;
import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;
import javax.xml.namespace.QName;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.xml.stream.events.EndElement;

public class EventsMapper {
    private static final Logger log = LoggerFactory.getLogger(EventsMapper.class);

    public static void xmlToEvent(ConsumerRecord<String, String> record) throws XMLStreamException{
    
        XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
        XMLEventReader xmlEventReader = xmlInputFactory.createXMLEventReader(new StringReader(record.value()));

        while(xmlEventReader.hasNext()) {

            XMLEvent event = xmlEventReader.nextEvent();

            switch(event.getEventType()) {
                case XMLStreamConstants.START_ELEMENT:

                    StartElement startElement = event.asStartElement();
                    // log.info(startElement.getName().getLocalPart());

                    switch(startElement.getName().getLocalPart()){
                        case "alarm-id":
                            event = xmlEventReader.nextEvent();
                            log.info(event.asCharacters().getData());
                            break;
                        case "alarmNotificationOrigin":
                            event = xmlEventReader.nextEvent();
                            log.info(event.asCharacters().getData());
                            break;
                        case "alarmResource":
                            event = xmlEventReader.nextEvent();
                            log.info(event.asCharacters().getData());
                            break;
                        case "alarmResourceUiName":
                            event = xmlEventReader.nextEvent();
                            log.info(event.asCharacters().getData());
                            break;
                        case "alarmSeverity":
                            event = xmlEventReader.nextEvent();
                            log.info(event.asCharacters().getData());
                            break;
                    }
                    break;
                case XMLStreamConstants.END_ELEMENT:
                    EndElement endElement = event.asEndElement();
                    // if </staff>
                    if (endElement.getName().getLocalPart().equals("alarm")) {
                        log.info("---- finished parsing ------");
                    }
                    break;
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

