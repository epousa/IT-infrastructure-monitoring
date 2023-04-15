}-- ============================================================================
-- Copyright (C) 2018 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description:	The MIB module defines MIB objects which provide device
--              management NMS interfaces.
-- Reference:   
-- Version:     V4.80
-- ============================================================================
                                                                     �"
                    The MIB module defines MIB objects which provide device
                    management NMS interfaces.
                    "
"Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   " "201801150000Z" "201712150000Z" "201712060000Z" "201711140000Z" "201710190000Z" "201709270000Z" "201709230000Z" "201708220000Z" "201708170000Z" "201707170000Z" "201706290000Z" "201706140000Z" "201706080000Z" "201705030000Z" "201704120000Z" "201703030000Z" "201702090000Z" "201701200000Z" "201701100000Z" "201610260000Z" "201607260000Z" "201607070000Z" "201606230000Z" "201606030000Z" "201506040000Z" "201501120000Z" "201501040000Z" "201412050000Z" "201412040000Z" "201412010000Z" "201410230000Z" "201410150000Z" "201410120000Z" "201409170000Z" "201408060000Z" "201407300000Z" "201407150000Z" "201407010000Z" "201406300000Z" "201406060000Z" "201405090000Z" "201404250000Z" "201404170000Z" "201404170000Z" "201404100000Z" "201403100000Z" "201403070000Z" "201402140000Z" "201402120000Z" "201401210000Z" "201401140000Z" "201311180000Z" "201308170000Z" "201307220000Z" "201306250000Z" "201306200000Z" "201306080000Z" "201306030000Z" "201305221200Z" "201304281200Z" "201304020000Z" "201303280000Z" "201301160000Z" "201301110000Z" "201212180000Z" "201212110000Z" "201210260000Z" "201210260000Z" "201210230000Z" "201210200000Z" "201209040000Z" "201208230000Z" "201208160000Z" "201208020000Z" "201207260000Z" "201207090000Z" "201206290000Z" "201206120000Z" "201205230000Z" "201205140000Z" "201203220000Z" "201203160000Z" "201202210000Z" "201202100000Z" "201202080000Z" "201201040000Z" "201112220000Z" "201112090000Z" "201111150000Z" "201111090000Z" "201111040000Z" "201110240000Z" "201109150000Z" "201108270000Z" "201108180000Z" "201108080000Z" "201107180000Z" "201107090000Z" "201106150000Z" "201103010000Z" "201101190000Z" "201011060000Z" "201011010000Z" "201010080000Z" "201009200000Z" "201009020000Z" "201008020000Z" "201007280000Z" "201007150000Z" "201007120000Z" "201006240000Z" "201006070000Z" "201005100000Z" "201004260000Z" "201004150000Z" "201004070000Z" "201003310000Z" "201003030000Z" "201003010000Z" "201002080000Z" "201001290000Z" "201001260000Z" "200911300000Z" "200911040000Z" "200910280000Z" "200908310000Z" "200907240000Z" "200906040000Z" "200905310000Z" "200905120000Z" "200901070000Z" "200901040000Z" "200812310000Z" "200812010000Z" "200803170000Z" "200801300000Z" "200801220000Z" "200712200000Z" "200710150000Z" "200709240000Z" "200706300000Z" "200706200000Z" "200405280000Z" "200402280000Z" "200211290000Z"  "V4.80, Modify the description " �"V4.79, 
                             1.Add hwSysDeviceNameMode in hwSystemPara table.
							 2.Added the following nodes:
                             hwDevSystemDeviceNameChangeTrap
                             " �"V4.78, 
                             Delete the description of hwFrameTable.
                             Delete the description of hwFrameIndex.
                             Delete the description of hwSlotIndex.
                             " s"V4.77, 
                             Add hwDeviceCountryCode in hwSystemPara table.
                             ""V4.76, Added alarm parameters to node hwDevBoardInputFaultTrap,hwDevBoardInputRecoverTrap,hwDevPowerLackVoltageFaultTrap and hwDevPowerLackVolitageRecoverTrap.
                             Added enumerated value channelvoltage(6) to hwSlotInputType's value list." t"V4.75, Added the following node: 
                             hwSlotPortNumWorkMode
                             " |"V4.74,
                             Modify the string length of hwOntRemoteHttpChnlPassword.
                             "�"V4.73, Changed node's DESCRIPTION: 
                             hwOntRemoteHttpChnlVlan
                             hwOntRemoteHttpChnlHttpPort 
                             hwOntRemoteHttpChnlUserName
                             hwOntRemoteHttpChnlPassword
                             hwOntRemoteHttpProxyPort
                             hwOntRemoteHttpChnlDuration
                            " �"V4.72, Changed node's DESCRIPTION: 
                             hwCpuDevIndex
                             hwCpuDevDuty 
                             hwAvgDuty1min
                             hwAvgDuty5min
                            ":"V4.71, Added the following node: 
                             hwDevSubBoardTemperatureTooHighTrap
                             hwDevSubBoardTemperatureTooHighRecoverTrap 
                             hwDevSubBoardFaultTrap
                             hwDevSubBoardFaultRecoverTrap
                             " n"V4.70, 
                            Added hwDevSnmpProbeMonitorActiveThreshold.
                            " x"V4.69, 
                            Modify the string length of hwPortDesc from 64 to 80.
                            ""V4.68, 
                            1.Added hwOntRemoteHttpChnlCfgTable.
                            2.Added hwOntRemoteHttpChnlCfgEntry.
                            3.Added the following nodes:
                            hwOntRemoteHttpChnlVlan
                            hwOntRemoteHttpChnlIpAddress
                            hwOntRemoteHttpChnlHttpPort
                            hwOntRemoteHttpChnlProtocol
                            hwOntRemoteHttpChnlUserName
                            hwOntRemoteHttpChnlPassword 
                            hwOntRemoteHttpChnlDuration
                            hwOntRemoteHttpProxyPort
                            hwOntRemoteHttpProxyStatus
                            hwOntRemoteHttpChnlRowStatus.
                            " U"V4.67, Add hwSysMarketScene to hwSystemPara for indicating the device market scene.""V4.66, 
                            1.Added hwDevSnmpProbeMonitor.
                            2.Added the following nodes:
                            hwDevSnmpHostIpAddress
                            hwDevSnmpLastReceivedTime
                            hwDevSnmpAverageInterval
                            hwDevSnmpMinimumInterval
                            hwDevSnmpMaxmumInterval
                            hwDevSnmpReceivedCount 
                            hwDevSnmpProbeRecordTrap.
                            " k"V4.65, Added the following node: 
                             hwSysFtpMode
                             " �"V4.64, 
                             1. Modify the following nodes:
                             hwbandwidthmode
                            "�"V4.63, Added the following node: 
                             hwDeviceCurrentTemp
                             hwDevTempMinorAlmThreshold 
                             hwDevTempMajorAlmThreshold
                             hwDevTempCriticalAlmThreshold
                             hwDeviceHighTemperatureMinorFaultTrap
                             hwDeviceHighTemperatureMinorRestoreTrap
                             hwDeviceHighTemperatureMajorFaultTrap
                             hwDeviceHighTemperatureMajorRestoreTrap
                             hwDeviceHighTemperatureCriticalFaultTrap
                             hwDeviceHighTemperatureCriticalRestoreTrap.
                             " n"V4.62, Added the following node: 
                             hwSysSsdSwitch.
                             "�"V4.61, Added the following nodes: 
                             hwDevLongitude
                             hwDevLatitude
                             hwDevElevation
                             hwDevHorizontalErr
                             hwDevAltitudeErr
                             hwDevAreaCode
                             hwDevGisTimeStamp
                             hwDevGisDigest
                             hwDevGisCheckCode.
                             " "V4.60, Added hwVsPortTable." ;"V4.59, Modify the SYNTAX of the node hwTrapPowerPortIndex" 4"V4.58, Add one node hwPortVsIDMask on hwPortEntry." �"V4.57, Added the following nodes: 
                             hwTrapPowerPortIndex
                             hwDevPowerPortInputFaultTrap
                             hwDevPowerPortInputRecoverTrap.
                             " �"V4.56, Added the following nodes: 
                             hwMemOccupancy
                             hwCpuOccupancy
                             ";"V4.55, 
                             1. Modify the string length of hwFrameHardwareDesc from 128 to 510.
                             2. Modify the description of the node hwSlotOperStatus.
                             3. Modify the description of the node hwDevBoardReplaceFailTrap.
                             " _"V4.54
                             Add enum number nativetdm(11) for hwSlotWorkMode.
			     " �"
                            1. V4.53, Add one node hwDevBoardReplaceFailTrap on hwDevBoardTrapsPrefix.
                            2. using daughter board to replace subboard 
                            " `"V4.52, Modify the description of the node hwConfigLockUserIPAddr
                             " �"V4.51, Added the following nodes:
                             hwBandwidth
                             hwBandwidthMode
                            " V"V4.50, Add one node hwFramePhySerialNum on HwFrameEntry
                            " z"V4.49, Add one enum number for hwConfigLockUserType:
                             ssh(6)   
                            "�"V4.48, 
                             1. Modified the MAX-ACCESS of hwNmsStatus frome read-write to read-create.
                             2. Modified the MAX-ACCESS of hwFrameLinkRowStatus frome read-write to read-create.
                             3. Changed the name of hwAlarmType to hwObsoleteAlarmType.
                             4. Modified the INDEX of hwPingAutoResetEntry,delete 'IMPLIED'.   
                            " �"V4.47, 
                             1. Modify the following nodes:
                             hwSlotPrimaryStatus
                            " �"V4.46, 
                             1. Added the following nodes:
                             hwDevLedLight
                             hwDevLedLightByNms
                            "'"V4.45, 
                             Added the following nodes:
                             hwVccLocalChassisId
                             hwVccNeighbourChassisId
                             hwVccGroupId
                             hwVccLinkIfPhysicIndex
                             hwVccLinkIfPhysicName
                             hwVccDataLinkFault
                             hwVccDataLinkFaultResume
                             hwVccDataChannelFault
                             hwVccDataChannelFaultResume
                            " �"V4.44, 
                             1. Modified the sequence of hwFrameTypeName and hwFrameOperStatus in hwDevFrameDetectTrap.
                            " f"V4.43, 
                             Merage VRP and IAS'S mib together.
                            " �"V4.42, 
                             1. Added the following nodes:
                             hwDevAutoDeployPhase
                             hwDevSystemAutoDeployFailTrap
                            " h"V4.41, 
                             1. Modify the value range of the node hwSystemEnergySavingSwitch." �"V4.40, 
                             1. Add enumerated value hotreset(16) in hwSlotAdminStatus.
                             2. Modify the value range of the node hwSubslotCpuRate and hwSubslotRamUseRate.""V4.39, 
                             1. Added the following nodes:
                             hwDevSystemPoweroffTrap 
                             hwDevBoardInputFaultTrap  
                             hwDevBoardInputRecoverTrap                             
                             hwDevPowerLackVoltageFaultTrap
                             hwDevPowerLackVolitageRecoverTrap 
                             hwSlotInputIdIndex
                             hwSlotInputType.   
                            " L"V4.38, Modify the value range of the node hwDevAuxiliaryHardwareFaultTrap.""V4.37, 
                             1. Add the node hwTrapHardFaultName for the trap hwDevBoardHardFaultTrap and hwDevBoardHardRestoreTrap.
                             2. Add the node hwTrapHardFaultEffect for the trap hwDevBoardHardFaultTrap and hwDevBoardHardRestoreTrap." `"V4.36, Add hwDevActiveStandbyDataSynCancelTrap and hwDevActiveStandbyDataSynCancelRecoverTrap." >"V4.35, Modify the description of the node hwFrameExtendPort." ="V4.34, Modify the description of the node hwPortOperStatus." �"V4.33, Modify the description and the value range of the node hwDevFrameCmtsAntitheftAuthFailTrap and hwDevFrameCmtsAntitheftAuthRestoreTrap.""V4.32, 
                             1. Add the node hwExtendBoardSlotIndex for geting the slot index of board connected to extended frame.
                             2. Add the node hwExtendBoardPortIndex for geting the port index of board connected to extended frame." �"V4.31, 
                             1. Add hwDevFrameCmtsAntitheftAuthFailTrap and hwDevFrameCmtsAntitheftAuthRestoreTrap for D-CMTS anti-theft." P"V4.30, Modify the appended node order for trap node hwDevSubBoardReplacedTrap." O"V4.29, Add the node hwUpgradeVerifyVersion for getting the version of system." m"V4.28, add the Node hwSlotCreateTime for getting the time of adding or creating a board in the hwSlotTable." G"V4.27, Modify the hwNatOnuMgmtSwitch type, from Integer32 to INTEGER." ]"V4.26, Add the appended node hwDevAuxiliaryHardwareFaultTrap for trap node hwDevBoardTraps." t"V4.25, 
                             1. Modify the hwServiceMigrationOntId and hwServiceCfgOntId node description." �"V4.24, 
                             1. Modify the value range of the node hwOntIndex.
                             2. Add the appended node hwSysVersion for trap node hwFtpConfigureTrap." �"V4.23, 
                             1. Modify the value range of the node hwFrameGponDeviceSn and the description.
                             2. Modify the value range of the node hwPortDesc." B"V4.22, Modify the hwServiceCfgOperStatus values and description." ?"V4.21, Add hwSysCentralizedMgmtPrimary in hwSystemPara table.""V4.20,
                             1. Add hwFrameGponDeviceSn in hwFrameTable.
                             2. Modify hwFrameExtendingSubId and hwFrameAdminStatus for remote frame.
                             3. Add hwDevFrameIdOverLoadTrap in hwDevFrameTraps." A"V4.19, Modify the value range of the node hwSubslotAdminStatus." ["V4.18, Add hwFrameExtendType, hwFrameExtendingSubId, hwFrameHardwareDesc for remote frame" �"V4.17, Add hwFtpConfigureTrap, hwDevBoardAutomaticExpandFailTrap, hwDevBoardAutomaticExpandRestoreTrap 
                         for board expand trap" �"V4.16, Modify hwSysSceneMode for deleting the item dslam and all. And added hwDevStorageFaultRestoreTrap for certain storage fault" >"V4.15, Modify the value range of the node hwFrameOperStatus." ""V4.14, Add hwSysCapabilityTable." ["V4.12, Add hwSysFtpXmlConfigure in hwSystemPara for deciding the XML file can be deleted." �"V4.11, 
                        1. Modify the value range of the node hwSubslotOperStatus.
                        2. Add hwSubslotCpuRate and hwSubslotRamUseRate in hwSubslotTable." ="V4.10, Add enumerated value extend(4) in hwPortNetworkRole." |"V4.09, Add hwDevExtendedFrameDyingGaspAlarmTrap, hwDevExtendedFrameDyingGaspRestoreTrap for remote frame dying gasp alarm." >"V4.08, Modify the string length of hwSlotDesc from 64 to 32."3"V4.07, 1. Modify the string length of hwFrameDesc from 64 to 128.
                             2. Add hwFrameRackID in hwFrameEntry for indicating the rack ID of the frame.
                             3. Modify the description of the node hwFrameTypeConfigured and hwDevExtendedFrameTypeInconsistentTrap." �"V4.06, 1.Modify description of autoshutdown of hwSlotOperStatus node.
                             2. Add AC Power shutdown value for hwSlotOperStatus node." 6"V4.05, Added hwSubslotTemperature in hwSubslotEntry."�"V4.04, 
                             1. Added the following nodes: 
                             hwFrameExtendPort  
                             hwFrameUplinkPort                             
                             hwDevFrameDetectTrap
                             hwDevFrameDisappearedTrap
                             hwDevFrameStateChangeTrap 
                             hwDevExtendedFramePortChangeTrap
                             hwDevFrameRestoreTrap
                             hwDevFrameFaultTrap
                             hwExtendBoardFrameIndex 
                             hwExtendedFrameUplinkPort
                             hwDevExtendedFrameTypeInconsistentTrap.   
                             2. Added mismatch(5) in hwFrameOperStatus. 
                             3. Added extend(4) in hwSlotNetworkRole.
                             4. Added hwServiceMigrationTable and hwServiceCfgMngtTable.
                            " T"V4.03, Add hwSysSceneMode to hwSystemPara for indicating the work scene of device." �"V4.02, 1. Modify the description of hwConfigChangeIP.
                             2. Modify the enum description of hwSlotOperStatus from discovery(5) to autofind(5)." 2"V4.01, 1. Add hwSysEnergySaving in hwSystemPara." �"V4.01, Added the following node for hwDevBoardFpgaFailTrap and hwDevBoardFpgaRestoreTrap:
                             hwTrapHardFaultPara2." �"V4.00, 1. Renamed the hwDevSystemManualResetTrap to hwDevSystemResetTrap.             
                             2.  Modified the description of hwUpgradeReserveDateTime, hwDevSystemResetTrap." �"V3.99, 1. Added frequency20HZ(4) in hwRingFrequency.             
                             2. Added acamplitude70Vrms(5) in hwRingacamplitude."
"V3.98, Modify the description of hwSlotTemprature.
                             Modify hwUpgradeCapability description to From left to right.                  
                             Add two enum number for hwSlotWorkMode:9.(bonding) and 10.(retransmission)." T"V3.97, 1. Modified the description of hwUpgradeRequestID, hwUpgradeReserveTimeout." f"V3.96, Modify hwSysTemperatureHighThreshold range from
                             40~110 to 40~105" �"V3.95, Add three enum number for hwSlotWorkMode:
                             eocLoopbackNoTest(57),
                             eocLoopbackTest(58),
                             prohibited(59)" �"V3.94, Modified the SYNTAX of hwAppBoardMngtIp of hwAppBoardMngtEntry from  IpAddress to InetAddress.
                             Modified the SYNTAX of hwAppBoardMngtGateway of hwAppBoardMngtEntry from IpAddress to InetAddress."�"V3.93, Added hwDevBoardFpgaFailTrap for software fault occurs in board FPGA.
                             Added the following nodes:
                             hwSlotTypeName.
                             Added hwDevBoardFpgaRestoreTrap for software fault in board FPGA recovers.
                             Added the following nodes:
                             hwSlotTypeName."�"V3.92, Added interruptedAutoUpgrade(4) in hwSoftwareActiveAdmin.
                             Added hwUpgradeCapability in hwSoftwareActive.
                             Added hwEmergencyCallProtect in hwSoftwareActive.
                             Modified all nodes's name of hwSoftwareActive from SoftwareActive to Upgrade for upgrade.
                             Modified the following nodes of the table: 
                             hwSoftwareActiveRequestID        -->  hwUpgradeRequestID
                             hwSoftwareActiveAdmin            -->  hwUpgradeAdmin 
                             hwSoftwareActiveResetInterval    -->  hwUpgradeResetInterval
                             hwSoftwareActiveTargetVersion    -->  hwUpgradeTargetVersion
                             hwSoftwareActiveReserveTimeout   -->  hwUpgradeReserveTimeout 
                             hwSoftwareActiveReserveDateTime  -->  hwUpgradeReserveDateTime" o"V3.91, Modified the description of hwSubslotIndex,hwSysTemperatureHighThreshold,hwSysTemperatureLowThreshold." C"V3.90, Modified the description of hwSysTemperatureHighThreshold." �"V3.89, Added hwDevStorageFaultTrap for certain storage fault.
                             Added the following nodes:
                             hwTrapStorageName" 4"V3.88, Add hwSysMainBoardTypeDesc in hwSystemPara." \"V3.87, Added initial value(-1) in hwSoftwareActiveAdmin and hwSoftwareActiveResetInterval."d"V3.86, Modified all nodes's name of hwAcBoardPara from Ac to App for managing general application board.
                             Modified the following nodes of the table:  
                             hwAcBoardMngtVlan        -->  hwAppBoardMngtVlan
                             hwAcBoardMngtIpType      -->  hwAppBoardMngtIpType
                             hwAcBoardMngtIp          -->  hwAppBoardMngtIp
                             hwAcBoardMngtMaskLength  -->  hwAppBoardMngtMaskLength
                             hwAcBoardMngtGateway     -->  hwAppBoardMngtGateway
                             hwAcBoardMngtRowStatus   -->  hwAppBoardMngtRowStatus.
                             Modified the SYNTAX of hwAppBoardMngtIp from InetAddress to IpAddress.
                             Modified the SYNTAX of hwAppBoardMngtGateway from InetAddress to IpAddress." /"V3.85, Add hwUplinkSysIPAddr in hwSystemPara." �"V3.84, Renamed the hwAutoUpgrade to hwSoftwareActive.
                             Added hwSoftwareActiveReserveTimeout and hwSoftwareActiveReserveDateTime in hwSoftwareActive." U"V3.83, Rename the enum of hwSystemAdminStateMode frome north-america to grStandard." �"V3.82, Modified the MAX-ACCESS of hwSlotShutdownState frome read-create to read-only.
                             Added the UNITS of hwSlotTemprature." �"V3.81, Modified the SYNTAX of hwOldSubslotType0, hwOldSubslotType1,hwOldSubslotType2 and hwOldSubslotType3,
                             the SYNTAX value from Integer32 changed to HWSubPCBType." E"V3.80, Add two enum number for hwSlotWorkMode:7.(pots) and 8.(isdn)"@"V3.79, Added hwDevBoardPower5VFaultTrap and hwDevBoardPower5VResumeTrap. Modified the description of hwDevBoardOnlineStateTrap. 
                             Modified the description of hwNmsParaEntry, hwFrameEntry, hwSlotEntry, hwSubslotEntry,hwPortEntry,hwPortOperStatus,
                             hwFrameLinkEntry,hwMemoryDevEntry,hwBufferEntry,hwFlashDevEntry,hwAlarmEntry,hwDevConfPreviousTable,hwDevConfPreviousEntry, 
                             hwCustomizedParameterEntry,hwPingAutoResetEntry,hwSystemResEntry,hwAgentOntInfoEntry,hwPstnBoardCfgEntry,hwPowerMode." ;"V3.78, Added hwDevBoardHardRestoreTrap for standard trap." v"V3.77, Modified the description of hwSlotTemprature, hwSysTemperatureLowThreshold and hwSysTemperatureHighThreshold." 8"V3.76, Added initial value(-1) in hwFrameResetTimeout." @"V3.75, Add hwSubslotCLEICode of elabel CLEI in hwSubslotTable.""V3.74, modified and supplemented the descriptions of objects in hwPortTable, hwFrameTable, hwSlotTable, hwSubslotTable 
                             and hwDevTraps.
                             Changed the name of hwAlarmType to hwObsoleteAlarmType.
                             Added enumerated value deactivepacketfile(0) in hwIopacketfileAdminStatus.
                             Added enumerated value user(3) in hwSlotNetworkRole.                             
                             Added hwSystemResParaTable for standard trap" �"V3.73, Add hwAcBoardGlobalPara, for managing the AC board. 
                             The following leaf nodes are added to the table:  
                             hwAcBoardPhySlot." �"V3.72, added hwDevStandbyMainSlotTypeName and hwDevConfPreviousTable for standard trap.
                             Modified the objects of hwDevActiveStandbyContolBoardInconsistentTrap and hwDevBoardReplacedTrap."�"V3.71, added hwAcBoardMngtTable for managing the AC board. 
                             Added the following nodes to the table:  
                             hwAcBoardMngtVlan
                             hwAcBoardMngtIpType 
                             hwAcBoardMngtIp 
                             hwAcBoardMngtMaskLength
                             hwAcBoardMngtGateway
                             hwAcBoardMngtRowStatus"U"V3.70, added hwDeviceArchType in hwSystemPara.
                             Added hwDevBoardOnlineStateTrap for IAS SSMP V500R001C00.
                             Changed hwConfigChangeSN to hwConfigChangeIP and changed its type from Integer32 to IpAddress.
                             Changed the binding parameter hwConfigChangeSN of node hwDevUserlabelChangeTrap to hwConfigChangeIP.
                             Added the enumerated value of hwSysRegisterResponseStatus, namely nooperation(-1) (default value).
                             Added hwFrameTypeConfigured, hwActualSlotTypeName, hwOldDeviceIpAddr, hwNewDeviceIpAddr, 
                             hwOldSubslotType0, hwOldSubslotType1, hwOldSubslotType2, and hwOldSubslotType3;
                             Changed the binding parameter hwFrameTypeName of node hwDevFrameTypeInconsistentTrap to hwFrameTypeConfigured.
                             Changed the binding parameter hwSlotTypeName of node hwDevBoardMisMatchTrap to hwActualSlotTypeName.
                             Changed hwDevBoardFaltTrap to hwDevBoardFaultTrap.
                             Added the binding parameters hwSlotPrimaryStatus and hwSlotSecondaryStatus of node hwDevBoardDetectTrap.
                             Added the binding parameters hwSlotPrimaryStatus and hwSlotSecondaryStatus of node hwDevBoardStateChangedTrap.
                             Added the binding parameters hwSlotPrimaryStatus and hwSlotSecondaryStatus of node hwDevBoardStaChgOffLineTrap.
                             Added the binding parameters hwSubslotTypeName of node hwDevSubBoardMisMatchTrap." 7"V3.69, added hwSysVersionVrcb for NMS MIB adaptation."�"V3.68, added hwSystemAdminStateMode,hwSystemAdminStatus and hwSystemPrimaryStatus in hwSystemPara.
                             Added hwSlotPrimaryStatus,hwSlotSecondaryStatus in hwSlotEntry.
                             Added hwSubslotPrimaryStatus,hwSubslotSecondaryStatus in hwSubslotEntry.
                             Added hwPortPrimaryStatus,hwPortSecondaryStatus in hwPortEntry." X"V3.67, implemented DT requirements and changed the syntax and semantics of SIMPLETEST." g"V3.66, added hwSysUpdateBoardVersion and hwSysUpdateBoardMaxTimeLen to hwSystemPara for board update."�"V3.65, changed the enumerated value of hwSlotNetworkRole.
                             Changed the MAX-ACCESS of hwFrameTypeName from accessible-for-notify to
                             read-only according to simpletest rules.
                             Changed the MAX-ACCESS of hwSubslotTypeName from accessible-for-notify to
                             read-only according to simpletest rules." �"V3.64, added hwNatOnuTable, for querying the config information of ONU, and setting and querying 
                             the start IP address of the ONU IP address pool and the size of the pool." X"V3.63, implemented DT requirements and changed the syntax and semantics of SIMPLETEST." �"V3.62, added two MIB nodes for the OLT's managing the ONU through an agent. 
                             Supported configuring of the private network IP address and IP address range of the ONU.">"V3.61, modified this MIB according to DT requirements. The modifications are as follows:
                             1) Added hwFrameTypeName
                             2) Added hwSlotTypeName and updated the description.
                             3) Added hwSubslotTypeName.            
                             4) Deleted the following nodes:
                             hwFrameAdminResult
                             hwSlotAdminResult
                             hwSubslotAdminResult
                             hwPortAdminResult
                             hwDevGeneralTraps
                             hwFrameAdminResultTrap
                             hwSlotAdminResultTrap
                             hwSubSlotAdminResultTrap           
                             Certain nodes are changed to the following nodes:
                             hwTrapHardFaultPara1
                             hwTrapHardFaultPara2
                             hwTrapSystemRebootCause
                             hwTrapSystemRebootCause
                             hwTrapHardFaultLocation
                             hwConfigChangeSN
                             hwDevUserLabelType
                             hwDevUserLabel
                             hwDevVPI
                             hwDevVCI
                             hwDevVlanId
                             5) The following trap nodes are added:
                             hwDevBoardDetectTrap 
                             hwDevBoardDisappearedTrap 
                             hwDevBoardStateChangedTrap 
                             hwDevBoardStaChgOffLineTrap 
                             hwDevBoardAutoLoadTrap 
                             hwDevUserlabelChangeTrap 
                             hwDevSystemStartupTrap 
                             hwDevSystemDataSynCancelTrap 
                             hwDevActiveStandbyContolBoardInconsistentTrap 
                             hwDevSystemManualResetTrap 
                             hwDevFrameTypeInconsistentTrap 
                             hwDevBoardMisMatchTrap 
                             hwDevBoardHardFaultTrap 
                             hwDevBoardFaultTrap 
                             hwDevBoardRestoreTrap 
                             hwDevBoardReplacedTrap 
                             hwDevBoardEnterTemperatureProctectModeTrap 
                             hwDevBoardExitTemperatureProctectModeTrap 
                             hwDevBoardTemperatureTooHighTrap 
                             hwDevBoardTemperatureTooHighRecoverTrap 
                             hwDevBoardTemperatureTooLowTrap 
                             hwDevBoardTemperatureTooLowRecoverTrap 
                             hwDevPowerInputFaultTrap 
                             hwDevPowerInputRecoverTrap 
                             hwDevSubBoardTypeInconsistentTrap 
                             hwDevSubBoardMisMatchTrap 
                             hwDevSubBoardReplacedTrap 
                             hwDiagResOverloadFaultTrap 
                             hwDiagResOverloadRestoreTrap" $"V3.60, hwSlotNetworkRole is added." �"V3.59, Use SimpleTest clean warning and eror,Use MIB Browser clean             
                             warning and eror, Add MIB Description.""V3.58,  Board H802EDTB can act as PRA subscriber board,                        
                            provide CESoP broadband service,                                    
                            and carry TDM service. Add board working modes voice and satop." �"V3.57, For CR20090930022 requirement, add the table settings and the           
                            querying of the power supply modeof voice boards.                   
                            Add mib table hwPstnBoardCfgTable." L"V3.56, Add enumerated value mismatch (17) in leaf object hwSlotOperStatus." �"V3.53, Add enumerated values, namely, autoshutdown, hightempshutdown,          
                             and manualshutdown in leaf object hwSlotOperStatus." �"V3.52, Support globalized internal codes; support the setting                  
                             of system internal codes; add leaf object hwSysEncoding."g"V3.48, Add parameter configuration table of intelligent public telephone.      
                            This table supports the function of enabling intelligent            
                            public telephone, detection threshold of intelligent signals,       
                            gain and attenuation of intelligent signal on PCM side."y"V3.47, Add two objects for obtaining file names of currently used and 
                            unused patches(hwSysActivePatch and hwSysDeactivePatch) in table hwSystemPara. 
                            Add the locking of system configuration management plane. 
                            The original table is not archived, so new MIB table hwConfigLock is applied for." 6"V3.46, Add an object of elabel CLEI in hwFrameTable." �"V3.41, Add the hwSysExchangeMode leaf object for obtaining system 
                             operating mode in MIB table hwSystemPara." �"V3.40, Modify the emumerated values of hwOntState leaf in hwAgentOnuInfoTable:
                             1. normal(0), 2. fault(1)."N"V3.39, Add ONT management function of OLT agent, add MIB table: 
                             ONT state table (hwAgentOntInfoTable); 
                             Add enumerated values of hwSlotAdminStatus leaf: poweron(12) and poweroff(13); 
                             Add enumerated value of hwSlotOperStatus leaf: shutdown(13)."�"V3.38, For the feature of optimizing in-service and out-of-service of boards,
                             add the processing for the timeout of in-service and out-of-service of boards, 
                             add hwSlotAdminForceOOSTimeoutWorkMode leaf object, 
                             and change the maximum time of board out-of service to one day.
                             For the feature of optimizing in-service and out-of-service of boards, 
                             add the two options, namely, enable users to select out-of-service 
                             immediately or in case of timeout; Add a hwSlotEndServiceMode leaf object;
                             and change the time of board out-of-service to 1-1440 minutes." �"V3.35, Put users in HUAWEI-MNGT-MIB and delete the descrption of three MIB tables, 
                             namely, hwCliUserParaTable,hwCliClientTable and hwCliSysPara." �"V3.34, Modify table hwSystemPara: Add enumerated values (7-12) 
                             relevant to GMSAN in leaf hwSysWorkMode.""V3.33, Modify hwRingAttrTable: Add an enumerated value in leaf hwRingacamplitude, 
                             namely,4, which indicates acamplitude75Vrms. 
                             Add the description of the first verstion that supports the feature." �"V3.32, Modify description of hwSlotTable. Add enumerated values of leaf 
                             hwSlotAdminStatus. Add two leaves hwSlotAdminForceOOSTime and hwSlotForceOOSTime."0"V3.31, (1) Add thresholds of high-tempreture alarm and low-tempreture alarm 
                             in system table hwSystemPara.
                             (2) Add board tempreture in table hwSlotEntry and add the port temperature 
                             query leaf in table hwPortEntry." "V3.29,  Supplement the details about hwIopacketfile, hwSysWorkMode, 
                             and hwSysAverageBufferUsed." �"V3.26,  Update section 3.6 that descriebs the detailed specifications of 
                             the cascading relationship of hwFrameLinkTable." {"V3.25,  Add leaf object hwPortNetworkRole that describes the interface 
                             role in hwPortTable." !"V3.03, Add auto-upgrade object." �"V3.02,  Complete interface specifications                                                                                                                                                                                                              ." "V2.00, Complete the draft."                   �"
                IP address of the system.
                It'd better not to modify this address when out-band NMS is used.
                It will take no effect to separately configure IP address or IP address mask.
                "                       �"
                IP address mask of the system.
                This object can take effect only when hwSysIpAddr is also set.
                "                       �"
                The system software version format is consistent with the
                specification of HUAWEI product.For example, MA5600V800R008C00.
                "                       s"
                This object is used for getting or setting current date and time of the system.
                "                      
�"
                This object is used for obtaining the working mode of the UA5000.
                Options:
                1. amsanamsan(1)     -indicates that the active and standby control boards are in position,
                                      with the active control board of AMSAN and the standby control board of AMSAN
                2. amsancmsan(2)     -indicates that the active and standby control boards are in position,
                                      with the active control board of AMSAN and the standby control board of CMSAN
                3. cmsancmsan(3)     -indicates that the active and standby control boards are in position,
                                      with the active control board of CMSAN and the standby control board of CMSAN
                4. cmsanamsan(4)     -indicates that the active and standby control boards are in position,
                                      with the active control board of CMSAN and the standby control board of AMSAN
                5. amsanoffline(5)   -indicates that the standby control board is not in position and the active
                                      control board is AMSAN
                6. cmsanoffline(6)   -indicates that the standby control board is not in position and the active
                                      control board is CMSAN
                7. gmsangmsan(7)     -indicates that the active and standby control boards are in position,
                                      with the active control board of GMSAN and the standby control board of GMSAN
                8: amsangmsan(8)     -indicates that the active and standby control boards are in position,
                                      with the active control board of AMSAN and the standby control board of GMSAN
                9. gmsanamsan(9)     -indicates that the active and standby control boards are in position,
                                      with the active control board of GMSAN and the standby control board of AMSAN
                10. cmsangmsan(10)   -indicates that the active and standby control boards are in position,
                                      with the active control board of CMSAN and the standby control board of GMSAN
                11. gmsancmsan(11)   -indicates that the active and standby control boards are in position,
                                      with the active control board of GMSAN and the standby control board of CMSAN
                12.gmsanoffline(12)  -indicates that the standby control board is not in position and the active
                                      control board is GMSAN
                13. null(65536)      -indicates that the system work mode is not set
                "                      C"
                Query the average memory usage of the system.
                Collect the sum of the memory usage of all the boards that
                support memory query in the system, and then calculate the
                average value. The average value is the average memory usage of the system.
                "                      
"
                Describes the start VLAN ID of the reserved VLANs currently used by the system.
                Default: 4079
                The system automatically uses the 15 VLANs starting from the configured start VLAN ID as reserved VLANs.
                "                      "
                Describes the start VLAN ID of the reserved VLANs configured in the system.
                The configuration takes effect after system restart.
                Range: 2-4079
                Default: 4079
                The system automatically uses the 15 VLANs starting from the configured start VLAN ID as reserved VLANs.

                VLANs 4094 and 4095 are fixedly reserved, and VLAN 1 is the native VLAN.
                Therefore, these three VLANs cannot be configured as the reserved VLANs.
                "                       �"
                The version information in the IO package, which is consistent
                with the system version information.
                "                      O"
                System work scenario.
                    Used to identify whether the control board is in the upgrade(2)
                    or normal(1) scenario.
                    Options:
                    1. normal(1) -the normal scene of the system.
                                  If the device need not provide seamless upgrade, set the scenario to normal(1).
                                  If the scenario is changed from upgrade(2) to normal(1) and the standby control
                                  board is in position, reset the standby control board.
                    2. upgrade(2)-the upgrade scene of the system.
                                  When the device needs to provide seamless upgrade,
                                  that is, the service is not interrupted during upgrade, set the scenario to upgrade(2).
                                  If it is set to upgrade(2), you can perform operations related to upgrade only,
                                  such as saving, loading, backup, active/standby switchover, system reset, and query.
                "                      <"
                The threshold of the system.
                When you set a high temperature threshold, you also need to set a low temperature threshold.
                Range:40~105
                The invalid value is 65535.If the threshold is not configured,the invalid value will be returned.
                "                      <"
                The threshold of the system.
                When you set a low temperature threshold, you also need to set a high temperature threshold.
                Range:-40~20
                The invalid value is 65535.If the threshold is not configured,the invalid value will be returned.
                "                      g"
                System Exchange-Mode,
                Options:
                    1. backup(1)       -indicates active/standby mode. Two control boards serve as the active and standby control
                                        boards respectively. The switching chip of the active control board works independently
                    2. loadSharing(2) -indicates load sharing mode. The switching chips of the two control boards work
                                        together to share the traffic
                    3. null(65536)     -indicates system exchange mode is not set
                    "                       d"
                Display the information of the active patches in current system.
                "                       �"
                This object is used for querying the information about the deactivated patch in the current system.
                "                       �"
                GE uplink software commissioning free configuration.
                Options:
                1.enable(1)  -the default value is enable
                2.disable(2) -this object is no longer used
                "                      -"
                The energy-saving mode of system.
                Options:
                1.basic(1) -when it is set to basic(1), the system energy saving mode is basic mode.
                2.deep(2) -when it is set to deep(2), the system energy saving mode is deep mode.
                3.optimal(3) -when it is set to optimal(3), the system energy saving mode is optimal mode.
                4.standard(4) -when it is set to standard(4), the system energy saving mode is standard mode.
                The default value is basic(1).
                "                      !"
                The encoding mode of characters in the system.
                Options:
                1. default(1)   -indicates that the encoding mode is no set
                2. gbk(2)       -indicates that the encoding mode of characters is gbk
                3. iso88591(3) -indicates that the encoding mode of characters is iso8859-1
                4. utf8(4)     -indicates that the encoding mode of characters is utf-8
                The value can be gbk(2), iso8859-1(3), or utf-8(4).
                Default: 1
                "                       �"
                Update Board Version
                Options:
                1.updateBoardVersion(1) -set operation only
                "                       E"
                Update Board Version Max Time Len
                "                      -"System admin state mode.
                DEFVAL { private }
                Options:
                1.grStandard(1)   -grStandard mode complies with GR series standard(such as GR-1093, used in North America).
                2.private(2)       -private mode,Huawei devices support.
                "                       �"
                The system admin status.
                Options:
                1. nooperation(-1) -default state of the system.
                2. is(1)           -in service
                3. oos(2)          -out of service
                "                      �"
                The system primary status.
                Options:
                1. isNr(1)     -in Service, normal
                2. isAnr(2)    -in service, abnormal
                3. isRst(3)    -in service, restricted
                4. isAnrst(4)  -in service, abnormal & restricted
                5. oosAu(5)    -out of service, autonomous
                6. oosMa(6)    -out of service, management
                7. oosAuma(7)  -out of service, autonomous & management
                8. oosAurst(8) -out of service, autonomous & restricted
                9. oosMaanr(9) -out of service, management & abnormal
                "                      "
                The hardware structure type of a device.
                Currently, the hardware structure types of the existing versions are as follows:
                Options:
                1.arch1(1)  -in MxUV8R305, the hardware structure type of the MA5620E, MA5620G, MA5626E, MA5626G, and MA5651(G) is arch1(1)
                             In MxUV8R306, hardware structure type of the MA5610 is arch1(1)
                             In MxUV8R307, hardware structure type of the MA5612, MA5620, and MA5626 is arch1(1)
                2.arch2(2)  -in MxUV8R306, the  hardware structure type of the MA5616 and MA5652(G) is arch2(2)
                3.arch3(3)  -in MxUV8R308, hardware structure type of the MA5612, MA5620, MA5626, and MA5616 is arch3(3)
                         "                       �"
                The IP address of the uplink system of PVM, it is only used when PVM worked in integrated mode
                and the IPM worked as the uplink board.
                "                       >"
                The mainboard description.
                "                      �"
                The automatic energy saving function consists of seven sub-functions, which are indicated by bits .All bits are disabled by default. If
                a bit is 0, the represented function is disabled.if a bit is 1, the represented function is enabled.This function is independent of the
                energy saving function of the optical line terminal (OLT) products by powering off boards.
                The energy saving bits flag:
                1. esEnergySavingService(0)  - indicates energy-saving-service-related features, include the feature of automatically unbinding
                                    an extended profile.
                2. esBoardAutoPowerOnOff(1)  - indicates automatic power-off features on a board for energy saving, include the automatic
                                    power-on and power-off feature on a board.
                3. esPlatform(2)             - indicates platform-related energy saving features, include energy saving on the
                                    control board and upstream board.
                4. esVector(3)               - indicates vectoring-related energy saving features, include vectoring disabling feature.
                5. esOpticalAccess(4)        - indicates the optical access-related energy saving feature,and this object is reserved .
                6. esCopperAccess(5)         - indicates copper-access-related energy saving features,include MELT energy saving feature.
                7. esInnovation(6)           - indicates HuaWei's proprietary energy saving technologies,include the line driver(LD)
                                    energy saving feature.
                "                       �"
                The device work scene.
                Options:
                1. olt(1)     -work in OLT scene
                2. msan(3)    -work in MSAN scene
                "                       �"
                The state of XML file.
                Options:
                1. useful(1)     -Xml file is useful
                2. useless(2)   -Xml file is useless
                "                       �"
                The primary mode for centralized management.
                Options:
                1. extendFrame(1)  -Extended frame management
                2. standAlone(2)   -Stand alone management
                "                       �"
                The system software version used in update scene for HUAWEI product.For example, MA5600V800R008C00.
                "                       �"
                The longitude of the device.
                The value expands 100000 times and the value 2147483647 indicates invalid longitude.
                "                       �"
                The latitude of the device.
                The value expands 100000 times and the value 2147483647 indicates invalid latitude.
                "                       �"
                The elevation of the device, in unit of meters.
                The value 32767 indicates invalid elevation.
                "                       �"
                The horizontal error of the device, in unit of meters.
                The value 4294967295 indicates invalid horizontal error.
                "                       �"
                The altitude error of the device, in unit of meters.
                The value 4294967295 indicates invalid altitude error.
                "                       �"
                The area code of the device.
                The length of area code is 12. The characters can be 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.
                The zero-length string indicates invalid area code.
                "                       �"
                The time stamp of the measurement signature, which is the number of seconds from 00:00 on January 1, 1970 to the current time.
                The value 4294967295 indicates invalid time stamp.
                "                      "
                The check value of the measurement signature.
                The length of check value is 16. The characters can be 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F.
                The zero-length string indicates invalid check value.
                "                      "
                The check code of the device GPS information.
                The length of check code is 4. The characters can be 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F.
                The zero-length string indicates invalid area check code.
                "                       �"
                The secure software downloading status.
                Options:
                1. enable(1)     -The secure software downloading is enable
                2. disable(2)    -The secure software downloading is disable
                "                      "
                FTP connection mode.
                Options:
                1. port(1)       -Set the FTP connection mode to port.
                2. passive(2)    -Set the FTP connection mode to passive.
                Default: port(1)
                "                       �"
                The device options:
				1. carrier(1) -Device work in carrier scene.
				2. enterprise(2) -Device work in enterprise scene.
				Default: carrier(1)
                "                       �"
                1. china(1) -Device of china.
                2. oversea(2) -Device of oversea.
                Default: oversea(2)
                "                       �"
                1. simple(1) -Simplified device name.
                2. detail(2) -Detailed device name.
                Default: simple(1)
                "                       _"
                The device MIB build version, used by NMS for MIB adaption.
                "                       �"
                The index of this table is hwNmsIndex.
                NMS parameters configuration table.
                This table is no longer used.
                "                       �"
                The index of this entry is hwNmsIndex.
                NMS parameters configuration table.
                This table is no longer used.
                "                       �"
                Index(1..32),at most supports 32 NMSs, exclusively identifies an NMS.
                This object is no longer used.
                "                       �"
                Name of the NMS, which does not have to be consistent with that of the NMS workstation.
                This object is no longer used.
                "                       �"
                IP address of the NMS workstation that can be outband or inband address.
                This object is no longer used.
                "                       z"
                IP address mask of the NMS workstation.
                This object is no longer used.
                "                      Q"
                Maintenance mode of NMS workstation. If the IP address
                of the NMS station is in-band, the mode must also be in-band.
                This object is no longer used.
                Options:
                1.inBandwidth(1)  -in Bandwidth
                2.outBandwidth(2) -out Bandwidth
                "                       �"
                Community authentication name used for SNMP
                protocol GET operation, default value: public.
                This object is no longer used.
                "                       �"
                Community authentication name used for SNMP
                protocol SET operation, default value: private.
                This object is no longer used.
                "                       �"
                Snmp communication port of NMS workstation,default value:161.
                This object is no longer used.
                "                       �"
                Trap receive Port of NMS workstation, default value:162.
                This object is no longer used.
                "                      h"
                Class of NMS station,default value is 3.
                This object is no longer used.
                Options:
                1.ro(1)          - read only
                2.rw(2)          - read write
                3.rwWithTrap(3)  - default value, read write with trap
                4.trapOnly(4)    - only with trap
                "                       �"
                Operation status of NMS station. The NMS station
                can be added,deleted and modified.
                This object is no longer used.
                "                           S"
                This table describes basic chassis information.
                "                      Q"
                The index of this entry is hwFrameTable.
                Shelf description table that describes basic information of a shelf.
                You can obtain the shelf information, including the shelf type,
                number of slots, and the shelf running status, and the shelf management status.
                "                       G"
                The index of a shelf in the device.
                "                       f"
                The type of a shelf, which can be obtained from HUAWEI-TC-MIB.mib.
                "                      "
                The description about the frame.
                It is used to describe some extra information.
                For convenient management, you can set the location of the room in
                which the shelf is located as the description.
                "                       N"
                The number of physical slots in the shelf.
                "                      �"
                The operation status of frame.
                Options:
                1. normal(1)   -indicates that the shelf is running normally
                2. fault(2)    -indicates that the shelf is faulty
                3. other(3)    -indicates that the shelf is in a state other than the previous three states
                4. discovery(4)-indicates that the shelf is in the auto discovery state and is to be activated
                5. mismatch(5) -indicates that the shelf type is inconsistent with the configuration in the database of device
                6. offline(6)  -indicates that the shelf is offline or the link of the shelf is down
                "                      �"
                The administration status of frame.
                Options:
                1. nooperation(-1) -  default state of the system
                2. disable(1)      -  indicates that the frame administration state is disable
                3. enable(2)       -  indicates that the frame administration state is enable
                4. reset(3)        -  reset the shelf. If you need to reset the shelf immediately,
                                      perform the operation only. If you need to reset the shelf after a certain period,
                                      you also need to set hwFrameResetTimeout.
                                      If you need to reset the control shelf, the entire system is reset;
                                      otherwise, the control board in the specified shelf is reset
                5. test(4)         -  test the frame
                6. confirm(5)      -  confirm the frame
                7. delete(6)       -  delete the frame info
                8. batchconfirm(7) -  confirm the boards in a shelf in batches
                9. bind(8)         -  bind ont serial number with the extended frame ID
                "                      "
                The device that supports the slave shelf allows you to add a shelf (createAndGo(4))
                and delete a shelf (destroy(6)) only.
                The device that does not support the slave shelf and does not support the setting operation.
                "                      \"
                Backplane board version information.
                Use the new-line character \n (ACSII 0x0A)
                to space various version information.
                It mainly contains the following information:
                Hardware PCB version \n
                MAB version \n
                Board Type \n
                "                       �"
                The vendor-specific serial number string for the physical entity.
                The preferred value is the serial number string actually printed
                on the component itself.
                "                      �"
                Used to set the delay time of shelf reset, in unit of seconds.
                When you set hwFrameResetTimeout, you also need to set hwFrameAdminStatus to reset(3).
                If the shelf resetting fails, the device tries again in three seconds,
                until the resetting is successful or the number of resetting attempts exceeds the maximum.
                Initial value is -1.
                "                      "
                Frame CLEI Code (COMMON LANGUAGE Location Identifier Code):
                Used to identify the location and the type of a telecommunication device.
                For the definition of the CLEI Code, refer to the GR-485.
                "                       m"
                Frame information description, to describe name information of the frame.
                "                       m"
                The extending port of main frame which is used to connect extended frame.
                "                       F"
                The uplink port of extended frame.
                "                       A"
                Indicates the ID of the rack.
                "                       �"
                Sub ID of extending frame.
                If extend type is ETH, sub ID is 0xffffffff, it is invalid.
                If extend type is GPON, sub ID is ont ID, it is valid.
                "                       �"
                The type of extended frame connecting to the main frame, its value is the same as the ifType of the extending port.
                "                       B"
                Hardware description of frame.
                "                       �"
                ONT serial number. The valid length of the serial number is 8, and 0 indicates that the node is not set.
                "                       �"
                The vendor-specific serial number string for the physical entity.
                The preferred value is the serial number string actually printed
                on the component itself.
                "                       M"
                The number of assist frame of this frame.
                "                       K"
                This table describes board information.
                "                      �"
                The board description table, used to manage the running status of
                boards and board information, such as description of boards,
                daughter board quantity and board type.
                The indexes of this entry are hwFrameIndex and hwSlotIndex.
                For the hwFrameIndex object, refer to hwFrameTable.
                For example, 0.2 indicates that the board is in slot 2, shelf 0.
                "                      	"
                A slot index is used to identify the location of a board in a shelf.
                You can locate a board in a shelf according to hwFrameIndex and hwSlotIndex.
                For the hwFrameIndex object, refer to hwFrameTable.
                "                      H"
                Board type, which is defined in HUAWEI-TC-MIB.mib.
                The board type supported by a slot varies. For example, a slot can be inserted with a power board only,
                but certain slots can be inserted with voice service boards and broadband service boards.
                When adding a board by using the hwSlotRowStatus,
                you need to specify the board information such as board type and slot number.
                When adding a board, you need to check whether the board can be inserted in the specified slot.
                "                       �"
                The description about the board, providing additional information about a board for users.
                For example, you can set the services supported by the board as the description.
                "                       �"
                The PCB version information of the board.
                It has been discarded.
                The information of PCB version and other versions are described in the hwSlotVersion.
                "                      �"
                The version information about the board.
                Refer to the technical specifications of Huawei Technologies
                Co., Ltd. Use the new-line character \n (ACSII 0x0A) to space
                various version information. If there is no corresponding
                version, the new-line character shall also be inserted to
                remain the order.
                Detailed order information:
                Hardware PCB version \n
                Software version \n
                Logic version \n
                DSP version \n
                Standby CPU software version \n
                Chip version \n
                Other software version of the chip with a software \n
                Other version information \n
                The version information may have a slight difference according to different types of boards.
                For example, the standby CPU software version is not displayed for certain boards.
                "                      q"
                Board working mode that describes whether the board is
                working in main state or in standby with loadshare, nullbackup, voice, satop state.
                Options:
                1. main(1)                 - indicates that the active control board, supporting the get operation only
                2. standby(2)              - indicates that the standby control board, supporting the get operation only
                3. loadshare(3)            - indicates that the board working mode is load sharing
                4. nullbackup(4)           - indicates that the board working mode is backup
                5. voice(5)                - indicates to get and set the working mode of an EDT service board
                6. satop(6)                - indicates to get and set the working mode of an EDT service board or TOPB service board
                7. pots(7)                 - indicates to get and set the working mode of an VDM service board
                8. isdn(8)                 - indicates to get and set the working mode of an VDM service board
                9. bonding(9)              - indicates to get and set the working mode of an ADP service board
                10. retransmission(10)      - indicates to get and set the working mode of an ADP service board
                11. nativetdm(11)          - indicates to get and set the working mode of a TOPB service board
                12. other(255)             - indicates other working mode
                An EDT service board can be running either in voice mode, that is, voice(5), or in broadband mode, that is, satop(6).
                Setting the working mode of the EDT service board causes board resetting.
                An VDM service board can be running either in pots mode, that is, pots(7), or in isdn mode, that is, isdn(8).
                Setting the working mode of the VDM service board causes board resetting.
                Setting the board working mode may cause board resetting.
                When you are setting the working mode, you cannot set hwSlotAdminStatus or hwSlotRowStatus at the same time.
                "                       T"
                The number of sub boards supported by the board.
                "                      �"
                The running status of a board.
                Options:
                1. null(1)                  -indicates that the board is null
                2. normal(2)                -indicates that the board is running normally
                3. fault(3)                 -indicates that the board is faulty but in position
                4. forbidden(4)             -indicates that the board is in position but disabled
                5. autofind(5)              -indicates that the board is in the autofind state. If a board is added through
                                             hwSlotRowStatus and the board is not confirmed, the board is in the autofind state.
                                             If a board is inserted in an idle slot, after the report of automatic registration,
                                             the board is also in the autofind state
                6. config(6)                -indicates that the board is in the configuration state.
                                             After a board that is in the auto discovery.
                                             state is confirmed, data needs to be configured on the board.
                                             The board is in the configuration state during data configuration.
                                             After a board is successfully configured, its status is changed from config(6)
                                             to normal(2). If the configuration fails, the board status is changed from config(6) to fault(3)
                7. offline(7)               -indicates that the board is faulty and is not in position
                8. abnormal(8)              -indicates that the board is abnormal
                9. versionerr(9)            -indicates that the board version is error

                10. autoload(10)            -indicates that the board is in the auto loading state. If detecting a software update,
                                             the board automatically loads the update. If a board is in the auto loading state,
                                             resetting or disabling the board may fail
                11. outofservice(11)        -indicates that the board is out of service
                12. graceful(12)            -indicates that the board running state is graceful
                13. shutdown(13)            -indicates that the board is in the shutdown state.
                14. energysavingshutdown(14)   -used for system energy saving. Reference to hwSysEnergySaving node for more detail.
                15. hightempshutdown(15)    -when the temperature of a board exceeds the high temperature threshold,
                                             the board is powered off in order to protect the board
                16. manualshutdown(16)       -services on certain boards can be recovered only after restart of the board.
                                             You can manually power off the board.
                                             Then, the board is in the manual shutdown state
                17. mismatch(17)            -when a board inserted in a slot is inconsistent with the configuration saved in the system,
                                             the board is in the mismatch(17) state
                18. acoffshutdown(18)       -used to protect system when there is no AC Power.
                Certain products use the power saving features, energysavingshutdown(14), hightempshutdown(15),
                manualshutdown(16),acoffshutdown(18) to distinguish the shutdown causes.
                For outofservice(11), graceful(12), refer to hwSlotEndServiceMode.
                "                      M"
                Board status management.
                This object cannot be set simultaneously with hwSlotRowStatus or hwSlotWorkMode.
                Options:
                1. nooperation(-1)   -default state of the system
                2. disable(1)        -disable the running of a board
                3. enable(2)         -enable the running of a board
                4. reset(3)          -reset a board
                5. test(4)           -test a board
                6. confirm(5)        -confirm the board in the discovery(5) state in hwSlotOperStatus
                                      After the operation, the board is in the config state
                7. switch(6)         -main board switchover on access network UA device
                8. delete(7)         -delete a board
                9. forbidden(8)      -forbid a board
                10.unforbidden(9)    -permit a board
                11.endservice(10)    -used in the exit delay of a board
                12.startservice(11)  -used in the exit delay of a board
                13.poweron(12)       -used to power on a board
                14.poweroff(13)      -used to power off a board
                15.is(14)            -in service
                16.oos(15)           -out of service
                17.hotreset(16)      -hotreset a board
                "                      "
                Supported setting operations are createAndGo(4) and destroy(6).
                Options:
                1. CreateAndGo(4) - When adding a board in offline mode, you must set the hwSlotType object at
                                    the same time. The hwSlotType object must support offline adding.
                                    After you add a board in offline mode on the NMS, if adding a daughter board is supported,
                                    you can also add a daughter board. See hwSubslotAdminStatus in hwSubslotTable.
                2. Destroy(6)     - Used to delete a board.
                "                       �"
                The vendor-specific serial number string for the board.
                The preferred value is the serial number string actually printed on the component itself.
                "                      "
                Shutdown state of the board.
                Options:
                1. powerOffState(1)  -indicates the power-off state
                2. powerOnState(2)   -indicates the power-on state
                This object is no longer used.
                "                       �"
                The temperature of the board. (Unit:centigrade)
                The value 0X7FFFFFFF indicates invalid temperature.
                "                      �"
                The message is reported if the current version of a board is inconsistent with the
                version saved in the flash memory.
                The contents of the message are as follows:
                Current BIOS version of the board      3 bytes
                BIOS version of the board in the flash   3 bytes
                Current software version of the board      3 bytes
                Software version of the board in the flash memory   3 bytes
                "                       �"
                The timeout time before forcing to quit service of the board, in unit of minutes.
                Range: 1-1440
                Default: 0
                Unit: minutes
                "                       q"
                The remain time of the forcing to out of service.
                Unit:Minute
                "                      "
                The handling after the timeout time elapses when a board delays in quitting service.
                Options:
                        1. forced(1)   - force to handle    
                        2. cancel(2)   - cancel handling 
                        "                       �"
                The mode in which a board quits service.
                Options:
                1. immediate(1) -quit service immediately
                2. graceful(2)  -quit service later
                "                      "
                Card CLEI Code(COMMON LANGUAGE Location Identifier Code):
                Used to identify the location and the type of a telecommunication device.
                For the definition of the CLEI Code, refer to the GR-485.
                "                      Y"
                Indicates the network role of a board.
                Options:
                1. cascade(1)  -indicates the subtending side, which is used for subtending and capturing certain protocol packets
                2. network(2)  -indicates the network side, which is used for upstream transmission
                3. user(3)     -indicates the user side, which is used for creating the service port
                4. extend(4)   -indicates the extend side, which is used for connecting to the extended frame
                5. invalid(255)-indicates the invalid value
                "                       q"
                Slot information description, to describe board name information of the slot.
                "                      �"
                The primary status of the Board.
                Options:
                1. isNr(1)     -in Service, normal
                2. isAnr(2)    -in service, abnormal
                3. isRst(3)    -in service, restricted
                4. isAnrst(4)  -in service, abnormal & restricted
                5. oosAu(5)    -out of service, autonomous
                6. oosMa(6)    -out of service, management
                7. oosAuma(7)  -out of service, autonomous & management
                8. oosAurst(8) -out of service, autonomous & restricted
                9. oosMaanr(9) -out of service, management & abnormal
                10. unknown(10) -unknown                
                "                      �"
                The secondary status of the board.
                This BITS structure can report the following status:
                1. sstAins(0)  -this bit position positively reports that the status of the board is automatic in-service
                2. sstFaf(1)   -facility failure
                3. sstFlt(2)   -fault
                4. sstLpbk(3)  -loopback
                5. sstMea(4)   -mismatch of equipment and attributes
                6. sstSgeo(5)  -supporting entity outage
                7. sstStbyh(6) -standby-Hot
                8. sstTs(7)    -test
                9. sstUas(8)   -unassigned
                10. sstUeq(9)  -unequipped
                11. sstWrk(10) -working
                12. sstPwr(11) -power
                "                       k"
                This object is used for getting the time of adding or creating a board.
                "                      X"
                Indicates the port number working mode of a board.
                The default value is portnumworkmode48(5).  
                Options:
                1. portnumworkmode8(1)             - Indicates that the board is in 8-channel port number working mode.  
                2. portnumworkmode16(2)            - Indicates that the board is in 16-channel port number working mode.
                3. portnumworkmode24(3)            - Indicates that the board is in 24-channel port number working mode.
                4. portnumworkmode32(4)            - Indicates that the board is in 32-channel port number working mode.
                5. portnumworkmode48(5)            - Indicates that the board is in 48-channel port number working mode.
                6. other(255)                      - Indicates that the board is in invalid port working mode.            
                Setting port working mode of a board triggers system restarts. 
                Therefore, this node cannot be set concurrently with hwSlotAdminStatus, hwSlotRowStatus, and hwSlotWorkMode nodes.
                "                      �"
                Subslot description table that describes detailed information of each subslot attached to the board.
                The indexes of this table are hwFrameIndex, hwSlotIndex and hwSubslotIndex.
                For the hwFrameIndex object, refer to hwFrameTable; for the hwSlotIndex object, refer to hwSlotTable.
                For example, 0.1.0 indicates that a daughter board is in subslot 0, slot 1, shelf 0.
                "                      �"
                Subslot description table that describes detailed information of each subslot attached to the board.
                The indexes of this entry are hwFrameIndex, hwSlotIndex and hwSubslotIndex.
                For the hwFrameIndex object, refer to hwFrameTable; for the hwSlotIndex object, refer to hwSlotTable.
                For example, 0.1.0 indicates that a daughter board is in subslot 0, slot 1, shelf 0.
                "                       �"
                The index of a daughter board is determined by the physical position of the daughter board on the board.
                The hwSubslotIndex value of 65535 indicates the board itself.
                "                      J"
                For the definition of the daughter board type, refer to the HUAWEI-TC-MIB.mib.
                When adding a daughter board on a board, you need to specify the type of the daughter board and
                check whether the daughter board can be inserted in the specified subslot on the board.
                "                       X"
                The number of physical ports owned by the sub board.
                "                      �"
                Operation status of the daughter board.
                Options:
                1. uninstall(1)             -indicates that the daughter board is not installed
                2. normal(2)                -indicates that the daughter board is running normally
                3. fault(3)                 -indicates that the daughter board is faulty
                4. forbidden(4)             -the object is not used
                5. autofind(5)              -indicates that the daughter board is in the autofind state.
                6. config(6)                -indicates that the daughter board is in the configuration state.
                                             The daughter board is in the configuration state during data configuration.
                                             After a daughter board is successfully configured, its status is changed from config(6)
                                             to normal(2). If the configuration fails, the daughter board status is changed from config(6) to fault(3)
                7. offline(7)               -indicates that the daughter board is faulty and is not in position
                8. abnormal(8)              -indicates that the daughter board is abnormal
                9. versionerr(9)            -indicates that the daughter board version is error
                10. autoload(10)            -indicates that the daughter board is in the auto loading state. If detecting a software update,
                                             the daughter board automatically loads the update. If a daughter board is in the auto loading state,
                                             resetting or disabling the daughter board may fail
                11. outofservice(11)        -indicates that the daughter board is out of service
                12. graceful(12)            -indicates that the daughter board running state is graceful
                13. shutdown(13)            -indicates that the daughter board is in the shutdown state.
                14. energysavingshutdown(14)   -used for system energy saving. Reference to hwSysEnergySaving node for more detail.
                15. hightempshutdown(15)    -when the temperature of a daughter board exceeds the high temperature threshold,
                                             the daughter board is powered off in order to protect the daughter board
                16. manualshutdown(16)       -services on certain daughter boards can be recovered only after restart of the daughter board.
                                             You can manually power off the daughter board.
                                             Then, the daughter board is in the manual shutdown state
                17. mismatch(17)            -when a daughter board inserted in a slot is inconsistent with the configuration saved in the system,
                                             the daughter board is in the mismatch(17) state
                18. acoffshutdown(18)       -used to protect system when there is no AC Power.
                Certain products use the power saving features, energysavingshutdown(14), hightempshutdown(15),
                manualshutdown(16),acoffshutdown(18) to distinguish the shutdown causes.
                "                      a"
                Administration status of the daughter board in the subslot.
                This object is not used.
                Options:
                1. nooperation(-1)  -indicates the default state
                2. disable(1)       -indicates the disable state
                3. enable(2)        -indicates the enable state
                4. reset(3)         -indicates the reset state
                5. test(4)          -indicates the test state
                6. confirm(5)       -indicates the confirmation state
                7. delete(6)        -indicates the delete state
                8. is(7)            -indicates in service
                9. oos(8)           -indicates out of service
                10. poweron(9)      -indicates the poweron state
                11. poweroff(10)    -indicates the poweroff state
                "                       �"
                daughter board version information, obtained from the version information about the
                board on which the daughter board is located.
                Refer to the hwSlotVersion in the hwSlotTable.
                "                       �"
                The description about the daughter board.
                Do not support the setting operation.
                "                      �"
                Only the operation of adding a daughter board, that is, setting createAndGo(4),
                is supported. When adding a daughter board, you must set the hwSubslotType object at the same time.
                After you add a board by using the hwSlotAdminStatus object in hwSlotTable,
                if the board allows you to add a daughter board and the board status (hwSlotOperStatus) is discovery(5),
                you can add a daughter board in this way.
                "                       �"
                The vendor-specific serial number string for the daughter board.
                The preferred value is the serial number string
                actually printed on the component itself.
                "                       e"
                daughter board type name in the subslot,refer to the HW-TC table.
                "                      �"
                The primary status of the daughter board.
                Options:
                1. isNr(1)     -in Service, normal
                2. isAnr(2)    -in service, abnormal
                3. isRst(3)    -in service, restricted
                4. isAnrst(4)  -in service, abnormal & restricted
                5. oosAu(5)    -out of service, autonomous
                6. oosMa(6)    -out of service, management
                7. oosAuma(7)  -out of service, autonomous & management
                8. oosAurst(8) -out of service, autonomous & restricted
                9. oosMaanr(9) -out of service, management & abnormal
                "                      
"
                The secondary status of the daughter board.
                This BITS structure can report the following status:
                1. sstAins(0)  -this bit position positively reports that the status of the daughter board is automatic in-service
                2. sstFaf(1)   -facility failure
                3. sstFlt(2)   -fault
                4. sstLpbk(3)  -loopback
                5. sstMea(4)   -mismatch of equipment and attributes
                6. sstSgeo(5)  -supporting entity outage
                7. sstStbyh(6) -standby-Hot
                8. sstTs(7)    -test
                9. sstUas(8)   -unassigned
                10. sstUeq(9)  -unequipped
                11. sstWrk(10) -working
                12. sstPwr(11) -power
                "                      "
                daughter board CLEI Code(COMMON LANGUAGE Location Identifier Code):
                Used to identify the location and the type of a telecommunication device.
                For the definition of the CLEI Code, refer to the GR-485.
                        "                       �"
                The temperature of the daughter board. (Unit:centigrade)
                The value 0X7FFFFFFF indicates invalid temperature.
                "                       �"
                The cpu occupancy of the daughter board.
                The value -1 indicates invalid cpu occupancy.
                "                       �"
                The memory occupancy of the daughter board.
                The value -1 indicates invalid memory occupancy.
                "                      �"Port configuration table that describes the detailed
                information of physical ports in the board, including the type,
                status and rate of the port. This table must be implemented.
                The indexes of this table are hwFrameIndex, hwSlotIndex, hwSubslotIndex and hwPortIndex.
                hwFrameIndex refer to hwFrameTable, hwSlotIndex refer to
                hwSlotTable, hwSubslotIndex refer to hwSubslotTable.
                "                      �"Port configuration table that describes the detailed
                information of physical ports in the board, including the type,
                status and rate of the port. This table must be implemented.
                The indexes of this entry are hwFrameIndex, hwSlotIndex, hwSubslotIndex and hwPortIndex.
                hwFrameIndex refer to hwFrameTable, hwSlotIndex refer to hwSlotTable,
                hwSubslotIndex refer to hwSubslotTable.
                "                       f"
                Port index, indicating the physical number of the port on a board.
                "                       U"
                Port type, which is defined in HUAWEI-TC-MIB.mib.
                "                      !"
                The description about the port, used to describe extra information of the port.
                For example, you can describe the user that connects to the port.
                The standby control board does not support setting of the port description.
                "                       T"
                The speed of the port.
                Unit:Kbps
                "                      �"
                Port operation status.
                Options:
                1.normal(1)               -indicates that the link is up or activated
                2.fault(2)                -indicates that port failure
                3.localLoopback(3)        -indicates that normal local loopback
                4.forbidden(4)            -indicates that the port is disabled
                5.test(5)                 -indicates test start
                6.remoteLoopback(6)       -indicates normal remote loopback
                7.activated(10)          -indicates that the port is being activated
                8.deactivated(11)         -indicates that the link is down or deactivated
                9.block(12)               -indicates port blocking
                10.nolight(13)            -indicates no signal in ATM port
                11.innerLocalLoopback(14) -indicates that inner local loopback toward inner system chipset (it's UTOPIA loopback for ADSL port)
                12.innerRemoteLoopback(15)-indicates that inner remote loopback toward inner system chipset
                13.locked(16)             -indicates locked
                14.busy(17)               -indicates busy
                15.maintain(18)           -indicates maintenance
                16.standbynormal(19)      -indicates that the port on the standby control board is activated
                17.standbyfault(20)       -indicates that the port on the standby control board is faulty
                18.adslloopbackafe(21)    -indicates that AFE loopback
                19.adslloopbackhybrid(22) -indicates that HYBRID loopback
                20.rtuLocalLoopback(23)   -indicates that RTU local loopback
                21.rtuRemoteLoopback(24)  -indicates that RTU remote loopback
                22.linkup(25)             -indicates eth port online
                23.linkdown(26)           -indicates eth port offline
                24.powerDenied(50)        -indicates port operation state is power denied
                "                      �"
                Port administration status.
                Options:
                1.active(1)                   -activate the port
                2.deactive(2)                 -deactivate the port
                3.block(3)                    -block the port
                4.unblock(4)                  -unblock the port
                5.confirm(5)                  -confirm the port
                6.delete(6)                   -delete the port
                7.reset(7)                    -reset the port
                8.localLoopback(8)            -loop back the port
                9.remoteLoopback(9)           -remotely loop back the port
                10.stopLoopback(11)            -stop looping back the port
                11.innerLocalLoopback(12)      -inner local loopback toward inner system chipset
                12.innerRemoteLoopback(13)     -inner remote loopback toward inner system chipset
                13.rtuLocalLoopback(14)        -RTU local loopback RUT: Local loopback
                14.rtuRemoteLoopback(15)       -RTU remote loopback
                15.utopiaLocalLoopback(16)     -UTOPIA Local Loopback
                16.afeLocalLoopback(17)        -AFE Local Loopback
                17.hybirdLocalLoopback(18)     -HYBIRD Local Loopback
                18.noLoopBackNoTest(50)        -no loop back and no test
                19.noLoopBackTest(51)          -no loop back and test
                20.localLoopBackNoTest(52)     -Local loop back and no test
                21.localLoopBackTest(53)       -Local loop back test
                22.remoteLoopBackNoTest(54)    -Remote loopback and no test
                23.remoteLoopBackTest(55)      -Remote loopback and test
                24.localLoopbackPTM(56)        -PTM Local Loopback
                25.eocLoopbackNoTest(57)       -EOC Loop back and no test
                26.eocLoopbackTest(58)         -EOC Loop back and test
                27.prohibited(59)              -Port is prohibited
                "                      d"
                Indicates the network role of a board.
                Options:
                1. uplink(1)  -indicates the uplink port
                2. cascade(2) -indicates the subtending port
                3. access(3)  -indicates the downstream access port
                4. extend(4)  -indicates connectting to extended frame
                "                       h"
                The temperature of the port.
                The object is not used.
                "                      �"
                The primary status of the port.
                Options:
                1. isNr(1)     -in Service, normal
                2. isAnr(2)    -in service, abnormal
                3. isRst(3)    -in service, restricted
                4. isAnrst(4)  -in service, abnormal & restricted
                5. oosAu(5)    -out of service, autonomous
                6. oosMa(6)    -out of service, management
                7. oosAuma(7)  -out of service, autonomous & management
                8. oosAurst(8) -out of service, autonomous & restricted
                9. oosMaanr(9) -out of service, management & abnormal
                "                      �"
                The secondary status of the port.
                This BITS structure can report the following status:
                1. sstAins(0)  -this bit position positively reports that the status of the port is automatic in-service
                2. sstFaf(1)   -facility failure
                3. sstFlt(2)   -fault
                4. sstLpbk(3)  -loopback
                5. sstMea(4)   -mismatch of equipment and attributes
                6. sstSgeo(5)  -supporting entity outage
                7. sstStbyh(6) -standby-Hot
                8. sstTs(7)    -test
                9. sstUas(8)   -unassigned
                10. sstUeq(9)  -unequipped
                11. sstWrk(10) -working
                12. sstPwr(11) -power
                "                      "
                The virtual system mask of the port, each bit indicates the VAN to which the board
                belongs. For example, the first bit maps vs0, the second bit maps vs1, and the rest 
                can be deducted by analog.
                 "                          �"
                Number of frame Links, which refers to the number of links between the main
                frame and the standby frame of the current device. If there are many frames,
                but the device cannot know the link relation of the frames, then the initial
                value of this node is 0. If a user manually adds the link between the frames later,
                then this node shall be renewed.
                Default: 0
                "                      '"
                The index of this table is hwFrameLinkIndex.
                The frame link table. It describes the topology relation between the frames.
                For the device that can automatically discover the link relationship between the devices,
                this table can be implemented as read-only table. For the device whose inter-frame
                relation needs to be configured manually, this table shall support adding and deletion.
                All the links must locate on the two existing ports.
                "                      '"
                The index of this entry is hwFrameLinkIndex.
                The frame link table. It describes the topology relation between the frames.
                For the device that can automatically discover the link relationship between the devices,
                this table can be implemented as read-only table. For the device whose inter-frame
                relation needs to be configured manually, this table shall support adding and deletion.
                All the links must locate on the two existing ports.
                "                       �"
                Index of the frame link. It is sequentially numerated and exclusively identified in the device.
                There is no restriction to the coding rule.
                "                       �"
                The ID of the left node linked to the frame, corresponding to the hwFrameIndex in the hwFrameTable
                "                       �"
                The ID of the left slot linked to the frame, corresponding to the hwSlotIndex in the hwSlotTable.
                It indicates which slot of the left node is the link entry.
                "                       �"
                Link the left subslot, corresponding to the hwSubSlotIndex in the hwSubTable.
                It indicates which subslot of the left node is the link entry.
                "                       �"
                The ID of the left port linked to the frame, corresponding to the hwPortIndex in the hwPortTable.
                It indicates which port of the left node is the link entry.
                "                       �"
                The ID of the right node linked to the frame, corresponding to the hwFrameIndex of the hwFrameTable.
                "                       �"
                The ID of the right slot linked the frame, corresponding to the hwSlotIndex of the hwSlotTable.
                It indicates which slot of the right node is the link entry.
                "                       �"
                Link the right subslot, corresponding to the hwSubSlotIndex in the hwSubSlotTable.
                It indicates which subslot of the right node is the link entry.
                "                       �"
                The ID of the right port linked to the frame, corresponding to the hwPortIndex in the hwPortTable.
                It indicates which port of the right port is the link entry.
                "                      *"
                The running status of the link.
                Options:
                1.normal(1)    -  the running status of the link is normal
                2.fault(2)     -  the running status of the link is fault
                3.discovery(3) -  the link is discovered
                "                       c"
                The row status of the frame link, used to add or delete a link.
                "                      "
                The frame link table indicates adding the index value to be assigned by the new link.
                This leaf is used to access an index ID of the next frame link dynamically assigned by
                the host before delivering the adding link. To deliver the adding link,
                the value of the leaf shall be accessed,and be delivered together with the frame link table.
                Otherwise, the host can not execute the operation and will return the error.
                Default: 0
                "                          X"
                Inquiring or modifying AULaw, impedance and current or ringvoltage of ASL, A32 and H511POTS ports.
                The indexes of this table are hwFrameIndex and hwSlotIndex.
                For the hwFrameIndex object, refer to hwFrameTable;
                for the hwSlotIndex object, refer to hwSlotTable.
                "                      X"
                Inquiring or modifying AULaw, impedance and current or ringvoltage of ASL, A32 and H511POTS ports.
                The indexes of this entry are hwFrameIndex and hwSlotIndex.
                For the hwFrameIndex object, refer to hwFrameTable;
                for the hwSlotIndex object, refer to hwSlotTable.
                "                       �"
                Coding method of voice signal when digitalizing.
                In different country or area it should be A law or u law.
                1    --    A law
                2    --    u law
                "                      i"
                Port current supported by the board. The value ranges from 1 to 10,
                which indicates the port current value supported under certain loopline impedance.
                1    --    25mA steady current
                2    --    16mA steady current
                3    --    35mA 2*200
                4    --    35mA 2*250
                5    --    35mA 2*400
                6    --    47mA 2*200
                7    --    47mA 2*250
                8    --    47mA 2*400
                9    --    17mA steady current
                10   --   20mA steady current
                "                      �"
                Port impedance of the board. The following values indicates different impedance with
                different application circumstances.
                1    --    Bureau machine in China(200+680|| 100nf)
                2    --    User Machine in China(200+560|| 100nf)
                3    --    600 Interface
                4    --    Interface of russian(150+510|| 47nf)
                5    --    (220+820|| 115nf )
                6    --    (220+820|| 120nf )
                7    --    900 Interface
                8    --    Interface of Brazil(800|| 50nf)
                9    --    BT(Zin=300+1000|| 220nf ,Zload=370+620|| 310nf)
                10   --    HK_BT3(Zin=370+620|| 310nf,Zload=600)
                11   --    HK_BT5(Zin=270+264|| 357nf+1434|| 265nf,Zload=600)
                12   --    BT1(BT0 without AGC)
                13   --    BT2(Zin=87+1052||228nF+229||28.4nF, Zload=270+264||357nF+1434||265nF)
                14   --    BT3(Zin=87+1052||228nF+229||28.4nF, Zload=164+162||363nF+1227||350nF)
                15   --    KPN(Zin= 270+750|| 150nf)
                255  --    Private definition
                "                      H"
                The object is used to set and query the working environment of a board.
                Options:
                1.emsan(1) -indicates that the device is on a terminal node or a convergence node
                2.smsan(2) -indicates that the device is on a terminal node or a convergence node
                "                      F"
                The object is used to set the working mode of the COMBO board.
                Options:
                1.combo(1)       -the broadband and voice parts of the board are powered on
                2.powerSaving(2) -the board cuts off the power supply of the broadband part
                3.auto(3)        -normally the broadband and voice parts of the board are powered on
                                  When the mains supply is cut off, the board automatically cuts off
                                  the power supply of the broadband part
                "                       �"
                It is supported to config ringvoltage on virtual A04 board.
                It should be 41.5v or 45v.
                1    --    25Hz 41.5V
                2    --    25Hz 45V
                "                      �"
                The object is used to query the working status of the COMBO board.
                Options:
                1. combo(1)       -if the broadband and voice parts of the board are powered on,
                                   the returned value is combo(1) ,DEFVAL { 1 }
                2. powerSaving(2) -if only the voice part of the board is powered on,
                                   the returned value is powerSaving(2)
                "                      �"Port query table that describes the detailed
                information of physical ports in the board, including the type,
                the virtual system mask of the port. 
                The indexes of this table are hwFrameIndex, hwSlotIndex, hwSubslotIndex and hwPortIndex.
                hwFrameIndex refer to hwFrameTable, hwSlotIndex refer to hwSlotTable,
                hwSubslotIndex refer to hwSubslotTable, hwPortIndex refer to hwPortTable.
                "                      �"Port query table that describes the detailed
                information of physical ports in the board, including the type,
                the virtual system mask of the port. 
                The indexes of this entry are hwFrameIndex, hwSlotIndex, hwSubslotIndex and hwPortIndex.
                hwFrameIndex refer to hwFrameTable, hwSlotIndex refer to hwSlotTable,
                hwSubslotIndex refer to hwSubslotTable, hwPortIndex refer to hwPortTable.
                "                       U"
                Port type, which is defined in HUAWEI-TC-MIB.mib.
                "                      "
                The virtual system mask of the port, each bit indicates the VAN to which the port
                belongs. For example, the first bit maps vs0, the second bit maps vs1, and the rest 
                can be deducted by analog.
                 "                       "
                This table describes the CPU usage, including the average CPU usage and periodic CPU usage.
                "                       �"
                The indexes of this entry are hwFrameIndex, hwSlotIndex and hwCpuDevIndex.
                A table of CPU statistics.
                "                       �"
                CPU index, hwFrameIndex, and hwSlotIndex constitute the HUAWEI-CPU-MIB index. 
                For a single-CPU device, the value of this object is 0.
                "                       v"
                The value of this object identifies the average CPU usage of a board or an entity.
                "                       �"
                The value of this object identifies the average CPU usage of a board or entity 1 minute before the data is read.
                "                       �"
                The value of this object identifies the average CPU usage of a board or entity 5 minutes before the data is read.
                "                       ?"
                Duration of CPU running(s).
                "                       ;"
                Number of CPU overload.
                "                       @"
                Duration of CPU overload(s).
                "                       ="
                Number of CPU congestion.
                "                       B"
                Duration of CPU congestion(s).
                "                           �"
                This table describes memory usage statistics, including the total memory, idle memory, and occupied memory.
                "                       �"
                The index of this entry is hwFrameIndex, hwSlotIndex or hwMemoryDevModuleIndex.
                This table contains memory information.
                "                       �"
                This object is only used for extension. For a single-CPU device, the value of this object is 0.
                "                      :"
                This object indicates the total memory size of a managed object, in bytes. It includes the free memory size and occupied memory size, that is, the sum of hwMemoryDevFree and hwMemoryDevRawSliceUsed. 
                Each board has a memory. The memory size varies with products.
                "                       �"
                This object indicates the idle memory size of the main control board, in bytes. The value of this object is always less than hwMemoryDevSize.
                "                       �"
                This object indicates the total size of occupied raw slice memory, in bytes. The value of this object is always less than hwMemoryDevSize.
                "                      "
                This object indicates the maximum number of consecutive bytes that are not occupied on a managed object. It is the maximum memory size that can be allocated by the system. The value of this object is always less than hwMemoryDevSize.
                "                       {"
                This object indicates the number of memory allocation failures. The default value is 0.
                "                       �"
                This object indicates the number of memory allocation failures due to the lack of idle memory. The default value is 0.
                "                       �"
                This object indicates the total size of memory modules on the managed object that exceeds 4 GB, in bytes.
                "                       �"
                This object indicates the idle memory size when the total size of memory modules on the managed object exceeds 4 GB, in bytes.
                "                       �"
                The index of this table is hwFrameIndex, hwSlotIndex, hwBufferModuleIndex or hwBufferSize.
                Buffer  information table.
                "                       �"
                The index of this entry is hwFrameIndex, hwSlotIndex, hwBufferModuleIndex or hwBufferSize.
                Buffer  information table.
                "                       ;"
                Index of hwBufferTable.
                "                       ]"
                Contains the size of byte hwBuffers, in the unit of byte.
                "                       U"
                Contains the total number of hwBuffers currently.
                "                       T"
                Contains the number of used hwBuffers currently.
                "                           �"
                The index of this table is hwFrameIndex, hwSlotIndex or hwFlashDevIndex.
                This table contains flash information.
                "                       �"
                The index of this entry is hwFrameIndex, hwSlotIndex or hwFlashDevIndex.
                This table contains flash information.
                "                       ="
                Index of hwFlashDevTable.
                "                       I"
                Total size in Octets of Flash memory,
                "                       J"
                Unused Size in Octets of Flash memory.
                "                       V"
                The last time when Flash was erased after powerup.
                "                      �"
                Status of current or last flash erasing.
                Options:
                1.flashErasing(1)            -  flash is executing erasing operation
                2.flashErasedSuccessful(2)   -  flash erased successfully
                3.flashErasedFail(3)         -  flash erased failed
                4.flashReadOnly(4)           -  flash state is read only
                5.flashOpenFailure(5)        -  open flash failed
                6.bufferAllocationFailure(6) -  allocating buffer on flash failed
                7.noEraseAfterPowerOn(7)     -  there is no erasing operation after device was powered on
                "                       �"
                Status of the availability of flash.
                Options:
                1.busy(1)       -  flash state is busy
                2.available(2)  -  flash state is available
                "                           �"
                The index of this table is hwAlarmSerialIndex.
                This table is no longer used.
                "                       �"
                The index of this entry is hwAlarmSerialIndex.
                This table is no longer used.
                "                       B"
                This object is no longer used.
                "                       :"
                The type of the Alarm.
                "                       B"
                This object is no longer used.
                "                       B"
                This object is no longer used.
                "                               @"
                Frame administration result.
                "                       ?"
                Slot administration result.
                "                       B"
                Subslot administration result.
                "                       ?"
                Port administration result.
                "                      �"
                The serial IP of configuration changes.
                If the configuration changes is trigger by the command line users, the IP address is 0.0.0.0.
                If it is triggered by the SNMP user, the IP address is the SNMP user's IP address.
                The Trap of configuration changes will not be sent to the SNMP user,
                who triggered the configuration changes.
                "                       �"
                User label type.
                1. Frame type.
                2. Slot type.
                3. Port type.
                "                       /"
                User label.
                "                       T"
                This node is reserved and has no actual meaning.
                "                       T"
                This node is reserved and has no actual meaning.
                "                       T"
                This node is reserved and has no actual meaning.
                "                       _"
                Type of the frame that is configured in database of device.
                "                       H"
                Type and name of the inserted board.
                "                       A"
                Old IP address of the device.
                "                       A"
                New IP address of the device.
                "                       ]"
                Type of the first daughter board that is used previously.
                "                       ^"
                Type of the second daughter board that is used previously.
                "                       ]"
                Type of the third daughter board that is used previously.
                "                       ^"
                Type of the fourth daughter board that is used previously.
                "                       ~"
                Slot information description, to describe standby main board name information of the slot.
                "                       �"
                Previous Device querying table. It is used to query barcode and name of previous device
                which was replaced by a new one.
                The indexes of this table are hwFrameIndex and hwSlotIndex.
                "                       �"
                Previous Device querying table. It is used to query barcode and name of previous device
                which was replaced by a new one.
                The indexes of this entry are hwFrameIndex and hwSlotIndex.
                "                       �"
                Slot information description, to describe previous board name information of the slot.
                The indexes of the entry are hwFrameIndex and hwSlotIndex.
                "                      %"
                The vendor-specific serial number string for the previous board of the slot.
                The preferred value is the serial number string actually printed on the component itself.
                The indices of the entry are hwFrameIndex and hwSlotIndex.
                "                       d"
                The index of this table is hwResTypePara. System resource table.
                "                       d"
                The index of this entry is hwResTypePara. System resource table.
                "                      "
                System resource type.
                Options:
                1. memory(1)      -indicates the memory resource
                2. messageUnits(2)-indicates the message resource
                3. cpu(3)         -indicates the CPU resource
                "                       >"
                System resource occupancy.
                "                       e"
                The first para of storage fault, which describe the storage name.
                "                       p"
                The frame index of the port connecting the main frame to the extended frame.
                "                       J"
                Another uplink port of extended frame.
                "                       o"
                The slot index of the port connecting the main frame to the extended frame.
                "                       o"
                The port index of the port connecting the main frame to the extended frame.
                "                       A"
                The name of board hard fault.
                "                       C"
                The effect of board hard fault.
                "                       8"
                Input Circuit Index.
                "                      y"
                Voltage Input Type.
                Options:
                1. localac(1)   -local ac type.
                2. localdc(2)   -local dc type.
                3. remoteac(3)  -remote ac type.
                4. remotedc(4)  -remote dc type.
                5. pd(5)        -pd type.
                6. channelvoltage(6) - channel voltage type.
                "                      *"
                Auto-deployment phase:
                1. Download the auto-deployment policy file
                2. Parse the auto-deployment policy file
                3. Download the upgrade software
                4. Download the configuration file
                5. Download common configuration scripts
                6. Download customized configuration scripts
                7. Issue the automatic backup configuration
                8. Download the database
                9. Save the database and configuration file
                "                       9"
            	The index of local chassis.
            	"                       ="
            	The index of neighbour chassis.
            	"                       8"
            	The index of data channel.
            	"                       G"
            	The index of interface for the data link.
            	"                       F"
            	The name of interface for the data link.
            	"                       6"
            	The index of power port.
            	"                       K"
            	The level-1 high temperature alarm threshold.
            	"                       K"
            	The level-2 high temperature alarm threshold.
            	"                       K"
            	The level-3 high temperature alarm threshold.
            	"                       D"
            	The current temperature of the device.
            	"                       Q"
                The IP address of SNMP probe abnormal record.
                "                       V"
                The last probe time of SNMP probe abnormal record.
                "                       W"
                The average interval of SNMP probe abnormal record.
                "                       W"
                The minimum interval of SNMP probe abnormal record.
                "                       V"
                The maxmum interval of SNMP probe abnormal record.
                "                       W"
                The connection count of SNMP probe abnormal record.
                "                       >"
                The index ID of sub board.
                "                       H"
            	The value of power supply channel voltage.
            	"                       >"
            	The description of power supply.
            	"                               ["
                This trap message is reported when a board is detected.
                "                 Z"
                This trap message is reported when a board disappears.
                "                 _"
                This trap message is reported when a board's state changes.
                "                 v"
                This trap message is reported when a board's state changes from online to offline.
                "                 b"
                This trap message is reported when a board starts to autoload.
                "                 �"
                This trap message is reported when a board's userlabel changes.
                The binding parameters hwDevVPI, hwDevVCI and hwDevVlanId are reserved and have no actual meaning.
                "                 >"This trap message is reported when the system state changes."                 ["
                This trap message is reported when a frame is detected.
                "                 Z"
                This trap message is reported when a frame disappears.
                "                 _"
                This trap message is reported when a frame's state changes.
                "                 n"
                This trap message is reported when a extended frame's uplink port changes.
                "                 x"
                This trap message is reported when the abnormal record of SNMP probe monitor occurs.
                "                            >"
                This trap message is reported when the data synchronization
                between the active and standby control boards is canceled.
                The first hwSlotIndex indicates active main board index,
                the second hwSlotIndex indicates standby main board index.
                "                 �"
                This trap message is reported when the active control board type
                is inconsistent with standby ctrol board type.
                "                >"
                This trap message is reported when the data synchronization
                between the active and standby control boards is canceled.
                The first hwSlotIndex indicates active main board index,
                the second hwSlotIndex indicates standby main board index.
                "                ;"
                This trap message is reported when the data synchronization
                between the active and standby control boards recovers.
                The first hwSlotIndex indicates active main board index,
                the second hwSlotIndex indicates standby main board index.
                "                 ]"
                This trap message is reported when the device is cut off.
                "                 a"
                This trap message is reported when the auto-deployment fails.
                "                 b"
                This trap message is reported when the device name is changed.
                "                         �"
                This trap message is reported when the actual shelf type is inconsistent
                with the configuration in the database of device. In this case,
                the configuration data delivery fails.
                "                 o"
                This trap message is reported when the communication of the frame restored.
                "                 �"
                This trap message is reported when the communication of the frame interrupted,
                the services in the frame fail.
                "                 �"
                This trap message is reported when the actual shelf type is inconsistent
                with the configuration in the database of device. In this case,
                the configuration data delivery fails.
                "                 �"
                This trap message is reported when the dying-gasp of
                the extended frame occurs.
                "                 �"
                This trap message is reported when the dying-gasp of
                the extended frame recovers.
                "                 p"
                This trap message is reported when the frame ID exceeded the maximal number.
                "                 �"
                This trap message is reported when the anti-theft authentication of the extended frame fails.
                "                 �"
                This trap message is reported when the anti-theft authentication of the extended frame succeeds.
                "                 Y"
		This object indicates that when the data link goes Down, the device sends a trap.
		"                 W"
		This object indicates that when the data link goes Up, the device sends a trap.
		"                 Z"
		This object indicates that when the data channel is down, the device sends a trap.
		"                 Z"
		This object indicates that when the data channel goes Up, the device sends a trap.
		"                 w"
		This trap message is reported when the device temperature exceeds the level-1 high temperature alarm threshold.
		"                 �"
		This trap message is reported when the device temperature exceeds the threshold for level-1 high temperature alarm recovery.
		"                 w"
		This trap message is reported when the device temperature exceeds the level-2 high temperature alarm threshold.
		"                 �"
		This trap message is reported when the device temperature exceeds the threshold for level-2 high temperature alarm recovery.
		"                 w"
		This trap message is reported when the device temperature exceeds the level-3 high temperature alarm threshold.
		"                 �"
		This trap message is reported when the device temperature exceeds the threshold for level-3 high temperature alarm recovery.
		"                         �"
                This trap message is reported when the type of the board that the user configured is inconsistent
                with the type of the board that is actually inserted.
                "                 �"
                This trap message is reported when the communication of the board interrupted,
                the services in the board fail.
                "                 o"
                This trap message is reported when the communication of the board restored.
                "                 �"
                This trap message is reported when the board is successfully replaced by another board of the same type.
                "                 �"
                This trap message is reported when the temperature of active control board is too high,
                all the LAN switch ports of the service board will be powered off  except GIU board.
                "                "
                This trap message is reported when the temperature of active control board
                recovers to safe region from high temperature risk region,
                all the LAN switch ports of the service board will be powered on.
                "                 �"
                This trap message is reported when the current temperature of service board
                exceed the high temperature threshold.
                "                 �"
                This trap message is reported when the current temperature of service board
                recovers to the normal range from high temperature.
                "                 �"
                This trap message is reported when the current temperature of service board
                is exceed the low temperature threshold.
                "                 �"
                This trap message is reported when the current temperature of service board
                recovers to normal range from low temperature.
                "                 p"
                This trap message is reported when the power input of the local shelf fails.
                "                 s"
                This trap message is reported when the power input of the local shelf Recovers.
                "                 h"
                This trap message is reported when the state of the board is online.
                "                 p"
                This trap message is reported when the inner power of the board is abnormal.
                "                 l"
                This trap message is reported when the inner power of the board resumes.
                "                 �"
                This trap message is reported when the certain storage is hardware fault or
                software fault.
                "                 �"
                This trap message is reported when the certain storage is hardware fault or
                software fault recovers.
                "                 g"
                This trap message is reported when the board need automatic expand.
                "                 g"
                This trap message is reported when the board automatic expand fail.
                "                 p"
                This trap message is reported when the board automatic expand fail recovers.
                "                 v"
                This trap message is reported when the input voltage of a line cannot be detected.
                "                 k"
                This trap message is reported when detected power unit singals recover.
                "                 r"
                This trap message is reported when remote power supply input is under-voltage.
                "                 g"
                This trap message is reported when voltage in the subrack recovers.
                "                 }"
                This trap message is reported when the original board failed to replace with a new board.
                "                 p"
                This trap message is reported when the power input of the local shelf fails.
                "                 s"
                This trap message is reported when the power input of the local shelf Recovers.
                "                         �"
                This trap message is reported when the configured daughter board type
                or quantity is not the same as the actual type or quantity.
                "                 �"
                This trap message is reported when the combination of daughter board type
                in main control board is not supported.
                "                 �"
                This trap message is reported when the board is successfully
                replaced by another board of the same type.
                "                 �"
                This trap message is reported when the current temperature of service sub board
                exceed the high temperature threshold.
                "                 �"
                This trap message is reported when the current temperature of service sub board
                recovers to the normal range from high temperature.
                "                 r"
                This trap message is reported when the communication of the board interrupted.
                "                 o"
                This trap message is reported when the communication of the board restored.
                "                         �"
                This trap message is reported when the system resources usage exceeds the threshold
                The system resources include system CPU, system memory, and system messages.
                "                 �"
                This trap message is reported when the system resources usage recovers
                from the overload state to the normal state.
                "                         K"
                Frame administration result Trap report
                "                 J"
                Slot administration result Trap report
                "                 M"
                Subslot administration result Trap report
                "                 J"
                Port administration result Trap report
                "                         V"
                The location of Application board.
                                "                      "
                The index of this table is hwFrameIndex or hwSlotIndex.
                This is the App Application IP configuration table.
                This table is used to configure and query the IP configuration mode and IP address of an Application board.
                "                      "
                The index of this entry is hwFrameIndex or hwSlotIndex.
                This is the App Application IP configuration table.
                This table is used to configure and query the IP configuration mode and IP address of an Application board.
                "                       k"
                The management VLAN of Application board.
                Range: 1-4093
                "                       i"
                The type of Ip address.
                IPV4:1
                IPV6:2
                "                       K"
                The IP address of the Application board
                "                       c"
                The mask length of the ip address.
                Range: 0-128
                "                       H"
                The gateway of the Application board
                "                       A"
                RowStatus standard operation.
                "                           L"
                CLI user parameters configuration table.
                "                       S"
                CLI user parameters configuration table entity.
                "                       9"
                Name of the CLI user.
                "                       ="
                password of the CLI user.
                "                       ["
                Level of CLI user(1:common,2:operator,3:administrator).
                "                       J"
                The num of user can login in one time.
                "                       <"
                Description of CLI user.
                "                       �"
                Operation status of CLI user,the CLI user
                can be added,deleted and modified.
                "                       5"
                CLI client table.
                "                       S"
                CLI user parameters configuration table entity.
                "                       4"
                Client ID(1..5).
                "                       8"
                User name of client.
                "                       F"
                Type of client(1:serial,2:telnet).
                "                       ="
                The IP address of client.
                "                       9"
                Login time of Client.
                "                       R"
                admin status of client, can disconnect client.
                "                           ^"
                This object indicates the compatible SYSOID of the new NE.
                "                       _"
                This object indicates the compatible version of the new NE.
                "                       O"
                The compatible VRCB of new network element.
                "                       k"
                This object indicates the name of the compatible product of the new NE.
                "                               _"The compliance statement for SNMP entities which implement
                HUAWEI DEVICE MIB."                   "hwSystemPara."                 "hwFrameLinks."                 "hwDevTrapVbOids."                 "hwDevCompatibleTable."                 "hwDevCpuGroup."                 "hwDevMemGroup."                 "hwDevBufGroup."                 "hwDevGeneralTraps."                        "
                The switch of periodic handshake between the device and the NMS.
                The NMS uses the periodic handshake process to check whether
                the device is properly connected.
                Default: false
                Options:
                1.nooperation(0) -default shakes hands of the system
                2.true(1)        -The device periodically shakes hands with the NMS
                3.false(2)       -The device does not periodically shake hands with the NMS
                "                      t"
                The interval for sending a handshake packet, in unit of minute
                Note: If the interval for sending a handshake packet is too long,
                the NMS cannot detect the disconnection between the device and the NMS promptly.
                If the interval for sending a handshake packet is too short,
                the number of handshake packets that the NMS needs to handle increases,
                which adds burden to the NMS.
                You can set the time interval according to the actual situation.
                Default: 300
                Unit: Seconds
                "                      �"
                The NMS response to the periodic handshake packet from the device.
                Options:
                1.nooperation(-1)  -default state of the system
                2.registering(1)   -register is in processing
                3.success(2)       -The registration/handshake packet reported by the device is successfully handled
                4.failure(3)       -register failed
                5.timeout(4)       -register timeout
                "                           �"
                The index of this table is hwParaName.
                Customized parameter table.
                This table is no longer used.
                "                       �"
                The index of this entry is hwParaName.
                Customized parameter table.
                This table is no longer used.
                "                       m"
                The name of the parameter.
                This object is no longer used.
                "                       n"
                The value of the parameter.
                This object is no longer used.
                "                       �"
                The overwritten state of the parameter.
                This object is no longer used.
                Options:
                1.readWrite(1) - read and write
                2.readOnly(2)  - read only
                "                       p"
                RowStatus standard operation.
                This object is no longer used.
                "                           s"
                The index of this table is hwHostIpAddr.
                Ping auto-reset table.
                "                       s"
                The index of this entry is hwHostIpAddr.
                Ping auto-reset table.
                "                       H"
                The IP address of monitoring gateway
                "                       |"
                The number of the PING packets sent during every check,
                Default value: 5
                "                       �"
                The interval of sending PING packets.
                Default: 1
                Unit: second
                "                       �"
                Time-out time for the response of the PING packets.
                Unit: second
                Default: 2
                "                       �"
                Interval between the cyclic checks
                Default value: 600
                Unit: second
                "                       g"
                The threshold of checking failed.
                Default value: 10
                "                       <"
                Times of checking failed
                "                       �"
                Enable status of auto-reset.
                Options:
                1. enable(1)    - enable
                2. disable(2)   - disable
                "                       @"
                RowStatus standard operation
                "                           �"
                The index of this table is hwFrameIndex, hwSlotIndex or hwResType.
                System resource table.
                "                       �"
                The index of this entry is hwFrameIndex, hwSlotIndex or hwResType.
                System resource table.
                "                      "
                System resource type.
                Options:
                1. memory(1)      -indicates the memory resource
                2. messageUnits(2)-indicates the message resource
                3. cpu(3)         -indicates the CPU resource
                "                      ?"
                System resource overload threshold.
                The following two system resources support querying and
                Threshold setting: memory(1), cpu(3).
                Memory(1) and cpu(3) have limited value ranges.
                MessageUnits(2) cannot be set or queried.
                "                       >"
                System resource occupancy.
                "                       <"
                System memory occupancy.
                "                       9"
                System CPU occupancy.
                "                          _"
                Frequency of ring.
                Options:
                1. frequency16HZ(1) --The frequency of ring is 16HZ
                2. frequency25HZ(2) --The frequency of ring is 25HZ
                3. frequency50HZ(3) --The frequency of ring is 50HZ
                4. frequency20HZ(4) --The frequency of ring is 20HZ
                "                      �"
                AC amplitude of ring.
                Options:
                1. acamplitude74Vrms(1) --The AC amplitude of ring is 74Vrms
                2. acamplitude65Vrms(2) --The AC amplitude of ring is 65Vrms
                3. acamplitude50Vrms(3) --The AC amplitude of ring is 50Vrms
                4. acamplitude75Vrms(4) --The AC amplitude of ring is 75Vrms
                5. acamplitude70Vrms(5) --The AC amplitude of ring is 70Vrms
                "                       �"
                DC bias of ring.
                Options:
                1 --The DC bias voltage of ring 20V
                2 --The DC bias voltage of ring 30V.
                "                          �"
                The status of the board software package.
                Options:
                            1. deactivepacketfile(0)-indicates that the status of the board software package is not active.
                2. activepacketfile(1)  -indicates that active the packet file.
                Perform activepacketfile(1), and the system queries all the boards.
                If the software version of a board is inconsistent with the version in the package,
                the software of the board is upgraded to the version in the package.
                Certain boards can be upgraded by a reset operation
                "                          �"
                The request index for automatic upgrade.
                For automatic upgrade:
                The NMS loads the NE program of the latest version,
                the data or configuration file after upgrade, and the
                package of the board to the active control board of the NE system.
                The NE automatically loads the NE program,
                the data or configuration file after upgrade, and the package,
                    from the active control board to the standby control board in a synchronous manner.
                At this time, the NMS needs to deliver the command of upgrading and resetting
                to the active control board.
                When resetting the control board, you must specify hwUpgradeRequestID,
                hwUpgradeAdmin, hwUpgradeResetInterval.
                The operation is saved as a record entry.
                hwUpgradeRequestID is used to identify this operation. Therefore,
                its value cannot be the same as the operation request ID of another record entry.
                The hwUpgradeRequestID value of -1 indicates there is no upgrade going.
                "                      �"
                The command of software active.
                Options:
                1.nooperation(-1)             - default state of the system.
                2.uninterruptedAutoUpgrade(1) - uninterrupted auto upgrade.
                3.upgradeSchedule(2)          - reset system and acitve the software. If you need to active the software
                                                after a certain period,you also need to set hwUpgradeReserveTimeout or
                                                hwUpgradeReserveDateTime.
                4.undoUpgradeSchedule(3)      - negate the operation to active software.
                5.interruptedAutoUpgrade(4)   - interrupted auto upgrade.
                "                       �"
                The interval to force service boards to reset after the upgrade
                of mainboard has been completed.
                Unit:minute
                "                      ?"
                The target version of automatic upgrade.
                For example:  MA5600V800R003C02.
                Allow querying the target version only during automatic upgrade.
                The system configuration management platform is locked during automatic upgrade.
                When you are setting the target version of an object in an upgrade,
                you also need to set hwUpgradeRequestID, hwUpgradeAdmin, and hwUpgradeResetInterval.
                Automatic upgrade requires consistency between the program version
                saved in the standby area of the system and the set target version.
                If the target version is not specified, the system performs automatic
                upgrade according to the version saved in the standby area of the system.
                "                      �"
                Used to set the delay time of software active, in unit of seconds.
                When you set hwUpgradeReserveTimeout, you also need to set hwUpgradeAdmin to upgradeSchedule(2).
                It is invalid to set both hwUpgradeReserveTimeout and hwUpgradeReserveDateTime.
                The hwUpgradeReserveTimeout value of -1 indicates the delay time of software active is not set.
                "                      �"
                This object is used for setting the date and time of software active.
                When you set hwUpgradeReserveDateTime, you also need to set hwUpgradeAdmin to upgradeSchedule(2).
                It is invalid to set both hwUpgradeReserveDateTime and hwUpgradeReserveTimeout.
                The configured time is the local time, and time zone configuration is not supported.
                "                      �"
                This object is used for setting the emergence call protection function.
                If this object is set to enable, the system cannot be reset if the system is processing an emergence call.
                Options:
                1.disable(1)  -  Indicates that the emergence call is disabled.
                2.enable(2)   -  Indicates that the emergence call is enabled.
                "                      �"
                The capability of upgrade.
                Options:
                1.issu(0)            - in servers software upgrade.
                2.ossu(1)            - out of servers softer upgrade.
                From left to right, each bit indicates a capability of upgrade.
                If the bit is set to 1, it indicates support the capability.
                If the bit is set to 0, it indicates not support the capability.
                "                      %"
                The index of this table is hwFrameIndex, hwSlotIndex, hwPortIndex or hwOntIndex.
                OLT agent ONT INFO table.
                For hwFrameIndex, refer to hwFrameTable. For hwSlotIndex, refer to hwSlotTable. For hwPortIndex, refer to hwPortTable.
                "                      %"
                The index of this entry is hwFrameIndex, hwSlotIndex, hwPortIndex or hwOntIndex.
                OLT agent ONT INFO table.
                For hwFrameIndex, refer to hwFrameTable. For hwSlotIndex, refer to hwSlotTable. For hwPortIndex, refer to hwPortTable.
                "                      ""
                ONT ID.
                Parameters hwFrameIndex and hwSlotIndex are obligatory, hwOntIndex and hwPortIndex are optional
                (the setting -1 indicates that the parameter is optional).
                For example, to set the information of all ONTs connected to a specified port returned,
                you can set hwOntIndex to -1; to set the information about the status of all ONTs
                connected to all ports of a specified slot returned, you can set hwPortIndex and hwOntIndex to -1
                "                      "
                ONT  state.
                data structure:
                --------------------------------------------------------------------------------------------------
                |  m   |  ONT state combination   |  ONT state combination   |        |  ONT state combination   |
                | (2B) |   in Port x              |  in Port y               | .....  |   in Port n              |
                --------------------------------------------------------------------------------------------------
                /                            \
                /                              \
                /                                \
                -----------------------------------
                |  x  | ONT m-1 |       | ONT 0   |
                |(2B) |state(1b)|...... |state(1b)|
                -----------------------------------
                state enum:
                normal(0):     ONT state is normal.
                fault(1):      ONT state is fault.
                "                      
"
                ONT type.
                data structure: ONT IP + ONT type
                -------------------------------------------------------------------
                |  ONT NUM |  ONT IP  | ONT type |          |  ONT IP  | ONT type |
                |   (2B)   |   (4B)   |  (16B)   | ......   |   (4B)   |  (16B)   |
                -------------------------------------------------------------------

                Because of the restrictions on the SNMP packet, the packet of up to 8 KB can be transmitted.
                When the size of the packet to be reported exceeds 8 KB, the packet must be compressed.
                The compress format of the packet is shown in the following figure.
                -----------------------------------------------------------------------
                | DATA-LENGTH | FLAG  |  TLV-NUM  |  TYPE  |  LEN  |  CRC  |          |
                ------------------------------------------------------------          |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                -----------------------------------------------------------------------
                In the compressed packet:
                DATA-LENGTH occupies four bytes to store the whole length of the file, including the header structure.
                FLAG occupies two bytes to store the flag, which indicates the format of the file contents.
                In this compressed packet, the flag indicates that the format of the file contents is compressed.
                0xFEFE indicates compress and 0 indicates non-compress.
                TLV-NUM indicates the number of TLVs that the file carries. In this compressed packet, TLV-NUM is 1,
                indicating the CRC value of the compressed content. The following continuous bytes TYPE, LEN, and CRC
                are data in the TLV format. Each of TYPE, LEN, and CRC occupies two bytes. In this compressed packet,
                TYPE, LEN, and CRC record the CRC value of the compressed content. TYPE indicates the CRC type.
                LEN indicates the number of bytes that the CRC occupies and the actual value is 2.
                CRC stores the CRC value of the compressed content.
                The actual returned content is compressed in the .zip format and stored in the final field of compressed
                content.
                "                      �"
                ONT version.
                data structure: ONT IP + ONT version
                ------------------------------------------------------------------------
                |  ONT NUM |  ONT IP  | ONT version |         |  ONT IP  | ONT version |
                |   (2B)   |   (4B)   |  (32B)      | ......  |   (4B)   |  (32B)      |
                ------------------------------------------------------------------------
                "                          �"
                Whether the system configuration is locked.
                Options:
                1. locked(1)   -the system configuration is locked
                2. unlocked(2) -the system configuration is not locked
                The user who locks the system configuration can unlock it.
                Super users and the network administrator can forcibly unlock
                the system configuration. Other users cannot unlock it.
                "                      m"
                The interval for automatic unlock of the system configuration, in unit of minute.
                The system re-counts the time in these two cases: a user successfully locks the
                system configuration and the user who locks system configuration sets hwConfigUnlockInterval.
                If a user unlocks the system configuration within the automatic unlock interval,
                automatic unlock is not necessary. If the system configuration keeps locked,
                after the interval elapses, the system automatically unlocks it.
                Default: 5
                "                      ~"
                The type of user who locks system configuration.
                Options:
                1. nooperation(-1) -default type of the system
                2. nms(1)          -the user who access through the NMS
                3. series(2)       -the user who access through the serial interface
                4. telnet(3)       -the user who access through telnet
                5. web(4)          -the user who access through the web user interface
                6. xml(5)          -the user who access through the XML interface
                7. ssh(6)          -the user who access through SSH 
                "                       c"
                The user name of the user who locks the configuration platform.
                "                       "
                The IP address of the user who locks the configuration platform.
                If a user who accesses through the serial port locks the configuration platform,
                the IP address is default value.	
               DEFVAL { 255.255.255.255 }
               "                      "
                The operation to lock or unlock config.
                Options:
                1. lock(1)   -before data configuration, use lock(1) to lock the configuration platform,
                              preventing other users from modifying or deleting the configuration data just completed
                2. unlock(2) -when the data configuration is complete, use unlock(2) to unlock the configuration platform.
                              After that, other users can configure the system data
                If a user performs lock(1) and does not perform unlock(2) after data configuration,
                the system automatically unlocks after a certain period.
                For the interval for automatic unlock, refer to hwConfigUnlockInterval.
                "                           "
                The switch of Intelligent-phone mode: disable or enable.
                DEFVAL { disable }
                Options:
                1. disable(1) -if it is set to disable(1), the settings of hwAttenuation and hwDetectionThreshold
                               are not applied
                2.enable(2)   -if it is set to enable(2), the settings of hwAttenuation and hwDetectionThreshold
                               take effect in the intelligent pay phone service (IPP)
                "                       �"
                The value of Intelligent-signal attenuation:  0 dBm to 14 dBm.
                From 0 to 14 independently indicates form 0 dBm to 14 dBm.
                Default: 5 dBm.
                DEFVAL { 5 }
                "                       �"
                The threshold of intelligent-signal detection: 0 dBm to 28 dBm.
                From 0 to 28 independently indicates form 0 dBm to -28 dBm.
                Default: -15 dBm.
                DEFVAL { 15 }
                "                       �"
                The index of this table is hwFrameIndex or hwSlotIndex.
                PstnBoard config table.
                "                       �"
                The index of this entry is hwFrameIndex or hwSlotIndex.
                PstnBoard config table.
                "                      "
                Indicates the power-mode of the board.
                Options:
                1. generalMode(0)  -Indicate that the board uses normal power supply
                2. highMode(1)     -Indicate that the board uses high-voltage power supply
                "                              8"
                The status of the function of managing ONU through the NAT
                proxy for OLT: disable or enable.
                Options:
                1.disable(1)    - the state of the function is disabled
                2.enable(2)     - the state of the function is enabled
                "                       �"
                The VLANID of the Management Channel which ONU belongs to.
                -1 (default value) indicates this value is not configured.
                "                       c"
                The public IP Address of ONU under the Agent Management of OLT.
                "                       N"
                The Priority of the SNMP Message from ONU.
                "                       Q"
                The start IP Address of ONU Inner Ip Segment.
                "                       ?"
                The number of ONU Inner Ip.
                "                       �"
                The index of this table is hwFrameIndex, hwSlotIndex, hwPortIndex or hwOntIndex.
                The UDP port distribution table of ONU.
                "                       �"
                The index of this entry is hwFrameIndex, hwSlotIndex, hwPortIndex or hwOntIndex.
                The UDP port distribution table of ONU.
                "                       i"
                The start UDP Port Number of ONU which is managed by OLT through NAT.
                "                      i"
                The service migration object table of Port or ONT.
                The objects in hwServiceMigrationTable are used for migrating service operations
                associated with Port or ONT. The operations include adding and deleting a object.
                The indexes of this table are IfIndex, hwServiceMigrationOntId.
                "                      i"
                The service migration object table of Port or ONT.
                The objects in hwServiceMigrationTable are used for migrating service operations
                associated with Port or ONT. The operations include adding and deleting a object.
                The indexes of this entry are IfIndex, hwServiceMigrationOntId.
                "                       �"
                Ont ID.
                When hwOntId  = 65535, the operating object is Port.
                When hwOntId != 65535, the operating object is ONT.
                "                      ."
                Indicates the row status, used for creating or deleting
                a migration object. createAndGo(4) and destroy(6) are supported.
                During the query operation, active(1) is always returned for this leaf.
                Options:
                1. active(1)      -when this leaf is queried, the value is fixed to active(1).
                2. createAndGo(4) -create a new instance of a conceptual row.
                3. destroy(6)     -delete the instances associated with an existing conceptual row.
                "                      a"
                The service configuration object table of Port or ONT.
                The objects in hwServiceCfgMngtTable are used for configuration operations
                associated with port or ONT. The operations include adding and deleting a object.
                The indexes of this table are IfIndex, hwServiceCfgOntId.
                "                      a"
                The service configuration object table of Port or ONT.
                The objects in hwServiceCfgMngtTable are used for configuration operations
                associated with port or ONT. The operations include adding and deleting a object.
                The indexes of this entry are IfIndex, hwServiceCfgOntId.
                "                       �"
                Ont ID.
                When hwOntId  = 65535, the operating object is Port.
                When hwOntId != 65535, the operating object is ONT.
                "                      D"
                The service configuration object status.
                Options:
                1. srvCfgDeleting(1)           -The operation is in deleting state.
                2. srvCfgDeletionComplete(2)   -The operation success.
                3. srvCfgDeletionFailed(3)     -The operation fail.
                "                      J"
                Indicates the row status, used for creating or deleting
                a service configuration object. createAndGo(4) and destroy(6)
                are supported. During the query operation, active(1) is
                always returned for this leaf.
                Options:
                1. active(1)      -when this leaf is queried, the value is fixed to active(1).
                2. createAndGo(4) -create a new instance of a conceptual row.
                3. destroy(6)     -delete the instances associated with an existing conceptual row.
                "                      ("
                Description of the device dynamic capability. The capability value
                is stored in 16 byte(128 bit), each bit denotes one capability,
                1 equals support, 0 equals not.
                The index of this table is hwCapabilityFeatureID.
                "                      ("
                Description of the device dynamic capability. The capability value
                is stored in 16 byte(128 bit), each bit denotes one capability,
                1 equals support, 0 equals not.
                The index of this table is hwCapabilityFeatureID.
                "                       �"
                The id of device feature.
                Options:
                1.system(1)   - feature of system
                "                      �"
                The vaule of device capability.

                When hwCapabilityFeatureID equals system(1), bit from left to right represents:
                0.AG capability
                1.BFD capability

                The value of the bit is 0 means the capability is not supported.
                The value of the bit is 1 means the capability is supported.
                "                      �"
                The mask of device capability.

                When hwCapabilityFeatureID equals system(1), bit from left to right represents:
                0.AG capability
                1.BFD capability

                The value of the bit is 0 means the 'capability value' is invalid.
                The value of the bit is 1 means the 'capability value' is valid.
                 "                          �"
                This node supports the SET operation:
                 If the pre-deployment on the NMS fails, the RUN indicator turns yellow by set ledOn(1). A half
                 an hour later, the yellow indicator automatically turns off.  
                 If the pre-deployment on the NMS is successful, the RUN indicator must be set ledOff(2).
	
                 This node supports the GET operation:
                 The system returns null(3) when the GET operation is performed.
	                
                 1,ledOn(1)		--Network pre-deployment fail.
                 2,ledOff(2)		--Network pre-deployment success.
                 3,null(3)		--The return value of GET operation.
                "                          i"
                Configuring the bandwidth mode of the device.
                Options:
                1.bandwidth40G(1)   - 40G
                2.bandwidth80G(2)   - 80G
                3.bandwidth160G(3)  - 160G
                4.bandwidth50G(4)   - 50G
                5.bandwidth100G(5)  - 100G
                6.bandwidth200G(6)  - 200G
                "                              8" 
                The object specifies the switch state of SNMP probe monitor. 
                Options:
                enable(1)  -indicates the SNMP probe monitor switch is on.
                disable(2) -indicates the SNMP probe monitor switch is off.
                Default: enable(1).  
                "                       �"
                The object specifies the active-threshold of SNMP probe monitor.
                From 3 minutes to 60 minutes.
                Default: 15 minutes.
                "                       �"
                The SNMP probe monitor table, which supports the functions of querying the information 
                of SNMP probe monitor. The index of this table is hwDevSnmpProbeHostIndex.
                "                       �"
                The SNMP probe monitor table, which supports the functions of querying the information 
                of SNMP probe monitor. The index of this table is hwDevSnmpProbeHostIndex.
                "                       Y"
                The object specifies the index of SNMP probe monitor.
                "                       �"
                The object specifies the IP address type of SNMP probe monitor:
                Options:
                ipv4(1)  -indicates an IPv4 address
                ipv6(2)  -indicates an IPv6 address
                "                       ^"
                The object specifies the IP address of SNMP probe monitor.
                "                       e"
                The object specifies the total probe count of SNMP probe monitor.
                "                       f"
                The object specifies the initial probe time of SNMP probe monitor.
                "                       e"
                The object specifies the recent probe time of SNMP probe monitor.
                "                       q"
                The object specifies the minimum interval of SNMP probe monitor, unit second.
                "                       p"
                The object specifies the maxmum interval of SNMP probe monitor, unit second.
                "                       q"
                The object specifies the average interval of SNMP probe monitor, unit second.
                "                       �"
                The abnormal record table of SNMP probe monitor, which supports the functions of querying 
                the abnormal record of SNMP probe monitor. The index of this table is hwDevSnmpProbeRecordIndex.
                "                       �"
                The abnormal record table of SNMP probe monitor, which supports the functions of querying 
                the abnormal record of SNMP probe monitor. The index of this table is hwDevSnmpProbeRecordIndex.
                "                       V"
                The object specifies the index of abnormal record.
                "                       �"
                The object specifies the IP address type of abnormal record:
                Options:
                ipv4(1)  -indicates an IPv4 address 
                ipv6(2)  -indicates an IPv6 address
                "                       ["
                The object specifies the IP address of abnormal record.
                "                       `"
                The object specifies the last probe time of abnormal record.
                "                       b"
                The object specifies the total probe count of abnormal record.
                "                       n"
                The object specifies the minimum interval of abnormal record, unit second.
                "                       m"
                The object specifies the maxmum interval of abnormal record, unit second.
                "                       r"
                The object specifies the average interval of the abnormal record, unit second.
                "                       �"
                This table describes parameters that need to be delivered to the OLT and ONT during remote access to the ONT through the web page.
                "                       o"
                The index of this entry is hwFrameIndex,hwSlotIndex,hwPortIndex,hwOntIndex.
                "                       �"
                Indicates the VLAN ID of the ONT. If this parameter is not specified, 
                the system automatically obtains an unoccupied VLAN ID and uses it as the default VLAN ID.
                "                       �"
                Indicates the IP address of the ONT. 
                If this parameter is not specified, the system selects an unoccupied IP address and uses it as the default IP address.
                "                       �"
                 Indicates the web server port of the ONT. If this parameter is not specified, port 7017 is used by default.
                "                       �"
                Indicates the protocol type of the web server of the ONT. If this parameter is not specified, HTTPS protocol is used by default.
                "                       �"
                 Indicates the user name used for a temporary user to log in to the web server of the ONT. 
                 If this parameter is not specified, the existing user name and password are used for login.
                "                       �"
                 Indicates the password used for a temporary user to log in to the web server of the ONT, 
                 which can consist of numbers, uppercase letters, lowercase letters, and special characters.
                "                       �"
                 Indicates the port ID of the TCP proxy during remote access to the ONT from the OLT through the web page, which is port 8024 fixedly.
                "                       �"
                 Indicates the ONT login duration of a temporary user (unit: minute). 
                 If this parameter is not specified, the login duration is 30 minutes by default. 
                "                       r"
                 Indicates the enabling status of the TCP proxy. The initial state is disable.
                "                      �"
                Indicates the row status, used for creating or deleting
                a service configuration object. createAndGo(4) and destroy(6)
                are supported. During the query operation, active(1) is
                always returned for this leaf.
                Options:
                2. createAndGo(4) -create a new instance of a conceptual row.
                3. destroy(6)     -delete the instances associated with an existing conceptual row.
                "                      