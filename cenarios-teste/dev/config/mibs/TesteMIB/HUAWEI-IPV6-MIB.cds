�-- =============================================================================================================
-- Copyright (C) 2015 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: The HUAWEI-IPV6-MIB provides information about IPv6.         
-- Reference:   
-- Version: V2.02   
-- ==============================================================================================================
                                                     K"The MIB module for entities implementing the IPv6
             protocol."d"Huawei Industrial Base                      
             Bantian, Longgang                           
             Shenzhen 518129                             
             People's Republic of China                  
             Website: http://www.huawei.com              
             Email: support@huawei.com                   
             " "201508060000Z" "201406300000Z" :"V2.02, modify the max-access of hwIpv6GlobalAddrAddress." �"V2.01, modify the description.
		              add nodes hwIpv6ProductAn, hwIpv6ProductAnTraps, hwIpv6AlarmTrapsPrefix and hwDadIPv6ConflictTrap."                   l"The IPv6 interfaces table contains information
            on the entity's internetwork-layer interfaces."                       X"An interface entry containing objects
             about a particular IPv6 interface."                       "Interface name."                       �"This object identifies whether IPv6 is enabled on interface 
            or not. If IPv6 is enabled on interface, the value of 
            this object refers to 1,else refers to 2."                      "Link local address configuration table for a router which
                consists of a sequence (i.e., one or more conceptual
                rows) of 'hwIpv6LinklocalCfgEntry' items which describe
                the link local address characteristics of IPv6 enabled interfaces."                      "An entry in hwIpv6LinklocalCfgTable containing link local address 
            characteristics of an IPv6 enabled interface. 
                Each row entry is identified uniquely by an ipv6IfIndex.
                ipv6IfIndex represents interface index of an interface."                      f"Specifies the configuration type of the link local address.
            This object has two defined values:
            
             - `manual', specifies that the link local address is manually configured
             
             - `auto', specifies that the link local address is auto configured 
                using the interface MAC address."                       �"This object specifies the link local address on the interface.
            For creation of auto link local address, this object value must be ignored."                       �"This object specifies whether auto link local address configuration 
            is enabled by administrator or not. Is 'true' when enabled otherwise 'false'."                      )"The RowStatus variable should be used in accordance to
               installation and removal conventions for conceptual
               rows with following deviations:
                             
               - only 'createAndGo' is supported for row creation, 
               - notInService(2) value is not supported.
               
               To create a row in this table, a manager sets this
               object to createAndGo(4).
               
               When the link local address is in Tentative/Duplicate state 
               then hwIpv6linklocalAddrRowStatus will take a value notReady (3).
               Otherwise hwIpv6linklocalAddrRowStatus is Active (1)
               
               To delete the row in this table, a manager sets this object to Destroy(6)."                      #"Global/EUI address configuration table for a router which
                consists of a sequence (i.e., one or more conceptual
                rows) of 'hwIpv6GlobalCfgEntry' items which describe
                the IPv6 global or EUI address characteristics of IPv6 enabled interfaces."                      �"An entry in hwIpv6GlobalCfgTable containing IPv6 global or EUI address 
            characteristics of an IPv6 enabled interface. 
                Each row entry is identified uniquely by a combination of 
                ipv6IfIndex and ipv6GblAddr.
                
                ipv6IfIndex represents interface index of an interface.
                ipv6GblAddr represents EUI prefix or global IPv6 address."                       H"This object specifies the global or EUI IPv6 address on the interface."                       {"The length of the prefix (in bits) associated with the configured 
            global or EUI IPv6 address of this entry."                       �"This object specifies whether the global address is an EUI address or not.
            Is 'true' if created as EUI address otherwise false."                      )"The RowStatus variable should be used in accordance to
               installation and removal conventions for conceptual
               rows with following deviations:
                             
               - only 'createAndGo' is supported for row creation, 
               - notInService(2) value is not supported.
               
               To create a row in this table, a manager sets this
               object to createAndGo(4).
               
               When the global or EUI IPv6 address is in Tentative/Duplicate state 
               then hwIpv6GlobalAddrRowStatus value will be notReady (3). 
               Otherwise hwIpv6GlobalAddrRowStatus is Active (1).
               
               To delete the row in this table, a manager sets this object to Destroy(6)."                               U"The compliance statement for systems supporting 
             the HUAWEI-IPV6-MIB."                   "The IPv6 table member."                             �"This notification is generated when device receives an NA packet,which  
             source Ipv6 address is the same as Ipv6 address of the device.
            "                                