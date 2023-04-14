# Monitorização de infraestrutura de TI 
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup) 

## General info
This project is simple Lorem ipsum dolor generator.
	
## Technologies
Project is created with:
* Lorem version: 12.3
* Ipsum version: 2.33
* Ament library version: 999
	
## Build OpeNMS from Source
Get the source from GitHub in your home directory
```
git clone https://github.com/OpenNMS/opennms.git ~/dev/opennms
cd ~/dev/opennms
```
Clean, Compile and assemble from source
```
$ time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -p dir -DskipTests)
```

## Run postgres, Kafka and Grafana containers
```
cd ~/dev
docker compose up -d
```

## Setup OpenNMS
Set the OpenNMS release version in a global environment variable
```
$ export ONMS_RELEASE=$(./.circleci/scripts/pom2version.sh pom.xml)

```
Run the core server instance as your user instead of the opennms system user
```
$ echo "RUNAS=$(id -u -n)" > "target/opennms-${ONMS_RELEASE}/etc/opennms.conf"
```

Initialize the Java environment
```
./target/opennms-"${ONMS_RELEASE}"/bin/runjava -s
```

Initialize the database schema
```
./target/opennms-"${ONMS_RELEASE}"/bin/install -dis
```

## Operate OpenNMS
Start the core server instance, verbose, and enable remote debugging on port 8001/tcp. Remove -f option to run it in background
```
./target/opennms-"${ONMS_RELEASE}"/bin/opennms -vtf start
```
* ⚠️ After turning off and on the computer there maybe errors when trying to start your OpenNMS build. One way to fix it is to assemble it again.
```
* ./assemble.pl -p dir -DskipTests
```

Stop the core server instance
```
./target/opennms-"${ONMS_RELEASE}"/bin/opennms stop
```


