## Table of contents
* [General info](#general-info)
* [Setup](#setup) 

## General info
This is a copy of the main directory. The difference is that it shows how to make your own costumized OpenNMS Docker Image and run this service in a container. 
	
## Setup

To create a costumized Docker image of the OpenNMS Core instance to invoke in the docker-compose, first you'll need to fetch OpenNMS source code from git and add your code. Then compile it and assemble the build artifacts in the `/opt/opennms` directory instead of the `target` directory. To do that execute the following command.

```
time (./clean.pl && ./compile.pl -U -DskipTests && ./assemble.pl -Dopennms.home=/opt/opennms -DskipTests)
```

Then, simply execute the Makefile located in the directory `opennms-container/core/` to create the desired Docker image.

```
make image
```

>[!Warning]
> If the OpenNMS instance runs in a Docker container, it might be necessary to specify the URL of the ElasticSearch service in the file `org.opennms.plugin.elasticsearch.rest.forwarder.cfg` so that the plugin can properly forward the alarms. The same applies to the Grafana Dashboard Box functionality.
>```
>org.opennms.grafanaBox.show = true
>org.opennms.grafanaBox.hostname = <optional>   <---- Add this
>org.opennms.grafanaBox.apiKey = <grafana-api-key>
>org.opennms.grafanaBox.tag = show
>```
