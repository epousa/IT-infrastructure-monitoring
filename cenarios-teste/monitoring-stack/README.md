## Table of contents
* [General info](#general-info)
* [Setup](#setup) 

## General info
Costume OpenNMS Core instance in docker container image working insync with every other micro-services in containers
	
## Setup
compile with -U -DskipTests so that it builds the tarball needed for the docker image

```
$ time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -Dopennms.home=/opt/opennms -DskipTests)
```

Active docker daemon 

```
$ sudo systemctl start docker
```

Make constume OpenNMS Core instance image

```
$ ~/Desktop/github/dissertacao/cenarios-teste/monitoring-stack/opennms-virtualization/opennms-container/core
$ make image
```

Build containers with docker-compose file

```
$ docker compose up -d
```

Give permissions to the volumes

```
$ sudo chmod -R 777 data-grafana/
$ sudo chmod -R 777 data-opennms*

```
