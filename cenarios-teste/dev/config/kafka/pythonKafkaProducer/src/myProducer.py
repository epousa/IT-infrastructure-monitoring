# importing element tree
# under the alias of ET
import xml.etree.ElementTree as ET
from kafka import KafkaProducer
from my_event_pb2 import Event, Severity
import sys

def create_event_protobuf(uei,source,severity,host,node_id,ip_address,service_name,if_index,description,dist_poller,log_dest,log_content):
    event = Event()
    event.uei = uei
    event.source = source
    event.severity = severity

    # Optional fields:
    #event.host = host
    event.node_id = node_id
    # event.ip_address = ip_address
    # event.service_name = service_name
    # event.if_index = if_index
    #event.description = description
    # event.dist_poller = dist_poller
    # event.log_dest = log_dest
    # event.log_content = log_content
    # event.parameter.add(name="param1", value="value1")
    # event.parameter.add(name="param2", value="value2")
    return event.SerializeToString()

if __name__ == "__main__":

    # Create a Kafka producer and define topic
    producer = KafkaProducer(bootstrap_servers='192.168.1.30:9092')
    defaultTopic = "opennms-default-format"
    topic = 'opennms-kafka-events'
    key = b'localhost'
    counter0 = 0
    counter1 = 0

    match sys.argv[1]:
        case "protobuf":
        
            # Create a new Event message
            event_data = create_event_protobuf(
                 uei="uei.opennms.org/random/event",
                 source="Default",
                 severity=Severity.MINOR,
                 host="host.example.com",
                 node_id=1,
                 ip_address="192.168.1.30",
                 service_name="",
                 if_index=456,
                 description="",
                 dist_poller="",
                 log_dest="",
                 log_content=""
            )

            print(event_data)
            while(counter0 < int(sys.argv[2])):
                # Produce the message to the Kafka topic
                producer.send(defaultTopic, value=event_data)
                counter0+=1

        case "xml":

            if(len(sys.argv) != 4):
                print("\nWrong arguments\nCorrect format: python3 "+sys.argv[0]+" xml <event_file.xml>\n")
            else:
                # Read new xml event 
                tree = ET.parse(sys.argv[2])
                root = tree.getroot()

                # convert ElementTree object to string
                event_data = ET.tostring(root)
                #print(event_data)
                # # encode string as bytes
                # event_data = xml_string.encode('utf-8')
                while(counter1 < int(sys.argv[3])):
                    # Produce the message to the Kafka topic
                    producer.send(topic, value=event_data,key=key)
                    counter1+=1
                

        case _:
            print("\nMissing format type in your arguments\n")
    

    # Wait for any outstanding messages to be delivered and delivery reports received
    producer.flush()

    # Close the producer connection
    producer.close()
