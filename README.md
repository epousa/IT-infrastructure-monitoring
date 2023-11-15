# Monitorização de infraestrutura de TI 
## Table of contents
- [About the project](#About-the-project) 
- [Overview](#Overview) 
- [Experimental Environment](#Experimental-Environment)
- [Project Directories](#Project-Directories)

## About the project:
The implementation of heterogeneous networks, which incorporate various technologies and equipment from multiple manufacturers, is a growing trend. This approach enables the integration of different network technologies and the provision of a wide range of services and applications. However, this diversity also brings with it complex operational and management challenges. As networks evolve to incorporate diverse components, each with its own characteristics and protocols, there is a need to complement them with effective monitoring solutions.

In this dissertation, a case study is conducted within DSTelecom with the aim of exploring a unified monitoring solution tailored to its heterogeneous network infrastructure, specifically focusing on the functional area of \textit{fault management}, following the FCAPS model. DSTelecom operates ZTE and NOKIA network equipment, which are monitored by their respective proprietary NMS, as well as devices without NMS. To retrieve alarms registered by the ZTE NMS and those generated by the orphaned devices, it is necessary to employ the SNMP protocol. On the other hand, the NOKIA NMS uses Kafka topics to share alarms with other systems.

The proposed solution entails using the OpenNMS platform to centralize alarms from the previously mentioned event sources and share the collected information with ElasticSearch and Grafana. The integration of these tools provides a historical record of alarms for the monitoring system and a unified and more flexible presentation of information, respectively. OpenNMS offers functionalities that make it the most suitable monitoring platform for this use case, including an integrated Kafka Consumer for reading alarms from NOKIA devices and an SNMP MIB Compiler to format events received via SNMP Traps. However, the format of events written to Kafka topics could not be interpreted by the integrated Kafka Consumer, which creates the need to modify the original code of this functionality. Additionally, the SNMP MIB Compiler produced both static and dynamic event formats, which required the usage of the EventTranslator service and the application of filters to address associated issues, respectively.

The conducted tests have confirmed that the implemented modifications ensure the expected performance and do not disrupt the unified monitoring system.

## Overview
![overview](https://github.com/epousa/dissertacao/assets/92334531/c3c5416b-66f8-4a21-abea-db3659c93dd1)

## Experimental Environment
![experimental](https://github.com/epousa/dissertacao/assets/92334531/608266f8-138c-429a-8abb-599bb4dbc8b4)

## Project Directories
```
├── cenarios-teste
│   ├── dev
│   │   ├── config
│   │   │   ├── env
│   │   │   │   ├── broker.env
│   │   │   │   └── elastic.env
│   │   │   │   └── grafana.env
│   │   │   │   └── postgres.env
│   │   │   │   └── zookeeper.env
│   │   │   ├── important-files
│   │   │   │   ├── Class.events.xml
│   │   │   │   └── eventconf.xml
│   │   │   │   └── grafana.properties
│   │   │   │   └── myScript
│   │   │   │   └── myServiceScript
│   │   │   │   └── opennms-datasource.xml
│   │   │   │   └── opennms.pollerd.events.xml
│   │   │   │   └── snmp-config.xml
│   │   │   │   └── snmpd-conf.txt
│   │   │   │   └── translator-configuration.xml
│   │   │   │   └── ZTE-AN-GPON-SERVICE-MIB.events.xml
│   │   │   │   └── ZXR10-ALARM-MIB.events.xml
│   │   │   ├── kafka
│   │   │   │   ├── KafkaConsumerReplacementFiles
│   │   │   │   │   ├── EventBuilder.java
│   │   │   │   │   └── EventsMapper.java
│   │   │   │   │   └── OpenNMSKafkaConsumer.java
│   │   │   │   │   └── pom.xml
│   │   │   │   └── kafka_events_format
│   │   │   │   └── pythonKafkaProducer
│   │   │   │   │   ├── Makefile
│   │   │   │   │   └── requirements.txt
│   │   │   │   │   └── src
│   │   │   │   │   └── venv
│   │   │   │   └── test-consumer
│   │   │   │   │   ├── README.md
│   │   │   │   │   └── src
│   │   │   │   │   │   ├── Main
│   │   │   │   │   │   │   └── Consumer.java
│   │   │   │   │   │   └── Mapper
│   │   │   │   │   │   │   └── EventsMapper.java
│   │   └── docker-compose.yml
│   │   └── images
│   │   └── notes
│   │   └── one-ring
│   ├── ExampleOpenNMSDatabaseAccess
│   │   ├── README.md
│   │   └── src
│   │   │   └── App.java
│   └── monitoring-stack
```
