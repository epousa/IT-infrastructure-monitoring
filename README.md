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
	
## Setup


```
$ git clone https://github.com/OpenNMS/opennms.git ~/dev/opennms
$ cd ~/dev/opennms
$ time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -p dir -DskipTests)
$ export ONMS_RELEASE=$(./.circleci/scripts/pom2version.sh pom.xml)
$ echo "RUNAS=$(id -u -n)" > "target/opennms-${ONMS_RELEASE}/etc/opennms.conf"
$ ./target/opennms-"${ONMS_RELEASE}"/bin/runjava -s
$ ./target/opennms-"${ONMS_RELEASE}"/bin/install -dis
$ ./target/opennms-"${ONMS_RELEASE}"/bin/opennms -vt start
```

