 �-- =================================================================
-- Description: IP-MIB
-- Reference:   This mib was extracted from RFC4293
-- =================================================================
  3"The origin of the address.

            manual(2) indicates that the address was manually configured
            to a specified address, e.g., by user configuration.

            dhcp(4) indicates an address that was assigned to this
            system by a DHCP server.

            linklayer(5) indicates an address created by IPv6 stateless
            auto-configuration.

            random(6) indicates an address chosen by the system at
            random, e.g., an IPv4 address within 169.254/16, or an RFC
            3041 privacy address."              S"The origin of this prefix.

            manual(2) indicates a prefix that was manually configured.

            wellknown(3) indicates a well-known prefix, e.g., 169.254/16
            for IPv4 auto-configuration or fe80::/10 for IPv6 link-local
            addresses.  Well known prefixes may be assigned by IANA,
            the address registries, or by specification in a standards
            track RFC.

            dhcp(4) indicates a prefix that was assigned by a DHCP
            server.

            routeradv(5) indicates a prefix learned from a router
            advertisement.

            Note: while IpAddressOriginTC and IpAddressPrefixOriginTC
            are similar, they are not identical.  The first defines how
            an address was created, while the second defines how a
            prefix was found."             
"RFC 2462"$"The status of an address.  Most of the states correspond to
            states from the IPv6 Stateless Address Autoconfiguration
            protocol.

            The preferred(1) state indicates that this is a valid
            address that can appear as the destination or source address
            of a packet.

            The deprecated(2) state indicates that this is a valid but
            deprecated address that should no longer be used as a source
            address in new communications, but packets addressed to such
            an address are processed as expected.

            The invalid(3) state indicates that this isn't a valid
            address and it shouldn't appear as the destination or source
            address of a packet.

            The inaccessible(4) state indicates that the address is not
            accessible because the interface to which this address is
            assigned is not operational.

            The unknown(5) state indicates that the status cannot be
            determined for some reason.

            The tentative(6) state indicates that the uniqueness of the
            address on the link is being verified.  Addresses in this
            state should not be used for general communication and
            should only be used to determine the uniqueness of the
            address.

            The duplicate(7) state indicates the address has been
            determined to be non-unique on the link and so must not be
            used.

            The optimistic(8) state indicates the address is available
            for use, subject to restrictions, while its uniqueness on
            a link is being verified.

            In the absence of other information, an IPv4 address is
            always preferred(1)."               �"This data type is used to model IPv6 address
       interface identifiers.  This is a binary string
       of up to 8 octets in network byte-order."                                                                                                                                                            )"The MIB module for managing IP and ICMP implementations, but
            excluding their management of IP routes.

            Copyright (C) The Internet Society (2006).  This version of
            this MIB module is part of RFC 4293; see the RFC itself for
            full legal notices." �"Editor:
            Shawn A. Routhier
            Interworking Labs
            108 Whispering Pines Dr. Suite 235
            Scotts Valley, CA 95066
            USA
            EMail: <sar@iwl.com>" "200602020000Z" "199411010000Z" "199103310000Z""The IP version neutral revision with added IPv6 objects for
            ND, default routers, and router advertisements.  As well as
            being the successor to RFC 2011, this MIB is also the
            successor to RFCs 2465 and 2466.  Published as RFC 4293." i"A separate MIB module (IP-MIB) for IP and ICMP management
            objects.  Published as RFC 2011." k"The initial revision of this MIB module was part of MIB-II,
            which was published as RFC 1213."                       "The compliance statement for systems that implement IP -
             either IPv4 or IPv6.

            There are a number of INDEX objects that cannot be
            represented in the form of OBJECT clauses in SMIv2, but
            for which we have the following compliance requirements,
            expressed in OBJECT clause form in this description
            clause:
            -- OBJECT        ipSystemStatsIPVersion
            -- SYNTAX        InetVersion {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This MIB requires support for only IPv4 and IPv6
            --     versions.
            --
            -- OBJECT        ipIfStatsIPVersion
            -- SYNTAX        InetVersion {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This MIB requires support for only IPv4 and IPv6
            --     versions.
            --
            -- OBJECT        icmpStatsIPVersion
            -- SYNTAX        InetVersion {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This MIB requires support for only IPv4 and IPv6
            --     versions.
            --
            -- OBJECT        icmpMsgStatsIPVersion
            -- SYNTAX        InetVersion {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This MIB requires support for only IPv4 and IPv6
            --     versions.
            --
            -- OBJECT        ipAddressPrefixType
            -- SYNTAX        InetAddressType {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This MIB requires support for only global IPv4 and
            --     IPv6 address types.
            --
            -- OBJECT        ipAddressPrefixPrefix
            -- SYNTAX        InetAddress (Size(4 | 16))
            -- DESCRIPTION
            --     This MIB requires support for only global IPv4 and
            --     IPv6 addresses and so the size can be either 4 or
            --     16 bytes.
            --
            -- OBJECT        ipAddressAddrType
            -- SYNTAX        InetAddressType {ipv4(1), ipv6(2),
            --                                ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 address types.
            --
            -- OBJECT        ipAddressAddr
            -- SYNTAX        InetAddress (Size(4 | 8 | 16 | 20))
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 addresses and so the size
            --     can be 4, 8, 16, or 20 bytes.
            --
            -- OBJECT        ipNetToPhysicalNetAddressType
            -- SYNTAX        InetAddressType {ipv4(1), ipv6(2),
            --                                ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 address types.
            --
            -- OBJECT        ipNetToPhysicalNetAddress
            -- SYNTAX        InetAddress (Size(4 | 8 | 16 | 20))
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 addresses and so the size
            --     can be 4, 8, 16, or 20 bytes.
            --
            -- OBJECT        ipDefaultRouterAddressType
            -- SYNTAX        InetAddressType {ipv4(1), ipv6(2),
            --                                ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 address types.
            --
            -- OBJECT        ipDefaultRouterAddress
            -- SYNTAX        InetAddress (Size(4 | 8 | 16 | 20))
            -- DESCRIPTION
            --     This MIB requires support for only global and
            --     non-global IPv4 and IPv6 addresses and so the size
            --     can be 4, 8, 16, or 20 bytes."   �"This group is mandatory for systems that have an aggregate
            bandwidth of greater than 20MB.  Including this group does
            not allow an entity to neglect the 32 bit versions of these
            objects." �"This group is mandatory for systems that have an aggregate
            bandwidth of greater than 650MB.  Including this group
            does not allow an entity to neglect the 32 bit versions of
            these objects." )"This group is optional for all systems.""This group is mandatory for systems that include the
            ipIfStatsGroup and include links with bandwidths of greater
            than 20MB.  Including this group does not allow an entity to
            neglect the 32 bit versions of these objects.""This group is mandatory for systems that include the
            ipIfStatsGroup and include links with bandwidths of greater
            than 650MB.  Including this group does not allow an entity
            to neglect the 32 bit versions of these objects." :"This group is mandatory for all systems supporting IPv4." :"This group is mandatory for all systems supporting IPv4." :"This group is mandatory for all systems supporting IPv4." �"This group is mandatory for all systems supporting IPv4 and
            that have an aggregate bandwidth of greater than 650MB.
            Including this group does not allow an entity to neglect the
            32 bit versions of these objects." h"This group is mandatory for all systems supporting IPv4 and
            including the ipIfStatsGroup." �"This group is mandatory for all systems supporting IPv4 and
            including the ipIfStatsHCPacketGroup.  Including this group
            does not allow an entity to neglect the 32 bit versions of
            these objects." :"This group is mandatory for all systems supporting IPv6." :"This group is mandatory for all systems supporting IPv6." :"This group is mandatory for all systems supporting IPv6." :"This group is mandatory for all systems supporting IPv6." /"This group is mandatory for all IPv6 routers." ("This group is optional for all agents." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." �"An agent is not required to provide write access to this
            object.  However, if an agent provides write access to any
            of the other objects in the ipAddressGroup, it SHOULD
            provide write access to this object as well." Y"An agent is not required to provide write or create access
            to this object." Y"An agent is not required to provide write or create access
            to this object." Y"An agent is not required to provide write or create access
            to this object." Y"An agent is not required to provide write or create access
            to this object.""An agent is not required to provide write or create access
            to this object.
            If an agent allows this object to be written or created, it
            is not required to allow this object to be set to readOnly,
            permanent, or nonVolatile." Y"An agent is not required to provide write or create access
            to this object." Y"An agent is not required to provide write or create access
            to this object.""An agent is not required to provide write access to this
            object.  However, if an agent provides write access to
            any of the other objects in the ipv6RouterAdvertGroup, it
            SHOULD provide write access to this object as well." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." O"An agent is not required to provide write access to this
            object." Y"An agent is not required to provide write or create access
            to this object."             �"The compliance statement for systems that implement only
            IPv4.  For version-independence, this compliance statement
            is deprecated in favor of ipMIBCompliance2."                   X"The group of IPv4-specific objects for basic management of
            IPv4 entities."                 Z"The group of IPv4-specific objects for basic management of
            IPv4 interfaces."                 Y"The IPv6 group of objects providing for basic management of
            IPv6 entities."                 Z"The group of IPv6-specific objects for basic management of
            IPv6 interfaces."                �"The last change objects associated with this MIB.  These
            objects are optional for all agents.  They SHOULD be
            implemented on agents where it is possible to determine the
            proper values.  Where it is not possible to determine the
            proper values, for example when the tables are split amongst
            several sub-agents using AgentX, the agent MUST NOT
            implement these objects to return an incorrect or static
            value."                 "IP system wide statistics."                 #"IPv4 only system wide statistics."                 q"IP system wide statistics for systems that may overflow the
            standard octet counters within 1 hour."                 r"IP system wide statistics for systems that may overflow the
            standard packet counters within 1 hour."                 y"IPv4 only system wide statistics for systems that may
            overflow the standard packet counters within 1 hour."                 "IP per-interface statistics."                 %"IPv4 only per-interface statistics."                 �"IP per-interfaces statistics for systems that include
            interfaces that may overflow the standard octet
            counters within 1 hour."                 �"IP per-interfaces statistics for systems that include
            interfaces that may overflow the standard packet counters
            within 1 hour."                 �"IPv4 only per-interface statistics for systems that include
            interfaces that may overflow the standard packet counters
            within 1 hour."                 g"The group of objects for providing information about address
            prefixes used by this node."                 w"The group of objects for providing information about the
            addresses relevant to this entity's interfaces."                 �"The group of objects for providing information about the
            mappings of network address to physical address known to
            this node."                 5"The group of objects for managing IPv6 scope zones."                 g"The group of objects for providing information about default
            routers known to this node."                 ["The group of objects for controlling information advertised
            by IPv6 routers."                 1"The group of objects providing ICMP statistics."                 �"The ip group of objects providing for basic management of IP
            entities, exclusive of the management of IP routes.
            As part of the version independence, this group has been
            deprecated.  "                 �"The icmp group of objects providing ICMP statistics.

            As part of the version independence, this group has been
            deprecated.  "                    v"The indication of whether this entity is acting as an IPv4
            router in respect to the forwarding of datagrams received
            by, but not addressed to, this entity.  IPv4 routers forward
            datagrams.  IPv4 hosts do not (except those source-routed
            via the host).

            When this object is written, the entity should save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system.
            Note: a stronger requirement is not used because this object
            was previously defined."                      &"The default value inserted into the Time-To-Live field of
            the IPv4 header of datagrams originated at this entity,
            whenever a TTL value is not supplied by the transport layer
            protocol.

            When this object is written, the entity should save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system.
            Note: a stronger requirement is not used because this object
            was previously defined."                       �"The maximum number of seconds that received fragments are
            held while they are awaiting reassembly at this entity."                      "The indication of whether this entity is acting as an IPv6
            router on any interface in respect to the forwarding of
            datagrams received by, but not addressed to, this entity.
            IPv6 routers forward datagrams.  IPv6 hosts do not (except
            those source-routed via the host).

            When this object is written, the entity SHOULD save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system."                      �"The default value inserted into the Hop Limit field of the
            IPv6 header of datagrams originated at this entity whenever
            a Hop Limit value is not supplied by the transport layer
            protocol.

            When this object is written, the entity SHOULD save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system." "RFC 2461 Section 6.3.2"                    �"The value of sysUpTime on the most recent occasion at which
            a row in the ipv4InterfaceTable was added or deleted, or
            when an ipv4InterfaceReasmMaxSize or an
            ipv4InterfaceEnableStatus object was modified.

            If new objects are added to the ipv4InterfaceTable that
            require the ipv4InterfaceTableLastChange to be updated when
            they are modified, they must specify that requirement in
            their description clause."                       L"The table containing per-interface IPv4-specific
            information."                       V"An entry containing IPv4-specific information for a specific
            interface."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       �"The size of the largest IPv4 datagram that this entity can
            re-assemble from incoming IPv4 fragmented datagrams received
            on this interface."                      2"The indication of whether IPv4 is enabled (up) or disabled
            (down) on this interface.  This object does not affect the
            state of the interface itself, only its connection to an
            IPv4 stack.  The IF-MIB should be used to control the state
            of the interface."                       �"The time between retransmissions of ARP requests to a
            neighbor when resolving the address or when probing the
            reachability of a neighbor." 
"RFC 1122"                    s"The value of sysUpTime on the most recent occasion at which
            a row in the ipv6InterfaceTable was added or deleted or when
            an ipv6InterfaceReasmMaxSize, ipv6InterfaceIdentifier,
            ipv6InterfaceEnableStatus, ipv6InterfaceReachableTime,
            ipv6InterfaceRetransmitTime, or ipv6InterfaceForwarding
            object was modified.

            If new objects are added to the ipv6InterfaceTable that
            require the ipv6InterfaceTableLastChange to be updated when
            they are modified, they must specify that requirement in
            their description clause."                       L"The table containing per-interface IPv6-specific
            information."                       S"An entry containing IPv6-specific information for a given
            interface."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       �"The size of the largest IPv6 datagram that this entity can
            re-assemble from incoming IPv6 fragmented datagrams received
            on this interface."                      �"The Interface Identifier for this interface.  The Interface
            Identifier is combined with an address prefix to form an
            interface address.

            By default, the Interface Identifier is auto-configured
            according to the rules of the link type to which this
            interface is attached.

            A zero length identifier may be used where appropriate.  One
            possible example is a loopback interface."                      	"The indication of whether IPv6 is enabled (up) or disabled
            (down) on this interface.  This object does not affect the
            state of the interface itself, only its connection to an
            IPv6 stack.  The IF-MIB should be used to control the state
            of the interface.

            When this object is written, the entity SHOULD save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system."                       g"The time a neighbor is considered reachable after receiving
            a reachability confirmation." "RFC 2461, Section 6.3.2"                     �"The time between retransmissions of Neighbor Solicitation
            messages to a neighbor when resolving the address or when
            probing the reachability of a neighbor." "RFC 2461, Section 6.3.2"                    �"The indication of whether this entity is acting as an IPv6
            router on this interface with respect to the forwarding of
            datagrams received by, but not addressed to, this entity.
            IPv6 routers forward datagrams.  IPv6 hosts do not (except
            those source-routed via the host).

            This object is constrained by ipv6IpForwarding and is
            ignored if ipv6IpForwarding is set to notForwarding.  Those
            systems that do not provide per-interface control of the
            forwarding function should set this object to forwarding for
            all interfaces and allow the ipv6IpForwarding object to
            control the forwarding capability.

            When this object is written, the entity SHOULD save the
            change to non-volatile storage and restore the object from
            non-volatile storage upon re-initialization of the system."                          �"The table containing system wide, IP version specific
            traffic statistics.  This table and the ipIfStatsTable
            contain similar objects whose difference is in their
            granularity.  Where this table contains system wide traffic
            statistics, the ipIfStatsTable contains the same statistics
            but counted on a per-interface basis."                       ]"A statistics entry containing system-wide objects for a
            particular IP version."                       "The IP version of this row."                      N"The total number of input IP datagrams received, including
            those received in error.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of input IP datagrams received, including
            those received in error.  This object counts the same
            datagrams as ipSystemStatsInReceives, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets received in input IP datagrams,
            including those received in error.  Octets from datagrams
            counted in ipSystemStatsInReceives MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets received in input IP datagrams,
            including those received in error.  This object counts the
            same octets as ipSystemStatsInOctets, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of input IP datagrams discarded due to errors in
            their IP headers, including version number mismatch, other
            format errors, hop count exceeded, errors discovered in
            processing their IP options, etc.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      l"The number of input IP datagrams discarded because no route
            could be found to transmit them to their destination.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of input IP datagrams discarded because the IP
            address in their IP header's destination field was not a
            valid address to be received at this entity.  This count
            includes invalid addresses (e.g., ::0).  For entities
            that are not IP routers and therefore do not forward
            datagrams, this counter includes datagrams discarded
            because the destination address was not a local address.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of locally-addressed IP datagrams received
            successfully but discarded because of an unknown or
            unsupported protocol.

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      Z"The number of input IP datagrams discarded because the
            datagram frame didn't carry enough data.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      -"The number of input datagrams for which this entity was not
            their final IP destination and for which this entity
            attempted to find a route to forward them to that final
            destination.  In entities that do not act as IP routers,
            this counter will include only those datagrams that were
            Source-Routed via this entity, and the Source-Route
            processing was successful.

            When tracking interface statistics, the counter of the
            incoming interface is incremented for each datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      ;"The number of input datagrams for which this entity was not
            their final IP destination and for which this entity
            attempted to find a route to forward them to that final
            destination.  This object counts the same packets as
            ipSystemStatsInForwDatagrams, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      V"The number of IP fragments received that needed to be
            reassembled at this interface.

            When tracking interface statistics, the counter of the
            interface to which these fragments were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the fragments.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      )"The number of IP datagrams successfully reassembled.

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      t"The number of failures detected by the IP re-assembly
            algorithm (for whatever reason: timed out, errors, etc.).
            Note that this is not necessarily a count of discarded IP
            fragments since some algorithms (notably the algorithm in
            RFC 815) can lose track of the number of fragments by
            combining them as they are received.

            When tracking interface statistics, the counter of the
            interface to which these fragments were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the fragments.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      ""The number of input IP datagrams for which no problems were
            encountered to prevent their continued processing, but
            were discarded (e.g., for lack of buffer space).  Note that
            this counter does not include any datagrams discarded while
            awaiting re-assembly.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      ]"The total number of datagrams successfully delivered to IP
            user-protocols (including ICMP).

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of datagrams successfully delivered to IP
            user-protocols (including ICMP).  This object counts the
            same packets as ipSystemStatsInDelivers, but allows for
            larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of IP datagrams that local IP user-
            protocols (including ICMP) supplied to IP in requests for
            transmission.  Note that this counter does not include any
            datagrams counted in ipSystemStatsOutForwDatagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of IP datagrams that local IP user-
            protocols (including ICMP) supplied to IP in requests for
            transmission.  This object counts the same packets as
            ipSystemStatsOutRequests, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of locally generated IP datagrams discarded
            because no route could be found to transmit them to their
            destination.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      *"The number of datagrams for which this entity was not their
            final IP destination and for which it was successful in
            finding a path to their final destination.  In entities
            that do not act as IP routers, this counter will include
            only those datagrams that were Source-Routed via this
            entity, and the Source-Route processing was successful.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            forwarded datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      %"The number of datagrams for which this entity was not their
            final IP destination and for which it was successful in
            finding a path to their final destination.  This object
            counts the same packets as ipSystemStatsOutForwDatagrams,
            but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      y"The number of output IP datagrams for which no problem was
            encountered to prevent their transmission to their
            destination, but were discarded (e.g., for lack of
            buffer space).  Note that this counter would include
            datagrams counted in ipSystemStatsOutForwDatagrams if any
            such datagrams met this (discretionary) discard criterion.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP datagrams that would require fragmentation
            in order to be transmitted.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP datagrams that have been successfully
            fragmented.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP datagrams that have been discarded because
            they needed to be fragmented but could not be.  This
            includes IPv4 packets that have the DF bit set and IPv6
            packets that are being forwarded and exceed the outgoing
            link MTU.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for an unsuccessfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      "The number of output datagram fragments that have been
            generated as a result of IP fragmentation.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of IP datagrams that this entity supplied
            to the lower layers for transmission.  This includes
            datagrams generated locally and those forwarded by this
            entity.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of IP datagrams that this entity supplied
            to the lower layers for transmission.  This object counts
            the same datagrams as ipSystemStatsOutTransmits, but allows
            for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets in IP datagrams delivered to the
            lower layers for transmission.  Octets from datagrams
            counted in ipSystemStatsOutTransmits MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets in IP datagrams delivered to the
            lower layers for transmission.  This objects counts the same
            octets as ipSystemStatsOutOctets, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      "The number of IP multicast datagrams received.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP multicast datagrams received.  This object
            counts the same datagrams as ipSystemStatsInMcastPkts but
            allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets received in IP multicast
            datagrams.  Octets from datagrams counted in
            ipSystemStatsInMcastPkts MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets received in IP multicast
            datagrams.  This object counts the same octets as
            ipSystemStatsInMcastOctets, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      "The number of IP multicast datagrams transmitted.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP multicast datagrams transmitted.  This
            object counts the same datagrams as
            ipSystemStatsOutMcastPkts, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets transmitted in IP multicast
            datagrams.  Octets from datagrams counted in
            ipSystemStatsOutMcastPkts MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The total number of octets transmitted in IP multicast
            datagrams.  This object counts the same octets as
            ipSystemStatsOutMcastOctets, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      "The number of IP broadcast datagrams received.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP broadcast datagrams received.  This object
            counts the same datagrams as ipSystemStatsInBcastPkts but
            allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      "The number of IP broadcast datagrams transmitted.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      �"The number of IP broadcast datagrams transmitted.  This
            object counts the same datagrams as
            ipSystemStatsOutBcastPkts, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipSystemStatsDiscontinuityTime."                      Y"The value of sysUpTime on the most recent occasion at which
            any one or more of this entry's counters suffered a
            discontinuity.

            If no such discontinuities have occurred since the last re-
            initialization of the local management subsystem, then this
            object contains a zero value."                       �"The minimum reasonable polling interval for this entry.
            This object provides an indication of the minimum amount of
            time required to update the counters in this entry."                      q"The value of sysUpTime on the most recent occasion at which
            a row in the ipIfStatsTable was added or deleted.

            If new objects are added to the ipIfStatsTable that require
            the ipIfStatsTableLastChange to be updated when they are
            modified, they must specify that requirement in their
            description clause."                      p"The table containing per-interface traffic statistics.  This
            table and the ipSystemStatsTable contain similar objects
            whose difference is in their granularity.  Where this table
            contains per-interface statistics, the ipSystemStatsTable
            contains the same statistics, but counted on a system wide
            basis."                       m"An interface statistics entry containing objects for a
            particular interface and version of IP."                       "The IP version of this row."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                      J"The total number of input IP datagrams received, including
            those received in error.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of input IP datagrams received, including
            those received in error.  This object counts the same
            datagrams as ipIfStatsInReceives, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets received in input IP datagrams,
            including those received in error.  Octets from datagrams
            counted in ipIfStatsInReceives MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets received in input IP datagrams,
            including those received in error.  This object counts the
            same octets as ipIfStatsInOctets, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of input IP datagrams discarded due to errors in
            their IP headers, including version number mismatch, other
            format errors, hop count exceeded, errors discovered in
            processing their IP options, etc.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      h"The number of input IP datagrams discarded because no route
            could be found to transmit them to their destination.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of input IP datagrams discarded because the IP
            address in their IP header's destination field was not a
            valid address to be received at this entity.  This count
            includes invalid addresses (e.g., ::0).  For entities that
            are not IP routers and therefore do not forward datagrams,
            this counter includes datagrams discarded because the
            destination address was not a local address.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of locally-addressed IP datagrams received
            successfully but discarded because of an unknown or
            unsupported protocol.

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      V"The number of input IP datagrams discarded because the
            datagram frame didn't carry enough data.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      )"The number of input datagrams for which this entity was not
            their final IP destination and for which this entity
            attempted to find a route to forward them to that final
            destination.  In entities that do not act as IP routers,
            this counter will include only those datagrams that were
            Source-Routed via this entity, and the Source-Route
            processing was successful.

            When tracking interface statistics, the counter of the
            incoming interface is incremented for each datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      3"The number of input datagrams for which this entity was not
            their final IP destination and for which this entity
            attempted to find a route to forward them to that final
            destination.  This object counts the same packets as
            ipIfStatsInForwDatagrams, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      R"The number of IP fragments received that needed to be
            reassembled at this interface.

            When tracking interface statistics, the counter of the
            interface to which these fragments were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the fragments.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      %"The number of IP datagrams successfully reassembled.

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      p"The number of failures detected by the IP re-assembly
            algorithm (for whatever reason: timed out, errors, etc.).
            Note that this is not necessarily a count of discarded IP
            fragments since some algorithms (notably the algorithm in
            RFC 815) can lose track of the number of fragments by
            combining them as they are received.

            When tracking interface statistics, the counter of the
            interface to which these fragments were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the fragments.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of input IP datagrams for which no problems were
            encountered to prevent their continued processing, but
            were discarded (e.g., for lack of buffer space).  Note that
            this counter does not include any datagrams discarded while
            awaiting re-assembly.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      Y"The total number of datagrams successfully delivered to IP
            user-protocols (including ICMP).

            When tracking interface statistics, the counter of the
            interface to which these datagrams were addressed is
            incremented.  This interface might not be the same as the
            input interface for some of the datagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of datagrams successfully delivered to IP
            user-protocols (including ICMP).  This object counts the
            same packets as ipIfStatsInDelivers, but allows for larger
            values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of IP datagrams that local IP user-
            protocols (including ICMP) supplied to IP in requests for
            transmission.  Note that this counter does not include any
            datagrams counted in ipIfStatsOutForwDatagrams.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of IP datagrams that local IP user-
            protocols (including ICMP) supplied to IP in requests for
            transmission.  This object counts the same packets as
            ipIfStatsOutRequests, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      &"The number of datagrams for which this entity was not their
            final IP destination and for which it was successful in
            finding a path to their final destination.  In entities
            that do not act as IP routers, this counter will include
            only those datagrams that were Source-Routed via this
            entity, and the Source-Route processing was successful.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            forwarded datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of datagrams for which this entity was not their
            final IP destination and for which it was successful in
            finding a path to their final destination.  This object
            counts the same packets as ipIfStatsOutForwDatagrams, but
            allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      q"The number of output IP datagrams for which no problem was
            encountered to prevent their transmission to their
            destination, but were discarded (e.g., for lack of
            buffer space).  Note that this counter would include
            datagrams counted in ipIfStatsOutForwDatagrams if any such
            datagrams met this (discretionary) discard criterion.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP datagrams that would require fragmentation
            in order to be transmitted.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP datagrams that have been successfully
            fragmented.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP datagrams that have been discarded because
            they needed to be fragmented but could not be.  This
            includes IPv4 packets that have the DF bit set and IPv6
            packets that are being forwarded and exceed the outgoing
            link MTU.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for an unsuccessfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of output datagram fragments that have been
            generated as a result of IP fragmentation.

            When tracking interface statistics, the counter of the
            outgoing interface is incremented for a successfully
            fragmented datagram.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of IP datagrams that this entity supplied
            to the lower layers for transmission.  This includes
            datagrams generated locally and those forwarded by this
            entity.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of IP datagrams that this entity supplied
            to the lower layers for transmission.  This object counts
            the same datagrams as ipIfStatsOutTransmits, but allows for
            larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets in IP datagrams delivered to the
            lower layers for transmission.  Octets from datagrams
            counted in ipIfStatsOutTransmits MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets in IP datagrams delivered to the
            lower layers for transmission.  This objects counts the same
            octets as ipIfStatsOutOctets, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of IP multicast datagrams received.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP multicast datagrams received.  This object
            counts the same datagrams as ipIfStatsInMcastPkts, but
            allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets received in IP multicast
            datagrams.  Octets from datagrams counted in
            ipIfStatsInMcastPkts MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets received in IP multicast
            datagrams.  This object counts the same octets as
            ipIfStatsInMcastOctets, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of IP multicast datagrams transmitted.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP multicast datagrams transmitted.  This
            object counts the same datagrams as ipIfStatsOutMcastPkts,
            but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets transmitted in IP multicast
            datagrams.  Octets from datagrams counted in
            ipIfStatsOutMcastPkts MUST be counted here.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The total number of octets transmitted in IP multicast
            datagrams.  This object counts the same octets as
            ipIfStatsOutMcastOctets, but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of IP broadcast datagrams received.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP broadcast datagrams received.  This object
            counts the same datagrams as ipIfStatsInBcastPkts, but
            allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      "The number of IP broadcast datagrams transmitted.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      �"The number of IP broadcast datagrams transmitted.  This
            object counts the same datagrams as ipIfStatsOutBcastPkts,
            but allows for larger values.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            ipIfStatsDiscontinuityTime."                      Y"The value of sysUpTime on the most recent occasion at which
            any one or more of this entry's counters suffered a
            discontinuity.

            If no such discontinuities have occurred since the last re-
            initialization of the local management subsystem, then this
            object contains a zero value."                       �"The minimum reasonable polling interval for this entry.
            This object provides an indication of the minimum amount of
            time required to update the counters in this entry."                      �"This table allows the user to determine the source of an IP
            address or set of IP addresses, and allows other tables to
            share the information via pointer rather than by copying.

            For example, when the node configures both a unicast and
            anycast address for a prefix, the ipAddressPrefix objects
            for those addresses will point to a single row in this
            table.

            This table primarily provides support for IPv6 prefixes, and
            several of the objects are less meaningful for IPv4.  The
            table continues to allow IPv4 addresses to allow future
            flexibility.  In order to promote a common configuration,
            this document includes suggestions for default values for
            IPv4 prefixes.  Each of these values may be overridden if an
            object is meaningful to the node.

            All prefixes used by this entity should be included in this
            table independent of how the entity learned the prefix.
            (This table isn't limited to prefixes learned from router
            advertisements.)"                       '"An entry in the ipAddressPrefixTable."                      "The index value that uniquely identifies the interface on
            which this prefix is configured.  The interface identified
            by a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       &"The address type of ipAddressPrefix."                      A"The address prefix.  The address type of this object is
            specified in ipAddressPrefixType.  The length of this object
            is the standard length for objects of that type (4 or 16
            bytes).  Any bits after ipAddressPrefixLength must be zero.

            Implementors need to be aware that, if the size of
            ipAddressPrefixPrefix exceeds 114 octets, then OIDS of
            instances of columns in this row will have more than 128
            sub-identifiers and cannot be accessed using SNMPv1,
            SNMPv2c, or SNMPv3."                       �"The prefix length associated with this prefix.

            The value 0 has no special meaning for this object.  It
            simply refers to address '::/0'."                       "The origin of this prefix."                       �"This object has the value 'true(1)', if this prefix can be
            used for on-link determination; otherwise, the value is
            'false(2)'.

            The default for IPv4 prefixes is 'true(1)'." Q"For IPv6 RFC 2461, especially sections 2 and 4.6.2 and
               RFC 2462"                    u"Autonomous address configuration flag.  When true(1),
            indicates that this prefix can be used for autonomous
            address configuration (i.e., can be used to form a local
            interface address).  If false(2), it is not used to auto-
            configure a local interface address.

            The default for IPv4 prefixes is 'false(2)'." Q"For IPv6 RFC 2461, especially sections 2 and 4.6.2 and
               RFC 2462"                    �"The remaining length of time, in seconds, that this prefix
            will continue to be preferred, i.e., time until deprecation.

            A value of 4,294,967,295 represents infinity.

            The address generated from a deprecated prefix should no
            longer be used as a source address in new communications,
            but packets received on such an interface are processed as
            expected.

            The default for IPv4 prefixes is 4,294,967,295 (infinity)." Q"For IPv6 RFC 2461, especially sections 2 and 4.6.2 and
               RFC 2462"                    �"The remaining length of time, in seconds, that this prefix
            will continue to be valid, i.e., time until invalidation.  A
            value of 4,294,967,295 represents infinity.

            The address generated from an invalidated prefix should not
            appear as the destination or source address of a packet.

            The default for IPv4 prefixes is 4,294,967,295 (infinity)." Q"For IPv6 RFC 2461, especially sections 2 and 4.6.2 and
               RFC 2462"                    �"An advisory lock used to allow cooperating SNMP managers to
            coordinate their use of the set operation in creating or
            modifying rows within this table.

            In order to use this lock to coordinate the use of set
            operations, managers should first retrieve
            ipAddressTableSpinLock.  They should then determine the
            appropriate row to create or modify.  Finally, they should
            issue the appropriate set command, including the retrieved
            value of ipAddressSpinLock.  If another manager has altered
            the table in the meantime, then the value of
            ipAddressSpinLock will have changed, and the creation will
            fail as it will be specifying an incorrect value for
            ipAddressSpinLock.  It is suggested, but not required, that
            the ipAddressSpinLock be the first var bind for each set of
            objects representing a 'row' in a PDU."                      J"This table contains addressing information relevant to the
            entity's interfaces.

            This table does not contain multicast address information.
            Tables for such information should be contained in multicast
            specific MIBs, such as RFC 3019.

            While this table is writable, the user will note that
            several objects, such as ipAddressOrigin, are not.  The
            intention in allowing a user to write to this table is to
            allow them to add or remove any entry that isn't
            permanent.  The user should be allowed to modify objects
            and entries when that would not cause inconsistencies
            within the table.  Allowing write access to objects, such
            as ipAddressOrigin, could allow a user to insert an entry
            and then label it incorrectly.

            Note well: When including IPv6 link-local addresses in this
            table, the entry must use an InetAddressType of 'ipv6z' in
            order to differentiate between the possible interfaces."                       0"An address mapping for a particular interface."                       $"The address type of ipAddressAddr."                      �"The IP address to which this entry's addressing information
            pertains.  The address type of this object is specified in
            ipAddressAddrType.

            Implementors need to be aware that if the size of
            ipAddressAddr exceeds 116 octets, then OIDS of instances of
            columns in this row will have more than 128 sub-identifiers
            and cannot be accessed using SNMPv1, SNMPv2c, or SNMPv3."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       e"The type of address.  broadcast(3) is not a valid value for
            IPv6 addresses (RFC 3513)."                       "A pointer to the row in the prefix table to which this
            address belongs.  May be { 0 0 } if there is no such row."                       "The origin of the address."                       �"The status of the address, describing if the address can be
            used for communication.

            In the absence of other information, an IPv4 address is
            always preferred(1)."                       �"The value of sysUpTime at the time this entry was created.
            If this entry was created prior to the last re-
            initialization of the local network management subsystem,
            then this object contains a zero value."                       �"The value of sysUpTime at the time this entry was last
            updated.  If this entry was updated prior to the last re-
            initialization of the local network management subsystem,
            then this object contains a zero value."                      �"The status of this conceptual row.

            The RowStatus TC requires that this DESCRIPTION clause
            states under which circumstances other objects in this row
            can be modified.  The value of this object has no effect on
            whether other objects in this conceptual row can be
            modified.

            A conceptual row can not be made active until the
            ipAddressIfIndex has been set to a valid index."                       �"The storage type for this conceptual row.  If this object
            has a value of 'permanent', then no other objects are
            required to be able to be modified."                      �"The IP Address Translation table used for mapping from IP
            addresses to physical addresses.

            The Address Translation tables contain the IP address to
            'physical' address equivalences.  Some interfaces do not use
            translation tables for determining address equivalences
            (e.g., DDN-X.25 has an algorithmic method); if all
            interfaces are of this type, then the Address Translation
            table is empty, i.e., has zero entries.

            While many protocols may be used to populate this table, ARP
            and Neighbor Discovery are the most likely
            options." "RFC 826 and RFC 2461"                     T"Each entry contains one IP address to `physical' address
            equivalence."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       ("The type of ipNetToPhysicalNetAddress."                      �"The IP Address corresponding to the media-dependent
            `physical' address.  The address type of this object is
            specified in ipNetToPhysicalAddressType.

            Implementors need to be aware that if the size of
            ipNetToPhysicalNetAddress exceeds 115 octets, then OIDS of
            instances of columns in this row will have more than 128
            sub-identifiers and cannot be accessed using SNMPv1,
            SNMPv2c, or SNMPv3."                       �"The media-dependent `physical' address.

            As the entries in this table are typically not persistent
            when this object is written the entity SHOULD NOT save the
            change to non-volatile storage."                       �"The value of sysUpTime at the time this entry was last
            updated.  If this entry was updated prior to the last re-
            initialization of the local network management subsystem,
            then this object contains a zero value."                      "The type of mapping.

            Setting this object to the value invalid(2) has the effect
            of invalidating the corresponding entry in the
            ipNetToPhysicalTable.  That is, it effectively dis-
            associates the interface identified with said entry from the
            mapping identified with said entry.  It is an
            implementation-specific matter as to whether the agent
            removes an invalidated entry from the table.  Accordingly,
            management stations must be prepared to receive tabular
            information from agents that corresponds to entries not
            currently in use.  Proper interpretation of such entries
            requires examination of the relevant ipNetToPhysicalType
            object.

            The 'dynamic(3)' type indicates that the IP address to
            physical addresses mapping has been dynamically resolved
            using e.g., IPv4 ARP or the IPv6 Neighbor Discovery
            protocol.

            The 'static(4)' type indicates that the mapping has been
            statically configured.  Both of these refer to entries that
            provide mappings for other entities addresses.

            The 'local(5)' type indicates that the mapping is provided
            for an entity's own interface address.

            As the entries in this table are typically not persistent
            when this object is written the entity SHOULD NOT save the
            change to non-volatile storage."                       �"The Neighbor Unreachability Detection state for the
            interface when the address mapping in this entry is used.
            If Neighbor Unreachability Detection is not in use (e.g. for
            IPv4), this object is always unknown(6)." 
"RFC 2461"                    �"The status of this conceptual row.

            The RowStatus TC requires that this DESCRIPTION clause
            states under which circumstances other objects in this row
            can be modified.  The value of this object has no effect on
            whether other objects in this conceptual row can be
            modified.

            A conceptual row can not be made active until the
            ipNetToPhysicalPhysAddress object has been set.

            Note that if the ipNetToPhysicalType is set to 'invalid',
            the managed node may delete the entry independent of the
            state of this object."                      "The table used to describe IPv6 unicast and multicast scope
            zones.

            For those objects that have names rather than numbers, the
            names were chosen to coincide with the names used in the
            IPv6 address architecture document. " "Section 2.7 of RFC 4291"                     V"Each entry contains the list of scope identifiers on a given
            interface."                      
"The index value that uniquely identifies the interface to
            which these scopes belong.  The interface identified by a
            particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       <"The zone index for the link-local scope on this interface."                       /"The zone index for scope 3 on this interface."                       ="The zone index for the admin-local scope on this interface."                       <"The zone index for the site-local scope on this interface."                       /"The zone index for scope 6 on this interface."                       /"The zone index for scope 7 on this interface."                       Q"The zone index for the organization-local scope on this
            interface."                       /"The zone index for scope 9 on this interface."                       /"The zone index for scope A on this interface."                       /"The zone index for scope B on this interface."                       /"The zone index for scope C on this interface."                       /"The zone index for scope D on this interface."                       S"The table used to describe the default routers known to this
            entity."                       ["Each entry contains information about a default router known
            to this entity."                        "The address type for this row."                      �"The IP address of the default router represented by this
            row.  The address type of this object is specified in
            ipDefaultRouterAddressType.

            Implementers need to be aware that if the size of
            ipDefaultRouterAddress exceeds 115 octets, then OIDS of
            instances of columns in this row will have more than 128
            sub-identifiers and cannot be accessed using SNMPv1,
            SNMPv2c, or SNMPv3."                      "The index value that uniquely identifies the interface by
            which the router can be reached.  The interface identified
            by a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                      �"The remaining length of time, in seconds, that this router
            will continue to be useful as a default router.  A value of
            zero indicates that it is no longer useful as a default
            router.  It is left to the implementer of the MIB as to
            whether a router with a lifetime of zero is removed from the
            list.

            For IPv6, this value should be extracted from the router
            advertisement messages." *"For IPv6 RFC 2462 sections 4.2 and 6.3.4"                    �"An indication of preference given to this router as a
            default router as described in he Default Router
            Preferences document.  Treating the value as a
            2 bit signed integer allows for simple arithmetic
            comparisons.

            For IPv4 routers or IPv6 routers that are not using the
            updated router advertisement format, this object is set to
            medium (0)." "RFC 4291, section 2.1"                    �"An advisory lock used to allow cooperating SNMP managers to
            coordinate their use of the set operation in creating or
            modifying rows within this table.

            In order to use this lock to coordinate the use of set
            operations, managers should first retrieve
            ipv6RouterAdvertSpinLock.  They should then determine the
            appropriate row to create or modify.  Finally, they should
            issue the appropriate set command including the retrieved
            value of ipv6RouterAdvertSpinLock.  If another manager has
            altered the table in the meantime, then the value of
            ipv6RouterAdvertSpinLock will have changed and the creation
            will fail as it will be specifying an incorrect value for
            ipv6RouterAdvertSpinLock.  It is suggested, but not
            required, that the ipv6RouterAdvertSpinLock be the first var
            bind for each set of objects representing a 'row' in a PDU."                       X"The table containing information used to construct router
            advertisements."                      "An entry containing information used to construct router
            advertisements.

            Information in this table is persistent, and when this
            object is written, the entity SHOULD save the change to
            non-volatile storage."                      O"The index value that uniquely identifies the interface on
            which router advertisements constructed with this
            information will be transmitted.  The interface identified
            by a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       �"A flag indicating whether the router sends periodic
            router advertisements and responds to router solicitations
            on this interface." "RFC 2461 Section 6.2.1"                     n"The maximum time allowed between sending unsolicited router
            advertisements from this interface." "RFC 2461 Section 6.2.1"                    E"The minimum time allowed between sending unsolicited router
            advertisements from this interface.

            The default is 0.33 * ipv6RouterAdvertMaxInterval, however,
            in the case of a low value for ipv6RouterAdvertMaxInterval,
            the minimum value for this object is restricted to 3." "RFC 2461 Section 6.2.1"                     �"The true/false value to be placed into the 'managed address
            configuration' flag field in router advertisements sent from
            this interface." "RFC 2461 Section 6.2.1"                     �"The true/false value to be placed into the 'other stateful
            configuration' flag field in router advertisements sent from
            this interface." "RFC 2461 Section 6.2.1"                     �"The value to be placed in MTU options sent by the router on
            this interface.

            A value of zero indicates that no MTU options are sent." "RFC 2461 Section 6.2.1"                    "The value to be placed in the reachable time field in router
            advertisement messages sent from this interface.

            A value of zero in the router advertisement indicates that
            the advertisement isn't specifying a value for reachable
            time." "RFC 2461 Section 6.2.1"                    "The value to be placed in the retransmit timer field in
            router advertisements sent from this interface.

            A value of zero in the router advertisement indicates that
            the advertisement isn't specifying a value for retrans
            time." "RFC 2461 Section 6.2.1"                     "The default value to be placed in the current hop limit
            field in router advertisements sent from this interface.

            The value should be set to the current diameter of the
            Internet.

            A value of zero in the router advertisement indicates that
            the advertisement isn't specifying a value for curHopLimit.

            The default should be set to the value specified in the IANA
            web pages (www.iana.org) at the time of implementation." "RFC 2461 Section 6.2.1"                    �"The value to be placed in the router lifetime field of
            router advertisements sent from this interface.  This value
            MUST be either 0 or between ipv6RouterAdvertMaxInterval and
            9000 seconds.

            A value of zero indicates that the router is not to be used
            as a default router.

            The default is 3 * ipv6RouterAdvertMaxInterval." "RFC 2461 Section 6.2.1"                    "The status of this conceptual row.

            As all objects in this conceptual row have default values, a
            row can be created and made active by setting this object
            appropriately.

            The RowStatus TC requires that this DESCRIPTION clause
            states under which circumstances other objects in this row
            can be modified.  The value of this object has no effect on
            whether other objects in this conceptual row can be
            modified."                      "The total number of input datagrams received from
            interfaces, including those received in error.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInRecieves."                      �"The number of input datagrams discarded due to errors in
            their IPv4 headers, including bad checksums, version number
            mismatch, other format errors, time-to-live exceeded, errors
            discovered in processing their IPv4 options, etc.

            This object has been deprecated as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInHdrErrors."                      �"The number of input datagrams discarded because the IPv4
            address in their IPv4 header's destination field was not a
            valid address to be received at this entity.  This count
            includes invalid addresses (e.g., 0.0.0.0) and addresses of
            unsupported Classes (e.g., Class E).  For entities which are
            not IPv4 routers, and therefore do not forward datagrams,
            this counter includes datagrams discarded because the
            destination address was not a local address.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInAddrErrors."                      "The number of input datagrams for which this entity was not
            their final IPv4 destination, as a result of which an
            attempt was made to find a route to forward them to that
            final destination.  In entities which do not act as IPv4
            routers, this counter will include only those packets which
            were Source-Routed via this entity, and the Source-Route
            option processing was successful.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInForwDatagrams."                      M"The number of locally-addressed datagrams received
            successfully but discarded because of an unknown or
            unsupported protocol.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInUnknownProtos."                      �"The number of input IPv4 datagrams for which no problems
            were encountered to prevent their continued processing, but
            which were discarded (e.g., for lack of buffer space).  Note
            that this counter does not include any datagrams discarded
            while awaiting re-assembly.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsInDiscards."                      !"The total number of input datagrams successfully delivered
            to IPv4 user-protocols (including ICMP).

            This object has been deprecated as a new IP version neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsIndelivers."                      �"The total number of IPv4 datagrams which local IPv4 user
            protocols (including ICMP) supplied to IPv4 in requests for
            transmission.  Note that this counter does not include any
            datagrams counted in ipForwDatagrams.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutRequests."                      6"The number of output IPv4 datagrams for which no problem was
            encountered to prevent their transmission to their
            destination, but which were discarded (e.g., for lack of
            buffer space).  Note that this counter would include
            datagrams counted in ipForwDatagrams if any such packets met
            this (discretionary) discard criterion.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutDiscards."                      ="The number of IPv4 datagrams discarded because no route
            could be found to transmit them to their destination.  Note
            that this counter includes any packets counted in
            ipForwDatagrams which meet this `no-route' criterion.  Note
            that this includes any datagrams which a host cannot route
            because all of its default routers are down.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutNoRoutes."                      "The number of IPv4 fragments received which needed to be
            reassembled at this entity.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsReasmReqds."                       �"The number of IPv4 datagrams successfully re-assembled.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsReasmOKs."                      4"The number of failures detected by the IPv4 re-assembly
            algorithm (for whatever reason: timed out, errors, etc).
            Note that this is not necessarily a count of discarded IPv4
            fragments since some algorithms (notably the algorithm in
            RFC 815) can lose track of the number of fragments by
            combining them as they are received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsReasmFails."                      "The number of IPv4 datagrams that have been successfully
            fragmented at this entity.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutFragOKs."                      �"The number of IPv4 datagrams that have been discarded
            because they needed to be fragmented at this entity but
            could not be, e.g., because their Don't Fragment flag was
            set.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutFragFails."                      -"The number of IPv4 datagram fragments that have been
            generated as a result of fragmentation at this entity.

            This object has been deprecated as a new IP version neutral
            table has been added.  It is loosely replaced by
            ipSystemStatsOutFragCreates."                      �"The number of routing entries which were chosen to be
            discarded even though they are valid.  One possible reason
            for discarding such an entry could be to free-up buffer
            space for other routing entries.
            This object was defined in pre-IPv6 versions of the IP MIB.
            It was implicitly IPv4 only, but the original specifications
            did not indicate this protocol restriction.  In order to
            clarify the specifications, this object has been deprecated
            and a similar, but more thoroughly clarified, object has
            been added to the IP-FORWARD-MIB."                      �"The table of addressing information relevant to this
            entity's IPv4 addresses.

            This table has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by the
            ipAddressTable although several objects that weren't deemed
            useful weren't carried forward while another
            (ipAdEntReasmMaxSize) was moved to the ipv4InterfaceTable."                       R"The addressing information for one of this entity's IPv4
            addresses."                       V"The IPv4 address to which this entry's addressing
            information pertains."                      "The index value which uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                       �"The subnet mask associated with the IPv4 address of this
            entry.  The value of the mask is an IPv4 address with all
            the network bits set to 1 and all the hosts bits set to 0."                      �"The value of the least-significant bit in the IPv4 broadcast
            address used for sending datagrams on the (logical)
            interface associated with the IPv4 address of this entry.
            For example, when the Internet standard all-ones broadcast
            address is used, the value will be 1.  This value applies to
            both the subnet and network broadcast addresses used by the
            entity on this (logical) interface."                       �"The size of the largest IPv4 datagram which this entity can
            re-assemble from incoming IPv4 fragmented datagrams received
            on this interface."                      "The IPv4 Address Translation table used for mapping from
            IPv4 addresses to physical addresses.

            This table has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by the
            ipNetToPhysicalTable."                       S"Each entry contains one IpAddress to `physical' address
            equivalence."                      �"The interface on which this entry's equivalence is
            effective.  The interface identified by a particular value
            of this index is the same interface as identified by the
            same value of the IF-MIB's ifIndex.

            This object predates the rule limiting index objects to a
            max access value of 'not-accessible' and so continues to use
            a value of 'read-create'."                      �"The media-dependent `physical' address.  This object should
            return 0 when this entry is in the 'incomplete' state.

            As the entries in this table are typically not persistent
            when this object is written the entity should not save the
            change to non-volatile storage.  Note: a stronger
            requirement is not used because this object was previously
            defined."                      "The IpAddress corresponding to the media-dependent
            `physical' address.

            This object predates the rule limiting index objects to a
            max access value of 'not-accessible' and so continues to use
            a value of 'read-create'."                      4"The type of mapping.

            Setting this object to the value invalid(2) has the effect
            of invalidating the corresponding entry in the
            ipNetToMediaTable.  That is, it effectively dis-associates
            the interface identified with said entry from the mapping
            identified with said entry.  It is an implementation-
            specific matter as to whether the agent removes an
            invalidated entry from the table.  Accordingly, management
            stations must be prepared to receive tabular information
            from agents that corresponds to entries not currently in
            use.  Proper interpretation of such entries requires
            examination of the relevant ipNetToMediaType object.

            As the entries in this table are typically not persistent
            when this object is written the entity should not save the
            change to non-volatile storage.  Note: a stronger
            requirement is not used because this object was previously
            defined."                           1"The table of generic system-wide ICMP counters."                       )"A conceptual row in the icmpStatsTable."                       #"The IP version of the statistics."                       �"The total number of ICMP messages that the entity received.
            Note that this counter includes all those counted by
            icmpStatsInErrors."                       �"The number of ICMP messages that the entity received but
            determined as having ICMP-specific errors (bad ICMP
            checksums, bad length, etc.)."                       �"The total number of ICMP messages that the entity attempted
            to send.  Note that this counter includes all those counted
            by icmpStatsOutErrors."                      �"The number of ICMP messages that this entity did not send
            due to problems discovered within ICMP, such as a lack of
            buffers.  This value should not include errors discovered
            outside the ICMP layer, such as the inability of IP to route
            the resultant datagram.  In some implementations, there may
            be no types of error that contribute to this counter's
            value."                       T"The table of system-wide per-version, per-message type ICMP
            counters."                      r"A conceptual row in the icmpMsgStatsTable.

            The system should track each ICMP type value, even if that
            ICMP type is not supported by the system.  However, a
            given row need not be instantiated unless a message of that
            type has been processed, i.e., the row for
            icmpMsgStatsType=X MAY be instantiated before but MUST be
            instantiated after the first message with Type=X is
            received or transmitted.  After receiving or transmitting
            any succeeding messages with Type=X, the relevant counter
            must be incremented."                       #"The IP version of the statistics."                       �"The ICMP type field of the message type being counted by
            this row.

            Note that ICMP message types are scoped by the address type
            in use." w"http://www.iana.org/assignments/icmp-parameters and
               http://www.iana.org/assignments/icmpv6-parameters"                     3"The number of input packets for this AF and type."                       4"The number of output packets for this AF and type."                      C"The total number of ICMP messages which the entity received.
            Note that this counter includes all those counted by
            icmpInErrors.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            icmpStatsInMsgs."                      Q"The number of ICMP messages which the entity received but
            determined as having ICMP-specific errors (bad ICMP
            checksums, bad length, etc.).

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            icmpStatsInErrors."                      "The number of ICMP Destination Unreachable messages
            received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Time Exceeded messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Parameter Problem messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Source Quench messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Redirect messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Echo (request) messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Echo Reply messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Timestamp (request) messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Timestamp Reply messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Address Mask Request messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Address Mask Reply messages received.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                      P"The total number of ICMP messages which this entity
            attempted to send.  Note that this counter includes all
            those counted by icmpOutErrors.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            icmpStatsOutMsgs."                      a"The number of ICMP messages which this entity did not send
            due to problems discovered within ICMP, such as a lack of
            buffers.  This value should not include errors discovered
            outside the ICMP layer, such as the inability of IP to route
            the resultant datagram.  In some implementations, there may
            be no types of error which contribute to this counter's
            value.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by
            icmpStatsOutErrors."                       �"The number of ICMP Destination Unreachable messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Time Exceeded messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Parameter Problem messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Source Quench messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                      Q"The number of ICMP Redirect messages sent.  For a host, this
            object will always be zero, since hosts do not send
            redirects.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Echo (request) messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Echo Reply messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Timestamp (request) messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Timestamp Reply messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Address Mask Request messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                       �"The number of ICMP Address Mask Reply messages sent.

            This object has been deprecated, as a new IP version-neutral
            table has been added.  It is loosely replaced by a column in
            the icmpMsgStatsTable."                          