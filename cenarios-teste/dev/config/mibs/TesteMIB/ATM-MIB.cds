 �-- =================================================================
-- Description: ATM Interfaces MIB File 
-- Reference:   Extracted from rfc2515.txt
-- =================================================================
                                                                             �"This is the MIB Module for ATM and AAL5-related
            objects for managing ATM interfaces, ATM virtual
            links, ATM cross-connects, AAL5 entities, and
            and AAL5 connections." �"          Kaj Tesink
              Postal:  Bellcore
                       331 Newman Springs Road
                       Red Bank, NJ 07701
              Tel:     732-758-5254
              Fax:     732-758-2269
              E-mail:  kaj@bellcore.com" "9810191200Z" "9406072245Z"�"The initial revision of this module was published
            as RFC 1695. Key revisions include:
            o  Textual Conventions and OBJECT IDENTITIES have
               been moved to a separate MIB module.
            o  Applicability of objects to PVCs, SVCs and Soft
               PVCs has been clarified.
            o  DEFVAL clauses have been added.
            o  The relationship of ifIndex values with different
               layers and sublayers related to ATM has been
               clarified.
            o  atmTrafficQosClass has been deprecated
               and replaced with atmServiceCategory.
            o  atmInterfaceCurrentMaxVpiBits and
               atmInterfaceCurrentMaxVciBits have been added with
               a description on their relationship with other
               objects.
            o  atmInterfaceAddressType and atmInterfaceAdminAddress
               have been deprecated and replaced by
               atmInterfaceSubscrAddress.
            o  atmInterfaceTCAlarmState has been clarified.
            o  atmTrafficDescrParamIndexNext has been introduced
               in order to provide a manager a free
               atmTrafficDescrParamIndex value.
            o  The atmTrafficFrameDiscard capability has been added.
            o  A connection topology type (atmVpl/VclCastType) and
               a call control type (atmVpl/VclConnKind) have been
               added.
            o  aal2 has been added to atmVccAalType." )"The RFC1695 version of this MIB module."                   }"This table contains ATM local interface
            configuration parameters, one entry per ATM
            interface port."                       �"This list contains ATM interface configuration
            parameters and state variables and is indexed
            by ifIndex values of ATM interfaces."                       �"The maximum number of VPCs (PVPCs and SVPCs)
            supported at this ATM interface. At the ATM UNI,
            the maximum number of VPCs (PVPCs and SVPCs)
            ranges from 0 to 256 only."                       ["The maximum number of VCCs (PVCCs and SVCCs)
            supported at this ATM interface."                      �"The number of VPCs (PVPC, Soft PVPC and SVPC)
            currently in use at this ATM interface.  It includes
            the number of PVPCs and Soft PVPCs that are configured
            at the interface, plus the number of SVPCs
            that are currently  established at the
            interface.
            
            At the ATM UNI, the configured number of
            VPCs (PVPCs and SVPCs) can range from
            0 to 256 only."                      4"The number of VCCs (PVCC, Soft PVCC and SVCC)
            currently in use at this ATM interface.  It includes
            the number of PVCCs and Soft PVCCs that are configured
            at the interface, plus the number of SVCCs
            that are currently  established at the
            interface."                       �"The  maximum number of active VPI bits
            configured for use at the ATM interface.
            At the ATM UNI, the maximum number of active
            VPI bits configured for use ranges from
            0 to 8 only."                       ]"The maximum number of active VCI bits
            configured for use at this ATM interface."                       "The VPI value of the VCC supporting
            the ILMI at this ATM interface.  If the values of
            atmInterfaceIlmiVpi and atmInterfaceIlmiVci are
            both equal to zero then the ILMI is not
            supported at this ATM interface."                       "The VCI value of the VCC supporting
            the ILMI at this ATM interface.  If the values of
            atmInterfaceIlmiVpi and atmInterfaceIlmiVci are
            both equal to zero then the ILMI is not
            supported at this ATM interface."                       W"The type of primary ATM address configured
            for use at this ATM interface."                      )"The primary address assigned for administrative purposes,
            for example, an address associated with the
            service provider side of a public network UNI
            (thus, the value of this address corresponds
            with the value of ifPhysAddress at the host side).
            If this interface has no assigned administrative
            address, or when the address used for
            administrative purposes is the same as that used
            for ifPhysAddress, then this is an octet string of
            zero length."                      "The IP address of the neighbor system connected to
            the  far end of this interface, to which a Network
            Management Station can send SNMP messages, as IP
            datagrams sent to UDP port 161, in order to access
            network management information concerning the
            operation of that system.  Note that the value
            of this object may be obtained in different ways,
            e.g., by manual configuration, or through ILMI
            interaction with the neighbor system."                      �"The textual name of the interface on the neighbor
            system on the far end of this interface, and to
            which this interface connects.  If the neighbor
            system is manageable through SNMP and supports
            the object ifName, the value of this object must
            be identical with that of ifName for the ifEntry
            of the lowest level physical interface
            for this port.  If this interface does not have a
            textual name, the value of this object is a zero
            length string.  Note that the value of this object
            may be obtained in different ways, e.g., by manual
            configuration, or through ILMI interaction with
            the neighbor system."                      "The maximum number of VPI Bits that may
            currently be used at this ATM interface.
            The value is the minimum of
            atmInterfaceMaxActiveVpiBits, and the
            atmInterfaceMaxActiveVpiBits of the interface's
            UNI/NNI peer.
            
            If the interface does not negotiate with
            its peer to determine the number of VPI Bits
            that can be used on the interface, then the
            value of this object must equal
            atmInterfaceMaxActiveVpiBits."                      "The maximum number of VCI Bits that may
            currently be used at this ATM interface.
            The value is the minimum of
            atmInterfaceMaxActiveVciBits, and the
            atmInterfaceMaxActiveVciBits of the interface's
            UNI/NNI peer.
            
            If the interface does not negotiate with
            its peer to determine the number of VCI Bits
            that can be used on the interface, then the
            value of this object must equal
            atmInterfaceMaxActiveVciBits."                      "The identifier assigned by a service provider
            to the network side of a public network UNI.
            If this interface has no assigned service provider
            address, or for other interfaces this is an octet string
            of zero length."                       �"This table contains ATM interface DS3 PLCP
            parameters and state variables, one entry per
            ATM interface port."                       �"This list contains DS3 PLCP parameters and
            state variables at the ATM interface and is
            indexed by the ifIndex value of the ATM interface."                       �"The number of DS3 PLCP Severely Errored Framing
            Seconds (SEFS). Each SEFS represents a
            one-second interval which contains
            one or more SEF events."                      ="This variable indicates if there is an
            alarm present for the DS3 PLCP.  The value
            receivedFarEndAlarm means that the DS3 PLCP
            has received an incoming Yellow
            Signal, the value incomingLOF means that
            the DS3 PLCP has declared a loss of frame (LOF)
            failure condition, and the value noAlarm
            means that there are no alarms present.
            Transition from the failure to the no alarm state
            occurs when no defects (e.g., LOF) are received
            for more than 10 seconds."                       d"The counter associated with the number of
            Unavailable Seconds encountered by the PLCP."                       �"This table contains ATM interface TC
            Sublayer parameters and state variables,
            one entry per ATM interface port."                       �"This list contains TC Sublayer parameters
            and state variables at the ATM interface and is
            indexed by the ifIndex value of the ATM interface."                      +"The number of times the Out of Cell
            Delineation (OCD) events occur.  If seven
            consecutive ATM cells have Header Error
            Control (HEC) violations, an OCD event occurs.
            A high number of OCD events may indicate a
            problem with the TC Sublayer."                      �"This variable indicates if there is an
            alarm present for the TC Sublayer.  The value
            lcdFailure(2) indicates that the TC Sublayer
            is currently in the Loss of Cell Delineation
            (LCD) defect maintenance state.  The value
            noAlarm(1) indicates that the TC Sublayer
            is currently not in the LCD defect
            maintenance state."                       k"This table contains information on ATM traffic
            descriptor type and the associated parameters."                       ["This list contains ATM traffic descriptor
            type and the associated parameters."                      :"This object is used by the virtual link
            table (i.e., VPL or VCL table)
            to identify the row of this table.
            When creating a new row in the table
            the value of this index may be obtained
            by retrieving the value of
            atmTrafficDescrParamIndexNext."                      "The value of this object identifies the type
            of ATM traffic descriptor.
            The type may indicate no traffic descriptor or
            traffic descriptor with one or more parameters.
            These parameters are specified as a parameter
            vector, in the corresponding instances of the
            objects:
                atmTrafficDescrParam1
                atmTrafficDescrParam2
                atmTrafficDescrParam3
                atmTrafficDescrParam4
                atmTrafficDescrParam5."                       "The first parameter of the ATM traffic descriptor
            used according to the value of
            atmTrafficDescrType."                       �"The second parameter of the ATM traffic descriptor
            used according to the value of
            atmTrafficDescrType."                       "The third parameter of the ATM traffic descriptor
            used according to the value of
            atmTrafficDescrType."                       �"The fourth parameter of the ATM traffic descriptor
            used according to the value of
            atmTrafficDescrType."                       "The fifth parameter of the ATM traffic descriptor
            used according to the value of
            atmTrafficDescrType."                      �"The value of this object identifies the QoS Class.
            Four Service classes have been
            specified in the ATM Forum UNI Specification:
            Service Class A: Constant bit rate video and
                             Circuit emulation
            Service Class B: Variable bit rate video/audio
            Service Class C: Connection-oriented data
            Service Class D: Connectionless data
            Four QoS classes numbered 1, 2, 3, and 4 have
            been specified with the aim to support service
            classes A, B, C, and D respectively.
            An unspecified QoS Class numbered `0' is used
            for best effort traffic."                       t"This object is used to create
            a new row or modify or delete an
            existing row in this table."                       "The ATM service category."                      �"If set to 'true', this object indicates that the network
            is requested to treat data for this connection, in the
            given direction, as frames (e.g. AAL5 CPCS_PDU's) rather
            than as individual cells.  While the precise
            implementation is network-specific, this treatment may
            for example involve discarding entire frames during
            congestion, rather than a few cells from many frames."                      )"The Virtual Path Link (VPL) table.  A
            bi-directional VPL is modeled as one entry
            in this table. This table can be used for
            PVCs, SVCs and Soft PVCs.
            Entries are not present in this table for
            the VPIs used by entries in the atmVclTable."                      z"An entry in the VPL table.  This entry is
            used to model a bi-directional VPL.
            To create a VPL at an ATM interface,
            either of the following procedures are used:
            
            Negotiated VPL establishment
            
            (1) The management application creates
                a VPL entry in the atmVplTable
                by setting atmVplRowStatus to createAndWait(5).
                This may fail for the following reasons:
                - The selected VPI value is unavailable,
                - The selected VPI value is in use.
                Otherwise, the agent creates a row and
                reserves the VPI value on that port.
            
            (2) The manager selects an existing row(s) in the
                atmTrafficDescrParamTable,
                thereby, selecting a set of self-consistent
                ATM traffic parameters and the service category
                for receive and transmit directions of the VPL.
            
            (2a)If no suitable row(s) in the
                atmTrafficDescrParamTable exists,
                the manager must create a new row(s)
                in that table.
            
            (2b) The manager characterizes the VPL's traffic
                parameters through setting the
                atmVplReceiveTrafficDescrIndex and the
                atmVplTransmitTrafficDescrIndex values
                in the VPL table, which point to the rows
                containing desired ATM traffic parameter values
                in the atmTrafficDescrParamTable.  The agent
                will check the availability of resources and
                may refuse the request.
                If the transmit and receive service categories
                are inconsistent, the agent should refuse the
                request.
            
            (3) The manager activates the VPL by setting the
                the atmVplRowStatus to active(1).
                If this set is successful, the agent has
                reserved the resources to satisfy the requested
                traffic parameter values and the service category
                for that VPL.
            
            (4) If the VPL terminates a VPC in the ATM host
                or switch, the manager turns on the
                atmVplAdminStatus to up(1) to turn the VPL
                traffic flow on.  Otherwise, the
                atmVpCrossConnectTable  must be used
                to cross-connect the VPL to another VPL(s)
                in an ATM switch or network.
            
            One-Shot VPL Establishment
            
            A VPL may also be established in one step by a
            set-request with all necessary VPL parameter
            values and atmVplRowStatus set to createAndGo(4).
            
            In contrast to the negotiated VPL establishment
            which allows for detailed error checking
            (i.e., set errors are explicitly linked to
            particular resource acquisition failures),
            the one-shot VPL establishment
            performs the setup on one operation but
            does not have the advantage of step-wise
            error checking.
            
            VPL Retirement
            
            A VPL is released by setting atmVplRowStatus to
            destroy(6), and the agent may release all
            associated resources."                       "The VPI value of the VPL."                       �"This object is instanciated only for a VPL
            which terminates a VPC (i.e., one which is
            NOT cross-connected to other VPLs).
            Its value specifies the desired
            administrative state of the VPL."                       ,"The current operational status of the VPL."                       `"The value of sysUpTime at the time this
            VPL entered its current operational state."                       �"The value of this object identifies the row
            in the atmTrafficDescrParamTable which
            applies to the receive direction of the VPL."                       �"The value of this object identifies the row
            in the atmTrafficDescrParamTable which
            applies to the transmit direction of the VPL."                      �"This object is instantiated only for a VPL
            which is cross-connected to other VPLs
            that belong to the same VPC.  All such
            associated VPLs have the same value of this
            object, and all their cross-connections are
            identified either by entries that are indexed
            by the same value of atmVpCrossConnectIndex in
            the atmVpCrossConnectTable of this MIB module or by
            the same value of the cross-connect index in
            the cross-connect table for SVCs and Soft PVCs
            (defined in a separate MIB module).
            At no time should entries in these respective
            cross-connect tables exist simultaneously
            with the same cross-connect index value.
            The value of this object is initialized by the
            agent after the associated entries in the
            atmVpCrossConnectTable have been created."                      A"This object is used to create, delete
            or modify a row in this table.
            To create a new VCL, this object is
            initially set to 'createAndWait' or
            'createAndGo'.  This object should not be
            set to 'active' unless the following columnar
            objects have been set to their desired value
            in this row:
            atmVplReceiveTrafficDescrIndex and
            atmVplTransmitTrafficDescrIndex.
            The DESCRIPTION of atmVplEntry provides
            further guidance to row treatment in this table."                       "The connection topology type."                       "The use of call control."                       �"The Virtual Channel Link (VCL) table.  A
            bi-directional VCL is modeled as one entry
            in this table. This table can be used for
            PVCs, SVCs and Soft PVCs."                      �"An entry in the VCL table. This entry is
            used to model a bi-directional VCL.
            To create a VCL at an ATM interface,
            either of the following procedures are used:
            
            Negotiated VCL establishment

            (1) The management application creates
                a VCL entry in the atmVclTable
                by setting atmVclRowStatus to createAndWait(5).
                This may fail for the following reasons:
                - The selected VPI/VCI values are unavailable,
                - The selected VPI/VCI values are in use.
                Otherwise, the agent creates a row and
                reserves the VPI/VCI values on that port.
    
            (2) The manager selects an existing row(s) in the
                atmTrafficDescrParamTable,
                thereby, selecting a set of self-consistent
                ATM traffic parameters and the service category
                for receive and transmit directions of the VCL.
    
            (2a) If no suitable row(s) in the
                 atmTrafficDescrParamTable exists,
                 the manager must create a new row(s)
                 in that table.
    
            (2b) The manager characterizes the VCL's traffic
                parameters through setting the
                atmVclReceiveTrafficDescrIndex and the
                atmVclTransmitTrafficDescrIndex values
                in the VCL table, which point to the rows
                containing desired ATM traffic parameter values
                in the atmTrafficDescrParamTable.  The agent
                will check the availability of resources and
                may refuse the request.
                If the transmit and receive service categories
                are inconsistent, the agent should refuse the
                request.
    
            (3) The manager activates the VCL by setting the
                the atmVclRowStatus to active(1) (for
                requirements on this activation see the
                description of atmVclRowStatus).
                If this set is successful, the agent has
                reserved the resources to satisfy the requested
                traffic parameter values and the service category
                for that VCL.
            (4) If the VCL terminates a VCC in the ATM host
                or switch, the manager turns on the
                atmVclAdminStatus to up(1) to turn the VCL
                traffic flow on.  Otherwise, the
                atmVcCrossConnectTable  must be used
                to cross-connect the VCL to another VCL(s)
                in an ATM switch or network.

            One-Shot VCL Establishment
            
            A VCL may also be established in one step by a
            set-request with all necessary VCL parameter
            values and atmVclRowStatus set to createAndGo(4).
            
            In contrast to the negotiated VCL establishment
            which allows for detailed error checking
            (i.e., set errors are explicitly linked to
            particular resource acquisition failures),
            the one-shot VCL establishment
            performs the setup on one operation but
            does not have the advantage of step-wise
            error checking.
            VCL Retirement
    
            A VCL is released by setting atmVclRowStatus to
            destroy(6), and the agent may release all
            associated resources."                       "The VPI value of the VCL."                       "The VCI value of the VCL."                       �"This object is instanciated only for a VCL which
            terminates a VCC (i.e., one which is NOT
            cross-connected to other VCLs). Its value
            specifies the desired administrative state of
            the VCL."                       ,"The current operational status of the VCL."                       `"The value of sysUpTime at the time this VCL
            entered its current operational state."                       �"The value of this object identifies the row
            in the ATM Traffic Descriptor Table which
            applies to the receive direction of this VCL."                       �"The value of this object identifies the row
            of the ATM Traffic Descriptor Table which applies
            to the transmit direction of this VCL."                      �"An instance of this object only exists when the
            local VCL end-point is also the VCC end-point,
            and AAL is in use.
            The type of AAL used on this VCC.
            The AAL type includes AAL1, AAL2, AAL3/4,
            and AAL5. The other(4) may be user-defined
            AAL type.  The unknown type indicates that
            the AAL type cannot be determined."                      "An instance of this object only exists when the
            local VCL end-point is also the VCC end-point,
            and AAL5 is in use.
            The maximum AAL5 CPCS SDU size in octets that is
            supported on the transmit direction of this VCC."                      "An instance of this object only exists when the
            local VCL end-point is also the VCC end-point,
            and AAL5 is in use.
            The maximum AAL5 CPCS SDU size in octets that is
            supported on the receive direction of this VCC."                      �"An instance of this object only exists when the
            local VCL end-point is also the VCC end-point,
            and AAL5 is in use.
            The type of data encapsulation used over
            the AAL5 SSCS layer. The definitions reference
            RFC 1483 Multiprotocol Encapsulation
            over ATM AAL5 and to the ATM Forum
            LAN Emulation specification."                      �"This object is instantiated only for a VCL
            which is cross-connected to other VCLs
            that belong to the same VCC.  All such
            associated VCLs have the same value of this
            object, and all their cross-connections are
            identified either by entries that are indexed
            by the same value of atmVcCrossConnectIndex in
            the atmVcCrossConnectTable of this MIB module or by
            the same value of the cross-connect index in
            the cross-connect table for SVCs and Soft PVCs
            (defined in a separate MIB module).
            At no time should entries in these respective
            cross-connect tables exist simultaneously
            with the same cross-connect index value.
            The value of this object is initialized by the
            agent after the associated entries in the
            atmVcCrossConnectTable have been created."                      �"This object is used to create, delete or
            modify a row in this table.  To create
            a new VCL, this object is initially set
            to 'createAndWait' or 'createAndGo'.
            This object should not be
            set to 'active' unless the following columnar
            objects have been set to their desired value
            in this row:
            atmVclReceiveTrafficDescrIndex,
            atmVclTransmitTrafficDescrIndex.
            In addition, if the local VCL end-point
            is also the VCC end-point:
            atmVccAalType.
            In addition, for AAL5 connections only:
            atmVccAal5CpcsTransmitSduSize,
            atmVccAal5CpcsReceiveSduSize, and
            atmVccAal5EncapsType. (The existence
            of these objects imply the AAL connection type.).
            The DESCRIPTION of atmVclEntry provides
            further guidance to row treatment in this table."                       "The connection topology type."                       "The use of call control."                      �"This object contains an appropriate value to
            be used for atmVpCrossConnectIndex when creating
            entries in the atmVpCrossConnectTable.  The value
            0 indicates that no unassigned entries are
            available. To obtain the atmVpCrossConnectIndex
            value for a new entry, the manager issues a
            management protocol retrieval operation to obtain
            the current value of this object.  After each
            retrieval, the agent should modify the value to
            the next unassigned index.
            After a manager retrieves a value the agent will
            determine through its local policy when this index
            value will be made available for reuse."                       �"The ATM VP Cross Connect table for PVCs.
            An entry in this table models two
            cross-connected VPLs.
            Each VPL must have its atmConnKind set
            to pvc(1)."                      "An entry in the ATM VP Cross Connect table.
            This entry is used to model a bi-directional
            ATM VP cross-connect which cross-connects
            two VPLs.
            
            Step-wise Procedures to set up a VP Cross-connect
            
            Once the entries in the atmVplTable are created,
            the following procedures are used
            to cross-connect the VPLs together.
            
            (1) The manager obtains a unique
                atmVpCrossConnectIndex by reading the
                atmVpCrossConnectIndexNext object.
            
            (2) Next, the manager creates a set of one
                or more rows in the ATM VP Cross Connect
                Table, one for each cross-connection between
                two VPLs.  Each row is indexed by the ATM
                interface port numbers and VPI values of the
                two ends of that cross-connection.
                This set of rows specifies the topology of the
                VPC cross-connect and is identified by a single
                value of atmVpCrossConnectIndex.
    
            Negotiated VP Cross-Connect Establishment
    
            (2a) The manager creates a row in this table by
                 setting atmVpCrossConnectRowStatus to
                 createAndWait(5).  The agent checks the
                 requested topology and the mutual sanity of
                 the ATM traffic parameters and
                 service categories, i.e., the row creation
                 fails if:
                 - the requested topology is incompatible with
                   associated values of atmVplCastType,
                 - the requested topology is not supported
                   by the agent,
                 - the traffic/service category parameter values
                   associated with the requested row are
                   incompatible with those of already existing
                   rows for this VP cross-connect.
                 [For example, for setting up
                 a point-to-point VP cross-connect, the
                 ATM traffic parameters in the receive direction
                 of a VPL at the low end of the cross-connect
                 must equal to the traffic parameters in the
                 transmit direction of the other VPL at the
                 high end of the cross-connect,
                 otherwise, the row creation fails.]
                 The agent also checks for internal errors
                 in building the cross-connect.
                
                 The atmVpCrossConnectIndex values in the
                 corresponding atmVplTable rows are filled
                 in by the agent at this point.
    
            (2b) The manager promotes the row in the
                atmVpCrossConnectTable by setting
                atmVpCrossConnectRowStatus to active(1).  If
                this set is successful, the agent has reserved
                the resources specified by the ATM traffic
                parameter and Service category values
                for each direction of the VP cross-connect
                in an ATM switch or network.
    
            (3) The manager sets the
                atmVpCrossConnectAdminStatus to up(1) in all
                rows of this VP cross-connect to turn the
                traffic flow on.
    
    
            One-Shot VP Cross-Connect Establishment
            
            A VP cross-connect may also be established in
            one step by a set-request with all necessary
            parameter values and atmVpCrossConnectRowStatus
            set to createAndGo(4).
            
            In contrast to the negotiated VP cross-connect
            establishment which allows for detailed error
            checking (i.e., set errors are explicitly linked
            to particular resource acquisition failures),
            the one-shot VP cross-connect establishment
            performs the setup on one operation but does not
            have the advantage of step-wise error checking.
            
            VP Cross-Connect Retirement
    
            A VP cross-connect identified by a particular
            value of atmVpCrossConnectIndex is released by:
    
            (1) Setting atmVpCrossConnectRowStatus of all
                rows identified by this value of
                atmVpCrossConnectIndex to destroy(6).
                The agent may release all
                associated resources, and the
                atmVpCrossConnectIndex values in the
                corresponding atmVplTable row are removed.
                Note that a situation when only a subset of
                the associated rows are deleted corresponds
                to a VP topology change.
    
            (2) After deletion of the appropriate
                atmVpCrossConnectEntries, the manager may
                set atmVplRowStatus to destroy(6) the
                associated VPLs.  The agent releases
                the resources and removes the associated
                rows in the atmVplTable.
            
            VP Cross-connect Reconfiguration
            
            At the discretion of the agent, a VP
            cross-connect may be reconfigured by
            adding and/or deleting leafs to/from
            the VP topology as per the VP cross-connect
            establishment/retirement procedures.
            Reconfiguration of traffic/service category parameter
            values requires release of the VP cross-connect
            before those parameter values may by changed
            for individual VPLs."                      "A unique value to identify this VP cross-connect.
            For each VPL associated with this cross-connect,
            the agent reports this cross-connect index value
            in the atmVplCrossConnectIdentifier attribute of
            the corresponding atmVplTable entries."                      "The ifIndex value of the ATM interface for
            this VP cross-connect. The term low implies
            that this ATM interface has the numerically lower
            ifIndex value than the other ATM interface
            identified in the same atmVpCrossConnectEntry."                       �"The VPI value at the ATM interface
            associated with the VP cross-connect that is
            identified by atmVpCrossConnectLowIfIndex."                      "The ifIndex value of the ATM interface for
            this VP cross-connect. The term high implies that
            this ATM interface has the numerically higher
            ifIndex value than the  other ATM interface
            identified in the same atmVpCrossConnectEntry."                       �"The VPI value at the ATM interface
            associated with the VP cross-connect that is
            identified by atmVpCrossConnectHighIfIndex."                       X"The desired administrative status of this
            bi-directional VP cross-connect."                       �"The operational status of the VP cross-connect
            in one direction; (i.e., from the low to
            high direction)."                       �"The operational status of the VP cross-connect
            in one direction; (i.e., from the high to
            low direction)."                       �"The value of sysUpTime at the time this
            VP cross-connect entered its current operational
            state in the low to high direction."                       �"The value of sysUpTime at the time this
            VP cross-connect entered its current operational
            in the high to low direction."                      �"The status of this entry in the
            atmVpCrossConnectTable.  This object is used to
            create a cross-connect for cross-connecting
            VPLs which are created using the atmVplTable
            or to change or delete an existing cross-connect.
            This object must be initially set
            to `createAndWait' or 'createAndGo'.
            To turn on a VP cross-connect,
            the atmVpCrossConnectAdminStatus
            is set to `up'."                      �"This object contains an appropriate value to
            be used for atmVcCrossConnectIndex when creating
            entries in the atmVcCrossConnectTable.  The value
            0 indicates that no unassigned entries are
            available. To obtain the atmVcCrossConnectIndex
            value for a new entry, the manager issues a
            management protocol retrieval operation to obtain
            the current value of this object.  After each
            retrieval, the agent should modify the value to
            the next unassigned index.
            After a manager retrieves a value the agent will
            determine through its local policy when this index
            value will be made available for reuse."                       �"The ATM VC Cross Connect table for PVCs.
            An entry in this table models two
            cross-connected VCLs.
            Each VCL must have its atmConnKind set
            to pvc(1)."                      "An entry in the ATM VC Cross Connect table.
            This entry is used to model a bi-directional ATM
            VC cross-connect cross-connecting two end points.
            
            Step-wise Procedures to set up a VC Cross-connect
            Once the entries in the atmVclTable are created,
            the following procedures are used
            to cross-connect the VCLs together to
            form a VCC segment.
    
            (1) The manager obtains a unique
                atmVcCrossConnectIndex by reading the
                atmVcCrossConnectIndexNext object.
    
            (2) Next, the manager creates a set of one
                or more rows in the ATM VC Cross Connect
                Table, one for each cross-connection between
                two VCLs.  Each row is indexed by the ATM
                interface port numbers and VPI/VCI values of
                the two ends of that cross-connection.
                This set of rows specifies the topology of the
                VCC cross-connect and is identified by a single
                value of atmVcCrossConnectIndex.
    
            Negotiated VC Cross-Connect Establishment
    
            (2a) The manager creates a row in this table by
                setting atmVcCrossConnectRowStatus to
                createAndWait(5).  The agent checks the
                requested topology and the mutual sanity of
                the ATM traffic parameters and
                service categories, i.e., the row creation
                fails if:
                - the requested topology is incompatible with
                 associated values of atmVclCastType,
                - the requested topology is not supported
                 by the agent,
                - the traffic/service category parameter values
                 associated with the requested row are
                 incompatible with those of already existing
                 rows for this VC cross-connect.
                [For example, for setting up
                a point-to-point VC cross-connect, the
                ATM traffic parameters in the receive direction
                of a VCL at the low end of the cross-connect
                must equal to the traffic parameters in the
                transmit direction of the other VCL at the
                high end of the cross-connect,
                otherwise, the row creation fails.]
                The agent also checks for internal errors
                in building the cross-connect.
                
                The atmVcCrossConnectIndex values in the
                corresponding atmVclTable rows are filled
                in by the agent at this point.
    
            (2b) The manager promotes the row in the
                atmVcCrossConnectTable by setting
                atmVcCrossConnectRowStatus to active(1).  If
                this set is successful, the agent has reserved
                the resources specified by the ATM traffic
                parameter and Service category values
                for each direction of the VC cross-connect
                in an ATM switch or network.
            
            (3) The manager sets the
                atmVcCrossConnectAdminStatus to up(1)
                in all rows of this VC cross-connect to
                turn the traffic flow on.
            
    
            One-Shot VC Cross-Connect Establishment
            
            A VC cross-connect may also be established in
            one step by a set-request with all necessary
            parameter values and atmVcCrossConnectRowStatus
            set to createAndGo(4).
            
            In contrast to the negotiated VC cross-connect
            establishment which allows for detailed error
            checking i.e., set errors are explicitly linked to
            particular resource acquisition failures), the
            one-shot VC cross-connect establishment
            performs the setup on one operation but does
            not have the advantage of step-wise error
            checking.
            
            VC Cross-Connect Retirement
            
            A VC cross-connect identified by a particular
            value of atmVcCrossConnectIndex is released by:
            
            (1) Setting atmVcCrossConnectRowStatus of all rows
                identified by this value of
                atmVcCrossConnectIndex to destroy(6).
                The agent may release all
                associated resources, and the
                atmVcCrossConnectIndex values in the
                corresponding atmVclTable row are removed.
                Note that a situation when only a subset of
                the associated rows are deleted corresponds
                to a VC topology change.
    
            (2) After deletion of the appropriate
                atmVcCrossConnectEntries, the manager may
                set atmVclRowStatus to destroy(6) the
                associated VCLs.  The agent releases
                the resources and removes the associated
                rows in the atmVclTable.
            
            VC Cross-Connect Reconfiguration
            
            At the discretion of the agent, a VC
            cross-connect may be reconfigured by
            adding and/or deleting leafs to/from
            the VC topology as per the VC cross-connect
            establishment/retirement procedures.
            Reconfiguration of traffic/service category parameter
            values requires release of the VC cross-connect
            before those parameter values may by changed
            for individual VCLs."                      "A unique value to identify this VC cross-connect.
            For each VCL associated with this cross-connect,
            the agent reports this cross-connect index value
            in the atmVclCrossConnectIdentifier attribute of
            the corresponding atmVclTable entries."                      "The ifIndex value of the ATM interface for this
            VC cross-connect. The term low implies
            that this ATM interface has the numerically lower
            ifIndex value than the other ATM interface
            identified in the same atmVcCrossConnectEntry."                       �"The VPI value at the ATM interface
            associated with the VC cross-connect that is
            identified by atmVcCrossConnectLowIfIndex."                       �"The VCI value at the ATM interface
            associated with this VC cross-connect that is
            identified by atmVcCrossConnectLowIfIndex."                      "The ifIndex value for the ATM interface for
            this VC cross-connect. The term high implies
            that this ATM interface has the numerically higher
            ifIndex value than the other ATM interface
            identified in the same atmVcCrossConnectEntry."                       �"The VPI value at the ATM interface
            associated with the VC cross-connect that is
            identified by atmVcCrossConnectHighIfIndex."                       �"The VCI value at the ATM interface
            associated with the VC cross-connect that is
            identified by atmVcCrossConnectHighIfIndex."                       X"The desired administrative status of this
            bi-directional VC cross-connect."                       �"The current operational status of the
            VC cross-connect in one direction; (i.e.,
            from the low to high direction)."                       �"The current operational status of the
            VC cross-connect in one direction; (i.e.,
            from the high to low direction)."                       �"The value of sysUpTime at the time this
            VC cross-connect entered its current
            operational state in low to high direction."                       �"The value of sysUpTime at the time this
            VC cross-connect entered its current
            operational state in high to low direction."                      �"The status of this entry in the
            atmVcCrossConnectTable.  This object is used to
            create a new cross-connect for cross-connecting
            VCLs which are created using the atmVclTable
            or to change or delete existing cross-connect.
            This object must be initially set to
            `createAndWait' or 'createAndGo'.
            To turn on a VC cross-connect,
            the atmVcCrossConnectAdminStatus
            is set to `up'."                       B"This table contains AAL5 VCC performance
            parameters."                       �"This list contains the AAL5 VCC
            performance parameters and is indexed
            by ifIndex values of AAL5 interfaces
            and the associated VPI/VCI values."                       W"The VPI value of the AAL5 VCC at the
            interface identified by the ifIndex."                       W"The VCI value of the AAL5 VCC at the
            interface identified by the ifIndex."                       �"The number of AAL5 CPCS PDUs received with
            CRC-32 errors on this AAL5 VCC at the
            interface associated with an AAL5 entity."                      }"The number of partially re-assembled AAL5
            CPCS PDUs which were discarded
            on this AAL5 VCC at the interface associated
            with an AAL5 entity because they
            were not fully re-assembled within the
            required time period.  If the re-assembly
            timer is not supported, then this object
            contains a zero value."                       �"The number of AAL5 CPCS PDUs discarded
            on this AAL5 VCC at the interface
            associated with an AAL5 entity because the
            AAL5 SDUs were too large."                      �"This object contains an appropriate value to
            be used for atmTrafficDescrParamIndex when
            creating entries in the
            atmTrafficDescrParamTable.
            The value 0 indicates that no unassigned
            entries are available. To obtain the
            atmTrafficDescrParamIndex value for a new
            entry, the manager issues a management
            protocol retrieval operation to obtain the
            current value of this object.  After each
            retrieval, the agent should modify the value
            to the next unassigned index.
            After a manager retrieves a value the agent will
            determine through its local policy when this index
            value will be made available for reuse."                               e"A collection of objects providing information
            about DS3 PLCP layer at an ATM interface."                 b"A collection of objects providing information
            about TC sublayer at an ATM interface."                 s"A collection of objects providing
            AAL5 configuration and performance statistics
            of a VCC."                 a"A collection of objects providing configuration
            information about an ATM interface."                 �"A collection of objects providing information
            about ATM traffic descriptor type and
            the associated parameters."                 �"A collection of objects providing information
            about a VPL at an ATM interface which
            terminates a VPC (i.e., one which is NOT
            cross-connected to other VPLs)."                 �"A collection of objects providing information
            about a VCL at an ATM interface
            which terminates a VCC (i.e., one which is
            NOT cross-connected to other VCLs)."                 y"A collection of objects providing
            information about the VPLs that
            are cross-connected together."                 �"A collection of objects providing
            information about a VP cross-connect
            for PVCs. These objects are not used
            for Soft PVCs or SVCs."                 y"A collection of objects providing
            information about the VCLs that
            are cross-connected together."                 �"A collection of objects providing
            information about a VC cross-connect
            for PVCs. These objects are not used
            for Soft PVCs or SVCs."                 `"A collection of objects providing configuration
           information about an ATM interface."                 �"A collection of objects providing information
            about ATM traffic descriptor type and
            the associated parameters."                 �"A collection of objects providing
            information about a VPL at an ATM interface
            which terminates a VPC
            (i.e., one which is NOT cross-connected
            to other VPLs)."                 �"A collection of objects providing information
            about a VCL at an ATM interface
            which terminates a VCC (i.e., one which is
            NOT cross-connected to other VCLs)."                 �"A collection of objects providing
            information about a VP cross-connect
            and the associated VPLs that are
            cross-connected together."                 �"A collection of objects providing
            information about a VC cross-connect
            and the associated VCLs that are
            cross-connected together."                     {"The compliance statement for SNMP entities
            including networks which have ATM and
            AAL5 interfaces."   "Write access is not required." "Write access is not required." �"Write access is not required.
            At the ATM UNI the maximum number of
            active VPI bits configured for use ranges
            from 0 to 8 only.
            Implementations may support smaller ranges." W"Write access is not required.
            Implementations may support smaller ranges." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." �"This object is only required for systems
            that support the creation of entries in
            the atmTrafficDescrParamTable." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
            of the six enumerated values for the
            RowStatus textual convention need be
            supported, specifically: active(1)." "Write access is not required." s"This group is mandatory only for those
            ATM interfaces which implement the
            DS3 PLCP layer." p"This group is mandatory only for those
            ATM interfaces which implement the
            TC Sublayer." �"This group is mandatory only for those
            ATM interfaces which implement ATM
            VPLs that terminate VPCs (i.e., ones which
            are NOT cross-connected to other VPLs)." �"This group is mandatory only for those
            ATM interfaces which implement ATM
            VPLs that are not associated with VCLs
            and are cross-connected to other VPLs
            for VPCs."N"This group is mandatory only for those
            ATM interfaces which implement ATM
            VPLs that are not associated with VCLs
            and are cross-connected to other VPLs
            for permanent VPCs (i.e., PVCs).
            This group is not used to crossconnect
            a PVC with an SVC to form a Soft PVC." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
            of the six enumerated values for the
            RowStatus textual convention need be
            supported, specifically: active(1)." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
            of the six enumerated values for the
            RowStatus textual convention need be
            supported, specifically: active(1)." �"This group is mandatory only for those
            ATM interfaces which implement ATM
            VCLs that terminate VCCs (i.e., ones which
            are NOT cross-connected to other VCLs)." �"This group is mandatory only for those
            ATM interfaces which implement ATM
            VCLs that are cross-connected to other VCLs
            for VCCs."!"This group is mandatory only for those
            ATM interfaces which implement ATM
            VCLs that are cross-connected to other
            VCLs for permanent VCCs (i.e., PVCs).
            This group is not used to crossconnect
            a PVC with an SVC to form a Soft PVC." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
            of the six enumerated values for the
            RowStatus textual convention need be
            supported, specifically: active(1)." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
            of the six enumerated values for the
            RowStatus textual convention need be
            supported, specifically: active(1)." L"This group is mandatory for the
            AAL5 virtual connections only." "Write access is not required." "Write access is not required." "Write access is not required."             u"The compliance statement for SNMP entities
         including networks which have ATM and
         AAL5 interfaces."   "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
           of the six enumerated values for the
           RowStatus textual convention need be
           supported, specifically: active(1)." q"This group is mandatory only for those
           ATM interfaces which implement the
           DS3 PLCP layer." n"This group is mandatory only for those
           ATM interfaces which implement the
           TC Sublayer." �"This group is mandatory only for those
           ATM interfaces which implement ATM
           VPLs that terminate VPCs (i.e., ones which
           are NOT cross-connected to other VPLs)." �"This group is mandatory only for those
           ATM interfaces which implement ATM
           VPLs that are not associated with VCLs
           and are cross-connected to other VPLs." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
           of the six enumerated values for the
           RowStatus textual convention need be
           supported, specifically: active(1)." "Write access is not required." �"Write access is not required, and only one
           of the six enumerated values for the
           RowStatus textual convention need be
           supported, specifically: active(1)." �"This group is mandatory only for those
           ATM interfaces which implement ATM
           VCLs that terminate VCCs (i.e., ones which
           are NOT cross-connected to other VCLs)." �"This group is mandatory only for those
           ATM interfaces which implement ATM
           VCLs that are cross-connected to
           other VCLs." "Write access is not required." "Write access is not required." "Write access is not required." "Write access is not required." �"Write access is not required, and only one
           of the six enumerated values for the
           RowStatus textual convention need be
           supported, specifically: active(1)." "Write access is not required." �"Write access is not required, and only one
           of the six enumerated values for the
           RowStatus textual convention need be
           supported, specifically: active(1)." K"This group is mandatory for the
           AAL5 virtual connections only." "Write access is not required." "Write access is not required." "Write access is not required."                    