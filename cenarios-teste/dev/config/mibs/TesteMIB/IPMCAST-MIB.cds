,-- ============================================================================
-- Copyright (C) 2007 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: hwMcast.my , this Mib module for management 
--              of IP Multicast, including multicast routing, data
--              forwarding, and data reception.
-- Reference: This MIB was extracted from RFC 2934    5132
-- Version: V1.0
-- History:
--    Created by caibenrui 63321 2007-04-12
-- 
-- ============================================================================
                                                                                            ."The MIB module for management of IP Multicast, including
            multicast routing, data forwarding, and data reception.

            Copyright (C) The IETF Trust (2007).  This version of this
            MIB module is part of RFC 5132; see the RFC itself for full
            legal notices.""David McWalter
                  Data Connection Limited
                  100 Church Street
                  Enfield, EN2 6BQ
                  UK

                  Phone: +44 208 366 1177
                  EMail: dmcw@dataconnection.com

                  Dave Thaler
                  Microsoft Corporation
                  One Microsoft Way
                  Redmond, WA 98052-6399
                  US

                  Phone: +1 425 703 8835
                  EMail: dthaler@dthaler.microsoft.com

                  Andrew Kessler
                  Cisco Systems
                  425 E. Tasman Drive
                  San Jose, CA 95134
                  US

                  Phone: +1 408 526 5139
                  EMail: kessler@cisco.com" "200711090000Z"�"Initial version, published as RFC 5132.

                 This MIB module obsoletes IPMROUTE-STD-MIB defined by
                 [RFC2932].  Changes include the following:

                 o  This MIB module includes support for IPv6 addressing
                    and the IPv6 scoped address architecture.  [RFC2932]
                    supported only IPv4.

                 o  This MIB module allows several multicast protocols
                    to perform routing on a single interface, where
                    [RFC2932] assumed each interface supported at most
                    one multicast routing protocol.  Multicast routing
                    protocols are now per-route, see
                    ipMcastRouteProtocol.

                 o  This MIB module includes objects that are not
                    specific to multicast routing.  It allows management
                    of multicast function on systems that do not perform
                    routing, whereas [RFC2932] was restricted to
                    multicast routing.

                 o  This MIB module includes a table of Source-Specific
                    Multicast (SSM) address ranges to which SSM
                    semantics [RFC3569] should be applied.

                 o  This MIB module includes a table of local
                    applications that are receiving multicast data.

                 o  This MIB module includes a table of multicast scope
                    zones."       -- 9 November 2007
           �"The enabled status of IP Multicast function on this
            system.

            The storage type of this object is determined by
            ipMcastDeviceConfigStorageType."                       �"The number of rows in the ipMcastRouteTable.  This can be
            used to check for multicast routing activity, and to monitor
            the multicast routing table size."                      s"The storage type used for the global IP multicast
            configuration of this device, comprised of the objects
            listed below.  If this storage type takes the value
            'permanent', write-access to the listed objects need not be
            allowed.

            The objects described by this storage type are:
            ipMcastEnabled."                       c"The (conceptual) table used to manage the multicast
            protocol active on an interface."                       �"An entry (conceptual row) containing the multicast protocol
            information for a particular interface.

            Per-interface multicast forwarding statistics are also
            available in ipIfStatsTable." "RFC 4293 ipIfStatsTable"                     "The IP version of this row."                      "The index value that uniquely identifies the interface to
            which this entry is applicable.  The interface identified by
            a particular value of this index is the same interface as
            identified by the same value of the IF-MIB's ifIndex."                      �"The datagram Time to Live (TTL) threshold for the
            interface.  Any IP multicast datagrams with a TTL (IPv4) or
            Hop Limit (IPv6) less than this threshold will not be
            forwarded out the interface.  The default value of 0 means
            all multicast packets are forwarded out the interface.  A
            value of 256 means that no multicast packets are forwarded
            out the interface."                       �"The rate-limit, in kilobits per second, of forwarded
            multicast traffic on the interface.  A rate-limit of 0
            indicates that no rate limiting is done."                       �"The storage type for this row.  Rows having the value
            'permanent' need not allow write-access to any columnar
            objects in the row."                       �"This table is used to create and manage the range(s) of
            group addresses to which SSM semantics should be applied." 
"RFC 3569"                    �"An entry (conceptual row) containing a range of group
            addresses to which SSM semantics should be applied.

            Object Identifiers (OIDs) are limited to 128
            sub-identifiers, but this limit is not enforced by the
            syntax of this entry.  In practice, this does not present
            a problem, because IP address types allowed by conformance
            statements do not exceed this limit." 
"RFC 3569"                     1"The address type of the multicast group prefix."                      Q"The multicast group address which, when combined with
            ipMcastSsmRangePrefixLength, gives the group prefix for this
            SSM range.  The InetAddressType is given by
            ipMcastSsmRangeAddressType.

            This address object is only significant up to
            ipMcastSsmRangePrefixLength bits.  The remaining address
            bits are set to zero.  This is especially important for this
            index field, which is part of the index of this entry.  Any
            non-zero bits would signify an entirely different entry.

            For IPv6 SSM address ranges, only ranges prefixed by
            FF3x::/16 are permitted, where 'x' is a valid IPv6 RFC 4291
            multicast address scope.  The syntax of the address range is
            given by RFC 3306, Sections 4 and 7.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            SSM range entry applies only within the given zone.  Zone
            index zero is not valid in this table.

            If non-global scope SSM range entries are present, then
            consistent ipMcastBoundaryTable entries are required on
            routers at the zone boundary." L"RFC 2365, RFC 4291 Section 2.7, RFC 3306 Sections 4, 6,
            and 7"                    �"The length in bits of the mask which, when combined with
            ipMcastSsmRangeAddress, gives the group prefix for this SSM
            range.

            The InetAddressType is given by ipMcastSsmRangeAddressType.
            For values 'ipv4' and 'ipv4z', this object must be in the
            range 4..32.  For values 'ipv6' and 'ipv6z', this object
            must be in the range 8..128." L"RFC 2365, RFC 4291 Section 2.7, RFC 3306 Sections 4, 6,
            and 7"                    ]"The status of this row, by which rows in this table can
            be created and destroyed.

            This status object can be set to active(1) without setting
            any other columnar objects in this entry.

            All writeable objects in this entry can be modified when the
            status of this entry is active(1)."                       �"The storage type for this row.  Rows having the value
           'permanent' need not allow write-access to any columnar
           objects in the row."                       �"The (conceptual) table containing multicast routing
            information for IP datagrams sent by particular sources
            to the IP multicast groups known to this router."                      �"An entry (conceptual row) containing the multicast routing
            information for IP datagrams from a particular source and
            addressed to a particular IP multicast group address.

            OIDs are limited to 128 sub-identifiers, but this limit
            is not enforced by the syntax of this entry.  In practice,
            this does not present a problem, because IP address types
            allowed by conformance statements do not exceed this limit."                       �"A value indicating the address family of the address
            contained in ipMcastRouteGroup.  Legal values correspond to
            the subset of address families for which multicast
            forwarding is supported."                      �"The IP multicast group address which, when combined with
            the corresponding value specified in
            ipMcastRouteGroupPrefixLength, identifies the groups for
            which this entry contains multicast routing information.

            This address object is only significant up to
            ipMcastRouteGroupPrefixLength bits.  The remaining address
            bits are set to zero.  This is especially important for this
            index field, which is part of the index of this entry.  Any
            non-zero bits would signify an entirely different entry.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            forwarding state applies only within the given zone.  Zone
            index zero is not valid in this table."                      �"The length in bits of the mask which, when combined with
            the corresponding value of ipMcastRouteGroup, identifies the
            groups for which this entry contains multicast routing
            information.

            The InetAddressType is given by
            ipMcastRouteGroupAddressType.  For values 'ipv4' and
            'ipv4z', this object must be in the range 4..32.  For values
            'ipv6' and 'ipv6z', this object must be in the range
            8..128."                      P"A value indicating the address family of the address
            contained in ipMcastRouteSource.

            A value of unknown(0) indicates a non-source-specific entry,
            corresponding to all sources in the group.  Otherwise, the
            value MUST be the same as the value of
            ipMcastRouteGroupType."                      �"The network address which, when combined with the
            corresponding value of ipMcastRouteSourcePrefixLength,
            identifies the sources for which this entry contains
            multicast routing information.

            This address object is only significant up to
            ipMcastRouteSourcePrefixLength bits.  The remaining address
            bits are set to zero.  This is especially important for this
            index field, which is part of the index of this entry.  Any
            non-zero bits would signify an entirely different entry.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            source address applies only within the given zone.  Zone
            index zero is not valid in this table."                      +"The length in bits of the mask which, when combined with
            the corresponding value of ipMcastRouteSource, identifies
            the sources for which this entry contains multicast routing
            information.

            The InetAddressType is given by
            ipMcastRouteSourceAddressType.  For the value 'unknown',
            this object must be zero.  For values 'ipv4' and 'ipv4z',
            this object must be in the range 4..32.  For values 'ipv6'
            and 'ipv6z', this object must be in the range 8..128."                       �"A value indicating the address family of the address
            contained in ipMcastRouteUpstreamNeighbor.

            An address type of unknown(0) indicates that the upstream
            neighbor is unknown, for example in BIDIR-PIM." 
"RFC 5015"                     �"The address of the upstream neighbor (for example, RPF
            neighbor) from which IP datagrams from these sources to
            this multicast address are received."                      O"The value of ifIndex for the interface on which IP
            datagrams sent by these sources to this multicast address
            are received.  A value of 0 indicates that datagrams are not
            subject to an incoming interface check, but may be accepted
            on multiple interfaces (for example, in BIDIR-PIM)." 
"RFC 5015"                    L"The value of sysUpTime at which the multicast routing
            information represented by this entry was learned by the
            router.

            If this information was present at the most recent re-
            initialization of the local management subsystem, then this
            object contains a zero value."                      �"The minimum amount of time remaining before this entry will
            be aged out.  The value 0 indicates that the entry is not
            subject to aging.  If ipMcastRouteNextHopState is pruned(1),
            this object represents the remaining time until the prune
            expires.  If this timer expires, state reverts to
            forwarding(2).  Otherwise, this object represents the time
            until this entry is removed from the table."                       d"The multicast routing protocol via which this multicast
            forwarding entry was learned."                       �"The routing mechanism via which the route used to find the
            upstream or parent interface for this multicast forwarding
            entry was learned."                       g"A value indicating the address family of the address
            contained in ipMcastRouteRtAddress."                      z"The address portion of the route used to find the upstream
            or parent interface for this multicast forwarding entry.

            This address object is only significant up to
            ipMcastRouteRtPrefixLength bits.  The remaining address bits
            are set to zero.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            forwarding state applies only within the given zone.  Zone
            index zero is not valid in this table."                      �"The length in bits of the mask associated with the route
            used to find the upstream or parent interface for this
            multicast forwarding entry.

            The InetAddressType is given by ipMcastRouteRtAddressType.
            For values 'ipv4' and 'ipv4z', this object must be in the
            range 4..32.  For values 'ipv6' and 'ipv6z', this object
            must be in the range 8..128."                      d"The reason the given route was placed in the (logical)
            multicast Routing Information Base (RIB).  A value of
            unicast means that the route would normally be placed only
            in the unicast RIB, but was placed in the multicast RIB
            due (instead or in addition) to local configuration, such as
            when running PIM over RIP.  A value of multicast means that
            the route was explicitly added to the multicast RIB by the
            routing protocol, such as the Distance Vector Multicast
            Routing Protocol (DVMRP) or Multiprotocol BGP."                      "The number of octets contained in IP datagrams that were
            received from these sources and addressed to this multicast
            group address, and which were forwarded by this router.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp."                      �"The number of packets routed using this multicast route
            entry.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp."                      �"The number of octets contained in IP datagrams that this
            router has received from these sources and addressed to this
            multicast group address, which were dropped because the TTL
            (IPv4) or Hop Limit (IPv6) was decremented to zero, or to a
            value less than ipMcastInterfaceTtl for all next hops.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp."                      �"The number of packets that this router has received from
            these sources and addressed to this multicast group address,
            which were dropped because the TTL (IPv4) or Hop Limit
            (IPv6) was decremented to zero, or to a value less than
            ipMcastInterfaceTtl for all next hops.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp."                      �"The number of octets contained in IP datagrams that this
            router has received from these sources and addressed to this
            multicast group address, which were dropped because they
            were received on an unexpected interface.

            For RPF checking protocols (such as PIM-SM), these packets
            arrived on interfaces other than ipMcastRouteInIfIndex, and
            were dropped because of this failed RPF check.  (RPF paths
            are 'Reverse Path Forwarding' paths; the unicast routes to
            the expected origin of multicast data flows).

            Other protocols may drop packets on an incoming interface
            check for different reasons (for example, BIDIR-PIM performs
            a DF check on receipt of packets).  All packets dropped as a
            result of an incoming interface check are counted here.

            If this counter increases rapidly, this indicates a problem.
            A significant quantity of multicast data is arriving at this
            router on unexpected interfaces, and is not being forwarded.

            For guidance, if the rate of increase of this counter
            exceeds 1% of the rate of increase of ipMcastRouteOctets,
            then there are multicast routing problems that require
            investigation.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp." "RFC 4601 and RFC 5015"                    y"The number of packets which this router has received from
            these sources and addressed to this multicast group address,
            which were dropped because they were received on an
            unexpected interface.

            For RPF checking protocols (such as PIM-SM), these packets
            arrived on interfaces other than ipMcastRouteInIfIndex, and
            were dropped because of this failed RPF check.  (RPF paths
            are 'Reverse Path Forwarding' path; the unicast routes to
            the expected origin of multicast data flows).

            Other protocols may drop packets on an incoming interface
            check for different reasons (for example, BIDIR-PIM performs
            a DF check on receipt of packets).  All packets dropped as a
            result of an incoming interface check are counted here.

            If this counter increases rapidly, this indicates a problem.
            A significant quantity of multicast data is arriving at this
            router on unexpected interfaces, and is not being forwarded.

            For guidance, if the rate of increase of this counter
            exceeds 1% of the rate of increase of ipMcastRoutePkts, then
            there are multicast routing problems that require
            investigation.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteTimeStamp." "RFC 4601 and RFC 5015"                    "Bits per second forwarded by this router using this
            multicast routing entry.

            This value is a sample; it is the number of bits forwarded
            during the last whole 1 second sampling period.  The value
            during the current 1 second sampling period is not made
            available until the period is completed.

            The quantity being sampled is the same as that measured by
            ipMcastRouteOctets.  The units and the sampling method are
            different."                      8"The (conceptual) table containing information on the
            next-hops on outgoing interfaces for routing IP multicast
            datagrams.  Each entry is one of a list of next-hops on
            outgoing interfaces for particular sources sending to a
            particular multicast group address."                      �"An entry (conceptual row) in the list of next-hops on
            outgoing interfaces to which IP multicast datagrams from
            particular sources to an IP multicast group address are
            routed.

            OIDs are limited to 128 sub-identifiers, but this limit
            is not enforced by the syntax of this entry.  In practice,
            this does not present a problem, because IP address types
            allowed by conformance statements do not exceed this limit."                       �"A value indicating the address family of the address
            contained in ipMcastRouteNextHopGroup.  Legal values
            correspond to the subset of address families for which
            multicast forwarding is supported."                      �"The IP multicast group address which, when combined with
            the corresponding value specified in
            ipMcastRouteNextHopGroupPrefixLength, identifies the groups
            for which this entry contains multicast forwarding
            information.

            This address object is only significant up to
            ipMcastRouteNextHopGroupPrefixLength bits.  The remaining
            address bits are set to zero.  This is especially important
            for this index field, which is part of the index of this
            entry.  Any non-zero bits would signify an entirely
            different entry.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            forwarding state applies only within the given zone.  Zone
            index zero is not valid in this table."                      �"The length in bits of the mask which, when combined with
            the corresponding value of ipMcastRouteGroup, identifies the
            groups for which this entry contains multicast routing
            information.

            The InetAddressType is given by
            ipMcastRouteNextHopGroupAddressType.  For values 'ipv4' and
            'ipv4z', this object must be in the range 4..32.  For values
            'ipv6' and 'ipv6z', this object must be in the range
            8..128."                      ^"A value indicating the address family of the address
            contained in ipMcastRouteNextHopSource.

            A value of unknown(0) indicates a non-source-specific entry,
            corresponding to all sources in the group.  Otherwise, the
            value MUST be the same as the value of
            ipMcastRouteNextHopGroupType."                      �"The network address which, when combined with the
            corresponding value of the mask specified in
            ipMcastRouteNextHopSourcePrefixLength, identifies the
            sources for which this entry specifies a next-hop on an
            outgoing interface.

            This address object is only significant up to
            ipMcastRouteNextHopSourcePrefixLength bits.  The remaining
            address bits are set to zero.  This is especially important
            for this index field, which is part of the index of this
            entry.  Any non-zero bits would signify an entirely
            different entry.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            source address applies only within the given zone.  Zone
            index zero is not valid in this table."                      W"The length in bits of the mask which, when combined with
            the corresponding value specified in
            ipMcastRouteNextHopSource, identifies the sources for which
            this entry specifies a next-hop on an outgoing interface.

            The InetAddressType is given by
            ipMcastRouteNextHopSourceAddressType.  For the value
            'unknown', this object must be zero.  For values 'ipv4' and
            'ipv4z', this object must be in the range 4..32.  For values
            'ipv6' and 'ipv6z', this object must be in the range
            8..128."                       _"The ifIndex value of the interface for the outgoing
            interface for this next-hop."                       l"A value indicating the address family of the address
            contained in ipMcastRouteNextHopAddress."                      9"The address of the next-hop specific to this entry.  For
            most interfaces, this is identical to
            ipMcastRouteNextHopGroup.  Non-Broadcast Multi-Access
            (NBMA) interfaces, however, may
            have multiple next-hop addresses out a single outgoing
            interface."                      $"An indication of whether the outgoing interface and next-
            hop represented by this entry is currently being used to
            forward IP datagrams.  The value 'forwarding' indicates it
            is currently being used; the value 'pruned' indicates it is
            not."                      L"The value of sysUpTime at which the multicast routing
            information represented by this entry was learned by the
            router.

            If this information was present at the most recent re-
            initialization of the local management subsystem, then this
            object contains a zero value."                      3"The minimum amount of time remaining before this entry will
            be aged out.  If ipMcastRouteNextHopState is pruned(1), the
            remaining time until the prune expires and the state reverts
            to forwarding(2).  Otherwise, the remaining time until this
            entry is removed from the table.  The time remaining may be
            copied from ipMcastRouteExpiryTime if the protocol in use
            for this entry does not specify next-hop timers.  The value
            0 indicates that the entry is not subject to aging."                      G"The minimum number of hops between this router and any
            member of this IP multicast group reached via this next-hop
            on this outgoing interface.  Any IP multicast datagrams for
            the group that have a TTL (IPv4) or Hop Count (IPv6) less
            than this number of hops will not be forwarded to this
            next-hop.

            A value of 0 means all multicast datagrams are forwarded out
            the interface.  A value of 256 means that no multicast
            datagrams are forwarded out the interface.

            This is an optimization applied by multicast routing
            protocols that explicitly track hop counts to downstream
            listeners.  Multicast protocols that are not aware of hop
            counts to downstream listeners set this object to 0."                       <"The routing mechanism via which this next-hop was learned."                      �"The number of octets of multicast packets that have been
            forwarded using this route.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteNextHopTimeStamp."                      �"The number of packets which have been forwarded using this
            route.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of routes being
            removed and replaced, which can be detected by observing
            the value of ipMcastRouteNextHopTimeStamp."                       ["The (conceptual) table listing the system's multicast scope
            zone boundaries." "RFC 4007 Section 5"                    �"An entry (conceptual row) describing one of this device's
            multicast scope zone boundaries.

            OIDs are limited to 128 sub-identifiers, but this limit
            is not enforced by the syntax of this entry.  In practice,
            this does not present a problem, because IP address types
            allowed by conformance statements do not exceed this limit." ("RFC 2365 Section 5, RFC 4007 Section 5"                    ""The IfIndex value for the interface to which this boundary
            applies.  Packets with a destination address in the
            associated address/mask range will not be forwarded over
            this interface.

            For IPv4, zone boundaries cut through links.  Therefore,
            this is an external interface.  This may be either a
            physical or virtual interface (tunnel, encapsulation, and
            so forth.)

            For IPv6, zone boundaries cut through nodes.  Therefore,
            this is a virtual interface within the node.  This is not
            an external interface, either real or virtual.  Packets
            crossing this interface neither arrive at nor leave the
            node, but only move between zones within the node." ("RFC 2365 Section 5, RFC 4007 Section 5"                     �"A value indicating the address family of the address
            contained in ipMcastBoundaryAddress.  Legal values
            correspond to the subset of address families for which
            multicast forwarding is supported."                      �"The group address which, when combined with the
            corresponding value of ipMcastBoundaryAddressPrefixLength,
            identifies the group range for which the scoped boundary
            exists.  Scoped IPv4 multicast address ranges must be
            prefixed by 239.0.0.0/8.  Scoped IPv6 multicast address
            ranges are FF0x::/16, where x is a valid RFC 4291 multicast
            scope.

            An IPv6 address prefixed by FF1x::/16 is a non-permanently-
            assigned address.  An IPv6 address prefixed by FF3x::/16 is
            a unicast-prefix-based multicast addresses.  A zone boundary
            for FF0x::/16 implies an identical boundary for these other
            prefixes.  No separate FF1x::/16 or FF3x::/16 entries exist
            in this table.

            This address object is only significant up to
            ipMcastBoundaryAddressPrefixLength bits.  The remaining
            address bits are set to zero.  This is especially important
            for this index field, which is part of the index of this
            entry.  Any non-zero bits would signify an entirely
            different entry."                      �"The length in bits of the mask which when, combined with
            the corresponding value of ipMcastBoundaryAddress,
            identifies the group range for which the scoped boundary
            exists.

            The InetAddressType is given by ipMcastBoundaryAddressType.
            For values 'ipv4' and 'ipv4z', this object must be in the
            range 4..32.  For values 'ipv6' and 'ipv6z', this object
            must be set to 16."                      M"The value of sysUpTime at which the multicast boundary
            information represented by this entry was learned by the
            router.

            If this information was present at the most recent re-
            initialization of the local management subsystem, then this
            object contains a zero value."                      �"The number of octets of multicast packets that have been
            dropped as a result of this zone boundary configuration.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of boundary
            configuration being removed and replaced, which can be
            detected by observing the value of
            ipMcastBoundaryTimeStamp."                      �"The number of multicast packets that have been dropped as a
            result of this zone boundary configuration.

            Discontinuities in this monotonically increasing value
            occur at re-initialization of the management system.
            Discontinuities can also occur as a result of boundary
            configuration being removed and replaced, which can be
            detected by observing the value of
            ipMcastBoundaryTimeStamp."                      ]"The status of this row, by which rows in this table can
            be created and destroyed.

            This status object can be set to active(1) without setting
            any other columnar objects in this entry.

            All writeable objects in this entry can be modified when the
            status of this entry is active(1)."                       �"The storage type for this row.  Rows having the value
           'permanent' need not allow write-access to any columnar
           objects in the row."                       7"The (conceptual) table listing multicast scope names." "RFC 4007 Section 4"                    m"An entry (conceptual row) that names a multicast address
            scope.

            OIDs are limited to 128 sub-identifiers, but this limit
            is not enforced by the syntax of this entry.  In practice,
            this does not present a problem, because IP address types
            allowed by conformance statements do not exceed this limit." "RFC 4007 Section 4"                     �"A value indicating the address family of the address
            contained in ipMcastScopeNameAddress.  Legal values
            correspond to the subset of address families for which
            multicast forwarding is supported."                      �"The group address which, when combined with the
            corresponding value of ipMcastScopeNameAddressPrefixLength,
            identifies the group range associated with the multicast
            scope.  Scoped IPv4 multicast address ranges must be
            prefixed by 239.0.0.0/8.  Scoped IPv6 multicast address
            ranges are FF0x::/16, where x is a valid RFC 4291 multicast
            scope.

            An IPv6 address prefixed by FF1x::/16 is a non-permanently-
            assigned address.  An IPv6 address prefixed by FF3x::/16 is
            a unicast-prefix-based multicast addresses.  A scope
            FF0x::/16 implies an identical scope name for these other
            prefixes.  No separate FF1x::/16 or FF3x::/16 entries exist
            in this table.

            This address object is only significant up to
            ipMcastScopeNameAddressPrefixLength bits.  The remaining
            address bits are set to zero.  This is especially important
            for this index field, which is part of the index of this
            entry.  Any non-zero bits would signify an entirely
            different entry."                      �"The length in bits of the mask which, when combined with
            the corresponding value of ipMcastScopeNameAddress,
            identifies the group range associated with the multicast
            scope.

            The InetAddressType is given by ipMcastScopeNameAddressType.
            For values 'ipv4' and 'ipv4z', this object must be in the
            range 4..32.  For values 'ipv6' and 'ipv6z', this object
            must be set to 16."                       ."Language tag associated with the scope name." 
"RFC 4646"                    G"The textual name associated with the multicast scope.  The
            value of this object should be suitable for displaying to
            end-users, such as when allocating a multicast address in
            this scope.

            When no name is specified, the default value of this object
            for IPv4 should be the string 239.x.x.x/y with x and y
            replaced with decimal values to describe the address and
            mask length associated with the scope.

            When no name is specified, the default value of this object
            for IPv6 should be the string FF0x::/16, with x replaced by
            the hexadecimal value for the RFC 4291 multicast scope.

            An IPv6 address prefixed by FF1x::/16 is a non-permanently-
            assigned address.  An IPv6 address prefixed by FF3x::/16 is
            a unicast-prefix-based multicast addresses.  A scope
            FF0x::/16 implies an identical scope name for these other
            prefixes.  No separate FF1x::/16 or FF3x::/16 entries exist
            in this table." 4"RFC 2365, RFC 3306 Section 4, RFC 4291 Section 2.7"                     �"If true, indicates a preference that the name in the
            following language should be used by applications if no name
            is available in a desired language."                      <"The status of this row, by which rows in this table can
            be created and destroyed.  Before the row can be activated,
            the object ipMcastScopeNameString must be set to a valid
            value.  All writeable objects in this entry can be modified
            when the status is active(1)."                       �"The storage type for this row.  Rows having the value
           'permanent' need not allow write-access to any columnar
           objects in the row."                      %"The (conceptual) table listing local applications or
            services that have joined multicast groups as listeners.

            Entries exist for all addresses in the multicast range for
            all applications and services as they are classified on this
            device."                      �"An entry (conceptual row) identifying a local application
            or service that has joined a multicast group as a listener.

            OIDs are limited to 128 sub-identifiers, but this limit
            is not enforced by the syntax of this entry.  In practice,
            this does not present a problem, because IP address types
            allowed by conformance statements do not exceed this limit."                       �"A value indicating the address family of the address
            contained in ipMcastLocalListenerGroupAddress.  Legal values
            correspond to the subset of address families for which
            multicast is supported."                       m"The IP multicast group for which this entry specifies
            locally joined applications or services."                      g"A value indicating the address family of the address
            contained in ipMcastLocalListenerSource.

            A value of unknown(0) indicates a non-source-specific entry,
            corresponding to all sources in the group.  Otherwise, the
            value MUST be the same as the value of
            ipMcastLocalListenerGroupAddressType."                      �"The network address which, when combined with the
            corresponding value of the mask specified in
            ipMcastLocalListenerSourcePrefixLength, identifies the
            sources for which this entry specifies a local listener.

            This address object is only significant up to
            ipMcastLocalListenerSourcePrefixLength bits.  The remaining
            address bits are set to zero.  This is especially important
            for this index field, which is part of the index of this
            entry.  Any non-zero bits would signify an entirely
            different entry.

            For addresses of type ipv4z or ipv6z, the appended zone
            index is significant even though it lies beyond the prefix
            length.  The use of these address types indicate that this
            listener address applies only within the given zone.  Zone
            index zero is not valid in this table."                      F"The length in bits of the mask which, when combined with
            the corresponding value specified in
            ipMcastLocalListenerSource, identifies the sources for which
            this entry specifies a local listener.

            The InetAddressType is given by
            ipMcastLocalListenerSourceAddressType.  For the value
            'unknown', this object must be zero.  For values 'ipv4' and
            'ipv4z', this object must be in the range 4..32.  For values
            'ipv6' and 'ipv6z', this object must be in the range
            8..128."                       b"The IfIndex value of the interface for which this entry
            specifies a local listener."                      p"A unique value corresponding to a piece of software running
            on this router or host system.  Where possible, this should
            be the system's native, unique identification number.

            This identifier is platform-specific.  It may correspond to
            a process ID or application instance number.

            A value of zero indicates that the application instance(s)
            cannot be identified.  A value of zero indicates that one or
            more unidentified applications have joined the specified
            multicast groups (for the specified sources) as listeners." "RFC 2287 sysApplRunIndex"                     <"The (conceptual) table listing scope zones on this device." "RFC 4007 Section 5"                     P"An entry (conceptual row) describing a scope zone on this
            device." "RFC 4007 Section 5"                    ."This zone index uniquely identifies a zone on a device.

            Each zone is for a given scope.  Scope-level information in
            this table is for the unique scope that corresponds to this
            zone.

            Zero is a special value used to request the default zone for
            a given scope.  Zero is not a valid value for this object.

            To test whether ipMcastZoneIndex is the default zone for
            this scope, test whether ipMcastZoneIndex is equal to
            ipMcastZoneScopeDefaultZoneIndex."                       �"The default zone index for this scope.  This is the zone
            that this device will use if the default (zero) zone is
            requested for this scope.

            Zero is not a valid value for this object."                       7"The IP address type for which this scope zone exists."                      �"The multicast group address which, when combined with
            ipMcastZoneScopeAddressPrefixLength, gives the multicast
            address range for this scope.  The InetAddressType is given
            by ipMcastZoneScopeAddressType.

            Scoped IPv4 multicast address ranges are prefixed by
            239.0.0.0/8.  Scoped IPv6 multicast address ranges are
            FF0x::/16, where x is a valid RFC 4291 multicast scope.

            An IPv6 address prefixed by FF1x::/16 is a non-permanently-
            assigned address.  An IPv6 address prefixed by FF3x::/16 is
            a unicast-prefix-based multicast addresses.  A scope
            FF0x::/16 implies an identical scope for these other
            prefixes.  No separate FF1x::/16 or FF3x::/16 entries exist
            in this table.

            This address object is only significant up to
            ipMcastZoneScopeAddressPrefixLength bits.  The remaining
            address bits are set to zero." 4"RFC 2365, RFC 3306 Section 4, RFC 4291 Section 2.7"                    �"The length in bits of the mask which, when combined
            with ipMcastZoneScopeAddress, gives the multicast address
            prefix for this scope.

            The InetAddressType is given by ipMcastZoneScopeAddressType.
            For values 'ipv4' and 'ipv4z', this object must be in the
            range 4..32.  For values 'ipv6' and 'ipv6z', this object
            must be set to 16."                              a"The compliance statement for hosts supporting IPMCAST-MIB.

            Support for either InetAddressType ipv4 or ipv6 is
            mandatory; support for both InetAddressTypes ipv4 and ipv6
            is optional.  Support for types ipv4z and ipv6z is
            optional.

            -- OBJECT     ipMcastLocalListenerGroupAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastLocalListenerGroupAddress
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastLocalListenerSourceAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastLocalListenerSourceAddress
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6."   "Write access is not required." "Write access is not required." "This group is optional." "This group is optional." "This group is optional." "This group is optional." "This group is optional."            +"The compliance statement for routers supporting
            IPMCAST-MIB.

            Support for either InetAddressType ipv4 or ipv6 is
            mandatory; support for both InetAddressTypes ipv4 and ipv6
            is optional.  Support for types ipv4z and ipv6z is
            optional.

            -- OBJECT     ipMcastSsmRangeAddressType
            -- SYNTAX     InetAddressType {ipv4(1), ipv6(2), ipv4z(3),
            --                             ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastSsmRangeAddress
            -- SYNTAX     InetAddress (SIZE (4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteGroupAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteGroup
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteSourceAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteSource
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopGroupAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopGroup
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopSourceAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                              ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopSource
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteNextHopAddress
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6."   "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." R"This compliance requires support for unknown and either ipv4
          or ipv6." R"This compliance requires support for unknown and either ipv4
          or ipv6." R"This compliance requires support for unknown and either ipv4
          or ipv6." R"This compliance requires support for unknown and either ipv4
          or ipv6." "Write access is not required." "Write access is not required." Y"This group is not mandatory, but SHOULD be supported where
          hardware permits." "This group is optional." "This group is optional." "This group is optional." "This group is optional." "This group is optional." "This group is optional." "This group is optional."            ;"The compliance statement for routers on scope
            boundaries supporting IPMCAST-MIB.

            Support for either InetAddressType ipv4z or ipv6z is
            mandatory; support for both InetAddressTypes ipv4z and
            ipv6z is optional.

            -- OBJECT     ipMcastSsmRangeAddressType
            -- SYNTAX     InetAddressType {ipv4(1), ipv6(2), ipv4z(3),
            --                             ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastSsmRangeAddress
            -- SYNTAX     InetAddress (SIZE (4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteGroupAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 or ipv6.
            --
            -- OBJECT     ipMcastRouteGroup
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteSourceAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteSource
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopGroupAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopGroup
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopSourceAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopSource
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopAddressType
            -- SYNTAX     InetAddressType {unknown(0), ipv4(1), ipv6(2),
            --                             ipv4z(3), ipv6z(4)}
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastRouteNextHopAddress
            -- SYNTAX     InetAddress (SIZE (0|4|8|16|20))
            -- DESCRIPTION
            --     This compliance requires support for unknown and
            --     either ipv4 and ipv4z or ipv6 and ipv6z.
            --
            -- OBJECT     ipMcastBoundaryAddressType
            -- SYNTAX     InetAddressType {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastBoundaryAddress
            -- SYNTAX     InetAddress (SIZE (4|16)
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastScopeNameAddressType
            -- SYNTAX     InetAddressType {ipv4(1), ipv6(2)}
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6.
            --
            -- OBJECT     ipMcastScopeNameAddress
            -- SYNTAX     InetAddress (SIZE (4|16)
            -- DESCRIPTION
            --     This compliance requires support for ipv4 or ipv6."   "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." g"This compliance requires support for unknown and either ipv4
          and ipv4z, or ipv6 and ipv6z." g"This compliance requires support for unknown and either ipv4
          and ipv4z, or ipv6 and ipv6z." g"This compliance requires support for unknown and either ipv4
          and ipv4z, or ipv6 and ipv6z." g"This compliance requires support for unknown and either ipv4
          and ipv4z, or ipv6 and ipv6z." "Write access is not required." "Write access is not required." Y"This group is not mandatory, but SHOULD be supported where
          hardware permits." "This group is optional." "This group is optional." "This group is optional." "This group is optional." "This group is optional." 4"This compliance requires support for ipv4 or ipv6." 4"This compliance requires support for ipv4 or ipv6."                 ]"A collection of objects to support basic management of IP
            Multicast protocols."                 c"A collection of objects to support management of Source-
            Specific Multicast routing."                 ["A collection of objects to support basic management of IP
            Multicast routing."                 5"A collection of routing diagnostic packet counters."                 }"A collection of objects to support management of packet
            counters for each outgoing interface entry of a route."                 n"A collection of objects to support management of the use of
            hop counts in IP Multicast routing."                 i"A collection of objects to support management of octet
            counters for each forwarding entry."                 u"A collection of objects to support sampling of data rate
            in bits per second for each forwarding entry."                 �"A collection of objects providing information on the
            relationship between multicast routing information and the
            IP Forwarding Table."                 d"A collection of objects to support management of local
            listeners on hosts or routers."                 `"A collection of objects to support management of multicast
            scope zone boundaries."                 ^"A collection of objects to support management of multicast
            address scope names."                    