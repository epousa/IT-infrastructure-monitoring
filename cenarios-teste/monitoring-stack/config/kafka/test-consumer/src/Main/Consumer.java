package Main;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
//import org.apache.kafka.clients.consumer.ConsumerRecord;
//import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
// import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.ByteArrayDeserializer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

import org.w3c.dom.Document;

import Mapper.EventsMapper;

public class Consumer {
    private static final Logger log = LoggerFactory.getLogger(Consumer.class);

    private static final String bootstrapServers = "192.168.1.30:9092";
    private static final String groupId = "my-fifth-application";

    private static final String eventsTopics = "opennms-kafka-events";

    private final static AtomicBoolean closed = new AtomicBoolean(false);

    private final static ExecutorService executorService = Executors.newFixedThreadPool(2);

    public static void main(String[] args) {
        log.info("I am a Kafka Consumer");
        ProtobufConsumer ProtoConsumerRunner = new ProtobufConsumer();
        XmlConsumer XmlConsumerRunner = new XmlConsumer();
        
        executorService.execute(ProtoConsumerRunner);
        executorService.execute(XmlConsumerRunner);

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

            consumer.subscribe(Arrays.asList(eventsTopics));
            log.info("subscribed to {}", eventsTopics);
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
            System.out.print("ola");
            // create consumer configs
            // Create a Kafka consumer instance for XML messages
            KafkaConsumer<String, String> consumer = new KafkaConsumer<>(defineProperties(StringDeserializer.class.getName(),StringDeserializer.class.getName(),"earliest"));
    
            consumer.subscribe(Arrays.asList(eventsTopics));
            log.info("subscribed to {}", eventsTopics);
            while (true) {
                ConsumerRecords<String, String> records = consumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                log.info("EventsMapper for xml");
                log.info("Received {} records", records.count());
                for (ConsumerRecord<String, String> record : records) {
                    log.info(record.value());

                    Document doc = EventsMapper.parseFrom(new String(record.value()));
                    EventsMapper.xmlToEvent(doc);

                }
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

    public static void shutdown() {
        closed.set(true);
        executorService.shutdown();
    }
    
}




