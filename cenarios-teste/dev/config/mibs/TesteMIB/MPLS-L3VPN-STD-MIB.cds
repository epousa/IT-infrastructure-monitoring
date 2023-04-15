-- ===========================================================================
-- Description: MPLS-L3VPN-STD-MIB
-- Reference:   Module(MPLS-L3VPN-STD-MIB) Extracted from RFC4382.TXT,from 9269 to 73816.
-- ===========================================================================
 "[RFC4364]" �"Used to define the type of a route target usage.
        Route targets can be specified to be imported,
        exported, or both.  For a complete definition of a
        route target, see [RFC4364]."             "[RFC4364]" U"Syntax for a route distinguisher and route target
        as defined in [RFC4364]."             Z"RFC 2685 Fox B., et al, 'Virtual Private
         Networks Identifier', September 1999."�"An identifier that is assigned to each MPLS/BGP VPN and
        is used to uniquely identify it.  This is assigned by the
        system operator or NMS and SHOULD be unique throughout
        the MPLS domain.  If this is the case, then this identifier
        can then be used at any LSR within a specific MPLS domain
        to identify this MPLS/BGP VPN.  It may also be possible to
        preserve the uniqueness of this identifier across MPLS
        domain boundaries, in which case this identifier can then
        be used to uniquely identify MPLS/BGP VPNs on a more global
        basis.  This object MAY be set to the VPN ID as defined in
        RFC 2685."                                                                                            2"This MIB contains managed object definitions for the
         Layer-3 Multiprotocol Label Switching Virtual
         Private Networks.

        Copyright (C) The Internet Society (2006).  This
        version of this MIB module is part of RFC4382; see
        the RFC itself for full legal notices." �"        Thomas D. Nadeau
                   tnadeau@cisco.com

                   Harmen van der Linde
                   havander@cisco.com

                   Comments and discussion to l3vpn@ietf.org" "200601230000Z" *"Initial version.  Published as RFC 4382."       -- 23 January 2006
          '"This notification is generated when:
        a. No interface is associated with this VRF, and the first
           (and only first) interface associated with it has its
           ifOperStatus change to up(1).

        b. One interface is associated with this VRF, and
           the ifOperStatus of this interface changes to up(1).

        c. Multiple interfaces are associated with this VRF, and the
           ifOperStatus of all interfaces is down(2), and the first
           of those interfaces has its ifOperStatus change to up(1)."                "This notification is generated when:
        a. One interface is associated with this VRF, and
           the ifOperStatus of this interface changes from up(1)
           to down(2).

        b. Multiple interfaces are associated with this VRF, and
           the ifOperStatus of all except one of these interfaces is
           equal to up(1), and the ifOperStatus of that interface
           changes from up(1) to down(2).

        c. The last interface with ifOperStatus equal to up(1)
           is disassociated from a VRF."                �"This notification is generated when the number of routes
        contained by the specified VRF exceeds the value indicated by
        mplsL3VpnVrfMidRouteThreshold.  A single notification MUST be
        generated when this threshold is exceeded, and no other
        notifications of this type should be issued until the value
        of mplsL3VpnVrfPerfCurrNumRoutes has fallen below that of
        mplsL3VpnVrfConfMidRteThresh."                9"This notification is generated when the number of routes
        contained by the specified VRF exceeds or attempts to exceed
        the maximum allowed value as indicated by
        mplsL3VpnVrfMaxRouteThreshold.  In cases where
        mplsL3VpnVrfConfHighRteThresh is set to the same value
        as mplsL3VpnVrfConfMaxRoutes, mplsL3VpnVrfConfHighRteThresh
        need not be exceeded; rather, just reached for this notification
        to be issued.

        Note that mplsL3VpnVrfConfRteMxThrshTime denotes the interval
        at which the this notification will be reissued after the
        maximum value has been exceeded (or reached if
        mplsL3VpnVrfConfMaxRoutes and mplsL3VpnVrfConfHighRteThresh are
        equal) and the initial notification has been issued.  This value
        is intended to prevent continuous generation of notifications by
        an agent in the event that routes are continually added to a VRF
        after it has reached its maximum value.  The default value is 0
        minutes.  If this value is set to 0, the agent should only issue
        a single notification at the time that the maximum threshold has
        been reached, and should not issue any more notifications until
        the value of routes has fallen below the configured threshold
        value."                �"This notification is generated when the number of illegal
        label violations on a VRF as indicated by
        mplsL3VpnVrfSecIllegalLblVltns has exceeded
        mplsL3VpnIllLblRcvThrsh.  The threshold is not
        included in the varbind here because the value of
        mplsL3VpnVrfSecIllegalLblVltns should be one greater than
        the threshold at the time this notification is issued."                �"This notification is generated only after the number of routes
        contained by the specified VRF exceeds or attempts to exceed
        the maximum allowed value as indicated by
        mplsVrfMaxRouteThreshold, and then falls below this value.  The
        emission of this notification informs the operator that the
        error condition has been cleared without the operator having to
        query the device.

        Note that mplsL3VpnVrfConfRteMxThrshTime denotes the interval at
        which the mplsNumVrfRouteMaxThreshExceeded notification will
        be reissued after the maximum value has been exceeded (or
        reached if mplsL3VpnVrfConfMaxRoutes and
        mplsL3VpnVrfConfHighRteThresh are equal) and the initial
        notification has been issued.  Therefore,
        the generation of this notification should also be emitted with
        this same frequency (assuming that the error condition is
        cleared).  Specifically, if the error condition is reached and
        cleared several times during the period of time specified in
        mplsL3VpnVrfConfRteMxThrshTime, only a single notification will
        be issued to indicate the first instance of the error condition
        as well as the first time the error condition is cleared.
        This behavior is intended to prevent continuous generation of
        notifications by an agent in the event that routes are
        continually added and removed to/from a VRF after it has
        reached its maximum value.  The default value is 0.  If this
        value is set to 0, the agent should issue a notification
        whenever the maximum threshold has been cleared."                         6"The number of VRFs that are configured on this node."                       �"The number of VRFs that are active on this node.
        That is, those VRFs whose corresponding mplsL3VpnVrfOperStatus
        object value is equal to operational (1)."                       0"Total number of interfaces connected to a VRF."                       �"If this object is true, then it enables the
         generation of all notifications defined in
         this MIB.  This object's value should be
         preserved across agent reboots." �"See also [RFC3413] for explanation that
        notifications are under the ultimate control of the
        MIB modules in this document."                    3"Denotes maximum number of routes that the device
      will allow all VRFs jointly to hold.  If this value is
      set to 0, this indicates that the device is
      unable to determine the absolute maximum.  In this
      case, the configured maximum MAY not actually
      be allowed by the device."                      J"Denotes the interval in seconds, at which the route max threshold
      notification may be reissued after the maximum value has been
      exceeded (or has been reached if mplsL3VpnVrfConfMaxRoutes and
      mplsL3VpnVrfConfHighRteThresh are equal) and the initial
      notification has been issued.  This value is intended to prevent
      continuous generation of notifications by an agent in the event
      that routes are continually added to a VRF after it has reached
      its maximum value.  If this value is set to 0, the agent should
      only issue a single notification at the time that the maximum
      threshold has been reached, and should not issue any more
      notifications until the value of routes has fallen below the
      configured threshold value.  This is the recommended default
      behavior."                       �"The number of illegally received labels above which
        the mplsNumVrfSecIllglLblThrshExcd notification
        is issued.  The persistence of this value mimics
        that of the device's configuration."                           Y"This table specifies per-interface MPLS capability
        and associated information."                       �"An entry in this table is created by an LSR for
        every interface capable of supporting MPLS L3VPN.
        Each entry in this table is meant to correspond to
        an entry in the Interfaces Table."                      �"This is a unique index for an entry in the
        mplsL3VpnIfConfTable.  A non-zero index for an
        entry indicates the ifIndex for the corresponding
        interface entry in the MPLS-VPN-layer in the ifTable.
        Note that this table does not necessarily correspond
        one-to-one with all entries in the Interface MIB
        having an ifType of MPLS-layer; rather, only those
        that are enabled for MPLS L3VPN functionality." 	"RFC2863"                     z"Denotes whether this link participates in a
        carrier's carrier, enterprise, or inter-provider
        scenario."                      "Denotes the route distribution protocol across the
        PE-CE link.  Note that more than one routing protocol
        may be enabled at the same time; thus, this object is
        specified as a bitmask.  For example, static(5) and
        ospf(2) are a typical configuration."                       �"The storage type for this VPN If entry.
        Conceptual rows having the value 'permanent'
        need not allow write access to any columnar
        objects in the row." "See RFC2579."                    �"This variable is used to create, modify, and/or
        delete a row in this table.  Rows in this
        table signify that the specified interface is
        associated with this VRF.  If the row creation
        operation succeeds, the interface will have been
        associated with the specified VRF, otherwise the
        agent MUST not allow the association.  If the agent
        only allows read-only operations on this table, it
        MUST create entries in this table as they are created
        on the device.  When a row in this table is in
        active(1) state, no objects in that row can be
        modified except mplsL3VpnIfConfStorageType and
        mplsL3VpnIfConfRowStatus."                      p"This table specifies per-interface MPLS L3VPN
        VRF Table capability and associated information.
        Entries in this table define VRF routing instances
        associated with MPLS/VPN interfaces.  Note that
        multiple interfaces can belong to the same VRF
        instance.  The collection of all VRF instances
        comprises an actual VPN."                       �"An entry in this table is created by an LSR for
        every VRF capable of supporting MPLS L3VPN.  The
        indexing provides an ordering of VRFs per-VPN
        interface."                      �"The human-readable name of this VPN.  This MAY
        be equivalent to the [RFC2685] VPN-ID, but may
        also vary.  If it is set to the VPN ID, it MUST
        be equivalent to the value of mplsL3VpnVrfVpnId.
        It is strongly recommended that all sites supporting
        VRFs that are part of the same VPN use the same
        naming convention for VRFs as well as the same VPN
        ID." "[RFC2685]"                     �"The VPN ID as specified in [RFC2685].  If a VPN ID
        has not been specified for this VRF, then this
        variable SHOULD be set to a zero-length OCTET
        STRING."                       -"The human-readable description of this VRF."                       '"The route distinguisher for this VRF."                       /"The time at which this VRF entry was created."                      i"Denotes whether or not a VRF is operational.  A VRF is
        up(1) when there is at least one interface associated
        with the VRF whose ifOperStatus is up(1).  A VRF is
        down(2) when:
        a. There does not exist at least one interface whose
           ifOperStatus is up(1).
        b. There are no interfaces associated with the VRF."                      r"Total number of interfaces connected to this VRF with
        ifOperStatus = up(1).

        This value should increase when an interface is associated
        with the corresponding VRF and its corresponding ifOperStatus
        is equal to up(1).  If an interface is associated whose
        ifOperStatus is not up(1), then the value is not incremented
        until such time as it transitions to this state.

        This value should be decremented when an interface is
        disassociated with a VRF or the corresponding ifOperStatus
        transitions out of the up(1) state to any other state.
       "                       _"Total number of interfaces connected to this VRF
        (independent of ifOperStatus type)."                       X"Denotes mid-level water marker for the number
      of routes that this VRF may hold."                       Y"Denotes high-level water marker for the number of
      routes that this VRF may hold."                       �"Denotes maximum number of routes that this VRF is
      configured to hold.  This value MUST be less than or
      equal to mplsL3VpnVrfConfMaxPossRts unless it is set
      to 0."                       �"The value of sysUpTime at the time of the last
      change of this table entry, which includes changes of
      VRF parameters defined in this table or addition or
      deletion of interfaces associated with this VRF."                      1"This variable is used to create, modify, and/or
        delete a row in this table.
        When a row in this table is in active(1) state, no
        objects in that row can be modified except
        mplsL3VpnVrfConfAdminStatus, mplsL3VpnVrfConfRowStatus,
        and mplsL3VpnVrfConfStorageType."                       A"Indicates the desired operational status of this
         VRF."                       �"The storage type for this VPN VRF entry.
         Conceptual rows having the value 'permanent'
         need not allow write access to any columnar
         objects in the row." "See RFC2579."                     �"This table specifies per-VRF route target association.
         Each entry identifies a connectivity policy supported
         as part of a VPN."                      "An entry in this table is created by an LSR for
        each route target configured for a VRF supporting
        a MPLS L3VPN instance.  The indexing provides an
        ordering per-VRF instance.  See [RFC4364] for a
        complete definition of a route target."                       M"Auxiliary index for route targets configured for a
        particular VRF."                       %"The route target distribution type."                       '"The route target distribution policy."                       ""Description of the route target."                       �"This variable is used to create, modify, and/or
        delete a row in this table.  When a row in this
        table is in active(1) state, no objects in that row
        can be modified except mplsL3VpnVrfRTRowStatus."                       �"The storage type for this VPN route target (RT) entry.
         Conceptual rows having the value 'permanent'
         need not allow write access to any columnar
         objects in the row." "See RFC2579."                     S"This table specifies per MPLS L3VPN VRF Table
        security-related counters."                       �"An entry in this table is created by an LSR for
        every VRF capable of supporting MPLS L3VPN.  Each
        entry in this table is used to indicate security-related
        information for each VRF entry."                      +"Indicates the number of illegally received
        labels on this VPN/VRF.

        Discontinuities in the value of this counter can occur
        at re-initialization of the management system, and at
        other times as indicated by the value of
        mplsL3VpnVrfSecDiscontinuityTime."                      C"The value of sysUpTime on the most recent occasion at
        which any one or more of this entry's counters suffered
        a discontinuity.  If no such discontinuities have
        occurred since the last re-initialization of the local
        management subsystem, then this object contains a zero
        value."                           Q"This table specifies per MPLS L3VPN VRF Table performance
        information."                       f"An entry in this table is created by an LSR for
        every VRF capable of supporting MPLS L3VPN."                      2"Indicates the number of routes added to this VPN/VRF
        since the last discontinuity.  Discontinuities in
        the value of this counter can occur
        at re-initialization of the management system, and at
        other times as indicated by the value of
        mplsL3VpnVrfPerfDiscTime."                      "Indicates the number of routes removed from this VPN/VRF.

        Discontinuities in the value of this counter can occur
        at re-initialization of the management system, and at
        other times as indicated by the value of
        mplsL3VpnVrfPerfDiscTime."                       E"Indicates the number of routes currently used by this
        VRF."                      �"This counter should be incremented when the number of routes
        contained by the specified VRF exceeds or attempts to exceed
        the maximum allowed value as indicated by
        mplsL3VpnVrfMaxRouteThreshold.

        Discontinuities in the value of this counter can occur
        at re-initialization of the management system, and at
        other times as indicated by the value of
        mplsL3VpnVrfPerfDiscTime."                      C"The value of sysUpTime on the most recent occasion at
        which any one or more of this entry's counters suffered
        a discontinuity.  If no such discontinuities have
        occurred since the last re-initialization of the local
        management subsystem, then this object contains a zero
        value."                          M"This table specifies per-interface MPLS L3VPN VRF Table
        routing information.  Entries in this table define VRF routing
        entries associated with the specified MPLS/VPN interfaces.  Note
        that this table contains both BGP and Interior Gateway Protocol
        IGP routes, as both may appear in the same VRF." "[RFC2096]"                    �"An entry in this table is created by an LSR for every route
        present configured (either dynamically or statically) within
        the context of a specific VRF capable of supporting MPLS/BGP
        VPN.  The indexing provides an ordering of VRFs per-VPN
        interface.

        Implementers need to be aware that there are quite a few
        index objects that together can exceed the size allowed
        for an Object Identifier (OID).  So implementers must make
        sure that OIDs of column instances in this table will have
        no more than 128 sub-identifiers, otherwise they cannot be
        accessed using SNMPv1, SNMPv2c, or SNMPv3."                       �"The type of the mplsL3VpnVrfRteInetCidrDest address, as
                defined in the InetAddress MIB.

                Only those address types that may appear in an actual
                routing table are allowed as values of this object." 	"RFC4001"                    "The destination IP address of this route.

                The type of this address is determined by the value of
                the mplsL3VpnVrfRteInetCidrDestType object.

                The values for the index objects
                mplsL3VpnVrfRteInetCidrDest and
                mplsL3VpnVrfRteInetCidrPfxLen must be consistent.  When
                the value of mplsL3VpnVrfRteInetCidrDest is x, then
                the bitwise logical-AND of x with the value of the mask
                formed from the corresponding index object
                mplsL3VpnVrfRteInetCidrPfxLen MUST be
                equal to x.  If not, then the index pair is not
                consistent and an inconsistentName error must be
                returned on SET or CREATE requests."                      U"Indicates the number of leading one bits that form the
                mask to be logical-ANDed with the destination address
                before being compared to the value in the
                mplsL3VpnVrfRteInetCidrDest field.

                The values for the index objects
                mplsL3VpnVrfRteInetCidrDest and
                mplsL3VpnVrfRteInetCidrPfxLen must be consistent.  When
                the value of mplsL3VpnVrfRteInetCidrDest is x, then the
                bitwise logical-AND of x with the value of the mask
                formed from the corresponding index object
                mplsL3VpnVrfRteInetCidrPfxLen MUST be
                equal to x.  If not, then the index pair is not
                consistent and an inconsistentName error must be
                returned on SET or CREATE requests."                      @"This object is an opaque object without any defined
                semantics.  Its purpose is to serve as an additional
                index that may delineate between multiple entries to
                the same destination.  The value { 0 0 } shall be used
                as the default value for this object."                      X"The type of the mplsL3VpnVrfRteInetCidrNextHop address,
                as defined in the InetAddress MIB.

                Value should be set to unknown(0) for non-remote
                routes.

                Only those address types that may appear in an actual
                routing table are allowed as values of this object." 	"RFC4001"                     "On remote routes, the address of the next system en
                route.  For non-remote routes, a zero-length string.
                The type of this address is determined by the value of
                the mplsL3VpnVrfRteInetCidrNHopType object."                       �"The ifIndex value that identifies the local interface
                through which the next hop of this route should be
                reached.  A value of 0 is valid and represents the
                scenario where no interface is specified."                      `"The type of route.  Note that local(3) refers to a
                route for which the next hop is the final destination;
                remote(4) refers to a route for which the next hop is
                not the final destination.

                Routes that do not result in traffic forwarding or
                rejection should not be displayed even if the
                implementation keeps them stored internally.

                reject(2) refers to a route that, if matched, discards
                the message as unreachable and returns a notification
                (e.g., ICMP error) to the message sender.  This is used
                in some protocols as a means of correctly aggregating
                routes.

                blackhole(5) refers to a route that, if matched,
                discards the message silently."                       �"The routing mechanism via which this route was learned.
                Inclusion of values for gateway routing protocols is
                not intended to imply that hosts should support those
                protocols."                      )"The number of seconds since this route was last updated
                or otherwise determined to be correct.  Note that no
                semantics of 'too old' can be implied except through
                knowledge of the routing protocol by which the route
                was learned."                      U"The Autonomous System Number of the next hop.  The
                semantics of this object are determined by the
                routing protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto value.  When this
                object is unknown or not relevant, its value should
                be set to zero."                      ?"The primary routing metric for this route.  The
                semantics of this metric are determined by the
                routing protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto value.  If this
                metric is not used, its value should be set to
                -1."                      @"An alternate routing metric for this route.  The
                semantics of this metric are determined by the routing
                protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto
                value.  If this metric is not used, its value should be
                set to -1."                      @"An alternate routing metric for this route.  The
                semantics of this metric are determined by the routing
                protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto
                value.  If this metric is not used, its value should be
                set to -1."                      /"An alternate routing metric for this route.  The
                semantics of this metric are determined by the routing
                protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto value.  If this metric
                is not used, its value should be set to -1."                      /"An alternate routing metric for this route.  The
                semantics of this metric are determined by the routing
                protocol specified in the route's
                mplsL3VpnVrfRteInetCidrProto value.  If this metric is
                not used, its value should be set to -1."                      �"Index into mplsXCTable that identifies which cross-
        connect entry is associated with this VRF route entry
        by containing the mplsXCIndex of that cross-connect entry.
        The string containing the single-octet 0x00 indicates that
        a label stack is not associated with this route entry.  This
        can be the case because the label bindings have not yet
        been established, or because some change in the agent has
        removed them.

        When the label stack associated with this VRF route is created,
        it MUST establish the associated cross-connect
        entry in the mplsXCTable and then set that index to the value
        of this object.  Changes to the cross-connect object in the
        mplsXCTable MUST automatically be reflected in the value of
        this object.  If this object represents a static routing entry,
        then the manager must ensure that this entry is maintained
        consistently in the corresponding mplsXCTable as well." �"RFC 3813 - Multiprotocol Label Switching (MPLS) Label Switching
        Router (LSR) Management Information base (MIB), C. Srinivasan,
        A. Vishwanathan, and T. Nadeau, June 2004"                     �"The row status variable, used according to row
                installation and removal conventions.
                A row entry cannot be modified when the status is
                marked as active(1)."                               O"Collection of scalar objects required for MPLS VPN
              management."                 J"Collection of objects needed for MPLS VPN VRF
              management."                 P"Collection of objects needed for MPLS VPN interface
              management."                 S"Collection of objects needed for MPLS VPN
              performance information."                 ]"Collection of objects needed to track MPLS VPN
              routing table dropped routes."                 X"Collection of objects needed for MPLS VPN
              security-related information."                 2"Objects required for VRF route table management."                 3"Objects required for VRF route target management."                 ."Objects required for MPLS VPN notifications."                         b"Compliance statement for agents that provide full support
           for the MPLS-L3VPN-STD-MIB"   �"This group is only mandatory for LSRs that
                support tracking the number of routes attempted
                to be added to VRFs." J"Support for createAndWait and notReady is
                not required." J"Support for createAndWait and notReady is
                not required." J"Support for createAndWait and notReady is
                not required."             �"Compliance requirement for implementations that only
                   provide read-only support for MPLS-L3VPN-STD-MIB.
                   Such devices can then be monitored but cannot be
                   configured using this MIB module."   �"This group is only mandatory for LSRs that
                support tracking the number of routes attempted to
                be added to VRFs." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required."            