-- ==================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This mib which contains objects manages the 
--              SSH server and SSH client configuration. 
-- Reference:  
-- Version: V2.23
-- ==================================================================
-- ==================================================================
-- 
-- Varibles and types are imported
--
-- ==================================================================
                                     y"This mib which contains objects manages the 
                SSH server and SSH client configuration. 
                "�"Huawei Industrial Base                
                          Bantian, Longgang                     
                          Shenzhen 518129                       
                          People's Republic of China            
                          Website: http://www.huawei.com        
                          Email: support@huawei.com             
                         " "201806070000Z" "201711220000Z" "201711100000Z" "201708230000Z" "201708170000Z" "201705170000Z" "201703140000Z" "201701240000Z" "201409260000Z" "201406300000Z" "201405060000Z" "201011090000Z" "201008250000Z" "201006170000Z" "201004180000Z" "201003030000Z" "201001290000Z" "200609050000Z" 1"V2.23, modify hwSNetConfMaxUserNum range 0..20 " -"V2.22, delete index of hwRSAPublicKeyTable;" K"V2.21, modify  hwSSHServerInfoTable    OID:1.3.6.1.4.1.2011.5.25.118.2.2;" 1"V2.20, delete index of hwSSHServerSessionTable."o"V2.19, 
                          1.modify hwStelnetServerEnable               OID:1.3.6.1.4.1.2011.5.25.118.1.1;
                          2.modify hwSftpServerEnable                    OID:1.3.6.1.4.1.2011.5.25.118.1.2;
                          3.modify hwSNetConfServerEnable         OID:1.3.6.1.4.1.2011.5.25.118.1.15;
                          4.modify hwStelnetIPv4ServerEnable       OID:1.3.6.1.4.1.2011.5.25.118.1.21;
                          5.modify hwStelnetIPv6ServerEnable       OID:1.3.6.1.4.1.2011.5.25.118.1.22;
                          6.modify hwSftpIPv4ServerEnable             OID:1.3.6.1.4.1.2011.5.25.118.1.23;
                          7.modify hwSftpIPv6ServerEnable             OID:1.3.6.1.4.1.2011.5.25.118.1.24;
                          8.modify hwSCPIPv4ServerEnable            OID:1.3.6.1.4.1.2011.5.25.118.1.25;
                          9.modify hwSCPIPv6ServerEnable            OID:1.3.6.1.4.1.2011.5.25.118.1.26;
                          10.modify hwSNetConfIPv4ServerEnable         OID:1.3.6.1.4.1.2011.5.25.118.1.27;
                          11.modify hwSNetConfIPv6ServerEnable         OID:1.3.6.1.4.1.2011.5.25.118.1.28;
                          12.modify hwSSHFirstTimeAuthEnable            OID:1.3.6.1.4.1.2011.5.25.118.2.1;
                          13.modify hwSSHUserName                              OID:1.3.6.1.4.1.2011.5.25.118.1.11.1.2;" G"V2.18, Modify the type of mib-node according to the field type in DOM" �"V2.17, 
                         1.Add hwSNetConfIPv4ServerEnable          OID:1.3.6.1.4.1.2011.5.25.118.1.27;
                         2.Add hwSNetConfIPv6ServerEnable          OID:1.3.6.1.4.1.2011.5.25.118.1.28;"@"V2.16, 
                           1.Add hwSSHIPv4ServerPort                OID:1.3.6.1.4.1.2011.5.25.118.1.19;
                           2.Add hwSSHIPv6ServerPort                OID:1.3.6.1.4.1.2011.5.25.118.1.20;
                           3.Add hwStelnetIPv4ServerEnable        OID:1.3.6.1.4.1.2011.5.25.118.1.21;
                           4.Add hwStelnetIPv6ServerEnable        OID:1.3.6.1.4.1.2011.5.25.118.1.22;
                           5.Add hwSftpIPv4ServerEnable             OID:1.3.6.1.4.1.2011.5.25.118.1.23;
                           6.Add hwSftpIPv6ServerEnable             OID:1.3.6.1.4.1.2011.5.25.118.1.24;
                           7.Add hwSCPIPv4ServerEnable            OID:1.3.6.1.4.1.2011.5.25.118.1.25;
                          8.Add hwSCPIPv6ServerEnable            OID:1.3.6.1.4.1.2011.5.25.118.1.26." Q"V2.15, defect - DTS2014091709267 (default value in the description is updated)."6"V2.14, 
                          1. Modify the value range of the node hwSSHServerTimeOut, hwSSHServerPort,hwSftpMaxUserNum,
                             hwSftpOnLineUserNum,hwSSHUserName,hwSSHUserSftpDirectory,hwSSHServerName,hwSSHServerAssignKey.
                          2. Modify the description of the node hwSSHServerTimeOut,hwSSHServerPort,hwSftpMaxUserNum,hwSSHUserName,
                             hwSSHUserAuthorizationCMD,hwSSHSftpUserNumExceedMax.
                          3. Add the following enums of the hwSSHUserAuthType:authDSA(6),authDSAandPASSWORD(7),authAny(8),authECC(9),
                             authECCandPASSWORD(10).
                          4. Add the following enums of the hwSSHUserServiceType:servicetypeSNetConf(5),servicetypeSftpSNetConf(6),
                             servicetypeSTelnetSftp(7),servicetypeSTelnetSNetConf(8).
                          5. Add the following enums of the hwSSHSessionConnectType:none(0),vty15(16),vty16(17),vty17(18),vty18(19),
                             vty19(20),vty20(21).
                          6. modified 'MAX-ACCESS read-only' to 'MAX-ACCESS read-write' of hwSftpMaxUserNum.
                          7. Add hwSSHUserAssignKeyType in hwSSHUserTable.
                          8. Add hwSSHSessionKeyType, hwSSHSessionConnectionIndex, hwSSHSessionCtosCompress, hwSSHSessionStocCompress 
                             in hwSSHServerSessionTable.
                          9. Add hwSNetConfMaxUserNum, hwSNetConfServerEnable, hwSSHKeepAliveEnable, hwSCPServerEnable, hwSCPMaxUserNum
                             in hwSSHServer.
                          10. Add hwSSHServerAssignDSAKey and hwSSHServerAssignECCKey in hwSSHServerInfoTable.
                          11. Add hwSSHKeepAliveInterval and hwSSHKeepAliveMaxCount in hwSSHClient.
                         " �"V1.08, 
                          1. Add hwRSAPublicKeyFingerprint in hwRSAPublicKeyTable.
                          2. Add hwRSALocalKeyTable." G"V1.07, The description of this MIB is modified according to the tool." `"V1.06, modified the contact-info and the revision history. Modified the description of leaves." �"V1.05, the description of hwSSHServerTimeOut, hwSSHServerPort, hwSSHServerKeyTimeOut, hwSSHUserTable, 
                          hwSSHUserEntry, hwSSHUserAuthType and hwSSHUserServiceType were modified and supplemented." b"V1.04, DT requirements were implemented and the syntax and semantics of SIMPLETEST were changed." b"V1.03, DT requirements were implemented and the syntax and semantics of SIMPLETEST were changed." '"V1.02, hwRSAPublicKeyTable was added." "V1.00, completed the draft."                  '"
                The object specifies whether the SSH stelnet server is enable.
                Options:
               1. enable(1) -The SSH stelnet server is enable.
               2. disable(2)-The SSH stelnet server is disable.
               The default value is disable.
                "                      "
                The object specifies whether the sftp server is enable. 
                Options:
                1.enable(1) -the sftp server is enable.
                2.disable(2)-the sftp server is disable.
                The default value is disable.
                "                     -- DEFVAL { 2 }
B"
                The object specifies whether the SSH server is compatible with SSH1.x.
                The default is 2.
                Options:
                1. enable(1) -indicates that the version compatibility function of the SSH server is enabled 
                              so that the SSH server is compatible with the SSHv1.x client.
                2. disable(2)-indicates that the version compatibility function of the SSH server is disabled 
                              and therefore the SSH server is incompatible with the SSHv1.x client.
                "                       �"The object specifies the time when SSH authentication times out.
                The unit is the second and the default is 60 seconds."                       }"
                The object specifies authentication-retry times for SSH user. 
                Default: 3
                "                       f"The object specifies port number for SSH server supporting.
                The default value is 22."                       �"
                The interval of updating the SSH server key pair.    
                By default, value is 0 hour, which means server key can't be updated forever.
                Range: 0-24
                Unit: hour
                "                      !"
                The object specifies whether send trap information to NMS.
                Options:
                1.enable(1) -Only when its value enable, allowed to send trap informations to NMS.
                2.disable(2)-Can not to send trap informations to NMS.
                "                       q"The object specifies the max number of sftp user that sftp server supporting.
                The default is 5."                       �"
                The object specifies the number of sftp user that has been connected to sftp server currently.
                "                       o"
                This table is used for querying and setting the information about SSH user.
                "                       �"
                This table is used for querying and setting the information about SSH user.
                The index of this entry is hwSSHUserIndex.                 
                "                       U"
                The object specifies the index of hwSSHUserTable.
                "                       U"The object specifies the name of a SSH user. The maximum length of the node is 255."                       �"
                The object specifies is a peer public key for a SSH user.
                This peer public key on the SSH server must exist and associate with hwRSAPublicKeyName.
                "                      y"
                The object specifies the authentication type of SSH user.
                The default authentication type is authPASSWORD.
                Options: 
                1. authNULL(1)           -No authenticate.
                2. authPASSWORD(2)       -Password authentication.
                3. authRSA(3)            -RSA key authentication.
                4. authRSAorPASSWORD(4)  -Password or RSA key authentication.
                5. authRSAandPASSWORD(5) -Password and RSA key authentication.
                6. authDSA(6),           -DSA key authentication.
                7. authDSAandPASSWORD(7), -Password or DSA key authentication.
                8. authAny(8),            -Any  authentication.
                9. authECC(9),            -ECC key authentication.
                10.authECCandPASSWORD(10) -Password and ECC key authentication.
                "                      ;"
                The object specifies the service type of SSH user. 
                Options: 
                1. servicetypeNULL(1)    -default service type.
                2. servicetypeSTELNET(2) -The service type of the SSH user is STELNET.
                3. servicetypeSFTP(3)    -The service type of the SSH user is SFTP.
                4. servicetypeALL(4)     -The service type of the SSH user is all. 
                5. servicetypeSNetConf(5),      -The service type of the SSH user is SNetConf.
                6. servicetypeSftpSNetConf(6),   -The service type of the SSH user is Sftp and SNetConf.
                7. servicetypeSTelnetSftp(7),    -The service type of the SSH user is STelnet and Sftp.
                8. servicetypeSTelnetSNetConf(8) -The service type of the SSH user is STelnet and SNetConf."                       �"The object specifies the working directory for the sftp user. 
                The total length of absolute path is 128,the length of single directory is 128."                      �"
                The object specifies the authorization type of SSH user. When authorizationAAA is specified,
                the SSH user will be authorizated by HWTACACS server. The default authorization is authorizationNULL,
                indicating SSH user doesn't need to be authorizated by HWTACACS server.
                Options:
                1.authorizationNULL(1)-The default authorization is authorizationNULL,indicating SSH user 
                                       doesn't need to be authorizated by HWTACACS server.
                2.authorizationAAA(2) -When authorizationAAA is specified,the SSH user will be 
                                       authorizated by HWTACACS server. 
                "                      F"
                The object specifies the status of this entry.
                When the status is active(1), hwSSHUserAssignKey, hwSSHUserAuthType, 
                hwSSHUserServiceType, hwSSHUserSftpDirectory, and hwSSHUserAuthorizationCMD's 
                value in the entry are allowed to be modified.
                "                       8"The object specifies the public key type of SSH user. "                       �"
                The object shows current session information of the SSH server which includes username,
                version information, retry times of online users currently.
                "                      "
                The object shows current session information of the SSH server which includes username,
                version information, retry times of online users currently.
                The index of this entry is hwSSHSessionIndex.                
                "                       ^"
                The object specifies the index of hwSSHServerSessionTable.
                "                       }"
                The object specifies the name of a SSH user,
                which has started a session.
                "                       �"
                The object specifies the line number supports a connection of SSH 
                user which is in connection with SSH server. 
                "                       �"
                The object specifies the version information of a SSH 
                user which is in connection with SSH server.
                "                       �"
                The object specifies the state of a SSH user 
                which is in connection with SSH server.
                Options:
                1.started(1)-indicates the state is start.
                "                       f"
                The object specifies SSH user's retrying times in authentications.
                "                       X"
                The object specifies the cipher of custom to server.
                "                       X"
                The object specifies the cipher of server to custom.
                "                       V"
                The object specifies the hmac of custom to server.
                "                       V"
                The object specifies the hmac of server to custom.
                "                       J"
                The object specifies the key exchange.
                "                       `"
                The object specifies the authentication type of SSH session.
                "                       Y"
                The object specifies the service type of SSH session.
                "                       :"The object specifies the public key type of SSH session."                       �"The object specifies the line number supports a connection of SSH user which is in connection with SSH(STelnet/Sftp/SNetConf) server."                       I"The object specifies the Compression algorithm of SSH client to server."                       I"The object specifies the Compression algorithm of SSH Server to client."                       �"
                A table of configuration about RSA Public Key.
                hwRSAPublicKeyName is the name of RSA Public Key.              
                "                       �"
                A table of configuration about RSA Public Key.
                The index of this entry is hwRSAPublicKeyName.  
                hwRSAPublicKeyName is the name of RSA Public Key.
                "                       T"
                The object specifies the name of RSA Public Key.
                "                      1"
                The object specifies is RSA Public Key Code that in the format of ber, the maximum length of the node is 2048.             
                When the RSA public key is created, the index value is the name of the public key, which uses the ASCII code.
                The public key value must be generated through a tool. Firstly, use the PUTTYGEN.EXE tool to generate the matching 
                public key and private key. Then, use the sshkey.exe tool to convert the generated public key to the required public key value.
                "                      �"
                The object specifies the status of this table entry.
                When the status is active(1), hwRSAPublicKeyName, hwRSAPublicKeyCode's
                value in the entry are allowed to be modified.  
                createAndGo(4) is supplied to create a new instance of a conceptual row.
                destroy(6) is supplied to delete the instances associated with an existing conceptual row.        
                "                       �"
                The object specifies the fingerprint of RSA Public Key Code,
                that including the public key algorithm, length and fingerprint.
                "                       y"The object specifies the max number of SNetConf user that SNetConf Server supporting.
                The default is 5."                       l"The object specifies whether the SSH SNetConf Server is enable.
                The default is disable(2)."                       u"The object specifies whether the KeepAlive functionality on SSH Server is enable.
                The default is 1."                       ^"The object specifies whether the SSH SCP Server is enable.
                The default is 2."                       o"The object specifies the max number of SCP user that SCP Server supporting.
                The default is 2."                       k"The object specifies port number for SSH IPv4 server supporting.
                The default value is 22."                       k"The object specifies port number for SSH IPv6 server supporting.
                The default value is 22."                      9"
                The object specifies whether the SSH stelnet IPv4 server is enable.
                Options:
                1. enable(1) -The SSH stelnet IPv4 server is enable.
                2. disable(2)-The SSH stelnet IPv4 server is disable.
                The default value is disable.
                "                      1"
                The object specifies whether the SSH stelnet IPv6 server is enable.
                Options:
                1. enable(1) -The stelnet IPv6 server is enable.
                2. disable(2)-The stelnet IPv6 server is disable.
                The default value is disable.
                "                      !"
                The object specifies whether the sftp IPv4 server is enable.
                Options:
                1.enable(1) -The sftp IPv4 server is enable
                2.disable(2)-The sftp IPv4 server is disable.
                The default value is disable.
                "                      ""
                The object specifies whether the sftp IPv6 server is enable.
                Options:
                1.enable(1) -the sftp IPv6 server is enable.
                2.disable(2)-the sftp IPv6 server is disable.
                The default value is disable.
                "                       l"The object specifies whether the SCP IPv4 Server is enable. 
                The default value is disable."                       k"The object specifies whether the SCP IPv6 Server is enable.
                The default value is disable."                      :"
                The object specifies whether the SSH SNetConf IPv4 server is enable.
                Options:
                1.enable(1) -the SSH SNetConf IPv4 server is enable.
                2.disable(2)-the SSH SNetConf IPv4 server is disable.
                The default value is disable.
                "                      <"
                The object specifies whether the SSH SNetConf IPv6 server is enable.
                Options:
                1. enable(1) -The SSH SNetConf IPv6 server is enable.
                2. disable(2)-The SSH SNetConf IPv6 server is disable.
                The default value is disable.
                "                          u"The object specifies whether the SSH client
                supports first-time-authentication.
                Options:
                1.enable(1) -indicates the SSH client supports first-time-authentication.
                2.disable(2)-indicates the SSH client does not support first-time-authentication.
                The default value is disable.
                "                       �"
                This table describes SSH server information on the SSH client, 
                including the table index, server name, RSA public key, and server status.
                "                       �"
                A table of configuration about the relation
                between the SSH server and the rsa peerkey.
                The index of this entry is hwSSHServerIndex.
                "                       ["
                The object specifies the index of hwSSHServerInfoTable.
                "                       R"
                The object specifies the name of a SSH server.
                "                       �"
                The object specifies a peer public key for a 
                SSH server. This peer public key must exist.
                "                       �"
                The object specifies the status of this entry.
                When the status is active,  
                hwSSHServerAssignKey's value in the entry is 
                allowed to be modified.
                "                       ^"The object specifies a DSA peer public key for a SSH server.This peer public key must exist."                       ^"The object specifies a ECC peer public key for a SSH server.This peer public key must exist."                       �"The object specifies KeepAlive Timeout interval on SSH Client.
                The default is 0. 0 specify no KeepAlive packet should be sent to Server."                       z"The object specifies maximum KeepAlive packet to send to SSH Server before disconnect.
                The default is 3."                           �"This notification was sent when the total number of sftp users requesting sftp service
                exceeds max user number configured."                         x"
                The compliance statement for systems supporting 
                the HUAWEI-SSH-MIB.
                "                   C"
                The SSH server attribute group.
                "                 9"
                The SSH user's group.
                "                 C"
                The SSH server's session group.
                "                 E"
                The SSH client's attribute group.
                "                 ?"
                The SSH serverInfo's group.
                "                 ?"
                The SSH Notification group.
                "                         q"
                The object specifies the local host RSA Public Key Code in the format of ber.
                "                       �"
                The object specifies the fingerprint of the local host RSA Public Key Code,
                that including the public key algorithm, length and fingerprint.
                "                       s"
                The object specifies the local server RSA Public Key Code in the format of ber.
                "                       �"
                The object specifies the fingerprint of the local server RSA Public Key Code,
                that including the public key algorithm, length and fingerprint.
                "                                  