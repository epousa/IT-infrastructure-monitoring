�-- ============================================================================
-- Copyright (C) 2014 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description:  The MIB used for configuring the information of the interface
--               including the IP address on it.
-- Reference:
-- Version: V1.09
-- ============================================================================
                                                 �"The MIB used for configuring the information of the interface
                 including the IP address on it.
                " �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China 
                 Website: http://www.huawei.com
                 Email: support@huawei.com
                " "201409010000Z" "201409010000Z" "201408110000Z" "201206300000Z" "201109210000Z" "201105180000Z" "201012180000Z" "201012180000Z" "201007090900Z" "V2.00, modified the default value of hwIpDslamInterfaceDscpForControlProtocol and hwIpDslamInterfaceDscpForManagementProtoco." ("V1.08, modified the date of copyright." �"V1.07, added hwIpDslamInterfaceDscpForControlProtocol and hwIpDslamInterfaceDscpForManagementProtocol in hwIpDslamInterfacePriorityTable." �"V1.06, added hwIpDslamInterfacePriorityDefaultTos, hwIpDslamInterfacePriorityTosForDhcp and hwIpDslamInterfacePriorityTosForRoutingPkt in hwIpDslamInterfacePriorityTable." U"V1.05, modify the year in Copyright description and the format of revision history." E"V1.04, modify the string length range of hwIpDslamInterfaceIfDescr." 1"V1.03, add the hwIpDslamInterfacePriorityTable." e"V1.02, modified the description of hwIpDslamInterfaceIpAddressType and hwIpDslamInterfaceIpAddress." "V1.01, initial version."               %"Interface Object.
                "               �"This table is used to manage the interface object, such as
                 create, modify and delete. The indexes of this table are
                 hwIpDslamInterfaceType and hwIpDslamInterfaceUnitNum.
                "                       �"This table is used to manage the interface object, such as
                 create, modify and delete. The indexes of this entry are
                 hwIpDslamInterfaceType and hwIpDslamInterfaceUnitNum.
                "                      �"Indicates the interface type.
                 Options:
                 1. inloopback(1) -the system inner loopback interface
                 2. null(2)       -the NULL interface
                 3. meth(3)       -the ethernet interface for management
                 4. vlanif(4)     -the VLAN interface
                 5. loopback(5)   -the loopback interface
                 6. tunnel(6)     -the tunnel interface
                "                       �"Indicates the interface unit number. The valid range of its
                 value lies on the interface type.
                "                       �"A unique value for each interface. The interface identified by
                 a particular value of this index is the same interface as
                 identified by the same value of the IF-MIB's ifIndex.
                "                       1"Indicates the interface name.
                "                       @"Indicates the description of this interface.
                "                       �"Interface admin status
                 Options:
                 1. up(1)   -indicates that the interface is up
                 2. down(2) -indicates that the interface is down
                "                      "Indicates the row status.
                 Options:
                 1. active(1)      -indicates query operation
                 2. createAndGo(4) -indicates creating an interface
                 3. destroy(6)     -indicates deleting an interface
                "                      �"This table is used to manage the interface object, such as
                 create, modify and delete. The indexes of this table are
                 hwIpDslamInterfaceIpIfIndex, hwIpDslamInterfaceIpAddressType,
                 hwIpDslamInterfaceIpAddress and hwIpDslamInterfaceIpPfxLen.
                 Make sure that the interface identified by the
                 hwIpDslamInterfaceIpAddress is already created in
                 hwIpDslamInterfaceTable.
                "                      �"This table is used to manage the interface object, such as
                 create, modify and delete. The indexes of this entry are
                 hwIpDslamInterfaceIpIfIndex, hwIpDslamInterfaceIpAddressType,
                 hwIpDslamInterfaceIpAddress and hwIpDslamInterfaceIpPfxLen.
                 Make sure that the interface identified by the
                 hwIpDslamInterfaceIpAddress is already created in
                 hwIpDslamInterfaceTable.
                "                       �"Indicates which interface the IP address is to be configured.
                 The value of it is same with the hwIpDslamInterfaceIfIndex
                 in hwIpDslamInterfaceTable.
                "                       �"The type of the hwIpDslamInterfaceIpAddress address, as defined
                 in the InetAddress MIB.
                 
                 Now only support ipv4(1).
                " 
"RFC 4001"                     �"The IP address of the interface.
                 The type of this address is determined by the value of
                 the hwIpDslamInterfaceIpAddressType object.
                "                      J"If hwIpDslamInterfaceIpAddressType is set to ipv4(1)
                 or ipv6(2), then this value will contain an appropriate
                 prefix length for the IP address in object
                 hwIpDslamInterfaceIpAddress. Otherwise this value is
                 irrelevant and should be ignored.
                "                      "Indicates the flag of the IP address.
                 Options:
                 1. primary(1)   -indicates that this IP address is the primary
                                  IP address of the interface
                 2. secondary(2) -indicates that this IP address is the primary
                                  IP address of the interface.
                                  One interface may have one primary IP address,
                                  and several secondary IP addresses.
                "                       �"Interface IP address acquiring method.
                 Options:
                 1. static(1) -indicates the address was manually configured
                 2. dhcp(2)   -indicates the address was assigned by a DHCP server
                "                      "Indicates the row status.
                 Options:
                 1. active(1)      -indicates query operation
                 2. createAndGo(4) -indicates creating an IP address
                 3. destroy(6)     -indicates deleting an IP address
                "                       �"This table is used to config the priority marked for the packet 
                 send from the VLAN interface. The index of this table is
                 hwIpDslamInterfacePriorityIfIndex.
                "                       �"This table is used to config the priority marked for the packet 
                 send from the VLAN interface. The index of this entry is
                 hwIpDslamInterfacePriorityIfIndex.
                "                       �"Indicates which interface the priority is to be configured on.
                 The value of it is same with the hwIpDslamInterfaceIfIndex
                 in hwIpDslamInterfaceTable.
                "                       �"The DSCP value for all packet. A value of -1 indicates that 
                 it has not been configured. In that case, the DSCP in packet
                 will use the value of 0.
                "                      
"The DSCP value for DHCP packet. A value of -1 indicates that 
                 it has not been configured. In that case, the DSCP for 
                 DHCP packet will use the value of 
                 hwIpDslamInterfacePriorityDefaultDscp. 
                "                      !"The DSCP value for routing-protocol packet. A value of -1 
                 indicates that it has not been configured. In that case,
                 the DSCP for routing-protocol packet will use the value of 
                 hwIpDslamInterfacePriorityDefaultDscp. 
                "                       �"The TOS value for all packet. A value of -1 indicates that 
                 it has not been configured. In that case, the TOS in packet
                 will use the value of 0.
                "                      "The TOS value for DHCP packet. A value of -1 indicates that 
                 it has not been configured. In that case, the TOS for 
                 DHCP packet will use the value of 
                 hwIpDslamInterfacePriorityDefaultTos. 
                "                      "The TOS value for routing-protocol packet. A value of -1 
                 indicates that it has not been configured. In that case,
                 the TOS for routing-protocol packet will use the value of 
                 hwIpDslamInterfacePriorityDefaultTos. 
                "                      -"The DSCP priority for control protocol packets. A value of 
                4294967295 indicates that it has not been configured. In that case, 
                the DSCP for control-protocol packet will use the value of 
                hwIpDslamInterfaceDscpForControlProtocol.
                "                      6"The DSCP priority for management protocol packets. A value of 
                4294967295 indicates that it has not been configured. In that case, 
                the DSCP for management-protocol packet will use the value of 
                hwIpDslamInterfaceDscpForManagementProtocol.
                "                      