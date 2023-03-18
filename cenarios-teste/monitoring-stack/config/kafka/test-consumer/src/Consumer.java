package Main;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
//import org.apache.kafka.clients.consumer.ConsumerRecord;
// import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.StringDeserializer;
//import org.apache.kafka.common.serialization.ByteArrayDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;

//import org.w3c.dom.Document;
import Mapper.EventsMapper;

// import java.io.IOException;
// import java.io.OutputStream;
// import java.net.Socket;

public class Consumer{
    private static final Logger log = LoggerFactory.getLogger(Consumer.class);

    public static void main(String[] args) {
        log.info("I am a Kafka Consumer");

        String bootstrapServers = "192.168.1.30:9092";
        String groupId = "my-fifth-application";
        String topic = "opennms-kafka-events";
        
        // String host = "192.168.1.30";
        // int port = 5817;

        // create consumer configs
        Properties properties = new Properties();
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        //properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, ByteArrayDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        //properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ByteArrayDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

        // Create a Kafka consumer instance for protobuf messages
        KafkaConsumer<String, byte[]> protobufConsumer = new KafkaConsumer<>(properties);
        
        // Create a Kafka consumer instance for XML messages
        KafkaConsumer<String, String> xmlConsumer = new KafkaConsumer<>(properties);
        
        // get a reference to the current thread
        final Thread mainThread = Thread.currentThread();

        // adding the shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                log.info("Detected a shutdown, let's exit by calling consumer.wakeup()...");
                protobufConsumer.wakeup();
                xmlConsumer.wakeup();

                // join the main thread to allow the execution of the code in the main thread
                try {
                    mainThread.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        try {
            // subscribe consumers to the topic(s)
            protobufConsumer.subscribe(Arrays.asList("protobuf-topic"));
            xmlConsumer.subscribe(Arrays.asList("opennms-kafka-events", "outro xml topic"));

            log.info("subscribed to {}", topic);

            //*****Thread Safety***** https://www.oreilly.com/library/view/kafka-the-definitive/9781491936153/ch04.html
            // You can’t have multiple consumers that belong to the same group in one thread and you can’t have multiple threads safely use the same consumer. 
            // One consumer per thread is the rule. To run multiple consumers in the same group in one application, you will need to run each in its own thread.
            // It is useful to wrap the consumer logic in its own object and then use Java’s ExecutorService to start multiple threads each with its own consumer.
            // The Confluent blog has a tutorial that shows how to do just that.

            // poll for new data
            while (true) {
                // Poll for protobuf messages
                ConsumerRecords<String, byte[]> protobufRecords = protobufConsumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                for (ConsumerRecord<String, byte[]> record : protobufRecords) {
                    // Handle protobuf messages
                    // ...
                    // try {
                        // EventsProto.Event pbEvent = EventsProto.Event.parseFrom(record.value());
                        // pbEvents.add(pbEvent);
                    // } catch (InvalidProtocolBufferException e) {
                        // LOG.warn("Error while parsing event with key {}", record.key());
                    // }
                }

                // Poll for XML messages
                ConsumerRecords<String, String> xmlRecords = xmlConsumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                for (ConsumerRecord<String, String> record : xmlRecords) {
                    // Handle XML messages
                    // ...
                }
                
                //send event
                //forwardEventsToOpenNMS(pbEvents);
            }    

        } catch (WakeupException e) {
            log.info("Wake up exception!");
            // we ignore this as this is an expected exception when closing a consumer
        } catch (Exception e) {
            log.error("Unexpected exception", e);
        } finally {
            protobufConsumer.close(); // this will also commit the offsets if need be.
            xmlConsumer.close();
            log.info("The consumer is now gracefully closed.");
        }

    }

    // void forwardEventsToOpenNMS(List<EventsProto.Event> pbEvents) {
    //     List<Event> events = EventsMapper.mapProtobufToEvents(pbEvents);
    //     Log log = new Log();
    //     events.forEach(log::addEvent);
    //     // SendNowSync sends events in synchronous mode which puts more backpressure on Kafka.
    //     eventForwarder.sendNowSync(log);
    //     log.getEvents().getEventCollection().forEach(event -> {
    //         LOG.debug(" Event with uei {}, source {} forwarded to OpenNMS", event.getUei(), event.getSource());
    //     });
    // }

}





 
