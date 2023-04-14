# Monitorização de infraestrutura de TI 
## Table of contents
* [Setup](#setup) 
* [Features](#features)

# Technologies 
In System:
* Costumized OpenNMS instance;

Docker Containers: 
* Grafana;
* Postgres;
* Kafka;
* Zookeeper;

# Setup 
## Build OpeNMS from Source
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
> You may face errors when trying to simply start the openNMS you built after turning off your system which wont let OpenNMS run. If so, one way to fix it is to assemble it again. 
>```
>./assemble.pl -p dir -DskipTests
>```
## Run postgres, Kafka and Grafana containers
```
cd ~/dev
docker-compose up -d
```
> **Warning**
> 
> Atleast postgres container needs to be running before initializing the database schema.

## OpenNMS Setup 

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

## OpenNMS Main Operations
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

# Features
## Grafana - OpenNMS Helm Plugin


## OpenNMS - Grafana dashboard box

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

