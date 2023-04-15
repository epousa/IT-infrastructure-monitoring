     )"Is this an Internal or External Metric?"               +"A block to contain the header from a PDU."               �"An Unsigned32 further restricted to 16 Bits. Note that
             the ASN.1 BER encoding may still require 24 Bits for
             some values."               "A system ID."               "States of the IS-IS protocol."               b"Full Metric for IP Routes.  Traffic Engineering extensions
             provide 32 bit metrics."               !"Integer sub range for LSP size."               �"Integer sub-range for default metric for single hop.
             ISO 10589 provides for 4 types of metric.  Only the
             'default' metric is used in practice."               �"Wide Metric for IS Neighbors.  ISO 10589 provides a 6 bit metric.
             Traffic Engineering extensions provide 24 bit metrics."               "Identifies a level."               "A Link State PDU Identifier."               '"Integer sub-range for IS-IS priority."               "ID for a circuit."               Z"Type used in enabling and disabling a row.
             Values match those in RFC 2863."               �"An Unsigned32 further restricted to 8 Bits. Note that
             the ASN.1 BER encoding may still require 16 Bits for
             some values."               �"Types of network protocol supported by Integrated IS-IS.
             The values for ISO8473 and IP are those registered for
             these protocols in ISO TR9577."               U"OSI Network Service Address, e.g. NSAP, SNPA, or Network
             Entity Title"               /"Do we use 1195 style Metrics or wide metrics."                                                                                                    �"This document describes a management information base for
             the IS-IS Routing protocol, as described in ISO 10589,
             when it is used to construct routing tables for IP networks,
             as described in RFC 1195.

             This document defines an experimental portion of the
             Management Information Base (MIB) for use with network
             management protocols in the Internet community.

             This document is based on a 1994 IETF draft by Chris Gunner.
             This version has been modified to include MIB-II syntax, to
             exclude portions of the protocol that are not relevant to IP,
             and to add management support for current practice." �"Jeff Parker
             Axiowave Networks
             200 Nickerson Rd.
             Marlborough, MA 01752

             jparker@axiowave.com"                   ."The object describes system wide attributes."               \"The set of instance of the Integrated IS-IS
             protocol existing on the system."                       x"Each row defines information specific to a single
             instance of the IS-IS protocol existing on the system."  "{ISIS.poi cLNSISISBasic-P (1)}"                     �"The unique identifier of the Integrated IS-IS
             instance to which this row corresponds.
             This object follows the index behavior."       S-- SYNTAX Integer32 (1..10000)
-- VRPV8R1 Capability 20091217 modify value scope
               X"The version number of the IS-IS protocol which this
             instance implements." "{ISIS.aoi version (1)}"                     �"The type of this instance of the Integrated
             IS-IS protocol. This object follows the
             replaceOnlyWhileDisabled behavior." "{ISIS.aoi iSType (2)}"                    �"The ID for this instance of the Integrated IS-IS
             protocol. This value is appended to each of the
             area addresses to form the Network Entity Titles.
             The derivation of a value for this object is
             implementation-specific.  Some implementations may
             automatically assign values and not permit an
             SNMP write, while others may require the value
             to be set manually." "{ISIS.aoi systemId (119)}"                     �"Maximum number of paths with equal routing metric value
             which it is permitted to split between. This object
             follows the replaceOnlyWhileDisabled behavior." ""{ISIS.aoi maximumPathSplits (3)}"     Q-- SYNTAX Integer32 (1..128)
-- VRPV8R1 Capability 20091217 modify value scope
               �"Maximum interval, in seconds, between generated LSPs
             by this instance of the protocol. This object follows
             the resettingTimer behavior.
             Should be at least 300 seconds less than isisSysMaxAge." -"{ISIS.aoi maximumLSPGenerationInterval (6)}"     S-- SYNTAX Integer32 (1..65235)
-- VRPV8R1 Capability 20091217 modify value scope
               �"The value, in seconds, to be used for the suggested ES
             configuration timer in ISH PDUs when soliciting the ES
             configuration." !"{ISIS.aoi pollESHelloRate (13)}"                     �"Number of seconds to delay in waiting state before
             entering on state. This object follows the resettingTimer
             behavior." "{ISIS.aoi waitingTime (15)}"                    "The administrative state of this instance of the
             Integrated IS-IS protocol. Setting this object to the
             value 'on' when its current value is 'off' enables operation
             of this instance of the Integrated IS-IS protocol."                       s"If true, causes IS-IS to generate a log message when an
             IS-IS adjacency changes state (up or down)."                      _"This object is used to assign values to
             isisCircIndex as described in 'Textual
             Conventions for SNMPv2'.  The network manager
             reads this object, and then writes the value
             back as the isisCircIndex in a SET that creates
             a new instance of isisCircEntry.  If the SET
             fails with the code 'inconsistentValue', then
             the process must be repeated; If the SET succeeds,
             then the object is incremented, and the new
             isisCircuit is created according to the manager's
             directions."                       6"If true, allow the router to leak L2 routes into L1."                       �"Value to place in RemainingLifeTime field of
             the LSPs we generate.
             This is should be at least 300 seconds greater than
             isisSysMaxLSPGenInt."       X-- SYNTAX Unsigned16TC (350..65535)
-- VRPV8R1 Capability 20091217 modify value scope
              �"Size of the largest Buffer we are designed or
             configured to store.  This should be at least
             as big as the maximum isisSysOrigLSPBuffSize
             supported by the system.

             If resources allow, we will store and flood LSPs
             larger than isisSysReceiveLSPBufferSize, as this
             can help avoid problems in networks with different
             values for isisSysOrigLSPBuffSize."       Y-- SYNTAX Unsigned16TC (1492..16000)
-- VRPV8R1 Capability 20091217 modify value scope
              "The state of the IS-IS router.  Turning this to
             state 'destroy' forces the router to forget all
             the current configuration.  Setting the state to
             'notInService' stops protocol processing, but
             retains the configuration."                       X"The set of manual area addresses configured on this
             Intermediate System." %"{ISIS.aoi manualAreaAddresses (10)}"                     W"Each entry contains one area address manually configured
             on this system"                      Q"A manually configured area address for this system. This
             object follows the index behavior.

             Note: an index for the entry {1, {49.0001} active} in
             this table would be the ordered pair
             (1, (0x03 0x49 0x00 0x01)), as the length of an Octet
             string is part of the OID."                      �"The state of the isisManAreaAddrEntry. This object
             follows the Row Status behavior. If the isisSysAdminState
             for this instance of the IS-IS protocol is 'on', and an
             attempt is made to set this object to the value 'destroy'
             or 'notInService' when this is the only isisManAreaAddrEntry
             in state 'active' for this instance of the IS-IS protocol
             should return  inconsistentValue."                       �"The union of the sets of area addresses reported in all
             Level 1 LSPs with segment number zero received by this
             instance of the protocol from Intermediate Systems which
             are reachable via Level 1 routing." "{ISIS.aoi areaAddresses (18)}"                     �"Each entry contains one area address reported in a
             Level 1 LSP received by this instance of the IS-IS
             protocol."                       j"An area address reported in a Level 1 LSP received by
             this instance of the IS-IS protocol."                       �"This table contains the manually configured set of
             protocols supported by each instance of the Integrated
             IS-IS protocol."                       k"Each entry contains one protocol supported by an
             instance of the Integrated IS-IS protocol."                       O"One supported protocol. This object follows the index
             behavior."                       b"The state of the isisSysProtSuppEntry. This object
             follows the RowStatus behavior."                      �"The set of IP summary addresses to use in forming
             summary TLVs originated by this Intermediate System.

             An administrator may use a summary address to combine
             and modify IP Reachability announcements.  If the
             Intermediate system can reach any subset of the summary
             address, the summary address will be announced instead,
             at the configured metric."                       -"Each entry contains one IP summary address."                       h"The Type of IP address for this summary address.
             This object follows the index behavior."                       f"The IP Address value for this summary address.
             This object follows the index behavior."                       8"The Length of the IP NetMask for this summary address."                       i"The existence state of this summary address. This object
             follows the row status behavior."                       h"The metric value to announce this summary
             address with in LSPs generated by this system."                       m"The wide metric value to announce this summary
             address with in LSPs generated by this system."                      �"This table provides criteria to decide if a route should
             be leaked from L2 to L1 when Domain Wide Prefix leaking is
             enabled.

             Addresses that match the summary mask in the table will
             be announced at L1 by routers when isisSysL2toL1Leaking
             is enabled.  Routes that fall into the ranges specified
             are announced as is, without being summarized.  Routes
             that do not match a summary mask are not announced."                       b"Each entry contains one IP summary address to
             manage leaking L2 addresses into L1."                       h"The Type of IP address for this summary address.
             This object follows the index behavior."                       f"The IP Address value for this summary address.
             This object follows the index behavior."                       8"The Length of the IP NetMask for this summary address."                       i"The existence state of this summary address. This object
             follows the row status behavior."                       %"The set of hostnames and router ID."                       <"Each entry tracks information about one peer at one level."                       #"The System ID of the Router Peer."                       ("The level of this Intermediate System."                       ."The hostname listed in LSP, or NULL if none."                       :"The Router ID of the Peer found in LSP, or NULL if none."                       ]"This object describes attributes associated with
             the domain or with the area."               ."Level specific information about the System."                       0"Describe variables defined for Area or Domain."                       &"The level that this entry describes."                       �"The maximum size of LSPs and SNPs originated by
             this instance of the protocol at this level.
             This object follows the replaceOnlyWhileDisabled
             behavior." +"{ISIS.aoi originatingL1LSPBufferSize (9)}"     J-- SYNTAX LSPBuffSize
-- VRPV8R1 Capability 20091217 modify value scope
               �"Minimum interval, in seconds, between successive generation
             of LSPs with the same LSPID at this level by this instance
             of the protocol.  This object follows the resettingTimer
             behavior." ."{ISIS.aoi minimumLSPGenerationInterval (11)}"                    �"The Overload state of the database at this level.
             The value 'overloaded' indicates a database that is
             low on an essential resource, such as memory.
             The administrator may indirectly force the state to
             'waiting' when the router is initializing by setting
             the object isisSysLevelSetOverload.
             If the state is waiting or overloaded, we
             originate LSPs with the Overload bit set." "{ISIS.aoi l1State (17)}"                     �"Administratively set the overload bit for the level.
             The overload bit will continue to be set if the
             implementation runs out of memory, independent of
             this variable"                       g"If set, the overload bit should be set, and cleared
             after sysUpTime exceeds this value."                       �"Which style of Metric do we generate in our LSPs
             at this level? This object follows the
             replaceOnlyWhileDisabled behavior."                       Z"Which style of Metric do we consider in our
             SPF computation at this level?"                       -"Do we do Traffic Engineering at this level?"                       L"This object describes attributes associated with
             one Circuit"               _"The table of circuits used by each instance of
             Integrated IS-IS on this system."                       a"An isisCircEntry exists for each circuit used by
             Integrated IS-IS on this system."                      "The identifier of this circuit, unique within the
             instance of the IS-IS protocol. This object follows
             the index behavior.  This is for SNMP Indexing
             purposes only and need not have any relation to
             any protocol value."                       �"The value of ifIndex for the interface to which this
             circuit corresponds.   This object cannot be modified
             after creation"                       �"A specifier for the part of the interface ifIndex to which
             this circuit corresponds, such as a DLCI or VPI/VCI.
             This object cannot be modified after creation"                       e"The administrative state of the circuit. This
             object follows the AdminState behavior."                      Y"The existence state of this circuit. This object follows
             the Row Status behavior.  Setting the state to 'notInService'
             halts the generation and processing of IS-IS protocol PDUs
             on this circuit.  Setting the state to destroy will also
             erase any configuration associated with the circuit."                       �"The type of the circuit. This object follows the
             replaceOnlyWhileDisabled behavior. The type specified
             must be compatible with the type of the interface defined
             by the value of isisCircIfIndex." "{ISIS.aoi type (33)}"                     �"If true, suppress normal transmission of and
             interpretation of Intra-domain IS-IS PDUs on this
             circuit."  "{ISIS.aoi externalDomain (46)}"                     �"Indicates which type of packets will be sent and
             accepted on this circuit. The values used will be
             modified by the settings of isisSysType. This
             object follows the replaceOnlyWhileDisabled behavior."                       g"Should we include this interface in LSPs, even if
             it is not running the IS-IS Protocol?" "{}"                    "Is this port a member of a mesh group, or blocked?
             Circuits in the same mesh group act as a virtual
             multiaccess network.  LSPs seen on one circuit in
             a mesh group will not be flooded to another circuit
             in the same mesh group." "{ RFC 2973 }"                    4"Circuits in the same mesh group act as a virtual
             multiaccess network.  LSPs seen on one circuit in
             a mesh group will not be flooded to another circuit
             in the same mesh group.  If isisCircMeshGroupEnabled
             is inactive or blocked, this value is ignored." "{ RFC 2973 }"                    ""Can we send unpadded hellos on LAN circuits?  False
             means LAN Hellos must be padded.
             Implementations should allow the administrator to read
             this value.  An implementation need not be able to
             support unpadded hellos to be conformant."                      3"If the circuit is enabled, the value of sysUpTime
             when isisCircAdminState most recently entered
             the state on.  If the circuit is not on,
             the value of sysUpTime when the circuit last
             entered state on, 0 if the circuit has never
             been on."                       0"Is this circuit enabled to run 3Way handshake?"                       W"A unique value to be used as the extended circuit ID
             in 3Way handshake."                       j"This object describes attributes associated with
             area or domain relevant within a Circuit."               9"Level specific information about circuits used by IS-IS"                       t"An isisCircLevelEntry exists for each level on
             each circuit used by Integrated IS-IS on this system."                       &"The level that this entry describes."                       2"The metric value of this circuit for this level." !"{ISIS.aoi l1DefaultMetric (35)}"                     7"The wide metric value of this circuit for this level."                       ["The priority for becoming LAN Designated
             Intermediate System at this level." ."{ISIS.aoi l2IntermediateSystemPriority (73)}"                    4"A one byte identifier that can be used in protocol packets
             to identify a circuit.  Values of isisCircLevelIDOctet
             do not need to be unique.  They are only required to differ
             on LANs where the Intermediate System is the Designated
             Intermediate System."                      �"The ID of the circuit allocated during initialization.
             If no value has been negotiated (either because the
             adjacency is to an End System, or because initialization
             has not yet successfully completed), this object has the
             value which would be proposed for this circuit (i.e. the
             concatenation of the local system ID and the one byte
             isisCircLevelIDOctet for this circuit." "{ISIS.aoi ptPtCircuitID (51)}"                    4"The ID of the LAN Designated Intermediate System
             on this circuit at this level. If, for any reason,
             this system is not partaking in the relevant
             Designated Intermediate System election process,
             then the value returned is the zero length OCTET STRING." 0"{ISIS.aoi l2DesignatedIntermediateSystem (75)}"                     �"This value is multiplied by the corresponding HelloTimer
             and the result in seconds (rounded up) is used as the
             holding time in transmitted hellos, to be used by receivers
             of hello packets from this IS"  "{ISIS.aoi iSISHelloTimer (45)}"     Q-- SYNTAX Integer32 (2..100)
-- VRPV8R1 Capability 20091217 modify value scope
              �"Maximum period, in milliseconds, between IIH PDUs
             on multiaccess networks at this level for LANs.
             The value at level 1 is used as the period between
             Hellos on L1L2 point to point circuits.  Setting
             this value at level 2 on an L1L2 point to point
             circuit will result in an error of InconsistentValue.

             This object follows the resettingTimer behavior."  "{ISIS.aoi iSISHelloTimer (45)}"                     �"Period, in milliseconds, between Hello PDUs on
             multiaccess networks when this IS is the Designated
             Intermediate System.  This object follows the
             resettingTimer behavior."  "{ISIS.aoi iSISHelloTimer (45)}"                     w"Minimal interval of time, in milliseconds, between
             transmissions of LSPs on an interface at this level." 8"{ISIS.aoi minimumBroadcastLSPTransmissionInterval (5)}"                    S"Minimum interval, in seconds, between re-transmission of
             an LSP at this level. This object follows the resettingTimer
             behavior.

             Note that isisCircLevelLSPThrottle controls
             how fast we send back to back LSPs.  This variable
             controls how fast we re-send the same LSP." /"{ISIS.aoi minimumLSPTransmissionInterval (5)}"                     �"Interval of time, in seconds, between periodic
             transmission of a complete set of CSNPs on
             multiaccess networks if this router is the
             designated router at this level." "{}"     Q-- SYNTAX Integer32 (1..600)
-- VRPV8R1 Capability 20091217 modify value scope
               �"Minimum interval in seconds between sending Partial Sequence
             Number PDUs at this level. This object follows the
             resettingTimer behavior." $"{ISIS.aoi partialSNPInterval (14)}"                     2"This object collects system and circuit counters"               Z"System wide counters for one instance of the IS-IS
             protocol on the system."                       "System-wide IS-IS counters."                       &"The level that this entry describes."                       �"Number of corrupted in-memory LSPs detected.

             LSPs received from the wire with a bad checksum
             are silently dropped and not counted." '"{ISIS.aoi corruptedLSPsDetected (19)}"                     i"The number of authentication type mismatches recognized
             by this instance of the protocol."                       b"The number of authentication failures recognized by this
             instance of the protocol."                       G"Number of times the LSP database has become
             overloaded." ("{ISIS.aoi lSPL1DatabaseOverloads (20)}"                     P"Number of times a manual address has been dropped from
             the area." 0"{ISIS.aoi manualAddressesDroppedFromArea (21)}"                     ["Number of times the IS has attempted to exceed the
             maximum sequence number." 7"{ISIS.aoi attemptsToExceedmaximumSequenceNumber (22)}"                     6"Number of times a sequence number skip has occurred." %"{ISIS.aoi sequenceNumberSkips (23)}"                     j"Number of times a zero-aged copy of the system's own LSP
             is received from some other node." "{ISIS.aoi ownLSPPurges (24)}"                     }"Number of times a PDU is received with a different value
             for ID field length to that of the receiving system." )"{ISIS.aoi iDFieldLengthMismatches (25)}"                     �"Number of times a PDU is received with a different value
             for MaximumAreaAddresses from that of the receiving
             system." 1"{ISIS.aoi MaximumAreaAddressesMismatches (118)}"                     "Partition changes"                       +"Number of times we ran SPF at this level."                       _"Circuit specific counters for one instance of the IS-IS
             protocol on the system."                       f"An isisCircCountEntry exists for each circuit
             used by Integrated IS-IS on this system."                      "What type of circuit saw these counts?

             The point to point Hello PDU includes
             both L1 and L2, and ISs form a single
             adjacency on point to point links.
             Thus we combine counts on
             point to point links into one group."                       ["The number of times an adjacency state change has
             occurred on this circuit." )"{ISIS.aoi changesInAdjacencyState (40)}"                     ,"The number of adjacencies on this circuit." )"{ISIS.aoi changesInAdjacencyState (40)}"                     N"The number of times initialization of this circuit has
             failed." ("{ISIS.aoi initialisationFailures (41)}"                     S"The number of times an adjacency has been rejected on
             this circuit." %"{ISIS.aoi rejectedAdjacencies (42)}"                     �"The number of times an IS-IS control PDU with an ID
             field length different to that for this system has been
             received." )"{ISIS.aoi iDFieldLengthMismatches (25)}"                     �"The number of times an IS-IS control PDU with a
             max area address field different to that for this
             system has been received." )"{ISIS.aoi iDFieldLengthMismatches (25)}"                     �"The number of times an IS-IS control PDU with
             an auth type field different to that for this
             system has been received."                       �"The number of times an IS-IS control PDU with
             the correct auth type has failed to pass authentication
             validation."                       �"The number of times the Designated IS has changed
             on this circuit at this level.  If the circuit is
             point to point, this count is zero."                       e"Information about IS-IS protocol traffic at one level
             on one circuit in one direction"                       e"Information about IS-IS protocol traffic at one level
             on one circuit in one direction"                       :"The level at which these PDU counts have been collected."                       *"Were we sending or receiving these PDUs?"                      "The number of IS-IS Hello PDUs seen in this
             direction at this level.

             Point-to-Point IIH PDUs are counted at
             Level 1 if the value of their Circuit Type
             field is 1, and are counted at Level 2 otherwise." %"{ISIS.aoi iSISControlPDUsSent (43)}"                     �"The number of ES-IS Hello PDUs seen in this
             direction.  ISH PDUs are counted at the
             lowest enabled level: at L1 on L1 or L1L2
             circuits, and at L2 otherwise."                       �"The number of ES Hello PDUs seen in this
             direction.  ESH PDUs are counted at the
             lowest enabled level: at L1 on L1 or L1L2
             circuits, and at L2 otherwise."                       N"The number of IS-IS LSPs seen in this
             direction at this level." %"{ISIS.aoi iSISControlPDUsSent (43)}"                     O"The number of IS-IS CSNPs seen in this
             direction at this level." %"{ISIS.aoi iSISControlPDUsSent (43)}"                     O"The number of IS-IS PSNPs seen in this
             direction at this level." %"{ISIS.aoi iSISControlPDUsSent (43)}"                     D"The number of unknown IS-IS PDUs seen
             at this level." %"{ISIS.aoi iSISControlPDUsSent (43)}"                     ["This object describes attributes associated with an
             adjacent Protocol Peer."               3"The table of adjacencies to Intermediate Systems."                       a"Each entry corresponds to one adjacency to an
             Intermediate System on this system."                       �"A unique value identifying the IS adjacency from all
             other such adjacencies on this circuit. This value is
             assigned by the system when the adjacency is created
             automatically."                       "The state of the adjacency"  "{ISIS.aoi adjacencyState (78)}"                     �"The 3Way state of the adjacency.  These are picked
             to match the historical on-the-wire representation
             of the 3Way state, and are not intended to match
             isisISAdjState." "{ RFC 3373 }"                     -"The SNPA address of the neighboring system." &"{ISIS.aoi neighbourSNPAAddress (79)}"                     %"The type of the neighboring system." %"{ISIS.aoi neighbourSystemType (80)}"                     E"The system ID of the neighboring Intermediate
             System." $"{ISIS.aoi neighbourSystemIds (83)}"                     f"The 4 byte Extended Circuit ID learned from the
             Neighbor during 3-way handshake, or 0."                      "How is the adjacency used?  On a point-to-point link,
             this might be level1and2, but on a LAN, the usage will
             be level1 on the adjacency between peers at level 1,
             and level2 for the adjacency between peers at level 2."  "{ISIS.aoi adjacencyUsage (82)}"                     �"The holding time in seconds for this adjacency.
             This value is based on received IIH PDUs and
             the elapsed time since receipt." "{ISIS.aoi holdingTimer (85)}"                     p"Priority of the neighboring Intermediate System for
             becoming the Designated Intermediate System." "{ISIS.aoi lANPriority (86)}"                     �"If the isisISAdjState is in state 'up', the value
             of sysUpTime when the adjacency most recently
             entered the state 'up',  or 0 if it has never
             been in state 'up'."                       �"This table contains the set of Area Addresses of
             neighboring Intermediate Systems as reported in received
             IIH PDUs." *"{ISIS.aoi areaAddressesOfNeighbour (84)}"                     s"Each entry contains one Area Address reported by a
             neighboring Intermediate System in its IIH PDUs."                       s"An index for the areas associated with one neighbor.
             This provides a simpler way to walk the table."                       T"One Area Address as reported in IIH PDUs received from
             the neighbor."                       �"This table contains the set of IP Addresses of
             neighboring Intermediate Systems as reported in received
             IIH PDUs."                       q"Each entry contains one IP Address reported by a
             neighboring Intermediate System in its IIH PDUs."                       d"An index to this table which identifies the IP addresss
             to which this entry belongs."                       ^"The type of one IP Address as reported in IIH PDUs
             received from the neighbor."                       R"One IP Address as reported in IIH PDUs received from the
             neighbor."                       �"This table contains the set of protocols supported by
             neighboring Intermediate Systems as reported in received
             IIH PDUs."                       �"Each entry contains one protocol supported by a
             neighboring Intermediate System as reported in its IIH
             PDUs."                       Z"One supported protocol as reported in IIH PDUs received
             from the neighbor."                       U"This object describes attributes associated with
             a configured address"               N"The table of Reachable Addresses to NSAPs or Address
             Prefixes."                       S"Each entry defines a Reachable Address to a NSAP or
             Address Prefix."                       �"The identifier for this isisRAEntry. This value must be
             unique amongst all Reachable Addresses on the same parent
             Circuit. This object follows the index and ManualOrAutomatic
             behaviors."                       s"The existence state of this Reachable Address. This
             object follows the ManualOrAutomatic behaviors."                       �"The administrative state of the Reachable Address. This
             object follows the AdminState and ManualOrAutomatic
             behaviors."                       �"The destination of this Reachable Address. This is an
             Address Prefix. This object follows the
             replaceOnlyWhileDisabled and ManualOrAutomatic
             behaviors." "{ISIS.aoi addressPrefix (98)}"                     "The type of mapping to be employed to ascertain the SNPA
             Address which should be used in forwarding PDUs for this
             Reachable Address prefix. This object follows the
             ManualOrAutomatic behavior. The following values of
             mapping type are defined:

                 none: The mapping is null because the neighbor SNPA is
                       implicit by nature of the subnetwork (e.g. a
                       point-to-point linkage).

                 explicit: The subnetwork addresses in the object
                       isisRASNPAAddress is to be used.

                 extractIDI: The SNPA is embedded in the IDI of
                       the destination NSAP Address. The mapping
                       algorithm extracts the SNPA to be used
                       according to the format and encoding rules of
                       ISO8473/Add2. This SNPA extraction algorithm can
                       be used in conjunction with Reachable Address
                       prefixes from the X.121, F.69, E.163 and E.164
                       addressing subdomains.

                 extractDSP: All, or a suffix, of the SNPA is embedded
                       in the DSP of the destination address. This SNPA
                       extraction algorithm extracts the embedded
                       subnetwork addressing information by performing a
                       logical AND of the isisRASNPAMask object value with
                       the destination address. The part of the SNPA
                       extracted from the destination NSAP is appended to
                       the isisRASNPAPrefix object value to form the next
                       hop subnetwork addressing information." '"{ISO10589-ISIS.aoi mappingType (107)}"                     �"The metric value for reaching the specified
             prefix over this circuit. This object follows the
             ManualOrAutomatic behavior." "{ISIS.aoi DefaultMetric (99)}"                     �"Indicates whether the metric is internal or
             external. This object follows the ManualOrAutomatic
             behavior." $"{ISIS.aoi DefaultMetricType (103)}"                     �"The SNPA Address to which a PDU may be forwarded in
             order to reach a destination which matches the address
             prefix of the Reachable Address. This object follows the
             ManualOrAutomatic behavior."  "{ISIS.aoi sNPAAddresses (109)}"                 P-- note only one address may be specified per Reachable Address
-- in the MIB
  Z"A bit mask with 1 bits indicating the positions in the
             effective destination address from which embedded SNPA
             information is to be extracted. For the extraction the
             first octet of the isisRASNPAMask object value is aligned
             with the first octet (AFI) of the NSAP Address. If the
             isisRASNPAMask object value and NSAP Address are of
             different lengths, the shorter of the two is logically
             padded with zeros before performing the extraction. This
             object follows the ManualOrAutomatic behavior." "{ISIS.aoi sNPAMask (122)}"                    �"A fixed SNPA prefix for use when the isisRAMapType is
             extractDSP. The SNPA Address to use is formed by
             concatenating the fixed SNPA prefix with a variable SNPA
             part that is extracted from the effective destination
             address. For Reachable Address prefixes in which the
             entire SNPA is embedded in the DSP the SNPA Prefix shall
             be null. This object follows the ManualOrAutomatic
             behavior." "{ISIS.aoi sNPAPrefix (123)}"                    "The type of Reachable address. Those of type
             manual are created by the network manager. Those
             of type automatic are created through propagation
             of routing information from another routing
             protocol (eg. IDRP). "                       �"This object describes attributes associated with
             IP routes learned by configuration or through another
             protocol."               �"The table of IP Reachable Addresses to networks,
             subnetworks or hosts either manually configured or
             learned from another protocol."                       \"Each entry defines an IP Reachable Address to a network,
             subnetwork or host."                       k"The type of this IP Reachable Address.  This object
             follows the ManualOrAutomatic behavior."                       �"The destination of this IP Reachable Address. This is
             either a network address, subnetwork address or host
             address. This object follows the ManualOrAutomatic
             behavior."                       z"The length of the IP Netmask for Reachability Address.
             This object follows the ManualOrAutomatic behavior."                       &"The type of the IP next hop address."                       &"The IP next hop to this destination."                      <"The type of this IP Reachable Address. Those of type
             manual are created by the network manager. Those of type
             automatic are created through propagation of routing
             information from another routing protocol.  This object
             follows the ManualOrAutomatic behavior."                       �"The state of this IP Reachable Address. This object
             follows the ExistenceState and ManualOrAutomatic
             behaviors."                       �"The administrative state of the IP Reachable Address. This
             object follows the AdminState and ManualOrAutomatic
             behaviors."                       �"The metric value for reaching the specified
             destination over this circuit. This object follows the
             ManualOrAutomatic behavior."                       �"Indicates whether the metric is internal or
             external. This object follows the ManualOrAutomatic
             behavior."                       �"The wide metric value for reaching the specified
             destination over this circuit. This object follows the
             ManualOrAutomatic behavior."                       �"The SNPA Address to which a PDU may be forwarded in
             order to reach a destination which matches this IP
             Reachable Address. This object follows the
             ManualOrAutomatic behavior."                       "The origin of this route."                       \"This object describes the collection of Link State PDUs
             known to the system."               "The table of LSP Headers."                       ;"Each entry describes an LSP current stored in the system."                       &"At which level does this LSP appear?"                       _"The 8 byte LSP ID, consisting of the SystemID,
             Circuit ID, and Fragment Number."                       #"The sequence number for this LSP."                       *"Is this LSP being purged by this System?"                       "The 16 bit Fletcher Checksum."                       1"The remaining lifetime in seconds for this LSP."                       "The length of this LSP."                       "Flags carried by the LSP."                       "The contents of each LSP."                       ;"Each entry describes an LSP current stored in the system."                       o"The index of this TLV in the LSP.  The first TLV has index 1
             and the Nth TLV has an index of N."                       #"The sequence number for this LSP."                       "The 16 bit Fletcher Checksum."                       "The Type of this TLV."                       "The length of this TLV."                       "The value of this TLV."                       $"Objects included in Notifications."               a"Objects seen in the most recent notification
             this instance of the IS-IS protocol."                       n"Each entry defines variables relevant to notifications
             for one instance of the IS-IS protocol."                       J"An Octet String that uniquely identifies
             a Link State PDU."                       X"Holds up to the first 64 bytes of a PDU that
             triggered the notification."                       9"Holds the System ID length reported in PDU we received."                       ="Holds the Max Area Addresses reported in a PDU we received."                       9"Holds the Protocol version reported in PDU we received."                       M"Holds the size of LSP we received that is too
             big to forward."                       S"Holds the size of isisSysOrigLSPBuffSize
             advertised by peer in TLV."                       Z"The list of protocols supported by an
             adjacent system.  This may be empty."                       $"The current state of an adjacency."                       Q"The Router ID of a remote system.
             If not known, we set this to 0."                               �"This notification is generated when the system
             enters or leaves the Overload state.  The number
             of times this has be generated and cleared is kept
             track of by isisSysStatLSPDbaseOloads."                >"This notification is generated when one of the
             manual areaAddresses assigned to this system is
             ignored when computing routes.  The object
             isisManAreaAddrExistState describes the area that
             has been dropped.

             The number of times this event has been generated
             is counted by isisSysManAddrDropFromAreas.

             This notification is edge triggered, and should not
             be regenerated until an address that was used in
             the previous computation has been dropped."                �"This notification is generated when we find that
             an LSP that was stored in memory has become
             corrupted.  The number of times this has been
             generated is counted by isisSysCorrLSPs.

             We forward an LSP ID.  We may have independent
             knowledge of the ID, but in some implementations
             there is a chance that the ID itself will be
             corrupted."                �"When the sequence number on an LSP we generate
             wraps the 32 bit sequence counter, we purge and
             wait to re-announce this information.  This
             notification describes that event.  Since these
             should not be generated rapidly, we generate
             an event each time this happens.

             While the first 6 bytes of the LSPID are ours,
             the other two contain useful information."                �"A notification sent when we receive a PDU
             with a different value of the System ID Length.
             This notification includes the an index to identify
             the circuit where we saw the PDU and the header of
             the PDU which may help a network manager identify
             the source of the confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source.
             This decision is up to the agent to make, and may
             be based on the circuit or on some MAC level
             information."                �"A notification sent when we receive a PDU
             with a different value of the Maximum Area
             Addresses.  This notification includes the
             header of the packet, which may help a
             network manager identify the source of the
             confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source."                0"A notification sent when we receive a PDU
             with our systemID and zero age.  This
             notification includes the circuit Index
             and router ID from the LSP, if available,
             which may help a network manager
             identify the source of the confusion."                �"When we receive an LSP with out System ID
             and different contents, we may need to reissue
             the LSP with a higher sequence number.

             We send this notification if we need to increase
             the sequence number by more than one.  If two
             Intermediate Systems are configured with the same
             System ID, this notification will fire."                �"A notification sent when we receive a PDU
             with the wrong authentication type field.
             This notification includes the header of the
             packet, which may help a network manager
             identify the source of the confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source."                �"A notification sent when we receive a PDU
             with incorrect authentication information
             field.  This notification includes the header
             of the packet, which may help a network manager
             identify the source of the confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source."                "A notification sent when we receive a Hello
             PDU from an IS running a different version
             of the protocol. This notification includes
             the header of the packet, which may help a
             network manager identify the source of the
             confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source.
             This decision is up to the agent to make, and may
             be based on the circuit or on some MAC level
             information."                y"A notification sent when we receive a Hello
             PDU from an IS which does not share any
             area address. This notification includes
             the header of the packet, which may help a
             network manager identify the source of the
             confusion.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from what seem to be the same source.
             This decision is up to the agent to make, and may
             be based on the circuit or on some MAC level
             information."                :"A notification sent when we receive a Hello
             PDU from an IS, but do not establish an
             adjacency for some reason.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from the same source."                ="A notification sent when we attempt to propagate
             an LSP which is larger than the dataLinkBlockSize
             for the circuit.
             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from the same source."                �"A notification sent when a Level 1 LSP or Level
             2 LSP is received which is larger than the local
             value for isisOriginatingBufferSize, or when an
             LSP is received containing the isisOriginatingBufferSize
             option and the value in the PDU option field does
             not match the local value for isisOriginatingBufferSize.
             We pass up the size from the option field or the
             size of the LSP that exceeds our configuration.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from the same source."                q"A notification sent when a non-pseudonode
             segment 0 LSP is received that has no matching
             protocols supported.
             This may be because the system does not generate
             the field, or because there are no common elements.
             The list of protocols supported should be included
             in the notification: it may be empty if the TLV
             is not supported, or if the TLV is empty.

             This should be an edge-triggered notification.
             We should not send a second notification about
             PDUs received from the same source."                "A notification sent when an adjacency changes
             state, entering or leaving state up.
             The first 6 bytes of the isisPduLspId are the
             SystemID of the adjacent IS.
             The isisAdjState is the new state of the adjacency."                         <"The collections of objects used to manage an IS-IS router."                 >"The collection of objects used to describe in IS-IS Circuit."                 ?"The collections of objects used to manage an IS-IS Adjacency."                 5"The objects used to record notification parameters."                 1"The collections of notifications sent by an IS."                     9"The collections of objects used to count protocol PDUs."                 V"The collections of objects used to manage the
             reachable NSAP prefixes."                 R"The collections of objects used to manage configured
             IP addresses."                 M"The collections of objects used to observe the LSP
             Data Base."                     N"The compliance statement for agents that support
             the IS-IS MIB"               N"The compliance statement for agents that support
             the IS-IS MIB"                  