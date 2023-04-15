X--       ==================================================================
-- Copyright (C) 2014 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI ITUT ALARM MIB
-- Reference:
-- Version: V1.0
-- History: 
--  V1.0      2012-03-22   publish
-- ==================================================================
                     s"The MIB module describes a generic solution to transfer alarms and 
				store the current list of active alarms." �"Huawei Industrial Base
				Bantian, Longgang 
				Shenzhen 518129
				People's Republic of China
				Website: http://www.huawei.com
				Email: support@huawei.com
				" "201401011715Z" "201310121715Z" "201305051150Z" R"The 1.02 revision of this MIB module , add alarm object para in itut alarm trap." C"The 1.01 revision of this MIB module , add alarm clear type enum." +"The initial revision of this MIB module ."       -- Jan 1, 2014 at 17:15 GMT
           "The alarm list table."                       h"Entries appear in this table when alarms are raised.  They
				are removed when the alarm is cleared."                       �"A strictly monotonically increasing integer which acts as the index of all alarms and events. 
				It wraps back to 1 after it reaches its maximum value."                       "The id of an alarm."                       "The state of an alarm."                       "Alarm Severity."                        "The reason code for the alarm."                       G"This object indicates the time when an alarm is generated or cleared."                       I"The clear reason when alarm is cleared. it's other when alarm is start "                       "The alarm correlation type."                       f"The parent alarm sequence if this alarm is nonRootCause. It's 0 if this alarm is root or independent"                       :"This object indicates the parameters of an active alarm."                       "The object of the alarm."                       "The event report table."                       5"Entries appear in this table when event are raised."                       "The sequence of an event."                       "The id of an event."                       "Event Severity."                       ="This object indicates the time when an event is generated ."                       9"This object indicates the parameters of an event alarm."                           F"The alarm notification channel. NE report an alarm through this trap"                 F"The event notification channel. NE report an event through this trap"                         X"The compliance statement for entities which 
				implement the Huawei ITUT Alarm mib."                   F"The objects for ITUT alarm reliability and snmp target address list."                 "ITUT Alarm trap nodes."                                