�-- =================================================================
-- Copyright (C) 2017 by HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description:HUAWEI DHCP SNOOPING MIB
-- Reference:
-- Version: V2.06
-- History:
--    wangcheng 60005987 initial    16/02/2006
--  hexiaoqin 60020960 modified   25/12/2006
--      wangcheng 64651    modified   1/3/2007  
--      modified by huangjun 2009-12-08
--      modified by xiazhaolin 2013-06-19
--      modified by huangxiaomin 221241 2014/01/27
--      modified by caojingyun 00273809 2014/07/18
--      modified by liangyun 00353956 2016/10/11
--      modified by liangyun 00353956 2016/10/28 
-- =================================================================
   �" 
                The VLAN mode of DHCP  packets matched in the snooping bind table.
                PVLAN(1),
                CVLAN(2),
                all(3)
                "               t" The action of specific color packet.
                  discard (1)
                  pass (2)
                "               x"A 12-bit VLAN ID used in the VLAN Tag header.
                 When the value is 0, it means do not belong to a VLAN."                                                                 '"Change the DHCP Snooping Conformance." �"Huawei Industrial Base  Bantian, Longgang   Shenzhen 518129   People's Republic of China   Website: http://www.huawei.com   Email: support@huawei.com " "201708170000Z" "201610280000Z" "201610110000Z" "201407180000Z" "201401270000Z" "201306191800Z" "200609161800Z" 1"Modify the description of hwDhcpSnpChaddrAlarm." '"Change the DHCP Snooping Conformance." 4"This MIB describes objects used for DHCP Snooping." 4"This MIB describes objects used for DHCP Snooping." /"This revision adds MIB trap of bridge domain.""This MIB describes objects used for DHCP Snooping,including
            configuring snooping,creating snooping bind table and collecting
            false packets' statistic information. When the system is attacked,
            some traps will be given." *"The initial revision of this MIB module."        -- Aug 17th, 2017 at 16:47 GMT
           �"The Global Snooping. Enable this before you want to enable
             the port,vlan,other interfaces snooping,default is disable. "                       K"Whether to check the rate of DHCP packets received,default is disabling. "                       9"The area of Dhcp packets received rate,default is 100. "                       �"The threshold of the DHCP packets rate Alarm. When the actual rate
             beyond the maximum rate configured and reach this threshold once, 
             there will be a notification can be sent at the same time,default is 100. "                       �"Whether to send the DHCP packets rate alarm when the actual rate beyond
             the maximum rate configured and reach the rate threshold,default is disabling. "                       �"How to deal with the ARP packets that do not match the DHCP snooping 
             bind table in global view,default is forward. "                       �"How to deal with the Ip packets that do not match the DHCP snooping 
             bind table in global view,default is forward. "                       �"Auto save file name. Make sure the disk name have been given, and the file
             must be named with '.tbl' postfixally. "                       ="Whether to save snooping bind table,default is disabling . "                       7"DHCP snooping global threshold,default is disabling. "                       2"DHCP packets that discarded for the rate limit. "                       )"The DHCP snooping configuration table. "                       /"An entry in the snooping configuration table."                       "The interface index."                       :" The VLAN-ID or other identifier referring to this VLAN."                       " The VSI ID."                       5"Whether to enable snooping on this interface/VLAN. "                       �"This interface/VLAN is trusted or distrusted. 
                 When enabled the snooping, it turns to distrusted as default until be changed."                       ."Whether to insert Option82 to DHCP packets. "                       3"Whether to rebuild the Option82 in DHCP packets. "                       \"Whether to enable check Chaddr in DHCP packets with source Mac-address in Ethernet frame. "                       �"The threshold of Chaddr check alarm. A trap can be sent when the chaddr-false DHCP 
                 packets count beyond it."                       D"Whether to send chaddr trap when its' count beyond the threshold. "                       D"Whether to enable check ARP packets with the snooping bind table. "                       t"How to deal with the ARP packets that do not match the DHCP snooping 
             bind table in port/VLAN view. "                       �"The threshold of ARP check alarm. A trap can be sent when the false ARP 
                 packets discarded count beyond it. "                       @"Whether to send Arp trap when its count beyond the threshold. "                       C"Whether to enable check Ip packets with the snooping bind table. "                       s"How to deal with the Ip packets that do not match the DHCP snooping 
             bind table in port/VLAN view. "                       t"The threshold of IP check alarm. A trap can be sent when the false IP 
                 packets count beyond it. "                       ?"Whether to send IP trap when its count beyond the threshold. "                       �"The threshold of DHCP reply packets check alarm. A trap can be sent when the DHCP 
                 reply packets count on untrusted interface/VLAN beyond it. "                       P"Whether to send distrust DHCP reply trap when its count beyond the threshold. "                       F"Whether to check DHCP request packets with the snooping bind table. "                       U"The threshold of DHCP request packets checking alarm with the snooping bind table. "                       K"Whether to send the snooping bind table alarm when beyond its threshold. "                       �" Setting the VLAN mode of the dhcp packets matched in the bind table.
            PVLAN(1),
            CVLAN(2),
            all(3)
            "                       `"Check items of Dynamic DHCP snooping binding table by IP address or Mac-address or interface. "                       D"MaxUserNumber: the limitation of the user number on the interface."                       y"The threshold of user-number limitation. A trap can be sent when the current binding-items
                 exceed it."                       K"Whether to send trap when the binding item number exceeds the threshold. "                       ."The snooping configuration table row status."                       G"Whether to limit the rate of DHCP packets received on the interface. "                       ;"The area of DHCP packets received rate on the interface. "                       �"The threshold of the DHCP packets rate Alarm on the interface. When the actual rate
             beyond the maximum rate configured and reach this threshold once, 
             there will be a notification can be sent at the same time. "                       �"Whether to send the DHCP packets rate alarm when the actual rate beyond
             the maximum rate configured and reach the rate threshold on the interface. "                       0"Specify the remote ID in the Option 82 field. "                       0"Specify the circuit ID in the Option 82 field."                      &"The snooping bind table.You must give out 
                (1)one of the interface index, VLANID and VSIID at least 
                (2)the Mac-address,ip-address,static type
                if you want to create a static bind row of the table,
                dynamic can not be created."                       &"An entry in the snooping bind table."                       ""Index: the IP of the bind table."                       &"Index: the P-VLAN of the bind table."                       &"Index: the C-VLAN of the bind table."                       %"Index: the VRFID of the bind table."                       #"Index: the VSI of the bind table."                       /"The description of the interfaces that bound."                       "The PVLAN Id."                       "The CVLAN Id."                       "The VRFID for L3VPN."                       "The VSI for L2VPN."                       �"Mac-address bind. Value of hwDhcpSnpBindMac is optional, if you did not specify 
                     hwDhcpSnpBindMac any value when you created, invalid value 0 is returned after 
                     you perform Get operation of hwDhcpSnpBindMac."                       "Ip-address bind."                       *"The bind status:dynamic(1) or static(2)."                       /"The time of the dynamic bind lease to be end."                       %"The snooping bind table row status."                       0"The false packets statistic information table."                       E"An entry in the snooping false packets statistic information table."                       $"The description of the interfaces."                       "The VLAN Id."                       �"This object indicates that the number of received DHCP packets in which the source MAC address carried in the CHADDR field is incorrect exceeds the configured threshold. An attacker may attack a target by continuously changing its MAC address."                       ;"The false ARP packets match in snooping bind table count."                       >"The false IP packets do not match snooping bind table count."                       @"The DHCP request packets do not match the snooping bind table."                       /"The distrusted port DHCP reply packets count."                       "The VSI for L2VPN."                       ,"The number of current binding-table items."                       5"The limitation of the user number on the interface."                       C"DHCP packets that discarded for the rate limit on the interface. "                       �" The DHCP Snooping CAR table for control of the traffic. The CAR is based on IP and Mac, but configured with interface and VLAN."                       *"An entry in the DHCP Snooping CAR table."                       =" Whether to apply CAR on the traffic of specific IP and Mac"                       &"Committed infomation rate.Unit:kbps."                       ""Peak information rate.Unit:kbps."                        "Committed burst size.Unit:Byte"                       "Peak burst size.Unit:Byte"                       I"Yellow action:
                 pass (1)
                 discard (2)"                       F"Red action:
                 pass (1)
                 discard (2)"                       )"The DHCP Snooping CAR table row status."                       ."The format type of Option82,default is hex. "                       3"The format mode of Option82,default is extended. "                       "Option82 global remote ID. "                       G"Config Option82 global remote ID as system name,default is disabled. "                       "Option82 global circuit ID."                       ."A table about the packet format of option82."                       /"An entry about the packet format of option82."                       " The option of the option82"                       "The format of the option82"                       <"The content of the option when the format is user defined."                       !"The snooping static bind table."                       -"An entry in the snooping static bind table."                       ""Index: the IP of the bind table."                       #"Index: the MAC of the bind table."                       &"Index: the P-VLAN of the bind table."                       &"Index: the C-VLAN of the bind table."                       /"Index: the interface index of the bind table."                       ,"The static snooping bind table row status."                       �"This object indicates whether detection against the pseudo DHCP server is enabled.
                 The default value is disabled(2)."                       0"The false packets statistic information table."                       E"An entry in the snooping false packets statistic information table."                       "Bridge-domain ID."                       U"The DHCP request packets do not match the snooping bind table of the bridge domain."                       �"The false packets(chaddr in DHCP packets is not same with source Mac-address in
                   Ethernet frame) count of the bridge domain."                       P"The false ARP packets match in snooping bind table count of the bridge domain."                       S"The false IP packets do not match snooping bind table count of the bridge domain."                       D"The distrusted port DHCP reply packets count of the bridge domain."                       A"The number of current binding-table items of the bridge domain."                       9"The limitation of the user number of the bridge domain."                           M"This object indicates that the ARP packet does not match the binding table."                 3"Arp packets do not match the snooping bind table."                 3"Ip packets do not match the snooping bind table. "                 7"Untrusted ports have received the Dhcp reply packets."                 F"There are Dhcp request packets do not match the snooping bind table."                 1"The rate of Dhcp packets received is too large."                 W"The number of the binding items exceeds the threshold of user-limit on the interface."                 C"The number of DHCP user on the interface exceeds alarm threshold."                 G"The number of DHCP user on the interface descends to alarm threshold."                 >"The number of DHCP user on the vlan exceeds alarm threshold."                 B"The number of DHCP user on the vlan descends to alarm threshold."                 :"The number of DHCP global user  exceeds alarm threshold."                 ="The number of DHCP global user descends to alarm threshold."                 A"The number of ND user on the interface exceeds alarm threshold."                 E"The number of ND user on the interface descends to alarm threshold."                 7"The number of ND global user exceeds alarm threshold."                 ;"The number of ND global user descends to alarm threshold."                 ["There are Dhcp request packets do not match the snooping bind table on the bridge domain."                 `"CHADDR in Dhcp packets do not match source Mac-address in Ethernet frame on the bridge domain."                 H"Arp packets do not match the snooping bind table on the bridge domain."                 G"Ip packets do not match the snooping bind table on the bridge domain."                 L"Untrusted ports have received the Dhcp reply packets on the bridge domain."                 ["The number of the binding items exceeds the threshold of user-limit on the bridge domain."                 �"The number of the discarded DHCP packets in which the CHADDR field is inconsistent with the source MAC address descends to the threshold on the interface."                 y"The number of the discarded ARP packets that do not match the binding table descends to the threshold on the interface."                 x"The number of the discarded IP packets that do not match the binding table descends to the threshold on the interface."                 f"The number of the discarded DHCP reply packets on the untrusted interface descends to the threshold."                 �"The number of the discarded DHCP request packets that do not match the binding table descends to the threshold on the interface."                 ["The number of the binding items descends to the threshold of user-limit on the interface."                         $"The DHCPSNP's Configuration group."                 "The DHCPSNP's Bind group."                  "The DHCPSNP's Statistic group."                 #"The DHCPSNP's Notification group."                     6"The DHCPSNP's Statistic group on the bridge domain ."                     P"The compliance statement for systems supporting 
                this module."                          