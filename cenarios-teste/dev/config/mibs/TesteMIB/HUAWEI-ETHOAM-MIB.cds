)-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: HUAWEI-ETHOAM-MIB
-- Reference:
-- Version:     V2.36
-- History:
-- Revision history
--            REVISION     "201801160000Z"    
--            DESCRIPTION  "V2.36, Modify the description of hwDot3ahEfmThresholdEvent,hwDot3ahEfmNonThresholdEvent,hwDot3ahEfmRemoteDyingGaspEvent,hwDot3ahEfmNonThresholdRecovery,hwCfmVlanOnewayDelay,hwCfmVlanOnewayDelayRecovery,hwCfmVlanTwowayDelay,hwCfmVlanTwowayDelayRecovery,hwDot3ahEfmLoopbackFailed,hwY1731AisDefectAlarm,hwY1731AisDefectAlarmRecovery,hwDot1agCfmUnexpectedMEGLevel,hwDot1agCfmUnexpectedMEGLevelCleared,hwDot1agCfmMismerge,hwDot1agCfmMismergeCleared,hwDot1agCfmUnexpectedMEP,hwDot1agCfmUnexpectedMEPCleared,hwDot1agCfmUnexpectedPeriod,hwDot1agCfmUnexpectedPeriodCleared,hwDot1agCfmUnexpectedMAC,hwDot1agCfmUnexpectedMACCleared,hwDot1agCfmLOC,hwDot1agCfmLOCCleared,hwDot1agCfmExceptionalMACStatus,hwDot1agCfmExceptionalMACStatusCleared,hwDot1agCfmRDI,hwDot1agCfmRDICleared,hwY1731AisExceedMaxPktNum,hwY1731AisExceedMaxPktNumCleared,hwY1731LckDefect,hwY1731LckDefectCleared,hwY1731Statistic,hwY1731StatisticClear,hwY1731TunnelNonSupport,hwY1731TunnelNonSupportResumed."
--            REVISION     "201708170000Z"    
--            DESCRIPTION  "V2.35, Modify the description of hwDot3ahEfmNonThresholdRecovery,hwDot1agCfmUnexpectedMEP,hwDot1agCfmUnexpectedPeriod,hwDot1agCfmUnexpectedMACCleared,hwDot1agCfmLOC,hwDot1agCfmLOCCleared,hwY1731AisExceedMaxPktNumCleared."
--            REVISION     "201705090000Z"    
--            DESCRIPTION  "V2.34, Modify the description of hwY1731TestIdSingleSynEndedLMSendMeasureMentCount node."
--            REVISION     "201702100000Z"    
--            DESCRIPTION  "V2.33, Add hwY1731TestIdSingleSynEndedLMSendPacketSize and hwY1731TestIdSingleSynEndedLMSendMeasureMentCount node in hwY1731TestIdSingleSynEndedLMSendTable,
--                                                          add  hwY1731TestIdStatTrapLogTable , add hwY1731TestIdStatistic and hwY1731TestIdStatisticClear trap nodes."
--            REVISION     "201601120000Z"    
--            DESCRIPTION  "V2.32, Delete BITS in IMPORTS."
--            REVISION     "201512160000Z"    
--            DESCRIPTION  "V2.31, Add hwY1731TestIdTwoDelayCurIndex, hwY1731TestIdSingleSynLossCurIndex, hwY1731SingleLossCurIndex, hwY1731TestIdSingleLossCurIndex."
--            REVISION     "201511300000Z"    
--            DESCRIPTION  "V2.30, Add hwDot3ahEfmNonThresholdCriticalEventTriggerErrDown, hwDot3ahEfmNonThresholdDyinggaspTriggerErrDown,
--                                          hwDot3ahEfmNonThresholdLinkFaultTriggerErrDown,  hwDot3ahEfmNonThresholdTimeoutTriggerErrDown nodes in hwDot3ahEfmEventConfigTable."
--            REVISION     "201511270000Z"    
--            DESCRIPTION  "V2.29, Add hwY1731TunnelNonSupport, hwY1731TunnelNonSupportResumed leaf node for vpls over gre."
--            REVISION     "201504240000Z"    
--            DESCRIPTION  "V2.28, Add hwDot1agCfmGmacTraceTable, hwDot1agCfmGmacTraceReplyTable, hwDot1agCfmGmacTraceEnabled leaf node for Gmac Trace."
--            REVISION     "201503030000Z"    
--            DESCRIPTION  "V2.27, Add hwY1731TestIdQueuePriority leaf node in hwY1731TestIdTable."
--            REVISION     "201501150000Z"    
--            DESCRIPTION  "V2.26, Add table Index of hwY1731TestIdSingleLossSummaryStatTable"
--            REVISION     "201501060000Z"    
--            DESCRIPTION  "V2.25, Modify hwDot1agCfmMaTable, hwY1731TestIdSingleEndedLMSendTable, hwY1731TestIdOneWayDMSendTable, hwY1731TestIdTwoWayDMSendTable."
--            REVISION     "201412260000Z"    
--            DESCRIPTION  "V2.24, Add table Index of hwY1731TestIdTwoDelaySummaryStatTable, hwY1731TestIdSingleSynLossSummaryStatTable , and hwY1731SingleLossSummaryStatTable."
--            REVISION     "201412100000Z"    
--            DESCRIPTION  "V2.23, Modify hwY1731TestIdStatisticResetTable , add hwY1731TestIdSingleSynEndedLMSendTable, hwY1731TestIdSingleSynEndedLMReceiveTable,
--                      hwY1731TestIdSingleLossSummaryStatTable, hwY1731TestIdSingleSynLossStatTable."
--            REVISION     "201410080000Z"    
--            DESCRIPTION  "V2.22, Modify hwY1731TestIdTwoDelaySummaryStatTable, add hwY1731TestIdSingleSynLossSummaryStatTable and hwY1731SingleLossSummaryStatTable."
--            REVISION     "201409150000Z"    
--            DESCRIPTION  "V2.21, Modify the description of hwDot3ahEfmAdminState, enabled(2) state to enabled(1) state."
--            REVISION     "201408120000Z"    
--            DESCRIPTION  "V2.20, Add hwY1731TestIdTwoDelaySummaryStatTable and hwY1731TestIdIsRecordFile ."
--            REVISION     "201406260000Z"        
--            DESCRIPTION  "V2.19, Modify the max value of hwDot1agCfmMacPingPacketSize from 2000 to 9500."
--            REVISION     "201406030000Z"        
--            DESCRIPTION  "V2.18, Add hwY1731OneDelayOnDemandStartTime, hwY1731TwoDelayOnDemandStartTime, hwY1731SingleLossOnDemandStartTime,
--                                            hwY1731TestIdSingleLossOnDemandStartTime, hwY1731TestIdOneDelayOnDemandStartTime, hwY1731TestIdTwoDelayOnDemandStartTime"
--            REVISION     "201405060000Z"        
--            DESCRIPTION  "V2.17, Modify the description of hwY1731LckExceedThreshold, hwY1731LckExceedThresholdRecovery"
--            REVISION     "201404260000Z"        
--            DESCRIPTION  "V2.16, Add hwY1731LckExceedThreshold, hwY1731LckExceedThresholdRecovery"
--            REVISION     "201404090000Z"        
--            DESCRIPTION  "V2.15, Add hwY1731SingleLossStatistic8021pValue, hwY1731OneDelayStatistic8021pValue, hwY1731TwoDelayStatistic8021pValue"
--            REVISION     "201312040000Z"        
--            DESCRIPTION  "V1.10, Add hwCfmVlanOneDelayTrapLogDelayValueHigh, hwCfmVlanOneDelayTrapLogDelayValueLow, hwCfmVlanOneDelayRecoveryTrapLogDelayValueHigh, 
--                      hwCfmVlanOneDelayRecoveryTrapLogDelayValueLow, hwCfmVlanTwoDelayTrapLogDelayValueHigh, hwCfmVlanTwoDelayTrapLogDelayValueLow,
--                      hwY1731StatisticTrapLogValueHigh, hwY1731StatisticTrapLogValueLow, hwCfmVlanTwoDelayRecoveryTrapLogDelayValueHigh, hwCfmVlanTwoDelayRecoveryTrapLogDelayValueLow"
--            REVISION     "201310070000Z"        
--            DESCRIPTION  "V1.09, Add hwY1731TestIdTable,hwY1731TestIdSingleEndedLMSendTable,hwY1731TestIdSingleEndedLMReceiveTable,
--                      hwY1731TestIdOneWayDMSendTable,hwY1731TestIdOneWayDMSendTable,hwY1731TestIdTwoWayDMSendTable,hwY1731TestIdTwoWayDMReceiveTable,
--                      hwY1731TestIdSingleLossStatTable,hwY1731TestIdOneDelayStatTable,hwY1731TestIdTwoDelayStatTable,hwY1731TestIdStatisticResetTable,hwY1731MaxTestId for multiflow mib"
--            REVISION     "201304011045Z"        
--            DESCRIPTION  "V1.08, hwY1731ServiceType add unbind value"
--            REVISION     "201207030000Z"        
--            DESCRIPTION  "V1.07, add hwY1731OneDelayPacketSize, hwY1731TwoDelayPacketSize"
--            REVISION     "2012050240000Z"        
--            DESCRIPTION  "V1.07, add hwY1731LckDefect, hwY1731LckDefectCleared"
--            REVISION     "201202080000Z"        
--            DESCRIPTION  "V1.07, add hwY1731TwoDelayUnresponsivePacketCount leaf node for HK-GAN y1731 statistics"
--            REVISION     "201201300000Z"        
--            DESCRIPTION  "V1.06, add hwDot3ahEfmInterval leaf node for efm interval configuration"  
--            REVISION     "201109090000Z"        
--            DESCRIPTION  "V1.05, add hwY1731AisExceedMaxPktNumCleared leaf node for AIS"
--            REVISION     "201109090000Z"        
--            DESCRIPTION  "V1.05, add hwY1731AisMaxPktNum leaf node for AIS"
--            REVISION     "201109090000Z"        
--            DESCRIPTION  "V1.05, add hwY1731AisExceedMaxPktNum leaf node for AIS"
--            REVISION     "201109050000Z"        
--            DESCRIPTION  "V1.05, add hwY1731SingleLossLocalMax, hwY1731SingleLossLocalMin, hwY1731SingleLossLocalAvg, 
--                      hwY1731SingleLossRemoteMax, hwY1731SingleLossRemoteMin, hwY1731SingleLossRemoteAvg,
--                      hwY1731OneDelayStatisticMax, hwY1731OneDelayStatisticMin, hwY1731OneDelayStatisticAvg, 
--                      hwY1731TwoDelayStatisticMax, hwY1731TwoDelayStatisticMin, hwY1731TwoDelayStatisticAvg"
--            REVISION     "201105230000Z"        
--            DESCRIPTION  "V1.05, add hwDot1agCfmMdFormatName, hwDot1agCfmMaFormat, hwDot1agCfmMaFormatName for new 1ag MD/MA format support"      
--            REVISION     "201105110000Z"        
--            DESCRIPTION  "V1.05, add  hwDot1agCfmUnexpectedMEGLevel, 
--                          hwDot1agCfmUnexpectedMEGLevelCleared, hwDot1agCfmMismerge, hwDot1agCfmMismergeCleared, 
--                          hwDot1agCfmUnexpectedMEP, hwDot1agCfmUnexpectedMEPCleared, hwDot1agCfmUnexpectedPeriod, 
--                          hwDot1agCfmUnexpectedPeriodCleared, hwDot1agCfmUnexpectedMAC, hwDot1agCfmUnexpectedMACCleared, 
--                          hwDot1agCfmLOC, hwDot1agCfmLOCCleared, hwDot1agCfmExceptionalMACStatusfor new 1ag traps support"
--            REVISION     "201104210000Z"        
--            DESCRIPTION  "V1.05, add hwY1731AisVlanConfigTable table for ais vlan configuration"
--            REVISION     "201103230000Z"
--            DESCRIPTION  "V1.05, add hwDot3ahEfmLoopbackFailed, hwY1731AisDefectAlarm, hwY1731AisDefectAlarmRecovery trap node for PTN6900"
--            REVISION     "201102130000Z"        
--            DESCRIPTION  "V1.04, add hwDot3ahEfmHoldUpTime leaf node for efm holdup timer configuration"
--            REVISION     "201012040000Z"        
--            DESCRIPTION  "V1.03, add hwY1731ResetStatistic8021pValue leaf nodes for Y1731 COS 
--                          statistic configuration"
--            REVISION     "201011120000Z"        
--            DESCRIPTION  "V1.02, add hwY1731SingleLossRecv8021pValue and hwY1731OneDelayRecv8021pValue,hwY1731TwoDelayRecv8021pValue 
--                         leaf nodes for Y1731 COS statistic configuration"
--            REVISION     "201011010000Z"        
--            DESCRIPTION  "V1.01, add hwDot3ahEfmTimeout leaf node for efm timeout configuration"
-- ==================================================================
 <"802.1ag clauses 12.14.7.5.3 g), 20.32.2.5, and Table 21-24" @"Indicates the possible values the Relay action field can take."             ;"802.1ag clauses 12.14.7.5.3 o), 21.9.10.1 and Table 21-28" 5"Possible values returned in the egress action field"             "802.1ag clauses 18.3, 21.4.1"ò"Integer identifying the Maintenance Domain Level (MD Level).
                Higher numbers correspond to higher Maintenance Domains,
                those with the greatest physical reach, with the highest
                values for customers' CFM PDUs.  Lower numbers correspond
                to lower Maintenance Domains, those with more limited
                physical reach, with the lowest values for CFM PDUs
                protecting single bridges or physical links.
                "             h"802.1ag clauses 12.14.7.5.3 k), 21.9.9.1, 20.35.2.6 and
                Table 21-26.
                 " 7"Possible values returned in the ingress action field."             "                  " Ü"
                The five values indicates: has not run/is running/the previous test terminates normally/the previous test terminates abnormally/the previous test is interrupted (through ctrl+c or mib)
                "               W"
                Transmission rate:
                1Mbps and 5Mbps.
                "               i"
                Detect the mode type:
                Fast detect and standard detect
                "               „"24-bit Organizationally Unique Identifier.  Information on
                OUIs can be found in IEEE 802-2001 [802-2001] Clause 9."             #"20.1.2, 12.14.7.7.2:c and 20.33.9"z"An enumerated value, equal to the contents of the variable
                highestDefect (20.33.9 and Table 20-1), indicating the
                highest-priority defect that has been present since the MEP
                Fault Notification Generator State Machine was last in the
                FNG_RESET state, either:

                none(0)           no defects since FNG_RESET
                defRDICCM(1)      DefRDICCM
                defMACstatus(2)   DefMACstatus
                defRemoteCCM(3)   DefRemoteCCM
                defErrorCCM(4)    DefErrorCCM
                defXconCCM(5)     DefXconCCM

                The value 0 is used for no defects so that additional higher
                priority values can be added, if needed, at a later time, and
                so that these values correspond with those in
                Dot1agCfmLowestAlarmPri.
                "                                                                                                                     "Ethernet OAM MIB" þ"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201801160000Z" "201708170000Z" "201705090000Z" "201702100000Z" "201601120000Z" "201512160000Z" "201511300000Z" "201511270000Z" "201504240000Z" "201503030000Z" "201501150000Z" "201501060000Z" "201412260000Z" "201412100000Z" "201410080000Z" "201409150000Z" "201408120000Z" "201406260000Z" "201406030000Z" "201405060000Z" "201404260000Z" "201404090000Z" "201312040000Z" "201310070000Z" "201304011045Z" "201302061102Z"Â"V2.36, Modify the description of hwDot3ahEfmThresholdEvent,hwDot3ahEfmNonThresholdEvent,hwDot3ahEfmRemoteDyingGaspEvent,hwDot3ahEfmNonThresholdRecovery,hwCfmVlanOnewayDelay,hwCfmVlanOnewayDelayRecovery,hwCfmVlanTwowayDelay,hwCfmVlanTwowayDelayRecovery,hwDot3ahEfmLoopbackFailed,hwY1731AisDefectAlarm,hwY1731AisDefectAlarmRecovery,hwDot1agCfmUnexpectedMEGLevel,hwDot1agCfmUnexpectedMEGLevelCleared,hwDot1agCfmMismerge,hwDot1agCfmMismergeCleared,hwDot1agCfmUnexpectedMEP,hwDot1agCfmUnexpectedMEPCleared,hwDot1agCfmUnexpectedPeriod,hwDot1agCfmUnexpectedPeriodCleared,hwDot1agCfmUnexpectedMAC,hwDot1agCfmUnexpectedMACCleared,hwDot1agCfmLOC,hwDot1agCfmLOCCleared,hwDot1agCfmExceptionalMACStatus,hwDot1agCfmExceptionalMACStatusCleared,hwDot1agCfmRDI,hwDot1agCfmRDICleared,hwY1731AisExceedMaxPktNum,hwY1731AisExceedMaxPktNumCleared,hwY1731LckDefect,hwY1731LckDefectCleared,hwY1731Statistic,hwY1731StatisticClear,hwY1731TunnelNonSupport,hwY1731TunnelNonSupportResumed." Þ"V2.35, Modify the description of hwDot3ahEfmNonThresholdRecovery,hwDot1agCfmUnexpectedMEP,hwDot1agCfmUnexpectedPeriod,hwDot1agCfmUnexpectedMACCleared,hwDot1agCfmLOC,hwDot1agCfmLOCCleared,hwY1731AisExceedMaxPktNumCleared." Z"V2.34, Modify the description of hwY1731TestIdSingleSynEndedLMSendMeasureMentCount node."D"V2.33, Add hwY1731TestIdSingleSynEndedLMSendPacketSize and hwY1731TestIdSingleSynEndedLMSendMeasureMentCount node in hwY1731TestIdSingleSynEndedLMSendTable,
                                                          add  hwY1731TestIdStatTrapLogTable , add hwY1731TestIdStatistic and hwY1731TestIdStatisticClear trap nodes."  "V2.32, Delete BITS in IMPORTS." ‹"V2.31, Add hwY1731TestIdTwoDelayCurIndex, hwY1731TestIdSingleSynLossCurIndex, hwY1731SingleLossCurIndex, hwY1731TestIdSingleLossCurIndex.""V2.30, Add hwDot3ahEfmNonThresholdCriticalEventTriggerErrDown, hwDot3ahEfmNonThresholdDyinggaspTriggerErrDown,
                                           hwDot3ahEfmNonThresholdLinkFaultTriggerErrDown,hwDot3ahEfmNonThresholdTimeoutTriggerErrDown nodes in hwDot3ahEfmEventConfigTable." a"V2.29, Add hwY1731TunnelNonSupport, hwY1731TunnelNonSupportResumed leaf node for vpls over gre." }"V2.28, Add hwDot1agCfmGmacTraceTable, hwDot1agCfmGmacTraceReplyTable, hwDot1agCfmGmacTraceEnabled leaf node for Gmac Trace." H"V2.27, Add hwY1731TestIdQueuePriority leaf node in hwY1731TestIdTable." C"V2.26, Add table Index of hwY1731TestIdSingleLossSummaryStatTable" ˆ"V2.25, Modify hwDot1agCfmMaTable, hwY1731TestIdSingleEndedLMSendTable, hwY1731TestIdOneWayDMSendTable, hwY1731TestIdTwoWayDMSendTable." –"V2.24, Add table Index of hwY1731TestIdTwoDelaySummaryStatTable, hwY1731TestIdSingleSynLossSummaryStatTable , and hwY1731SingleLossSummaryStatTable." ü"V2.23, Modify hwY1731TestIdStatisticResetTable , add hwY1731TestIdSingleSynEndedLMSendTable, hwY1731TestIdSingleSynEndedLMReceiveTable,   hwY1731TestIdSingleLossSummaryStatTable,
                                   hwY1731TestIdSingleSynLossStatTable." Œ"V2.22, Modify hwY1731TestIdTwoDelaySummaryStatTable, add hwY1731TestIdSingleSynLossSummaryStatTable and hwY1731SingleLossSummaryStatTable." _"V2.21, Modify the description of hwDot3ahEfmAdminState, enabled(2) state to enabled(1) state." R"V2.20, Add hwY1731TestIdTwoDelaySummaryStatTable and hwY1731TestIdIsRecordFile ." P"V2.19, Modify the max value of hwDot1agCfmMacPingPacketSize from 2000 to 9500.""V2.18, Add hwY1731OneDelayOnDemandStartTime, hwY1731TwoDelayOnDemandStartTime, hwY1731SingleLossOnDemandStartTime,
                                             hwY1731TestIdSingleLossOnDemandStartTime, hwY1731TestIdOneDelayOnDemandStartTime, hwY1731TestIdTwoDelayOnDemandStartTime" _"V2.17, Modify the description of hwY1731LckExceedThreshold, hwY1731LckExceedThresholdRecovery" I"V2.16, Add hwY1731LckExceedThreshold, hwY1731LckExceedThresholdRecovery" È"support on-demand OAM config 802.1p. Add hwY1731SingleLossStatistic8021pValue, 
                                                hwY1731OneDelayStatistic8021pValue, hwY1731TwoDelayStatistic8021pValue"Õ"extended  DM statistical data to 64bit, added the following nodes:
                                                hwCfmVlanOneDelayTrapLogDelayValueHigh, hwCfmVlanOneDelayTrapLogDelayValueLow, 
                                                hwCfmVlanOneDelayRecoveryTrapLogDelayValueHigh, hwCfmVlanOneDelayRecoveryTrapLogDelayValueLow, 
                                                hwCfmVlanTwoDelayTrapLogDelayValueHigh, hwCfmVlanTwoDelayTrapLogDelayValueLow,
                                                hwY1731StatisticTrapLogValueHigh, hwY1731StatisticTrapLogValueLow, 
                                                hwCfmVlanTwoDelayRecoveryTrapLogDelayValueHigh, hwCfmVlanTwoDelayRecoveryTrapLogDelayValueLow" "modified for multiflow mib" "modified by 00145247" "modified by 00218832"                  "
                This object indicates whether CFM is enabled globally.
                The value of this object can be:
                  Enabled: indicates that CFM is enabled globally.
                  Disabled: indicates that global CFM is disabled
                "                       "
                This object indicates the supported CFM version.
                The value of this object can be:
                  draft: indicates IEEE 802.1ag Draft 7.
                  standard: indicates IEEE Standard 802.1ag-2007.
                "                           Î"
                The index to the Maintenance Domain table.

                hwDot1agCfmMdTableNextIndex needs to be inspected to find an
                available index for row-creation.
                "                      É"
                This table is used to create a Maintenance Domain (MD).

                A Maintenance Domain is described in 802.1ag (3.22) as the
                network or the part of the network for which faults in
                connectivity are to be managed. The boundary of a Maintenance
                Domain is defined by a set of DSAPs, each of which can become
                a point of connectivity to a service instance.
                " "802.1ag clause 3.16 and 18.2"                     ž"
                The Maintenance Domain table entry. This entry is not lost
                upon reboot. It is backed up by stable storage.
                "                       Ô"
                This object indicates the index of the MD Table.

                hwDot1agCfmMdTableNextIndex needs to be inspected to find an
                available index for row-creation.
                "                       …"
                This object indicates the format of the MD name.
                By default, the value is string.
                "                      Ü"
                This object indicates the name of the MD.
                The type/format of this object is determined by the value
                of the hwDot1agCfmMdFormat object.

                Each Maintenance Domain has unique name amongst all those
                used or available to a service provider or operator.  It
                facilitates easy identification of administrative
                responsibility for each Maintenance Domain.
                "                       Ú"
                This object indicates the level of the MD.
                The value ranges from 0 to 7. The greater the value, the higher the preference.
                By default, the value is 0.
                "                      d"
                This object indicates whether the management entity can create MIPs for the MD.
                The value of this object can be:
                  defMHFnone: indicates that the MIPs are not automatically created.
                  defMHFdefault: indicates that the management entity automatically
                                 creates MIPs based on certain rules.
                  defMHFexplicit: indicates that the management entity automatically
                                  creates MIPs based on certain rules.
                By default, the value is defMHFnone.
                "                      "
                This object indicates what is to be included in the Sender ID TLV
                transmitted by MPs configured in the MD. The value of this object
                can be:
                  sendIdNone: indicates that the Sender ID TLV is not to be sent.
                  sendIdChassis: indicates that the Sender ID TLV to be sent contains
                                 the chassis ID information.
                  sendIdManage: indicates that the Sender ID TLV to be sent contains
                                management address information.
                  sendIdChassisManage: indicates that the Sender ID TLV to be sent
                                       contains both chassis ID information and
                                       management address information.
                  sendIdDefer: indicates that the contents of the Sender ID TLV to be
                               sent are determined by the MD management entity.
                By default, the value is sendIdDefer.
                "                      à"
                This object indicates the MD format name.
                The type/format of this object is determined by the value
                of the hwDot1agCfmMdFormatName object.

                Each Maintenance Domain has unique name amongst all those
                used or available to a service provider or operator.  It
                facilitates easy identification of administrative
                responsibility for each Maintenance Domain.
                "                      "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                           Z"
                Value to be used as the index of the MA table entries.
                "                       ð"
                This table is used to create a Maintenance Association (MA).
                Each row in the table represents an MA.
                An MA is a set of MEPs, each configured with a single service instance.
                " "802.1ag clause 3.16 and 18.2"                     "The MA table entry."                       T"
                This object indicates the index of the MA table.
                "                       “"
                This object indicates the name of the MA.
                This name MUST be unique within a maintenance domain.
                "                      e"
                This object indicates what is associated with the MA.
                The value of this object can be:
                  mapVlan: indicates that a VLAN is associated with the current MA.
                  mapVsi: indicates that a VSI is associated with the current MA.
                  mapL2vc: indicates that an L2VC is associated with the current MA.
                  unbind: indicates that the MA is not associated with any service instance.
                  mapCcc: indicates that a CCC is associated with the current MA.
                By default, the value is unbind.
                "                       B"This object indicates the ID of the VLAN associated with the MA."                       C"This object indicates the name of the VSI associated with the MA."                       d"
                This object indicates the ID of the L2VC associated with the MA.
                "                      "
                This object indicates the encapsulation type of the L2VC associated with the MA.
                The value of this object can be:
                  invalid: indicates that no display shows that the L2VC is associated
                           with the current MA.
                  l2vcRaw: indicates that the VLAN tag is not encapsulated into the packet.
                  l2vcTagged: indicates that the VLAN tag is encapsulated into the packet.
                By default, the value is invalid.
                "                       ü"
                This object indicates the priority of the 802.1ag packet sent in the MA.
                The value ranges from 0 to 7. The greater the value is, the higher the priority is.
                By default, the value is 7.
                " "802.1ag clause 12.14.6.1.4"                    "
                This object indicates the interval for an MEP in the MA to send
                or probe CCMs. The value of this object can be:
                  3.3 milliseconds
                  10 milliseconds
                  20 milliseconds
                  30 milliseconds
                  50 milliseconds
                  100 milliseconds
                  1 second
                  10 seconds
                  1 minute
                  10 minutes
                By default, the value is 1 second.
                " "802.1ag clause 12.14.6.1.3"                     å"
                This object indicates the time period after which RMEP configurations
                are to be activated. The value ranges from 0 to 600 in seconds.
                By default, the value is 0.
                "                      G"
                This object indicates the delay for the RMEP to send trap messages.
                The value must be an integer multiple of 500, for example, 500, 1000,
                or 1500.
                The value ranges from 0 to 30000 in milliseconds.
                By default, the value is 2500.
                "                      €"
                This object indicates the delay for the RMEP to send alarm clearance
                messages after the fault is rectified.
                The value must be an integer multiple of 500, for example, 500, 1000,
                or 1500.
                The value ranges from 0 to 30000 in milliseconds.
                By default, the value is 10000.
                "                      #"
                This object indicates the format of the MA name.
                string: indicates that the format of the MA name is string.
                icc-based: indicates that the format of the MA name is ICC-based.
                By default, the value is string.
                "                       Î"
                This object indicates the MA format name.
                The type/format of this object is determined by the value
                of the hwDot1agCfmMaFormatName object.
                "                       e"
                This object indicates the name of the CCC associated with the MA.
                "                      "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                           k"
                This table is used to create a Maintenance Association End Point (MEP).
                " ("802.1ag clauses 3.17, 12.14.7 and 19.2"                     8"
                The MEP table entry.
                "                      "
                This object indicates the ID of the MEP.
                Integer that is unique among all the MEPs in the same MA.
                MEP Identifier is also known as the MEPID.
                The value ranges from 1 to 8191.
                "                      ^"
                This object indicates whether the MEP in the MA is a VLAN-based MEP.
                If the MEP is a VLAN-based MEP, the MA must have been associated
                with a VLAN and the interface and VLAN information need not be configured.
                If the MEP is not a VLAN-based MEP, entry creation fails.
                "                      5"
                This object indicates the interface to which the MEP is bound.
                The interface is either a bridge port, or an aggregated IEEE 802.1
                link within a bridge port, to which the MEP is attached.
                By default, the value of IfIndex is 0.
                "                       Š"
                This object indicates the VLAN to which the interface that the MEP
                is bound to belong.
                "                       \"
                This object indicates the QinQ PE VLAN bound to the MEP.
                "                       \"
                This object indicates the QinQ CE VLAN bound to the MEP.
                "                      "
                This object indicates the direction in which the MEP sends the 802.1ag
                protocol packets.
                The value of this object can be:
                  invalid: indicates the invalid value.
                  dirInward: indicates that the 802.1ag protocol packets sent by an
                             inward-facing MEP are transmitted through all the interfaces
                             in the VLAN associated with the current MA (except the
                             interface where the MEP resides). That is, an inward-facing
                             MEP broadcasts the 802.1ag protocol packets in the VLAN
                             associated with the current MA.
                  dirOutward: indicates that the 802.1ag protocol packets sent by an
                              outward-facing MEP are transmitted directly through the
                              interface on which the MEP resides.
                By default, the value is invalid.
                "                      "
                This object indicates whether CCM sending is enabled on the MEP in an MA.
                The value of this object can be:
                  enabled
                  disabled
                By default, the value is disabled.
                " ("802.1ag clauses 12.14.7.1.3 and 20.9.1"                     T"
                This object indicates the MAC address of an MEP.
                "                      "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                           s"
                This table is used to create a Remote Maintenance Association End Point (RMEP).
                "                       @"
                The remote MEP table entity.
                "                       ~"
                This object indicates the ID of the RMEP.
                The value ranges from 1 to 8191.
                "                       |"
                This object indicates the MAC address of the interface
                the RMEP resides.
                "                       û"
                This object indicates whether CCM receiving is enabled on the current device.
                The value can be:
                  enabled
                  disabled
                By default, the value is disabled.
                "                      "
                This object indicates the CFM status. The value can be:
                  up: indicates that the CFM status is Up.
                  down: indicates that the CFM status is Down.
                  invalid: indicates that the CFM status is not enabled.
                "                       °"
                This object indicates the severity level of the fault on an RMEP.
                If the CFM status is Up, this object is displayed as none.
                " 4"802.1ag clause 12.14.7.1.3  20.32.9 and Table 20-1"                    "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                           —"
                This table is used to display information about a Maintenance
                Association Intermediate Point (MIP).
                "                       8"
                The MIP table entry.
                "                       a"
                This object indicates the interface on which the MIP resides.
                "                       }"
                This object indicates the level of the MIP.
                The value ranges from 0 to 7.
                " "802.1ag clause 12.14.5.1.3 b)"                     t"
                This object indicates the MAC address of the interface on which the MIP resides.
                "                           —"
                The entries related to the Mac Ping include the parameters input
                by users and the returned results.
                "                       Z"
                This table is used to configure the MAC ping function.
                "                       R"
                This object indicates the index of this table.
                "                       í"
                This object indicates whether the MAC ping function is enabled.
                The value can be:
                  enabled
                  disabled
                By default, the value is disabled.
                "                       i"
                This object indicates the name of the MD where MAC ping is performed.
                "                       i"
                This object indicates the name of the MA where MAC ping is performed.
                "                       Ñ"
                This object indicates the ID of the local MEP of the 802.1ag MAC ping operation.
                The value ranges from 1 to 8191.
                By default, the value is 0.
                "                       ·"
                This object indicates whether the destination MAC address of the LBM
                is the MAC address of the interface on which the RMEP resides.
                "                       è"
                This object indicates the ID of the destination RMEP of the 802.1ag
                MAC ping operation.
                The value ranges from 1 to 8191.
                By default, the value is 0.
                "                       a"
                This object indicates the destination MAC address of the LBM.
                "                       d"
                This object indicates the outbound interface that sends the LBM.
                "                       Ö"
                This object indicates the timeout period for waiting for the LBR.
                The value ranges from 1 to 65535 in milliseconds.
                By default, the value is 2000.
                "                       À"
                This object indicates the number of ping operation times.
                The value ranges from 1 to 4294967295.
                By default, the value is 5.
                "                       ¯"
                This object indicates the length of the LBM.
                The value ranges from 64 to 9500.
                By default, the value is 95.
                "                      Š"
                This object indicates the priority of the sent LBM packet.
                The value ranges from 0 to 7 or can be 255. The value 255 is an invalid value.
                If the value is set to 255, this value should be identical with the priority value of the MA which the MEP belongs to.
                The greater the value is, the higher the priority is.
                "                       R"
                This object indicates the number of sent LBMs.
                "                       V"
                This object indicates the number of received LBRs.
                "                       ”"
                This object indicates the frame loss ratio on the physical link.
                The value ranges from 0 to 100.
                "                       a"
                This object indicates the minimum delay in receiving the LBM.
                "                       a"
                This object indicates the maximum delay in receiving the LBM.
                "                       a"
                This object indicates the average delay in receiving the LBM.
                "                      "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                           ["
                This table is used to configure the MAC trace function.
                "                       H"
                Indicates the MAC Trace table entry.
                "                       R"
                This object indicates the index of this table.
                "                       î"
                This object indicates whether the MAC trace function is enabled.
                The value can be:
                  enabled
                  disabled
                By default, the value is disabled.
                "                       j"
                This object indicates the name of the MD where MAC trace is performed.
                "                       j"
                This object indicates the name of the MA where MAC trace is performed.
                "                       â"
                This object indicates the ID of the local MEP of the 802.1ag
                MAC trace operation.
                The value ranges from 1 to 8191.
                By default, the value is 0.
                "                       ·"
                This object indicates whether the destination MAC address of the LTM
                is the MAC address of the interface on which the RMEP resides.
                "                       é"
                This object indicates the ID of the destination RMEP of the 802.1ag
                MAC trace operation.
                The value ranges from 1 to 8191.
                By default, the value is 0.
                "                       a"
                This object indicates the destination MAC address of the LTM.
                "                       d"
                This object indicates the outbound interface that sends the LTM.
                "                       ×"
                This object indicates the timeout period for waiting for the LTR.
                The value ranges from 1 to 65535, in milliseconds.
                By default, the value is 2000.
                "                       È"
                This object indicates the TTL value of the 802.1ag MAC trace operation.
                The value ranges from 1 to 255.
                By default, the value is 64.
                "                       ^"
                This object indicates the sequence number of the sent LTR.
                "                       `"
                This object indicates the result of the MAC trace operation.
                "                      "
                This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated.
                "                       –"
                This table is used to display information about the LTR for responding
                to the MAC trace operation.
                "                       E"
                The Mac Trace result table entry.
                "                       "
                This object indicates the index of this table.
                The value is the sequence number of the LTR.
                " "802.1ag clause 12.14.7.5"                     ª"
                This object indicates the index of this table.
                The value is the sequence in which the MAC trace results are displayed.
                "                       }"
                This object indicates the TTL of the LTR.
                The value ranges from 0 to 255.
                "                       ‰"
                This object indicates whether the device that sends the LTR keeps on
                forwarding LTMs.
                "                       \"
                This object indicates whether the LTR is sent by an MEP.
                "                       i"
                This object indicates the value of the Relay Action field in the LTR.
                "                       k"
                This object indicates the value of the Ingress Action field in the LTR.
                "                       —"
                This object indicates the physical MAC address carried in the ingress
                MAC address field in the LTR.
                "                       g"
                This object indicates the name of the inbound interface of the LTR.
                "                       j"
                This object indicates the value of the Egress Action field in the LTR.
                "                       –"
                This object indicates the physical MAC address carried in the egress
                MAC address field in the LTR.
                "                       j"
                This object indicates the name of the interface that forwards the LTR.
                "                           h"
                This table is used to get the index of the Maintenance Domain table.
                "                       ="
                The Md Index table entry.
                "                       ]"
                This object indicates the name of the Maintenance Domain.
                "                       d"
                This object indicates the index to the Maintenance Domain table.
                "                       m"
                This table is used to get the index of the Maintenance Association table.
                "                       ="
                The Ma Index table entry.
                "                       ^"
                This object indicates the name of Maintenance Association.
                "                       i"
                This object indicates the index to the Maintenance Association table.
                "                          C"
                This object indicates whether GMAC trace function is enabled globally.
                The value of this object can be:
                  Enabled: indicates that GMAC trace function is enabled globally.
                  Disabled: indicates that GMAC trace function is disabled globally.
                "                       \"
                This table is used to configure the GMAC trace function.
                "                       I"
                Indicates the GMAC Trace table entry.
                "                       R"
                This object indicates the index of this table.
                "                       ï"
                This object indicates whether the GMAC trace function is enabled.
                The value can be:
                  enabled
                  disabled
                By default, the value is disabled.
                "                       a"
                This object indicates the destination MAC address of the LTM.
                "                      +"
			This object indicates the service type associated with the gmac trace.
			The value of this object can be:
			  vlan: indicates that a VLAN is associated with the gmac trace.
			  invalid: indicates that no service type is specified for the gmac trace.
			By default, the value is invalid.
			"                       H"
			This object indicates the VLAN to the destination MAC address.
			"                       S"
			This object indicates the name of the VSI associated with the GMAC trace.
			"                       R"
			This object indicates the ID of the L2VC associated with the GMAC trace.
			"                      ½"
			This object indicates the encapsulation type of the L2VC associated with the gmac trace.
			The value of this object can be:
			  invalid: indicates that no display shows that the L2VC is associated
			           with the current gmac trace.
			  l2vcRaw: indicates that the VLAN tag is not encapsulated into the packet.
			  l2vcTagged: indicates that the VLAN tag is encapsulated into the packet.
			By default, the value is invalid.
			"                       Q"
			This object indicates the DOT1Q VLAN ID to the destination MAC address.
			"                       I"
			This object indicates the QinQ PE VLAN bound to the GMAC trace.
			"                       I"
			This object indicates the QinQ CE VLAN bound to the GMAC trace.
			"                       d"
                This object indicates the outbound interface that sends the LTM.
                "                       £"
			This object indicates the timeout period for waiting for the LTR.
			The value ranges from 1 to 65535, in milliseconds.
			By default, the value is 2000.
			"                       I"
			This object indicates whether the LTR include host information.
			"                       D"
			This object indicates the sequence number of the sent LTR.
			"                       G"
			This object indicates the result of the GMAC trace operation.
			"                       Ô"
			This object indicates the row status of this table.
			
			The writable columns in a row can not be changed if the row
			is active. All columns MUST have a valid value before a row
			can be activated.
			"                       p"
			This table is used to display information about the LTR for responding
			to the GMAC trace operation.
			"                       ,"
			The GMAC Trace result table entry.
			"                       h"
			This object indicates the index of this table.
			The value is the sequence number of the LTR.
			" "802.1ag clause 12.14.7.5"                     „"
			This object indicates the index of this table.
			The value is the sequence in which the GMAC trace results are displayed.
			"                       V"
			This object indicates the TTL of the LTR.
			The value ranges from 0 to 255.
			"                       b"
			This object indicates whether the device that sends the LTR keeps on
			forwarding LTMs.
			"                       I"
			This object indicates the host name and IP address of each hop.
			"                       O"
			This object indicates the value of the Relay Action field in the LTR.
			"                       Q"
			This object indicates the value of the Ingress Action field in the LTR.
			"                       p"
			This object indicates the physical MAC address carried in the ingress
			MAC address field in the LTR.
			"                       M"
			This object indicates the name of the inbound interface of the LTR.
			"                       P"
			This object indicates the value of the Egress Action field in the LTR.
			"                       o"
			This object indicates the physical MAC address carried in the egress
			MAC address field in the LTR.
			"                       P"
			This object indicates the name of the interface that forwards the LTR.
			"                      "
                This object indicates the MP address model of the CFM.
                The value of this object can be:
                  bridge: indicates bridge MAC MP address model.
                  individual: indicates individual MP address model.
                "                           <"
                Enable the EFM globally.
                "                           l"
                Set the detection mode table in the last one kilometer on the interface.
                "                       m"
                Set the detection mode entity in the last one kilometer on the interface.
                "                       ["
                Detection mode ( fast detection and standard detection)
                "                       >"
                Time interval of detection
                "                       a"
                Failure description from 802.3ah and from associated modules.
                "                      8"This table contains the primary controls and status for the
                OAM capabilities of an Ethernet like interface.  There will be
                one row in this table for each Ethernet like interface in the
                system that supports the OAM functions defined in [802.3ah].
                "                      ì"An entry in the table, containing information on the Ethernet
                OAM function for a single Ethernet like interface. Entries in
                the table are created automatically for each interface
                supporting Ethernet OAM. The status of the row entry can be
                determined from hwDot3ahEfmOperStatus.

                A hwDot3ahEfmEntry is indexed in the hwDot3ahEfmTable by the ifIndex
                object of the Interfaces MIB.
                "                      4"This object is used to provision the default administrative
                OAM mode for this interface.  This object represents the
                desired state of OAM for this interface.

                The hwDot3ahEfmAdminState always starts in the disabled(2) state
                until an explicit management action or configuration
                information retained by the system causes a transition to the
                enabled(1) state.   When enabled(1), Ethernet OAM will attempt
                to operate over this interface.
                " "[802.3ah], 30.3.6.1.2"                     è"At initialization and failure conditions, two OAM entities on
                the same full-duplex Ethernet link begin a discovery phase to
                determine what OAM capabilities may be used on that link.
                " 1"[802.3ah], 30.3.6.1.4, 30.3.6.1.10, 30.3.6.1.11"                     Ì"This object configures the mode of OAM operation for this
                Ethernet like interface.  OAM on Ethernet interfaces may be in
                'active' mode or 'passive' mode.
                " "[802.3ah], 30.3.6.1.3"                    )"The largest OAMPDU that the OAM entity supports.  OAM
                entities exchange maximum OAMPDU sizes and negotiate to use
                the smaller of the two maximum OAMPDU sizes between the peers.
                This value is determined by the local implementation.
                " "[802.3ah], 30.3.6.1.8"                    m"The configuration revision of the OAM entity as reflected in
                the latest OAMPDU sent by the OAM entity.  The config revision
                is used by OAM entities to indicate configuration changes have
                occurred which might require the peer OAM entity to
                re-evaluate whether OAM peering is allowed.
                " "[802.3ah], 30.3.6.1.12"                    G"The OAM functions supported on this Ethernet like interface.
                OAM consists of separate functional sets beyond the basic
                discovery process which is always required.  These functional
                groups can be supported independently by any implementation.
                These values are communicated to the peer via the local
                configuration field of Information OAMPDUs.

                Setting 'unidirectionalSupport(0)' indicates that the OAM
                entity supports the transmission of OAMPDUs on links that are
                operating in unidirectional mode (traffic flowing in one
                direction only).  Setting 'loopbackSupport(1)' indicates the
                OAM entity can initiate and respond to loopback commands.
                Setting 'eventSupport(2)' indicates the OAM entity can send
                and receive Event Notification OAMPDUs. Setting
                'variableSupport(3)' indicates the OAM entity can send and
                receive Variable Request and Response OAMPDUs.
                " "[802.3ah], 30.3.6.1.6"                    ¼"The EFM Timeout object defines the max time that the EFM session 
                 stays in detect mode since the last OAMPDU received. if there's
                 no OAMPDU received within the time the timeout value defines, the
                 EFM session will turn into discovery state. 
                 
                 The value of EFM Timeout should be three or more times the value of 
                 the sending interval of the peer interface.
                 
                 The timeout value must be an exact integral multiple of 100.
                 
                 Range: 300-30000
                 Default: 5000 
                 Unit: milliseconds         
                " "[802.3ah]"                    Ë"The EFM interval object defines the interval of sending OAM PDUs.
                                 
                 The value of EFM interval should be the same as the value of 
                 the peer interface.
                 
                 The interval value must be an exact integral multiple of 100.
                 
                 Range: 100-1000
                 Default: 1000 
                 Unit: milliseconds         
                " "[802.3ah]"                    ¼"This table contains information about the OAM peer for a
                particular Ethernet like interface. OAM entities communicate
                with a single OAM peer entity on Ethernet links on which OAM
                is enabled and operating properly.  There is one entry in this
                table for each entry in the hwDot3ahEfmTable for which information
                on the peer OAM entity is available.
                "                      –"An entry in the table, containing information on the peer OAM
                entity for a single Ethernet like interface.

                Note that there is at most one OAM peer for each Ethernet like
                interface.  Entries are automatically created when information
                about the OAM peer entity becomes available, and automatically
                deleted when the OAM peer entity is no longer in
                communication.  Peer information is not available when
                hwDot3ahEfmOperStatus is disabled(1), linkFault(2),
                passiveWait(3), activeSendLocal(4). or nonOperHalfDuplex(10)).
                "                       Ž"The MAC address of the peer OAM entity.  The MAC address is
                derived from the most recently received OAMPDU.
                " "[802.3ah], 30.3.6.1.5."                    V"The OUI of the OAM peer as reflected in the latest
                Information OAMPDU received with a Local Information TLV.  The
                OUI can be used to identify the vendor of the remote OAM
                entity.  This value is initialized to zero before any Local
                Information TLV is received.
                " "[802.3ah], 30.3.6.1.16."                    $"The Vendor Info of the OAM peer as reflected in the latest
                Information OAMPDU received with a Local Information TLV.  The
                vendor information field is within the Local Information TLV,
                and can be used to determine additional information about the
                peer entity.  The format of the vendor information is
                unspecified within the 32-bit field.  This value is
                initialized to zero before any Local Information TLV is
                received.
                " "[802.3ah], 30.3.6.1.17."                    ‹"The mode of the OAM peer as reflected in the latest
                Information OAMPDU received with a Local Information TLV.  The
                mode of the peer can be determined from the Configuration
                field in the Local Information TLV of the last Information
                OAMPDU received from the peer.  The value is unknown(3)
                whenever no Local Information TLV has been received.  The
                values of active(1) and passive(2) are returned when a Local
                Information TLV has been received indicating the peer is in
                active or passive mode, respectively.
                " "[802.3ah], 30.3.6.1.7."                    %"The maximum size of OAMPDU supported by the peer as reflected
                in the latest Information OAMPDU received with a Local
                Information TLV.   Ethernet OAM on this interface must not use
                OAMPDUs that exceed this size.  The maximum OAMPDU size can be
                determined from the PDU Configuration field of the Local
                Information TLV of the last Information OAMPDU received from
                the peer.  A value of zero is returned if no Local Information
                TLV has been received.  Otherwise, the value of the OAM peer's
                maximum OAMPDU size is returned in this value.
                Note that the values 1..65534 are invalid sizes for Ethernet
                frames and should never appear.
                " "[802.3ah], 30.3.6.1.9."                    B"The configuration revision of the OAM peer as reflected in
                the latest OAMPDU.  This attribute is changed by the peer
                whenever it has a local configuration change for Ethernet OAM
                this interface.  The configuration revision can be determined
                from the Revision field of the Local Information TLV of the
                most recently received Information OAMPDU with a Local
                Information TLV. A value of zero is returned if no Local
                Information TLV has been received.
                " "[802.3ah], 30.3.6.1.13."                    ‹"The OAM functions supported on this Ethernet like interface.
                OAM consists of separate functionality sets above the basic
                discovery process.  This value indicates the capabilities of
                the peer OAM entity with respect to these functions.  This
                value is initialized so all bits are clear.

                If unidirectionalSupport(0) is set, then the peer OAM entity
                supports sending OAM frames on Ethernet interfaces when the
                receive path is known to be inoperable.   If
                loopbackSupport(1) is set, then the peer OAM entity can send
                and receive OAM loopback commands.  If eventSupport(2) is set,
                then the peer OAM entity can send and receive event OAMPDUs to
                signal various error conditions. If variableSupport(3) is set,
                then the peer OAM entity can send and receive variable
                requests to monitor attribute value as described in Clause 57
                of [802.3ah].

                The capabilities of the OAM peer can be determined from the
                configuration field of the Local Information TLV of the most
                recently received Information OAMPDU with a Local Information
                TLV.  All zeros are returned if no Local Information TLV has
                yet been received.
                " ""[802.3ah], REFERENCE 30.3.6.1.7."                    —"This table contains controls for the loopback state of the
                local link as well as indicating the status of the loopback
                function.  There is one entry in this table for each entry in
                hwDot3ahEfmTable that supports loopback functionality (where
                hwDot3ahEfmFunctionsSupported includes the loopbackSupport bit
                set).

                Loopback can be used to place the remote OAM entity in a state
                where every received frame (except OAMPDUs) is echoed back
                over the same interface on which they were received.   In this
                state, at the remote entity, 'normal' traffic is disabled as
                only the looped back frames are transmitted on the interface.
                Loopback is thus an intrusive operation that prohibits normal
                data flow and should be used accordingly.  "                      ž"An entry in the table, containing information on the loopback
                status for a single Ethernet like interface.  Entries in the
                table are automatically created whenever the local OAM entity
                supports loopback capabilities.  The loopback status on the
                interface can be determined from the hwDot3ahEfmLoopbackStatus
                object.
                "                      z"The loopback status of the OAM entity. When
                operating in normal mode with no loopback in progress, the
                status reads noLoopback(1).
                The values initiatingLooopback(2) and terminatingLoopback(4)
                can be read or written.  The other values can only be read -
                they can never be written.
                " G"[802.3ah], REFERENCE 57.2.11, 30.3.61.14,
                30.3.6.1.15"                    "Since OAM loopback is a disruptive operation (user traffic
                does not pass), this attribute provides a mechanism to provide
                controls over whether received OAM loopback commands are
                processed or ignored.  When the value is ignore(1), received
                loopback commands are ignored.  When the value is process(2),
                OAM loopback commands are processed.  The default value is to
                process loopback commands (process(2)).
                " G"[802.3ah], REFERENCE 57.2.11, 30.3.61.14,
                30.3.6.1.15"                     ì"This object specifies the timeout period for a remote loopback. The
                 value ranges from 0 to 1000 in minutes. The default value is 20
                 minutes. 0 indicates that no timeout period is set.
                "                      ×"This table contains statistics for the OAM function on a
                particular Ethernet like interface. There is an entry in the
                table for every entry in the hwDot3ahEfmTable.

                The counters in this table are defined as 32-bit entries to
                match the counter size as defined in [802.3ah].  Given the OAM
                protocol is a slow protocol, the counters increment at a slow
                rate.
                "                      `"An entry in the table, containing statistics information on
                the Ethernet OAM function for a single Ethernet like
                interface.  Entries are automatically created for every entry
                in the hwDot3ahEfmTable.  Counters are maintained across
                transitions in hwDot3ahEfmOperStatus.
                "                      9"A count of the number of Information OAMPDUs transmitted on
                this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.  " "[802.3ah], 30.3.6.1.20."                    E"A count of the number of Information OAMPDUs received on this
                interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.21."                    ›"A count of the number of unique Event OAMPDUs transmitted on
                this interface.  Event notifications may be sent in duplicate
                to increase the probability of successfully being received,
                given the possibility that a frame may be lost in transit.
                Duplicate Event Notification transmissions are counted by
                hwDot3ahEfmDuplicateEventNotificationTx.

                A unique Event Notification OAMPDU is indicated as an Event
                Notification OAMPDU with a Sequence Number field that is
                distinct from the previously transmitted Event Notification
                OAMPDU Sequence Number.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.22."                    š"A count of the number of unique Event OAMPDUs received on
                this interface.  Event notification OAMPDUs may be sent in
                duplicate to increase the probability of successfully being
                received, given the possibility that a frame may be lost in
                transit.  Duplicate Event Notification receptions are counted
                by hwDot3ahEfmDuplicateEventNotificationRx.

                A unique Event Notification OAMPDU is indicated as an Event
                Notification OAMPDU with a Sequence Number field that is
                distinct from the previously received Event Notification
                OAMPDU Sequence Number.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.24."                    4"A count of the number of duplicate Event OAMPDUs transmitted
                on this interface.  Event notification OAMPDUs may be sent in
                duplicate to increase the probability of successfully being
                received, given the possibility that a frame may be lost in
                transit.

                A duplicate Event Notification OAMPDU is indicated as an Event
                Notification OAMPDU with a Sequence Number field that is
                identical to the previously transmitted Event Notification
                OAMPDU Sequence Number.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.23."                    ."A count of the number of duplicate Event OAMPDUs received on
                this interface.  Event notification OAMPDUs may be sent in
                duplicate to increase the probability of successfully being
                received, given the possibility that a frame may be lost in
                transit.

                A duplicate Event Notification OAMPDU is indicated as an Event
                Notification OAMPDU with a Sequence Number field that is
                identical to the previously received Event Notification OAMPDU
                Sequence Number.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.25."                    M"A count of the number of Loopback Control OAMPDUs transmitted
                on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.26."                    J"A count of the number of Loopback Control OAMPDUs received
                on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.27."                    M"A count of the number of Variable Request OAMPDUs transmitted
                on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.28."                    J"A count of the number of Variable Request OAMPDUs received on
                this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.29."                    N"A count of the number of Variable Response OAMPDUs
                transmitted on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.30."                    K"A count of the number of Variable Response OAMPDUs received
                on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.31."                    R"A count of the number of Organization Specific OAMPDUs
                transmitted on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.32."                    O"A count of the number of Organization Specific OAMPDUs
                received on this interface.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.33."                    X"A count of the number of OAMPDUs transmitted on this
                interface with an unsupported op-code.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.18."                    U"A count of the number of OAMPDUs received on this interface
                with an unsupported op-code.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.19."                    Î"A count of the number of frames that were dropped by the OAM
                multiplexer.  Since the OAM multiplexer has multiple inputs
                and a single output, there may be cases where frames are
                dropped due to transmit resource contention.  This counter is
                incremented whenever a frame is dropped by the OAM layer.
                Note that any Ethernet frame, not just OAMPDUs, may be dropped
                by the OAM layer.  This can occur when an OAMPDU takes
                precedence over a 'normal' frame resulting in the 'normal'
                frame being dropped.

                When this counter is incremented, no other counters in this
                MIB are incremented.

                Discontinuities of this counter can occur at re-initialization
                of the management system, and at other times as indicated by
                the value of the ifCounterDiscontinuityTime.
                " "[802.3ah], 30.3.6.1.46."                    B"Ethernet OAM includes the ability to generate and receive
                Event Notification OAMPDUs to indicate various link problems.
                This table contains the mechanisms to enable Event
                Notifications and configure the thresholds to generate the
                standard Ethernet OAM events.  There is one entry in the table
                for every entry in hwDot3ahEfmTable that supports OAM events
                (where hwDot3ahEfmFunctionsSupported includes the eventSupport
                bit set). The values in the table are maintained across
                changes to hwDot3ahEfmOperStatus.

                The standard threshold crossing events are:
                  - Errored Symbol Period Event.  Generated when the number of
                    symbol errors exceeds a threshold within a given window
                    defined by a number of symbols (for example, 1,000 symbols
                    out of 1,000,000 had errors).
                  - Errored Frame Period Event.  Generated when the number of
                    frame errors exceeds a threshold within a given window
                    defined by a number of frames (for example, 10 frames out
                    of 1000 had errors).
                  - Errored Frame Event.  Generated when the number of frame
                    errors exceeds a threshold within a given window defined
                    by a period of time (for example, 10 frames in 1 second
                    had errors).
                  - Errored Frame Seconds Summary Event.  Generated when the
                    number of errored frame seconds exceeds a threshold within
                    a given time period (for example, 10 errored frame seconds
                    within the last 100 seconds).  An errored frame second is
                    defined as a 1 second interval which had >0 frame errors.
                There are other events (dying gasp, critical events) that are
                not threshold crossing events but which can be
                enabled/disabled via this table.
                "                      Q"Entries are automatically created and deleted from this
                table, and exist whenever the OAM entity supports Ethernet OAM
                events (as indicated by the eventSupport bit in
                hwDot3ahEfmFunctionsSuppported).  Values in the table are
                maintained across changes to the value of hwDot3ahEfmOperStatus.

                Event configuration controls when the local management entity
                sends Event Notification OAMPDUs to its OAM peer, and when
                certain event flags are set or cleared in OAMPDUs.
                "                      Ã"The two objects hwDot3ahEfmErrSymPeriodWindowHi and
                hwDot3ahEfmErrSymPeriodWindowLo together form an unsigned 64-bit
                integer representing the number of symbols over which this
                threshold event is defined.  This is defined as

                hwDot3ahEfmErrSymPeriodWindow = ((2^32)*hwDot3ahEfmErrSymPeriodWindowHi)
                                                + hwDot3ahEfmErrSymPeriodWindowLo

                If hwDot3ahEfmErrSymPeriodThreshold symbol errors occur within a
                window of hwDot3ahEfmErrSymPeriodWindow symbols, an Event
                Notification OAMPDU should be generated with an Errored Symbol
                Period Event TLV indicating the threshold has been crossed in
                this window.

                The default value for hwDot3ahEfmErrSymPeriodWindow is the number
                of symbols in one second for the underlying physical layer.
                " "[802.3ah], 30.3.6.1.34"                    Ã"The two objects hwDot3ahEfmErrSymPeriodWindowHi and
                hwDot3ahEfmErrSymPeriodWindowLo together form an unsigned 64-bit
                integer representing the number of symbols over which this
                threshold event is defined.  This is defined as

                hwDot3ahEfmErrSymPeriodWindow = ((2^32)*hwDot3ahEfmErrSymPeriodWindowHi)
                                                + hwDot3ahEfmErrSymPeriodWindowLo

                If hwDot3ahEfmErrSymPeriodThreshold symbol errors occur within a
                window of hwDot3ahEfmErrSymPeriodWindow symbols, an Event
                Notification OAMPDU should be generated with an Errored Symbol
                Period Event TLV indicating the threshold has been crossed in
                this window.

                The default value for hwDot3ahEfmErrSymPeriodWindow is the number
                of symbols in one second for the underlying physical layer.
                " "[802.3ah], 30.3.6.1.34"                    %"The two objects hwDot3ahEfmErrSymPeriodThresholdHi and
                hwDot3ahEfmErrSymPeriodThresholdLo together form an unsigned
                64-bit integer representing the number of symbol errors that
                must occur within a given window to cause this event.

                This is defined as

                  hwDot3ahEfmErrSymPeriodThreshold =
                                    ((2^32) * hwDot3ahEfmErrSymPeriodThresholdHi)
                                            + hwDot3ahEfmErrSymPeriodThresholdLo

                If hwDot3ahEfmErrSymPeriodThreshold symbol errors occur within a
                window of hwDot3ahEfmErrSymPeriodWindow symbols, an Event
                Notification OAMPDU should be generated with an Errored Symbol
                Period Event TLV indicating the threshold has been crossed in
                this window.

                The default value for hwDot3ahEfmErrSymPeriodThreshold is one
                symbol errors.  If the threshold value is zero, then an Event
                Notification OAMPDU is sent periodically (at the end of every
                window).  This can be used as an asynchronous notification to
                the peer OAM entity of the statistics related to this
                threshold crossing alarm.
                " "[802.3ah], 30.3.6.1.34"                    #"The two objects hwDot3ahEfmErrSymPeriodThresholdHi and
                hwDot3ahEfmErrSymPeriodThresholdLo together form an unsigned
                64-bit integer representing the number of symbol errors that
                must occur within a given window to cause this event.

                This is defined as

                  hwDot3ahEfmErrSymPeriodThreshold =
                                    ((2^32) * hwDot3ahEfmErrSymPeriodThresholdHi)
                                            + hwDot3ahEfmErrSymPeriodThresholdLo

                If hwDot3ahEfmErrSymPeriodThreshold symbol errors occur within a
                window of hwDot3ahEfmErrSymPeriodWindow symbols, an Event
                Notification OAMPDU should be generated with an Errored Symbol
                Period Event TLV indicating the threshold has been crossed in
                this window.

                The default value for hwDot3ahEfmErrSymPeriodThreshold is one
                symbol error. If the threshold value is zero, then an Event
                Notification OAMPDU is sent periodically (at the end of every
                window).  This can be used as an asynchronous notification to
                the peer OAM entity of the statistics related to this
                threshold crossing alarm.
                " "[802.3ah], 30.3.6.1.34"                    ¿"If true, the OAM entity should send an Event Notification
                OAMPDU when an Errored Symbol Period Event occurs.
                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      ]"The number of frames over which the threshold is defined.
                The default value of the window is the number of minimum size
                Ethernet frames that can be received over the physical layer
                in one second.

                If hwDot3ahEfmErrFramePeriodThreshold frame errors occur within a
                window of hwDot3ahEfmErrFramePeriodWindow frames, an Event
                Notification OAMPDU should be generated with an Errored Frame
                Period Event TLV indicating the threshold has been crossed in
                this window.
                " "[802.3ah], 30.3.6.1.38"                    &"The number of frame errors that must occur for this event to
                be triggered.  The default value is one frame error.  If the
                threshold value is zero, then an Event Notification OAMPDU is
                sent periodically (at the end of every window).  This can be
                used as an asynchronous notification to the peer OAM entity of
                the statistics related to this threshold crossing alarm.

                If hwDot3ahEfmErrFramePeriodThreshold frame errors occur within a
                window of hwDot3ahEfmErrFramePeriodWindow frames, an Event
                Notification OAMPDU should be generated with an Errored Frame
                Period Event TLV indicating the threshold has been crossed in
                this window.
                " "[802.3ah], 30.3.6.1.38"                    ¿"If true, the OAM entity should send an Event Notification
                OAMPDU when an Errored Frame Period Event occurs.

                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      ú"The amount of time (in 100ms increments) over which the
                threshold is defined.  The default value is 10 (1 second).

                If hwDot3ahEfmErrFrameThreshold frame errors occur within a window
                of hwDot3ahEfmErrFrameWindow seconds (measured in tenths of
                seconds), an Event Notification OAMPDU should be generated
                with an Errored Frame Event TLV indicating the threshold has
                been crossed in this window.
                " "[802.3ah], 30.3.6.1.36"                    ""The number of frame errors that must occur for this event to
                be triggered.  The default value is one frame error. If the
                threshold value is zero, then an Event Notification OAMPDU is
                sent periodically (at the end of every window).  This can be
                used as an asynchronous notification to the peer OAM entity of
                the statistics related to this threshold crossing alarm.

                If hwDot3ahEfmErrFrameThreshold frame errors occur within a window
                of hwDot3ahEfmErrFrameWindow (in tenths of seconds), an Event
                Notification OAMPDU should be generated with an Errored Frame
                Event TLV indicating the threshold has been crossed in this
                window.
                " "[802.3ah], 30.3.6.1.36"                    ¸"If true, the OAM entity should send an Event Notification
                OAMPDU when an Errored Frame Event occurs.

                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      "The amount of time (in 100ms intervals) over which the
                threshold is defined.  The default value is 600 (60 seconds).

                If hwDot3ahEfmErrFrameSecsSummaryThreshold frame errors occur
                within a window of hwDot3ahEfmErrFrameSecsSummaryWindow (in tenths
                of seconds), an Event Notification OAMPDU should be generated
                with an Errored Frame Seconds Summary Event TLV indicating the
                threshold has been crossed in this window.
                " "[802.3ah], 30.3.6.1.40"                    j"The number of errored frame seconds that must occur for this
                event to be triggered.  The default value is one errored frame
                second. If the threshold value is zero, then an Event
                Notification OAMPDU is sent periodically (at the end of every
                window).  This can be used as an asynchronous notification to
                the peer OAM entity of the statistics related to this
                threshold crossing alarm.

                If hwDot3ahEfmErrFrameSecsSummaryThreshold frame errors occur
                within a window of hwDot3ahEfmErrFrameSecsSummaryWindow (in tenths
                of seconds), an Event Notification OAMPDU should be generated
                with an Errored Frame Seconds Summary Event TLV indicating the
                threshold has been crossed in this window.
                " "[802.3ah], 30.3.6.1.40"                    Ö"If true, the local OAM entity should send an Event
                Notification OAMPDU when an Errored Frame Seconds Event
                occurs.

                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      "If true, the local OAM entity should attempt to indicate a
                dying gasp via the OAMPDU flags field to its peer OAM entity
                when a dying gasp event occurs.  The exact definition of a
                dying gasp event is implementation dependent.  If the system
                does not support dying gasp capability, setting this object
                has no effect, and reading the object should always result in
                'false'.

                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      "If true, the local OAM entity should attempt to indicate a
                critical event via the OAMPDU flags to its peer OAM entity
                when a critical event occurs.   The exact definition of a
                critical event is implementation dependent.  If the system
                does not support critical event capability, setting this
                object has no effect, and reading the object should always
                result in 'false'.

                By default, this object should have the value true for
                Ethernet like interfaces that support OAM.  If the OAM layer
                does not support event notifications (as indicated via the
                hwDot3ahEfmFunctionsSupported attribute), this value is ignored.
                "                      2"This object indicates whether threshold event will trigger error-shutdown.
                If it is enabled(1), after EFM checks that the threshold event happens,
                the current interface will be set to administrative down.

                The default value is disabled(2).
                "                      L"This object indicates whether non-threshold critical event will trigger error-shutdown.
                If it is enabled(1), after EFM checks that the non-threshold critical event happens,
                the current interface will be set to administrative down.

                The default value is disabled(2).
                "                      P"This object indicates whether non-threshold dying gasp event will trigger error-shutdown.
                If it is enabled(1), after EFM checks that the non-threshold dying gasp event happens,
                the current interface will be set to administrative down.

                The default value is disabled(2).
                "                      P"This object indicates whether non-threshold link fault event will trigger error-shutdown.
                If it is enabled(1), after EFM checks that the non-threshold link fault event happens,
                the current interface will be set to administrative down.

                The default value is disabled(2).
                "                      L"This object indicates whether non-threshold time out event will trigger error-shutdown.
                If it is enabled(1), after EFM checks that the non-threshold time out event happens,
                the current interface will be set to administrative down.

                The default value is disabled(2).
                "                      ;"This table records a history of the events that have occurred
                at the Ethernet OAM level.  These events can include locally
                detected events, which may result in locally generated
                OAMPDUs, and remotely detected events, which are detected by
                the OAM peer entity and signaled to the local entity via
                Ethernet OAM.  Ethernet OAM events can be signaled by Event
                Notification OAMPDUs or by the flags field in any OAMPDU.

                This table contains both threshold crossing events and
                non-threshold crossing events.  The parameters for the
                threshold window, threshold value, and actual value
                (hwDot3ahEfmEventLogWindowXX, hwDot3ahEfmEventLogThresholdXX,
                hwDot3ahEfmEventLogValue) are only applicable to threshold
                crossing events, and are returned as all F's (2^32 - 1) for
                non-threshold crossing events.
                Entries in the table are automatically created when such
                events are detected.  The size of the table is implementation
                dependent.  When the table reaches its maximum size, older
                entries are automatically deleted to make room for newer
                entries.
                "                      Ô"An entry in the hwDot3ahEfmEventLogTable.  Entries are
                automatically created whenever Ethernet OAM events occur at
                the local OAM entity, and when Event Notification OAMPDUs are
                received at the local OAM entity (indicating events have
                occurred at the peer OAM entity).  The size of the table is
                implementation dependent, but when the table becomes full,
                older events are automatically deleted to make room for newer
                events.  The table index hwDot3ahEfmEventLogIndex increments for
                each new entry, and when the maximum value is reached the
                value restarts at zero.
                "                       `"An arbitrary integer for identifying individual events
                within the event log.  "                      "The value of sysUpTime at the time of the logged event.  For
                locally generated events, the time of the event can be
                accurately retrieved from sysUpTime.  For remotely generated
                events, the time of the event is indicated by the reception of
                the Event Notification OAMPDU indicating the event occurred on
                the peer.  A system may attempt to adjust the timestamp value
                to more accurately reflect the time of the event at the peer
                OAM entity by using other information, such as that found in
                the timestamp found of the Event Notification TLVs, which
                provides an indication of the relative time between events at
                the peer entity.  "                      ™"The OUI of the entity defining the object type.  All IEEE
                802.3 defined events (as appearing in [802.3ah] except for the
                Organizationally Unique Event TLVs) use the IEEE 802.3 OUI of
                0x0180C2.  Organizations defining their own Event Notification
                TLVs include their OUI in the Event Notification TLV which
                gets reflected here.  "                      G"The type of event that generated this entry in the event log.

                When the OUI is the IEEE 802.3 OUI of 0x0180C2, the following
                event types are defined:
                    erroredSymbolEvent(1),
                    erroredFrameEvent(2),
                    erroredFramePeriodEvent(3),
                    erroredFrameSecondsEvent(4),
                    lostlink(254),
                    linkFault(256),
                    dyingGaspEvent(257),
                    criticalLinkEvent(258)
                The first four are considered threshold crossing events as
                they are generated when a metric exceeds a given value within
                a specified window.  The other three are not threshold
                crossing events.

                When the OUI is not 71874 (0x0180C2 in hex), then some other
                organization has defined the event space.  If event subtyping
                is known to the implementation, it may be reflected here.
                Otherwise, this value should return all Fs (2^32 - 1).
                " $"[802.3ah], 30.3.6.1.10 and 57.5.3."                     ’"Whether this event occurred locally (local(1)), or was
                received from the OAM peer via Ethernet OAM (remote(2)).
                "                      ê"If the event represents a threshold crossing event, the two
                objects hwDot3ahEfmEventWindowHi and hwDot3ahEfmEventWindowLo form an
                unsigned 64-bit integer yielding the window over which the
                value was measured for the threshold crossing event (for
                example, 5, when 11 occurrences happened in 5 seconds while
                the threshold was 10).   The two objects are combined as:

                hwDot3ahEfmEventLogWindow = ((2^32) * hwDot3ahEfmEventLogWindowHi)
                                                + hwDot3ahEfmEventLogWindowLo


                Otherwise, this value is returned as all F's (2^32 - 1) and
                adds no useful information.
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    é"If the event represents a threshold crossing event, the two
                objects hwDot3ahEfmEventWindowHi and hwDot3ahEfmEventWindowLo form an
                unsigned 64-bit integer yielding the window over which the
                value was measured for the threshold crossing event (for
                example, 5, when 11 occurrences happened in 5 seconds while
                the threshold was 10).   The two objects are combined as:

                hwDot3ahEfmEventLogWindow = ((2^32) * hwDot3ahEfmEventLogWindowHi)
                                                + hwDot3ahEfmEventLogWindowLo

                Otherwise, this value is returned as all F's (2^32 - 1) and
                adds no useful information.
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    æ"If the event represents a threshold crossing event, the two
                objects hwDot3ahEfmEventThresholdHi and hwDot3ahEfmEventThresholdLo
                form an unsigned 64-bit integer yielding the value that was
                crossed for the threshold crossing event (for example, 10,
                when 11 occurrences happened in 5 seconds while the threshold
                was 10).  The two objects are combined as:

                hwDot3ahEfmEventLogThreshold = ((2^32) * hwDot3ahEfmEventLogThresholdHi)
                                                 + hwDot3ahEfmEventLogThresholdLo

                Otherwise, this value is returned as all F's (2^32 -1) and
                adds no useful information.
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    ç"If the event represents a threshold crossing event, the two
                objects hwDot3ahEfmEventThresholdHi and hwDot3ahEfmEventThresholdLo
                form an unsigned 64-bit integer yielding the value that was
                crossed for the threshold crossing event (for example, 10,
                when 11 occurrences happened in 5 seconds while the threshold
                was 10).  The two objects are combined as:

                hwDot3ahEfmEventLogThreshold = ((2^32) * hwDot3ahEfmEventLogThresholdHi)
                                                 + hwDot3ahEfmEventLogThresholdLo

                Otherwise, this value is returned as all F's (2^32 - 1) and
                adds no useful information.
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    ª"If the event represents a threshold crossing event, this
                value indicates the value of the parameter within the given
                window that generated this event (for example, 11, when 11
                occurrences happened in 5 seconds while the threshold was 10).

                Otherwise, this value is returned as all F's
                (2^64 - 1) and adds no useful information.
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    ß"Each Event Notification TLV contains a running total of the
                number of times an event has occurred, as well as the number
                of times an Event Notification for the event has been
                transmitted.  For non-threshold crossing events, the number of
                events (hwDot3ahEfmLogRunningTotal) and the number of resultant
                Event Notifications (hwDot3ahEfmLogEventTotal) should be
                identical.

                For threshold crossing events, since multiple occurrences may
                be required to cross the threshold, these values are likely
                different.  This value represents the total number of times
                this event has happened since the last reset (for example,
                3253, when 3253 symbol errors have occurred since the last
                reset, which has resulted in 51 symbol error threshold
                crossing events since the last reset).
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                    ÷"Each Event Notification TLV contains a running total of the
                number of times an event has occurred, as well as the number
                of times an Event Notification for the event has been
                transmitted.  For non-threshold crossing events, the number of
                events (hwDot3ahEfmLogRunningTotal) and the number of resultant
                Event Notifications (hwDot3ahEfmLogEventTotal) should be
                identical.

                For threshold crossing events, since multiple occurrences may
                be required to cross the threshold, these values are likely
                different.  This value represents the total number of times
                one or more of these occurrences have resulted in an Event
                Notification (for example, 51 when 3253 symbol errors have
                occurred since the last reset, which has resulted in 51 symbol
                error threshold crossing events since the last reset).
                " &"[802.3ah], 30.3.6.1.37 and 57.5.3.2."                     ~"This table contains configurations of binding relationships
                 between EFM and other modules.
                "                       ~"This entry contains configurations of binding relationships
                 between EFM and other modules.
                "                      j"This object indicates whether EFM is bound to the interface.
                If it is enabled(1), after EFM checks that the link times out,
                the current Ethernet interface link state will be set to block (EFM
                down),and all the data except the OAMPDU is blocked.

                The default value is disabled(2).
                "                       Õ"This object specifies the time elapsed an EFM interface is
                in the faulty state. The value ranges from 0 to 50 in seconds.
                
                The default value is 0.
                "                       |"This table contains information about the OAM Evrrp project for
          a particular Ethernet like interface.
          "                       ø"An entry in the table of hwDot3ahEvrrpTable, containing information on
          the OAM Evrrp entity for a single Ethernet like interface.

          Note that there is at most one OAM Evrrp for each Ethernet like
          interface.
          "                      ­"This object indicates the state in the OAMPDU which sended by
          the peer interface.

          If it is master(1), EFM will make the link work as the master
          state. And if it is slave(2), EFM will make the link works as
          the slave chain link.

          The default state is unknown(3). That means the peer interface
          didn't send any OAMPDU which contains the state of link status.
          "                      A"This object indicates whether EFM is bound to the interface.
          If it is enabled(1), after EFM checks that the link times out,
          the current Ethernet interface link state will be set to EFM
          down. And all of the PDU operation will be stop.

          The default value is disabled(2).
          "                       ´"This object specifies the time elapsed an EFM interface is
           in the faulty state. The value ranges from 0 to 50 in seconds.

          The default value is 0.
          "                                   P"
                Search the next hwTestMessageTable instance.
                "                       z"
                The definition of the tested packets format and the transmission of the tested packets
                "                       "Entry for Test Message Table."                       N"
                Set the index for the tested packets table
                "                       @"
                The destination MAC address

                "                       ."
                VLAN index
                "                       ^"
                If the interface is specified, specify the interface name.
                "                       @"
                Name of the service instance
                "                       †"
                The length of the sent tested packets ranges from 64 to 1518 in byte, and the default value is 64.
                "                       ˆ"
                The number of the sent tested packets ranges from 1 to 65535 in integer, and the default value is 5.
                "                       Œ"
                Enumerated type indicates the rate of sending the packets: oneMbps and fiveMbps. The default is oneMbps.
                "                       U"
                The sending and termination of the tested packets
                "                      )"
                View whether the tested packets are stopped to be sent:
                1, 2, 3, 4, and 5 indicate that has not run/is running/the previous test terminates normally/the previous test terminates abnormally/the previous test is interrupted (through ctrl+c or mib)
                "                       õ"
                The status of the row.

                The writable columns in a row can not be changed if the row
                is active. All columns must have a valid value before a row
                can be activated.
                "                       I"
                View the returned results after tests
                "                       "Entry for Test Message Table."                       B"
                The number of the sent packets
                "                       F"
                The number of the received packets
                "                       6"
                Packets loss ratio
                "                       @"
                The number of the sent bytes
                "                       D"
                The number of the received bytes
                "                       @"
                The number of the lost bytes
                "                       K"
                The time of starting the Test operation
                "                       I"
                The time of ending the Test operation
                "                          L"A MEP has lost contact with one or more MEPs. A notification
                (fault alarm) is sent to the management entity with the OID
                of the MEP that has detected the fault.

                Whenever a MEP loses contact with one or more other MEPs,
                it may or may not generate a Fault Alarm to warn the system
                administrator of the problem, as controlled by the MEP
                Fault Notification Generator State Machine and associated
                Managed Objects. Only the highest-priority defect, as shown
                in Table 20-1, is reported in the Fault Alarm.
                          hwDot1agCfmRMepMacAddress   The MAC address of the remote faulty MEP
                          hwDot1agCfmRMepHighestPrDefect   The fault in the highest level
                          hwDot1agCfmMdName                The name of the faulty MD
                          hwDot1agCfmMdLevel               The level of the faulty MD
                          hwDot1agCfmMaName                The name of the faulty MA
                             " "802.1ag clause 12.14.7.7"              "
                The events after tests are reported.
                1,2,3,4, and 5 indicate has not run/is running/the previous test terminates normally/the previous test terminate abnormally/the previous test is interrupted.
                (through ctrl+c or mib)
                " " "               m"
                After the test is complete, report the results to the network management.
                " " "              Ã"This object indicates that an hwDot3ahEfmThresholdEvent notification is sent when a local or remote threshold-crossing event is detected. A local threshold-crossing event is detected by the local entity, whereas a remote threshold-crossing event is detected through the reception of an Ethernet OAM Event Notification OAMPDU indicating a threshold event. This notification should not be sent more than once per second. The OAM entity can be obtained from the ifIndex in the variable bindings. The objects in the notification correspond to the values in a row instance of in the hwDot3ahEfmEventLogTable. The management entity should periodically check hwDot3ahEfmEventLogTable to detect any missed events."                ®"This object indicates that an hwDot3ahEfmNonThresholdEvent notification is sent when a local or remote non-threshold-crossing event is detected. A local event is detected by the local entity, whereas a remote event is detected through the reception of an Ethernet OAM Event Notification OAMPDU indicating a non-threshold-crossing event. This notification should not be sent more than once per second. The OAM entity can be obtained from the ifIndex in the variable bindings. The objects in the notification correspond to the values in a row instance of the hwDot3ahEfmEventLogTable. The management entity should periodically check hwDot3ahEfmEventLogTable to detect any missed events."                 ý"This object indicates that an hwDot3ahEfmRemoteDyingGaspEvent notification is sent when a remote Dying-Gasp event is detected. A remote event is detected through the reception of an Ethernet OAM Event Notification OAMPDU indicating a Dying-Gasp event."                 I"This object indicates that the non-threshold-crossing event is cleared."                 ƒ"
                This object indicates that the one-way delay exceeds the trap threshold in the VLAN networking.
                "                 ‡"
                This object indicates that the one-way delay falls below the trap threshold in the VLAN networking.
                "                 ƒ"
                This object indicates that the two-way delay exceeds the trap threshold in the VLAN networking.
                "                 ‡"
                This object indicates that the two-way delay falls below the trap threshold in the VLAN networking.
                "                 Þ"
                This object indicates that an hwDot3ahEfmLoopbackFailed notification is sent when loopback fails to start on an interface. This notification should not be sent more than once per second.
                "                 U"This object indicates that the MEP receives an AIS PDU and enters the faulty state."                 ~"This object indicates that the MEP does not receive an AIS PDU within the AIS PDU timeout period and exits the faulty state."                 Q"This object indicates that the MEP receives a CCM with an unexpected MEG level."                 w"This object indicates that the MEP does not receive a CCM with an unexpected MEG level within the CCM timeout period."                 l"This object indicates that the MEP receives a CCM carrying the correct MEG level but the incorrect MEG ID."                 t"This object indicates that the MEP does not receive a CCM with an unexpected MEG ID within the CCM timeout period."                 z"This object indicates that the MEP receives a CCM that has the correct MEG level, correct MEG ID, and unexpected MEP ID."                 t"This object indicates that the MEP does not receive a CCM with an unexpected MEP ID within the CCM timeout period."                 Š"This object indicates that the MEP receives a CCM that has the correct MEG level, correct MEG ID, correct MEP ID, and unexpected period."                 t"This object indicates that the MEP does not receive a CCM with an unexpected period within the CCM timeout period."                 S"This object indicates that the MEP receives a CCM with an unexpected MAC address."                 y"This object indicates that the MEP does not receive a CCM with an unexpected MAC address within the CCM timeout period."                 j"This object indicates that the MEP does not receive any CCM from the RMEP within the CCM timeout period."                 "This object indicates that the MEP receives n (n is greater than or equal to 3) CCMs from the RMEP (MEP ID = i) within the CCM timeout period."                 x"This object indicates that the remote MEP is reporting an error status in its Port Status TLV or Interface Status TLV."                 ‚"This object indicates that the remote MEP resumes from an error status indicated in its Port Status TLV or Interface Status TLV."                 K"This object indicates that the MEP receives a CCM with the RDI field set."                 O"This object indicates that the MEP receives a CCM with the RDI field cleared."                 d"This object indicates that the number of packets sent or received in 1s exceeds the maximum value."                 h"This object indicates that the number of packets sent or received in 1s falls below the maximum value."                 A"This object indicates that the MEP enters the LCK faulty state."                 E"This object indicates that the MEP exits from the LCK faulty state."                 T"This object indicates that the Y.1731 statistic value exceeds the upper threshold."                 X"This object indicates that the Y.1731 statistic value falls below the lower threshold."                 ["Indicates that the number of LCK packets transmitted in 1 second exceeds the upper limit."                 _"Indicates that the number of LCK packets transmitted in 1 second falls below the lower limit."                 O"This object indicates that Y.1731 does not support the current public tunnel."                 i"This object indicates that the alarm that Y.1731 does not support the current public tunnel is cleared."                 M"The Y.1731 statistic value exceeded the upper limit value of the threshold."                 K"The Y.1731 statistic value fell below lower limit value of the threshold."                         4"The compliance statement for the HUAWEI-ETHOAM-MIB"   ,"Support for createAndWait is not required." ,"Support for createAndWait is not required." ~"This group is mandatory for all IEEE 802.3 OAM
                        implementations that support loopback functionality. " {"This group is mandatory for all IEEE 802.3 OAM
                        implementations that support event functionality. " {"This group is mandatory for all IEEE 802.3 OAM
                        implementations that support event functionality. " {"This group is mandatory for all IEEE 802.3 OAM
                        implementations that support event functionality. " {"This group is mandatory for all IEEE 802.3 OAM
                        implementations that support event functionality. " É"This group is optional for all IEEE 802.3 OAM
                        implementations.  The ability to send critical events or dying
                        gasp events is not required in any system."c"This group is optional for all IEEE 802.3 OAM
                        implementations. Entries in this table are dependent on what
                        event functionality is supported in the local OAM
                        implementation.  At least one type of event must be supported
                        for entries to appear in this table.  " w"This group is mandatory for all ITU Y.1731
                        implementations that support event functionality. "                 &"Objects for the hwDot1agCfmMd group."                 &"Objects for the hwDot1agCfmMa group."                 '"Objects for the hwDot1agCfmMep group."                 "RMEP configuration group"                 "MIP configuration group"                 )"Gmac Ping starting and statistics group"                 )"Mac Trace starting and statistics group"                 *"Gmac Trace starting and statistics group"                 "Querying MD index group"                 "Querying MA index group"                 "Test mode group"                 "Test packets setting group"                 :"The group for the tested packets results to be returned."                ý"Objects for the Notifications group.
                A collection of notifications used by Ethernet OAM to signal
                to a management entity that local or remote events have
                occurred on a specified Ethernet link.
                This group is optional for all IEEE 802.3 OAM
                implementations.  Since the information in the notifications
                is dependent on the hwDot3ahEfmEventLogTable, that table must be
                implemented for notifications."                     #"Cfm enabling and statistics group"                 y"A collection of objects providing the abilities,
                configuration, and status of an Ethernet OAM entity.  "                 }"A collection of objects providing the abilities,
                configuration, and status of a peer Ethernet OAM entity.  "                c"A collection of objects providing the statistics for the
                number of various transmit and receive events for OAM on an
                Ethernet like interface.  Note that all of these counters must
                be supported even if the related function (as described in
                hwDot3ahEfmFunctionsSupported) is not supported.  "                 ]"A collection of objects for controlling the OAM remote
                loopback function.  "                -"A collection of objects for configuring the thresholds for an
                Errored Symbol Period Event.

                Each [802.3ah] defined Event Notification TLV has its own
                conformance group because each event can be implemented
                independently of any other.  "                ,"A collection of objects for configuring the thresholds for an
                Errored Frame Period Event.

                Each [802.3ah] defined Event Notification TLV has its own
                conformance group because each event can be implemented
                independently of any other.  "                %"A collection of objects for configuring the thresholds for an
                Errored Frame Event.

                Each [802.3ah] defined Event Notification TLV has its own
                conformance group because each event can be implemented
                independently of any other.  "                5"A collection of objects for configuring the thresholds for an
                Errored Frame Seconds Summary Event.

                Each [802.3ah] defined Event Notification TLV has its own
                conformance group because each event can be implemented
                independently of any other.  "                 ˆ"A collection of objects for configuring the sending OAMPDUs
                with the critical event flag or dying gasp flag enabled.  "                 ¬"A collection of objects for configuring the thresholds for an
                Errored Frame Seconds Summary Event and maintaining the event
                information.  "                 "hwDot3ahEfmManagerGroup "                 j"A collection of objects for displaying and maintaining
                 the infomation for Evrrp state. "                 A"A collection of objects for configuring OAM functions for base."                 S"A collection of objects for configuring OAM functions for performance monitoring."                 Š"A collection of objects for configuring the Alarm Indication Signal (AIS)
                 function to suppress alarms.
                "                 „"A collection of objects for configuring the information about the VLAN
                 that receives AIS frames.
                "                 "A collection of objects for configuring sending AIS packets when the
                 status of the interface which is monitored goes down."                 J"A collection of objects for configuring the multicast MAC ping function."                 £"A collection of objects for displaying information about
                 the multicast LBRs for responding to the multicast MAC ping operation.
                "                 Q"A collection of objects for reset Y1731 statistic information.
                "                 "Y.1731 detecting group"                 „"A collection of objects for configuring the information about the VLAN
                 that receives AIS frames.
                "                 "Querying MP group"                 G"A collection of objects for configuring the information about TestId."                 i"A collection of objects for configuring the information about the single-ended ETH-LM sending function."                 k"A collection of objects for configuring the information about the single-ended ETH-LM receiving function."                 d"A collection of objects for configuring the information about the one-way ETH-DM sending function."                 f"A collection of objects for configuring the information about the one-way ETH-DM receiving function."                 d"A collection of objects for configuring the information about the two-way ETH-DM sending function."                 f"A collection of objects for configuring the information about the two-way ETH-DM receiving function."                 H"A collection of objects for storing the result of single-ended ETH-LM."                 C"A collection of objects for storing the result of one-way ETH-DM."                 C"A collection of objects for storing the result of two-way ETH-DM."                 C"A collection of objects for reseting Y1731 statistic information."                 h"A collection of objects for storing the statistics of two-way ETH-DM collected during the last period."                 n"A collection of objects for storing the statistics of single-ended ETH-SLM collected during the last period."                 m"A collection of objects for storing the statistics of single-ended ETH-LM collected during the last period."                 j"A collection of objects for configuring the information about the single-ended ETH-SLM sending function."                 j"A collection of objects for configuring the information about the single-ended ETH-SLM receive function."                 y"A collection of objects for configuring the information about the single-ended ETH-LM collected during the last period."                 I"A collection of objects for storing the result of single-ended ETH-SLM."                         9"This table is used to configure OAM functions for base."                       )"The configuration entry of base config."                      ["This object indicates the PW measure mode.
                 The value can be:
                        invalid
                        symmetry
                        asymmetry
                 If MA associates with a VLAN, the value is invalid.
                 If MA associates with VSI or VLL, the default value is asymmetry.
                "                      {"This object indicates the alarm threshold for the one-way ETH-DM.
                This object can be set only in VLAN.
                The value ranges from 1 to 4294967295.
                If hwY1731OneDelayThreshold is set to 0, the default alarm threshold of the one-way frame delay is used. By default, no alarm threshold of the one-way frame delay is set.
                "                      Œ"
                This object indicates the alarm threshold for the two-way ETH-DM.
                This object can be set only in VLAN.
                The value ranges from 1 to 4294967295.
                If hwY1731TwoDelayThreshold is set to 0, the default alarm threshold of the two-way frame delay is used. By default, no alarm threshold of the two-way frame delay is set.
                "                       K"This table is used to configure OAM functions for performance monitoring."                       >"The configuration entry of performance monitoring functions."                       9"This object indicates the IP address of the remote end."                       ""This object indicates the VC ID."                       :"This object indicates the MAC address of the remote end."                       ."This object indicates the index for reserve."                       Ö"This object indicates the type of service.
                 The service can be:
                        vlan
                        vsi
                        vll
                        unbind
                "                      0"This object indicates whether the single-ended ETH-LM receiving is enabled on the MEP
                 in the MA to implement the single-ended ETH-LM.
                 The value can be:
                        enabled
                        disabled
                 By default, the value is disabled."                      &"This object indicates whether the one-way ETH-DM receiving is enabled on the MEP
                 in the MA to implement the one-way ETH-DM.
                 The value can be:
                        enabled
                        disabled
                 By default, the value is disabled."                       J"This object indicates whether the one-way ETH-DM receiving is continual."                      7"This object indicates whether the two-way ETH-DM receiving is enabled on the MEP
                 in the MA to implement the two-way ETH-DM.
                 The value can be:
                        enabled
                        disabled
                 By default, the value is disabled.
                "                       ô"This object indicates whether the single-ended ETH-LM sending is enabled.
                 The value can be:
                        enabled
                        disabled
                 By default, the value is disabled.
                "                       À"This object indicates whether the single-ended ETH-LM sending is continual.
                 If the value is 'false', it indicates that the single-ended ETH-LM is on-demand.
                "                       ú"This object indicates the ID of the local MEP that is specified 
                 in the single-ended ETH-LM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       "This object indicates whether the destination MAC address of 
                the single-ended ETH-LM is the specified RMEP's MAC address.
                "                       ½"This object indicates the ID of the remote MEP that is specified 
                 in the single-ended ETH-LM operation.
                 The value 0 is an invalid value.
                "                       :"This object indicates the MAC address of the remote end."                      R"This object indicates the interval of the sent LMM frames.
                 When on-demand OAM, the value can be:
                    1 second
                    10 seconds
                 When proactive OAM, the value can be:
                    1 second
                    10 seconds
                    30 seconds
                "                       ­"This object indicates the number of LMM frames to be sent.
                 The value can be 0 or ranges from 1 to 60.
                 When proactive OAM, the value is 0."                      7"This object indicates the 802.1p priority of the sent LMM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                       â"This object indicates whether the dual-ended ETH-LM is enabled.
                 The value can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       ø"This object indicates the ID of the local MEP that is specified 
                 in the dual-ended ETH-LM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ù"This object indicates the ID of the remote MEP that is specified 
                 in the dual-ended ETH-LM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ç"This object indicates whether the one-way ETH-DM sending is enabled.
                 The value can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       ¶"This object indicates whether the one-way ETH-DM sending is continual.
                 If the value is 'false', it indicates that the one-way ETH-DM is on-demand.
                "                       õ"This object indicates the ID of the local MEP that is specified 
                 in the one-way ETH-DM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ™"This object indicates whether the destination MAC address of 
                 the one-way ETH-DM is the specified RMEP's MAC address.
                "                       ö"This object indicates the ID of the remote MEP that is specified 
                 in the one-way ETH-DM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       4"This object indicates the MAC address of the RMEP."                      R"This object indicates the interval of the sent 1DM frames.
                 When on-demand OAM, the value can be:
                    1 second
                    10 seconds
                 When proactive OAM, the value can be:
                    1 second
                    10 seconds
                    30 seconds
                "                       «"This object indicates the number of the sent 1DM frames.
                 The value can be 0 or ranges from 1 to 60.
                 When proactive OAM, the value is 0."                      6"This object indicates the 802.1p priority of the sent 1DM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0, 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                       W"This object indicates whether the two-way ETH-DM sending is enabled.
                "                       ¶"This object indicates whether the two-way ETH-DM sending is continual.
                 If the value is 'false', it indicates that the two-way ETH-DM is on-demand.
                "                       õ"This object indicates the ID of the local MEP that is specified 
                 in the two-way ETH-DM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ™"This object indicates whether the destination MAC address of 
                 the two-way ETH-DM is the specified RMEP's MAC address.
                "                       å"This object indicates the ID of the remote MEP that is specified 
                 in the two-way ETH-DM operation.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value."                       4"This object indicates the destination MAC address."                      R"This object indicates the interval of the sent DMM frames.
                 When on-demand OAM, the value can be:
                    1 second
                    10 seconds
                 When proactive OAM, the value can be:
                    1 second
                    10 seconds
                    30 seconds
                "                       «"This object indicates the number of the sent DMM frames.
                 The value can be 0 or ranges from 1 to 60.
                 When proactive OAM, the value is 0."                      7"This object indicates the 802.1p priority of the sent DMM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                      ;"This object indicates the 802.1p priority of the received LMM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                      ;"This object indicates the 802.1p priority of the received 1DM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                      ;"This object indicates the 802.1p priority of the received DMM packets.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                       ±"This object indicates the ID of the local MEP.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ±"This object indicates the ID of the local MEP.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                       ±"This object indicates the ID of the local MEP.
                 The value can be 0 or ranges from 1 to 8191.
                 The value 0 is an invalid value.
                "                      "This object indicates the size of one-way ETH-DM packet.
                 The value can be 0 or ranges from 64 to 1518.
                 The value 0 means that the packet size is not specified.
                 By default, the value is 0.
                "                      "This object indicates the size of a two-way ETH-DM packet.
                 The value can be 0 or ranges from 64 to 1518.
                 The value 0 means that the packet size is not specified.
                 By default, the value is 0.
                "                       ‚"This table is used to configure the Alarm Indication Signal (AIS)
                 function to suppress alarms.
                "                       '"The entry of alarm indication signal."                       þ"This object indicates whether the AIS function is enabled in
                 the current MA. The value of this object can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       ¹"This object indicates the level of the sent AIS frames.
                 The value can be -1 or ranges from 0 to 7.
                 The value -1 is an invalid value.
                "                       Ü"This object indicates the interval of the sent AIS frames.
                 The value can be:
                    1 second
                    60 seconds
                 The default value is 1 second.
                "                       æ"This object indicates whether the current MA is sending AIS frames.
                 The value can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       ë"This object indicates whether the alarm suppression function is enabled.
                 The value can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       Ò"This object indicates whether the alarm function on the current
                 device is in the suppression state. The value can be:
                    enabled
                    disabled
                "                       |"This table is used to configure the information about the VLAN that
                 receives AIS frames.
                "                       ="The entry of alarm indication signal about vlan infomation."                       r"This object indicates the ID of the PE VLAN corresponding to
                 the AIS function.
                "                       •"
                This object indicates the lower limit of the ID of the CE VLAN
                corresponding to the AIS function.
                "                       …"This object indicates the upper limit of the ID of the CE VLAN
                 corresponding to the AIS function.
                "                       ˆ"This object indicates the lower limit of the ID of the dot1q VLAN
                 corresponding to the AIS function.
                "                       ˆ"This object indicates the upper limit of the ID of the dot1q VLAN
                 corresponding to the AIS function.
                "                       ó"This object indicates the row status of this table.

                 The writable columns in a row can not be changed if the row
                 is active. All columns MUST have a valid value before a row
                 can be activated."                       š"
                This table is used to enable Y.1731 to send AIS packets when the status of the interface which is monitored goes down.
                "                       ?"The entry of AIS monitoring the link status of the interface."                       M"This object indicates the index of the interface which is monitored by AIS."                       ð"This object indicates the row status of this table.

                The writable columns in a row can not be changed if the row
                is active. All columns MUST have a valid value before a row
                can be activated."                       B"This table is used to configure the multicast MAC ping function."                       "The entry of multicast ping."                       0"This object indicates the index of this table."                       ì"This object indicates whether the multicast MAC ping function is enabled.
                 The value can be:
                    enabled
                    disabled
                 By default, the value is disabled.
                "                       Q"This object indicates the name of the MD that initiates the multicast MAC ping."                       Q"This object indicates the name of the MA that initiates the multicast MAC ping."                       Ý"This object indicates the ID of the local MEP of the 802.1ag
                 MAC multicast ping operation.
                 The value ranges from 1 to 8191.
                 By default, the value is 0.
                "                       Ê"This object indicates the timeout period of the multicast MAC ping.
                 The value ranges from 1 to 65535, in milliseconds.
                 By default, the value is 5000.
                "                       ƒ"This object indicates the number of the sent multicast LBM packets.
                 By default, the value is 3.
                "                       õ"This object indicates the priority of the sent LBM packets.
                 The value ranges from 0 to 7 or can be 255. The value 255 is an invalid value.
                 The greater the value is, the higher the priority is.
                "                       P"This object indicates the number of multicast LBM packets that have been sent."                       T"This object indicates the number of multicast LBM packets that have been received."                       O"This object indicates the minimum delay after which LBR packets are received."                       O"This object indicates the maximum delay after which LBR packets are received."                       O"This object indicates the average delay after which LBR packets are received."                      "This object indicates the row status of this table.

                 The writable columns in a row can not be changed if the row
                 is active. All columns MUST have a valid value before a row
                 can be activated.
                "                       š"This table is used to display information about the multicast
                 LBRs for responding to the multicast MAC ping operation.
                "                       $"The entry of multicast ping reply."                       A"This object indicates the sequence number of the multicast LBR."                       G"This object indicates the order in which multicast LBRs are received."                       ¶"This object indicates the MEP ID carried in the multicast LBRs.
                 The value ranges from 0 to 8191.
                 The value 0 is an invalid value.
                "                       F"This object indicates the MAC address carried in the multicast LBRs."                       ¡"This object indicates the period from the time when the multicast LBM
                 is sent to the time when the multicast LBR is received.
                "                       |"This table is used to configure the information about the VLAN that
                 receives AIS frames.
                "                       ="The entry of alarm indication signal about vlan infomation."                       ¥"This object indicates the ID of the PE VLAN corresponding to the AIS function.
                 The value 0 indicates that the PE VLAN is not set.
                "                      "If hwY1731AisConfigPeVlan is set to 0, the object indicates a VLAN list corresponding to the AIS function. If its value is not 0, this object indicates a CE VLAN list. The VLAN ID ranges 1 to 2047. The hwY1731AisConfigVlanListHigh value ranges 2048 to 4094. 
                "                      "If hwY1731AisConfigPeVlan is set to 0, the object indicates a VLAN list corresponding to the AIS function. If its value is not 0, this object indicates a CE VLAN list. The VLAN ID ranges 2048 to 4094. The hwY1731AisConfigVlanListLow value ranges value 1 to 2047.
                "                       ó"This object indicates the row status of this table.

                 The writable columns in a row can not be changed if the row
                 is active. All columns MUST have a valid value before a row
                 can be activated."                       C"This table defines the information about TestId.
                "                       $"The configuration entry of TestId."                       >"This object indicates the ID of the test.
                  "                       Z"This object indicates the name of the MD in which TestId is configured.
                "                       Z"This object indicates the name of the MA in which TestId is configured.
                "                       "This object indicates the ID of the local MEP that is specified 
                 in the TestId configuration.
                "                       ®"This object indicates whether the destination MAC address 
                is the specified RMEP's MAC address.
                The default value is false.
                "                       ƒ"This object indicates the ID of the remote MEP that is specified 
                 in the TestId configuration.
                 "                       K"This object indicates the MAC address of the remote end.
                "                       @"This object indicates the onward MAC address.
                "                       B"This object indicates the backward MAC address.
                "                       "This object indicates whether the onward MAC address is updated automatically.
                The default value is false.
                "                       "This object indicates whether the backward MAC address is updated automatically.
                The default value is false.
                "                       "This object indicates the 802.1p priority.
                The value 255 is an invalid value.               
                "                       ’"This object indicates the 802.1p priority of uplink packets.
                The value 255 is an invalid value.                
                "                       Ž"This object indicates the 802.1p priority of downlink packets.
                The value 255 is an invalid value.          
                "                       C"This object indicates the description of TestId.
                "                       š"This object indicates whether the statistics of the testid will be recorded in testid file.
                The default value is false.
                "                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       o"This object indicates the queue priority.
                 The queue priority can be (1..9).
                "                       R"This table configures the single-ended ETH-LM sending function.
                "                       F"The configuration entry of the single-ended ETH-LM sending function."                       ¼"This object indicates whether single-ended ETH-LM sending is continual.
                 If the value is 'false', it indicates that the single-ended ETH-LM is on-demand.
                "                       ð"This object indicates the interval at which LMM frames are sent.
                 the value can be:
                    1 second
                    10 seconds
                    30 seconds
                    60 seconds
                "                       ´"This object indicates the number of the sent LMM frames.
                 The value can be 0 or ranges from 1 to 60.
                 In a proactive OAM scenario, the value is 0."                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       T"This table configures the single-ended ETH-LM receiving function.
                "                       H"The configuration entry of the single-ended ETH-LM receiving function."                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       M"This table configures the one-way ETH-DM sending function.
                "                       A"The configuration entry of the one-way ETH-DM sending function."                       ®"This object indicates whether one-way ETH-DM sending is continual.
                 If the value is 'false', it indicates that one-way ETH-DM is on-demand.
                "                       ð"This object indicates the interval at which 1DM frames are sent.
                 the value can be:
                    1 second
                    10 seconds
                    30 seconds
                    60 seconds
                "                       z"This object indicates the number of 1DM frames to be sent.
                 In a proactive OAM scenario, the value is 0."                       Ä"This object indicates the size of a one-way ETH-DM packet.
                 The value 0 means that the packet size is not specified.
                 By default, the value is 0.
                "                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       O"This table configures the one-way ETH-DM receiving function.
                "                       ?"The configuration entry of one-way ETH-DM receiving function."                       °"This object indicates whether one-way ETH-DM receiving is continual.
                 If the value is 'false', it indicates that one-way ETH-DM is on-demand.
                "                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       W"This table is used to configure the two-way ETH-DM sending function.
                "                       A"The configuration entry of the two-way ETH-DM sending function."                       ®"This object indicates whether two-way ETH-DM sending is continual.
                 If the value is 'false', it indicates that two-way ETH-DM is on-demand.
                "                      #"This object indicates the interval at which DMM frames are sent.
                 When on-demand OAM, the value can be:
                    1 second
                    10 seconds
                    30 seconds
                    60 seconds
                    15 seconds
                "                       z"This object indicates the number of DMM frames to be sent.
                 In a proactive OAM scenario, the value is 0."                       Ã"This object indicates the size of two-way ETH-DM packet.
                  The value 0 means that the packet size is not specified.
                 By default, the value is 0.
                "                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       O"This table configures the two-way ETH-DM receiving function.
                "                       C"The configuration entry of the two-way ETH-DM receiving function."                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       S"This table configures the single-ended ETH-SLM sending function.
                "                       G"The configuration entry of the single-ended ETH-SLM sending function."                       ¾"This object indicates whether single-ended ETH-SLM sending is continual.
                 If the value is 'false', it indicates that the single-ended ETH-SLM is on-demand.
                "                      1"This object indicates the interval at which single-ended ETH-SLM frames are sent.
                 the value can be:
                    1 second
                    10 seconds
                    3.3 milliseconds
                    10 milliseconds
                    100 milliseconds
                "                       Ç"This object indicates the number of the sent single-ended ETH-SLM frames.
                 The value can be 0 or ranges from 1 to 1000.
                 In a proactive OAM scenario, the value is 0."                      "This object indicates The timeout of single-ended synthetic loss measurement frames
                 (SLM) waiting for ACK frames (SLR).
                 The value can be 0 or ranges from 1 to 10.
                 In a proactive OAM scenario, the value is 0."                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                       Õ"This object indicates the packetsize of single-ended synthetic loss measurement frames
                 The value can be 0 or ranges from 64 to 1518.
                 In a proactive OAM scenario, the value is 0."                       ×"This object indicates the measurementcount of single-ended synthetic loss measurement frames
                The value can be 0 or ranges from 1 to 60.
                 In a proactive OAM scenario, the value is 0."                       S"This table configures the single-ended ETH-SLM receive function.
                "                       G"The configuration entry of the single-ended ETH-SLM receive function."                       À"This object indicates the timeout value of receive ETH-SLM frames.
                 The value can be 0 or ranges from 10 to 300.
                 In a proactive OAM scenario, the value is 0."                       ¬"This object indicates the row status of this table.

                 All columns MUST have a valid value before a row
                 can be activated.
                "                           E"This table is used to reset statistic information.
                "                       +"The entry of reset statistic information."                      "This object indicates the type of reset.
                 The value can be:
                    invalid
                    singleloss
                    dualloss
                    onewaydelay
                    twowaydelay
                 The default value is invalid."                      >"This object indicates the priority of 802.1p which in the ResetStatistic.
                The priority value ranges from 0 to 7. It maps a 8 bits number.
                0 - 1  (0x01)
                1 - 2  (0x02)
                2 - 4  (0x04)
                3 - 8  (0x08)
                4 - 16 (0x10)
                5 - 32 (0x20)
                6 - 64 (0x40)
                7 - 128(0x80)
                For example, if 802.1p priority is 0 , 4 , 7, the value is 145(1 + 16 + 128).
                The value 0 indicates that the priority is not set.
                "                       Z"This table is used to store the result about Y1731 statistic information.
              "                       N"An entry in the table, containing information on the Y1731 statistic entity."                       K"This object identifies an interval for collecting packet loss statistics."                       V"This object identifies the packet loss statistics that are collected on a local end."                       Q"This object identifies the packet loss ratio that are collected on a local end."                       t"This object identifies the maximum value of packet loss ratio 
                 that are collected on a local end."                       t"This object identifies the minimum value of packet loss ratio 
                 that are collected on a local end."                       t"This object identifies the average value of packet loss ratio 
                 that are collected on a local end."                       W"This object identifies the packet loss statistics that are collected on a remote end."                       R"This object identifies the packet loss ratio that are collected on a remote end."                       u"This object identifies the maximum value of packet loss ratio 
                 that are collected on a remote end."                       u"This object identifies the minimum value of packet loss ratio 
                 that are collected on a remote end."                       u"This object identifies the average value of packet loss ratio 
                 that are collected on a remote end."                       ?"This object indicates the statistics about the one-way delay."                       û"This object indicates the variation about the one-way delay.
               After the device is enabled to receive packets, statistics collected for the first time are invalid, and the value of hwY1731OneDelayVariation is setted to 0.
              "                       D"This object identifies the maximum variation of the one-way delay."                       D"This object identifies the minimum variation of the one-way delay."                       D"This object identifies the average variation of the one-way delay."                       ?"This object indicates the statistics about the two-way delay."                       >"This object indicates the variation about the two-way delay."                       D"This object identifies the maximum variation of the two-way delay."                       D"This object identifies the minimum variation of the two-way delay."                       D"This object identifies the average variation of the two-way delay."                       n"This object identifies the maximum value of packet loss 
                 that are collected on a local end."                       o"This object identifies the minimum value of packet loss  
                 that are collected on a local end."                       n"This object identifies the average value of packet loss 
                 that are collected on a local end."                       o"This object identifies the maximum value of packet loss 
                 that are collected on a remote end."                       o"This object identifies the minimum value of packet loss 
                 that are collected on a remote end."                       o"This object identifies the average value of packet loss 
                 that are collected on a remote end."                       @"This object identifies the maximum value of the one-way delay."                       @"This object identifies the minimum value of the one-way delay."                       @"This object identifies the average value of the one-way delay."                       @"This object identifies the maximum value of the two-way delay."                       @"This object identifies the minimum value of the two-way delay."                       @"This object identifies the average value of the two-way delay."                       S"This object identifies the number of unresponsive Delay Measurement Reply frames."                       p"This object indicates the 802.1p priority.
                The value 255 is an invalid value.
                "                       p"This object indicates the 802.1p priority.
                The value 255 is an invalid value.
                "                       p"This object indicates the 802.1p priority.
                The value 255 is an invalid value.
                "                       8"The date and time of the one-way delay on-demand data."                       8"The date and time of the two-way delay on-demand data."                       6"The date and time of the single-loss on-demand data."                       z"This table is used to query whether the one-way delay exceeds 
                 the trap threshold in the VLAN scenario."                       e"
                An entry in the table, containing information on the trap entity.
                "                       Q"
                This object indicates the remote MAC address.
                "                       ·"
                This object indicates the timestamp when the delay of the one-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       ¹"
                This object indicates the delay value when the delay of the one-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       i"
                This object indicates the delay trap threshold of the one-way ETH-DM.
                "                       Æ"
                This object indicates the high 32 bits delay value when the delay of the one-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       Å"
                This object indicates the low 32 bits delay value when the delay of the one-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       i"This table is used to query whether the one-way delay falls below 
                 the trap threshold."                       n"
                An entry in the table, containing information on the recovery trap entity.
                "                       Q"
                This object indicates the remote MAC address.
                "                       ¶"
                This object indicates the timestamp when the delay of the one-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       ¸"
                This object indicates the delay value when the delay of the one-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       i"
                This object indicates the delay trap threshold of the one-way ETH-DM.
                "                       Å"
                This object indicates the high 32 bits delay value when the delay of the one-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       Ä"
                This object indicates the low 32 bits delay value when the delay of the one-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       z"This table is used to query whether the two-way delay exceeds 
                 the trap threshold in the VLAN scenario."                       e"
                An entry in the table, containing information on the trap entity.
                "                       Q"
                This object indicates the remote MAC address.
                "                       ·"
                This object indicates the timestamp when the delay of the two-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       ¹"
                This object indicates the delay value when the delay of the two-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       i"
                This object indicates the delay trap threshold of the two-way ETH-DM.
                "                       Æ"
                This object indicates the high 32 bits delay value when the delay of the two-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       Å"
                This object indicates the low 32 bits delay value when the delay of the two-way ETH-DM 
                in the VLAN is higher than the configured trap threshold.
                "                       i"This table is used to query whether the two-way delay falls below 
                 the trap threshold."                       n"
                An entry in the table, containing information on the recovery trap entity.
                "                       Q"
                This object indicates the remote MAC address.
                "                       ¶"
                This object indicates the timestamp when the delay of the two-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       ¸"
                This object indicates the delay value when the delay of the two-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       j"
                This object indicates the delay trap threshold for the two-way ETH-DM.
                "                       Å"
                This object indicates the high 32 bits delay value when the delay of the two-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       Ä"
                This object indicates the low 32 bits delay value when the delay of the two-way ETH-DM 
                in the VLAN is lower than the configured trap threshold.
                "                       P"This table is used to query whether the Y.1731 statistic value triggers alarm."                       o"
                An entry in the table, containing information on the statistic trap entity.
                "                      Ä"
                Specific trap type.
                Options:                         
                1. OneDelay(1)              -indicates the trap type is delay of one-way ETH-DM.
                2. TwoDelay(2)              -indicates the trap type is delay of two-way ETH-DM.
                3. OneDelayVariation(3)     -indicates the trap type is delay variation of one-way ETH-DM.
                4. TweDelayVariation(4)     -indicates the trap type is delay variation of two-way ETH-DM.
                5. SingleLossLocalRatio(5)  -indicates the trap type is local loss ratio of single-ended ETH-LM.
                6. SingleLossRemoteRatio(6) -indicates the trap type is remote loss ratio of single-ended ETH-LM.
                7. DualLossLocalRatio(7)    -indicates the trap type is local loss ratio of dual-ended ETH-LM.
                8. DualLossRemoteRatio(8)   -indicates the trap type is remote loss ratio of dual-ended ETH-LM. 
                "                       /"This object indicates the remote MAC address."                       §"This object indicates the priority.
                 The value can be 255 or ranges from 0 to 7.
                 The value 255 is an invalid value.
                "                        "The value that cause the trap."                       )"The upper limit value of the threshold."                       )"The lower limit value of the threshold."                        "The value that cause the trap."                        "The value that cause the trap."                       G"This table stores the result of single-ended ETH-LM.
                "                       X"An entry in the table, containing information about the result of single-ended ETH-LM."                       N"This object indicates the sequence number of the single-ended ETH-LM result."                       P"This object indicates the error information of the single-ended ETH-LM result."                       e"This object identifies the packet loss statistics that are collected on a local end.
              "                       P"This object identifies the packet loss ratio that is collected on a local end."                       W"This object identifies the packet loss statistics that are collected on a remote end."                       Q"This object identifies the packet loss ratio that is collected on a remote end."                       6"The date and time of the single-loss on-demand data."                       B"This table stores the result of one-way ETH-DM.
                "                       S"An entry in the table, containing information about the result of one-way ETH-DM."                       I"This object indicates the sequence number of the one-way ETH-DM result."                       F"This object indicates the error information about the one-way delay."                       ?"This object indicates the statistics about the one-way delay."                       Ü"This object indicates the variation about the one-way delay.
               After the device is enabled to receive packets, statistics collected for the first time are invalid, and the value is set to 0.
              "                       8"The date and time of the one-way delay on-demand data."                       B"This table stores the result of two-way ETH-DM.
                "                       S"An entry in the table, containing information about the result of two-way ETH-DM."                       I"This object indicates the sequence number of the two-way ETH-DM result."                       K"This object indicates the error information of the two-way ETH-DM result."                       ?"This object indicates the statistics about the two-way delay."                       Ü"This object indicates the variation about the two-way delay.
               After the device is enabled to receive packets, statistics collected for the first time are invalid, and the value is set to 0.
              "                       8"The date and time of the two-way delay on-demand data."                       B"This table stores the result of two-way ETH-DM.
                "                       S"An entry in the table, containing information about the result of two-way ETH-DM."                      ("This object indicates the type of reset.
                 The value can be:
                    invalid
                    singleloss
                    dualloss
                    onewaydelay
                    twowaydelay
		    singlesynloss
                 The default value is invalid."                       g"This table stores the statistics of two-way ETH-DM collected during the last period.
                "                       x"An entry in the table, containing information about the statistics of two-way ETH-DM collected during the last period."                       ­"This object indicates the sequence number of statistics. In order to obtain the latest set of data, you can use this node is set to 4294967295 and perform a GET operation."                       V"This object indicates the sample number of the two-way delay during the last period."                       `"This object indicates the maximum value of the two-way delay collected during the last period."                       `"This object indicates the minimum value of the two-way delay collected during the last period."                       `"This object indicates the average value of the two-way delay collected during the last period."                       €"This object indicates the num of two-way delay samples exceeded the upper limit value of the threshold during the last period."                       ~"This object indicates the num of two-way delay samples fell below lower limit value of the threshold during the last period."                       `"This object indicates the sample number of the two-way delay variation during the last period."                       o"This object indicates the maximum variation  of the two-way delay variation collected during the last period."                       n"This object indicates the minimum variation of the two-way delay variation collected during the last period."                       n"This object indicates the average variation of the two-way delay variation collected during the last period."                       Š"This object indicates the num of two-way delay variation samples exceeded the upper limit value of the threshold during the last period."                       ˆ"This object indicates the num of two-way delay variation samples fell below lower limit value of the threshold during the last period."                       F"This object indicates the sequence number of the current statistics."                       m"This table stores the statistics of single-ended ETH-SLM collected during the last period.
                "                       ~"An entry in the table, containing information about the statistics of single-ended ETH-SLM collected during the last period."                       ­"This object indicates the sequence number of statistics. In order to obtain the latest set of data, you can use this node is set to 4294967295 and perform a GET operation."                       d"This object indicates the sample number of the single-ended ETH-SLM result during the last period."                       m"This object indicates the packet send statistics that are collected on a remote end during the last period."                       o"This object indicates the packet receive statistics that are collected on a local end during the last period."                       l"This object indicates the packet loss statistics that are collected on a local end during the last period."                       †"This object indicates the number of local loss ratio samples exceeded the upper limit value of the threshold during the last period."                       „"This object indicates the number of local loss ratio samples fell below lower limit value of the threshold during the last period."                       l"This object indicates the packet send statistics that are collected on a local end during the last period."                       p"This object indicates the packet receive statistics that are collected on a remote end during the last period."                       m"This object indicates the packet loss statistics that are collected on a remote end during the last period."                       ‡"This object indicates the number of remote loss ratio samples exceeded the upper limit value of the threshold during the last period."                       …"This object indicates the number of remote loss ratio samples fell below lower limit value of the threshold during the last period."                       F"This object indicates the sequence number of the current statistics."                       l"This table stores the statistics of single-ended ETH-LM collected during the last period.
                "                       }"An entry in the table, containing information about the statistics of single-ended ETH-LM collected during the last period."                       ­"This object indicates the sequence number of statistics. In order to obtain the latest set of data, you can use this node is set to 4294967295 and perform a GET operation."                       d"This object indicates the sample number of the single-ended ETH-SLM result during the last period."                       m"This object indicates the packet send statistics that are collected on a remote end during the last period."                       o"This object indicates the packet receive statistics that are collected on a local end during the last period."                       l"This object indicates the packet loss statistics that are collected on a local end during the last period."                       †"This object indicates the number of local loss ratio samples exceeded the upper limit value of the threshold during the last period."                       „"This object indicates the number of local loss ratio samples fell below lower limit value of the threshold during the last period."                       l"This object indicates the packet send statistics that are collected on a local end during the last period."                       p"This object indicates the packet receive statistics that are collected on a remote end during the last period."                       m"This object indicates the packet loss statistics that are collected on a remote end during the last period."                       ‡"This object indicates the number of remote loss ratio samples exceeded the upper limit value of the threshold during the last period."                       …"This object indicates the number of remote loss ratio samples fell below lower limit value of the threshold during the last period."                       F"This object indicates the sequence number of the current statistics."                       x"This table stores the statistics of single-ended ETH-LM collected during the last period with testid.
                "                       ‰"An entry in the table, containing information about the statistics of single-ended ETH-LM collected during the last period with testid."                       ­"This object indicates the sequence number of statistics. In order to obtain the latest set of data, you can use this node is set to 4294967295 and perform a GET operation."                       d"This object indicates the sample number of the single-ended ETH-SLM result during the last period."                       m"This object indicates the packet send statistics that are collected on a remote end during the last period."                       o"This object indicates the packet receive statistics that are collected on a local end during the last period."                       l"This object indicates the packet loss statistics that are collected on a local end during the last period."                       †"This object indicates the number of local loss ratio samples exceeded the upper limit value of the threshold during the last period."                       „"This object indicates the number of local loss ratio samples fell below lower limit value of the threshold during the last period."                       l"This object indicates the packet send statistics that are collected on a local end during the last period."                       p"This object indicates the packet receive statistics that are collected on a remote end during the last period."                       m"This object indicates the packet loss statistics that are collected on a remote end during the last period."                       ‡"This object indicates the number of remote loss ratio samples exceeded the upper limit value of the threshold during the last period."                       …"This object indicates the number of remote loss ratio samples fell below lower limit value of the threshold during the last period."                       F"This object indicates the sequence number of the current statistics."                       H"This table stores the result of single-ended ETH-SLM.
                "                       Y"An entry in the table, containing information about the result of single-ended ETH-SLM."                       O"This object indicates the sequence number of the single-ended ETH-SLM result."                       Q"This object indicates the error information of the single-ended ETH-SLM result."                       ["This object indicates the number of local send packets about single-synthetic frame loss."                       \"This object indicates the number of remote send packets about single-synthetic frame loss."                       ]"This object indicates the number of local receive packets about single-synthetic frame loss"                       a"This object indicates the number of local unanswered packets about single-synthetic frame loss."                       e"This object identifies the packet loss statistics that are collected on a local end.
              "                       P"This object identifies the packet loss ratio that is collected on a local end."                       W"This object identifies the packet loss statistics that are collected on a remote end."                       Q"This object identifies the packet loss ratio that is collected on a remote end."                       @"The date and time of the single-synthetic loss on-demand data."                       P"This table is used to query whether the Y.1731 statistic value triggers alarm."                       o"
                An entry in the table, containing information on the statistic trap entity.
                "                      ò"
                Specific trap type.
                Options:                         
                1. OneDelay(1)              -indicates the trap type is delay of one-way ETH-DM.
                2. OneDelayVariation(2)     -indicates the trap type is delay variation of one-way ETH-DM.
                3. TwoDelay(3)              -indicates the trap type is delay of two-way ETH-DM.
                4. TweDelayVariation(4)     -indicates the trap type is delay variation of two-way ETH-DM.
                5. SingleLossRemoteRatio(5) -indicates the trap type is remote loss ratio of single-ended ETH-LM.
                6. SingleLossLocalRatio(6)  -indicates the trap type is local loss ratio of single-ended ETH-LM.
                7. Singlesyntheticlossremoteratio(7)    -indicates the trap type is remote loss ratio of single-ended-synthetic ETH-LM.
                8. Singlesyntheticlosslocalratio(8)   -indicates the trap type is local loss ratio of single-ended-synthetic ETH-LM. 
                "                        "The value that cause the trap."                       )"The upper limit value of the threshold."                       )"The lower limit value of the threshold."                       :"This object indicates the name of the cause of the trap."                       7"The MAXIMUM of AIS packets transmitted in one second."                      9"This object indicates whether the y1731 summary statistic data is managed by Performace(PM) module,
                If it is enabled(1), the y1731 summary statistic data is managed, saved ane sent to NMS by Performace(PM) module.               
                The default value is disabled(2).
                "                           º"This object indicates the maximum value of TestId in current configuration.
		  The value can be 0 or rangs from 1 to 4294967295.
		  The value 0 is an invalid value.
                 "                       :"The max LCK packets transmitted or received in 1 second."                       4"The current LCK packets transmitting or receiving."                       …"The object is used to set the upper threshold value of LCK packets.
		The value range is from 1 to 100. 
		The default means 80.
		"                       —"The object is used to set the lower threshold value of LCK packets.
	       The value range is from 1 to 100. 
	       The default means 70.
	       "                                      