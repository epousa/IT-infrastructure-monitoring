m-- =================================================================
-- Copyright (C) 2003 by HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: MPLS-LDP-GENERIC-STD-MIB
-- Reference:   This mib was extracted from RFC 3815
-- Version:     RFC 3815
-- History:
--              
-- =================================================================
                                                        �"Copyright (C) The Internet Society (year). The
            initial version of this MIB module was published
            in RFC 3815. For full legal notices see the RFC
            itself or see:
            http://www.ietf.org/copyrights/ianamib.html
    
            This MIB contains managed object definitions for
            configuring and monitoring the Multiprotocol Label
            Switching (MPLS), Label Distribution Protocol (LDP),
            utilizing ethernet as the Layer 2 media."�"Joan Cucchiara (jcucchiara@mindspring.com)
             Marconi Communications, Inc.
    
             Hans Sjostrand (hans@ipunplugged.com)
             ipUnplugged
    
             James V. Luciani (james_luciani@mindspring.com)
             Marconi Communications, Inc.
    
             Working Group Chairs:
             George Swallow,   email: swallow@cisco.com
             Loa Andersson,    email: loa@pi.se
    
             MPLS Working Group, email: mpls@uu.net
            " "200406030000Z" 0"Initial version published as part of RFC 3815."       -- June 6, 2004
              �"The MPLS LDP Entity Generic Label Range (LR)
            Table.
    
            The purpose of this table is to provide a mechanism
            for configurating a contiguous range of generic labels,
            or a 'label range' for LDP Entities.
    
            LDP Entities which use Generic Labels must have at least
            one entry in this table.  In other words, this table
            'extends' the mpldLdpEntityTable for Generic Labels."                      �"A row in the LDP Entity Generic Label
            Range (LR) Table.  One entry in this table contains
            information on a single range of labels
            represented by the configured Upper and Lower
            Bounds pairs.  NOTE: there is NO corresponding
            LDP message which relates to the information
            in this table, however, this table does provide
            a way for a user to 'reserve' a generic label
            range.
    
            NOTE:  The ranges for a specific LDP Entity
            are UNIQUE and non-overlapping.
    
            A row will not be created unless a unique and
            non-overlapping range is specified."                       ."The minimum label configured for this range."                       ."The maximum label configured for this range."                       �"This value of this object is perPlatform(1), then
           this means that the label space type is
           per platform.
    
           If this object is perInterface(2), then this
           means that the label space type is per Interface." G"RFC3036, LDP Specification, Section 2.2.1,
            Label Spaces."                    D"This value represents either the InterfaceIndex of
           the 'ifLayer' where these Generic Label would be created,
           or 0 (zero).  The value of zero means that the
           InterfaceIndex is not known.
    
           However, if the InterfaceIndex is known,
           then it must be represented by this value.
    
           If an InterfaceIndex becomes known, then the
           network management entity (e.g., SNMP agent) responsible
           for this object MUST change the value from 0 (zero) to the
           value of the InterfaceIndex."                       �"The storage type for this conceptual row.
            Conceptual rows having the value 'permanent(4)'
            need not allow write-access to any columnar
            objects in the row."                      "The status of this conceptual row.  All writable
             objects in this row may be modified at any time,
             however, as described in  detail in the section
             entitled, 'Changing Values After Session
             Establishment', and again described in the
             DESCRIPTION clause of the mplsLdpEntityAdminStatus object,
             if a session has been initiated with a Peer,
             changing objects in this table will
             wreak havoc with the session and interrupt traffic.
             To repeat again:  the recommended procedure is
             to set the mplsLdpEntityAdminStatus to
             down, thereby explicitly causing a
             session to be torn down. Then, change objects
             in this entry, then set the mplsLdpEntityAdminStatus
             to enable which enables a new session to be initiated.
    
             There must exist at least one entry in this
             table for every LDP Entity that has a
             generic label configured."                               f"Objects that apply to all MPLS LDP implementations
            using Generic Labels as the Layer 2."                     �"The Module is implemented with support for
            read-create and read-write.  In other words,
            both monitoring and configuration
            are available when using this MODULE-COMPLIANCE."   ="Support for createAndWait and notInService is not required."             �"The Module is implemented with support for
            read-only.  In other words, only monitoring
            is available by implementing this MODULE-COMPLIANCE."   "Write access is not required." "Write access is not required." "Write access is not required." f"Write access is not required, and active is the
            only status that needs to be supported."            