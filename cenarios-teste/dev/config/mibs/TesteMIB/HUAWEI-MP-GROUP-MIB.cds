W-- ===========================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: HUAWEI-MP-GROUP-MIB
-- Reference:
-- Version: V1.04
-- History:
-- created by huangjun 2010-09-24
-- ===========================================================================
                                                     "modify node description" �"Huawei Industrial Base
              Bantian, Longgang
               Shenzhen 518129
               People's Republic of China
               Website: http://www.huawei.com
               Email: support@huawei.com
            " "201801130000Z" "201604210000Z" "201511230000Z" "201407260000Z" "201009240000Z" "Support MP-Group los-pkt-exc" $"Support Global- MP-Group interface" ."The MIB contains objects of module Mp Group." �"Modify MODULE-COMPLIANCE, OBJECT-GROUP,NOTIFICATION-GROUP From SNMPv2-CONF,
            Modify MAX-ACCESS of  hwMpGroupRowStatus from read-write to read-create at 2014-07-26." "V1.00, initial version."       -- 13 Jan 2018
           "MP group."                       i"An entry in this table configures the parameters of all
              MP, if partitions are being used."                       ="The value of this object identifies the Mp-group interface."                       +"Enable the MP discriminator negotiation. "                       m"Enable the function of damping the son channel of the MP link .
             The default value is false(2)."                       �"Minimum UP time before damping the son channel of the MP
              link. The value 0 is invalid, and the other values are valid, default is 30s.
              The value 0 is displayed, When the value is false of the hwMpGroupDamping."                       �"Maximum number of flapping of the son channel in the
              detect-time. The value 0 is invalid, and the other values are valid, default is 1.
              The value 0 is displayed, When the value is false of the hwMpGroupDamping."                       �"Continuous UP time after the son channel of the MP link is
              damped.  The value 0 is invalid, and the other values are valid, default is 60s.
              The value 0 is displayed, When the value is false of the hwMpGroupDamping."                       r"Value range of the minimum number of bindings of MP-Group
                  that MP can be used , default is 1 ."                      �" A system MUST NOT send any multilink packets on any link unless its
               peer has offered the MMRU LCP option and the system has configure-
               Ack'ed it during the most recent LCP negotiation on that link.  A
               system MAY include the MMRU LCP option in a configure-NAK, if its
               peer has not offered it (until, according to PPP rules, the peer
               configure-Reject's it).
             "                       _"Fragment-threshold value(1-4): 1->128; 2->256; 3->512; 4->no
                fragment; 5->64."                       "Enable short-sequence. "                       !"Drop-timeout value, ms as unit."                       g"max number of packets can be kept in the queue, 1:256, 2:512,
                3:1024, 4:2048, 5:4096."                       3"Enable or disable the time-delay detect function."                       }"The threshold of time-delay detect function. Unit is 100us. value between 25 and 500 is allowed. default value is 30 (3ms)."                      �"An object that allows entries in this table to
              be created, modified and deleted using the RowStatus
              convention.
              A SET operation to any other attribute in this row, when
              this object is set to 'active' (1), MUST be rejected with
              an SNMP error (e.g., inconsistentValue).
              In order to perform a SET operation to any other attribute
              in this table the manager MUST set this object to
              notInService (2).  After setting the object back to
              'active' the implementation MAY tear down all the sessions
              that belong to this partition and recreate them, depending
              on what session attributes have been modified. "                               K"The value of this object identifies the member of the Mp-group interface."                       1"The name of a member of the Mp-group interface."                       %"The name of the Mp-group interface."                       )"The current value of packet loss ratio."                       +"The alarm threshold of packet loss ratio."                       ,"The resume threshold of packet loss ratio."                           �"This object indicates that an alarm is generated when the delay difference between two MP-group member interfaces exceeds the upper threshold."                 �"This object indicates that the alarm generated when the delay difference between two MP-group member interfaces exceeded the upper threshold is cleared."                 �"This object indicates that an alarm is generated when the packet loss ratio for packets received by an MP group exceeds the upper threshold."                 �"This object indicates that the alarm generated when the packet loss ratio for packets received by an MP group exceeded the upper threshold is cleared."                         *"The HUAWEI MP Group configuration group."                 "Group for all MP group traps."                     0"This object indicates the Mp Group Trap group."                     >"The compliance statement for systems supporting this module."                          