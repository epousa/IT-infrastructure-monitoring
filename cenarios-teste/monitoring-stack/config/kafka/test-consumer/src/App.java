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

// import java.io.IOException;
// import java.io.OutputStream;
// import java.net.Socket;

public class App {
    private static final Logger log = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        log.info("I am a Kafka Consumer");

        String bootstrapServers = "10.254.254.106:9092";
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

        // create consumer
        KafkaConsumer<String, byte[]> consumer = new KafkaConsumer<>(properties);
        // get a reference to the current thread
        final Thread mainThread = Thread.currentThread();

        // adding the shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                log.info("Detected a shutdown, let's exit by calling consumer.wakeup()...");
                consumer.wakeup();

                // join the main thread to allow the execution of the code in the main thread
                try {
                    mainThread.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        try {

            //Para o caso de ter topicos que tem eventos com configurações 
            //diferentes tentar criar uma thread por cada topico. 
            //Cada thread usa um eventmapper different

            // subscribe consumer to the topic(s)
            consumer.subscribe(Arrays.asList(topic));
            log.info("subscribed to {}", topic);

            // poll for new data
            while (true) {
                ConsumerRecords<String, byte[]> records = consumer.poll(java.time.Duration.ofMillis(Long.MAX_VALUE));
                log.info("Received {} records", records.count());
                for(ConsumerRecord<String, byte[]> record:records){
                    System.out.println(record.value());
                }
                
                // //manipulate event
                // List<EventsProto.Event> pbEvents = new ArrayList<>();
                // for (ConsumerRecord<String, byte[]> record : records){
                //     try {
                //         EventsProto.Event pbEvent = EventsProto.Event.parseFrom(record.value());
                //         pbEvents.add(pbEvent);
                //     } catch (InvalidProtocolBufferException e) {
                //         LOG.warn("Error while parsing event with key {}", record.key());
                //     }
                // }

                // //send event
                // forwardEventsToOpenNMS(pbEvents);
            }

        } catch (WakeupException e) {
            log.info("Wake up exception!");
            // we ignore this as this is an expected exception when closing a consumer
        } catch (Exception e) {
            log.error("Unexpected exception", e);
        } finally {
            consumer.close(); // this will also commit the offsets if need be.
            log.info("The consumer is now gracefully closed.");
        }

    }
}




