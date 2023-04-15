]-- ============================================================================
-- Copyright (C) 2014 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: The MIB object implements the management of the CLI and NE users.
-- Reference:  
-- Version: V1.40
-- ============================================================================
                                                     _"
            The MIB object implements the management of the CLI and NE users.
            "o"Huawei Industrial Base               
                      Bantian, Longgang                    
                      Shenzhen 518129                      
                      People's Republic of China           
                      Website: http://www.huawei.com       
                      Email: support@huawei.com            
                     " "201407030000Z" "201403110000Z" "201403060000Z" "201402260000Z" "201402210000Z" "201311140000Z" "201311110000Z" "201308100000Z" "201308080000Z" "201308080000Z" "201305270000Z" "201305040000Z" "201303070000Z" "201303070000Z" "201205300000Z" "201203080000Z" "201202100000Z" "201112150000Z" "201111300000Z" "201011090000Z" "201008250000Z" "201006170000Z" "201005200000Z" "201004140000Z" "201004070000Z" "201003030000Z" "200901290000Z" "200901260000Z" "200906200000Z" "200807310000Z" "200801260000Z" "200801090000Z" "200711140000Z" "200705280000Z" "200611270000Z"�"V1.40, 
                     1. modified 'MAX-ACCESS not-accessible' to 'MAX-ACCESS accessible-for-notify' of hwCliUserName.
                     2. removed all hyphens (-) from enumerated values of hwCliUserDeclarSwitch.
                     3. removed all hyphens (-) from enumerated values of hwUserLogMode.
                     4. delete node hwConfigLock.
                     5. added enumerate value omci(5) and ethoam(6) for hwCliClientType." ?"V1.39, 1. Added enumerate value ethoam(13) for hwUserLogMode." ;"V1.38, 1. Modified the description of hwCliSysUnlockType." :"V1.37, 1. Modified the description of hwCliUserPassword." T"V1.36, 1. Added enumerate value toolbox(11) and toolbox-ssh(12) for hwUserLogMode." 0"V1.35, 1. add trap node hwConfigLockStateTrap." �"V1.34, 1. Added enumerate value modem(9) and none(10) for hwUserLogMode. 
                    2. Modify access type of hwCliSysOldUserLevel." :"V1.33, 1. Modified the description of hwCliUserPassword." :"V1.32, 1. Modified the description of hwCliUserPassword." �"V1.31, 1. add trap node hwMngtUserModifyAuthTrap.
                            2. add hwCliSysOldUserLevel node for hwMngtUserAlarmTrapsVbOids" �"V1.30, 1. modify the max length of the hwCliUserPassword from 32 to 64. 
                     2. Modified the description of hwCliUserPassword." E"V1.29, 1. Added enumerated value ipdr(11) in hwSysManProtocolType. " ;"V1.28, 1. Modified the description of hwCliSysUnlockType." |"V1.27, 1. Added trap node hwMngtUserUnlockedTrap.
                     2. Added hwCliSysUnlockType node for hwCliSysPara." S"V1.26, 1. Added trap node hwUserPasswordFaultTrap and hwUserPasswordRestoreTrap. " �"V1.25, 1. Added enumerated value stelnet(10) in hwSysManProtocolType.
                            2. modify the max vale of the hwSNMPUserName from 34 to 32. " n"V1.24, 1. Modified the description of hwCliUserNameLastDays, hwCliUserPwdLastDays, hwSourceInterfaceNumber. " G"V1.23, 1. Added hwModemCallbackMngt node for modem callback function." :"V1.22, added enumerate value ssh(4) for hwCliClientType." G"V1.21, The description of this MIB is modified according to the tool." `"V1.20, modified the contact-info and the revision history. Modified the description of leaves.";"V1.19, 1. Modified and supplemented the description of the object.
                     2. Added hwUserLogMode node for DT requirements.
                     3. Added hwUserLogType node for trap node hwUserLogWillFullTrap.
                     4. Modified the OBJECTS of hwUserLogWillFullTrap as hwUserLogType." X"V1.18, implemented DT requirements and changed the syntax and semantics of SIMPLETEST." 1"V1.17, added CliConsole table hwCliConsolePara.""V1.16, modified the value of hwCliAuthenDefaultDomainName.
                    Changed the MAX-ACCESS of hwCliUserPwdLastDays from accessible-for-notify to read-only according to simpletest rules.
                    Changed the state of hwCliUserTimeout from current to obsolete." X"V1.15, implemented DT requirements and changed the syntax and semantics of SIMPLETEST." ^"V1.14, supported the definitions of standard trap nodes and associated trap parameter nodes." |"V1.13, cleared alarms and errors of MIB BROWSER.
                    Added MIB description according to new requirements." ."V1.12, added NMS user table hwSNMPUserTable." C"V1.11, modified description of the hwCliSysLoginModifyPwd object."�"V1.10,  1. Modified function description and creation & access constraints in hwCliUserParaTable.
                    2. Modified function description and creation & access constraints in hwCliClientTable.
                    3. Modified function description in hwCliUserProfileParaTable.
                    4. Modified function description in hwCliSysPara.
                    5. Modified function description in hwFirewallSwitchTable.
                    6. Modified function description in hwAccessIpTable.  
                    7. Modified function description in hwRefuseIpTable.  
                    8. Modified function description and constraints in hwCliSysCmdTable." N"V1.08, added objects for unblocking users, IP addresses and legal statement." 7"V1.07, added MIB object for locking system resources." ,"V1.02, completed Interface Specifications." #"V1.00, completed the first draft."               �"
                User parameter configuration table, which supports the functions of querying, adding, 
                deleting and modifying a user. The index of this table is hwCliUserName.
                "                       �" 
                User parameter configuration table, which supports the functions of querying, adding, 
                deleting and modifying a user. The index of this entry is hwCliUserName.
                "                      �"
                Name of the CLI user. The user name is case 
                insensitive and the user name consists of 6-15 characters.
                The minimum length of the name can be configured by user.
                The range of the valid characters of the user name is 
                0x21- 0x7e and the user name cannot be 'all', 'online', 
                'index', or 'security'.
                "                      1"
                Password of the CLI user.
                The user can directly modify the password of the CLI user and need not verify
                the original password of the CLI user. The user password consists of 16 characters,
                including at least one letter and one digit, and should be encrypted by MD5 or
                SCRYPT. The SCRYPT encryption mode is recommended. The user password is not reported 
                to the NMS and a null character string is returned when the user password is queried.
                "                      �"
                The levels of CLI users.
                Options: 
                1. common(1)        -indicates the common user. 
                2. operator(2)      -indicates the operator. 
                3. administrator(3) -indicates the administrator. 
                4. super(4)         -indicates the super administrator. 
                5. guest(5)         -indicates the guest user
                6. custom(6)        -indicates the custom user                
                The higher the user level is, the more rights the user has.
                The user level must be bound to the user when the user is added. 
                The super administrator cannot be added.
                "                      "
                The number of user login attempts in one time.
                The same user name can be used for login to the device repeatedly. 
                For example, when two users log in to the device with the same name,
                the number of times of re-login is two.
                This object is used to define the number of times of re-login. 
                When the number of times of re-login is changed to 0, 
                the user is forbidden to log in to the device.
                "                       �"
                Description of CLI user. 
                You can add the basic information about the user, 
                such as the email box, telephone number, or other contact information.
                "                      ?"
                Operation status of CLI user, the CLI user can be added, deleted and modified.
                The user level, number of times of re-login, user profile, available user password 
                and user description must be bound to the user when the user is added. 
                The online user cannot be deleted. 
                createAndGo(4) is supplied to create a new instance of a conceptual row.  
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.                
                "                       X"
                The name of user profile that CLI user belongs to.
                "                      2"
                The user can log in to the device through the following three modes.
                Options: 
                1. cli(1) -indicates CLI terminal. 
                2. oss(2) -indicates OSS terminal. 
                3. web(4) -indicates Web terminal.               
                "                      D"
                This object is not used any longer. Login timeout duration of the user. 
                If the CLI user performs no operation during a period, 
                the user automatically quits the system. 
                This object is used to query and set the login timeout duration.
                "                       �"
                Service life of the user name.
                The hwCliUserNameLastDays value of -1 indicates the username expired.
                "                       �"
                Service life of the user password. 
                The hwCliUserPwdLastDays value of -1 indicates the user password expired.
                "                      �"
                CLI online user information table, which can be used to 
                force an online user to go offline.
                The table cannot be created and deleted. 
                The table supports only the functions of querying the user 
                terminal status and forcing an online user to go offline.
                The index of this table is hwCliClientID.
                "                      �"
                CLI online user information table, which can be used to 
                force an online user to go offline.
                The table cannot be created and deleted. 
                The table supports only the functions of querying the user
                terminal status and forcing an online user to go offline.
                The index of this entry is hwCliClientID.
                "                       f"
                Client ID(1..255). Index object, this ID is allocated by device.
                "                       :"
                User name of client.
                "                      �"
                Type of client. The modes of login to the client are as follows:
                Options: 
                1. serial(1) -indicates serial port. 
                2. telnet(2) -indicates telnet. 
                3. proxy(3)  -indicates proxy.
                4. ssh(4)    -indicates ssh.
                5. omci(5)   -indicates omci.
                6. ethoam(6) -indicates ethoam.
                "                       ?"
                The IP address of client.
                "                       ?"
                The login time of client.
                "                      �"
                Admin status of client, can disconnect client. 
                Options:
                1. disconnect(1) -indicates the user who logs in to the system in the modes 
                                  except serial port mode can be forced to go offline when 
                                  the object value is set to disconnect(1).
                2. connect(-1)   -indicates the user is online.
                "                      R"
                This object is not used any longer.Idleness timeout duration of the online user. 
                When the online user is idle for a period longer than the preset time,
                the online user automatically quits the system.
                This object is used to set the timeout duration.
                "                           e"
                Unlock users manually. Enter the user name to unlock the user. 
                "                      d"
                The object specifies whether show the declaration after users login successfully.
                Options: 
                1. show(1)     -indicates that show the declaration after users login successfully.
                2. notShow(2) -indicates that does not show the declaration after users login successfully.
                "                       �"
                Unlock IP manually. Enter the IP address of the user to unlock the 
                user who uses the IP address to log in to the device.
                "                      �"
                The max number of simultaneous telnet sessions. 
                This object is used to set the maximum number of users 
                who can log in to the system through telnet at a time.
                If the current number of users is equal to the maximum number, 
                the rest users cannot log in to the system through telnet.
                "                      �"
                User profile management table, which is used to query, modify, add and delete the user profile.
                The user profile is a set of public user attributes, including the user name and password 
                validity period, permitted earliest time of login, and permitted latest time of login.
                The MIB supports the functions of querying and setting the values of the preceding parameters.
                A user needs to be created based on a user profile. In this case, the new user inherits the 
                preceding parameter values in the user profile. The index of this table is hwCliUserProfileName.
                The index value is the user profile name, it uniquely identifies the user profile. 
                By default, four system profiles exist in the system. 
                The names of the four system profiles are as follows: 
                root, admin, operator and commonuser.
                "                      �"
                User profile management table, which is used to query, modify, add and delete the user profile.
                The user profile is a set of public user attributes, including the user name and password 
                validity period, permitted earliest time of login, and permitted latest time of login.
                The MIB supports the functions of querying and setting the values of the preceding parameters.
                A user needs to be created based on a user profile. In this case, the new user inherits the 
                preceding parameter values in the user profile. The index of this entry is hwCliUserProfileName.
                The index value is the user profile name, it uniquely identifies the user profile.
                By default, four system profiles exist in the system. 
                The names of the four system profiles are as follows: 
                root, admin, operator and commonuser.               
                "                       �"
                The name of the user profile. The name of the new profile must be different from
                the names of the system profiles. The profile name consists of 1-15 characters.
                "                      ^"
                Validity period of user name.
                For example, if the validity period of the user name is 10, 
                it indicates that the user name cannot be used for login after ten days since it is created. 
                In addition, a message is displayed indicating that the user name expires, that is, 
                the validity period of the user name times out.
                0 indicates that the user name is valid forever.                 
                Range: 0-999
                Default: 0 
                Unit: day              
                "                      y"
                Validity period of user password.
                For example, if the validity period of the user password is 10,
                it indicates that the user password cannot be used for login after ten days since it is created.
                In addition, a message is displayed indicating that the user password expires,
                that is, the validity period of the user password times out.        
                0 indicates that the user password is valid forever.              
                Range: 0-999
                Default: 0 
                Unit: day               
                "                       �"
                Permitted earliest time of login. The user can log in to the system 
                at any time between 00:00 and 23:59.
                "                      "
                Permitted latest time of login.
                The user can log in to the system at the time from the permitted earliest time to 
                the permitted latest time. In other periods, the user cannot log in to the system. 
                "                      �"
                This object is used to operate the user profile.
                The system profile cannot be modified or deleted. 
                When a user is bound with the user profile, the user profile cannot be modified or deleted.
                The parameter settings of the user profile can be queried through the user profile name. 
                In addition, the information about the system profile can be queried.
                createAndGo(4) is supplied to create a new instance of a conceptual row.  
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.
                "                          E"
                The time interval of user locked.
                When the number of times of login failure reaches the preset value for locking,
                the user is locked. This object is used to query and set the locking duration.
                Unit: minute
                DEFVAL { 15 }
                "                      "
                The times of login failure.
                This object is used to query and set the times of login failure. 
                When the number of login failure reaches the preset value, the user is locked.
                DEFVAL { 3 } 
                "                      �"
                The flag of whether the password need to be changed in the case of first login. 
                Options: 
                1. enable(1)  -indicates that the password needs to be changed for the first login. 
                2. disable(2) -indicates that the password need not be changed for the first login. 
                DEFVAL { disable } 
                "                      "
                Lock type. When the number of times of repeated login failure exceeds the preset value, 
                the system automatically locks the user. This object is used to set the locking type. 
                Options:
                1. none(0) -indicates that the user need not be locked. 
                2. user(1) -indicates that the user name is locked.
                            When the user logs in to the system with the user name again, 
                            'The user has been locked and you cannot log on.' message is displayed. 
                3. ip(2)   -indicates that the IP address with which the user logs in to the system 
                            is locked. When the user logs in to the system with the IP address again, 
                            the 'The IP address has been locked and you cannot log on.' message is displayed.
                4. all(3)  -indicates that both the user name and the IP address are locked.
                DEFVAL { none } 
                "                      K"
                The object specifies whether security mode is enable.
                Options: 
                1. enable(1)  -indicates that the security administrator, 
                               whose name is security, can log in to the system. 
                2. disable(2) -indicates that the rights of user root are 
                               separated and are assigned to user security.
                User security can perform the querying operation and the operations 
                corresponding to the rights separated from the rights of user root. 
                That is, when the security mode switch is enabled(1), certain operations 
                that can be performed by user root originally cannot be performed by user
                root but by user security. When the security mode is set to disable(2), 
                the rights of user root and user security are combined and all the rights
                are owned by user root. In this case, user security cannot log in to the system.
                DEFVAL { disable }
                "                      ?"
                Domain name in the AAA authentication mode. When the value is null, 
                it indicates that the authentication mode is local mode. 
                If the AAA authentication mode is set successfully, the system 
                changes to the AAA authentication mode.
                "                      �"
                Unlock type. When a user is unlocked manually using commands or the preset locking criteria times out, 
                the system generates an unlock event. This object is used to set the unlocking type. 
                Options:
                1. none(0) -user need not be unlocked . 
                2. user(1) -Unlock user.
                3. ip(2)   -Unlock IP.
                4. all(3)  -Unlock user and IP.
                DEFVAL { none } 
                "                      7"
                NMS user management table, which supports the login and logout of the NMS user 
                and the function of querying the information about the online NMS user.
                The index of this table is hwSNMPUserID. The index value is the user ID.               
                "                      ("
                NMS user management table, which supports the login and logout of the NMS user 
                and the function of querying the information about the online NMS user.
                The index of this entry is hwSNMPUserID. The index value is the user ID.
                "                       �"
                SNMP user ID(1..8) and index object.
                The value that the device returns to the NMS, which uniquely identifies a user. 
                "                       <"
                Name of the SNMP user.
                "                      �"
                SNMP user admin status(1:logon,2:logoff).
                Visual local craft terminal (LCT). 
                Options:
                1. logon(1)  -indicates that the user can be set to go online.
                2. logoff(2) -indicates that the user can be set to go offline.                 
                The user needs to be bound with the hwSNMPUserType object 
                when the user is set to go online.            
                "                       �"
                SNMP user type(1:lct).
                Options:
                1.lct(1) -indicates that visual LCT, which is an NMS user type.
                "                       E"
                IP address that SNMP user use. 
                "                          B"
                The Status of the user login.
                Options: 
                1. logon(0)     -indicates that the user goes online.
                2. logoff(1)    -indicates that the user goes offline.
                3. logonfail(2) -indicates that the user login fails.              
                "                      �"   
            The modes of login to the client.
            Options:
            1. serial(0)       -serial mode.
            2. clipry(1)       -clipry mode. 
            3. telnet(2)       -telnet mode.
            4. ssh(3)          -ssh mode.   
            5. web(4)          -web mode.
            6. xml(5)          -xml mode.
            7. nms(6)          -nms mode.
            8. omci(7)         -omci mode.
            9. lct(8)          -lct mode.
           10. modem(9)        -modem mode.
           11. none(10)        -none(Indicates that the user does not log in).
           12. toolbox(11)     -toolbox mode.
           13. toolboxSsh(12) -toolbox ssh mode.
           14. ethoam(13)      -ethoam mode.
            "                      6"                                                 
             Types of the user log.
             Currently, the logs are classified into two types.
             Options:
             1. operating(0) -indicates the operating log.
             2. security(1)  -indicates the security log.
             "                      �"
                The levels of CLI users.
                Options: 
                1. common(1)        -indicates the common user. 
                2. operator(2)      -indicates the operator. 
                3. administrator(3) -indicates the administrator. 
                4. super(4)         -indicates the super administrator. 
                5. guest(5)         -indicates the guest user
                6. custom(6)        -indicates the custom user                
                The higher the user level is, the more rights the user has.
                The user level must be bound to the user when the user is added. 
                The super administrator cannot be added.
                "                                       o" 
                This trap message is reported when the system log database will be full.
                "                 w" 
                This trap message is reported when the managing user of the equipment is locked.
                "                 n"
                This trap message is reported when the maintenance user's state changes.
                "                 i" 
                This trap message is reported when the user name will expire soon.
                "                 m" 
                This trap message is reported when the user password will expire soon.
                "                 p" 
                This trap is sent when the default password for user root is not changed.
                "                 l" 
                This trap is sent when the default password for user root is changed.
                "                 y" 
                This trap message is reported when the managing user of the equipment is unlocked.
                "                 t" 
                This trap message is reported when the managing user change the permissions .
                "                 l" 
                This trap message is reported when user change the config lock state.
                "                    �"
                Enable/disable management serial port.
                Options: 
                1. enable(1)  -indicates that the serial port is in the open state 
                               and the serial port is available.
                2. disable(2) -indicates that the serial port is in the shutdown state 
                               and the serial port is unavailable.          
                "                          B"
                The object specifies whether callback function is enable.
                Options: 
                1. enable(1)  -indicates that the callback function is enable. 
                2. disable(2) -indicates that the callback function is disable. 
                Default: disable(2)
                "                       �"The callback security configuration table.
                 This table is used to manage the callback telephone numbers and passwords.
                 The index of this table is hwModemCallbackIndex."                       �"The callback security configuration table.
                 This table is used to manage the callback telephone numbers and passwords.
                 The index of this entry is hwModemCallbackIndex."                       "Telephone number"                       m"User password. The password must be cipher encrypted by MD5,
                it consists of 16 characters."                      $"
                Operation user configration of the modem callback function, the user configration 
                can be added and deleted.
                The user telephone number and password must be bound when the user is added. 
                The exist telephone number or password cannot be added. 
                createAndGo(4) is supplied to create a new instance of a conceptual row.  
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.                
                "                          "
                Firewall switch table, which supports the functions of querying, 
                enabling and disabling the protocol-type firewall switch.
                The index of this table is hwFirewallProtocolType.               
                "                       �"
                Firewall switch table, which supports the functions of querying, 
                enabling and disabling the protocol-type firewall switch.
                The index of this entry is hwFirewallProtocolType.
                "                      {"
                 Index object, index of the hwFirewallSwitchTable object. 
                 Options: 
                 1.telnet(1) -indicates that the firewall protocols is telnet. 
                 2.ssh(2)    -indicates that the firewall protocols is ssh. 
                 3.snmp(3)   -indicates that the firewall protocols is snmp.                 
                 "                      �"
                Firewall switch. 
                Options:
                1. enable(1) -indicates that when the device needs to control the protocol used to access the device, 
                              this command can be executed to enable(1) the firewall switch of the protocol.
                              After the firewall switch of the protocol is enabled(1), the device can control the operator 
                              who accesses the device with the protocol and reject the access of the operator 
                              whose IP address is not in the permitted address segment. 
                2. disable(2)-indicates that if the operator is already online, the device forces the operator to go offline.
                              The firewall switch can be disabled when the firewall switch mode is set to disable(2). 
                              After the firewall switch is disabled(2), the device does not control the operator who 
                              accesses the device with the protocol.
                              By default, the firewall in the system is in the disabled state.
                "                      "
                Access IP table, which supports the functions of querying, adding 
                and deleting the access IP table of a specified protocol.
                The access IP table is used to configure the address segments 
                of the accessible devices under the specified protocol. 
                This can prevent the invalid users from logging in to the device, that is, 
                the operators whose IP addresses are not in the address segments 
                and access protocols do not meet the requirements cannot access the device.
                The indexes of this table are hwFirewallProtocolType and hwAccessIpStartAddr. 
                For the hwFirewallProtocolType object, refer to hwFirewallSwitchTable.
                hwAccessIpTable is used for configuring a list of accessible IP addresses. 
                The IP address list takes effect only when the protocol corresponding to 
                hwFirewallSwitchTable is enabled.                
                "                      
"
                Access IP table, which supports the functions of querying, adding 
                and deleting the access IP table of a specified protocol.
                The access IP table is used to configure the address segments 
                of the accessible devices under the specified protocol. 
                This can prevent the invalid users from logging in to the device, that is, 
                the operators whose IP addresses are not in the address segments 
                and access protocols do not meet the requirements cannot access the device.
                The indexes of this entry are hwFirewallProtocolType and hwAccessIpStartAddr. 
                For the hwFirewallProtocolType object, refer to hwFirewallSwitchTable.
                hwAccessIpTable is used for configuring a list of accessible IP addresses. 
                The IP address list takes effect only when the protocol corresponding to 
                hwFirewallSwitchTable is enabled.             
                "                      �"
                Start IP address of one record in access Ip table.
                The IP address in the new record of the table must be valid,
                that is, the IP address is not a class 0 address or class D address.
                The record in which the start address is the same as the existing one 
                cannot be added to the table.
                "                      �"
                End IP address of one record in access Ip table.
                The new IP address must be valid, that is, 
                the IP address is not a class 0 address or class D address.
                The record in which the end address is smaller than the start 
                address cannot be added and each protocol supports a maximum of 10 IP addresses.
                "                      �"
                Operation status of row.
                The specified protocol type and the start and end addresses in 
                the start address permitting table can be modified.  
                createAndGo(4) is supplied to create a new instance of a conceptual row.  
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.                
                "                      f"
                Refuse IP table. The table is used to configure the address segment 
                (under a specified protocol) with which the user cannot access the device. 
                This can prevent the invalid users from logging in to the device.
                After address segment is configured in the table, the operators 
                with the IP addresses in the address segment cannot access the device.
                The indexes of this table are hwFirewallProtocolType and hwRefuseIpStartAddr.
                For the hwFirewallProtocolType object, refer to hwFirewallSwitchTable.
                hwRefuseIpTable is used for configuring a list of prohibited IP addresses. 
                The IP address list takes effect only when the protocol corresponding to 
                hwFirewallSwitchTable is enabled.
                "                      t"
                Refuse IP table. The table is used to configure the address segment 
                (under a specified protocol) with which the user cannot access the device. 
                This can prevent the invalid users from logging in to the device.
                After address segment is configured in the table, the operators 
                with the IP addresses in the address segment cannot access the device.
                The indexes of this entry are hwFirewallProtocolType and hwRefuseIpStartAddr.
                For the hwFirewallProtocolType object, refer to hwFirewallSwitchTable.
                hwRefuseIpTable is used for configuring a list of prohibited IP addresses. 
                The IP address list takes effect only when the protocol corresponding to 
                hwFirewallSwitchTable is enabled.              
                "                      �"
                Start IP address of one record in refuse Ip table.
                The IP address in the new record of the table must be valid,
                that is, the IP address is neither a class 0 address nor class D address.
                The record in which the start address is the same as the existing 
                one cannot be added to the table.
                "                      �"
                End IP address of one record in refuse Ip table.
                The IP address in the new record of the table must be valid, that is, 
                the IP address is not a class 0 address or class D address.
                The record in which the end address is smaller than the start address 
                cannot be added and each protocol supports a maximum of 10 IP addresses.
                "                      �"
                Operation status of row.
                The specified protocol type and the start and end addresses in the
                start address rejecting table can be modified. 
                createAndGo(4) is supplied to create a new instance of a conceptual row.  
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.              
                "                          M"
                Sys man source interface table.
                The table is used to configure the source interfaces under the protocols 
                such as SNMP trap, TFTP, FTP, SFTP, Telnet, Ping and Tracert.
                The addresses of the meth and VLANIF interfaces can be used as 
                the source addresses from which the system sends packets.
                The system uses the bound interface address as the source address to send 
                the protocol packet. The index of this table is hwSysManProtocolType.               
                "                      ="
                Sys man source interface table.
                The table is used to configure the source interfaces under the protocols 
                such as SNMP trap, TFTP, FTP, SFTP, Telnet, Ping and Tracert.
                The addresses of the meth and VLANIF interfaces can be used as 
                the source addresses from which the system sends packets.
                The system uses the bound interface address as the source address to send
                the protocol packet. The index of this entry is hwSysManProtocolType.
                "                      �"
                Application-layer packet type.
                Options:
                1. trap(1)    -indicates the trap packet.
                2. syslog(2)  -indicates the syslog packet.
                3. tftp(3)    -indicates the tftp packet.
                4. ftp(4)     -indicates the ftp packet.
                5. sftp(5)    -indicates the sftp packet.
                6. telnet(6)  -indicates the telnet packet.
                7. ping(7)    -indicates the ping packet.
                8. tracert(8) -indicates the tracert packet.
                9. license(9) -indicates the license packet.     
                10.stelnet(10)-indicates the stelnet packet.
                11.ipdr(11)   -indicates the ipdr packet.
                "                      2"
                Source interface type, which is used with the interface number to 
                determine the interface from which packets are sent.
                Options: 
                1. auto(1)     -indicates the function of automatically searching for 
                                the source interface according to the route.
                2. loopback(2) -indicates the loopback interface.
                3. meth(3)     -indicates the meth interface.
                4. vlanif(4)   -indicates the vlanif interface.
                "                      _"
                Source interface number, which is the interface number under the source interface type object 
                and is used with the interface type to determine the interface from which packets are sent.   
                The hwSourceInterfaceNumber value of -1 indicates the source interface is not configured.
                "                                  