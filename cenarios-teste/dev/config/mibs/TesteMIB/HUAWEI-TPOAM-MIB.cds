�-- =================================================================
-- Copyright (C) 2014 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI-TPOAM-MIB
-- Reference:
-- Version:     V2.23
-- History:     
--     <YaoShuran>, <2011-05-20>, <V1.01 publish>
--     <LiuLihua>, <2012-03-06>, <V1.02 publish>
-- ==================================================================
                                                         "MPLS-TP OAM MIB""Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201412170000Z" "201310140000Z" "201309250000Z" "201105200000Z" "201009120000Z" p"V2.23, update description of hwMplsTpOamMeL3vpnName, hwMplsTpOamMeL2vpnNetgateMac.
                          " �"V2.22, update description of hwMplsTpOamIpMegPingMinDelay, hwMplsTpOamIpMegPingMaxDelay, hwMplsTpOamIpMegPingAverDelay, hwMplsTpOamIpMegTracertRespTable.
                          "7"V2.21, added hwMplsTpOamIpMegPingTrap, hwMplsTpOamIpMegTracertTrap in trap.
                          added hwMplsTpOamMeL3vpnName, hwMplsTpOamMeL2vpnNetgateMac, hwMplsTpOamMeSourceip, hwMplsTpOamIpUni in HwMplsTpOamMeEntry.
                          added hwMplsTpOamIpMegObject.
                         ""V1.01, added hwMplsTpOamLockEnable, hwMplsTpOamLockInterval, hwMplsTpOamLockExp, hwMplsTpOamCsfEnable, hwMplsTpOamCsfInterval, hwMplsTpOamCsfExp, hwMplsTpOamTstResetResult, hwMplsTpOamMegLevel in HwMplsTpOamMegEntry.
                          added hwMplsTpOamMeLspName,hwMplsTpOamMeVsiName in HwMplsTpOamMeEntry.
                          added tables hwMplsTpOamMeasureStatisticTestTable, hwMplsTpOamMegSectionLookupTable, hwMplsTpOamMegLspLookupTable, hwMplsTpOamMegVsiLookupTable
                         " "V1.00, initial version."                   s"
                This table is used to create a MPLS-TP Maintenance Entity Group Object (MEG).
                "                       "The MEG table entry."                       N"
                This object indicates the ID of the MEG.
                "                       o" 
                This object indicates whether CCM sending is enabled on the ME in a MEG.
                "                       p"
                This object indicates whether CCM receiving is enabled on the ME in a MEG.
                "                      �"
                This object indicates the interval for MEs in the MEG to send 
                or probe CCMs. The value of this object can be:
                1:  3.3 milliseconds
                2:  10 milliseconds
                3:  100 milliseconds
                4:  1 second
                5:  10 seconds
                6:  1 minute
                7:  10 minutes
                By default, the value is 1 second.
        "                       �"
                This object indicates the packet EXP for MEs in the MEG to send 
                or probe CCMs.
                "                       z"
                This object indicates the receive flag for packet single loss statistics in the MEG.
                "                       t"
                This object indicates the packet single loss statistics is enabled in the MEG.
                "                       h"
                This object indicates the count for packet single loss statistics.
                "                       w" 
                This object indicates the interval for packet single loss statistics in the MEG.
                "                       x"
                This object indicates the packet EXP for packet single loss statistics in the MEG.
                "                       k"
                This object indicates the dual loss statistics is enabled in the MEG.
                "                       t"
                This object indicates the interval for packet dual loss statistics in the MEG.
                "                       �"
                This object indicates the signal degrade threshold for packet dual loss statistics in the MEG.
                "                       �"
                This object indicates the signal fault threshold for packet dual loss statistics in the MEG.
                "                       o"
                This object indicates the one-way delay statistics is enabled in the MEG.
                "                       q"
                This object indicates the interval for one-way delay statistics in the MEG.
                "                       n"
                This object indicates the count for one-way delay statistics in the MEG.
                "                       s"
                This object indicates the packet EXP for one-way delay statistics in the MEG.
                "                       o"
                This object indicates the result for one-way delay statistics in the MEG.
                "                       o"
                This object indicates the two-way delay statistics is enabled in the MEG.
                "                       q"
                This object indicates the interval for two-way delay statistics in the MEG.
                "                       n"
                This object indicates the count for two-way delay statistics in the MEG.
                "                       s"
                This object indicates the packet EXP for two-way delay statistics in the MEG.
                "                       s"
                This object indicates the AIS(Alarm Indication Signal) is enabled in the MEG.
                "                       t"
                This object indicates the interval of AIS(Alarm Indication Signal) in the MEG.
                "                       v"
                This object indicates the packet EXP of AIS(Alarm Indication Signal) in the MEG.
                "                       m"
                This object indicates the result for single loss statistics in the MEG.
                "                       o"
                This object indicates the result for two-way delay statistics in the MEG.
                "                       o"
                This object indicates the result for two-way delay statistics in the MEG.
                "                       ["
                This object indicates the LOCK is enabled in the MEG.
                "                       \"
                This object indicates the interval of LOCK in the MEG.
                "                       ^"
                This object indicates the packet EXP of LOCK in the MEG.
                "                       n"
                This object indicates the CSF(client signal fail) is enabled in the MEG.
                "                       o"
                This object indicates the interval of CSF(client signal fail) in the MEG.
                "                       q"
                This object indicates the packet EXP of CSF(client signal fail) in the MEG.
                "                       f"
                This object indicates the result for test statistics in the MEG.
                "                       R"
                This object indicates the level for the MEG.
                "                       _" 
                This object indicates whether RDI is enabled in the MEG.
                "                       �"
                This object indicates the signal degrade threshold for proactive single-end packet loss statistics in the MEG.
                "                       �"
                This object indicates the signal degrade threshold for proactive single-end packet loss statistics in the MEG.
                "                       t" 
                This object indicates whether proactive SLM statistics is enabled in the MEG.
                "                       t" 
                This object indicates whether proactive 1DM statistics is enabled in the MEG.
                "                       t" 
                This object indicates whether proactive 2DM statistics is enabled in the MEG.
                "                      " 
                This object indicates the padding bit for 1DM packet in the MEG.
                   1. 0 -the padding bit of 1DM padding packet is 0
                   2. 1 -the padding bit of 1DM padding packet is 1                
                "                       k" 
                This object indicates the size of a 1DM packet transmitted in a MEG.
                "                      " 
                This object indicates the padding bit for 2DM packet in the MEG.
                   1. 0 -the padding bit of DMM padding packet is 0
                   2. 1 -the padding bit of DMM padding packet is 1                
                "                       k" 
                This object indicates the size of a DMM packet transmitted in a MEG.
                "                       �"
                This object indicates the signal degrade threshold for bit error detection statistics in the MEG.
                "                       �"
                This object indicates the signal degrade threshold for bit error detection statistics in the MEG.
                "                       Y"
                This object indicates the row status of this table.
                "                       B"
                This is SD cause APS period.
                "                       B"
                This is SD cause APS period.
                "                       B"
                This is SD cause APS period.
                "                       B"
                This is SD cause APS period.
                "                       B"
                This is SD cause APS period.
                "                       B"
                This is SD cause APS period.
                "                       K"
                This is SD cause APS reswitch period.
                "                       t" 
                This object indicates whether proactive 1DM statistics is enabled in the MEG.
                "                           H"This table is used to create a MPLS-TP Maintenance Entity Object (ME)."                       9"
                The ME table entry.
                "                       @"
                The index to the ME table.
                "                       ?"
                The type to the ME table.
                "                       �"
                The direction to the ME table.
                Default is dual. 
                This node only be seted by associate LSP.
                "                       X"
                This object indicates the interfacename of the ME.
                "                       P"
                This object indicates the peer IP address.
                "                       T"
                This object indicates the vc id of PW type ME.
                "                       V"
                This object indicates the vc type of PW type ME.
                "                       ]"
                This object indicates the remote peer IP of PW type ME.
                "                       z"
                This object indicates the VLL ttl of PW type ME, it uses for TTL Hops in SPE or TPE.
                "                       P"
                This object indicates the MEP Id of local.
                "                       Q"
                This object indicates the MEP Id of remote.
                "                       P"
                This object indicates the state of the ME.
                "                       S"
                This object indicates the LSP name of the ME.
                "                       S"
                This object indicates the VSI name of the ME.
                "                       X"
                This object indicates the far-end state of the ME.
                "                       Y"
                This object indicates the near-end state of the ME.
                "                       P" 
                 This object indicates the value of GAL. 
                "                       R"
                This object indicates the ring id of the ME.
                "                       Y"
                This object indicates the ring direction of the ME.
                "                       Y"
                This object indicates the row status of this table.
                "                       b"
                This object indicates the peer IP address of PW switch node.
                "                       X"
                This object indicates the vc id of PW switch node.
                "                       U"
                This object indicates the error for the status.
                "                       Q"
                This object indicates the mip id of the ME.
                "                       U"
                This object indicates the L3vpn name of the ME.
                "                       \"
                This object indicates the L2vpn Netgate Mac of the ME.
                "                       T"
                This object indicates the Source Ip of the ME.
                "                       W"
                This object indicates the  ip meg type of the ME.
                "                           �"
                The entries related to the MEG Ping include the parameters input 
                by users and the returned results.
                "                       H"
                The entry related to the MEG Ping.
                "                       �"
                This object indicates whether the LB function is enable.
               The value can be:
           1:disable
           2:enable
         By default, the value is disable. 
         "                       �"
                This object indicates the timeout period for waiting for the LBR.
                The value ranges from 1 to 65535, in milliseconds.
                By default, the value is 2000.
                "                       �"
                This object indicates the number of ping operation times.
                The value ranges from 1 to 268435455.
                By default, the value is 5.
                "                       �"
                This object indicates the size of an LBM packet.
                The value ranges from 64 to 1500 in bytes.  
                "                       T"
                This object indicates the number of sent LBMs.
                "                       X"
                This object indicates the number of received LBRs.
                "                       �"
                This object indicates the frame loss ratio on the physical link.
                The value ranges from 0 to 100.
                "                       c"
                This object indicates the minimum delay in receiving the LBM.
                "                       c"
                This object indicates the maximum delay in receiving the LBM.
                "                       c"
                This object indicates the average delay in receiving the LBM.
                "                       ]"
                This object indicates LB node is MIP node or MEP node. 
                "                       J"
                This object indicates the TTL of LB.
                "                       N"
                This object indicates the Node-ID of LB.
                "                       M"
                This object indicates the IF-NUM of LB.
                "                       c"
                This object indicates whether  LB is with request-tlv or not.
                "                       i"
                This object indicates the Node-ID of LB. The Node-ID is the mip id.
                "                       5"This object indicates the value of near loss ratio."                           k" 
                This object is used to indicates the connectivity fault of the link.
                "                 n" 
                This object indicates that the link recovers from a connectivity fault.
                "                 f" 
                This object is used to indicates the remote defect of the link.
                "                 i" 
                This object indicates that the link recovers from a remote defect.
                "                 h" 
                This object indicates the link receivs an unexpect MEG-ID defect.
                "                 s" 
                This object indicates that the link recovers from an unexpect MEG-ID defect.
                "                 g"
                This object indicates the link receivs an unexpect MEP-ID defect.
                "                 r"
                This object indicates that the link recovers from an unexpect MEP-ID defect.
                "                 g"
                This object indicates the link receivs an unexpect period defect.
                "                 s" 
                This object indicates that the link recovers from an unexpect period defect.
                "                 d"
                This object indicates the link receivs an unexpect PHB defect.
                "                 o"
                This object indicates that the link recovers from an unexpect PHB defect.
                "                 o"
                This object indicates the link receivs an alarm indication signal defect.
                "                 z"
                This object indicates that the link recovers from an alarm indication signal defect.
                "                 �"
                This object indicates the link receivs a packet lost exceed 
                signal degrade threshold defect.
                "                 �" 
                This object indicates that the link recovers from a packet 
                lost exceed signal degrade threshold defect.
                "                 �"
                This object indicates the link receivs a packet lost exceed signal 
                degrade threshold defect from the remote link.
                "                 �"
                This object indicates that the link recovers from a packet lost 
                exceed signal degrade threshold defect from the remote link.
                "                 �"
                This object indicates the link receivs a packet lost 
                exceed signal degrade threshold defect.
                "                 �"
                This object indicates that the link recovers from a packet 
                lost exceed signal degrade threshold.
                "                 �"
                This object indicates the link receivs a packet lost exceed 
                signal degrade threshold defect from the remote link.
                "                 �" 
                This object indicates that the link recovers from a packet lost 
                exceed signal degrade threshold defect from the remote link.
                "                 ~"
                This object indicates that the client level detected lock signal from the service level.
                "                 �"
                This object indicates that the client level can not detect lock signal from the service level.
                "                 n"
                This object is used to indicates client failed signal degrade in the AC.
                "                 y"
                This object indicates that the link recovers from a client failed signal in the AC.
                "                 z"
                This object is used to indicates receiving an unexpect MEG-LEVEL defect of the link.
                "                 u"
                This object indicates that the link recovers from an unexpect MEG-LEVEL defect.
                "                 y"               
                This object is used to indicates the connectivity fault of the link.
                "                 m"
                This object indicates that the link recovers from a connectivity fault.
                "                 e"
                This object is used to indicates the remote defect of the link.
                "                 h"
                This object indicates that the link recovers from a remote defect.
                "                 w"
                This object is used to indicates receiving an unexpect MEG-ID defect of the link.
                "                 r"
                This object indicates that the link recovers from an unexpect MEG-ID defect.
                "                 �"               
                This object is used to indicates receiving an unexpect MEP-ID defect of the link.
                "                 r"
                This object indicates that the link recovers from an unexpect MEP-ID defect.
                "                 w"
                This object is used to indicates receiving an unexpect period defect of the link.
                "                 r"
                This object indicates that the link recovers from an unexpect period defect.
                "                 t"
                This object is used to indicates receiving an unexpect PHB defect of the link.
                "                 "                
                This object indicates that the link recovers from an unexpect PHB defect.
                "                 �"               
                This object is used to indicates packet lost exceed signal degrade threshold in the local link.
                "                 �"               
                This object indicates that the link recovers from a packet lost exceed signal degrade threshold.
                "                 �"
                This object is used to indicates packet lost exceed signal 
                degrade threshold in the remote link.
                "                 �"
                This object indicates that the link recovers from a packet lost 
                exceed signal degrade threshold in the remote link.
                "                 �"
                This object is used to indicates packet lost exceed signal 
                degrade threshold in the local link.
                "                 �"
                This object indicates that the link recovers from a packet 
                lost exceed signal degrade threshold.
                "                 �"
                This object is used to indicates packet lost exceed signal 
                degrade threshold in the remote link.
                "                 �"
                This object indicates that the link recovers from a packet lost 
                exceed signal degrade threshold in the remote link. 
                "                 v"
                This object indicates that the link detected lock signal from the service level.
                "                 �"               
                This object indicates that the link can not detect lock signal from the service level.
                "                 z"
                This object is used to indicates receiving an unexpect MEG-LEVEL defect of the link.
                "                 �"               
                This object indicates that the link recovers from an unexpect MEG-LEVEL defect.
                "                 q"               
                This object indicates that the link has been locked by user.
                "                 {"               
                This object indicates that the user cancelled lock signal of the link.
                "                 e"
                This object indicates that the service has been locked by user.
                "                 o"
                This object indicates that the user cancelled lock signal of the service.
                "                 _"               
            	This object indicates that the ip-meg ping info.
            	"                 Y"               
            	This object indicates that the ip-meg tracert info.
  		"                         �"
              This table contains statistics for the OAM function on a
                particular MPLS-TP environment. 
              "                       �"
              An entry in the table, containing statistics information on
                the MPLS-TP OAM function for the ME in MPLS-TP environment.
              "                       m"
                Indicates the packet loss statistics that are collected on a local end.
                "                       r"
                Indicates the packet loss rate statistics that are collected on a local end.
                "                       n"
                Indicates the packet loss statistics that are collected on a remote end.
                "                       s"
                Indicates the packet loss rate statistics that are collected on a remote end.
                "                       z"
                Indicates the minimal packet loss rate statistics that are collected on a local end.
                "                       z"
                Indicates the maximal packet loss rate statistics that are collected on a local end.
                "                       u"
                Indicates the average packet loss statistics that are collected on a local end.
                "                       z"
                Indicates the minimal packet loss rate statistics that are collected on a local end.
                "                       z"
                Indicates the maximal packet loss rate statistics that are collected on a local end.
                "                       z"
                Indicates the average packet loss rate statistics that are collected on a local end.
                "                       v"
                Indicates the minimal packet loss statistics that are collected on a remote end.
                "                       v"
                Indicates the maximal packet loss statistics that are collected on a remote end.
                "                       v"
                Indicates the average packet loss statistics that are collected on a remote end.
                "                       {"
                Indicates the minimal packet loss rate statistics that are collected on a remote end.
                "                       {"
                Indicates the maximal packet loss rate statistics that are collected on a remote end.
                "                       {"
                Indicates the average packet loss rate statistics that are collected on a remote end.
                "                       �"
              This table contains information about the MPLS-TP OAM  
               one-way delay statistic for MEG.  
              "                       �"
              An entry in the table, containing information on the OAM 
              one-way delay statistic entity for MEG.  
              "                       k"
              This object indicates the statistics about the one-way delay in the MEG. 
              "                       y"
              This object indicates the minimal delay statistics about the one-way delay in the MEG. 
              "                       y"
              This object indicates the maximal delay statistics about the one-way delay in the MEG. 
              "                       y"
              This object indicates the average delay statistics about the one-way delay in the MEG. 
              "                       �"
              This object indicates the minimal delay variation statistics about the one-way delay in the MEG. 
              "                       �"
              This object indicates the maximal delay variation statistics about the one-way delay in the MEG. 
              "                       �"
              This object indicates the average delay variation statistics about the one-way delay in the MEG. 
              "                       �"
              This table contains information about the MPLS-TP OAM  
               two-way delay statistic for MEG. 
              "                       �"
              An entry in the table, containing information on the OAM 
              two-way delay statistic entity for MEG. 
              "                       j"
              This object indicates the statistics about the two-way delay in the MEG.
              "                       y"
              This object indicates the minimal delay statistics about the two-way delay in the MEG. 
              "                       y"
              This object indicates the maximal delay statistics about the two-way delay in the MEG. 
              "                       y"
              This object indicates the average delay statistics about the two-way delay in the MEG. 
              "                       �"
              This object indicates the minimal delay variation statistics about the two-way delay in the MEG.
              "                       �"
              This object indicates the maximal delay variation statistics about the two-way delay in the MEG.
              "                       �"
              This object indicates the average delay variation statistics about the two-way delay in the MEG.
              "                       �"
              This table contains information about the MPLS-TP OAM  
               test statistic for MEG.  
              "                       �"
              An entry in the table, containing information on the OAM 
              test statistic entity for MEG.  
              "                       �"
              This object indicates the number about sending/received packet in the MEG. 
              edge of sending: send number
              edge of receiving: received number
              "                               �"
              This table is used to configure the Alarm Indication Signal (AIS) 
                function in the interface to suppress alarms.
              "                       \"
                The entry of alarm indication signal in the interface.
                "                       \"
                This object indicates the interface for AIS function. 
                "                       q"
                This object indicates whether the AIS function is enabled in the interface.
                "                       a"
                This object indicates the interval for sending AIS frames. 
                "                       c"
                This object indicates the packet EXP for sending AIS frames. 
                "                       Y"
                This object indicates the row status of this table.
                "                               n"
              This table is used to lookup MEG for special parameters in MPLS TE scenario.
              "                       A"
                The entry for MPLS TE MEG. 
                "                       \"
                This object indicates the associate interface in MEG. 
                "                       N"
                This object indicates the MEG ID in MEG.
                "                       P"
                This object indicates the ME index in MEG.
                "                       k"
              This table is used to lookup MEG for special parameters in pwe3 scenario.
              "                       ="
                The entry for VLL MEG. 
                "                       V"
                This object indicates the peer IP of PW type ME.
                "                       V"
                This object indicates the vc type of PW type ME.
                "                       T"
                This object indicates the vc id of PW type ME.
                "                       N"
                This object indicates the MEG Id in MEG.
                "                       P"
                This object indicates the ME index in MEG.
                "                       n"
              This table is used to lookup MEG for special parameters in section scenario.
              "                       A"
                The entry for SECTION MEG. 
                "                       ["
                This object indicates the associate interface in MEG.
                "                       Z"
                This object indicates the meg id of section type ME.
                "                       P"
                This object indicates the ME index in MEG.
                "                       C"
              This table is used to lookup LSP.
              "                       B"
                The entry for MPLS LSP MEG. 
                "                       V"
                This object indicates the associate LSP in MEG. 
                "                       N"
                This object indicates the MEG ID in MEG.
                "                       P"
                This object indicates the ME index in MEG.
                "                       k"
              This table is used to lookup MEG for special parameters in pwe3 scenario.
              "                       ="
                The entry for VSI MEG. 
                "                       W"
                This object indicates the VSI name of PW type ME.
                "                       V"
                This object indicates the peer IP of PW type ME.
                "                       U"
                This object indicates the VSI id of PW type ME.
                "                       N"
                This object indicates the MEG Id in MEG.
                "                       P"
                This object indicates the ME index in MEG.
                "                           �"
                The entries related to the MEG test include the parameters input 
                by users and the returned results.
                "                       " "                       �"
                This object indicates whether the TEST function is enable.
                   The value can be:
                   1:disable
                   2:enable
                 By default, the value is disable. 
                 "                       �"
                This object indicates the number of test operation times.
                The value ranges from 1 to 4294967295.
                By default, the value is 5.
                "                       �"
                This object indicates the exp of test.
                The value ranges from 0 to 7.
                By default, the value is 7.
                "                      ="
                This object indicates the interval of test.
                The value of this object can be:
                  (1) 1  second
                  (2) 10 seconds
                  (3) 1  minute
                  (4) 10 minutes
                By default, the value is 1 second.
                "                       �"
                This object indicates whether hardware is enabled for sending test packets or not. 
                The default value is disable.
                "                       �"
                This object indicates the rate of test.
                The value ranges from 1 to 10485760 in kbps.
                "                       �"
                This object indicates whether block data flow is enabled for sending test packets or not. 
                The default value is disable
                "                           T"
                This object indicates the mode of mpls-tp oam.
                "                           ,"
			The response of the MEG ip ping.
			"                       " "                       H"
			This object indicates the return num of ip meg ping packet.
			 "                       N"
			This object indicates the send sequence num of ip meg ping packet.
			"                       <"
			This object indicates the result of ip meg ping.
			"                       9"
			This object indicates the mep id ip meg ping.
			"                       <"
			This object indicates the lsr id of ip meg ping.
			"                       C"
			This object indicates the packet length of ip meg ping.
			"                       ;"
			This object indicates the delay of ip meg ping.
			"                       9"
			This object indicates the Ttl of ip meg ping.
			"                       @"
			This object indicates ip meg type of the ip meg ping
			"                       H"
			This object indicates 39's service index of the ip meg ping.
			"                       K"
			This object indicates L2uni interface index of the ip meg ping.
			"                       D"
			This object indicates L3uni vpn name of the ip meg ping.
			"                       G"
			This object indicates ip meg return code of the ip meg ping
			"                       G"
			The entries related to the MEG ping statistics information.
			"                       " "                       �"
			This object indicates ping state of the ip meg.
			   The value can be:
			   0:never
			   1:doing
			   2:done
			   3:stop
			 "                       v"
			This object indicates ping total result of the ip meg.
			   The value can be:
			   0:ok
			   1:error
			"                       "
			ok(0)
			"                       L"
			This object indicates the num of packet send of the ip meg ping.
			"                       P"
			This object indicates the num of packet received of the ip meg ping.
			"                       J"
			This object indicates the packet loss rate of the ip meg ping.
			"                       8"
			This object indicates the min delay of ping.
			"                       8"
			This object indicates the max delay of ping.
			"                       <"
			This object indicates the average delay of ping.
			"                       /"
			The response of the MEG ip tracert.
			"                       " "                       B"
			This object indicates ip meg tracert sequence number. 
			"                       9"
			This object indicates ip meg tracert result. 
			"                       9"
			This object indicates ip meg tracert mep id. 
			"                       9"
			This object indicates ip meg tracert lsr id. 
			"                       8"
			This object indicates ip meg tracert delay. 
			"                       <"
			This object indicates ip meg tracert node type. 
			"                       6"
			This object indicates ip meg tracert ttl. 
			"                       ?"
			This object indicates ip meg tracert service type. 
			"                       F"
			This object indicates ip meg tracert service index of 39. 
			"                       C"
			This object indicates ip meg tracert ifIndex of L2uni. 
			"                       C"
			This object indicates ip meg tracert VpnName of L3uni. 
			"                       K"
			This object indicates ip meg return code of the ip meg tracert.
			"                       ="
			The entries related to the IP MEG tracert states.
			"                       " "                       �"
			This object indicates tracert state of the ip meg.
			   The value can be:
			   0:never
			   1:doing
			   2:done
			   3:stop
			 "                       y"
			This object indicates tracert total result of the ip meg.
			   The value can be:
			   0:ok
			   1:error
			"                       "
			ok(0)
			"                       3"
			The entries related to the IP MEG data.
			"                       " "                       P"
                This object indicates the MEP Id of IpMeg.
                "                               4"The compliance statement for the HUAWEI-TPOAM-MIB."                   "The group for MEG."                 "The group for ME."                 "The group for LB function."                 $"The group for statistics function."                 ."The group for AIS function in the interface."                 "The group for lookup."                 "The group for notification."                     "The group for mpls-tp oam."                 "The group for Test Function."                 )"The group for DualLossLossRatio notify."                            