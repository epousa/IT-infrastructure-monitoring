## Table of contents
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
- [Main Features](#Main-Features)
  * [View](#view)
    + [Grafana - OpenNMS Helm Plugin](#Grafana---OpenNMS-Helm-Plugin)
    + [OpenNMS - Grafana dashboard box](#OpenNMS---Grafana-dashboard-box)
  * [Data Collection](#Data-Collection)
    + [OpenNMS - Kafka Consumer](#OpenNMS---Kafka-Consumer)
    + [OpenNMS - SNMP Data collection](#OpenNMS---SNMP-Data-collection)
    + [OpenNMS - Alarm Correlation](#OpenNMS---Alarm-Correlation)
- [Auxiliar Features](#Auxiliar-Features)
  * [Python Kafka Producer](#Python-Kafka-Producer)
 
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
* This command will create a "target" directory with the final build "opennms-${ONMS_RELEASE}" which will allow you to run a OpenNMS Core instance in bare metal after following the next set of commands.
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
