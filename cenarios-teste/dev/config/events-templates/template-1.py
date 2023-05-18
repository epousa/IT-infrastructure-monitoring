import xml.etree.ElementTree as ET
import sys

if __name__ == "__main__":
    count = 0;
    #  ../../opennms/target/opennms-32.0.0-SNAPSHOT/etc/events/ZXR10-ALARM-MIB.events.xml
    # '../../opennms/target/opennms-32.0.0-SNAPSHOT/etc/events/ZTE-AN-GPON-SERVICE-MIB.events.xml'
    for arg in sys.argv[1:]:
        count += 1;

        tree = ET.parse(arg);

        #root é um elemento e por isso tem tag e um dicionario de atributos
        print("-------- Elemento raiz --------");
        root = tree.getroot();
        print(root.tag,root.attrib);

        # Define the namespace
        namespace = {'ns': 'http://xmlns.opennms.org/xsd/eventconf'}

        # Retrieve all 'event' elements
        events = root.findall('ns:event', namespace);

        # Iterate over each 'event' element
        for event in events:
            # Extract individual elements
            mask_elements = event.findall('ns:mask/ns:maskelement', namespace)
            uei = event.find('ns:uei', namespace)
            event_label = event.find('ns:event-label', namespace)
            descr = event.find('ns:descr', namespace)
            logmsg = event.find('ns:logmsg', namespace)
            severity = event.find('ns:severity', namespace)

            # Access the text content of the elements
            mask_elements_values = [(element.find('ns:mename', namespace).text, element.find('ns:mevalue', namespace).text)
                                    for element in mask_elements]
            uei_value = uei.text if uei is not None else None
            event_label_value = event_label.text if event_label is not None else None
            descr_value = descr.text if descr is not None else None
            logmsg_value = logmsg.text if logmsg is not None else None
            severity_value = severity.text if severity is not None else None

            # Process the extracted elements
            print('Mask Elements:')
            for me_name, me_value in mask_elements_values:
                print(f"  Name: {me_name}, Value: {me_value}")

            print(f"UEI: {uei_value}")
            print(f"Event Label: {event_label_value}")
            print(f"Description: {descr_value}")
            print(f"Log Message: {logmsg_value}")
            print(f"Severity: {severity_value}")
            print('---')

            alarm_data = ET.SubElement(event, 'alarm-data')
            alarm_data.set('reduction-key', uei_value)
            alarm_data.set('alarm-type', str(1))
            
        # Remove the namespace prefix
        for elem in root.iter():
            if '}' in elem.tag:
                elem.tag = elem.tag.split('}', 1)[1]  # Remove the namespace prefix

        # Save the modified XML to a new file
        tree.write('output'+str(count)+".xml", encoding='utf-8', xml_declaration=True)
