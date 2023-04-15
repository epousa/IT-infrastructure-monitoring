�-- ===========================================================================
-- Copyright(C) 2018 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: HUAWEI-SR-TRAP-MIB
-- Version: V1.00
-- History:
-- 			Created by s00900894 2018-02-05
-- Reference:   Module(HUAWEI-SR-TRAP-MIB) Extracted from RFCXXXX.TXT,from XXXX to XXXXX.Obsoletes: 1850
-- =====================================================================================================
    m"The MIB module to describe traps for the SR
             Version 2 Protocol.
			 
			Segment Routing (SR) as defined in [SR-ARCH] utilizes forwarding
			instructions called segments to direct packets through the network.
			Depending on the forwarding plane architecture in use, routing
			protocols advertise various identifiers which define the permissible
			values which can be used as segments, which values are assigned to
			specific prefixes, etc.  Where segments have global scope it is
			necessary to have non-conflicting assignments - but given that the
			advertisements may originate from multiple nodes the possibility
			exists that advertisements may be received which are either
			internally inconsistent or conflicting with advertisements originated
			by other nodes.  In such cases it is necessary to have consistent
			resolution of conflicts network-wide in order to avoid forwarding
			loops.
			
			This draft,draft-ietf-spring-conflict-resolution-05
			describes the Conflict detection and resolution.
			
			When conflict is detected user must be informed the same using the
			trap defined in this MIB." �"Huawei Industrial Base
			Bantian, Longgang
			Shenzhen 518129
			People's Republic of China
			Website: http://www.huawei.com
			Email: support@huawei.com" "201801210000Z" >"V1.00, 
                          1. Added the hwSrTrap MIB."       !-- January 21, 2018 00:00:00 EST
          �"A 4-octet string serving as a bit map for
             the trap events defined by the HUAWEI SR traps.  This
             object is used to enable and disable specific
             SR traps where a 1 in the bit field
             represents enabled.  The right-most bit (least
             significant) represents trap 0.

             This object is persistent and when written
             the entity SHOULD save the change to non-volatile
             storage."                       h"The process ID indicates the OSPF or ISIS process number. 
		   The value ranges from 1 to 4294967295."                       A"Conflicted Prefix sid Index. The value ranges from  0 to 65534."                       "Prefix Ip Address Mask."                       :"The Prefix Address configured in the Loopback Interface."                       �"The conflict alarm can be raised within process by OSPF or ISIS.
		  In case conflict between ISIS and OSPF or between different process, 
		  SEGR raises the alarm."                       >"Conflict type can be Prefix Sid conflict or Prefix conflict."                       6"Conflict state indicates the current conflict state."                           V"An hwSrPrefixSidConflict trap signifies that a prefix sid 
			 conflict is detected."                         E"These objects are required to control traps from HUAWEI SR systems."                 \"A grouping of OSPF trap events, as specified
             in NOTIFICATION-TYPE constructs."                         "The compliance statement."   C"This group is optional but recommended for all HUAWEI SR systems."             "The compliance statement."   N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications." N"This object is only required to be supplied within
           notifications."                        