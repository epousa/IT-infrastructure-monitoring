�-- ===================================================================
-- Copyright (C) 2014 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This MIB contains private managed object and notification 
--              trap definitions for virtual cluster access.
-- Reference:
-- Version: V1.00
-- ===================================================================
     h"This MIB contains private managed object and notification trap definitions for virtual cluster access." �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China 
                 Website: http://www.huawei.com
                 Email: support@huawei.com" "201403031311Z" "V1.00, initial version."                       �"The work mode of virtual cluster access system.
                Options:
                1. master(1)       -indicates work mode of Master.
                2. slave(2)        -indicates work mode of Slave."                       T"The value of this object identifies the administrative IP address of master/slave."                       9"The VPN instance name of virtual cluster access system."                      	"In slave work mode, the mode of discovery administrative IP address.
                Options:
                1. config(1)      -configuration in virtual cluster access system.
                2. auto(2)        -auto discovery by virtual cluster access system."                      "In slave work mode, the mode of discovery master infomation.
                Options:
                1. config(1)      -configuration in virtual cluster access system.
                2. auto(2)        -auto discovery by virtual cluster access system."                       "The ID of path compute master"                          "Basic information about virtual cluster access VP.
                 The index of this table is hwVirtualClusterAccessVpSourceNodeId, hwVirtualClusterAccessVpDestNodeId, hwVirtualClusterAccessVpGroupIdentity, hwVirtualClusterAccessVpType.
                "                      "Basic information about virtual cluster access VP.
                 The index of this entry is hwVirtualClusterAccessVpSourceNodeId, hwVirtualClusterAccessVpDestNodeId, hwVirtualClusterAccessVpGroupIdentity, hwVirtualClusterAccessVpType.
                "                       9"Indicates the administrative IP address of source node."                       >"Indicates the administrative IP address of destination node."                       "Indicates the VP group ID."                       �"Indicates type of VP.
                Options:
                1. primary(1)          -indicates VP type is primary.
                2. hotstandby(2)       -indicates VP type is hotstandby."                       $"Indicates the AP ID of failure AP."                       ."Indicates the index of failure AP interface."                       -"Indicates the name of failure AP interface."                       �"Indicates VP operate state.
                Options:
                1. up(1)          -indicates VP operate state is up.
                2. down(2)        -indicates VP operate state is down."                      �"This object indicates the cause that the VP becomes down.
                 Options:
                 1. VpUp(1)            --indicates VP was up.
                 2. VpDelete(2)        --indicates VP was deleted.
                 3. BfdDown(3)         --indicates BFD was down.
                 4. ApDown(4)          --indicates AP down.
                 5. ApInterfaceDown(5) --indicates AP interface was down.
                 6. other(6)           --indicates other reason.
				 "                       "Indicates the VP ID."                       �"Basic information about virtual cluster access VP group.
                 The index of this table is hwVirtualClusterAccessVpGroupSourceNodeId, hwVirtualClusterAccessVpGroupDestNodeId, hwVirtualClusterAccessVpGroupId.
                "                       �"Basic information about virtual cluster access VP group.
                 The index of this entry is hwVirtualClusterAccessVpGroupSourceNodeId, hwVirtualClusterAccessVpGroupDestNodeId, hwVirtualClusterAccessVpGroupId.
                "                       B"Indicates the source node administrative IP address of VP group."                       G"Indicates the destination node administrative IP address of VP group."                       %"Indicates the group ID of VP group."                       a"Indicates  the last down VP ID for hwVpGroupDown, or the frist up VP ID for hwVpGroupDownClear."                       �"Indicates VP group operate state.
                Options:
                1. up(1)          -indicates VP group operate state is up.
                2. down(2)        -indicates VP group operate state is down."                      "This object indicates the cause that the VP group becomes down.
                 Options:
                 1. VpGroupUp(1)            --indicates VP Group was up.
                 2. VpGroupDelete(2)        --indicates VP Group was deleted.
                 3. BfdDown(3)         --indicates BFD was down.
                 4. ApDown(4)          --indicates AP down.
                 5. ApInterfaceDown(5) --indicates AP interface was down.
                 6. other(6)           --indicates other reason.
				 "                       *"Indicates the primary VP ID of VP group."                       *"Indicates the standby VP ID of VP group."                      "Indicates the switch direction of VP group.
                Options:
                1. primarytohotstandby(1)          -indicates switch direction is  primary to hotstandby.
                2. hotstandbytoprimary(2)        -indicates switch direction is hotstandby to primary."                       �"Basic information about virtual cluster access VC.
                 The index of this table is hwVirtualClusterAccessVcMasterId, hwVirtualClusterAccessVcApId, hwVirtualClusterAccessVcIfIndex, hwVirtualClusterAccessVcAcIfIndex.
                "                       �"Basic information about virtual cluster access VC.
                 The index of this entry is hwVirtualClusterAccessVcMasterId, hwVirtualClusterAccessVcApId, hwVirtualClusterAccessVcIfIndex, hwVirtualClusterAccessVcAcIfIndex.
                "                        "Indicates the master ID of VC."                       "Indicates the AP ID of VC."                       -"Indicates the remote interface index of VC."                       )"Indicates the AP interface index of VC."                       /"Indicates the remote AP interface name of VC."                       ("Indicates the AP interface name of VC."                       J"Indicates the source node administrative IP address of failure VP group."                       O"Indicates the destination node administrative IP address of failure VP group."                       -"Indicates the group ID of failure VP group."                       !"Indicates the ID of failure VC."                       #"Indicates the type of failure VC."                       &"Indicates the peer ip of failure VC."                       �"Indicates VC operate state.
                Options:
                1. up(1)          -indicates VC operate state is up.
                2. down(2)        -indicates VC operate state is down."                      �"This object indicates the cause that the VC becomes down.
                 Options:
                 1. BfdDown(1)            --indicates BFD was down.
                 2. physicDown(2)        --indicates physic was down.
                 3. ApDownOrApOffLine(3)    --indicates AP was down or off line.
                 4. outPwDown(4)          --indicates out PW was down.
                 5. VpGroupDown(5) --indicates VP group was down.
                 6. other(6)           --indicates other reason.
                 7. VcDelete   -- indicates VC was deleted.
                 8. VcUp       -- indicates VC was up.
                  "                       �"Basic information about virtual cluster access remote AP interface.
                 The index of this table is hwVirtualClusterAccessRemoteApIfMasterId, hwVirtualClusterAccessRemoteApIfIndex.
                "                       �"Basic information about virtual cluster access remote AP interface.
                 The index of this entry is hwVirtualClusterAccessRemoteApIfMasterId, hwVirtualClusterAccessRemoteApIfIndex.
                "                       1"Indicates the master ID of remote AP interface."                       -"Indicates the index of remote AP interface."                       ,"Indicates the name of remote AP interface."                       �"Indicates the interface operate state.
                Options:
                1. up(1)          -indicates interface operate state is up.
                2. down(2)        -indicates interface operate state is down."                      �"This object indicates the cause that the remote AP interface becomes down.
                 Options:
                 1. ConfigError(1)            --indicates configuration was error.
                 2. VcDown(2)        --indicates VC was down.
                 3. ApDownOrApOutline(3)    --indicates AP was down or outline.
                 4. other(4)          --indicates other reason.
                 5. remoteApDelete(5) --indicates remote AP was deleted.
				 "                       �"Basic information about virtual cluster access AP.
                 The index of this table is hwVirtualClusterAccessApId, hwVirtualClusterAccessApMasterId.
                "                       �"Basic information about virtual cluster access AP.
                 The index of this entry is hwVirtualClusterAccessApId, hwVirtualClusterAccessApMasterId.
                "                       $"Indicates the AP ID of failure AP."                       ("Indicates the master ID of failure AP."                       �"Indicates AP operate state.
                Options:
                1. up(1)          -indicates AP operate state is up.
                2. down(2)        -indicates AP operate state is down."                      �"This object indicates the cause that the AP becomes down.
              Options:
                 1. ConfigCancel(1)    --indicates configuration was canceled.
                 2. MscpSessionDown(2) --indicates MSCP session was down.
                 3. other(3)           --indicates other reason.
                 4. ApDelete(4)        --indicates AP was deleted.
                 5. ApUp(5)            --indicates AP was up.
				 "                       �"Basic information about virtual cluster access master.
                 The index of this table is hwVirtualClusterAccessMasterPeerDownMasterId, hwVirtualClusterAccessMasterPeerDownPeerMasterId.
                "                       �"Basic information about virtual cluster access master.
                 The index of this entry is hwVirtualClusterAccessMasterPeerDownMasterId, hwVirtualClusterAccessMasterPeerDownPeerMasterId.
                "                       G"Indicates the master administrative IP address of failure connection."                       L"Indicates the peer master administrative IP address of failure connection."                       �"Indicates peer master operate state.
                Options:
                1. up(1)          -indicates peer master operate state is up.
                2. down(2)        -indicates peer master operate state is down."                      B"This object indicates the cause that the peer master becomes down.
             Options:
                 1. MscpSessionDown(1) --indicates MSCP session was down.
                 2. masterQuitVirtualclusteraccess(2) --indicates master quit virtual cluster access.
                 3. peerMasterRequestDisconnect(3)   --indicates peer master request disconnect.
                 4. other(4)        --indicates other reason.
                 5. peerMasterDelete(5) --indicates peer master was deleted.
                 6. ApUp(6)            --indicates AP was up.
				 "                       �"Basic information about virtual cluster access link down.
                 The index of this table is hwVirtualClusterAccessLinkDownApId, hwVirtualClusterAccessLinkDownIfIndex.
                "                       �"Basic information about virtual cluster access link down.
                 The index of this entry is hwVirtualClusterAccessLinkDownApId, hwVirtualClusterAccessLinkDownIfIndex.
                "                       ="Indicates the AP administrative IP address of failure node."                       +"Indicates the index of failure interface."                       �"Indicates the interface administrative operate state.
                Options:
                1. up(1)          -indicates interface administrative state is up.
                2. down(2)        -indicates interface administrative state is down."                       �"Indicates link operate state.
                Options:
                1. up(1)          -indicates link operate state is up.
                2. down(2)        -indicates link operate state is down."                       *"Indicates the name of failure interface."                      i"This object indicates the cause that the Link becomes down.
                 Options:
                 1. ifPhysicalLinkDown(1)     --indicates interface physical link was down.
                 2. interfaceDelete(2)        --indicates interface was deleted.
                 3. ifPhysicalLinkUp(3)       --indicates interface physical link was up.
				 "                       �"In slave work mode, basic information about virtual cluster access master information.
                 The index of this table is hwVirtualClusterAccessMasterInfoId.
                "                       �"In slave work mode, basic information about virtual cluster access master information.
                 The index of this entry is hwVirtualClusterAccessMasterInfoId.
                "                       4"Indicates the administrative IP address of master."                       �"Indicates the bandwidth type used by this tunnel. 
                Options:
                1. primary(1)          -indicates this is primary master.
                2. secondary(2)        -indicates this is secondary master.
                "                      D"Indicates the bandwidth type used by this tunnel. 
                Options:
                1. init(1)             -indicates connection is not connected yet.
                2. setup(2)            -indicates connection is up.
                3. preregistering(3)   -indicates AP have sent preregister message and wait response from master.
                4. registering(4)      -indicates AP have sent register message and wait response from master.
                5. running(5)          -indicates connection is connected and registered successfully.
                "                      �"Indicates the bandwidth type used by this tunnel. 
                Options:
                1. idle(1)          -indicates GR is not running.
                2. reconnect(2)     -indicates GR is waiting for connection UP.
                3. recovery(3)      -indicates connection is UP and update datas.
                4. aging(4)         -indicates aging un-update datas.
                "                       &"Indicates the up time of connection."                       )"Indicates the base value of labelspace."                        "Indicates the labelspace size."                               6"This notification indicates that VP changes to down."                 4"This notification indicates that VP changes to up."                     <"This notification indicates that VP group changes to down."                 :"This notification indicates that VP group changes to up."                 G"This notification indicates that traffic switch occurred in VP group."                     6"This notification indicates that VC changes to down."                 4"This notification indicates that VC changes to up."                     G"This notification indicates that remote AP interface changes to down."                 E"This notification indicates that remote AP interface changes to up."                     6"This notification indicates that AP changes to down."                 4"This notification indicates that AP changes to up."                 4"This notification indicates that AP changes to up."                     8"This notification indicates that peer master was lost."                 <"This notification indicates that peer master lost resumed."                     ="This notification indicates that interface changes to down."                 ;"This notification indicates that interface changes to up."                         4"Basic information about virtual cluster access VP."                 :"Basic information about virtual cluster access VP group."                 4"Basic information about virtual cluster access VC."                 E"Basic information about virtual cluster access remote AP interface."                 4"Basic information about virtual cluster access AP."                 8"Basic information about virtual cluster access master."                 6"The virtual cluster access Notification information."                     ;"Basic information about virtual cluster access link down."                 D"Basic information about virtual cluster access global information."                 X"In slave work mode, basic information about virtual cluster access master information."                     )"The virtual cluster access information."                          