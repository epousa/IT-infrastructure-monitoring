�--==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI LINE MIB
-- Reference:
-- Version: V2.10
-- History:
-- <author>,  <date>,  <contents>
-- huxiaolin 2012-12-28 
-- Wang Feng 2014-04-22 Add nodes for wlan npe trusted host
-- ==================================================================
                     �"HUAWEI-LINE-MIB is used to configure and query attributes of connections 
                through management interfaces by users, such as the maximum number of Telnet 
                connections and login information about users.
                ""Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201701181043Z" "201603311043Z" "201603161043Z" "201603071043Z" "201507281520Z" "201405061624Z" "201404291624Z" "201404251624Z" "201404221624Z" "201404081624Z" "200907311624Z" <"Modify Trap of  hwVtyHostPermitRowState for compile error." ."Modify Trap of  hwIpUnLocked and hwIpLocked." ""New Trap added for hwIpUnLocked."  "New Trap added for hwIpLocked." H"New Trap added for SSH and Telnet for frequent authentication failure." &"New Trap added for SSH login/logout." "VB description updated" '"New VBs added in HwLoginUserInfoEntry" 2"Modified to add nodes for wlan npe trusted host." '"Modified to support Trap in VRP V8R8." +"The initial revision of this MIB module ."       -- Mar 07, 2016 at 10:43 GMT
               �"The value of this object identifies the maximum number of Telnet connections. 
                The value ranges from 0 to 15. The default value is 5."                           ?"This table is used to display the user information for login."                       4"This table describes information about user login."                       D"This object indicates the index of the user information for login."                       7"This object indicates the name of the user for login."                       ="This object indicates the IP address of the user for login."                       A"This object indicates the channel number of the user for login."                       <"This object indicates the authentication method for login."                       ;"This object indicates the VPN name of the user for login."                           8"This table describes information about user Interface."                       8"This table describes information about user Interface."                       !"The type of the user interface."                       ""The index of the user interface."                       0"The authentication mode of the user interface."                       %"The protocol of the user interface."                       "RowStatus for this Table."                           +"This object indicates trusted host table."                       @"This object indicates trusted the entry of trusted host table."                       F"The value of this object identifies the index of trusted host table."                       A"The value of this object identifies ip address of trusted host."                       C"The value of this object identifies mask address of trusted host."                       F"The value of this object identifies the description of trusted host."                       -"This object identifies the status of a row."                           ,"Login failed times in the statistic period"                       ."Statistic period to count login failed times"                       ="This object indicates the IP address of the user for login."                       ;"This object indicates the VPN name of the user for login."                           �"This object indicates the alarm reported when the number of Telnet users reaches 
                the maximum number of Telnet connections. In addition, the maximum number of 
                Telnet connections is displayed."                 �"When a user logs in through Telnet/Stelnet, the user name, IP address for login, 
                used tunnel, authentication type and vpn name are reported."                 �"When a user fails to log in through Telnet/Stelnet, the user name, IP address for login, 
                used tunnel, authentication type and vpn name are reported."                 �"When a user logs out of the Telnet/Stelnet server, the user name, IP address for logout, 
                used tunnel, authentication type and vpn name are reported."                 �"When a user logs in to SSH server, the user name, IP address for login, 
                used tunnel, authentication type and vpn name are reported."                 "When a user logs out of the SSH server, the user name, IP address for logout, 
                and used tunnel are reported."                 o"When users failed to login telnet server too frequently, login fail times and statistics period are reported."                 l"When users failed to login ssh server too frequently, login fail times and statistics period are reported."                 o"When users failed to login telnet server too frequently, login fail times and statistics period are reported."                 l"When users failed to login ssh server too frequently, login fail times and statistics period are reported."                 |"when the number of user login failures from the same IP address reaches the threshold, the trap of hwIpLocked is reported."                 @"When the IP is unlocked, the trap of hwIpUnLocked is reported."                         ["The compliance statement for 
                entities that support the huawei LINE MIB."             -- this module
     0"The collection of notifications in the module."                     ="A collection of objects on Clock setting level information."                 4"A collection of objects on vty number information."                            