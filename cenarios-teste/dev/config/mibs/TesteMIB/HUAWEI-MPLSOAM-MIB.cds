-- ==================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description:  HUAWEI Layer Two MAC management MIB
-- Reference:
-- Version: V2.18
-- History:
-- ==================================================================
-- HUAWEI-MPLSOAM-MIB.mib
-- ==================================================================
-- 
-- Variables and types to be imported
--
-- ==================================================================
                                    )"The HUAWEI-MPLSOAM-MIB contains objects to configure OAM module. 
                The Operation, Administration and Maintenance (OAM) 
                is an effective means for decreasing the cost of network maintenance. 
                The MPLS OAM is used to administrate and maintain MPLS.  "
"Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   " "201712181700Z" "201708171655Z" "201707051048Z" "201701101505Z" "201701091728Z" "201408211052Z" "201308271600Z" "201302181600Z" "200504271600Z" N"V2.18,  add import hwMplsTunnelSignalledTunnelName, and modify related alarm" d"V2.17,  modify hwMplsOamL2vcOutDefect, hwMplsOamL2vcInDefect, hwMplsOamL2vcAva, hwMplsOamL2vcUnAva" "V2.16,  modify hwMplsOamBidirectionalTunnelInDefect, hwMplsOamL2vcInDefect, hwMplsOamL2vcAva, hwMplsOamBidirectionalTunnelAva" y"V2.15,  add hwMplsApsPathMisMatch,  hwMplsApsPathMisMatchRecovery, hwMplsApsTypeMisMatch, hwMplsApsTypeMisMatchRecovery" y"V2.14,  add hwMplsApsPathMisMatch,  hwMplsApsPathMisMatchRecovery, hwMplsApsTypeMisMatch, hwMplsApsTypeMisMatchRecovery" m"V2.13,  add hwMplsApsDegraded,  hwMplsApsDegradedRecovery, hwMplsApsSwitchFail, hwMplsApsSwitchFailRecovery" 2"V2.12,  modify the scope of hwMplsOamL2vcVcType." D"V2.11,  modify the MAX-ACCESS of hwMplsPsRowStatus to read-create." "V1.00, initial version."                       �"Whether OAM is globally capable.
                0: incapable;
                1: capable;
                2: capable(basedItu);
                The default value is incapable."                       �"This table specifies per-LSP MPLS OAM capability and 
                associated information, such as IgrTunnName and IgrDetType."                       v"An entry in this table is created by an LSR for every LSP
                capable of supporting MPLS OAM at ingress."                       -"The interface index of the detected tunnel."                       �"The name of a tunnel.
                For ingress, it means the tunnel name of the detected LSP.
                For egress, it means the tunnel name of the reverse LSP."                      �"There are two types of OAM packets, CV and FFD.
                The CV flow is generated at the source LSR of the LSP with
                a nominal frequency of 1/s and terminated at the sink LSR of the LSP.
                FFD provides failure detection option for an LSP independent 
                of the CV based availability model and is not tied to the 
                CV insertion rate. Insertion rates at 1/s or faster may 
                also be used.
                The CV/FFD packet contains a network-unique identifier (TTSI) 
                so that all types of defects can be detected.    
                1: CV;
                2: FFD."                      �"For CV: the frequency is static, per second.
                For FFD: the frequency is set by user. The value 
                can be 10ms, 20ms, 50ms,100ms,200ms,500ms,3ms.
                Any other frequency is wrong.
                0: 1000ms(only for cv);
                1: 10ms;
                2: 20ms;
                3: 50ms;
                4: 100ms;
                5: 200ms;
                6: 500ms;
                7: 3ms."                      R"When an LSP is found to be in defect, the sink LSR if the LSP
                should send BDI to inform the source LSR of the LSP, the BDI is 
                transferred through the reverse LSP.
                The type of reverse LSP can be private or shared.
                If private, then the reverse LSP can be used only when the only 
                LSP is in defect;
                If shared, the reverse LSP which is shared between many forward 
                LSPs, whose source LSRs are the same and sink LSRs are the same.
                1: private;
                2: share."                       /"The object indicates name of the reverse LSP."                       z"Only for ingress, the object indicates the ingress LSR ID of the 
                reverse LSP,, expressed in IP address."                       c"Only for ingress, the object indicates the session tunnel ID of
                 the reverse LSP."                      �"Whether one LSP is OAM enable.
                If disable, LSP is not monitored;
                If enable, CV/FFD is generated at the source LSR of the LSP and 
                checked at the sink LSR of the LSP,and user can set 
                other configuration.
                0: The OAM function is disabled on the ingress;
                1: The OAM function is enabled on the ingress."                       3"0: stop detect;
                 1: start detect."                      ="If the LSP Timer (T1) expires, then the LSP enters the 
                Unavailable state. The start point of the Unavailable state 
                is deemed to be at the entry into the LSP defect state.
                An LSP re-enters the Available state after the LSP Defect state
                exists first.
                T1 defines the length of time the LSP is in the Defect state 
                before declaring an LSP Unavailable or returning to defect 
                free state. 
                0: available state;
                1: unavailable state."                      �"Defect is defined as interruption of the capability of a 
                transport entity (e.g., network connection) to transfer user 
                or OAM information. There are six types of defect:
                0: no defect;
                1: dServer;
                2: dPeerMe;
                3: dLOCV, Loss of Connectivity Verification defect;
                4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect;
                6: dExcess, Receiving excess rate of CV/FFD;
                7: dUnknown, Unknown defect in the MPLS network..
                8: dOamFail, AutoProtocal timer expires.
                9: dIngressDown."                       c"This variable is used to create, modify, and
                         delete a row in this table."                       y"
                 1: PtnMode;
                 2: RouterMode;
                Valid only for the ingress configuration."                      \"BDI is generated at the trail termination source point of 
                a return path in response to a defect detected at the trail 
                termination sink point of an LSP in the forwarding direction. 
                The frequency of BDI can be set by user.
                1: perSecond;
                2: same as detect frequency."                       �"This table specifies per-LSP MPLS OAM capability and 
                 associated information, such as DetectType, DetectFrequency."                       v"An entry in this table is created by an LSR for every LSP
                 capable of supporting MPLS OAM at egress."                       8"The object indicates the name of static LSP at egress."                       5"The object indicates the Ingress LSR ID of the LSP."                       E"The object indicates the the Ingress session tunnel ID of the LSP.."                       m"0: invalid, if auto-protocol, this detect type is invalid;
                 1: CV;
                 2: FFD."                       �"0: 1000ms(only for cv);
                 1: 10ms;
                 2: 20ms;
                 3: 50ms;
                 4: 100ms;
                 5: 200ms;
                 6: 500ms;
                 7: invalid;
                 8: 3ms."                      �"When an LSP is found to be in defect, the sink LSR of the LSP 
                should send BDI to inform the source LSR of the LSP,the BDI is 
                transferred through the reverse LSP.
                The type of reverse LSP can be private or shared.
                If private, then the reverse LSP can be used only when the only 
                LSP in defect;
                If shared, the reverse LSP, which is shared between many forward 
                LSPs that have the same source LSRs and sink LSRs.
                0: invalid, when the reverse LSR does not exist;
                1: private;
                2: share."                       4"The object indicates the name of a reverse tunnel."                       �"If autoprotocol,  then the egress can process extended FDI sent 
                by ingress.
                0: disable;
                1: enable;
                Valid only for the egress configuration."                      �"This time is set at the egress.
                If the egress receives CV/FFD, it records the parameters 
                included in the packet, such as OAM type and frequency.
                If the egress does not receive any OAM packet before the timer
                expires, the sink LSR will send BDI with dLOCV defect.
                Valid only for the egress configuration."                      	"BDI is generated at the trail termination source point of 
                a return path in response to a defect detected at the trail 
                termination sink point of an LSP in the forwarding direction. 
                The frequency of BDI can be set by user.
                Only valid for egress configuration.
                The default value is detect frequency and it is valid only when a 
                backward-LSP exists.
                0: perSecond;
                1: same as detect frequency."                      �"Whether one LSP is enabled with OAM.
                If disable, LSP is not monitored;
                If enable, CV/FFD is generated at the source LSR of the LSP and 
                checked at the sink LSR of the LSP, and user can set 
                other configuration.
                0: The OAM function is disabled on the egress;
                1: The OAM function is enabled on the egress."                       3"1: stop detect;
                 2: start detect."                      <"If the LSP Timer (T1) expires, then the LSP enters the 
                Unavailable state. The start point of the Unavailable state 
                is deemed to be at the entry into the LSP defect state.
                An LSP re-enters the Available state after the LSP Defect State.
                first exists.
                T1 defines the length of time the LSP is in the Defect state 
                before declaring an LSP Unavailable or returning to defect 
                free state
                0: available state;
                1: unavailable state."                      "0: no defect;
                 1: dServer,
                 2: dPeerMe,
                 3: dLOCV, Loss of Connectivity Verification defect;
                 4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                 5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect.;
                 6: dExcess, Receiving excess rate of CV/FFD;
                 7: dUnknown, Unknown defect in the MPLS network.
                 8: dOamFail, AutoProtocal timer expires.
                 9: dEgressDown."                       ["This variable is used to create, modify, and
                 delete a row in this table."                       u"This table specifies RLSN capability and 
                 associated information, such as RlsnLsrId and RlsnLsrId."                       |"An entry in this table is created by an LSR to binding the name,                lsr-id and tunnel-id of the LSP at egress."                       3"For egress, the object indicates name of the LSP."                       @"For egress, the object indicates the Ingress LSR ID of the LSP"                       \"For egress, the object indicates the Ingress session tunnel ID 
                of the LSP"                       7"The object indicates the index of outbound interface."                       6"The object indicates the name of outbound interface."                        "1: up
                 2: down"                       ["This variable is used to create, modify, and
                delete a row in this table. "                       k"Create or delete the MPLS OAM view.
                1: create mplsOam;
                0: delete mplsOam;"                       }"This table specifies PW MPLS OAM capability and 
                 associated information, such as DetType and DetFrequence."                       ^"An entry in this table is created by binding the peer-ip,
                vc-type and vc-id."                       ,"This object indicates the peer ip address."                      G"There are seventeen types of vc.
                1: fr;
                2: atmAal5Sdu;
                3: atmTransCell;
                4: vlan;
                5: ethernet;
                6: hdlc;
                7: ppp;
                9: atmNto1Vcc;
                10:atmNto1Vpc;
                11:ipLayer2;
                12:atm1to1Vcc;
                13:atm1to1Vpc;
                14:atmAal5Pdu;
                16:cep;
                17:satopE1;
                18:satopT1;
                21:cesopsnBasic;
                64:ipInterworking;
                0:unknown."                       -"This object indicates the vc id of pw type."                       3"This object indicates the remote peer ip address."                      G"There are seventeen types of vc.
                1: fr;
                2: atmAal5Sdu;
                3: atmTransCell;
                4: vlan;
                5: ethernet;
                6: hdlc;
                7: ppp;
                9: atmNto1Vcc;
                10:atmNto1Vpc;
                11:ipLayer2;
                12:atm1to1Vcc;
                13:atm1to1Vpc;
                14:atmAal5Pdu;
                16:cep;
                17:satopE1;
                18:satopT1;
                21:cesopsnBasic;
                64:ipInterworking;
                0:unknown."                       4"This object indicates the remote vc id of pw type."                       `"There are two types of OAM packets, CV and FFD.
                1: CV;
                2: FFD."                      �"For CV: the frequency is static, per second.
                For FFD: the frequency is set by user. The value 
                can be 10ms, 20ms, 50ms,100ms,200ms,500ms,3ms.
                Any other frequency is wrong.
                0: 1000ms(only for cv);
                1: 10ms;
                2: 20ms;
                3: 50ms;
                4: 100ms;
                5: 200ms;
                6: 500ms;
                7: 3ms."                       >"0: invalid;
                 1: CV;
                 2: FFD."                      �"For CV: the frequency is static, per second.
                For FFD: the frequency is set by user. The value 
                can be 10ms, 20ms, 50ms,100ms,200ms,500ms,3ms.
                Any other frequency is wrong.
                 0: 1000ms(only for cv);
                 1: 10ms;
                 2: 20ms;
                 3: 50ms;
                 4: 100ms;
                 5: 200ms;
                 6: 500ms;
                 7: invalid;
                 8: 3ms."                       \"0: The OAM Send function is Disabled;
                 1: The OAM Send function is Eabled;"                       b"0: The OAM Receive function is Disabled;
                 1: The OAM Receive function is Eabled;"                       )"0: disable;
                 1: enable;"                      "If the oam receives CV/FFD, it records the parameters 
                 included in the packet, such as OAM type and frequency.
                 If the oam does not receive any CV/FFD packet before the timer
                 expires, It will send BDI with dLOCV defect."                       c"1: stop detect;                    
                 2: start detect; 
                 3: ready."                       <"0: available state;
                 1: unavailable state."                      "0: no defect;
                 1: dServer,
                 2: dPeerMe,
                 3: dLOCV, Loss of Connectivity Verification defect;
                 4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                 5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect.;
                 6: dExcess, Receiving excess rate of CV/FFD;
                 7: dUnknown, Unknown defect in the MPLS network.
                 8: dOamFail, AutoProtocal timer expires.
                 9: pwDown, PW down."                      �"0: no defect;
                 1: dServer,
                 2: dPeerMe,
                 3: dLOCV, Loss of Connectivity Verification defect;
                 4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                 5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect.;
                 6: dExcess, Receiving excess rate of CV/FFD;
                 7: dUnknown, Unknown defect in the MPLS network.
                 8: dOamFail, AutoProtocal timer expires."                       \"This variable is used to create, modify, and
                 delete a row in this table. "                       v"
                 1: ptnMode;
                 2: routerMode;
                Valid only for the l2vc configuration."                      H"BDI is generated at the trail termination source point of 
            a return path in response to a defect detected at the trail 
            termination sink point of an LSP in the forwarding direction. 
            The frequency of BDI can be set by user.
            1: perSecond;
            2: same as detect frequency."                       �"This table specifies Static Co-Route MPLS OAM capability and 
                 associated information, such as DetType and DetFrequence."                       B"An entry in this table is created by binding the tunnel ifindex."                       ;"This is a unique index for an OAM entry in the OAM table."                       "The name of a tunnel."                       `"There are two types of OAM packets, CV and FFD.
                1: CV;
                2: FFD."                      �"For CV: the frequency is static, per second.
                For FFD: the frequency is set by user. The value 
                can be 10ms, 20ms, 50ms,100ms,200ms,500ms,3ms.
                Any other frequency is wrong.
                0: 1000ms(only for cv);
                1: 10ms;
                2: 20ms;
                3: 50ms;
                4: 100ms;
                5: 200ms;
                6: 500ms;
                7: 3ms."                       >"0: invalid;
                 1: CV;
                 2: FFD."                      �"For CV: the frequency is static, per second.
                For FFD: the frequency is set by user. The value 
                can be 10ms, 20ms, 50ms,100ms,200ms,500ms,3ms.
                Any other frequency is wrong.
                 0: 1000ms(only for cv);
                 1: 10ms;
                 2: 20ms;
                 3: 50ms;
                 4: 100ms;
                 5: 200ms;
                 6: 500ms;
                 7: invalid;
                 8: 3ms."                       \"0: The OAM Send function is Disabled;
                 1: The OAM Send function is Eabled;"                       b"0: The OAM Receive function is Disabled;
                 1: The OAM Receive function is Eabled;"                       )"0: disable;
                 1: enable;"                      "If the oam receives CV/FFD, it records the parameters 
                 included in the packet, such as OAM type and frequency.
                 If the oam does not receive any CV/FFD packet before the timer
                 expires, It will send BDI with dLOCV defect."                       c"1: stop detect;                    
                 2: start detect; 
                 3: ready."                       <"0: available state;
                 1: unavailable state."                      ("0: no defect;
                 1: dServer,
                 2: dPeerMe,
                 3: dLOCV, Loss of Connectivity Verification defect;
                 4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                 5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect.;
                 6: dExcess, Receiving excess rate of CV/FFD;
                 7: dUnknown, Unknown defect in the MPLS network.
                 8: dOamFail, AutoProtocal timer expires.
                 9: corouteDown, coroute down."                      �"0: no defect;
                 1: dServer,
                 2: dPeerMe,
                 3: dLOCV, Loss of Connectivity Verification defect;
                 4: dTTSIMismatch, Trail Termination Source Identifier Mismatch defect;
                 5: dTTSIMismerge, Trail Termination Source Identifier Mismerge defect.;
                 6: dExcess, Receiving excess rate of CV/FFD;
                 7: dUnknown, Unknown defect in the MPLS network.
                 8: dOamFail, AutoProtocal timer expires."                       \"This variable is used to create, modify, and
                 delete a row in this table. "                       �"
                 1: ptnMode;
                 2: routerMode;
                Valid only for the bidirectional tunnel configuration."                      H"BDI is generated at the trail termination source point of 
            a return path in response to a defect detected at the trail 
            termination sink point of an LSP in the forwarding direction. 
            The frequency of BDI can be set by user.
            1: perSecond;
            2: same as detect frequency."                       8"0: disable                 
                 1: enable"                           s"This notification is generated when the LSP is found
                 not in the defect state at the LSP ingress."                 o"This notification is generated when the LSP is found
                 in the defect state at the LSP ingress."                 r"This notification is generated when the LSP is found
                 in the available state at the LSP ingress."                 t"This notification is generated when the LSP is found
                 in the unavailable state at the LSP ingress."                 r"This notification is generated when the LSP is found
                 not in the defect state at the LSP egress."                 n"This notification is generated when the LSP is found
                 in the defect state at the LSP egress."                 q"This notification is generated when the LSP is found
                 in the available state at the LSP egress."                 s"This notification is generated when the LSP is found
                 in the unavailable state at the LSP egress."                 |"If autoprotocol is enabled, this notification is generated when 
                 egress receives the first CV/FFD packet."                ,"The FDI packet is used by the upstream node in an LSP 
                to inform the egress of the defect information.
                It is also generated when the auto protocol is enabled, 
                with which the LSP ingress notifies the egress to stop 
                the OAM detection."                 7"This notification is generated when the Rlsn is down."                 ;"OAM detected that the local L2VC exited the defect state."                 <"OAM detected that the local L2VC entered the defect state."                 ?"OAM detected that the local L2VC entered the available state."                 A"OAM detected that the local L2VC entered the unavailable state."                 c"This notification is generated when the CO-ROUTE is found
               not in the defect state."                 ^"This notification is generated when the CO-ROUTE is found
              in the defect state."                 b"This notification is generated when the CO-ROUTE is found
               in the available state."                 c"This notification is generated when the CO-ROUTE is found
              in the unavailable state."                     |"This table specifies per-protection-group MPLS PS 
                capability and associated information.
                "                       x"An entry in this table is created by an LSR for every 
                protection group capable of supporting mpls ps."                       ["This is a unique index for an entry in the mplspsEntry.
                
                "                      q"The type of protection switch,can be 1:1,1+1,shared mesh,
                packet 1+1,the default choice is 1:1.
                In the 1+1 architecture type, a protection LSP is dedicated to 
                each working LSP with the working LSP bridged onto the 
                protection LSP at the source of the protection domain. 
                The traffic on working and protection LSPs is transmitted 
                simultaneously to the sink of the protection domain, 
                where a selection between the working and protection LSP is 
                made, based on some predetermined criteria, such as defect 
                indication.
                In the 1:1 architecture type, a protection LSP is dedicated to 
                each working LSP. The working traffic is transmitted either by 
                working or protection LSP.
                In the shared mesh architecture type, possible sharing of 
                protection capacity between disjoint link, node in the network 
                is achieved while guaranteeing recovery from a single failure.
                In the packet 1+1 architecture type, the traffic is transmitted 
                simultaneously onto two possibly disjoint routed LSPs to the 
                sink of the protection domain. Each pair of duplicate 
                transmitted packets is assigned the same identifier (sequence 
                number) but distinct from the other pairs of duplicate packets. 
                At the sink of the protection domain packet level selection 
                mechanism is employed to select one of the two possibly 
                received copies of each packet. 
                1:  1:1 protection switching,;
                2:  1+1 protection switching;
                3:  shared mesh protection swiching;
                4:  packet 1+1 protection switching.
                "                       "The name of work-tunnel."                       $"Work-tunnel id(session-tunnel-id)."                       "The name of protect-tunnel."                       '"Protect-tunnel id(session-tunnel-id)."                      K"Revertive mode is a protection switching mode where revertive 
                action (switch back to the working LSP) is taken after the 
                working LSP is repaired.And switching does not occur in a
                non-revertive mode.
                1: revertive;
                2: non-revertive;
                "                      "Wait to Restore timer is only applicable for the revertive mode 
                and applies to a working LSP,It prevents reversion back to 
                select the working LSP until the Wait to Restore timer has 
                expired.The default value is 12 minutes.step is 30s."                       �"The time between declaration of signal degrade or signal fail, 
                and the initialization of the protection switching algorithm.
                step is 100ms.maximum is 10s."                      "The current switch condition of the protection group.
                1: clear,This command clears all of the externally 
                   initiated switch commands listed below;
                2: lockout of protection,Fix the selector position on the 
                   working LSP,Prevents the selector from switching to the 
                   protection LSP when it is selecting the working LSP. 
                   Switches the selector from the protection to the working LSP 
                   when it is selecting the protection LSP;
                3: forced protection,Switches the selector from the working LSP 
                   to the protection LSP (unless a higher priority switch 
                   request (i.e., LoP) is in effect);
                4: signal fail,for 1:1,Signal Fail (SF) is declared when the 
                   source of the protection domain enters the Defect State by 
                   receiving a BDI packet (from the return LSP or out of band).
                5: manual switch for working-lsp,Switches the selector from the 
                   working LSP to the protection LSP (unless an equal or higher 
                   priority switch request (i.e., LoP, FS, SF or MS) is in 
                   effect);
                6: manual switch for protection-lsp,Switches the selector from 
                   the protection LSP to the working LSP (unless an equal or 
                   higher priority switch request (i.e., LoP, FS, SF or MS) is 
                   in effect).
                7: WTR-timer;
                8: HoldOff-timer;
                9: Others;
                The pripority of the commands are:
                clear > lockout of protection > force switch > manual switch for working
                lsp = manual switch for protection lsp"                       �"The state of working tunnel state in one protection group,
                whether it is in detection,
                1: it is outof defect
                2: it enters defect
                "                       �"The state of protection tunnel state in one protection group,
                whether it is in detection,
                1: it is outof defect
                2: it enters defect"                       z"Which tunnel is used to transfer the data stream.
                1: working-tunnel
                2: protection-tunnel"                       �"The type of protection switch which is configured.
                1: 1:1
                2: 1+1
                3: shared mesh
                4: packet 1:1"                       '"Protect-tunnel id(session-tunnel-id)."                      \"Revertive mode is a protection switching mode where revertive 
                action (switch back to the working LSP) is taken after the 
                working LSP is repaired.And switching does not occur in a
                non-revertive mode.
                1: revertive;
                2: non-revertive;
                
                "                      "Wait to Restore timer is only applicable for the revertive mode 
                and applies to a working LSP,It prevents reversion back to 
                select the working LSP until the Wait to Restore timer has 
                expired.The default value is 12 minutes.step is 30s."                       �"The time between declaration of signal degrade or signal fail, 
                and the initialization of the protection switching algorithm.
                step is 100ms.maximum is 10s."                      "This variable is used to create, modify, and
                delete a row in this table.
                1: active
                2: not in service
                3: not ready
                4: create and go
                5: create and wait
                6: destroy"                      �"The current local state of the protection group.
                0: Lockout of Protection (LO)
                1: Signal Fail for Protection (SF-P)
                2: Forced Switch (FS) 
                3: Signal Fail for Working (SF) 
                4: Signal Degrade for Protection(SD-P)
                5: Signal Degrade for Working(SD) 
                6: Manual Switch (MS) 
                7: Wait-to-Restore (WTR) 
                8: Exercise (EXER)
                9: Reverse Request(RR)
                10: Do Not Revert (DNR)
                11: No Request (NR) 
                The pripority of the commands are:
                LO > SF-P > FS > SF > SD-P > SD > MS > WTR > EXER > RR > DNR > NR"                       &"1:enable;
                2:disable;"                       "Description."                      "this table for these commands
                1.mpls te protection tunnel XXX
                2. mpls te reverse-lsp { lsp-name XXXX | lsr-id X.X.X.X tunnel-id x }                                               
                3. mpls te reserved-for-binding  "                       >"The  index of working tunnel interface of Protection group  "                       8"It is used by command ' mpls te reserved-for-binding '"                       7"It is used for command ' mpls te reverse-lsp lspname'"                       �"
                1: active;
                2: notInservice;
                3: notReady;
                4: CreateAndGo;
                5: CreateAndWait;
                6: destroy;"                       K"It is used for command ' mpls te reverse-lsp lsr-id X.X.X.X tunnel-id XX'"                       K"It is used for command ' mpls te reverse-lsp lsr-id X.X.X.X tunnel-id XX'"                      �"Indicates the alarm reason as below:
                1. Bridge type mismatch, one side is 1:1 (Selector Bridge) protection, 
                   the other side is 1+1 (Permanent Bridge) protection;
                2. Channel type mismatch, one side has APS channel, the other side has no APS channel;
                3. Switching type mismatch, one side is bidirectional switching, 
                   the other side is unidirectional switching;
                4. Operation type mismatch, one side is revertive operation, 
                   the other side is non-revertive operation; 
                5. Traffic request mismatch, one side selects working connection, 
                   the other side selects protection connection;
                "                           k"This notification is generated when switching from
                protection-lsp to working-lsp occured."                 {"This notification is generated when switching from woking-lsp
                to protection-lsp occured.
                "                 �"
                Trap information indicates fully incompatible provisioning and 
                working/protection configuration mismatch are detected by APS frame.
                "                 �"
                Trap information indicates fully incompatible provisioning and 
                working/protection configuration mismatch recovery are detected by APS frame.
                "                 n"
                Tunnel protection group did not receive APS frames from protection tunnel.
                "                 g"
                Tunnel protection group received APS frames from protection tunnel.
                "                 T"
                Tunnel protection group changed to defect state.
                "                 X"
                Tunnel protection group recovered from defect state.
                "                 N"
                Protection tunnel changed to defect state.
                "                 R"
                Protection tunnel recovered from defect state.
                "                 T"
                Tunnel protection group changed to defect state.
                "                 X"
                Tunnel protection group recovered from defect state.
                "                 b"
                Working or protection path mismatch are detected by APS frame.
                "                 k"
                Working or protection path mismatch recovery are detected by APS frame.
                "                 b"
                Working or protection type mismatch are detected by APS frame.
                "                 k"
                Working or protection type mismatch recovery are detected by APS frame.
                "                         +"The compliance statement for mpls oam ps."                   6"The compliance statement for mpls oam ps management."                 7"The compliance statement for mpls oam ps reverse lsp."                 "Description."                             ,"The compliance statement for mpls oam all."                 -"The compliance statement for mpls oam trap."                                    