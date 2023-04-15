�-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI-IPRAN-DCN-MIB
-- Reference:
-- Version:     V2.11
-- History:     
--     <YaoShuran>, <2011-09-30>, <V1.00 publish>
--     <Jiangyu>, <2011-12-01>, <V1.00 publish>
-- ==================================================================
  �"Uniquely identify the network entity ID.
                        The total valid length is 24 bit, 
                        the high 8 bit is subnet number;
                        the low 16 bit is base id;
                        keep value range: subnet number should within 0x1-0xFE
                                          base id should within 0xBFF1-0xFFFE,
                        valid value range: subnet number should within 0x1-0xFE,
                                           base id should within 0x1-0xBFEF,
                        keep range will only use as factory value,
                        in the running network must use the valid value.
                        the IpRanNeId will be showed as 0.x.x.x."                                                     "IPRAN DCN MIB" �"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201806301638Z" "201802131937Z" "201512250000Z" "201507230000Z" "201504250000Z" "201504240000Z" "201503280000Z" "201408210000Z" "201403290000Z" "201403170000Z" "201403120000Z" "201307240000Z" "201109300000Z" N"Modify the MAX-ACCESS of hwIpRanDcnNvInfoApVer and hwIpRanDcnNvInfoMasterVer" ""Add node hwIpRanDcnApVerMismatch" !"Add node hwIpRanDcnNeInfoVlanId" 1"Add node hwIpRanDcnACLName, hwIpRanDcnACLNumber" �"Add node hwIpRanDcnNeInfoPnpState, hwIpRanDcnNeInfoEsn, hwIpRanDcnNeInfoVlanId; add node hwIpRanDcnNeInfoPnpState, hwIpRanDcnNeInfoEsn, hwIpRanDcnNeInfoVlanId for hwIpRanDcnNeOnline" �"Add node hwIpRanSourceAddress, hwIpRanSourcePort, hwIpRanDestinationAddress, hwIpRanDestinationPort, hwIpRanVpn, hwIpRanSSLAuthFailedTimes, hwIpRanSSLAuthFailedPeriod;add note hwIpRanSSLAuthFailure" �"Add PTN trap node,add node:hwIpRanDcnGNENeOnlineNotifyMode ,hwIpRanDcnGNEFlag ,hwIpRanDcnNodeId ,hwIpRanDcnGNENSAP ,hwIpRanDcnGNENeOnline" ,"Add hwIpRanDcnConnectMode invalid(0) enum." ?"Add hwIpRanDcnElementInfoTable and hwIpRanCTDcnNeOnline trap." �"Add node hwIpRanDcnNeInfoNeLoginMode for hwIpRanDcnNeInfoTable, and add it as VB for hwIpRanDcnNeOnline and hwIpRanDcnNeOffline." "modify HwIpRanNeId  SYNTAX." "add node hwIpRanDcnSSLPort." 6"V1.00, initial version. Created HwIpRanDcnInfoEntry."                       M"
                This object indicates the ID of the node.
                "                       S" 
                This object indicates the type of the node IP.
                "                       N" 
                This object indicates the IP of the node.
                "                       O" 
                This object indicates the IP address mask.
                "                       J"
                This object indicates the port of TCP.
                "                       N"
                This object indicates the mode of connect.
                "                       N"
                This object indicates the ssl port of TCP.
                "                       s"
                This object indicates mode in which NE-reported information was sent to an NMS.
                "                       z"
                This object indicates mode in which bind ACL name,if name length is 0 means no config.
                "                       x"
                This object indicates mode in which bind ACL number, if number is 0 means no config.
                "                       )"A table of network element information."                       -"A single network element information entry."                       j"The network element id, uniquely identifying 
                one network element in the routing domain."                       *"The IP type of the network element node."                       -"The IP address of the network element node."                       O"The distance from current network element to the remote network element node."                      �"The left time period for the network element node exist, 
                The value will set to the initial period value when current 
                network element receive new advertisement packet for the 
                node, it will reduce one each period time and delete the 
                entry when Tm decrease to zero (The initial period value and
                one period time value may be different for different device version, 
                user no need care it's value)."                       &"The hostname of the network element."                       %"The ip mask of the network element."                       )"The device type of the network element."                       '"The pnp state of the network element."                       !"The esn of the network element."                       ""The vlan of the network element."                       )"A table of network element information."                       -"A single network element information entry."                       j"The network element id, uniquely identifying 
                one network element in the routing domain."                       *"The IP type of the network element node."                       -"The IP address of the network element node."                       %"The company of the network element."                       )"The device type of the network element."                       )"The MAC Address of the network element."                           "The NE number."                       Q"
            This object is used to indicate the mode of NE added.
            "                       "The packet format flag."                       "The GNE flag."                       "The node ID."                       "The GNE NSAP address."                       "Source address."                       "Source port."                       "Destination address."                       "Destination port."                       "VPN name."                       ."SSL certificate authentication failed times."                       I"SSL certificate authentication failed period, the default value is 60s."                       %"The NV AP id, uniquely identifying."                       "The version of the AP node."                       !"The version of the Master node."                           5"This object is used to indicate NE number overload."                 >"This object is used to indicate NE number overload recovery."                 -"This object is used to indicate NE on-line."                 ."This object is used to indicate NE off-line."                 0"This object is used to indicate CT NE on-line."                 B"When an NE went online in PTN mode, this trap will be triggered."                 �"This  object is used to indicate SSL certificate login failure times during 60s. The default login failure report times is 10."                 B"This object is used to indicate AP version mismatch with Master."                         8"The compliance statement for the HUAWEI-IPRAN-DCN-MIB."                   "The group for ipran dcn."                 9"These objects are used to indicate the NE number state."                     1"The objects are used to indicate the NE number."                 7"These objects are required for display ne-info table."                            