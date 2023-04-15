l-- ================================================================
-- Copyright (C) 2017 by HUAWEI TECHNOLOGIES. All rights reserved
--
-- Description:The mib file is for management of huawei RIP extension
-- Reference:
-- Version: V1.04
-- History:
-- 2006.5.18, publish
-- 2014.5.28, modified
-- ================================================================
    �"The HUAWEI-RIPv2-EXT-MIB.mib contains objects to configure RIP
        module, including query RIP process, RIP VPN-instance configuration
        and status. This MIB module objects indicate hwRip2ProcInstTable.
                 
            RIP can support many processes, but mib can support only one of
        them. To get more RIP configuration, it is required to locate one 
        specified RIP process. " �"Huawei Industrial Base
              Bantian, Longgang
               Shenzhen 518129
               People's Republic of China
               Website: http://www.huawei.com
               Email: support@huawei.com
             " "201710241625Z" "201708171943Z" "201409180930Z" "201405281430Z" 5" Modified hwRip2ProcessId,hwRip2CurrentProcId type." @" Modified hwRip2ProcInstTable,hwRip2CurrentProcId discription." A" Modified HwRip2ProcInstEntry sequence, extra comma is removed."."V.1.01, Added below nodes in hwRip2Ext 
	            	hwRip2Notifications 
	            	   hwRip2DBOverFlow 
	            	   hwRip2DBOverFlowResume
                hwRip2DBLimit and hwRip2DBThresholdLevel  as parameters for 
                hwRip2DBOverFlow and hwRip2DBOverFlowResume respectively."       -- Oct 24, 2017 at 16:26 GMT
       1"This object indicates the current RIP process.
"                       )"Information about the VRF of a process."                       "The RIP process id."                       "VRF Name."                       1"This object indicates the current RIP process.
"                       �"Maximum number of routes that can be added to RIP database.
           When this limit is reached, the RIP process will be suspended and hwRip2DBOverFlow notification will be sent."                       f"RIP database threshold value in percentage(%). 
            This is used only for RIP notifications."                               #"The HUAWEI RIPv2 extension Table."                 *"This group is used for RIP notifications"                         c"The compliance statement for SNMPv2 entities
       which implement the HUAWEI RIP extension MIB."   O"This group is required for RIP systems that
       support RIP notifications."                �"A hwRip2DBOverFlow notification signifies that there 
           has been maximum number of routes added to RIP database for
           the given process and no more routes can be added to RIP by
           redistibution or by learning.
 
           This notification should be generated when the number of routes
           added to RIP database reaches maximum value. RIP process will be suspended at this state."                 �"A hwRip2DBOverFlowResume notification signifies that the RIP database size has dropped to the
            lower threshold. RIP process will resume it's normal operation."                            