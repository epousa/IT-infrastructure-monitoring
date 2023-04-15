�-- ==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI Private PPP Protocol MIB
-- Reference:
-- Version: V2.04
-- History:
-- ==================================================================
-- ==================================================================
-- 
-- Variables and types be imported
-- 
-- ==================================================================
                     '"Modify the description at 2017-08-17.""Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China 
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                " "201708171705Z" "201602011705Z" "201506291705Z" "201301291734Z" @"Modify the value of hwPppOsicp and hwPppMplscp  at 2016-02-01." z"This MIB is mainly used to configure  PPP , PPP MRU negotiation, MP binding with Mp-Group, and PAP/Chap authentication ." U"Modify length of hwPppAuthenticateChapPw and hwPppAuthenticatePapPw  at 2015-06-29." "V1.0-V1.1."       -- June 29, 2015 at 17:05 GMT
           Z"This table is used to configure PPP , PPP MRU negotiation, and MP binding with MP-Group."                       Z"This table is used to configure PPP , PPP MRU negotiation, and MP binding with MP-Group."                       ,"This object indicates the interface index."                       4"This object indicates the mode of MRU negotiation."                       ,"This object indicates the MP-Group  index."                       ;"This table is used to configure PAP/CHAP authentication ."                       ;"This table is used to configure PAP/CHAP authentication ."                       7"This object indicates the mode of the authentication."                       <"This object indicates the username of CHAP authentication."                       4"This object indicates the encryption type of CHAP."                       <"This object indicates the password of CHAP authentication."                       <"This object indicates the username of PAP authentication.."                       3"This object indicates the encryption type of PAP."                       ;"This object indicates the password of PAP authentication."                          �"
                  physicalLinkDown,
                  receivedConfReqPacket,
                  receivedConfAckPacket,
                  receivedNakPacket,
                  receivedTermReqPacket,
                  receivedTermAckPacket,
                  receivedCodeRejPacket,
                  receivedProtoRejPacket,
                  chapAuthenticationFailed,
                  papAuthenticationFailed,
                  keepaliveOutOfTime,
                  adminDown,
                  adminUp,
                  peerNoReply,
                  resultCannotBeAccepted,
                  peerIpAddrInvalid
             "                       �"
                  ipcp,
                  mplscp,
                  osicp,
                  ip6cp,
                  ccp,
                  ipxcp
             "                       4"This table is used to configure the PPP Ncp type ."                       3"This table is used to configure the PPP Ncp type."                       6"Indicates the type of ppp network protocol of osicp."                       7"Indicates the type of ppp network protocol of mplscp."                           %"The interface Loopback is detected."                 +"The interface is recovered from Loopback."                 �"The PPP LCP negotiation failed. Send this trap when LCP protocol negotiation failed.           
                1.ifName: interface name.
                2.hwPppNegotiationFailReason: the reason of LCP protocol negotiation failure."                 M"The PPP LCP negotiation resumed.
                1.ifName: interface name."                "The PPP NCP negotiation failed. Send this trap when NCP protocol negotiation failed.
                1.ifName: interface name.
                2.hwPppNcpName: NCP name.
                3.hwPppNegotiationFailReason: the reason of NCP protocol negotiation failure."                 x"The PPP NCP negotiation resumed.
                1.ifName: interface name.
                2.hwPppNcpName: NCP name."                 i"The MP-group negotiation fails because the number of bundled links is smaller than its lower threshold."                 o"The MP-group negotiation is restored because the number of bundled links is greater than its lower threshold."                         W"The compliance statement for systems supporting 
                the HUAWEI-PPP-MIB."                   0"This object indicates the PPP attribute group."                 5"This object indicates the PPP authentication group."                 +"This object indicates the PPP Trap group."                     2"This object indicates the PPP Trap object group."                            