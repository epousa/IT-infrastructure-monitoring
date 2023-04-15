-- ===================================================================
-- Copyright (C) 2016 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: 
-- Reference:
-- Version: V1.01
-- ===================================================================
                 �"This MIB is to provide TRAP support for NTP.
                hwNtpStateChangeTrap & hwNtpSysPeerChangeTrap are added to notify the 
                NTP state change & system peer change information" �"Huawei Industrial Base
  Bantian, Longgang
   Shenzhen 518129
   People's Republic of China
   Website: http://www.huawei.com
   Email: support@huawei.com
 " "201610181600Z" "201508111600Z" 9"V1.01, adding hwNtpSourceVpnName, hwNtpOldSourceVpnName" "V1.00, initial version."                   %"Indicates the NTP local clock state"                       F"Specifies server IP address to which local NTP clock is synchronized"                       ^"Indicates Vpn instance associated with the peer to which the local NTP clock is synchronized"                       Q"Specifies server IP address to which local NTP clock was synchronized last time"                       h"Indicates Vpn instance associated with the peer to which the local NTP clock is synchronized last time"                          s"This TRAP is used to notify when the NTP state changes from synchronized to unsynchronized & vice-versa.
                 NTP state changes occur due to reasons listed below
 			1) System clock is reset by configuration.
 			2) Selected peer is deleted by configuration.
 			3) Selected peer is unreachable.
			4) Authentication failed for selected peer.
			5) Selected peer clock is not synchronized.
			6) Time elapsed since peer clock's last update is not within permissible limit.
			7) Source stratum is greater than the local stratum.
			8) System synchronization source lost.
			9) NTP mode mismatch for selected peer."                 �"This TRAP is used to notify the NTP system peer change from one source IP to other source IP without state change.
                This trap is generated when the selected NTP peer is changed"                         "NTP trap MIB compliance."               6"These objects are used to manage NTP trap parameters"                 7"These objects are used to manage NTP trap parameters."                    