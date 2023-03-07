from kafka import KafkaProducer
from my_event_pb2 import Event, Severity
import sys

def describe_event_protobuf(event):
    event.uei = "uei.opennms.org/custom_event"
    event.source = "Default"
    event.severity = Severity.MINOR
    # event.host = "host.example.com"
    event.node_id = 1
    # event.ip_address = "localhost"
    # event.service_name = "SNMP"
    # event.if_index = 456
    #event.description = "description"
    # event.dist_poller = "DistPoller"
    # event.log_dest = "LogDest"
    # event.log_content = "LogContent"
    # event.parameter.add(name="param1", value="value1")
    # event.parameter.add(name="param2", value="value2")

    return event.SerializeToString()

def describe_event_xml(uei, source, severity, node_id):
    # Create the XML-formatted event
    event_str = f"""<events>
        <event>
            <uei>{uei}</uei>
            <event-label>Custom event</event-label>
            <descr>Custom event description</descr>
            <severity>{severity}</severity>
            <node-label>Node {node_id}</node-label>
            <logmsg dest="logndisplay">
                <p>Custom event occurred on node {node_id}.</p>
            </logmsg>
        </event>
    </events>"""

    # Serialize the XML event to a string
    return event_str.encode('utf-8')


if __name__ == "__main__":

    # Create a Kafka producer and define topic
    producer = KafkaProducer(bootstrap_servers='192.168.1.30:9092')
    topic = 'opennms-kafka-events'

    if sys.argv[1] == "protobuf":
        # Create a new Event message
        event_data = describe_event_protobuf(Event())
    elif sys.argv[1] == "xml":
        # Create a new event message
        event_data = describe_event_xml(uei='uei.opennms.org/custom_event',
                                    source='Default',
                                    severity='Minor',
                                    node_id=1
                    )
    else:
        print("wrong arg")

    # Produce the message to the Kafka topic
    producer.send(topic, value=event_data)

    # Wait for any outstanding messages to be delivered and delivery reports received
    producer.flush()

    # Close the producer connection
    producer.close()
