�-- ============================================================================
-- Copyright (C) 2016 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description:  The mib is used for configuring the information of the VLAN, including
--               VLAN management, VLAN interface, VLAN aggregation and so on.
-- Reference:
-- Version:      V3.86
--
-- ============================================================================
  �"Each octet within this value specifies a set of eight
               ports, with the first octet specifying ports 1 through
               8, the second octet specifying ports 9 through 16, etc.
               Within each octet, the most significant bit represents
               the lowest numbered port, and the least significant bit
               represents the highest numbered port.  Thus, each port
               of the bridge is represented by a single bit within the
               value of this object.  If that bit has a value of '1'
               then that port is included in the set of ports; the port
               is not included if its bit has a value of '0'."              	/"An octet string containing administrative
               information, preferably in human-readable form.

               To facilitate internationalization, this
               information is represented using the ISO/IEC
               IS 10646-1 character set, encoded as an octet
               string using the UTF-8 transformation format
               described in [RFC2279].

               Since additional code points are added by
               amendments to the 10646 standard from time
               to time, implementations must be prepared to
               encounter any code point from 0x00000000 to
               0x7fffffff.  Byte sequences that do not
               correspond to the valid UTF-8 encoding of a
               code point or are outside this range are
               prohibited.

               The use of control codes should be avoided.

               When it is necessary to represent a newline,
               the control code sequence CR LF should be used.

               The use of leading or trailing white space should
               be avoided.

               For code points not directly supported by user
               interface hardware or software, an alternative
               means of entry and display, such as hexadecimal,
               may be provided.

               For information encoded in 7-bit US-ASCII,
               the UTF-8 encoding is identical to the
               US-ASCII encoding.

               UTF-8 may require multiple bytes to represent a
               single character / code point; thus the length
               of this object in octets may be different from
               the number of characters encoded.  Similarly,
               size constraints refer to the number of encoded
               octets, not the number of characters represented
               by an encoding.

               Note that when this TC is used for an object that
               is used or envisioned to be used as an index, then
               a SIZE restriction MUST be specified so that the
               number of sub-identifiers for any object instance
               does not exceed the limit of 128, as defined by
               [RFC1905].

               Note that the size of an SnmpAdminString object is
               measured in octets, not characters.
               "              �"A value used to index per-VLAN tables: values of 0 and
               4095 are not permitted; if the value is between 1 and
               4094 inclusive, it represents an IEEE 802.1Q VLAN-ID with
               global scope within a given bridged domain (see VlanId
               textual convention).  If the value is greater than 4095
               then it represents a VLAN with scope local to the
               particular agent, i.e. one without a global VLAN-ID
               assigned to it. Such VLANs are outside the scope of
               IEEE 802.1Q but it is convenient to be able to manage them
               in the same way using this MIB."                                                                         �"The mib is used for configuring the information of the VLAN, including
                VLAN management,VLAN interface,VLAN aggregation and so on." �"Huawei Industrial Base
                Bantian, Longgang
                Shenzhen 518129
                People's Republic of China
                Website: http://www.huawei.com
                Email: support@huawei.com
               " "201608301000Z" "201605281000Z" "201511101000Z" "201508071000Z" "201504130000Z" "201501221000Z" "201412241000Z" "201412231000Z" "201411241000Z" "201411131000Z" "201409261000Z" "201408301000Z" "201408151000Z" "201407201000Z" "201406231000Z" "201405081000Z" "201404221000Z" "201401151000Z" "201312131000Z" "201310291000Z" "201308021000Z" "201309141000Z" "201302011000Z" "201301181000Z" "201211131000Z" "201210291000Z" "201208131000Z" "201206151000Z" "201203070000Z" "201201301000Z" "201109210000Z" "201107151000Z" "201104011000Z" "201103251000Z" "201102111000Z" "201101241000Z" "201012130000Z" "201011241000Z" "201011191000Z" "201007031000Z" "201006211000Z" "201006201000Z" "201006101000Z" "201006071000Z" "201005181000Z" "201004261000Z" "201003221000Z" "201003181000Z" "201002111000Z" "201001251000Z" "201001111000Z" "201001081000Z" "200912030000Z" "200911160000Z" "200902200000Z" "200712200000Z" "200704230000Z" "200512130000Z" M"V3.86, modified the value range and description of hwIPv6MTU and hwIPv4MTU." >"V3.85, Added hwAntiMacDuplicateSwitch in hwVlanSrvProfTable." C"V3.84, Added hwPortVlanOuterEthernetTypeTable in hwVlanMngObject." ?"V3.83, modified the value range and description of hwIPv6MTU." �"V3.82, modify the description of hwUpFlowAccountByte, hwDownFlowAccountByte, hwUpFlowAccountPacket, hwDownFlowAccountPacket,
                        hwUpStreamPacket, hwDownStreamPacket, hwUpFlowAccountDiscardPacket, hwDownFlowAccountDiscardPacket." ="V3.81, Added hwCableIPv6SourceVerify in hwVlanSrvProfTable." 3"V3.80, Added hwMethNativeVlan in hwVlanMngObject." �"V3.79, modified the description of hwRegionPVCRowStatus, hwProfileRowStatus, hwVlanConnectRowStatus and hwDocsSrvVlanRowStatus." 9"V3.78, modified the description of hwVlanMethL2Forward." 9"V3.77, Added hwVlanMethL2Forward in hwVlanSrvProfTable." �"V3.76, Added hwRouterRedirectReverse in hwVlanSrvProfTable and.
		                modified the description of hwVlanInterfaceLinkStatus." A"V3.75, modified the value range and description of hwVlanIndex." I"V3.74, modified the description of hwVlanifUpTrap and hwVlanifDownTrap." "V3.73, added hwIPv4MTU.""V3.72, modified the option of hwUserBridging, hwDhcpMode and hwDhcpv6Mode.
                        added hwIpv4ArpUnicastSwitch, hwIpv4ArpUnicastunkonwnpolicy, 
                        hwIpv6NsUnicastSwitch and hwIpv6NsUnicastunkonwnpolicy in hwVlanSrvProfTable." :"V3.71, Added hwIgmpUserMaxVlanTag in hwVlanSrvProfTable." E"V3.70, modified the value range of hwStackingVlanInnerEthernetType." ,"V3.69, modified the description of leaves." O"V3.68, Added hwVlanAggregationSubVlanNdProxyStatus in hwVlanAggregationTable." ~"V3.67, added layer3option16 option to hwDhcpv6Mode.
                        Added hwRipngTunnelSwitch in hwVlanSrvProfTable." �"V3.66, added hwVOIPDhcpQosTable.
                        Added hwVOIPIPAddressSrc in hwVOIPAddressTable.
                        Added hwVOIPQosIPAddressSrc in hwVOIPQosTable." �"V3.65, modified hwVlanDescription to hwVlanName.
                       modified hwVlanDescriptionChangeInfoTrap to hwVlanNameChangeInfoTrap.
                       added hwCableSourceVerify." $"V3.64, added hwDocsSrvVlanIDTable." N"V3.63, modified the description of hwVOIPAddressIndex in hwVOIPAddressTable." &"V3.62, added hwDocsDefaultSrvVlanID." �"V3.61, modified hwVlanName to hwVlanDescription.
                       modified hwVlanNameChangeInfoTrap to hwVlanDescriptionChangeInfoTrap." G"V3.60, modified the description of some leaves in hwVlanSrvProfTable." |"V3.59, added hwPolicyMulticastFabric.
                       modified the description of hwVlanAndVlanSrvProfOperInfoTrap." "V3.58, added hwIPv6MTU." m"V3.57, added hwVlanAddInfoTrap, hwVlanDelInfoTrap, hwVlanAttrChangedInfoTrap and hwPortVlanChangedInfoTrap." �"V3.56, added hwDoubleTagTunnelConfig.
                        added hwDoubleTagTunnelIgmp, hwDoubleTagTunnelRip and hwDoubleTagTunnelDhcp in hwDoubleTagTunnelConfig." �"V3.55, added hwVlanConnectTable.
                        added hwVlanTrafficSuppressUnknowncastNetwork in hwVlanMIBTable.
                        added hwDhcpRelayInterfaceRelayAgentSwitch in hwVlanSrvProfTable." N" V3.54, Add hwVOIPAddressObtainMode and hwVOIPPPPOEClientName based on V3.52" =" V3.53, Add hwVOIPAddressObtainMode, hwVOIPPPPOEClientName." s"V3.52, modified the description of hwVlanNameChangeInfoTrap, hwVlanSrvProfOperType, hwVlanForwardingModeInfoTrap.""V3.51, added hwVmacIPoESubStatus, hwVmacPPPoESubStatus, hwVmacPPPoASubStatus, hwPPPoAMacMode,
                        hwAntiIpv6SpoofingSwitch, hwIpv6DadProxySwitch, hwIpv6BindRouteAndNdSwitch,
                        hwIpv6NsReplySwitch, hwIpv4ArpReplySwitch.
                       " )"V3.50, added hwVlanBindRaioProfileName."�"V3.49, added hwDhcpv6Mode, hwDhcpv6OptionSwitch, and modify the description of leaves.
                        Modified the description of hwVlanType, hwVlanMacFilter, hwifSVLANVlanListTable, hwRegionVLanTable,
                        hwSmartVLanTable, hwMuxVlanEnable, hwMuxVlanPortConfTable, hwMuxVlanSlotConfTable, hwMultiVLanTable, hwVlanUpCarTable,
                        hwVlanDownCarTable, hwVlanParaTable, hwLocalVlanTable, hwVlanIpAwareTable, hwMplsVlanTable.
                       "�"V3.48, modified the description of hwifSVLANVlanListTable, hwifPVLANMappingTable, hwRegionVLanTable,
                        hwSmartVLanTable, hwMuxVlanPortConfTable, hwMuxVlanSlotConfTable, hwMultiVLanTable, hwVlanUpCarTable,
                        hwVlanDownCarTable, hwVlanParaTable, hwLocalVlanTable, hwVlanIpAwareTable, hwMplsVlanTable, hwVlanType,
                        hwVlanStatus, hwVlanAttrib.
                       "/"V3.47, added hwMplsVlanTable in hwVlanMngObject.
                        Modified the description of hwVlanList,hwVlanSrvProfOperType,hwVlanNameChangeInfoTrap,
                        hwVlanForwardingModeInfoTrap,hwVlanSrvProfChageInfoTrap and hwVlanAndVlanSrvProfOperInfoTrap.
                       "/"V3.46, added OBJECT-TYPE node for notification including hwVlanList and hwVlanSrvProfOperType.
                        Added NOTIFICATION-TYPE node including hwVlanNameChangeInfoTrap,hwVlanForwardingModeInfoTrap,
                        hwVlanSrvProfChageInfoTrap and hwVlanAndVlanSrvProfOperInfoTrap." l"V3.45, modified the index of hwVlanTrafficOccupiedTable from hwVlanIndex to hwVlanIndex and hwInnerVlanID." 5"V3.44, deleted the Chinese characters in this file." :"V3.43, added hwVlanIfDHCPSStatus in hwVlanInterfaceEntry" �"V3.42, added notConfig option to hwPPPoEMacMode, hwVmacStatus, hwRipTunnelSwitch, hwVtpCdpTunnelSwitch,
                        hwBpduTunnelSwitch, hwForwardingMode, hwPolicyBroadcast, hwPolicyMulticast, hwPolicyUnknowncast, hwAntiMacSpoofingSwitch." ,"V3.41, modified the description of leaves." b"V3.40, added hwOspfTunnelSwitch, hwL3ProtocolTunnelSwitch, and modify the description of leaves." ("V3.39, added hwFabricMacLearningSwitch" %"V3.38, modified format of this file" "V3.37, added hwVmacAgingMode" �"V3.36, modified the datatype definition,description of objects.
                        Integrated the huawei-VlanFluxStatistic-mib.mib and HUAWEI-VLAN-MIB.mib into HUAWEI-VLAN-MIB.mib" E"V3.35, added hwVlanIpAwareSrcIPMode, and hwVlanIpAwareArpSendPeriod" )"V3.34, added hwVlanIfDhcpClientOption60" S"V3.33, added hwVlanIpAwareTable, hwIpAwareVirtualIPTable, and hwIpAwareRouteTable" ="V3.23, added hwDot1adTpid, and hwPortOuterEthernetTypeTable" f"V3.13, added hwVlanForwarding, hwVlanPolicyBroadcast, and hwVlanPolicyUnknowncast in hwVlanMIBTable." �"V1.02, integrated HUAWEI-PACKET-TUNNEL-MIB.mib,
                        HUAWEI-VLAN-IF-MIB.mib,HUAWEI-VMIF-MIB.mib and HUAWEI-VLAN-MIB.mib into HUAWEI-VLAN-MIB.mib" "V1.00, first draft."               "Vlan Object
               "               "Describes the VLAN basic attributes, used for managing a VLAN, including creating,
                modifying, querying, and deleting a VLAN, and configuring standard ports of a VLAN.
                The index of this table is hwVlanIndex.
               "                       "Describes the VLAN basic attributes, used for managing a VLAN, including creating,
                modifying, querying, and deleting a VLAN, and configuring standard ports of a VLAN.
                The index of this entry is hwVlanIndex.
               "                       �"Indicates the VLAN ID.
                Range: 1-4093.
                VLAN 1 is the native VLAN.
                It cannot be deleted, but its attributes can be modified.
               "                       �"Indicates the VLAN tag. Identifying the VLAN is like naming the VLAN, which facilitates management.
                Range: a string of 0-32 characters
                Default: null character string
               "                      	*"Indicates the list of the standard ports in the VLAN.
                If the VLAN contains a port, the corresponding bit of the port is set to 1.
                The value of hwVlanPorts is an octet string.
                One bit in each octet indicates one port,
                so the octet string can indicate eight ports.
                When a bit is set to 0, it indicates that the
                corresponding port does not belong to this VLAN.
                When a bit is set to 1, it indicates that the corresponding
                port belongs to this VLAN. The order is as follows: The maximum number
                of ports in a slot is 64, so the ports need to occupy eight octets.
                The order, from left to right, is presented as eight groups, 0-7, 8-15,
                16-23, 24-31, 32-39, 40-47, 48-55, and 56-63. In each octet,
                the port IDs in ascending order are presented from low bit to high bit.
                For example, ports 0/11/2 and 0/11/3 need to added to VLAN 2.
                The values of hwVlanPorts of the upstream ports
                (ports 0/11/2 and 0/11/3) to be added is calculated as follows:
                For ports 0-7 in slot 11, their corresponding character string
                positions are 76543210, and after ports 0/11/2 and 0/11/3 are added,
                the bitmap is 00001100 00000000 00000000 00000000,
                and the string is 0c 00 00 00 00 00 00 00.
                Assuming that the other slots do not have any port that is added to the VLAN,
                the character string of each of these slots is 0x0000000000000000.
                According to the ascending order of slot from left to right,
                the character strings of ports 0/11/2 and 0/11/3 are as follows:
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0c00000000000000
                0000000000000000
                0000000000000000
                0000000000000000
                0000000000000000
               "                      u"Indicates the VLAN type.
                Options:
                1. superVlan(1)      -indicates super VLAN.
                2. commonVlan(2)     -indicates common VLAN.
                3. subVlan(3)        -indicates sub VLAN, the value is not supported.
                4. primaryVlan(4)    -indicates primary VLAN, the value is not supported.
                5. secondaryVlan(5)  -indicates secondary VLAN, the value is not supported.
                6. regionVlan(6)     -indicates region VLAN, the value is not supported.
                7. smartVlan(7)      -indicates smart VLAN.
                8. muxVlan(8)        -indicates MUX VLAN.
                9. multiVlan(9)      -indicates multi VLAN.
                VLAN 1 supports the modify operation on hwVlanType.
                For other VLANs, during the creation of a VLAN, hwVlanType must be specified.
               "                       �"The flag indicates whether to use mac filter.
                1. true(1): use mac filter
                2. false(2): not use mac filter
               "                       D"multicast unknown protocals flag in the VLAN field
               "                       4"The virtual interface used by VLAN
               "                       2"The index of the VLAN interface.
               "                       B"The flag indicates whether to open mac learning.
               "                      9"Status of VLAN.
                Options:
                1. other(1)       -The following enumerated values is not supported.
                2. permanent(2)   -The following enumerated values is not supported.
                3. dynamicGvrp(3) -The following enumerated values is not supported.
               "                       ,"The time of creating VLAN.
               "                      "Indicates the 802.1p priority of a VLAN.
                Range: 0-7, 255
                The larger the value, the higher the priority.
                If the query operation is performed before hwVlanPriority is configured,
                the query result is 255, which is invalid.
                The meaning of each value is as follows:
                best-effort: Best-effort priority(0)
                background: Background priority(1)
                spare: Spare priority(2)
                excellent-effort: Excellent-effort priority(3)
                controlled-load: Controlled-load priority(4)
                video: Video priority(5)
                voice: Voice priority(6)
                network-management: Network-management priority(7)
               "                      �"Indicates the row status, used for creating or deleting a VLAN.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                To create a VLAN, you must specify hwVlanType and set
                hwVlanRowStatus to createAndGo(4) to perform the set operation.
                Other attributes of the VLAN are optional. However,
                hwVlanPorts cannot be configured at the same time.
                To delete a VLAN, set hwVlanRowStatus to destroy(6) to perform the set operation.
                During query, the value of this leaf is the fixed active(1).
               "                      2"Indicates the VLAN attribute. The following enumerated values are supported:
                Options:
                1. common(1)    -indicates common VLAN.
                2. qinq(2)      -indicates QinQ VLAN.
                3. stacking(3)  -indicates stacking VLAN.
                4. subVlan(4)   -indicates sub VLAN.
                During the creation of a VLAN, if this leaf is not specified, common(1)
                is adopted by default. You can perform the set operation on this
                leaf to modify the VLAN attribute.
                The value of hwVlanAttrib must not be subvlan(4).
                The value can be subvlan(4) only in the read operation. Adding a VLAN to
                or deleting a VLAN from a super VLAN must be performed through hwVlanAggregationTable.
               "                       �"Indicates the ID of the super VLAN corresponding to the sub VLAN.
                Range: -1, 2-4093
                This leaf is read-only. When the VLAN is not a sub VLAN, -1 is returned.
               "                      �"Indicates the VLAN forwarding policy.
                Options:
                1. vlanMac(1)     -indicates forwarding based on the VLAN+MAC.
                2. vlanConnect(2) -indicates forwarding based on the SVLAN+CVLAN.

                During the creation of a VLAN, if this leaf is not specified,
                vlanMac(1) is adopted by default. You can perform the set
                operation on this leaf to modify the VLAN forwarding policy.
                The VLAN forwarding policy can also be configured in
                hwForwardingMode of hwVlanSrvProfTable. If a VLAN service profile
                is bound to the VLAN, the configuration in the VLAN service profile
                takes effect.
               "                      F"Indicates the VLAN-based forwarding policy for the broadcast packets.
                Options:
                1. forward(1) -indicates that the broadcast packets are transparently transmitted.
                2. discard(2) -indicates that the broadcast packets are discarded.

                During the creation of a VLAN, if this leaf is not specified, forward(1)
                is adopted by default. You can perform the set operation on this leaf
                to modify the VLAN-based forwarding policy for the broadcast packets.
                The VLAN-based forwarding policy for the broadcast packets can also be
                configured in hwPolicyBroadcast of hwVlanSrvProfTable. If a VLAN service
                profile is bound to the VLAN, the configuration in the VLAN service profile takes effect.
               "                      n"Indicates the VLAN-based forwarding policy for the unknown multicast packets.
                Options:
                1. forward(1) -indicates that the unknown multicast packets are transparently transmitted.
                2. discard(2) -indicates that the unknown multicast packets are discarded.

                During the creation of a VLAN, if this leaf is not specified, forward(1)
                is adopted by default. You can perform the set operation on this leaf to
                modify the VLAN-based forwarding policy for the unknown multicast packets.
                The VLAN-based forwarding policy for the unknown multicast packets can
                also be configured in hwPolicyMulticast of hwVlanSrvProfTable. If a VLAN service
                profile is bound to the VLAN, the configuration in the VLAN service profile takes effect.
               "                      f"Indicates the VLAN-based forwarding policy for the unknown unicast packets.
                Options:
                1. forward(1) -indicates that the unknown unicast packets are transparently transmitted.
                2. discard(2) -indicates that the unknown unicast packets are discarded.

                During the creation of a VLAN, if this leaf is not specified, forward(1) is adopted by default.
                You can perform the set operation on this leaf to modify the VLAN-based
                forwarding policy for the unknown unicast packets.
                The VLAN-based forwarding policy for the unknown unicast packets can also be
                configured in hwPolicyUnknowncast of hwVlanSrvProfTable. If a VLAN service profile is bound
                to the VLAN, the configuration in the VLAN service profile takes effect.
               "                       �"Indicates the Ethernet protocol type of a VLAN.
                Range: 1536-65535 (0x0600-0xFFFF)
                Default: 0x8100
               "                      �"Indicates the name of the VLAN service profile bound to a VLAN.
                Range: a string of 0-32 characters
                This leaf identifies a VLAN service profile, which must be
                created in hwVlanSrvProfTable. The null character string indicates
                that the binding relation between a VLAN and a VLAN service profile is deleted.
               "                      �"Indicates the operation type of whether a standard port list maps a VLAN.
                Options:
                1. idle(0)       -indicates invalid mapping.
                2. addPort(1)    -indicates that a port is added to the VLAN.
                3. removePort(2) -indicates that a port is deleted from the VLAN.
                This leaf must work with hwVlanPorts.
               "                      o"Indicates the name of the RAIO profile bound to a VLAN.
                Range: a string of 0-32 characters
                This leaf identifies a RAIO profile, which must be
                created in hwDslamRAIOProfileTable. The null character string indicates
                that the binding relation between a VLAN and a RAIO profile is deleted.
               "                      �"Indicates the unknown unicast traffic suppression on a VLAN.
                Range: 0-13
                Default: 0
                13 indicates full-suppression of traffic, and 0 indicates no traffic suppression.
                The suppression levels and corresponding bandwidth ranges are listed as follows:
                ---------------------------------------------------------------
                NO. Min bandwidth(kbps) Max bandwidth(kbps) Package number(pps)
                ---------------------------------------------------------------
                  0      Not suppressed      Not suppressed      Not suppressed
                  1                   6                 145                  12
                  2                  12                 291                  24
                  3                  24                 582                  48
                  4                  48                1153                  95
                  5                  97                2319                 191
                  6                 195                4639                 382
                  7                 390                9265                 763
                  8                 781               18531                1526
                  9                1562               37063                3052
                 10                3125               74126                6104
                 11                6249              148241               12207
                 12               12499              296483               24414
                 13                   0                   0                   0
                ---------------------------------------------------------------
               "                      "Indicates the switch of MEth l2 forwarding on a VLAN.
                Options:
                1. enable(1)    -Enable MEth l2 forwarding on a VLAN.
                2. disable(2)   -Disable MEth l2 forwarding on a VLAN.
                The default value is disable(2).
               "                       �"Indicates the super VLAN list, shows the sub VLANs in the super VLAN.
                The index of this table is hwifSvlanVlanID.
               "                       �"Indicates the super VLAN list, shows the sub VLANs in the super VLAN.
                The index of this entry is hwifSvlanVlanID.
               "                       6"The index of the table, indicates the super VLAN ID "                       �"The low oct string for sub VLAN list of Primary VLANs, Each bit is one VLAN. All bits  be  2048(256 * 8) VLAN.
                Sub VLAN will be added to super VLAN.
               "                       �"The high oct string for sub VLAN list of Primary VLANs, Each bit is one VLAN. All bits  be  2048(256 * 8) VLAN
                Sub VLAN will be added to super VLAN.
               "                       P"VLAN operational status, now support createAndGo(4),destroy(6)
               "                       {"Secondary VLAN lists of Primary VLANs.
                The index of this table is hwifPvlanPrimaryVlanID.
               "                       {"Secondary VLAN lists of Primary VLANs.
                The index of this entry is hwifPvlanPrimaryVlanID.
               "                       !"Primary VLAN ID
               "                       �"The second low oct string for sub VLAN list of Primary VLANs, Each bit is one VLAN. All bits  be  2048(256 * 8) VLAN
                Secondary VLAN will be added to primary VLAN.
               "                       �"The second low oct string for sub VLAN list of Primary VLANs, Each bit is one VLAN. All bits  be  2048(256 * 8) VLAN
                Secondary VLAN will be added to primary VLAN.
               "                       P"vlan operational status, now support createAndGo(4),destroy(6)
               "                       �"Indicates the region VLAN, it is used to configure the region VLAN.
                The index of this table is hwVlanIndex.
               "                       �"Indicates the region VLAN, it is used to configure the region VLAN.
                The index of this entry is hwVlanIndex.
               "                       *"THE atm vpi of the VLAN.
               "                       *"The atm vci of the VLAN.
               "                       �"Row status,now support createAndGo(4),destroy(6).
                4 is used for creating group pvc for region VLAN,
                6 is used for deleting group pvc for region VLAN.
               "                       �"Indicates the smart VLAN, it is used to configure the smart VLAN.
                The index of this table is hwSmartVlanID.
               "                       �"Indicates the smart VLAN, it is used to configure the smart VLAN.
                The index of this entry is hwSmartVlanID.
               "                       D"The index of the table, indicates a smart VLAN ID.
               "                       )"smart VLAN uplink ports
               "                       +"smart VLAN downlink ports
               "                       C"Row status, now support createAndGo(4),destroy(6)
               "                       �"Enable/disable MUX VLAN.
                Options:
                1. enabled(1)  -Enable MUX VLAN.
                2. disabled(2) -Disable MUX VLAN.
               "                       �"Indicates the Mux VLAN port configuration, it is used to configure the Mux VLAN port.
                The index of this table is ifIndex.
               "                       �"Indicates the Mux VLAN port configuration, it is used to configure the Mux VLAN port.
                The index of this entry is ifIndex.
               "                       �"Configure the uplink-port or cascading-port for the MUX VLAN.
                Options:
                1. uplinkPort(1)    -uplink port
                2. cascadingPort(2) -cascading port
               "                       0"The start VLAN ID of Mux VLAN.
               "                       ("The VLAN group number.
               "                       D"Row status, now support createAndGo(4),destroy(6).
               "                       F"Uplink port for mux VLAN configuration.(for UA 5000)
               "                       �"Downlink port for mux VLAN configuration.
                If the value is -1, use inner port instead(Only used for UA5000).
               "                       �"Indicates the I/O board MUX VLAN configure, it is used to configure the I/O board MUX VLAN.
                The index of this table is hwSlotIndex.
               "                       �"Indicates the I/O board MUX VLAN configure, it is used to configure the I/O board MUX VLAN.
                The index of this entry is hwSlotIndex.
               "                       6"The start VLAN ID for the I/O board.
               "                       D"Row status, now support createAndGo(4),destroy(6).
               "                       �"Indicates the Multi VLAN, it is used to configure the multi VLAN.
                The index of this table is hwMultiVlanID.
               "                       �"Indicates the Multi VLAN, it is used to configure the multi VLAN.
                The index of this entry is hwMultiVlanID.
               "                       D"The index of the table, indicates a Multi VLAN ID.
               "                       *"Multi VLAN uplink ports.
               "                       ,"Multi VLAN downlink ports.
               "                       D"Row status, now support createAndGo(4),destroy(6).
               "                       �"Describes the relation between the super VLAN and the sub VLAN in a VLAN aggregation.
                 The indexes of this table are hwVlanAggregationSuperVlanId and hwVlanAggregationSubVlanId.
                "                       �"Describes the relation between the super VLAN and the sub VLAN in a VLAN aggregation.
                 The indexes of this entry are hwVlanAggregationSuperVlanId and hwVlanAggregationSubVlanId.
                "                       b"Indicates the super VLAN ID in a VLAN aggregation.
                Range: 2-4093
               "                       `"Indicates the sub VLAN ID in a VLAN aggregation.
                Range: 2-4093
               "                      	"Indicates the status of ARP proxy in a sub VLAN.
                Options:
                1. enabled(1)      -Enable ARP proxy in a sub VLAN.
                2. disabled(2)     -Disable ARP proxy in a sub VLAN.
                Default: disabled(2)
               "                      h"Indicates the row status, used for creating or deleting a VLAN aggregation.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                To create a VLAN aggregation, specify the indexes, and set
                hwVlanAggregationRowStatus to createAndGo(4) to perform the set operation.
                To delete a VLAN aggregation, specify the indexes, and set
                hwVlanAggregationRowStatus to destroy(6) to perform the set operation.
                During query, the value of this leaf is the fixed active(1).
               "                      "Indicates the status of ND proxy in a sub VLAN.
                Options:
                1. enabled(1)      -Enable ND proxy in a sub VLAN.
                2. disabled(2)     -Disable ND proxy in a sub VLAN.
                Default: disabled(2)
               "                       �"Indicates the Ethernet protocol type of the inner VLAN tag supported by VLAN stacking.
                Range: 0-65535
                Default: 0x8100
               "                       m"Indicates the VLAN up direct CAR.
                The index of this table is hwVlanUpCarId.
               "                       m"Indicates the VLAN up direct CAR.
                The index of this entry is hwVlanUpCarId.
               "                       F"The index of the table, indicates a up direct Carid.
               "                       %"Up direct car name.
               "                       `"Car band value,The car value is multiple of 64kbps.
                Unit :kbps
               "                       <"Car burst value.
                Unit:kbps
               "                       �"The flag indicates whether the carid is used.
                Options:
                1. used(1)    -The carid is used.
                2. noUsed(2)  -The carid is no-used.
               "                       D"Row status, now support createAndGo(4),destroy(6).
               "                       q"Indicates the VLAN down direct CAR.
                The index of this table is hwVlanDownCarId.
               "                       q"Indicates the VLAN down direct CAR.
                The index of this entry is hwVlanDownCarId.
               "                       H"The index of the table, indicates a down direct carid.
               "                       '"Down direct car name.
               "                       `"Car band value,The car value is multiple of 64kbps.
                Unit: kbps
               "                       ="Car burst value.
                Unit: kbps
               "                       �"The flag indicates whether the carid is used.
                Options:
                1. used(1)   -The carid is used.
                2. noUsed(2) -The carid is no-used.
               "                       D"Row status, now support createAndGo(4),destroy(6).
               "                      "Indicates the VLAN parameters, include hwVlanParaIndex, hwVlanMacLearnCpability, hwVlanMaxMacLearnNum,
                hwVlanUpdirectCar, hwVlanDownDirectCar, it is used to configure the VLAN param.
                The index of this table is hwVlanParamIndex.
               "                      "Indicates the VLAN parameters, include hwVlanParaIndex, hwVlanMacLearnCpability, hwVlanMaxMacLearnNum,
                hwVlanUpdirectCar, hwVlanDownDirectCar, it is used to configure the VLAN param.
                The index of this entry is hwVlanParamIndex.
               "                       F"The index of the table,the VLAN index means Vlan Id.
               "                       �"MAC learning or not flag by VLAN.
                Options:
                1. enabled(1)    -Enable MAC learning by VLAN.
                2. disabled(2)   -Disable MAC learning by VLAN.
               "                       0"The VLAN max mac learn number.
               "                       +"The VLAN up direct carID.
               "                       -"The VLAN down direct carID.
               "                       7"set the Meth L2 function of the VLAN.
               "                       h"Indicates the service svlan of DOCSIS service.
                The default value is 1.
               "                       �"Describes the Ethernet protocol type of the outer VLAN tag supported by VLAN stacking.
                Range: 0x600-0xffff
                Default: 0x8100
               "                      �"Describes the value of the 802.1ad Ethernet protocol type.
                The Ethernet protocol type of the outer VLAN tag of a port can
                be configured to dot1q or dot1ad. The value of dot1q is invariably 0x8100;
                the value of dot1ad is configurable, but cannot be the values of
                other standard protocols, such as 0x0806.
                The default value of dot1ad is 0x88a8.
                Range: 0x600-0xffff
               "                      "Describes the Ethernet protocol type of the outer VLAN tag of a port.
                The index of this table is ifIndex (for details about how to calculate the value of
                ifIndex, see the MA5600T ifIndex MIB Encoding Rules).
               "                      "Describes the Ethernet protocol type of the outer VLAN tag of a port.
                The index of this entry is ifIndex (for details about how to calculate the value of
                ifIndex, see the MA5600T ifIndex MIB Encoding Rules).
               "                      �"Indicates the Ethernet protocol type of the outer VLAN tag of a port.
                Options:
                1. invalid(-1)   -it indicates that the port does not support the
                                  Ethernet protocol type of the outer VLAN. During the query,
                                  the invalid value -1 is fixedly returned.
                2. dot1qTpid(1)  -it is valid for all service streams on the port.
                3. dot1adTpid(2) -it is valid for only switching-oriented and
                                  connection-oriented service streams with two VLAN tags on the port.
                Default: dot1qTpid(1)
               "                       �"Set the global Local VLAN switch.
                Options:
                1. enable(1)  -the switch is enable.
                2. disable(2) -the switch is disabled.
                Default: disable(2)
               "                       �"Indicates the Local VLAN, it is used to configure the Local VLAN.
                The index of this table is hwVlanIndex.
               "                       �"Indicates the Local VLAN, it is used to configure the Local VLAN.
                The index of this entry is hwVlanIndex.
               "                       �"The flag indicates whether to set the Local VLAN.
                Options:
                1. enable(1)  -Enable local VLAN.
                2. disable(2) -Disable local VLAN.
               "                       �"Describes VLAN interface management, including IP address
                management, enabling and disabling of the DHCP client, and
                DHCP client option 60.
                The index of this table is hwVlanInterfaceID.
               "                       �"Describes VLAN interface management, including IP address
                management, enabling and disabling of the DHCP client, and
                DHCP client option 60.
                The index of this entry is hwVlanInterfaceID.
               "                       �"Indicates the index of a VLAN interface, which maps a VLAN ID.
                For example, the index of VLAN interface 3 is 3.
               "                       J"Indicates the corresponding VLAN ID of a VLAN interface.
               "                       a"Indicates the IP address of a VLAN interface.
                Default: 0.0.0.0.
               "                       7"Indicates the IP address subnet mask.
               "                       �"Indicates the management status of a VLAN interface.
                Options:
                1. up(1)   -indicates up status.
                2. down(2) -indicates down status.
                Default: up(1)
                "                      �"Indicates the type of the frame that can be received by a VLAN interface.
                Options:
                1. ethernetii(1)    -For the frame format of ethernetii(1), see RFC894.
                2. ethernetsnap(2)  -The value is not supported.
                3. ethernet8022(3)  -The value is not supported.
                4. ethernet8023(4)  -The value is not supported.
                Currently, only ethernetii(1) is supported.
                "                       �"Indicates the row status. It is used for create, delete and modify operations.
                Options:
                1. createAndGo(4)
                2. destroy(6)
                3. active(1)
               "                      M"Indicates the protocol status of a link that is contained in a VLAN interface.
                Options:
                1. up(1)     -The protocol status of a link that is contained in a VLAN interface is up.
                2. down(2)   -The protocol status of a link that is contained in a VLAN interface is down.
               "                       �"Indicates the mode of obtaining an IP address.
                Options:
                1. static(1)   -Configured statically.
                2. dhcp(2)     -Obtained through DHCP.
               "                       �"Indicates the option 60 information carried in DHCP packets that are sent by a L3
                interface when obtaining an IP address in the DHCP mode.
                Range: 0-32 characters
               "                      &"Used to configure the VLAN encapsulation mode of a VLAN interface.
                Options:
                1. singleTag(1)     -Single tag VLAN encapsulation mode.
                2. doubleTag(2)     -Double tag VLAN encapsulation mode.
                Default: singleTag(1)
                "                       �"Used to configure the inner VLAN ID when the VLAN encapsulation mode of a VLAN interface is double-tag mode.
                Range: 1-4095
                Default: 1
               "                       �"Describes the mode of dhcp server on this interface.
                Options:
                1. disable(1) -disable dhcp server.
                2. enable(2)  -enable dhcp server.
                Default: disable(1)
               "                      #"Used to configure the maximum transmission unit of vlanif.If you set it on one vlanif,all the vlanif will
                be configured. For P300 device, the node can take effect on IPV4 and IPV6. For Saturn device, it only takes 
                effect on IPV6.
                Range: -1,1280-1499,1501-9600. For P300 device, the range is -1,1501-1560. For Saturn device, the range is
                -1,1280-1499,1501-9600. 
                Deafult:-1,this value means the MTU of vlanif is the default value(for example: 1500).
               "                      1"Used to configure the maximum transmission unit of vlanif. The node is only supported on Saturn device. It
               only takes effect on IPV4.
                Range: -1,1501-9600
                Deafult:-1,this value means the MTU of vlanif is the default value(for example: 1500).
               "                       �"Describes management of the secondary IP addresses of a VLAN interface.
                The indexes of this table are hwVlanInterfaceIDWithSub, hwVlanSubIpAddress and hwVlanSubIpAddressMask.
               "                       �"Describes management of the secondary IP addresses of a VLAN interface.
                The indexes of this entry are hwVlanInterfaceIDWithSub, hwVlanSubIpAddress and hwVlanSubIpAddressMask.
               "                       �"Indicates the index of a VLAN interface, which maps a VLAN ID. For example,
                the index of VLAN interface 3 is 3.
               "                       I"Indicates the secondary IP address of a VLAN interface.
               "                       \"Indicates the subnet mask of the secondary IP address of a VLAN interface.
               "                       �"Indicates the row status. It is used for create, modify and delete operations.
                Options:
                1. createAndGo(4)
                2. destroy(6)
                3. active(1)
               "                       �"Used for setting and querying the status of the L2 transparent transmission of RIP packets and VTP/CDP packets in a VLAN.
                The index of this table is hwVlanIndex.
               "                       �"Used for setting and querying the status of the L2 transparent transmission of RIP packets and VTP/CDP packets in a VLAN.
                The index of this entry is hwVlanIndex.
               "                      N"Indicates the transparent transmission of RIP packets in a VLAN.
                Options:
                1. enable(1)        -Enable transparent transmission of RIP packets in a VLAN.
                2. disable(2)       -Disable transparent transmission of RIP packets in a VLAN.
                Default: disable(2)
               "                      J"Indicates the transparent transmission of VTP/CDP packets in a VLAN.
        Options:
                1. enable(1)        -Enable transparent transmission of VTP/CDP packets in a VLAN.
                2. disable(2)       -Disable transparent transmission of VTP/CDP packets in a VLAN.
        Default: disable(2)
               "                       �"Used for setting and querying the status of the L2 transparent transmission of BPDU packets.
                The index of this table is hwVlanIndex.
               "                       �"Used for setting and querying the status of the L2 transparent transmission of BPDU packets.
                The index of this entry is hwVlanIndex.
               "                      b"Indicates the status of the L2 transparent transmission of BDPU packets in a VLAN.
                Options:
                1. enable(1)        -Enable transparent transmission of BDPU packets in a VLAN.
                2. disable(2)       -Disable transparent transmission of BDPU packets in a VLAN.
                Default: disable(2)
               "                       g"VOIP multiply IP table.
                The index of this table is hwVOIPAddressIndex
               "                       g"VOIP multiply IP table.
                The index of this entry is hwVOIPAddressIndex
               "                       )"the index scope is 0-63
               "                       �"Indicates the type of VOIP IP.
                Options:
                1. media(1)  -indicates that the type of VOIP IP is media.
                2. signaling(2) -indicates that the type of VOIP IP is signaling.
               "                       "IP address"                       "subMask of VAG "                       "gateway of VAG"                       "MAC address"                       "vlanid of VAG"                       �"Indicates the qos ip strategy
        Options:
        1. tos(1)  -indicates that the qos ip strategy is tos.
        2. dscp(2) -indicates that the qos ip strategy is dscp."                      �"Indicates the status of this conceptual row.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                Until instances of all corresponding columns are appropriately configured,
                the value of the corresponding instance of the hwAddressRowStatus column is
                'notReady'.
               "                       �"ip address obtain mode:
               Options:
               1. static(1) -static config
               2. pppoe(2)  -pppoe dynamic obtain
               3. dhcp(3)   -dhcp dynamic obtain
              "                       H"ip address name of pppoe dynamic obtain, the same as pppoe client name"                       �"Indicates the source type of IP.
                Options: 
                1. static(0)  -indicates that the source type of IP is static.
                2. dhcp(1)    -indicates that the source type of IP is dhcp.
               "                       z"Describes the Qos IP tos and VLAN priority
                The index of this table is hwVOIPAddressIndex
               "                       z"Describes the Qos IP tos and VLAN priority
                The index of this entry is hwVOIPAddressIndex
               "                       "Qos value of tos"                       "Qos value of dscp"                       "Qos VLAN priority"                       �"Indicates the source type of IP.
                Options: 
                1. static(0)  -indicates that the source type of IP is static.
                2. dhcp(1)    -indicates that the source type of IP is dhcp.
               "                      &"Describes the attributes of a VLAN service profile, used for adding or deleting
                a VLAN service profile, or modifying the status of the attributes in an existing
                VLAN service profile.
                The index of this table is hwVlanSrvProfName.
               "                      &"Describes the attributes of a VLAN service profile, used for adding or deleting
                a VLAN service profile, or modifying the status of the attributes in an existing
                VLAN service profile.
                The index of this entry is hwVlanSrvProfName.
               "                      8"Indicates the name of the VLAN service profile.
                Range: a string of 1-32 characters
                The input index consists of the VLAN service profile name and
                the length of the VLAN service profile name.
                The input VLAN service profile name must be ASCII codes.
                Assume that you need to create a huawei VLAN service profile.
                Because the ASCII value of huawei is 104.117.97.119.101.105 and
                the length of huawei is 6, the index is 6.104.117.97.119.101.105.
               "                      �"Indicates the VLAN forwarding policy.
                Options:
                1. vlanMac(1)     -indicates forwarding based on the VLAN+MAC.
                2. vlanConnect(2) -indicates forwarding based on the SVLAN+CVLAN.
                3. notConfig(3)   -indicates forwarding based on VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VLAN forwarding policy can also be configured in hwVlanForwarding
                of hwVlanMIBTable. If a VLAN service profile is bound to the VLAN,
                the configuration in the VLAN service profile takes effect.
               "                      "Indicates the VLAN-based anti-IP-spoofing function.
                Options:
                1. enable(1) -indicates that the anti-IP-spoofing function is enabled.
                2. disable(2) -indicates that the anti-IP-spoofing function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The anti-IP spoofing function in the global mode can be set in
                hwIpDslamIpAddrDynamicBindingStatus of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the anti-IP-spoofing function is determined by its
                global-level switch and VLAN-level switch. The anti-IP-spoofing function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based anti-MAC-spoofing function.
                Options:
                1. enable(1) -indicates that the anti-MAC-spoofing function is enabled.
                2. disable(2)-indicates that the anti-MAC spoofing function is disabled.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The anti-MAC spoofing function in the global mode can be set in
                hwIpDslamAntiMacSpoofingStatus of HUAWEI-IPDSLAM-SECURITY-MIB.
                The VLAN-based anti-MAC-spoofing function can also be configured
                in hwIpDslamL2pVlanCtrlMacSpoofing of hwIpDslamL2pVlanCtrlTable
                in HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The final status of the anti-MAC-spoofing function is determined by
                its global-level switch and VLAN-level switch. The anti-MAC spoofing
                function of a VLAN is enabled only when the switches at both levels are
                enabled. If a VLAN service profile is bound to the VLAN, the configuration
                of the VLAN-based anti-MAC-spoofing function in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based PPPoE single-MAC function.
                Options:
                1. multiMac(1) -indicates that the multi-MAC mode is adopted.
                2. singleMac(2) -indicates that the single-MAC mode is adopted.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The PPPoE single-MAC function in the global mode can be set
                in hwIpDslamPPPoEMacMode of HUAWEI-IPDSLAM-PPPOE-MIB.
                The VLAN-based PPPoE single-MAC function can also be configured
                in hwIpDslamL2pVlanCtrlPppoeMacMode of
                hwIpDslamL2pVlanCtrlTable in HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The final status of the PPPoE single-MAC function is determined
                by its global-level switch and VLAN-level switch.
                The PPPoE single-MAC function of a VLAN is enabled only
                when the switches at both levels are enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based PPPoE single-MAC
                function in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based BPDU transparent transmission function.
                Options:
                1. enable(1)  -indicates that the BPDU transparent transmission function is enabled.
                2. disable(2) -indicates that the BPDU transparent transmission function is disabled.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The BPDU transparent transmission function can also be configured
                in hwBpduTunnel of hwBpduTunnelTable. If a VLAN service profile is bound to the VLAN,
                the configuration in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based RIP transparent transmission function.
                Options:
                1. enable(1)  -indicates that the RIP transparent transmission function is enabled.
                2. disable(2) -indicates that the RIP transparent transmission function is disabled.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The RIP transparent transmission function can also be configured in
                hwPacketTunnelRip of hwPacketTunnelTable. If a VLAN service profile is bound to
                the VLAN, the configuration in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based VTP/CDP transparent transmission function.
                Options:
                1. enable(1)  -indicates that the VTP/CDP transparent transmission function is enabled.
                2. disable(2) -indicates that the VTP/CDP transparent transmission function is disabled.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VTP/CDP transparent transmission function can also be configured
                in hwPacketTunnelVTPCDP of hwPacketTunnelTable. If a VLAN service profile
                is bound to the VLAN, the configuration in the VLAN service profile takes effect.
               "                      
X"Indicates the VLAN-based DHCP L2/L3 mode switch.
                Options:
                1. notConfig(1)  -indicates that if the VLAN configuration exists, 
                                  the VLAN configuration takes effect. 
                                  Otherwise, the configuration in global mode takes effect.
                2. layer2(2)     -indicates the DHCP L2 forwarding mode.
                                  In this mode, the device only transparently transmits
                                  packets and does not process the packets.
                3. l3Standard(3) -indicates the standard mode of the DHCP L3
                                  forwarding mode. In this mode, packets select the
                                  DHCP server through the VLAN L3 interface that is
                                  used for forwarding the DHCP packets.
                4. l3Option60(4) -indicates the DHCP option 60 mode of the DHCP L3
                                  forwarding mode. In this mode, packets select the
                                  DHCP server according to the option 60 field.
                                  Option 60 is an option with code 60 in the DHCP packet.
                                  It can identify the terminal type. That is, packets can
                                  select the DHCP server according to terminal types.
                5. l3MacRange(5) -indicates the MAC address segment mode of the DHCP L3
                                  forwarding mode. In this mode, packets select the DHCP
                                  server according to the MAC address segment to which
                                  the source MAC address of the DHCP packets belong.
                This leaf is optional for creating a VLAN service profile.
                The DHCP L2/L3 mode in the global mode can also be set in hwDhcpRelayMode
                and hwDhcpServerSelectMode of HUAWEI-DHCP-Proxy-MIB. The DHCP L2/L3 mode
                at the VLAN level can also be set in hwDhcpServerSelectModeByVlanTable.
                If a VLAN service profile is bound to the VLAN, the configuration in the
                VLAN service profile takes effect. The global DHCP L2/L3 mode, however,
                is not changed.
                If no VLAN service profile is bound to the VLAN, but hwDhcpServerSelectModeByVlanTable
                is configured, the configuration of hwDhcpServerSelectModeByVlanTable takes effect;
                if hwDhcpServerSelectModeByVlanTable is not configured, the configuration
                in the global mode takes effect.
               "                      �"Indicates the VLAN-based DHCP proxy function.
                Options:
                1. enable(1)  -indicates that the DHCP proxy is enabled.
                2. disable(2) -indicates that the DHCP proxy is disabled.
                This leaf is optional for creating a VLAN service profile.
                The global DHCP proxy function can be configured in
                hwDhcpProxyStatus of HUAWEI-DHCP-Proxy-MIB. The final
                status of the DHCP proxy function is determined by its
                global-level switch and VLAN-level switch. The DHCP
                proxy function of a VLAN is enabled only when the switches
                at both levels are enabled. When the DHCP mode of the VLAN
                is configured to L2 mode, the configuration data can
                be saved, but the configuration of the
                DHCP proxy function does not take effect.
               "                      �"Indicates the VLAN-based DHCP option 82 function.
                Options:
                1. enable(1)  -indicates that the DHCP option 82 function is enabled.
                2. disable(2) -indicates that the DHCP option 82 function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The global DHCP option 82 function can be configured in hwDhcpOption82Status
                of HUAWEI-DHCP-Proxy-MIB. The final status of the DHCP option
                82 function is determined by its global-level switch and VLAN-level switch.
                The DHCP option 82 function of a VLAN is enabled only when
                the switches at both levels are enabled.
               "                      �"Indicates the PITP switch based on VLAN.
                Options:
                1. enable(1)  -indicates enabling the PITP switch.
                2. disable(2) -indicates disabling the PITP switch.
                This leaf is optional for creating a VLAN service profile.
                Leaf hwDslamPITPStatus in HUAWEI-DSLAM-PITP-MIB can be used for configuring the global
                PITP switch. The final status of the PITP switch is determined by both the global-level
                PITP switch and the VLAN-level PITP switch. The PITP function is enabled on the VLAN
                only when the switches at both levels are enabled.
               "                      s"Indicates the VLAN-based forwarding policy for the broadcast packets.
                Options:
                1. forward(1) -indicates that the broadcast packets are transparently transmitted.
                2. discard(2) -indicates that the broadcast packets are discarded.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                You can perform the set operation on this leaf to modify
                the VLAN-based forwarding policy for the broadcast packets.
                The VLAN-based forwarding policy for the broadcast packets can
                also be configured in hwVlanPolicyBroadcast of hwVlanMIBTable.
                If a VLAN service profile is bound to the VLAN, the configuration
                in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based forwarding policy for the unknown multicast packets.
                Options:
                1. forward(1) -indicates that the unknown multicast packets are transparently transmitted.
                2. discard(2) -indicates that the unknown multicast packets are discarded.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                You can perform the set operation on this leaf to modify the VLAN-based forwarding policy
                for the unknown multicast packets.
                The VLAN-based forwarding policy for the unknown multicast packets can
                also be configured in hwVlanPolicyMulticast of hwVlanMIBTable.
                If a VLAN service profile is bound to the VLAN, the configuration
                in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based forwarding policy for the unknown unicast packets.
                Options:
                1. forward(1) -indicates that the unknown unicast packets are transparently transmitted.
                2. discard(2) -indicates that the unknown unicast packets are discarded.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                You can perform the set operation on this leaf
                to modify the VLAN-based forwarding policy for the unknown unicast packets.
                The VLAN-based forwarding policy for the unknown unicast packets can also be
                configured in hwVlanPolicyUnknowncast of hwVlanMIBTable. If a VLAN service
                profile is bound to the VLAN, the configuration in the VLAN service profile takes effect.
               "                      !"Indicates the VLAN-based bridging function.
                Options:
                1. enable(1)   -indicates bridging in a VLAN.
                2. disable(2)  -indicates L2 isolation in a VLAN.
                This leaf is optional for creating a VLAN service profile.
               "                      "DHCP boardcast-suppress switch.
                Options:
                1. enable(1)   -Enable DHCP boardcast-suppress.
                2. disable(2)  -Disable DHCP boardcast-suppress.
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the VLAN-based forwarding policy for the mismatched IGMP packets.
                Options:
                1. transparent(1) -indicates that the mismatched IGMP packets are transparently transmitted.
                2. discard(2) -indicates that the mismatched IGMP packets are discarded.
                This leaf is optional for creating a VLAN service profile.
               "                      ;"Indicates the VLAN-based VMAC function.
                Options:
                1. enable(1)  -indicates that the VMAC function is enabled.
                2. disable(2) -indicates that the VMAC function is disabled.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The global VMAC function can be configured in hwIpDslamVmacStatus
                of HUAWEI-IPDSLAM-VMAC-MIB. The VLAN-based VMAC function can
                also be configured hwIpDslamL2pVlanCtrlVmacStatus
                of HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The final status of the VMAC function is determined by its
                global-level switch and VLAN-level switch. The VMAC function
                of a VLAN is enabled only when the switches at both levels are
                enabled. If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based VMAC function
                in the VLAN service profile takes effect.
               "                      �"Indicates the mode of allocating MAC addresses to DHCP users.
                Options:
                1. multiMac(1)  -indicates the multi-MAC mode.
                2. singleMac(2) -indicates the single-MAC mode.
                This leaf is optional for creating a VLAN service profile.
                The global mode of allocating MAC addresses to DHCP users
                can be configured in hwIpDslamIPoEMacMode of HUAWEI-IPDSLAM-VMAC-MIB.
                The final status of the mode of allocating MAC addresses to DHCP
                users is determined by its global-level switch and VLAN-level switch.
                The single-MAC mode of a VLAN can be enabled only when
                the single-MAC mode is enabled at both levels.
               "                      ["Indicates the time selection mode for reallocating VMAC addresses to users.
                Options:
                1. macLearning(1) -indicates that the VMAC addresses are
                                   reallocated to users after the corresponding MAC address learning entry ages.
                2. dhcp(2)        -indicates that the VMAC addresses are reallocated to users after
                                   the corresponding IP addresses are released or the lease time of the IP address expires.
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the VLAN-based MAC address learning capability switch of the control board.
                Options:
                1. enable(1)  -indicates that the VLAN-based MAC address learning is enabled.
                2. disable(2) -indicates that the VLAN-based MAC address learning is disabled.
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the VLAN-based OSPF transparent transmission function.
                Options:
                1. enable(1)  -indicates that the OSPF transparent transmission function is enabled.
                2. disable(2) -indicates that the OSPF transparent transmission function is disabled.
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the VLAN-based L2 transparent transmission function
                of other L3 protocol packets except RIP and OSPF packets.
                Options:
                1. enable(1)  -indicates that the transparent transmission function is enabled.
                2. disable(2) -indicates that the transparent transmission function is disabled.
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the VLAN-based DHCPv6 L2/L3 mode switch.
                Options:
                1. notConfig(1)      -indicates that the configuration in global mode takes effect.
                2. layer2(2)         -indicates the DHCPv6 L2 forwarding mode.
                                      In this mode, the device only transparently transmits
                                      packets and does not process the packets.
                3. layer3(3)         -indicates the standard mode of the DHCPv6 L3
                                      forwarding mode. In this mode, packets select the
                                      DHCPv6 server through the VLAN L3 interface that is
                                      used for forwarding the DHCPv6 packets.
                4. layer3option16(4) -indicates the option 16 mode of the DHCPv6 L3
                                      forwarding mode. In this mode, packets select the
                                      DHCPv6 server according to the option 16 field.
                                      Option 16 is an option with code 16 in the DHCPv6 packets.
                                      It can identify the terminal type. That is, packets can
                                      select the DHCPv6 server according to terminal types.

                This leaf is optional for creating a VLAN service profile.
                The DHCPv6 L2/L3 mode in the global mode can also be set in hwDhcpv6RelayMode
                of HUAWEI-DHCPV6-RELAY-MIB.
                If a VLAN service profile is bound to the VLAN, and the hwDhcpv6Mode in VLAN service profile is not notConfig(1),
                the configuration in the VLAN service profile takes effect. The global DHCPv6 L2/L3 mode, however, is not changed.
                If no VLAN service profile is bound to the VLAN, or the hwDhcpv6Mode in VLAN service profile is notConfig(1),
                the configuration in the global mode takes effect.
               "                      �"Indicates the VLAN-based DHCPv6 option function.
                Options:
                1. enable(1)  -indicates that the DHCPv6 option 18 and optin 37 function are enabled.
                2. disable(2) -indicates that the DHCPv6 option 18 and optin 37 function are disabled.
                This leaf is optional for creating a VLAN service profile.
                The global DHCPv6 option function can be configured in hwDhcpv6OptionStatus
                of HUAWEI-DHCPV6-RELAY-MIB. The final status of the DHCPv6 option
                function is determined by its global-level switch and VLAN-level switch.
                The DHCPv6 option function of a VLAN is enabled only when
                the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based IPoE VMAC function.
                Options:
                1. enable(1)     -indicates that the IPoE VMAC function is enabled.
                2. disable(2)    -indicates that the IPoE VMAC function is disabled.
                3. notConfig(3)  -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VLAN-based IPoE VMAC function can be configured in
                hwIpDslamL2pVlanCtrlVmacIPoESubStatus of HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The status of the IPoE VMAC function is determined by its
                VLAN-level switch. The IPoE VMAC function of a VLAN is enabled
                only when the VLAN-level switch is enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based IPoE VMAC function
                in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based PPPoE VMAC function.
                Options:
                1. enable(1)     -indicates that the PPPoE VMAC function is enabled.
                2. disable(2)    -indicates that the PPPoE VMAC function is disabled.
                3. notConfig(3)  -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VLAN-based PPPoE VMAC function can be configured in
                hwIpDslamL2pVlanCtrlVmacPPPoESubStatus of HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The status of the PPPoE VMAC function is determined by its
                VLAN-level switch. The PPPoE VMAC function of a VLAN is enabled
                only when the VLAN-level switch is enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based PPPoE VMAC function
                in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based PPPoA VMAC function.
                Options:
                1. enable(1)     -indicates that the PPPoA VMAC function is enabled.
                2. disable(2)    -indicates that the PPPoA VMAC function is disabled.
                3. notConfig(3)  -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VLAN-based PPPoA VMAC function can be configured in
                hwIpDslamL2pVlanCtrlVmacPPPoASubStatus of HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The status of the PPPoA VMAC function is determined by its
                VLAN-level switch. The PPPoA VMAC function of a VLAN is enabled
                only when the VLAN-level switch is enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based PPPoA VMAC function
                in the VLAN service profile takes effect.
               "                      �"Indicates the VLAN-based PPPoA single-MAC function.
                Options:
                1. multiMac(1)    -indicates that the multi-MAC mode is adopted.
                2. singleMac(2)   -indicates that the single-MAC mode is adopted.
                3. notConfig(3)   -indicate by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The PPPoA single-MAC function in the global mode can be set
                in hwIpDslamPPPoAMacMode of HUAWEI-IPDSLAM-PPPOE-MIB.
                The VLAN-based PPPoA single-MAC function can also be configured
                in hwIpDslamL2pVlanCtrlPppoaMacMode of
                hwIpDslamL2pVlanCtrlTable in HUAWEI-IPDSLAM-L2PPORTCONFIG-MIB.
                The final status of the PPPoA single-MAC function is determined
                by its global-level switch and VLAN-level switch.
                The PPPoA single-MAC function of a VLAN is enabled only
                when the switches at both levels are enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based PPPoA single-MAC
                function in the VLAN service profile takes effect.
               "                      "Indicates the VLAN-based anti-IPv6-spoofing function.
                Options:
                1. enable(1)  -indicates that the anti-IPv6-spoofing function is enabled.
                2. disable(2) -indicates that the anti-IPv6-spoofing function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The anti-IPv6-spoofing function in the global mode can be set in
                hwIpDslamAntiIpv6SpoofingStatus of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the anti-IPv6-spoofing function is determined by its
                global-level switch and VLAN-level switch. The anti-IPv6-spoofing function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based IPv6 dad proxy function.
                Options:
                1. enable(1)  -indicates that the IPv6 dad proxy function is enabled.
                2. disable(2) -indicates that the IPv6 dad proxy function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The IPv6 dad proxy function in the global mode can be set in
                hwIpDslamIpv6DadProxySwitch of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the IPv6 dad proxy function is determined by its
                global-level switch and VLAN-level switch. The IPv6 dad proxy function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based bind-route-nd function.
                Options:
                1. enable(1)  -indicates that the bind-route-nd function is enabled.
                2. disable(2) -indicates that the bind-route-nd function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The bind-route-nd function in the global mode can be set in
                hwIpDslamIpv6BindRouteAndNdSwitch of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the bind-route-nd function is determined by its
                global-level switch and VLAN-level switch. The bind-route-nd function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based ns reply function.
                Options:
                1. enable(1)  -indicates that the ns reply function is enabled.
                2. disable(2) -indicates that the ns reply function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The ns reply function in the global mode can be set in
                hwIpDslamIpv6NsReplySwitch of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the ns reply function is determined by its
                global-level switch and VLAN-level switch. The ns reply function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      �"Indicates the VLAN-based arp reply function.
                Options:
                1. enable(1)  -indicates that the arp reply function is enabled.
                2. disable(2) -indicates that the arp reply function is disabled.
                This leaf is optional for creating a VLAN service profile.
                The arp reply function in the global mode can be set in
                hwIpDslamIpv4ArpReplySwitch of HUAWEI-IPDSLAM-SECURITY-MIB.
                The final status of the arp reply function is determined by its
                global-level switch and VLAN-level switch. The arp replyd function
                of a VLAN is enabled only when the switches at both levels are enabled.
               "                      "Indicates the VLAN-based filling mode of the GIADDR field of the current DHCP-relay upstream packet.
                Options:
                1. receive(1) -indicates that in the DHCP packet sent from the DHCP relay agent to the server,
                               the gateway IP address is set to the IP address of the Rx interface (user-side interface).
                2. send(2)    -indicates that in the DHCP packet sent from the DHCP relay agent to the server,
                               the gateway IP address is set to the IP address of the Tx interface (network-side interface).
                3. notConfig(3) -indicates that the configuration in the global mode takes effect.

                This leaf is optional for creating a VLAN service profile.
                The filling mode of the GIADDR field of the current DHCP-relay upstream packet in the global mode
                can be set in hwDhcpRelayInterfaceRelayAgent of HUAWEI-DHCP-PROXY-MIB.
                The final status of the configuration is determined by its global-level switch and VLAN-level switch.
                If a VLAN service profile is bound to the VLAN, and the hwDhcpRelayInterfaceRelayAgentSwitch
                in VLAN service profile is not notConfig(3), the configuration in the VLAN service profile takes effect.
                If no VLAN service profile is bound to the VLAN, or the hwDhcpRelayInterfaceRelayAgentSwitch
                in VLAN service profile is notConfig(3), the configuration in the global mode takes effect.
               "                      �"Indicates the VLAN-based forwarding policy for the control board unknown multicast packets.
                Options:
                1. forward(1) -indicates that the control board unknown multicast packets are transparently transmitted.
                2. discard(2) -indicates that the control board unknown multicast packets are discarded.

                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates VLAN-based Source Address Verification (SAV) function for CM configured policies. 
                Options:
                1. enable(1)  -indicates that the VLAN-based Source Address Verification for CM configured
                               policies are enabled.
                2. disable(2) -indicates that the VLAN-based Source Address Verification for CM configured
                               policies are ignored.
               "                      �"Indicates the VLAN-based RIPng transparent transmission function.
                Options:
                1. enable(1)  -indicates that the RIPng transparent transmission function is enabled.
                2. disable(2) -indicates that the RIPng transparent transmission function is disabled.
                This leaf is optional for creating a VLAN service profile.
               "                      "Indicates the VLAN-based ARP unicast function.
                Options:
                1. enable(1)  -indicates that the ARP unicast function is enabled.
                2. disable(2) -indicates that the ARP unicast function is disabled.
                This leaf is optional for creating a VLAN service profile.
                Default: disable(2)                
               "                      7"Used for setting whether to forward or discard ARP packets received from the network side when the user is offline.
             It takes effect only when the ARP unicast function is enabled.
             Options:
             1. forward(1)  -indicates that ARP packets are broadcast to ports inside the VLAN on the user, cascading, and network sides.
             2. discard(2)  -indicates that ARP packets are discarded on the user side, and only broadcast to ports inside the VLAN on the cascading and network sides.
             Default: forward(1)
            "                      }"Indicates the VLAN-based NS unicast function.
                Options:
                1. enable(1)  -indicates that the NS unicast function is enabled.
                2. disable(2) -indicates that the NS unicast function is disabled.
                This leaf is optional for creating a VLAN service profile.
                Default: disable(2)                 
               "                      3"Used for setting whether to forward or discard NS packets received from the network side when the user is offline.
             It takes effect only when the NS unicast function is enabled.
             Options:
             1. forward(1)  -indicates that NS packets are broadcast to ports inside the VLAN on the user, cascading, and network sides.
             2. discard(2)  -indicates that NS packets are discarded on the user side, and only broadcast to ports inside the VLAN on the cascading and network sides.
             Default: forward(1)
            "                      `"Indicates the VLAN-based IGMP user max VLAN tag mode.
                Options:
                1. unaware(1) -indicates that the maximum number of VLAN tags for the IGMP user is not concerned.  
		2. untag(2)   -indicates that the maximum number of VLAN tags for the IGMP user is untag. 
		3. single(3)  -indicates that the maximum number of VLAN tags for the IGMP user is one tag.  
		4. double(4)  -indicates that the maximum number of VLAN tags for the IGMP user is two tags. 
                Default: unaware(1)
                This leaf is optional for creating a VLAN service profile.
               "                      �"Indicates the Layer 2 forwarding function of reverse Router-Redirect packets.
                Options:
                1. enable(1)  -indicates that the Layer 2 forwarding function of reverse Router-Redirect packets is enabled.
                2. disable(2) -indicates that the Layer 2 forwarding function of reverse Router-Redirect packets is disabled.
                This leaf is optional for creating a VLAN service profile.
               "                      E"Indicates VLAN-based IPv6 Source Address Verification (SAV) function for CM configured policies. 
                Options:
                1. enable(1)  -indicates that the VLAN-based IPv6 Source Address Verification for CM configured
                               policies are enabled.
                2. disable(2) -indicates that the VLAN-based IPv6 Source Address Verification for CM configured
                               policies are ignored.
                This leaf is optional for creating a VLAN service profile.
                Default: enable(1) 
               "                      �"Indicates the VLAN-based mac-duplicate function.
                Options:
                1. enable(1)     -indicates that the mac-duplicate function is enabled.
                2. disable(2)    -indicates that the mac-duplicate function is disabled.
                3. notConfig(3)  -indicates by VLAN single switch.
                This leaf is optional for creating a VLAN service profile.
                The VLAN-based mac-duplicate function can be configured in
                hwIpDslamL2pVlanCtrlAntiMacDuplicate of HUAWEI-IPDSLAML2PPORTCONFIG-MIB.
                The status of the mac-duplicate function is determined by its
                VLAN-level switch. The mac-duplicate function of a VLAN is enabled
                only when the VLAN-level switch is enabled.
                If a VLAN service profile is bound to the VLAN,
                the configuration of the VLAN-based mac-duplicate function
                in the VLAN service profile takes effect.
               "                      &"Indicates the row status, used for creating or deleting a VLAN profile.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                To create a VLAN service profile, set hwProfileRowStatus to createAndGo(4)
                to perform the set operation. The other leaves are optional.
                To delete a VLAN service profile, set hwProfileRowStatus to
                destroy(6) to perform the set operation.
                To modify a VLAN service profile, you need not specify hwProfileRowStatus,
                but perform the set operation directly on the leaf of the
                corresponding attribute to be modified.
                During query, the value of this leaf is the fixed active(1).
               "                      ~"Enable/Disable smart VLAN isolate-configuration.
                During the creation of a VLAN service profile, if this leaf is not specified.
                Options:
                1. enabled(1)  -indicates smart VLAN isolate-config is enabled.
                2. disabled(2) -indicates smart VLAN isolate-config is disabled.
                Default: enabled(1)
               "                      �"Enables or disables the IP aware function of a VLAN. After the IP aware function
                is enabled, the destination IP address of the IP packets forwarded in the VLAN
                will be perceived and the packets will be forwarded to different gateways according
                to different destination IP addresses.
                The index of this table is hwVlanIpAwareVlanID.
               "                      �"Enables or disables the IP aware function of a VLAN. After the IP aware function
                is enabled, the destination IP address of the IP packets forwarded in the VLAN
                will be perceived and the packets will be forwarded to different gateways according
                to different destination IP addresses.
                The index of this entry is hwVlanIpAwareVlanID.
               "                       v"Indicates the ID of the VLAN that needs enabling the IP aware service.
                Range: 1-4093
               "                       �"Sets the name of the VPN instance bound to a VLAN. The default value is public network.
                It is a character string and the length range is 1-31.
               "                      x"Indicates the row status. It is used to enable or disable the IP aware function.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                Only options createAndGo(4) and destroy(6) support the set operation.
                During query, active(1) is always returned for this leaf.
               "                      Q"Indicates the source IP address obtaining mode of the ARP request.
                Options:
                1. clientIp(1)             -The source IP address obtaining mode is client IP.
                2. virtualIp(2)            -The source IP address obtaining mode is virtual IP.
                Default: clientIp(1)
               "                       �"Indicates the period for sending ARP requests.
                Range: 5-3600
                Unit: second
                Default: 180s
               "                      �"Configures the virtual IP address of a VLAN. After the IP aware function
                of a VLAN is enabled, the VLAN needs to obtain the gateway MAC address
                through the ARP request and use the configured virtual IP address as the
                source IP address of the ARP request.
                The indexes of this table are hwIpAwareVirtualIPVlanID,hwIpAwareVirtualIP,
                and hwIpAwareVirtualIPMask.
               "                      �"Configures the virtual IP address of a VLAN. After the IP aware function
                of a VLAN is enabled, the VLAN needs to obtain the gateway MAC address
                through the ARP request and use the configured virtual IP address as the
                source IP address of the ARP request.
                The indexes of this entry are hwIpAwareVirtualIPVlanID, hwIpAwareVirtualIP,
                and hwIpAwareVirtualIPMask.
               "                       r"Indicates the table index. It is the ID of the VLAN that needs configuring a virtual IP address.
               "                       3"Indicates the virtual IP address.
               "                       ?"Indicates the mask of the virtual IP address.
               "                      t"Indicates the row status and is used for creating or deleting an IP address.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                Only options createAndGo(4) and destroy(6) support the set operation.
                During query, active(1) is always returned for this leaf.
               "                      �"Configures the dedicated static route of the IP aware service. When a VLAN whose IP aware
                function is enabled is used to forward IP packets, a static route is required so that packets
                with different IP address segments can be forwarded to the gateway.
                The indexes of this table are hwIpAwareRouteDstIP, hwIpAwareRouteMask and hwIpAwareRouteVlanID.
               "                      �"Configures the dedicated static route of the IP aware service. When a VLAN whose IP aware
                function is enabled is used to forward IP packets, a static route is required so that packets
                with different IP address segments can be forwarded to the gateway.
                The indexes of this entry are hwIpAwareRouteDstIP, hwIpAwareRouteMask and hwIpAwareRouteVlanID.
               "                       `"Indicates the destination IP address of the static route. It is a table index.
               "                       7"Indicates the static route mask. It is a table index."                       N"Indicates the VLAN of the static route. It is a table index.
               "                       G"Indicates the gateway IP address of the static route.
               "                      �"Indicates the row status and is used for creating or deleting
                a static route.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                Only options createAndGo(4) and destroy(6) are supported the set operation.
                During query, active(1) is always returned for this leaf.
               "                      ("Describes the VLAN-based traffic statistics, including the numbers of the upstream bytes,
                downstream bytes, upstream packets, downstream packets, upstream and downstream packets
                in the ACL-based traffic statistics collection, discarded upstream packets, and discarded
                downstream packets.
                The indexes of this table are hwVlanIndex (outer VLAN ID) and hwInnerVlanID (inner VLAN ID).
                hwVlanIndex references the leaf in hwVlanMIBTable.
                If hwInnerVlanID is -1, that means the InnerVLAN-based traffic statistics is not supported.
                If hwVlanTrafficOccupiedTable is being used to query the traffic and bandwidth occupancy of
                a VLAN, querying hwVlanFlowAccountTable fails.
               "                      ("Describes the VLAN-based traffic statistics, including the numbers of the upstream bytes,
                downstream bytes, upstream packets, downstream packets, upstream and downstream packets
                in the ACL-based traffic statistics collection, discarded upstream packets, and discarded
                downstream packets.
                The indexes of this entry are hwVlanIndex (outer VLAN ID) and hwInnerVlanID (inner VLAN ID).
                hwVlanIndex references the leaf in hwVlanMIBTable.
                If hwInnerVlanID is -1, that means the InnerVLAN-based traffic statistics is not supported.
                If hwVlanTrafficOccupiedTable is being used to query the traffic and bandwidth occupancy of
                a VLAN, querying hwVlanFlowAccountTable fails.
               "                      �"Indicates the inner VLAN tag in a stacking VLAN.
                If the VLAN is not of the stacking attribute or
                you perform the query operation only by the outer VLAN,
                this leaf must be set to -1.
                Currently, ACL-based VLAN traffic statistics of only the
                outer VLAN can be collected. Therefore, this value of
                this leaf is not useful, and you'd better set the value to -1.
                0 is not supported.
               "                       n"Indicates the number of upstream bytes of a VLAN.
               '18446744073709551615' means invalid value."                       p"Indicates the number of downstream bytes of a VLAN.
               '18446744073709551615' means invalid value."                       p"Indicates the number of upstream packets of a VLAN.
               '18446744073709551615' means invalid value."                       r"Indicates the number of downstream packets of a VLAN.
               '18446744073709551615' means invalid value."                      7"Indicates the number of upstream packets in the
                ACL-based VLAN traffic statistics collection.
                After the first query, 0 is fixedly returned.
                After the second query, traffic statistics of the
                VLAN between the two queries are returned. If the
                query or delete operation is not performed on the
                traffic statistics of this VLAN within 10 minutes,
                the traffic statistics collection of the VLAN is invalid.
                If a new index is specified in the second query,
                the traffic statistics of the new VLAN are collected.
                The system can collect the traffic statistics of
                a maximum of 64 VLANs concurrently.
               '18446744073709551615' means invalid value."                      	"Indicates the number of downstream packets in the
                ACL-based VLAN traffic statistics collection.
                After the first query, 0 is fixedly returned. After the second query,
                traffic statistics of the VLAN between the two queries are returned.
                If the query or delete operation is not performed on the traffic statistics
                of this VLAN within 10 minutes, the traffic statistics collection of the VLAN is invalid.
                If a new index is specified in the second query, the traffic statistics of
                the new VLAN are collected. The system can collect the traffic
                statistics of a maximum of 64 VLANs concurrently.
               '18446744073709551615' means invalid value."                      �"Used to delete the VLAN traffic statistics.
                Options:
                1. invalid(-1) -During the query, the invalid value -1 is fixedly returned.
                2. reset(0)    -indicates that the VLAN traffic statistics based on service board are deleted.
                3. resetAcl(1) -indicates that the VLAN traffic statistics based on ACL are deleted.
               "                       z"Indicates the number of upstream discarded packets of a VLAN.
               '18446744073709551615' means invalid value."                       |"Indicates the number of downstream discarded packets of a VLAN.
               '18446744073709551615' means invalid value."                      "Describes the VLAN-based upstream/downstream rate statistics and bandwidth occupancy.
                The indexes of this table are hwVlanIndex and hwInnerVlanID.
                hwInnerVlanID must be -1, that means the InnerVLAN-based upstream/downstream rate statistics
                and bandwidth occupancy are not supported.
                If hwVlanFlowAccountTable is being used to query the network-side packet statistics of a VLAN,
                querying hwVlanTrafficOccupiedTable fails.
               "                      "Describes the VLAN-based upstream/downstream rate statistics and bandwidth occupancy.
                The indexes of this entry are hwVlanIndex and hwInnerVlanID.
                hwInnerVlanID must be -1, that means the InnerVLAN-based upstream/downstream rate statistics
                and bandwidth occupancy are not supported.
                If hwVlanFlowAccountTable is being used to query the network-side packet statistics of a VLAN,
                querying hwVlanTrafficOccupiedTable fails.
               "                       d"Describes the network-side upstream rate of a VLAN.
                 Unit: kbit/s
                "                       d"Describes the network-side downstream rate of a VLAN.
                Unit: kbit/s
               "                       `"Describes the upstream bandwidth occupancy of a VLAN, indicated in percentage.
               "                       b"Describes the downstream bandwidth occupancy of a VLAN, indicated in percentage.
               "                       p"Indicates information for MPLS VLAN.
                 The index of this table is hwVlanIndex.
                "                       p"Indicates information for MPLS VLAN.
                 The index of this entry is hwVlanIndex.
                "                       �"Indicates the MPLS function of a VLAN
                Options:
                1. enable(1)   - enable the MPLS function of a VLAN.
                2. disable(2)  - disable the MPLS function of a VLAN."                       �"Configures the VLAN Connect table.
                The indexes of this table are hwVlanConnectOuterVlanID and hwVlanConnectInnerVlanID.
               "                       �"Configures the VLAN Connect table.
                The indexes of this entry are hwVlanConnectOuterVlanID and hwVlanConnectInnerVlanID.
               "                       Y"Indicates the outer VLAN of the VLAN-connect item. It is a table index.
               "                       Y"Indicates the inner VLAN of the VLAN-connect item. It is a table index.
               "                       �"Indicates the source point type of VLAN Connect table.
                Options:
                1. port(1) -indicates that hwVlanConnectSrcPara is ifindex.
                2. invalid(-1) -indicates that hwVlanConnectSrcPara is invalid.
               "                      "Indicates the source point value of VLAN Connect table.
                If hwVlanConnectSrcType is equal to invalid(-1), this leaf indicates invalid.
                If hwVlanConnectSrcType is equal to port(1), this leaf indicates ifindex.
               "                      �"Indicates the source point type of VLAN-connect table.
                Options:
                1. port(1) -indicates that hwVlanConnectDstPara is ifindex.
                2. flow(2) -indicates that hwVlanConnectDstPara is flow index.
                3. bundle(3) -indicates that hwVlanConnectDstPara is bundle index.
                4. invalid(-1) -indicates that hwVlanConnectDstPara is invalid.
               "                      �"Indicates the source point value of VLAN-connect table.
                If hwVlanConnectDstType is equal to invalid(-1), this leaf indicates invalid.
                If hwVlanConnectDstType is equal to port(1), this leaf indicates ifindex.
                If hwVlanConnectDstType is equal to flow(2), this leaf indicates flow index.
                If hwVlanConnectDstType is equal to bundle(3), this leaf indicates bundle index.
               "                      ~"Indicates the row status and is used for creating or deleting VLAN-connect item.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                Only options createAndGo(4) and destroy(6) are supported the set operation.
                During query, active(1) is always returned for this leaf.
               "                          G"Switch the double tag tunnel function of IGMP packet.
                 Options:
                 1. enable(1)     -Enable the double-tag tunnel function of IGMP packet.
                 2. disable(2)    -Disable the double-tag tunnel function of IGMP packet.
                 The default value is disable(2).
                "                      D"Switch the double tag tunnel function of RIP packet.
                 Options:
                 1. enable(1)     -Enable the double-tag tunnel function of RIP packet.
                 2. disable(2)    -Disable the double-tag tunnel function of RIP packet.
                 The default value is disable(2).
                "                      G"Switch the double tag tunnel function of DHCP packet.
                 Options:
                 1. enable(1)     -Enable the double-tag tunnel function of DHCP packet.
                 2. disable(2)    -Disable the double-tag tunnel function of DHCP packet.
                 The default value is disable(2).
                "                       �"
                This is the service svlan of DOCSIS table.
                This table is used to configure the service svlan of DOCSIS service board.
                The indexes of this table are hwFrameIndex and hwSlotIndex.
                "                       �"
                This is the service svlan of DOCSIS table.
                This table is used to configure the service svlan of DOCSIS service board.
                The indexes of this entry are hwFrameIndex and hwSlotIndex.
                "                       �"
                Indicates the service svlan of DOCSIS service board.
                Range: 1-4093.
                -1 indicates that hwDocsSrvVlanID is invalid.
                "                      Y"
                Indicates the row status, used for creating or deleting a service VLAN of DOCSIS service board.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                To create a service VLAN, you must specify hwDocsSrvVlanID and set
                hwDocsSrvVlanRowStatus to createAndGo(4) to perform the set operation.
                To delete a VLAN, set hwDocsSrvVlanRowStatus to destroy(6) to perform the set operation.
                During query, the value of this leaf is the fixed active(1).
                "                       �"
                Indicates the Qos IP tos and VLAN priority.
                The indexes of this table are hwVOIPDhcpVlanID and hwVOIPDhcpQosType.
                "                       �"
                Indicates the Qos IP tos and VLAN priority.
                The indexes of this entry are hwVOIPDhcpVlanID and hwVOIPDhcpQosType.
                "                       _"
                Indicates the service VLAN.
                Range: 1-4093. 
                "                       �"
                Indicates the type of QOS.
                The value 0 indicates that the type of QOS is signaling. 
                The value 1 indicates that the type of QOS is media.
                "                       �"
                Indicates the Qos value of tos.
                Range: -1, 0-255.
                -1 indicates that the Qos value is invalid.
                "                       �"
                Indicates the Qos value of dscp.
                Range: -1, 0-255.
                -1 indicates that the Qos value is invalid.
                "                       `"
                Indicates the Qos VLAN priority.
                Range: 0-7.
                "                      "Indicates the status of this conceptual row.
                Options:
                1. active(1)
                2. createAndGo(4) 
                3. destroy(6)                                                                                                      
               "                      h"Indicates the MEth native VLAN.
                Range: -1, 2-4093
                In the set case, -1 indicates delete the MEth native VLAN, 2-4093 indicates set the MEth native VLAN.
                In the get case, when the MEth native VLAN is not set, -1 is returned, otherwise the MEth native VLAN is returned.
                Default: -1
               "                       �"
                 Indicates the TPID table based on port and VLAN.
                The indexes of this table are ifIndex and hwPortVlanOuterEthernetTypeVlanid.
                "                       �"
                Describes the Ethernet protocol type of the outer VLAN tag of a port and VLAN.
                The indexes of this entry are ifIndex and hwPortVlanOuterEthernetTypeVlanid.
                "                       u"
                Indicates the VLAN ID input in TPID configuration.
                Range: 1-4095.
                "                       �"
                Indicates the TPID based on port and VLAN.
                Options:
                1. dot1adTpid(2) -indicates that hwPortVlanOuterEthernetType is dot1adTpid
                "                      �"
                Indicates the row status, used for setting, querying or deleting a hwPortVlanOuterEthernetType.
                Options:
                1. active(1)
                2. createAndGo(4)
                3. destroy(6)
                To set a hwPortVlanOuterEthernetType, you must specify hwPortVlanOuterEthernetTypeVlanid and set
                hwPortVlanOuterEthernetTypeRowStatus to createAndGo(4) to perform the set operation.
                To delete a hwPortVlanOuterEthernetType, set hwPortVlanOuterEthernetTypeRowStatus to destroy(6) to perform the set operation.
                During query, the value of this leaf is the fixed active(1).
                "                           �"Describes layer 3 interface type.
                Options:
                1. vlanif(1)  -VLAN interface.
                2. meth(2)    -Meth interface.
               "                                       t"This notification is generated when the Layer-3 interface 
               link is in the up state.
               "                 v"This notification is generated when the Layer-3 interface 
               link is in the down state.
               "                     7"Related VLAN ID list information of the VLAN profile."                      "The operate type of the VLAN service profile.
                 Options:
                 1. add(1)     -Add a VLAN service profile.
                 2. modify(2)  -Modify a VLAN service profile.
                 3. delete(3)  -Delete a VLAN service profile.
                "                      �"Indicates the type of VLAN list.
                Options:
                1. superVlan(1)      -indicates super VLAN.
                2. commonVlan(2)     -indicates common VLAN.
                3. subVlan(3)        -indicates sub VLAN, the value is not supported.
                4. primaryVlan(4)    -indicates primary VLAN, the value is not supported.
                5. secondaryVlan(5)  -indicates secondary VLAN, the value is not supported.
                6. regionVlan(6)     -indicates region VLAN, the value is not supported.
                7. smartVlan(7)      -indicates smart VLAN.
                8. muxVlan(8)        -indicates MUX VLAN.
                9. multiVlan(9)      -indicates multi VLAN.
               "                      -"Indicates the attribute of VLAN list.
                Options:
                1. common(1)    -indicates common VLAN.
                2. qinq(2)      -indicates QinQ VLAN.
                3. stacking(3)  -indicates stacking VLAN.
                4. subVlan(4)   -indicates sub VLAN.
               "                                   ;"The trap to be sent when the VLAN description is changed."                 ?"The trap to be sent when the VLAN forwarding mode is changed."                 :"The trap to be sent when the VLAN profile is configured."                 M"The trap to be sent when a VLAN profile is bound to or unbound from a VLAN."                 +"The trap to be sent when VLANs are added."                 -"The trap to be sent when VLANs are deleted."                 >"The trap to be sent when the attribute of VLANs are changed."                 O"The trap to be sent when the list of the standard ports in VLANs are changed."                