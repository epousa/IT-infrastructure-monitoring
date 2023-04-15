�--
-- HUAWEI-L2VPN-PW-APS-MIB.mib
--
--  ==================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI L2VPN PW APS TRAP Management MIB
-- Reference:
-- Version:     V2.16
-- History:
--              V1.0 houchengjie, 2011-04-21, publish
-- ==================================================================
         L"The HUAWEI-L2VPN-PW-APS-MIB contains objects to
            manage PW APS." �"Huawei Industrial Base
              Bantian, Longgang
               Shenzhen 518129
               People's Republic of China
               Website: http://www.huawei.com
               Email: support@huawei.com
             " "201801241630Z" "201801131630Z" "201708041700Z" "201607041400Z" "201511271400Z" "201305131250Z" #"V2.16, modify english description" #"V2.15, modify english description" #"V2.14, modify english description" "V2.13, modify compile error" N"V2.12, add hwPwApsTunnelNonSupport hwPwApsTunnelNonSupportResumed for router" ("V2.11, add hwPwApsDegraded for PTN5900"       -- Jan 24, 2018 at 16:30GMT
           )"This table contains PW APS information."                       -"Provides the information of a PW APS entry."                       /"This object indicates the PW APS instance ID."                       1"This object indicates the PW APS instance role."                       2"This object indicates the PW APS request result."                       *"This object indicates the PW APS status."                       :"This object indicates the working path status of PW APS."                       ="This object indicates the protection path status of PW APS."                           �"This object indicates that APS reports an alarm when protection types in APS packets received from the remote end and those on the local end are inconsistent."                 �"This object indicates that the APS-reported alarm for the protection type inconsistency in APS packets received from the remote end and those on the local end is cleared."                 �"This object indicates that APS reports an alarm when information about the working and protection paths in APS packets received from the remote end is inconsistent with that on the local end."                 �"This object indicates that the APS-reported alarm for the information (about the working and protection paths in received APS packets) inconsistency between the remote and local ends is cleared."                 �"This object indicates that APS reports an alarm when the traffic switching results between the local and remote ends are inconsistent."                 �"This object indicates that the APS-reported alarm for the inconsistency of the traffic switching results between the local and remote ends is cleared."                 L"This object indicates that APS reports an alarm when APS packets are lost."                 ["This object indicates that the APS-reported alarm for the loss of APS packets is cleared."                 n"This object indicates that APS reports an alarm when the APS IDs of the master and backup RSGs do not match."                 "This object indicates that the APS-reported alarm for the APS ID inconsistency between the master and backup RSGs is cleared."                 w"This object indicates that APS reports an alarm when the bypass PW between the master and backup RSGs is unavailable."                 �"This object indicates that the APS-reported alarm for the unavailability of the bypass PW between the master and backup RSGs is cleared."                 ;"This object indicates that the PW APS status has changed."                 {"This object indicates that an alarm is generated when both the primary and secondary PWs in an APS protection group fail."                 h"This object indicates that the alarm can be cleared after one PW in the APS protection group recovers."                 e"This object indicates that an alarm is generated when a PW in the APS protection group is degraded."                 b"This object indicates that the alarm for the degraded PW in the APS protection group is cleared."                 W"This object indicates that PW APS does not support the current public network tunnel."                 �"This object indicates that the alarm, which indicated that PW APS did not support the current public network tunnel, is cleared."                             N"The compliance statement for systems supporting the HUAWEI-L2VPN-PW-APS-MIB."                   "The PW APS group."                  "The PW APS Notification group."                                