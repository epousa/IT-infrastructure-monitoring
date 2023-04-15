�-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: This mib file is used for management of huawei Class Based
--              QoS information.
-- Reference:
-- Version:     V2.32
-- History:
--              V1.0 tianli,2004.4.10,publish
--              V1.1 lizhiyong, 2004-9-14
--                  modify the hyphens which is not allowed used in SMIv2
--              v1.2
--                  changed by yangjianjun  change description of hwCBQoSMatchRuleIntValue1 and hwCBQoSMatchRuleIntValue2
--                  changed by wanghao      add an object hwCBQoSQueueCbsRatio
--                  changed by peigangqiang for LR, NestPolicy, IPV6 QoS
--              v1.3
--                  modified by chengang
--                  modified by zhangwenwu
--                  modified by hezhifeng
--                  modified by wanglili
--              v1.4
--                  modified by zhangwenwu 2005-11-17
--              v1.5
--                  modified by dongling 2008-07-12
--              v2.13
--                  modified by zhoucongya 2014-02-19
--              v2.14
--                  modified by zhangliang 2014-05-27
--              v2.15
--                  modified by caoyanping 2015-04-21
--              v2.16
--                  modified by yanruiqing 2015-09-01
--              v2.17
--                  modified by liuxiaoyan 2015-09-17
--              v2.18
--                  modified by liuxiaoyan 2016-05-13
--              v2.22
--                  modified by liye 2016-06-03
--              v2.23
--                  modified by wangcheng 2016-06-30
--              v2.24
--                  modified by shanruitang 2016-07-05
--              v2.25
--                  modified by yanruiqing 2016-08-22
--              v2.26
--                  modified by zhangyong 2016-10-19
--              v2.27
--                  modified by wangcheng 2016-11-30
--              v2.29
--                  modified by chenlong  2017-1-23
--              v2.30
--                  modified by chenlong  2017-1-23
--              v2.32
--                  modified by hanhongyun  2018-1-29
-- ==========================================================================
   $"Strict(1)
                Loose(2)"              e"IP-Prec(1)
                DSCP(2)
                MPLS-EXP(3)
                VLAN-8021p(4)
                ATM-CLP(5)
                FR-DE(6)
                QoS-Local-ID(7)
                IPV6-DSCP(8)
                Local-Prec(9)
                destination-mac(10)
                VLAN-ID(11)     
                Vlan-Protocol(12)
                "               g"CIR Unit:
                Absolute, Unit bps (1)
                Percent, Unit % (2)
                "               $"Strict(1)
                Loose(2)"                "The Direction Policy apply on."               �"Cp(1)
                Ip-nexthop(2)
                Lsp-label(3)
                Ipv6-cp(4)
                Ipv6-nexthop(5)
                Lsp-path(6)
                "               n"Bandwidth Unit:
                Absolute, Unit Kbps (1)
                Percent, Unit % (2)
                "               �"CS7(8)
                CS6(7)
                EF(6)
                AF4(5)
                AF3(4)
                AF2(3)
                AF1(2)
                BE(1)"               "Type of Match Rule. "               6"UCL(0)
                ACL(1)
                ALL(2)"               C"IP-Prec Based (1)
                DSCP Based (2)
                "               �"Queueing Type:
                EF: (1)
                AF: (2)
                WFQ: (3)
                LLQ: (4)
                "               ~"Fix-packets(1)
                Fix-time(2)
                Random-packets(3)
                Random-time(4)
                "              j"The actions taken when packets conforming or exceeding the configured
                CIR:
                    pass (1),
                    discard (2),
                    remark IP Precedence (3),
                    remark DSCP(4),
                    remark Mpls Exp(5),
                    remark (6),
                    remark 8021p(7)
                "                                     �"The HUAWEI-CBQOS-MIB contains objects to
                Manage configuration and Monitor running state
                for Class Based QoS feature.                    
        
        " �"Huawei Industrial Base
  Bantian, Longgang
   Shenzhen 518129
   People's Republic of China
   Website: http://www.huawei.com
   Email: support@huawei.com
 " "201801291931Z" "201801151931Z" "201701231931Z" "201701231931Z" "201612141025Z" "201611301025Z" "201607051025Z" "201607051025Z" "201607051025Z" "201606301025Z" "201606031025Z" "201605131719Z" "201604141737Z" "201512031737Z" "201512021737Z" "201509171808Z" "201509011737Z" "201503281808Z" "201402191737Z" "201402191737Z" "201307201600Z" "201306041600Z" S"MOD HwCBQoSMultiPolicyStatisticsEntry HwCBQoSMultiPolicyStatisticsClassifierEntry" ,"MOD hwCBQoSPolicyStatisticsClassifierTable"H"MOD  hwCBQoSBehaviorCfgInfoTable  hwCBQoSClassifierCfgInfoTable    hwCBQoSCarCfgInfoTable  hwCBQoSCarCir  hwCBQoSCarCbs  hwCBQoSCarPir   hwCBQoSCarPbs  hwCBQoSRemarkCfgInfoTable  hwCBQoSServiceClassCfgInfoTable  hwCBQoSPolicyCfgInfoTable   hwCBQoSPolicyClassCfgInfoTable  hwCBQoSIfApplyPolicyTable  hwCBQoSIfVlanApplyPolicyTable  hwCBQoSCarStatisticsTable  hwCBQoSPolicyStatisticsTable  hwCBQoSClassifierStatisticsTable  hwCBQoSPolicyStatisticsClassifierTable  hwCBQoSGlobalCarStatisticsTable  hwCBQoSGlobalPolicyStatisticsTable  hwCBQoSGlobalClassifierStatisticsTable  OBJECT-TYPE " S"MOD HwCBQoSMultiPolicyStatisticsEntry HwCBQoSMultiPolicyStatisticsClassifierEntry" ;"MOD  hwCBQoSCarStatisticsTable hwCBQoSCarExceededByteRate" ("Add hwCBQoSGlobalApplyMultiPolicyTable" ,"MOD  hwCBQoSGlobalCarStatisticsTable INDEX" 7"MOD  hwCBQoSPolicyCfgInfoTable hwCBQoSPolicyShareFlag" -"hwCBQoSRedirectCfgInfoTable hwCBQoSWredType" "MOD hwCBQoSMatchRuleType" f"ADD hwCBQoSUpdateUserQueueResourceNotEnoughAlarmTable hwCBQoSSetUserQueueResourceNotEnoughAlarmTable" "ADD hwCBQoSSubPolicyClassName" o"ADD hwCBQoSGlobalCarStatisticsTable hwCBQoSGlobalPolicyStatisticsTable hwCBQoSGlobalClassifierStatisticsTable" !"hwCBQoSPolicyStatClassifierName" !"hwCBQoSPolicyStatClassifierName" ."MOD hwCBQoSIfApplyPolicyLinkLayer mpls-layer" ["MOD hwCBQoSClassifierCfgInfoEntry hwCBQoSBehaviorCfgInfoEntry hwCBQoSCarCfgInfoEntry NODE" '"MOD HwCBQoSMatchRuleCfgInfoEntry NODE" 7"ADD hwCBQoSPolicyStatSubPolicyClassifierRunInfoTable "T"MOD hwCBQoSClassifierName hwCBQoSClassifierName hwCBQoSBehaviorName hwCBQoSPolicyName hwCBQoSPolicyClassClassifierName hwCBQoSPolicyClassBehaviorName hwCBQoSIfApplyPolicyName hwCBQoSAtmPvcApplyPolicyName   hwCBQoSIfVlanApplyPolicyName hwCBQoSVlanApplyPolicyName hwCBQoSTrapPolicyName hwCBQoSQueryPolicyName hwCBQoSQueryClassifierName NODE" �"ADD hwCBQoSIfApplyMultiPolicyTable  hwCBQoSVlanApplyMultiPolicyTable  hwCBQoSMultiPolicyStatisticsTable  hwCBQoSMultiPolicyStatisticsClassifierTable" '"MOD hwCBQoSPolicyClassifierIndex NODE"                      "The value of this object identifies the index of the next available traffic classifier.
                The index defined when the user creates a traffic class must be the same as the value of hwCBQoSClassifierIndexNext; otherwise, the traffic class cannot be created."                       �"This table describes the traffic classification configuration table. Classes are classified into system-defined classes and user-defined classes. System-defined classes cannot be created, modified, or deleted."                       #"  hwCBQoSClassifierCfgInfoEntry ."                       \"This object indicates the traffic classification index. The value ranges from 0 to 65535. "                      
"This object indicates the name of the traffic classifier.
The value of this object is a string of 1 to 127 visible ASCII characters.
This object has no default value.
No space can exist between characters in the string. The initial space and end space are ignored."                       �"The value of this object identifies the number of the matching rules for the traffic classifier.
The value ranges from 0 to 16.
This object has no default value."                       �"The value of this object identifies the relationship between matching rules.
The value of this object can be AND(1) or OR(2).
The default value is OR(2)."                       �"Configuration layer of traffic classifier.
                Only hardware QoS support it.
                -1(unavailable) is returned only when getting value from software QoS.
                -1(unavailable) can't be set."                       |"This object indicates the row status. The value can be one of the following: Active (1), CreateAndGo (4), and Destroy (6)."                       2"A table of Match Rule configuration information."                       -"Match Rule Configuration Information Entry."                       v"The value of this object identifies the rule index.
The value ranges from 0 to 15.
This object has no default value."                       �"The value of this object identifies the if-match rule is a Match or NotMatch statement.
The value of this object can be match(1) or match-not(2)."                      �"The value of this object identifies the rule type.
                The value of this object can be any of the following: 
                any(1)
                ipv4-acl(2)
                rtp-port(3)
                protocol(4)
                ip-prec(5)
                dscp(6)
                vlan-8021p(7)
                mpls-exp(8)
                source-mac(9)
                destination-mac(10)
                classifier(11)
                inbound-interface(12)
                mac-group(13)
                ipv6-acl(14)
                qos-local-id(15)
                fr-de(16)
                atm-clp(17)
                ipv6-dscp(18)
                ipv6-next-header(19)
                ipv6-any(20)
                ipv6-dst-ip(21)
                ipv6-src-ip(22)
                rule-string(23)
                vlan-id(24)
                outbound-interface(25)
                l2-protocol(26)
                l2Acl(27),
                tcpFlag(28),
                cvlanId(29),
                doubleTag(30),
                sourceQosLocalId(31),
                cvlan8021p(32),
                discard(33),
                dlci(34),
                app-protocol(35),
                protocol-group(36),
                vlanid-cvlanid(37),
                tagged-vxlan(38),
                untagged-vxlan(39),
                transit-tagged-vxlan(40),
                transit-untagged-vxlan(41)
                This object has no default value.
                "                      �"This object indicates the rule contents. The value range and the default value of the object vary with hwCBQoSMatchRuleType.
When the supported types are Source-MAC(9) and Destination-MAC(10), 
the value of this object can be a string of six ASCII characters, 
which represents a MAC address. For example, abcdef indicates the MAC address 6162-6364-6566.
When the supported types are ipv6-dst-ip(21) and ipv6-src-ip(22), 
the value of this object is a string of 16 ASCII characters, 
which represents an IPv6 address. For example, 1111111111111111 indicates an IPv6 address 3131-3131-3131-3131-3131-3131-3131-3131.
This object has no default value.
                "                      �"This object indicates the rule contents. The value range and the default value of the object vary with hwCBQoSMatchRuleType.
When the supported type is ipv4-acl(2), the value of this object ranges from 2000 to 4099.
When the type is ip-prec(5), the value of this object ranges from 2^1 to 2^7, respectively representing the IP precedence from 0 to 7.
When the supported types are dscp(6) and ipv6-dscp(18), the value ranges from 2^1 to 2^32, respectively representing the DSCP value ranging from 32 to 63.
When the type is ipv6-acl(14), the value of this object ranges from 2000 to 3999.
When the type is ipv6-dscp(18), the value of this object ranges from 0 to 63.
When the type is Ipv6-next-header(19), the value ranges from 0 to 255.
When the type is tcp-flag(27), the value ranges from 0 to 63.
When the types are ipv6-dst-ip(21) and ipv6-src-ip(22), the value ranges from 0 to 128.
This object has no default value.
                "                      8"This object indicates the rule contents. The value range and the default value of the object vary with hwCBQoSMatchRuleType.
When the supported type is dscp(6), the value ranges from 2^1 to 2^32, respectively representing the DSCP value ranging from 0 to 31.
This object has no default value.
                 "                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                      `"Value of Match Rule.
                Source-MAC(9): SIZE (0..6) HHHHHH  for example: ffff00 means the match rule is 'if-match source-mac XX-XX-XX ff-ff-00'
                Destination-MAC(10): SIZE (0..6) HHHHHH for example: ffff00 means the match rule is 'if-match destination-mac XX-XX-XX ff-ff-00'
                default:0XFFFFFF
                "                       "Start vlan ID."                       "End vlan ID."                       "Inner source IP address."                       >"Mask length of inner source IP address, ranges from 0 to 32."                       "Inner destination IP address."                       C"Mask length of inner destination IP address, ranges from 0 to 32."                       K"Inner source port, ranges from 0 to 65535.
		 The invalid value is 65536."                       P"Inner destination port, ranges from 0 to 65535.
		 The invalid value is 65536."                       I"Inner IP protocol, ranges from 0 to 255.
		 The invalid value is 65536."                       B"Vxlan VNI, ranges from 1 to 16000000.
		 The invalid value is 0."                           �"The value of this object identifies the index of the next available traffic behavior.
The index used when the user creates a traffic behavior must be the same as the value of hwCBQoSBehaviorIndexNext; otherwise, the traffic behavior cannot be created.
"                       �"This table is used to configure the traffic behavior, to be specific, specify the action for the traffic that matches a traffic classification rule."                       3"Traffic Behavior Configuration Information Entry."                       q"This object indicates the traffic behavior index. The value ranges from 0 to 65535. There is no default value.
"                       �"This object indicates the name of a traffic classifier. The value is a string of 1-127 ASCII characters that can be displayed. Default value: Note: The character string cannot contain spaces. Spaces at the beginning or end are ignored.
"                       �"This object indicates the row status of a traffic behavior. The value can be Active (1), CreateAndGo (4), or Destroy (6). There is no default value.
"                       �"This table is used to configure traffic policing. The traffic rate is limited according to the configuration in this table to protect different customers' rights and provide fair and reliable services."                       &"CAR Configuration Information Entry."                       }"This object indicates the CIR. The value is an integer ranging from 0 to 4294967295, in kbit/s. There is no default value.
"                       h"This object indicates the CBS value. The value ranges from 0 to 4294967295. There is no default value."                       �"Excess Burst Size. Unit: byte. 0..19375000
                Only software QoS support this node.
                -1 is returned only when getting value from hardware QoS.
                -1 can't be set.
                "                       |"This object indicates the PIR. The value is an integer ranging from 0 to 4294967295, in kbit/s. There is no default value."                       |"This object indicates the PBS. The value is an integer ranging from 0 to 4294967295, in bytes. There is no default value.
"                      "This object indicates the action taken when the CIR is not reached. The value can be one of the following: Pass (1), discard (2), remark IP Precedence (3), remark DSCP (4), remark Mpls Exp (5), remark (6), and remark 8021p (7). The default value is pass (1).
                 "                       ~"This object indicates the re-marked internal priority of packets when the CIR is not reached. The value ranges from 0 to 83."                       �"This object indicates the re-marked internal priority of packets when the CIR is not reached. The value ranges from 0 to 83.
                 "                       �"This object indicates the re-marked internal priority of packets when the CIR is exceeded but the PIR is not exceeded. The value ranges from 0 to 83."                       ]"This object indicates the traffic behavior when the rate exceeds the PIR.
                 "                      ["The value is to remark When red action is remarking.
                For remarking DSCP, the range is 11~81; 
                the high bit represents service-class,the range is 1~8 (1:be 2:af1 3:af2 4:af3 5:af4 6:ef 7:cs6 8:cs7)
                the low bit represents color,the range is 1~3 (1:green 2:yellow 3:red)
                For remarking IP Precedence and MPLS EXP, the range is 0~7;
                Only software QoS support this node.
                -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
                -1 can't be set."                       �"This object indicates the row status of the flow CAR. The value can be one of the following: active, createAndGo, and destroy."                       d"aggregationCar(1): aggregation car;
                 noneAggregationCar(2) : none aggregation car."                       3"A table of GTS feature configuration information."                       &"GTS Configuration Information Entry."                       *"Committed Information Rate. Unit: kbytes"                       M"Committed Burst Size. Unit: bit
                default: max(cir*1/2,15000)"                       "Excess Burst Size. Unit: bit"                       "The length of GTS buffer."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       "Peak information rate."                       �"This table is used to configure flow-based re-marking. With traffic classification, different priorities are marked for different flows to provide differentiated services."                       ,"Remarking Configuration Information Entry."                      "The value of this object identifies the re-mark type.
                The value can be any of the following:
                IP-Prec(1)
                DSCP(2)
                MPLS-EXP(3)
                VLAN-8021p(4)
                ATM-CLP(5)
                FR-DE(6)
                QoS-Local-ID(7)
                IPV6-DSCP(8)
                Local-Prec(9)
                destination-mac(10)
                VLAN-ID(11)     
                Vlan-Protocol(12)
                This object has no default value.
                "                       �"This object indicates the re-mark value. When hwCBQoSRemarkType is set to ip-prec (1), mpls-exp (3), or vlan-8021p (4), the value ranges from 0 to 7. When hwCBQoSRemarkType is DSCP (2) or ipv6-dscp (8), the value ranges from 0 to 63.
"                       �"Destination-MAC(10): SIZE (0..6) HHHHHH for example: 010102020303 means the remark action is 'remark destination-mac 0101-0202-0303';
                 Vlan-Protocol(12):SIZE(3..4) HEX<600-FFFF> "                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       8"A table of queueing feature configuration information."                       ("Queue Configuration Information Entry."                       r"Queueing Type:
                EF: (1)
                AF: (2)
                WFQ: (3)
                LLQ: (4)"                       �"The drop type of queue. Only valid for AF and WFQ queue.
                -1 is returned only when getting value about EF queue.
                -1 can't be set."                       �"The length of QueueLength. Only valid for tailDrop type
                of AF and WFQ queue.
                -1 is returned only when getting value about EF queue or wred type
                of AF and WFQ queue.
                -1 can't be set."                       �"Bandwidth Unit:
                Absolute, Unit Kbps (1)
                Percent, Unit % (2)
                Only valid for EF and AF queue.
                -1 is returned only when getting value about WFQ queue.
                -1 can't be set."                      "Bandwidth value:
                Absolute value: 8~1000000. Unit: Kbps
                Percent value: 1~100.
                Only valid for EF and AF queue.
                -1 is returned only when getting value about WFQ queue.
                -1 can't be set."                       �"Committed Burst Size. Unit: byte.
                Only valid for EF queue.
                -1 is returned only when getting value about AF or WFQ queue.
                -1 can't be set."                       �"Max number of hashed queues (a power of 2).
                Only valid for WFQ.
                -1 is returned only when getting value about AF or EF queue.
                -1 can't be set."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       �"Committed Burst Size Ratio. Unit: byte. CBS = CBS_Ratio * Bandwidth(k bps)
                Only valid for EF queue.
                -1 is returned only when getting value about AF or WFQ queue.
                -1 can't be set."                       ,"A table of WRED configuration information."                       '"WRED Configuration Information Entry."                       2"IP-Prec Based (1)
                DSCP Based (2)"                       3"Specify weight for calculating mean queue depth. "                       �"The index of wred class entry.
                 -1 is returned when no drop profile is used.
                 -1 can not be set."                       S"RowStatus. Three actions are used: 
                 active, createAndGo, destroy"                       ,"A table of WRED configuration information."                       -"WRED Class Configuration Information Entry."                       �"The class value.
                For IP precedence based WRED, the class is IP precedence,
                and range is 0~7.
                For DSCP based WRED, the class is DSCP, and range is 0~63."                       "The low limit of queue depth."                        "The high limit of queue depth."                       &"The discard probability denominator."                       +"A table of Nat configuration information."                       &"Nat Configuration Information Entry."                       "address group's name"                       ""1: no pat
                2: pat"                       "The service class. DEFVAL: 2"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       0"A table of Firewall configuration information."                       +"Firewall Configuration Information Entry."                       �"The value of this object identifies the firewall action.
The value can be permit(1) or deny(2).
The default value is permit(1).
"                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       0"A table of Sampling configuration information."                       +"Sampling Configuration Information Entry."                       �"This object indicates the sampling type.
The value can be any of the following:
Fix-packets(1)
Fix-time(2)
Random-packets(3)
Random-time(4)
This object has no default value.
"                       �"This object indicates the sampling parameter.
The value can be any of the following:
Fix-packets (1-65535)
Fix-time (5-30000ms)
Random-packets (1-65535)
Random-time (3/6/12/24/48/96/192/383.5/767/1534/3068/6136ms)
This object has no default value.
"                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       1"A table of Line Rate configuration information."                       %"LR Configuration Information Entry."                       V"CIR Unit:
                Absolute, Unit bps (1)
                Percent, Unit % (2)"                       ~"Committed Information Rate.
                Absolute value: 8000..155000000. Unit: bps
                Percent value: 1~100."                      ]"Committed Burst Size.
                When CIR is absolute value,
                CBS value: 15000..155000000,
                default value: max(cir*1/2,15000),
                Unit: bit;
                When CIR is percent value,
                CBS value: 50..2000,
                default value: 500,
                Unit: ms.
                "                       �"Excess Burst Size.
                When CIR is absolute value,
                EBS value: 0..155000000, Unit: bit;
                When CIR is percent value,
                EBS value: 0..2000, Unit: ms."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       :"A table of Hierachical Policy configuration information."                       5"Hierachical Policy Configuration Information Entry."                       %"Name of hierachical traffic policy."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       0"A table of Redirect configuration information."                       +"Redirect Configuration Information Entry."                       �"The value of this object identifies the traffic redirection type.
The value can be ip-nexthop(2), ipv6-nexthop(5), or lsppath(6).
This object has no default value.
"                       �"This object indicates the destination address of the redirected traffic.
The value of this object can be any valid IP address.This object has no default value.                                             
"                      :"The value of this object identifies the outbound interface of the redirected traffic.
This object has no value range, and the default value is 0.The outbound interface cannot be an interface of the Main Processing Unit (MPU) or a Layer 2 interface.
The value 0 indicates that no outbound interface is specified.
"                       f"The value of this object identifies the VLAN ID of the outbound interface of the redirected traffic."                       K"The value of this object identifies the traffic redirection control type."                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       �"This object indicates the next hop of an LSP.
The value of this object can be any valid IP address.
This object has no default value.
"                       �"The value of this object identifies whether a primary or a standby LSP is used.
The value can be mainLSPPath(1) or backupLSPPath(2).
The default value is mainLSPPath(1).
"                       ."A table of Mirror configuration information."                       )"Mirror Configuration Information Entry."                        "The mirror observe port number"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       ,"A table of Urpf configuration information."                       '"Urpf Configuration Information Entry."                       �"The value of this object identifies URPF control type.
The value can be strict(1) or loose(2).
This object has no default value.
"                       �"The value of this object identifies whether URPF flags the default route.
The value can be 0 or 1.
0: indicates that the default route is not allowed.
1: indicates that the default route is allowed.
The default value is 1.
"                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       -"A table of Count configuration information."                       ("Count Configuration Information Entry."                       "The Count action "                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       ,"A table of Drop configuration information."                       '"Drop Configuration Information Entry."                       "The Drop Precedence "                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       -"A table of configuring load balance method."                       /"Load Balance Configuration Information Entry."                       �"The value of this object identifies the type of the algorithm for load balancing.
The value can be flow(1) or packet(2).
The default value is flow(1). 
"                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       :"A table of Egress GTS feature configuration information."                       5"Egress GTS feature configuration information Entry."                       "Interface index.  "                       ("Committed Information Rate. Unit: kbps"                       #"Peak information rate. Unit: kbps"                       I"RowStatus. Three actions are used: active,
        createAndGo, destroy"                       <"This table is used to record service class configurations."                       7"ServiceClass feature configuration information Entry."                       %"This object indicates the queue ID."                       ;"This object indicates the priority color of a flow queue."                       �"This object indicates the priority row status of a flow queue. You can perform one of the following actions: active, createAndGo, and destroy."                       $"QOS service class no remark flag. "                       9"A table of Redirect MultiNHP configuration information."                       4"Redirect MultiNHP Configuration Information Entry."                       4"Indicates the first available next-hop IP address."                       <"Indicates the first available next-hop outbound interface."                       5"Indicates the second available next-hop IP address."                       ="Indicates the second available next-hop outbound interface."                       4"Indicates the third available next-hop IP address."                       <"Indicates the third available next-hop outbound interface."                       5"Indicates the fourth available next-hop IP address."                       ="Indicates the fourth available next-hop outbound interface."                       !"Indicates the redirection type."                       "Indicates the row status."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       4"A table of Remark Ip-Df configuration information."                       /"Remark Ip-Df Configuration Information Entry."                       F"
                0: remark ip-df 0
                1: remark ip-df 1"                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       4"A table of drop profile configuration information."                       /"Drop Profile Configuration Information Entry."                       �"The value of this object identifies the index of the drop profile.
                 The value ranges from 1 to 31.
                 This object has no default value."                      "This object indicates the name of the drop profile.
                 The value of this object is a string of 1 to 31 visible ASCII characters, with no default value.
                 Space cannot exist between the characters in the string. The initial space and end space are ignored."                       t"
                0: based on IP-precedence
                1: based on dscp
                The default value is 0"                       �"This object indicates the row status.
                 The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
                 This object has no default value."                       :"A table of drop profile class configuration information."                       5"Drop Profile Class Configuration Information Entry."                       "The value of this object identifies the value of WRED based on the class.
                 IP precedence based WRED: the value ranges from 0 to 31. 
                 DSCP (DiffServ code points) based WRED: the value ranges from 0 to 63
                 This object has no default value."                       �"This object indicates the low limit for the WRED, the percent of the current queue length.
                 The range of the value is 0 to 100.
                 The default value is 30."                       �"This object indicates the high limit for the WRED, the percent of the current queue length.
                 The range of the value is 0 to 100.
                 The default value is 100."                       �"This object indicates the discard probility for the WRED.
                 The range of the value is 0 to 100.
                 The default value is 10."                       4"A table of redirect vsi configuration information."                       5"Drop Profile Class Configuration Information Entry."                       *"the vsi name of data flow redirected to."                       �"This object indicates the row status.
                The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
                This object has no default value.
                "                       7"A table of mqc Suppression configuration information."                       2"Mqc Suppression Configuration Information Entry."                       -"This object indicates the suppression type."                       �"The value of this object identifies the Committed Information Rate (CIR).
                 The value ranges from 100 to 1000000, in kbit/s, with no default value.
                "                       �"The value of this object identifies the Committed Burst Size (CBS).
                 The value ranges from 10000 to 33554432 bytes.
                 The default value is 10000 bytes.
                "                       �"The value of this object identifies the action adopted when CIR is not reached.
                 pass (1),
                 discard (2),
                 The default value is pass (1).
                 "                      �"The value is to remark When green action is remarking.
                the range is 11~81;   
                the high bit represents service-class,the range is 1~8 (1:be 2:af1 3:af2 4:af3 5:af4 6:ef 7:cs6 8:cs7)
                the low bit represents color,the range is 1~3 (1:green 2:yellow 3:red)
                Only software QoS support this node.
                -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
                -1 can't be set."                       �"The value of this object identifies the action performed when CIR is exceeded.
                 pass (1),
                 discard (2),
                 The default value is pass (1).
                 "                      ["The value is to remark When red action is remarking.
                For remarking DSCP, the range is 11~81; 
                the high bit represents service-class,the range is 1~8 (1:be 2:af1 3:af2 4:af3 5:af4 6:ef 7:cs6 8:cs7)
                the low bit represents color,the range is 1~3 (1:green 2:yellow 3:red)
                For remarking IP Precedence and MPLS EXP, the range is 0~7;
                Only software QoS support this node.
                -1 is returned only when getting value from hardware QoS or when action being pass,discard of software QoS.
                -1 can't be set."                       �"This object indicates the row status.
                The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
                This object has no default value.
                "                           �"This object contains an appropriate value to be used for hwCBQoSPolicyIndex
                when creating rows in the hwCBQoSPolicyCfgInfoTable. Begin with 0."                       A"This table describes the basic information about QoS policies.."                       1"Traffic Policy Configuration Information Entry."                       {"The value of this object identifies the policy index.
The value ranges from 1 to 1024.
This object has no default value.
"                       �"This object indicates the policy name.
The value of this object is a string of 1 to 127 visible ASCII characters.
This object has no default value.
Space cannot exist between the characters in the string. The initial space and end space are ignored.
"                       I"This object indicates the number of classes associated with the policy."                       J"This object indicates the configuration mode associated with the policy."                       ~"This object indicates the row status. The value can be one of the following: Active (1), CreateAndGo (4), and Destroy (6). 
"                       �"This object indicates whether the policy is shared. The value can be one of the following: multiple (1) and shared policy single (2). The default value is multiple (1).
"                       �"This object indicates the flag deciding whether the policy statistics are enabled.
The value of this object can be either of the following:
enabled(1) 
disabled(2) 
The default value is disabled (2).
"                       F"A table of QoS Policy classifier-behavior configuration information."                       f"This table describes the association between the traffic class and traffic behavior in a QoS policy."                       O"This object indicates the classifier index. The value ranges from 0 to 255. 
"                       �"The value of the object identifies the index of the classifier applied by a policy.
The value ranges from 0 to 4095.
This object has no default value.
"                      "This object indicates the policy class name in a QoS policy.
The value of this object is a string of 1 to 127 visible ASCII characters.
This object has no default value.
Space cannot exist between the characters in the string. The initial space and end space are ignored.
"                       ,"This object indicates the behavior index.
"                       �"This object indicates the behavior name. The value is a string of 1-127 ASCII characters that can be displayed. Default value: Note: The character string cannot contain spaces. The first and last spaces are ignored.
"                       ="This object indicates the priority of a traffic classifier."                       ~"This object indicates the row status. The value can be one of the following: Active (1), CreateAndGo (4), and Destroy (6). 
"                       6"Policy Share Mode feature configuration information."                       <"Policy Share Mode feature configuration information Entry."                       7"The flag that the share Mode of a policy  is enabled."                       R"RowStatus. Three actions are used: active,
                createAndGo, destroy."                           W"This table describes the attributes of an interface on which a QoS policy is applied."                       >"Policy applied on interface Configuration Information Entry."                       �"This object indicates the index of the interface to which the policy is applied. Value range: Default value: Note: The value cannot be the index of an interface on a main control board or a Layer 2 interface.
"                       �"The value of this object identifies the direction in which a policy is applied.
The value can be inbound(1) or outbound(2).
This object has no default value.
"                       �"This object indicates the policy name.
The value of this object is a string of 1 to 127 visible ASCII characters.
This object has no default value.
Space cannot exist between the characters in the string. The initial space and end space are ignored.
"                       ~"This object indicates the row status. The value can be one of the following: Active (1), CreateAndGo (4), and Destroy (6). 
"                       O"This object indicates the forwarding layer at which the policy takes effect.
"                       !"A table of QoS policy instance."                       <"Policy applied on ATM PVC Configuration Information Entry."                       ("ATM Interface Index, equal to ifIndex."                       "VPI value of ATM Interface."                       "VCI value of ATM Interface."                       L"Policy direction:
                inbound (1)
                outbound (2)"                       "Name of Traffic Policy."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       ["This table is used to display information about traffic policies applied to VLAN packets."                       B"Policy applied on Ethernet Vlan Configuration Information Entry."                       @"This object indicates the policy index of a Layer 2 interface."                       9"Indicates the direction to which the policy is applied."                       N"This object indicates the start VLAN ID of a policy on a Layer 2 interface.."                       E"Start VLAN ID or CE VID of a traffic policy on a Layer 2 interface."                       F"This object indicates the CE VID of a policy on a Layer 2 interface."                       "Indicates the policy name."                       �"This object indicates the status of the policy row on a Layer 2 interface. The value can be one of the following: active, createAndGo, and destroy."                       f"Indicates the link layer. The value range is: link-layer(1),all-layer(2),ip-layer(3),mpls-layer(4). "                       !"A table of QoS policy instance."                       ="Policy applied on fr class Configuration Information Entry."                       "The name of fr class."                       L"Policy direction:
                inbound (1)
                outbound (2)"                       "Name of Traffic Policy."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       !"A table of QoS policy instance."                       ;"Policy applied on FR PVC Configuration Information Entry."                       '"Fr Interface Index, equal to ifIndex."                       "Fr DLCI number."                       L"Policy direction:
                inbound (1)
                outbound (2)"                       "Name of Traffic Policy."                       !"A table of QoS policy instance."                       8"Policy applied on VSI Configuration Information Entry."                       ("VSI Interface Index, equal to ifIndex."                       "Vlan of Ethernet Interface."                       L"Policy direction:
                inbound (1)
                outbound (2)"                       "Name of Traffic Policy."                       Q"RowStatus. Three actions are used: active,
                createAndGo, destroy"                       %"A table of applying policy on VLAN."                       9"Policy applied on VLAN Configuration Information Entry."                       "VLAN number."                       �"Policy Direction:
                                 inbound(1), apply policy inbound;
                                 outbound(2), apply policy outbound."                       ."Policy name: The name of the applied policy."                       B"RowStatus. Three actions are used: active, createAndGo, destroy."                       !"hwCBQoSRuleNotSupportAlarmTable"                       !"hwCBQoSRuleNotSupportAlarmEntry"                       "hwCBQoSRuleDirection"                       "hwCBQoSRuleSlotID"                       "hwCBQoSRuleInfo"                       #"hwCBQoSActionNotSupportAlarmTable"                       #"hwCBQoSActionNotSupportAlarmEntry"                       "hwCBQoSActionDirection"                       "hwCBQoSActionSlotID"                       "hwCBQoSActionInfo"                       0"A table of applying multi-policy on interface."                       >"Policy applied on interface Configuration Information Entry."                       �"The value of this object identifies the index of the interface on which the policy is applied.
This object has no value range and default value. 
"                       {"Policy Direction:
                 inbound(1), apply policy inbound;
                 outbound(2), apply policy outbound."                       8"The value of this object identifies the policy index.
"                       "Name of the applied policy."                       �"This object indicates the row status.
The value of this object can be Active(1), CreateAndGo(4), or Destroy(6).
This object has no default value.
"                       +"A table of applying multi-policy on VLAN."                       9"Policy applied on VLAN Configuration Information Entry."                       "VLAN number."                       �"Policy Direction:
                                 inbound(1), apply policy inbound;
                                 outbound(2), apply policy outbound."                       7"The value of this object identifies the policy index."                       "Name of the applied policy."                       B"RowStatus. Three actions are used: active, createAndGo, destroy."                       &"hwCBQoSGlobalAclNotSupportAlarmTable"                       &"hwCBQoSGlobalAclNotSupportAlarmEntry"                       "hwCBQoSGlobalAclDirection"                       "hwCBQoSGlobalAclSlotID"                       3"hwCBQoSUpdateUserQueueResourceNotEnoughAlarmTable"                       3"hwCBQoSUpdateUserQueueResourceNotEnoughAlarmEntry"                       $"hwCBQoSUpdateUserQueueBehaviorName"                       "hwCBQoSUpdateUserQueueSlotID"                       "hwCBQoSUpdateUserQueueCir"                       "hwCBQoSUpdateUserQueuePir"                       0"hwCBQoSSetUserQueueResourceNotEnoughAlarmTable"                       0"hwCBQoSSetUserQueueResourceNotEnoughAlarmEntry"                       !"hwCBQoSSetUserQueueBehaviorName"                       "hwCBQoSSetUserQueueSlotID"                       -"A table of applying multi-policy on global."                       ;"Policy applied on global Configuration Information Entry."                       w"Chassis ID. When both this node and the next node(hwCBQoSGlobalApplyMultiPolicySlotId) are 0, it identifies all slot."                       {"slot ID. When both this node and the previous node(hwCBQoSGlobalApplyMultiPolicyChassisId) are 0, it identifies all slot."                       �"Policy Direction:
                                 inbound(1), apply policy inbound;
                                 outbound(2), apply policy outbound."                       7"The value of this object identifies the policy index."                       "Name of the applied policy."                       B"RowStatus. Three actions are used: active, createAndGo, destroy."                               �"A table of interface CBQ Running statistics. When policy using queue behavior is applied on
                interface the interface will using Class Based Queuing."                       !"Interface CBQ statistics entry."                       "Queue size of CBQ"                       ="The number of discarded packets which coundn't be enqueued."                       "Queue size of EF"                       "Queue size of AF"                       "Queue size of BE"                       "the number of Active Be Queue"                       #"the max number of Active Be Queue"                       "the total number of Be Queue"                       ""the Allocated number of Af Queue"                       s"A table of Running statistics for matching a classifier
                in a QoS policy applied on the interface."                       5"Classifier's matching statistics information entry."                       5"Number of packets matching a class in a QoS policy."                       h"Number of bytes matching a class in a QoS policy.
                Only software QoS support this node."                      "Average rate of the traffic matching a class in a QoS policy.
                For inbound QoS policy, it is the rate of the traffic input;
                For outbound QoS policy, it is the rate of the traffic output.
                Only software QoS support this node."                       <"Number of passed packets matching a class in a QoS policy."                       ="Number of dropped packets matching a class in a QoS policy."                       a"A table of Running statistics for CAR
                in a QoS policy applied on the interface."                       #"CAR statistics information entry."                        "Passed packets of green packet"                       "Passed bytes of green packet"                       ""Remarked packets of green packet"                        "Remarked bytes of green packet"                       #"Discarded packets of green packet"                       !"Discarded bytes of green packet"                       !"Passed packets of yellow packet"                       "Passed bytes of yellow packet"                       #"Remarked packets of yellow packet"                       !"Remarked bytes of yellow packet"                       $"Discarded packets of yellow packet"                       ""Discarded bytes of yellow packet"                       "Passed packets of red packet"                       "Passed bytes of red packet"                        "Remarked packets of red packet"                       "Remarked bytes of red packet"                       !"Discarded packets of red packet"                       "Discarded bytes of red packet"                       !"Rate of forwarded green packets"                       *"Rate of forwarded bytes of green packets"                       !"Rate of re-marked green packets"                       *"Rate of re-marked bytes of green packets"                       !"Rate of discarded green packets"                       *"Rate of discarded bytes of green packets"                       ""Rate of forwarded yellow packets"                       +"Rate of forwarded bytes of yellow packets"                       ""Rate of re-marked yellow packets"                       +"Rate of re-marked bytes of yellow packets"                       ""Rate of discarded yellow packets"                       +"Rate of discarded bytes of yellow packets"                       "Rate of forwarded red packets"                       ("Rate of forwarded bytes of red packets"                       "Rate of re-marked red packets"                       ("Rate of re-marked bytes of red packets"                       "Rate of discarded red packets"                       ("Rate of discarded bytes of red packets"                       a"A table of Running statistics for GTS
                in a QoS policy applied on the interface."                       "GTS statistics entry."                       ""Number of packets passed by GTS."                        "Number of bytes passed by GTS."                       %"Number of packets discarded by GTS."                       #"Number of bytes discarded by GTS."                       #"Number of packets delayed by GTS."                       !"Number of bytes delayed by GTS."                       "Queue size of GTS queue."                       g"A table of Running statistics for remarking
                in a QoS policy applied on the interface."                       "Remarking statistics entry."                       "Number of packets remarked."                       "Number of bytes remarked."                       c"A table of Running statistics for queue
                in a QoS policy applied on the interface."                       "Queue statistics entry."                       '"Number of packets matched to enqueue."                       %"Number of bytes matched to enqueue."                       "Number of packets enqueued."                       "Number of bytes enqueued."                       >"Number of packets discarded when enqueued by discard method."                       <"Number of bytes discarded when enqueued by discard method."                       %"Rate of packets matched to enqueue."                       #"Rate of bytes matched to enqueue."                       "Rate of packets enqueued."                       "Rate of bytes enqueued."                       <"Rate of packets discarded when enqueued by discard method."                       :"Rate of bytes discarded when enqueued by discard method."                       b"A table of Running statistics for WRED
                in a QoS policy applied on the interface."                       "WRED statistics entry."                       2"Number of packets that random-discarded by WRED."                       0"Number of packets that tail-discarded by WRED."                       `"A table of Running statistics for LR
                in a QoS policy applied on the interface."                       "LR statistics entry."                       !"Number of packets passed by LR."                       "Number of bytes passed by LR."                       $"Number of packets discarded by LR."                       ""Number of bytes discarded by LR."                       ""Number of packets delayed by LR."                        "Number of bytes delayed by LR."                       f"A table of Running statistics for redirect
                in a QoS policy applied on the interface."                       "Redirect statistics entry."                       "Number of packets Redirected."                       "Number of bytes Redirected."                       g"A table of Running statistics for fire wall
                in a QoS policy applied on the interface."                       "Fire wall statistics entry."                       "Number of packets Filtered."                       "Number of bytes Filtered."                       d"A table of Running statistics for mirror
                in a QoS policy applied on the interface."                       "Mirror statistics entry."                       "Number of packets Mirrored."                       "Number of bytes Mirrored."                       b"A table of Running statistics for urpf
                in a QoS policy applied on the interface."                       "Urpf statistics entry."                       "Number of packets passed."                       "Number of bytes passed."                       "Number of packets dropped."                       "Number of bytes dropped."                       d"A table of Running statistics for sample
                in a QoS policy applied on the interface."                       "Sample statistics entry."                       "Number of packets Sampled."                       "Number of bytes Sampled."                           �"A table of atm pvc CBQ Running statistics. When policy using queue behavior is applied on
                atm pvc atm pvc will using Class Based Queuing."                       "FR PVC CBQ statistics entry."                       "Queue size of CBQ"                       ="The number of discarded packets which coundn't be enqueued."                       "Queue size of EF"                       "Queue size of AF"                       "Queue size of BE"                       "the number of Active Be Queue"                       #"the max number of Active Be Queue"                       "the total number of Be Queue"                       ""the Allocated number of Af Queue"                       m"A table of Running statistics for matching a classifier
                in a QoS policy applied on ATM PVC."                       '"Classifier matching statistics entry."                       5"Number of packets matching a class in a QoS policy."                       3"Number of bytes matching a class in a QoS policy."                      "Average rate of the traffic matching a class in a QoS policy.
                For inbound QoS policy, it is the rate of the traffic input;
                For outbound QoS policy, it is the rate of the traffic output.
                Only software QoS support this node."                       ["A table of Running statistics for CAR
                in a QoS policy applied on ATM PVC."                       "CAR statistics entry."                       2"Number of packets that conforming specified CIR."                       0"Number of bytes that conforming specified CIR."                       !"Number of packets exceeded CIR."                       "Number of bytes exceeded CIR."                       0"Rate of packets that conforming specified CIR."                       ."Rate of bytes that conforming specified CIR."                       "Rate of packets exceeded CIR."                       "Rate of bytes exceeded CIR."                       ["A table of Running statistics for GTS
                in a QoS policy applied on ATM PVC."                       "GTS statistics entry."                       ""Number of packets passed by GTS."                        "Number of bytes passed by GTS."                       %"Number of packets discarded by GTS."                       #"Number of bytes discarded by GTS."                       #"Number of packets delayed by GTS."                       !"Number of bytes delayed by GTS."                       "Queue size of GTS queue."                       a"A table of Running statistics for remarking
                in a QoS policy applied on ATM PVC."                       "Remarking statistics entry."                       "Number of packets remarked."                       ]"A table of Running statistics for queue
                in a QoS policy applied on ATM PVC."                       "Queue statistics entry."                       '"Number of packets matched to enqueue."                       %"Number of bytes matched to enqueue."                       "Number of packets enqueued."                       "Number of bytes enqueued."                       <"Number of packets discard when enqueued by discard method."                       :"Number of bytes discard when enqueued by discard method."                       %"Rate of packets matched to enqueue."                       #"Rate of bytes matched to enqueue."                       "Rate of packets enqueued."                       "Rate of bytes enqueued."                       :"Rate of packets discard when enqueued by discard method."                       8"Rate of bytes discard when enqueued by discard method."                       \"A table of Running statistics for WRED
                in a QoS policy applied on ATM PVC."                       "WRED statistics entry."                       /"Number of packets randomly discarded by WRED."                       +"Number of packets tail-discarded by WRED."                       Z"A table of Running statistics for LR
                in a QoS policy applied on ATM PVC."                       "LR statistics entry."                       !"Number of packets passed by LR."                       "Number of bytes passed by LR."                       $"Number of packets discarded by LR."                       ""Number of bytes discarded by LR."                       ""Number of packets delayed by LR."                        "Number of bytes delayed by LR."                           �"A table of fr pvc CBQ Running statistics. When policy using queue behavior is applied on
                fr pvc fr pvc will using Class Based Queuing."                       "FR PVC CBQ statistics entry."                       "Queue size of CBQ"                       ="The number of discarded packets which coundn't be enqueued."                       "Queue size of EF"                       "Queue size of AF"                       "Queue size of BE"                       "the number of Active Be Queue"                       #"the max number of Active Be Queue"                       "the total number of Be Queue"                       ""the Allocated number of Af Queue"                       l"A table of Running statistics for matching a classifier
                in a QoS policy applied on FR PVC."                       '"Classifier matching statistics entry."                       5"Number of packets matching a class in a QoS policy."                       3"Number of bytes matching a class in a QoS policy."                      "Average rate of the traffic matching a class in a QoS policy.
                For inbound QoS policy, it is the rate of the traffic input;
                For outbound QoS policy, it is the rate of the traffic output.
                Only software QoS support this node."                       Z"A table of Running statistics for CAR
                in a QoS policy applied on FR PVC."                       "CAR statistics entry."                        "Number of packets conform CIR."                       "Number of bytes conform CIR."                       "Number of packets exceed CIR."                       "Number of bytes exceed CIR."                       "Rate of packets conform CIR."                       "Rate of bytes conform CIR."                       "Rate of packets exceed CIR."                       "Rate of bytes exceed CIR."                       Z"A table of Running statistics for GTS
                in a QoS policy applied on FR PVC."                       "GTS statistics entry."                       ""Number of packets passed by GTS."                        "Number of bytes passed by GTS."                       %"Number of packets discarded by GTS."                       #"Number of bytes discarded by GTS."                       #"Number of packets delayed by GTS."                       !"Number of bytes delayed by GTS."                       "Queue size of GTS queue."                       `"A table of Running statistics for remarking
                in a QoS policy applied on FR PVC."                       "Remarking statistics entry."                       "Number of packets remarked."                       \"A table of Running statistics for queue
                in a QoS policy applied on FR PVC."                       "Queue statistics entry."                       '"Number of packets matched to enqueue."                       %"Number of bytes matched to enqueue."                       "Number of packets enqueued."                       "Number of bytes enqueued."                       >"Number of packets discarded when enqueued by discard method."                       <"Number of bytes discarded when enqueued by discard method."                       %"Rate of packets matched to enqueue."                       #"Rate of bytes matched to enqueue."                       "Rate of packets enqueued."                       "Rate of bytes enqueued."                       <"Rate of packets discarded when enqueued by discard method."                       :"Rate of bytes discarded when enqueued by discard method."                       ["A table of Running statistics for WRED
                in a QoS policy applied on FR PVC."                       "WRED statistics entry."                       /"Number of packets randomly discarded by WRED."                       +"Number of packets tail-discarded by WRED."                       Y"A table of Running statistics for LR
                in a QoS policy applied on FR PVC."                       "LR statistics entry."                       !"Number of packets passed by LR."                       "Number of bytes passed by LR."                       $"Number of packets discarded by LR."                       ""Number of bytes discarded by LR."                       ""Number of packets delayed by LR."                        "Number of bytes delayed by LR."                           s"A table of Running statistics for matching a classifier
                in a QoS policy applied on ethernet vlan."                       '"Classifier matching statistics entry."                       5"Number of packets matching a class in a QoS policy."                       3"Number of Bytes matching a class in a QoS policy."                           i"A table of Running statistics for matching a classifier
                in a QoS policy applied on VSI."                       '"Classifier matching statistics entry."                       5"Number of packets matching a class in a QoS policy."                       3"Number of Bytes matching a class in a QoS policy."                           �"This table describes the traffic policing and statistics based on the traffic classification, including the statistics of the traffic within CIR, between CIR and PIR, and beyond PIR."                       �"A table of CAR statistics for class-based traffic classification applied
                in traffic monitoring, including the statistics of  packets that have the
                rate within CIR, of CIR, of PIR or exceeds PIR."                       O"This object indicates the number of packets whose rate is lower than the CIR."                       M"This object indicates the number of bytes whose rate is lower than the CIR."                       M"This object indicates the rate of packets whose rate is lower than the CIR."                       K"This object indicates the rate of bytes whose rate is lower than the CIR."                       B"This object indicates the number of packets between PIR and CIR."                       R"This object indicates the number of bytes whose rate is between the PIR and CIR."                       D"This object indicates the packet rate between PIR and CIR, in pps."                       T"This object indicates the rate of bytes whose rate is between the PIR and the CIR."                       A"This object indicates the rate of packets that exceeds the PIR."                       G"This object indicates the number of bytes whose rate exceeds the PIR."                       A"This object indicates the rate of packets that exceeds the PIR."                       E"This object indicates the rate of bytes whose rate exceeds the PIR."                       b"This object indicates the number of packets passed after the Committed Access Rate (CAR) is set."                       6"This object indicates the number of forwarded bytes."                       I"This object indicates the number of discarded packets after CAR is set."                       4"This object indicates the number of dropped bytes."                       4"This table describes the policy-based statistics.
"                       '"Statistics information of the policy."                       7"This object indicates the number of matching packets."                       W"This object indicates the number of bytes matching the traffic classification policy."                       9"This object indicates the number of unmatching packets."                       Z"This object indicates the number of bytes mismatching the traffic classification policy."                       E"This object indicates the number of matching and forwarded packets."                       O"Number of bytes that match the traffic classification policy and pass through"                       E"This object indicates the number of matching and discarded packets."                       P"Number of bytes that match the traffic classification policy and are discarded"                       '"This object indicates the clear flag."                       W"This object indicates the rate of packets matching the traffic classification policy."                       U"This object indicates the rate of bytes matching the traffic classification policy."                       O"Rate of packets that match the traffic classification policy and pass through"                       M"Rate of bytes that match the traffic classification policy and pass through"                       P"Rate of packets that match the traffic classification policy and are discarded"                       N"Rate of bytes that match the traffic classification policy and are discarded"                       Y"This table is used to record class-based multi-field traffic classification statistics."                       &"Statistics information of the class."                       )"Indicates the index of a traffic class."                       7"This object indicates the number of matching packets."                       ("Indicates the number of matched bytes."                       E"This object indicates the number of matching and forwarded packets."                       4"Indicates the matched and passed traffic in bytes."                       E"This object indicates the number of matching and discarded packets."                       7"Indicates the matched and discarded traffic in bytes."                       +"This table records classifier statistics."                       &"Class based policy statistics entry."                       ,"This object indicates the classifier name."                       "Number of matched packets."                       5"This object indicates the number of matching bytes."                       "Number of unmatched packets."                       "Number of unmatched bytes."                       E"This object indicates the number of matching and forwarded packets."                       C"This object indicates the number of matching and forwarded bytes."                       E"This object indicates the number of matching and discarded packets."                       C"This object indicates the number of matching and discarded bytes."                       "Rate of matched packets."                       ="This object indicates the average number of matching bytes."                       D"Rate of packets that match the traffic classifier and pass through"                       K"This object indicates the average number of matching and forwarded bytes."                       P"Rate of packets that match the traffic classification policy and are discarded"                       K"This object indicates the average number of matching and discarded bytes."                       J"A table of Running statistics for class in a QoS policy applied on VLAN."                       ="Statistics for class in a QoS policy applied on VLAN entry."                       D"Number of packets matched the class in a policy applied on a VLAN."                       K"Number of passed packets matched the class in a policy applied on a VLAN."                       L"Number of dropped packets matched the class in a policy applied on a VLAN."                       M"A table of Running statistics for CAR statistics in policy applied on VLAN."                       "CAR statistics entry."                       "Number of passed packets."                       "Number of discarded packets."                       �"A table of statistics for policy applied on the interface and VLAN.
                It sums up all the classes in the policy that are matched or not matched."                       '"Statistics information of the policy."                       7"The value of this object identifies the policy index."                       Y"This object indicates the number of packets matching the traffic classification policy."                       W"This object indicates the number of bytes matching the traffic classification policy."                       \"This object indicates the number of packets mismatching the traffic classification policy."                       Z"This object indicates the number of bytes mismatching the traffic classification policy."                       Q"Number of packets that match the traffic classification policy and pass through"                       O"Number of bytes that match the traffic classification policy and pass through"                       R"Number of packets that match the traffic classification policy and are discarded"                       P"Number of bytes that match the traffic classification policy and are discarded"                       ""Reset flag enable(1),disable(2)."                       "Rate of matched packets"                       "Rate of matched bytes"                       "Rate of matched pass packets"                       "Rate of matched pass bytes"                       "Rate of matched drop packets"                       "Rate of matched drop bytes"                       F"Number of packets that filtered by the traffic classification policy"                       D"Number of bytes that filtered by the traffic classification policy"                       "Rate of filterd drop packets"                       "Rate of filterd drop bytes"                       E"Number of packets that limited by the traffic classification policy"                       C"Number of bytes that limited by the traffic classification policy"                       "Rate of limited packets"                       "Rate of limited bytes"                       +"A table of class based policy statistics."                       &"Class based policy statistics entry."                       7"The value of this object identifies the policy index."                       ;"The value of this object identifies the classifier index."                       "Name of classifier."                       "Number of matched packets."                       "Number of matched bytes."                       "Number of unmatched packets."                       "Number of unmatched bytes."                       F"Number of packets that match the traffic classifier and pass through"                       D"Number of bytes that match the traffic classifier and pass through"                       A"Number of packets that match the traffic classifier and discard"                       ?"Number of bytes that match the traffic classifier and discard"                       "Rate of matched packets"                       "Rate of matched bytes"                       "Rate of matched pass packets"                       "Rate of matched pass bytes"                       "Rate of matched drop packets"                       "Rate of matched drop bytes"                       F"Number of packets that filtered by the traffic classification policy"                       D"Number of bytes that filtered by the traffic classification policy"                       "Rate of filterd drop packets"                       "Rate of filterd drop bytes"                       E"Number of packets that limited by the traffic classification policy"                       C"Number of bytes that limited by the traffic classification policy"                       "Rate of limited packets"                       "Rate of limited bytes"                       ."A table of class based subpolicy statistics."                       )"Class based subpolicy statistics entry."                        "PolicyClassIndex of subpolicy."                       "Number of matched packets."                       "Number of matched bytes."                       "Number of passed packets."                       "Number of passed bytes."                       "Number of dropped packets."                       "Number of dropped bytes."                       ""Number of queue matched packets."                        "Number of queue matched bytes."                       !"Number of queue passed packets."                       "Number of queue passed bytes."                       ""Number of queue dropped packets."                        "Number of queue dropped bytes."                       "Number of green packets."                       "Number of green bytes."                       "Number of yellow packets."                       "Number of yellow bytes."                       "Number of red packets."                       "Number of red bytes."                       "Rate of matched packets."                       "Rate of matched bytes."                       "Rate of passed packets."                       "Rate of passed bytes."                       "Rate of dropped packets."                       "Rate of dropped bytes."                        "Rate of queue matched packets."                       "Rate of queue matched bytes."                       "Rate of queue passed packets."                       "Rate of queue passed bytes."                        "Rate of queue dropped packets."                       "Rate of queue dropped bytes."                       "Rate of green packets."                       "Rate of green bytes."                       "Rate of yellow packets."                       "Rate of yellow bytes."                       "Rate of red bytes."                       "Rate of red bytes."                       "Name of sub classifier."                       s"This table is applied to global ACL.This table describes CAR statistics for class-based traffic classification. ."                       �"A table of CAR statistics for class-based traffic classification applied
                in traffic monitoring, including the statistics of  packets that have the
                rate within CIR, of CIR, of PIR or exceeds PIR."                       3"The ID of the slot that the interface is located."                       A"This object indicates the application type of traffic policing."                       K"This object indicates the direction where the CAR statistics are queried."                       H"This object indicates the name of the classifier that matches the CAR."                       F"This object indicates the number of packets within the range of CIR."                       M"This object indicates the number of bytes whose rate is lower than the CIR."                       H"This object indicates the packet rate within the range of CIR, in pps."                       K"This object indicates the rate of bytes whose rate is lower than the CIR."                       B"This object indicates the number of packets between PIR and CIR."                       R"This object indicates the number of bytes whose rate is between the PIR and CIR."                       D"This object indicates the packet rate between PIR and CIR, in pps."                       T"This object indicates the rate of bytes whose rate is between the PIR and the CIR."                       A"This object indicates the rate of packets that exceeds the PIR."                       G"This object indicates the number of bytes whose rate exceeds the PIR."                       A"This object indicates the rate of packets that exceeds the PIR."                       E"This object indicates the rate of bytes whose rate exceeds the PIR."                       b"This object indicates the number of packets passed after the Committed Access Rate (CAR) is set."                       6"This object indicates the number of forwarded bytes."                       I"This object indicates the number of discarded packets after CAR is set."                       I"This object indicates the number of discarded packets after CAR is set."                       r"This table is used to collect statistics on traffic classification based on policies in global traffic policing."                       '"Statistics information of the policy."                       O"This object indicates the ID of the slot where traffic policing takes effect."                       A"This object indicates the application type of traffic policing."                       P"This object indicates the traffic direction to which traffic policing applies."                       Y"This object indicates the number of packets matching the traffic classification policy."                       5"This object indicates the number of matching bytes."                       \"This object indicates the number of packets mismatching the traffic classification policy."                       7"This object indicates the number of unmatching bytes."                       Q"Number of packets that match the traffic classification policy and pass through"                       C"This object indicates the number of matching and forwarded bytes."                       R"Number of packets that match the traffic classification policy and are discarded"                       C"This object indicates the number of matching and discarded bytes."                       ""Reset flag enable(1),disable(2)."                       z" This table is used to display statistics about classifier-based user traffic classification in global traffic policing."                       &"Statistics information of the class."                       3"The ID of the slot that the interface is located."                       A"This object indicates the application type of traffic policing."                       K"This object indicates the direction where the CAR statistics are queried."                       "The name of classifier."                       7"Indicates the number of packets that match the class."                       5"This object indicates the number of matching bytes."                       D"This object indicates the number of matching and forwarded packet."                       C"This object indicates the number of matching and forwarded bytes."                       E"This object indicates the number of matching and discarded packets."                       C"This object indicates the number of matching and discarded bytes."                       �"A table of statistics for policy applied on global.
                It sums up all the classes in the policy that are matched."                       '"Statistics information of the policy."                       J"This object indicates the number of packets matching the traffic policy."                       H"This object indicates the number of bytes matching the traffic policy."                       Q"Number of packets that match the traffic classification policy and pass through"                       O"Number of bytes that match the traffic classification policy and pass through"                       R"Number of packets that match the traffic classification policy and are discarded"                       P"Number of bytes that match the traffic classification policy and are discarded"                       ""Reset flag enable(1),disable(2)."                       +"A table of class based policy statistics."                       &"Class based policy statistics entry."                       ;"The value of this object identifies the classifier index."                       "Name of classifier."                       "Number of matched packets."                       "Number of matched bytes."                       F"Number of packets that match the traffic classifier and pass through"                       D"Number of bytes that match the traffic classifier and pass through"                       A"Number of packets that match the traffic classifier and discard"                       ?"Number of bytes that match the traffic classifier and discard"                           "The ID of the frame."                       2"The ID of the slot that the interface is located"                       "The ID of the port"                       "Interface Name."                       "The type of the CAR alarm."                       6"The action that will be taken when trap is happened."                       "Policy Name."                       #"The vlan that the policy applied."                       "The name of Egress Interface."                       ""The number of discarded packets."                           &"A table of QoS ClassifierIndexQuery."                       "QoS Classifier Query Entry."                       "The name of QoS policy"                       "The name of qos classfier"                       %"This value of qos classifier index."                           �"The SNMP trap is generated when the number of packages 
                that Gts discard is larger than the configured threshold."                 l"The SNMP trap is generated when the speed of cir or pir 
                exceeds the configured threshold."                 <"The SNMP trap is generated when the rule is not supported."                 >"The SNMP trap is generated when the action is not supported."                 H"The SNMP trap is generated when the Global ACL is not support the ACL."                 F"The SNMP trap is generated when the action user-queue update failed."                 F"The SNMP trap is generated when the action user-queue config failed."                         c"The compliance statement for entities that implement
                class-based QoS on a router."                   {"Required objects to provide CB QoS objects configuration
                information. hwCBQoSClassifierLayer is optional."                �"Required objects to provide CB QoS objects configuration
                information. One of
                hwCBQoSCarGroup,
                hwCBQoSGtsGroup,
                hwCBQoSRemarkGroup,
                hwCBQoSQueueGroup,
                hwCBQoSWredGroup,
                
                hwCBQoSNatGroup,
                hwCBQoSFirewallGroup,
                hwCBQoSSamplingGroup should be required."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 �"Required objects to provide CB QoS objects configuration
                information. hwCBQoSPolicyConfigMode, hwCBQoSPolicyClassPrecedence
                is optional."                 W"Required objects to provide CB QoS objects configuration
                information."                 *"This is a optional group of information."                 )"This is a optional group of information"                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 W"Required objects to provide CB QoS objects configuration
                information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 +"RThis is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                     *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 *"This is a optional group of information."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 *"This is a optional group of information."                 "Description."                 "Description."                 "Description."                            