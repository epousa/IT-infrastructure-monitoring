package Mapper;

import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EventsMapper {
    private static final Logger LOG = LoggerFactory.getLogger(EventsMapper.class);

    public static Document parseFrom(String xmlStr) {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();  
        DocumentBuilder builder;  
        try  
        {  
            builder = factory.newDocumentBuilder();  
            Document doc = builder.parse( new InputSource( new StringReader( xmlStr ) ) ); 
            return doc;
        } catch (Exception e) {  
            e.printStackTrace();  
        } 
        return null;
    }

    public static void xmlToEvent(Document doc){
        String uei = doc.getElementsByTagName("uei").item(0).getTextContent();
        LOG.info(uei);
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

