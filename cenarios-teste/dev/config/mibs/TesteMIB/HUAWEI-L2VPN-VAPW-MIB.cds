y-- ===================================================================
-- Copyright (C) 2014 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This MIB contains private managed object and notification 
--              trap definitions for virtual cluster access.
-- Reference:
-- Version: V1.01
-- ===================================================================
         H"This MIB contains private network virtual access PW notification trap." �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China 
                 Website: http://www.huawei.com
                 Email: support@huawei.com" "201403031311Z" "201403031311Z" 6"Modify type of hwVirtualAccessPwReason at 2015-9-29." "V1.00, initial version."                   D"Indicates the virtual access interface index of virtual access PW."                       C"Indicates the virtual access interface name of virtual access PW."                       "Indicates the AP ID."                       ""Indicates the AP interface name."                       W"Indicates the source node administrative IP address of failure virtual access tunnel."                       \"Indicates the destination node administrative IP address of failure virtual access tunnel."                       4"Indicates the ID of failure virtual access tunnel."                      #"This object indicates the cause that the VirtualAccessPw becomes down.
                 Options:
                 Interface Down  --indicates ac interface was down.
                 Tunnel Down     --indicates virtual access tunnel was down.
                 MTU unmatched   --indicates mtu of VirtualAccessPw not match.
                 Others          --indicates other reason.
                 PW Delete       -- indicates VirtualAccessPw was deleted.
                 PW Up           -- indicates VirtualAccessPw was up.   
                 "                           E"This notification indicates that virtual access pw changes to down."                 C"This notification indicates that virtual access pw changes to up."                         b"The compliance statement for systems supporting 
                the HUAWEI-VirtualAccessPw-MIB."                   "The virtual access pw group."                 +"The virtual access pw Notification group."                                