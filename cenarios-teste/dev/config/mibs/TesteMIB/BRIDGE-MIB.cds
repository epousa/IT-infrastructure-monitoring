 �-- ==================================================================
-- Description: bridge mib
-- Reference:   This mib was extracted from RFC 4188
-- ==================================================================
  �"A Spanning Tree Protocol (STP) timer in units of 1/100
           seconds.  Several objects in this MIB module represent
           values of timers used by the Spanning Tree Protocol.
           In this MIB, these timers have values in units of
           hundredths of a second (i.e., 1/100 secs).

           These timers, when stored in a Spanning Tree Protocol's
           BPDU, are in units of 1/256 seconds.  Note, however, that
           802.1D-1998 specifies a settable granularity of no more
           than one second for these timers.  To avoid ambiguity,
           a conversion algorithm is defined below for converting
           between the different units, which ensures a timer's
           value is not distorted by multiple conversions.

           To convert a Timeout value into a value in units of
           1/256 seconds, the following algorithm should be used:

               b = floor( (n * 256) / 100)

           where:
               floor   =  quotient [ignore remainder]
               n is the value in 1/100 second units
               b is the value in 1/256 second units

           To convert the value from 1/256 second units back to
           1/100 seconds, the following algorithm should be used:

               n = ceiling( (b * 100) / 256)

           where:
               ceiling = quotient [if remainder is 0], or
                         quotient + 1 [if remainder is nonzero]
               n is the value in 1/100 second units
               b is the value in 1/256 second units

           Note: it is important that the arithmetic operations are
           done in the order specified (i.e., multiply first,
           divide second)."              �"The Bridge-Identifier, as used in the Spanning Tree
           Protocol, to uniquely identify a bridge.  Its first two
           octets (in network byte order) contain a priority value,
           and its last 6 octets contain the MAC address used to
           refer to a bridge in a unique fashion (typically, the
           numerically smallest MAC address of all ports on the
           bridge)."                                                        "The Bridge MIB module for managing devices that support
           IEEE 802.1D.

           Copyright (C) The Internet Society (2005).  This version of
           this MIB module is part of RFC 4188; see the RFC itself for
           full legal notices."�"Email: bridge-mib@ietf.org

                    K.C. Norseth (Editor)
                    L-3 Communications
               Tel: +1 801-594-2809
             Email: kenyon.c.norseth@L-3com.com
            Postal: 640 N. 2200 West.
                    Salt Lake City, Utah 84116-0850
                    Les Bell (Editor)
                    3Com Europe Limited
             Phone: +44 1442 438025
             Email: elbell@ntlworld.com
            Postal: 3Com Centre, Boundary Way
                    Hemel Hempstead
                    Herts.  HP2 7YU
                    UK

            Send comments to <bridge-mib@ietf.org>" "200509190000Z" "199307310000Z" "199112310000Z"�"Third revision, published as part of RFC 4188.

            The MIB module has been converted to SMIv2 format.
            Conformance statements have been added and some
            description and reference clauses have been updated.

            The object dot1dStpPortPathCost32 was added to
            support IEEE 802.1t and the permissible values of
            dot1dStpPriority and dot1dStpPortPriority have been
            clarified for bridges supporting IEEE 802.1t or
            IEEE 802.1w.

            The interpretation of dot1dStpTimeSinceTopologyChange
            has been clarified for bridges supporting the Rapid
            Spanning Tree Protocol (RSTP)." 1"Second revision, published as part of RFC 1493." 2"Initial revision, published as part of RFC 1286."                  i"The newRoot trap indicates that the sending agent has
           become the new root of the Spanning Tree; the trap is
           sent by a bridge soon after its election as the new
           root, e.g., upon expiration of the Topology Change Timer,
           immediately subsequent to its election.  Implementation
           of this trap is optional."         -- OBJECTS     { }
      l"A topologyChange trap is sent by a bridge when any of
           its configured ports transitions from the Learning state
           to the Forwarding state, or from the Forwarding state to
           the Blocking state.  The trap is not sent if a newRoot
           trap is sent for the same transition.  Implementation of
           this trap is optional."         -- OBJECTS     { }
          �"The MAC address used by this bridge when it must be
           referred to in a unique fashion.  It is recommended
           that this be the numerically smallest MAC address of
           all ports that belong to this bridge.  However, it is only
           required to be unique.  When concatenated with
           dot1dStpPriority, a unique BridgeIdentifier is formed,
           which is used in the Spanning Tree Protocol." 1"IEEE 802.1D-1998: clauses 14.4.1.1.3 and 7.12.5"                     E"The number of ports controlled by this bridging
           entity." %"IEEE 802.1D-1998: clause 14.4.1.1.3"                     �"Indicates what type of bridging this bridge can
           perform.  If a bridge is actually performing a
           certain type of bridging, this will be indicated by
           entries in the port table for the given type."                       �"A table that contains generic information about every
           port that is associated with this bridge.  Transparent,
           source-route, and srt ports are included."                       4"A list of information for each port of the bridge." )"IEEE 802.1D-1998: clause 14.4.2, 14.6.1"                     f"The port number of the port for which this entry
           contains bridge management information."                       �"The value of the instance of the ifIndex object,
           defined in IF-MIB, for the interface corresponding
           to this port."                      �"For a port that (potentially) has the same value of
           dot1dBasePortIfIndex as another port on the same bridge.
           This object contains the name of an object instance
           unique to this port.  For example, in the case where
           multiple ports correspond one-to-one with multiple X.25
           virtual circuits, this value might identify an (e.g.,
           the first) object instance associated with the X.25
           virtual circuit corresponding to this port.

           For a port which has a unique value of
           dot1dBasePortIfIndex, this object can have the value
           { 0 0 }."                       �"The number of frames discarded by this port due
           to excessive transit delay through the bridge.  It
           is incremented by both transparent and source
           route bridges." %"IEEE 802.1D-1998: clause 14.6.1.1.3"                     �"The number of frames discarded by this port due
           to an excessive size.  It is incremented by both
           transparent and source route bridges." %"IEEE 802.1D-1998: clause 14.6.1.1.3"                        �"An indication of what version of the Spanning Tree
           Protocol is being run.  The value 'decLb100(2)'
           indicates the DEC LANbridge 100 Spanning Tree protocol.
           IEEE 802.1D implementations will return 'ieee8021d(3)'.
           If future versions of the IEEE Spanning Tree Protocol
           that are incompatible with the current version
           are released a new value will be defined."                      r"The value of the write-able portion of the Bridge ID
           (i.e., the first two octets of the (8 octet long) Bridge
           ID).  The other (last) 6 octets of the Bridge ID are
           given by the value of dot1dBaseBridgeAddress.
           On bridges supporting IEEE 802.1t or IEEE 802.1w,
           permissible values are 0-61440, in steps of 4096." k"IEEE 802.1D-1998 clause 8.10.2, Table 8-4,
           IEEE 802.1t clause 8.10.2, Table 8-4, clause 14.3."                     "The time (in hundredths of a second) since the
           last time a topology change was detected by the
           bridge entity.
           For RSTP, this reports the time since the tcWhile
           timer for any port on this Bridge was nonzero." M"IEEE 802.1D-1998 clause 14.8.1.1.,
           IEEE 802.1w clause 14.8.1.1."                     �"The total number of topology changes detected by
           this bridge since the management entity was last
           reset or initialized." #"IEEE 802.1D-1998 clause 14.8.1.1."                    "The bridge identifier of the root of the spanning
           tree, as determined by the Spanning Tree Protocol,
           as executed by this node.  This value is used as
           the Root Identifier parameter in all Configuration
           Bridge PDUs originated by this node." ""IEEE 802.1D-1998: clause 8.5.3.1"                     H"The cost of the path to the root as seen from
           this bridge." ""IEEE 802.1D-1998: clause 8.5.3.2"                     o"The port number of the port that offers the lowest
           cost path from this bridge to the root bridge." ""IEEE 802.1D-1998: clause 8.5.3.3"                     �"The maximum age of Spanning Tree Protocol information
           learned from the network on any port before it is
           discarded, in units of hundredths of a second.  This is
           the actual value that this bridge is currently using." ""IEEE 802.1D-1998: clause 8.5.3.4"                    8"The amount of time between the transmission of
           Configuration bridge PDUs by this node on any port when
           it is the root of the spanning tree, or trying to become
           so, in units of hundredths of a second.  This is the
           actual value that this bridge is currently using." ""IEEE 802.1D-1998: clause 8.5.3.5"                     �"This time value determines the interval length
           during which no more than two Configuration bridge
           PDUs shall be transmitted by this node, in units
           of hundredths of a second." #"IEEE 802.1D-1998: clause 8.5.3.14"                    "This time value, measured in units of hundredths of a
           second, controls how fast a port changes its spanning
           state when moving towards the Forwarding state.  The
           value determines how long the port stays in each of the
           Listening and Learning states, which precede the
           Forwarding state.  This value is also used when a
           topology change has been detected and is underway, to
           age all dynamic entries in the Forwarding Database.
           [Note that this value is the one that this bridge is
           currently using, in contrast to
           dot1dStpBridgeForwardDelay, which is the value that this
           bridge and all others would start using if/when this
           bridge were to become the root.]" ""IEEE 802.1D-1998: clause 8.5.3.6"                    �"The value that all bridges use for MaxAge when this
           bridge is acting as the root.  Note that 802.1D-1998
           specifies that the range for this parameter is related
           to the value of dot1dStpBridgeHelloTime.  The
           granularity of this timer is specified by 802.1D-1998 to
           be 1 second.  An agent may return a badValue error if a
           set is attempted to a value that is not a whole number
           of seconds." ""IEEE 802.1D-1998: clause 8.5.3.8"                    ?"The value that all bridges use for HelloTime when this
           bridge is acting as the root.  The granularity of this
           timer is specified by 802.1D-1998 to be 1 second.  An
           agent may return a badValue error if a set is attempted
           to a value that is not a whole number of seconds." ""IEEE 802.1D-1998: clause 8.5.3.9"                    �"The value that all bridges use for ForwardDelay when
           this bridge is acting as the root.  Note that
           802.1D-1998 specifies that the range for this parameter
           is related to the value of dot1dStpBridgeMaxAge.  The
           granularity of this timer is specified by 802.1D-1998 to
           be 1 second.  An agent may return a badValue error if a
           set is attempted to a value that is not a whole number
           of seconds." #"IEEE 802.1D-1998: clause 8.5.3.10"                     ]"A table that contains port-specific information
           for the Spanning Tree Protocol."                       r"A list of information maintained by every port about
           the Spanning Tree Protocol state for that port."                       v"The port number of the port for which this entry
           contains Spanning Tree Protocol management information." %"IEEE 802.1D-1998: clause 14.8.2.1.2"                    `"The value of the priority field that is contained in
           the first (in network byte order) octet of the (2 octet
           long) Port ID.  The other octet of the Port ID is given
           by the value of dot1dStpPort.
           On bridges supporting IEEE 802.1t or IEEE 802.1w,
           permissible values are 0-240, in steps of 16." k"IEEE 802.1D-1998 clause 8.10.2, Table 8-4,
           IEEE 802.1t clause 8.10.2, Table 8-4, clause 14.3."                    �"The port's current state, as defined by application of
           the Spanning Tree Protocol.  This state controls what
           action a port takes on reception of a frame.  If the
           bridge has detected a port that is malfunctioning, it
           will place that port into the broken(6) state.  For
           ports that are disabled (see dot1dStpPortEnable), this
           object will have a value of disabled(1)." ""IEEE 802.1D-1998: clause 8.5.5.2"                     *"The enabled/disabled status of the port." ""IEEE 802.1D-1998: clause 8.5.5.2"                    �"The contribution of this port to the path cost of
           paths towards the spanning tree root which include
           this port.  802.1D-1998 recommends that the default
           value of this parameter be in inverse proportion to
           the speed of the attached LAN.

           New implementations should support dot1dStpPortPathCost32.
           If the port path costs exceeds the maximum value of this
           object then this object should report the maximum value,
           namely 65535.  Applications should try to read the
           dot1dStpPortPathCost32 object if this object reports
           the maximum value." ""IEEE 802.1D-1998: clause 8.5.5.3"                     �"The unique Bridge Identifier of the Bridge
           recorded as the Root in the Configuration BPDUs
           transmitted by the Designated Bridge for the
           segment to which the port is attached." ""IEEE 802.1D-1998: clause 8.5.5.4"                     �"The path cost of the Designated Port of the segment
           connected to this port.  This value is compared to the
           Root Path Cost field in received bridge PDUs." ""IEEE 802.1D-1998: clause 8.5.5.5"                     �"The Bridge Identifier of the bridge that this
           port considers to be the Designated Bridge for
           this port's segment." ""IEEE 802.1D-1998: clause 8.5.5.6"                     _"The Port Identifier of the port on the Designated
           Bridge for this port's segment." ""IEEE 802.1D-1998: clause 8.5.5.7"                     m"The number of times this port has transitioned
           from the Learning state to the Forwarding state."                      y"The contribution of this port to the path cost of
           paths towards the spanning tree root which include
           this port.  802.1D-1998 recommends that the default
           value of this parameter be in inverse proportion to
           the speed of the attached LAN.

           This object replaces dot1dStpPortPathCost to support
           IEEE 802.1t." '"IEEE 802.1t clause 8.10.2, Table 8-5."                            ["The total number of Forwarding Database entries that
           have been or would have been learned, but have been
           discarded due to a lack of storage space in the
           Forwarding Database.  If this counter is increasing, it
           indicates that the Forwarding Database is regularly
           becoming full (a condition that has unpleasant
           performance effects on the subnetwork).  If this counter
           has a significant value but is not presently increasing,
           it indicates that the problem has been occurring but is
           not persistent." %"IEEE 802.1D-1998: clause 14.7.1.1.3"                     �"The timeout period in seconds for aging out
           dynamically-learned forwarding information.
           802.1D-1998 recommends a default of 300 seconds." %"IEEE 802.1D-1998: clause 14.7.1.1.3"                    "A table that contains information about unicast
           entries for which the bridge has forwarding and/or
           filtering information.  This information is used
           by the transparent bridging function in
           determining how to propagate a received frame."                       �"Information about a specific unicast MAC address
           for which the bridge has some forwarding and/or
           filtering information."                       e"A unicast MAC address for which the bridge has
           forwarding and/or filtering information." '"IEEE 802.1D-1998: clause 7.9.1, 7.9.2"                    �"Either the value '0', or the port number of the port on
           which a frame having a source address equal to the value
           of the corresponding instance of dot1dTpFdbAddress has
           been seen.  A value of '0' indicates that the port
           number has not been learned, but that the bridge does
           have some forwarding/filtering information about this
           address (e.g., in the dot1dStaticTable).  Implementors
           are encouraged to assign the port value to this object
           whenever it is learned, even for addresses for which the
           corresponding value of dot1dTpFdbStatus is not
           learned(3)."                      y"The status of this entry.  The meanings of the
           values are:
               other(1) - none of the following.  This would
                   include the case where some other MIB object
                   (not the corresponding instance of
                   dot1dTpFdbPort, nor an entry in the
                   dot1dStaticTable) is being used to determine if
                   and how frames addressed to the value of the
                   corresponding instance of dot1dTpFdbAddress are
                   being forwarded.
               invalid(2) - this entry is no longer valid (e.g.,
                   it was learned but has since aged out), but has
                   not yet been flushed from the table.
               learned(3) - the value of the corresponding instance
                   of dot1dTpFdbPort was learned, and is being
                   used.
               self(4) - the value of the corresponding instance of
                   dot1dTpFdbAddress represents one of the bridge's
                   addresses.  The corresponding instance of
                   dot1dTpFdbPort indicates which of the bridge's
                   ports has this address.
               mgmt(5) - the value of the corresponding instance of
                   dot1dTpFdbAddress is also the value of an
                   existing instance of dot1dStaticAddress."                       q"A table that contains information about every port that
           is associated with this transparent bridge."                       J"A list of information for each port of a transparent
           bridge."                       t"The port number of the port for which this entry
           contains Transparent bridging management information."                       c"The maximum size of the INFO (non-MAC) field that
           this port will receive or transmit."                      h"The number of frames that have been received by this
           port from its segment.  Note that a frame received on the
           interface corresponding to this port is only counted by
           this object if and only if it is for a protocol being
           processed by the local bridging function, including
           bridge management frames." %"IEEE 802.1D-1998: clause 14.6.1.1.3"                    l"The number of frames that have been transmitted by this
           port to its segment.  Note that a frame transmitted on
           the interface corresponding to this port is only counted
           by this object if and only if it is for a protocol being
           processed by the local bridging function, including
           bridge management frames." %"IEEE 802.1D-1998: clause 14.6.1.1.3"                     l"Count of received valid frames that were discarded
           (i.e., filtered) by the Forwarding Process." %"IEEE 802.1D-1998: clause 14.6.1.1.3"                        �"A table containing filtering information configured
           into the bridge by (local or network) management
           specifying the set of ports to which frames received
           from specific ports and containing specific destination
           addresses are allowed to be forwarded.  The value of
           zero in this table, as the port number from which frames
           with a specific destination address are received, is
           used to specify all ports for which there is no specific
           entry in this table for that particular destination
           address.  Entries are valid for unicast and for
           group/broadcast addresses." !"IEEE 802.1D-1998: clause 14.7.2"                    "Filtering information configured into the bridge by
           (local or network) management specifying the set of
           ports to which frames received from a specific port and
           containing a specific destination address are allowed to
           be forwarded." !"IEEE 802.1D-1998: clause 14.7.2"                     �"The destination MAC address in a frame to which this
           entry's filtering information applies.  This object can
           take the value of a unicast address, a group address, or
           the broadcast address." '"IEEE 802.1D-1998: clause 7.9.1, 7.9.2"                    @"Either the value '0', or the port number of the port
           from which a frame must be received in order for this
           entry's filtering information to apply.  A value of zero
           indicates that this entry applies on all ports of the
           bridge for which there is no other applicable entry."                      �"The set of ports to which frames received from a
           specific port and destined for a specific MAC address,
           are allowed to be forwarded.  Each octet within the
           value of this object specifies a set of eight ports,
           with the first octet specifying ports 1 through 8, the
           second octet specifying ports 9 through 16, etc.  Within
           each octet, the most significant bit represents the
           lowest numbered port, and the least significant bit
           represents the highest numbered port.  Thus, each port
           of the bridge is represented by a single bit within the
           value of this object.  If that bit has a value of '1',
           then that port is included in the set of ports; the port
           is not included if its bit has a value of '0'.  (Note
           that the setting of the bit corresponding to the port
           from which a frame is received is irrelevant.)  The
           default value of this object is a string of ones of
           appropriate length.
           The value of this object may exceed the required minimum
           maximum message size of some SNMP transport (484 bytes,
           in the case of SNMP over UDP, see RFC 3417, section 3.2).
           SNMP engines on bridges supporting a large number of
           ports must support appropriate maximum message sizes."                      V"This object indicates the status of this entry.
           The default value is permanent(3).
               other(1) - this entry is currently in use but the
                   conditions under which it will remain so are
                   different from each of the following values.
               invalid(2) - writing this value to the object
                   removes the corresponding entry.
               permanent(3) - this entry is currently in use and
                   will remain so after the next reset of the
                   bridge.
               deleteOnReset(4) - this entry is currently in use
                   and will remain so until the next reset of the
                   bridge.
               deleteOnTimeout(5) - this entry is currently in use
                   and will remain so until it is aged out."                               +"Bridge level information for this device."                 +"Information for each port on this device."                 2"Bridge level Spanning Tree data for this device."                 2"Spanning Tree data for each port on this device."                 2"Spanning Tree data for each port on this device."                 K"Spanning Tree data for devices supporting 32-bit
            path costs."                 )"Bridge level Transparent Bridging data."                 0"Filtering Database information for the Bridge."                 Q"Dynamic Filtering Database information for each port of
           the Bridge."                 P"Static Filtering Database information for each port of
           the Bridge."                 4"Group of objects describing notifications (traps)."                         _"The compliance statement for device support of bridging
           services, as per RFC1493."   l"Implementation of this group is mandatory for bridges
           that support the Spanning Tree Protocol." l"Implementation of this group is mandatory for bridges
           that support the Spanning Tree Protocol." �"Implementation of this group is mandatory for bridges
           that support the transparent bridging mode.  A
           transparent or SRT bridge will implement this group." �"Implementation of this group is mandatory for bridges
           that support the transparent bridging mode.  A
           transparent or SRT bridge will implement this group." �"Implementation of this group is mandatory for bridges
           that support the transparent bridging mode.  A
           transparent or SRT bridge will implement this group." +"Implementation of this group is optional." +"Implementation of this group is optional."            �"The compliance statement for device support of bridging
           services.  This supports 32-bit Path Cost values and the
           more restricted bridge and port priorities, as per IEEE
           802.1t.

           Full support for the 802.1D management objects requires that
           the SNMPv2-MIB [RFC3418] objects sysDescr, and sysUpTime, as
           well as the IF-MIB [RFC2863] objects ifIndex, ifType,
           ifDescr, ifPhysAddress, and ifLastChange are implemented."   l"Implementation of this group is mandatory for
           bridges that support the Spanning Tree Protocol." -"The possible values defined by IEEE 802.1t." l"Implementation of this group is mandatory for
           bridges that support the Spanning Tree Protocol." �"Implementation of this group is mandatory for bridges
            that support the Spanning Tree Protocol and 32-bit path
            costs.  In particular, this includes devices supporting
            IEEE 802.1t and IEEE 802.1w." -"The possible values defined by IEEE 802.1t." �"Implementation of this group is mandatory for
           bridges that support the transparent bridging
           mode.  A transparent or SRT bridge will implement
           this group." �"Implementation of this group is mandatory for
           bridges that support the transparent bridging
           mode.  A transparent or SRT bridge will implement
           this group." �"Implementation of this group is mandatory for
           bridges that support the transparent bridging
           mode.  A transparent or SRT bridge will implement
           this group." +"Implementation of this group is optional." +"Implementation of this group is optional."                