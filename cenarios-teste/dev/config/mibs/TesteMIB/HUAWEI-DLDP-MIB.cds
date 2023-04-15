�--  =================================================================
-- Copyright (C) 2008 by  HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: HUAWEI DLDP MIB, this mib will maintain information of DLDP 
--              protocol for datacomm product.  
-- Reference:
-- Version:     V1.00
-- History:
--  
--  V1.00 2008-07-15 initial version
-- =================================================================
   k"Each port is uniquely identified by a port number. The port number ranges from 0
                to 575."                                                                 �"This file is a DLDP-MIB. It provides the functions such as
           globally enabling or disabling the DLDP protocol, enabling the global
           alarm, clearing statistics on ports and configuring work mode.""Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   "       -- July 15, 2008 at 14:30 GMT
               �"Globally enable or disable the DLDP configuration. If the hwDldpEnable 
                is 1, DLDP is enabled. If the hwDldpEnable is 2, DLDP is disabled. 
            By default, DLDP is disabled."                       �"When the device discovers a one-way link, the shutdown mode of port. The modes include
            auto and manual. By default, DLDP is auto."                       �"It configures the work mode of the DLDP protocol, including normal and enhanced mode.
            By default, the mode is enhanced."                       |"Global interval for sending advertisement packets for the DLDP configuration.
            By default, the interval is 5s."                       l"Global timeout of DelayDown timer. The value rangs from 1s to 5s,
            By default, the time is 1s."                       �"Global authentication mode of the DLDP configuration. It has three authentication
             modes, including none, md5,and simple. By default the authentication mode
             is none."                       D"Global md5 password for authentication when authentication is md5."                       J"Global simple password for authentication when authentication is simple."                        "DLDP port configuration table."                       /"Entries of the DLDP port configuration table."                       �"It describes enabled DLDP port index. Each port is uniquely identified by a port number. It ranges from 0
                    to 575."                       1"It describes the DLDP status of the reset port."                       �"Port state has seven states, including initial, inactive, active,
               advertisement, probe, disable, and delayDown."                       2"Port state has two modes, including up and down."                       ["It clears the statistics of packets received and sent on the current 
             port."                      H" Operation of CreateAndGo can be
             used to create a new instance, and operation of Destroy be 
             used to destroy an existent index. But these operations 
             will not take effect if they are not activated by running the
             command of activating or setting mib node of hwDldpEnable."                       %"DLDP Neighbour configuration table."                       4"Entries of the DLDP Neighbour configuration table."                       �"When the activated port detects a neighbor, it can record the neighbor information, including
               MAC address of neighbor. The port may detect multiple neighbors."                       \"When the activated port detects a neighbor, it can record the port index of the neighbour."                       ["When the activated port detects a neighbor, it can record the port name of the neighbour."                       �"When the activated port detects a neighbor, it can record the state of the neighbour, and its value includes unknown, one way, and two way."                       �"When the activated port detects a neighbor, it can record the aging time of the neighbor. The aging time
               is three times the interval for sending advertisement packets."                           ("DLDP port statics configuration table."                       H"Entries of the table of the packets sent or received on the DLDP port."                       @"It describes the number of packets sent on the activated port."                       D"It describes the number of packets received on the activated port."                       J"It describes the number of error packets received on the activated port."                       I"It describes the number of loop packets received on the activated port."                       J"It describes the number of valid packets received on the activated port."                       ["It describes the number of authentication failure packets received on the activated port."                           p"It describes the interface index of the activated port that detected one way or found that two way is resumed."                       o"It describes the interface name of the activated port that detected one way or found that two way is resumed."                       *"It describes the reason interface fault."                           j"Notify the NMS that the DLDP detected one way. The hwDldpTrapInterfaceIndex node is the interface index."                 �"Notify the NMS that the DLDP detected that unidirectional link was resumed. The hwDldpTrapInterfaceIndex node is interface index."                 m"Notify the NMS that the DLDP detected Loop State. The hwDldpTrapInterfaceIndex node is the interface index."                 u"Notify the NMS that the DLDP detected Loop State was resumed. The hwDldpTrapInterfaceIndex node is interface index."                         Z"The compliance statement for SNMP entities which implement
        the HUAWEI-DLDP-MIB."                   �"The collection of objects which are used to configure the
        DLDP implementation behavior.
        This group is mandatory for agents which implement the DLDP."                 �"The collection of objects which are used to represent DLDP
         statistics.
        This group is mandatory for agents which implement the DLDP
        and have the capability of receiving and transmitting DLDP frames."                 >"The collection of objects indicates the information of port."                 v"The collection of objects indicates that the activated port index detected one way or found that two way is resumed."                "The collection of notifications used to indicate that the HUAWEI-DLDP-MIB
        data is consistent and indicate the general status information.
        This group is mandatory for agents which implement the DLDP
        and have the capability of receiving DLDP frames."                                