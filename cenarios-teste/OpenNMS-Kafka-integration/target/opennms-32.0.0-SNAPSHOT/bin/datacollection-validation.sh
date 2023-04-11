#!/bin/sh - 

JAVA_OPTIONS="-Xmx256m"
OPENNMS_HOME="/home/epousa/dev/opennms/target/opennms-32.0.0-SNAPSHOT"
OPENNMS_BINDIR="/home/epousa/dev/opennms/target/opennms-32.0.0-SNAPSHOT/bin"

APP_CLASS=org.opennms.netmgt.config.DataCollectionConfigFactory

exec "$OPENNMS_BINDIR"/runjava -r -- $JAVA_OPTIONS \
	-Dopennms.home="$OPENNMS_HOME" \
	-Dopennms.manager.class="$APP_CLASS" \
	-Dlog4j.configurationFile="$OPENNMS_HOME"/etc/log4j2-tools.xml \
	-jar $OPENNMS_HOME/lib/opennms_bootstrap.jar