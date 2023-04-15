�-- ==================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: HUAWEI Private ATM Interface MIB
-- Reference:
-- Version: V2.16
-- History:
--      V1.0 initial
--      V1.1 add hwAtmPvcGroupTable and hwAtmPvcGroupMemTable for
--           pvc-group; add hwAtmPvcPppTable for PPPoA on demand; add a node
--           hwAtmPvcBridgeBroadcast in hwAtmPvcBridgeTable for bridge.
--      V1.2 add hwAtmPvcDynamicTable for auto PVC, add hwAtmPvcDynamicPppTable
--           for PPP on auto PVC, add hwAtmPvcDynamicBridgeTable for auto PVC,
--           add hwAtmDynamicEncapsulateTable for auto PVC.
--      V2.11 add hwAtmPvcStatisticInputCellDrops,hwAtmPvcStatisticInputPktDrops,
--           hwAtmPvcStatisticOutputCellDrops and hwAtmPvcStatisticOutputPktDrops
--           for HwAtmPvcStatisticEntry.
--      V2.12 modify the invalid value of hwAtmPvcServiceBuffer and hwAtmPvpServiceBuffer 
--           from 4294967295 to -1. Modify the MAX-ACCESS of hwAtmVpcConnectivityTestRowStatus 
--           and hwAtmVccConnectivityTestRowStatus from accessible-for-notify to read-create.
-- ==================================================================
-- ==================================================================
--
-- Variables and types be imported
--
-- ==================================================================
                                                     �"V1.3, add hwAtmPvcStatisticInputCellDrops,hwAtmPvcStatisticInputPktDrops,
                          hwAtmPvcStatisticOutputCellDrops and hwAtmPvcStatisticOutputPktDrops
                          for HwAtmPvcStatisticEntry." �"Huawei Industrial Base
  Bantian, Longgang
   Shenzhen 518129
   People's Republic of China
   Website: http://www.huawei.com
   Email: support@huawei.com
 " "201801130000Z" "201702170000Z" "201612270000Z" "201509300000Z" "201509300000Z" "201407280000Z" "201402180000Z" "201103250000Z" "201009250000Z" "200710172230Z" !"V2.16, modify node description." q"V2.15, modify the description of hwAtmVpcConnectivityTestResultNotify and hwAtmVccConnectivityTestResultNotify." D"V2.14, add trap node hwNoAtmResourceAlarmTrap of table hwAtmTraps." 7"V2.13, add hwAtmPvcQueueStatisticTable for pvc-queue." Y"Modify the MAX-ACCESS of hwAtmPvcTransmittalDirection from not-accessible to read-only.""Modify the invalid value of hwAtmPvcServiceBuffer and hwAtmPvpServiceBuffer  from 4294967295 to -1. 
                 Modify the MAX-ACCESS of hwAtmVpcConnectivityTestRowStatus and hwAtmVccConnectivityTestRowStatus
                 from accessible-for-notify to read-create" �"This MIB is mainly used to configure the ATM OC-3/STM-1 and ATM OC-12/STM-4
                 interface, IPoA, IPoEoA, PVC service type, OAM F5 loopback, parameters of
                 the VP limit, and mapping between the peer VPI and the local VPI." �"V1.2, add hwAtmPvcDynamicTable for auto PVC, add hwAtmDynamicPppTable
                          for PPP on auto PVC, add hwAtmDynamicBridgeTable for auto PVC,
                          add hwAtmDynamicEncapsulateTable for auto PVC." �"V1.1, add hwAtmPvcGroupTable and hwAtmPvcGroupMemTable for
                          pvc-group; add hwAtmPvcPppTable for PPPoA on demand; add a node
                          hwAtmPvcBridgeBroadcast in hwAtmPvcBridgeTable for bridge." 7"V1.0, the initial revision for MIB about ATM protocl."                   F"This table is used to configure the parameters of the ATM interface."                       F"This table is used to configure the parameters of the ATM interface."                        "Indicates the interface index."                       "Indicates the interface type."                       h"Master clock: uses the internal clock signal.
                Slave clock: uses the line clock signal."                       �"For the optical interface STM-1/STM-4, the frame format on the ATM interface
                is SDH; for the OC-3/OC-12 interface, the frame format is SONET.
                The default frame format is SDH."                       �"By default, the scramble function is enabled. The scramble function
                takes effect only on payload rather than cell header.
                true: enables the scramble function. false: disables the scramble function."                      H"Enable the loopback function of the channel.
                local: enables the local loopback on the interface.
                remote: enables the remote loopback on the interface.
                payload: enables the remote payload loopback on the interface.
                By default, all loopback functions are disabled."                       )"Enable or disable the function of PITP."                       �"Indicates the overhead byte of the SDH frame. j0: sets section trace byte.
            The default value is j016ByteMode(2);hwAtmFlagJ0Trace:NetEngine."                       p"Indicates the value of j01ByteMode. When hwAtmFlagJ0Mode is set to j01ByteMode, hwAtmFlagJ0Value takes effect."                      x"Set section trace byte.
            When hwAtmFlagJ0Mode is set to j016ByteMode or j064ByteOrNullMode, this variable takes effect.
            When hwAtmFlagJ0Mode is set to j016ByteMode, the value of this variable is up to 15 characters trace byte.
            When hwAtmFlagJ0Mode is set to j064ByteOrNullMode, the value of this variable is up to 64 characters trace byte."                       �"Indicates the overhead byte of the SDH frame. j1: sets path trace byte.
            The default value is j116ByteMode(2);hwAtmFlagJ1Trace:NetEngine."                       p"Indicates the value of j11ByteMode. When hwAtmFlagJ1Mode is set to j11ByteMode, hwAtmFlagJ1Value takes effect."                      ["Set path trace byte.
            When hwAtmFlagJ1Mode is set to j116ByteMode or j164ByteOrNullMode, this variable takes effect.
            When hwAtmFlagJ1Mode is set to j116ByteMode, this variable is up to 15 characters trace byte.
            When hwAtmFlagJ1Mode is set to j164ByteOrNullMode, this variable is up to 64 characters trace byte."                       �"Indicates the overhead byte of the SDH frame.
            c2: indicates the signal label byte. It is a hexdecimal value ranging from 00 to FF.
            The default value is 0x02."                       V"This table is used to configure the mapping between the peer VPI and the local

VPI."                       V"This table is used to configure the mapping between the peer VPI and the local

VPI."                        "Indicates the interface index."                       �"Indicates the local VPI value. The value is an integer.
                For UNI interface, VPI value ranging from 0 to 255;
                For NNI interface, VPI value ranging from 0 to 4095."                       �"Indicates the peer VPI value. The value is an integer.
                 For UNI interface, VPI value ranging from 0 to 255;
                 For NNI interface, VPI value ranging from 0 to 4095."                       "Description."                       6"This variable is used to create or delete an object."                       n"This table is used to configure the mapping between the peer VPI/VCI
                 and the local VPI/VCI."                       n"This table is used to configure the mapping between the peer VPI/VCI
                 and the local VPI/VCI."                        "Indicates the interface index."                       �"Indicates the local VPI value. The value is an integer.
                For UNI interface, VPI value ranging from 0 to 255;
                For NNI interface, VPI value ranging from 0 to 4095."                       �"Indicates the local VCI value. VCI is short for Virtual Channel Identifier.
                The VCI value ranges from 0 to 65535. Generally, the values 3, 4 and 65535 are
                reserved for specail use."                       �"Indicates the peer VCI value. VCI is short for Virtual Channel Identifier.
                The VCI value ranges from 0 to 65535. Generally, the values 3, 4 and 65535 are
                reserved for specail use."                       �"Indicates the peer VPI value. The value is an integer.
                For UNI interface, VPI value ranging from 0 to 255;
                For NNI interface, VPI value ranging from 0 to 4095."                       "Description."                       6"This variable is used to create or delete an object."                       g"This table is used to configure the service type and related parameters
                 for the PVC."                       ?"This table is used to configure the service type for the PVC."                       e"Indicates the name of the service type. The name is a string
                of 1 to 31 characters."                       /"Set the service type for the PVC as required."                       "Indicates the peak output rate of the ATM cell.
                When hwPvcServiceTableType is ubr, the peak output rate is 0."                       �"Indicates the peak output rate of the ATM cell.
                When hwPvcServiceTableType is cbr or ubr, the peak output rate is 0."                       �"Indicates the peak output rate of the ATM cell.
                When hwPvcServiceTableType is cbr or ubr, the peak output rate is 0."                       �"Indicates the limit of the ATM cell delay variation.
                When hwPvcServiceTableType is cbr, the variable is valid.
                For other service types, the variable is 0."                       �"Indicates the mini width guarantee bit rate of the ATM cell.
                When hwPvcServiceTableType is ubr, the peak output rate is 0."                       6"This variable is used to create or delete an object."                       ?"This table is used to configure the service type for the PVC."                       ?"This table is used to configure the service type for the PVC."                        "Indicates the interface index."                       �"Indicates the local VPI value. The value is an integer.
                For UNI interface, VPI value ranging from 0 to 255;
                For NNI interface, VPI value ranging from 0 to 4095."                       �"Indicates the local VCI value. VCI is short for Virtual Channel Identifier.
                The VCI value ranges from 0 to 65535. Generally, the values 3, 4 and 65535
                are reserved for specail use."                       e"Indicates the name of the service type. The name is a string
                of 1 to 31 characters."                       9"Indicates the input or output tpye of the service type."                       0"Indicates the priority  of the output service."                       ]"The range of buffer,0xFFFFFFFF is invalid value for ima/serial interface which not support."                       6"This variable is used to create or delete an object."                       2"This table is used to configure the VP vlan map."                       2"This table is used to configure the VP vlan map."                        "Indicates the interface index."                       "VPI."                       "PE VLAN ID."                       "RowStatus. "                       2"This table is used to configure the VC vlan map."                       2"This table is used to configure the VC vlan map."                        "Indicates the interface index."                       "VPI."                       %"Begin VCI Value, not config 3 or 4."                       #"End VCI Value, not config 3 or 4."                       "CE VLAN ID."                       d"Indicates the name of the service type. The name is a string
               of 1 to 31 characters."                       
"Piority."                       3"Indicates the p-bit value,the default value is 0."                       "RowStatus. "                       ?"This table is used to configure the service type for the PVP."                       ?"This table is used to configure the service type for the PVP."                        "Indicates the interface index."                       �"Indicates the local VPI value. The value is an integer.
                For UNI interface, VPI value ranging from 0 to 255;
                        For NNI interface, VPI value ranging from 0 to 4095."                       e"Indicates the name of the service type. The name is a string
                of 1 to 31 characters."                       9"Indicates the input or output tpye of the service type."                       /"Indicates the priority of the output service."                       \"The range of buffer,0xFFFFFFFF is invalid value for ima/serial interface which not support"                       6"This variable is used to create or delete an object."                       �"This table is used to configure pvc statistic including inputPackets,
            inputBytes,inputPktErrors,outputPackets,outputBytes and outputPktErrors."                       �"This table is used to configure pvc statistic including inputPackets,
            inputBytes,inputPktErrors,outputPackets,outputBytes and outputPktErrors."                       ,"This object indicates the interface index."                       �"This object indicates the virtual path identifier (VPI) of ATM. The value is an integer. 
            For a UNI, the value ranges from 0 to 255. 
            For an NNI, the value ranges from 0 to 4095."                       D"This object indicates the virtual channel identifier (VCI) of ATM."                       7"This object indicates the number of received packets."                       5"This object indicates the number of received bytes."                       ="This object indicates the number of received error packets."                       5"This object indicates the number of received cells."                       ;"This object indicates the number of received error cells."                       3"This object indicates the number of sent packets."                       1"This object indicates the number of sent bytes."                       9"This object indicates the number of sent error packets."                       1"This object indicates the number of sent cells."                       7"This object indicates the number of sent error cells."                       ?"This object indicates the number of discarded received cells."                       A"This object indicates the number of discarded received packets."                       ;"This object indicates the number of discarded sent cells."                       ="This object indicates the number of discarded sent packets."                       +"This object indicates cleared statistics."                       3"Indicates the configuration of the ATM interface."                       3"Indicates the configuration of the ATM interface."                        "Indicates the interface index."                       z"Indicates the maximum number of the PVCs. Only main-interfaces encapsulated
               with ATM protocol can be set."                       ."Indicates the number of the configured PVCs."                       �"This object indicates the type of the serial interface with the ATM protocol.
               Only main-interfaces encapsulated with ATM protocol can be set."                      �"This object indicates whether the cell transfer function is enabled.
                 By default, the cell transfer function is enabled on IMA sub-interfaces
                 and serial sub-interfaces and disabled on other types of interfaces.
                 This object can not be set on IMA sub-interfaces and serial sub-interface.
                 true: enables the cell transfer function.
                 false: disables the cell transfer function."                       -"Indicates the configuration of the ATM PVP."                       -"Indicates the configuration of the ATM PVP."                        "Indicates the interface index."                       "VPI."                       ""Indicates the status of the row."                       -"Indicates the configuration of the ATM PVC."                       -"Indicates the configuration of the ATM PVC."                        "Indicates the interface index."                       "VPI."                       "VCI."                        "Indicates the name of the PVC."                      +"Indicates the encapsulation mode of AAL5.
                aal5snap: LLC/SNAP (Logical Link Control (LLC)/Subnet Access Protocol (SNAP)) encapsulation type.
                aal5mux: MUX encapsulation type.
                aal5muxnonstandard: nonstandard MUX encapsulation type, which used to interconnect other devices.
                aal5nlpid: RFC1490 encapsulation type.
                aal5nlpidietf: RFC1490 encapsulation type, which used to differentiate with aal5nlpid for ISIS.
                aal5Auto: Auto encapsulation type.
                "                       ""Indicates the status of the row."                       '"Indicates the Description of the PVC."                       >"This table is used to configure the IPoA mapping on the PVC."                       >"This table is used to configure the IPoA mapping on the PVC."                      �"Indicates the type of the PVC IPoA mapping.
                ip: sets the peer IP address and mask that are mapped to the PVC.
                default: configures a mapping with default route attributes.
                If no mapping of the next hop address of a packet can be found,
                the packet is sent over the PVC if the PVC is configured with
                default mapping.
                inarp: configures InARP on the PVC."                       2"Indicates the peer IP address mapped to the PVC."                       N"Indicates the IP address mask. The IP address mask is an optional parameter."                       �"Indicates the interval for sending InARP packets. The parameter is optional.
                The value ranges from 1 to 600 in seconds. If the type of the PVC IPoA
                mapping is IP or default, the value is 0. The default value is 1."                       �"If a mapping with this attribute is configured on the PVC,
                broadcast packets on the interface where the PVC resides
                will be sent over the PVC."                       "RowStatus."                       U"This table is used to configure the IPoEoA mapping and PPPoEoA mapping on the

PVC."                       U"This table is used to configure the IPoEoA mapping and PPPoEoA mapping on the

PVC."                       *"Indicates the index of the VE interface."                       /"Indicates the PVC can forward bridge packets."                       L"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported."                       �"This table is used to configure OAM F5 Loopback,
                enable the sending of OAM F5 Loopback cells,
                and configure the parameters of the retransmission check
                or modify the parameters of the retransmission check."                       2"This table is used to configure OAM F5 Loopback."                       ;"Indicates the interval for sending OAM F5 Loopback cells."                       j"Indicates the number of continuous OAM F5 Loopback cells that must be received

before the PVC turns Up."                       l"Indicates the number of continuous OAM F5 Loopback cells that are not received

before the PVC turns Down."                       }"Indicates the interval for sending cells during OAM F5 Loopback retransmission

verification before the PVC status changes."                       "RowStatus"                       d"This table is used to configure the VP limit. To monitor the VP, configure

related VP parameters."                       /"This table is used to configure the VP limit."                        "Indicates the interface index."                       "VPI."                       "VCI."                       "RowStatus. "                       ?"This table is used to configure the PPPoA mapping on the PVC."                       ?"This table is used to configure the PPPoA mapping on the PVC."                       4"Indicates the index of the VT or dialer interface."                       �"Indicates the node is server or not.
                 By default, the node is not server.
                 true: indicates the node is server.
                 false: indicates the node is not server.
                "                       L"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported."                       g"This table is used to create or delete the pvc-group, and get the TOS type or state of the pvc-group."                       g"This table is used to create or delete the pvc-group, and get the TOS type or state of the pvc-group."                       1"Indicates the TOS type. The default value is 1."                       '"Indicates the state of the pvc-group."                       G"Indicates the name of the pvc-group. Only support visible characters."                       ]"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported.
                "                       b"This table is used to configure the member PVC and TOS type and TOS type value on the pvc-group."                       b"This table is used to configure the member PVC and TOS type and TOS type value on the pvc-group."                       3"Indicates the VPI of the member PVC in pvc-group."                       3"Indicates the VCI of the member PVC in pvc-group."                       i"Indicates the name of the member PVC of the pvc-group.
                Only support visible characters."                       �"Indicates the minimum value of the TOS with one member PVC.
               If the TOS type is precedence, the maximum value cannot be larger than 7.
               Return 255 when this value is not configed."                       �"Indicates the maximum value of the TOS with one member PVC.
               If the TOS type is precedence, the maximum value cannot be larger than 7.
               Return 255 when this value is not configed."                       �"Indicates the PVC is default PVC or not.
                By default, the default TOS is disabled.
                true: with default. false: without default."                       1"Indicates the TOS type. The default value is 1."                       ]"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported.
                "                       /"This table is used to configure the auto PVC."                       /"This table is used to configure the auto PVC."                       >"Indicates the index of ATM interface which support auto PVC."                       "The start VPI of auto PVC."                       "The start VCI of auto PVC."                       "The end VPI of auto PVC."                       "The end VCI of auto PVC."                       2"Indicates the administrative status of auto PVC."                      "Indicates the encapsulation mode of AAL5.
                aal5snap: LLC/SNAP (Logical Link Control (LLC)/Subnet Access Protocol (SNAP)) encapsulation type.
                aal5mux: MUX encapsulation type.
                aal5muxnonstandard: nonstandard MUX encapsulation type, which used to interconnect other devices.
                aal5nlpid: RFC1490 encapsulation type.
                aal5nlpidietf: RFC1490 encapsulation type, which used to differentiate with aal5nlpid for ISIS.
                aal5Auto: Auto encapsulation type."                       ]"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported.
                "                       :"This table is used to configure the map PPP on auto PVC."                       :"This table is used to configure the map PPP on auto PVC."                       *"Indicates the index of the VT interface."                       ]"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported.
                "                       ="This table is used to configure the map bridge on auto PVC."                       ="This table is used to configure the map bridge on auto PVC."                       *"Indicates the index of the VE interface."                       L"RowStatus.
                 Only 'createAndGo' and 'destroy' is supported."                       L"This table is used to configure the parameters of the atm trunk interface."                       L"This table is used to configure the parameters of the atm trunk interface."                        "Indicates the interface index."                       '"Indicates the work mode of atm trunk."                       "Description."                       "Description."                        "Indicates the interface index."                       "VPI."                       "Loopback Local Identify."                       #"Indicates the result of the test."                       "Indicates the interface name."                       ""Indicates the status of the row."                       "Description."                       "Description."                        "Indicates the interface index."                       "VPI."                       "VCI."                       "Loopback Local Identify."                       #"Indicates the result of the test."                       "Indicates the interface name."                       ""Indicates the status of the row."                       }"This table is used to configure pvc-queue statistic including outputPackets,
            outputBytes and outputDropPackets."                       }"This table is used to configure pvc-queue statistic including outputPackets,
            outputBytes and outputDropPackets."                       ,"This object indicates the interface index."                       �"This object indicates the virtual path identifier (VPI) of ATM. The value is an integer. 
            For a UNI, the value ranges from 0 to 255. 
            For an NNI, the value ranges from 0 to 4095."                       D"This object indicates the virtual channel identifier (VCI) of ATM."                       ," This object indicates the queue priority."                       +"This object indicates cleared statistics."                       3"This object indicates the number of sent packets."                       1"This object indicates the number of sent bytes."                       ="This object indicates the number of discarded sent packets."                               P"This object indicates that the connectivity test on ATM VPC services is ended."                     P"This object indicates that the connectivity test on ATM VCC services is ended."                         Q"The compliance statement for systems supporting
            the HUAWEI-ATM-MIB."                   "The Atm attribute group."                 "Description."                 %"The ATM PVC bridge attribute group."                 "Description."                 ""The ATM map PVP attribute group."                 ""The ATM map PVC attribute group."                 ""The ATM service attribute group."                 &"The ATM PVC service attribute group."                 #"The ATM PVC IPOA attribute group."                 "The ATM Pvl attribute group."                 "The port attribute group."                 "The port attribute group."                 ("The ATM any other PVC attribute group."                 ,"The ATM any other map PPP attribute group."                 /"The ATM any other map bridge attribute group."                 "Description."                     "Description."                     "Description."                     #"The AIS alarm of the VP is found."                 '"The AIS alarm of the VP is cancelled."                 #"The RDI alarm of the VP is found."                 '"The RDI alarm of the VP is cancelled."                 #"The AIS alarm of the VC is found."                 '"The AIS alarm of the VC is cancelled."                 #"The RDI alarm of the VC is found."                 '"The RDI alarm of the VC is cancelled."                 &"The CC-LOC alarm of the VP is found."                 *"The CC-LOC alarm of the VP is cancelled."                 &"The CC-LOC alarm of the VC is found."                 *"The CC-LOC alarm of the VC is cancelled."                 Q"When ATM resources of the system are insufficient, this trap will be generated."                 `"The direction of alarm such as ais, rdi, cc-loc, the value of directon is forward or backward."                                  