                                                              s"This MIB module defines a collection of objects for managing
          the Path Computation Element Communication Protocol (PCEP).

          Copyright (c) 2014 IETF Trust and the persons identified as
          authors of the code.  All rights reserved.

          Redistribution and use in source and binary forms, with or
          without modification, is permitted pursuant to, and subject
          to the license terms contained in, the Simplified BSD License
          set forth in Section 4.c of the IETF Trust's Legal Provisions
          Relating to IETF Documents
          (http://trustee.ietf.org/license-info)." n"Email: pce@ietf.org
            WG charter:
                     http://datatracker.ietf.org/wg/pce/charter/" "201412171200Z" )"Initial version, published as RFC 7420."       -- 17 December 2014
           f"This notification is sent when the value of
            pcePcepSessState enters the sessionUp state."                 f"This notification is sent when the value of
            pcePcepSessState leaves the sessionUp state."                 d"This notification is sent when the local PCEP entity enters
            overload state for a peer."                 d"This notification is sent when the local PCEP entity leaves
            overload state for a peer."                 J"This notification is sent when a peer enters overload
            state."                 J"This notification is sent when a peer leaves overload
            state."                     q"This table contains information about local PCEP entities.
            The entries in this table are read-only."                       ,"This entry represents a local PCEP entity."                       :"This index is used to uniquely identify the PCEP entity."                      ="The administrative status of this PCEP entity.

            This is the desired operational status as currently set by
            an operator or by default in the implementation.  The value
            of pcePcepEntityOperStatus represents the current status of
            an attempt to reach this desired status."                      Q"The operational status of the PCEP entity.  It takes one of
            the following values.
            - operStatusUp(1): the PCEP entity is active.
            - operStatusDown(2): the PCEP entity is inactive.
            - operStatusGoingUp(3): the PCEP entity is activating.
            - operStatusGoingDown(4): the PCEP entity is deactivating.
            - operStatusFailed(5): the PCEP entity has failed and will
              recover when possible.
            - operStatusFailedPerm(6): the PCEP entity has failed and
              will not recover without operator intervention."                       �"The type of the PCEP entity's Internet address.  This object
            specifies how the value of the pcePcepEntityAddr object
            should be interpreted.  Only values unknown(0), ipv4(1), or
            ipv6(2) are supported."                      ""The local Internet address of this PCEP entity.  The type is
            given by pcePcepEntityAddrType.

            If operating as a PCE server, the PCEP entity listens on
            this address.  If operating as a PCC, the PCEP entity binds
            outgoing TCP connections to this address.

            It is possible for the PCEP entity to operate both as a PCC
            and a PCE server, in which case it uses this address both to
            listen for incoming TCP connections and to bind outgoing
            TCP connections."                       �"The time that the PCEP entity will wait to establish a TCP
            connection with a peer.  If a TCP connection is not
            established within this time, then PCEP aborts the session
            setup attempt."                      �"The maximum number of times the system tries to establish
            a TCP connection to a peer before the session with the peer
            transitions to the idle state.

            When the session transitions to the idle state:
            - pcePcepPeerSessionExists transitions to false(2).
            - the associated PcePcepSessEntry is deleted.
            - a backoff timer runs before the session is tried again."                      ("The initial backoff time for retrying a failed session
            setup attempt to a peer.

            The backoff time increases for each failed session setup
            attempt, until a maximum backoff time is reached.  The
            maximum backoff time is pcePcepEntityMaxBackoffTimer."                      T"The maximum backoff time for retrying a failed session
            setup attempt to a peer.
            The backoff time increases for each failed session setup
            attempt, until this maximum value is reached.  Session
            setup attempts then repeats periodically without any
            further increase in backoff time."                      ,"The time that the PCEP entity will wait to receive an Open
            message from a peer after the TCP connection has come up.
            If no Open message is received within this time, then PCEP
            terminates the TCP connection and deletes the associated
            PcePcepSessEntry."                      m"The time that the PCEP entity will wait to receive a
            Keepalive or PCErr message from a peer during session
            initialization after receiving an Open message.  If no
            Keepalive or PCErr message is received within this time,
            then PCEP terminates the TCP connection and deletes the
            associated PcePcepSessEntry."                      �"The Keepalive transmission timer that this PCEP entity will
            propose in the initial OPEN message of each session it is
            involved in.  This is the maximum time between two
            consecutive messages sent to a peer.  Zero means that
            the PCEP entity prefers not to send Keepalives at all.

            Note that the actual Keepalive transmission intervals, in
            either direction of an active PCEP session, are determined
            by negotiation between the peers as specified by RFC5440, 
			and so may differ from this configured value.  For
            the actually negotiated values (per session), see
            pcePcepSessKeepaliveTimer and
            pcePcepSessPeerKeepaliveTimer."                      V"The DeadTimer that this PCEP entity will propose in the
            initial OPEN message of each session it is involved in.
            This is the time after which a peer should declare a
            session down if it does not receive any PCEP messages.
            Zero suggests that the peer does not run a DeadTimer at
            all."                       T"Whether the PCEP entity will permit negotiation of session
            parameters."                      "In PCEP session parameter negotiation, the maximum value
            that this PCEP entity will accept from a peer for the
            interval between Keepalive transmissions.  Zero means that
            the PCEP entity will allow no Keepalive transmission at
            all."                       �"In PCEP session parameter negotiation, the maximum value
            that this PCEP entity will accept from a peer for the
            DeadTimer.  Zero means that the PCEP entity will allow not
            running a DeadTimer."                       "In PCEP session parameter negotiation, the minimum value
            that this PCEP entity will accept for the interval between
            Keepalive transmissions.  Zero means that the PCEP entity
            insists on no Keepalive transmission at all."                       �"In PCEP session parameter negotiation, the minimum value
            that this PCEP entity will accept for the DeadTimer.  Zero
            means that the PCEP entity insists on not running a
            DeadTimer."                      K"The value of SyncTimer is used in the case of a synchronized
            path computation request using the SVEC object.

            Consider the case where a PCReq message is received by a PCE
            that contains the SVEC object referring to M synchronized
            path computation requests.  If after the expiration of the
            SyncTimer all the M path computation requests have not been
            received, a protocol error is triggered and the PCE MUST
            cancel the whole set of path computation requests.
            The aim of the SyncTimer is to avoid the storage of unused
            synchronized requests should one of them get lost for some
            reason (for example, a misbehaving PCC).

            A value of zero is returned if and only if the entity does
            not use the SyncTimer."                       `"The maximum time that the PCEP entity will wait for a
            response to a PCReq message."                       c"The maximum number of sessions involving this PCEP entity
            that can exist at any time."                       "The maximum number of unrecognized requests and replies that
            any session on this PCEP entity is willing to accept per
            minute before terminating the session.

            A PCRep message contains an unrecognized reply if it
            contains an RP object whose request ID does not correspond
            to any in-progress request sent by this PCEP entity.

            A PCReq message contains an unrecognized request if it
            contains an RP object whose request ID is zero."                       �"The maximum number of unknown messages that any session
            on this PCEP entity is willing to accept per minute before
            terminating the session."                      E"This table contains information about peers known by
            the local PCEP entity.  The entries in this table are
            read-only.

            This table gives peer information that spans PCEP
            sessions.  Information about current PCEP sessions can be
            found in the pcePcepSessTable table."                       X"Information about a single peer that spans all PCEP
            sessions to that peer."                       �"The type of the peer's Internet address.  This object
            specifies how the value of the pcePcepPeerAddr object should
            be interpreted.  Only values unknown(0), ipv4(1), or
            ipv6(2) are supported."                       Z"The Internet address of the peer.  The type is given by
            pcePcepPeerAddrType."                      {"The role that this peer took the last time a session was
            established.  It takes one of the following values.
            - unknown(0): this peer's role is not known.
            - pcc(1): this peer is a Path Computation Client (PCC).
            - pce(2): this peer is a Path Computation Element (PCE).
            - pccAndPce(3): this peer is both a PCC and a PCE."                       q"The value of sysUpTime at the time that the information and
            statistics in this row were last reset."                       �"Indicates whether the local PCEP entity initiates sessions
            to this peer or waits for the peer to initiate a session."                       J"Indicates whether a session with this peer currently
            exists."                       �"The number of PCEP sessions successfully established with
            the peer, including any current session.  This counter is
            incremented each time a session with this peer is
            successfully established."                       �"The number of PCEP sessions with the peer that have been
            attempted but failed before being fully established.
            This counter is incremented each time a session retry to
            this peer fails."                       �"The value of sysUpTime the last time a session with this
            peer was successfully established.

            If pcePcepPeerNumSessSetupOK is zero, then this object
            contains zero."                       �"The value of sysUpTime the last time a session with this
            peer failed to be established.

            If pcePcepPeerNumSessSetupFail is zero, then this object
            contains zero."                       �"The value of sysUpTime the last time a session with this
            peer failed from active.

            If pcePcepPeerNumSessSetupOK is zero, then this object
            contains zero."                      "The average response time for this peer.

            If an average response time has not been calculated for this
            peer, then this object has the value zero.

            If pcePcepPeerRole is pcc, then this field is meaningless
            and is set to zero."                      "The smallest (low-water mark) response time seen from this
            peer. If no responses have been received from this peer, then this
            object has the value zero.

            If pcePcepPeerRole is pcc, then this field is meaningless
            and is set to zero."                      '"The greatest (high-water mark) response time seen from this
            peer.

            If no responses have been received from this peer, then this
            object has the value zero.

            If pcePcepPeerRole is pcc, then this field is meaningless
            and is set to zero."                       1"The number of PCReq messages sent to this peer."                       7"The number of PCReq messages received from this peer."                       1"The number of PCRep messages sent to this peer."                       7"The number of PCRep messages received from this peer."                       1"The number of PCErr messages sent to this peer."                       7"The number of PCErr messages received from this peer."                       1"The number of PCNtf messages sent to this peer."                       7"The number of PCNtf messages received from this peer."                       5"The number of Keepalive messages sent to this peer."                       ;"The number of Keepalive messages received from this peer."                       9"The number of unknown messages received from this peer."                       L"The number of corrupted PCEP messages received from this
            peer."                      "The number of requests sent to this peer.  A request
            corresponds 1:1 with an RP object in a PCReq message.

            This might be greater than pcePcepPeerNumPCReqSent because
            multiple requests can be batched into a single PCReq
            message."                       �"The number of SVEC objects sent to this peer in PCReq
            messages.  An SVEC object represents a set of synchronized
            requests."                       a"The number of requests sent to this peer that appeared in
            one or more SVEC objects."                       l"The number of requests that have been sent to this peer for
            which a response is still pending."                       �"The number of requests that have been sent to this peer for
            which a response with an ERO was
            received.  Such responses indicate that a path was
            successfully computed by the peer."                       �"The number of requests that have been sent to this peer for
            which a response with a NO-PATH object was received.  Such
            responses indicate that the peer could not find a path to
            satisfy the request."                      "The number of requests that were canceled by the peer with
            a PCNtf message. This might be different than pcePcepPeerNumPCNtfRcvd 
			because not all PCNtf messages are used to cancel requests, and a
            single PCNtf message can cancel multiple requests."                      ("The number of requests that were rejected by the peer with a
            PCErr message.

            This might be different than pcePcepPeerNumPCErrRcvd because
            not all PCErr messages are used to reject requests, and a
            single PCErr message can reject multiple requests."                       �"The number of requests that have been sent to a peer and
            have been abandoned because the peer has taken too long to
            respond to them."                       �"The number of requests that were sent to the peer and
            explicitly canceled by the local PCEP entity sending a
            PCNtf."                       �"The number of requests that were sent to the peer and
            implicitly canceled when the session they were sent over was
            closed."                      "The number of requests received from this peer.  A request
            corresponds 1:1 with an RP object in a PCReq message.

            This might be greater than pcePcepPeerNumPCReqRcvd because
            multiple requests can be batched into a single PCReq
            message."                       �"The number of SVEC objects received from this peer in PCReq
            messages.  An SVEC object represents a set of synchronized
            requests."                       g"The number of requests received from this peer that appeared
            in one or more SVEC objects."                       r"The number of requests that have been received from this
            peer for which a response is still pending."                       �"The number of requests that have been received from this
            peer for which a response with an ERO was sent.  Such
            responses indicate that a path was successfully computed by
            the local PCEP entity."                       �"The number of requests that have been received from this
            peer for which a response with a NO-PATH object was sent.
            Such responses indicate that the local PCEP entity could
            not find a path to satisfy the request."                      P"The number of requests received from this peer that were
            canceled by the local PCEP entity sending a PCNtf message.

            This might be different than pcePcepPeerNumPCNtfSent because
            not all PCNtf messages are used to cancel requests, and a
            single PCNtf message can cancel multiple requests."                      P"The number of requests received from this peer that were
            rejected by the local PCEP entity sending a PCErr message.

            This might be different than pcePcepPeerNumPCErrSent because
            not all PCErr messages are used to reject requests, and a
            single PCErr message can reject multiple requests."                       z"The number of requests that were received from the peer and
            explicitly canceled by the peer sending a PCNtf."                       �"The number of requests that were received from the peer and
            implicitly canceled when the session they were received over
            was closed."                      "The number of responses to unknown requests received from
            this peer.  A response to an unknown request is a response
            whose RP object does not contain the request ID of any
            request that is currently outstanding on the session."                       �"The number of unknown requests that have been received from
            a peer.  An unknown request is a request whose RP object
            contains a request ID of zero."                      �"A table of PCEP sessions that involve the local PCEP
            entity.  Each entry in this table represents a single
            session.  The entries in this table are read-only.
            An entry appears in this table when the corresponding PCEP
            session transitions out of idle state.  If the PCEP session
            transitions back into an idle state, then the corresponding
            entry in this table is removed."                      P"This entry represents a single PCEP session in which the
            local PCEP entity participates.

            This entry exists only if the corresponding PCEP session has
            been initialized by some event, such as manual user
            configuration, auto-discovery of a peer, or an incoming TCP
            connection."                      �"The initiator of the session; that is, whether the TCP
            connection was initiated by the local PCEP entity or the
            peer.

            There is a window during session initialization where two
            sessions can exist between a pair of PCEP speakers, each
            initiated by one of the speakers.  One of these sessions is
            always discarded before it leaves OpenWait state.  However,
            before it is discarded, two sessions to the given peer
            appear transiently in this MIB module.  The sessions are
            distinguished by who initiated them, and so this field is an
            index for pcePcepSessTable."                       �"The value of sysUpTime at the time this session entered its
            current state as denoted by the pcePcepSessState object."                       ""The current state of the session"                       �"The number of times that the local PCEP entity has
            attempted to establish a TCP connection for this session
            without success.  The PCEP entity gives up when this
            reaches pcePcepEntityConnectMaxRetry."                      B"The value of the PCEP session ID used by the local PCEP
            entity in the Open message for this session.
            If pcePcepSessState is tcpPending, then this is the session
            ID that will be used in the Open message.  Otherwise, this
            is the session ID that was sent in the Open message."                       �"The value of the PCEP session ID used by the peer in its
            Open message for this session.

            If pcePcepSessState is tcpPending or openWait, then this
            field is not used and MUST be set to zero."                      w"The agreed maximum interval at which the local PCEP entity
            transmits PCEP messages on this PCEP session.  Zero means
            that the local PCEP entity never sends Keepalives on this
            session.

            This field is used if and only if pcePcepSessState is
            sessionUp.  Otherwise, it is not used and MUST be set to
            zero."                      Q"The agreed maximum interval at which the peer transmits PCEP
            messages on this PCEP session.  Zero means that the peer
            never sends Keepalives on this session.

            This field is used if and only if pcePcepSessState is
            sessionUp.  Otherwise, it is not used and MUST be set to
            zero."                       /"The DeadTimer interval for this PCEP session."                       �"The peer's DeadTimer interval for this PCEP session.

            If pcePcepSessState is tcpPending or openWait, then this
            field is not used and MUST be set to zero."                       �"The Keepalive hold time remaining for this session.

            If pcePcepSessState is tcpPending or openWait, then this
            field is not used and MUST be set to zero."                       �"If the local PCEP entity has informed the peer that it is
            currently overloaded, then this is set to true.  Otherwise,
            it is set to false."                      "The interval of time that is remaining until the local PCEP
            entity will cease to be overloaded on this session.

            This field is only used if pcePcepSessOverloaded is set to
            true.  Otherwise, it is not used and MUST be set to zero."                       �"If the peer has informed the local PCEP entity that it is
            currently overloaded, then this is set to true.  Otherwise,
            it is set to false."                      v"The interval of time that is remaining until the peer will
            cease to be overloaded.  If it is not known how long the
            peer will stay in overloaded state, this field is set to
            zero.

            This field is only used if pcePcepSessPeerOverloaded is set
            to true.  Otherwise, it is not used and MUST be set to
            zero."                       a"The value of sysUpTime at the time that the statistics in
            this row were last reset."                       �"The average response time for this peer on this session.

            If an average response time has not been calculated for this
            peer, then this object has the value zero."                       �"The smallest (low-water mark) response time seen from this
            peer on this session.

            If no responses have been received from this peer, then this
            object has the value zero."                       �"The greatest (high-water mark) response time seen from this
            peer on this session.

            If no responses have been received from this peer, then this
            object has the value zero."                       4"The number of PCReq messages sent on this session."                       8"The number of PCReq messages received on this session."                       4"The number of PCRep messages sent on this session."                       8"The number of PCRep messages received on this session."                       4"The number of PCErr messages sent on this session."                       8"The number of PCErr messages received on this session."                       4"The number of PCNtf messages sent on this session."                       8"The number of PCNtf messages received on this session."                       8"The number of Keepalive messages sent on this session."                       <"The number of Keepalive messages received on this session."                       :"The number of unknown messages received on this session."                       M"The number of corrupted PCEP messages received on this
            session."                      "The number of requests sent on this session.  A request
            corresponds 1:1 with an RP object in a PCReq message.

            This might be greater than pcePcepSessNumPCReqSent because
            multiple requests can be batched into a single PCReq
            message."                       �"The number of SVEC objects sent on this session in PCReq
            messages.  An SVEC object represents a set of synchronized
            requests."                       d"The number of requests sent on this session that appeared in
            one or more SVEC objects."                       o"The number of requests that have been sent on this session
            for which a response is still pending."                       �"The number of successful responses received on this session.
            A response corresponds 1:1 with an RP object in a PCRep
            message.  A successful response is a response for which an
            ERO was successfully computed."                       �"The number of unsuccessful responses received on this
            session.  A response corresponds 1:1 with an RP object in a
            PCRep message.  An unsuccessful response is a response with
            a NO-PATH object."                      ="The number of requests sent on this session that were
            canceled by the peer with a PCNtf message.

            This might be different than pcePcepSessNumPCNtfRcvd because
            not all PCNtf messages are used to cancel requests, and a
            single PCNtf message can cancel multiple requests."                      ="The number of requests sent on this session that were
            rejected by the peer with a PCErr message.

            This might be different than pcePcepSessNumPCErrRcvd because
            not all PCErr messages are used to reject requests, and a
            single PCErr message can reject multiple requests."                       �"The number of requests sent on this session that have been
            sent to a peer and have been abandoned because the peer has
            taken too long to respond to them."                       �"The number of requests sent on this session that were sent
            to the peer and explicitly canceled by the local PCEP
            entity sending a PCNtf."                      "The number of requests received on this session.  A request
            corresponds 1:1 with an RP object in a PCReq message.

            This might be greater than pcePcepSessNumPCReqRcvd because
            multiple requests can be batched into a single PCReq
            message."                       �"The number of SVEC objects received on this session in PCReq
            messages.  An SVEC object represents a set of synchronized
            requests."                       h"The number of requests received on this session that
            appeared in one or more SVEC objects."                       s"The number of requests that have been received on this
            session for which a response is still pending."                       �"The number of successful responses sent on this session.  A
            response corresponds 1:1 with an RP object in a PCRep
            message.  A successful response is a response for which an
            ERO was successfully computed."                       �"The number of unsuccessful responses sent on this session.
            A response corresponds 1:1 with an RP object in a PCRep
            message.  An unsuccessful response is a response with a
            NO-PATH object."                      Q"The number of requests received on this session that were
            canceled by the local PCEP entity sending a PCNtf message.

            This might be different than pcePcepSessNumPCNtfSent because
            not all PCNtf messages are used to cancel requests, and a
            single PCNtf message can cancel multiple requests."                      Q"The number of requests received on this session that were
            rejected by the local PCEP entity sending a PCErr message.

            This might be different than pcePcepSessNumPCErrSent because
            not all PCErr messages are used to reject requests, and a
            single PCErr message can reject multiple requests."                       |"The number of requests that were received on this session
            and explicitly canceled by the peer sending a PCNtf."                      "The number of responses to unknown requests received on this
            session.  A response to an unknown request is a response
            whose RP object does not contain the request ID of any
            request that is currently outstanding on the session."                       �"The number of unknown requests that have been received on
            this session.  An unknown request is a request whose RP
            object contains a request ID of zero."                      �"This variable indicates the maximum number of
            notifications issued per second.  If events occur
            more rapidly, the implementation may simply fail to
            emit these notifications during that period or may
            queue them until an appropriate time.  A value of zero
            means no notifications are emitted and all should be
            discarded (that is, not queued)."                               �"The module is implemented with support for read-only.  In
            other words, only monitoring is available by implementing
            this MODULE-COMPLIANCE."   Q"Only unknown(0), ipv4(1), and ipv6(2) support
                     is required."          �-- The following restriction is commented out because of a limitation
-- in SMIv2 which does not allow index objects to be restricted in
-- scope.  Nevertheless, this object is intended to be restricted in
-- scope, as follows.
--
--     OBJECT       pcePcepPeerAddrType
--     SYNTAX       InetAddressType { unknown(0), ipv4(1), ipv6(2) }
--     DESCRIPTION  "Only unknown(0), ipv4(1), and ipv6(2) support
--                   is required."
     <"Objects that apply to all PCEP MIB module implementations."                 9"The notifications for a PCEP MIB module implementation."                        