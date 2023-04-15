 �-- =================================================================
-- Description: MPLS-TE-STD-MIB
-- Reference:   This mib was extracted from RFC 3812
-- =================================================================
                                                                                                    "Copyright (C) The Internet Society (2004). The
            initial version of this MIB module was published
            in RFC 3812. For full legal notices see the RFC
            itself or see: http://www.ietf.org/copyrights/ianamib.html

            This MIB module contains managed object definitions
             for MPLS Traffic Engineering (TE) as defined in:
            1. Extensions to RSVP for LSP Tunnels, Awduche et
             al, RFC 3209, December 2001
            2. Constraint-Based LSP Setup using LDP, Jamoussi
             (Editor), RFC 3212, January 2002
            3. Requirements for Traffic Engineering Over MPLS,
             Awduche, D., Malcolm, J., Agogbua, J., O'Dell, M.,
             and J. McManus, [RFC2702], September 1999"@"        Cheenu Srinivasan
                     Bloomberg L.P.
             Email:  cheenu@bloomberg.net
            
                     Arun Viswanathan
                     Force10 Networks, Inc.
             Email:  arunv@force10networks.com
            
                     Thomas D. Nadeau
                     Cisco Systems, Inc.
             Email:  tnadeau@cisco.com
            
                    Comments about this document should be emailed
                    directly to the MPLS working group mailing list at
                    mpls@uu.net." "200406030000Z" -"Initial version issued as part of RFC 3812."       -- June 3, 2004
          l"This notification is generated when a
            mplsTunnelOperStatus object for one of the
            configured tunnels is about to leave the down state
            and transition into some other state (but not into
            the notPresent state).  This other state is
            indicated by the included value of
            mplsTunnelOperStatus."                P"This notification is generated when a
            mplsTunnelOperStatus object for one of the
            configured tunnels is about to enter the down state
            from some other state (but not from the notPresent
            state).  This other state is indicated by the
            included value of mplsTunnelOperStatus."                :"This notification is generated when a tunnel is
            rerouted. If the mplsTunnelARHopTable is used, then
            this tunnel instance's entry in the
            mplsTunnelARHopTable MAY contain the new path for
            this tunnel some time after this trap is issued by
            the agent."                ="This notification is generated when a tunnel is
            reoptimized. If the mplsTunnelARHopTable is used,
            then this tunnel instance's entry in the
            mplsTunnelARHopTable MAY contain the new path for
            this tunnel some time after this trap is issued by
            the agent."                     �"The number of tunnels configured on this device. A
             tunnel is considered configured if the
             mplsTunnelRowStatus is active(1)."                       �"The number of tunnels active on this device. A
            tunnel is considered active if the
            mplsTunnelOperStatus is up(1)."                       �"The traffic engineering distribution protocol(s)
            used by this LSR. Note that an LSR may support more
            than one distribution protocol simultaneously."                       \"The maximum number of hops that can be specified for
            a tunnel on this device."                      �"This variable indicates the maximum number of
            notifications issued per second. If events occur
            more rapidly, the implementation may simply fail to
            emit these notifications during that period, or may
            queue them until an appropriate time. A value of 0
            means no throttling is applied and events may be
            notified at the rate at which they occur."                          $"This object contains an unused value for
            mplsTunnelIndex, or a zero to indicate
            that none exist. Negative values are not allowed,
            as they do not correspond to valid values of
            mplsTunnelIndex.

            Note that this object offers an unused value
            for an mplsTunnelIndex value at the ingress
            side of a tunnel. At other LSRs the value
            of mplsTunnelIndex SHOULD be taken from the
            value signaled by the MPLS signaling protocol.
            "                      &"The mplsTunnelTable allows new MPLS tunnels to be
            created between an LSR and a remote endpoint, and
            existing tunnels to be reconfigured or removed.
            Note that only point-to-point tunnel segments are
            supported, although multipoint-to-point and point-
            to-multipoint connections are supported by an LSR
            acting as a cross-connect.  Each MPLS tunnel can
            thus have one out-segment originating at this LSR
            and/or one in-segment terminating at this LSR."                      �"An entry in this table represents an MPLS tunnel.
            An entry can be created by a network administrator
            or by an SNMP agent as instructed by an MPLS
            signalling protocol. Whenever a new entry is
            created with mplsTunnelIsIf set to true(1), then a
            corresponding entry is created in ifTable as well
            (see RFC 2863). The ifType of this entry is
            mplsTunnel(150).

            A tunnel entry needs to be uniquely identified across
            a MPLS network. Indices mplsTunnelIndex and
            mplsTunnelInstance uniquely identify a tunnel on
            the LSR originating the tunnel.  To uniquely
            identify a tunnel across an MPLS network requires
            index mplsTunnelIngressLSRId.  The last index
            mplsTunnelEgressLSRId is useful in identifying all
            instances of a tunnel that terminate on the same
            egress LSR." e"1. RFC 2863 - The Interfaces Group MIB, McCloghrie,
            K., and F. Kastenholtz, June 2000 "                    1"Uniquely identifies a set of tunnel instances
            between a pair of ingress and egress LSRs.
            Managers should obtain new values for row
            creation in this table by reading
            mplsTunnelIndexNext. When
            the MPLS signalling protocol is rsvp(2) this value
            SHOULD be equal to the value signaled in the
            Tunnel Id of the Session object. When the MPLS
            signalling protocol is crldp(3) this value
            SHOULD be equal to the value signaled in the
            LSP ID."                      �"Uniquely identifies a particular instance of a
            tunnel between a pair of ingress and egress LSRs.
            It is useful to identify multiple instances of
            tunnels for the purposes of backup and parallel
            tunnels. When the MPLS signaling protocol is
            rsvp(2) this value SHOULD be equal to the LSP Id
            of the Sender Template object. When the signaling
            protocol is crldp(3) there is no equivalent
            signaling object."                      �"Identity of the ingress LSR associated with this
            tunnel instance. When the MPLS signalling protocol
            is rsvp(2) this value SHOULD be equal to the Tunnel
            Sender Address in the Sender Template object and MAY
            be equal to the Extended Tunnel Id field in the
            SESSION object. When the MPLS signalling protocol is
            crldp(3) this value SHOULD be equal to the Ingress
            LSR Router ID field in the LSPID TLV object." �"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001
            2. Constraint-Based LSP Setup using LDP, Jamoussi
            (Editor), RFC 3212, January 2002"                     O"Identity of the egress LSR associated with this
            tunnel instance."                      �"The canonical name assigned to the tunnel. This name
            can be used to refer to the tunnel on the LSR's
            console port.  If mplsTunnelIsIf is set to true
            then the ifName of the interface corresponding to
            this tunnel should have a value equal to
            mplsTunnelName.  Also see the description of ifName
            in RFC 2863." a"RFC 2863 - The Interfaces Group MIB, McCloghrie, K.,
            and F. Kastenholtz, June 2000"                    }"A textual string containing information about the
            tunnel.  If there is no description this object
            contains a zero length string. This object is may
            not be signaled by MPLS signaling protocols,
            consequentally the value of this object at transit
            and egress LSRs MAY be automatically generated or
            absent."                      �"Denotes whether or not this tunnel corresponds to an
            interface represented in the interfaces group
            table. Note that if this variable is set to true
            then the ifName of the interface corresponding to
            this tunnel should have a value equal to
            mplsTunnelName.  Also see the description of ifName
            in RFC 2863.  This object is meaningful only at the
            ingress and egress LSRs." a"RFC 2863 - The Interfaces Group MIB, McCloghrie, K.,
            and F. Kastenholtz, June 2000"                    R"If mplsTunnelIsIf is set to true, then this value
            contains the LSR-assigned ifIndex which corresponds
            to an entry in the interfaces table.  Otherwise
            this variable should contain the value of zero
            indicating that a valid ifIndex was not assigned to
            this tunnel interface." a"RFC 2863 - The Interfaces Group MIB, McCloghrie, K.,
            and F. Kastenholtz, June 2000"                     �"Denotes the entity that created and is responsible
            for managing this tunnel. This column is
            automatically filled by the agent on creation of a
            row."                      0"This value signifies the role that this tunnel
            entry/instance represents. This value MUST be set
            to head(1) at the originating point of the tunnel.
            This value MUST be set to transit(2) at transit
            points along the tunnel, if transit points are
            supported. This value MUST be set to tail(3) at the
            terminating point of the tunnel if tunnel tails are
            supported.

            The value headTail(4) is provided for tunnels that
            begin and end on the same LSR."                      @"This variable points to a row in the mplsXCTable.
            This table identifies the segments that compose
            this tunnel, their characteristics, and
            relationships to each other. A value of zeroDotZero
            indicates that no LSP has been associated with this
            tunnel yet." �"Srinivasan, C., Viswanathan, A., and T. Nadeau,
            Multiprotocol Label Switching (MPLS) Label Switching
            Router (LSR) Management Information Base (MIB), RFC 3813,
            June 2004"                     J"The signalling protocol, if any, used to setup this
            tunnel."                       ."Indicates the setup priority of this tunnel." �"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001
            2. Constraint-Based LSP Setup using LDP, Jamoussi
            (Editor), RFC 3212, January 2002"                     1"Indicates the holding priority for this tunnel." �"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001

            2. Constraint-Based LSP Setup using LDP, Jamoussi
            (Editor), RFC 3212, January 2002"                    7"This bit mask indicates optional session values for
            this tunnel. The following describes these bit
            fields:

            fastReroute  This flag indicates that the any tunnel
            hop may choose to reroute this tunnel without
            tearing it down.  This flag permits transit routers
            to use a local repair mechanism which may result in
            violation of the explicit routing of this tunnel.
            When a fault is detected on an adjacent downstream
            link or node, a transit router can re-route traffic
            for fast service restoration.

            mergingPermitted  This flag permits transit routers
            to merge this session with other RSVP sessions for
            the purpose of reducing resource overhead on
            downstream transit routers, thereby providing
            better network scaling.

            isPersistent  Indicates whether this tunnel should
            be restored automatically after a failure occurs.

            isPinned  This flag indicates whether the loose-
            routed hops of this tunnel are to be pinned.

            recordRoute  This flag indicates whether or not the
            signalling protocol should remember the tunnel path
            after it has been signaled." f"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001."                     �"Indicates that the local repair mechanism is in use
            to maintain this tunnel (usually in the face of an
            outage of the link it was previously routed over)."                      e"This variable represents a pointer to the traffic
            parameter specification for this tunnel.  This
            value may point at an entry in the
            mplsTunnelResourceEntry to indicate which
            mplsTunnelResourceEntry is to be assigned to this
            LSP instance.  This value may optionally point at
            an externally defined traffic parameter
            specification table.  A value of zeroDotZero
            indicates best-effort treatment.  By having the
            same value of this object, two or more LSPs can
            indicate resource sharing."                       "Specifies the instance index of the primary instance
            of this tunnel. More details of the definition of
            tunnel instances and the primary tunnel instance
            can be found in the description of the TEXTUAL-CONVENTION
            MplsTunnelInstanceIndex."                      r"This value indicates which priority, in descending
            order, with 0 indicating the lowest priority,
            within a group of tunnel instances. A group of
            tunnel instances is defined as a set of LSPs with
            the same mplsTunnelIndex in this table, but with a
            different mplsTunnelInstance. Tunnel instance
            priorities are used to denote the priority at which
            a particular tunnel instance will supercede
            another. Instances of tunnels containing the same
            mplsTunnelInstancePriority will be used for load
            sharing."                       �"Index into the mplsTunnelHopTable entry that
            specifies the explicit route hops for this tunnel.
            This object is meaningful only at the head-end of
            the tunnel."                      "This value denotes the configured path that was
            chosen for this tunnel. This value reflects the
            secondary index into mplsTunnelHopTable. This path
            may not exactly match the one in
            mplsTunnelARHopTable due to the fact that some CSPF
            modification may have taken place. See
            mplsTunnelARHopTable for the actual path being
            taken by the tunnel. A value of zero denotes that
            no path is currently in use or available."                       �"Index into the mplsTunnelARHopTable entry that
            specifies the actual hops traversed by the tunnel.
            This is automatically updated by the agent when the
            actual hops becomes available."                      "Index into the mplsTunnelCHopTable entry that
            specifies the computed hops traversed by the
            tunnel. This is automatically updated by the agent
            when computed hops become available or when
            computed hops get modified."                       �"A link satisfies the include-any constraint if and
            only if the constraint is zero, or the link and the
            constraint have a resource class in common." f"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001."                     �"A link satisfies the include-all constraint if and
            only if the link contains all of the administrative
            groups specified in the constraint." f"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001."                     �"A link satisfies the exclude-any constraint if and
            only if the link contains none of the
            administrative groups specified in the constraint." f"1. RSVP-TE: Extensions to RSVP for LSP Tunnels,
            Awduche et al, RFC 3209, December 2001."                     �"This value represents the aggregate up time for all
            instances of this tunnel, if available. If this
            value is unavailable, it MUST return a value of 0."                       j"This value identifies the total time that this
            tunnel instance's operStatus has been Up(1)."                       �"Specifies the total time the primary instance of
            this tunnel has been active. The primary instance
            of this tunnel is defined in
            mplsTunnelPrimaryInstance."                       b"Specifies the number of times the actual path for
            this tunnel instance has changed."                       d"Specifies the time since the last change to the
            actual path for this tunnel instance."                       �"Specifies the value of SysUpTime when the first
            instance of this tunnel came into existence.
            That is, when the value of mplsTunnelOperStatus
            was first set to up(1)."                       "Specifies the number of times the state
            (mplsTunnelOperStatus) of this tunnel instance has
            changed."                       G"Indicates the desired operational status of this
            tunnel."                       �"Indicates the actual operational status of this
            tunnel, which is typically but not limited to, a
            function of the state of individual segments of
            this tunnel."                      @"This variable is used to create, modify, and/or
            delete a row in this table.  When a row in this
            table is in active(1) state, no objects in that row
            can be modified by the agent except
            mplsTunnelAdminStatus, mplsTunnelRowStatus and
            mplsTunnelStorageType."                       �"The storage type for this tunnel entry.
                     Conceptual rows having the value 'permanent'
                     need not allow write-access to any columnar
                     objects in the row."                      �"This object contains an appropriate value to be used
            for mplsTunnelHopListIndex when creating entries in
            the mplsTunnelHopTable.  If the number of
            unassigned entries is exhausted, a retrieval
            operation will return a value of 0.  This object
            may also return a value of 0 when the LSR is unable
            to accept conceptual row creation, for example, if
            the mplsTunnelHopTable is implemented as read-only.
            To obtain the value of mplsTunnelHopListIndex for a
            new entry in the mplsTunnelHopTable, the manager
            issues a management protocol retrieval operation to
            obtain the current value of mplsTunnelHopIndex.

            When the SET is performed to create a row in the
            mplsTunnelHopTable, the Command Responder (agent)
            must determine whether the value is indeed still
            unused; Two Network Management Applications may
            attempt to create a row (configuration entry)
            simultaneously and use the same value. If it is
            currently unused, the SET succeeds and the Command
            Responder (agent) changes the value of this object,
            according to an implementation-specific algorithm.
            If the value is in use, however, the SET fails.  The
            Network Management Application must then re-read
            this variable to obtain a new usable value."                      ;"The mplsTunnelHopTable is used to indicate the hops,
            strict or loose, for an instance of an MPLS tunnel
            defined in mplsTunnelTable, when it is established
            via signalling, for the outgoing direction of the
            tunnel. Thus at a transit LSR, this table contains
            the desired path of the tunnel from this LSR
            onwards. Each row in this table is indexed by
            mplsTunnelHopListIndex which corresponds to a group
            of hop lists or path options.  Each row also has a
            secondary index mplsTunnelHopIndex, which indicates
            a group of hops (also known as a path option).
            Finally, the third index, mplsTunnelHopIndex
            indicates the specific hop information for a path
            option. In case we want to specify a particular
            interface on the originating LSR of an outgoing
            tunnel by which we want packets to exit the LSR,
            we specify this as the first hop for this tunnel in
            mplsTunnelHopTable."                       �"An entry in this table represents a tunnel hop.  An
            entry is created by a network administrator for
            signaled ERLSP set up by an MPLS signalling
            protocol."                       \"Primary index into this table identifying a
            particular explicit route object."                       �"Secondary index into this table identifying a
            particular group of hops representing a particular
            configured path. This is otherwise known as a path
            option."                       K"Tertiary index into this table identifying a
            particular hop."                      u"The Hop Address Type of this tunnel hop.

                     The value of this object cannot be changed
                     if the value of the corresponding
                     mplsTunnelHopRowStatus object is 'active'.

                     Note that lspid(5) is a valid option only
                     for tunnels signaled via CRLDP.
                     "                      �"The Tunnel Hop Address for this tunnel hop.

                     The type of this address is determined by the
                     value of the corresponding mplsTunnelHopAddrType.

                     The value of this object cannot be changed
                     if the value of the corresponding
                     mplsTunnelHopRowStatus object is 'active'.
                     "                     -- IPv4 address 0.0.0.0
M"If mplsTunnelHopAddrType is set to ipv4(1) or
                     ipv6(2), then this value will contain an
                     appropriate prefix length for the IP address in
                     object mplsTunnelHopIpAddr. Otherwise this value
                     is irrelevant and should be ignored.
                     "                       �"If mplsTunnelHopAddrType is set to asnumber(3), then
            this value will contain the AS number of this hop.
            Otherwise the agent should set this object to zero-
            length string and the manager should ignore this."                      �"If mplsTunnelHopAddrType is set to unnum(4), then
            this value will contain the interface identifier of
            the unnumbered interface for this hop. This object
            should be used in conjunction with
            mplsTunnelHopIpAddress which would contain the LSR
            Router ID in this case. Otherwise the agent should
            set this object to zero-length string and the
            manager should ignore this."                      f"If mplsTunnelHopAddrType is set to lspid(5), then
            this value will contain the LSPID of a tunnel of
            this hop. The present tunnel being configured is
            tunneled through this hop (using label stacking).
            This object is otherwise insignificant and should
            contain a value of 0 to indicate this fact."                       �"Denotes whether this tunnel hop is routed in a
            strict or loose fashion. The value of this object
            has no meaning if the mplsTunnelHopInclude object
            is set to 'false'."                      
"If this value is set to true, then this indicates
            that this hop must be included in the tunnel's
            path. If this value is set to 'false', then this hop
            must be avoided when calculating the path for this
            tunnel. The default value of this object is 'true',
            so that by default all indicated hops are included
            in the CSPF path computation. If this object is set
            to 'false' the value of mplsTunnelHopType should be
            ignored."                       �"The description of this series of hops as they
            relate to the specified path option. The
            value of this object SHOULD be the same for
            each hop in the series that comprises a
            path option."                      �"If this value is set to dynamic, then the user
            should only specify the source and destination of
            the path and expect that the CSPF will calculate
            the remainder of the path.  If this value is set to
            explicit, the user should specify the entire path
            for the tunnel to take.  This path may contain
            strict or loose hops.  Each hop along a specific
            path SHOULD have this object set to the same value"                      /"This variable is used to create, modify, and/or
            delete a row in this table.  When a row in this
            table is in active(1) state, no objects in that row
            can be modified by the agent except
            mplsTunnelHopRowStatus and
            mplsTunnelHopStorageType."                       �"The storage type for this Hop entry. Conceptual
            rows having the value 'permanent' need not
            allow write-access to any columnar objects
            in the row."                      �"This object contains the next appropriate value to
            be used for mplsTunnelResourceIndex when creating
            entries in the mplsTunnelResourceTable. If the
            number of unassigned entries is exhausted, a
            retrieval operation will return a value of 0.  This
            object may also return a value of 0 when the LSR is
            unable to accept conceptual row creation, for
            example, if the mplsTunnelTable is implemented as
            read-only.  To obtain the mplsTunnelResourceIndex
            value for a new entry, the manager must first issue
            a management protocol retrieval operation to obtain
            the current value of this object.

            When the SET is performed to create a row in the
            mplsTunnelResourceTable, the Command Responder
            (agent) must determine whether the value is indeed
            still unused; Two Network Management Applications
            may attempt to create a row (configuration entry)
            simultaneously and use the same value. If it is
            currently unused, the SET succeeds and the Command
            Responder (agent) changes the value of this object,
            according to an implementation-specific algorithm.
            If the value is in use, however, the SET fails.  The
            Network Management Application must then re-read
            this variable to obtain a new usable value."                      #"The mplsTunnelResourceTable allows a manager to
            specify which resources are desired for an MPLS
            tunnel.  This table also allows several tunnels to
            point to a single entry in this table, implying
            that these tunnels should share resources."                      �"An entry in this table represents a set of resources
            for an MPLS tunnel.  An entry can be created by a
            network administrator or by an SNMP agent as
            instructed by any MPLS signalling protocol.
            An entry in this table referenced by a tunnel instance
            with zero mplsTunnelInstance value indicates a
            configured set of resource parameter. An entry
            referenced by a tunnel instance with a non-zero
            mplsTunnelInstance reflects the in-use resource
            parameters for the tunnel instance which may have
            been negotiated or modified by the MPLS signaling
            protocols."                       "Uniquely identifies this row."                       �"The maximum rate in bits/second.  Note that setting
            mplsTunnelResourceMaxRate,
            mplsTunnelResourceMeanRate, and
            mplsTunnelResourceMaxBurstSize to 0 indicates best-
            effort treatment."                       �"This object is copied into an instance of
            mplsTrafficParamMeanRate in the
            mplsTrafficParamTable. The OID of this table entry
            is then copied into the corresponding
            mplsInSegmentTrafficParamPtr."                       ""The maximum burst size in bytes."                       �"The mean burst size in bytes.  The implementations
            which do not implement this variable must return
            a noSuchObject exception for this object and must
            not allow a user to set this object."                       �"The Excess burst size in bytes.  The implementations
            which do not implement this variable must return
            noSuchObject exception for this object and must
            not allow a user to set this value." $"CR-LDP Specification, Section 4.3."                     �"The granularity of the availability of committed
            rate.  The implementations which do not implement
            this variable must return unspecified(1) for this
            value and must not allow a user to set this value." $"CR-LDP Specification, Section 4.3."                     �"The relative weight for using excess bandwidth above
            its committed rate.  The value of 0 means that
            weight is not applicable for the CR-LSP." $"CR-LDP Specification, Section 4.3."                    9"This variable is used to create, modify, and/or
            delete a row in this table.  When a row in this
            table is in active(1) state, no objects in that row
            can be modified by the agent except
            mplsTunnelResourceRowStatus and
            mplsTunnelResourceStorageType."                       �"The storage type for this Hop entry. Conceptual
            rows having the value 'permanent' need not
            allow write-access to any columnar objects
            in the row."                      �"The mplsTunnelARHopTable is used to indicate the
            hops for an MPLS tunnel defined in mplsTunnelTable,
            as reported by the MPLS signalling protocol. Thus at
            a transit LSR, this table (if the table is supported
            and if the signaling protocol is recording actual
            route information) contains the actual route of the
            whole tunnel. If the signaling protocol is not
            recording the actual route, this table MAY report
            the information from the mplsTunnelHopTable or the
            mplsTunnelCHopTable.

            Each row in this table is indexed by
            mplsTunnelARHopListIndex. Each row also has a
            secondary index mplsTunnelARHopIndex, corresponding
            to the next hop that this row corresponds to.

            Please note that since the information necessary to
            build entries within this table is not provided by
            some MPLS signalling protocols, implementation of
            this table is optional. Furthermore, since the
            information in this table is actually provided by
            the MPLS signalling protocol after the path has
            been set-up, the entries in this table are provided
            only for observation, and hence, all variables in
            this table are accessible exclusively as read-
            only.

            Note also that the contents of this table may change
            while it is being read because of re-routing
            activities. A network administrator may verify that
            the actual route read is consistent by reference to
            the mplsTunnelLastPathChange object."                       �"An entry in this table represents a tunnel hop.  An
            entry is created by the agent for signaled ERLSP
            set up by an MPLS signalling protocol."                       X"Primary index into this table identifying a
            particular recorded hop list."                       N"Secondary index into this table identifying the
            particular hop."                       �"The Hop Address Type of this tunnel hop.

            Note that lspid(5) is a valid option only
            for tunnels signaled via CRLDP."                      �"The Tunnel Hop Address for this tunnel hop.

            The type of this address is determined by the
            value of the corresponding mplsTunnelARHopAddrType.
            If mplsTunnelARHopAddrType is set to unnum(4),
            then this value contains the LSR Router ID of the
            unnumbered interface. Otherwise the agent SHOULD
            set this object to the zero-length string and the
            manager should ignore this object."                     -- IPv4 address 0.0.0.0
�"If mplsTunnelARHopAddrType is set to unnum(4), then
            this value will contain the interface identifier of
            the unnumbered interface for this hop. This object
            should be used in conjunction with
            mplsTunnelARHopIpAddr which would contain the LSR
            Router ID in this case. Otherwise the agent should
            set this object to zero-length string and the
            manager should ignore this."                       �"If mplsTunnelARHopAddrType is set to lspid(5), then
            this value will contain the LSP ID of this hop.
            This object is otherwise insignificant and should
            contain a value of 0 to indicate this fact."                      a"The mplsTunnelCHopTable is used to indicate the
            hops, strict or loose, for an MPLS tunnel defined
            in mplsTunnelTable, as computed by a constraint-
            based routing protocol, based on the
            mplsTunnelHopTable for the outgoing direction of
            the tunnel. Thus at a transit LSR, this table (if
            the table is supported) MAY contain the path
            computed by the CSPF engine on (or on behalf of)
            this LSR. Each row in this table is indexed by
            mplsTunnelCHopListIndex.  Each row also has a
            secondary index mplsTunnelCHopIndex, corresponding
            to the next hop that this row corresponds to. In
            case we want to specify a particular interface on
            the originating LSR of an outgoing tunnel by which
            we want packets to exit the LSR, we specify this as
            the first hop for this tunnel in
            mplsTunnelCHopTable.

            Please note that since the information necessary to
            build entries within this table may not be
            supported by some LSRs, implementation of this
            table is optional. Furthermore, since the
            information in this table describes the path
            computed by the CSPF engine the entries in this
            table are read-only."                      B"An entry in this table represents a tunnel hop.  An
            entry in this table is created by a path
            computation engine using CSPF techniques applied to
            the information collected by routing protocols and
            the hops specified in the corresponding
            mplsTunnelHopTable."                       X"Primary index into this table identifying a
            particular computed hop list."                       N"Secondary index into this table identifying the
            particular hop."                       �"The Hop Address Type of this tunnel hop.

            Note that lspid(5) is a valid option only
            for tunnels signaled via CRLDP."                      �"The Tunnel Hop Address for this tunnel hop.

            The type of this address is determined by the
            value of the corresponding mplsTunnelCHopAddrType.

            If mplsTunnelCHopAddrType is set to unnum(4), then
            this value will contain the LSR Router ID of the
            unnumbered interface. Otherwise the agent should
            set this object to the zero-length string and the
            manager SHOULD ignore this object."                     -- IPv4 address 0.0.0.0
&"If mplsTunnelCHopAddrType is set to ipv4(1) or
             ipv6(2), then this value will contain an
             appropriate prefix length for the IP address in
             object mplsTunnelCHopIpAddr. Otherwise this value
             is irrelevant and should be ignored.
            "                      "If mplsTunnelCHopAddrType is set to asnumber(3),
            then this value will contain the AS number of this
            hop. Otherwise the agent should set this object to
            zero-length string and the manager should ignore
            this."                      �"If mplsTunnelCHopAddrType is set to unnum(4), then
            this value will contain the unnumbered interface
            identifier of this hop. This object should be used
            in conjunction with mplsTunnelCHopIpAddr which
            would contain the LSR Router ID in this case.

            Otherwise the agent should set this object to zero-
            length string and the manager should ignore this."                       �"If mplsTunnelCHopAddrType is set to lspid(5), then
            this value will contain the LSP ID of this hop.
            This object is otherwise insignificant and should
            contain a value of 0 to indicate this fact."                       Y"Denotes whether this is tunnel hop is routed in a
            strict or loose fashion."                       T"This table provides per-tunnel instance MPLS
            performance information."                       �"An entry in this table is created by the LSR for
            every tunnel.  Its is an extension to
            mplsTunnelEntry."                       �"Number of packets forwarded by the tunnel.
            This object should represents the 32-bit
            value of the least significant part of the
            64-bit value if both mplsTunnelPerfHCPackets
            is returned."                       T"High capacity counter for number of packets
            forwarded by the tunnel. "                       P"Number of packets dropped because of errors or for
            other reasons."                       �"Number of bytes forwarded by the tunnel.
            This object should represents the 32-bit
            value of the least significant part of the
            64-bit value if both mplsTunnelPerfHCBytes
            is returned."                       Q"High capacity counter for number of bytes forwarded
            by the tunnel."                      �"The mplsTunnelCRLDPResTable allows a manager to
            specify which CR-LDP-specific resources are desired
            for an MPLS tunnel if that tunnel is signaled using
            CR-LDP. Note that these attributes are in addition
            to those specified in mplsTunnelResourceTable. This
            table also allows several tunnels to point to a
            single entry in this table, implying that these
            tunnels should share resources."                      H"An entry in this table represents a set of resources
            for an MPLS tunnel established using CRLDP
            (mplsTunnelSignallingProto equal to crldp (3)). An
            entry can be created by a network administrator or
            by an SNMP agent as instructed by any MPLS
            signalling protocol."                       "The mean burst size in bytes."                       !"The Excess burst size in bytes." $"CR-LDP Specification, Section 4.3."                     E"The granularity of the availability of committed
            rate." $"CR-LDP Specification, Section 4.3."                     �"The relative weight for using excess bandwidth above
            its committed rate.  The value of 0 means that
            weight is not applicable for the CR-LSP." $"CR-LDP Specification, Section 4.3."                    �"The value of the 1 byte Flags conveyed as part of
            the traffic parameters during the establishment of
            the CRLSP. The bits in this object are to be
            interpreted as follows.

            +--+--+--+--+--+--+--+--+
            | Res |F6|F5|F4|F3|F2|F1|
            +--+--+--+--+--+--+--+--+

            Res - These bits are reserved. Zero on transmission.
            Ignored on receipt.
            F1 - Corresponds to the PDR.
            F2 - Corresponds to the PBS.
            F3 - Corresponds to the CDR.
            F4 - Corresponds to the CBS.
            F5 - Corresponds to the EBS.
            F6 - Corresponds to the Weight.

            Each flag if is a Negotiable Flag corresponding to a
            Traffic Parameter. The Negotiable Flag value zero
            denotes Not Negotiable and value one denotes
            Negotiable." n"1. Section 4.3, Constraint-Based LSP Setup using
            LDP, Jamoussi (Editor), RFC 3212, January 2002"                    9"This variable is used to create, modify, and/or
            delete a row in this table.  When a row in this
            table is in active(1) state, no objects in that row
            can be modified by the agent except
            mplsTunnelCRLDPResRowStatus and
            mplsTunnelCRLDPResStorageType."                       �"The storage type for this CR-LDP Resource entry.
            Conceptual rows having the value 'permanent'
            need not allow write-access to any columnar
            objects in the row."                       �"If this object is true, then it enables the
            generation of mplsTunnelUp and mplsTunnelDown
            traps, otherwise these traps are not emitted."                              �"Necessary, but not sufficient, set of objects to
            implement tunnels.  In addition, depending on the
            type of the tunnels supported (for example,
            manually configured or signaled, persistent or non-
            persistent, etc.), the following other groups
            defined below are mandatory: mplsTunnelManualGroup
            and/or mplsTunnelSignaledGroup,
            mplsTunnelIsNotIntfcGroup and/or
            mplsTunnelIsIntfcGroup."                 I"Object(s) needed to implement manually configured
            tunnels."                 /"Objects needed to implement signaled tunnels."                 1"Scalar object needed to implement MPLS tunnels."                 G"Objects needed to implement tunnels that are
            interfaces."                 K"Objects needed to implement tunnels that are not
            interfaces."                 e"Set of objects implemented for resources applicable
            for tunnels signaled using CR-LDP."                 R"Set of notifications implemented in this module.
            None is mandatory."                         d"Compliance statement for agents that provide full
            support the MPLS-TE-STD-MIB module."   b"This group is mandatory for devices which support
             manual configuration of tunnels." Y"This group is mandatory for devices which support
             signaled tunnel set up." b"This group is mandatory for devices which support
             tunnels that are not interfaces." ^"This group is mandatory for devices which support
             tunnels that are interfaces." �"Objects in this group are required by
             implementations supporting the CR-LDP protocol for
             signalling of TE tunnels." �"This group is mandatory for those implementations
                      which can implement the notifications
                      contained in this group." P"Support for createAndWait and notReady is not
                      required." P"Support for createAndWait and notReady is not
                      required." P"Support for createAndWait and notReady is
                      not required."             �"Compliance requirement for implementations that only
            provide read-only support for MPLS-TE-STD-MIB.
            Such devices can then be monitored but cannot be
            configured using this MIB modules."   b"This group is mandatory for devices which support
             manual configuration of tunnels." Y"This group is mandatory for devices which support
             signaled tunnel set up." b"This group is mandatory for devices which support
             tunnels that are not interfaces." ^"This group is mandatory for devices which support
             tunnels that are interfaces." �"Objects in this group are required by
             implementations supporting the CR-LDP protocol for
             signalling of TE tunnels." �"This group is mandatory for those implementations
                      which can implement the notifications
                      contained in this group." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." X"Only up and down states must be supported. Write
             access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." M"loose(2) need not be supported. Write access is
             not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required."            