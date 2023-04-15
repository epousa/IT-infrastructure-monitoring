 �-- =================================================================
-- Description: object for SNMPv2 protocol(SNMPv2-MIB)
-- Reference:   This mib was extracted from RFC 3418
-- =================================================================
                                                                             �"The MIB module for SNMP entities.

             Copyright (C) The Internet Society (2002). This
             version of this MIB module is part of RFC 3418;
             see the RFC itself for full legal notices.
            "$"WG-EMail:   snmpv3@lists.tislabs.com
             Subscribe:  snmpv3-request@lists.tislabs.com

             Co-Chair:   Russ Mundy
                         Network Associates Laboratories
             postal:     15204 Omega Drive, Suite 300
                         Rockville, MD 20850-4601
                         USA
             EMail:      mundy@tislabs.com
             phone:      +1 301 947-7107

             Co-Chair:   David Harrington
                         Enterasys Networks
             postal:     35 Industrial Way
                         P. O. Box 5005
                         Rochester, NH 03866-5005
                         USA
             EMail:      dbh@enterasys.com
             phone:      +1 603 337-2614

             Editor:     Randy Presuhn
                         BMC Software, Inc.
             postal:     2141 North First Street
                         San Jose, CA 95131
                         USA
             EMail:      randy_presuhn@bmc.com
             phone:      +1 408 546-1006" "200210160000Z" "199511090000Z" "199304010000Z" K"This revision of this MIB module was published as
             RFC 3418." K"This revision of this MIB module was published as
             RFC 1907." Q"The initial revision of this MIB module was published
            as RFC 1450."                       �"The authoritative identification of the notification
            currently being sent.  This variable occurs as
            the second varbind in every SNMPv2-Trap-PDU and
            InformRequest-PDU."                      "The authoritative identification of the enterprise
            associated with the trap currently being sent.  When an
            SNMP proxy agent is mapping an RFC1157 Trap-PDU
            into a SNMPv2-Trap-PDU, this variable occurs as the
            last varbind."                           �"A coldStart trap signifies that the SNMP entity,
            supporting a notification originator application, is
            reinitializing itself and that its configuration may
            have been altered."                 �"A warmStart trap signifies that the SNMP entity,
            supporting a notification originator application,
            is reinitializing itself such that its configuration
            is unaltered."                l"An authenticationFailure trap signifies that the SNMP
             entity has received a protocol message that is not
             properly authenticated.  While all implementations
             of SNMP entities MAY be capable of generating this
             trap, the snmpEnableAuthenTraps object indicates
             whether this trap will be generated."                    �"An advisory lock used to allow several cooperating
            command generator applications to coordinate their
            use of the SNMP set operation.

            This object is used for coarse-grain coordination.
            To achieve fine-grain coordination, one or more similar
            objects might be defined within each MIB group, as
            appropriate."                               �"The compliance statement for SNMPv2 entities which
            implement the SNMPv2 MIB.

            This compliance statement is replaced by
            snmpBasicComplianceRev2."   h"This group is mandatory for SNMPv2 entities which
            support community-based authentication."             Z"The compliance statement for SNMP entities which
            implement this MIB module."   f"This group is mandatory for SNMP entities which
            support community-based authentication." �"This group is mandatory for an SNMP entity which
            supports command responder applications, and is
            able to reinitialize itself such that its
            configuration is unaltered."                 e"A collection of objects providing basic instrumentation
            and control of an SNMP entity."                 �"A collection of objects providing basic instrumentation
            of a SNMP entity which supports community-based
            authentication."                 �"A collection of objects which allow several cooperating
            command generator applications to coordinate their
            use of the set operation."                 X"The system group defines objects which are common to all
            managed systems."                 k"The basic notifications implemented by an SNMP entity
        supporting command responder applications."                     �"An additional notification for an SNMP entity supporting
     command responder applications, if it is able to reinitialize
     itself such that its configuration is unaltered."                     j"These objects are required for entities
            which support notification originator applications."                 V"A collection of objects from RFC 1213 made obsolete
            by this MIB module."                             �"A textual description of the entity.  This value should
            include the full name and version identification of
            the system's hardware type, software operating-system,
           and networking software."                      "The vendor's authoritative identification of the
            network management subsystem contained in the entity.
            This value is allocated within the SMI enterprises
            subtree (1.3.6.1.4.1) and provides an easy and
            unambiguous means for determining `what kind of box' is
            being managed.  For example, if vendor `Flintstones,
            Inc.' was assigned the subtree 1.3.6.1.4.1.424242,
            it could assign the identifier 1.3.6.1.4.1.424242.1.1
            to its `Fred Router'."                       �"The time (in hundredths of a second) since the
            network management portion of the system was last
            re-initialized."                       �"The textual identification of the contact person for
            this managed node, together with information on how
            to contact this person.  If no contact information is
            known, the value is the zero-length string."                       �"An administratively-assigned name for this managed
            node.  By convention, this is the node's fully-qualified
            domain name.  If the name is unknown, the value is
            the zero-length string."                       �"The physical location of this node (e.g., 'telephone
            closet, 3rd floor').  If the location is unknown, the
            value is the zero-length string."                      �"A value which indicates the set of services that this
            entity may potentially offer.  The value is a sum.
            This sum initially takes the value zero. Then, for
            each layer, L, in the range 1 through 7, that this node
            performs transactions for, 2 raised to (L - 1) is added
            to the sum.  For example, a node which performs only
            routing functions would have a value of 4 (2^(3-1)).
            In contrast, a node which is a host offering application
            services would have a value of 72 (2^(4-1) + 2^(7-1)).
            Note that in the context of the Internet suite of
            protocols, values should be calculated accordingly:

                 layer      functionality
                   1        physical (e.g., repeaters)
                   2        datalink/subnetwork (e.g., bridges)
                   3        internet (e.g., supports the IP)
                   4        end-to-end  (e.g., supports the TCP)
                   7        applications (e.g., supports the SMTP)

            For systems including OSI protocols, layers 5 and 6
            may also be counted."                       y"The value of sysUpTime at the time of the most recent
            change in state or value of any instance of sysORID."                      S"The (conceptual) table listing the capabilities of
            the local SNMP application acting as a command
            responder with respect to various MIB modules.
            SNMP entities having dynamically-configurable support
            of MIB modules will have a dynamically-varying number
            of conceptual rows."                       ."An entry (conceptual row) in the sysORTable."                       o"The auxiliary variable used for identifying instances
            of the columnar objects in the sysORTable."                       �"An authoritative identification of a capabilities
            statement with respect to various MIB modules supported
            by the local SNMP application acting as a command
            responder."                       m"A textual description of the capabilities identified
            by the corresponding instance of sysORID."                       \"The value of sysUpTime at the time this conceptual
            row was last instantiated."                           d"The total number of messages delivered to the SNMP
            entity from the transport service."                       �"The total number of SNMP messages which were delivered
            to the SNMP entity and were for an unsupported SNMP
            version."                      S"The total number of community-based SNMP messages (for
           example,  SNMPv1) delivered to the SNMP entity which
           used an SNMP community name not known to said entity.
           Also, implementations which authenticate community-based
           SNMP messages using check(s) in addition to matching
           the community name (for example, by also checking
           whether the message originated from a transport address
           allowed to use a specified community name) MAY include
           in this value the number of messages which failed the
           additional check(s).  It is strongly RECOMMENDED that

           the documentation for any security model which is used
           to authenticate community-based SNMP messages specify
           the precise conditions that contribute to this value."                      "The total number of community-based SNMP messages (for
           example, SNMPv1) delivered to the SNMP entity which
           represented an SNMP operation that was not allowed for
           the SNMP community named in the message.  The precise
           conditions under which this counter is incremented
           (if at all) depend on how the SNMP entity implements
           its access control mechanism and how its applications
           interact with that access control mechanism.  It is
           strongly RECOMMENDED that the documentation for any
           access control mechanism which is used to control access
           to and visibility of MIB instrumentation specify the
           precise conditions that contribute to this value."                       {"The total number of ASN.1 or BER errors encountered by
            the SNMP entity when decoding received SNMP messages."                      "Indicates whether the SNMP entity is permitted to
            generate authenticationFailure traps.  The value of this
            object overrides any configuration information; as such,
            it provides a means whereby all authenticationFailure
            traps may be disabled.

            Note that it is strongly recommended that this object
            be stored in non-volatile memory so that it remains
            constant across re-initializations of the network
            management system."                      8"The total number of Confirmed Class PDUs (such as
           GetRequest-PDUs, GetNextRequest-PDUs,
           GetBulkRequest-PDUs, SetRequest-PDUs, and
           InformRequest-PDUs) delivered to the SNMP entity which
           were silently dropped because the size of a reply
           containing an alternate Response Class PDU (such as a
           Response-PDU) with an empty variable-bindings field
           was greater than either a local constraint or the
           maximum message size associated with the originator of
           the request."                      �"The total number of Confirmed Class PDUs
            (such as GetRequest-PDUs, GetNextRequest-PDUs,
            GetBulkRequest-PDUs, SetRequest-PDUs, and
            InformRequest-PDUs) delivered to the SNMP entity which
            were silently dropped because the transmission of
            the (possibly translated) message to a proxy target
            failed in a manner (other than a time-out) such that
            no Response Class PDU (such as a Response-PDU) could
            be returned."                       �"The total number of SNMP Messages which were
            passed from the SNMP protocol entity to the
            transport service."                       �"The total number of SNMP PDUs which were
            delivered to the SNMP protocol entity and for
            which the value of the error-status field was
            `tooBig'."                       �"The total number of SNMP PDUs which were
            delivered to the SNMP protocol entity and for
            which the value of the error-status field was
            `noSuchName'."                       �"The total number of SNMP PDUs which were
            delivered to the SNMP protocol entity and for
            which the value of the error-status field was
            `badValue'."                      �"The total number valid SNMP PDUs which were delivered
            to the SNMP protocol entity and for which the value
            of the error-status field was `readOnly'.  It should
            be noted that it is a protocol error to generate an
            SNMP PDU which contains the value `readOnly' in the
            error-status field, as such this object is provided
            as a means of detecting incorrect implementations of
            the SNMP."                       �"The total number of SNMP PDUs which were delivered
            to the SNMP protocol entity and for which the value
            of the error-status field was `genErr'."                       �"The total number of MIB objects which have been
            retrieved successfully by the SNMP protocol entity
            as the result of receiving valid SNMP Get-Request
            and Get-Next PDUs."                       �"The total number of MIB objects which have been
            altered successfully by the SNMP protocol entity as
            the result of receiving valid SNMP Set-Request PDUs."                       �"The total number of SNMP Get-Request PDUs which
            have been accepted and processed by the SNMP
            protocol entity."                       y"The total number of SNMP Get-Next PDUs which have been
            accepted and processed by the SNMP protocol entity."                       �"The total number of SNMP Set-Request PDUs which
            have been accepted and processed by the SNMP protocol
            entity."                       �"The total number of SNMP Get-Response PDUs which
            have been accepted and processed by the SNMP protocol
            entity."                       u"The total number of SNMP Trap PDUs which have been
            accepted and processed by the SNMP protocol entity."                       �"The total number of SNMP PDUs which were generated
            by the SNMP protocol entity and for which the value
            of the error-status field was `tooBig.'"                       �"The total number of SNMP PDUs which were generated
            by the SNMP protocol entity and for which the value
            of the error-status was `noSuchName'."                       �"The total number of SNMP PDUs which were generated
            by the SNMP protocol entity and for which the value
            of the error-status field was `badValue'."                       �"The total number of SNMP PDUs which were generated
            by the SNMP protocol entity and for which the value
            of the error-status field was `genErr'."                       o"The total number of SNMP Get-Request PDUs which
            have been generated by the SNMP protocol entity."                       l"The total number of SNMP Get-Next PDUs which have
            been generated by the SNMP protocol entity."                       o"The total number of SNMP Set-Request PDUs which
            have been generated by the SNMP protocol entity."                       p"The total number of SNMP Get-Response PDUs which
            have been generated by the SNMP protocol entity."                       h"The total number of SNMP Trap PDUs which have
            been generated by the SNMP protocol entity."                          