k--  =================================================================
-- Copyright (C) 2016 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- DESCRIPTION:  HUAWEI-IPRANDCN-MIB
-- Reference:  
-- Version: V2.07
-- History:
--         v1.00
--         created by lixinjie 2011-11-21
-- ================================================================= 
                         %"Add hwDcnNeidConflictNotifications." �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China
                 Website: http://www.huawei.com
                 Email: support@huawei.com " "201606061009Z" "201504200944Z" "201502111438Z" "201409301039Z" "201408261039Z" "201402271557Z" "201309251750Z" "201105180930Z" %"Add hwDcnNeipConflictNotifications." N"modify hwDcnInterfaceVlanListLow and hwDcnInterfaceVlanListHigh description." "delete iso" H"moidy hwDcnEntPhyIndex and hwDcnInterfaceIndex MAX-ACCESS to read-only" :"Add hwDcnInterfaceVlanListLow,hwDcnInterfaceVlanListHigh" #"Modify hwDcnInterfaceIndex  range" %"Add hwDcnNeidConflictNotifications." "Initial version."               A"
                The Dcn Default-port table.
                "                       H"
                The Dcn Default-port table struct.
                "                       A"
                The ID of the Current Board
                "                       D"
                The default ports of this card
                "                       H"
                All the support ports of this card
                "                       >"
                The Dcn Interface table.
                "                       E"
                The Dcn Interface table struct.
                "                       H"
                The Index of the Current Interface
                "                       G"
                The Name of the Current Interface
                "                       I"
                The VlanID of the Current Interface
                "                       L"
                The Bandwidth of the Current Interface
                "                       H"
                The state of the Current Interface
                "                       �"
                This object indicates bitmap information for an interface's DCN VLANs ranging from 1 to 2048.
                "                       �"
               This object indicates bitmap information for an interface's DCN VLANs ranging from 2049 to 4096.
                "                       !"This object indicates the NEIP."                           G"A pppoe negotiation is failed for neid conflicting on this interface."                 O"The pppoe negotiation has succeed,and the alarm of neid conflict is resumed. "                     K"A PPP negotiation failed due to NEIP address conflicts on this interface."                 U"The PPP negotiation succeeded after the NEIP address conflict fault was rectified. "                         T"The compliance statement for systems supporting 
                the this module."                   "Dcn Default Port table."                 "Dcn Interface table."                 "Dcn neid conflict Trap."                     "Dcn neip conflict Trap."                                