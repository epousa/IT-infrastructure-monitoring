x-- ===================================================================
-- Copyright (C) 2016 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This MIB contains private managed object and notification 
--              trap definitions for virtual access.
-- Reference:
-- Version: V1.05
-- ===================================================================
     `"This MIB contains private managed object and notification trap definitions for virtual access." �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China 
                 Website: http://www.huawei.com
                 Email: support@huawei.com" "201608031926Z" "201607291537Z" "201606021422Z" "201602291655Z" "201509101144Z" "201505191549Z" f"V1.05,Add hwVirtualAccessTunnelName hwVirtualAccessExplicitPathName  for hwVirtualAccessTunnelReOpt." e"V1.04,Add hwVirtualAccessTunnelName hwVirtualAccessExplicitPathName for hwVirtualAccessTunnelEntry." ;"V1.03,Add a reason for hwVirtualAccessTunnelSwitchReason." i"V1.02,Add hwVirtualAccessTunnelHSBSwitch,hwVirtualAccessTunnelHSBResume,hwVirtualAccessTunnelHSBResume." "V1.01, Modify Index number." "V1.00, initial version."                       �"Basic information about virtual access Lsp.
                 The index of this table is hwVirtualAccessLspSourceNodeId, hwVirtualAccessLspDestNodeId, hwVirtualAccessTunnelIdentity, hwVirtualAccessLspType.
                "                       �"Basic information about virtual access Lsp.
                 The index of this entry is hwVirtualAccessLspSourceNodeId, hwVirtualAccessLspDestNodeId, hwVirtualAccessTunnelIdentity, hwVirtualAccessLspType.
                "                       9"Indicates the administrative IP address of source node."                       >"Indicates the administrative IP address of destination node."                       "Indicates the Tunnel ID."                       �"Indicates type of VP.
                Options:
                1. primary(1)          -indicates VP type is primary.
                2. hotstandby(2)       -indicates VP type is hotstandby."                       $"Indicates the AP ID of failure AP."                       ."Indicates the index of failure AP interface."                       -"Indicates the name of failure AP interface."                       �"Indicates VP operate state.
                Options:
                1. up(1)          -indicates VP operate state is up.
                2. down(2)        -indicates VP operate state is down."                       "Indicates the VP ID."                       �"Basic information about virtual access Tunnel.
                 The index of this table is hwVirtualAccessTunnelSourceNodeId, hwVirtualAccessTunnelDestNodeId, hwVirtualAccessTunnelId.
                "                       �"Basic information about virtual access VP group.
                 The index of this entry is hwVirtualAccessTunnelSourceNodeId, hwVirtualAccessTunnelDestNodeId, hwVirtualAccessTunnelId.
                "                       B"Indicates the source node administrative IP address of VP group."                       G"Indicates the destination node administrative IP address of VP group."                       %"Indicates the group ID of VP group."                       y"Indicates  the last down VP ID for hwVirtualAccessTunnelDown, or the frist up VP ID for hwVirtualAccessTunnelDownClear."                       ."Indicates the index of failure AP interface."                       �"Indicates VP group operate state.
                Options:
                1. up(1)          -indicates VP group operate state is up.
                2. down(2)        -indicates VP group operate state is down."                      "This object indicates the cause that the VP group becomes down.
                 Options:
                 1. TunnelUp(1)            --indicates Tunnel was up.
                 2. TunnelDelete(2)        --indicates Tunnel was deleted.
                 3. BfdDown(3)         --indicates BFD was down.
                 4. ApDown(4)          --indicates AP down.
                 5. ApInterfaceDown(5) --indicates AP interface was down.
                 6. other(6)           --indicates other reason.
				 "                       :"This object indicates name of the virtual access tunnel."                       F"This object indicates the explicit path name that the tunnel binded."                       �"Basic information about virtual access link down.
                 The index of this table is hwVirtualAccessLinkDownApId, hwVirtualAccessLinkDownIfIndex.
                "                       �"Basic information about virtual access link down.
                 The index of this entry is hwVirtualAccessLinkDownApId, hwVirtualAccessLinkDownIfIndex.
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
				 "                       �"Basic information about virtual access AP Selected Master.
                 The index of this table is hwVirtualAccessApIpAddress, hwVirtualAccessPrimaryMasterIpAddress, hwVirtualAccessSecondaryMasterIpAddress.
                "                       �"Basic information about virtual access AP.
                 The index of this entry is hwVirtualAccessApIpAddress, hwVirtualAccessPrimaryMasterIpAddress, hwVirtualAccessSecondaryMasterIpAddress.
                "                       $"Indicates the AP ID of failure AP."                       0"Indicates the primary master ID of failure AP."                       2"Indicates the Secondary master ID of failure AP."                       �"Basic information about virtual access Exter link down.
                 The index of this table is hwVirtualAccessExterLinkDownApId, hwVirtualAccessExterLinkDownIfIndex.
                "                       �"Basic information about virtual access Exter link down.
                 The index of this entry is hwVirtualAccessExterLinkDownApId, hwVirtualAccessLinkDownIfIndex.
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
				 "                               a"The compliance statement for systems supporting 
                the HUAWEI-VirtualAccess-MIB."                   ""The virtual access tunnel group."                 /"The virtual access tunnel Notification group."                             F"This notification indicates that virtual access LSP changes to down."                 D"This notification indicates that virtual access LSP changes to up."                     I"This notification indicates that virtual access tunnel changes to down."                 G"This notification indicates that virtual access tunnel changes to up."                 U"This notification indicates that virtual access tunnel switches to hot-standby LSP."                 V"This notification indicates that virtual access tunnel resumes from hot-standby LSP."                 F"This notification indicates that virtual access tunnel re-optimized."                     ="This notification indicates that interface changes to down."                 ;"This notification indicates that interface changes to up."                     ="This notification indicates that interface changes to down."                 ;"This notification indicates that interface changes to up."                     H"This notification indicates that the master of ap have been selected ."                    �"This object indicates the cause that the hot-standby LSP switches.
                 Options:
                 1. PrimaryLspDown(1)                        --indicates primary LSP was down.
                 2. PrimaryBfdDown(2)                         --indicates primary BFD was down.
                 3. PrimaryLinkNumberNotSatisfy(3) --indicates the number of links on primary LSP does not meet requirements.
				 "                       "Indicates the path of LSP."                                  