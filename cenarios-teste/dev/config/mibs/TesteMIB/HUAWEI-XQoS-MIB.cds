:-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: This mib file is used for management of huawei Class Based 
--              QoS information. 
-- Reference:
-- Version:     V2.93
-- History:
--              v1.0 tianli,2004.4.10,publish  
--              v1.1
--                  modified by chengang
--                  modified by zhangwenwu
--                  modified by wanglili
--                  modified by hezhifeng
--                  modified by dongling
--                  modified by tongtingting
--              V2.18
--                  modified by chenlong  
--              V2.19
--                  modified by suxunjin 
--              v2.20
--                  modified by lixinzhuo
--              v2.21
--                  modified by liuxiaoyan
--              v2.22
--                  modified by jinxiaoyan
--              v2.23
--                  modified by wangjing
--              v2.24
--                  modified by renxiaoyuan
--              v2.25
--                  modified by jinxiaoyan           
--              v2.26
--                  modified by lixinzhuo
--              v2.27
--                  modified by sunhongliang 
--              v2.28
--                  modified by renxiaoyuan 
--              v2.29
--                  modified by maruoyu 
--              v2.30
--                  modified by renxiaoyuan 
--              v2.31
--                  modified by luyanyan 
--              V2.32
--                  modified by wangjing
--              V2.33
--                  modified by wangjing
--              V2.34
--                  modified by wangxiaoyan
--              V2.35
--	                modified by zhoushujie
--              V2.36
--	                modified by wangjing
--              V2.37
--	modified by wangjing  
--              V2.38  
--      modified by liuxiaoyan
--              V2.39
--                  modified by songjian 
--              V2.40
--	modified by magang
--              V2.41
--                  modified by chenlong
--              V2.42
--                  modified by magang
--              V2.43
--                  modified by chenlong
--             V2.44
--                  modified by chenhao 
--             V2.45
--	            modified by liye
--             V2.46 
--                           modified by wangzhe
--             V2.47
--                   modified by chenhao
--            V2.48
--                    modified by chenhao
--            V2.49
--                   modified by magang  
--            V2.50
--                   modified by zhangjian
--            V2.51
--                  modified by magang
--            V2.52
--                  modified by dongyanan
--            V2.53
--                  modified by xuechenguang
--            V2.55
--                  modified by pengsheng
--            V2.57
--                  modified by zhangmingming
--            V2.58
--                  modified by xiejiale
--            V2.59
--                  modified by lizhen
--            V2.60
--                  modified by wangcheng
--            V2.61 
--                  modified by liangyun 00353956
--            V2.62 
--                  modified by wanghongke
--            V2.63 
--                  modified by zhouzaihua
--            V2.64 
--                  modified by sunqirui
--            V2.66
--                  modified by luhongyu
--            V2.67
--                  modified by guanjiazhi
--            V2.69
--                  modified by sunqirui
--            V2.70
--                  modified by chenxu
--            V2.71
--                  modified by yejun
--            V2.72 
--                  modified by zhouzaihua
--            V2.73
--                  modified by chenxu
--            V2.73
--                  modified by guzhen
--            V2.75
--                  modified by lilei
--            V2.76
--                  modified by chenxu
--            V2.77
--                  modified by zhouzaihua
--            V2.79
--                  modified by wuyifan
--            V2.83
--                  modified by hehaiyan
--            V2.84
--                  modified by hanhongyun
--            V2.85
--                  modified by wuyifan
--            V2.86
--                  modified by zhouzaihua
--            V2.87
--                  modified by zhouzaihua
--            V2.88
--                  modified by liyuanze
--            V2.89
--                  modified by lidapeng
--            V2.90
--                  modified by luhongyu
--            V2.91
--                  modified by qilongfei
--            V2.92
--                  modified by guanqingyu
--            V2.93
--                  modified by xiejiayou
-- =================================================================
    "Strict(1)
            Loose(2)"                "The Direction Policy apply on."               n"Fix-packets(1)
            Fix-time(2)
            Random-packets(3)
            Random-time(4)
            "              ""
            BE(1)
            AF1(2)
            AF2(3)
            AF3(4)
            AF4(5)
            EF(6)
            CS6(7)
            CS7(8)
            ALL(9)
            queue10(10)
            queue11(11)
            queue12(12)
            queue13(13)
            queue14(14)
            queue15(15)
            queue16(16)
            queue17(17)
            queue18(18)
            queue19(19)
            queue20(20)
            queue21(21) 
            queue22(22)
            queue23(23)
            queue24(24)

            "               �"Reset Flag:                               
            DISABLE (0)
            RESET   (1)
            ENABLE  (2)           
            "               "The enable flag."                "The Direction Policy apply on."               �"Queue Type:                               
            BE (1)
            AF1(2)
            AF2(3)
            AF3(4)
            AF4(5)
            EF (6)
            "              {"The actions taken when packets conforming or exceeding the configured 
            CIR:
                pass (1),
                discard (2),
                remark IP Precedence (3),
                remark DSCP(4),
                remark Mpls Exp(5),                                               
                remark (6),     
                remark 8021p(7)
            "               "Type of IPCAR Rule. "                                                     "MODULE-IDENTITY" �"Huawei Industrial Base
              Bantian, Longgang
               Shenzhen 518129
               People's Republic of China
               Website: http://www.huawei.com
               Email: support@huawei.com
             " "201807251546Z" "201807031459Z" "201806011739Z" "201806011739Z" "201805101739Z" "201804261739Z" "201804251739Z" "201804191739Z" "201804161739Z" "201804161739Z" "201803161550Z" "201801311139Z" "201801231739Z" "201801221739Z" "201801151739Z" "201801021739Z" "201712211530Z" "201712070948Z" "201711101739Z" "201710231739Z" "201710171739Z" "201709021739Z" "201707290406Z" "201707251739Z" "201707041532Z" "201707011739Z" "201707011739Z" "201707011739Z" "201707011739Z" "201706161739Z" "201706131739Z" "201705061438Z" "201705041739Z" "201702251739Z" "201702241736Z" "201702241022Z" "201701161022Z" "201701131548Z" "201612211251Z" "201611291251Z" "201611171628Z" "201609291932Z" "201609211021Z" "201609031739Z" "201606201428Z" "201606011201Z" "201605311447Z" "201604211021Z" "201604211021Z" "201604051930Z" "201603221436Z" "201601191628Z" "201512142028Z" "201512041150Z" "201512021628Z" "201512021628Z" "201511261851Z" "201511261128Z" "201510231050Z" "201509161050Z" "201509081050Z" "201507161050Z" "201506061428Z" "201505201025Z" "201504241025Z" "201501281030Z" "201412241428Z" "201412231428Z" "201412161428Z" "201412161428Z" "201412151428Z" "201411031428Z" "201410101428Z" "201408151428Z" "201408071428Z" "201407301428Z" "201407231428Z" "201407101428Z" "201407091428Z" "201407021428Z" "201404241428Z" "201403311428Z" "201401221428Z" "201401181428Z" "201312161428Z" "201309291428Z" "201307291428Z" "201306031428Z" "201304271428Z" "MOD hwXQoSPortShapPercent" C"Add hwXQoSCarStatisticsExtTable And hwXQoSIfCarStatisticsExtTable" O"Add hwXQoSQppbPolicyStatisticsExtTable And hwXQoSQppbGlobalStatisticsExtTable" #"MOD hwXQosCarResourceServiceType " I"ADD hwXQoSHardPipeApplySQFailAlarm, hwXQoSHardPipeApplySQFailAlarmClear" ?"ADD  hwXACLFEIMemoryFullAlarm, hwXACLFEIMemoryFullAlarmResume" ,"ADD  hwXQoSQueueStatisticsMulticastObjects" ="ADD  hwXQoSIfCarDiscardAlarm, hwXQoSIfCarDiscardAlarmResume" ?"ADD  hwXACLFEIMemoryFullAlarm, hwXACLFEIMemoryFullAlarmResume" /"ADD  hwXQoSPfcTurnOff, hwXQoSPfcTurnOffResume" !"MOD  hwXQoSAclTcamResTotalNumbe" \"MOD  hwXQoSCpApplyPolicyName,hwXQoSCpCarActionPolicyName, hwXQoSCBPairResTrafficPolicyName" 1"ADD  hwXQoSPfcDeadLock, hwXQoSPfcDeadLockResume" 9"ADD  hwXQosQueueExcepAlarm, hwXQosQueueExcepAlarmResume" ,"MOD  hwXQoSPortQueueStatisticsQueueIndex, " ,"MOD  hwXQoSPortQueueStatisticsQueueIndex, " <"SNMPv2-TC.hwQoS OBJECT IDENTIFIER.hwXQoSIfWredCfgInfoEntry" �"The HUAWEI-XQoS-MIB contains objects to 
            Manage configuration and Monitor running state 
            for Class Based QoS feature." ""MOD  HwXQoSIfQueueRunInfoEntry, " K"ADD  hwXQoSIngressAgingDiscardAlarm, hwXQoSIngressAgingDiscardAlarmResume" F"MOD  hwXQoSHardPipeAlarm, hwXQoSSoftPipeAlarm, hwXQoSHardPipeBwAlarm" R"MODIFY  hwXQoSRedirectNextHopInvalidAlarm,hwXQoSRedirectNextHopInvalidAlarmClear" V"MODIFY  hwXQoSHardPipeAlarmTable,hwXQoSSoftPipeAlarmTable,hwXQoSHardPipeBwAlarmTable" I"ADD  hwXQosIngressPktsDiscardAlarm, hwXQoSIngressPktsDiscardAlarmResume" �"ADD  hwXQoSStormSuppressAlarm, hwXQoSStormSuppressAlarmResume, hwXQoSStormSuppressSlotAlarm, hwXQoSStormSuppressSlotAlarmResume" M"ADD  hwXQoSHardPipeAcBandWthOverAlarm,hwXQoSHardPipeAcBandWthOverAlarmClear" '"MODIFY  hwXQoSHardPipeStatisticsTable" H"ADD  hwXQoUnicastPktsDiscardAlarm, hwXQoSUnicastPktsDiscardAlarmResume" "ADD  hwXQoSPortShapPercent"�"ADD  hwXQoSIfCarCfgInfoTable, hwXQoSIfLrCfgInfoTable, hwXQoSIfQueueCfgInfoTable, hwXQoSIfQueueRunInfoTable, hwXQoSIfCarStatisticsTable, hwXQoSUserQueueResourceTable, hwXQoSUserGroupQueueResourceTable, hwXQoSSubPortQueueResourceTable, hwXQoSChannelResourceTable, hwXQoSTemplateResourceTable, hwXQoSCBPairResourceTable, hwXQoSBindingTrafficPolicyResourceTable, hwXQoSAclTcamResourceTable, hwXQosBoardCarResourceTable, hwXQoSPortQueueAlarmExTable " C"ADD  hwXQoSRcyPortPktsDropAlarm, hwXQoSRcyPortPktsDropAlarmResume" "ADD hwXQoSIfLrRealCir" M"ADD  hwXQoSPacketsDropInterfaceAlarm, hwXQoSPacketsDropInterfaceAlarmResume" ="ADD  hwXQoSStormControlAlarm, hwXQoSStormControlAlarmResume" $"MOD  hwXQoSCarStatisticsSlotNumber" O"ADD  hwXQoSUnicastPktsCongestionAlarm, hwXQoSUnicastPktsCongestionAlarmResume" *"ADD hwXQoSSubPortQueueResPoolIndex TABLE" /"ADD hwXQoSHardPipeAccessStatisticsTable TABLE" "ADD hwXQoSCarObjects" %"ADD hwXQoSHardPipeBwAlarmTable NODE" ("ADD add hwXQOSQueueBufferAlarmDiscard " +"Modify hwXQoSCpDefendDiscardedPacketAlarm" 1"ADD hwXQoSHardPipeApplyFailAlarm at 2016-09-21." �"ADD  hwXQoSMulticastPktsDiscardAlarm, hwXQoSMulticastPktsDiscardAlarmResume, hwXQoSMulticastPktsDiscardInterfaceAlarm, hwXQoSMulticastPktsDiscardInterfaceAlarmResume" $"ADD hwXQoSSoftPipeAlarmTable NODE " ""modify hwXQoSIfQueueCfgInfoTable" ?"add hwXQoSQppbPolicyEventLog, hwXQoSQppbPolicyEventLogObjects" -"MODIFY hwXQoSIfQueueCfgCosType at 2016-8-8." ""MODIFY hwXQoSPortShapingPbsValue" 9"add hwXQoSGlbQPPBEventLog, hwXQoSGlbQPPBEventLogObjects" c"add VB node of hwXQoSDefendPortCarPassedPacketAlarm and hwXQoSDefendPortCarPassedPacketAlarmClear" $"ADD hwRemoteMirrRecoverFailNotify " !"ADD hwXQosBoardCarResourceTable" _"add VB node of hwXQoSCpDefendDiscardedPacketAlarm and hwXQoSCpDefendDiscardedPacketAlarmClear" #"ADD hwXQoSIf8021PCarCfgInfoTable " ("modify hwXQoSBufferOverrunHistoryEntry" :"modify hwXQoSIfQPPBDelAlarm, hwXQoSIfQPPBDelAlarmObjects" ""add hwXQoSBufferStatisticObjects" 7"add hwXQoSIfQPPBDelAlarm, hwXQoSIfQPPBDelAlarmObjects" p"add hwXQoSQppbPolicyApplyFailAlarm, hwXQoSQppbPolicyApplyFailAlarmClear, hwXQoSQppbPolicyApplyFailAlarmObjects" &"add hwXQoSTrunkProfileNotEffectAlarm" ]"renew description of  hwXQoSRuleFailAlarm, hwXQoSRuleFailInfo and hwXQoSRuleFailAlarmCancel" q"rename hwXQoSRuleFaileAlarm and hwXQoSRuleFaileAlarmCancel to hwXQoSRuleFailAlarm and hwXQoSRuleFailAlarmCancel" ."CP-CAR Add hwXQoSCpDefendProtocolDescirption" "Modify hwXQoSStormControlTrap" e"add trap node of hwXQoSDefendPortCarPassedPacketAlarm and hwXQoSDefendPortCarPassedPacketAlarmClear"  "ADD hwXQoSChannelResourceTable" >"ADD hwXQoSFCoEPriorityAlarm and hwXQoSFCoEPriorityAlarmClear" O"Modify hwXQoSVpnAclConflictAlarm, hwXQoSVpnAclConflictAlarmClear information " b"ADD hwXQoSVpnAclConflictAlarm, hwXQoSVpnAclConflictAlarmClear and hwXQoSVpnAclConflictAlarmTable" <"ADD hwXQoSStormControlTrapExt and hwXQoSStormControlIfName" ;"ADD  hwXQoSIfLrDiscardAlarm, hwXQoSIfLrDiscardAlarmResume" >"ADD hwXQoSHardPipeAbilityTable and hwXQoSHardPipeConfigTable" N"DEL hwXQoSBaFrdePhbTable and hwXQoSBaFrdeMapTable and hwXQoSIfTrustFrdeTable" #"MOD hwXQoSHardPipeAlarmTable NODE" k"ADD  hwXQOSQueueBufferOverrunAlarm, hwXQOSQueueBufferOverrunResume and hwXQOSQueueBufferOverrunAlarmTable"%"ADD  hwXQoSUserQueueResourceTable, hwXQoSUserGroupQueueResourceTable,
          hwXQoSSubPortQueueResourceTable,  hwXQoSChannelResourceTable,
          hwXQoSTemplateResourceTable,  hwXQoSCBPairResourceTable,
         hwXQoSBindingTrafficPolicyResourceTable,  and  hwXQoSAclTcamResourceTable" N"ADD hwXQoSBaFrdePhbTable and hwXQoSBaFrdeMapTable and hwXQoSIfTrustFrdeTable" #"ADD hwXQoSHardPipeStatisticsTable" %"MOD hwXQoSRuleFaileAlarmCancel NODE" "MOD hwXQoSProfileName NODE" ,"MOD hwXQoSBufferUsageStatisticsObjects OID" !"ADD hwXQoSPortQueueAlarmExTable" B"MOD hwXQoSIfQueueRunInfoTable and hwXQoSPortQueueStatisticsTable" 0"MOD hwXQoSCarTable and hwXQoSIfCarCfgInfoTable" "MOD hwXQoSCarTable OID" "ADD hwXQosCarResourceTable" >"MOD hwXQoSProfileObjects and hwXQoSPortQueueAlarmObjects OID" 3"ADD hwXQoSPortQueueStatisticsQueuePercentage NODE"                       :"A table of diff-server domain configuration information."                       '"Diff-server domain Information Entry."                       }"The value of this object identifies the index of a DS domain.The value ranges from 0 to 7.This object has no default value."                       �"This object indicates the name of a DS domain.The value of this object is a string of 1 to 8 ASCII characters in plain text and complies with the format of the command line.The object has no default value."                       �"The value of this object identifies the row status.The value of this object can be any of the following:CreateAndGo(4),Destroy(6),Active(1).The object has no default value."                       C"A table of diff-serve domain 8021p phb configuration information."                       >"Diff-serve domain 8021p phb Configuration Information Entry."                       N"The value of this object identifies the index of the Per-Hop Behavior (PHB)."                       W"The value of this object identifies the 802.1p priority.The value ranges from 0 to 7."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:CS7(7),CS6(6),EF(5),AF4(4),AF3(3),AF2(2),AF1(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       "The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1)."                       C"A table of diff-serve domain 8021p map configuration information."                       >"Diff-serve domain 8021p map Configuration Information Entry."                       P"The value of this object identifies the mapping index.The value starts from 0."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:
CS7(7),CS6(6),EF(5),AF4(4),AF3(3),AF2(2),AF1(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       w"The value of this object identifies the 8021.p priority.The value ranges from 0 to 7.The object has no default value."                       �"The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1).The object has no default value."                       B"A table of diff-serve domain DSCP phb configuration information."                       ="Diff-serve domain DSCP phb Configuration Information Entry."                       N"The value of this object identifies the index of the Per-Hop Behavior (PHB)."                       X"The value of this object identifies the priority of DSCP.The value ranges from 0 to 7."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:
CS(7),CS(6),EF(5),AF(4),AF(3),AF(2),AF(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       "The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1)."                       B"A table of diff-serve domain Dscp map configuration information."                       ="Diff-serve domain Dscp map Configuration Information Entry."                       8"The value of this object identifies the mapping index."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:
CS7(7),CS6(6),EF(5),AF4(4),AF3(3),AF2(2),AF1(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       R"The value of this object identifies the DSCP value.The value ranges from 0 to 7."                       "The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1)."                       A"A table of diff-serve domain Exp phb configuration information."                       <"Diff-serve domain Exp phb Configuration Information Entry."                       7"The value of this object identifies the index of PHB."                       c"The value of this object identifies the EXP field of an MPLS packet.The value ranges from 0 to 7."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:
CS7(7),CS6(6),EF(5),AF4(4),AF3(3),AF2(2),AF1(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       "The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1)."                       A"A table of diff-serve domain Exp map configuration information."                       <"Diff-serve domain Exp map Configuration Information Entry."                       8"The value of this object identifies the mapping index."                       �"The value of this object identifies CoS, that is, the scheduling priority.The value can be any of the following:CS7(7),CS6(6),EF(5),AF4(4),AF3(3),AF2(2),AF1(1),BE(0)."                       �"The value of this object identifies the color of the packet, that is, the discarding priority.The value can be any of the following:Green(0),Yellow(1),Red(2)."                       d"The value of this object identifies the EXP field of the MPLS packet.The value ranges from 0 to 7."                       "The value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),Destroy(6),Active(1)."                       "Trust diff-serve domain."                       >"Policy applied on interface Configuration Information Entry."                       :"The value of this object identifies the interface index."                       C"The value of this object identifies the VLAN ID of the interface."                       �"This object indicates the name of the DS domain.The value of the object ranges from 1 to 31.The name cannot contain Chinese characters."                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4), Destroy(6),Active(1)."                       N"End vlan ID.
            -1 can't be set.
            0 is the default value"                       "Trust diff-serve domain."                       >"Policy applied on interface Configuration Information Entry."                       :"The value of this object identifies the interface index."                       C"The value of this object identifies the VLAN ID of the interface."                       �"The value of this object identifies whether the Layer 2 simple stream classification is enabled.The value can be either of the following:Distrust(1),Trust(2).The object has no default value."                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),
Destroy(6),Active(1).The object has no default value."                       T"A table of diff-serve domain AtmQos ServiceType+Clp phb configuration information."                       O"Diff-serve domain AtmQos ServiceType+Clp phb Configuration Information Entry."                       "Atm Qos ServiceType."                       "Atm Qos Clp."                       "Cos of AtmQos."                       "Colour of AtmQos."                       �"RowStatus. Three actions are used: active,                                                          
            createAndGo, destroy"                       I"A table of diff-serve domain Atm Qos Clp map configuration information."                       D"Diff-serve domain Atm Qos Clp map Configuration Information Entry."                       %"Atm Qos index in diff-serve domain."                       "Cos of AtmQos."                       "Colour of AtmQos."                       "AtmQos Clp."                       �"RowStatus. Three actions are used: active,                                                          
            createAndGo, destroy"                       "Trust diff-serve domain."                       B"Policy applied on pvc interface Configuration Information Entry."                       "Atm Interface Index."                       "Atm Pvc Vpi"                       "Atm Pvc Vci"                       "Name of diff-serve domain."                       �"RowStatus. Three actions are used: active,                                                          
            createAndGo, destroy"                       "Trust diff-serve domain."                       B"Policy applied on pvp interface Configuration Information Entry."                       "Atm Interface Index."                       "Atm Pvp Vpi"                       "Name of diff-serve domain."                       �"RowStatus. Three actions are used: active,                                                          
            createAndGo, destroy"                       "A table of diff-serve domain 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri phb configuration information."                       z"Diff-serve domain 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri phb Configuration Information Entry."                       �" 8021p (1),
                dscp (2),
                mplsExp(3),
                ipPri(4),
                hqosVlan8021p(5),
                hqosDscp(6),
                hqosMplsExp(7),
                hqosIpPri(8),
                vlan8021pInbound(9)."                       P"8021p / Dscp/Exp / IpPri / hqosVlan8021p / hqosDscp / hqosMplsExp / hqosIpPri."                       Y"Cos of 8021p / Dscp / Exp / IpPri / hqosVlan8021p / hqosDscp / hqosMplsExp / hqosIpPri."                       N"Colour of 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "A table of diff-serve domain 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri map configuration information."                       z"Diff-serve domain 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri map Configuration Information Entry."                       �" 8021p (1),
                dscp (2),
                mplsExp(3),
                ipPri(4),
                hqosVlan8021p(5),
                hqosDscp(6),
                hqosMplsExp(7),
                hqosIpPri(8)."                       K"Cos of 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri."                       N"Colour of 8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri."                       D"8021p/Dscp/Exp/IpPri/hqosVlan8021p/hqosDscp/hqosMplsExp/hqosIpPri."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "Trust diff-serve domain."                       >"Policy applied on interface Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       X"start Vlan ID.
                -1 can't be set.
                0 is the default value"                       V"end Vlan ID.
                -1 can't be set.
                0 is the default value"                       _"vlan8021p (1),
                dscp (2),
                mplsExp(3),
                ipPri(4)"                       "The trust 802.1p action "                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "Enable dei."                       >"Policy applied on interface Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       X"start Vlan ID.
                -1 can't be set.
                0 is the default value"                       V"end Vlan ID.
                -1 can't be set.
                0 is the default value"                       R" The enable dei action 
                enabled(1),
                unenabled(2)"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "Enable Remark."                       >"Policy applied on interface Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       X"start Vlan ID.
                -1 can't be set.
                0 is the default value"                       V"end Vlan ID.
                -1 can't be set.
                0 is the default value"                       U" The enable remark action 
                enabled(1),
                unenabled(2)"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "PHB enable table."                       6"A table of diff-serve domain phb enable information."                       $"Interface Index, equal to ifIndex."                       X"start Vlan ID.
                -1 can't be set.
                0 is the default value"                       V"end Vlan ID.
                -1 can't be set.
                0 is the default value"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       �" This table is used to configure mapping between the 802.1p priorities or the Differentiated Services
                CodePoint (DSCP) values of upstream packets in the current QinQ domain and service classes. "                       �" This table is used to configure mapping between the 802.1p priorities or the Differentiated Services
                CodePoint (DSCP) values of upstream packets in the current QinQ domain and service classes. "                       &" This object indicates a PHB index. "                       ?" This object indicates the 802.1p priority or the DSCP value."                       �" This object indicates the color for marking a type of packets.
             The value can be:
             1: Green
             2: Yellow
             3: Red 
           "                       g" The value of this object identifies the CoS.
             The value ranges from 0 to 7. 
           "                       v"This object indicates the row status.Currently, three row statuses are supported: Active, CreateAndGo, and Destroy. "                       c" This table is used to map the priorities of PPP packets to the internal precedence of a router. "                       c" This table is used to map the priorities of PPP packets to the internal precedence of a router. "                       �" This object indicates the CoS of a router.
             The value can be:
            1: BE  
            2: AF1
            3. AF2
            4: AF3
            5: AF4
            6: EF
            7: CS6
            8: CS7 
           "                       �" This object indicates the color for marking PPP packets.
             The value can be:
             1: Green
             2: Yellow
             3; Red
           "                       u"This object indicates the row status.Currently, three row statuses are supported: Active, CreateAndGo, and Destroy."                       `" This table is used to configure upstream traffic to enter specified queues on the interface. "                       `" This table is used to configure upstream traffic to enter specified queues on the interface. "                       -" This object indicates the interface index."                       \" This object indicates the CoS of the queue that upstream traffic on an interface enters. "                       v"This object indicates the row status.Currently, three row statuses are supported: Active, CreateAndGo, and Destroy. "                       d" This table is used to prohibit the function of checking the PHB table on the outgoing interface. "                       d" This table is used to prohibit the function of checking the PHB table on the outgoing interface. "                       ." This object indicates the interface index. "                       \" This object indicates the CoS of the queue that upstream traffic on an interface enters. "                       v"This object indicates the row status.Currently, three row statuses are supported: Active, CreateAndGo, and Destroy. "                       �" This table is sued to enable the drop eligible indicator (DEI) capability of the packets
                on an interface and in a specified VLAN range. "                       �" This table is sued to enable the drop eligible indicator (DEI) capability of the packets 
                on an interface and in a specified VLAN range. "                       ." This object indicates the interface index. "                       n" The value of this object identifies the VLAN ID.
             The value ranges from 1 to 4094. 
           "                       f" The value of this object identifies whether to enable the DEI capability of the packets on a VLAN. "                       u"This object indicates the row status.Currently, three row statuses are supported: Active, CreateAndGo, and Destroy."                       " hwXQoSPicForwardingTable "                       " hwXQoSPicForwardingEntry "                        " hwXQoSPicForwardingInterface "                       !" hwXQoSPicForwarding8021pValue "                       " hwXQoSPicForwardingPriority "                       �"
            Row status. The value ranges from 1 to 6 but usually 4 and 6 are used.
            createAndGo[4] - create a row.        
            destroy[6] -delete a row.       
          "                       h" This table is used to configure traffic policing on a Layer 3 main interface or a Layer 2 interface. "                       h" This table is used to configure traffic policing on a Layer 3 main interface or a Layer 2 interface. "                       -" This object indicates the interface index."                       �" This object indicates the traffic direction to which CAR applies on an interface. 
            The value can be one of the following: 
            (1)Inbound   
            (2)outbound.
          "                       \" This object indicates the value of VLAN ID.
            The value ranges from 1 to 4094. "                       ?" The value of this object identifies the CIR on an interface."                       ?" The value of this object identifies the PIR on an interface."                       ?" The value of this object identifies the CBS on an interface."                       ?" The value of this object identifies the PBS on an interface."                       H" This object indicates the action for packets marked green.
          "                      " This object indicates the service class of the packets marked in green. The value can be one of the following: 
            1: BE 
            2: AF1
            3. AF2
            4: AF3
            5: AF4
            6: EF
            7: CS6
            8: CS7
            9: null."                       �" This object indicates the color that green packets are to be re-marked. The value can be one of the following: 
            1: green
            2: yellow
            3: red
            4: null."                       >" This object indicates the action for packets marked yellow."                      " This object indicates the service class of the packets marked yellow. The value can be one of the following: 
            1: BE 
            2: AF1
            3. AF2
            4: AF3
            5: AF4
            6: EF
            7: CS6
            8: CS7
            9: null."                       �" This object indicates the color that yellow packets are to be re-marked. The value can be one of the following: 
            1: green
            2: yellow
            3: red
            4: null."                       <" This object indicates the action for packets marked red. "                      "This object indicates the service class of the packets marked red. The value can be one of the following: 
           1: BE 
           2: AF1
           3. AF2
           4: AF3
           5: AF4
           6: EF
           7: CS6
           8: CS7
           9: null."                       �" This object indicates the color that red packets are to be re-marked. The value can be one of the following: 
            1: green
            2: yellow
            3: red
            4: null. "                       '"This object indicates the CAR status."                       0"This object indicates the CIR of an interface."                       1" This object indicates the PIR of an interface."                       1" This object indicates the CBS of an interface."                       1" This object indicates the PBS of an interface."                       K" This table is used to limit the rate at which the interface sends data. "                       S" This table is used to limit the rate at which packets are sent on an interface. "                       -" This object indicates the interface index."                       �" The value of this object identifies the shaping rate.
            The maximum value equals the interface bandwidth.
             0 means not configured shaping rate."                       �" This object indicates the PBS.
            The value is an integer that ranges from 1 to 2147483646, in bytes.
            the default pbs-value is 131072. 
          "                       n" The percentage-value of this object identifies the shaping rate, 0 means not configured shaping percentage."                       1"This object indicates the row status indicator."                       " hwXQoSQueueTable "                       " hwXQoSQueueEntry "                       " hwXQoSQueueInterfaceIndex "                       " hwXQoSQueueServiceClass "                       " hwXQoSQueueCirValue "                       " hwXQoSQueueCirPercentage "                       " hwXQoSQueueDirection "                       �"
            Row status. The value ranges from 1 to 6 but usually 4 and 6 are used.
            createAndGo[4] - create a row.        
            destroy[6] -delete a row.       
          "                       6"This table displays CAR statistics on an interface. "                       C" This table is used to query the CAR statistics on an interface. "                       -" This object indicates the interface index."                       �"This object indicates the traffic direction to which CAR applies. 
           The value can be one of the following:
           inbound(1)   
           outbound(2).
          "                       �" The value of this object identifies the VLAN ID of an interface where the CAR statistics are queried.
            The value ranges from 1 to 4094. "                       |" This object indicates the ID of the board where CAR statistics are queried. 
            The value ranges from 0 to 128. "                       6" This object indicates the resetting of statistics. "                       :" This object indicates the number of forwarded packets. "                       5" This object indicates the number of passed bytes. "                       :" This object indicates the number of discarded packets. "                       8" This object indicates the number of discarded bytes. "                       B" This object indicates the rate at which packets are forwarded. "                       ." This object indicates the byte pass rate.  "                       B" This object indicates the rate at which packets are discarded. "                       ." This object indicates the byte drop rate.  "                       Z" This table is used to set the limit on the rate at which IGMP packets are transmitted. "                       Z" This table is used to set the limit on the rate at which IGMP packets are transmitted. "                       4" This object indicates the index of an interface. "                       Y" This object indicates an outer VLAN tag.
            The value ranges from 1 to 4094. "                       `" This object indicates the start inner VLAN tag.
            The value ranges from 1 to 4094. "                       ^" This object indicates the end inner VLAN tag.
            The value ranges from 1 to 4094. "                       z" The value of this object identifies the type of packets.
             The value can be:
             1: IGMP
          "                       d" This object indicates the packet sending rate.
            The value ranges from 32 to 10000000. "                       i" This object indicates the CBS of the sent packets.
            The value ranges from 100 to 33554432. "                       �"
            Row status. The value ranges from 1 to 6 but usually 4 and 6 are used.
            createAndGo[4] - create a row.        
            destroy[6] -delete a row.       
          "                       ?" This table is used to query the statistics of class queues. "                       ?" This table is used to query the statistics of class queues. "                       ." This object indicates the interface index. "                       �" This object indicates the traffic direction whose statistics are queried. 
              The value can be one of the following:
              inbound(1) 
             outbound(2)."                      )" This object indicates the priority of a class queue where statistics are queried.
            The value can be:
            1 be
            2 af1
            3 af2
            4 af3
            5 af4
            6 ef
            7 cs6
            8 cs7
            9 total        
            "                       ?" This object indicates the flag of clearing the statistics.  "                       7" This object indicates the number of passed packets. "                       8" This object indicates the number of forwarded bytes. "                       :" This object indicates the number of discarded packets. "                       6" This object indicates the number of dropped bytes. "                       M" The value of this object identifies the number of discarded tail packets. "                       D"This object indicates the number of bytes discarded by tail drop. "                       Y" The value of this object identifies the number of packets that are discarded by WRED. "                       ?"This object indicates the number of bytes discarded by WRED. "                       /" This object indicates the packet pass rate. "                       @" This object indicates the rate at which bytes are forwarded. "                       /" This object indicates the packet drop rate. "                       @" This object indicates the rate at which bytes are discarded. "                       :" This object indicates the tail packet discarding rate. "                       M" This object indicates the rate at which bytes are discarded by tail drop. "                       9" This object indicates the WRED packet discarding rate."                       7" This object indicates the WRED byte discarding rate."                       6" This object indicates the port traffic information."                       C" This object indicates the physical bandwidth of a QoS interface."                       :"This object indicates the percentage of the queue usage."                       5" This object indicates the total number of packets."                       3" This object indicates the total number of bytes."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       1" This table is used to display QPPB statistics."                       !"hwXQoSQppbPolicyStatisticsEntry"                       )"This object indicates the qos-local-id."                       �" This object indicates the direction where statistics are queried.
              The value can be:
              1: inbound
              2: outbound  "                       R" This object indicates the index of the interface where statistics are queried. "                       4" This object indicates the statistics are reset.  "                       I" This object indicates the number of packets matching the QPPB policy. "                       6" This object indicates the number of matched bytes. "                       :" This object indicates the number of forwarded packets. "                       5" This object indicates the number of passed bytes. "                       :" This object indicates the number of discarded packets. "                       5" This object indicates the number of droped bytes. "                       F"This object indicates the rate of packets matching the QPPB policy. "                       4" This object indicates the rate of matched bytes. "                       2"qos phb enable <domain-name> [ vlan ] [vlan-id]."                       "hwXQoSIfPhbEnableEntry."                       :"The value of this object identifies the interface index."                       C"The value of this object identifies the VLAN ID of the interface."                       �"This object indicates the name of the DS domain.The value of the object ranges from 1 to 31.The name cannot contain Chinese characters."                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4), Destroy(6),Active(1)."                       ("enable to remark DSCP of the payload. "                       "hwXQoSIfRemarkDscpEntry."                       :"The value of this object identifies the interface index."                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4), Destroy(6),Active(1)."                       ."This table displays global QPPB statistics. "                       !"hwXQoSQppbGlobalStatisticsEntry"                       4" This object indicates the name of a QPPB policy. "                       *"This object indicates the qos-local-id ."                       �" This object indicates the traffic direction for which global QPPB statistics are queried. 
              The value can be one of the following: 
              inbound (1) 
              outbound (2).  "                       4" This object indicates the statistics are reset.  "                       I" This object indicates the number of packets matching the QPPB policy. "                       6" This object indicates the number of matched bytes. "                       ," hwXQoSQppbGlobalStatisticsPassedPackets. "                       5" This object indicates the number of passed bytes. "                       :" This object indicates the number of discarded packets. "                       5" This object indicates the number of droped bytes. "                       G" This object indicates the rate of packets matching the QPPB policy. "                       4" This object indicates the rate of matched bytes. "                       i" This table is used to display statistics about outgoing packets on the PW-side and AC-side hard pipe. "                       G" This table is used to query the statistics of hard pipe statistics. "                       2" This object indicates the hard pipe interface. "                       M" This object indicates the flag of clearing hard pipe traffic statistics.  "                       K" This object indicates the number of packets forwarded by the hard pipe. "                       6" This object indicates the number of  passed bytes. "                       J" This object indicates the number of packets discarded by the hard pipe."                       8" This object indicates the number of discarded bytes. "                       J" This object indicates the rate at which the hard pipe forwards packets."                       ?" The value of this object identifies the rate of pass bytes. "                       J" This object indicates the rate at which the hard pipe discards packets."                       C" The value of this object identifies the rate of discarded bytes."                       B" This table is used to query the bandwidth of hard pipe config. "                       B" This table is used to query the bandwidth of hard pipe config. "                       ." This object indicates the interface index. "                       >" This object indicates the bandwidth of configed hard pipe. "                       ?" This table is used to query the  hard pipe ability of port. "                       ?" This table is used to query the  hard pipe ability of port. "                       ." This object indicates the interface index. "                       8" This object indicates the hard pipe ability of port. "                       M" This table is used to query the hard pipe statistics of access interface. "                       M" This table is used to query the hard pipe statistics of access interface. "                       5" This object indicates the access interface index. "                       �" This object indicates the direction where access hard pipe statistics are queried.
              The value can be:
              1: inbound
              2: outbound  "                       4" This object indicates the statistics are reset.  "                       7" This object indicates the number of passed packets. "                       6" This object indicates the number of  passed bytes. "                       9" This object indicates the number of discarded packets."                       8" This object indicates the number of discarded bytes. "                       @" The value of this object identifies the rate of pass packets."                       ?" The value of this object identifies the rate of pass bytes. "                       E" The value of this object identifies the rate of discarded packets."                       C" The value of this object identifies the rate of discarded bytes."                       1" This table is used to display QPPB statistics."                       $"hwXQoSQppbPolicyStatisticsExtEntry"                       )"This object indicates the qos-local-id."                       �" This object indicates the direction where statistics are queried.
              The value can be:
              1: inbound
              2: outbound  "                       R" This object indicates the index of the interface where statistics are queried. "                       4" This object indicates the statistics are reset.  "                       u" This object indicates the number of packets matching the QPPB policy, which is lower 32 bits of the total number. "                       u" This object indicates the number of packets matching the QPPB policy, which is upper 32 bits of the total number. "                       b" This object indicates the number of matched bytes, which is lower 32 bits of the total number. "                       b" This object indicates the number of matched bytes, which is upper 32 bits of the total number. "                       f" This object indicates the number of forwarded packets, which is lower 32 bits of the total number. "                       f" This object indicates the number of forwarded packets, which is upper 32 bits of the total number. "                       a" This object indicates the number of passed bytes, which is lower 32 bits of the total number. "                       a" This object indicates the number of passed bytes, which is upper 32 bits of the total number. "                       f" This object indicates the number of discarded packets, which is lower 32 bits of the total number. "                       f" This object indicates the number of discarded packets, which is upper 32 bits of the total number. "                       a" This object indicates the number of droped bytes, which is lower 32 bits of the total number. "                       a" This object indicates the number of droped bytes, which is upper 32 bits of the total number. "                       r"This object indicates the rate of packets matching the QPPB policy, which is lower 32 bits of the total number. "                       r"This object indicates the rate of packets matching the QPPB policy, which is upper 32 bits of the total number. "                       `" This object indicates the rate of matched bytes, which is lower 32 bits of the total number. "                       `" This object indicates the rate of matched bytes, which is upper 32 bits of the total number. "                       ."This table displays global QPPB statistics. "                       $"hwXQoSQppbGlobalStatisticsExtEntry"                       4" This object indicates the name of a QPPB policy. "                       *"This object indicates the qos-local-id ."                       �" This object indicates the traffic direction for which global QPPB statistics are queried. 
              The value can be one of the following: 
              inbound (1) 
              outbound (2).  "                       4" This object indicates the statistics are reset.  "                       u" This object indicates the number of packets matching the QPPB policy, which is lower 32 bits of the total number. "                       u" This object indicates the number of packets matching the QPPB policy, which is upper 32 bits of the total number. "                       b" This object indicates the number of matched bytes, which is lower 32 bits of the total number. "                       b" This object indicates the number of matched bytes, which is upper 32 bits of the total number. "                       W" hwXQoSQppbGlobalStatisticsPassedPackets, which is lower 32 bits of the total number."                       X" hwXQoSQppbGlobalStatisticsPassedPackets, which is upper 32 bits of the total number. "                       a" This object indicates the number of passed bytes, which is lower 32 bits of the total number. "                       a" This object indicates the number of passed bytes, which is upper 32 bits of the total number. "                       f" This object indicates the number of discarded packets, which is lower 32 bits of the total number. "                       f" This object indicates the number of discarded packets, which is upper 32 bits of the total number. "                       a" This object indicates the number of droped bytes, which is lower 32 bits of the total number. "                       a" This object indicates the number of droped bytes, which is upper 32 bits of the total number. "                       s" This object indicates the rate of packets matching the QPPB policy, which is lower 32 bits of the total number. "                       s" This object indicates the rate of packets matching the QPPB policy, which is upper 32 bits of the total number. "                       `" This object indicates the rate of matched bytes, which is lower 32 bits of the total number. "                       `" This object indicates the rate of matched bytes, which is upper 32 bits of the total number. "                       6"This table displays CAR statistics on an interface. "                       C" This table is used to query the CAR statistics on an interface. "                       -" This object indicates the interface index."                       �"This object indicates the traffic direction to which CAR applies. 
           The value can be one of the following:
           inbound(1)   
           outbound(2).
          "                       �" The value of this object identifies the VLAN ID of an interface where the CAR statistics are queried.
            The value ranges from 1 to 4094."                       {" This object indicates the ID of the board where CAR statistics are queried. 
            The value ranges from 0 to 128."                       5" This object indicates the resetting of statistics."                       e" This object indicates the number of forwarded packets, which is lower 32 bits of the total number."                       e" This object indicates the number of forwarded packets, which is upper 32 bits of the total number."                       `" This object indicates the number of passed bytes, which is lower 32 bits of the total number."                       `" This object indicates the number of passed bytes, which is upper 32 bits of the total number."                       e" This object indicates the number of discarded packets, which is lower 32 bits of the total number."                       e" This object indicates the number of discarded packets, which is upper 32 bits of the total number."                       c" This object indicates the number of discarded bytes, which is lower 32 bits of the total number."                       c" This object indicates the number of discarded bytes, which is upper 32 bits of the total number."                       m" This object indicates the rate at which packets are forwarded, which is lower 32 bits of the total number."                       m" This object indicates the rate at which packets are forwarded, which is upper 32 bits of the total number."                       X" This object indicates the byte pass rate, which is lower 32 bits of the total number."                       X" This object indicates the byte pass rate, which is upper 32 bits of the total number."                       m" This object indicates the rate at which packets are discarded, which is lower 32 bits of the total number."                       m" This object indicates the rate at which packets are discarded, which is upper 32 bits of the total number."                       X" This object indicates the byte drop rate, which is lower 32 bits of the total number."                       X" This object indicates the byte drop rate, which is upper 32 bits of the total number."                           �"This table displays information about the committed access rate (CAR) configuration on the interface. The configuration limits the traffic rate on the interface."                       &"CAR Configuration Information Entry."                       ,"This object indicates the interface index."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       L"This object indicates the upstream and downstream traffic on an interface."                       u"Committed Information Rate. Unit: kbps.
            software QoS: 8..155000
            hardware QoS: 100..10000000"                       s"Committed Burst Size. Unit: byte
            software QoS: 1875..19375000 
            hardware QoS: 64..33554432"                       �"Excess Burst Size. Unit: byte. 0..19375000
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS.
            -1 can't be set."                       �"Peak Information Rate. Unit: kbps. 100..10000000
            Only hardware QoS support this node.
            -1 is returned only when getting value from software QoS.
            -1 can't be set.
            0 is the default value"                       �"Peak Burst Size. Unit: byte.
            64..33554432.
            Only hardware QoS support this node.
            -1 is returned only when getting value from software QoS.
            -1 can't be set.
            0 is the default value"                      ["Green Action:
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP.
            "                      y"The value is to remark When green action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      t"Action for yellow packets:
             Unavailable (-1), 
             pass (1), 
             discard (2), 
             mark IP priority (3), 
             mark DSCP (4), 
             mark MPLS EXP (5),
             and mark (6). 
             Only the hardware service quality supports this object, and the hardware service quality supports pass, discard, and mark."                      z"The value is to remark When yellow action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      h"Action for red packets: 
             pass (1),
             discard (2), 
             mark IP priority (3),
            mark DSCP (4),
            mark MPLS EXP (5),
            and mark (6).
            Hardware service quality: pass, discard, and mark. Software service quality: pass, discard, mark IP priority, mark DSCP, and mark MPLS EXP.
            "                      w"The value is to remark When red action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                        "This object indicates the CIR."                       #"Committed Burst Size. Unit: byte."                        "This object indicates the PIR."                       "Peak Burst Size. Unit: byte."                       ."A table of Mirror configuration information."                       )"Mirror Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       D"Policy direction:
            inbound (1)
            outbound (2)"                        "The mirror observe port number"                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       ,"A table of Urpf configuration information."                       '"Urpf Configuration Information Entry."                       Z"The value of this object identifies the interface index.The object has no default value."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       �"The value of this object identifies the control type of URPF.The value can be either of the following:Strict(1)
,Loose(2).The object has no default value."                      #"The value of this object identifies whether the default route is allowed according to URPF.The value can be either of the following:
            0: indicates that the default route is not allowed.
            1: indicates that the default route is allowed.
The object has no default value."                       �"This value of this object identifies the row status.The value can be any of the following:Active(1),CreateAndGo(4),Destroy(6).The object has no default value."                       0"A table of Sampling configuration information."                       +"Sampling Configuration Information Entry."                       ."Indicates the index of a sampling interface."                       0"Indicates the VLAN ID of a sampling interface."                       �"Indicates whether the interface is an inbound interface or an outbound interface.
            inbound (1)
            outbound (2)"                       �"Indicates the sampling type.
            Fix-packets(1)
            Fix-time(2)
            Random-packets(3)
            Random-time(4)
            "                       #"Indicates the sampling parameter."                       \"Indicates the row status. Three actions are used: active,
            createAndGo, destroy"                       5"This table limits the sending rate on an interface."                       %"Lr Configuration Information Entry."                       ,"This object indicates the interface index."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       U"This object indicates the CIR. The value ranges from 1 to the interface bandwidth. "                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4),
Destroy(6),Active(1).The object has no default value."                        "This object indicates the CBS."                       +"The inbound physical bandwidth Unit: bps."                       ,"The outbound physical bandwidth Unit: bps."                       )"The inbound actual bandwidth Unit: bps."                       *"The outbound actual bandwidth Unit: bps."                       �"This object indicates the CIR value, which ranges from 1 to the interface bandwidth. There is no default value. This object is used to replace the hwXQoSIfLrCir object."                       8"This table is used to query port queue configurations."                       ,"Qos queue Configuration Information Entry."                       ,"This object indicates the interface index."                       -"Vlan ID.
            0 is the default value"                       T"This object indicates the traffic direction in which queue statistics are queried."                       �"The value of this object identifies CoS of the queue.The value ranges from 1 to 8. CS(8),CS(7),EF(6),AF(5),AF(4),AF(3),AF(2),BE(1).The default value is BE(1). "                       �"The queue priority of PQ queue mode. 
            The value can be any of the following:
                PQ(1)
                WFQ(2)
                LPQ(3)"                       {"The value of this object identifies CIR of the queue.The value ranges from 0 to 10000000.The object has no default value."                       F"This object indicates the PIR. The value ranges from 0 to 10000000. "                       "The qos queue cir-percentage."                       8"This object indicates the proportion of the queue PIR."                       +"The queue weight of wrr or drr queue mode"                       �"The value of this object identifies the scheduling mode for queues.The value can be either of the following:
pq(1),wrr(3),wfq(4),default(5).The NE40E can support either of the following value:pq(1),wfq(4).The default value is default(5). "                       �"This value of this object identifies the row status.The value can be any of the following:CreateAndGo(4), Destroy(6),Active(1).The object has no default value."                       /"A table of Observe configuration information."                       *"Observe Configuration Information Entry."                       "The Observe number "                       $"Interface Index, equal to ifIndex."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       ,"A table of Wred configuration information."                       '"Wred Configuration Information Entry."                       "The Wred queue index "                       D"Policy direction:
            inbound (1)
            outbound (2)"                       ."IP-Prec Based (1)
            DSCP Based (2)"                        "The Wred Lowlimit. unit:packet"                        "The Wred Highlimit.unit:packet"                       "The Wred Discard Probability."                       $"The Wred High Discard Probability."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       0"A table of 8021PMap configuration information."                       +"8021PMap Configuration Information Entry."                       "The 8021PMap 802.1p value "                        "The 8021PMap Local Precedence."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       8"A table of mpls exp-exp-map configuration information."                       3"mpls exp-exp-map Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       $"The mpls exp-exp-map inbound value"                       %"The mpls exp-exp-map outbound value"                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       8"A table of default priority configuration information."                       3"Default priority Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       "The default priority value "                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       @"A table of interface software CAR  configuration  information."                       ;"Interface software CAR  configuration  information entry."                        "Interface index,equal ifIndex."                       D"Policy direction:
            inbound (1)
            outbound (2)"                       '"Car index,refers to hwXQoSCpcarIndex."                       N"RowStatus. Three actions are used: active,
            createAndGo, destroy."                       7"A table of local precedence to queue map information."                       2"local precedence to queue map Information Entry."                       "interface index "                       " Local precedence value."                       "queue index"                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       5"A table of Schedule mode configuration information."                       0"Schedule mode Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       /"Schedule mode are PQ+WFQ(1), PQ(2) or WFQ(3)."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       /"HQOS priority configure configuration table. "                       0"HQOS priority Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       8" be(1),af1(2),af2(3),af3(4),af4(5),ef(6),cs6(7),cs7(8)"                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       %"Multicast outbound bandwidth table."                       ?"Multicast outbound bandwidth Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       #"Unicast weight value range(0~15)."                       &"Multicast weight value range(0~15). "                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       ,"A table of Sred configuration information."                       '"Sred Configuration Information Entry."                       �"The Sred queue index 
             be(1),
             af1(2),
             af2(3),
             af3(4),
             af4(5),
             ef(6),
             cs6(7),
             cs7(8)"                       ."The Sred Red Start Discard Point.unit:packet"                      ("The Sred Red Discard Probability.
             drop1(1) = 100%
             drop2(2) = 6.25%
             drop3(3) = 3.125%
             drop4(4) = 1.5625%
             drop5(5) = 0.78125%
             drop6(6) = 0.390625%
             drop7(7) = 0.1953125%
             drop8(8) = 0.09765625% "                       1"The Sred Yellow Start Discard Point.unit:packet"                      +"The Sred Yellow Discard Probability.
             drop1(1) = 100%
             drop2(2) = 6.25%
             drop3(3) = 3.125%
             drop4(4) = 1.5625%
             drop5(5) = 0.78125%
             drop6(6) = 0.390625%
             drop7(7) = 0.1953125%
             drop8(8) = 0.09765625% "                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       ,"The table provides traffic classification."                       "Traffic classification entry."                       "Index of interface."                       -"The service class of the ATM traffic queue."                       "State of the row."                       *"The table provides ATM PVC service type."                       "ATM PVC service entry."                       "Index of interface."                       "VPI for PVC."                       "VCI for PVC."                       "Name for PVC."                       "Type of the service."                       ""Peak rate for sending ATM cells."                       ""Tolerance of cell delay changes."                       )"Sustainable Rate for Sending ATM Cells."                       +"Maximum Burst Size for Sending ATM Cells."                       "State of the row."                       /"A table of Shaping configuration information."                       *"Shaping Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       �"The Shaping queue index 
             be(1),
             af1(2),
             af2(3),
             af3(4),
             af4(5),
             ef(6),
             cs6(7),
             cs7(8)"                       )"Committed Information Rate. Unit: kbps."                       U"Peak Information Rate. Unit: kbps.
            Only hardware QoS support this node."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       -"A table of PPPoE configuration information."                       ("PPPoE configuration information entry."                       $"Interface index, equal to ifIndex."                       F"Match type: 1.any 2.source MAC 3.dest MAC 4.source MAC and dest MAC."                       "Source MAC address."                       "Destination MAC address."                       8"Row status. Two actions are used: createAndGo, destroy"                       :"A table of interface schedule configuration information."                       5"Interface schedule configuration information entry."                       $"Interface index, equal to ifIndex."                       "Name of schedule profile."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       5"A table of IPCAR feature configuration information."                       ("IPCAR Configuration Information Entry."                       R"Interface Index, equal to ifIndex.
            This object has no default value."                       H"IPCAR Rule direction:
            inbound (1)
            outbound (2)"                       �"The value of this object identifies the index of IPCAR Rule.
             The value ranges from 0 to 254.
             This object has no default value."                      "The value of this object identifies the rule type.
                The value of this object can be any of the following: 
                ipv4-acl(1)
                ipv4-SrcIp(2)
                ipv4-DstIp(3)
                This object has no default value."                      "This object indicates the rule contents. The value range and the default value of the object vary with hwXQoSIPCarRuleType.
                 When the supported type is ipv4-acl(2), the value of this object ranges from 2000 to 4999.
                 This object has no default value."                       �"The object indicates the start of source IP address segment.
            This object has no default value.
            0.0.0.0 is invalid value."                       �"The object indicates the end of source IP address segment.
            This object has no default value.
            0.0.0.0 is invalid value."                       s"Committed Information Rate. Unit: kbps.
            The value ranges from 8 to 4294967295, with no default value."                       ^"Committed Burst Size. Unit: byte
            The value ranges from 1500 to 4294967295 bytes."                       �"Excess Burst Size. Unit: byte.
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS.
            -1 can't be set."                       V"Peak Information Rate. Unit: kbps.
            The value ranges from 8 to 4294967295"                       Z"Peak Burst Size. Unit: byte.
            The value ranges from 1500 to 4294967295 bytes."                      {"The value of this object identifies the action adopted when CIR is not reached.
                 pass (1),
                 discard (2),
                 remark IP Precedence (3),
                 remark DSCP(4),
                 remark Mpls Exp(5),
                 remark (6),
                 remark 8021p(7)
                 The default value is pass (1).
                 "                      y"The value is to remark When green action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      �"The value of this object identifies the action adopted when CIR is exceeded but PIR is not reached.
                 pass (1),
                 discard (2),
                 remark IP Precedence (3),
                 remark DSCP(4),
                 remark Mpls Exp(5),
                 remark (6),
                 remark 8021p(7)
                 The default value is pass (1).
                 "                      z"The value is to remark When yellow action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      �"The value of this object identifies the action adopted when CIR is exceeded but PIR is not reached.
                 pass (1),
                 discard (2),
                 remark IP Precedence (3),
                 remark DSCP(4),
                 remark Mpls Exp(5),
                 remark (6),
                 remark 8021p(7)
                 The default value is pass (1).
                 "                      w"The value is to remark When red action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                       _"aggregationCar(1): aggregation car;
            noneAggregationCar(2) : none aggregation car."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       9"A table of 8021P CAR feature configuration information."                       ,"8021P CAR Configuration Information Entry."                       $"Interface Index, equal to ifIndex."                       +"Apply direction:inbound (1),outbound (2)."                       "Every Command Index ID."                       L"Committed Information Rate. Unit: kbps.
     		 Unsigned32<64-4294967295> "                       G"Committed Burst Size. Unit: byte
     		 Unsigned32<1500-4294967295> "                       B"Peak Information Rate. Unit: kbps.
		 Unsigned32<64-4294967295> "                       F"Peak Burst Size. Unit: byte.
 	         Unsigned32<1500-4294967295> "                       $"VLAN 802.1p value.
		 STRING<0-7> "                       S"RowStatus. Three actions are used: active(1),
	     	 createAndGo(4), destroy(6)."                           ."A table of cp car configuration information."                       '"Diff-server domain Information Entry."                       "Index of cp car domain."                       "Exception name of cp car."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       4"A table of cpcar filter configuration information."                       >"Diff-serve domain 8021p phb Configuration Information Entry."                       Q"filter action
            1:pass
            2:drop
            DEFVAL { pass }"                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       3"A table of CAR feature configuration information."                       &"CAR Configuration Information Entry."                       "Target slot"                       u"Committed Information Rate. Unit: kbps.
            software QoS: 8..155000
            hardware QoS: 100..10000000"                       �"Committed Burst Size. Unit: byte
            software QoS: 1875..19375000 (default:max(cir*125/2,1875))
            hardware QoS: 64..131071(default:12288)"                       �"Excess Burst Size. Unit: byte. 0..19375000
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS.
            -1 can't be set."                       �"Peak Information Rate. Unit: kbps. 100..10000000
            Only hardware QoS support this node.
            -1 is returned only when getting value from software QoS.
            -1 can't be set.
            0 is the default value"                      !"Peak Burst Size. Unit: byte.
            64..4000000.(default:cbs when Peak Information Rate configured)
            Only hardware QoS support this node.
            -1 is returned only when getting value from software QoS.
            -1 can't be set.
            0 is the default value"                      w"Green Action:
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)                            
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP.
            "                      y"The value is to remark When green action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      �"Yellow Action:
            unavailable(-1)
            pass (1)
            discard (2)
            remark IP Precedence (3)
            remark DSCP (4)
            remark MPLS EXP (5)
            remark(6)
            Only hardware QoS support this node.Hardware QoS support pass,discard,remark.
            -1 is returned only when getting value from software QoS.
            -1 can't be set."                      z"The value is to remark When yellow action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      Y"Red Action:
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP.
            "                      w"The value is to remark When red action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       !"A table of QoS policy instance."                       B"Policy applied on Ethernet Vlan Configuration Information Entry."                       "Name of Traffic Policy."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       5"A table of cp car action configuration information."                       0"Cp car action configuration information entry."                       "Slot index."                       "Packet type."                       "Name of packet type."                       "Action type."                       "Policy Name"                       )"Committed Information Rate. Unit: kbps."                       ""Committed Burst Size. Unit: byte"                        "Excess Burst Size. Unit: byte."                       $"Peak Information Rate. Unit: kbps."                       "Peak Burst Size. Unit: byte."                      j"Green Action.
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)                            
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP."                      y"The value is to remark When green action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      k"Yellow Action.
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)                            
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP."                      z"The value is to remark When yellow action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                      h"Red Action.
            pass (1)
            discard (2)                
            remark IP Precedence (3)
            remark DSCP (4)                            
            remark MPLS EXP (5)
            remark (6)
            Hardware QoS : pass,discard,remark.
            Software QoS : pass,discard,remark IP Precedence,remark DSCP,remark MPLS EXP."                      w"The value is to remark When red action is remarking.
            For remarking DSCP, the range is 0~63;
            For remarking IP Precedence and MPLS EXP, the range is 0~7;
            Only software QoS support this node.
            -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
            -1 can't be set."                       �"This OID is used for setting the CP CAR info to default.
            When you want to set the value to default, set this OID to 1."                               `"A table of Running statistics for sample
            in a QoS policy applied on the interface."                       "Cp car statistics entry."                       &"Number of packets passed of enqueue."                       $"Number of bytes passed of enqueue."                       "Number of total packets."                       "Number of total bytes."                       >"Number of packets discarded when enqueued by discard method."                       <"Number of bytes discarded when enqueued by discard method."                       ["A table of Running statistics for sample
            in a QoS policy applied on the slot."                       &"Cp car on the slot statistics entry."                       "Slot index."                       "Packet type."                       "Number of packets discarded."                       "Number of bytes discarded."                       "Number of packets passed."                       "Number of bytes passed."                       "Number of total packets."                       "Number of total bytes."                           1"A table of statistics for CAR on the interface."                       #"CAR statistics information entry."                       $"Interface Index, equal to ifIndex."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       !"Number of green packets passed."                       '"Number of bytes green packets passed."                       #"Number of green remarked packets."                       )"Number of bytes green packets remarked."                       "Number of packets discarded."                        "Number of bytes exceeding CIR."                       ""Number of yellow packets passed."                       ("Number of bytes yellow packets passed."                       $"Number of yellow remarked packets."                       *"Number of bytes yellow packets remarked."                       #"Number of yellow discard packets."                        "Number of bytes exceeding CIR."                       "Number of red passed packets."                       "Number of red passed  bytes."                       !"Number of red remarked packets."                       "Number of red remarked bytes."                       #"Number of red discareded packets."                        "Number of bytes exceeding CIR."                       ""Number of total discard packets."                       ."Number of inbound direction discard packets."                       /"Number of outbound direction discard packets."                       Q"This table is used to display the running information about an interface queue."                       "Queue statistics entry."                       :"The value of this object identifies the interface index."                       $"This object indicates the VLAN ID."                       �"The value of this object identifies COS of the queue.The value can be any of the following:CS7(8),CS6(7),EF(6)
AF4(5),AF3(4),AF2(3),AF1(2),BE(1)."                       8"This object indicates the number of forwarded packets."                       `"This object indicates the number of bytes that pass the queue.The object has no default value."                       c"This object indicates the number of packets that reach the queue.The object has no default value."                       2"This object indicates the total number of bytes."                       9"This object indicates the number of discarded packets. "                       7"This object indicates the number of discarded bytes. "                       @"This object indicates the rate at which packets are forwarded."                       ?"This object indicates the rate at which bytes are forwarded. "                       e"This object indicates the packet rate of discarded packets, in pps.The object has no default value."                       ?"This object indicates the rate at which bytes are discarded. "                       %"Reset queue statistics information."                       ;"This object indicates the percentage of the queue usage. "                       M" The value of this object identifies the number of discarded tail packets. "                       E" This object indicates the number of bytes discarded by tail drop. "                       Y" The value of this object identifies the number of packets that are discarded by WRED. "                       ?"This object indicates the number of bytes discarded by WRED. "                       :" This object indicates the tail packet discarding rate. "                       N"This object indicates the rate at which packets are discarded by tail drop. "                       9" This object indicates the WRED packet discarding rate."                       I" This object indicates the rate at which packets are discarded by WRED."                       =" This object indicates the traffic which towards this port."                       C" This object indicates the physical bandwidth of a QoS interface."                       `"This object indicates the last 30 seconds packet rate, in pps.The object has no default value."                       ]"This object indicates the last 30 seconds bit rate, in bps.The object has no default value."                       u"This object indicates the last 30 seconds packet rate of discarded packets, in pps.The object has no default value."                       r"This object indicates the last 30 seconds bit rate of discarded packets, in bps.The object has no default value."                       a"This object indicates the last 300 seconds packet rate, in pps.The object has no default value."                       ^"This object indicates the last 300 seconds bit rate, in bps.The object has no default value."                       v"This object indicates the last 300 seconds packet rate of discarded packets, in pps.The object has no default value."                       s"This object indicates the last 300 seconds bit rate of discarded packets, in bps.The object has no default value."                       ^"A table of Running statistics for WRED
            in a QoS policy applied on the interface."                       "WRED statistics entry."                       "Index of interface."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       2"Number of packets that random-discarded by WRED."                       0"Number of packets that tail-discarded by WRED."                       c"Number of packets that discarded by WRED.
            Include random-discarded and tail-discarded"                       \"A table of Running statistics for LR
            in a QoS policy applied on the interface."                       "LR statistics entry."                       "Index of Interface of LR."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       !"Number of packets passed by LR."                       "Number of bytes passed by LR."                       $"Number of packets discarded by LR."                       ""Number of bytes discarded by LR."                       ""Number of packets delayed by LR."                        "Number of bytes delayed by LR."                       `"A table of Running statistics for mirror
            in a QoS policy applied on the interface."                       "Mirror statistics entry."                       "Index of interface mirror."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       "Number of packets Mirrored."                       ^"A table of Running statistics for urpf
            in a QoS policy applied on the interface."                       "Urpf statistics entry."                       "Index of interface URPF."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       "Number of packets passed."                       "Number of packets dropped."                       `"A table of Running statistics for sample
            in a QoS policy applied on the interface."                       "Sample statistics entry."                       "Index of interface Sample."                       J"Vlan ID.
            -1 can't be set.
            0 is the default value"                       "Number of packets Sampled."                       ="This table is used to display the CAR statistics of a port."                       �"A table of CAR statistics for port-based traffic, including 
        the statistics of  packets that have the rate within CIR, of 
        CIR, of PIR or exceeds PIR. ."                       J"This object indicates the number of green packets for the interface CAR."                       7"This object indicates the number of bytes within CIR."                       P"This object indicates the rate of green packets for the interface CAR, in pps."                       9"This object indicates the byte rate within CIR, in bps."                       K"This object indicates the number of yellow packets for the interface CAR."                       @"This object indicates the number of bytes between PIR and CIR."                       D"This object indicates the packet rate between PIR and CIR, in pps."                       O"This object indicates the rate of yellow bytes for the interface CAR, in pps."                       H"This object indicates the number of red packets for the interface CAR."                       F"This object indicates the number of red bytes for the interface CAR."                       F"This object indicates the rate of red packets for the interface CAR."                       D"This object indicates the rate of red bytes for the interface CAR."                       M"This object indicates the number of forwarded packets after CAR is applied."                       K"This object indicates the number of forwarded bytes after CAR is applied."                       I"This object indicates the number of discarded packets after CAR is set."                       K"This object indicates the number of discarded bytes after CAR is applied."                       )"The table provides the discard packets."                       "The discard packets entry."                       #"Index for the extended interface."                       "Index for the queue."                       "Number of discarded packets."                       ="This table is used to display the CAR statistics of a port."                       �"A table of CAR statistics for port-based traffic, including 
        the statistics of  packets that have the rate within CIR, of 
        CIR, of PIR or exceeds PIR. ."                       v"This object indicates the number of green packets for the interface CAR, which is lower 32 bits of the total number."                       v"This object indicates the number of green packets for the interface CAR, which is upper 32 bits of the total number."                       c"This object indicates the number of bytes within CIR, which is lower 32 bits of the total number."                       c"This object indicates the number of bytes within CIR, which is upper 32 bits of the total number."                       |"This object indicates the rate of green packets for the interface CAR, in pps, which is lower 32 bits of the total number."                       |"This object indicates the rate of green packets for the interface CAR, in pps, which is upper 32 bits of the total number."                       e"This object indicates the byte rate within CIR, in bps, which is lower 32 bits of the total number."                       e"This object indicates the byte rate within CIR, in bps, which is upper 32 bits of the total number."                       w"This object indicates the number of yellow packets for the interface CAR, which is lower 32 bits of the total number."                       w"This object indicates the number of yellow packets for the interface CAR, which is upper 32 bits of the total number."                       l"This object indicates the number of bytes between PIR and CIR, which is lower 32 bits of the total number."                       l"This object indicates the number of bytes between PIR and CIR, which is upper 32 bits of the total number."                       p"This object indicates the packet rate between PIR and CIR, in pps, which is lower 32 bits of the total number."                       p"This object indicates the packet rate between PIR and CIR, in pps, which is upper 32 bits of the total number."                       {"This object indicates the rate of yellow bytes for the interface CAR, in pps, which is lower 32 bits of the total number."                       {"This object indicates the rate of yellow bytes for the interface CAR, in pps, which is upper 32 bits of the total number."                       t"This object indicates the number of red packets for the interface CAR, which is lower 32 bits of the total number."                       t"This object indicates the number of red packets for the interface CAR, which is upper 32 bits of the total number."                       r"This object indicates the number of red bytes for the interface CAR, which is lower 32 bits of the total number."                       r"This object indicates the number of red bytes for the interface CAR, which is upper 32 bits of the total number."                       r"This object indicates the rate of red packets for the interface CAR, which is lower 32 bits of the total number."                       r"This object indicates the rate of red packets for the interface CAR, which is upper 32 bits of the total number."                       p"This object indicates the rate of red bytes for the interface CAR, which is lower 32 bits of the total number."                       p"This object indicates the rate of red bytes for the interface CAR, which is upper 32 bits of the total number."                       y"This object indicates the number of forwarded packets after CAR is applied, which is lower 32 bits of the total number."                       y"This object indicates the number of forwarded packets after CAR is applied, which is upper 32 bits of the total number."                       w"This object indicates the number of forwarded bytes after CAR is applied, which is lower 32 bits of the total number."                       w"This object indicates the number of forwarded bytes after CAR is applied, which is upper 32 bits of the total number."                       u"This object indicates the number of discarded packets after CAR is set, which is lower 32 bits of the total number."                       u"This object indicates the number of discarded packets after CAR is set, which is upper 32 bits of the total number."                       w"This object indicates the number of discarded bytes after CAR is applied, which is lower 32 bits of the total number."                       w"This object indicates the number of discarded bytes after CAR is applied, which is upper 32 bits of the total number."                           9"The table contains statistics information for the vlan."                       #"Entries of vlan statistics table."                       "The id of vlan."                       !"The number of received packets."                       &"The byte number of received packets."                       &"The number of transmittable packets."                       +"The byte number of transmittable packets."                       )"The number of received unicast packets."                       0"The number of received unicast packets' bytes."                       ."The number of transmittable unicast packets."                       5"The number of transmittable unicast packets' bytes."                       +"The number of received multicast packets."                       2"The number of received multicast packets' bytes."                       0"The number of transmittable multicast packets."                       7"The number of transmittable multicast packets' bytes."                       +"The number of received broadcast packets."                       2"The number of received broadcast packets' bytes."                       0"The number of transmittable broadcast packets."                       0"The number of transmittable broadcast packets."                       3"The number of received unknown broadcast packets."                       :"The number of received unknown broadcast packets' bytes."                       "The flag of reset."                       "The rate of received packets."                       "The rate of received bytes."                       $"The rate of transmittable packets."                       ""The rate of transmittable bytes."                       $"The rate of transmittable packets."                       ""The rate of transmittable bytes."                       $"The rate of transmittable packets."                       ""The rate of transmittable bytes."                       $"The rate of transmittable packets."                       ""The rate of transmittable bytes."                       $"The rate of transmittable packets."                       ""The rate of transmittable bytes."                       *"The Percentage number of droped packets."                       B"The table contains statistics information for the vlan of board."                       ,"Entries of vlan statistics on board table."                       "The id of vlan."                       "The id of slot."                       !"The number of received packets."                       )"The rate of received packets by number."                       &"The byte number of received packets."                       ("The rate of received packets by bytes."                       &"The number of transmittable packets."                       -"The rate of transmittable packets by bytes."                       +"The byte number of transmittable packets."                       4"The rate number of transmittable packets by bytes."                       +"The number of received multicast packets."                       *"The rate of received multicast packets ."                       2"The number of received multicast packets' bytes."                       0"The rate of received multicast packets' bytes."                       +"The number of received broadcast packets."                       )"The rate of received broadcast packets."                       2"The number of received broadcast packets' bytes."                       0"The rate of received broadcast packets' bytes."                       3"The number of received unknown broadcast packets."                       1"The rate of received unknown broadcast packets."                       :"The number of received unknown broadcast packets' bytes."                       8"The rate of received unknown broadcast packets' bytes."                       "The number of droped packets."                       "The rate of droped packets."                       "The number of droped bytes."                       "The rate of droped bytes."                       "The rate of droped bytes."                           B"The table contains statistics information for slot buffer usage."                       0"Entries of slot buffer usage statistics table."                       "The frame id of the device."                       "The slot id of the device."                       ("The total kbyte number of slot buffer."                       '"The used kbyte number of slot buffer."                       +"The remained kbyte number of slot buffer."                       '"The used kbyte number of slot buffer."                       '"The used kbyte number of slot buffer."                       G"The table contains statistics information for interface buffer usage."                       5"Entries of interface buffer usage statistics table."                       "The interface index."                       -"The total kbyte number of interface buffer."                       ,"The used kbyte number of interface buffer."                       0"The remained kbyte number of interface buffer."                       ,"The used kbyte number of interface buffer."                       ,"The used kbyte number of interface buffer."                       M"The table contains statistics information for interface queue buffer usage."                       ;"Entries of interface queue buffer usage statistics table."                       "The interface index."                       ]"The interface queue index.
                 The value ranges from 0 to 7. 
                "                       3"The total kbyte number of interface queue buffer."                       2"The used kbyte number of interface queue buffer."                       6"The remained kbyte number of interface queue buffer."                       2"The used kbyte number of interface queue buffer."                       2"The used kbyte number of interface queue buffer."                           5"A table of software CAR  configuration information."                       /"Software CAR configuration information entry."                       "Index of software car."                       "Software car name."                       )"Committed Information Rate. Unit: kbps."                       ""Committed Burst Size. Unit: byte"                       N"RowStatus. Three actions are used: active,
            createAndGo, destroy."                       9"A table of class based Wred  configuration information."                       3"Class based Wred configuration information entry."                       "Index of wred class."                       "The Wred Lowlimit."                       "The Wred Highlimit."                       "The Wred Discard Probability."                       �"This OID is used for setting the WRED class info to default.
            When you want to set the value to default, set this OID to 1.
            "                       8"A table of type based Wred  configuration information."                       3"Type based Wred  configuration information entry."                       "Index of type."                       "Name of type."                       "The Wred Lowlimit."                       "The Wred Highlimit."                       "The Wred Discard Probability."                       �"This OID is used for setting the WRED type info to default.
            When you want to set the value to default, set this OID to 1."                       ("A table of VLAN broadcast suppression."                       *"The entry of VLAN broadcast suppression."                       
"VLAN ID."                       ("Suppression value for VLAN, unit KBPS."                       8"Row status. Two actions are used: createAndGo, destroy"                       "A table of schedule profile."                        "The entry of schedule profile."                       1"The object specifies the schedule profile name."                       �"The Queue mode:       
            pq(1), 
            wrr(3),
            wfq(4),
            default(5),
            drr(6)
            "                       :"The be queue weight value when in wrr or drr queue mode."                       ;"The af1 queue weight value when in wrr or drr queue mode."                       ;"The af2 queue weight value when in wrr or drr queue mode."                       ;"The af3 queue weight value when in wrr or drr queue mode."                       ;"The af4 queue weight value when in wrr or drr queue mode."                       ;"The cs6 queue weight value when in wrr or drr queue mode."                       ;"The cs7 queue weight value when in wrr or drr queue mode."                       :"The ef queue weight value when in wrr or drr queue mode."                       8"Row status. Two actions are used: createAndGo, destroy"                       "hwXQosCarResourceTable "                       "hwXQosCarResourceEntry "                       T"The value of this object identifies the number of car resource on which direction."                       O"The value of this object identifies the number of car resource on which slot "                      "Service type:
		    ACL      (1),
		    INTERFACE(2),
		    FAMILY   (3),
		    USER     (4),
		    DAA      (5),
		    SUPPRESS (6),
                                          QOSPROFILE SUPPRESS(7),
                                          ACL SUPPRESS(8)"                       &"The number of the total car resource"                       &"The number of the used car resource "                       &"The number of the free car resource "                       G" This table is used to collect statistics on user queue information. "                       !" hwXQoSUserQueueResourceEntry. "                       6" This object indicates the slot ID of a user queue. "                       �" This object indicates the direction of user-queue resource.  
            The value can be:
            1: inbound
            2: outbound            
            "                      �" This object indicates the index of user-queue resource pool.  
            The value can be:
            0: tm-0
            1: tm-1
            2: tm-2
            3: tm-3
            4: tm-all
            5: etm-0
            6: etm-1
            7: etm-all
            8: etm-2
            9: etm-3
            10: etm-4
            11: etm-5
            12: etm-6
            13: etm-7
            14: etm-8
            15: etm-9
            16: etm-10
            17: etm-11
            18: etm-12
            19: etm-13
            20: etm-14
            21: etm-15
            22: etm-16
            23: etm04queue
            24: etm08queue
            25: etm14queue
            26: etm18queue 
           "                       8" This object indicates the used number of user-queue. "                       A" This object indicates the number of idle user queue resources."                       9" This object indicates the total number of user-queue. "                       E" This object indicates the number of used CIR bandwidth resources. "                       ?" This object indicates the free cir bandwidth of user-queue. "                       F" This object indicates the total number of CIR bandwidth resources. "                       ?" This object indicates the used pir bandwidth of user-queue. "                       ;" This object indicates the number of idle PIR resources. "                       @" This object indicates the total pir bandwidth of user-queue. "                       I" This object indicates if resource is shared . 0:not shared; 1:shared. "                       B" This table is used to collect statistics on user group queues. "                       &" HwXQoSUserGroupQueueResourceEntry. "                       ." This object indicates the slot ID of a GQ. "                       �" This object indicates the direction of user-group-queue resource.   
            The value can be:
            1: inbound
            2: outbound 
            "                      g" This object indicates the index of user-group-queue resource pool. 
            The value can be:
            0: tm-0
            1: tm-1
            2: tm-2
            3: tm-3
            4: tm-all
            5: etm-0
            6: etm-1
            7: etm-all
            8: etm-2
            9: etm-3
            10: etm-4
            11: etm-5
            12: etm-6
            13: etm-7
            14: etm-8
            15: etm-9
            16: etm-10
            17: etm-11
            18: etm-12
            19: etm-13
            20: etm-14
            21: etm-15
            22: etm-16
            "                       B" This object indicates the number of used user queue resources. "                       A" This object indicates the number of idle user queue resources."                       :" This object indicates the total number of user queues. "                      8" This object indicates the upstream and downstream sharing flag of GQ resources.
              0: not shared. In shared mode, the GQ resource pool does not distinguish upstream and downstream traffic. 
              1: shared. In non-sharing mode, the upstream and downstream resource pools are distinguished. "                       F" This table is used to collect statistics on sub-interface queues.  "                       $" hwXQoSSubPortQueueResourceEntry. "                       >"This object indicates the slot ID of a sub-interface queue. "                       �" This object indicates the direction of sub-port-queue resource. 
            The value can be:
            1: inbound
            2: outbound 
            "                      f" This object indicates the chip index. 
              Value range:
              0: tm-0 
              1: tm-1
              2: tm-2 
              3: tm-3
              4: tm-all
              5: etm-0
              6: etm-1 
              7: etm-all
              8: etm-2 
              9: etm-3 
             10: etm-4 
             11: etm-5 
             12: etm-6
             13: etm-7
             14: etm-8 
             15: etm-9 
             16: etm-10
             17: etm-11
             18: etm-12
             19: etm-13
             20: etm-14
             21: etm-15
             22: etm-16  "                       <" This object indicates the used number of sub-port-queue. "                       ;" This object indicates the free number of sub-port-queue."                       :" This object indicates the total number of user queues. "                       H"This table is used to query the usage of channel bandwidth on a chip. "                       " hwXQoSChannelResourceEntry. "                       `" This object indicates the index of the interface on which banknote information is collected. "                       �" This object indicates the index of user-queue channel resource pool.  
            The value can be:
            0: tm0-pool0
            1: tm0-pool1
            2: tm1-pool0
            3: tm1-pool1
            "                       D" This object indicates the index of the banknote channel resource."                       M" This object indicates the actual channel bandwidth of user-queue channel. "                       >" This object indicates the number of used banknote channels."                       @" This object indicates the free number of user-queue channel. "                       @" This object indicates the total number of banknote channels. "                       G" This object indicates the suggest max number of user-queue channel. "                       �" This table describes the configuration template information of a traffic policy, traffic classifier, traffic behavior, and QoS profile. "                        " hwXQoSTemplateResourceEntry. "                       �" This object indicates the type of template resource. 
            The value can be:
            0: traffic-policy
            1: traffic-classifier
            2: traffic-behavior
            3: qos-profile
            4: flow-queue
            "                       E" This object indicates the number of used configuration profiles.  "                       >" This object indicates the free number of template resource "                       E" This object indicates the total number of configuration profiles. "                       c" This table is used to query the configuration of Classifier-Behavior pairs in a traffic policy. "                       " hwXQoSCBPairResourceEntry. "                       m" This object indicates the policy name corresponding to the Classifier-Behavior pair in the traffic policy."                       H" This object indicates the configured cb-pair of the  traffic-policy. "                       E" This object indicates the remainder cb-pair of the traffic-policy."                       s" This object indicates the total number of Classifier-Behavior pairs that can be configured in a traffic policy. "                       ="  This table describes information about traffic policies. "                       ," hwXQoSBindingTrafficPolicyResourceEntry. "                       X"This object indicates the ID of the board that is bound to a traffic policy instance. "                       L"  This object indicates the applied traffic-policy number on this slot.   "                       J" This object indicates the number of remaining traffic policy instances."                       ^" This object indicates the total number of instances that can be bound to a traffic policy. "                       P"   This table is used to query the information about the chip used by an ACL. "                       " hwXQoSAclTcamResourceEntry. "                       ;" This object indicates the slot-id of acl-tcam resource. "                       �" This object indicates the ACL type of the chip specification of rules. 
              0: aclv4 
              1: aclv6 
              2: l2acl 
              3: mpls
            "                       �" This object indicates the NP status of the chip specification of rules. 
              0: pfe-0 
              1: pfe-1 
              2: pfe-all  "                       ?" This object indicates the used number of acl-tcam resource. "                       O" This object indicates the remaining number of chip specifications of rules. "                       @" This object indicates the total number of acl-tcam resource. "                       0"This table describes CAR resource information."                       "hwXQosBoardCarResourceEntry "                       i"This object indicates the index of the interface direction where CAR resource statistics are collected."                       U"The value of this object identifies the number of board car resource on which slot "                       @"This object indicates the type of the CAR resource statistics."                       ,"The number of the total board car resource"                       /"This object indicates the used CAR resources."                       ,"The number of the free board car resource "                           )"A table of statistics on attack defense"                       5"A table of statistics information on attack defense"                       /"Slot number of statistics for attack defense."                       !"Index of attack defense object."                       ."Number of packets passed the attack defense."                       ,"Number of bytes passed the attack defense."                       6"Rate of packets passed the attack defense. Unit: pps"                       4"Rate of bytes passed the attack defense. Unit: bps"                       4"Number of packets discarded in the attack defense."                       2"Number of bytes discarded in the attack defense."                       <"Rate of packets discarded in the attack defense. Unit: pps"                       :"Rate of bytes discarded in the attack defense. Unit: bps"                       5"Discarded packets threshold of alarm. Unit: packets"                       2"Chassis number of statistics for attack defense."                       "The descirption of Protocol."                       :"Number of packets to be sent to the CPU on an interface."                           8"A table of statistics on discarded packets for IP URPF"                       "Urpf discard statistics entry"                       j"The index of hwXQoSUrpfDiscardStatisticsTable.This index is identical to entPhysicalIndex in ENTITY-MIB."                       "Number of packets discarded."                           '"The table of vlan config information."                        "Vlan config information entry."                       /"Vlan statistics enable: enable(1),disable(2)."                           ""A table of the redirect next hop"                       ."A table of the redirect next hop information"                       "Traffic behavior name."                       "The redirect next hop."                       "The redirect next hop."                           "A table of Irsm "                       "A table of Irsm"                       "hwXQoSIrsmSourceAddress "                       "hwXQoSIrsmGroupAddress "                       "hwXQoSIrsmTime "                       "hwXQoSIrsmDelay "                       "hwXQoSIrsmThreshold "                       "hwXQoSIrsmUpstream "                       "hwXQoSIrsmLocal "                       "hwXQoSIrsmTotalPacket "                       "hwXQoSIrsmDropPacket "                           ."Rate alarm of packets in the attack defense."                 "The SNMP trap is generated when the number of packages 
          that queue discard is larger than the configured threshold."                 k"This object indicates the number of discarded packets due to CPU attack defense alarm threshold crossing."                 R"This object indicates the number of discarded packets when the alarm is cleared."                 :"Number of packets discarded in the attack defense alarm."                 C"Number of packets discarded in the attack defense alarm clearing."                 1"The SNMP trap is the redirect next hop changed."                 "IRSM delay over threshold."                 "IRSM multicast drop packets."                 "IRSM syn frame drop."                 "ACL Rule Exhaustion Alarm"                 "Qos-profile used."                 "hwXQoSPortQueueAlarm."                 "hwXQoSPortQueueAlarmClear."                 W"The SNMP trap is generated when the status of interface is changed for storm-control."                 Q"The SNMP trap is generated when the specific statistics resource is not enough."                 J"The SNMP trap is generated when the specific car resource is not enough."                 ("Clearance of ACL Rule Exhaustion Alarm"                 �"When the hard-pipe bandwidth usage reached 95%, a warning alarm was generated. When the hard-pipe bandwidth usage reached 98%, a threshold-crossing alarm was generated."                 G"The hard-pipe service alarm on interface [InterfaceName] has cleared."                 ["The SNMP trap is generated when the use of queue buffer is over the configured threshold."                 T"The SNMP trap is generated when the use of queue buffer is recovered from overrun."                 "hwXQoSHardPipeCfgAlarm."                 "hwXQoSHardPipeCfgAlarmClear."                 ;"The traffic policy of a VPN instance did not take effect."                 �"The alarm indicating the traffic policy ineffectiveness of a VPN instance was cleared, because the traffic policy took effect or was deleted."                 #"hwXQoSTrunkProfileNotEffectAlarm."                 L"The SNMP trap is when the outbound traffic bandwith is over the threshold."                 Q"The SNMP trap is when the outbound traffic bandwith is recoved from congestion."                 B"The SNMP trap is when the FCoE packet priority may be incorrect."                 C"The SNMP trap is when the FCoE packet priority alarm is clearing."                 A"The SNMP trap is generated when the qppb policy applied failed."                 G"Clear the SNMP trap is generated when the qppb policy applied failed."                 X"The SNMP trap is generated when the interface qppb policy deleted because of conflict."                 ["The number of packets sent to the CPU by port car exceeded the threshold on an interface."                 ]"The number of packets sent to the CPU by port car fell below the threshold on an interface."                 H"The SNMP trap is generated when The global QPPB will not be effective."                 H"The SNMP trap is generated when The QPPB Policy will not be effective."                 ;"The softpipe bandwidth usage reached the threshold alarm."                 :"The soft pipe bandwidth usage below the threshold alarm."                 F"The SNMP trap is generated when the multicast packets are discarded."                 R"Clear the SNMP trap which is generated when the multicast packets are discarded."                 F"The SNMP trap is generated when the multicast packets are discarded."                 R"Clear the SNMP trap which is generated when the multicast packets are discarded."                 D"The SNMP trap is generated when the unicast packets are discarded."                 P"Clear the SNMP trap which is generated when the unicast packets are discarded."                 D"The SNMP trap is generated when the Unicast packets are congested."                 P"Clear the SNMP trap which is generated when the Unicast packets are congested."                 5"The SNMP trap is generated when packets are droped."                 I"Clear the SNMP trap which is generated when no more packets are droped."                 5"The SNMP trap is generated when packets are droped."                 I"Clear the SNMP trap which is generated when no more packets are droped."                 �"The SNMP trap is generated when the port has packets dropped caused by storm suppression.
                hwXQoSStormSuppressAlarmIfIndex: The interface index,equal to ifIndex.
                hwXQoSStormSuppressAlarmIfName: The interface name."                "The SNMP trap is generated when the port has recovered from packets dropped caused by storm suppression.
                hwXQoSStormSuppressAlarmIfIndex: The interface index,equal to ifIndex.
                hwXQoSStormSuppressAlarmIfName: The interface name."                 Y"The SNMP trap is generated when the port has dropped packets because of storm suppress."                 g"The SNMP trap is generated when the port is recovered from dropped packets because of storm suppress."                 D"The SNMP trap is generated when the ingress packets are discarded."                 P"Clear the SNMP trap which is generated when the ingress packets are discarded."                 :"The SNMP trap is generated when the IfCar are discarded."                 F"Clear the SNMP trap which is generated when the IfCar are discarded."                 J"The SNMP trap is generated when queue exception leads to non forwarding."                 V"Clear the SNMP trap which is generated when queue exception leads to non forwarding."                 V"The SNMP trap is generated when pfc thresholds exceeded priority turn off threshold."                 V"Clear the SNMP trap which is generated when undo priority turn off threshold config."                 p"The SNMP trap is generated when detected number of times this time than the last count increased or less than."                 m"Clear the SNMP trap which is generated when detected number this time is not increased than the last count."                 L"Memory resources are insufficient and the ACL service may not take effect."                 "Delete useless configuration."                 B"The SNMP trap is generated when the ingress packets are deleted."                 N"Clear the SNMP trap which is generated when the ingress packets are deleted."                 B"The IP hard pipe configured on an interface did not take effect."                 u"This object indicates that the alarm indicating that the hard pipe on an interface does not take effect is cleared."                 S"The configed bandwidth value of hardpipe has exceeded the actual bandwidth value."                 R"The configed bandwidth value of hardpipe is equal to the actual bandwidth value."                 V"The AC-side hard pipe bandwidth exceeded the interface bandwidth and became invalid."                 |"The alarm indicating that the AC-side hard pipe bandwidth exceeded the interface bandwidth and became invalid was cleared."                 E"SQID resource application failure alarm when configuring hard pipe."                 ="The alarm of SQID resource application failure was cleared."                 �"The SNMP trap is generated when when the redirect nexthop address did not match the network segment of the outbound interface."                 �"Clear the SNMP trap is generated when when the redirect nexthop address did not match the network segment of the outbound interface."                     &"hwXQoSStatResouceNotEnoughAlarmTable"                       &"hwXQoSStatResouceNotEnoughAlarmEntry"                       B"Slot ID of the LPU where the stastitics resource is insufficient"                       *"Type of insufficient statistics resource"                       %"hwXQoSCARResouceNotEnoughAlarmTable"                       %"hwXQoSCARResouceNotEnoughAlarmEntry"                       ;"Slot ID of the LPU where the CAR resource is insufficient"                       #"Type of insufficient car resource"                            "hwXQoSVpnAclConflictAlarmTable"                        "hwXQoSVpnAclConflictAlarmEntry"                       "Vpn instance index."                       "The slot number"                           "The ID of the frame."                       3"The ID of the slot that the interface is located."                       "The ID of the port"                       "The name of the interface."                       &"The ID of the queue giving an alarm."                       &"The number of the discarded packets."                           8"A Table about storm-control configuration information."                       "Description."                       '"The interface index,equal to ifIndex."                       �"The low water mark of broadcast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for broadcast packets."                       �"The high water mark of broadcast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for broadcast packets."                       �"The low water mark of multicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for multicast packets."                       �"The high water mark of multicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for multicast packets."                      �"storm-control action.
                none : no action will be taken.
                block: packets will be blocked if receiving-rate is higher than the high water mark and will be unblocked only when the receiving-rate drops below the low water mark.
                shutdown: the interface will be shutdown if receiving-rate is higher than the high water mark and the interface will NOT be open when the receiving-rate drops below the low water mark. To open the interface , use undo shutdown commond."                       Y"The interval that the broadcast storm or mutilcast storm will be checked. Unit: second."                       �"Enable or disable trap.
                enable(1): report trap when interface status changes.
                disable(2): do not report trap when interface status changes. "                       �"Enable or disable log.
                enable(1): record log when interface status changes.
                disable(2): do not record log when interface status changes. "                      �"The status of the interface.
                normal: no storm-control aciton is taken.
                broadcastBlocked: broadcast packets is blocked.
                multicastBlocked: multicast packets is blocked.
                bothBlocked: both the broadcast and multicast packets are blocked.
                shutdown: the interface is shutdown.
                unicastBlocked: unicast packets is blocked.
                allBlocked: broadcast multicast unicast packets is blocked.
                bcmcBlocked: both the broadcast and multicast packets are blocked.
                bcucBlocked: both the broadcast and unicast packets are blocked.
                ucmcBlocked: both the unicast and multicast packets are blocked."                       �"The low water mark of unicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for unicast packets."                       �"The high water mark of unicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for unicast packets."                       �"The mode of broadcast packets.
                pps : (packets per second).
                kbps : (kbit per second).
                percent : (%).
                none: initialization."                       �"The mode of multicast packets.
                pps : (packets per second).
                kbps : (kbit per second).
                percent : (%).
                none: initialization."                       �"The mode of unicast packets.
                pps : (packets per second).
                kbps : (kbit per second).
                percent : (%).
                none: initialization."                       "The interface name."                       �"The low water mark of unknwon unicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for unknown unicast packets."                       �"The high water mark of unknown unicast packets rate. Unit: pps (packets per second).
                zero : storm-control function is not enable for unknown unicast packets."                       �"The mode of unknown unicast packets.
                pps : (packets per second).
                kbps : (kbit per second).
                percent : (%).
                none: initialization."                       "Storm control action."                       "Storm control type."                       4"The threshold of storm control. Unit: pps or kbps."                       "Storm control mode."                          �"The SNMP trap is generated when the status of interface is changed for storm-control.
                hwXQoSStormControlBroadcastMinRate: The low water mark of broadcast packets rate.
                hwXQoSStormControlBroadcastMaxRate: The high water mark of broadcast packets rate.
                hwXQoSStormControlMulticastMinRate: The low water mark of multicast packets rate.
                hwXQoSStormControlMulticastMaxRate: The high water mark of multicast packets rate.                
                hwXQoSStormControlAction: The storm-control action.
                hwXQoSStormControlInterval: The interval that the broadcast storm or mutilcast storm will be checked.
                hwXQoSStormControlStatus: The status of the interface.
                hwXQoSStormControlUnicastMinRate: The low water mark of unicast packets rate.
                hwXQoSStormControlUniicastMaxRate: The high water mark of unicast packets rate.
                hwXQoSStormControlBcMode: The mode of Broadcast packets.
                hwXQoSStormControlMcMode: The mode of multicast packets.
                hwXQoSStormControlUcMode: The mode of unicast packets.
                hwXQoSStormControlUnknownUcMode: The mode of unknown unicast packets.
                hwXQoSStormControlUnknownUnicastMinRate: The low water mark of unknown unicast packets rate.
                hwXQoSStormControlUnknownUnicastMaxRate: The high water mark of unknown unicast packets rate."                "The SNMP trap is generated when the status of interface is changed for storm-control.
                hwXQoSStormControlIfIndex: The interface index,equal to ifIndex.
                hwXQoSStormControlIfName: The interface name.
                hwXQoSStormControlBroadcastMinRate: The low water mark of broadcast packets rate.
                hwXQoSStormControlBroadcastMaxRate: The high water mark of broadcast packets rate.
                hwXQoSStormControlMulticastMinRate: The low water mark of multicast packets rate.
                hwXQoSStormControlMulticastMaxRate: The high water mark of multicast packets rate.                
                hwXQoSStormControlAction: The storm-control action.
                hwXQoSStormControlInterval: The interval that the broadcast storm or mutilcast storm will be checked.
                hwXQoSStormControlStatus: The status of the interface.
                hwXQoSStormControlUnicastMinRate: The low water mark of unicast packets rate.
                hwXQoSStormControlUniicastMaxRate: The high water mark of unicast packets rate.
                hwXQoSStormControlBcMode: The mode of Broadcast packets.
                hwXQoSStormControlMcMode: The mode of multicast packets.
                hwXQoSStormControlUcMode: The mode of unicast packets."                     !"A Table about queue statistics."                       +"The entry of queue statistics infomation."                      5"The ingress interface index.
                                2147483647: invalid interface index, the statistics will be the count of packets of the egress interface and queue.
                                The ingress interface index and the egress interface index can not be 2147483647 at the same time."                      6"The egress interface index.
                                2147483647: invalid interface index, the statistics will be the count of packets of the ingress interface and queue.
                                The ingress interface index and the egress interface index can not be 2147483647 at the same time. "                       "The queue index."                      �"The passed packets count.
                                If the ingress interface index is 2147483647, this node will be the count of passed packets of the specified queue of the ingress interface. 
                                If the egress interface index is 2147483647, this node will be the count of passed packets of the specified queue of the ingress interface.
                                If none of the ingress and egress interface is 2147483647, this node will be the count of passed packets which is from the ingress interface to 
                                the egress interface at the specified queue.
                                The ingress interface index and the egress interface index can not be 2147483647 at the same time ."                       v"Set this node to reset the counter.
                                 Reset(1) will be returned if this node is read."                       `"RowStatus. Three actions are used:
                                active,createandgo, destroy"                           0"A table about drop packets statistics of port."                       2"The entry about drop packets statistics of port."                       "The interface index."                       ("The dropped packets count of the port."                       v"Set this node to reset the counter.
                                 Reset(1) will be returned if this node is read."                      �"The value of sysUpTime on the most recent occasion at
                                 which one of this interface's counters
                                 suffered a discontinuity. If no such discontinuities have
                                 occurred since the last re-initialization of the local
                                 management subsystem, then this object contains a zero
                                 value."                           1"A table about drop packets statistics of queue."                       3"The entry about drop packets statistics of queue."                       "The interface index."                       "The queue index."                       )"The dropped packets count of the queue."                       v"Set this node to reset the counter.
                                 Reset(1) will be returned if this node is read."                      �"The value of sysUpTime on the most recent occasion at
                                 which  one of this queue's counters
                                 suffered a discontinuity. If no such discontinuities have
                                 occurred since the last re-initialization of the local
                                 management subsystem, then this object contains a zero
                                 value."                           "hwXQoSRuleFailTable"                       "hwXQoSRuleFailEntry"                       !"ACL Rule Exhaustion Information"                           "A table of the qos-profile"                       ."A table of the redirect next hop information"                       "Qos-profile name."                           "hwXQoSPortQueueAlarmTable"                       "hwXQoSPortQueueAlarmEntry"                       "The interface index."                       "hwXQoSPortQueueAlarmQueue."                       "The trunk interface index."                       I"This table is used to display the alarm information about a port queue."                       "hwXQoSPortQueueAlarmExEntry"                       D"This object indicates the index of the port queue alarm interface."                      R" This object indicates the service class of the port queue.
                                                                               Value range: 
                                                                               1 be 
                                                                               2 af1 
                                                                               3 af2 
                                                                               4 af3
                                                                               5 af4 
                                                                               6 ef 
                                                                               7 cs6
                                                                               8 cs7.      
					"                       J"This object indicates the alarm buffer information about the port queue."                       $"hwXQOSQueueBufferOverrunAlarmTable"                       $"hwXQOSQueueBufferOverrunAlarmEntry"                       !"The information of the chassis."                       "The information of the slot."                       ""The index of physical interface."                       #"The index of the congested queue."                       ="The used buffer cell of queue when congestion was detected."                       M"The used buffer length(uint:KBytes) of queue when congestion was detected. "                       ("The current buffer overrun threshold. "                       "The current Discard. "                       "hwXQoSIfLrDiscardAlarmTable"                       "hwXQoSIfLrDiscardAlarmEntry"                       ""The index of physical interface."                       !"The name of physical interface."                       :"This value of this object identifies the configured CIR."                       "The threshold of the alarm."                       "Pass packet rate."                           "hwXQoSHardPipeCfgAlarmTable"                       "hwXQoSHardPipeCfgAlarmEntry"                       "The interface index."                       ;"This table displays the bandwidth usage of the hard pipe."                       "hwXQoSHardPipeAlarmEntry"                       "The interface index."                       '"The usage of qos hard-pipe bandwidth."                       >"This table displays SQID resource application failure alarm."                       %"hwXQoSHardPipeApplySQFailAlarmEntry"                       "The interface index."                           ;"This table displays the bandwidth usage of the soft pipe."                       "The softpipe alarm entry."                       &"The soft pipe alarm interface index."                       '"The usage of qos soft-pipe bandwidth."                           F"This table displays alarms for the hard pipe bandwidth verification."                       &"The hard pipe bandwidth alarm entry."                       0"The hard pipe bandwidth alarm interface index."                       #"The soft pipe reserved bandwidth."                           '"hwXQoSTrunkProfileNotEffectAlarmTable"                       '"hwXQoSTrunkProfileNotEffectAlarmEntry"                       "The interface name."                       "The slotid of trunk member."                           4"A Table about storm-control interface information."                       "Description."                       V"The chassis ID indicates the slot on which chassis is configured with storm control."                       )"The slot configured with storm control."                       "The interface name."                       C"The value of this object identifies the VLAN ID of the interface."                           A"It will alarm when the qos-local-id has exceed the upper-limit."                       A"It will alarm when the qos-local-id has exceed the upper-limit."                       B"Chassis ID of the LPU where the qppb policy been applied failed."                       ?"Slot ID of the LPU where the qppb policy been applied failed."                       B"Name of the interface where the qppb policy been applied failed."                       "Direction of the qppb policy."                       "LocalID of the qppb policy."                           K"It will alarm when the interface qppb policy deleted because of conflict."                       K"It will alarm when the interface qppb policy deleted because of conflict."                       S"Name of the interface when the interface qppb policy deleted because of conflict."                       U"Name of the QPPB Policy when the interface qppb policy deleted because of conflict."                       "Direction of the qppb policy."                       "precautions descirption."                           D"A table of QoS buffer overrun threshold configuration information."                       3"QoS buffer overrun threshold configuration Entry."                       "VS index."                       %"QoS buffer overrun threshold value."                       M"RowStatus. Three actions are used: active,
            createAndGo, destroy"                       @"A table of QoS buffer overrun Alarm configuration information."                       /"QoS buffer overrun Alarm configuration Entry."                       "VS index."                       >"QoS buffer overrun alarm enable flag: enable(1), disable(2)."                       4"A table of QoS buffer overrun history information."                       #"QoS buffer overrun history Entry."                       "The interface index."                       ]"The interface queue index.
                 The value ranges from 0 to 7. 
                "                       "Chasis index."                       "Slot index."                       P"Number index.
                 The value ranges from 1 to 5. 
                "                       6" This object indicates the resetting of statistics. "                       ,"The used kbyte number of interface buffer."                       "Buffer overrun systeam time."                       #"Remote mirror recover fail notify"                     >"The event occurs when The global QPPB will not be effective."                       >"The event occurs when The global QPPB will not be effective."                       @"Slot ID of the LPU when The global QPPB will not be effective."                       >"function of qppb when The global QPPB will not be effective."                       "precautions descirption."                           >"The event occurs when the QPPB policy will not be effective."                       >"The event occurs when the QPPB policy will not be effective."                       D"Chassis ID of the LPU where the QPPB policy will not be effective."                       A"Slot ID of the LPU where the QPPB policy will not be effective."                           &"hwXQoSMulticastPktsDiscardAlarmTable"                       &"hwXQoSMulticastPktsDiscardAlarmEntry"                       
"slot id."                       /"hwXQoSMulticastPktsDiscardInterfaceAlarmTable"                       /"hwXQoSMulticastPktsDiscardInterfaceAlarmEntry"                       ""The index of physical interface."                       !"The name of physical interface."                           /"A table of QoS CAR configuration information."                       *"QoS CAR configuration information Entry."                       :"This object indicates the index of the QoS CAR template."                       9"This object indicates the name of the QoS CAR template."                       Q"The value of this object identifies the Committed Information Rate(unit: kbps)."                       L"The value of this object identifies the Peak Information Rate(unit: kbps)."                       L"The value of this object identifies the Committed Burst Size(unit: bytes)."                       G"The value of this object identifies the Peak Burst Size(unit: bytes)."                       B"RowStatus. Three actions are used: active, createAndGo, destroy."                       *"A table of QoS CAR applied on interface."                       /"QoS CAR application information on interface."                       ""The index of physical interface."                       '"The direction of QoS CAR application."                       "The name of QoS CAR."                       B"RowStatus. Three actions are used: active, createAndGo, destroy."                       ,"A table of QoS CAR statistics information."                       $"Statistics information of QoS CAR."                       ""The index of physical interface."                       "The name of QoS CAR."                       "Passed packets."                       "Passed bytes."                       "Discarded packets."                       "Discarded bytes."                       ""Reset flag enable(1),disable(2)."                           0"hwXQoSUnicastPktsCongestionInterfaceAlarmTable"                       0"hwXQoSUnicastPktsCongestionInterfaceAlarmEntry"                       !"The name of physical interface."                       &"The direction of physical interface."                          "The SNMP trap is generated when the rate of packet exceeded the storm-control Threshold.
                hwXQoSStormControlIfIndex: The interface index,equal to ifIndex.
                hwXQoSStormControlIfName: The interface name.
                hwXQoSStormControlType: The type of storm control.
                hwXQoSStormControlThreshold: The threshold of the packets rate.
                hwXQoSStormControlMode: The mode of the packets.
                hwXQoSStormControlActionName: The storm control action."                �"The SNMP trap is generated when rate of packets is less than the storm control threshold.
                hwXQoSStormControlIfIndex: The interface index,equal to ifIndex.
                hwXQoSStormControlIfName: The interface name.
                hwXQoSStormControlType: The type of storm control.
                hwXQoSStormControlThreshold: The threshold of the packets rate.
                hwXQoSStormControlMode: The mode of the packets."                     &"hwXQoSPacketsDropInterfaceAlarmTable"                       &"hwXQoSPacketsDropInterfaceAlarmEntry"                       !"The name of physical interface."                       !"Queue Id of physical interface."                       "Slot where packets droped."                           !"hwXQoSRcyPortPktsDropAlarmTable"                       !"hwXQoSRcyPortPktsDropAlarmEntry"                       $"Recycle port where packets droped."                       "Slot where packets droped."                       "Chip where packets droped."                           $"hwXQoSUnicastPktsDiscardAlarmTable"                       $"hwXQoSUnicastPktsDiscardAlarmEntry"                       
"slot id."                           9"A table about storm suppress configuration information."                       "hwXQoSStormSuppressAlarmEntry"                       '"The interface index,equal to ifIndex."                       "The interface name."                       @"A table about storm suppress packet alarm information by slot."                       #"HwXQoSStormSuppressSlotAlarmEntry"                       "The slot."                           $"hwXQoSIngressPktsDiscardAlarmTable"                       $"hwXQoSIngressPktsDiscardAlarmEntry"                       
"slot id."                           %"hwXQoSIngressAgingDiscardAlarmTable"                       %"hwXQoSIngressAgingDiscardAlarmEntry"                       
"slot id."                           "hwXQoSIfCarDiscardAlarmTable"                       "hwXQoSIfCarDiscardAlarmEntry"                       
"slot id."                       "interface name."                       "interface car direction."                           n"It will alarm when the redirect nexthop address did not match the network segment of the outbound interface."                       n"It will alarm when the redirect nexthop address did not match the network segment of the outbound interface."                       |"Behavior ID of the Behavior when the redirect nexthop address did not match the network segment of the outbound interface."                       {"Redirect type the Behavior when the redirect nexthop address did not match the network segment of the outbound interface."                       v"Name of the interface when the redirect nexthop address did not match the network segment of the outbound interface."                           "hwXQosQueueExcepAlarmTable"                       "hwXQosQueueExcepAlarmEntry"                       
"slot id."                       "protocal."                           "hwXACLFEIMemoryFullAlarmTable"                       "hwXACLFEIMemoryFullAlarmEntry"                       
"slot id."                           "hwXQoSPfcTurnOffAlarmTable"                       "hwXQoSPfcTurnOffAlarmEntry"                       	"ifname."                       "priority."                       "detect number."                       "threshold."                           "hwXQoSPfcTurnOffResumeTable"                       "hwXQoSPfcTurnOffResumeEntry"                       	"ifname."                       "priority."                           "hwXQoSPfcDeadLockAlarmTable"                       "hwXQoSPfcDeadLockAlarmEntry"                       	"ifname."                       "priority."                       "detect number."                       "threshold."                           "hwXQoSPfcDeadLockResumeTable"                       "hwXQoSPfcDeadLockResumeEntry"                       	"ifname."                       "priority."                           6"A table about multicast packets statistics of queue."                       8"The entry about multicast packets statistics of queue."                       "The interface index."                       "The queue index."                       ("The passed packets count of the queue."                       &"The passed Bytes count of the queue."                       '"The passed packets rate of the queue."                       %"The passed Bytes rate of the queue."                       ("The droped packets count of the queue."                       &"The droped Bytes count of the queue."                       '"The droped packets rate of the queue."                       %"The droped Bytes rate of the queue."                               W"The compliance statement for entities that implement 
        extend QoS on a router."                   *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 "The HUAWEI defend trap info."                     *"This is a optional group of information."                 $"This is Sred group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 '"This is Shaping group of information."                 *"This is a optional group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 8"This is different server domain  group of information."                 )"This is statistic group of information."                 )"This is statistic group of information."                 '"This is shaping group of information."                 '"This is shaping group of information."                 %"This is PPPoE group of information."                 :"This is VLAN broadcast suppression group of information."                 5"This is the redirect next hop group of information."                 "Description."                 " hwXQoSCommonInboundGroup "                 " hwXQoSPppInboundGroup "                 " hwXQoSServiceclassGroup "                 " hwXQoSPhbGroup "                 " hwXQoSFieldDeiGroup "                 " hwXQoSPicForwardingGroup "                 " hwXQoSCarTableGroup "                 " hwXQoSPortShapingGroup "                 " hwXQoSQueueGroup "                 " hwXQoSCarStatisticsGroup "                 " hwXQoSCpRateLimitGroup "                 "Description."                 C"This is the drop packets statistics of port group of information."                 D"This is the drop packets statistics of queue group of information."                 2"This is Interface schedule group of information."                 0"This is schedule profile group of information."                 "Description."                 "Description."                 "Description."                 ?"This is a group of HardPipe stastitics for access interfaces."                 ,"This is CAR Resource group of information."                        