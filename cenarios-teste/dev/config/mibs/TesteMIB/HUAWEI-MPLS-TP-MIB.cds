�-- ==================================================================
-- Copyright (C) 2010 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description:   This MIB is used for defining the HUAWEI private   
--                extended Multiprotocol Label Switching (MPLS) MIB 
--                object. All MIB objects are used to describe private
--                managed objects and trap definitions for MPLS.
-- Reference:
-- Version: V1.00
-- ==================================================================
-- ==================================================================
-- 
-- Varibles and types be imported
-- 
-- ==================================================================
    "This MIB is used for defining the HUAWEI private   
                 extended Transport Profile of Multiprotocol Label Switching (MPLS-TP) MIB
                 object. All MIB objects are used to describe private
                 managed objects and trap definitions for MPLS-TP.""Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201203201000Z" "V1.00,Initial LSPM IETFTP MIB"                      �"A tp-tunnel needs to be uniquely identified across  
                 an MPLS-TP network. Indexes hwMplsTpTunnelIngressIndex, 
                 hwMplsTpTunnelIngressLSRId, hwMplsTpIngressGlobalId, 
                 hwMplsTpTunnelEgressIndex, hwMplsTpTunnelEgressLSRId and 
                 hwMplsTpEgressGlobalId uniquely identifies a 
                 tunnel across an MPLS-TP network.                                       
                 The indexes of this table are hwMplsTpTunnelIngressIndex, 
                 hwMplsTpTunnelIngressLSRId, hwMplsTpIngressGlobalId, 
                 hwMplsTpTunnelEgressIndex, hwMplsTpTunnelEgressLSRId and 
                 hwMplsTpEgressGlobalId."                      �"A tp-tunnel needs to be uniquely identified across  
                 an MPLS-TP network. Indexes hwMplsTpTunnelIngressIndex, 
                 hwMplsTpTunnelIngressLSRId, hwMplsTpIngressGlobalId, 
                 hwMplsTpTunnelEgressIndex, hwMplsTpTunnelEgressLSRId and 
                 hwMplsTpEgressGlobalId uniquely identifies a 
                 tunnel across an MPLS-TP network.                                       
                 The indexes of this entry are hwMplsTpTunnelIngressIndex, 
                 hwMplsTpTunnelIngressLSRId, hwMplsTpIngressGlobalId, 
                 hwMplsTpTunnelEgressIndex, hwMplsTpTunnelEgressLSRId and 
                 hwMplsTpEgressGlobalId." i"1. RFC 2863 - The Interfaces Group MIB, McCloghrie,
                K., and F. Kastenholtz, June 2000 "                    "Identity of the ingress LSR associated with this
            tunnel instance. This value SHOULD be equal to the Tunnel
            Sender Address in the Sender Template object and MAY
            be equal to the Extended Tunnel Id field in the
            SESSION object."                       Y"Identity of the ingress LSR associated with this
                 tp-tunnel instance. "                      l"The GlobalId is defined to uniquely identify an Ingress LSR 
                operator.This Value idefines a globally unique Attachment Interface 
                Identifier (AII). That AII is composed of three parts: a 
                Global_ID that uniquely identifies an operator, a prefix, 
                and, finally, an attachment circuit identifier."                       T"Identity of the egress LSR associated with this
                 tunnel instance."                       T"Identity of the egress LSR associated with this
                 tunnel instance."                      l"The GlobalId is defined to uniquely identify an Ingress LSR 
                operator.This Value idefines a globally unique Attachment Interface 
                Identifier (AII). That AII is composed of three parts: a 
                Global_ID that uniquely identifies an operator, a prefix, 
                and, finally, an attachment circuit identifier."                       d"Indicates the tp-tunnel interface name. The object is 
                only valid at the ingress."                      �"Indicates the management status of this 
                tunnel.Reference to MPLS-TE-STD-MIB.
                Options:
                1. up(1)      -indicates the management status of this tunnel is up.
                2. down(2)    -indicates the management status of this tunnel is down.
                3. testing(3) -indicates the tunnel is used in some test mode.         
                "                      v"Indicates the actual operational status of this tunnel, 
                which is but not limited to the status of this tunnel of
                a certain period.Reference to MPLS-TE-STD-MIB.
                Options:
                1. up(1)             -indicates that the operational status of this tunnel is up.          
                2. down(2)           -indicates that the operational status of this tunnel is down.
                3. testing(3)        -indicates that the tunnel is used in some test mode.
                4. unknown(4)        -indicates the invalid value.
                5. dormant(5)        -indicates that the status can not be determined.
                6. notPresent(6)     -indicates that some component is missing
                7. lowerLayerDown(7) -indicates the Down state due to the state of lower layer interfaces.
                "                       1"A table of all TP lsps seen by a given sys-tem."                       �"An entry in this table represents information
                 on a single TP LSP which is represented by
                 a session's index triple (hwMplsTpTunnelIngressInstance,
                 hwMplsTpTunnelEgressInstance, hwMplsTpLspType)." i"1. RFC 2863 - The Interfaces Group MIB, McCloghrie,
                K., and F. Kastenholtz, June 2000 "                     t"Uniquely identifies a particular instance of a
                 tunnel between a pair of ingress and egress LSRs."                       t"Uniquely identifies a particular instance of a
                 tunnel between a pair of egress and ingress LSRs."                      *"The type of LSP connection.
                Options:
                1. protection(1)             -indicates that the lsp type of this tunnel is protection lsp.          
                2. working(2)                -indicates that the lsp type of this tunnel is working lsp.
                "                                      |"This notification is generated when a
                 mplsTpTunnelOperStatus object for one of the
                 configured tunnels is about to leave the down state
                 and transition into some other state (but not into
                 the notPresent state).  This other state is
                 indicated by the included value of mplsTpTunnelOperStatus."                m"This notification is generated when a
                 mplsTpTunnelOperStatus object for one of the
                 configured tunnels is about to enter the down state
                 from some other state (but not from the notPresent
                 state).  This other state is indicated by the
                 included value of mplsTpTunnelOperStatus."                 Y"This object is used to indicate that data switching from protection Lsp to Working Lsp."                 Y"This object is used to indicate that data switching from protection Lsp to Working Lsp."                     J" This object indicates that the link recovers from a connectivity fault."                 G" This object is used to indicates the connectivity fault of the link."                 E" This object indicates that the link recovers from a remote defect."                 B" This object is used to indicates the remote defect of the link."                 R"This object indicates that the link recovers from an misconnection encap defect."                 Q"This object indicates that the link receivs from an misconnection encap defect."                 X"This object indicates that the link recovers from an misconnection discription defect."                 W"This object indicates that the link receivs from an misconnection discription defect."                 N"This object indicates that the link recovers from an unexpect MEG-ID defect."                 C"This object indicates the link receivs an unexpect MEG-ID defect."                 Q"This object indicates that the link recovers from an Misconnection SEC defect ."                 O"This object indicates that the link receivs from an Misconnection SEC defect."                         "Description."   +"Indicate the atrributes of the TP tunnel."                 +"Indicate the atrributes of the TP tunnel."                 !"Indicate the notification type."                                