~-- ============================================================================
-- Copyright (C) 2003 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- DESCRIPTION:  HUAWEI-IPPOOL-MIB
-- Reference:  
-- Version: V2.08
-- History:
--         v3.01
--         modified by huangjun 2009-12-08
-- ============================================================================
                                                                 ,"The MIB contains objects of module IPPOOL." �"Huawei Industrial Base
  Bantian, Longgang
   Shenzhen 518129
   People's Republic of China
   Website: http://www.huawei.com
   Email: support@huawei.com
 " "201407250000Z" "201403140000Z" "201311280000Z" "201311080000Z" "201310170000Z" "201307270000Z" "201307190000Z" "201305220000Z" 5"V2.07-V2.08 add four dhcpv6 server support polling." "  V1.2-V1.3 add four nodes." ,"The MIB contains objects of module IPPOOL." ,"The MIB contains objects of module IPPOOL." T" V1.3-V1.4 add three nodes for export NA/PD/ND route,three table for DHCP enhence." " V1.2-V1.3 add four nodes." 0" V1.1-V1.2 add two nodes for dhcp server down." 3"V1.0-V1.1  increate option/s size from 64 to 255."                   -"The configuration table of IP address pool."                       �"The configuration list of IP address pool, which is used to configure the relevant attributes of the IP address pool inside the device."                       ""Exclusive index of address pool."                       T"IP address pool name, the service module guarantees the exclusiveness of the name."                       O"Gateway IP address.
                By default, the mask is 255.255.255.255."                       I"Gateway mask.
                By default, the mask is 255.255.255.255."                       M"Primary DNS IP address.
                By default, it is 255.255.255.255."                       L"Second DNS IP address.
                By default, it is 255.255.255.255."                       Q"Primary Netbios IP address.
                By default, it is 255.255.255.255."                       P"Second Netbios IP address.
                By default, it is 255.255.255.255."                       �"IP address lease: 0~(1000*24*60-1)(m)  unit: minute. It is allowed not to specify the lease during the adding. The default value is 3*24*60(m)."                       X"Row admin status, either Add or Delete.
                Supports adding and deletion."                       "IP VPN-instance name."                       ?"Value indicates the type of pool, 1-local, 2-relay, 3-server."                       �"Network ip address of a DHCP Server global pool. 
            To delete a configured network ip, please set
            hwDHCPSGlobalPoolConfigUndoFlag to 1"                      �"Net mask of a DHCP Server global pool(network).
            The SET operation to this object ought to be with
            the SET of hwDHCPSGlobalPoolNetwork together, and
            any SET operation alone to this object will be
            regarded as an invalid operation.
            When a network ip of a DHCP server global pool was 
            deleted, the net mask would also be deleted
            automatically, and no further operation needed"                        "the number of total addresses."                       "the number of used addresses."                       #"the number of conflict addresses."                       ""the number of exclude addresses."                       "the number of idle addresses."                       "used percent."                       �"String of DNS server ip addresses for DHCP clients.
            Since mostly 8 ip addresses can be configured for a pool
            totally, a string is defined to get or configure 8
            ip addresses at a time"                       x"A DNS server ip address to be deleted. This object
            is only for deleting a given ip address of DNS server."                       �"String of NetBIOS server ip addresses for DHCP
            clients. Since mostly 8 ip addresses can be configured for
            a pool totally, so a string is defined to get or
            configure 8 ip addresses at a time"                       �"A NetBIOS server ip address to delete. This
            object is only for deleting a given ip address of NetBIOS
            server"                       "unnumbered interface name."                       I"The flag indicates whether funtion of conflict auto recycle is enabled."                       $"The lowest IP address in the pool."                       %"The highest IP address in the pool."                       #"The number of the request packet."                       -"The number of the effective request packet."                       ("The configuration table of IP section."                      "IPSection Entry.
                IP section configuration table, used to manage the IP address of user.
                There are at most eight address sections to each address pool. Its indexes are   hwIPPoolIndex (from the external) and HwIPSectionIndex."                       "Index of address section."                       -"IP section DESCRIPTION, which can be empty."                       "Start of address."                       "End of address."                       "IP section's length."                       "The number of Used addresses."                       #"The number of conflict addresses."                       ""The number of invalid addresses."                       $"The number of available addresses."                       )"Row admin status, either Add or Delete."                       �"Extend table of the local address pool.
                 When IP addresses are allocated by the built-in DHCP servers, you need to configure the lease and option."                       "DESCRIPTION."                       $"Whether the address is prohibited."                       �"Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       "Value of the option."                       �"Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       "Value of the option."                       �"Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       "Value of the option."                       �"Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       "Value of the option."                       w"DNS suffix, a string of 0-50 characters.
                If the value is 0, it indicates that the suffix is deleted."                       z"mode of IP addresses reserving. 1 indicates leasing management, 2 indicates MAC binding, and other values are invalid.  "                       �"ip address renewal: 0~(1000*24*60-1)(m)  unit: minute. It is allowed not to  specify the renewal during the adding. The default value is 2160(m)"                       �"ip address rebinding: 0~(1000*24*60-1)(m)  unit: minute. It is allowed not to specify the renewal during the adding. The default value is 3780(m)"                       "SIP Server IP address"                       "SIP Server IP address"                       @"The name of SIP server. 0 indicates to delete the SIP server. "                       @"The name of SIP server. 0 indicates to delete the SIP server. "                      n"Address status table.
                 It supports the query and setting of status of the local address pool. 
                 It does not support the query and setting of status of the remote address pool for the following reasons:
                  1. The status of the remote address pool cannot be set.
                  2. The remote and local address pools map different status tables, with different indexes.
                  3. The remote address pool is managed by the remote equipment, rather than the local equipment. The local equipment displays only the approximate status of the remote address pool."                       "DESCRIPTION."                       "IP address."                       "Status of the address."                       "IP address pool name."                      Y"Configuration table of the DHCP server group.
                 To monitor the status of the remote DHCP server, you need to configure the local DHCP server.
                 You can configure a maximum of 4094 DHCP server groups.
                 Each server group consists of two DHCP servers. Select the server based on the server status."                       "DESCRIPTION."                       �"Index of a DHCP server group.
                 When you create an address pool, the equipment adds the hwIPPoolDhcpSvrGroupIndex entry by default and sends it to the NMS."                        "Name of the DHCP server group."                       ."Primary IP address of the DHCP server group."                       0"Secondary IP address of the DHCP server group."                       $"Status of the primary DHCP server."                       &"Status of the secondary DHCP server."                       1"Whether the server supports the Release packet."                       1"Number of times the server group is referenced."                       "DHCP server row status."                       *"VPN instance of the primary DHCP server."                       ,"VPN instance of the secondary DHCP server."                        "DHCP source interface address."                      �"Configuration table of the remote address pool.
                 The remote address pool must be configured on the local equipment in the following cases:
                   Users obtain IP addresses through the built-in DHCP client and need to renew the addresses.
                   The equipment needs to record the IP addresses to be renewed.
                   The equipment needs to report the routes of the users."                       "DESCRIPTION."                       �"Index of an address pool.
                 When you create an address pool, the equipment adds the hwRemoteIPPoolIndex x entry by default and sends it the NMS.
                "                       `"Name of an address pool.
                 The service module ensures that the name is unique."                       "IP address of the gateway."                       "IP address mask."                       +"Name of the associated DHCP server group."                       ?"Whether the address pool is locked, 0: locked, 1: not locked."                       @"
                 Row status of IP pool.  
                 "                       &"IP address of the active DNS server."                       '"IP address of the standby DNS server."                       '"IP address of the active NBNS server."                       ("IP address of the standby NBNS server."                       "IP VPN-instance name."                       "DHCP server group name."                       H"Whether the address pool lease manage is enable, 0: diable, 1: enable."                           '"Number of configured addresses pools."                       ,"Number of idle addresses on the equipment."                       ."Number of addresses in use on the equipment."                       3"Number of conflicting addresses on the equipment."                       0"Number of excluded addresses on the equipment."                       !"The total number of IP address."                       !"The percent of used IP address."                       ""DHCP server configuration table."                       "Description."                       "The index of DHCP server."                        "The IP address of DHCP server."                       9"The name of VPN instance for the master DHCP server.   "                       "The state of DHCP server."                       $"The send discovering speed number."                       :"The interval of discovery packets sent by DHCP server.  "                       �"The threshold of no response packets from DHCP server, when the number count over the threshold, DHCP server is changed from up to down status.
                The default value is 1."                       �"The threshold of nak packets from DHCP server, when nak packets count over the threshold, DHCP server is changed from up to down status.
                The default value is 10."                       c"The timeout interval for response packet,the time unit is second and default value is 25 seconds."                       v"The interval of DHCP server automatically recover up status, the time unit is minute and default value is 3 minutes."                       v"A table for configuring options to DHCP server pools,
               include option code type and value and so on ."                       "DESCRIPTION."                       �"Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       "Value of the option."                      ="This object is used to configuration new rows in this
            table, modify existing rows, and to delete
            existing rows.Only three actions are used: active(1),
            createAndGo(4), destroy(6).
            while configuration new option, you must specify option type 
            and value"                      "Configuration table of the address Pool Group.
                 IP Pool Group support an aggregation of IP Pools. Many Ip Pools of different gateway can be referenced by IP Pool Group.
                 The max number of IP Pools referenced by an Ip Pool Group is 1024 "                       �"The configuration list of IP address pool group, which is used to configure the relevant attributes of the IP address pool group inside the device."                       ?"
                Name of an IP Pool Group.
                "                       �"
                Vpn instance of an address Pool Group.
                Vpn instance of All IP Pools must accord with the vpn instance of IP Pool Group.
                Use string '--' to undo vpn instance in Pool Group.
                "                       �"Whether dereference all IP Pools in Pool Group.
                 Only support dereference all IP Pools in this operation. If dereference Pool one by one is needed, please use IPPoolGroupExtTable.
                "                       �"
                 Row status of IP Pool Group. 
                 Support Active, CreateAndGo and Destroy. 
                 "                      "Configuration extension table of the address pool group.
                 The extension table can set the order of an IP pool in IP Pool Group.
                 The extension table can be used to dereference an IP pool in IP pool Group.
                 "                       B"The configuration list of IP address pool group extension table."                       N"
                The IP Pool referenced in IP Pool Group.
                "                       �"The order of IP Pool in IP Pool Group.
                 Specify the move order to adjust the order of the IP Pool in IP Pool Group.
                 Only supoort set operation."                       �"
                 Row status of IP pool group extension. 
                 Support CreateAndGo and Destroy. 
                 "                       N"
                Display table of the address pool group.
                "                       @"The configuration list of IP address pool display group table."                       Y"
                The number of IP Pools referenced in IP Pool Group.
                "                       Y"
                The number of IP Pool Groups referenced in domains.
                "                       N"
                The Total number of IP in IP Pool Group.
                "                       M"
                The Used number of IP in IP Pool Group.
                "                       S"
                The Conflicted number of IP in IP Pool Group.
                "                       P"
                The Disable number of IP in IP Pool Group.
                "                       S"
                The Designated number of IP in IP Pool Group.
                "                       M"
                The Free number of IP in IP Pool Group.
                "                       N"
                The Used Percent of IP in IP Pool Group.
                "                      %"
                Set the domain search list which is uesed to fill content of DHCP packet option 119.
                The option is passed from the DHCP Server to the DHCP Client to specify the domain 
                search list used when resolving hostnames using DNS.
                "                       C"The configuration list of IP address pool DomainSearchList table."                       u"
                The domain search list which is used to fill content of DHCP packet option 119.
                "                       �"
                Row status of IP pool DomainSearchList. 
                Support CreateAndGo and Destroy.
                "                       R"
                The configuration table of IPv6 prefix pool.
                "                       -"The configuration list of IPv6 prefix pool."                        "The index of IPv6 prefix pool."                       "The name of IPv6 prefix pool"                       "The type of IPv6 prefix pool."                       _"The prefix of IPv6 prefix pool. This node is valid only for local and delegation prefix pool."                       Q"The prefix length of IPv6 prefix pool. Note that 0 is not a configurable value."                       �"The delegating prefix length of IPv6 prefix pool. Note that 0 is not a configurable value. This node is valid only for local and delegation prefix pool."                       6"The preferred lifetime(seconds) of IPv6 prefix pool."                       1"The valid lifetime(seconds) of the IPv6 prefix."                       ="The flag indicating whether the IPv6 prefix pool is locked."                       0"The vpn instance name of the IPv6 prefix pool."                       �"The reserved flag of the IPv6 prefix pool. 0-none reserved, 1-mac reserved, 2-mac plus lease reserved, 3-duid reserved, 4-duid plus lease reserved."                       b"The link address of the IPv6 remote prefix pool. This node is valid only for remote prefix pool."                       u"The flag indicates whether prefix pool is used in unshared-mode. The node is valid only for delegation prefix pool."                       >"Row admin status. Support adding, modification and deletion."                       v"The flag indicates whether the prefix pool only for DHCPv6 IA_PD. The node is valid only for delegation prefix pool."                       S"
                The configuration table of IPv6 address pool.
                "                       ."The configuration list of IPv6 address pool."                        "The index of IPv6 addres pool."                       "The name of IPv6 addres pool."                       "The type of IPv6 addres pool."                       +"The prefix pool name of IPv6 addres pool."                       �"The DNS of IPv6 addres pool. The format to set value is : operator+space+primary DNS+space+secondary DNS. operator: 1-Add, 2-Delete."                       *"The DNS search list of IPv6 addres pool."                       %"The preference of IPv6 addres pool."                       :"The flag indicating whether IPv6 address pool is locked."                       �"The renew time percent of IPv6 addres pool. When hwIPv6PoolRenewPercent is specified, you need also specify hwIPv6PoolRebindingPercent."                       �"The rebinding time percent of IPv6 addres pool. When hwIPv6PoolRebindingPercent is specified, you need also specify hwIPv6PoolRenewPercent."                       ="The flag indicating whether DHCPv6 rapid-commit is enabled."                       F"The flag indicating whether DHCPv6 server unicast option is enabled."                       9"Configure the name of Address Family Transition Router."                       >"Row admin status. Support adding, modification and deletion."                       ["
                The configuration table of IPv6 address pool's usage.
                "                       6"The configuration list of IPv6 address pool's usage."                       ."The free address number of IPv6 addres pool."                       ."The used address number of IPv6 addres pool."                       -"The free prefix number of IPv6 addres pool."                       -"The used prefix number of IPv6 addres pool."                       5"The total IPv6 address number of IPv6 address pool."                       4"The used IPv6 address number of IPv6 address pool."                       4"The free IPv6 address number of IPv6 address pool."                       8"The conflict IPv6 address number of IPv6 address pool."                       8"The excluded IPv6 address number of IPv6 address pool."                       7"The percent of used IPv6 addressof IPv6 address pool."                       4"The total NDRA prefix number of IPv6 address pool."                       3"The used NDRA prefix number of IPv6 address pool."                       3"The free NDRA prefix number of IPv6 address pool."                       7"The conflict NDRA prefix number of IPv6 address pool."                       7"The excluded NDRA prefix number of IPv6 address pool."                       <"The percent of used IPv6 NDRA prefix of IPv6 address pool."                       2"The total PD prefix number of IPv6 address pool."                       1"The used PD prefix number of IPv6 address pool."                       1"The free PD prefix number of IPv6 address pool."                       5"The conflict PD prefix number of IPv6 address pool."                       5"The excluded PD prefix number of IPv6 address pool."                       :"The percent of used IPv6 PD prefix of IPv6 address pool."                       L"
                The binding of client DUID and prefix.
                "                       *"The binding of client's DUID and prefix."                       "The client duid."                       "The binding prefix of client."                       0"Row admin status. Support adding and deletion."                       Y"
                The configuration table of the DHCPv6 server group.
                "                       0"The configuration list of DHCPv6 server group."                       #"The index of DHCPv6 server group."                       ""The name of DHCPv6 server group."                       "The primary DNS address."                       "The seconday DNS address."                       "The status of primary DNS."                       "The status of secondary DNS."                       Q"The flag indicating whether server will automaticly send DHCPv6 release packet."                       ."The referenced count of DHCPv6 server group."                       /"The outer interface of primary DHCPv6 server."                       1"The outer interface of secondary DHCPv6 server."                       +"The algorithm of selecting DHCPv6 server."                       &"The weight of primary DHCPv6 server."                       ("The weight of secondary DHCPv6 server."                       1"The vpn instance name of primary DHCPv6 server."                       3"The vpn instance name of secondary DHCPv6 server."                       >"Row admin status. Support adding, modification and deletion."                       i"The interface name whose IP address is the source IP address carried in the packets sent to the server."                       Z"
                The configuration table of IPv6 remote address pool.
                "                       5"The configuration list of IPv6 remote address pool."                       #"The index of remote address pool."                       ""The name of remote address pool."                       ."The prefix pool name of remote address pool."                       6"The DHCPv6 server group name of remote address pool."                       <"The flag indicating whether remote address pool is locked."                       8"The flag indicating whether to export ipv6 host route."                       >"Row admin status. Support adding, modification and deletion."                       C"The flag indicating whether to export host's ipv6 address route ."                       ?"The flag indicating whether to export host's pd prefix route."                       ?"The flag indicating whether to export host's nd prefix route."                           *"Number of configured IPv6 address pools."                       1"Number of idle IPv6 addresses on the equipment."                       0"Number of idle IPv6 prefixes on the equipment."                       3"Number of IPv6 addresses in use on the equipment."                       2"Number of IPv6 prefixes in use on the equipment."                        "The total IPv6 address number."                       "The used IPv6 address number."                       "The free IPv6 address number."                       #"The conflict IPv6 address number."                       #"The excluded IPv6 address number."                       #"The percent of used IPv6 address."                       "The total NDRA prefix number."                       "The used NDRA prefix number."                       "The free NDRA prefix number."                       ""The conflict NDRA prefix number."                       ""The excluded NDRA prefix number."                       '"The percent of used IPv6 NDRA prefix."                       "The total PD prefix number."                       "The used PD prefix number."                       "The free PD prefix number."                        "The conflict PD prefix number."                        "The excluded PD prefix number."                       %"The percent of used IPv6 PD prefix."                       H"
                DHCPv6 server configuration table.
                "                       +"The configuration of DHCPv6 server table."                       "The index of DHCPv6 server."                       $"The IPv6 address of DHCPv6 server."                       4"The name of VPN instance for the DHCPv6 server.   "                       "The IfIndex of DHCPv6 server."                       "The state of DHCPv6 server."                       &"The speed of sending solicit packet."                       :"The interval of solicit packets sent by DHCPv6 server.  "                       z"A Ext table for configuring options to DHCP server pools,
               include option code type and value and so on ."                       "DESCRIPTION."                       �"Sub Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, which needs to be defined and explained by the carrier."                       9"Value indicates the type of sub-option, 1-ip, 2-string."                       "Value of the sub-option."                      C"This object is used to configuration new rows in this
            table, modify existing rows, and to delete
            existing rows.Only three actions are used: active(1),
            createAndGo(4), destroy(6).
            while configuration new suboption, you must specify suboption type 
            and value"                       �"A table for configuring options which will be replied to client 
                 in according to specified option value of DHCP client request "                       "DESCRIPTION."                       G"Option ID.
                 Option code from DHCP request of client."                       G"Option ID.
                 Option code from DHCP request of client."                      "This object is used to configuration option code which is needed to 
                reply to client according to specified option value in DHCP request,
                Option code, from 2 to 254, include 2 and 254, exclude
                  3,6,15,44,46,50-54,57-60,82"                       �"Sub Option ID.
                 When IP addresses are allocated by the built-in DHCP sever, the option is a configuration parameter, 
                 which needs to be defined and explained by the carrier."                       @"Value indicates the type of sub-option, 1-ip, 2-string, 3-hex."                       "Value of the sub-option."                      ="This object is used to configuration new rows in this
            table, modify existing rows, and to delete
            existing rows.Only three actions are used: active(1),
            createAndGo(4), destroy(6).
            while configuration new option, you must specify option type 
            and value"                       P"A table for configuring the status of ipv6 address which in ipv6 local preifx "                       "DESCRIPTION."                       "Ipv6Address."                       �"Ipv6Address status: idle(0) occupied(1) prohibitive(2) conflictive(3).
				Status can set idle(0) when prohibitive(2) conflictive(3) reserved(7),set prohibitive(2) when idle(0)."                       "Ipv6 Local prefix's name."                       T"A table for configuring the status of ipv6 prefix which in ipv6 delegation preifx "                       "DESCRIPTION."                       "Ipv6Prefix."                       "Ipv6PrefixLength."                       �"Ipv6 Prefix status:idle(0) occupied(1) prohibitive(2) conflictive(3).
				Status can set idle(0) when prohibitive(2) conflictive(3) reserved(7),set prohibitive(2) when idle(0)."                        "Ipv6 Delegation prefix's name."                           )"Enable IP Pool Constant index function."                               "IP address of the user."                        "IP address of the DHCP server."                       "DHCP    VPN instance name."                       #"Exclusive index of IP pool group."                       "DHCP server down reason."                              ["
                1 Notice/Trap name: IP address conflict error.
                2 Notice/Trap generation cause: user IP address conflict.
                3 Repair suggestions:
                    Check whether to renew configuring the BAS IP pool.
                    Check whether the IP address of BAS interface conflicts user IP address."                 �"
                1 Notice/Trap name: IP address lease alarm.
                2 Notice/Trap generation cause: The user IP lease is over.
                3 Repair suggestion:
                    Check whether to renew configuring BAS IP pool."                "
                1 Notice/Trap name: allocate user IP fail alarm.
                2 Notice/Trap generation cause: there are no enough IP addresses for users.
                3 Repair suggestion:
                    Check whether there are enough addresses in IP pool of the domain."                0"
                Description: The DHCP server does not respond. This alarm is generated if the network is unstable, the DHCP server is Down, or there is not any available address in the DHCP server when a user applies for an address to the external DHCP server. 
                Parameter: IP address of the DHCP server, address pool that the user expects (the address pool is identified by the gateway address because there may be multiple address pools on a server), VPN instance name, The reason of that DHCP server is set down status.
                "                �"
                The configuration of the IP address pool on the DHCP server is not the same as the configuration of the remote address pool on the local equipment.
                Solution: Check whether the configuration of the IP address pool on the DHCP server, including the gateway address, mask, and the address range, is the same as the configuration of the remote address pool on the local equipment.
                "                 �"
                The number of used IP addresses in the pool exceeds the threshold.
                Repair suggestion: Check the configuration of the IP address pool.
                "                 j"
                The number of used IP addresses  in the pool is under the threshold.
                "                 Q"
                   The interface is unnumbered by the pool.
                "                 �"
                The number of used IP addresses in the IP pool group exceeds the threshold.
                Repair suggestion: Check the configuration of the IP address pool group.
                "                 r"
                The number of used IP addresses in the IP pool group is under the threshold.
                "                 U"
                The constance index of ip pool recover failure.
                "                 _"
                The constance index of  ipv6 prefix pool recover failure.
                "                 W"
                The constance index of ipv6 pool recover failure.
                "                 ]"
                The number of IP addresses in the IP pool is exhausted.
                "                 e"
                The number of IP addresses in the IP pool is under the exhaust.
                "                 c"
                The number of IP addresses in the IP pool group is exhausted.
                "                 k"
                The number of IP addresses in the IP pool group is under the exhaust.
                "                 �"
                The number of used IPv6 addresses in the pool exceeds the threshold.
                Repair suggestion: Check the configuration of the IP address pool.
                "                 t"
                The number of used IPv6 addresses in the IP pool group is under the threshold.
                "                 X"
               The IPv6 addresses in the IPv6 pool is exhausted.  
                "                 R"
                The IPv6 addresses exhausted alarm cleared. 
                "                         >"The compliance statement for systems supporting this module."                   )"The HUAWEI IP pool configuration group."                 ,"The HUAWEI IP section configuration group."                 3"The HUAWEI IP pool extension configuration group."                 3"The HUAWEI IP address status configuration group."                 4"The HUAWEI DHCP service group configuration group."                 -"The HUAWEI remote pool configuration group."                 &"The HUAWEI IP pool statistics group."                 $"The HUAWEI IP pool trap OID group."                 !"The HUAWEI IP pool traps group."                     1"The HUAWEI IP pool DHCP server configure group."                 u"A table for configuring options to DHCP server pools,
              include option code type and value and so on ."                 /"The HUAWEI Ip pool group configuration group."                 9"The HUAWEI Ip pool group extension configuration group."                 ."A table for displaying HUAWEI IP pool group."                 ["Set the domain search list name which is uesed to fill content of DHCP packet option 119."                 x"A table for configuring options to DHCP server pools,
              include suboption code type and value and so on ."                 �"Dhcp reply options which will be replied to client 
             in according to specified option value of DHCP client request "                 "."                 "."                 "."                 "."                 "."                 "."                 ("The HUAWEI IPv6 pool statistics group."                 5"The HUAWEI IPv6 address status configuration group."                 4"The HUAWEI IPv6 prefix status configuration group."                 )"Enable IP Pool Constant index function."                