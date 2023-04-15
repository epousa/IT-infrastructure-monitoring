-- ===========================================================================
-- Description: MSDP MIB
-- Reference:   Module(MSDP-MIB) Extracted from RFC4624.TXT,from 4813 to 49606.
-- ===========================================================================
                                                                                         �"An experimental MIB module for MSDP Management and
            Monitoring.
            Copyright (C) The Internet Society 2006.  This version of
            this MIB module is part of RFC 4624; see the RFC itself
            for full legal notices."�"Bill Fenner
            75 Willow Road
            Menlo Park, CA  94025
            Phone: +1 650 867 6073
            E-mail: fenner@research.att.com

            Dave Thaler
            One Microsoft Way
            Redmond, WA  98052
            Phone: +1 425 703 8835
            Email: dthaler@microsoft.com

            MBONED Working Group: mboned@lists.uoregon.edu" "200608010000Z" )"Initial version, published as RFC 4624."                       �"The state of MSDP on this MSDP speaker - globally enabled
            or disabled.

            Changes to this object should be stored to non-volatile
            memory."                      #"The lifetime given to SA cache entries when created or
            refreshed.  This is the [SG-State-Period] in the MSDP
            spec.  A value of 0 means no SA caching is done by this
            MSDP speaker.

            Changes to this object should be stored to non-volatile
            memory.

            This object does not measure time per se; instead, it
            is the delta from the time at which an SA message is
            received at which it should be expired if not refreshed.
            (i.e., it is the value of msdpSACacheExpiryTime
            immediately after receiving an SA message applying to
            that row.)  As such, TimeInterval would be a more
            appropriate SYNTAX; it remains TimeTicks for backwards
            compatibility." "RFC 3618 section 5.3"                     4"The total number of entries in the SA Cache table."                       �"The Rendezvous Point (RP) address used when sourcing
            MSDP SA messages.  May be 0.0.0.0 on non-RPs.

            Changes to this object should be stored to non-volatile
            memory."                      �"The (conceptual) table listing group ranges and MSDP peers
            used when deciding where to send an SA Request message, when
            required.  If SA Requests are not enabled, this table may be
            empty.

            In order to choose a peer to whom to send an SA Request for
            a given group, G, the subset of entries in this table whose
            (msdpRequestsPeerType, msdpRequestsPeer) tuple represents a
            peer whose msdpPeerState is established are examined.  The
            set is further reduced by examining only those entries for
            which msdpPeerRequestsGroupAddressType equals the address
            type of G.  The entries with the highest value of
            msdpRequestsGroupPrefix are considered, where the group G
            falls within the range described by the combination of
            msdpRequestsGroup and msdpRequestsGroupPrefix.  (This
            sequence is commonly known as a 'longest-match' lookup.)

            Finally, if multiple entries remain, the entry with the
            lowest value of msdpRequestsPriority is chosen.  The SA
            Request message is sent to the peer described by this row."                       �"An entry (conceptual row) representing a group range
            used when deciding where to send an SA Request
            message."                       �"The group address that, when combined with the mask
            in this entry, represents the group range to which
            this row applies."                       �"The mask that, when combined with the group address
            in this entry, represents the group range to which
            this row applies."                      >"The peer to which MSDP SA Requests for groups matching
            this entry's group range will be sent.  This object,
            combined with msdpRequestsPeerType, must match the INDEX
            of a row in the msdpPeerTable, and to be considered,
            this peer's msdpPeerState must be established."                       n"The status of this row, by which new rows may be added
            to the table or old rows may be deleted."                       :"The (conceptual) table listing the MSDP speaker's peers."                       �"An entry (conceptual row) representing an MSDP peer.

            If row creation is supported, dynamically added rows are
            added to the system's stable configuration (corresponding
            to a StorageType value of nonVolatile).  "                       &"The address of the remote MSDP peer."                       6"The state of the MSDP TCP connection with this peer."                      G"The number of SA messages received from this peer that
            failed the Peer-RPF check.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      1"The number of MSDP SA messages received on this
            connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      2"The number of MSDP SA messages transmitted on this
            connection.
            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      9"The number of MSDP SA-Request messages received on this
            connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      <"The number of MSDP SA-Request messages transmitted on
            this connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      :"The number of MSDP SA-Response messages received on this
            connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      A"The number of MSDP SA Response messages transmitted on
            this TCP connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      ^"The total number of MSDP messages, excluding encapsulated
            data packets, received on this TCP connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      a"The total number of MSDP messages, excluding encapsulated
            data packets, transmitted on this TCP connection.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      <"The total number of encapsulated data packets received
            from this peer.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                      6"The total number of encapsulated data packets sent to
            this peer.

            Discontinuities in the value of this counter can occur at
            re-initialization of the management system, and at other
            times as indicated by the value of
            msdpPeerDiscontinuityTime."                       ^"The total number of times the MSDP FSM transitioned into
            the ESTABLISHED state." "RFC 3618 section 11"                     �"This timestamp is set to the value of sysUpTime when a
            peer transitions into or out of the ESTABLISHED state.
            It is set to zero when the MSDP speaker is booted." "RFC 3618 section 11"                     �"The sysUpTime value when the last MSDP message was
            received from the peer.  It is set to zero when the MSDP
            speaker is booted."                       N"The local IP address used for this entry's MSDP TCP
            connection."                       V"Time interval, in seconds, for the [ConnectRetry-period]
            for this peer." "RFC 3618 section 5.6"                    "Time interval, in seconds, for the [HoldTime-Period]
            configured for this MSDP speaker with this peer.  If the
            value of this object is zero (0), the MSDP connection is
            never torn down due to the absence of messages from the
            peer." "RFC 3618 section 5.4"                    *"Time interval, in seconds, for the [KeepAlive-Period]
            configured for this MSDP speaker with this peer.  If the
            value of this object is zero (0), no periodic KEEPALIVE
            messages are sent to the peer after the MSDP connection
            has been established." "RFC 3618 section 5.5"                     {"The minimum TTL a packet is required to have before it
            may be forwarded using SA encapsulation to this peer."                      P"This object indicates whether to process MSDP SA
            Request messages from this peer.  If True(1), MSDP SA
            Request messages from this peer are processed and replied
            to (if appropriate) with SA Response messages.  If
            False(2), MSDP SA Request messages from this peer are
            silently ignored.  It defaults to False when
            msdpCacheLifetime is 0 and to True when msdpCacheLifetime
            is non-0.

            This object is deprecated because MSDP SA Requests were
            removed from the MSDP specification."                      K"The RowStatus object by which peers can be added and
            deleted.  A transition to 'active' will cause the MSDP
            'Enable MSDP peering with P' Event to be generated.  A
            transition out of the 'active' state will cause the MSDP
            'Disable MSDP peering with P' Event to be generated.
            Care should be used in providing write access to this
            object without adequate authentication.

            msdpPeerRemoteAddress is the only variable that must be
            set to a valid value before the row can be activated.
            Since this is the table's INDEX, a row can be activated
            by simply setting the msdpPeerStatus variable.

            It is possible to modify other columns in the same
            conceptual row when the status value is active(1)." "RFC 3618 section 11.1"                     M"The remote port for the TCP connection between the MSDP
            peers."                       L"The local port for the TCP connection between the MSDP
            peers."                       \"The encapsulation in use when encapsulating data in SA
            messages to this peer."                       b"The number of times the state machine has transitioned
            from INACTIVE to CONNECTING."                       �"The number of MSDP Notification messages received from
            this peer.
            This object is deprecated because MSDP Notifications have
            been removed from the spec."                       �"The number of MSDP Notification messages transmitted to
            this peer.

            This object is deprecated because MSDP Notifications have
            been removed from the spec."                      �"The last error code and subcode received via Notification
            from this peer.  If no error has occurred, this field is
            zero.  Otherwise, the first byte of this two-byte OCTET
            STRING contains the O-bit and error code, and the second
            byte contains the subcode.
            This object is deprecated because MSDP Notifications have
            been removed from the spec."                      "The value of sysUpTime on the most recent occasion at
            which one or more of this entry's counters suffered a
            discontinuity.  See the DESCRIPTION of each object to see
            if it is expected to have discontinuities.  These
            discontinuities may occur at peer connection
            establishment.

            If no such discontinuities have occurred since the last
            reinitialization of the local management subsystem, then
            this object contains a zero value."                       o"The (conceptual) table listing the MSDP SA advertisements
            currently in the MSDP speaker's cache."                      �"An entry (conceptual row) representing an MSDP SA
            advertisement.  The INDEX to this table includes
            msdpSACacheOriginRP for diagnosing incorrect MSDP
            advertisements; normally, a Group and Source pair would
            be unique.

            Row creation is not permitted; msdpSACacheStatus may only
            be used to delete rows from this table."                       *"The group address of the SA Cache entry."                       +"The source address of the SA Cache entry."                       �"The RP of the SA Cache entry.  This field is in the INDEX
            in order to catch multiple RP's advertising the same
            source and group."                      "The peer from which this SA Cache entry was last
            accepted.  This address must correspond to the
            msdpPeerRemoteAddress value for a row in the MSDP Peer
            Table.  This should be 0.0.0.0 on the router that
            originated the entry."                      �"The peer from which an SA message corresponding to this
            cache entry would be accepted (i.e., the RPF peer for
            msdpSACacheOriginRP).  This may be different than
            msdpSACachePeerLearnedFrom if this entry was created by
            an MSDP SA-Response.  This address must correspond to
            the msdpPeerRemoteAddress value for a row in the MSDP
            Peer Table, or it may be 0.0.0.0 if no RPF peer exists."                       �"The number of MSDP SA messages received relevant to this
            cache entry.  This object must be initialized to zero
            when creating a cache entry."                       �"The number of MSDP-encapsulated data packets received
            relevant to this cache entry.  This object must be
            initialized to zero when creating a cache entry."                       �"The time since this entry was first placed in the SA
            cache.
            The first epoch is the time that the entry was first
            placed in the SA cache, and the second epoch is the
            current time."                       �"The time remaining before this entry will expire from
            the SA cache.

            The first epoch is now, and the second epoch is the time
            that the entry will expire."                      �"The status of this row in the table.  The only allowable
            actions are to retrieve the status, which will be
            'active', or to set the status to 'destroy' in order to
            remove this entry from the cache.

            Row creation is not permitted.

            No columnar objects are writable, so there are none that
            may be changed while the status value is active(1)."                       L"The (conceptual) table listing MSDP Mesh Group
            configuration."                      "An entry (conceptual row) representing a peer in an MSDP
            Mesh Group.

            If row creation is supported, dynamically added rows are
            added to the system's stable configuration
            (corresponding to a StorageType value of nonVolatile)."                       "The name of the mesh group."                       �"A peer address that is a member of the mesh group with
            name msdpMeshGroupName.  The msdpMeshGroupPeerAddress
            must match a row in the msdpPeerTable."                      �"This entry's status, by which new entries may be added
               to the table and old entries deleted.

               msdpMeshGroupName and msdpMeshGroupPeerAddress must be
               set to valid values before the row can be activated.
               Since these are the table's INDEX, a row can be activated
               by simply setting the msdpMeshGroupStatus variable.

               It is not possible to modify other columns in the same
               conceptual row when the status value is active(1),
               because the only other objects in the row are part of the
               INDEX.  Changing one of these changes the row, so an old
               row must be deleted and a new one created."                           f"The MSDP Established event is generated when the MSDP FSM
            enters the ESTABLISHED state."                 �"The MSDPBackwardTransition Event is generated when the
            MSDP FSM moves from a higher-numbered state to a
            lower-numbered state."                        "The compliance statement for entities that implement a pre-
            RFC version of MSDP.  This statement is deprecated because
            it includes objects used for managing/monitoring aspects of
            MSDP that were removed before it was published as an RFC."   x"This group is mandatory if MSDP encapsulation interfaces are
            not given their own interface index numbers." `"This group is mandatory if the MSDP speaker has the ability
            to cache SA messages." �"This group is mandatory if the MSDP speaker has the ability
            to send SA-Request messages and to parse SA-Response
                messages." j"This group is mandatory if the MSDP speaker sources (as
            opposed to forwards) MSDP messages." _"This group is mandatory if the MSDP speaker can participate
            in MSDP Mesh Groups."             S"The compliance statement for entities that implement MSDP
            (RFC3618)."   j"This group is mandatory if the MSDP speaker sources (as
            opposed to forwards) MSDP messages." _"This group is mandatory if the MSDP speaker can participate
            in MSDP Mesh Groups."             �"The compliance statement for entities that implement MSDP
            (RFC3618), but do not permit configuration (or only permit
            partial configuration) via SNMP."   j"This group is mandatory if the MSDP speaker sources (as
            opposed to forwards) MSDP messages." _"This group is mandatory if the MSDP speaker can participate
            in MSDP Mesh Groups." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required."                 R"A collection of objects providing information on global MSDP
            state."                 �"A collection of objects for managing MSDP peers.  This group
            is deprecated in favor of msdpMIBPeerGroup2 because it
            contains objects for managing aspects of MSDP that were
            removed before it was published as an RFC."                 �"A collection of objects for managing encapsulations if the
            MSDP encapsulation interfaces are not given interface
            indices."                 ="A collection of objects for managing MSDP SA cache entries."                 ^"A collection of notifications for signaling changes in MSDP
            peer relationships."                     �"A collection of objects for managing MSDP Request
            transmission.  This group is deprecated because Requests
            were removed from MSDP before its publication as an RFC."                 S"A collection of objects for MSDP speakers that source MSDP
            messages."                 b"A collection of objects for MSDP speakers that can
            participate in MSDP mesh groups."                 2"A collection of objects for managing MSDP peers."                    