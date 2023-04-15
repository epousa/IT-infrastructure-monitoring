;--   ============================================================================
-- Copyright (C) 2016 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This MIB module defines mib objects that provide NTP service
--              management.
--              The Network Time Protocol (NTP) is used in networks of all types
--              and sizes for time synchronization of servers, workstations and
--              other networked equipment.
-- Reference:
-- Version: V2.07
-- ============================================================================
                                                                "This MIB module defines mib objects that provide NTP service
                  management. The Network Time Protocol (NTP) is used in networks of all types
                  and sizes for time synchronization of servers, workstations and
                  other networked equipment." �"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201609260000Z" "201409040000Z" "201409010000Z" "201407230000Z" "201407030000Z" "201405280000Z" "201405060000Z" "201205220000Z" "201108100000Z" "201002080000Z" "201001300000Z""V2.07, modified hwNtpInInterfaceGenEntry, hwNtpBroadcastClientGenTable, hwNtpBroadcastClientGenEntry, hwNtpBroadcastServerGenTable, hwNtpBroadcastServerGenEntry description and modified alignment of hwNtpMulticastServerGenVersion, hwNtpIPv6ServerSwitch, hwNtpIPv4ServerSwitch" '"V2.06, modified the revision history." ("V2.05, modified the date of copyright." #"V2.04, change in auth keyid table" U"V2.03, added hwNtpIPv4ServerSwitch and hwNtpIPv6ServerSwitch for NTP Server Disable" <"V2.02, added new tables and scalar objects for IAS product" �"V2.01, added below nodes in HwNtpAuthenKeyEntry
	            	hwNtpAuthKeyidType
                                            hwNtpAuthKeyidPassword"�"V1.08, added below tables
	            	hwNtpAuthenAccessTable
			    hwNtpAuthenAccessAcl6    
			hwNtpInInterfaceTable
			    hwNtpInInterfaceAdminStatus6    
			hwNtpQueryNtpServerSessionTable    
			hwNtpSessionVpn    
			hwNtpUniServerTable
			    hwNtpUniServerMaxpoll
			    hwNtpUniServerMinpoll
			    hwNtpUniServerburst
			    hwNtpUniServerIburst
			    hwNtpUniServerPreempt    
			hwNtpUniPeerTable
			    hwNtpUniPeerMaxpoll
			    hwNtpUniPeerMinpoll
			    hwNtpUniPeerPreempt
		    	hwNtpServiceSourceInterfaceVpnTable
			hwNtpManycastClientTable
			hwNtpManycastServerTable
			hwNtpMulticastServerGenTable
			hwNtpMulticastClientGenTable
			Added below scalar nodes
				hwNtpKODStatus
				hwNtpDiscardMinInterval
				hwNtpDiscardAvgInterval" �"V1.07, NTP support VPN
                                        1) Added two tables hwNtpUniServerTable hwNtpUniPeerTable.
                			2) Added two nodes hwNtpSessionVpnInstance hwNtpStatusReferenceClockVpn.
					3) Modified the range of 5 nodes." "V1.01, release version" "V1.00, initial draft"                   R"Sets the synchronization interval. Unit: Second.
				0 indicates not configured."                       �"Used for enabling or disabling the NTP service KOD feature.
				Options:
				1. enable(1)  -indicates the NTP service KOD feature is enabled
				2. disable(2) -indicates the NTP service KOD feature is disabled
				"                           r"Indicates the maximum number of dynamic NTP sessions allowed on the host.
				Range: 0-100
				Default: 100
				"                      �"It is used for setting an NTP master clock. By using this table,
				you can set an NTP master clock on the host, which functions as
				the clock source for synchronizing the devices in a system.
				After an NTP master clock is set successfully, all devices required
				to follow the same clock in the system must synchronize to the master clock.
				The index of this table is hwNtpRefclockMasterIpaddr.
				"                      �"It is used for setting an NTP master clock. By using this table,
				you can set an NTP master clock on the host, which functions as
				the clock source for synchronizing the devices in a system.
				After an NTP master clock is set successfully, all devices required
				to follow the same clock in the system must synchronize to the master clock.
				The index of this entry is hwNtpRefclockMasterIpaddr.
				"                       �"Indicates the IP address of the clock source. The format of the
				value is 127.127.1.u, where u ranges from 0 to 3. The default
				value of this leaf is 127.127.1.0."                      "Indicates the stratum where the local clock is specified to locate.
				The stratum represents the precision of a clock. The clock at stratum
				1 has the highest precision. The precision descends from stratum 1 to
				stratum 15. The default value of this leaf is 8."                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                          �"Indicates the interface type.
				Options:
				1. tunnel(1)      -indicates the tunnel interface
				2. null(2)        -indicates the NULL interface
				3. meth(3)        -indicates the MEth interface
				4. vlanif(4)      -indicates the VLAN interface
				5. loopback(5)    -indicates the loopback interface
				6. notConfigured(6) -indicates that no source interface is configured

				When this leaf is set to notConfigured(6), it indicates that no source
				interface is configured.
				"                      e"Indicates the interface ID.
				Range: 0-4093
				Range for the tunnel interface: 1-64
				Range for the NULL interface: 0
				Range for the MEth interface: 0
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpServiceSourceInterfaceIfType) together identify an interface.
				"                          �"Used for enabling or disabling the NTP service authentication function.
				Options:
				1. enable(1)  -indicates the NTP service authentication function is enabled
				2. disable(2) -indicates the NTP service authentication function is disabled

				After the NTP service authentication function is enabled, this function
				is available; otherwise, this function is not available.
				"                      �"To protect the NTP service of the local device, use this table to set the
				authority for accessing the NTP service of the local device. After the
				authority is set successfully, the local device determines whether to process
				the received NTP synchronization packet and whether to allow the local device
				to synchronize to the device sending the packet, according to the configured
				authority and the packet content.
				The index of this table is hwNtpAuthenAccessType.
				"                      �"To protect the NTP service of the local device, use this table to set the
				authority for accessing the NTP service of the local device. After the
				authority is set successfully, the local device determines whether to process
				the received NTP synchronization packet and whether to allow the local device
				to synchronize to the device sending the packet, according to the configured
				authority and the packet content.
				The index of this entry is hwNtpAuthenAccessType.
				"                      "Indicates the access authority type. This leaf is the index of the table.
				Five options are supported.
				Options:
				1. peer(1)        	  -The time request and control query to the local NTP service are allowed
				                       and the local clock can be synchronized to the remote server.
				2. query(2)           -Only the control query to the local NTP service is allowed.
				3. server(3)          -The time request and control query to the local NTP service are allowed
				                       but the local clock is not synchronized to the remote server.
				4. synchronization(4) -Only the time request to the local NTP service is allowed.
				5. limited(5)         -Controls the incoming packet rate and kiss code sent when kod is enabled.
				"                      +"Indicates the IPv4 ACL number.
				Range: 2000-2999
				The default value is 0, indicating no configuration.
				The IP address ACL is used by the local device to match the source IP address of
				a received packet, and then the device can determine whether to process or discard the packet.
				"                      N"Indicates the row status. It is used for create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      ."Indicates the IPv6 ACL number.
				Range: 2000-2999
				The default value is 0, indicating no configuration.
				The IPv6 address ACL is used by the local device to match the source IPv6 address of
				a received packet and then the device can determine whether to process or discard the packet.
				"                      "It is used for setting the NTP service authentication key.
				During the creation of the NTP service authentication key,
				you can also set and issue hwNtpAuthReliableSwitch,
				declaring the created key as reliable.
				The index of this table is hwNtpAuthKeyidNumber.
				"                      "It is used for setting the NTP service authentication key.
				During the creation of the NTP service authentication key,
				you can also set and issue hwNtpAuthReliableSwitch,
				declaring the created key as reliable.
				The index of this entry is hwNtpAuthKeyidNumber.
				"                       8"Indicates the key number.
				Range: 1-4294967295
				"                       �"Indicates the MD5 key.
				The MD5 key must not contain the space character and '?' character.
				Reading this object always results in an OCTET STRING of length zero.
				Authentication may not be bypassed by reading the MIB object.
				"                       �"Used for specifying the authentication key as reliable and to undo the current setting.
				Options:
				1. enable(1)  -indicating that the key is reliable.
				2. disable(2) -indicating that the key is not reliable.
				Default: disable(2).
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       �"Indicates hashing algorithm MD5 or SHA-256 which is used for NTP authentication.
				Options:
				1. MD5(1)  -indicates the NTP MD5 algorithm is used as hasing algorithm
				2. SHA-256(2) -indicates the NTP SHA-256 algorithm is used as hasing algorithm"                      Z"Indicates MD5 or SHA256 password key.
				The key must not contain the space character and '?' character.
				Reading this object always results in an OCTET STRING of length zero.
				Authentication may not be bypassed by reading the MIB object.
				hwNtpAuthKeyidType and hwNtpAuthKeyidPassword should be configured together for set operation."                       �"It is used for setting the NTP unicast server mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the time server
				of the local device.
				The index of this table is hwNtpUnicastServerIp.
				"                       �"It is used for setting the NTP unicast server mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the time server
				of the local device.
				The index of this entry is hwNtpUnicastServerIp.
				"                       �"Indicates the IP address of the remote server. The IP address is the address of the
				host and cannot be a broadcast IP address, multicast IP address, IP address of the
				clock source or IP address of an interface on the local device."                       �"Indicates the NTP protocol version.
				Range: 1-4
				Default: 3
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				"                      M"Indicates the key ID used for sending packets to the remote server.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The key ID identifies a key.
				When the packets sent by the remote server need to be authenticated, you need
				to set and issue this leaf.
				"                      c"Indicates the interface type.
				Options:
				1. tunnel(1)      -indicates the tunnel interface
				2. null(2)        -indicates the NULL interface
				3. meth(3)        -indicates the MEth interface
				4. vlanif(4)      -indicates the VLAN interface
				5. loopback(5)    -indicates the loopback interface
				6. notConfigured(6) -indicates that no source interface is configured

				When this leaf is set to notConfigured(6), it indicates that no source interface is
				configured in the case of the create operation and that the source interface
				is deleted in the case of the modify operation.
				"                      �"Indicates the interface ID.
				Range: 0-4093
				Range for the tunnel interface: 1-64
				Range for the NULL interface: 0
				Range for the MEth interface: 0
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31

				The interface ID and interface type (hwNtpUnicastServerSourceIfType) together
				identify the source interface for sending NTP unicast packets.
				"                      *"Indicates the server is the preferred server.
				Options:
				1. enable(1)  -indicates that the server is preferred
				2. disable(2) -indicates that the server is not preferred

				When multiple servers exist at the same stratum, the specified server is preferred
				for synchronization.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       �"Specifies the interface name used for sending out the packets if
				hwNtpUnicastServerSourceIfType and hwNtpUnicastServerSourceIfNumber
				are configured. If not configured, it will be wildcard.
				"                       �"It is used for setting the NTP unicast peer mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the peer of
				the local device.
				The index of this table is hwNtpUnicastPeerIP.
				"                       �"It is used for setting the NTP unicast peer mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the peer of
				the local device.
				The index of this entry is hwNtpUnicastPeerIP.
				"                       �"Indicates the IP address of the remote peer. The IP address is the address
				of the host and cannot be a broadcast IP address, multicast IP address, IP address
				of the clock source or IP address of an interface on the local device."                       �"Indicates the NTP protocol version.
				Range: 1-4
				Default: 3
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				"                      :"Indicates the key ID for sending packets to the unicast peer.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The key ID identifies a key.
				When the packets sent by the peer need to be authenticated, you need to set and issue this leaf.
				"                      b"Indicates the interface type.
				Options:
				1. tunnel(1)      -indicates the tunnel interface
				2. null(2)        -indicates the NULL interface
				3. meth(3)        -indicates the MEth interface
				4. vlanif(4)      -indicates the VLAN interface
				5. loopback(5)    -indicates the loopback interface
				6. notConfigured(6) -indicates that no source interface is configured
				When this leaf is set to notConfigured(6), it indicates that no source interface is configured in
				the case of the create operation and that the source interface is deleted in the case of the
				modify operation.
				"                      `"Indicates the interface ID.
				Range: 0-4093
				Range for the tunnel interface: 1-64
				Range for the NULL interface: 0
				Range for the MEth interface: 0
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpUnicastPeerSourceIfType) together identify an interface.
				"                      "Indicates the peer is the preferred peer.
				Options:
				1. enable(1)  -indicates that the peer is preferred.
				2. disable(2) -indicates that the peer is not preferred.
				When multiple peers exist at the same stratum, the specified peer is preferred
				for synchronization.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       �"Specifies the interface name used for sending out the packets if
				hwNtpUnicastPeerSourceIfType and hwNtpUnicastPeerSourceIfNumber
				are configured. If not configured, it will be wildcard.
				"                      z"It is used for setting the local device to function as a multicast client.
				When functioning as a multicast client, the local device listens for the NTP multicast
				packets sent by the server and synchronizes the local clock with the clock source.
				The indexes of this table are hwNtpMulticastClientIfType, hwNtpMulticastClientIfNumber and hwNtpMulticastClientIp.
				"                      z"It is used for setting the local device to function as a multicast client.
				When functioning as a multicast client, the local device listens for the NTP multicast
				packets sent by the server and synchronizes the local clock with the clock source.
				The indexes of this entry are hwNtpMulticastClientIfType, hwNtpMulticastClientIfNumber and hwNtpMulticastClientIp.
				"                       �"Indicates the interface type to configure NTP multicast client.
				Options:
				1. loopback(1) -indicates the loopback interface
				2. vlanif(2)   -indicates the VLAN interface
				"                      8"Indicates the interface ID to configure NTP multicast client.
				Range: 0-4093
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpMulticastClientIfType) together identify
				the interface for receiving NTP multicast packets.
				"                       j"Indicates the IP address of the NTP multicast client. The IP address can only be a class-D address.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      Y"It is used for setting the NTP multicast server mode. When functioning in the multicast
				server mode, the local device serves as the multicast server and periodically sends multicast
				packets to multicast clients.
				The indexes of this table are hwNtpMulticastServerIfType, hwNtpMulticastServerIfNumber and hwNtpMulticastServerIP.
				"                      Y"It is used for setting the NTP multicast server mode. When functioning in the multicast
				server mode, the local device serves as the multicast server and periodically sends multicast
				packets to multicast clients.
				The indexes of this entry are hwNtpMulticastServerIfType, hwNtpMulticastServerIfNumber and hwNtpMulticastServerIP.
				"                       �"Indicates the interface type to configure NTP multicast server.
				Options:
				1. loopback(1) -indicates the loopback interface
				2. vlanif(2)   -indicates the VLAN interface
				"                      6"Indicates the interface ID to configure NTP multicast server.
				Range: 0-4093
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpMulticastServerIfType) together identify
				the interface for sending NTP multicast packets.
				"                       �"Indicates the IP address of the multicast server for sending multicast packets.
				The IP address can only be a class-D address. This IP address identifies a multicast server."                       �"Indicates the NTP protocol version.
				Range: 1-4
				Default: 3
				The protocol of a later version is compatible with that of an earlier version,
				but an earlier version is not compatible with a later version.
				"                      "Indicates the key ID for sending messages to a multicast client.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The key ID identifies a key.
				The server and the client use the same authentication key.
				"                      R"Indicates the TTL value of the multicast packet sent. Each time a multicast packet is forwarded,
				TTL value is increased starting from 1 till the configured or default value is reached.
				When the TTL value reaches configured or default value, the device does not forward the multicast packet.
				Range: 1-255
				Default: 16
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      K"It is used for setting the NTP broadcast client mode. When set to the broadcast
				client mode, the local device listens for NTP broadcast packets and synchronizes
				the local clock according to the received broadcast packets.
				The indexes of this table are hwNtpBroadcastClientIfType and hwNtpBroadcastClientIfNumber.
				"                      K"It is used for setting the NTP broadcast client mode. When set to the broadcast
				client mode, the local device listens for NTP broadcast packets and synchronizes
				the local clock according to the received broadcast packets.
				The indexes of this entry are hwNtpBroadcastClientIfType and hwNtpBroadcastClientIfNumber.
				"                       �"Indicates the interface type to configure NTP broadcast client.
				Options:
				1. loopback(1) -indicates the loopback interface
				2. vlanif(2)   -indicates the VLAN interface
				"                      4"Indicates the interface ID to configure NTP broadcast client.
				Range: 0-4093
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpBroadcastClientIfType) together
				identify the interface for receiving broadcast packets.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      O"It is used for setting the NTP broadcast server mode. When serving as an NTP broadcast
				server, the local router periodically sends clock synchronization packets to broadcast
				address 255.255.255.255 from a specified interface.
				The indexes of this table are hwNtpBroadcastServerIfType and hwNtpBroadcastServerIfNumber.
				"                      O"It is used for setting the NTP broadcast server mode. When serving as an NTP broadcast
				server, the local router periodically sends clock synchronization packets to broadcast
				address 255.255.255.255 from a specified interface.
				The indexes of this entry are hwNtpBroadcastServerIfType and hwNtpBroadcastServerIfNumber.
				"                       �"Indicates the interface type to configure NTP broadcast server.
				Options:
				1. loopback(1) -indicates the loopback interface
				2. vlanif(2)   -indicates the VLAN interface
				"                      2"Indicates the interface ID to configure NTP broadcast server.
				Range: 0-4093
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpBroadcastServerIfType) together identify
				the interface for sending broadcast packets.
				"                       �"Indicates the NTP protocol version.
				Range: 1-4
				Default: 3
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				"                      "Indicates the key ID for sending packets to a broadcast client.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 means not configured.
				The key ID identifies a key.
				The server and the client use the same authentication key.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       ~"It is used for enabling or disabling the NTP packet reception capability of a VLAN
				interface or loopback interface.
				"                       �"It is used for enabling or disabling the NTP packet reception capability of a VLAN
				interface or loopback interface.
				The indexes of this entry are hwNtpInInterfaceType and hwNtpInInterfaceIfNumber.
				"                       �"Indicates the interface type of the ingress interface.
				Options:
				0. invalid(0) -indicates the Invalid interface
				1. loopback(1) -indicates the loopback interface
				2. vlanif(2)   -indicates the VLAN interface
				"                      9"Indicates the interface number of the ingress interface.
				Range: 0-4093
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpInInterfaceType) together identify the
				interface for enabling or disabling NTP packets reception.
				"                      K"Enables or disables an ingress interface.
				Options:
				1. enabled(1)  -indicates that the NTP IPv4 packet reception capability is enabled
				2. disabled(2) -indicates that the NTP IPv4 packet reception capability is disabled
				Default: enabled(1)
				In the walk operation, only the disabled interfaces are displayed.
				"                      K"Enables or disables an ingress interface.
				Options:
				1. enabled(1)  -indicates that the NTP IPv6 packet reception capability is enabled
				2. disabled(2) -indicates that the NTP IPv6 packet reception capability is disabled
				Default: enabled(1)
				In the walk operation, only the disabled interfaces are displayed.
				"                       �"It is used for querying the information about all the sessions maintained by the
				NTP service of the local device.
				The index of this table is hwNtpSessionAssociationID.
				"                       �"It is used for querying the information about all the sessions maintained by the
				NTP service of the local device.
				The index of this entry is hwNtpSessionAssociationID.
				"                       �"Indicates the NTP session ID.
				Range: 1-65535
				The NTP session ID is automatically allocated inside the system and is not user-configurable.
				"                       ["Indicates the IP address of the remote host, i.e. the host connected to the local device."                       �"Indicates the clock stratum of the remote host.
				Range: 0-16
				The value 16 indicates that no clock stratum is configured.
				"                       �"Specifies the IP address of the remote server or the identifier of the reference clock that the local system clock has been synchronized with.
				"                       �"Indicates the flag of the current system clock source.
				Options:
				1. true(1)  -indicates that the clock is the current system clock source
				2. false(2) -indicates that the clock is not the current system clock source
				"                       �"Indicates the flag of the candidate clock source.
				Options:
				1. true(1)  -indicates that the clock is the candidate clock source
				2. false(2) -indicates that the clock is not the candidate clock source
				"                      "Indicates the flag of the clock source participating in the clock selection.
				Options:
				1. true(1)  -indicates that the clock source participates in the clock selection
				2. false(2) -indicates that the clock source does not participate in the clock selection
				"                      ="Indicates the flag of the clock as a member of the candidate synchronous clock source list.
				Options:
				1. true(1)  -indicates that the clock is a member of the candidate synchronous clock source list
				2. false(2) -indicates that the clock is not a member of the candidate synchronous clock source list
				"                      1"Indicates the configured flag. Indicates whether the session is configured by the user on the local host.
				Options:
				1. true(1)  -indicates that the session is configured by the user on the local host
				2. false(2) -indicates that the session is not configured by the user on the local host
				"                       X"Indicates the poll interval for sending packets.
				Default: 64
				Unit: Second
				"                       e"Indicates the time since the NTP packet is received from the peer last time.
				Unit: Second.
				"                       T"Indicates the offset. It is the offset between the local clock and its peer clock."                       _"Indicates the round-trip delay for transmitting the NTP packet between the server and client."                       f"Indicates the dispersion. It means the maximum tolerance between the local clock and its peer clock."                       �"Indicates the reachability. It means whether the NTP packet sent by the remote host can reach the local device.
				The value 0 indicates unreachable, and the non-zero value indicates reachable.
				"                       �"Indicates the flag of the VPN instance.
				Options:
				1. true(1)  -indicates that the clock is in a VPN instance
				2. false(2) -indicates that the clock is not in a VPN instance, i.e. in the public VPN
				"                       k"Indicates the VPN name to which the clock source belongs, in case of public VPN, value will be NULL.
				"                           �"Indicates the clock Status of the local device.
				Options:
				1. unsynchronized(1) -indicates the local clock is not synchronized to the remote server
				2. synchronized(2)   -indicates the local clock is synchronized to the remote server
				"                       �"Indicates the clock stratum of the local device.
				Range: 1-16
				The value 16 indicates that no clock stratum is configured.
				"                       x"Indicates the reference clock ID of the clock source. The value 0.0.0.0 indicates that clock is not synchronized.
				"                       �"Indicates the nominal frequency of the local device. It is the pulse frequency
				of the clock source and affects the precision of the clock source.
				Unit: Hz
				"                       �"Indicates the actual frequency of the local device. It is the pulse frequency
				of the clock source in actual running.
				Unit: Hz
				"                       �"Indicates the precision of the local clock of the local device. The precision of the local
				clock is indicated by the offset range of the local clock source. 2^N indicates 2 to the power of -N.
				For example, 2^7 = 0.0078125.
				"                      "Indicates the clock offset. Indicates the adjustment value of the local clock when it synchronizes
				to the clock source. The clock offset is the difference between the two clocks before the local
				clock synchronizes to the clock source.
				Unit: Millisecond
				"                       z"Indicates the root delay. It indicates the delay between a server and its upper-layer server.
				Unit: Millisecond
				"                       �"Indicates the root dispersion. It indicates the dispersion between a server and its upper-layer server.
				Unit: Millisecond
				"                       �"Indicates the peer dispersion. It indicates the maximum tolerance between the local clock and its peer clock.
				Unit: Millisecond
				"                       �"Indicates the reference time. It is the adjusted local time.
				The data type is DateAndTime and the time format is UTC.
				"                       9"Indicates the VPN in which the reference clock is.
				"                      7"It is used for setting the NTP unicast server mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the time server
				of the local device.
				The indexes of this table are hwNtpUniServerVpnName, hwNtpUniServerAddressType and hwNtpUniServerAddress.
				"                      7"It is used for setting the NTP unicast server mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the time server
				of the local device.
				The indexes of this entry are hwNtpUniServerVpnName, hwNtpUniServerAddressType and hwNtpUniServerAddress.
				"                       ?"It is used for setting the VPN instance of the remote server."                       �"The value of this object identifies the type of the remote server's IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2."                      "Indicates the IP address of the remote server. The IP address is the address of the
				host and cannot be a broadcast IP address, multicast IP address, IP address of the
				clock source or IP address of an interface on the local device. (Supports both IPv4 and IPv6).
				"                      Q"Indicates the NTP protocol version.
				Range: 1-4 for IPv4 server
				       4 for IPv6 server (IPv6 supports only version 4)
				Default: 3 for IPv4 server
				         4 for IPv6 server
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				"                      M"Indicates the key ID used for sending packets to the remote server.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The key ID identifies a key.
				When the packets sent by the remote server need to be authenticated, you need
				to set and issue this leaf.
				"                      c"Indicates the interface type.
				Options:
				1. tunnel(1)      -indicates the tunnel interface
				2. null(2)        -indicates the NULL interface
				3. meth(3)        -indicates the MEth interface
				4. vlanif(4)      -indicates the VLAN interface
				5. loopback(5)    -indicates the loopback interface
				6. notConfigured(6) -indicates that no source interface is configured
				When this leaf is set to notConfigured(6), it indicates that no source interface is
				configured in the case of the create operation, and that the source interface
				is deleted in the case of the modify operation.
				"                      �"Indicates the interface ID.
				Range: 0-4093
				Range for the tunnel interface: 1-64
				Range for the NULL interface: 0
				Range for the MEth interface: 0
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpUniServerSourceIfType) together
				identify the source interface for sending NTP unicast packets.
				"                      C"Indicates the server is the preferred server.
				Options:
				1. enable(1)  -indicates that the server is preferred.
				2. disable(2) -indicates that the server is not preferred.
				Default: disable(2)
				When multiple servers exist at the same stratum, the specified server is preferred
				for synchronization.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       G"Indicates NTP maximum poll interval.
				Range: 10-17
				Default: 10"                       E"Indicates NTP minimum poll interval.
				Range: 3-13
				Default: 6"                       �"Indicates packets sent will be in burst mode
				Options:
				1. enable(1)  -indicates packets are sent in burst mode
				2. disable(2) -indicates packets are sent in normal mode"                       �"Indicates packets sent will be in iburst mode
				Options:
				1. enable(1)  -indicates packets are sent in iburst mode
				2. disable(2) -indicates packets are sent in normal mode"                       �"Indicates the server can be preempted.
				Options:
				1. enable(1)  -indicates that the server can be preempted
				2. disable(2) -indicates that the server cannot be preempted
				Default: disable(2)"                       s"Specifies the interface name used for sending out the packets.
				 If not configured, it will be wildcard.
				 "                      ("It is used for setting the NTP unicast peer mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the peer of
				the local device.
				The indexes of this table are hwNtpUniPeerVpnName, hwNtpUniPeerAddressType and hwNtpUniPeerAddress.
				"                      )"It is used for setting the NTP unicast peer mode. This table provides a leaf for
				setting an IP address, which specifies a remote server to serve as the peer of
				the local device.
				The indexes of this entry are  hwNtpUniPeerVpnName, hwNtpUniPeerAddressType and hwNtpUniPeerAddress.
				"                       ="It is used for setting the VPN instance of the remote peer."                       �"The value of this object identifies the type of the remote peer's IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2."                      "Indicates the IP address of the remote peer. The IP address is the address
				of the host and cannot be a broadcast IP address, multicast IP address, IP address
				of the clock source or IP address of an interface on the local device. (Supports both IPv4 and IPv6).
				"                      I"Indicates the NTP protocol version.
				Range: 1-4 for IPv4 peer
				       4 for IPv6 peer (IPv6 supports only version 4)
				Default: 3 for IPv4 peer
				         4 for IPv6 peer
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				"                      :"Indicates the key ID for sending packets to the unicast peer.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The key ID identifies a key.
				When the packets sent by the peer need to be authenticated, you need to set and issue this leaf.
				"                      c"Indicates the interface type.
				Options:
				1. tunnel(1)      -indicates the tunnel interface
				2. null(2)        -indicates the NULL interface
				3. meth(3)        -indicates the MEth interface
				4. vlanif(4)      -indicates the VLAN interface
				5. loopback(5)    -indicates the loopback interface
				6. notConfigured(6) -indicates that no source interface is configured

				When this leaf is set to notConfigured(6), it indicates that no source interface is
				configured in the case of the create operation and that the source interface
				is deleted in the case of the modify operation.
				"                      \"Indicates the interface ID.
				Range: 0-4093
				Range for the tunnel interface: 1-64
				Range for the NULL interface: 0
				Range for the MEth interface: 0
				Range for the VLAN interface: 1-4093
				Range for the loopback interface: 0-31
				The interface ID and interface type (hwNtpUniPeerSourceIfType) together identify an interface.
				"                      5"Indicates the peer is the preferred peer.
				Options:
				1. enable(1)  -indicates that the peer is preferred
				2. disable(2) -indicates that the peer is not preferred
				Default: disable(2)
				When multiple peers exist at the same stratum, the specified peer is preferred
				for synchronization.
				"                      R"Indicates the row status. It is used for the create, delete and query operations.
				In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       G"Indicates NTP maximum poll interval.
				Range: 10-17
				Default: 10"                       E"Indicates NTP minimum poll interval.
				Range: 3-13
				Default: 6"                       �"Indicates the peer can be preempted.
				Options:
				1. enable(1)  -indicates that the peer can be preempted
				2. disable(2) -indicates that the peer cannot be preempted
				Default: disable(2)"                       s"Specifies the interface name used for sending out the packets.
				 If not configured, it will be wildcard.
				 "                           L"Indicates the minimum inter-packet spacing interval  Range: 1-8 Default: 1"                       L"Indicates the average inter-packet spacing interval  Range: 1-8 Default: 5"                      �"The hwNtpServiceSourceInterfaceVpn table is used to specify the IPv4/IPv6 interface
				to send NTP messages with specified VPN. In case of no configuration for VPN, default VPN 0 will be considered.
				In the unicast mode, if you want only one interface to receive the NTP response packets,
				specify NTP packets sent from all local interfaces to use the same source IP address.
				In the broadcast and multicast modes, the ntp-service source-interface command is invalid.
				It is because the NTP service is enabled on the specified interface that actually is the source interface.
				The indexes of this table are hwNtpServiceSourceInterfaceVpnName and hwNtpServiceSourceInterfaceVpnAddressType.
				"                      �"The hwNtpServiceSourceInterfaceVpn table is used to specify the IPv4/IPv6 interface
				to send NTP messages with specified VPN. In case of no configuration for VPN, default VPN 0 will be considered.
				In the unicast mode, if you want only one interface to receive the NTP response packets,
				specify NTP packets sent from all local interfaces to use the same source IP address.
				In the broadcast and multicast modes, the ntp-service source-interface command is invalid.
				It is because the NTP service is enabled on the specified interface that actually is the source interface.
				The indexes of this entry are hwNtpServiceSourceInterfaceVpnName and hwNtpServiceSourceInterfaceVpnAddressType.
				"                       B"It is used for setting the VPN instance of the source interface."                       �"The value of this object identifies the type of the source interface's IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2.
				"                       r"Specifies the interface name used for sending out the packets.
				 If not configured, it will be wildcard.
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      M"hwNtpManycastClient table specifies NTP manycast client configurations.
				An interface on the local device to send NTP manycast messages when timeout occurs.
				The local device runs in manycast client mode and periodically sends manycast messages to the manycast server.
				Based on the message received from manycast server, the dynamic client-server association is established.
				While configuring manycast client, multicast IPv4 or IPv6 address must be used.
				The indexes of this table are hwNtpManycastClientIfName, hwNtpManycastClientIpType and hwNtpManycastClientIp.
				"                      H"hwNtpManycastClient table specifies NTP manycast client configurations.
				An interface on the local device to send NTP manycast messages when timeout occurs.
				The local device runs in manycast client mode and periodically sends manycast messages to the manycast server.
				Based on the message received from manycast server, the dynamic client-server association is established.
				While configuring manycast client, multicast IPv4 or IPv6 address must be used.
				The indexes of this entry are hwNtpManycastClientIfName, hwNtpManycastClientIpType and hwNtpManycastClientIp."                       �"Specifies the interface name to configure generic manycast client.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface.
 				"                       �"The value of this object identifies the type of the manycast IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2.
				"                       �"Indicates the IP address of the manycast client for sending manycast packets.
				The IP address can only be a class-D address. This IP address identifies a manycast client. (Supports both IPv4 and IPv6).
				"                       �"Indicates the authentication key ID number used while sending messages to the manycast servers.
				0 indicates not configured."                      :"Indicates the TTL of a manycast packet. Each time a manycast packet is forwarded,
				TTL value is increased starting from 1 till the configured or default value is reached. When the TTL value reaches configured or default value, the device does not forward the manycast packet.
				Range: 1-255
				Default: 255"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      ("hwNtpManycastServer table specifies ntp service manycast server configuration, we can specify an interface on
				the local device to receive NTP manycast packets. The local device is run in the manycast server mode.
				The manycast server responds to manycast client packets.
				Based on the response, manycast client creates ephemeral association and works in client server mode.
				If we configure manycast server on the current interface, it is ready to receive NTP manycast messages
				and the local device runs in the server mode. When we remove manycast server configuration and multicast
				IP address is not specified then local device searches for default IP addresses.
				The manycast server with default IP address is 224.0.1.1 in IPv4 network and FFOE::101 in IPv6 address.
				If the local device finds the default IP address, this command cancels the manycast server configuration,
				else it does not perform any action.
				The indexes of this table are hwNtpManycastServerIfName, hwNtpManycastServerIpType and hwNtpManycastServerIp.
				"                      #"hwNtpManycastServer table specifies ntp service manycast server configuration, we can specify an interface on
				the local device to receive NTP manycast packets. The local device is run in the manycast server mode.
				The manycast server responds to manycast client packets.
				Based on the response, manycast client creates ephemeral association and works in client server mode.
				If we configure manycast server on the current interface, it is ready to receive NTP manycast messages
				and the local device runs in the server mode. When we remove manycast server configuration and multicast
				IP address is not specified then local device searches for default IP addresses.
				The manycast server with default IP address is 224.0.1.1 in IPv4 network and FFOE::101 in IPv6 address.
				If the local device finds the default IP address, this command cancels the manycast server configuration,
				else it does not perform any action.
				The indexes of this entry are hwNtpManycastServerIfName, hwNtpManycastServerIpType and hwNtpManycastServerIp."                       �"Specifies the interface name to configure generic manycast server.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface.
 				"                       �"The value of this object identifies the type of the manycast IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2."                       �"Indicates the IP address of the manycast server for receiving manycast packets.
				The IP address can only be a class-D address. This IP address identifies a manycast server. (Supports both IPv4 and IPv6).
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      c"It is used for setting the NTP multicast server mode. When functioning in the multicast server mode,
				the local device serves as the multicast server and periodically sends multicast packets to multicast clients.
				The indexes of this table are hwNtpMulticastServerGenIfName, hwNtpMulticastServerGenAddressType and hwNtpMulticastServerGenAddr.
				"                      c"It is used for setting the NTP multicast server mode. When functioning in the multicast server mode,
				the local device serves as the multicast server and periodically sends multicast packets to multicast clients.
				The indexes of this entry are hwNtpMulticastServerGenIfName, hwNtpMulticastServerGenAddressType and hwNtpMulticastServerGenAddr.
				"                       �"Specifies the interface name to configure generic multicast server.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface.
 				"                       �"The value of this object identifies the type of the multicast IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2."                       �"Indicates the IP address of the multicast server for sending multicast packets.
				This IP address identifies a multicast server. (Supports both IPv4 and IPv6).
				"                      X"Indicates the NTP protocol version.
				Range: 1-4 for IPv4 server
				       4 for IPv6 server (IPv6 supports only version 4)
				Default: 3 for IPv4 server
				         4 for IPv6 server
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				       "                      H"Indicates the key ID for sending messages to a multicast client.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The value 0 indicates that no key is configured. The key ID identifies a key.
				The server and the client use the same authentication key.
				"                      R"Indicates the TTL value of the multicast packet sent. Each time a multicast packet is forwarded,
				TTL value is increased starting from 1 till the configured or default value is reached.
				When the TTL value reaches configured or default value, the device does not forward the multicast packet.
				Range: 1-255
				Default: 16
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                      �"It is used for setting the local device to function as a multicast client.
				When functioning as a multicast client, the local device listens for the NTP multicast
				packets sent by the server and synchronizes the local clock with the clock source.
				The indexes of this table are hwNtpMulticastClientGenIfName, hwNtpMulticastClientGenAddressType and hwNtpMulticastClientGenAddr.
				"                      �"It is used for setting the local device to function as a multicast client.
				When functioning as a multicast client, the local device listens for the NTP multicast
				packets sent by the server and synchronizes the local clock with the clock source.
				The indexes of this entry are hwNtpMulticastClientGenIfName, hwNtpMulticastClientGenAddressType and hwNtpMulticastClientGenAddr."                       �"Specifies the interface name to configure generic multicast client.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface.
 				"                       �"The value of this object identifies the type of the multicast IP address i.e. IPv4 or IPv6.
				For IPv4 value is 1 and for IPv6 value is 2.
				"                       �"Indicates the IP address of the multicast client to receive multicast packets.
				This IP address identifies a multicast client. (Supports both IPv4 and IPv6).
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       �"It is used for setting the NTP broadcast client mode. When set to the broadcast
				client mode, the local device listens for NTP broadcast packets and synchronizes
				the local clock according to the received broadcast packets.
				"                      *"It is used for setting the NTP broadcast client mode. When set to the broadcast
				client mode, the local device listens for NTP broadcast packets and synchronizes
				the local clock according to the received broadcast packets.
				The index of this entry is hwNtpBroadcastClientGenIfName.
				"                       �"Specifies the interface name to configure generic broadcast client.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface.
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       �"It is used for setting the NTP broadcast server mode. When serving as an NTP broadcast
				server, the local router periodically sends clock synchronization packets to broadcast
				address 255.255.255.255 from a specified interface.
				"                      ."It is used for setting the NTP broadcast server mode. When serving as an NTP broadcast
				server, the local router periodically sends clock synchronization packets to broadcast
				address 255.255.255.255 from a specified interface.
				The index of this entry is hwNtpBroadcastServerGenIfName.
				"                       �"Specifies the interface name to configure generic broadcast server.
 				 The following interfaces are supported.
 				 1. loopback       -indicates the loopback interface               
 				 2. vlanif         -indicates the VLAN interface
 				"                      X"Indicates the NTP protocol version.
				Range: 1-4 for IPv4 server
				       4 for IPv6 server (IPv6 supports only version 4)
				Default: 3 for IPv4 server
				         4 for IPv6 server
				The protocol of a later version is compatible with an earlier version,
				but an earlier version is not compatible with a later version.
				       "                      H"Indicates the key ID for sending messages to a broadcast client.
				Range: 0-4294967295 for versions 1,2 and 3
				Range: 0-65535 for version 4
				0 indicates not configured.
				The value 0 indicates that no key is configured. The key ID identifies a key.
				The server and the client use the same authentication key.
				"                      R"Indicates the row status. It is used for the create, delete
				and query operations. In the modify operation, this leaf is not set or issued.
				Options:
				1. createAndGo(4) -specified in the create operation
				2. destroy(6)     -specified in the delete operation
				3. active(1)      -always returned in the query operation
				"                       ~"It is used for enabling or disabling the NTP packet reception capability of a VLAN
				interface or loopback interface.
				"                       �"It is used for enabling or disabling the NTP packet reception capability of a VLAN
				interface or loopback interface.
				The index of this entry is hwNtpInInterfaceGenIfName.
				"                       t"Interface name is used for enabling or disabling the NTP packet reception capability on specified interface.
				 "                      K"Enables or disables an ingress interface.
				Options:
				1. enabled(1)  -indicates that the NTP IPv4 packet reception capability is enabled
				2. disabled(2) -indicates that the NTP IPv4 packet reception capability is disabled
				Default: enabled(1)
				In the walk operation, only the disabled interfaces are displayed.
				"                      K"Enables or disables an ingress interface.
				Options:
				1. enabled(1)  -indicates that the NTP IPv6 packet reception capability is enabled
				2. disabled(2) -indicates that the NTP IPv6 packet reception capability is disabled
				Default: enabled(1)
				In the walk operation, only the disabled interfaces are displayed.
				"                          g"Used for enabling or disabling NTP IPv4 server functionality.
                	Options:
                	1. enable(1)  -indicates the NTP IPv4 server functionality is enabled
                	2. disable(2) -indicates the NTP IPv4 server functionality is disabled
                 Default: enable(1)                                  
                        "                      �"Used for enabling or disabling NTP IPv6 server functionality.
                	        Options:
                	        1. enable(1)  -indicates the NTP IPv6 server functionality is enabled
                	        2. disable(2) -indicates the NTP IPv6 server functionality is disabled
                         Default: enable(1)                                        
                                "                               K"The compliance statement for systems supporting
             the Ntp-MIB."               I"This objects are used to provide NTP functionality through MIB browser."                