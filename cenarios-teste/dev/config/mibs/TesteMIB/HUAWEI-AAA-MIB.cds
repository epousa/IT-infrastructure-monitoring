�-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- DESCRIPTION:  HUAWEI-AAA-MIB
-- Reference:  
-- Version: V4.07
-- History:
--         v3.04
--         modified by huangjun 2009-12-08
--         modified by z57927   2010-10-18 
--         modified by w00127306   2010-10-18 
--         modified by n00183914  2011-11-10
--         modified by g00141720  2012-12-18
--         modified by l00207906  2013-4-17
--         modified by w00221551  2013-7-19
--         modified by c67804  2013-10-15
--         modified by h00250972 2013-11-28
--         modified by l00163539 2013-12-17    
--         modified by l00181184 2014-03-06
--         modified by h00250972 2014-03-18
--         modified by w00193520 2014-03-24
--         modified by m00181544 2014-04-17
--         modified by z00253751 2014-06-17
--         modified by n00249897 2014-07-08
--         modified by j00221821 2014-08-06
--         modified by j00139153 2014-08-12
--         modified by m00181544 2014-08-20
--         modified by q00282961 2014-08-29
--         modified by yWX222555 2014-09-03
--         modified by w00102097 2014-09-06
--         modified by h63155    2014-09-21
--         modified by g00304944  2014-12-26
--         modified by w00213468  2014-12-27
--         modified by w00280908 2015-1-17
--         modified by w00289258 2015-01-23
--         modified by q00278806 2015-03-20
--         modified by d00284225 2015-04-23
--         modified by l00199557 2015-07-07
--         modified by z00242837 2015-07-16
--         modified by z00242837 2015-07-28
--         modified by d00289266 2015-07-28
--         modified by z00297089 2015-07-29
--         modified by w00215195 2015-07-29
--         modified by l00347324 2015-07-31
--         modified by s00292246 2015-08-08
--         modified by z00242837 2015-08-26
--         modified by t00305052 2015-09-11
--         modified by w00196787 2015-12-01
--         modified by w00280908 2015-12-31
--         modified by j00333366 2016-01-26
--         modified by d00309882 2016-02-16
--         modified by g00324876 2016-03-14
--         modified by l00347324  2016-03-15
--         modified by l00347174  2016-03-21
--         modified by c00350813 2016-03-28
--         modified by  l00351244 2016-04-05
--         modified by  l00347324 2016-04-08
--         modified by  d00289266 2016-04-19
--         modified by  h00357305 2016-05-14
--         modified by  h00350813 2016-05-18
--         modified by  t00298981 2016-06-17
--         modified by  l00368985 2016-06-22
--         modified by  z00356298 2016-08-04
--         modified by  z00347321 2016-08-12
--         modified by  zwx349005 2016-08-26
--         modified by  l00368985 2016-09-19
--         modified by  zwx349005 2016-09-27
--         modified by  d00289266 2016-09-27
--         modified by  x00342537 2017-01-12
--         modified by  y00377742 2017-01-16
--         modified by  h00317426 2017-02-13
--         modified by  zwx356683 2017-03-23
--         modified by  j00308710 2017-04-27
--         modified by  z00299087 2017-05-03
--         modified by  l00347324 2017-05-23
--         modified by  z00370669 2017-05-31
--         modified by  y00356406 2017-06-21
--         modified by  d00289266 2017-06-29
--         modified by  s00292246 2017-07-17
--         modified by  l00368985 2017-07-20
--         modified by  l00368985 2017-08-08
--         modified by  z00370669 2017-08-26
--         modified by  l00413857 2017-08-31
--         modified by  l00347324 2017-09-01
--         modified by  f00268918 2017-09-26
--         modified by  c00396233 2017-09-28
--         modified by  l00347324 2017-12-05
--         modified by  w00196787 2017-12-13
--         modified by  w00347324 2017-12-25
--         modified by  lwx382209 2018-01-22
--         modified by  x00403698 2018-01-26
--         modified by  lwx382209 2018-01-29
--         modified by  l00430165 2018-03-02
--         modified by  z00234140 2018-04-12
--         modified by  l00316515 2018-05-15
--         modified by  l00369723 2018-05-21
--         modified by  s00292246 2018-05-25
--         modified by  z00348688 2018-05-30
--         modified by  h00421701 2018-06-11
--         modified by  l00316515 2018-07-12
--         modified by  l00316515 2018-07-20
--         modified by  wx307392 2018-07-25
-- =================================================================
                                                                                                 7"extend the scope of hwAuthenMethod and hwAuthorMethod" �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China
                 Website: http://www.huawei.com
                 Email: support@huawei.com" "201807251508Z" "201807201508Z" "201807121508Z" "201806211508Z" "201806111508Z" "201806081508Z" "201805301508Z" "201805251508Z" "201805211508Z" "201805151600Z" "201804271600Z" "201804271200Z" "201804221200Z" "201804140200Z" "201804120200Z" "201804010200Z" "201803071200Z" "201803051200Z" "201803021200Z" "201802091224Z" "201802062058Z" "201802061858Z" "201802021636Z" "201801291111Z" "201801261111Z" "201801251111Z" "201801221111Z" "201712251111Z" "201712131111Z" "201712121111Z" "201712071730Z" "201712051705Z" "201709281351Z" "201709261045Z" "201709011705Z" "201708311707Z" "201708261745Z" "201708081100Z" "201707201100Z" "201707171706Z" "201706291416Z" "201705311505Z" "201705231705Z" "201705031047Z" "201704271157Z" "201703231047Z" "201702131843Z" "201701161705Z" "201701121705Z" "201609271140Z" "201609270940Z" "201609191716Z" "201608261030Z" "201608121705Z" "201607141152Z" "201607141152Z" "201607061741Z" "201606221704Z" "201606171051Z" "201605181050Z" "201605142145Z" "201604192145Z" "201604081442Z" "201604051650Z" "201603280950Z" "201603211539Z" "201603170259Z" "201603151018Z" "201603141018Z" "201602161018Z" "201601261630Z" "201512310950Z" "201512011418Z" "201509111138Z" "201508261605Z" "201508080935Z" "201507310917Z" "201507282100Z" "201507282055Z" "201507281641Z" "201507161711Z" "201507072036Z" "201506101250Z" "201504231655Z" "201504171250Z" "201503260935Z" "201503201314Z" "201503101250Z" "201501231025Z" "201412311544Z" "201412271544Z" "201412261617Z" "201412261617Z" "201412261617Z" "201409211544Z" "201409061617Z" "201409031050Z" "201408271544Z" "201408271544Z" "201408201050Z" "201408121725Z" "201408061050Z" "201407141050Z" "201407081544Z" "201404171027Z" "201404171026Z" "201403241051Z" "201403181051Z" "201403061050Z" "201312171030Z" "201312131725Z" "201311281651Z" "201310151725Z" "201309141518Z" "201308082012Z" "201307191800Z" "201307041709Z" "201306271719Z" "201304170919Z" "201304032222Z" "201303151111Z" "Modify hwDomainAccessLimitNum" "Modify hwAAAAccessTable" +"Modify hwAccessTable,add hwAAAAccessTable" )"Add hwAuthenMethodNew hwAuthorMethodNew" d"Modify hwDot1xAccessProfileReauthenticationTimeout,hwMACAuthenAccessProfileReauthenticationTimeout" �"Add hwUserNameIndexUsage,hwAAAInstanceId,hwUserNameIndexAllocAlarm,hwUserNameIndexAllocAlarmResume,hwCUUserNameIndexAllocAlarm,hwCUUserNameIndexAllocAlarmResume" "Add hwTotalPPPFailNum" "Add hwCUUserOnlineFailAlarm" X"Add hwUserAccessInterface,hwUserAccessIndex,hwUserAccessMAC,hwAAASlaveTrafficUserAlarm" �"Modify hwOnlineUserNumLowerLimitCpThreshold,hwOnlineUserNumLowerLimitCpInstanceId,hwOnlineUserNumUpperLimitCpThreshold,hwOnlineUserNumUpperLimitCpInstanceId" ,"Modify userAuthenProfileRoamAccountingMode" U"Del userAuthenProfileRoamAccountingEnable,userAuthenProfileUpdateIpAccountingEnable" y"Add userAuthenProfileRoamAccountingEnable,userAuthenProfileUpdateIpAccountingEnable,userAuthenProfileRoamAccountingMode" I"Add hwInterfaceIfIndex hwInterfaceIfName hwIpStaticUserMixedInsertAlarm"p"Add hwCUIPLowerlimitAlarm,
                            hwCUIPLowerlimitWarningResume,hwCUIPv6AddressLowerlimitAlarm,hwCUIPv6AddressLowerlimitResume,hwCUIPv6NDRAPrefixLowerlimitAlarm,
                            hwCUIPv6NDRAPrefixLowerlimitResume,hwCUIPv6PDPrefixLowerlimitAlarm,hwCUIPv6PDPrefixLowerlimitResume,hwCUUserDelegationPrefixAllocAlarm,
                            hwCUUserDelegationPrefixAllocAlarmResume,hwCUUserIPAllocAlarm,hwCUUserIPAllocAlarmResume,hwCUUserIPv6AddressAllocAlarm,
                            hwCUUserIPv6AddressAllocAlarmResume,hwCUUserNDRAPrefixAllocAlarm,hwCUUserNDRAPrefixAllocAlarmResume" ""Modify hwLocalUserBlockTimestamp" 0"Modify hwAAANoBackupInterfaceAlarm Description" C"Add userAuthenProfileLdapServerName,userAuthenProfileAdServerName" ""Add hwMACAuthenProfileAuthMethod" �"Add hwInterfaceName,hwInterfaceUserNum,hwInterfaceUserNumThreshold,hwBackupProtectionType,hwBackupProtectionAlarmLevel,hwAAANoBackupInterfaceAlarm" N"Modified userAuthenProfileForcePushUrlTemplate,userAuthenProfileForcePushUrl"|"Modified  hwAAAOnlineSessoinUpperLimitCpAlarm,hwAAAOnlineSessoinUpperLimitCpResume,,hwAAAOnlineSessoinLowerLimitCpAlarm,hwAAAOnlineSessoinLowerLimitCpResume,hwOnlineUserNumLowerLimitCpAlarm,hwOnlineUserNumLowerLimitCpResume,hwOnlineUserNumUpperLimitCpAlarm,
             hwOnlineUserNumUpperLimitCpResume, hwRemoteDownloadAclThresholdCpAlarm,hwRemoteDownloadAclThresholdCpResume"w"Add  hwAAAOnlineSessoinUpperLimitCpAlarm,hwAAAOnlineSessoinUpperLimitCpResume,,hwAAAOnlineSessoinLowerLimitCpAlarm,hwAAAOnlineSessoinLowerLimitCpResume,hwOnlineUserNumLowerLimitCpAlarm,hwOnlineUserNumLowerLimitCpResume,hwOnlineUserNumUpperLimitCpAlarm,
             hwOnlineUserNumUpperLimitCpResume, hwRemoteDownloadAclThresholdCpAlarm,hwRemoteDownloadAclThresholdCpResume" U"Modified  hwDomainStatEntry,hwAAAStatEntry and added hwCUAAAStatTable,hwBRASLicense" $"Modified  translation information." C"Modify hwAccessCARDnPBS, hwAccessCARUpPBS, hwAccessSessionTimeout" "Modify HwSlotConnectNumEntry" #"Modify hwServiceSchemeRedirectACL" �"Add userAuthenProfileForcePushUrl,userAuthenProfileForcePushUrlTemplate,userAuthenProfileAccountingOfRoam,userAuthenProfileAccountingOfUpdateIP,userAuthenProfileAccountingOfUpdateInfo,userAuthenProfileNoIPCheck" �"Add hwAcl6Id,hwAccessDeviceType,hwOfflineRecordAPID,hwOfflineRecordAPMAC,hwOfflineRecordSSID,hwOfflineRecordASID,hwOfflineRecordASMAC,hwOfflineRecordASIfname,hwLocalUserBlockTimestamp" �"Add hwCUAAAAccessUserResourceOrCpuAlarm, hwCUAAAAccessUserResourceOrCpuResume, hwCUAAASlotIPv6AddressThresholdAlarm, hwCUAAASlotIPv6AddressThresholdResume" 7"extend the scope of hwAuthenMethod and hwAuthorMethod" 0"ModifyhwMACAuthenAccessProfileMACAddressFormat" W"ModifyhwCUUserMaxNum,hwCUUserSlotMaxNum,hwCUUserMaxNumResume,hwCUUserSlotMaxNumResume" "Add hwLocalUserRole" T"Modify the of hwAAAAccessUserResourceOrCpuAlarm,hwAAAAccessUserResourceOrCpuResume" W"ModifyhwCUUserMaxNum,hwCUUserSlotMaxNum,hwCUUserMaxNumResume,hwCUUserSlotMaxNumResume" A"Modify hwDomainIdleCutFlow's Size list ,from 768000 to 76800000" �"Add hwAAAUserGroupUserStatTable, hwAAAUserGroupName,hwAAAUserGroupTotalUsersNum; Modify hwDomainIdleCutFlow's Size list ,from 768000 to 76800000"�"Modify hwAuthenSchemeTable, hwAcctSchemeTable, hwDomainStatTable, hwAccessTable, hwAccessExtTable, hwIPAccessTable, hwMACAccessTable, hwSlotConnectNumTable, hwSlotCardConnectNumTable, hwOfflineReasonStatTable, hwVpnAccessUserStatTable, hwInterfaceAccessUserStatTable, hwDomainAccessUserStatTable, hwSlotAccessUserStatTable, hwAAAOnlineFailRecordTable, hwDhcpOpt121RouteTable, hwAAAPwifSlotConnectNumTable, hwAAAPwifSlotCardConnectNumTable, hwAAAPwifSlotAccessUserStatTable, hwAAAPwifAccessTable" 4"Add userAuthenProfileWebuserAuthenProfileIpTrigger" b"Add hwCUUserSlot,hwCUUserMaxNum,hwCUUserSlotMaxNum,hwCUUserMaxNumResume,hwCUUserSlotMaxNumResume" "Add hwLocalUserExpireHour" 1"Add userAuthenProfileAccoutingStartAckPermitArp" 7"Modify hwSlotConnectNumSlot, hwSlotCardConnectNumSlot" ("Add userAuthenProfileIpAddrInAcctStart" $"Modify the size of hwOfflineReason" L"Add hwPortalAccessProfileWebProxyEnable, hwPortalAccessProfileWebProxyPort" E"Add hwOnlineFailNum,hwOnlineSuccessPercentage,hwUserOnlineFailAlarm" "Add hwhttpdirectory" "Add hwLocalUserIsExpired" #"hwOfflineRecordIPv6PDPrefixLength"\"Add hwAccessQinQVLANID,hwAccessOption82CircuitID,hwAccessOption82RemoteID,hwAccessSessionTimeout,hwAccessISPVLAN,hwAccessISPInterface,hwAccessUserNumberTable,hwAccessUserNumberEntry,hwAccessUserNumberDot1x,hwAccessUserNumberMAC,hwAccessUserNumberPortal,hwAccessUserNumberPPP,hwAccessUserNumberNone,hwAccessUserNumberStatic,hwAccessUserNumberAdmin"  "Add hwServiceSchemeRedirectACL" '"hwAAAAdminUserAuthenWithoutDomainName" K"Add hwTotalAuthReqNumPortal, hwTotalAuthReqNumMac, hwTotalAuthReqNumDot1x" '"hwAAAAdminUserAuthenWithoutDomainName""Add hwTotalFamilyUserByUsernameOnlineNum hwOfflineRecordStackTypeFlag hwOfflineRecordAccessPVC hwOfflineRecordIPv6NDRAPrefix hwOfflineRecordIPv6Address hwOfflineRecordIPv6PDPrefix hwOfflineRecordUserAuthenState hwOfflineRecordUserAcctState hwOfflineRecordUserAuthorState" 0"Add hwUserMaxNumResume, hwUserSlotMaxNumResume" 2"Add hwPortalAccessProfileLocalServerAnonymousUrl" /"Add hwAAAUserPwdWillExpirehwAAAUserPwdExpired" "Add hwAccessBakeState" "Add hwAccessAuthorizetype" "Modify hwAccessIndex" 1"Modify hwMACAuthenAccessProfileMACAddressFormat" "Add hwReAuthenUserTable" "Modify hwAccessAuthtype" "Modify hwAccessIndex" >"Modify hwAccessIPv6OtherFlag hwAccessIPv6ManagedAddressFlag " q"Modify hwSlotConnectNumSlot hwSlotCardConnectNumSlot hwSlotAccessUserStatSlot to be compatible with device X1X2" y"Add hwAAAPwifSlotConnectNumTable,hwAAAPwifSlotCardConnectNumTable,hwAAAPwifSlotAccessUserStatTable,hwAAAPwifAccessTable" +"Add hwAAAAdminUserAuthenWithoutDomainName" m"ModifyServiceSchemeName,UserGroupName,PortalServerName,PortalBackupServerName in hwPortalAccessProfileTable"�"Add hwAAASessionGroupUpperLimitThreshold, hwAAASessionGroupUpperLimitResume, hwAAASessionGroupLowerLimitThreshold, hwAAASessionGroupLowerLimitAlarm, hwAAASessionGroupLowerLimitResume, hwAAASessionUpperLimitThreshold, hwAAAOnlineSessoinUpperLimitAlarm, hwAAAOnlineSessoinUpperLimitResume, hwAAASessionLowerLimitThreshold, hwAAAOnlineSessoinLowerLimitAlarm, hwAAAOnlineSessoinLowerLimitResume, hwAAASlotOnlineUserNumAlarm,hwAAASlotOnlineUserNumResume" �"Add userAuthenProfileAuthenFailAuthorResponseSuccess in userAuthenProfileEntry; Modify userAuthenProfilePreAuthenUserGroupName,userAuthenProfileAuthenFailAuthorUserGroupName,userAuthenProfileAuthenServerDownUserGroupName in userAuthenProfileEntry" �"Add hwAAAChasisIPv6AddressThreshold,hwAAASlotIPv6AddressThreshold,hwAAAChasisIPv6AddressThresholdAlarm,hwAAAChasisIPv6AddressThresholdResume,hwAAASlotIPv6AddressThresholdAlarm and hwAAASlotIPv6AddressThresholdResume" 4"ModifyhwAccessSSID,hwAccessDomain,hwAccessUserName" �"Modify hwDot1xAccessProfileEthTrunkHandShakePeriod,userAuthenProfileAuthenFailAgingTime,userAuthenProfilePreAuthenAgingTime,userAuthenProfileAuthenFailReAuthenTimer" �"Modify hwUserGroupCarCir,hwUserGroupCarPir,hwUserGroupCarCbs,hwUserGroupCarPbs,hwUserGroupCarInBoundCir,hwUserGroupCarInBoundPir,hwUserGroupCarInBoundCbs,hwUserGroupCarInBoundPbs in hwUserGroupEntry" P"Modify hwMACAuthenAccessProfileTriggerPktType in HwMACAuthenAccessProfileEntry" 6"Modify hwLocalUserAccessLimitNum in hwLocalUserEntry" �"Add hwMacMovedQuietUserSpec, hwMacMovedUserPercentage, hwLowerMacMovedUserPercentage, hwUpperMacMovedUserPercentage, hwMacMovedQuietMaxUserAlarm and hwMacMovedQuietUserClearAlarm " V"ModifyhwAccessSSID hwAccessDomain hwAccessUserName hwPortalAccessProfileDetectPeriod" P"AdduserAuthenticationFreeRuleExtTable , modify userAuthenticationFreeRuleTable" J"AddhwAAAInboundVPNAccessUserStatTable hwAAAInboundVPNAccessUserStatTable" �"Add userAuthenProfileDefaultDomain, userAuthenProfileForceDomain, userAuthenProfileDomainNameDelimiter, userAuthenProfileDomainNameLocation, userAuthenProfileDomainNameParseDirection and userAuthenProfilePermitDomain in userAuthenProfileEntry" ^"Modify hwLocalUserPasswordLifetimeMin and hwLocalUserPasswordLifetimeMax in hwLocalUserEntry" ?"AddhwAAADomainInboundQoSProfile hwAAADomainOutboundQoSProfile" }"Add userAuthenProfile, userAuthenticationFreeRule, hwDot1xAccessProfile, hwMACAuthenAccessProfile and hwPortalAccessProfile" ."Add hwAAACpuUsage and hwAAAUserResourceUsage" N"Add hwAAAAccessUserResourceOrCpuAlarm and hwAAAAccessUserResourceOrCpuResume" "AddhwDhcpUserOnlineFailCount"  "AddhwDhcpUserOnlineV6FailCount" �"Add hwAAATimerExpireMajorLevelThreshold, hwAAATimerExpireMajorLevelResumeThreshold, hwAAATimerExpireCriticalLevelThreshold and hwAAATimerExpireCriticalLevelResumeThreshold" "Add hwAAADomainIPPoolTable" G"Modify hwLocalUserAccessType Syntax Type . [Integer32 -> Unsigned32] " I"Modify hwDomainAccessLimitNum OBJECT-TYPE and hwftpdirction OBJECT-TYPE" "Add hwLocalUserPwPolicyAdmin" "Add hwLocalUserPwPolicyAcc" <"Add hwEDSGLicenseExpireAlarm and hwEDSGLicenseExpireResume" 5"Add hwAccessDeviceName and hwAccessDeviceMACAddress" "Modify node hwOfflineReason" ,"Add hwLocalAuthorize and hwRemoteAuthorize" ,"Add hwLocalAuthorize and hwRemoteAuthorize" "Add hwAAARateTable" 1"Add hwTotalLacOnlineNum and hwTotalLnsOnlineNum" )"The MIB contains objects of module AAA." )"The MIB contains objects of module AAA." k"Add hwUserGroupThresholdAlarm, hwUserGroupThresholdResume, hwUserGroupNumThreshold and hwUserGroupUsedNum" �"Modify hwUserDomainName, hwUserAuthenState, hwUserAcctState, hwUserAuthorState and hwOnlineFailReason in hwAAAOnlineFailRecordTable" a"Add hwLoginFailedTimes and hwStatisticPeriod and hwAdminLoginFailed and hwAdminLoginFailedClear" )"The MIB contains objects of module AAA." B"Add hwHistoricMaxOnlineLocalNum and hwHistoricMaxOnlineRemoteNum" )"The MIB contains objects of module AAA." "Add hwWlanInterfaceName " R"Add hwAccessResourceInsufficientInbound and hwAccessResourceInsufficientOutbound" %"extend the scope of hwAuthenMethod " %"extend the scope of hwAuthenMethod " %"extend the scope of hwAuthenMethod " %"Add hwLocalUserIfAllowWeakPassword." )"The MIB contains objects of module AAA."                  G"The hwAuthenSchemeTable is an authentication solution table used to configure an authentication solution for users, including the addition, deletion, query, and modification operations. The default authentication solution tables are default0 and default1. The default authentication solutions can be modified but not deleted."                       ""The authentication scheme entry."                       ?"This object indicates the name of an authentication solution."                       �"This object indicates the type of the authentication solution. The default type is radius (3), indicating RADIUS authentication."                       t"This object indicates the row administrative status. Currently, the states of creation and deletion are supported."                       �"The authentication fail policy,
                 online(1):keeping user online,
                 offline(2):making user offline. 
                "                       !"The authentication fail domain."                       "Description."                       �"The hwAcctSchemeTable is an accounting solution table used to complete basic configuration of an accounting solution. The default accounting solution tables are default0 and default1. The default solution can be modified but not deleted."                       "The account scheme entry."                       ;"This object indicates the name of an accounting solution."                       ."This object indicates the accounting method."                       '"The account start fail to use scheme."                       *"The account realties fail to use scheme."                       �"This object indicates the interval for real-time accounting. Value 0 indicates that real-time accounting is not performed. This attribute must be configured together with the hwAcctRealTimeIntervalUnit attribute."                       ="The row administrate status, only supporting add or delete."                       G"The value of this object indicates the unit for real time accounting."                       �"The hwDomainTable is a domain information table used to complete basic configuration of a domain, including creating, deleting, modifying, and configuring the attributes of an authentication or accounting solution in a domain."                       "The domain table entry."                       &"This object indicates a domain name."                       ?"This object indicates the name of an authentication solution."                       ;"This object indicates the name of an accounting solution."                       A"This object indicates the group name of the hwRadiusGroupTable."                       ^"This object indicates the maximum number of connections of an account in the current domain."                        "The route of source interface."                       *"The next hop of source IP address route."                        "The cut time of idle interval."                       �"The flow of idle interval, in Kbytes/min, 0 indicates idle-cut is not performed, 
                -1 indicates idle-cut is performed with 0 idle-rate."                       z"This object indicates the row administrative status. The available options are addition, deletion, active, and inactive."                       "The domain type."                       "The service scheme name."                       *"The type of idle-cut, default type is 1."                       $"The next hop of IPv6 policy route."                       "The url to push."                       "The url-template to push."                       ,"The first time-range name of domain block."                       -"The second time-range name of domain block."                       ,"The third time-range name of domain block."                       ,"The forth time-range name of domain block."                       "flow Statistic enable."                       Z"The extended information table is used to configure the extended attributes of a domain."                       "The domain extend entry."                       "The URL of portal."                       8"This object indicates whether the domain is available."                       "The priority of up user."                       "The URL of force web server."                       "The IP pool name."                       "The IP pool name."                       "The IP pool name."                       "The radius group name."                       "The VPDN group name."                       "UCL index"                       ."Whether support offering URL for PPP0E user."                       %"The user access control group name."                       "The VPDN group name."                       "The domain VPN instance name."                       "The GRE group name"                       "if reallocate IP address"                       "Portal server URL for user"                       "Portal server IP address"                       "Max times to redirect "                       ]"This object indicates the template used for the authentication of 802.1X users in a domain."                       "IPadress of force web server"                       "MODE of force web server"                       �"This object indicates the alarm threshold for the address pool bound to a domain.
            If the value is 255, it is invalid."                       F"This object indicates the name of the HWTACACS group in the domain.
"                       "Domain service policy name"                       "Domain COPS group name"                       ?"This object indicates the name of an authorization solution.
"                       "Domain IPTV user profile"                       "Domain Qos profile"                       "Domain FWZone"                       "if force l2tp by radius"                      Q"user down priority
                        
                        0~7,
                        trust-dscp(8),
                        trust-8021p-inner(9),
                        trust-8021p-outer(10),
                        trust-exp-inner(11),
                        trust-exp-outer(12),
                        unchangeable(15)"                       ("Set force authentication type for PPP "                       "IPadress of DNS"                       L"This object indicates the user priority. Value -1 indicates no permission."                       "Shaping template"                       "DPI policy name"                       "Domain COPS group name"                       "Domain COPS group name"                       "reduce cir"                       4"
              value added service accounting type"                       "
             radius server"                       "cops server"                       "reduce PIR"                       6"Configure inbound L2TP QOS Profile
                 "                       7"Configure outbound L2TP QOS Profile
                 "                       ("If multicast forward
                 "                       9"Multicast virtual schedule reserve Cir
                "                       :"Multicast virtual schedule reserve PIR
                 "                        "Max list num
                 "                       %"Multicast profile
                 "                       ="Service type,0 for HSI,1 for not HSI.
                     "                       ;"If Web Server URL Parameter is enabling
                 "                       >"Configure Web Server Redirect Key MscgName
                 "                       ="If Portal Server UrlParameter is enabling
                 "                       A"The Portal Server Rollback first URL key-name
                 "                       H"If the Portal Server Rollback first URL default name
                 "                       "The Second IP address of DNS"                       "IGMP ENABLE"                       q"The name of IPv6 address pool. The format to set value is : operator+pool index list. operator: 1-Add, 2-Delete"                       3"The flag indicating whether the prefix is shared."                       �"The basic service type. UCHAR[0]-IPv4, UCHAR[1]-IPv6, UCHAR[2]-IPv6-PD. '0'-without such basic service, '1'-with such basic service."                       "The IPv6 primary DNS address."                       !"The IPv6 secondary DNS address."                       @"The flag whether to accouting stream separately for dual user."                       H"The IPv6 warning threshold. Default value is 0, indicating no warning."                       Z"The time(seconds) of waiting for DHCPv6 packet after IPv6CP. Default value is 60 seconds"                       9"The address configuration method for PPP and L2TP user."                       }"The flag indicating whether PPP and L2TP user will use the interface-id of ipv6cp negotiation in DHCPv6 address allocation."                       <"The method PPP and L2TP user get configuration parameters."                       M"The flag indicating whether BRAS assign interface-id on IPv6CP negotiation."                        "The name of multicast profile."                       $"The URL of slave force web server."                       %"IPadress of slave force web server."                       -"IPadress of bind authentication web server."                       :"The VPN instance name of bind authentication web server."                       3"IPadress of slave bind authentication web server."                       @"The VPN instance name of slave bind authentication web server."                       "The extended VPDN group name."                       "The user group name."                       "The AFTR name."                       ."Option64 parse separator and segment number."                       <"Whether to deal dhcp server's ack packet when user online."                       �"The hwDomainStatTable is a domain information table used to collect statistics about the number of online users in a domain, domain traffic, and address pool."                       "Domain Stat Entry"                       A"This object indicates the total number of users in the domain.
"                       B"This object indicates the number of online users in the domain.
"                       F"This object indicates the number of online PPP users in the domain.
"                       Z"This object indicates the number of types of outgoing packets in the domain, in kbytes.
"                       F"This object indicates the number of outgoing packets in the domain.
"                       Z"This object indicates the number of types of incoming packets in the domain, in kbytes.
"                       F"This object indicates the number of incoming packets in the domain.
"                       S"This object indicates the number of configured IP addresses in the address pool.
"                       9"This object indicates the number of used IP addresses.
"                       @"This object indicates the number of conflicting IP addresses.
"                       ?"This object indicates the number of referenced IP addresses.
"                       9"This object indicates the number of idle IP addresses.
"                       +"This object indicates the address usage.
"                       A"This object indicates the number of PPPoE users in the domain.
"                       M"This object indicates the number of authentication requests in the domain.
"                       X"This object indicates the number of successful authentication requests in the domain.
"                       T"This object indicates the number of failed authentication requests in the domain.
"                       I"This object indicates the number of accounting requests in the domain.
"                       T"This object indicates the number of successful accounting requests in the domain.
"                       P"This object indicates the number of failed accounting requests in the domain.
"                       I"This object indicates the total number of IPv6 addresses in the domain."                       H"This object indicates the number of used IPv6 addresses in the domain."                       H"This object indicates the number of idle IPv6 addresses in the domain."                       O"This object indicates the number of conflicting IPv6 addresses in the domain."                       g"This object indicates the number of IPv6 addresses that are prohibited from being used in the domain."                       B"This object indicates the usage of IPv6 addresses in the domain."                       H"This object indicates the total number of NDRA prefixes in the domain."                       G"This object indicates the number of used NDRA prefixes in the domain."                       G"This object indicates the number of idle NDRA prefixes in the domain."                       N"This object indicates the number of conflicting NDRA prefixes in the domain."                       f"This object indicates the number of NDRA prefixes that are prohibited from being used in the domain."                       A"This object indicates the usage of NDRA prefixes in the domain."                       F"This object indicates the total number of PD prefixes in the domain."                       E"This object indicates the number of used PD prefixes in the domain."                       E"This object indicates the number of idle PD prefixes in the domain."                       L"This object indicates the number of conflicting PD prefixes in the domain."                       d"This object indicates the number of PD prefixes that are prohibited from being used in the domain."                       ?"This object indicates the usage of PD prefixes in the domain."                       S"This object indicates the number of bytes of outgoing IPv6 packets in the domain."                       J"This object indicates the number of outgoing IPv6 packets in the domain."                       S"This object indicates the number of bytes of incoming IPv6 packets in the domain."                       J"This object indicates the number of incoming IPv6 packets in the domain."                       �"IPv4 address usage state in the domain. The value 0 indicates normal address usage, the value 1 indicates that address usage exceeds the upper threshold, and the value 2 indicates that address usage falls below the lower threshold."                       �"IPv6 address usage state in the domain. The value 0 indicates normal address usage, the value 1 indicates that address usage exceeds the upper threshold, and the value 2 indicates that address usage falls below the lower threshold."                       +"Maximum IPv4 address usage in the domain."                       N"Date and time when IPv4 address usage reaches the historical maximum number."                       +"Maximum IPv6 address usage in the domain."                       N"Date and time when IPv6 address usage reaches the historical maximum number."                       "ND address usage state."                       "Maximum ND address usage."                       L"Date and time when ND address usage reaches the historical maximum number."                       "PD address usage state."                       "Maximum PD address usage."                       L"Date and time when PD address usage reaches the historical maximum number."                       "Local user table"                       "Local user Entry"                       "Local user name"                       "local user's password"                      �"Local user's type
                0xFFFFFFFF all
                0x00000001 PPP                
                0x00000002 VLAN WEB
                0x00000004 VLAN,
                0x00000010 CABLE MODEM
                0x00000020 802.1X,
                0x00000040 telnet,
                0x00000080 terminals
                0x00000100 ftp,
                0x00000200 SSH,                            
                0x00000400 x25pa"                       ("Local user's priority
                "                       "ftp directory"                       "qos profile"                       "row admin status"                       "user IP address"                       "VPN Instance name"                       $"The maximum number of access limit"                       ."The minimum seconds of local user's password"                       +"The maximum days of local user's password"                      "Whether to allow setting weak password.  The default value is 1.
                 It is recommended that the password consist of at least 2 types of characters, 
                 including lowercase letters, uppercase letters, numerals and special characters."                       "Local user password set time."                       ""Local user password expire time."                       !"Local user password is expired."                       !"Local user password is orginal."                       "http directory"                       "local user extend table"                      H"

                Local user table is used to save the relevant information of the local user.
                The index item is node hwLocalUserName, which can only be entered during the creation, 
                and can not be modified thereafter. When its access number is 0, it can not be deleted.
                Operation constraint description:
                1. The present user online is not allowed to be deleted.
                2. When adding new record, the username must contain a field name. 
                The format of username is 'user@domain'
                "                       "user status"                       "if verify for callback"                       "call back number"                       �"Blocking state, set the number of requests to allow the user authentication error.
                and the value of this object is invalid, 0 is displayed."                       �"Blocking state, set the user authentication request to allow time between blocking,unit:minute.  
                 and the value of this object is invalid, 0 is displayed."                       "Local user group"                       "Access user device type"                       ("The expiration date of a local account"                       2"The timeout period for disconnection of the user"                       "The time-range of user"                       "Local user  is expired."                       ("The expiration hour of a local account"                       "user role"                       !"Time locked in a local account."                               A"Roam char, include '/',':','*','\','<','>','|'
                "                        "If use default configuration. "                       >"This object indicates the system command recording function."                       @"This object indicates the outbound command recording function."                       7"This object indicates the command recording function."                       �"
                This object indicates whether to report the standard cause of user logout to the RADIUS server when the user is abnormally logged out due to 'ppp-echo-fail'.
                "                       �"
                This object indicates the domain name resolution sequence: 
                lefttoright(0),
                righttoleft(1)
                "                       �"
                This object indicates the position of the domain name: 
                beforedelimiter(0),
                afterdelimiter(1)
                "                       8"
                 Access Speed Number
                "                       8"
                 Access Speed Period
                "                       T"
                 Realm-name-delimiter. include @,|,:,',<,>,/,\,%
                "                       c"
                 lefttoright(0),
                 righttoleft(1) .default is 0.
                "                       9"
                 IPOX user's password
                "                       &"Access relay step,
                 "                       ."Maximum access delay time,
                 "                       ."Minimum access delay time,
                 "                       A"Parse priority ,default is 0
                 
                "                       x"
                
                beforedelimiter(0),
                afterdelimiter(1).default is 0.
                "                       >"IPOX user name generate type, default is 0.
                "                       >"IPOX user name generate type, default is 0.
                "                       >"IPOX user name generate type, default is 0.
                "                       >"IPOX user name generate type ,default is 0.
                "                       ""Configure default user name type"                       "Configure NAS serial number"                       )"Check to times of password can't repeat"                       %"Remind days before password expired"                       /"The online user lower limit warning threshold"                       /"The online user upper limit warning threshold"                       "Access trigger loose time"                       9"
                 Offline Speed Number
                "                       "IPOX user's password type."                       �"
                This object indicates whether to allow administrator to modify user's user-group by command line : 
                enable(1),
                disable(2)
                "                       �"
                 Domain-name-delimiter. include \ / : < > | @ ' %
                 It can not be same with hwDomainNameSecurityDelimiter.
                "                       �"
                 Domain-name-security-delimiter. include \ / : < > | @ ' %
                 It can not be same with hwDomainNameDelimiter.
                "                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       �"
                 The update mode for user authorization information: 
                overlay(0),
                modify(1)
                "                       K"
                 The retry interval of a local account.
                "                       R"
                 The consecutive authentication failure count.
                "                       H"
                 The local account locking duration.
                "                       G"
                 The authentication retry interval.
                "                       _"
                 The maximum number of consecutive authentication failures.
                "                       @"
                 The account locking period.
                "                       �"
                 Disable the account locking function for user: 
                 localuser(0),
                 remoteuser(1),
                 localremoteuser(2)
                "                       "the number of AUTH num portal"                       "the number of AUTH num mac"                       "the number of AUTH num Dot1x"                               9"This object indicates the total number of online users."                       ?"This object indicates the total number of online PPPoE users."                       ?"This object indicates the total number of online PPPoA users."                       ="This object indicates the total number of online FTP users."                       ="This object indicates the total number of online SSH users."                       @"This object indicates the total number of online Telnet users."                       >"This object indicates the total number of online VLAN users."                       D"This object indicates the total number of historical online users."                       W"This object indicates the clearance of the maximum number of historical online users."                       `"This object indicates the clearance of statistics about the causes of historical user offline."                       ]"This object indicates the clearance of statistics about the causes of user online failures."                       A"This object indicates the maximum number of online PPPoE users."                       V"This object indicates the current number of online users with portal authentication."                       V"This object indicates the maximum number of online users with portal authentication."                       >"This object indicates the total number of online IPv4 users."                       >"This object indicates the total number of online IPv6 users."                       C"This object indicates the total number of online IPv4/IPv6 users."                       Q"This object indicates the number of bytes of outgoing IPv4 packets on the host."                       H"This object indicates the number of outgoing IPv4 packets on the host."                       Q"This object indicates the number of bytes of incoming IPv4 packets on the host."                       H"This object indicates the number of incoming IPv4 packets on the host."                       Q"This object indicates the number of bytes of outgoing IPv6 packets on the host."                       H"This object indicates the number of outgoing IPv6 packets on the host."                       Q"This object indicates the number of bytes of incoming IPv6 packets on the host."                       H"This object indicates the number of incoming IPv6 packets on the host."                       j"This object indicates the maximum number of online users with successful charging records in the system."                       F"This object indicates the number of LAC users on the public network."                       y"This object indicates the maximum number of historical online RUI local users and common users recorded in the system.
"                       i"This object indicates the maximum number of historical online RUI remote users recorded in the system.
"                       8"This object indicates the number of online LAC users.
"                       8"This object indicates the number of online LNS users.
"                       C"This object indicates the total number of online wireless users.
"                       @"This object indicates the total number of online wired users.
"                       A"This object indicates the number of DHCP user online failures.
"                       �"The number of family users by username, counted only when the user domain has the user-max-session configuration or the RADIUS server has delivered the Port-Limit attribute, and the same username is counted only once. "                       ("the number of dhcp online V6fail users"                       K"Date and time when the number of access users reaches the maximum number."                       W"The hwAccessTable is a function access table used to display user access information."                      ."access entry

                The access table is used to query the property of online users. The index item node is hwAccessIndex.
                Notice: Read operation is not allowed for all the items in this table.
                1. The index of hwAccessTable also uses hwAccessIndex, get operation only 
                    supports the standard get operation with hwAccessIndex as its index.
                2. To prevent too much interaction, get next operation does use the standard operation that uses hwAccessIndex as its index.
                "                       ,"This object indicates the index of a user."                       -"This object indicates the name of the user."                      
"access port type
                1:all
                2:PPP
                3:VLAN
                4:WEB of VLAN
                5:Portal of VLAN
                6:802.1X
                7:telnet
                8:ftp
                9:SSH
                10:igmp"                       9"This object indicates the access priority of the user.
"                       0"This object indicates the slot ID of the user."                       4"This object indicates the sub-slot ID of the user."                       4"This object indicates the port number of the user."                       9"This object indicates the VLAN information of the user."                       ="This object indicates the VPI VCI information of the user.
"                       �"This object indicates the authentication method of the user. The available options are local, noauth, radius, localRadius, radiusLocal, radiusNoauth, tacacs, localTacacs, tacacsLocal, and tacacsNone.
"                       �"This object indicates the accounting method of the user, The available options are local, radius, noacct, localradiusboth, hwtacacs, and localhwtacacsboth.
"                       4"This object indicates the IP address of the user.
"                       2"This object indicates the VRF name of the user.
"                       5"This object indicates the MAC address of the user.
"                       2"This object indicates whether idle cut is used.
"                       /"This object indicates the idle cut interval.
"                       ."This object indicates the idle cut traffic.
"                       ?"This object indicates the online duration limit of the user.
"                       D"This object indicates the remaining traffic (64 bit) of the user.
"                       5"This object indicates the access time of the user.
"                       8"This object indicates the upstream rate limit control."                       ;"This object indicates the downstream rate limit control.
"                       N"This object indicates the number of bytes of upstream packets, in 64 bytes.
"                       P"This object indicates the number of bytes of downstream packets, in 64 bytes.
"                       7"This object indicates the number of upstream packets."                       :"This object indicates the number of downstream packets.
"                       D"This object indicates the average upstream traffic rate, in kbps.
"                       A"This object indicates the peak upstream traffic rate, in kbps.
"                       4"This object indicates the upstream CBS, in bytes.
"                       4"This object indicates the upstream PBS, in bytes.
"                       F"This object indicates the average downstream traffic rate, in kbps.
"                       C"This object indicates the peak downstream traffic rate, in kbps.
"                       6"This object indicates the downstream CBS, in bytes.
"                       6"This object indicates the downstream PBS, in bytes.
"                       1"This object indicates the downstream priority.
"                       )"This object indicates the QoS profile.
"                       3"This object indicates the user access interface.
"                       Y"This object indicates the interface ID negotiated by IPv6CP for the PPPoE or L2TP user."                       >"This object indicates the WAN interface address of the user."                       ="This object indicates the WAN interface prefix of the user."                       >"This object indicates the LAN interface address of the user."                       ="This object indicates the LAN interface prefix of the user."                      ="This object indicates the IP address type by using which domain users can go online. The available options are UCHAR[0]-IPv4, UCHAR[1]-IPv6, and UCHAR[2]-IPv6-PD. Value 0 indicates that domain users do not use this IP address type for access. Value 1 indicates that domain users use this IP address type for access."                       `"This object indicates the time used for waiting for DHCPv6 packets after IPv6 CP is performed."                       R"This object indicates the IPv6 address allocation mode for PPPoE and L2TP users."                       �"This object indicates whether to use the interface ID negotiated by IPv6CP as the interface ID for allocating IP addresses when PPPoE and L2TP users use DHCPv6 to allocate IP addresses."                       X"This object indicates the information allocation mode for PPPoE, L2TP, and IPoE users."                       a"This object indicates whether the interface ID of the user is available for IPv6CP negotiation."                       +"This object indicates the access line ID."                       E"This object indicates the number of bytes of upstream IPv6 packets."                       G"This object indicates the number of bytes of downstream IPv6 packets."                       <"This object indicates the number of upstream IPv6 packets."                       >"This object indicates the number of downstream IPv6 packets."                       "access device name"                       "Access device Mac address"                       ""Interface Name of Access device."                       "Access wiless device AP Id"                       "Access QINQ VLAN ID"                       "Access Option82 CircuitID"                       "Access Option82 RemoteID"                       "Access Session Timeout"                       "Access ISP VLAN"                       "Access ISP Interface"                       ="hwAccessExtTable is a table of extended access information."                       "access extend entry"                       *"This object indicates the user group ID."                       r"
                    This object indicates the status of the authentication status machine.
                    "                       q"
                    This object indicates the status of the authorization status machine.
                    "                       n"
                    This object indicates the status of the accounting status machine.
                    "                       e" 
                    This object indicates the domain where the user resides.
                    "                       g"
                    This object indicates the time when the idle status starts.
                    "                       b"
                    This object indicates the ID of an accounting session.
                    "                       v"
                    This object indicates the time when the current account starts accounting.
                    "                       l"This object indicates the name of the RADIUS server group for common authentication and accounting. Value "                     6--" indicates that this attribute is not configured."
 �"This object indicates the name of the RADIUS server group configured in a domain to which accounting packets are copied. Value "                     6--" indicates that this attribute is not configured."
 w"This object indicates the name of the RADIUS server group on a port to which accounting packets are copied to. Value "                     6--" indicates that this attribute is not configured."
 �"
                    This object indicates the current authentication space. The available options are none(0), local(1), radius(2), and tacacs(3).
                    "                       �"
                    This object indicates an action. The available options are idle(0), newuserauth(1), reauth(2), logout(3), leaving(4), authmodify(5), and connectup(6).
                    "                       �"
                    This object indicates the authentication type of the user. The available options are none(0), ppp(1), dot1x(2), web(3), bind(4), fast(5), wlan(6), admin(7), and tunnel(8).
                    "                       '"The access type.
                    "                       K"  This object indicates the online time of the user.
                    "                       "The user domain"                       "The user access gateway"                       "The user access SSID"                       "The user access APMAC"                       "The user accounting method."                        "The user authorization method."                       "The user group"                       �"This object indicates whether the requested upstream resources are insufficient. Value 1 indicates that the resources are insufficient. Value 0 indicates that the resources are sufficient.  
"                       �"This object indicates whether the requested downstream resources are insufficient. Value 1 indicates that the resources are insufficient. Value 0 indicates that the resources are sufficient.  
"                       "The user status."                       "The user bake status."                       "Description."                       "account Scheme Ext Table."                       "account Scheme Ext entry."                       -"   
              if need realties account."                       8"
                Permit time of realties account fail."                       Q"
                if send interim accounting packet after accounting start fail "                           X"
                This object indicates the capacity of the bill pool.
                "                       V"
                This object indicates the number of current bills.
                "                       \"
                This object indicates the alarm threshold,default is 75.
                "                       W"
                This object indicates the backup mode,default is 4.
                "                       j"
                This object indicates the interval for regular backup,default is 1440.
                "                       l"
                This object indicates the instruction for immediate backup,default is 1.
                "                       �"
                This object indicates that all bills in the bill pool are cleared. 
                The resetting operation is dangerous,default is 1.
                "                           �"
                This object indicates the IP address of the TFTP server. 
                The value is 0 when the system is initialized.
                "                       #"The tftp main file name of Bills."                       "User Group Table"                       "User Group Entry"                       "User Group name"                       ""row admin status,only Add or Del"                       �"The hwIpAccessTable is an IP query access table used to query the access table index based on user IP addresses and VPN instances."                       4"IP Query Access Entry
                            "                       4"This object indicates the IP address of the user.
"                       /"This object indicates the user access index.
"                       S"This object indicates the name of the VPN instance to which user access belongs.
"                           "Start User CID"                       "End User CID"                       "User IP Address"                       "User MAC Address"                       "User Access Name"                       "User Authentication attribute"                       "domain name"                       "IP Pool Name"                       "IFNET Index"                       	"VLAN ID"                       "VPI
    
                 VPI"                       "VCI
    
                 VCI"                       
"User VRF"                       "The user access interface"                       "The user access SSID"                       "The user access slot"                       "The user group"                               9"This object indicates the total number of connections.
"                       >"This object indicates the number of successful connections.
"                       H"This object indicates the number of access failures at the LCP stage.
"                       S"This object indicates the number of access failures at the authentication stage.
"                       H"This object indicates the number of access failures at the NCP stage.
"                       W"This object indicates the number of access failures at the address allocation stage.
"                       L"This object indicates the number of access failures due to other reasons.
"                       ("the number of all fail access ppp user"                           F"This object indicates the total number of web and fast connections.
"                       K"This object indicates the number of successful web and fast connections.
"                           %"the number of access all dot1x user"                       -"the number of all success access dot1x user"                           >"This object indicates the total number of bind connections.
"                       C"This object indicates the number of successful bind connections.
"                       "authorization Scheme Table"                       "authorization Scheme Entry"                       ?"This object indicates the name of an authorization solution.
"                       @"This object indicates the authorization mode.
                "                       u"This object indicates the row administrative status. Currently, the states of creation and deletion are supported.
"                       "Description."                       �"The hwRecordSchemeTable is a recording solution table used to configure a recording solution, including the solution name and TAC template name. The configuration includes addition, modification, deletion, and query of the recording solution."                       "record Scheme Entry"                       :"This object indicates the name of a recording solution.
"                       a"This object indicates the name of the HWTACACS server template used by the recording solution.
"                       u"This object indicates the row administrative status. Currently, the states of creation and deletion are supported.
"                       |"The hwMACAccessTable is a MAC query access table used to query the indexes of access tables based on users' MAC addresses."                       5"MAC Query Access Entry
                            "                       5"This object indicates the MAC address of the user.
"                       /"This object indicates the user access index.
"                       b"This table is used to collect statistics about the number of users who go online from the board."                       ="Slot Query Online Number Entry
                            "                       3"This object indicates the slot ID of the device.
"                       J"This object indicates the number of users who go online from the board.
"                       n"This object indicates the maximum number of users who go online from the board after the device is started.
"                       �"This object indicates the maximum number of users who go online from the board with correct accounting statistics after the device is started.
"                       R"This object indicates the number of online IPv4 users on the board in this slot."                       R"This object indicates the number of online IPv4 users on the board in this slot."                       X"This object indicates the number of online dual-stack users on the board in this slot."                       n"This object indicates the date and time when the number of access users reaches the historic maximum number."                       x"This object indicates the date and time when the number of accounting-ready users reaches the historic maximum number."                       p"This table is used to collect statistics about the number of users who go online from the subcard in the slot."                       B"Slot Card Query Online Number Entry
                            "                       3"This object indicates the slot ID of the device.
"                       6"This object indicates the subcard ID of the device.
"                       @"This object indicates the number of online users on the slot.
"                       E"This object indicates the number of online IPv4 users on the slot.
"                       E"This object indicates the number of online IPv6 users on the slot.
"                       K"This object indicates the number of online dual-stack users on the slot.
"                       ["This object indicates the number of online users that are not authenticated on the slot.
"                       c"This object indicates the number of online users on the slot who have passed PPP authentication.
"                       f"This object indicates the number of online users on the slot who have passed 802.1x authentication.
"                       c"This object indicates the number of online users on the slot who have passed web authentication.
"                       g"This object indicates the number of online users on the slot who have passed binding authentication.
"                       d"This object indicates the number of online users on the slot who have passed fast authentication.
"                       d"This object indicates the number of online users on the slot who have passed WLAN authentication.
"                       m"This object indicates the number of online users on the slot who have passed administrator authentication.
"                       f"This object indicates the number of online users on the slot who have passed tunnel authentication.
"                       c"This object indicates the number of online users on the slot who have passed MIP authentication.
"                       Y"hwOfflineReasonStatTable is used to collect statistics on the offline reasons of users."                       k"Offline and online fail reason statistic  Entry
                            
                            "                       �"This object indicates statistics about the causes of user online failures and user offline. Possible causes are that users' proactive going offline, session timeout, and idle cut.
                             "                       a"This object indicates statistics about the causes of user offline.
                            "                       L"This object indicates statistics about the causes of user online failures."                       <"The multicast list table
                                 "                       J"multicast list
                            
                            "                       8"Multicast list index
                                 "                       D"Multicast list name
                
                             "                       V"Multicast list source IP address
                         
                         "                       Q"Multicast list source IP mask
                        
                        "                       ["Multicast list group IP address
                                
                        "                       Z"Multicast list group IP mask
                                 
                         "                       Y"Multicast list VPN instance
                                 
                         "                       P"row admin status,only Add or Delete
                
                         "                       ?"The multicast profile table
                                 "                       M"multicast profile
                            
                            "                       H"Multicast profile index
                
                             "                       G"Multicast profile name
                
                             "                       U"row admin status, only Add or Delete
                
                             "                       !"The multicast profile ext table"                       Z"multicast profile extern table
                            
                            "                       D"Multicast list name
                
                             "                       Q"row admin status,only Add or Del
                
                             "                       $"The  table of this service scheme "                       N"Service scheme entry.                          
                            "                       "Service scheme name."                       *"The next hop of source IP address route."                       "The priority of up user."                        "The cut time of idle interval."                       +"The flow of idle interval, in Kbytes/min."                       "The first DNS server."                       "The second DNS server."                       "Priority of admin user."                       "The IP pool name."                       "The IP pool name."                       "The IP pool name."                       ?"The row administration status, only supporting add or delete."                       *"The type of idle-cut, default type is 4."                       "The flow of idle , in Kbytes."                       6"LocalAuthorize type:ucl-group vlan car acl priority."                       2"RemoteAuthorize type:ucl-group car acl priority."                       &"RedirectAcl : HW Redirect Acl Value."                       ["This table is used to query information about DHCP Option 121 configured for all domains."                       #"The dhcp option121 routing entry."                       0"This object indicates the destination address."                       !"This object indicates the mask."                       ,"This object indicates the gateway address."                       Y"This object indicates the activation status of DHCP Option 21 configured in the domain."                       "hwAccessDelayPerSlotTable"                       "HwAccessDelayPerSlotEntry"                       "hwAccessDelayPerSlotSlot"                       $"hwAccessDelayPerSlotTransitionStep"                       "hwAccessDelayPerSlotMaxTime"                       "hwAccessDelayPerSlotMinTime"                       "hwDhcpOpt121RouteRowStatus"                       c"This table displays statistics about various types of users that access the Internet using a VPN."                       "HwAccessDelayPerSlotEntry"                       �"This object indicates a user type. The available options are pppoe(1), pppoa(2), dhcp(3), lns(4), lac(5), ipv4(6), ipv6(7), dual-stack(8), and all(9)."                       &"This object indicates the VPN name.
"                       L"This object indicates the number of users of a specified type in the VPN.
"                       e"This table displays statistics about various types of users that access from a specified interface."                        "HwInterfaceAccessUserStatEntry"                       -"This object indicates the interface index.
"                       R"This object indicates the number of users of a specified type on the interface.
"                       ["This table displays statistics about various types of access users in a specified domain."                       "HwDomainAccessUserStatEntry"                       O"This object indicates the number of users of a specified type in the domain.
"                       a"This table displays statistics about various types of users that access from a specified board."                       "HwSlotAccessUserStatEntry"                       *"This object indicates the board number.
"                       N"This object indicates the number of users of a specified type on the board.
"                       1"Configure a pool group in the specified domain."                       1"Configure a pool group in the specified domain."                       "The pool group name."                       ?"The row administration status, only supporting add or delete."                       <"Change the priority of pool group in the specified domain."                       <"Change the priority of pool group in the specified domain."                       "The pool group name."                       !"The position of the pool group."                       "The domain extend table."                       "The domain extend entry."                       2"Configure Web Server Redirect Key UserMacAdress."                       3"if encrypt Web Server Redirect Key UserMacAdress "                       '"The IP lower limit warning threshold."                       )"The IPv6 lower limit warning threshold."                       1"Configure inbound QOS Profile
                 "                       2"Configure outbound QOS Profile
                 "                       7"The domain inbound VPN instance name
                "                       A"This table is used to query the causes of user online failures."                       "The online fail record entry."                       H"This object indicates the index of the cause of a user online failure."                       &"This object indicates the user name."                       &"This object indicates a domain name."                       4"This object indicates the MAC address of the user."                       4"This object indicates the access type of the user."                       9"This object indicates the access interface of the user."                       ,"This object indicates the PVC of the user."                       0"This object indicates the PE VLAN of the user."                       0"This object indicates the CE VLAN of the user."                       3"This object indicates the IP address of the user."                       9"This object indicates the IPv6 NDRA prefix of the user."                       5"This object indicates the IPv6 address of the user."                       7"This object indicates the IPv6 PD prefix of the user."                       E"This object indicates the length of the IPv6 PD prefix of the user."                       ."This object indicates the index of the user."                       >"This object indicates the authentication status of the user."                       :"This object indicates the accounting status of the user."                       ="This object indicates the authorization status of the user."                       4"This object indicates the online time of the user."                       ;"This object indicates the cause of a user online failure."                       ("This object indicates a reply message."                               "User log access"                       "User log server IP address"                       "User log server port"                       "User log server version"                       "Show user log statistic"                       "Reset user log statistic"                       '"Change user's user-group by username."                       '"Change user's user-group by username."                       "The user's username."                       "The user's user-group."                       "The user group table."                       "The user group entry."                       "User group index."                       "User group name."                       "Specify acl id."                       "Specify QoS Profile."                       "Specify Inter Isolate Flag."                       "Specify Inner Isolate Flag."                       "RowStatus."                       "Specify User Vlan."                       "Specify 8021p Remark."                       "Specify Dscp Remark."                       "Specify Exp Remark."                       "Specify Lp Remark."                       '"User group commited information rate."                       $"User group peak information rate ."                       !"User group commited burst size."                       "User group peak burst size ."                       "Description."                       '"User group commited information rate."                       $"User group peak information rate ."                       !"User group commited burst size."                       "User group peak burst size ."                       "Specify Vlan Pool."                       z"The ACL6 number configured under the user group. ACL is separated by space and each ACL must be created on the device. ."                       "The offline record table."                       "The offline record entry."                       "The index of offline record."                       "The user name."                       "The domain name."                       "The user MAC address."                       "The user access type."                       "The user interface."                       "The user pevlan."                       "The user cevlan."                       "The user ip address."                       "The user index."                       "The user login time."                       "The user logout time."                       "The offline reason."                       "The user Stack type."                       "The user PVC."                       "The user ipv6 NDRA prefix."                       "The user ipv6 address."                       "The user ipv6 PD prefix."                        "The user authentication state."                       "The user accounting state."                       "The user authorizatoin state."                       !"The user ipv6 PD prefix length."                       O"If the wireless user displays the AP ID, the wired user displays the 0x0FFFF."                       "The MAC address of AP."                       "SSID."                       "ID of AS."                       "The MAC address of AS."                       ""The name of the interface of AS."                       9"The global option64 parse separator and segment number."                       G"The global whether to deal dhcp server's ack packet when user online."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "The index of wlan interface."                       "The name of wlan interface."                       �"
                    Domain name delimiter of interface. include \ / : < > | @ ' %
 	                  It can not be same with hwWlanInterfaceDomainNameSecurityDelimiter.
 	                 "                       �"
                    Domain name delimiter of interface. include \ / : < > | @ ' %
 	                  It can not be same with hwWlanInterfaceDomainNameDelimiter.
 	                 "                       �"
                    The domain name resolution sequence of interface: 
 	                  lefttoright(0),
 	                  righttoleft(1)
                   "                       �"
                    The domain name position of interface: 
 	                  beforedelimiter(0),
 	                  afterdelimiter(1)
                   "                       "Description."                       "Description."                       "authorization cmd level"                       +"authorization cmd method
                "                       E"The authorization cmd method status, only supporting add or delete."                       "Tariff package table."                       "Tariff package entry."                       "Tariff direction."                       "Tariff package type."                       "The highest average rate."                       "The actual average rate."                       "The number of users."                       K"Users rate accounted for the total bandwidth ratio, ratio range of 0-100."                               !"Is Local user pw-policy enable."                       "Pw expire time."                       "Pw Histroy Record Num."                       "Alert time before pw expire."                       "Is original pw changed."                                "Is Local user pwpolicy enable."                       "Pw Histroy Record Num."                       "The pool of domain table."                       "The pool of domain entry."                       "The pool name."                       "The IP pool index."                       "The IP pool constant index."                       !"The IP pool position in domain."                       ?"The row administration status, only supporting add or delete."                       #"The authentication profile table."                       #"The authentication profile entry."                       ""The authentication profile name."                        "The dot1x access profile name."                       %"The mac-authen access profile name."                       !"The portal access profile name."                       !"The portal access profile name."                       %"The pre-authen service scheme name."                       �"The pre-authen user group or ucl group name.
                This object is shared by a user group and ucl group name.
                The value for a user group name rangs from 1 to 64, and the value for a ucl group name ranges from 1 to 31."                       "The pre-authen VLAN."                       &"The authen-fail service scheme name."                       �"The authen-fail user group or ucl group name.
                This object is shared by a user group and ucl group name.
                The value for a user group name rangs from 1 to 64, and the value for a ucl group name ranges from 1 to 31."                       "The authen-fail VLAN."                       -"The authen-server-down service scheme name."                       �"The authen-server-down user group or ucl group name.
                This object is shared by a user group and ucl group name.
                The value for a user group name rangs from 1 to 64, and the value for a ucl group name ranges from 1 to 31."                       "The authen-server-down VLAN."                       *"The authen-server-down response success."                       ("The authen-server-up reauthentication."                       "The mac-authen first switch."                       "The mac bypass switch."                       "The force domain for dot1x."                       ""The force domain for MAC authen."                       "The force domain for portal."                       "The default domain for dot1x."                       $"The default domain for MAC authen."                        "The default domain for portal."                       "The default domain."                       "The force domain."                       "Domain name delimiter."                       "Domain name location."                       "Domain name parse direction."                       "The security name delimiter."                       )"The reauthenticate time for pre-authen."                       *"The reauthenticate time for authen-fail."                        "The aging time for pre-authen."                       !"The aging time for authen-fail."                       "The free rule name."                       !"The authentication scheme name."                        "The authorization scheme name."                       "The accouting scheme name."                       "The service scheme name."                       "The user group name."                       "The radius server name."                       "The hwtacacs server name."                       "The authentication mode."                       "The max user number."                       "The arp detect switch."                       "The arp detect period."                       ?"The row administration status, only supporting add or delete."                       "The permit domain."                       "Wlan ess max user."                       #"The authen-fail response success."                       ,"The IP address in accounting start packet."                       %"Permit ARP after account start ack."                       ="The description of authentication profile for the web user."                       2"Trigger portal authentication after learning ip."                       "Force push URL template name."                       "Force push URL."                       %"Roaming triggers real time billing."                       '"IP address update triggering billing."                       &"Information update triggers billing."                       #"Do not check IP address conflict."                       "The ldap server name."                       "The ad server name."                       "Description."                       %"The authentication free rule table."                       %"The authentication free rule entry."                       $"The authentication free rule name."                       "The ACL number."                       "The ACL number for ipv6."                       ?"The row administration status, only supporting add or delete."                       !"The dot1x access profile table."                       !"The dot1x access profile entry."                        "The dot1x access profile name."                        "The guest service scheme name."                       "The guest user group name."                       "The guest VLAN."                       "The handshake switch."                       "The handshake packet type."                       "The handshake period."                       "The EAP end."                       "The authentication method."                       "The EAP packet type."                       "The EAP packet data type."                       "Enable reauthenticate."                       "The reauthenticate time."                       "The client timeout."                       "The server timeout."                       "The tx period."                       "The max retry value."                       #"Enable speed limit automatically."                       "The max retry value."                       "The unicast trigger switch."                       
"The url."                       *"The handshake period for Eth-Trunk port."                       ?"The row administration status, only supporting add or delete."                       &"The MAC-authen access profile table."                       &"The MAC-authen access profile entry."                       %"The MAC-authen access profile name."                       "The reauthenticate switch."                       "The reauthenticate period."                       "The server timeout period."                       "The fixed username."                       "The fixed password."                       "The  MAC address format."                       "The MAC address password."                       "The DHCP option."                       "The DHCP suboption."                       �"The trigger packet type.
                0xFF all
                0x02 arp
                0x04 dhcp
                0x08 nd
                0x10 dhcpv6"                       "The DHCP suboption."                       #"The dhcp release offline switch ."                       '"The dhcp renew reauthenticate switch."                       "The permit mac address."                       !"The mask of permit mac address."                       ?"The row administration status, only supporting add or delete."                       "The authentication method."                       ""The portal access profile table."                       ""The portal access profile entry."                       !"The portal access profile name."                       "The detect period."                       ("The portal server down service scheme."                       $"The portal server down user group."                       &"The portal server up reauthenticate."                       "The minum alarm user number."                       "The maxium alarm user number."                       ,"The ip address of  authentication network."                       4"The mask of ip address of  authentication network."                       "The portal server name."                       $"The type of portal authentication."                       !"The local portal server switch."                       +"The local portal server anonymous switch."                       ?"The row administration status, only supporting add or delete."                        "The portal backup server name."                       )"The portal local-server anonymouse url."                       "The portal server web proxy."                       #"The portal server web proxy port."                       $"hwAAAInboundVPNAccessUserStatTable"                       $"hwAAAInboundVPNAccessUserStatEntry"                       �"user type
                1:pppoe
                2:pppoa
                3:dhcp
                4:lns
                5:lac
                6:ipv4
                7:ipv6
                8:dualStack
                9:all"                       "hwAAAInboundVPNName"                       "hwAAAInboundVPNAccessUserStat"                       ,"The authentication free rule extend table."                       ,"The authentication free rule extend entry."                       "The free rule id."                       "The free rule source mode."                       "The free rule source vlan."                       !"The free rule source interface."                       ""The free rule source ip address."                       *"The mask of free rule source ip address."                       #"The free rule source mac address."                       !"The free rule destination mode."                       '"The free rule destination ip address."                       /"The mask of free rule destination ip address."                       %"The free rule destination protocol."                       !"The free rule destination port."                       '"The free rule destination user group."                       ?"The row administration status, only supporting add or delete."                       �"This table is used to collect statistics about the number of user who go online from the subcard in the specified slot in the virtual access scenario."                       ="Slot Query Online Number Entry
                            "                       3"This object indicates the slot ID of the device.
"                       J"This object indicates the number of users who go online from the board.
"                       n"This object indicates the maximum number of users who go online from the board after the device is started.
"                       �"This object indicates the maximum number of users who go online from the board with correct accounting statistics after the device is started.
"                       �"This table is used to collect statistics about the number of users who go online from the subcard in the specified slot in the virtual access scenario."                       B"Slot Card Query Online Number Entry
                            "                       3"This object indicates the slot ID of the device.
"                       6"This object indicates the subcard ID of the device.
"                       @"This object indicates the number of online users on the slot.
"                       E"This object indicates the number of online IPv4 users on the slot.
"                       E"This object indicates the number of online IPv6 users on the slot.
"                       K"This object indicates the number of online dual-stack users on the slot.
"                       ["This object indicates the number of online users that are not authenticated on the slot.
"                       c"This object indicates the number of online users on the slot who have passed PPP authentication.
"                       f"This object indicates the number of online users on the slot who have passed 802.1x authentication.
"                       c"This object indicates the number of online users on the slot who have passed web authentication.
"                       g"This object indicates the number of online users on the slot who have passed binding authentication.
"                       d"This object indicates the number of online users on the slot who have passed fast authentication.
"                       d"This object indicates the number of online users on the slot who have passed WLAN authentication.
"                       m"This object indicates the number of online users on the slot who have passed administrator authentication.
"                       f"This object indicates the number of online users on the slot who have passed tunnel authentication.
"                       c"This object indicates the number of online users on the slot who have passed MIP authentication.
"                       a"This table is used to query the numbers of users of various types who go online from the board."                       ""HwAAAPwifSlotAccessUserStatEntry"                       *"This object indicates the board number.
"                       N"This object indicates the number of users of a specified type on the board.
"                       W"The hwAccessTable is a function access table used to display user access information."                      5"access entry

                The access table is used to query the property of online users. The index item node is hwAccessIndex.
                Notice: Read operation is not allowed for all the items in this table.
                1. The index of hwAAAPwifAccessTable also uses hwAccessIndex, get operation only 
                    supports the standard get operation with hwAccessIndex as its index.
                2. To prevent too much interaction, get next operation does use the standard operation that uses hwAccessIndex as its index.
                "                       -"This object indicates the index of a user.
"                       ."This object indicates the name of the user.
"                       3"This object indicates the port type of the user.
"                       9"This object indicates the access priority of the user.
"                       0"This object indicates the slot ID of the user."                       4"This object indicates the sub-slot ID of the user."                       5"This object indicates the port number of the user.
"                       :"This object indicates the VLAN information of the user.
"                       ="This object indicates the VPI VCI information of the user.
"                       �"This object indicates the authentication method of the user. The available options are local, noauth, radius, localRadius, radiusLocal, radiusNoauth, tacacs, localTacacs, tacacsLocal, and tacacsNone.
"                       �"This object indicates the accounting method of the user, The available options are local, radius, noacct, localradiusboth, hwtacacs, and localhwtacacsboth.
"                       4"This object indicates the IP address of the user.
"                       2"This object indicates the VRF name of the user.
"                       5"This object indicates the MAC address of the user.
"                       1"This object indicates whether idle cut is used."                       /"This object indicates the idle cut interval.
"                       ."This object indicates the idle cut traffic.
"                       ?"This object indicates the online duration limit of the user.
"                       D"This object indicates the remaining traffic (64 bit) of the user.
"                       5"This object indicates the access time of the user.
"                       ;"This object indicates whether to implement upstream CAR.
"                       ="This object indicates whether to implement downstream CAR.
"                       N"This object indicates the number of bytes of upstream packets, in 64 bytes.
"                       P"This object indicates the number of bytes of downstream packets, in 64 bytes.
"                       8"This object indicates the number of upstream packets.
"                       :"This object indicates the number of downstream packets.
"                       D"This object indicates the average upstream traffic rate, in kbps.
"                       A"This object indicates the peak upstream traffic rate, in kbps.
"                       4"This object indicates the upstream CBS, in bytes.
"                       4"This object indicates the upstream PBS, in bytes.
"                       F"This object indicates the average downstream traffic rate, in kbps.
"                       C"This object indicates the peak downstream traffic rate, in kbps.
"                       6"This object indicates the downstream CBS, in bytes.
"                       6"This object indicates the downstream PBS, in bytes.
"                       1"This object indicates the downstream priority.
"                       H"This object indicates the QoS profile in the virtual access scenario.
"                       3"This object indicates the user access interface.
"                       Y"This object indicates the interface ID negotiated by IPv6CP for the PPPoE or L2TP user."                       >"This object indicates the WAN interface address of the user."                       ="This object indicates the WAN interface prefix of the user."                       ?"This object indicates the LAN interface address of the user.
"                       ="This object indicates the LAN interface prefix of the user."                      ="This object indicates the IP address type by using which domain users can go online. The available options are UCHAR[0]-IPv4, UCHAR[1]-IPv6, and UCHAR[2]-IPv6-PD. Value 0 indicates that domain users do not use this IP address type for access. Value 1 indicates that domain users use this IP address type for access."                       `"This object indicates the time used for waiting for DHCPv6 packets after IPv6 CP is performed."                       R"This object indicates the IPv6 address allocation mode for PPPoE and L2TP users."                       �"This object indicates whether to use the interface ID negotiated by IPv6CP as the interface ID for allocating IP addresses when PPPoE and L2TP users use DHCPv6 to allocate IP addresses."                       X"This object indicates the information allocation mode for PPPoE, L2TP, and IPoE users."                       a"This object indicates whether the interface ID of the user is available for IPv6CP negotiation."                       +"This object indicates the access line ID."                       E"This object indicates the number of bytes of upstream IPv6 packets."                       G"This object indicates the number of bytes of downstream IPv6 packets."                       <"This object indicates the number of upstream IPv6 packets."                       >"This object indicates the number of downstream IPv6 packets."                       "access device name"                       "Access device Mac address"                       ""Interface Name of Access device."                       "Access wiless device AP Id"                           "User Mac Address"                               N"
		                    This Dot1x access user number.
		                    "                       L"
		                    This MAC access user number.
		                    "                       O"
		                    This Portal access user number.
		                    "                       L"
		                    This PPP access user number.
		                    "                       M"
		                    This None access user number.
		                    "                       O"
		                    This Static access user number.
		                    "                       N"
		                    This Admin access user number.
		                    "                       "The usergroup stat table."                       !"The usergroup stat table entry."                       #"The usergroup name as stat index."                       ("the number of a usergroup online users"                       9"BRAS user access statistics in CU separation scenarios."                       �"UP to the granularity of access to the number of online users, the number of bytes on the downlink, the maximum number of users."                       +"UP identifier in CU separation scenarios."                       )"Total number of access users on the UP."                       ("Total number of PPPoE users on the UP."                       ("Total number of PPPoA users on the UP."                       &"Total number of FTP users on the UP."                       &"Total number of SSH users on the UP."                       )"Total number of Telnet users on the UP."                       '"Total number of IPoE users on the UP."                       $"Maximum number of users on the UP."                       9"Reset the historical maximum number of users on the UP."                       0"Reset logout statistics about users on the UP."                       8"Reset logout failure statistics about users on the UP."                       1"Maximum number of online PPPoE users on the UP."                       1"Number of online portal server users on the UP."                       9"Maximum number of online portal server users on the UP."                       ("Number of online IPv4 users on the UP."                       ("Number of online IPv6 users on the UP."                       ("Number of online IPv6 users on the UP."                       ="Number of downstream traffic bytes of IPv4 users on the UP."                       7"Number of downstream packets of IPv4 users on the UP."                       ;"Number of upstream traffic bytes of IPv4 users on the UP."                       5"Number of upstream packets of IPv4 users on the UP."                       ="Number of downstream traffic bytes of IPv6 users on the UP."                       7"Number of downstream packets of IPv6 users on the UP."                       ;"Number of upstream traffic bytes of IPv6 users on the UP."                       5"Number of upstream packets of IPv6 users on the UP."                       @"Historical maximum number of accounting-ready users on the UP."                        "Number of LAC users on the UP."                       5"Historical maximum number of local users on the UP."                       6"Historical maximum number of remote users on the UP."                        "Number of LAC users on the UP."                        "Number of LNS users on the UP."                        "Number of WLS users on the UP."                        "Number of WRD users on the UP."                       5"Number of users with DHCP login failures on the UP."                       #"Number of family users on the UP."                       7"Number of users with DHCPv6 login failures on the UP."                       K"Date and time when the number of access users reaches the maximum number."                       ;"Number of users on the master UP in hot backup scenarios."                       ;"Number of users on the backup UP in hot backup scenarios."                       !"BRAS access user license list. "                       k"BRAS access user usage, including the license resource name, number of users, and license resource usage."                       "License resource name."                       $"Total number of license resources."                       &"Number of in-use license resources. "                       "License resource usage."                       "Description."                       "Description."                       "unqualified index"                       "access user name"                      
"access port type
                1:all
                2:PPP
                3:VLAN
                4:WEB of VLAN
                5:Portal of VLAN
                6:802.1X
                7:telnet
                8:ftp
                9:SSH
                10:igmp"                       "access up priority"                       
"slot No."                       "subslot No."                       
"port No."                       	"VLAN id"                       	"VPI VPC"                       "authentication method"                       "account method"                       "IP address"                       
"VRF name"                       "Mac address"                       "if idle cut"                       "idle cut time"                       "idle cut flow"                       "session time"                       "remain flow(32bit)"                       "remain flow(32bit)"                       "start time"                       "up car control"                       "down car control"                       "up flow(64Byte)"                       "down flow(64Byte)"                       "up packet"                       "down packet"                       %"up committed information rate(Kbps)"                        "up peak information rate(Kbps)"                       "up committed burst size(byte)"                       "up peak burst size(byte)"                       '"down committed information rate(Kbps)"                       ""down peak information rate(Kbps)"                       !"down committed burst size(byte)"                       "down peak burst size(byte)"                       "access down priority"                       "QOS profile"                       "user access interface"                       2"The user's interface ID when IPv6CP negotiation."                       "The user's WAN address."                       "The user's WAN prefix."                       "The user's LAN prefix."                       "The user's LAN prefix length."                       �"The basic service type. UCHAR[0]-IPv4, UCHAR[1]-IPv6, UCHAR[2]-IPv6-PD. '0'-without such basic service, '1'-with such basic service."                       A"The time of waiting for DHCPv6 packet after IPv6CP negotiation."                       9"The address configuration method for PPP and L2TP user."                       }"The flag indicating whether PPP and L2TP user will use the interface-id of ipv6cp negotiation in DHCPv6 address allocation."                       <"The method PPP and L2TP user get configuration parameters."                       T"The flag indicating whether to accept user's interface-id when ipv6cp negotiation."                       !"The access-line-id information."                       "The user's up flow."                       "The user's down flow."                       "The user's up flow packet."                       "The user's down flow packet."                       "access device name"                       "Access device Mac address"                       ""Interface Name of Access device."                       "Access wiless device AP Id"                               "Domain Index"                       "Hard disk Free Amount"                       "Hard disk warning threshold"                       "Slot"                       "hwUserSlotMaxNumThreshold"                       "hwOnlineUserNumThreshold"                       "hwMaxUserThresholdType"                       "hwRbpChangeName"                       "hwRbpOldState"                       "hwRbpNewState"                       "hwRbpChangeReason"                       &"This object indicates the RBS name.
"                       4"This object indicates the cause of disconnection.
"                       "hwPolicyRouteThreshold"                       "hwPolicyRoute"                       )"The used number of remote download ACL."                       -"The threshold value of remote download ACL."                       P"This object indicates the number of login failures within a specified period.
"                       ."Statistic period to count login failed times"                       �"This object indicates the length of the time span of the alarm indicating consecutive login failures of the administrative user."                       &"The used number of user-group index."                       "Cpu usage."                       "User resource usage."                       7"The session-group users upper limit warning threshold"                       7"The session-group users lower limit warning threshold"                       3"The online sessions upper limit warning threshold"                       3"The online sessions lower limit warning threshold"                       O"Major alarm threshold for resources occupied by real-time accounting services"                       U"Major alarm clear threshold for resources occupied by real-time accounting services"                       R"Critical alarm threshold for resources occupied by real-time accounting services"                       X"Critical alarm clear threshold for resources occupied by real-time accounting services"                       ""The  mac moved quiet user spec ."                       ("The  mac moved quiet user percentage ."                       ="The configuration of mac moved quiet user lower percentage."                       >"The configuration of mac moved quiet user  upper percentage."                       C"The number of IPv6 addresses on the device reached the threshold."                       A"The number of IPv6 addresses on the slot reached the threshold."                       "Password validity left days"                       "Online fail number"                       "Online success percentage"                       8"Specifies a board ID in CP and UP separation scenarios"                       3"The online sessions upper limit warning threshold"                       /"This object indicates the form of a equipment"                       3"The online sessions lower limit warning threshold"                       /"This object indicates the form of a equipment"                       /"The online user lower limit warning threshold"                       /"This object indicates the form of a equipment"                       /"The online user upper limit warning threshold"                       /"This object indicates the form of a equipment"                       )"The used number of remote download ACL."                       -"The threshold value of remote download ACL."                       /"This object indicates the form of a equipment"                       ("This object indicates a interface name"                       6"This object indicates the user number of a interface"                       N"This object indicates the alarm threshold for the user number of a interface"                       9"This object indicates the type of the backup protection"                       *"This object indicates the level of alarm"                       "UP ID"                       )"This object indicates a interface index"                       ("This object indicates a interface name"                       ("This object indicates a interface name"                       $"This object indicates a user index"                       ""This object indicates a user MAC"                       "The usage of username index"                       "The instance id"                               �"
                1. Notification/alarm name: Rbs up 2. Notification/alarm generation cause: TCP connection 3. Restoration suggestion: Matching information of hwRbsDown.
                "                 �"
                 This object indicates the alarm threshold of the number of users who can go online from the board in a specified slot.
                "                ."
                1 Notice/Trap name:  Reach the max online user
                2 Notice/Trap generation cause:  the online user number reach the limit
                3 Repair suggestions:
                upgrade your machine, or change to another board which can support more user

                "                "
                1 Notice/Trap name:  Set User's QOS Profile Fail
                2 Notice/Trap generation cause:  Set User's QOS Profile Fail
                3 Repair suggestions:
                    Check The Valid of Profile Name or User 

                "                 �"
                This object indicates the alarm threshold of the number of users who can go online from a specified device.
                "                @"
                1 Notice/Trap name:  Rbp state changed
                2 Notice/Trap generation cause:  Rbp state changed 
                3 Repair suggestions:
                    If the change is unexpected, please check the links between master and backup devices according to the change reason. 

                "                 �"
                1. Notification/alarm name: Rbs down
                2. Notification/alarm generation cause: TCP shutdown due to pucHwRbsDownReason
                3. Restoration suggestion: Check the link according to the cause.
                "                 �"
                1. Notification/alarm name: Rbs up 
                2. Notification/alarm generation cause: TCP connection 
                3. Restoration suggestion: Matching information of hwRbsDown
                "                 �"
                This object indicates that the proportion of the IPv6 addresses allocated in the domain to the total number of IPv6 addresses has reached the threshold.
                "                 �"
                This object indicates that the proportion of the IPv6 prefixes allocated in NDRA mode in the domain to the total number of IPv6 prefixes has reached the threshold.
                "                 �"
This object indicates that the proportion of the IPv6 prefixes allocated in DHCPv6-PD mode in the domain to the total number of IPv6 prefixes has reached the threshold.
                "                 l"
This object indicates that the IP address usage of the domain falls below the threshold.
                "                 n"
This object indicates that the IPv6 address usage of the domain falls below the threshold.
                "                 r"
This object indicates that the IPv6 NDRA prefix usage of the domain falls below the threshold.
                "                 w"
This object indicates that the IPv6 DHCPv6-PD prefix usage of the domain falls below the threshold.
                "                 �"                                   
This object indicates the alarm generated when the number of users on the host exceeds the upper limit.
                "                 �"                                   
This object indicates that the alarm generated when the number of users on the host exceeds the upper limit is cleared.
                "                 �"                                   
This object indicates the alarm generated when the number of users on the host exceeds the lower limit.
                "                 �"                                   
This object indicates that the alarm generated when the number of users on the host exceeds the lower limit is cleared.
                "                 �"
This object indicates the alarm generated when the number of IP addresses in the domain exceeds the lower limit.
                "                 �"
This object indicates that the alarm generated when the number of IP addresses in the domain exceeds the lower limit is cleared.
                "                 �"
This object indicates the alarm generated when the number of IPv6 addresses in the domain exceeds the lower limit.
                "                 �"
This object indicates that the alarm generated when the number of IPv6 addresses in the domain exceeds the lower limit is cleared.
                "                 �"
This object indicates the alarm generated when the number of IPv6 NDRA prefixes in the domain exceeds the lower limit.
                "                 �"
This object indicates that the alarm generated when the number of IPv6 NDRA prefixes in the domain exceeds the lower limit is cleared.
                "                 �"
This object indicates the alarm generated when the number of IPv6 PD prefixes in the domain exceeds the lower limit.
                "                 �"
This object indicates that the alarm generated when the number of IPv6 PD prefixes in the domain exceeds the lower limit is cleared.
                "                 �"
                1 Notice/Trap name:  Policy route reach max value by slot
                2 Notice/Trap generation cause:  Policy route have reached the max value. 
                3 Repair suggestions: NA. 
                "                "
                1 Notice/Trap name:  The number of remote traffic classifier reached the threshold.
                2 Notice/Trap generation cause:  The number of remote traffic classifier reached the threshold. 
                3 Repair suggestions: NA. 
                "                "
                1 Notice/Trap name:  The number of remote traffic classifier below the threshold.
                2 Notice/Trap generation cause:  The number of remote traffic classifier below the threshold. 
                3 Repair suggestions: NA. 
                "                i"
                1. Notification/trap name: The administrator login failure frequently occurs. 
                2. Notification/trap generation cause: The number of login failures of the administrator is close to the threshold. 
                3. Restoration suggestion: Use a valid account to login to the device to enhance system security.
                "                +"
                1. Notification/trap name: The administrator login failure occurs not frequently. 
                2. Notification/trap generation cause: The number of login failures of the administrator is less than the threshold. 
                3. Restoration suggestion: N/A
                "                 �"
                1 Notice/Trap name:  The number of user groups reached the threshold.
                2 Notice/Trap generation cause:  The number of user groups reached the threshold. 
                3 Repair suggestions: NA. 
                "                '"
                1 Notice/Trap name:  The number of user groups fell below 90% of a specified alarm threshold.
                2 Notice/Trap generation cause:  The number of user groups fell below 90% of a specified alarm threshold. 
                3 Repair suggestions: NA. 
                "                 R"
This object indicates the alarm about EDSG license exhaustion.
                "                 b"
This object indicates that the alarm about EDSG license exhaustion is cleared.
                "                 �"
                 This object indicates that an alarm is generated when the user resource or CPU usage on a board exceeds the alarm threshold. 
                "                 �"
                This object indicates that a clear alarm is generated when the user resource or CPU usage on a board falls below the clear alarm threshold. 
                "                "
                1 Notice/Trap name:  Reach Session-group Upper Limit 
                2 Notice/Trap generation cause:  The number of session-group users reached the upper limit of the device.
                3 Repair suggestions:  Check your machine.
                "                "
                1 Notice/Trap name:  Session-group Upper Limit Recovery
                2 Notice/Trap generation cause:   The number of session-group users fell below the upper limit of the device.
                3 Repair suggestions: NA
                "                -"
                1 Notice/Trap name:  Fell Below Session-group Lower Limit 
                2 Notice/Trap generation cause:  The number of session-group users fell below the lower limit of the device .
                3 Repair suggestions:
                       Check your machine.
                "                "
                1 Notice/Trap name:  Session-group Lower Limit Recovery
                2 Notice/Trap generation cause:   The number of session-group users on the device reached the lower limit of the device.
                3 Repair suggestions: NA
                "                "
                1 Notice/Trap name:  Reach Online Sessions Upper Limit
                2 Notice/Trap generation cause:  The number of session reached the upper limit of the device.
                3 Repair suggestions:  Check your machine.
                "                 �"
                1 Notice/Trap name:  Online Sessions Upper Limit Recovery
                2 Notice/Trap generation cause:  The number of sessions fell below the upper limit of the device..
                3 Repair suggestions: NA
                "                "
                1 Notice/Trap name:  Fell Below Online Sessions Lower Limit 
                2 Notice/Trap generation cause:  The number of sessions  fell below the lower limit of the device.
                3 Repair suggestions: Check your machine.
                "                 �"
                1 Notice/Trap name:  Online Sessions Lower Limit Recovery
                2 Notice/Trap generation cause: The number of sessions  reached the lower limit of the device.
                3 Repair suggestions: NA
                "                /"
                1 Notice/Trap name:  Reach Slot Online Users Upper Limit 
                2 Notice/Trap generation cause:  The number of users reached the upper limit of the board.
                3 Repair suggestions:  Please change to another board which can support more sessions.
                "                 �"
                1 Notice/Trap name:  Slot Online Users Upper Limit Recovery
                2 Notice/Trap generation cause:   The number of users fell below the upper limit of the board.
                3 Repair suggestions: NA
                "                H"
                1 Notice/Trap name:  The resource occupied by real-time accounting services reached the major alarm threshold.
                2 Notice/Trap generation cause:  The resource occupied by real-time accounting services reached the major alarm threshold. 
                3 Repair suggestions: NA. 
               "                E"
            1 Notice/Trap name:  The resource occupied by real-time accounting services reached the major alarm clear threshold.
            2 Notice/Trap generation cause:  The resource occupied by real-time accounting services reached the major alarm clear threshold. 
            3 Repair suggestions: NA. 
            "                C"
             1 Notice/Trap name:  The resource occupied by real-time accounting services reached the critical alarm threshold.
             2 Notice/Trap generation cause:  The resource occupied by real-time accounting services reached the critical alarm threshold. 
             3 Repair suggestions: NA. 
             "                K"
            1 Notice/Trap name:  The resource occupied by real-time accounting services reached the critical alarm clear threshold.
            2 Notice/Trap generation cause:  The resource occupied by real-time accounting services reached the critical alarm clear threshold. 
            3 Repair suggestions: NA. 
            "                �"                          
                         1Notice/Trap name:  The mac moved quiet user percentage has reached the mac move quiet user alarm threshold.
                         2 Notice/Trap generation cause:  The mac moved quiet user percentage has reached the mac move quiet user alarm threshold. 
                         3 Repair suggestions: NA. 
                        "                �"                          
                         1Notice/Trap name:  The mac moved quiet user percentage has reached mac moved quiet user alarm clear threshold.
                         2 Notice/Trap generation cause:  The mac moved quiet user percentage has reached mac moved quiet user alarm clear threshold. 
                         3 Repair suggestions: NA. 
                        "                "
            1 Notice/Trap name:  The number of IPv6 addresses reached the upper limit of the device.
            2 Notice/Trap generation cause:  The number of IPv6 addresses reached the upper limit of the device. 
            3 Repair suggestions: NA. 
            "                "
            1 Notice/Trap name:  The number of IPv6 addresses fell below the lower limit of the device.
            2 Notice/Trap generation cause:  The number of IPv6 addresses fell below the lower limit of the device. 
            3 Repair suggestions: NA.
            "                #"
            1 Notice/Trap name:  The number of IPv6 addresses on the slot reached the upper limit of the device.
            2 Notice/Trap generation cause:  The number of IPv6 addresses on the slot reached the upper limit of the device.
            3 Repair suggestions: NA.
            "                )"
            1 Notice/Trap name:  The number of IPv6 addresses on the slot fell below the lower limit of the device.
            2 Notice/Trap generation cause:  The number of IPv6 addresses on the slot fell below the lower limit of the device.
            3 Repair suggestions: NA.
            "                �"
             1 Notice/Trap name:  Performing remote authentication on administrators whose user names do not contain domain names brings security risks.
             2 Notice/Trap generation cause:  Performing remote authentication on administrators whose user names do not contain domain names brings security risks.
             3 Repair suggestions: Configuring the device in the admin domain to send user names with domain names to the remote authen server. 
             "                 "
This object indicates the clear alarm when the number of users on the board or host falls below the threshold.
             "                 w"
This object indicates the clear alarm when the number of users on the board falls below the threshold.
             "                Z"
             1 Notice/Trap name:  User Login Failure.
             2 Notice/Trap generation cause:  The number of user login failures reached the number that can trigger detection and debugging. 
             3 Repair suggestions: Collect alarm, log, and configuration information, and contact Huawei technical support personnel.
             "                 c"
                The number of users on the board/device reached the threshold.
                 "                 _"
             The number of users on the board/device fell below the threshold.
             "                 a"
                The number of users on the board reached the alarm threshold.
                "                 X"
             The number of users on the board fell below the threshold.
             "                 �"
                This object indicates that an alarm is generated when the user resource or CPU usage on a board exceeds the alarm threshold. 
                "                 �"
                This object indicates that a clear alarm is generated when the user resource or CPU usage on a board falls below the clear alarm threshold. 
                "                 �"
             This object indicates that  an alarm is generated when a large number of users went online,  and the number of IPv6 addresses used on the board reached the configured upper threshold.
            "                 �"
             This object indicates that a clear alarm is generated when  the number of IPv6 addresses used for online users on the device fell below the lower threshold. 
            "                 r"This object indicates that the alarm generated when the number of session reached the upper limit of the device."                 v"This object indicates that the alarm generated when the number of sessions fell below the upper limit of the device."                 w"This object indicates that the alarm generated when the number of sessions  fell below the lower limit of the device."                 s"This object indicates that the alarm generated when the number of sessions reached the lower limit of the device."                 o" This object indicates that the alarm generated when the number of users on the host exceeds the lower limit."                 z" This object indicates that the alarm generated when the number of users on the host exceeds the lower limit is cleared."                 n"This object indicates that the alarm generated when the number of users on the host exceeds the upper limit."                 y"This object indicates that the alarm generated when the number of users on the host exceeds the upper limit is cleared."                 t"This object indicates that the alarm generated when the number of remote traffic classifier reached the threshold."                 r"This object indicates that the alarm generated when the number of remote traffic classifier below the threshold."                 �"This object indicates that an alarm is generated to prompt a customer to configure backup protection on an interface when the number of users with no backup protection configured on the interface reaches the threshold."                 �"
                This object indicates the alarm generated when the number of IPv6 addresses in the domain exceeds the lower limit.
                "                 �"
                This object indicates that the alarm generated when the number of IPv6 addresses in the domain exceeds the lower limit is cleared.
                "                 �"
               This object indicates the alarm generated when the number of IPv6 NDRA prefixes in the domain exceeds the lower limit.
                "                 �"
                This object indicates that the alarm generated when the number of IPv6 NDRA prefixes in the domain exceeds the lower limit is cleared.
                "                 �"
                This object indicates the alarm generated when the number of IPv6 PD prefixes in the domain exceeds the lower limit.
                "                 �"
                This object indicates that the alarm generated when the number of IPv6 PD prefixes in the domain exceeds the lower limit is cleared.
                "                 �"
               This object indicates that the proportion of the IPv6 prefixes allocated in DHCPv6-PD mode in the domain to the total number of IPv6 prefixes has reached the threshold.
                "                 �"
                This object indicates that the IPv6 DHCPv6-PD prefix usage of the domain falls below the threshold.
                "                 |"
                This object indicates that the IP address usage of the domain has reached the threshold.
                "                 |"
                This object indicates that the IP address usage of the domain falls below the threshold.
                "                 �"
                This object indicates that the proportion of the IPv6 addresses allocated in the domain to the total number of IPv6 addresses has reached the threshold.
                "                 ~"
                This object indicates that the IPv6 address usage of the domain falls below the threshold.
                "                 �"
                This object indicates that the proportion of the IPv6 prefixes allocated in NDRA mode in the domain to the total number of IPv6 prefixes has reached the threshold.
                "                 �"
                This object indicates that the IPv6 NDRA prefix usage of the domain falls below the threshold.
                "                 �"
                This object indicates the alarm generated when the number of IP addresses in the domain exceeds the lower limit.
                "                 �"
                This object indicates that the alarm generated when the number of IP addresses in the domain exceeds the lower limit is cleared.
                "                 �"This object indicates that an alarm is generated The Eth-Trunk of IP static user contains member ports on different types of cards.
               "                 r"This object indicates that an alarm is generated user traffic is sent on the BAS interface of the backup device."                Z"
             1 Notice/Trap name:  User Login Failure.
             2 Notice/Trap generation cause:  The number of user login failures reached the number that can trigger detection and debugging. 
             3 Repair suggestions: Collect alarm, log, and configuration information, and contact Huawei technical support personnel.
             "                 q"
                This object indicates that the usage of username index exceeds the threshold.
                "                 �"
                This object indicates that the alarm generated when the usage of username falls below the threshold is cleared.
                "                 q"
                This object indicates that the usage of username index exceeds the threshold.
                "                 �"
                This object indicates that the alarm generated when the usage of username falls below the threshold is cleared.
                "                        U"
                1 Notice/Trap name:  Reach IP address Allocable Threshold 
                2 Notice/Trap generation cause:  reach the threshold set at domain 
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool
                    Add new IP pool to this domain .

                "                U"
                1 Notice/Trap name:  Reach IP address Allocable Threshold 
                2 Notice/Trap generation cause:  reach the threshold set at domain 
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool
                    Add new IP pool to this domain .

                "                U"
                1 Notice/Trap name:  Reach IP address Allocable Threshold 
                2 Notice/Trap generation cause:  reach the threshold set at domain 
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool
                    Add new IP pool to this domain .

                "                U"
                1 Notice/Trap name:  Reach IP address Allocable Threshold 
                2 Notice/Trap generation cause:  reach the threshold set at domain 
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool
                    Add new IP pool to this domain .

                "                U"
                1 Notice/Trap name:  Reach IP address Allocable Threshold 
                2 Notice/Trap generation cause:  reach the threshold set at domain 
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool
                    Add new IP pool to this domain .

                "                 �"
                1 Notice/Trap name:  Local user password will expire
                2 Notice/Trap generation cause:  Local user doesnot change password 
                3 Repair suggestions:
                    NA
                "                 �"
                1 Notice/Trap name:  Local user password had expired
                2 Notice/Trap generation cause:  Local user doesnot change password always
                3 Repair suggestions:
                    NA
                "                         O"The compliance statement for systems supporting 
                this module."                   *"The authentication scheme configuration."                 #"The account scheme configuration."                 !"The domain group configuration."                 ."The domain extent table group configuration."                 ,"The domain statistics group configuration."                 /"The authorization scheme group configuration."                 %"The local user group configuration."                 ,"The local user extent group configuration."                 &"The AAA setting group configuration."                 )"The AAA statistics group configuration."                 !"The access group configuration."                 ("The access extent group configuration."                 0"The account scheme extent group configuration."                 $"The bill pool group configuration."                 $"The bill tftp group configuration."                 "The user group configuration."                 $"The IP access group configuration."                 1"The cut access user scheme group configuration."                 '"The AAA user ppp group configuration."                 0"The AAA user web and fast group configuration."                 )"The AAA user dot1x group configuration."                 ("The AAA user bind group configuration."                 ("The record scheme group configuration."                 %"The MAC access group configuration."                 ."The slot connect number group configuration."                 4"The offline reason statistics group configuration."                 )"The multicast list group configuration."                 ,"The multicast profile group configuration."                 3"The multicast profile extent group configuration."                 '"The AAA trap old group configuration."                 "The AAA traps."                     "The lam traps."                     #"The obsolete group configuration."                 )"The service scheme group configuration."                 /"The dhcp option121 route group configuration."                 0"The access delay per slot group configuration."                 )"The vpn access user stat configuration."                 /"The interface access user stat configuration."                 ,"The domain access user stat configuration."                 *"The slot access user stat configuration."                 1"Configure a pool group in the specified domain."                 <"Change the priority of pool group in the specified domain."                 "The user log configuration"                 3"The global option64 parse separator configuration"                 C"The global whether to deal dhcp server's ack packet configuration"                 '"Change user's user-group by username."                 ("The domain configuration in interface."                 &"The authorization-cmd configuration."                 ("Tariff package information statistics."                  "Administrator password policy."                 "Access-user password policy."                 "The IP pool of domain."                 "The authentication profile."                 "The authentication free rule."                 "The dot1x access profile."                  "The mac-authen access profile."                 "The portal access profile."                 "ReAuthen User"                 "The access users profile."                