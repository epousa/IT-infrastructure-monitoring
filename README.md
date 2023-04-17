# Monitorização de infraestrutura de TI 
## Table of contents
- [Setup](#setup) 
  * [Build OpeNMS from Source](#Build-OpeNMS-from-Source)
  * [Run postgres, Kafka and Grafana containers](#Run-postgres-Kafka-and-Grafana-containers)
  * [OpenNMS Setup](#OpenNMS-Setup)
  * [OpenNMS Main Operations](#OpenNMS-Main-Operations)
- [Technologies](#technologies) 
  * [In System](#in-system)
  * [Docker Containers](#Docker-Containers)
- [Main Features](#Main-Features)
  * [View](#view)
    + [Grafana - OpenNMS Helm Plugin](#Grafana---OpenNMS-Helm-Plugin)
    + [OpenNMS - Grafana dashboard box](#OpenNMS---Grafana-dashboard-box)
    + [OpenNMS - Surveillence and Dashboard](#OpenNMS---Surveillence-and-Dashboard)
    + [OpenNMS - Ops Board](#Ops-Board)
    + [OpenNMS - Map](#OpenNMS---Map)
    + [OpenNMS - Topology](#OpenNMS---Topology)
  * [Access](#access)
    + [OpenNMS - Users and Groups](#OpenNMS---Users-and-Groups)
  * [Data Collection](#Data-Collection)
    + [OpenNMS - Kafka Consumer](#OpenNMS---Kafka-Consumer)
    + [OpenNMS - SNMP Data collection](#OpenNMS---SNMP-Data-collection)
    + [OpenNMS - Receive SNMP Traps](#Receive-SNMP-Traps)
    + [OpenNMS - Alarm Correlation](#OpenNMS---Alarm-Correlation)
- [Helper Features](#Helper-Features)
  * [Python Kafka Producer](#Python-Kafka-Producer)

## Technologies 
### In System:
* Costumized OpenNMS instance;

### Docker Containers: 
* Grafana;
* Postgres;
* Kafka;
* Zookeeper;

## Setup 
### Build OpeNMS from Source
Get the source from GitHub in your home directory
```
git clone https://github.com/OpenNMS/opennms.git ~/dev/opennms
cd ~/dev/opennms
```
> **Warning**
>
> Raise the limit of open files. Otherwise the build will fail.
> ```
> ulimit -n 16384
> ```

Replace default `EventsMapper.java` and `OpenNMSKafkaConsumer.java` files.
```
cd cenarios-teste/monitoring-stack/config/kafka/KafkaReplacementFiles
cp EventsMapper.java features/kafka/consumer/src/main/java/org/opennms/features/kafka/consumer/events/
cp OpenNMSKafkaConsumer.java features/kafka/consumer/src/main/java/org/opennms/features/kafka/consumer/
cd ~/dev/opennms
```

Clean, Compile and assemble from source
```
time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -p dir -DskipTests)
```

> **Warning**
>
> You may face errors when trying to simply start the openNMS you built after turning off your system which wont let OpenNMS run. If so, one way to fix it is by cleaning the cache 
>```
>{OPENNMS_HOME}/bin/fix-karaf-setup.sh
>```
> Or by assembling it again. 
>```
> ./assemble.pl -p dir -DskipTests
>```
### Run postgres, Kafka and Grafana containers
```
cd ~/dev
docker-compose up -d
```
> **Warning**
> 
> Atleast postgres container needs to be running before initializing the database schema.
>
> It's necessary to let the openNMS instance know the postgres credentials. To do so, you must modify `target/{OPENNMS VERSION}/etc/opennms-datasources.xml` file accordingly.

### OpenNMS Setup 

Set the OpenNMS release version in a global environment variable
```
cd ~/dev/opennms
export ONMS_RELEASE=$(./.circleci/scripts/pom2version.sh pom.xml)
```
Run the core server instance as your user instead of the opennms system user
```
echo "RUNAS=$(id -u -n)" > "target/opennms-${ONMS_RELEASE}/etc/opennms.conf"
```

Initialize the Java environment
```
./target/opennms-"${ONMS_RELEASE}"/bin/runjava -s
```

Initialize the database schema
```
./target/opennms-"${ONMS_RELEASE}"/bin/install -dis
```

### OpenNMS Main Operations
Start the core server instance, verbose, and enable remote debugging on port 8001/tcp. 
```
./target/opennms-"${ONMS_RELEASE}"/bin/opennms -vtf start
```
> **Note**
>
> Remove -f option to run it in background

Stop the core server instance
```
./target/opennms-"${ONMS_RELEASE}"/bin/opennms stop
```

## Main Features

### View
#### Grafana - OpenNMS Helm Plugin
To avoid problems with the plugin, the Grafana container uses `opennms/helm:latest` image. This plugin has to be installed in your Grafana instance. To do so, go to `configurations -> plugins` and search for `OpenNMS Helm`, install and enable it. 

Next step is to create a datasource. This can be done by going to `configurations -> datasources`. The plugin allows you to choose between three different datasources to interact with your openNMS core instance: `OpenNMS Entities`, `OpenNMS Flow` and `OpenNMS Performance`.

For this project the most important datasource is OpenNMS Entities, because it's responsible for fetching alarms and display them.

After selecting a datasource, you will need to fill the HTTP URL with OpenNMS Core instance URL, toggle basic auth and insert OpenNMS Core instance Credentials. 

Now just create a dashboard. Go to `Create -> Dashboards` and select `alarm table` under visualizations and costumize your alarm table with the columns you want.

> **Note**
>
> Since Grafana is running as a docker container insert the IP address of your machine instead of localhost in the OpenNMS Core instance URL.

#### OpenNMS - Grafana dashboard box

To use and configure this feature by creating or editing `{OPENNMS_HOME}/etc/opennms.properties.d/grafana.properties` and setting the following configuration properties:
```
org.opennms.grafanaBox.show = true
org.opennms.grafanaBox.apiKey = <Your Grafana Api key>
org.opennms.grafanaBox.tag = <Your dashboards tag>
```
* `org.opennms.grafanaBox.show` -> Determines whether a Grafana Dashboard Box showing the available dashboards is included on the home page.
 
* `org.opennms.grafanaBox.apiKey` -> The Grafana API key. This key is needed for REST calls to work.

* `org.opennms.grafanaBox.tag` -> A tag that specifies which dashboards to display in the Grafana Dashboard Box. The tag must be assigned to an existing dashboard for it to be included. When no tag is specified, all dashboards are displayed.

> **Note**
>
> * To create Grafana Api Key go to your `Grafana instance configurations -> API keys`;
> 
> * To filter multiple dashboards by their tags, use the same tag for all dashboards you want to see in OpenNMS Grafana dashboard box;

#### OpenNMS - Surveillence and Dashboard - View

For alarms to be displayed in the OpenNMS Dashboard, nodes must be associated with a category present in the surveillence view. Otherwise, they will only show up in the alarms view.

> **Note**
>
> For some reason the logmsg parameter is set as doNotOverride in the security section of the `eventconf.xml` file. This will prevent events to set the desired logmsg. To fix it, just comment this `<doNotOverride>logmsg</doNotOverride>` and you will be able to set your logmsg in events. 
> 
> Then reset Eventd daemon with  `send-event.pl uei.opennms.org/internal/reloadDaemonConfig -p 'daemonName Eventd'` to register the change.

#### OpenNMS - Ops Board

#### OpenNMS - Map

#### OpenNMS - Topology

## Access 
#### OpenNMS - Users and Groups

## Data Collection
### OpenNMS - Kafka Consumer

Configure features and Kafka client via Karaf shell
```
ssh -p 8101 admin@localhost
```

Configure Kafka for Event Consumer
```
config:edit org.opennms.features.kafka.consumer.client
config:property-set bootstrap.servers my-kafka-ip-1:9092,my-kafka-ip-2:9092
config:property-set eventsTopic opennms-kafka-events
config:update
```

Install Kafka Consumer feature
```
feature:install opennms-kafka-consumer
```

To ensure that the feature continues to be installed on subsequent restarts, add opennms-kafka-consumer to a file in featuresBoot.d:
```
echo "opennms-kafka-consumer" | sudo tee ${OPENNMS_HOME}/etc/featuresBoot.d/kafka-consumer.boot
```
> **Note**
>
> At this stage, the kafka consumer is already using our costume EventsMapper.java and OpenNMSKafkaConsumer.java files that fit our needs.

### OpenNMS - SNMP Data collection
To fetch performance data from a node using SNMP you need to configure snmpd service through `snmpd.conf` file appropriatly. Create groups, match the community string, define a view with the OID that fetchs the data you want and define where snmp traps should go using `trapsink` followed by the destination IP. 

Then go to openNMS configure SNMP by IP through `settings -> Configure SNMP Community Names by IP Address` and insert the IP of the desired node with the correct community string. At last, navigate to that node and rescan manually to detect the SNMP service.

Every configuration made can be checked in the `/target/{OPENNMS VERSION}/etc/snmp-config.xml` file.

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
> **Note**
> This is needed because Trapd is listening for SNMP Traps in port 10162. This can be confirmed by checking `dev/opennms/target/{OPENNMS VERSION}/logs/trapd.log`

You can verify your firewall and port forwarding configuration by sending an SNMP trap from a remote system to your Horizon core instance:
```
snmptrap -v 2c -c public opennms-core-host '' 1.3.6.1.4.1.2021.991.17 .1.3.6.1.2.1.1.6.0 s "Milky Way"
```
> **Note**
>
> When you're sending SNMP traps from the same system where OpenNMS is running, the traffic doesn't actually go through the network interface, but stays within the loopback interface. In this case, you need to specify the port explicitly, since the redirect rule only affects traffic that comes through the network interface


### OpenNMS - Alarm Correlation


## Helper Features
#### Python Kafka Producer
