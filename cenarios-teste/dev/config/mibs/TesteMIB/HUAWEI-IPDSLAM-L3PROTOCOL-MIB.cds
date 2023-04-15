�-- ============================================================================
-- Copyright (C) 2014 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description:  The mib used for The Protocol 802.1p priority table. Each row
--               in the table represents a different vlan with different 802.1p
--               prioriy of protocol packets configured.
-- Reference:
-- Version:      V1.13
--
-- ============================================================================
   !"An OSPFv3 interface instance ID"               )"Reason of OSPFv3 neighbor state change."               '"State of OSPFv3 vlink neighbor state."               "State of OSPF neighbor."               '"Reason of OSPF neighbor state change."               $"Stae of OSPF vlink neighbor state."               ."Address Family Identifier(AFI) for BGP peer."               :"Subsequent Address Family Identifier(SAFI) for BGP peer."              �"A 32-bit, unsigned integer uniquely identifying the                        
                    router in the Autonomous System. To ensure uniqueness,                      
                    this may default to the value of one of the router's                        
                    IPv4 host addresses if IPv4 is configured on the                            
                    router."               "An OSPFv3 Area Identifier"               !"State of OSPFv3 neighbor state."               &"Reason of Pim Neighbor Notification."               "State of BGP peer."                                                         �"The mib used for The Protocol 802.1p priority table. Each row
                 in the table represents a different vlan with different 802.1p
                 prioriy of protocol packets configured.
                " �"Huawei Industrial Base
             Bantian, Longgang
             Shenzhen 518129
             People's Republic of China 
             Website: http://www.huawei.com
             Email: support@huawei.com
            " "201403120000Z" "201312310000Z" "201309140000Z" "201307180000Z" "201305290000Z" "201210160000Z" "201011200000Z" "201007150000Z" "201004250000Z" "201004150000Z" "201002260000Z" "200809110000Z" "200805110900Z" "200801150900Z" $"V1.13, modified oid of some traps." &"V1.12, modified format of this file." 7"V1.11, added hwUpLinkBoardModeTable and hwRouterMode." �"V1.10, added hwBgpPeerEstablishedTrap,hwBgpPeerStateTransitionTrap,hwOspfNbrStateChangeTrap,hwOspfVirtNbrStateChangeTrap,hwOspfv3NbrStateChangeTrap,hwOspfv3VirtNbrStateChangeTrap,hwPimNeighborLossTrap,hwPimNeighborAddTrap." K"V1.09, added hwNeighbourNumberDetail,hwL3AlarmTrapsVbOids,hwL3AlarmTraps." 7"V1.08, added hwUpLinkBoardModeTable and hwRouterMode." 5"V1.07, modified description of hwIPPrecedenceTable." "V1.06, modified description." "V1.05, modified description." &"V1.04, modified format of this file." #"V1.03, added hwIPPrecedenceTable." ;"V1.02, added hwProtocolDot1pPriority for MxU V800R306C01." 8"V1.01, added hwProtocolDot1pValue for MxU V800R306C01." " V1.00, first draft."                      "The Protocol 802.1p priority table. Each row in the table
                represents a different vlan with different 802.1p priority of
                protocol packets configured.
                The index of this table is hwVlanIndex.
               "                      "The Protocol 802.1p priority table. Each row in the table
                represents a different vlan with different 802.1p priority of
                protocol packets configured.
                The index of this entry is hwVlanIndex.
               "                       4"The 802.1p priority of OSPF protocol on this VLAN."                       3"The 802.1p priority of RIP protocol on this VLAN."                       3"The 802.1p priority of LDP protocol on this VLAN."                       7"The 802.1p priority of RSVP-TE protocol on this VLAN."                       4"The 802.1p priority of SNMP protocol on this VLAN."                      �"Indicates the VLAN-based 802.1p priority of packet.
                Range: -1 - 7
                The larger the value, the higher the priority.
                The invalid value -1 is returned when this leaf is not specified.
                The meaning of each value is as follows:
                best-effort: Best-effort priority(0)
                background: Background priority(1)
                spare: Spare priority(2)
                excellent-effort: Excellent-effort priority(3)
                controlled-load: Controlled-load priority(4)
                video: Video priority(5)
                voice: Voice priority(6)
                network-management: Network-management priority(7)
               "                           �"Indicates the IP protocol precedence. Each row in the table
                represents a different vlan with DSCP value of protocol
                packets configured.
                The index of this table is hwVlanIndex.
               "                       �"Indicates the IP protocol precedence. Each row in the table
                represents a different vlan with DSCP value of protocol
                packets configured.
                The index of this entry is hwVlanIndex.
               "                       -"The DSCP value of IP protocol on this VLAN."                           ."The Maximal number of ARP.
                "                       5"The Maximal number of Static ARP.
                "                       6"The Maximal number of Dynamic ARP.
                "                       8"The Maximal number of Blackhole ARP.
                "                       5"The current number of Static ARP.
                "                       6"The current number of Dynamic ARP.
                "                       8"The current number of Blackhole ARP.
                "                       :"The maximal number of Ipv6 Neighbours.
                "                       A"The maximal number of Static Ipv6 Neighbours.
                "                       B"The maximal number of Dynamic Ipv6 Neighbours.
                "                       D"The maximal number of Blackhole Ipv6 Neighbours.
                "                       A"The current number of Static Ipv6 Neighbours.
                "                       B"The current number of Dynamic Ipv6 Neighbours.
                "                       D"The current number of Blackhole Ipv6 Neighbours.
                "                           U"IP Address of Neighbors.The type of this address is IPv4 or IPv6.
                "                       -"MAC Address of Neighbors.
                "                       *"Number of ARP entries.
                "                       -"Number of IPv6 Neighbors.
                "                           S"This notification is generated when IP Neighbors download fail.
                "                     �"The Ari of the BGP, including:
                1: ipv4(1) 
                2: ipv6(2) 
                3: vpls(25) 
                4: l2vpn(196)"                       �"The Sub Afi of the BGP, including:
                1: unicast(1) 
                2: multicast(2) 
                3: mpls(4) 
                4: vpls(65)
                5: vpn(128)"                       �"The status of the remote BGP peer, including:
                1: Idle(1) 
                2: Connect(2) 
                3: Active(3) 
                4: Opensent(4) 
                5: Openconfirm(5) 
                6: Established(6) "                      G"The last error code and subcode seen by this
                peer on this connection.  If no error has
                occurred, this field is zero.  Otherwise, the
                first byte of this two byte OCTET STRING
                contains the error code, and the second byte
                contains the subcode."                       9"The type of the address family for the remote BGP peer."                       ("The IP address of the remote BGP peer."                      b"Bgp peer down reason including:
                1: Configuration lead peer down(1)
                2: Receive notification(2)
                3: Receive error packet(3) 
                4: Hold timer expire(4)
                5: Remote peer not reachable(5) 
                6: Direct connect-interface down(6) 
                7: Route limit(7)"                       8"The index of interface for BGP peer.
                "                       0"The index of the instance for the remote peer."                           a"This notification is generated when the BGP FSM was in the Established state.
                "                 �"This notification is generated when the BGP state machine moved from a higher 
                numbered state, namely, Openconfirm or Established, to a lower numbered state.
                "                    6"A  32-bit  integer  uniquely  identifying  the
                        router in the Autonomous System.
                        By  convention,  to  ensure  uniqueness,   this
                        should  default  to  the  value  of  one of the
                        router's IP interface addresses." '"OSPF Version 2, C.1 Global parameters"                    
"The IP address this neighbor is using  in  its
                        IP  Source  Address.  Note that, on addressless
                        links, this will not be 0.0.0.0,  but  the  ad-
                        dress of another of the neighbor's interfaces."                       �"A 32-bit integer (represented as a type  IpAd-
                        dress)  uniquely  identifying  the  neighboring
                        router in the Autonomous System.
                        Default: '00000000'h
                        "                       ("The IP address of this OSPF interface."                      "A 32-bit integer uniquely identifying the area
                        to  which  the  interface  connects.   Area  ID
                        0.0.0.0 is used for the OSPF backbone.
                        Default: '00000000'h
                        "                      ."On an interface having an  IP  Address,  zero.
                        On  addressless  interfaces,  the corresponding
                        value of ifIndex in the Internet Standard  MIB.
                        On  row  creation, this can be derived from the
                        instance."                       N"The State of the relationship with this Neigh-
                        bor." p"OSPF Version 2, Section 10.1 Neighbor States.
                        Default: down
                        "                     /"The reason of the OSPF neighbor state change."                       U"The process ID indicates the OSPF process number. The value ranges from 1 to 65535."                       v"A  32-bit  integer  uniquely  identifying  the
                        neighboring router in the Autonomous System."                       _"The state of the  Virtual  Neighbor  Relation-                
                        ship."                       7"The index of the interface.
                        "                           `"This notification is generated when the status of the OSPF neighbor changed.
                "                 t"This notification is generated when the status of the neighbor on the OSPF virtual link changed.
                "                     �"The interface index of this OSPFv3 interface. 
                     It corresponds to the interface index of the 
                     IPv6 interface on which OSPFv3 is configured."                       �"Enables multiple interface instances of OSPFv3 
                    to be run over a single link. Each protocol 
                    instance would be assigned a separate ID. This ID 
                    has local link significance only."                       q"A 32-bit integer uniquely identifying an area. 
                    Area ID 0 is used for the OSPFv3 backbone." ."OSPF Version 2, Appendix C.2 Area parameters"                    i"A 32-bit integer uniquely identifying the 
                    router in the Autonomous System. To ensure 
                    uniqueness, this may default to the value of 
                    one of the router's IPv4 host addresses, 
                    represented as a 32-bit unsigned integer, 
                    if IPv4 is configured on the router."                       U"The State of the relationship with this             
                    Neighbor." ."OSPF Version 2, Section 10.1 Neighbor States"                     "Neighbor state change reason."                       {"A 32-bit integer uniquely identifying the              
                    neighboring router in the Autonomous System."                       m"A 32-bit integer uniquely identifying the neighboring 
                   router in the Autonomous System."                       1"The state of the Virtual Neighbor Relationship."                           b"This notification is generated when the status of the OSPFv3 neighbor changed.
                "                 v"This notification is generated when the status of the OSPFv3 neighbor on the virtual link changed.
                "                     *"The ifIndex value of this PIM interface."                       )"The address type of this PIM interface."                       �"The primary IP address of this router on this PIM
                    interface.  The InetAddressType is given by the
                    hwPimInterfaceAddressType object." 0"RFC 4601 sections 4.1.6, 4.3.1-4.3.4 and 4.5.1"                     d"The time since this PIM neighbor (last) became a neighbor
                    of the local router."                       "The Instance ID of the trap."                      �"The reason for trap sending:
                    1:holdTime expired;
                    2:Not receive hello for a long time;
                    3:Interface is down;
                    4:Receive Hello again;
                    5:neighbour is deleted;
                    6:Alarm time out;
                    7:Receive Hello HoldTime is Zero;
                    8:Bfd Session is Down;
                    9:User Operation;
                    100:Alarm Clear"                       �"The minimum time remaining before this PIM neighbor will
                    be aged out.  The value zero indicates that this PIM
                    neighbor will never be aged out."                           R"This notification is generated when the PIM neighbor was lost.
                "                 V"This notification is generated when a new PIM neighbor is created.
                "                     �"Indicates the forwarding mode of the spuf board.
                The index of this table is hwFrameIndex and hwSlotIndex.
               "                       �"Indicates the forwarding mode of the spuf board.
                The indexes of this entry are hwFrameIndex and hwSlotIndex.
               "                       �"The fowarding mode of the spuf board.
                Options:
                1. l2mode(1) -layer-2 fowarding mode.
                2. l3mode(2) -layer-3 fowarding mode.
               "                      ."The fowarding mode of system.The default value is basic fowarding mode.
                Options:
                1. basicmode(1)    -the mode of layer-3 fowarding is based on main board.
                2. enhancedmode(2) -the mode of layer-3 fowarding is based on enhanced board.
               "                      