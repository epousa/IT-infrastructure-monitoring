## Table of contents
- [Main Directory](#Main-Directory)

## Main Directory
```
├── dev (main directory)
│   ├── config
│   │   ├── env (environmental variables for micro-services)
│   │   │   ├── broker.env
│   │   │   └── elastic.env
│   │   │   └── grafana.env
│   │   │   └── postgres.env
│   │   │   └── zookeeper.env
│   │   ├── important-files
│   │   │   ├── Class.events.xml
│   │   │   └── eventconf.xml
│   │   │   └── grafana.properties
│   │   │   └── myScript
│   │   │   └── myServiceScript
│   │   │   └── opennms-datasource.xml
│   │   │   └── opennms.pollerd.events.xml
│   │   │   └── snmp-config.xml
│   │   │   └── snmpd-conf.txt
│   │   │   └── translator-configuration.xml
│   │   │   └── ZTE-AN-GPON-SERVICE-MIB.events.xml
│   │   │   └── ZXR10-ALARM-MIB.events.xml
│   │   ├── kafka
│   │   │   ├── KafkaConsumerReplacementFiles (Changes made to OpenNMS integrated Kafka Consumer)
│   │   │   │   ├── EventBuilder.java
│   │   │   │   └── EventsMapper.java
│   │   │   │   └── OpenNMSKafkaConsumer.java
│   │   │   │   └── pom.xml
│   │   │   └── kafka_events_format (XML Event files)
│   │   │   └── pythonKafkaProducer (Python Kafka Producer files)
│   │   │   │   ├── Makefile
│   │   │   │   └── requirements.txt
│   │   │   │   └── src
│   │   │   │   │   ├── my-event.proto
│   │   │   │   │   └── myProducer.py
│   └── docker-compose.yml
│   └── images
│   └── notes
│   └── one-ring.sh
```
