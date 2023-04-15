e-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: Huawei Ethernet ND MIB
-- Reference: HUAWEI Enterprise MIB
-- Version: V1.04
-- History:
-- gaoning , 2014-06-27, add nodes for ND.
-- =================================================================
                     !"Please provide the descritpion." "Huawei Industrial Base
                   Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                  " "201802081600Z" "201708171600Z" "201707041600Z" "201407011600Z" "201008111600Z" ;"V1.04, add hwNDHostConflict and hwNDHostConflictResolved." j"V1.02, Modify description of hwNDSlotThresholdExceedValue and hwNDIntfThresholdExceedValue at 2017-07-04" J"V1.02, Modify description of hwSlotNDThresholdExceedAlarm at 2017-07-04." "V1.01, initial version." "V1.00, initial version."                   E"This object indicates the threshold of the alarm generated in slot."                       E"This object indicates the threshold of the alarm generated in slot."                       "The slot of alarm generated."                       �"This object indicates an ND entry alarm threshold on a board. An ND entry threshold-exceeding alarm is generated when the ratio of the number of ND entries on a board to the maximum number allowed is greater than or equal to the alarm threshold."                       �"This object indicates an ND entry clear alarm threshold on a board. An ND entry clear alarm is generated when the ratio of the number of ND entries on a board to the maximum number allowed is less than or equal to the clear alarm threshold."                       %"Current dynamic ND entries in slot."                       $"Current static ND entries in slot."                       %"Maximum ND entries number for slot."                       J"This object indicates the threshold of the alarm generated in interface."                       J"This object indicates the threshold of the alarm generated in interface."                       #"The interface of alarm generated."                      "This object indicates an ND entry alarm threshold on an interface. An ND entry threshold-exceeding alarm is generated when the ratio of the number of ND entries on an interface to the maximum number allowed is greater than or equal to the alarm threshold."                       �"This object indicates an ND entry clear alarm threshold on an interface. An ND entry clear alarm is generated when the ratio of the number of ND entries on an interface to the maximum number allowed is less than or equal to the clear alarm threshold."                       *"Current dynamic ND entries in interface."                       )"Current static ND entries in interface."                       *"Maximum ND entries number for interface."                       �"The table contains the information of local host and remote host. 
		The information includes host IP, host MAC, gateway VtepIP, gateway MAC."                       ("Entries of the host information table."                       *"The bridge domain ID of alarm generated."                       ,"The IPv6 address of alarm generated in BD."                       &"The MAC address of hwNDHostIpv6Addr."                       *"The interface of BD that generate alarm."                       #"The pevid of hwNDHostWorkIfIndex."                       #"The cevid of hwNDHostWorkIfIndex."                       &"The MAC address of hwNDHostIpv6Addr."                       *"The interface of BD that generate alarm."                       #"The pevid of hwNDHostWorkIfIndex."                       #"The cevid of hwNDHostWorkIfIndex."                           �"This object indicates that an alarm is generated when the ratio of the number of ND entries on a board to the maximum number of ND entries supported on the board is greater than or equal to the 80% threshold."                 �"This object indicates that a clear alarm is generated when the ratio of the number of ND entries on a board to the maximum number of ND entries supported on the board is less than or equal to the 70% threshold."                 �"This object indicates that an alarm is generated when the ratio of the number of ND entries on an interface to the maximum number of ND entries supported on the interface is greater than or equal to the 80% threshold."                 �"This object indicates that a clear alarm is generated when the ratio of the number of ND entries on an interface to the maximum number of ND entries supported on the interface is less than or equal to the 70% threshold."                 i"This object indicates that an alarm is generated when there may be two host have the same IPv6 address."                 u"This object indicates the clear alarm of the alarm generated when there may be two host have the same IPv6 address."                         >"A collection of objects for ND threshold alarm in interface."                 9"A collection of objects for ND threshold alarm in slot."                 "notification Group."                     9"A collection of objects for host IPv6 address conflict."                     '"The compliance statement for ND thre."                          