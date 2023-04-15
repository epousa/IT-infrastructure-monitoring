�-- ===========================================================================
-- Copyright (C)                                        . All rights reserved.
-- 
-- Description: PIM BSR MIB
-- Reference:   Module(PIM-BSR-MIB) Extracted from RFC5240.TXT,from 4575 to 33296.
-- Version:     V1.00
-- History: 
--          
-- ===========================================================================
                                                                             "The MIB module for management of the Bootstrap Router
               (BSR) mechanism for PIM routers.

               Copyright (C) The IETF Trust (2008).  This version
               of this MIB module is part of RFC 5240; see the RFC
               itself for full legal notices." v"Email: pim@ietf.org
                WG charter:
                http://www.ietf.org/html.charters/pim-charter.html" "200805280000Z" )"Initial version, published as RFC 5240."       -- 28 May 2008
          N"A pimBsrElectedBSRLostElection notification should be
               generated when current E-BSR lost election to a new
               Candidate-BSR.  Only an E-BSR should generate this
               notification.

               This notification is generated when
               pimBsrCandidateBSRElectedBSR becomes FALSE." "RFC 5059, section 3.1"              %"A pimBsrCandidateBSRWinElection notification should be
               generated when a C-BSR wins BSR Election.  Only an
               E-BSR should generate this notification.

               This notification is generated when
               pimBsrCandidateBSRElectedBSR becomes TRUE." "RFC 5059, section 3.1"                   �"The (conceptual) table listing the IP multicast group
               prefixes for which the local router is to advertise
               itself as a Candidate-RP."                       K"An entry (conceptual row) in the
                pimBsrCandidateRPTable."                       ,"The Inet address type of the Candidate-RP."                       �"The (unicast) address that will be advertised as a
               Candidate-RP.  The InetAddressType is given by the
               pimBsrCandidateRPAddressType object."                      �"The IP multicast group address that, when combined with
               the corresponding value of
               pimBsrCandidateRPGroupPrefixLength, identifies a group
               prefix for which the local router will advertise itself
               as a Candidate-RP.  The InetAddressType is given by the
               pimBsrCandidateRPAddressType object.

               This address object is only significant up to
               pimBsrCandidateRPGroupPrefixLength bits.  The
               remainder of the address bits are zero.  This is
               especially important for this field, which is part of
               the index of this entry.  Any non-zero bits would
               signify an entirely different entry."                      m"The multicast group address mask that, when combined
               with the corresponding value of
               pimBsrCandidateRPGroupAddress, identifies a group prefix
               for which the local router will advertise itself as a
               Candidate-RP.  The InetAddressType is given by the
               pimBsrCandidateRPAddressType object."                       �"If this object is set to TRUE, this group range is
               advertised with this RP as a BIDIR-PIM group range.  If
               it is set to FALSE, it is advertised as a PIM-SM group
               range."                       �"The time remaining before the local router next sends
               a Candidate-RP-Advertisement to the elected BSR for
               this zone."                       `"The priority for this Candidate-RP advertised in
                Candidate-RP-Advertisements." "RFC 5059, section 3.2"                     �"A Candidate-RP generates Candidate-RP-Advertisements
               periodically.  This object represents the time interval
               in seconds between two consecutive advertisements." "RFC 5059, sections 3.2 and 5"                     �"Holdtime for this Candidate-RP.  The amount of time (in
               seconds) this Candidate-RP entry is valid.

               This object's value can be zero only when this C-RP is
               shutting down." "RFC 5059, section 4.2"                    ~"The status of this row, by which new entries may be
               created, or old entries deleted from this table.

               This status object can be set to active(1) without
               setting any other columnar objects in this entry.

               All writable objects in this entry can be modified
               when the status of this entry is active(1)."                       �"The storage type for this row.  Rows having the value
               'permanent' need not allow write-access to any columnar
               objects in the row."                      �"The (conceptual) table listing BSR-specific information
               about PIM group mappings learned via C-RP advertisements
               or created locally using configurations.  This table is
               maintained only on the Elected BSR.

               An Elected BSR uses this table to create Bootstrap
               messages after applying a local policy to include some
               or all of the group mappings in this table."                       O"An entry (conceptual row) in the
                pimBsrElectedBSRRPSetTable."                       I"The Inet address type of the IP multicast group
               prefix."                      �"The IP multicast group address that, when combined
               with pimBsrElectedBSRGrpMappingGrpPrefixLen, gives the
               group prefix for this mapping.  The InetAddressType is
               given by the pimBsrElectedBSRGrpMappingAddrType object.

               This address object is only significant up to
               pimBsrElectedBSRGrpMappingGrpPrefixLen bits.  The
               remainder of the address bits are zero.  This is
               especially important for this field, which is part of
               the index of this entry.  Any non-zero bits would
               signify an entirely different entry."                      "The multicast group prefix length that, when combined
               with pimBsrElectedBSRGrpMappingGrpAddr, gives the group
               prefix for this mapping.  The InetAddressType is given by
               the pimBsrElectedBSRGrpMappingAddrType object.  If
               pimBsrElectedBSRGrpMappingAddrType is 'ipv4' or 'ipv4z',
               this object must be in the range 4..32.  If
               pimBsrElectedBSRGrpMappingAddrType is 'ipv6' or 'ipv6z',
               this object must be in the range 8..128."                       �"The IP address of the RP to be used for groups within
               this group prefix.  The InetAddressType is given by the
               pimBsrElectedBSRGrpMappingAddrType object."                       �"The priority for RP.  Numerically higher values for
               this object indicate lower priorities, with the value
               zero denoting the highest priority." "RFC 5059, section 4.1"                     "The holdtime for RP" "RFC 5059, section 4.1"                     �"The minimum time remaining before this entry will be
               aged out.  The value zero indicates that this entry will
               never be aged out."                       �"If this object is TRUE, this group range with this
               RP is a BIDIR-PIM group range.  If it is set to FALSE,
               it is a PIM-SM group range."                       �"The (conceptual) table containing Candidate-BSR
               configuration for the local router.  The table contains
               one row for each zone for which the local router is
               to advertise itself as a Candidate-BSR."                       K"An entry (conceptual row) in the
               pimBsrCandidateBSRTable."                      �"The zone index uniquely identifies the zone on a
               device to which this Candidate-BSR is attached.  There is
               one entry for each zone in ipMcastZoneTable.  Scope-level
               information for this zone can be extracted from
               ipMcastZoneTable in IP Multicast MIB [RFC5132].

               Zero is a special value used to request the default zone
               for a given scope.  Zero is not a valid value for this
               object."                       ("The address type of the Candidate-BSR."                       �"The (unicast) address that the local router will
               use to advertise itself as a Candidate-BSR.  The
               InetAddressType is given by the
               pimBsrCandidateBSRAddressType object."                       �"The priority value for the local router as a
               Candidate-BSR for this zone.  Numerically higher
               values for this object indicate higher priorities."                      r"The hash mask length (used in the RP hash function)
               that the local router will advertise in its Bootstrap
               messages for this zone.  This object defaults
               to 30 if pimBsrCandidateBSRAddressType is 'ipv4' or
               'ipv4z' , and defaults to 126 if
               pimBsrCandidateBSRAddressType is 'ipv6' or 'ipv6z'."                       L"Whether the local router is the elected BSR for this
               zone."                       �"The time remaining before the local router next
               originates a Bootstrap message for this zone.
               Value of this object is zero if
               pimBsrCandidateBSRElectedBSR is 'FALSE'."                      }"The status of this row, by which new entries may
               be created or old entries deleted from this table.

               This status object can be set to active(1) without
               setting any other columnar objects in this entry.

               All writable objects in this entry can be modified
               when the status of this entry is active(1)."                       �"The storage type for this row.  Rows having the value
               'permanent' need not allow write-access to any columnar
               objects in the row."                       �"The (conceptual) table containing information about
               elected BSRs.  The table contains one row for each
               zone for which there is an elected BSR."                       J"An entry (conceptual row) in the
                pimBsrElectedBSRTable."                      �"The zone index uniquely identifies the zone on a
               device to which this Elected BSR is attached.  There
               is one entry for each zone in ipMcastZoneTable.
               Scope-level information for this zone can be extracted
               from ipMcastZoneTable in IP Multicast MIB [RFC5132].

               Zero is a special value used to request the default zone
               for a given scope.  Zero is not a valid value for this
               object."                       &"The address type of the elected BSR."                       �"The (unicast) address of the elected BSR.  The
               InetAddressType is given by the
               pimBsrElectedBSRAddressType object."                       �"The priority value for the elected BSR for this address
               type.  Numerically higher values for this object indicate
               higher priorities."                       r"The hash mask length (used in the RP hash function)
               advertised by the elected BSR for this zone."                       h"The minimum time remaining before the elected BSR for
               this zone will be declared down."                               o"The compliance statement for PIM routers that implement
               the Bootstrap Router (BSR) mechanism."   "This group is optional."                 l"A collection of objects for managing the Bootstrap
               Router (BSR) mechanism for PIM routers."                 {"Objects providing additional diagnostics related to
               the Bootstrap Router (BSR) mechanism for PIM routers."                        