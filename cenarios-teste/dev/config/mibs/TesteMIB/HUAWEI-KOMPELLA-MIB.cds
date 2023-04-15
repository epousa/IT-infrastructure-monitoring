e--  ==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI KOMPELLA Management MIB
-- Reference:
-- Version:     V2.06
-- History:
--              V1.0 PanJun, 2006-05-09, publish
-- ==================================================================
                                                         N"The HUAWEI-KOMPELLA-MIB contains objects to
                manage KOMPELLA."
"Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   " "201711031527Z" "201611281100Z" "201611181100Z" "201610311100Z" "201610311100Z" "201306181100Z" "201303050900Z" "200605090900Z" ,"Add IMPORTS(ifName, InterfaceIndexOrZero)." A"Add OBJECTS(hwVpwsBLabelNotEnough, hwVpwsBLabelNotEnoughClear)." U"Add hwKompellaNotificationGroup(hwVpwsBLabelNotEnough, hwVpwsBLabelNotEnoughClear)." /"Add KOMPELLA MIB Trap(hwVpwsBLabelNotEnough)." 4"Add KOMPELLA MIB Trap(hwVpwsBLabelNotEnoughClear)." Y"Add OBJECT(hwKompellaVcIsActive) to KOMPELLA MIB Trap(hwKompellaVcDown,hwKompellaVcUp)." "Modified node's value. " N"The HUAWEI-KOMPELLA-MIB contains objects to
                manage KOMPELLA."       $--Nov 03, 2017 at 15:27 GMT        
           i"This table is the VPN's configuration table. Users can 
                create or delete the VPN by it."                       *"Provides the information of a Vpn entry."                       &"The human-readable name of this VPN."                       1"This value indicates the service to be carried."                      "The route distinguisher for this VPN.
                This value must be exclusive on the whole.
                If this node hasn't been configured, the entry of 
                hwKompellaCeTable or hwKompellaVcTable can not be 
                created."                       3"This value indicates the control word capability."                       +"This object specifies max transport unit."                       �"RowStatus for this Table.
                Restriction:                   
                  If delete a VPN, the entries of hwKompellaCeTable
                  and hwKompellaVcTable under this VPN will be 
                  deleted too."                       "This table is the VPN Target's configuration table. Users
                can create or delete the Vpn target of a VPN by it."                       1"Provides the information of a Vpn target entry."                       ,"The route target export distribution type."                       '"The route target distribution policy."                       �"RowStatus for this Table.
                Restriction:
                  The VPN designated by hwKompellaVpnName must be
                  created first.
                  Not support modifying configuration."                       m"This table is the CE configuration table. Users
                can create or delete the CE of a VPN by it."                       )"Provides the information of a CE entry."                       /"The unique ID in a VPN identifies a local CE."                       %"The human-readable name of this CE."                       "The CE ID range available."                       :"Value of default original CE offset, default value is 0."                      J"RowStatus for this Table.
                Restriction:
                  The VPN designated by hwKompellaVpnName must be
                  created first.
                  Not support modifying configuration.
                  If delete a CE, the entries of hwKompellaVcTable
                  under this CE will be deleted too."                       m"This table is the VC configuration table. Users
                can create or delete the VC of a VPN by it."                       )"Provides the information of a VC entry."                       �"If the vc is represented in the ifTable as an ifIndex, this 
                item holds the ifIndex of the vc in the ifTable, otherwise  
                it MUST be set to zero."                       #"This item holds the remote ce id."                       *"This object indicates the inbound label."                       +"This object indicates the outbound label."                       3"This value indicates the control word capability."                       4"This object indicates the tunnel policy name used."                       t"This object indicates VLAN tag is stripped(raw) , 
                attached(tagged) or invalid(rawTagNotConfiged)."                       *"Denotes the VC is the repetition or not."                       +"Denotes the AC and PSN are enable or not."                       "The index of pw for BFD."                       '"Denotes the vc is operational or not."                       "The reroute delay time."                       "the reroute resume time."                       "reroute policy."                       "the reroute reason."                       "last  reroute time."                       )"Denotes the manual has been set or not."                       *"Denotes the current vc is active or not."                       9"Denotes the AC's physical status is operational or not."                       2"Denotes the AC's protocol is operational or not."                       !"The multiple of detection time."                       6"The minimum interval of BFD messages to be received."                       2"The minimum interval of BFD messages to be sent."                       H"This value indicates the capacitability to support dynamic BFD detect."                       +"This value indicates the type of ETH OAM."                       ("This value indicates the CFM MA Index."                       t"This object contain the value of the peer node address 
                of the VC/PE maintenance protocol entity. "                      G"RowStatus for this Table.
                Restriction:
                  The VPN designated by hwKompellaVpnName must be
                  created first.
                  The CE designated by hwKompellaVpnName and
                  hwKompellaCeID must be created first.
                  Not support modifying configuration."                       8"This table is used to search the tunnel index of a VC."                       0"Provides the information of a VC tunnel entry."                       1"This object indicates the tunnel index of a VC."                       2"This object indicates the type of the VC tunnel."                       1"This object indicates the index of LSP for BFD."                       ;"This table contains the KOMPELLA's VC packets statistics."                       S"Provides the information of the KOMPELLA's VC packets
                statistics."                       2"The total number of packets received on this VC."                       0"The total number of bytes received on this VC."                       ."The total number of packets sent on this VC."                       +"The total number of bytes sent on the VC."                       �"This object indicates the enable sign of KOMPELLA
                VC state change notification. 
                The default value is disable (2)."                       �"This object indicates the enable sign of KOMPELLA
                VC deletion notification. 
                The default value is disable (2)."                      "If this object is set to enable(1),then it enbables
                 this emission of hwKompellaSwitchWtoP and hwKompellaSwitchPtoW
                 notifications;otherwise these notifications are not emitted.  
                 The default value is disable (2)."                       O"This object indicates the reason of KOMPELLA VC
                state change."                       n"This object indicates the remote CE ID of KOMPELLA VC
                switch from working pw to protect pw ."                           ="This notification indicates the VC's state changes to down."                 ;"This notification indicates the VC's state changes to up."                 c"This notification is generated when switch from working
                pw to protect pw happens."                 c"This notification is generated when switch from protect
                pw to working pw happens."                 0"This notification indicates the VC is deleted."                 *"The block labels of VPWS are not enough."                 &"The block labels of VPWS are enough."                         ["The compliance statement for systems supporting 
                the HUAWEI-KOMPELLA-MIB."                   "The KOMPELLA's Vpn group."                 ""The KOMPELLA's Vpn Target group."                 "The KOMPELLA's CE group."                 "The KOMPELLA's VC group."                 !"The KOMPELLA's VC Tunnel group."                 $"The KOMPELLA's VC Statistic group."                 ,"The KOMPELLA's Notification Control group."                 3"The KOMPELLA's Switch Notification Control group."                 ."The KOMPELLA's Vc State Change Reason group."                 $"The KOMPELLA's Remote CE ID group."                 ""The KOMPELLA Notification group."                                