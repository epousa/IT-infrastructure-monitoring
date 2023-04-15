�-- ============================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI-BGP-VPN-MIB , this Mib module for management 
--              of BGP/VPN protocol.
-- Reference: This MIB was extracted from RFC 4271 
-- Version: V2.22
-- History:
--    <wangchong >, <2008-12-28>, <publish>
--    <xiaoyaqun>, <2009-09-14>, <publish>
-- ============================================================================
   :"Subsequent Address Family Identifier(SAFI) for BGP peer."             c"RFC 2685 Fox B., et al, 'Virtual Private
                   Networks Identifier', September 1999.""An identifier that is assigned to each MPLS/BGP VPN and
                    is used to uniquely identify it.  This is assigned by the
                    system operator or NMS and SHOULD be unique throughout
                    the MPLS domain.  If this is the case, then this identifier
                    can then be used at any LSR within a specific MPLS domain
                    to identify this MPLS/BGP VPN.  It may also be possible to
                    preserve the uniqueness of this identifier across MPLS
                    domain boundaries, in which case this identifier can then
                    be used to uniquely identify MPLS/BGP VPNs on a more global
                    basis.  This object MAY be set to the VPN ID as defined in
                    RFC 2685."               ."Address Family Identifier(AFI) for BGP peer."                 �"The Mib module for management of BGP/VPN. Huawei Technologies co.,Ltd. 
                Supplementary information may be available at: 
                http://www.huawei.com" �"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201805241100Z" "201805211100Z" "201805071100Z" "201803072000Z" "201802021100Z" "201712201600Z" "201711151556Z" "201708171556Z" "201612061110Z" "201612061110Z" "201605120955Z" "201603010954Z" "201602271010Z" "201502101010Z" "201501311435Z" "201501191115Z" "201411201115Z" "201406181140Z" "201405301540Z" "201403181502Z" "201403100955Z" "200812260955Z" G"Modify one MIB table for description, include: 'hwBgpPeerRouteTable'." I"Add one MIB nodes for description, include: 'hwRpkiSessionRoaLimitNum'." {"Add two MIB nodes for hwBgpPeerSessionExtTable, include: 'hwBgpPeerSessionExtRemoteAs', 'hwBgpPeerSessionExtDescription'." ?"Modify all the nodes description of hwBgpPeerSessionExtTable." 0"Add one MIB table of hwBgpPeerSessionExtTable." G"Add one MIB node for hwBgpPeerTable, include: 'hwBgpPeerAdminStatus'." "Update with mib code." �"Modify description of MIB nodes, include: 'hwBgpPeerSessionNum', 'hwIBgpPeerSessionNum', 'hwEBgpPeerSessionNum', ;hwBgpPeerAddrFamilySafi'." i"Add two MIB nodes for counting total massages, include: 'hwBgpPeerInTotalMsgs', 'hwBgpPeerInTotalMsgs'." �"Add a MIB tables for getting BGP statistic information, include: 'hwBgpPeerStatisticTable', and add two MIB nodes for counting total update massages, include: 'hwBgpPeerTotalInUpdateMsgs', 'hwBgpPeerTotalOutUpdateMsgs'." �"Modify trap nodes name, include: 'hwBgpPeerSessionThresholdExceed', 'hwBgpPeerSessionThresholdClear', 'hwBgpPeerSessionThreshold'" �"Modify trap nodes name, include: 'hwBgpDynamicPeerSessionNum', 'hwBgpDynamicPeerSessionMaxNum', 'hwBgpDynamicPeerSessionExceed', 'hwBgpDynamicPeerSessionExceedClear'" �"Modify trap nodes name, include: 'hwBgpDynamicPeerSessionNum', 'hwBgpDynamicPeerSessionMaxNum', 'hwBgpDynamicPeerSessionMaxExceed', 'hwBgpDynamicPeerSessionMaxClear'" t"Modify trap nodes name, include: 'hwBgpPeerSessionMaxNum', 'hwBgpPeerSessionExceed', 'hwBgpPeerSessionExceedClear'" �"Add two trap node for sending the number threshold alarms of BGP peers, include: 'hwBgpPeerSessionNumMaxNum', 'hwBgpPeerSessionNumMaxExceed', 'hwBgpPeerSessionNumMaxClear' " "Update" "Update" �"Add some trap nodes for sending BGP routes threshold alarms, include: 'hwBgpRouteThresholdExceed',  'hwBgpRouteThresholdClear', 'hwBgpRouteMaxExceed', 'hwBgpRouteMaxClear'. " �"Add some MIB nodes for getting BGP protocol resource information, include: 'hwBgpPeerSessionNum',  'hwIBgpPeerSessionNum', 'hwEBgpPeerSessionNum', 'hwConfiguredVrfs', 'hwConfiguredIpv4Vrfs','hwConfiguredIpv6Vrfs'." "Update" "Update" "Update"       -- May 24, 2018 at 1100 GMT
               z"BGP Peer Address Family Table.  
                This table contains information about the address family for BGP peers."                       9"The information about the address family for BGP peers."                       4"The index of the instance for the remote BGP peer."                       :"The index of the address family for the remote BGP peer."                       ]"The value of this object identifies the index of a sub-address family of a remote BGP peer."                       9"The type of the address family for the remote BGP peer."                       ("The IP address of the remote BGP peer."                       "The name of the VPN instance."                       h"BGP Peer Table.  
                This table contains information about the connections for BGP peers."                       7"The information about the connections with BGP peers."                       2"The version negotiated with the remote BGP peer."                       '"The AS number of the remote BGP peer."                       ("The IP address of the remote BGP peer."                       �"The status of the remote BGP peer, including:
                1: Idle(1) 
                2: Connect(2) 
                3: Active(3) 
                4: Opensent(4) 
                5: Openconfirm(5) 
                6: Established(6) "                       �"The Counter That Records the Times the Remote BGP Peer Is Correctly Connected
                The counter is increased by one if the remote BGP peer is correctly connected once.
                The counter could be set to zero."                       P"The counter that records the times the remote BGP peer is correctly connected."                      �"Graceful restart status of the BGP peer, including:
                1: peerNotBeingHelped, indicating that the BGP peer will not be helped during restarting. 
                2: peerRestarting, indicating that the BGP peer is detected restarting.
                3: peerFinishRestart, indicating that the BGP peer finishes the latest GR.
                4: peerHelping, indicating that the BGP peer is helping the local end to perform GR."                      B"The last error code and subcode seen by this
                peer on this connection.  If no error has
                occurred, this field is zero.  Otherwise, the
                first byte of this two byte OCTET STRING
                contains the error code, and the second byte
                contains the subcode."                      ["Bgp peer down reason including:
                1: Configuration lead peer down(1)
                2: Receive notification(2)
                3: Receive error packet(3) 
                4: Hold timer expire(4)
                5: Remote peer not reachable(5) 
                6: Direct connect-interface down(6) 
                7: Route limit(7)"                      �"The desired state of the BGP connection.
                A transition from 'stop' to 'start' will
                cause the BGP Start Event to be generated.
                A transition from 'start' to 'stop' will
                cause the BGP Stop Event to be generated.
                This parameter can be used to restart BGP
                peer connections.  Care should be used in
                providing write access to this object
                without adequate authentication."                       i"Route table for BGP Peers.
                This table contains routing information about the BGP peers."                       ."The routing information about the BGP peers."                       ;"The number of prefixes received from the remote BGP peer."                       B"The number of active prefixes received from the remote BGP peer."                       5"The number of prefixes sent to the remote BGP peer."                       "Protocol Packet Table for BGP Peers.
                This table contains information about the protocol packets of BGP peers."                       >"The information about the protocol packets of the BGP peers."                       I"The total number of protocol packets received from the remote BGP peer."                       C"The total number of protocol packets sent to the remote BGP peer."                       E"The total number of Open packets received from the remote BGP peer."                       G"The total number of Update packets received from the remote BGP peer."                       M"The total number of Notification packets received from the remote BGP peer."                       J"The total number of Keepalive packets received from the remote BGP peer."                       N"The total number of Route-Refresh packets received from the remote BGP peer."                       ?"The total number of Open packets sent to the remote BGP peer."                       A"The total number of Update packets sent to the remote BGP peer."                       G"The total number of Notification packets sent to the remote BGP peer."                       D"The total number of Keepalive packets sent to the remote BGP peer."                       H"The total number of Route-Refresh packets sent to the remote BGP peer."                       f"BGP Peer Configuration Table.  
                This table contains the configurations of BGP peers."                       8"This object indicates the configurations of BGP peers."                       P"This object indicates the maximum number of routes received from the BGP peer."                       k"This object indicates the alarm threshold (%) of the maximum number of routes received from the BGP peer."                       \"BGP Peer Session Table.
                This table contains BGP peer session informations."                       ."The information about the BGP peer sessions."                       "Bgp Vrf id."                       '"Bgp peer session remote address type."                       ""Bgp peer session remote address."                       &"Bgp peer session local address type."                       !"Bgp peer session local address."                       i"Bgp peer unavailable type including:
                1: Up To Down(1)
                2: Always Down(2)"                        "Bgp peer session local IFName."                      �"Bgp peer down reason including:
                1: Configuration lead peer down(1)
                2: Receive notification(2)
                3: Receive error packet(3) 
                4: Hold timer expire(4)
                5: Remote peer not reachable(5) 
                6: Direct connect-interface down(6) 
                7: Route limit(7)
                8: Peer is not up for a specified long time(8)
                100: Alarm clear(100)"                       �"BGP peer statistic table. This table contains,
                one entry per BGP peer, information about
                the connections with BGP peers."                       T"Entry containing information about the
                connection with a BGP peer."                       %"The process ID of the BGP instance."                       ;"The index of the vpn instance Id for the remote BGP peer."                       ("The IP address of the remote BGP peer."                       �"The Counter That Records the Times the Remote BGP Peer Is Correctly Connected
                The counter is increased by one if the remote BGP peer is correctly connected once.
                The counter could be set to zero."                       �"The total number of times the BGP FSM
                 transitioned from establish to the other state.
                The counter could be set to zero."                       G"The total number of Update packets received from the remote BGP peer."                       A"The total number of Update packets sent to the remote BGP peer."                       @"The total number of packets received from the remote BGP peer."                       :"The total number of packets sent to the remote BGP peer."                       \"BGP Peer Session Table.
                This table contains BGP peer session informations."                       ."The information about the BGP peer sessions."                       -"The VPN instance Id of the remote BGP peer."                       '"BGP peer session remote address type."                       ""BGP peer session remote address."                       &"BGP peer session local address type."                       !"BGP peer session local address."                       i"BGP peer unavailable type including:
                1: Up To Down(1)
                2: Always Down(2)"                        "BGP peer session local IFName."                      �"BGP peer down reason including:
                1: Configuration lead peer down(1)
                2: Receive notification(2)
                3: Receive error packet(3)
                4: Hold timer expire(4)
                5: Remote peer not reachable(5)
                6: Direct connect-interface down(6)
                7: Route limit(7)
                8: Peer is not up for a specified long time(8)
                90: unknown(90)
                100: Alarm clear(100)"                       "The name of the VPN instance."                       '"The AS number of the remote BGP peer."                       )"The description of the remote BGP peer."                              �"The index of bgp route limit, including:
                 1.ipv4(1): total ipv4 routes number.
                 2.ipv6(2): total ipv6 routes number.
                 3.ipv4vrf(3): ipv4 vrf routes number.
                 4.ipv6vrf(4): ipv6 vrf routes number.
                 5.ipv4public(5): ipv4 public routes number.
                 6.ipv6public(6): ipv6 public routes number.
                 7.l2ad(7): l2ad routes number."                       #"The current number of bgp routes."                       #"The maximum number of bgp routes."                       %"The threshold number of bgp routes."                       "BGP VRF route table."                       "BGP VRF route entry."                       "Current number of routes."                       "Threshold value."                       "Route type."                       "The name of VPN instance."                       "Address family."                       "BGP EVPN route table."                       "BGP EVPN route entry."                       "Current number of routes."                       "Threshold value."                       "Route type."                       "Address family."                           r"This notification is generated when the number of routes received from the BGP peer exceeds the alarm threshold."                 z"This notification is generated when the number of routes received from the BGP peer decreases below the alarm threshold."                 i"This notification is generated when the graceful restart status described by hwBgpPeerGRStatus changes."                 T"This notification is generated when bgp peer session state change from up to down."                 T"This notification is generated when bgp peer session state change from down to up."                 K"This notification is generated when bgp peer session route number exceed."                 Q"This notification is generated when bgp peer session route number exceed clear."                "This notification is generated when the number of routes
                contained by the specified VRF exceeds the value indicated by
                mplsL3VpnVrfMidRouteThreshold, and then falls below this value.  
                A single notification MUST be generated when this threshold is 
                exceeded, and no other notifications of this type should be issued 
                until the value of mplsL3VpnVrfPerfCurrNumRoutes has fallen below 
                that of mplsL3VpnVrfConfMidRteThresh."                 g"The BGP Established event is generated when
                the BGP FSM enters the ESTABLISHED state."                 �"The BGPBackwardTransition Event is generated
                when the BGP FSM moves from a higher numbered
                state to a lower numbered state."                 U"This notification is generated when the number of bgp routes exceeds the threshold."                 Y"This notification is generated when the number of routes decreases below the threshold."                 V"This notification is generated when the number of routes exceeds the maximum number."                 ^"This notification is generated when the number of routes decreases below the maximum number."                 ]"This notification is generated when the number of peer sessions exceeds the maximum number."                 e"This notification is generated when the number of peer sessions decreases below the maximum number."                 e"This notification is generated when the number of dynamic peer sessions exceeds the maximum number."                 m"This notification is generated when the number of dynamic peer sessions decreases below the maximum number."                 _"This notification is generated when the number of peer sessions exceeds the threshold number."                 g"This notification is generated when the number of peer sessions decreases below the threshold number."                 H"The number of routes in the VPN instance reached the alarm threshould."                 P"The number of routes in the VPN instance fell below the clear alarm threshold."                 4"The number of routes reached the alarm threshould."                 <"The number of routes fell below the clear alarm threshold."                     |"The value of this object identifies the total number of BGP peers, including IPv4/IPv6 public peers and VPNv4/VPNv6 peers."                       }"The value of this object identifies the total number of IBGP peers, including IPv4/IPv6 public peers and VPNv4/VPNv6 peers."                       }"The value of this object identifies the total number of EBGP peers, including IPv4/IPv6 public peers and VPNv4/VPNv6 peers."                       1"The max number of BGP peer sessions configured."                       ;"The total number of BGP dynamic peer sessions configured."                       9"The max number of BGP dynamic peer sessions configured."                       7"The threshold number of BGP peer sessions configured."                       L"The total number of update packets received from all the remote BGP peers."                       F"The total number of Update packets sent to all the remote BGP peers."                           �"This object indicates the VPN-tunnel bearing relation table that shows detailed information about the tunnel that bears the VPN service."                       �"This object indicates detailed information about the tunnel bearing VPN services. This object can be queried, but not be set or created."                       %"This object indicates the VRF name."                       ;"This object indicates the next hop in the public network."                       4"The value of this object identifies the tunnel ID."                       >"This object indicates the destination address of the tunnel."                       6"The value of this object identifies the tunnel type."                       9"This object indicates the source address of the tunnel."                       J"This object indicates the name of the outgoing interface for the tunnel."                       J"The value of this object identifies whether load balancing is performed."                       R"The value of this object identifies the index of the primary LSP for the tunnel."                       ]"This object indicates the name of the outgoing interface for the primary LSP of the tunnel."                       ["The value of this object identifies the outgoing label for the primary LSP of the tunnel."                       G"This object indicates the next hop for the primary LSP of the tunnel."                       B"This object indicates the FEC for the primary LSP of the tunnel."                       P"This object indicates the length of the FEC for the primary LSP of the tunnel."                       H"The value of this object identifies whether the LSP is the backup LSP."                       L"The value of this object identifies signaling protocol type of the tunnel."                       V"The value of this object identifies ID of the tunnel configured through the command."                       ("This object indicates the tunnel name."                       ="This object indicates the Service-id of the L3VPN services."                       �"This object indicates detailed information about the Service-id of L3VPN services. This object can be queried, set but not created."                       %"This object indicates the VRF name."                       5"The value of this object identifies the Service-id."                           6"The number of VRFs that are configured on this node."                       B"The number of IPv4-family VRFs that are configured on this node."                       B"The number of IPv6-family VRFs that are configured on this node."                               1"The compliance statement for Huawei-BGP-VPN MIB"                   t"Address Family Group for BGP peers
                This table contains members of the address family for BGP peers"                 b"BGP Peer Group.  
                This table contains members of the connections with BGP peers."                 e"Route Group for BGP Peers
                This table contains members of the routes with BGP peers."                 y"Protocol Packet Group for BGP Peers
                This table contains members of the protocol packets with BGP peers."                 v"Configuration Group for BGP Peers.  
                This table contains members of the configurations of BGP peers."                 d"Trap Group for BGP Peers.  
                This table contains members of the traps of BGP peers."                             4"The compliance statement for Route Management MIB."                   "Description."                 ="This object indicates the Service-id of the L3VPN services."                     �"Tnl2Vpn Trap table.
                This table contains the trap information.
                This table is only used for sending trap messages and does not support the get/getnext/set operation."                       D"This object indicates detailed information about the trap message."                       &"This object indicates the VPN index."                       4"This object indicates the public next-hop address."                       �"This object indicates whether the tunnel is reachable.
                1--tunnel reachable.
                2--tunnel unreachable."                       l"This object indicates the ckey value.
                This value is used for getting next-hop information."                               2"The compliance statement for Huawei-BGP-VPN MIB."                   "Description."                 "Description."                        ""This trap indicates whether the tunnel used by a VPN is reachable,
                If the tunnel is unreachable, a trap is sent to notify the user, hwTunnelReachablityEvent is 2.
                If the tunnel is reachable, a trap is sent to notify the user, hwTunnelReachablityEvent is 1."                     !"The total number of BGP routes."                       H"Table contains some statistic information entries orgnized by os-node."                       E"Every entry contains some statistic infomation on specific os-node."                       "The index of specific slot."                       7"The number of the neighbors on the specific os-group."                       4"The number of the routes on the specific os-group."                       J"Table contains some information entries orgnized by distribute-instance."                       G"Every entry contains some infomation on specific distribute-instance."                       )"The id of specific distribute-instance."                       +"The name of specific distribute-instance."                       O"The source slot name the distribute-instances is from when migration happens."                       \"The destination slot name the distribute-instances is aboute to go when migration happens."                       ,"The reason of a migration when it happens."                                   `"RPKI Session Table.  
                This table contains information about the RPKI sessions."                       )"The information about the RPKI session."                       ,"The index of the instance for the session."                       8"The type of the address family for the remote session."                        "The IP address of the session."                       '"The limit number of rpki session ROA."                           E"This notification is generated when rpki session ROA number exceed."                 K"This notification is generated when rpki session ROA number exceed clear."                         1"The compliance statement for Huawei-BGP-VPN MIB"                   a"Session Group for RPKI sessions
                This table contains members of session for RPKI"                 l"Trap Group for RPKI Sessions.  
                This table contains members of the traps of RPKI Sessions."                                    