from kafka import KafkaProducer
from my_event_pb2 import Event, Severity

def describe_event(event):
    event.uei = "uei.opennms.org/custom_event"
    event.source = "Default"
    event.severity = Severity.MINOR
    # event.host = "host.example.com"
    event.node_id = 1
    # event.ip_address = "localhost"
    # event.service_name = "SNMP"
    # event.if_index = 456
    # event.description = "Description"
    # event.dist_poller = "DistPoller"
    # event.log_dest = "LogDest"
    # event.log_content = "LogContent"
    # event.parameter.add(name="param1", value="value1")
    # event.parameter.add(name="param2", value="value2")

    return event.SerializeToString()

if __name__ == "__main__":

    # Create a Kafka producer and define topic
    producer = KafkaProducer(bootstrap_servers='192.168.1.30:9092')
    topic = 'opennms-kafka-events'

    # Create a new Event message
    event_data = describe_event(Event())

    # Produce the message to the Kafka topic
    producer.send(topic, value=event_data)

    # Wait for any outstanding messages to be delivered and delivery reports received
    producer.flush()

    # Close the producer connection
    producer.close()
