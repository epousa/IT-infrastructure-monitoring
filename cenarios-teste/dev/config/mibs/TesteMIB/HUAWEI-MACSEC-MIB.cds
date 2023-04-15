I--=================================================================
-- Copyright (C) 2017 by HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description:HUAWEI MACSEC MIB
-- Reference:
-- Version: V1.02
-- History:
--    wangkun 00280787 initial    03/10/2016
-- =================================================================
     -"This MIB describes objects used for MACsec." �"Huawei Industrial Base
				Bantian, Longgang
				Shenzhen 518129
				People's Republic of China
				Website: http://www.huawei.com
				Email: support@huawei.com" "201711031622Z" "201603101013Z" "201603101013Z" N"Add NOTIFICATION-TYPE of hwMacsecRcvRspTimeout, hwMacsecRcvRspTimeoutResume." a"Modify MAX-ACCESS of  hwMACsecPortRole ,hwMACsecPortName,hwMACsecPortOldCKN,hwMACsecPortNewCKN." -"This MIB describes objects used for MACsec."       -- March 10, 2016 at 10:13 GMT
           ("The port's MACsec configuration table."                       -"An entry in the MACsec configuration table."                       "The interface index."                       �"Indicates the MKA role of the port.
				Options: 
				1. nonkeyserver(1) -indicates the MKA role of the port is supplicant.
				2. keyserver(2)    -indicates the MKA role of the port is key server. "                       "The port name."                       "The using CKN of this port."                        "The configed CKN of this port."                       #"No heartbeat response alarm list."                       3"An entry in the no heartbeat response alarm list."                       "Interface index."                       "Device role."                       "Local port."                               "The reason of CKN switching."                       %"The reason of CKN switching failed."                       "Failed to switch the CKN."                 #"No heartbeat response alarm list."                 *"No heartbeat response alarm resume list."                     >"The compliance statement for systems supporting this module."               !"The MACsec module's Bind group."                 )"The MACsec module's Notification group."                                