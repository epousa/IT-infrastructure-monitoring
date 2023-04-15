�--==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI Q(802.1Q) IN Q(802.1Q) MIB
-- Reference:
-- Version: V2.03
--          V1.1
--          V1.2
-- History: modified by xieyuan  2006-10-11
-- <author>,  <date>,  <contents>
-- Zhanglei   2006-3-10
-- Xieyuan    2006-8-10 
-- Xieyuan    2006-12-14
-- Xieyuan    2007-06-25
-- Hexingjian 2009-01-20
-- ==================================================================
-- ==================================================================
-- 
-- Varibles and types be imported
--
-- ==================================================================
   "A list value for bpdu. "                                                 L"Modify  hwQinQAsymmetryUserMode hwQinQSwapCfgFlag hwQinQGroupStat DEFVAL ." �"Huawei Industrial Base
            Bantian, Longgang
             Shenzhen 518129
             People's Republic of China
             Website: http://www.huawei.com
             Email: support@huawei.com
           " "201712201538Z" "201708171538Z" "201406101538Z" \"The QinQ MIB module is defined to manage the configuration under system or interface view." G"Modify the description of hwQinQSubIfStackingStatCEVlan at 2017-08-17" A"Modify the description of hwQinQSystemWellKnowMac at 2014-06-10"                  7"The destination MAC address replacing the original destination macAddress is a well-known
                             multicast address. This well-known multicast address shields BPDUs inner details to allow
                             these BPDUs to be transmitted with a tag through the carrier's network."                       �"It indicates the Bridge 's location, having two possible values :Customers' Bridge
                            and Providers' Bridge."                       ,"View statistics about the discarded BPDUs."                       �"The value of tag type is encapsulated in the head of the ethernet frame
                            to distinguish the encapsulated mode between the 802.1Q and QinQ. Default is '8100'h."                            "QinQ-port configuration table."                       6"The entry of an interface enabled the QinQ function."                        "Index number of the interface."                       �"The value of tag type is encapsulated in the head of the Ethernet frame
                            To distinguish the encapsulated mode between the 802.1Q and QinQ."                       �"The value indicates whether the 1Q-bpdutunnel is opened,
                            If hwQinQBpduTunnelEnableTwoQBpduTunnel is enabling, then this value should be disable."                       H"Whether to enable the setting of BPDU Tunnel tag. Default is disabled."                       �"The value indicates whether the 2Q-bpdutunnel is opened,
                            If hwQinQBpduTunnelEnableOneQBpduTunnel is enabling, then this value should be disable.
                            Default is disabled."                       �"The tag  is inserted into the head of the BPDU ,to support
                             that can be transmitted through the services' network."                       E"The list describes accessible bode from different vlan (0 to 2047)."                       H"The list describes accessible bpdu from different vlan (2048 to 4094)."                       �"The value indicates the TPID of outer tag of packets that have two tag and output from the output interface of vlan-switch,
                            If hwQinQEtherEncpsType is enabling, then this value should be 0xffff."                       �"The value indicates whether the BPDU filter function is enabled. 
                            If hwQinQBpduTunnelEnableBpduFilter is enabled, then this value should be enable."                       �"Used to configure packets'vlan stacking in sub interface, receive one-tag
                            packets and transmit two-tag packets, where the outer-tag inserted is in
                            hwQinQSubIfVlanStackingTable."                       ?"The entry of an interface enabled the QinQ-stacking function."                       ."Index number of the QinQ-stacking interface."                       �"When configure ce vlan as a range, hwQinQSubIfStackingCEVlanStart is the
                            start vlan id and hwQinQSubIfStackingCEVlanEnd is the end vlan id."                       �"When configure ce vlan as a range, hwQinQSubIfStackingCEVlanStart is the
                            start vlan id and hwQinQSubIfStackingCEVlanEnd is the end vlan id."                       "Group-management id."                      $"Used for controlling the creation and deletion of this
                            row. All writable objects in this row may be modified at any time.
                            If a Network Management Application  attempts to delete a conceptual
                             row by setting this  object to 'destroy' and there are one or more entries
                            in hwQinQSubIfVlanStackingTable pointing to the row, the agent must also
                            destroy the corresponding entries in hwQinQSubIfVlanStackingTable."                       "PE vlan id."                       �"When a sub interface configured QinQ-stacking function, hwQinQSubIfStackingStatTable is used to
                            statistic total number of the out packets and in packets."                       ?"The entry of an interface enabled the QinQ-stacking function."                       ."Index number of the QinQ-stacking interface."                       Z"This object indicates the CE VLAN ID of the sub-interface configured with VLAN stacking."                       �"The group-management id. The statistic number of packets can not get if 
                            the statistic funtion is not enabled."                       3"Total number of out packets of the sub interface."                       1"Total number of out bytes of the sub interface."                       2"Total number of in packets of the sub interface."                       0"Total number of in bytes of the sub interface."                       I"Total number of broadcast packets transmitted out of the sub interface."                       D"Total number of broadcast packets received from the sub interface."                       I"Total number of multicast packets transmitted out of the sub interface."                       D"Total number of multicast packets received from the sub interface."                       G"Total number of unicast packets transmitted out of the sub interface."                       B"Total number of unicast packets received from the sub interface."                       �"The table is used to configure QinQ-termination function in sub interface, then packets
                            transmitted from this sub interface input with two tags will be terminated."                       B"The entry of an interface enabled the QinQ-termination function."                       1"Index number of the QinQ-termination interface."                       K"Outer vlan id of the packets which have two tags before being terminated."                       �"When configure ce vlan as a range, hwQinQSubIfTermCEVlanStart
                            is the start vlan id and hwQinQSubIfTermCEVlanEnd is the end vlan id."                       �"When configure ce vlan as a range, hwQinQSubIfTermCEVlanStart is 
                            the start vlan id and hwQinQSubIfTermCEVlanEnd is the end vlan id."                       "Group-management id."                      "Used for controlling the creation and deletion of this
                            row. All writeable objects in this row may be modified at any time.
                            If a Network Management Application  attempts to delete a conceptual
                             row by setting this  object to 'destroy' and there are one or more entries
                            in hwQinQSubIfTermTable pointing to the row, the agent must also
                            destroy the corresponding entries in hwQinQSubIfTermTable."                       �"When a sub interface configured QinQ-termination function, hwQinQSubIfTermStatTable used to
                            statistic total number of the out packets and in packets."                       B"The entry of an interface enabled the QinQ-termination function."                       1"Index number of the QinQ-termination interface."                       �"Outer vlan in packets which input the QinQ sub interface,
                            used to indicate the packets as an index."                       �"Inner vlan in packets which input the QinQ sub interface,
                            used to indicate the packets as an index."                       �"The group-management id. The statistic number of packets can not get if 
                            the statistic funtion is not enabled."                       3"Total number of out packets of the sub interface."                       1"Total number of out bytes of the sub interface."                       2"Total number of in packets of the sub interface."                       0"Total number of in bytes of the sub interface."                       I"Total number of broadcast packets transmitted out of the sub interface."                       D"Total number of broadcast packets received from the sub interface."                       I"Total number of multicast packets transmitted out of the sub interface."                       D"Total number of multicast packets received from the sub interface."                       G"Total number of unicast packets transmitted out of the sub interface."                       B"Total number of unicast packets received from the sub interface."                       1"The table is used to configure QinQ static ARP."                       6"The entry of an interface enabled the QinQ function."                       "The interface's Index."                       "The IP address."                       "The MAC address."                       "The first vlan id."                       "The second vlan id."                      "Used for controlling the creation and deletion of this
                            row. All writeable objects in this row may be modified at any time.
                            If a Network Management Application  attempts to delete a conceptual
                             row by setting this  object to 'destroy' and there are one or more entries
                            in hwQinQStaticARPCfgTable pointing to the row ,the agent must also
                            destroy the corresponding entries in hwQinQStaticARPCfgTable."                       ,"The table is used to configure static MAC."                       6"The entry of an interface enabled the QinQ function."                       "The MAC address."                       *"Vlan id that the MAC address belongs to."                       ."Name of VSI that the MAC address belongs to."                       b"PE vlan id for a Network Management Application  attempts to configure  hwQinQStaticMACCfgTable."                       "CE vlan id."                       "The type of the MAC."                        "Index number of the interface."                       "The config type."                      "Used for controlling the creation and deletion of this
                            row. All writeable objects in this row may be modified at any time.
                            If a Network Management Application  attempts to delete a conceptual
                             row by setting this  object to 'destroy' and there are one or more entries
                            in hwQinQStaticMACCfgTable pointing to the row ,the agent must also
                            destroy the corresponding entries in hwQinQStaticMACCfgTable."                       �"Used to configure Dot1q-termination function in sub interface ,then packets
                            transmitted from this sub interface input with one tag will be terminated."                       C"The entry of an interface enabled the Dot1q-termination function."                       2"Index number of the Dot1q-termination interface."                       �"When configure ce vlan as a range, hwQinQSubIfDot1qTermCEVlanStart
                            is the start vlan id and hwQinQSubIfDot1qTermCEVlanEnd is the end vlan id."                       �"When configure ce vlan as a range, hwQinQSubIfDot1qTermCEVlanStart is 
                            the start vlan id and hwQinQSubIfDot1qTermCEVlanEnd is the end vlan id."                       "Group-management id."                      "Used for controlling the creation and deletion of this
                            row. All writeable objects in this row may be modified at any time.
                            If a Network Management Application  attempts to delete a conceptual
                             row by setting this  object to 'destroy' and there are one or more entries
                            in hwQinQSubIfDot1qTermTable pointing to the row ,the agent must also
                            destroy the corresponding entries in hwQinQSubIfDot1qTermTable."                       �"When a sub interface configured Dot1q-termination, hwQinQSubIfDot1qTermStatTable used to
                            statistic total number of the out packets and in packets."                       B"The entry of an interface configured Dot1q-termination function."                       2"Index number of the Dot1q-termination interface."                       �"Inner vlan in packets which input the Dot1q-termination sub interface,
                            used to indicate the packets as an index."                       �"The group-management id. The statistic number of packets can not get if 
                            the statistic funtion is not enabled."                       3"Total number of out packets of the sub interface."                       1"Total number of out bytes of the sub interface."                       2"Total number of in packets of the sub interface."                       0"Total number of in bytes of the sub interface."                       I"Total number of broadcast packets transmitted out of the sub interface."                       D"Total number of broadcast packets received from the sub interface."                       I"Total number of multicast packets transmitted out of the sub interface."                       D"Total number of multicast packets received from the sub interface."                       G"Total number of unicast packets transmitted out of the sub interface."                       B"Total number of unicast packets received from the sub interface."                       ?"The table contains mode type and ethernet encapsulation type."                       F"The mode type and ethernet encapsulation type of an interface entry."                        "Index number of the interface."                       "Mode type of the interface."                       �"The value of tag type is encapsulated in the head of the ethernet frame
                            to distinguish the encapsulated mode between the 802.1Q and QinQ."                       �"The value of tag type is encapsulated in the head of the ethernet frame
                            to distinguish the encapsulated mode between the 802.1Q and QinQ."                      "The control-vlan id and control-vlan's attributes can be configured in sub interface.
                             You must designate control-vlan as QinQ or Dot1q before configuring QinQ-termination 
                             function or Dot1q-termination function."                       '"The Control-vlan configuration entry."                       $"Index number of the sub interface."                       "Control-Vlan id."                       "The type of sub interface."                      �"The service type of the sub interface, by setting hwQinQCtrlVlanFlag to the value (rtprotocolenable),
                            the route-protocol attribute enabled; and by setting hwQinQCtrlVlanFlag to the value (localswitch), 
                            the localswitch attribute enabled, which means two tags of packets will be pruned. 
                            So if you set hwQinQSubIfType to be dot1q type, you can not specify hwQinQCtrlVlanFlag as localswitch."                       ("This table can be created and deleted."                      ("The service type of the sub interface, by setting hwQinQFlexibleFlag to the value (flexibleenable),
                            the flexible attribute enabled; 
                            So if you set hwQinQSubIfType to be dot1q type, you can not specify hwQinQFlexibleFlag as flexibleenable."                       T"The group-management id and group's attributes can be configured in sub interface."                       "Group configuration entry."                        "Index number of the interface."                       "Group-management id."                       "The type of the group."                       ,"Whether the statistic function is enabled."                       ("This table can be created and deleted."                       @"The table to configure asymmetry attribution of the interface."                       -"The entry of the asymmetry configure table."                       1"Index number of the QinQ-termination interface."                       >"The asymmetry attribution of the QinQ-termination interface."                       @"The user mode attribute of the QinQ-termination sub interface."                       "Interface remark config."                       8"The entry of the interface remark configuration table."                       z"Index number of the sub interface, 
                             which should configure QinQ-termination function first."                      I"The service policy map to set the 802.1P bits. By default(pevid), 
                             copy the P bits that were in the outer PE VLAN tag to the trunk VLAN tag,
                             by setting object to (cevid), copy the P bits that were in inner CE VALN
                             tag to the trunk VLAN tag."                       $"The table of bpdu tunnel ingress. "                       '"The entry of of bpdu tunnel ingress. "                       "Port index in interface. "                      	(" bpdu mac address list
                BPDU Dmac        protocol
                01-80-C2-00-00-00    stp01
                01-80-C2-00-00-01    pauseFrame
                01-80-C2-00-00-02    reserved02
                01-80-C2-00-00-03    reserved03
                01-80-C2-00-00-04    reserved04
                01-80-C2-00-00-05    reserved05
                01-80-C2-00-00-06    reserved06
                01-80-C2-00-00-07    reserved07
                01-80-C2-00-00-08    stp02
                01-80-C2-00-00-09    reserved08
                01-80-C2-00-00-0a    hgmp
                01-80-C2-00-00-0b    reserved09
                01-80-C2-00-00-0c    reserved10
                01-80-C2-00-00-0d    reserved11
                01-80-C2-00-00-0e    reserved12
                01-80-C2-00-00-0f    reserved13
                01-80-C2-00-00-10    reserved14
                01-80-C2-00-00-11    reserved15
                01-80-C2-00-00-12    reserved16
                01-80-C2-00-00-13    reserved17
                01-80-C2-00-00-14    isisLevel01
                01-80-C2-00-00-15    isisLevel02
                01-80-C2-00-00-16    reserved18
                01-80-C2-00-00-17    reserved19
                01-80-C2-00-00-18    reserved20
                01-80-C2-00-00-19    reserved21
                01-80-C2-00-00-1a    reserved22
                01-80-C2-00-00-1b    reserved23
                01-80-C2-00-00-1c    reserved24
                01-80-C2-00-00-1d    reserved25
                01-80-C2-00-00-1e    reserved26
                01-80-C2-00-00-1f    reserved27
                01-80-C2-00-00-20    gmrp
                01-80-C2-00-00-21    gvrp
                01-80-C2-00-00-22    reserved28
                01-80-C2-00-00-23    reserved29
                01-80-C2-00-00-24    reserved30
                01-80-C2-00-00-25    reserved31
                01-80-C2-00-00-26    reserved32
                01-80-C2-00-00-27    reserved33
                01-80-C2-00-00-28    reserved34
                01-80-C2-00-00-29    reserved35
                01-80-C2-00-00-2a    reserved36
                01-80-C2-00-00-2b    reserved37
                01-80-C2-00-00-2c    reserved38
                01-80-C2-00-00-2d    reserved39
                01-80-C2-00-00-2e    reserved40
                01-80-C2-00-00-2f    reserved41"                       "Group mac address."                       !"Bpdu tunnek ingress row status."                       ""The table of bpdu tunnel egress."                       ""The entry of bpdu tunnel egress."                       "Port index in interface."                      	+"Bpdu MAC address list
                BPDU DMAC           protocol
                01-80-C2-00-00-00    stp01
                01-80-C2-00-00-01    pauseFrame
                01-80-C2-00-00-02    reserved02
                01-80-C2-00-00-03    reserved03
                01-80-C2-00-00-04    reserved04
                01-80-C2-00-00-05    reserved05
                01-80-C2-00-00-06    reserved06
                01-80-C2-00-00-07    reserved07
                01-80-C2-00-00-08    stp02
                01-80-C2-00-00-09    reserved08
                01-80-C2-00-00-0a    hgmp
                01-80-C2-00-00-0b    reserved09
                01-80-C2-00-00-0c    reserved10
                01-80-C2-00-00-0d    reserved11
                01-80-C2-00-00-0e    reserved12
                01-80-C2-00-00-0f    reserved13
                01-80-C2-00-00-10    reserved14
                01-80-C2-00-00-11    reserved15
                01-80-C2-00-00-12    reserved16
                01-80-C2-00-00-13    reserved17
                01-80-C2-00-00-14    isisLevel01
                01-80-C2-00-00-15    isisLevel02
                01-80-C2-00-00-16    reserved18
                01-80-C2-00-00-17    reserved19
                01-80-C2-00-00-18    reserved20
                01-80-C2-00-00-19    reserved21
                01-80-C2-00-00-1a    reserved22
                01-80-C2-00-00-1b    reserved23
                01-80-C2-00-00-1c    reserved24
                01-80-C2-00-00-1d    reserved25
                01-80-C2-00-00-1e    reserved26
                01-80-C2-00-00-1f    reserved27
                01-80-C2-00-00-20    gmrp
                01-80-C2-00-00-21    gvrp
                01-80-C2-00-00-22    reserved28
                01-80-C2-00-00-23    reserved29
                01-80-C2-00-00-24    reserved30
                01-80-C2-00-00-25    reserved31
                01-80-C2-00-00-26    reserved32
                01-80-C2-00-00-27    reserved33
                01-80-C2-00-00-28    reserved34
                01-80-C2-00-00-29    reserved35
                01-80-C2-00-00-2a    reserved36
                01-80-C2-00-00-2b    reserved37
                01-80-C2-00-00-2c    reserved38
                01-80-C2-00-00-2d    reserved39
                01-80-C2-00-00-2e    reserved40
                01-80-C2-00-00-2f    reserved41."                       "Group mac address."                       "Row Status."                        "The table of port bpdu tunnel."                       %"The entry of port bpdu tunnel vlan."                       "Port index in interface."                       "Bpdu tunnel enable."                       "Vlan bpdu tunnel in port."                       "Vlan bpdu tunnel in port."                       "The table of bpdu tunnel."                       "The entry of of bpdu tunnel."                      M"Bpdu mac address list
                 BPDU Dmac            protocol
                01-80-C2-00-00-00    stp01       (1) 
                01-80-C2-00-00-01    pauseFrame  (2)  
                01-80-C2-00-00-02    reserved02  (3)
                01-80-C2-00-00-03    reserved03  (4)  
                01-80-C2-00-00-04    reserved04  (5)  
                01-80-C2-00-00-05    reserved05  (6)  
                01-80-C2-00-00-06    reserved06  (7)  
                01-80-C2-00-00-07    reserved07  (8)  
                01-80-C2-00-00-08    stp02       (9)  
                01-80-C2-00-00-09    reserved08  (10) 
                01-80-C2-00-00-0a    hgmp        (11) 
                01-80-C2-00-00-0b    reserved09  (12) 
                01-80-C2-00-00-0c    reserved10  (13) 
                01-80-C2-00-00-0d    reserved11  (14) 
                01-80-C2-00-00-0e    reserved12  (15) 
                01-80-C2-00-00-0f    reserved13  (16) 
                01-80-C2-00-00-10    reserved14  (17) 
                01-80-C2-00-00-11    reserved15  (18) 
                01-80-C2-00-00-12    reserved16  (19) 
                01-80-C2-00-00-13    reserved17  (20)
                01-80-C2-00-00-14    isisLevel01 (21)
                01-80-C2-00-00-15    isisLevel02 (22) 
                01-80-C2-00-00-16    reserved18  (23) 
                01-80-C2-00-00-17    reserved19  (24) 
                01-80-C2-00-00-18    reserved20  (25) 
                01-80-C2-00-00-19    reserved21  (26) 
                01-80-C2-00-00-1a    reserved22  (27) 
                01-80-C2-00-00-1b    reserved23  (28) 
                01-80-C2-00-00-1c    reserved24  (29) 
                01-80-C2-00-00-1d    reserved25  (30) 
                01-80-C2-00-00-1e    reserved26  (31) 
                01-80-C2-00-00-1f    reserved27  (32)
                01-80-C2-00-00-20    gmrp (33)
                01-80-C2-00-00-21    gvrp (34)
                01-80-C2-00-00-22    reserved28 (35)
                01-80-C2-00-00-23    reserved29 (36)
                01-80-C2-00-00-24    reserved30 (37)
                01-80-C2-00-00-25    reserved31 (38)
                01-80-C2-00-00-26    reserved32 (39)
                01-80-C2-00-00-27    reserved33 (40)
                01-80-C2-00-00-28    reserved34 (41)
                01-80-C2-00-00-29    reserved35 (42)
                01-80-C2-00-00-2a    reserved36 (43)
                01-80-C2-00-00-2b    reserved37 (44)
                01-80-C2-00-00-2c    reserved38 (45)
                01-80-C2-00-00-2d    reserved39 (46)
                01-80-C2-00-00-2e    reserved40 (47)
                01-80-C2-00-00-2f    reserved41 (48)
                01-80-C2-00-00-02    lacp (49)
                01-00-0C-CC-CC-CC   cdp  (50)
                01-00-0C-CC-CC-CC   pagp (51)
                01-00-0C-CC-CC-CC   udld (52)
                01-00-0C-CC-CC-CC   vtp  (53) ."                        "Bpdu tunnel enable or disable."                       "Group MAC address."                       "Row Status."                       B"This table describes the vlan swap configurations of interfaces."                       �"An entry is created for each active ethernet type interface in the device 
         and deleted when the interface been not exist."                        "Index number of the interface."                       �"QinQ swap flag of the interface, which indicates whether to swap the two vlan tags or not when the interface receives a packet with two 802.1q tags."                       �"The table is used to configure QinQ-mapping function in sub interface, then packets
                transmitted from this sub interface input with one or two tags will be mapped to other tag or tags."                       :"The entry of an interface enabled the QinQ-Map function."                       )"Index number of the QinQ-Map interface."                       G"Outer vlan id of the packets which have two tags before being Mapped."                       M"Inner start vlan id of the packets which have two tags before being Mapped."                       K"Inner end vlan id of the packets which have two tags before being Mapped."                       F"Outer vlan id of the packets which have two tags after being Mapped."                       "EtherType of Pe Mapped."                       F"Inner vlan id of the packets which have two tags after being Mapped."                       "EtherType of Ce Mapped."                       "Group-management id."                      %"The service policy map to set the 802.1P bits. By default(pevid), 
                 copy the P bits that were in the outer PE VLAN tag to the trunk VLAN tag,
                 by setting object to (cevid), copy the P bits that were in inner CE VALN
                 tag to the trunk VLAN tag."                      %"The service policy map to set the 802.1P bits. By default(pevid), 
                 copy the P bits that were in the outer PE VLAN tag to the trunk VLAN tag,
                 by setting object to (cevid), copy the P bits that were in inner CE VALN
                 tag to the trunk VLAN tag."                       �"The service type of the sub interface, by setting MapCetoPeFlag to the value (CetoPeenable),
                the 8021p CetoPeenable attribute enabled."                      �"Used for controlling the creation and deletion of this
                row. All writeable objects in this row may be modified at any time.
                If a Network Management Application  attempts to delete a conceptual
                 row by setting this  object to 'destroy' and there are one or more entries
                in hwQinQSubIfMapTable pointing to the row, the agent must also
                destroy the corresponding entries in hwQinQSubIfMapTable."                       )"QinQ Stacking Vlan configuration table."                       G"This object indicates the configuration table for QinQ Stacking Vlan."                       A"This object indicates the Index number of the vlanif interface."                       A"This object indicates the outer vlan id for QinQ Stacking Vlan."                       A"This object indicates the RowStatus of hwQinQStackingVlanTable."                               {"A collection of objects providing device level control
                            and status information for the system."                 ~"A collection of objects providing device level control
                            and status information for the interface."                 �"A collection of objects providing device level control
                            and status information for the sub interface."                 �"A collection of objects providing device level control
                            and status information for the sub interface."                 �"A collection of objects providing device level control
                            and status information for the sub interface."                 �"A collection of objects providing device level control
                            and status information for the sub interface."                 ,"A collection of items of static ARP table."                 ,"A collection of items of static MAC table."                 3"A collection of items of Dot1q-termination table."                 ="A collection of items of Dot1q-termination statistic table."                 -"A collection of items of Mode config table."                 ."A collection of items of Control vlan table."                 '"A collection of items of group table."                 2"A collection of items of asymmetry config table."                 -"A collection of items of Mode config table."                 +"A collection of items of Group Mac table."                 +"A collection of items of Group Mac table."                 7"A collection of items of Mode port bpdu tunnel table."                 1"A collection of items of bpdu tunnel mac table."                 -"A collection of items of Swap config table."                 �"A collection of objects providing device level control
                            and status information for the sub interface."                 ;"A collection of items of QinQ Stacking Vlan config table."                     8"The core compliance statement for all implementations."                          