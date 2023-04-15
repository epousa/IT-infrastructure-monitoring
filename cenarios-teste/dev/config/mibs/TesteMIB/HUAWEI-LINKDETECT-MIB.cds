�-- =================================================================
-- Copyright (C) 2017 by HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: HUAWEI Private Interface MIB
-- Reference:
-- Version: V2.01
-- History:
--	
-- =================================================================
-- ==================================================================
-- 
-- Variables and types be imported
--
-- ==================================================================
     p"Management Information Base module for Link Detect,
	    local system data and remote systems data components." �"Huawei Industrial Base  Bantian, Longgang   Shenzhen 518129   People's Republic of China   Website: http://www.huawei.com   Email: support@huawei.com " "201711132009Z" !"Modify consistent for this mib."       -- June 24, 2011 at 00:00 GMT
               �"Specifies the neid of the local device. The neid is carried 
        in the management address TLV of LinkDetect packet and is used
        to identify NM devices in network management."                           
"Slot ID."                       
"Card ID."                       
"Port ID."                       "Display link neighbors table."                       %"Entries of the link neighbor table."                       "Main ifIndex or subIfIndex."                       "Local neid."                       "Local port type."                       "Local slot ID."                       "Local card ID."                       "Local port ID."                       "Local vlanId or vc12Id."                       "Local vc4Id."                       "Remote neid."                       "Remote port type."                       "Remote slot ID."                       "Remote card ID."                       "Remote port ID."                       "Remote vlanId or vc12Id."                       "Remote vc4Id."                           "Main interface index."                       7" 1 : link-detect enable, 2 : undo link-detect enable."                       &"Display interface link switch table."                       #"Entries of the link switch table."                       "Main ifIndex."                       " 0 : enable, 1 : disable"                           @"Notify the NMS that the neighbor of one interface is changed ."                 >"Notity the NMS that the neighbor number of one slot is full."                         S"The compliance statement for systems supporting 
                the this module."                   "Confige or get the sys-neid."                 "Search link neighbor table."                 "Query link neighbor table."                 _"Trap when the neighbors of one interface change or the number of the entire neighbor is full."                     "Query link neighbor table."                 "Query link neighbor table."                            