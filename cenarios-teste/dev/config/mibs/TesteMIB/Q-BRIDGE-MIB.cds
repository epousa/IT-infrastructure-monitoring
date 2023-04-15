    t"Each octet within this value specifies a set of eight
        ports, with the first octet specifying ports 1 through
        8, the second octet specifying ports 9 through 16, etc.
        Within each octet, the most significant bit represents
        the lowest numbered port, and the least significant bit
        represents the highest numbered port.  Thus, each port
        of the bridge is represented by a single bit within the
        value of this object.  If that bit has a value of '1',
        then that port is included in the set of ports; the port
        is not included if its bit has a value of '0'."              �"The VLAN-ID that uniquely identifies a specific VLAN,
        any VLAN, or no VLAN.  The special values 0 and 4095
        have the same meaning as described in the VlanIdOrAny
        and VlanIdOrNone TEXTUAL-CONVENTIONs.

        Note that a MIB object that is defined using this
        TEXTUAL-CONVENTION should clarify the meaning of
        'any VLAN' and 'no VLAN' (i.e., the special values
        0 and 4095)."              �"The VLAN-ID that uniquely identifies a specific VLAN,
        or any VLAN.  The special value of 4095 is used to
        indicate a wildcard, i.e., any VLAN.  This can be used
        in any situation where an object or table entry must
        refer either to a specific VLAN or to any VLAN.

        Note that a MIB object that is defined using this
        TEXTUAL-CONVENTION should clarify the meaning of
        'any VLAN' (i.e., the special value 4095)."              �"The VLAN-ID that uniquely identifies a specific VLAN,
        or no VLAN.  The special value of zero is used to
        indicate that no VLAN-ID is present or used.  This can
        be used in any situation where an object or a table entry
        must refer either to a specific VLAN, or to no VLAN.

        Note that a MIB object that is defined using this
        TEXTUAL-CONVENTION should clarify the meaning of
        'no VLAN' (i.e., the special value 0)."              b"A value used to index per-VLAN tables: values of 0 and
        4095 are not permitted.  If the value is between 1 and
        4094 inclusive, it represents an IEEE 802.1Q VLAN-ID with
        global scope within a given bridged domain (see VlanId
        textual convention).  If the value is greater than 4095,
        then it represents a VLAN with scope local to the
        particular agent, i.e., one without a global VLAN-ID
        assigned to it.  Such VLANs are outside the scope of
        IEEE 802.1Q, but it is convenient to be able to manage them
        in the same way using this MIB."             M"IEEE Std 802.1Q 2003 Edition, Virtual Bridged
        Local Area Networks." �"The VLAN-ID that uniquely identifies a VLAN.  This
        is the 12-bit VLAN-ID used in the VLAN Tag header.
        The range is defined by the REFERENCEd specification."                                                                �"The VLAN Bridge MIB module for managing Virtual Bridged
        Local Area Networks, as defined by IEEE 802.1Q-2003,
        including Restricted Vlan Registration defined by
        IEEE 802.1u-2001 and Vlan Classification defined by
        IEEE 802.1v-2001.

        Copyright (C) The Internet Society (2006).  This version of
        this MIB module is part of RFC 4363; See the RFC itself for
        full legal notices."�"Email:  Bridge-mib@ietf.org
                 ietfmibs@ops.ietf.org

                 David Levi
         Postal: Nortel Networks
                 4655 Great America Parkway
                 Santa Clara, CA 95054
                 USA
         Phone:  +1 865 686 0432
         Email:  dlevi@nortel.com

                 David Harrington
         Postal: Effective Software
                 50 Harding Rd.
                 Portsmouth, NH 03801
                 USA
         Phone:  +1 603 436 8634
         Email:  ietfdbh@comcast.net
                 Les Bell
         Postal: Hemel Hempstead, Herts. HP2 7YU
                 UK
          Email: elbell@ntlworld.com

                 Andrew Smith
         Postal: Beijing Harbour Networks
                 Jiuling Building
                 21 North Xisanhuan Ave.
                 Beijing, 100089
                 PRC
            Fax: +1 415 345 1827
          Email: ah_smith@acm.org

                 Paul Langille
         Postal: Newbridge Networks
                 5 Corporate Drive
                 Andover, MA 01810
                 USA
          Phone: +1 978 691 4665
          Email: langille@newbridge.com

                 Anil Rijhsinghani
         Postal: Accton Technology Corporation
                 5 Mount Royal Ave
                 Marlboro, MA 01752
                 USA
          Phone:
          Email: anil@accton.com

                 Keith McCloghrie
         Postal: Cisco Systems, Inc.
                 170 West Tasman Drive
                 San Jose, CA 95134-1706
                 USA
          Phone: +1 408 526 5260
          Email: kzm@cisco.com" "200601090000Z" "199908250000Z"�"Added Vlan TEXTUAL-CONVENTIONs,
          dot1qPortRestrictedVlanRegistration, dot1vProtocol subtree,
          qBridgeClassificationDeviceGroup, qBridgePortGroup2,
          qBridgeClassificationPortGroup, and qBridgeCompliance2.
          Clarified dot1qForwardAllStaticPorts,
          qPortAcceptableFrameTypes, and qBridgeCompliance.
          Deprecated qBridgePortGroup and qBridgeCompliance." �"The VLAN Bridge MIB module for managing Virtual Bridged
        Local Area Networks, as defined by IEEE 802.1Q-1998.

        Initial version, published as RFC 2674."                       G"The version number of IEEE 802.1Q that this device
        supports." #"IEEE 802.1Q/D11 Section 12.10.1.1"                     E"The maximum IEEE 802.1Q VLAN-ID that this device
        supports." !"IEEE 802.1Q/D11 Section 9.3.2.3"                     M"The maximum number of IEEE 802.1Q VLANs that this
        device supports." #"IEEE 802.1Q/D11 Section 12.10.1.1"                     V"The current number of IEEE 802.1Q VLANs that are
        configured in this device." ""IEEE 802.1Q/D11 Section 12.7.1.1"                    �"The administrative status requested by management for
        GVRP.  The value enabled(1) indicates that GVRP should
        be enabled on this device, on all ports for which it has
        not been specifically disabled.  When disabled(2), GVRP
        is disabled on all ports, and all GVRP packets will be
        forwarded transparently.  This object affects all GVRP
        Applicant and Registrar state machines.  A transition
        from disabled(2) to enabled(1) will cause a reset of all
        GVRP state machines on all ports.

        The value of this object MUST be retained across
        reinitializations of the management system."                          "A table that contains configuration and control
        information for each Filtering Database currently
        operating on this device.  Entries in this table appear
        automatically when VLANs are assigned FDB IDs in the
        dot1qVlanCurrentTable."                       2"Information about a specific Filtering Database."                       *"The identity of this Filtering Database."                       L"The current number of dynamic entries in this
        Filtering Database." $"IEEE 802.1Q/D11 Section 12.7.1.1.3"                    "A table that contains information about unicast entries
        for which the device has forwarding and/or filtering
        information.  This information is used by the
        transparent bridging function in determining how to
        propagate a received frame."  "IEEE 802.1Q/D11 Section 12.7.7"                     �"Information about a specific unicast MAC address for
        which the device has some forwarding and/or filtering
        information."                       b"A unicast MAC address for which the device has
        forwarding and/or filtering information."                      �"Either the value '0', or the port number of the port on
        which a frame having a source address equal to the value
        of the corresponding instance of dot1qTpFdbAddress has
        been seen.  A value of '0' indicates that the port
        number has not been learned but that the device does
        have some forwarding/filtering information about this
        address (e.g., in the dot1qStaticUnicastTable).
        Implementors are encouraged to assign the port value to
        this object whenever it is learned, even for addresses
        for which the corresponding value of dot1qTpFdbStatus is
        not learned(3)."                      "The status of this entry.  The meanings of the values
        are:
            other(1) - none of the following.  This may include
                the case where some other MIB object (not the
                corresponding instance of dot1qTpFdbPort, nor an
                entry in the dot1qStaticUnicastTable) is being
                used to determine if and how frames addressed to
                the value of the corresponding instance of
                dot1qTpFdbAddress are being forwarded.
            invalid(2) - this entry is no longer valid (e.g., it
                was learned but has since aged out), but has not
                yet been flushed from the table.
            learned(3) - the value of the corresponding instance
                of dot1qTpFdbPort was learned and is being used.
            self(4) - the value of the corresponding instance of
                dot1qTpFdbAddress represents one of the device's
                addresses.  The corresponding instance of
                dot1qTpFdbPort indicates which of the device's
                ports has this address.
            mgmt(5) - the value of the corresponding instance of
                dot1qTpFdbAddress is also the value of an
                existing instance of dot1qStaticAddress."                      S"A table containing filtering information for VLANs
        configured into the bridge by (local or network)
        management, or learned dynamically, specifying the set of
        ports to which frames received on a VLAN for this FDB
        and containing a specific Group destination address are
        allowed to be forwarded."                      W"Filtering information configured into the bridge by
        management, or learned dynamically, specifying the set of
        ports to which frames received on a VLAN and containing
        a specific Group destination address are allowed to be
        forwarded.  The subset of these ports learned dynamically
        is also provided."                       l"The destination Group MAC address in a frame to which
        this entry's filtering information applies."                       "The complete set of ports, in this VLAN, to which
        frames destined for this Group MAC address are currently
        being explicitly forwarded.  This does not include ports
        for which this address is only implicitly forwarded, in
        the dot1qForwardAllPorts list."                       �"The subset of ports in dot1qTpGroupEgressPorts that
        were learned by GMRP or some other dynamic mechanism, in
        this Filtering database."                      ="A table containing forwarding information for each
        VLAN, specifying the set of ports to which forwarding of
        all multicasts applies, configured statically by
        management or dynamically by GMRP.  An entry appears in
        this table for all VLANs that are currently
        instantiated." ("IEEE 802.1Q/D11 Section 12.7.2, 12.7.7"                     �"Forwarding information for a VLAN, specifying the set
        of ports to which all multicasts should be forwarded,
        configured statically by management or dynamically by
        GMRP."                      "The complete set of ports in this VLAN to which all
        multicast group-addressed frames are to be forwarded.
        This includes ports for which this need has been
        determined dynamically by GMRP, or configured statically
        by management."                      v"The set of ports configured by management in this VLAN
        to which all multicast group-addressed frames are to be
        forwarded.  Ports entered in this list will also appear
        in the complete set shown by dot1qForwardAllPorts.  This
        value will be restored after the device is reset.  This
        only applies to ports that are members of the VLAN,
        defined by dot1qVlanCurrentEgressPorts.  A port may not
        be added in this set if it is already a member of the
        set of ports in dot1qForwardAllForbiddenPorts.  The
        default value is a string of ones of appropriate length,
        to indicate the standard behaviour of using basic
        filtering services, i.e., forward all multicasts to all
        ports.

        The value of this object MUST be retained across
        reinitializations of the management system."                      E"The set of ports configured by management in this VLAN
        for which the Service Requirement attribute Forward All
        Multicast Groups may not be dynamically registered by
        GMRP.  This value will be restored after the device is
        reset.  A port may not be added in this set if it is
        already a member of the set of ports in
        dot1qForwardAllStaticPorts.  The default value is a
        string of zeros of appropriate length.

        The value of this object MUST be retained across
        reinitializations of the management system."                      �"A table containing forwarding information for each
        VLAN, specifying the set of ports to which forwarding of
        multicast group-addressed frames for which no
        more specific forwarding information applies.  This is
        configured statically by management and determined
        dynamically by GMRP.  An entry appears in this table for
        all VLANs that are currently instantiated." ("IEEE 802.1Q/D11 Section 12.7.2, 12.7.7"                    "Forwarding information for a VLAN, specifying the set
        of ports to which all multicasts for which there is no
        more specific forwarding information shall be forwarded.
        This is configured statically by management or
        dynamically by GMRP."                      F"The complete set of ports in this VLAN to which
        multicast group-addressed frames for which there is no
        more specific forwarding information will be forwarded.
        This includes ports for which this need has been
        determined dynamically by GMRP, or configured statically
        by management."                      8"The set of ports configured by management, in this
        VLAN, to which multicast group-addressed frames for
        which there is no more specific forwarding information
        are to be forwarded.  Ports entered in this list will
        also appear in the complete set shown by
        dot1qForwardUnregisteredPorts.  This value will be
        restored after the device is reset.  A port may not be
        added in this set if it is already a member of the set
        of ports in dot1qForwardUnregisteredForbiddenPorts.  The
        default value is a string of zeros of appropriate
        length, although this has no effect with the default
        value of dot1qForwardAllStaticPorts.

        The value of this object MUST be retained across
        reinitializations of the management system."                      W"The set of ports configured by management in this VLAN
        for which the Service Requirement attribute Forward
        Unregistered Multicast Groups may not be dynamically
        registered by GMRP.  This value will be restored after
        the device is reset.  A port may not be added in this
        set if it is already a member of the set of ports in
        dot1qForwardUnregisteredStaticPorts.  The default value
        is a string of zeros of appropriate length.

        The value of this object MUST be retained across
        reinitializations of the management system."                          �"A table containing filtering information for Unicast
        MAC addresses for each Filtering Database, configured
        into the device by (local or network) management
        specifying the set of ports to which frames received
        from specific ports and containing specific unicast
        destination addresses are allowed to be forwarded.  A
        value of zero in this table (as the port number from
        which frames with a specific destination address are
        received) is used to specify all ports for which there
        is no specific entry in this table for that particular
        destination address.  Entries are valid for unicast
        addresses only." H"IEEE 802.1Q/D11 Section 12.7.7,
        ISO/IEC 15802-3 Section 7.9.1"                    "Filtering information configured into the device by
        (local or network) management specifying the set of
        ports to which frames received from a specific port and
        containing a specific unicast destination address are
        allowed to be forwarded."                       �"The destination MAC address in a frame to which this
        entry's filtering information applies.  This object must
        take the value of a unicast address."                      3"Either the value '0' or the port number of the port
        from which a frame must be received in order for this
        entry's filtering information to apply.  A value of zero
        indicates that this entry applies on all ports of the
        device for which there is no other applicable entry."                      &"The set of ports for which a frame with a specific
        unicast address will be flooded in the event that it
        has not been learned.  It also specifies the set of
        ports on which a specific unicast address may be dynamically
        learned.  The dot1qTpFdbTable will have an equivalent
        entry with a dot1qTpFdbPort value of '0' until this
        address has been learned, at which point it will be updated
        with the port the address has been seen on.  This only
        applies to ports that are members of the VLAN, defined
        by dot1qVlanCurrentEgressPorts.  The default value of
        this object is a string of ones of appropriate length.

        The value of this object MUST be retained across
        reinitializations of the management system." 6"IEEE 802.1Q/D11 Table 8-5, ISO/IEC 15802-3 Table 7-5"                    c"This object indicates the status of this entry.
            other(1) - this entry is currently in use, but
                the conditions under which it will remain
                so differ from the following values.
            invalid(2) - writing this value to the object
                removes the corresponding entry.
            permanent(3) - this entry is currently in use
                and will remain so after the next reset of
                the bridge.
            deleteOnReset(4) - this entry is currently in
                use and will remain so until the next
                reset of the bridge.
            deleteOnTimeout(5) - this entry is currently in
                use and will remain so until it is aged out.

        The value of this object MUST be retained across
        reinitializations of the management system."                      �"A table containing filtering information for Multicast
        and Broadcast MAC addresses for each VLAN, configured
        into the device by (local or network) management
        specifying the set of ports to which frames received
        from specific ports and containing specific Multicast
        and Broadcast destination addresses are allowed to be
        forwarded.  A value of zero in this table (as the port
        number from which frames with a specific destination
        address are received) is used to specify all ports for
        which there is no specific entry in this table for that
        particular destination address.  Entries are valid for
        Multicast and Broadcast addresses only." H"IEEE 802.1Q/D11 Section 12.7.7,
        ISO/IEC 15802-3 Section 7.9.1"                    ."Filtering information configured into the device by
        (local or network) management specifying the set of
        ports to which frames received from this specific port
        for this VLAN and containing this Multicast or Broadcast
        destination address are allowed to be forwarded."                       �"The destination MAC address in a frame to which this
        entry's filtering information applies.  This object must
        take the value of a Multicast or Broadcast address."                      3"Either the value '0' or the port number of the port
        from which a frame must be received in order for this
        entry's filtering information to apply.  A value of zero
        indicates that this entry applies on all ports of the
        device for which there is no other applicable entry."                      F"The set of ports to which frames received from a
        specific port and destined for a specific Multicast or
        Broadcast MAC address must be forwarded, regardless of
        any dynamic information, e.g., from GMRP.  A port may not
        be added in this set if it is already a member of the
        set of ports in dot1qStaticMulticastForbiddenEgressPorts.
        The default value of this object is a string of ones of
        appropriate length.

        The value of this object MUST be retained across
        reinitializations of the management system."                      H"The set of ports to which frames received from a
        specific port and destined for a specific Multicast or
        Broadcast MAC address must not be forwarded, regardless
        of any dynamic information, e.g., from GMRP.  A port may
        not be added in this set if it is already a member of the
        set of ports in dot1qStaticMulticastStaticEgressPorts.
        The default value of this object is a string of zeros of
        appropriate length.

        The value of this object MUST be retained across
        reinitializations of the management system."                      c"This object indicates the status of this entry.
            other(1) - this entry is currently in use, but
                the conditions under which it will remain
                so differ from the following values.
            invalid(2) - writing this value to the object
                removes the corresponding entry.
            permanent(3) - this entry is currently in use
                and will remain so after the next reset of
                the bridge.
            deleteOnReset(4) - this entry is currently in
                use and will remain so until the next
                reset of the bridge.
            deleteOnTimeout(5) - this entry is currently in
                use and will remain so until it is aged out.

        The value of this object MUST be retained across
        reinitializations of the management system."                           �"The number of times a VLAN entry has been deleted from
        the dot1qVlanCurrentTable (for any reason).  If an entry
        is deleted, then inserted, and then deleted, this
        counter will be incremented by 2."                       �"A table containing current configuration information
        for each VLAN currently configured into the device by
        (local or network) management, or dynamically created
        as a result of GVRP requests received."                       �"Information for a VLAN configured into the device by
        (local or network) management, or dynamically created
        as a result of GVRP requests received."                       e"A TimeFilter for this entry.  See the TimeFilter
        textual convention to see how this works."                       9"The VLAN-ID or other identifier referring to this VLAN."                      �"The Filtering Database used by this VLAN.  This is one
        of the dot1qFdbId values in the dot1qFdbTable.  This
        value is allocated automatically by the device whenever
        the VLAN is created: either dynamically by GVRP, or by
        management, in dot1qVlanStaticTable.  Allocation of this
        value follows the learning constraints defined for this
        VLAN in dot1qLearningConstraintsTable."                       l"The set of ports that are transmitting traffic for
        this VLAN as either tagged or untagged frames." #"IEEE 802.1Q/D11 Section 12.10.2.1"                     ["The set of ports that are transmitting traffic for
        this VLAN as untagged frames." #"IEEE 802.1Q/D11 Section 12.10.2.1"                    R"This object indicates the status of this entry.
            other(1) - this entry is currently in use, but the
                conditions under which it will remain so differ
                from the following values.
            permanent(2) - this entry, corresponding to an entry
                in dot1qVlanStaticTable, is currently in use and
                will remain so after the next reset of the
                device.  The port lists for this entry include
                ports from the equivalent dot1qVlanStaticTable
                entry and ports learned dynamically.
            dynamicGvrp(3) - this entry is currently in use
                and will remain so until removed by GVRP.  There
                is no static entry for this VLAN, and it will be
                removed when the last port leaves the VLAN."                       4"The value of sysUpTime when this VLAN was created."                       �"A table containing static configuration information for
        each VLAN configured into the device by (local or
        network) management.  All entries are permanent and will
        be restored after the device is reset."                       e"Static information for a VLAN configured into the
        device by (local or network) management."                       W"An administratively assigned string, which may be used
        to identify the VLAN." #"IEEE 802.1Q/D11 Section 12.10.2.1"                    "The set of ports that are permanently assigned to the
        egress list for this VLAN by management.  Changes to a
        bit in this object affect the per-port, per-VLAN
        Registrar control for Registration Fixed for the
        relevant GVRP state machine on each port.  A port may
        not be added in this set if it is already a member of
        the set of ports in dot1qVlanForbiddenEgressPorts.  The
        default value of this object is a string of zeros of
        appropriate length, indicating not fixed." ."IEEE 802.1Q/D11 Section 12.7.7.3, 11.2.3.2.3"                    h"The set of ports that are prohibited by management
        from being included in the egress list for this VLAN.
        Changes to this object that cause a port to be included
        or excluded affect the per-port, per-VLAN Registrar
        control for Registration Forbidden for the relevant GVRP
        state machine on each port.  A port may not be added in
        this set if it is already a member of the set of ports
        in dot1qVlanStaticEgressPorts.  The default value of
        this object is a string of zeros of appropriate length,
        excluding all ports from the forbidden set." ."IEEE 802.1Q/D11 Section 12.7.7.3, 11.2.3.2.3"                    \"The set of ports that should transmit egress packets
        for this VLAN as untagged.  The default value of this
        object for the default VLAN (dot1qVlanIndex = 1) is a string
        of appropriate length including all ports.  There is no
        specified default for other VLANs.  If a device agent cannot
        support the set of ports being set, then it will reject the
        set operation with an error.  For example, a
        manager might attempt to set more than one VLAN to be untagged
        on egress where the device does not support this IEEE 802.1Q
        option." #"IEEE 802.1Q/D11 Section 12.10.2.1"                     1"This object indicates the status of this entry."                      s"The next available value for dot1qVlanIndex of a local
        VLAN entry in dot1qVlanStaticTable.  This will report
        values >=4096 if a new Local VLAN may be created or else
        the value 0 if this is not possible.

        A row creation operation in this table for an entry with a local
        VlanIndex value may fail if the current value of this object
        is not used as the index.  Even if the value read is used,
        there is no guarantee that it will still be the valid index
        when the create operation is attempted; another manager may
        have already got in during the intervening time interval.
        In this case, dot1qNextFreeLocalVlanIndex should be re-read
        and the creation re-tried with the new value.

        This value will automatically change when the current value is
        used to create a new row."                       k"A table containing per-port control and status
        information for VLAN configuration in the device."                       r"Information controlling VLAN configuration for a port
        on the device.  This is indexed by dot1dBasePort."                       �"The PVID, the VLAN-ID assigned to untagged frames or
        Priority-Tagged frames received on this port.

        The value of this object MUST be retained across
        reinitializations of the management system." #"IEEE 802.1Q/D11 Section 12.10.1.1"                    �"When this is admitOnlyVlanTagged(2), the device will
        discard untagged frames or Priority-Tagged frames
        received on this port.  When admitAll(1), untagged
        frames or Priority-Tagged frames received on this port
        will be accepted and assigned to a VID based on the
        PVID and VID Set for this port.

        This control does not affect VLAN-independent Bridge
        Protocol Data Unit (BPDU) frames, such as GVRP and
        Spanning Tree Protocol (STP).  It does affect VLAN-
        dependent BPDU frames, such as GMRP.

        The value of this object MUST be retained across
        reinitializations of the management system." #"IEEE 802.1Q/D11 Section 12.10.1.3"                    �"When this is true(1), the device will discard incoming
        frames for VLANs that do not include this Port in its
        Member set.  When false(2), the port will accept all
        incoming frames.

        This control does not affect VLAN-independent BPDU
        frames, such as GVRP and STP.  It does affect VLAN-
        dependent BPDU frames, such as GMRP.

        The value of this object MUST be retained across
        reinitializations of the management system." #"IEEE 802.1Q/D11 Section 12.10.1.4"                    "The state of GVRP operation on this port.  The value
        enabled(1) indicates that GVRP is enabled on this port,
        as long as dot1qGvrpStatus is also enabled for this
        device.  When disabled(2) but dot1qGvrpStatus is still
        enabled for the device, GVRP is disabled on this port:
        any GVRP packets received will be silently discarded, and
        no GVRP registrations will be propagated from other
        ports.  This object affects all GVRP Applicant and
        Registrar state machines on this port.  A transition
        from disabled(2) to enabled(1) will cause a reset of all
        GVRP state machines on this port.

        The value of this object MUST be retained across
        reinitializations of the management system."                       W"The total number of failed GVRP registrations, for any
        reason, on this port."                       Q"The Source MAC Address of the last GVRP message
        received on this port."                      �"The state of Restricted VLAN Registration on this port.
         If the value of this control is true(1), then creation
         of a new dynamic VLAN entry is permitted only if there
         is a Static VLAN Registration Entry for the VLAN concerned,
         in which the Registrar Administrative Control value for
         this port is Normal Registration.

        The value of this object MUST be retained across
        reinitializations of the management system." +"IEEE 802.1u clause 11.2.3.2.3, 12.10.1.7."                    �"A table containing per-port, per-VLAN statistics for
        traffic received.  Separate objects are provided for both the
        most-significant and least-significant bits of statistics
        counters for ports that are associated with this transparent
        bridge.  The most-significant bit objects are only required on
        high-capacity interfaces, as defined in the conformance clauses
        for these objects.  This mechanism is provided as a way to read
        64-bit counters for agents that support only SNMPv1.

        Note that the reporting of most-significant and least-
        significant counter bits separately runs the risk of missing
        an overflow of the lower bits in the interval between sampling.
        The manager must be aware of this possibility, even within the
        same varbindlist, when interpreting the results of a request or
        asynchronous notification."                       0"Traffic statistics for a VLAN on an interface."                      �"The number of valid frames received by this port from
        its segment that were classified as belonging to this
        VLAN.  Note that a frame received on this port is
        counted by this object if and only if it is for a
        protocol being processed by the local forwarding process
        for this VLAN.  This object includes received bridge
        management frames classified as belonging to this VLAN
        (e.g., GMRP, but not GVRP or STP." '"IEEE 802.1Q/D11 Section 12.6.1.1.3(a)"                    ,"The number of valid frames transmitted by this port to
        its segment from the local forwarding process for this
        VLAN.  This includes bridge management frames originated
        by this device that are classified as belonging to this
        VLAN (e.g., GMRP, but not GVRP or STP)." '"IEEE 802.1Q/D11 Section 12.6.1.1.3(d)"                    ("The number of valid frames received by this port from
        its segment that were classified as belonging to this
        VLAN and that were discarded due to VLAN-related reasons.
        Specifically, the IEEE 802.1Q counters for Discard
        Inbound and Discard on Ingress Filtering." $"IEEE 802.1Q/D11 Section 12.6.1.1.3"                     ]"The number of times the associated
        dot1qTpVlanPortInFrames counter has overflowed." $"ISO/IEC 15802-3 Section 14.6.1.1.3"                     ^"The number of times the associated
        dot1qTpVlanPortOutFrames counter has overflowed." $"ISO/IEC 15802-3 Section 14.6.1.1.3"                     _"The number of times the associated
        dot1qTpVlanPortInDiscards counter has overflowed." $"ISO/IEC 15802-3 Section 14.6.1.1.3"                     d"A table containing per-port, per-VLAN statistics for
        traffic on high-capacity interfaces."                       F"Traffic statistics for a VLAN on a high-capacity
        interface."                      �"The number of valid frames received by this port from
        its segment that were classified as belonging to this
        VLAN.  Note that a frame received on this port is
        counted by this object if and only if it is for a
        protocol being processed by the local forwarding process
        for this VLAN.  This object includes received bridge
        management frames classified as belonging to this VLAN
        (e.g., GMRP, but not GVRP or STP)." '"IEEE 802.1Q/D11 Section 12.6.1.1.3(a)"                    ,"The number of valid frames transmitted by this port to
        its segment from the local forwarding process for this
        VLAN.  This includes bridge management frames originated
        by this device that are classified as belonging to this
        VLAN (e.g., GMRP, but not GVRP or STP)." '"IEEE 802.1Q/D11 Section 12.6.1.1.3(d)"                    ("The number of valid frames received by this port from
        its segment that were classified as belonging to this
        VLAN and that were discarded due to VLAN-related reasons.
        Specifically, the IEEE 802.1Q counters for Discard
        Inbound and Discard on Ingress Filtering." $"IEEE 802.1Q/D11 Section 12.6.1.1.3"                     \"A table containing learning constraints for sets of
        Shared and Independent VLANs." #"IEEE 802.1Q/D11 Section 12.10.3.1"                     +"A learning constraint defined for a VLAN."                       `"The index of the row in dot1qVlanCurrentTable for the
        VLAN constrained by this entry."                       �"The identity of the constraint set to which
        dot1qConstraintVlan belongs.  These values may be chosen
        by the management station."                      �"The type of constraint this entry defines.
            independent(1) - the VLAN, dot1qConstraintVlan,
                uses a filtering database independent from all
                other VLANs in the same set, defined by
                dot1qConstraintSet.
            shared(2) - the VLAN, dot1qConstraintVlan, shares
                the same filtering database as all other VLANs
                in the same set, defined by dot1qConstraintSet."                       "The status of this entry."                      "The identity of the constraint set to which a VLAN
        belongs, if there is not an explicit entry for that VLAN
        in dot1qLearningConstraintsTable.

        The value of this object MUST be retained across
        reinitializations of the management system."                      F"The type of constraint set to which a VLAN belongs, if
        there is not an explicit entry for that VLAN in
        dot1qLearningConstraintsTable.  The types are as defined
        for dot1qConstraintType.

        The value of this object MUST be retained across
        reinitializations of the management system."                           �"A table that contains mappings from Protocol
         Templates to Protocol Group Identifiers used for
         Port-and-Protocol-based VLAN Classification." "IEEE 802.1v clause 8.6.4"                     N"A mapping from a Protocol Template to a Protocol
         Group Identifier."                       c"The data-link encapsulation format or the
         'detagged_frame_type' in a Protocol Template." "IEEE 802.1v clause 8.6.2"                    �"The identification of the protocol above the data-link
         layer in a Protocol Template.  Depending on the
         frame type, the octet string will have one of the
         following values:

         For 'ethernet', 'rfc1042' and 'snap8021H',
             this is the 16-bit (2-octet) IEEE 802.3 Type Field.
         For 'snapOther',
             this is the 40-bit (5-octet) PID.
         For 'llcOther',
             this is the 2-octet IEEE 802.2 Link Service Access
             Point (LSAP) pair: first octet for Destination Service
             Access Point (DSAP) and second octet for Source Service
             Access Point (SSAP)." "IEEE 802.1v clause 8.6.2"                     i"Represents a group of protocols that are associated
         together when assigning a VID to a frame." %"IEEE 802.1v clause 8.6.3, 12.10.2.1"                     1"This object indicates the status of this entry."                       `"A table that contains VID sets used for
         Port-and-Protocol-based VLAN Classification." "IEEE 802.1v clause 8.4.4"                     "A VID set for a port."                       K"Designates a group of protocols in the Protocol
         Group Database." %"IEEE 802.1v clause 8.6.3, 12.10.1.2"                     G"The VID associated with a group of protocols for
         each port." %"IEEE 802.1v clause 8.4.4, 12.10.1.2"                     1"This object indicates the status of this entry."                               �"A collection of objects providing device-level control
        and status information for the Virtual LAN bridge
        services."                 �"A collection of objects providing information about all
        unicast addresses, learned dynamically or statically
        configured by management, in each Filtering Database."                 �"A collection of objects providing information about all
        multicast addresses, learned dynamically or statically
        configured by management, in each Filtering Database."                 �"A collection of objects providing information about
        service requirements, learned dynamically or statically
        configured by management, in each Filtering Database."                 �"A collection of objects providing information about
        unicast and multicast addresses statically configured by
        management, in each Filtering Database or VLAN."                 m"A collection of objects providing information about
        all VLANs currently configured on this device."                 i"A collection of objects providing information about
        VLANs statically configured by management."                 j"A collection of objects providing port-level VLAN
        control and status information for all ports."                 �"A collection of objects providing per-port packet
        statistics for all VLANs currently configured on this
        device."                <"A collection of objects providing overflow counters for
        per-port packet statistics for all VLANs currently configured
        on this device for high-capacity interfaces, defined as those
        that have the value of the corresponding instance of
        ifSpeed greater than 650,000,000 bits/second."                &"A collection of objects providing per-port packet
        statistics for all VLANs currently configured on this
        device for high-capacity interfaces, defined as those
        that have the value of the corresponding instance of
        ifSpeed greater than 650,000,000 bits/second."                 n"A collection of objects defining the Filtering Database
        constraints all VLANs have with each other."                 �"A collection of objects defining the default Filtering
        Database constraints for VLANs that have no specific
        constraints defined."                 1"VLAN classification information for the bridge."                 7"VLAN classification information for individual ports."                 j"A collection of objects providing port-level VLAN
        control and status information for all ports."                    �"The compliance statement for device support of Virtual
        LAN Bridge services.

        RFC2674 was silent about the expected persistence of the
        read-write objects in this MIB module.  Applications MUST
        NOT assume that the values of the read-write objects are
        persistent across reinitializations of the management
        system and MUST NOT assume that the values are not
        persistent across reinitializations of the management
        system."   ^"This group is mandatory for bridges that implement
            802.1Q transparent bridging." ^"This group is mandatory for bridges that implement
            802.1Q transparent bridging." �"This group is mandatory for bridges that implement
            extended filtering services.  All objects must be
            read-write if extended-filtering services are
            enabled." "This group is optional." r"This group is optional as there may be significant
            implementation cost associated with its support." �"This group is optional as there may be significant
            implementation cost associated with its support.  It is most
            relevant for high-capacity interfaces where the SNMP agent
            supports only SNMPv1." �"This group is optional as there may be significant
            implementation cost associated with its support.  It is most
            relevant for high-capacity interfaces." �"This group is mandatory for devices implementing
             both Independent VLAN Learning (IVL) and Shared
             VLAN Learning (SVL) modes of operation of the
             filtering database, as defined by IEEE 802.1Q." �"This group is mandatory for devices implementing
             both Independent VLAN Learning (IVL) and Shared
             VLAN Learning (SVL) modes of operation of the
             filtering database, as defined by IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q."            z"The compliance statement for device support of Virtual
        LAN Bridge services.

        This document clarifies the persistence requirements for
        the read-write objects in this MIB module.  All
        implementations claiming compliance to qBridgeCompliance2
        MUST retain the values of those read-write objects that
        specify this requirement."   ^"This group is mandatory for bridges that implement
            802.1Q transparent bridging." ^"This group is mandatory for bridges that implement
            802.1Q transparent bridging." �"This group is mandatory for bridges that implement
            extended filtering services.  All objects must be
            read-write if extended-filtering services are
            enabled." "This group is optional." r"This group is optional as there may be significant
            implementation cost associated with its support." �"This group is optional as there may be significant
            implementation cost associated with its support.  It is most
            relevant for high-capacity interfaces where the SNMP agent
            supports only SNMPv1." �"This group is optional as there may be significant
            implementation cost associated with its support.  It is most
            relevant for high-capacity interfaces." �"This group is mandatory for devices implementing
             both Independent VLAN Learning (IVL) and Shared
             VLAN Learning (SVL) modes of operation of the
             filtering database, as defined by IEEE 802.1Q." �"This group is mandatory for devices implementing
             both Independent VLAN Learning (IVL) and Shared
             VLAN Learning (SVL) modes of operation of the
             filtering database, as defined by IEEE 802.1Q." v"This group is mandatory ONLY for devices implementing
             VLAN Classification as specified in IEEE 802.1v." v"This group is mandatory ONLY for devices implementing
             VLAN Classification as specified in IEEE 802.1v." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1Q." ]"Write access is not required as this is an optional
            capability in IEEE 802.1v." ]"Write access is not required as this is an optional
            capability in IEEE 802.1v."                                