## Table of contents
- [Main Directory](#Main-Directory)
- [Services](#services)
  * [In System](#in-system)
  * [Docker Containers](#Docker-Containers)
- [Setup](#setup)
  * [Run micro-services](#Run-micro---services)
  * [Build a costume OpeNMS Core instance from Source](#Build-a-costume-OpeNMS-Core-instance-from-Source)
  * [Configure OpenNMS Core instance](#Configure-OpenNMS-Core-instance)
    + [OpenNMS - Access to the database](#OpenNMS---Access-to-the-database)
    + [OpenNMS - Receive Events](#OpenNMS---Receive-Events)
    + [OpenNMS - Receive SNMP Traps](#OpenNMS---Receive-SNMP-Traps)
  * [Run OpeNMS from Source](#Run-OpeNMS-from-Source)
- [Integrations with each event source](#Integrations-with-each-event-source)
- [Extras](#Extras)
  * [OpenNMS - Alarm History](#OpenNMS---Alarm-History)
  * [Grafana - OpenNMS Helm Plugin](#Grafana---OpenNMS-Helm-Plugin)
  * [OpenNMS - Grafana dashboard box](#OpenNMS---Grafana-dashboard-box)
  * [OpenNMS - SNMP Data collection](#OpenNMS---SNMP-Data-collection)
- [Auxiliar Features](#Auxiliar-Features)
  * [Python Kafka Producer](#Python-Kafka-Producer)

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
│   ├── tests-results (Tests and results)
│   │   ├── OpenNMSDashboards.zip
│   │   ├── PerformanceTests.zip
│   │   ├── TestesDST.zip
│   │   └── TestesPreliminares.zip
│   └── docker-compose.yml
│   └── one-ring.sh
```

## Services
### In System:
* Costumized OpenNMS Core instance;

### Docker Containers:
* PostgreSQL;
* ElasticSearch;
* Grafana;
* Kafka;
* Zookeeper;

## Setup
### Run micro-services
Start the docker service and spin the micro services using the docker-compose.
```
sudo systemctl start docker
docker compose up -d
```
> [!NOTE]
> Take into account that OpenNMS wont run if you don't have a PostgreSQL service running already.
> To avoid problems run the docker-compose.yml file before starting OpenNMS Core instance.

### Build a costume OpeNMS Core instance from Source
First, fetch the source from GitHub.
```
git clone https://github.com/OpenNMS/opennms.git opennms
cd opennms
```

Do your changes to the source code.
```
cd cenarios-teste/monitoring-stack/config/kafka/KafkaReplacementFiles
cp EventsMapper.java features/kafka/consumer/src/main/java/org/opennms/features/kafka/consumer/events/
cp OpenNMSKafkaConsumer.java features/kafka/consumer/src/main/java/org/opennms/features/kafka/consumer/
cd opennms
```
* Clean, Compile and assemble from source. 
* This command will create a `target` directory with the final build `opennms-${ONMS_RELEASE}` which will allow you to run a OpenNMS Core instance in bare metal after following the next set of commands.
```
time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -p dir -DskipTests)
```

> [!WARNING]
>
> You may need to raise the limit of open files. Otherwise the build could fail.
> ```
> ulimit -n 16384
> ```

## Configure OpenNMS Core instance
### OpenNMS - Access to the database
Let OpenNMS know your PostgreSQL credentials in `opennms-datasources.xml` file. In a production environment the credentials must not be written directly in plain text into the file. 
OpenNMS offers a feature called Secure Credentials Vault that encrypt them and allow you to call them in the file.

### OpenNMS - Receive Events
Eventd is configured to only accept events from localhost. This can be changed in the `eventd-configarition.xml` file.
If you want to allow any device to send events to Eventd change TCPAddress and UDPAddress to "0.0.0.0".

### OpenNMS - Receive SNMP Traps
Enable Masquerade to allow port forwarding
```
sudo firewall-cmd --permanent --add-masquerade
```

Forward SNMP Trap UDP port 162 to 10162
```
sudo firewall-cmd --permanent --add-port=162/udp
sudo firewall-cmd --permanent --add-port=10162/udp
sudo firewall-cmd --permanent --add-forward-port=port=162:proto=udp:toport=10162
sudo systemctl reload firewalld
```
> [!NOTE]
> This is needed because Trapd is listening for SNMP Traps in port 10162. This can be confirmed by checking `dev/opennms/target/{OPENNMS VERSION}/logs/trapd.log`

You can verify your firewall and port forwarding configuration by sending an SNMP trap from a remote system to your Horizon core instance:
```
snmptrap -v 2c -c public localhost:10162 '' 1.3.6.1.4.1.2021.991.17 .1.3.6.1.2.1.1.6.0 s "Milky Way"
```
> [!NOTE]
>
> When you're sending SNMP traps from the same system where OpenNMS is running, the traffic doesn't actually go through the network interface, but stays within the loopback interface. In this case, you need to specify the port explicitly, since the redirect rule only affects traffic that comes through the network interface

### Run OpeNMS from Source
First go to the OpenNMS directory.
```
cd opennms
```
Next, set the OpenNMS release version in a global environment variable and run the core server instance as your user instead of the opennms system user.
```
export ONMS_RELEASE=$(./.circleci/scripts/pom2version.sh pom.xml)
echo "RUNAS=$(id -u -n)" > "target/opennms-${ONMS_RELEASE}/etc/opennms.conf"
```
Initialize the Java environment and the database schema.
```
./target/opennms-"${ONMS_RELEASE}"/bin/runjava -s
./target/opennms-"${ONMS_RELEASE}"/bin/install -dis
```
Finally start the core server instance in verbose, in foreground and enable remote debugging on port 8001/tcp.
```
./target/opennms-"${ONMS_RELEASE}"/bin/opennms -vtf start
```
> [!WARNING]
>
> You may face some errors when trying to start your OpenNMS Core instance.
> Problems related with Karaf can be dealt with by running the following script.
>```
>{OPENNMS_HOME}/bin/fix-karaf-setup.sh
>```
> If you are having trouble with permissions run the following script.
>```
>{OPENNMS_HOME}/bin/fix-permissions
>```
> If you are facing conflicts with database access you are probably dealing with a locked access that hasn't been released.
> To release it manually first access your PostgreSQL db
> ```
> docker exec -it <container_name> psql -U <username> -d <database_name>
> ```
> Then check if there is a lock
> ```
> SELECT * FROM public.databasechangeloglock;
> ```
> If there is one, take it's id and release it
> ```
> UPDATE public.databasechangeloglock SET locked = false, lockgranted = null, lockedby = null WHERE id = 1;
> ```
> OpenNMS inicialization can also be interrupted by sintax errors in its configuration files.
> As a last resource you can always try to build OpenNMS again.
>```
> ./assemble.pl -p dir -DskipTests
>```

## Integrations with each event source
![integrations](https://github.com/epousa/IT-infrastructure-monitoring/assets/92334531/09e32f2b-06cd-4ccc-b9af-c3ea5ccb3fea)

* Fixes to the OpenNMS Integrated Kafka Consumer feature in `cenarios-teste/dev/config/kafka/KafkaConsumerReplacementFiles/` directory;
* Fixes to the dynamic and static event format in `ZTE-AN-GPON-SERVICE-MIB.events.xml`, `ZXR10-ALARM-MIB.events.xml`, `translator-configuration.xml` (EventTranslator solution) and `myScript` (autoaction solution);
* Test event format `Class.events.xml` can be used to test both solutions mentioned in the last bullet point;
* Script `myServiceScript` to test Self-resolution alarms with autoaction;  

## Extras
### OpenNMS - Alarm History

The following commands demonstrate how to configure and install the `opennms-alarm-history-elastic` feature, enabling OpenNMS to maintain persistent storage of alarms.

First access Karaf Shell and Configure the feature.
```
ssh -p 8101 admin@localhost
config:edit org.opennms.features.alarms.history.elastic
config:property-set elasticUrl http://<service-hostname>:9200
config:update
```
Then install the feature.
```
feature:install opennms-alarm-history-elastic
```

### Grafana - OpenNMS Helm Plugin

Go to `configurations -> plugins` and search for `OpenNMS Helm`, install and enable it.

Next step is to create a datasource. This can be done by going to `configurations -> datasources`. The plugin allows you to choose between three different datasources to interact with your openNMS core instance: `OpenNMS Entities`, `OpenNMS Flow` and `OpenNMS Performance`.

For this project the most important datasource is `OpenNMS Entities`, because it's responsible for fetching alarms and display them.

After selecting a datasource, you will need to fill the HTTP URL with OpenNMS Core instance URL, toggle basic auth and insert OpenNMS Core instance Credentials.

Now just create a dashboard. Go to `Create -> Dashboards` and select one of the following preconfigured custom panels that come with the plugin, `alarm table`, `alarm histogram` or `filter panel` under visualizations and adapt them to your needs.

> [!NOTE]
>
> Since Grafana is running as a docker container insert the IP address of your machine instead of localhost in the OpenNMS Core instance URL.

### OpenNMS - Grafana dashboard box

Configure and enable this feature by creating or editing `{OPENNMS_HOME}/etc/opennms.properties.d/grafana.properties` and setting the following configuration properties:
```
org.opennms.grafanaBox.show = true
org.opennms.grafanaBox.apiKey = <Your Grafana Api key>
org.opennms.grafanaBox.tag = <Your dashboards tag>
```
* `org.opennms.grafanaBox.show` -> Determines whether a Grafana Dashboard Box showing the available dashboards is included on the home page.

* `org.opennms.grafanaBox.apiKey` -> The Grafana API key. This key is needed for REST calls to work. To create Grafana Api Key go to your `Grafana instance configurations -> API keys`.

* `org.opennms.grafanaBox.tag` -> A tag that specifies which dashboards to display in the Grafana Dashboard Box. The tag must be assigned to an existing dashboard for it to be included. When no tag is specified, all dashboards are displayed. Use the same tag for all dashboards you want to see in OpenNMS Grafana dashboard box

## Auxiliar Features
### Python Kafka Producer

A Kafka Producer is implemented in Python aiming to simulate the sending of events captured by the Nokia NMS (Network Management System) to Kafka topics. This allows testing the algorithm developed for reading these events independently of the DSTelecom infrastructure.

The producer is capable of sending multiple events in both protobuf and XML formats to their respective Kafka topics. Creating protobuf events requires providing a blueprint that indicates the data to be serialized and deserialized for each event. This file retaining the definition of the intended data structure is compiled, generating Python classes that, when imported into the Kafka Producer, allow the construction of events. Producing XML events is a simpler process involving only reading an XML file containing the desired event.

Interacting with Apache Kafka and building protobuf events involves using libraries that are not included with the standard Python installation. To ensure that these dependencies are included, a Python virtual environment is created using the venv module. Virtual environments are built on top of the existing Python installation and provide the option to isolate packages from the base installation, so that the application to be executed has only the libraries added to the environment.

All commands involved in creating and maintaining the virtual environment, including adding dependencies to it, producing, and sending events, are incorporated into a Makefile for ease of reuse.

The implementations of the Kafka Producer and Makefile are available in `pythonKafkaProducer` directory.
