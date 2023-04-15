Z-- =================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: The HUAWEI-DC-BASE-MIB provides information about DataComm TRAPS
-- 
-- Reference:
-- Version:     V2.12
-- History:
-- 
-- =================================================================
                     /"This is the base trap definition for DataCom." �"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
                 " "201801151200Z" "201712051200Z" "201712051200Z" "201710261200Z" "201609091200Z" "201607251400Z" "201506021411Z" "201410131411Z" "201410091411Z" "201409011411Z" "201306251411Z" "201305240000Z" "200701170000Z" "v2.12, modify the description" 2"v2.11, add new node:hwCmuAlarm, hwCmuAlarmResume" "v2.10, add nps node" 2"v2.09, add new node: hwHdlcIICPacketCrcErrResume" ,"v2.08, add new node: hwHdlcIICPacketCrcErr" 7"V2.07,hwEntBandwidthMode, hwEntityBandwidthModeChange" )"V2.06, hwVsDiskFullAlarm,hwVsDiskResume" B"V2.05, delete the content modified in V2.04 to rollback to V2.03" L"V2.04, add ifindex as VB binder under hwPortPhysicalUp, hwPortPhysicalDown" b"V2.03, add ifOperStatus and ifAdminStatus to objects of hwPortPhysicalDown and hwPortPhysicalUp " %"V2.02, add hwPortPhysicalDownReason" a"V2.01, Add new nodes : hwFESInconsistencyForMemoryLack , hwFESInconsistencyForMemoryLackResume." "V1.0, the first draft."       -- Jan 15, 2018 at 12:00 GMT
            "To describe the level of trap."                       )"To describe the probable cause of trap."                       "To describe the type of trap."                      V"This object may contain a key word to indicate the relative
                resource of an entity.
                Such as:
                    hwEntityCommunicateError alarm may relate to a resource 
                    named 'IPC01'(A specified channel). So the trap may contain such a varbind in 
                    DisplayString style."                       8"To describe the reason of trap in DisplayString style."                       1"A table to config the threshold of each sensor."                       "The entry of threshold table."                       |"The index to indicate the type of threshold for an entry.Such as
                temperature, humidity ,power supply......"                       8"A subindex to identify each sensor on physical entity."                       '"The current value that been measured."                      6"The unit for this threshold value.
                
                percentage(1)         ---unit for humidity
                
                centigrade1(2)        ---unit for temperature
                centigrade2(3)        ---unit for hundredth of centigrade
                
                voltage1(4)           ---unit for volt (V)
                voltage2(5)           ---unit for thousandth of volt (mV)
                
                electric current:
                current1(6)           ---unit for milliampere (mA)
                current2(7)           ---unit for microampere (uA)
                
                power1(8)             ---unit for dbm(decibels above one milliwatt in 600 ohms)
                power2(9)             ---unit for hundredth of dbm(decibels above one milliwatt in 600 ohms)"                      %"The critical alarm threshold for falling alarm. It could be used
                for a more dangerous instance than hwBaseThresholdLowWarning.
                
                It should be equal to hwBaseThresholdLowWarning when don't support
                this threshold.
                "                       2"The normal warning threshold for falling alarm. "                       1"The normal warning threshold for rising alarm. "                      "The critical alarm threshold for rising alarm. It could be used
                for a more dangerous instance than hwBaseThresholdHighWarning.
                
                It should be equal to hwBaseThresholdHighWarning when don't support
                this threshold."                       :"A table to config the threshold for each storage device."                       !"The entry for hwBaseUsageTable."                       n"The index to indicate the type of threshold for an entry.Such as
                cpu,memory,flash and so on."                       8"A subindex to identify each sensor on physical entity."                       '"The current value that been measured."                       �"The unit for this threshold value.
                
                percentage(1)         ---unit for cpu/men/disk/flash/cfCard
                "                       ,"The threshold of usage for storage device."                       "module is ipv4 or ipv6"                       L"
                The direction of data flow is specified.
                "                       '"The direction of photoelectric power."                       *"The traffic flows in or out of the port."                       "The rated power of board."                        "Available power of the device."                       "Total power of the device."                       "The current type of port."                       "The last type of port."                      
"AUAIS: The RX detects administrative(A) unit(U) alarm(A) indication(I) signal(S).
           B1TCA: The RX detects b1(B1) threshold(T) crossing(C) alarm(A).
           B2TCA: The RX detects b2(B2) threshold(T) crossing(C) alarm(A).
           B3TCA: The RX detects b3(B3) threshold(T) crossing(C) alarm(A).
           LAIS: The RX detects line(L) alarm(A) indication(I) signal(S).
           LCD: The RX detects loss(L) of code-group(C) delineation(D).
           LOF: The RX detects loss(L) of(O) frame(F).
           LOM: The RX detects loss(L) of(O) multiframe(M).
           LOP: The RX detects loss(L) of(O) pointer(M).
           LOS: The RX detects loss(L) of(O) signal(S).
           LRDI: The RX detects line(L) remote(R) defect(D) indication(I).
           LREI: The RX detects line(L) remote(R) error(D) indication(I).
           OOF: The RX detects out(O) of(O) frame(F).
           PAIS: The RX detects path(P) alarm(A) indication(I) signal(S).
           PPLM: The RX detects path(P) payload(P) label(L) mismatch(M).
           PRDI: The RX detects path(P) remote(R) defect(D) indication(I).
           PREI: The RX detects path(P) remote(R) error(E) indication(I).
           PUNEQ: The RX detects path(P) unequipped(UNEQ).
           RDOOL: The RX detects receive(R) data(D) out(O) of(O) lock(L).
           RROOL: The RX detects receive(R) reference(R) out(O) of(O) lock(L).
           SD: The RX detects signal(S) degrade(D).
           SF: The RX detects signal(S) fail(F).
           TROOL: The TX detects transmit(T) reference(R) out(O) of(O) lock(L).
           WLINK: The RX detects pcs link has failed (wis mode).
           TRANSCEIVER_OFFLINE: The transceiver is not in position.
           TRANSCEIVER_FAIL: A hardware failure occurs when accessing the transceiver.
           TRANSCEIVER_MISMATCH: The transceiver does not match the port-mode.
           TRANSCEIVER_UNKNOWN: The transceiver is unknown type.
           PMA_LOS: The PMA(physical medium attachment) detects loss of signal.
           PMA_UNLOCK: The PMA(physical medium attachment) detects receive data out of lock.
           PCS_HIGHBER: The PCS(physical coding sublayer) enter High-BER status.
           PCS_UNLOCK: The PCS(physical coding sublayer) detects receive data out of lock.
           LOCAL_FAULT: The RX detects Local Fault signal.
           REMOTE_FAULT: The RX detects Remote Fault signal.
           NEGOTIATION_FAIL: Auto-negotiation is not successful.
           SOFT_FORCE_DOWN: The interface was DOWN triggered by a protocol module or was administratively shut down."                       "The bandwidth mode of card."                       "Patch package name."                       "Patch package version."                       "Cause of the failure."                       "Virtaul machine name."                       "OS memory usage."                       "The ovload threshold."                       "The NE name."                       "The trap fault ID."                       "The ca class type."                       !"The remain days of certificate."                       "The fault alarm reason."                       "The partition name."                       "The usage of partition."                       "The threshold of overload."                       #"The available space of partition."                       "The caption threshold."                       "The VNFC type."                       "The application type."                       "The application version type."                       "The application version ID."                       "MANO layer VMID."                       "The certificate file name."                       #"The certificate valid begin time."                       ""The certificate valid end time.."                       "Physical layer VMID."                       "The IP of VNFM."                       "The port of VNFM."                       "The local VM name."                       "The remote VM name."                       "The plane ID."                       "The threshold of subhealth."                       "The vendor ID."                       "The device ID."                       "The driver type of device."                       "The name of VNFC."                       "The name of RU."                       "The port name."                       "The IP address."                               :"This object indicates that a physical entity is removed."                 ;"This object indicates that a physical entity is inserted."                 c"This object indicates that an alarm is generated when a physical entity is not securely inserted."                 l"This object indicates that the alarm generated when a physical entity is not securely inserted is cleared."                 8"This object indicates that a physical entity is reset."                 N"This object indicates that a physical entity is restarted and runs properly."                 5"This object indicates that channel detection fails."                 8"This object indicates that channel detection recovers."                 9"This object indicates that a physical entity is faulty."                 E"This object indicates that a physical entity recovers from a fault."                 K"This object indicates that a physical entity exits from the active state."                 >"This object indicates that a physical entity becomes active."                 ?"This object indicates that a physical entity becomes offline."                 >"This object indicates that a physical entity becomes online."                 ="This object indicates that physical entity detection fails."                 @"This object indicates that physical entity detection recovers."                 @"This object indicates that physical entity registration fails."                 C"This object indicates that physical entity registration succeeds."                 "Dying gasp event is occurred."                 3"The bandwidth mode of physical entity is changed."                 ""The CMU monitoring module alarm."                 ,"The CMU monitoring module alarm recovered."                     k"This object indicates that an alarm is generated when the temperature sensor exceeds the upper threshold."                 t"This object indicates that the alarm generated when the temperature sensor exceeds the upper threshold is cleared."                 '"Temperature fall below LOW threshold."                 #"Temperature back to normal level."                 $"Humidity rise over HIGH threshold."                  "Humidity back to normal level."                 $"Humidity fall below LOW threshold."                  "Humidity back to normal level."                 g"This object indicates that an alarm is generated when the voltage sensor exceeds the upper threshold."                 p"This object indicates that the alarm generated when the voltage sensor exceeds the upper threshold is cleared."                 g"This object indicates that an alarm is generated when the voltage sensor exceeds the lower threshold."                 p"This object indicates that the alarm generated when the voltage sensor exceeds the lower threshold is cleared."                 #"Current rise over HIGH threshold."                 "Current back to normal level."                 #"Current fall below LOW threshold."                 "Current back to normal level."                 /"Photoelectric power rise over HIGH threshold."                 +"Photoelectric power back to normal level."                 /"Photoelectric power fall below LOW threshold."                 +"Photoelectric power back to normal level."                 <"The available power of device is not enough for the board."                 A"The available power of device becomes sufficient for the board."                 V"ACU current startup system software and next startup system software are difference."                     $"One of the power is shutting down."                 ""One of the power is starting up."                 $"The power is not of the same type!"                 ("The power is changed to the same type!"                     #"CPU utilization exceed threshold."                 '"CPU utilization back to normal level."                     ("One of the port physical connect down."                 &"One of the port physical connect up."                 #"One of the port has none traffic."                 !"One of the port traffic resume."                 ."One of the port traffic rise over threshold."                 1"One of the port traffic resume to normal level."                 0"One of the port CRC error rise over threshold."                 3"One of the port CRC error resume to normal level."                 9"One of the Ethernet port broadcast rise over threshold."                 <"One of the Ethernet port broadcast resume to normal level."                 9"One of the Ethernet port works on the half-duplex mode."                 9"One of the Ethernet port works on the full-duplex mode."                 "One of the port type changed."                 *"One of the port auto-negotiation failed."                 +"One of the port auto-negotiation resumed."                     1"Storage device utilization rise over threshold."                 -"Storage utilization resume to normal level."                 3"The disk usage exceeded  the overload threadhold."                 1"The disk usage fall below the clear threashold."                             ?"The board is suspended for IPv4/IPv6 FIB capability overload."                 ="The board is recovered for FIB capability overload suspend."                 @"The board is forwarding for IPv4/IPv6 FIB capability overload."                 G"The board is recovered for IPv4/IPv6 FIB capability overload forward."                 �"Because the memory usage of the interface board exceeds the upper threshold, the 
                FES cannot add new entries. As a result, the entries of the interface board is inconsistent with those of the main  board."                 �"The memory usage of the interface board reduces to the lower threshold, and the FES can add entries. 
                The entries of the interface board is consistent with those of the main board."                     %"The interface Loopback is detected."                 +"The interface is recovered from Loopback."                     h"
                The object is in congested state and some of the frames are dropped.
                "                 O"
                Alarms of the congested object are cleared.
                "                      "Device abnormal or pulled out."                     Q"Failed to allocate resources for BFD because hardware resources were exhausted."                 ="BFD recovered from alarms of hardware resources exhausting."                     �"Failed to allocate resources for OAM because hardware resources were exhausted. 
                MPLS OAM is short for Operation Administration and Maintenance by MPLS. 
                It is used for connectivity verification of MPLS LSP."                 �"OAM recovered from alarms of hardware resources exhausting.
                MPLS OAM is short for Operation Administration and Maintenance by MPLS. 
                It is used for connectivity verification of MPLS LSP."                     %"The interface Loopback is detected."                 +"The interface is recovered from Loopback."                 "The packet(s) crc error"                  "The packet(s) crc error resume"                     M"This object indicates the software failure in the automatic upgrade system."                     7"Optical rxpower or txpower is exceed threshold value."                 "Optical power resume."                     "Patch Installation Failed."                 "Patch Installation Success."                 "Patch Package Error."                 "Patch Package success."                 "System Configuration Error."                 "System Configuration Error."                 ."Inner SSL Certificate Invalid Early Warning."                 -"Inner SSL Certificate Invalid Early resume."                 &"Inner SSL Certificate Invalid Alarm."                 -"Inner SSL Certificate Invalid Alarm resume."                 +"Disk Partition Usage Exceeding Threshold."                 2"Disk Partition Usage Exceeding Threshold Resume."                 "Disk Partition Unavailable."                 $"Disk Partition Unavailable resume."                 $"Disk Partition Space Insufficient."                 +"Disk Partition Space Insufficient resume."                 "Executable Files Incomplete."                 "Executable Files Incomplete."                 "Software Integrity Error."                 "Software Integrity Error."                 /"Master and Slave OMU Synchronization Failure."                 ."Master and Slave OMU Synchronization resume."                 "Virtual Machine Disk Invalid."                 "Virtual Machine Disk Resume."                 "Database Restoration Failure."                 "SSL Certificate Expired."                 ("SSL Certificate Expired Early Warning."                 ("Virtual Machine Resource Inconsistent."                 ("Virtual Machine Resource Inconsistent."                 "Virtual Machine Fault."                 "Virtual Machine Resume."                  "VNF And VNFM Connection Fault."                 !"VNF And VNFM Connection Resume."                 ("Fabric OAM Detected Fabric Plane Down."                 ("Fabric OAM Detected Fabric Plane Down."                 "Fabric Link Goes Subhealthy."                 "Fabric Link Goes Subhealthy."                 "Driver Type Mismatch."                 "Driver Type Mismatch."                 "RU Create Failed."                 "RU Create success."                 &"Setting Security Group Rules Failed."                 &"Setting Security Group Rules Resume."                         _"Compliance statement for agents that provide full support for 
                hwBaseTrapMIB."                   "Group for base trap objects."                 "Group for all base traps."                                    