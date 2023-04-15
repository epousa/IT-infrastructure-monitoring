�-- ===========================================================================
-- Copyright (C) 1998-2005 by HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: Alarm MIB                  S
-- Reference:   Module(IANA-ITU-ALARM-TC-MIB) Extracted from RFC3877.TXT,from 77752 to 91819.
-- Version:      V1.00
-- History: 
--          
-- ===========================================================================
�"ITU Recommendation M.3100, 'Generic Network Information
            Model', 1995
         ITU Recommendation X.733, 'Information Technology - Open
            Systems Interconnection - System Management: Alarm
            Reporting Function', 1992
         ITU Recommendation X.736, 'Information Technology - Open
            Systems Interconnection - System Management: Security
            Alarm Reporting Function', 1992"�"ITU-T probable cause values.  Duplicate values defined in
         X.733 are appended with X733 to ensure syntactic uniqueness.
         Probable cause value 0 is reserved for special purposes.

         The Internet Assigned Number Authority (IANA) is responsible
         for the assignment of the enumerations in this TC.
         IANAItuProbableCause value of 0 is reserved for special
         purposes and MUST NOT be assigned.

         Values of IANAItuProbableCause in the range 1 to 1023 are
         reserved for causes that correspond to ITU-T probable cause.

         All other requests for new causes will be handled on a
         first-come, first served basis and will be assigned
         enumeration values starting with 1025.

         Request should  come in the form of well-formed
         SMI [RFC2578] for enumeration names that are unique and
         sufficiently descriptive.

         While some effort will be taken to ensure that new probable
         causes do not conceptually duplicate existing probable
         causes it is acknowledged that the existence of conceptual
         duplicates in the starting probable cause list is an known
         industry reality.

         To aid IANA in the administration of probable cause names
         and values, the OPS Area Director will appoint one or more
         experts to help review requests.

         See http://www.iana.org"             �"ITU Recommendation X.736, 'Information Technology - Open
            Systems Interconnection - System Management: Security
            Alarm Reporting Function', 1992"�"The ITU event Type values.

            The Internet Assigned Number Authority (IANA) is
            responsible for the assignment of the enumerations
            in this TC.

            Request should  come in the form of well-formed
            SMI [RFC2578] for enumeration names that are unique
            and sufficiently descriptive.

            See http://www.iana.org "                                        �"The MIB module defines the ITU Alarm
         textual convention for objects expected to require
         regular extension.

         Copyright (C) The Internet Society (2004).  The
         initial version of this MIB module was published
         in RFC 3877.  For full legal notices see the RFC
         itself.  Supplementary information may be available on:
         http://www.ietf.org/copyrights/ianamib.html"W"Postal:    Internet Assigned Numbers Authority
                     Internet Corporation for Assigned Names
                     and Numbers
                     4676 Admiralty Way, Suite 330
                     Marina del Rey, CA 90292-6601
                     USA

         Tel:    +1  310-823-9358
         E-Mail: iana@iana.org" "200409090000Z" )"Initial version, published as RFC 3877."       -- September 09, 2004
          