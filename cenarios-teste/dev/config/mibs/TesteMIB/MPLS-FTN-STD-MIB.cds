 �-- =================================================================
-- Description: MPLS-FTN-STD-MIB
-- Reference:   This mib was extracted from RFC 3814
-- =================================================================
   %"Index for an entry in mplsFTNTable."              ~"Index for an entry in mplsFTNTable or the special value
             zero. The value zero is object-specific and must
             therefore be defined as part of the description of any
             object which uses this syntax.  Examples of the usage
             of zero might include situations when none or all
             entries in mplsFTNTable need to be referenced."                                                                                            �"Copyright (C) The Internet Society (2004). The
             initial version of this MIB module was published
             in RFC 3814. For full legal notices see the RFC
             itself or see:
             http://www.ietf.org/copyrights/ianamib.html
    
             This MIB module contains managed object definitions for
             specifying FEC to NHLFE (FTN) mappings and corresponding
             performance for MPLS."'"
                     Thomas D. Nadeau
             Postal: Cisco Systems, Inc.
                     250 Apollo Drive
                     Chelmsford, MA 01824
             Tel:    +1-978-244-3051
             Email:  tnadeau@cisco.com
    
                     Cheenu Srinivasan
             Postal: Bloomberg L.P.
                     499 Park Avenue
                     New York, NY 10022
             Tel:    +1-212-893-3682
             Email:  cheenu@bloomberg.net
    
                     Arun Viswanathan
             Postal: Force10 Networks, Inc.
                     1440 McCarthy Blvd
                     Milpitas, CA 95035
             Tel:    +1-408-571-3516
             Email:  arunv@force10networks.com
    
             IETF MPLS Working Group email: mpls@uu.net" "200406030000Z" -"Initial version issued as part of RFC 3814."       -- June 6, 2004
              "This object contains the next available valid value to
             be used for mplsFTNIndex when creating entries in the
             mplsFTNTable.
    
             When creating a new conceptual row (configuration
             entry) in mplsFTNTable with an SNMP SET operation the
             command generator (Network Management Application) must
             first issue a management protocol retrieval operation
             to obtain the current value of this object.
    
             If the command responder (agent) does not wish to allow
             creation of more entries in mplsFTNTable, possibly
             because of resource exhaustion, this object MUST return
             a value of 0.
    
             If a non-zero value is returned the Network Management
    
             Application must determine whether the value is indeed
             still unused since two Network Management Applications
             may attempt to create a row simultaneously and use the
             same value.
    
             If it is currently unused and the SET succeeds, the
             agent MUST change the value of this object to a
             currently unused non-zero value (according to an
             implementation specific algorithm) or zero (if no
             further row creation will be permitted).
    
             If the value is in use, however, the SET fails and the
             Network Management Application must then reread this
             object to obtain a new usable value."                      �"Indicates the last time an entry was added, deleted or
             modified in mplsFTNTable.  Management stations should
             consult this object to determine if mplsFTNTable
             requires their attention.  This object is particularly
             useful for applications performing a retrieval on
             mplsFTNTable to ensure that the table is not modified
             during the retrieval operation."                      "This table contains the currently defined FTN entries.
             This table allows FEC to NHLFE mappings to be
             specified.  Each entry in this table defines a rule to
             be applied to incoming packets (on interfaces that the
             FTN entry is activated on using mplsFTNMapTable) and an
             action to be taken on matching packets
             (mplsFTNActionPointer).
    
             This table supports 6-tuple matching rules based on one
             or more of source address range, destination address
             range, source port range, destination port range, IPv4
    
             Protocol field or IPv6 next-header field and the
             DiffServ Code Point (DSCP) to be specified.
    
             The action pointer points either to instance of
             mplsXCEntry in MPLS-LSR-STD-MIB when the NHLFE is a non-
             TE LSP, or to an instance of mplsTunnelEntry in the
             MPLS-TE-STD-MIB when the NHLFE is an originating TE
             tunnel."�"J. Postel, Internet Protocol, RFC 791, STD 5, September
             1981
    
             Deering, S., and R. Hinden, Internet Protocol, Version
             6 (IPv6) Specification, RFC 2460, December 1998
    
             Nichols, K, Blake, S., Baker, F. and D. Black,
             Definition of the Differentiated Services Field (DS
             Field) in the IPv4 and IPv6 Headers, RFC 2474, December
             1998
    
             Srinivasan, C., A. Viswanathan, and T. Nadeau, MPLS
             Label Switch Router Management Information Base,
             RFC 3813
    
             Srinivasan, C., A. Viswanathan, and T. Nadeau, MPLS
             Traffic Engineering Management Information Base,
             RFC 3812"                     �"Each entry represents one FTN entry which defines a
             rule to compare incoming packets with and an action to
             be taken on matching packets."                      O"This is the unique index for a conceptual row in
             mplsFTNTable.
    
             To create a new conceptual row in mplsFTNTable a
             Network Management Application SHOULD retrieve the
             current value of mplsFTNIndexNext to determine the next
             valid available value of mplsFTNIndex."                      �"Used for controlling the creation and deletion of this
             row. All writeable objects in this row may be modified
             at any time. If a Network Management Application
             attempts to delete a conceptual row by setting this
             object to 'destroy' and there are one or more entries
             in mplsFTNMapTable pointing to the row (i.e., when
             mplsFTNIndex of the conceptual row being deleted is
             equal to mplsFTNMapCurrIndex for one or more entries in
             mplsFTNMapTable), the agent MUST also destroy the
             corresponding entries in mplsFTNMapTable."                      "The description of this FTN entry. Since the index for
             this table has no particular significance or meaning,
             this object should contain some meaningful text that an
             operator could use to further distinguish entries in
             this table."                      �"This bit map indicates which of the fields described
             next, namely source address range, destination address
             range, source port range, destination port range, IPv4
             Protocol field or IPv6 next-header field and
             Differentiated Services Code Point (DSCP) is active for
             this FTN entry. If a particular bit is set to zero then
             the corresponding field in the packet MUST be ignored
             for comparison purposes."                      �"This object determines the type of address contained in
             the source and destination address objects
             (mplsFTNSourceAddrMin, mplsFTNSourceAddrMax,
             mplsFTNDestAddrMin and mplsFTNDestAddrMax) of a
             conceptual row.
    
             This object MUST NOT be set to unknown(0) when
             mplsFTNMask has bit positions sourceAddr(0) or
             destAddr(1) set to one.
    
             When both these bit positions of mplsFTNMask are set to
             zero the value of mplsFTNAddrType SHOULD be set to
             unknown(0) and the corresponding source and destination
             address objects SHOULD be set to zero-length strings."                       �"The lower end of the source address range. The type of
             this object is determined by the corresponding
             mplsFTNAddrType object."                       �"The upper end of the source address range. The type of
             this object is determined by the corresponding
             mplsFTNAddrType object."                       �"The lower end of the destination address range. The
             type of this object is determined by the corresponding
             mplsFTNAddrType object."                       �"The higher end of the destination address range. The
             type of this object is determined by the corresponding
             mplsFTNAddrType object."                       )"The lower end of the source port range."                       *"The higher end of the source port range "                       ."The lower end of the destination port range."                       /"The higher end of the destination port range."                      %"The IP protocol to match against the IPv4 protocol
             number or IPv6 Next-Header number in the packet. A
             value of 255 means match all.  Note that the protocol
             number of 255 is reserved by IANA, and Next-Header
             number of 0 is used in IPv6."                       !"The contents of the DSCP field." �"Nichols, K., Blake, S., Baker, F. and D. Black,
             Definition of the Differentiated Services Field (DS
             Field) in the IPv4 and IPv6 Headers, RFC 2474, December
             1998."                     R"The type of action to be taken on packets matching this
             FTN entry."                      ("If mplsFTNActionType is redirectLsp(1), then this
             object MUST contain zeroDotZero or point to a instance
             of mplsXCEntry indicating the LSP to redirect matching
             packets to.
    
             If mplsFTNActionType is redirectTunnel(2), then this
             object MUST contain zeroDotZero or point to a instance
             of mplsTunnelEntry indicating the MPLS TE tunnel to
             redirect matching packets to.
    
             If this object points to a conceptual row instance in a
             table consistent with mplsFTNActionType but this
             instance does not currently exist then no action will
             be taken on packets matching such an FTN entry till
             this instance comes into existence.
    
             If this object contains zeroDotZero then no action will
             be taken on packets matching such an FTN entry till it
             is populated with a valid pointer consistent with the
             value of mplsFTNActionType as explained above."                       �"The storage type for this FTN entry. Conceptual rows
             having the value 'permanent' need not allow write-
             access to any columnar objects in the row."                      �"Indicates the last time an entry was added, deleted or
             modified in mplsFTNMapTable. Management stations should
             consult this object to determine if the table requires
             their attention.  This object is particularly useful
             for applications performing a retrieval on
             mplsFTNMapTable to ensure that the table is not
             modified during the retrieval operation."                      �"This table contains objects which provide the
             capability to apply or map FTN rules as defined by
             entries in mplsFTNTable to specific interfaces in the
             system.  FTN rules are compared with incoming packets
             in the order in which they are applied on an interface.
    
             The indexing structure of mplsFTNMapTable is as
             follows.
    
             - mplsFTNMapIndex indicates the interface to which the
                rule is being applied.  A value of 0 represents the
                application of the rule to all interfaces.
    
             - mplsFTNMapPrevIndex specifies the rule on the
                interface prior to the one being applied.  A value of
                0 specifies that the rule is being inserted at the
                head of the list of rules currently applied to the
                interface.
    
             - mplsFTNMapCurrIndex is the index in mplsFTNTable
                corresponding to the rule being applied.
    
             This indexing structure makes the entries in the table
             behave like items in a linked-list.  The object
             mplsFTNMapPrevIndex in each conceptual row is a pointer
             to the previous entry that is applied to a particular
             interface.  This allows a new entry to be 'inserted' at
             an arbitrary position in a list of entries currently
             applied to an interface.  This object is self-
             adjusting, i.e., its value is automatically adjusted by
             the agent, if necessary, after an insertion or deletion
             operation.
    
             Using this linked-list structure, one can retrieve FTN
             entries in the order of application on a per-interface
             basis as follows:
    
             - To determine the first FTN entry on an interface
                with index ifIndex perform a GETNEXT retrieval
                operation on mplsFTNMapRowStatus.ifIndex.0.0; the
                returned object, if one exists, is (say)
                mplsFTNMapRowStatus.ifIndex.0.n (mplsFTNMapRowStatus
                is the first accessible columnar object in the
                conceptual row). Then the index of the first FTN
                entry applied on this interface is n.
    
             - To determine the FTN entry applied to an interface
                after the one indexed by n perform a GETNEXT
                retrieval operation on
                mplsFTNMapRowStatus.ifIndex.n.0.  If such an entry
                exists the returned object would be of the form
                mplsFTNMapRowStatus.ifIndex.n.m.  Then the index of
                the next FTN entry applied on this interface is m.
    
             - If the FTN entry indexed by n is the last entry
                applied to the interface with index ifIndex then the
                object returned would either be:
    
                1.mplsFTNMapRowStatus.ifIndexNext.0.k, where
                   ifIndexNext is the index of the next interface in
                   ifTable to which an FTN entry has been applied, in
                   which case k is the index of the first FTN entry
                   applied to the interface with index ifIndexNext;
    
                or:
    
                2.mplsFTNMapStorageType.firstIfIndex.0.p, if there
                   are no more entries in mplsFTNMapTable, where
                   firstIfIndex is the first entry in ifTable to
                   which an FTN entry has been mapped.
    
             Use the above steps to retrieve all the applied FTN
             entries on a per-interface basis in application order.
             Note that the number of retrieval operations is the
             same as the number of applied FTN entries (i.e., the
             minimum number of GETNEXT operations needed using any
             indexing scheme).
    
             Agents MUST NOT allow the same FTN entry as specified
             by mplsFTNMapCurrIndex to be applied multiple times to
             the same interface.
    
             Agents MUST NOT allow the creation of rows in this
             table until the corresponding rows are created in the
             mplsFTNTable.
    
             If a row in mplsFTNTable is destroyed, the agent MUST
             destroy the corresponding entries (i.e., ones with a
             matching value of mplsFTNCurrIndex) in this table as
             well."                       �"Each conceptual row represents the application of an
             FTN rule at a specific position in the list of FTN
             rules applied on an interface. "                      n"The interface index that this FTN entry is being
             applied to. A value of zero indicates an entry that is
             applied all interfaces.
    
             Entries mapped to an interface by specifying its (non-
             zero) interface index in mplsFTNMapIndex are applied
             ahead of entries with mplsFTNMapIndex equal to zero."                       �"The index of the previous FTN entry that was applied to
             this interface. The special value zero indicates that
             this should be the first FTN entry in the list."                       W"Index of the current FTN entry that is being applied to
             this interface."                      �"Used for controlling the creation and deletion of this
             row.
    
             All writable objects in this row may be modified at any
             time.
    
             If a conceptual row in mplsFTNMapTable points to a
             conceptual row in mplsFTNTable which is subsequently
             deleted, the corresponding conceptual row in
             mplsFTNMapTable MUST also be deleted by the agent."                       �"The storage type for this entry.  Conceptual rows
             having the value 'permanent' need not allow write-
             access to any columnar objects in this row."                       c"This table contains performance statistics on FTN
             entries on a per-interface basis."                       �"Each entry contains performance information for the
             specified interface and an FTN entry mapped to this
             interface."                       �"The interface index of an interface that an FTN entry
             has been applied/mapped to.  Each instance of this
             object corresponds to an instance of mplsFTNMapIndex."                       �"Index of an FTN entry that has been applied/mapped to
             the specified interface.  Each instance of this object
             corresponds to an instance of mplsFTNMapCurrIndex."                      b"Number of packets that matched the specified FTN entry
             if it is applied/mapped to the specified interface.
             Discontinuities in the value of this counter can occur
             at re-initialization of the management system, and at
             other times as indicated by the value of
             mplsFTNDiscontinuityTime."                      a"Number of octets that matched the specified FTN entry
             if it is applied/mapped to the specified interface.
             Discontinuities in the value of this counter can occur
             at re-initialization of the management system, and at
             other times as indicated by the value of
             mplsFTNDiscontinuityTime."                      \"The value of sysUpTime on the most recent occasion at
             which any one or more of this entry's counters suffered
             a discontinuity.  If no such discontinuities have
             occurred since the last re-initialization of the local
             management subsystem, then this object contains a zero
             value."                               6"Collection of objects that implement MPLS FTN rules."                 b"Collection of objects that implement activation of MPLS
             FTN entries on interfaces."                 Q"Collection of objects providing MPLS FTN performance
             information."                     _"Compliance statement for agents that provide full
             support for MPLS-FTN-STD-MIB."   �"An implementation is only required to support IPv4
             and/or IPv6 addresses.  An implementation is only
             required to support the address types that are actually
             supported on the LSR." �"An implementation is only required to support IPv4
             and/or IPv6 addresses.  An implementation is only
             required to support the address types that are actually
             supported on the LSR." �"An implementation is only required to support IPv4
             and/or IPv6 addresses.  An implementation is only
             required to support the address types that are actually
             supported on the LSR." �"An implementation is only required to support IPv4
             and/or IPv6 addresses.  An implementation is only
             required to support the address types that are actually
             supported on the LSR." �"An implementation is only required to support IPv4
             and/or IPv6 addresses.  An implementation is only
             required to support the address types that are actually
             supported on the LSR."             �"Compliance requirement for implementations that only
             provide read-only support for MPLS-FTN-STD-MIB. Such
             devices can then be monitored but cannot be configured
             using this MIB module."   X"This object is not needed when mplsFTNTable is
             implemented as read-only." g"Write access is not required, and active is the only
             status that needs to be supported." "Write access is not required." "Write access is not required." t"Write access is not required. An implementation is only
             required to support IPv4 and IPv6 addresses." t"Write access is not required. An implementation is only
             required to support IPv4 and IPv6 addresses." t"Write access is not required. An implementation is only
             required to support IPv4 and IPv6 addresses." t"Write access is not required. An implementation is only
             required to support IPv4 and IPv6 addresses." t"Write access is not required. An implementation is only
             required to support IPv4 and IPv6 addresses." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." j"Write access is not required, and active(1) is the only
             status that needs to be supported." "Write access is not required."            