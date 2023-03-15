import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.StringDeserializer;
//import org.apache.kafka.common.serialization.ByteArrayDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class App {
    private static final Logger log = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        log.info("I am a Kafka Consumer");

        String bootstrapServers = "192.168.1.30:9092";
        String groupId = "my-fifth-application";
        String topic = "opennms-kafka-events";

        String host = "192.168.1.30";
        int port = 5817;

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
        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);
        //KafkaConsumer<byte[], byte[]> consumer = new KafkaConsumer<>(properties);

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

            // subscribe consumer to the topic(s)
            consumer.subscribe(Arrays.asList(topic));

            // poll for new data
            while (true) {
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));

                for (ConsumerRecord<String, String> record : records) {
                    log.info("Key: " + record.key() + ", Value: " + record.value());
                    log.info("Partition: " + record.partition() + ", Offset:" + record.offset());

                    try (Socket socket = new Socket(host, port)) {
                        OutputStream outputStream = socket.getOutputStream();
                        outputStream.write(record.value().getBytes());
                        outputStream.flush();
                        System.out.println("Event sent successfully.");
                    } catch (IOException ex) {
                        System.err.println("Error sending event: " + ex.getMessage());
                        ex.printStackTrace();
                    }
                }
                
                //build event
                //Event event = new Event(topic, topic, topic, topic, 0, 0, topic, 0, topic, bootstrapServers, false, groupId, topic, null);
                
                //Send event

            }

       
            // consumer.subscribe(Arrays.asList(topic));

            // while (true) {
            //     ConsumerRecords<byte[], byte[]> records = consumer.poll(Duration.ofMillis(100));
            //     records.forEach(record -> {
            //         System.out.println("Received message: key = " + record.key() + ", value = " + record.value());
            //     });
            // }

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




