�--==================================================================
-- Copyright (C) 2006 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: NOTIFICATION-LOG-MIB
-- Reference: This mib was extracted from RFC 3014
-- Version: V1.0
-- History:
-- <author>,  <date>,  <contents>
-- Panglixiang   2006-12-15
-- ==================================================================
                                                                                                                             `"The MIB module for logging SNMP Notifications, that is, Traps
                    and Informs." �"Ramanathan Kavasseri
                    Cisco Systems, Inc.
                    170 West Tasman Drive,
                    San Jose CA 95134-1706.
                    Phone: +1 408 527 2446
                    Email: ramk@cisco.com" "200011270000Z" O"This is the initial version of this MIB.
               Published as RFC 3014"       -- 27 November 2000
              �"The maximum number of notification entries that may be held
                in nlmLogTable for all nlmLogNames added together.  A particular
                setting does not guarantee that much data can be held.

                If an application changes the limit while there are
                Notifications in the log, the oldest Notifications MUST be
                discarded to bring the log down to the new limit - thus the
                value of nlmConfigGlobalEntryLimit MUST take precedence over
                the values of nlmConfigGlobalAgeOut and nlmConfigLogEntryLimit,
                even if the Notification being discarded has been present for
                fewer minutes than the value of nlmConfigGlobalAgeOut, or if
                the named log has fewer entries than that specified in
                nlmConfigLogEntryLimit.

                A value of 0 means no limit.

                Please be aware that contention between multiple managers
                trying to set this object to different values MAY affect the
                reliability and completeness of data seen by each manager.
                The default value is 0."                      v"The number of minutes a Notification SHOULD be kept in a log
                before it is automatically removed.

                If an application changes the value of nlmConfigGlobalAgeOut,
                Notifications older than the new time MAY be discarded to meet the
                new time.

                A value of 0 means no age out.

                Please be aware that contention between multiple managers
                trying to set this object to different values MAY affect the
                reliability and completeness of data seen by each manager.
                The default value is 1440(24 hours)."                       %"A table of logging control entries."                       �"A logging control entry.  Depending on the entry's storage type
                entries may be supplied by the system or created and deleted by
                applications using nlmConfigLogEntryStatus."                      "The name of the log.

                An implementation may allow multiple named logs, up to some
                implementation-specific limit (which may be none).  A
                zero-length log name is reserved for creation and deletion by
                the managed system, and MUST be used as the default log name by
                systems that do not support named logs."                      �"A value of snmpNotifyFilterProfileName as used as an index
                into the snmpNotifyFilterTable in the SNMP Notification MIB,
                specifying the locally or remotely originated Notifications
                to be filtered out and not logged in this log.

                A zero-length value or a name that does not identify an
                existing entry in snmpNotifyFilterTable indicate no
                Notifications are to be logged in this log."                      �"The maximum number of notification entries that can be held in
                nlmLogTable for this named log.  A particular setting does not
                guarantee that that much data can be held.
                
                If an application changes the limit while there are
                Notifications in the log, the oldest Notifications are discarded
                to bring the log down to the new limit.
                A value of 0 indicates no limit.
                
                Please be aware that contention between multiple managers
                trying to set this object to different values MAY affect the
                reliability and completeness of data seen by each manager."                      W"Control to enable or disable the log without otherwise
                disturbing the log's entry.
                
                Please be aware that contention between multiple managers
                trying to set this object to different values MAY affect the
                reliability and completeness of data seen by each manager."                      �"The operational status of this log:
                
                  disabled  administratively disabled
                
                  operational    administratively enabled and working
                
                  noFilter  administratively enabled but either
                            nlmConfigLogFilterName is zero length
                            or does not name an existing entry in
                            snmpNotifyFilterTable"                       *"The storage type of this conceptual row."                      �"Control for creating and deleting entries.  Entries may be
                modified while active.
                
                For non-null-named logs, the managed system records the security
                credentials from the request that sets nlmConfigLogStatus
                to 'active' and uses that identity to apply access control to
                the objects in the Notification to decide if that Notification
                may be logged."                           �"The number of Notifications put into the nlmLogTable.  This
                counts a Notification once for each log entry, so a Notification
                put into multiple logs is counted multiple times."                      $"The number of log entries discarded to make room for a new entry
                due to lack of resources or the value of nlmConfigGlobalEntryLimit
                or nlmConfigLogEntryLimit.  This does not include entries discarded
                due to the value of nlmConfigGlobalAgeOut."                       1"A table of Notification log statistics entries."                       &"A Notification log statistics entry."                       4"The number of Notifications put in this named log."                      H"The number of log entries discarded from this named log to make
                room for a new entry due to lack of resources or the value of
                nlmConfigGlobalEntryLimit or nlmConfigLogEntryLimit.  This does not
                include entries discarded due to the value of
                nlmConfigGlobalAgeOut."                          �"A table of Notification log entries.
                
                It is an implementation-specific matter whether entries in this
                table are preserved across initializations of the management
                system.  In general one would expect that they are not.
                
                Note that keeping entries across initializations of the
                management system leads to some confusion with counters and
                TimeStamps, since both of those are based on sysUpTime, which
                resets on management initialization.  In this situation,
                counters apply only after the reset and nlmLogTime for entries
                made before the reset MUST be set to 0."                      p"A Notification log entry.
                
                Entries appear in this table when Notifications occur and pass
                filtering by nlmConfigLogFilterName and access control.  They are
                removed to make way for new entries due to lack of resources or
                the values of nlmConfigGlobalEntryLimit, nlmConfigGlobalAgeOut, or
                nlmConfigLogEntryLimit.
                
                If adding an entry would exceed nlmConfigGlobalEntryLimit or system
                resources in general, the oldest entry in any log SHOULD be removed
                to make room for the new one.
                
                If adding an entry would exceed nlmConfigLogEntryLimit the oldest
                entry in that log SHOULD be removed to make room for the new one.
                
                Before the managed system puts a locally-generated Notification
                into a non-null-named log it assures that the creator of the log
                has access to the information in the Notification.  If not it
                does not log that Notification in that log."                       �"A monotonically increasing integer for the sole purpose of
                indexing entries within the named log.  When it reaches the
                maximum value, an extremely unlikely event, the agent wraps the
                value back to 1."                       �"The value of sysUpTime when the entry was placed in the log. If
                the entry occurred before the most recent management system
                initialization this object value MUST be set to zero."                       �"The local date and time when the entry was logged, instantiated
                only by systems that have date and time capability."                      "The identification of the SNMP engine at which the Notification
                originated.
                
                If the log can contain Notifications from only one engine
                or the Trap is in SNMPv1 format, this object is a zero-length
                string."                      �"The transport service address of the SNMP engine from which the
                Notification was received, formatted according to the corresponding
                value of nlmLogEngineTDomain. This is used to identify the source
                of an SNMPv1 trap, since an nlmLogEngineId cannot be extracted
                from the SNMPv1 trap pdu.
                
                This object MUST always be instantiated, even if the log
                can contain Notifications from only one engine.
                
                Please be aware that the nlmLogEngineTAddress may not uniquely
                identify the SNMP engine from which the Notification was received.
                For example, if an SNMP engine uses DHCP or NAT to obtain
                ip addresses, the address it uses may be shared with other
                network devices, and hence will not uniquely identify the
                SNMP engine."                      �"Indicates the kind of transport service by which a Notification
                was received from an SNMP engine. nlmLogEngineTAddress contains
                the transport service address of the SNMP engine from which
                this Notification was received.
                
                Possible values for this object are presently found in the
                Transport Mappings for SNMPv2 document (RFC 1906 [8])."                       �"If the Notification was received in a protocol which has a
                contextEngineID element like SNMPv3, this object has that value.
                Otherwise its value is a zero-length string."                       �"The name of the SNMP MIB context from which the Notification came.
                For SNMPv1 Traps this is the community string from the Trap."                       \"The NOTIFICATION-TYPE object identifier of the Notification that
                occurred."                       ;"A table of variables to go with Notification log entries."                       �"A Notification log entry variable.
                
                Entries appear in this table when there are variables in
                the varbind list of a Notification in nlmLogTable."                       �"A monotonically increasing integer, starting at 1 for a given
                nlmLogIndex, for indexing variables within the logged
                Notification."                       #"The variable's object identifier."                       �"The type of the value.  One and only one of the value
                objects that follow must be instantiated, based on this type."                       3"The value when nlmLogVariableType is 'counter32'."                       4"The value when nlmLogVariableType is 'unsigned32'."                       3"The value when nlmLogVariableType is 'timeTicks'."                       3"The value when nlmLogVariableType is 'integer32'."                       5"The value when nlmLogVariableType is 'octetString'."                      $"The value when nlmLogVariableType is 'ipAddress'.
                Although this seems to be unfriendly for IPv6, we
                have to recognize that there are a number of older
                MIBs that do contain an IPv4 format address, known
                as IpAddress.
                
                IPv6 addresses are represented using TAddress or
                InetAddress, and so the underlying datatype is
                OCTET STRING, and their value would be stored in
                the nlmLogVariableOctetStringVal column."                       2"The value when nlmLogVariableType is 'objectId'."                       3"The value when nlmLogVariableType is 'counter64'."                       0"The value when nlmLogVariableType is 'opaque'."                               a"The compliance statement for entities which implement
                the Notification Log MIB."   �"Implementations may choose a limit and not allow it to be
                changed or may enforce an upper or lower bound on the
                limit." �"Implementations may choose a limit and not allow it to be
                changed or may enforce an upper or lower bound on the
                limit." :"Implementations may disallow the creation of named logs." �"This group is mandatory on systems that keep wall clock
                date and time and should not be implemented on systems that
                do not have a wall clock date."                 ,"Notification log configuration management."                 "Notification log statistics."                 "Notification log data."                 �"Conditionally mandatory notification log data.
                This group is mandatory on systems that keep wall
                clock date and time and should not be implemented
                on systems that do not have a wall clock date."                    