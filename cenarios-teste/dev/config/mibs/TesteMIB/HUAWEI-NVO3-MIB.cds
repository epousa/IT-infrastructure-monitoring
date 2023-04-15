U-- ==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI NVO3 MIB
-- Reference:
-- Version: V1.05
-- History: V1.0 gaoyuan, 2014-07-02,publish
-- created 2014-7-2
-- ==================================================================
                     %"The MIB module for nvo3 management."
"Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   " "201706201408Z" "201701091408Z" "201612141408Z" "201606011408Z" "201512011408Z" "201407021655Z" 0"V1.05, The modify revision of this MIB module." 0"V1.04, The modify revision of this MIB module." 0"V1.03, The modify revision of this MIB module." 0"V1.02, The modify revision of this MIB module." 0"V1.01, The modify revision of this MIB module." 1"V1.00, The initial revision of this MIB module."       -- June 20, 2017 at 14:08GMT 
           "The Nvo3 nve table providing read/modify operations.
                The Nve entry is created and deleted associate with the nve type interface,  
                you need to create the nve type interface first, then you can get the nve entry and modify it's attribute.
                "                       "The entry of hwNvo3NveTable."                       ?"IfIndex of the nve type interface, the key  of the nve entry."                       H"The nve source address which is used as vxlan tunnel end point address"                       �"The Nvo3 vni peer table providing create/modify/delete operations. Vxlan use this table to send broadcast, multicast, and unknown unicast flood frames."                       %"The entry of hwNvo3NveVniPeerTable."                       9"The vni that to be specified a remote nve peer address."                       ""The vni remote nve peer address."                       "The row status."                       9"The Nvo3 vxlan tunnel table, providing read operations."                       #"The entry of hwNvo3VxlanTnlTable."                       ""The vxlan tunnel source address."                       ("The vxlan tunnel destionation address."                       "The vxlan tunnel status."                       >"The Nvo3 vxlan IPv6 tunnel table, providing read operations."                       #"The entry of hwNvo3VxlanTnlTable."                       !"The vxlan tunnel source address"                       '"The vxlan tunnel destionation address"                       "The vxlan tunnel status"                       F"The Nvo3 vni stats table providing traffic statistics about the VNI."                       #"The entry of hwNvo3VniStatsTable."                       9"The vni that to be specified a remote nve peer address."                       1"The rate of recieved bits per second about vni."                       -"The rate of sent bits per second about vni."                           �"The SNMP trap that is generated when an vxlan tunnle status change.
                When alarm is down trigger, hwNvo3VxlanTnlStatus is 1, when alarm is up trigger, hwNvo3VxlanTnlStatus is 2.
                "                 �"The SNMP trap that is generated when an vxlan tunnle status change.
                When alarm is down trigger, hwNvo3VxlanTnlStatus is 0, when alarm is up trigger, hwNvo3VxlanTnlStatus is 1.
                "                         !"The nvo3 management compliance."                   "The nve management group."                 "The nve management group."                 !"The  vxlan tunnel status group."                  "The  vxlan tunnel alarm group."                     &"The  vxlan IPv6 tunnel status group."                 %"The  vxlan IPv6 tunnel alarm group."                         1"A table of vxlan statistic display information."                        "vxlan statistic display Entry."                       
"Peer Ip."                       "Source Ip of vxlan tunnel."                       "VRF index."                       #"Received packets of vxlan tunnel."                       !"Received bytes of vxlan tunnel."                       &"Transmitted packets of vxlan tunnel."                       $"Transmitted bytes of vxlan tunnel."                           "The tunnelid of vxlan tunnel."                       "The vni value."                       "The vrf value."                       "The vr index."                           k"The VXLAN tunnel and VNI have been mapped to a VRF instance, and cannot be mapped to other VRF instances."                 N"The VXLAN tunnel and VNI are no longer mapped to more than one VRF instance."                 b"The VXLAN tunnel and VRF instance have been mapped to a VNI, and cannot be mapped to other VNIs."                 N"The VXLAN tunnel and VRF instance are no longer mapped to more than one VNI."                     �"The SNMP trap that is generated when an vxlan tunnle status change.
                When alarm is down trigger, hwNvo3VxlanIPv6TnlStatus is 1, when alarm is up trigger, hwNvo3VxlanIPv6TnlStatus is 2.
                "                 �"The SNMP trap that is generated when an vxlan tunnle status change.
                When alarm is down trigger, hwNvo3VxlanIPv6TnlStatus is 0, when alarm is up trigger, hwNvo3VxlanIPv6TnlStatus is 1.
                "                            