-- Copyright (C) 2018 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: HUAWEI Private Extended Interface MIB
-- Reference:
-- Version: V2.20
-- History:
-- Version: V2.0
-- History:
--              Yang Jishang,2009-05-04, Add one table for Mdn compliance.       
-- ==================================================================
-- ==================================================================
-- 
-- Varibles and types be imported
--
-- ==================================================================
   '"A simple status value for the object."                                        "This file is an extension of LLDP-MIB. It provides such functions of 
           globally enabling or disabling the LLDP protocol, enabling the global
           alarm, clearing statistics on ports and configuring network management 
           IP addresses and some alarms." �"Huawei Industrial Base
              Bantian, Longgang
               Shenzhen 518129
               People's Republic of China
               Website: http://www.huawei.com
               Email: support@huawei.com
             " "201804070000Z" "201803270000Z" "201708172019Z" "201707200000Z" "201707130000Z" "201705220000Z" "201612240000Z" "201605160000Z" "201503311730Z" "201503101558Z" "add hwLldpRemManAddrTable" /"modify decription of hwLldpNotificationEnable" ("modify decription of hwLldpMdnRemTable" "add trap hwLldpDdpTrapObjects"  "edit hwLldpEnable  description" "add hwLldpDdpFilterType" "add hwLldpRemNetworkIdTable" )"add trap hwLldpInterfaceRemTablesChange" "add trap hwLldpRateExcessive" "modify hwLldpCounterReset"                       �"Globally enable or disable the LLDP configuration. If the hwLldpEnable 
        is 1, LLDP is enabled. If the hwLldpEnable is 2, LLDP is disabled. "                      �"Specifies the management IP address of the local device. The management IP
        address is carried in the management address TLV of LLDP packet and is used
        to identify NM devices in network management. The management IP address 
        configured here must be a valid one and must be an IP address in the address
        chain. If the IP address is not valid or is not configured, the management IP 
        address will be chosen from default IP addressees of the system. The sequence
        of address searching is: loopback interface, management network interface, VLANIF
        port and IP address chain (The smallest IP is chosen). If the default IP is not 
        found, the bridge MAC of the system is used."                       N"Clears the statistics of neighbours received and sent for trap informations."                       �"The global alarming that is used to control alarms on all ports.
             If it is 1, the global alarming is enabled. If it is 2, the global
             alarming is disabled."                       !"LLDP port congfiguration table."                       0"Entries of the LLDP port congfiguration table."                       "Port index."                       I"Clears the statistics of packets received and sent on the current port."                           /"LLDP remote neighbour protocol version table."                       >"Entries of the LLDP remote neighbour protocol version table."                       ("Protocol type of the remote neighbour."                       ""Remote MDN neighbor query table."                       ="Entries of the MacAddress discovery neighbour remote table."                       U"The index value used to identify the local port associated with 
   				this entry."                       �"This object represents an arbitrary local integer value used to 
   				identify a particular connection instance, unique only for the 
   				indicated remote system."                       r"The string value used to identify the port component
		        associated with a given port in the local system."                       7"The MacAddress of LLDP MacAddress discovery neighbor."                       �"This table contains one or more rows per management address
        information on the remote system learned on a particular port
        contained in the local chassis known to this agent."                      "Management address information about a particular chassis
        component. There may be multiple management addresses
        configured on the remote system identified by a particular
        lldpRemIndex whose information is received on
        lldpRemLocalPortNum of the local system. Each management
        address should have distinct 'management address
        type' (hwLldpRemManAddrSubtype) and 'management address'
        (hwLldpRemManAddr.)
        Entries may be created and deleted in this table by the
        agent."                       r"The type of management address identifier encoding used in
        the associated 'lldpRemManagmentAddr' object." "IEEE Std 802.1AB-2005 9.5.9.3"                     �"The string value used to identify the management address
        component associated with the remote system. The purpose
        of this address is to contact the management entity." "IEEE Std 802.1AB-2005 9.5.9.4"                     �"The enumeration value that identifies the interface numbering
        method used for defining the interface number, associated
        with the remote system." "IEEE Std 802.1AB-2005 9.5.9.5"                     �"The integer value used to identify the interface number
        regarding the management address component associated with
        the remote system." "IEEE Std 802.1AB-2005 9.5.9.6"                     �"The OID value used to identify the type of hardware component
        or protocol entity associated with the management address
        advertised by the remote system agent." "IEEE Std 802.1AB-2005 9.5.9.8"                     )"LLDP remote neighbour network id table."                       8"Entries of the LLDP remote neighbour network id table."                       %"Network id of the remote neighbour."                           "The LLDP remote table."                       #"Entries of the LLDP remote table."                       3"The LLDP neighbors of this interface was changed."                       ("The change type of LLDP remote tables."                       ("The number of LLDP neighbors inserted."                       '"The number of LLDP neighbors deleted."                           #"Lldp trap message interface name."                           "Description."                       "Description."                       "Description."                       "Description."                           "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                           m"Notify the NMS that the LLDP is globally enabled. This alarm is not 
        restricted by the alarm delay."                 n"Notify the NMS that the LLDP is globally disabled. This alarm is not 
        restricted by the alarm delay."                 B"Alarm on the change of capabilities supported of a local device."                 @"Alarm on the change of capabilities enabled of a local device."                 A"Alarm on the change of management IP address of a local device."                 C"Notify the NMS that the MacAddress discovery neighbor is changed."                 G"Notify the NMS that the received PDU rate has exceeded the threshold."                 Q"Notify the NMS that the LLDP neighbor information of the interface was changed."                 "Description."                         S"The compliance statement for SNMP entities which implement
		the HUAWEI-LLDP-MIB."                   �"The collection of objects which are used to configure the
		LLDP implementation behavior.
		This group is mandatory for agents which implement the LLDP."                 �"The collection of objects which are used to represent LLDP
		 statistics.
		This group is mandatory for agents which implement the LLDP
		and have the capability of receiving and transmitting LLDP frames."                 3"The collection of objects indicate index of port."                 �"The collection of notifications used to indicate HUAWEI-LLDP-MIB
		data consistency and general status information.
		This group is mandatory for agents which implement the LLDP
		and have the capability of receiving LLDP frames."                    �"The collection of objects which are used to represent
        LLDP MacAddress discovery neighbor remote systems information. 
        The objects represent the information associated with the basic 
        TLV set. Please note that even the agent doesn't implement some 
        of the optional TLVs, it shall recognize all the optional TLV 
        information that the remote system may advertise."                 4"The collection of objects used as trap parameters."                 "The LLDP remote table."                 ""The LLDP remote networkId table."                                        