# Monitorização de infraestrutura de TI 
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup) 

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

Clean, Compile and assemble from source
```
$ time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -p dir -DskipTests)
```

> **Warning**
>
> You may face errors when trying to simply start the openNMS you built after turning off your system which wont let OpenNMS run. If so, one way to fix it is to assemble it again. 
>```
>./assemble.pl -p dir -DskipTests
>```
* ## Run postgres, Kafka and Grafana containers
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



