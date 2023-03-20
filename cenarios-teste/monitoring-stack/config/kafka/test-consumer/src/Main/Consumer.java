package Main;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.ByteArrayDeserializer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.Properties;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import javax.xml.stream.XMLStreamException;
import Mapper.EventsMapper;

public class Consumer {
    private static final Logger log = LoggerFactory.getLogger(Consumer.class);

    private static final String bootstrapServers = "192.168.1.30:9092";
    private static final String groupId = "my-fifth-application";

    private static final String xmlTopics = "opennms-kafka-events";
    private static final String protobufTopics = "";

    private final static ExecutorService executorService = Executors.newFixedThreadPool(2);

    public static void main(String[] args) {
        log.info("I am a Kafka Consumer");
        
        if(!xmlTopics.isEmpty()){
            XmlConsumer XmlConsumerRunner = new XmlConsumer();
            executorService.execute(XmlConsumerRunner);
        }else{
            log.info("Thread Kafka consumer (xml instance) not created ! No topics for it !");
        }

        if(!protobufTopics.isEmpty()){
            ProtobufConsumer ProtoConsumerRunner = new ProtobufConsumer();
            executorService.execute(ProtoConsumerRunner);
        }else{
            log.info("Thread Kafka consumer (GBP instance) not created ! No topics for it !");
        }

        // Add a shutdown hook to handle program termination
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            log.info("Shutdown hook activated. Shutting down gracefully...");

            // Shutdown the executor service and wait for the threads to finish
            executorService.shutdown();
            try {
                if (!executorService.awaitTermination(5000, TimeUnit.MILLISECONDS)) {
                    executorService.shutdownNow();
                }
            } catch (InterruptedException e) {
                log.error("Error waiting for executor service to shutdown", e);
                executorService.shutdownNow();
            }

            log.info("Shutdown complete.");
        }));

    }

    public static class ProtobufConsumer implements Runnable {
        @Override
        public void run() {
            // create consumer configs
            Properties properties = defineProperties(StringDeserializer.class.getName(),ByteArrayDeserializer.class.getName(),"earliest");
            // Create a Kafka consumer instance for protobuf messages
            KafkaConsumer<String, byte[]> consumer = new KafkaConsumer<>(properties);

            //subscrever so os topicos protobuf
            consumer.subscribe(Arrays.asList(protobufTopics));
            
            log.info("subscribed to {}", protobufTopics);
            while (true) {
                // ConsumerRecords<String, byte[]> records = consumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                // log.info("Received {} records", records.count());
                // List<EventsProto.Event> pbEvents = new ArrayList<>();
                // for (ConsumerRecord<String, byte[]> record : records) {
                //     try {
                //         EventsProto.Event pbEvent = EventsProto.Event.parseFrom(record.value());
                //         pbEvents.add(pbEvent);
                //     } catch (InvalidProtocolBufferException e) {
                //         LOG.warn("Error while parsing event with key {}", record.key());
                //     }
                // }
                // forwardEventsToOpenNMS(pbEvents);
            }  
          
        }
    }
    
    public static class XmlConsumer implements Runnable {
        @Override
        public void run() {
            // create consumer configs
            // Create a Kafka consumer instance for XML messages
            KafkaConsumer<String, String> consumer = new KafkaConsumer<>(defineProperties(StringDeserializer.class.getName(),StringDeserializer.class.getName(),"earliest"));
            
            //subscrever so os topicos protobuf
            consumer.subscribe(Arrays.asList(xmlTopics));
           
            log.info("subscribed to {}", xmlTopics);
            while (true) {
                ConsumerRecords<String, String> records = consumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                log.info("EventsMapper for xml");
                log.info("Received {} records", records.count());
                for (ConsumerRecord<String, String> record : records) {
                    log.info(record.value());
                    try {
                        EventsMapper.xmlToEvent(record);
                    } catch (XMLStreamException e) {
                        
                        e.printStackTrace();
                    }
                }
                
                // forwardEventsToOpenNMS(xmlEvents);

                //usar uma função para percorrer a lista de strings ir buscar o que preciso com o stax e associar ao element do event builder
            }
        }
    }

    public static Properties defineProperties(String key_deserializer, String value_deserializer, String offset){

        Properties properties = new Properties();
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, key_deserializer);
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, value_deserializer);
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, offset);

        return properties;
    }   
}




