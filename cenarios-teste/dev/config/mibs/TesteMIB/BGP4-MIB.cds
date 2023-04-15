 �-- =================================================================
-- Description: BGP4-MIB definition
-- Reference:   This mib was extracted from RFC 4273
-- =================================================================
                             "The MIB module for BGP-4.""   John Chu  (Editor)
            Postal: IBM Corp.
                    P.O.Box 218
                    Yorktown Heights, NY 10598
                    US

               Tel: +1 914 945 3156
               Fax: +1 914 945 2141
            E-mail: jychu@watson.ibm.com"              r"Vector of supported BGP protocol version
            numbers.  Each peer negotiates the version
            from this vector.  Versions are identified
            via the string of bits contained within this
            object.  The first octet contains bits 0 to
            7, the second octet contains bits 8 to 15,
            and so on, with the most significant bit
            referring to the lowest bit number in the
            octet (e.g., the MSB of the first octet
            refers to bit 0).  If a bit, i, is present
            and set, then the version (i+1) of the BGP
            is supported."                       %"The local autonomous system number."                       �"BGP peer table.  This table contains,
            one entry per BGP peer, information about
            the connections with BGP peers."                       Q"Entry containing information about the
            connection with a BGP peer."                       ;"The BGP Identifier of this entry's BGP
            peer."                        "The BGP peer connection state."                      �"The desired state of the BGP connection.
            A transition from 'stop' to 'start' will
            cause the BGP Start Event to be generated.
            A transition from 'start' to 'stop' will
            cause the BGP Stop Event to be generated.
            This parameter can be used to restart BGP
            peer connections.  Care should be used in
            providing write access to this object
            without adequate authentication."                       K"The negotiated version of BGP running
            between the two peers."                       C"The local IP address of this entry's BGP
            connection."                       K"The local port for the TCP connection
            between the BGP peers."                       >"The remote IP address of this entry's BGP
            peer."                      <"The remote port for the TCP connection
            between the BGP peers.  Note that the
            objects bgpPeerLocalAddr,
            bgpPeerLocalPort, bgpPeerRemoteAddr and
            bgpPeerRemotePort provide the appropriate
            reference to the standard MIB TCP
            connection table."                       &"The remote autonomous system number."                       �"The number of BGP UPDATE messages
            received on this connection.  This object
            should be initialized to zero (0) when the
            connection is established."                       �"The number of BGP UPDATE messages
            transmitted on this connection.  This
            object should be initialized to zero (0)
            when the connection is established."                       �"The total number of messages received
            from the remote peer on this connection.
            This object should be initialized to zero
            when the connection is established."                       �"The total number of messages transmitted to
            the remote peer on this connection.  This
            object should be initialized to zero when
            the connection is established."                      3"The last error code and subcode seen by this
            peer on this connection.  If no error has
            occurred, this field is zero.  Otherwise, the
            first byte of this two byte OCTET STRING
            contains the error code, and the second byte
            contains the subcode."                       ]"The total number of times the BGP FSM
            transitioned into the established state."                      /"This timer indicates how long (in
            seconds) this peer has been in the
            Established state or how long
            since this peer was last in the
            Established state.  It is set to zero when
            a new peer is configured or the router is
            booted."                       �"Time interval in seconds for the
            ConnectRetry timer.  The suggested value
            for this timer is 120 seconds."                      2"Time interval in seconds for the Hold
            Timer established with the peer.  The
            value of this object is calculated by this
            BGP speaker by using the smaller of the
            value in bgpPeerHoldTimeConfigured and the
            Hold Time received in the OPEN message.
            This value must be at lease three seconds
            if it is not zero (0) in which case the
            Hold Timer has not been established with
            the peer, or, the value of
            bgpPeerHoldTimeConfigured is zero (0)."                      t"Time interval in seconds for the KeepAlive
            timer established with the peer.  The value
            of this object is calculated by this BGP
            speaker such that, when compared with
            bgpPeerHoldTime, it has the same
            proportion as what
            bgpPeerKeepAliveConfigured has when
            compared with bgpPeerHoldTimeConfigured.
            If the value of this object is zero (0),
            it indicates that the KeepAlive timer has
            not been established with the peer, or,
            the value of bgpPeerKeepAliveConfigured is
            zero (0)."                      �"Time interval in seconds for the Hold Time
            configured for this BGP speaker with this
            peer.  This value is placed in an OPEN
            message sent to this peer by this BGP
            speaker, and is compared with the Hold
            Time field in an OPEN message received
            from the peer when determining the Hold
            Time (bgpPeerHoldTime) with the peer.
            This value must not be less than three
            seconds if it is not zero (0) in which
            case the Hold Time is NOT to be
            established with the peer.  The suggested
            value for this timer is 90 seconds."                      Y"Time interval in seconds for the
            KeepAlive timer configured for this BGP
            speaker with this peer.  The value of this
            object will only determine the
            KEEPALIVE messages' frequency relative to
            the value specified in
            bgpPeerHoldTimeConfigured; the actual
            time interval for the KEEPALIVE messages
            is indicated by bgpPeerKeepAlive.  A
            reasonable maximum value for this timer
            would be configured to be one
            third of that of
            bgpPeerHoldTimeConfigured.
            If the value of this object is zero (0),
            no periodical KEEPALIVE messages are sent
            to the peer after the BGP connection has
            been established.  The suggested value for
            this timer is 30 seconds."                       �"Time interval in seconds for the
            MinASOriginationInterval timer.
            The suggested value for this timer is 15
            seconds."                       �"Time interval in seconds for the
            MinRouteAdvertisementInterval timer.
            The suggested value for this timer is 30
            seconds."                       �"Elapsed time in seconds since the last BGP
            UPDATE message was received from the peer.
            Each time bgpPeerInUpdates is incremented,
            the value of this object is set to zero
            (0)."                       %"The BGP Identifier of local system."                       �"The BGP Received Path Attribute Table
            contains information about paths to
            destination networks received from all
            peers running BGP version 3 or less."                       ("Information about a path to a network."                       Q"The IP address of the peer where the path
            information was learned."                       )"The address of the destination network."                       ."The ultimate origin of the path information."                      �"The set of ASs that must be traversed to
            reach the network.  This object is
            probably best represented as SEQUENCE OF
            INTEGER.  For SMI compatibility, though,
            it is represented as OCTET STRING.  Each
            AS is represented as a pair of octets
            according to the following algorithm:
    
               first-byte-of-pair = ASNumber / 256;
               second-byte-of-pair = ASNumber & 255;"                       m"The address of the border router that
            should be used for the destination
            network."                       �"The optional inter-AS metric.  If this
            attribute has not been provided for this
            route, the value for this object is 0."                       �"The BGP-4 Received Path Attribute Table
            contains information about paths to
            destination networks received from all
            BGP4 peers."                       ("Information about a path to a network."                       Q"The IP address of the peer where the path
            information was learned."                       x"Length in bits of the IP address prefix
            in the Network Layer Reachability
            Information field."                      S"An IP address prefix in the Network Layer
            Reachability Information field.  This object
            is an IP address containing the prefix with
            length specified by
            bgp4PathAttrIpAddrPrefixLen.
            Any bits beyond the length specified by
            bgp4PathAttrIpAddrPrefixLen are zeroed."                       ;"The ultimate origin of the path
            information."                      �"The sequence of AS path segments.  Each AS
            path segment is represented by a triple
            <type, length, value>.

            The type is a 1-octet field which has two
            possible values:
                1      AS_SET: unordered set of ASs a
                  route in the UPDATE
                  message has traversed
                2      AS_SEQUENCE: ordered set of ASs
                  a route in the UPDATE
                  message has traversed.

            The length is a 1-octet field containing the
            number of ASs in the value field.

            The value field contains one or more AS
            numbers, each AS is represented in the octet
            string as a pair of octets according to the
            following algorithm:
               first-byte-of-pair = ASNumber / 256;
               second-byte-of-pair = ASNumber & 255;"                       m"The address of the border router that
            should be used for the destination
            network."                       �"This metric is used to discriminate
            between multiple exit points to an
            adjacent autonomous system.  A value of -1
            indicates the absence of this attribute."                       �"The originating BGP4 speaker's degree of
            preference for an advertised route.  A
            value of -1 indicates the absence of this
            attribute."                       �"Whether or not the local system has
            selected a less specific route without
            selecting a more specific route."                       �"The AS number of the last BGP4 speaker that
            performed route aggregation.  A value of
            zero (0) indicates the absence of this
            attribute."                       �"The IP address of the last BGP4 speaker
            that performed route aggregation.  A value
            of 0.0.0.0 indicates the absence of this
            attribute."                       �"The degree of preference calculated by the
            receiving BGP4 speaker for an advertised
            route.  A value of -1 indicates the
            absence of this attribute."                       \"An indication of whether or not this route
            was chosen as the best BGP4 route."                      "One or more path attributes not understood
            by this BGP4 speaker.  Size zero (0)
            indicates the absence of such
            attribute(s).  Octets beyond the maximum
            size, if any, are not recorded by this
            object."                           �"The bgpEstablishedNotification event is generated
                     when the BGP FSM enters the established state.

                     This Notification replaces the bgpEstablished
                     Notification."                ""The bgpBackwardTransNotification event is
                     generated when the BGP FSM moves from a higher
                     numbered state to a lower numbered state.

                     This Notification replaces the
                     bgpBackwardsTransition Notification."                     d"The BGP Established event is generated when
            the BGP FSM enters the ESTABLISHED state."                 �"The BGPBackwardTransition Event is generated
            when the BGP FSM moves from a higher numbered
            state to a lower numbered state."                    