�-- ============================================================================
-- Copyright (C) 2018 by HUAWEI TECHNOLOGIES. All rights reserved.
--
-- Description: This module defines TEXTUAL-CONVENTION that is used by Huawei devices,
-- including HWFrameType, HWPCBType,HWSubPCBType, and HWPortType. The following talbe
-- lists the code area used by each product.
-- Reference:
-- Version: V8.30
-- History:562047
-- ============================================================================
   u"This object is not used any longer.To show the relevant virtual entity type in vender type object.
                "               �"This object is not used any longer.To the nodes that don't supported in the MIB table ,the default value
                should be return for keeping the integrity of the OID in the MIB table,
                and the default string is '000000'. "              "
                This object is not used any longer.To the nodes that don't supported in the MIB table ,the default value
                should be return for keeping the integrity of the OID in the MIB table,
                and the default string is the null string. "               U"To show the relevant additional entity type in vender type object.
                "              �"This data type is used as the syntax of the
                hwSubslotType object in the definition of
                HUAWEI-DEVICE-MIB's hwSubslotTable.

                The definition of this textual convention with the
                addition of newly assigned values is published
                periodically by the Huawei MIB Criterion Group, every
                value indicate a SubPCB produced by Huawei.
                "               �"This object is not used any longer.To the nodes that don't supported in the MIB table ,the default value
                should be return for keeping the integrity of the OID in the MIB table,
                and the default IP address is 0.0.0.0."              �"This data type is used as the syntax of the
                hwSlotType object in the definition of
                HUAWEI-DEVICE-MIBs hwSlotTable.

                The definition of this textual convention with the
                addition of newly assigned values is published
                periodically by the Huawei MIB Criterion Group, every
                value indicate a PCB produced by Huawei.

                "              @"
                This object is not used any longer.To the nodes that don't supported in the MIB table ,the default value
                should be return for keeping the integrity of the OID in the MIB table ,
                and the type of the default value is INTEGER, and default value is 65535.

                "               F"This object is not used any longer.SNMP expand Error code defintion."              �"This data type is used as the syntax of the
                hwframeType object in the definition of
                HUAWEI-DEVICE-MIBs hwframeTable.

                The definition of this textual convention with the
                addition of newly assigned values is published
                periodically by the Huawei MIB Criterion Group, every
                value indicate a frame produced by Huawei.
                  "              8"This data type is used as the syntax of the ifType
                object in the (updated) definition of MIB-II's
                ifTable.

                The definition of this textual convention with the
                addition of newly assigned values is published
                periodically by the IANA, in either the Assigned
                Numbers RFC, or some derivative of it specific to
                Internet Network Management number assignments.  (The
                latest arrangements can be obtained by contacting the
                IANA.)

                Requests for new values should be made to IANA via
                email (iana@iana.org).

                The relationship between the assignment of ifType
                values and of OIDs to particular media-specific MIBs
                is solely the purview of IANA and is subject to change
                without notice.  Quite often, a media-specific MIB's
                OID-subtree assignment within MIB-II's 'transmission'
                subtree will be the same as its ifType value.
                However, in some circumstances this will not be the
                case, and implementors must not pre-assume any
                specific relationship between ifType values and
                transmission subtree OIDs.

                "                                                         1"Huawei text conventions and common  defination." �"Huawei Industrial Base
                  Bantian, Longgang
                   Shenzhen 518129
                   People's Republic of China
                   Website: http://www.huawei.com
                   Email: support@huawei.com
              " "201808031000Z" "201808021000Z" "201807251000Z" "201807251000Z" "201807241000Z" "201807131000Z" "201807110000Z" "201807110000Z" "201807060000Z" "201807030000Z" "201806300000Z" "201806290000Z" "201806280000Z" "201806200000Z" "201806190000Z" "201806120000Z" "201805240000Z" "201805240000Z" "201805220000Z" "201805180000Z" "201805120000Z" "201805100000Z" "201805020000Z" "201804190000Z" "201804161000Z" "201804091000Z" "201804021000Z" "201803311400Z" "201803311000Z" "201803231000Z" "201803171700Z" "201803131000Z" "201803031000Z" "201802281000Z" "201802231000Z" "201802051000Z" "201801301000Z" "201801191000Z" "201801181000Z" "201801151000Z" "201801091000Z" "201801031000Z" "201801031000Z" "201712211000Z" "201712201000Z" "201712161000Z" "201712131000Z" "201711271000Z" "201711231000Z" "201711171000Z" "201711140000Z" "201711020000Z" "201711011000Z" "201710310000Z" "201710230000Z" "201710190000Z" "201710190000Z" "201710090000Z" "201709260000Z" "201709210000Z" "201709120000Z" "201709040000Z" "201708310000Z" "201708260000Z" "201708220000Z" "201708210000Z" "201708160000Z" "201708100000Z" "201708070000Z" "201708040000Z" "201707310000Z" "201707180000Z" "201707140000Z" "201707120000Z" "201707030000Z" "201706290000Z" "201706270000Z" "201706241800Z" "201706220000Z" "201706210000Z" "201706160000Z" "201706100000Z" "201706090000Z" "201706080000Z" "201705240000Z" "201705190914Z" "201705160000Z" "201705110000Z" "201705090000Z" "201705020000Z" "201704220000Z" "201704110000Z" "201704070930Z" "201704060930Z" "201703290930Z" "201703280000Z" "201703220000Z" "201703210000Z" "201703200000Z" "201703100000Z" "201703040000Z" "201702280000Z" "201702200000Z" "201702141000Z" "201702100000Z" "201701260000Z" "201701230000Z" "201612270000Z" "201612240000Z" "201612220000Z" "201612130000Z" "201612060000Z" "201612020000Z" "201611160000Z" "201611100000Z" "201611090000Z" "201611070000Z" "201611020000Z" "201610290000Z" "201610260000Z" "201610250000Z" "201610190000Z" "201610160000Z" "201610080000Z" "201609290000Z" "201609280000Z" "201609240000Z" "201609230000Z" "201609210000Z" "201609100000Z" "201609020000Z" "201608270000Z" "201608160000Z" "201608150000Z" "201608130000Z" "201608050000Z" "201607300000Z" "201607270000Z" "201607180000Z" "201607150000Z" "201607120000Z" "201607090000Z" "201607080000Z" "201607050000Z" "201606301700Z" "201606181700Z" "201606171700Z" "201606080000Z" "201606070000Z" "201606060000Z" "201606030000Z" "201605310000Z" "201605270000Z" "201605170000Z" "201605130000Z" "201605111400Z" "201605110000Z" "201605040000Z" "201604220000Z" "201604210000Z" "201604190000Z" "201604161000Z" "201604151000Z" "201604150000Z" "201604140000Z" "201604110000Z" "201604070000Z" "201604011100Z" "201603291700Z" "201603290000Z" "201603251000Z" "201603211701Z" "201603211635Z" "201603211500Z" "201603181700Z" "201603171700Z" "201603111700Z" "201602291700Z" "201602220900Z" "201602170900Z" "201602030900Z" "201602020900Z" "201601281500Z" "201601280000Z" "201601221600Z" "201601191600Z" "201601181600Z" "201601141600Z" "201601111600Z" "201512281600Z" "201512260000Z" "201512230000Z" "201512220000Z" "201512180000Z" "201512150000Z" "201512100000Z" "201512090000Z" "201512072126Z" "201512041000Z" "201511270000Z" "201511240000Z" "201511191700Z" "201511171000Z" "201511161953Z" "201511051953Z" "201511051000Z" "201510311700Z" "201510301000Z" "201510271000Z" "201510231000Z" "201510221000Z" "201510201000Z" "201510131000Z" "201510101000Z" "201509301000Z" "201509291000Z" "201509171000Z" "201509161000Z" "201509151000Z" "201509110900Z" "201509101400Z" "201508241000Z" "201508131000Z" "201508071900Z" "201508071800Z" "201507220800Z" "201507160800Z" "201507011800Z" "201506241800Z" "201506231200Z" "201506181600Z" "201506171600Z" "201506151600Z" "201505271600Z" "201505211200Z" "201505210000Z" "201505120000Z" "201504211134Z" "201504171200Z" "201504111200Z" "201504091200Z" "201504081200Z" "201504011200Z" "201503311200Z" "201503301200Z" "201503241200Z" "201503231200Z" "201503111200Z" "201503091200Z" "201502091200Z" "201502031200Z" "201502021200Z" "201501311708Z" "201501291200Z" "201501291200Z" "201501281200Z" "201501271200Z" "201501211200Z" "201501101200Z" "201412291200Z" "201412231200Z" "201412191200Z" "201412081200Z" "201412041200Z" "201412031200Z" "201412011200Z" "201411271200Z" "201411251200Z" "201411201200Z" "201411141200Z" "201411051200Z" "201410221200Z" "201410201200Z" "201410161200Z" "201408301200Z" "201407031200Z" "201406231200Z" "201406161200Z" "201406121200Z" "201406111400Z" "201406101200Z" "201406061200Z" "201406041200Z" "201405151200Z" "201405061200Z" "201402201400Z" "201402171700Z" "201401291605Z" "201401071200Z" "201312121200Z" "201310161200Z" "201309161200Z" "201308151200Z" "201308031200Z" "201307051200Z" "201307041200Z" "201306081200Z" "201306071200Z" "201305150000Z" "201305081200Z" "201305020000Z" "201303220000Z" "201303210000Z" "201303190000Z" "201303150000Z" "201303140000Z" "201302280000Z" "201302250000Z" "201301310000Z" "201301190000Z" "201301140000Z" "201301040000Z" "201211260000Z" "201211200000Z" "201211150000Z" "201211120000Z" "201210301500Z" "201209060000Z" "201209030000Z" "201208250000Z" "201208140000Z" "201208130000Z" "201207300000Z" "201207260000Z" "201207250000Z" "201207230000Z" "201206130000Z" "201206070000Z" "201205080000Z" "201203060000Z" "201202150000Z" "201202130000Z" "201202020000Z" "201201160000Z" "201201130000Z" "201111220000Z" "201111160000Z" "201111150000Z" "201111020000Z" "201110280000Z" "201110200000Z" "201110190000Z" "201109300000Z" "201109260000Z" "201109230000Z" "201109160000Z" "201109050000Z" "201108250000Z" "201108080000Z" "201107040000Z" "201107010000Z" "201106130000Z" "201106070000Z" "201105030000Z" "201103010000Z" "201102220000Z" "201101270000Z" "201101260000Z" "201101140000Z" "201101110000Z" "201012280000Z" "201012130000Z" "201011260000Z" "201011150000Z" "201009290000Z" "201009250000Z" "201009010000Z" "201008110000Z" "201007300000Z" "201007150000Z" "201007080000Z" "201006170000Z" "201006010000Z" "201005150000Z" "201004280000Z" "201004230000Z" "201004090000Z" "201003260000Z" "201003230000Z" "201003090000Z" "201003020000Z" "201002220000Z" "201002110000Z" "201001290000Z" "201001260000Z" "201001120000Z" "200912170000Z" "200912080000Z" "200912040000Z" "200911250000Z" "200911190000Z" "200911170000Z" "200911110000Z" "200910300000Z" "200910290000Z" "200910280000Z" "200910270000Z" "200910160000Z" "200910130000Z" "200910120000Z" "200306280000Z" �"V8.30,
	    		 Add: bnameVPQ(156081),              --G.FAST vectoring serial control engine board of the MA5818 device.
	                " "V8.29,
                         Add: bnameTPJD003CXP00(229494) , --PTN 990
	    Add: bnameTPPMHOSTA000(225440) , --PTN 910E-F
	    Add: bnameTPPMHOSTB000(225441),  --PTN 910E-F
                         Add:bnameNECD00CXPL00(704576),           -- NE05E-S2" �"V8.28,
                         Add: virentANGMHSTD0311(225606),          --ATN 910C-F,ANGM01HSTD,ATN 910C-F DC system,with 6*10GE(o),20*GE/FE(o),4*GE/FE
                         Add: fnameATNDEV910C-F(225607),           --ATN910C-F  chassis" ?"V8.27,
                         Add: fname(00ff102a~00ff1058)"�"V8.26,
			  Add: fnameCE885064CQEI(688174),           -- CloudEngine CE8850-64CQ-EI Switch(64-Port 100GE QSFP28)
			  Add: fnameCE686548S8CQEI(688179),         -- CloudEngine CE6865-48S8CQ-EI Switch(48-Port 25GE SFP28,8*100GE QSFP28)
			  Add: bnameCEL18CQFDAM(688286),                -- (YDJC)Manufactured Board,CloudEngine 12800,CEL18CQFDA-M,18-Port-40GE,18-Port-100GE Interface Card(FDA-M,QSFP+,QSFP28)
			  Add: bnameCE686548S8CQEI(688287),             -- Manufactured Board,CloudEngine 6800,CEM48S8CQP04,48-Port 25GE SFP28 Optical,8-Port 100GE QSFP28 Optical Switch Control Unit,1*1
			  Add: bnameCE885064CQEI(688288),               -- Manufactured Board,CloudEngine 8800,CEM64CQP01,64-Port 100GE QSFP28 Optical,2-Port 10GE SFP+ Optical Switch Control Unit,1*1
			  Add: bnameCEL36CQFDX(688290),                 -- Manufactured Board,CloudEngine 12800E,CEL36CQFD-X,36-Port-100GE Interface XGS Card(FD,QSFP28),1*1
			  Add: bnameCESFU08GX(688291),                  -- Manufactured Board,CloudEngine 12800E,CESFU08GX,CE12808E Switch Fabric Unit G,1*1
			  Add: bnameCESFU16GX(688292),                  -- Manufactured Board,CloudEngine 12800E,CESFU16GX,CE12816E Switch Fabric Unit G,1*1
			  Add: bnameCEL36CQFD1(688296),                 -- Manufactured Board,CloudEngine 12800,CE-L36CQ-FD1,36-Port-100GE Interface Card(FD1,QSFP28)
			  Add: bnameCEL36CQSD(688297),                  -- Manufactured Board,CloudEngine 12800,CE-L36CQ-SD,36-Port-100GE Interface Card(SD,QSFP28)
			  Add: addentnamePDU(688129),                -- PDU  Module
			  Add: addentnameDMU(688130),                -- DMU  Module
			  Add: addentnameDACS(688131),               -- DACS  Module
	                " g"V8.25,
	                 Add: hundredgeOptPort(594),          -- 100GE optical port
	                "1"V8.24, 
                    Add: subbname8090DEVCR56LEXF3(561777),       -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card(CP400,Occupy 1 sub-slot)
                    Add: subbname8090DEVCR5D00LEXF74(561778),
                    Add: subbname8090DEVCR5D00LEXF73(561779),
                    Add: subbname8090DEVCX6D00LEXF10(561780),
                    Add: subbname8090DEVME0D00LEXF70(561781),
                    Add: subbname8090DEVCR56E2NCC3(561782), -- NE40E X16B,CR56E2NCC3 , 2-Port 100GBase-CFP2 Flexible Card(CP400,Occupy 1 sub-slot)
		                  " �"V8.23, 
		                 fname8090CX6601(675955),                   --Quidway CX6601 FRAME for V8R11C00
		                  "�"V8.22, 
		                 Add:virent600DEVCX6P020BKP01(675811),    --CX6602-TB Integrated Chassis Components, CX6P020BKP01
		                 Add:virent600DEVCR5B0BKP0393(675812),    --NE40E-M2K-TB Integrated Chassis Components, CR5B0BKP0393
		                 Add:virent600DEVCX6B0BKP0393(675813),    --CX600-M2K-TB Integrated Chassis Components, CX6B0BKP0393
                         Add:virent600DEVTNRB0BKP0374(675814),    --PTN6900-M2K-TB Integrated Chassis Components, TNRB0BKP0374
		                  "U"V8.21, 
		                 Add:fname8031S5720I-6X-PWH-SI-AC(537270),        --S5720I-6X-PWH-SI-AC for V2R13C00
		                 Add:bname8031S5720I-6X-PWH-SI-AC(537454),        --S5720I-6X-PWH-SI-AC for V2R13C00
		                 Add:subnamePAC1000D5412(536792),                 --1000W AC POWER MODULE for V2R13C00
		                  "�"V8.20,
                                                       Add: virent8090DEVCX6DISUFM012(675810),    -- V8R10C10 for  Flexible Card Integrated Service Unit(ISUF-400)
                                                     Add: virent8090DEVCX6D00E8NC70(675809),    -- V8R10C10 for  8-Port 100GBase-CFP2 Integrated Integrated Service Unit(ISUI-1T)
                                                   " }"V8.19,
                         Add: bname(0x00ff8000-0x00ff8018) subbname(0x00ff4000-0x00ff401d)
                         "!"V8.18,
			  Add: virent8090DEVCR5DLPUFT261(562089),   -- v8r11c00 NE5000E-20 CR5DLPUFT261(SBOM),2T Flexible Card Line Processing Unit(NE5000E LPUF-2T-A,2 sub-slots)
			  Add: virent8090DEVCR57MPUB6(562090),  --Main Processing Unit B6
			  Add: virent8090DEVCR57SFU2TE(562091), --2T Switch Fabric Unit for Single Chassis (SFU-2T-A)
			  Add: virent8090DEVCR56LPUI1T(562092), --8-Port 100GBase-QSFP28- Integrated Line Process Unit(LPUI-1T) NE40E-X16B
			  Add: virent8090DEVCR5DSFUIT250(562093),   -- v8r11c00 Finished Board,NetEngine5000E Cluster,CR55SFUI2TG0,NE5000E 2T Cluster Central Switch Fabric Unit G
			  Add: virent8090DEVCR5DSFUIT26H(562094),   -- v8r11c00 Finished Board,NetEngine5000E Cluster,CR55SFUI2TH0,NE5000E 2T CLC Integrated Switch Fabric Unit for Multi-Chassis (SFUI-2T-H)
							""V8.17,
					Add: bnameH806GPFD(146157),        --  16GPON board of MA5600T.
					Add: bnameH901CGUD(148641),        --  8*GE and 10GE combo board of MA5800.
					Add: bnameH901CGUF(148642),        --  16*XG GPON and GPON combo board of MA5800.
					Add: bnameH901FLHF(148645),        --  16*flex-PON board of MA5800.
					Add: bnameH902CSHF(148646),        --  16*XGS GPON and GPON combo board of MA5800.
					Add: bnameH902GPHF(148647),        --  16*10G GPON board of MA5800.
					Add: bnameH902XEHD(148648),        --  8*10G EPON board of MA5800.
					Add: bnameH902NXED(148649),        --  8*Port ETH board of MA5800.
					Add: bnameH903MPLA(148650),        --  control board of MA5800.
					Add: bnameH902MPLB(148651),        --  control board of MA5800.
					Add: bnameH902CIUA(148652),        --  GPIO board of MA5800.
					Add: bnameH902PILA(148653),        --  Power board of MA5800.
					Add: bnameH901GPUF(148654),        --  16*GPON board of MA5800.
					Add: bnameH901NCEB(148655),        --  2*100G service board of MA5800.
							"O"V8.16,
                    Add:bnameLE3D2X22SX2L(659680),      --S9300X 22-Port 10GE SFP+ Interface Card(X2L,SFP+) for v2r12c00
                    Add:bnameLE1D2X24SX2S(659681),      --S9300 24-Port 10GE SFP+ Interface Card(X2S,SFP+) for v2r12c00
                    Add:bnameLE1D2X08SX2E(659682),      --S9300 8-Port 10GE SFP+ Interface Card(X2E,SFP+) for v2r13  
                    Add:bnameLE1D2S04SX2E(659683),      --S9300 4-Port 10GE SFP+ Interface and 44-Port GE SFP Interface Card(X2E,SFP+) for v2r13
                    Add:bnameLE1D2G24SX2E(659684),      --S9300 24-Port 100/1000BASE-X Interface Card(X2E,SFP) for v2r13
                    Add:bnaemLE1D2X08SX2H(659685),      --S9300 8-Port 10GE SFP+ Interface Card(X2H,SFP+) for v2r13 
                    Add:bnameES1D2G48TX2H(663648),      --48-Port 100/1000BASE-T Interface Card(X2H,RJ45) for v2r13
                    Add:bnameES1D2G48SX2H(663649),      --48-Port 100/1000BASE-X Interface Card(X2H,SFP) for v2r13
                    Add:bnameES1D2X08SX2H(663650),      --8-Port 10GE SFP+ Interface Card(X2H,SFP+) for v2r13
                    Add:bnameET1D2S04SX2E(700489),      --4-Port 10GE SFP+ Interface and 44-Port GE SFP Interface Card(X2E,SFP+) for v2r13
                    Add:bnameET1D2G24SX2E(700490),      --24-Port 100/1000BASE-X Interface Card(X2E,SFP) for v2r13
                    Add:bnameET1D2G48TX2S(700491),      --48-Port 100/1000BASE-T Interface Card(X2S,RJ45) for v2r13
                    Add:bnameET1D2G48SX2S(700492),      --48-Port 100/1000BASE-X Interface Card(X2S,SFP) for v2r13
                    Add:fname8031S5720I-10X-PWH-SI-AC-Sea(537269),         --S5720I-10X-PWH-SI-AC oversea for V2R13C00
                    Add:bname8031S5720I-10X-PWH-SI-AC-Sea(537453),         --S5720I-10X-PWH-SI-AC oversea for V2R13C00                  
                                      "
�"V7.85, 
                     Add: subbname8090DEVANKD001EY200(225623),   --2 Channels 25G (SFP28)/2 Channels 10G (SFP+) High Speed Interface Board
                     Add: subbname8090DEVCR5D00E4XF25(225624),   --4-Port 25GBase-SFP28 Physical Interface Card(PIC)
                     Add: subbname8090DEVCR5D00EJXF60(225640),       --36*10GBase LAN/WAN-SFP+ Flexible Card
                     Add: subbname8090DEVCR5D00LFXF76(537450),    --24-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P481-A)
                     Add: subbname8090DEVCR5D00LFXF75(537451),    --24-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P481-E)
                     Add: subbname8090DEVCX6D00LFXF10(537452),    --24-Port 10GBase LAN/WAN-SFP+ Flexible Card A(S481-A)
                     Add: subbname8090DEVME0D00LFXF70(537453),    --24-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP481)
                     Add: subbname8090DEVCR5D00E2NC78(537454),    --2-Port 100GBase-CFP2 Flexible Card A(P481-E)
                     Add: subbname8090DEVCR5D00E2NC79(537464),    --2-Port 100GBase-CFP2 Flexible Card A(P481-A)
                     Add: subbname8090DEVCX6D00E2NC10(537472),    --2-Port 100GBase-CFP2 Flexible Card A(S481-A)
                     Add: subbname8090DEVME0D00E2NC78(537473),    --2-Port 100GBase-CFP2 Flexible Card(BP481)
                     Add: subbname8090DEVCR5D00E2NF71(537474),    --2-Port 100GBase-QSFP28 Flexible Card A(P481-E)
                     Add: subbname8090DEVCR5D00E2NF72(537475),    --2-Port 100GBase-QSFP28 Flexible Card A(P481-A)
                     Add: subbname8090DEVCX6D00E2NF10(537476),    --2-Port 100GBase-QSFP28 Flexible Card A(S481-A)
                     Add: subbname8090DEVME0D00E2NF71(537477),    --2-Port 100GBase-QSFP28 Flexible Card(BP481)
                     Add: subbname8090DEVCR5D00E8NC64(537500),    -- 8-Port 100G CFP2 Flexible Dauhtger Card
                     Add: subbname8090DEVCR5D00E8NB61(537501),    -- 8-Port 100GBase QSFP28 Flexible Dauhtger Card
                     Add: subbname8090DEVCR5D00E2KC60(537502),    -- 2*400GBase CFP8 Flexible Dauhtger Card
                     Add: subbname8090DEVCX6D0LEXFA12(562730),      -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card A(S480-A)
                     Add: subbname8090DEVCX68EENEFYFA(562731),   -- 20-Port 100GBase-QSFP28 + 24-Port 25GBase-Y-SFP+ A
                     Add: subbname8090DEVCR58E4K4NA0(562732),   -- 4-Port 400GBase CFP8 + 4-Port 100GBase QSFP28 Fixed Card
                     Add:subbname8090DEVCX6D0E2NCA12(562733),      -- 2-Port 100GBase-CFP2 Flexible Card A(S401-A)
                     Add: subbname8090DEVCR5D0E2NFH70(562734),      -- 2-Port 100GBase-QSFP28 Flexible Card H(P400-H)
                           "%Q"V8.14,
               Modify: fname8090CX6602(675944),    -- CX6602-A -> CX6602
               Modify: virent600DEVCX6P02ABAS00(675938),    -- CX6602-A -> CX6602
               Modify: virent600DEVCX6P02ABAS01(675939),    -- CX6602-A -> CX6602
               Modify: virent600DEVCX6B0BKP0292(675940),    -- CX6602-A -> CX6602
               Add:virent8090DEVCR9DLPUFT281(675808),     -- V8R10C10 2T for CR9DLPUFT281(SBOM) Flexible Card Line Processing Unit B(LPUF-2T-B,2 sub-slots)
               Add:subbname8090DEVCR5D00LMXF7P(154895),    --V8R10C10 for CR5D00LMXF7P(SBOM) 48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit CM(LPUI-480-CM)
               Add:subbname8090DEVCR5DE2NLFX7P(154896),    --V8R10C10 for  CR5DE2NLFX7P(SBOM) 2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit CM(LPUI-480-CM)
               Add:virent8090DEVCR5D0SRUAB73(570062),     -- V8R11C00 for CR5D0SRUAB73(SBOM) Switch and Route Processing Unit A11
               Add:virent8090DEVME0D0SRUAB70(570063),     -- V8R11C00 for ME0D0SRUAB70(SBOM) Switch and Route Processing Unit A11
               Add:virent8090DEVCR5DEKBEBX7B(675776),    -- V8R11C00 for  CR5DEKBEBX7B(SBOM) 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-241-B)
               Add:virent8090DEVCX6DISUFF110(675777),    -- V8R11C00 for  CX6DISUFF110(SBOM) Flexible Card Line Processing Unit(ISUF-241)
               Add:virent8090DEVCX6DISUFF11R(675778),    -- V8R11C00 for  CX6DISUFF11R(SBOM) Flexible Card Line Processing Unit(ISUF-241-R)
               Add:virent8090DEVCX6DF1E2NC10(675779),    -- V8R11C00 for  CX6DF1E2NC10(SBOM) 2-Port 100GBase-CFP2 Integrated Line Processing Unit (ISUI-241)
               Add:virent8090DEVCX6DF1E2NB10(675780),    -- V8R11C00 for  CX6DF1E2NB10(SBOM) 2-Port 100GBase-QSFP28 Integrated Line Processing Unit (ISUI-241)
               Add:virent8090DEVCX6DF1EFXC10(675781),    -- V8R11C00 for  CX6DF1EFXC10(SBOM) 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (ISUI-241)
               Add:virent8090DEVCX6DE1KEBX10(675782),    -- V8R11C00 for  CX6DE1KEBX10(SBOM) 1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (ISUI-241)
               Add:virent8090DEVCX6DEKBEBX10(675783),    -- V8R11C00 for  CX6DEKBEBX10(SBOM) 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (ISUI-241)
               Add:virent8090DEVCX6DF1E2NC1B(675784),    -- V8R11C00 for  CX6DF1E2NC1B(SBOM) 2-Port 100GBase-CFP2 Integrated Line Processing Unit B(ISUI-241-B)
               Add:virent8090DEVCR5DLPUFF170(675785),    -- V8R11C00 for  CR5DLPUFF170(SBOM) Flexible Card Line Processing Unit(LPUF-241)
               Add:virent8090DEVCR5DLPUFF17R(675786),    -- V8R11C00 for  CR5DLPUFF17R(SBOM) Flexible Card Line Processing Unit(LPUF-241-R)
               Add:virent8090DEVCR5DL5XEFG7L(675805),    -- for V800R011C00 CR5DL5XEFG7L(SBOM),5-Port 10GBase LAN/WAN-SFP+ + 24-Port 100/1000Base-X-SFP Integrated Line Processing Unit L(LPUI-120-L)
               Add:virent8090DEVCR5DLPUFF17E(564928),     --CR5DLPUFF17E  Flexible Card Line Processing Unit(LPUF-241-E)
               Add:virent8090DEVCR5DLPUFF17Q(564929),     --CR5DLPUFF17Q  Flexible Card Line Processing Unit(LPUF-241-ER)
               Add:virent8090DEVME0DBSUFF073(675806),     --ME0DBSUFF073  Flexible Card Multi Service Unit(BSUF-241,2 sub-slots)
               Add:virent8090DEVME0DBSUFF072(675807),     --ME0DBSUFF072  Flexible Card Multi Service Unit(BSUF-241-R,2 sub-slots)
               Add:virent8090DEVCX6D0SRUA910(564932),    -- V8R11C00 for CX6D0SRUA910(SBOM), Switch and Route Processing Unit A9(16G Memory)
               Add:virent8090DEVCX6DSFUIT01C(564933),    -- V8R11C00 for CX6DSFUIT01C(SBOM) 1Tbps Switch Fabric Unit C(SFUI-1T-C)
               Add:virent8090DEVCX6DSFUIT01B(564934),    -- V8R11C00 for CX6DSFUIT01B(SBOM), 1Tbps Switch Fabric Unit B(SFUI-1T-B) 
               Add:virent8090DEVCR5D0SRUAC7A(675766),    -- V8R11C00 for  CR5D0SRUAC7A(SBOM) Switch and Route Processing Unit A12
               Add:virent8090DEVCX6D0SRUAC7A(675767),    -- V8R11C00 for  CX6D0SRUAC7A(SBOM) Switch and Route Processing Unit A12
               Add:virent8090DEVTNRD0SRUAC70(675768),    -- V8R11C00 for  TNRD0SRUAC70(SBOM) Switch and Route Processing Unit A12
               Add:virent8090DEVCX6D0SRUAC10(675769),    -- V8R11C00 for  CX6D0SRUAC10(SBOM) Switch and Route Processing Unit A12
               Add:virent8090DEVME0D0SRUAC7A(675770),    -- V8R11C00 for  ME0D0SRUAC7A(SBOM) Switch and Route Processing Unit A12
               Add:virent8090DEVCR5DSFUFK070(675771),    -- V8R11C00 for  CR5DSFUFK070(SBOM) 400Gbps Switch Fabric Unit F(SFUI-400-F)
               Add:virent8090DEVCX6D0SFUF870(675772),    -- V8R11C00 for  CX6D0SFUF870(SBOM) 400Gbps Switch Fabric Unit F(SFUI-400-F)
               Add:virent8090DEVTNRDSFUFK070(675773),    -- V8R11C00 for  TNRDSFUFK070(SBOM) 400Gbps Switch Fabric Unit F(SFUI-400-F)
               Add:virent8090DEVCX6DSFUIF070(675774),    -- V8R11C00 for  CX6DSFUIF070(SBOM) 400Gbps Switch Fabric Unit F(SFUI-400-F)
               Add:virent8090DEVME0DSFUIF070(675775),    -- V8R11C00 for  ME0DSFUIF070(SBOM) 400Gbps Switch Fabric Unit F(SFUI-400-F)
               Add:virent8090DEVCR5DF1E2NC70(675796),    -- V8R11C00 for  CR5DF1E2NC70(SBOM) 2-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-241)  
               Add:virent8090DEVCR5DF1E2NB70(675797),    -- V8R11C00 for  CR5DF1E2NB70(SBOM) 2-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-241)  
               Add:virent8090DEVCR5DF1EFXC70(675798),    -- V8R11C00 for  CR5DF1EFXC70(SBOM) 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-241)  
               Add:virent8090DEVCR5DE1KEBX70(675799),    -- V8R11C00 for  CR5DE1KEBX70(SBOM) 1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-241)  
               Add:virent8090DEVCR5DEKBEBX70(675800),    -- V8R11C00 for  CR5DEKBEBX70(SBOM) 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-241)  
               Add:virent8090DEVCR5DF1E2NC7B(675801),    -- V8R11C00 for  CR5DF1E2NC7B(SBOM) 2-Port 100GBase-CFP2 Integrated Line Processing Unit B(LPUI-241-B)  
               Add:virent8090DEVCR5DF1E2NB7B(675802),    -- V8R11C00 for  CR5DF1E2NB7B(SBOM) 2-Port 100GBase-QSFP28 Integrated Line Processing Unit B(LPUI-241-B)  
               Add:virent8090DEVCR5DF1EFXC7B(675803),    -- V8R11C00 for  CR5DF1EFXC7B(SBOM) 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-241-B)  
               Add:virent8090DEVCR5DE1KEBX7B(675804),    -- V8R11C00 for  CR5DE1KEBX7B(SBOM) 1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-241-B)  
               Add:virent8090DEVCX6DF1E2NB1B(675787),    -- V8R11C00 for  CX6DF1E2NB1B(SBOM) 2-Port 100GBase-QSFP28 Integrated Line Processing Unit B(ISUI-241-B)
               Add:virent8090DEVCX6DF1EFXC1B(675788),    -- V8R11C00 for  CX6DF1EFXC1B(SBOM) 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(ISUI-241-B)
               Add:virent8090DEVCX6DE1KEBX1B(675789),    -- V8R11C00 for  CX6DE1KEBX1B(SBOM) 1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(ISUI-241-B)
               Add:virent8090DEVCX6DEKBEBX1B(675790),    -- V8R11C00 for  CX6DEKBEBX1B(SBOM) 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(ISUI-241-B)
               Add:virent8090DEVCR5DLPUFF273(675791),    -- V8R11C00 for  CR5DLPUFF273(SBOM) Flexible Card Line Processing Unit(LPUF-481)
               Add:virent8090DEVCR5DLPUFF272(675792),    -- V8R11C00 for  CR5DLPUFF272(SBOM) Flexible Card Line Processing Unit(LPUF-481-E)
               Add:virent8090DEVCX6DISUFF210(675793),    -- V8R11C00 for  CX6DISUFF210(SBOM) Flexible Card Line Processing Unit(ISUF-481)
               Add:virent8090DEVME0DBSUFM072(675794),    -- V8R11C00 for  ME0DBSUFM072(SBOM) Flexible Card Broadband Service Unit(BSUF-481,2 sub-slots)
               Add:virent8090DEVCR5DBSUIM070(675795),    -- V8R11C00 for  CR5DBSUIM070(SBOM) Integrated Broadband Service Unit(BSUI-481-E)
               Add:virent8090DEVCR5D0MPUB772(675756),    -- V8R11C00 for  CR5D0MPUB772(SBOM) Main Processing Unit B7
               Add:virent8090DEVCX6D0MPUB772(675757),    -- V8R11C00 for  CX6D0MPUB772(SBOM) Main Processing Unit B7
               Add:virent8090DEVTNRD0MPUB770(675758),    -- V8R11C00 for  TNRD0MPUB770(SBOM) Main Processing Unit B7
               Add:virent8090DEVCX6D0MPUB710(675759),    -- V8R11C00 for  CX6D0MPUB710(SBOM) Main Processing Unit B7
               Add:virent8090DEVME0D0MPUB770(675760),    -- V8R11C00 for  ME0D0MPUB770(SBOM) Main Processing Unit B7
               Add:virent8090DEVCR5DSFUGK070(675761),    -- V8R11C00 for  CR5DSFUGK070(SBOM) 400Gbps Switch Fabric Unit G(SFUI-400-G)
               Add:virent8090DEVCX6DSFUGK070(675762),    -- V8R11C00 for  CX6DSFUGK070(SBOM) 400Gbps Switch Fabric Unit G(SFUI-400-G)
               Add:virent8090DEVTNRDSFUGK070(675763),    -- V8R11C00 for  TNRDSFUGK070(SBOM) 400Gbps Switch Fabric Unit G(SFUI-400-G)
               Add:virent8090DEVCX6DSFUIG010(675764),    -- V8R11C00 for  CX6DSFUIG010(SBOM) 400Gbps Switch Fabric Unit G(SFUI-400-G)
               Add:virent8090DEVME0DSFUGK070(675765),    -- V8R11C00 for  ME0DSFUGK070(SBOM) 400Gbps Switch Fabric Unit G(SFUI-400-G)
                   "y"V8.13,
               Add:fname8031S1600-8(537248),                   --S1600-8 for lsw V2R12C10       
               Add:fname8031S1600-16(537249),                  --S1600-16 for lsw V2R12C10      
               Add:fname8031S1600-24(537250),                  --S1600-24 for lsw V2R12C10      
               Add:fname8031S2600-10P(537251),                 --S2600-10P for lsw V2R12C10     
               Add:fname8031S2600-10P-PWR(537252),             --S2600-10P-PWR for lsw V2R12C10 
               Add:fname8031S2600-28P(537253),                 --S2600-28P for lsw V2R12C10     
               Add:fname8031S2600-28P-PWR(537254),             --S2600-28P-PWR for lsw V2R12C10 
               Add:fname8031S3600-28P(537255),                 --S3600-28P for lsw V2R12C10     
               Add:fname8031S3600-28P-PWR(537256),             --S3600-28P-PWR for lsw V2R12C10 
               Add:fname8031S3600-52P(537257),                 --S3600-52P for lsw V2R12C10     
               Add:fname8031S3600-52P-PWR(537258),             --S3600-52P-PWR for lsw V2R12C10 
               Add:fname8031S1700-16-AC(537259),               --S1700-16-AC for lsw V2R12C10   
               Add:fname8031S1700-24R(537260),                 --S1700-24R for lsw V2R12C10
               Add:fname8031S5330-60C-HI-48S(537261),          --S5330-60C-HI-48S for lsw V2R13C00
               Add:fname8031S5330-36C-HI-24S(537262),          --S5330-36C-HI-24S for lsw V2R13C00   
               Add:fname8031S5720-52X-LI-48S-AC(537263),       --S5720-52X-LI-48S-AC for lsw V2R13C00
               Add:fname8031S5320-52X-LI-48S-AC(537264),       --S5320-52X-LI-48S-AC for lsw V2R13C00
               Add:fname8031S5320-52X-LI-48S-DC(537265),       --S5320-52X-LI-48S-DC for lsw V2R13C00
               Add:fname8031S5320-52X-SI-48S(537266),          --S5320-52X-SI-48S for lsw V2R13C00   
               Add:fname8031S5720-52X-SI-48S(537267),          --S5720-52X-SI-48S for lsw V2R13C00  
               Add:bname8031S1600-8(537432),               -- Real name s1700-8G-AC               for LSW V2R12C10 
               Add:bname8031S1600-16(537433),              -- Real name s1700-16G                 for LSW V2R12C10 
               Add:bname8031S1600-24(537434),              -- Real name s1724G-AC                 for LSW V2R12C10 
               Add:bname8031S2600-10P(537435),             -- Real name s1720-10GW-2P             for LSW V2R12C10 
               Add:bname8031S2600-10P-PWR(537436),         -- Real name s1720-10GW-PWR-2P         for LSW V2R12C10 
               Add:bname8031S2600-28P(537437),             -- Real name s1720-28GWR-4P            for LSW V2R12C10 
               Add:bname8031S2600-28P-PWR(537438),         -- Real name s1720-28GWR-PWR-4P        for LSW V2R12C10 
               Add:bname8031S3600-28P(537439),             -- Real name s1720-28GWR-4P-E          for LSW V2R12C10 
               Add:bname8031S3600-28P-PWR(537440),         -- Real name s1720-28GWR-PWR-4P-E      for LSW V2R12C10 
               Add:bname8031S3600-52P(537441),             -- Real name s1720-52GWR-4P-E          for LSW V2R12C10 
               Add:bname8031S3600-52P-PWR(537442),         -- Real name s1720-52GWR-PWR-4P-E9     for LSW V2R12C10 
               Add:bname8031S1700-16-AC(537443),           -- Real name s1700-24-AC               for LSW V2R12C10 
               Add:bname8031S1700-24R(537444),             -- Real name s1700-24-AC               for LSW V2R12C10 
               Add:bname8031S5330-60C-HI-48S(537445),             --S5330-60C-HI-48S for V2R13C00           
               Add:bname8031S5330-36C-HI-24S(537446),             --S5330-36C-HI-24S for V2R13C00           
               Add:bname8031S5720-52X-LI-48S-AC(537447),          --S5720-52X-LI-48S-AC for V2R13C00        
               Add:bname8031S5320-52X-LI-48S-AC(537448),          --S5320-52X-LI-48S-AC for V2R13C00        
               Add:bname8031S5320-52X-LI-48S-DC(537449),          --S5320-52X-LI-48S-DC for V2R13C00        
               Add:bname8031S5320-52X-SI-48S(537450),             --S5320-52X-SI-48S for V2R13C00           
               Add:bname8031S5720-52X-SI-48S(537451),             --S5720-52X-SI-48S for V2R13C00  
               Add:bnameEF1D2G24SSA0(712714),                  -- s7900 24-Port 100/1000BASE-X Interface Card(SA,SFP) for v2r12c10
               Add:bnameEF1D2G24TFA0(712715),                  -- s7900 24-Port 100/1000BASE-X Interface Card(SA,RJ45) for v2r12c10   
               Add:fname8031S6320-26Q-LI-24S(537268),                 --S6320-26Q-LI-24S for lsw V2R12C00
               Add:bname8031S6320-26Q-LI-24S(537452),                --S6320-26Q-LI-24S for V2R12C00
                   ""V8.12,
                Add: bname8090DEVPSU1200A(561235),        -- PSU1200A AC Power Module
                Add: bname8090DEVPSU1600A(561236),        -- PSU1600A AC Power Module
                Add: bname8090DEVPSU2400A(561237),        -- PSU2400A AC Power Module
                "�"V8.11,
                Add: fnameH821MABC-MA5626(561661),  -- Virtual frame H821MABC of MA5626(sd5133) device.
                Add: bnameH825XPUB-MA5626(155720), -- Master board H825XPUB of MA5626(sd5133)device.
                Add: bnameH821EPFA-MA5626(155721), -- 24FE Board H821EPFA of MA5626(sd5133).
                Add: bnameH821EPFB-MA5626(155722), -- 16FE Board H821EPFB of MA5626(sd5133).
                Add: bnameH821EPFD-MA5626(155723), -- 8FE  Board H821EPFD of MA5626(sd5133).
                " �"V8.10,
                 Add: bnameH902XSHD(148644),        --  8*10G GPON board of MA5800.
                 Add: bnameH902TWHD(148643),        --  8*10G GPON board of MA5800.
				 " B"V8.09,
	Add: AC600EC AP100EC AP200EC AP300EC
                   "�"V8.08,
                Add:fname8031S5730-44C-HI-24S(537242),          --02351XFR S5730-44C-HI-24S     for lsw v2r13c00
                Add:fname8031S5730-60C-HI-48S(537243),          --02351XFS S5730-60C-HI-48S     for lsw v2r13c00
                Add:fname8031S5730-68C-HI-48S(537244),          --02351XFT S5730-68C-HI-48S     for lsw v2r13c00
                Add:fname8031S5730-36C-HI-24S(537245),          --02351XFQ S5730-36C-HI-24S     for lsw v2r13c00
                Add:fname8031S5720I-12X-PWH-SI-AC(537246),      --98010811 S5720I-12X-PWH-SI-AC for lsw v2r13c00
                Add:fname8031S5720I-10X-PWH-SI-AC(537247),      --S5720I-10X-PWH-SI-AC for lsw v2r13c00
                Add:fnameES1BS7706SP1(663567),          -- Quidway S7706 FRAME
                Add:fnameES1BS7703SP0(663568),          -- Quidway S7703 FRAME
                Add:fnameES1BS7703EP0(663569),          -- Quidway S7703 FRAME
                Add:fnameET1BS12708S0(700420),               -- HUAWEI S12708 FRAME
                Add:fnameET1BS12712S0(700421),               -- HUAWEI S12712 FRAME
                Add:fnameET1BS12703S0(700422),               -- HUAWEI S12703 FRAME
                Add:bname8031S5730-44C-HI-24S(537426),            --02351XFR S5730-44C-HI-24S     for lsw v2r13c00
                Add:bname8031S5730-60C-HI-48S(537427),            --02351XFS S5730-60C-HI-48S     for lsw v2r13c00
                Add:bname8031S5730-68C-HI-48S(537428),            --02351XFT S5730-68C-HI-48S     for lsw v2r13c00
                Add:bname8031S5730-36C-HI-24S(537429),            --02351XFQ S5730-36C-HI-24S     for lsw v2r13c00
                Add:bname8031S5720I-12X-PWH-SI-AC(537430),        --98010811 S5720I-12X-PWH-SI-AC for lsw v2r13c00
                Add:bname8031S5720I-10X-PWH-SI-AC(537431),        --S5720I-10X-PWH-SI-AC for lsw v2r13c00 
                Add:bnmaeLE1D2G48TX2S(659671),      --S9300 48-Port 100/1000BASE-T Interface Card(X2S,RJ45) for v2r13
                Add:bnameLE3D2G48TX2L(659672),      --S9300X 48-Port 100/1000BASE-T Interface Card(X2L,RJ45) for v2r13 
                Add:bnameLE1D2G48TX2E(659673),      --S9300 48-Port 100/1000BASE-T Interface Card(X2E,RJ45) for v2r13
                Add:bnameLE1D2G48TX2H(659674),      --S9300 48-Port 100/1000BASE-T Interface Card(X2H,RJ45) for v2r13
                Add:bnameLE1D2G48SX2S(659675),      --S9300 48-Port 100/1000BASE-X Interface Card(X2S,SFP) for v2r13
                Add:bnameLE1D2G48SX2E(659676),      --S9300 48-Port 100/1000BASE-X Interface Card(X2E,SFP) for v2r13
                Add:bnameLE1D2G48SX2H(659677),      --S9300 48-Port 100/1000BASE-X Interface Card(X2H,SFP) for v2r13
                Add:bnameLE3D2G48SX2L(659678),      --S9300X 48-Port 100/1000BASE-X Interface Card(X2L,SFP) for v2r13
                Add:bnameLE1D2MCUBC00(659679),      --S9303,Main Processing Unit B(Optional clock) for v2r13 
                Add:bnameES1D2G48VX2S(663635),      --48-Port 100/1000BASE-T POE Interface Card(X2S,RJ45,POE++) for v2r13
                Add:bnameES1D2G48VX2E(663636),      --48-Port 100/1000BASE-T POE Interface Card(X2E,RJ45,POE++) for v2r13
                Add:bnameES1D2G48TX2S(663637),      --48-Port 100/1000BASE-T Interface Card(X2S,RJ45) for v2r13
                Add:bnameES1D2G48TX2E(663638),      --48-Port 100/1000BASE-T Interface Card(X2E,RJ45) for v2r13
                Add:bnameES1D2G48SX2S(663639),      --48-Port 100/1000BASE-X Interface Card(X2S,SFP)  for v2r13                      
                Add:bnameES1D2G48SX2E(663640),      --48-Port 100/1000BASE-X Interface Card(X2E,SFP)  for v2r13                      
                Add:bnameES1D2S04SX2S(663641),      --4-Port 10GE SFP+ Interface and 44-Port GE SFP Interface Card(X2S,SFP+) for v2r13
                Add:bnameES1D2S04SX2E(663642),      --4-Port 10GE SFP+ Interface and 44-Port GE SFP Interface Card(X2E,SFP+) for v2r13
                Add:bnameES1D2G24SX2S(663643),      --24-Port 100/1000BASE-X Interface Card(X2S,SFP) for v2r13                       
                Add:bnameES1D2G24SX2E(663644),      --24-Port 100/1000BASE-X Interface Card(X2E,SFP) for v2r13                       
                Add:bnameES1D2X08SX2S(663645),      --8-Port 10GE SFP+ Interface Card(X2S,SFP+) for v2r13                           
                Add:bnameES1D2X08SX2E(663646),      --8-Port 10GE SFP+ Interface Card(X2E,SFP+) for v2r13                           
                Add:bnameES1D2MCUBC00(663647),      --S7703,Main Processing Unit B(Optional clock) for v2r13
                Add:bnameET1D2SFUH000(700479),             --S12708/S12712,Switch Fabric Unit H for v2r13
                Add:bnameET1D2C32HEC0(700480),             --S12708/S12712,32-Port 100GE QSFP28 Interface Card(EC,QSFP28) for v2r13
                Add:bnameET1D2L32QEC0(700481),             --S12708/S12712,32-Port 40GE QSFP+ Interface Card(EC,QSFP+) for v2r13
                Add:bnameET1D2MPUHC00(700482),             --S12704/S12708/S12712,Main Processing Unit H(Optional clock) for v2r13
                Add:bnameET1D2G48TX2E(700483),             --48-Port 100/1000BASE-T Interface Card(X2E,RJ45) for v2r13
                Add:bnameET1D2G48TX2H(700484),             --48-Port 100/1000BASE-T Interface Card(X2H,RJ45) for v2r13
                Add:bnameET1D2G48SX2E(700485),             --48-Port 100/1000BASE-X Interface Card(X2E,SFP) for v2r13           
                Add:bnameET1D2G48SX2H(700486),             --48-Port 100/1000BASE-X Interface Card(X2H,SFP) for v2r13          
                Add:bnameET1D2X08SX2E(700487),             --8-Port 10GE SFP+ Interface Card(X2E,SFP+) for v2r13                  
                Add:bnameET1D2X08SX2H(700488),             --8-Port 10GE SFP+ Interface Card(X2H,SFP+) for v2r13   
                     " v"V8.07,
	Add: subnameLND2XE2S(708627),           -- 2 Channels 10GE Optical Interface Board(SFP+)
                   "�"V8.06,
               Add:virent8090DEVCR5D0MPUK570(675954),   -- for V800R010C10 CR5D0MPUK570(SBOM), Main Processing Unit K1A
               Add:virent600DEVCX6B0BKP0392(675950),    --V8R11C00 CX600-M1A CX6B0BKP0392(SBOM), M1A2T
               Add:virent600DEVCR5B0BKP0392(675951),    --V8R11C00 NE40E-M1A CR5B0BKP0392(SBOM), M1A2T
               Add:virent600DEVTNRB0BKP0391(675952),    --V8R11C00 PTN6900-M1A TNRB0BKP0391(SBOM), M1A2T
               Add:virent600DEVCX6P010BKP90(675953)     --V8R11C00 CX6601 CX6P010BKP90(SBOM), M1A2T
               Add:fnamePTN6900-M2K(675945),                  --Quidway PTN6900-M2K FRAME for V8R11C00
               Add:fname8090NE40E-M8A-AC(675946),             --Quidway NE40E-M8A-AC FRAME for V8R10C10
               Add:fname8090NE40E-M8A-DC(675947),             --Quidway NE40E-M8A-DC FRAME for V8R10C10
               Add:fname8090NE40E-M16A(675948),               --Quidway NE40E-M16A FRAME for V8R10C10
               Add:fname8031CX600-M2K-B(675949),              --Quidway CX600-M2K-B FRAME for V8R11C00
               Add:fname8090NE40E-M2K-B(675950),              --Quidway NE40E-M2K-B FRAME for V8R11C00
               Add:fname8090CX6602-B(675951),                 --Quidway CX6602-B FRAME for V8R11C00   
               Add:fnamePTN6900-M2K-B(675952),                --Quidway PTN6900-M2K-B FRAME for V8R11C00  
               Add:fname8031CX600-M1A(675953),                --Quidway CX600-M1A FRAME for V8R11C00
               Add:fname8090NE40E-M1A(675954),                --Quidway NE40E-M1A FRAME for V8R11C00
               Add:fname8090CX6601(675955),                   --Quidway CX6601 FRAME for V8R11C00
               Add:fnamePTN6900-M1A(675956),                  --Quidway PTN6900-M1A FRAME for V8R11C00 
               Add:fname8090CX600-X2-M16B(675957),            --Quidway CX600-M2K-B FRAME for V8R11C00 
               Add:fname8090NE40E-X2-M16B(675958),            --Quidway NE40E-X2-M16B FRAME for V8R11C00
               Add:fname8090NE20E-S16B(675959),               --Quidway NE20E-S16B FRAME for V8R11C00
               Add:fname8090PTN6900-2-M16B(675960)            --Quidway PTN6900-2-M16B FRAME for V8R11C00 		
                     "�"V8.05,
                     Add:bnamePTN7900TPD1CQ1(229486), --TPD1CQ1,1 Channels STM-4 CES Optical Interface board ,1*1 
	Add:bnamePTN7900TPD1CO1(229487), --TPD1CO1,1 Channels STM-4 CES Optical Interface board ,1*1
	Add:fnamePTN7900TPE1CHASSIS(229488),   --PTN 7900E-24 Integrated Chassis Components
	Add:fnamePTN7900TPF1CHASSIS(229489),   --PTN 7900E-12 Integrated Chassis Components
	Add:bnamePTN7900TPD1PSU(229490), --TPD1PSU,Power Subboard
	Add:bnamePTN7900TPF1XCS(229491), --TPF1XCS,Switch Fabric Unit,1*1
	Add:virentPTN7900TPE1VXCS(229492), --TPE1VXCS,Switch Fabric Unit,1*1
	Add:virentPTN7900TPF1VXCS(229493), --TPF1VXCS,Switch Fabric Unit,1*1
                     " �"V8.04,
                     Add: bnameH801XEUD(146156),         --  8-port 10G EPON interface board of MA5600T.
                     "�"V8.03,
                   Add: virent8090DEVCR9D00EPXF8L(562077),   -- v8r10c10 NE9000 CR58LPU1TCB for CR9D00EPXF8L(SBOM), 60-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit L(LPUI-1T-L)
                   Add: virent8090DEVCR5DLPUFT261(562089),   -- v8r11c00 NE5000E-20 CR5DLPUFT261(SBOM),2T Flexible Card Line Processing Unit(NE5000E LPUF-2T-A,2 sub-slots)
                       ""V8.02,
                    Add: subbname8090DEVCR58EANBA1(537448),       --10-Port 100GBase QSFP28 MACsec fixed Card
                    Add: subbname8090DEVCR9D00LFXF81(537449),    --24-Port 1000M/10GBase LAN/WAN-SFP+ Flexible Card-C
                    " ~"V8.01,
                    Add: bnameH82EEFUG-DE16(156080),   --Master board of MA5811S-DE16-G5 device.
                    "�"V8.00,
                    Add:  bnameH822CCKRR(156076),      --  MA5633 mainboard H822CCKRR
                    Add:  bnameHS33CDAH(156077),       --  MA5633 bboard    HS33CDAH
                    Add:  bnameHS33CDAI(156078),       --  MA5633 bboard    HS33CDAI
                    Add:  fnameH821MABCV(561659),      --  MA5633 new frame H821MABCV
                    Add:  fnameH821MABCU(561660),      --  MA5633 new frame H821MABCU
                    " h"V7.99,
	add wlan device 
	ADD: fnameAC6800V(692315),         --WLAN new ac ENUM_ 
                    " �"V7.91,
                    Add:  fnamePTN960E(229409),                       --PTN960E chassis
                    Add:  bnameTPLD00CXPB00(229481)
               	    Add:  bnameTNDD00CXPA00(229482)
                    " 1"Huawei text conventions and common  defination."="V7.97,
                    Add: bnameH921MPCA(148510),        -- control board of MA5801-GP08.
                    Add: bnameH921MPCAE(148511),       -- control board of EA5801-GP08.
                    Add: bnameH921GPHD(148540),         --  8*GPON board of MA5801-GP08.
                    Add: bnameH921NXHC(148541),         --  4*10GE board of MA5801-GP08.
                    Add: bnameH921GPHDE(148542),        --  8*GPON board of EA5801-GP08.
                    Add: bnameH921PICA(148543),         --  DC Power board of MA5801-GP08.
                    Add: bnameME170-12A(148544),        --  AC Power board of MA5801-GP08.
                    Add: bnameH921CIUA(148545),         --  GPIO board of MA5801-GP08.
                    Add: bnameH921CGHC(148546),         --  4*GE and 10GE combo board of MA5801-CG04.
                    Add: bnameH921CGHCE(148547),        --  4*GE and 10GE combo board of EA5801-CG04.
                    Add: bnameH921NXHCE(148548),        --  4*10GE board of EA5801-GP08.
                    Add: fnameMA5801-CG04(148504),      --  Backplane of the MA5801-CG04
                    Add: fnameEA5801-GP08(148505),      --  Backplane of the EA5801-GP08
                    Add: fnameEA5801-CG04(148506),      --  Backplane of the EA5801-CG04
                    Add: bnameH902CRED(148638),         --  IP backhaul board of MA5800.
                    Add: bnameH901CSHDE(148639),        --  8*XGS GPON and GPON combo board of EA5800.
                    Add: bnameH901CSHFE(148640),        --  16*XGS GPON and GPON combo board of EA5800.
                    " �"V7.91,
                    Add:  bnameH832PDMSB(156075),       --  DC Power board H832PDMSB of the MA5616.
                    "�"V7.95,
	add wlan device 
                   ADD: fnameAP5050DN-S(692309),       --WLAN new ap ENUM_ 
	ADD: fnameAP2030DN-S(692310),       --WLAN new ap ENUM_ 
	ADD: fnameAP2051DN-E(692311),       --WLAN new ap ENUM_ 
	ADD: fnameAP2051DN(692312),         --WLAN new ap ENUM_ 
	ADD: fnameAP2051DN-S(692313),       --WLAN new ap ENUM_ 
	ADD: fnameAP7060DN(692314),         --WLAN new ap ENUM_ 
                    "Q"V7.94,
                     Add:subbnameSSD240GB(536789),               --240GB SSD Card(Used in S5x30HI series)
                     Add:subbnameSSD32GB(536790),                --32GB SSD Card(Used in S5x30HI series)
                     Add:subbnamePAC-260WA-E(536791),            --260W AC Power Module(Black) 
                     ""V7.93,
                     Add:  bnameTPLD000PIU00(229477),           --TPL1PIU, Power Interface Board
                     Add:  bnameTPLM000FAN00(229478),           --TPL1FAN, Fan box
                     Add:  bnameTNDM000PIU00(229479),           --TND1PIU, Power Interface Board
                     Add:  bnameTNDM0FAN0300(229480),           --TND1FAN03, Fan box
                     Add:  fname8031CX600-M2K(675942),                  --Quidway CX600-M2K FRAME for V8R10C10
                     Add:  fname8090NE40E-M2K(675943),                  --Quidway NE40E-M2K FRAME for V8R10C10
                     Add:  fname8090CX6602-A(675944),                   --Quidway CX6602-A FRAME for V8R10C10
                     Add:  virent8090DEVCX6D00MPUK11(570058),      -- for V800R010C00 CX6D00MPUK11(SBOM), Main Processing Unit K1
                     Add:  virent8090DEVME0D0LAXXE70(675941),      --ME0D0LAXXE70,10-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated E(BSUI-100-E)
                     Add:  virent8090DEVCR5D0L5XFL70(675750),      --CR5DLAXFAJ7F,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add:  virent8090DEVCR5DL4XEFG70(675751),      --CR5DLAXFAJ7F,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add:  virent8090DEVCR5D0EMGFL70(675752),      --CR5DLAXFAJ7F,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add:  virent8090DEVCR5DL2XEFG71(675753),      --CR5DLAXFAJ7F,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add:  virent8090DEVCR5D0EFGFL70(675754),      --CR5DLAXFAJ7F,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add:  virent600DEVCX6PM2KBAS90(675932),    --V8R10C10 CX600-M2K CX6PM2KBAS90(SBOM), 1T MNPUI DC
                     Add:  virent600DEVCX6PM2KBAS91(675933),    --V8R10C10 CX600-M2K CX6PM2KBAS91(SBOM), 1T MNPUI AC
                     Add:  virent600DEVCX6B0BKP0391(675934),    --V8R10C10 CX600-M2K CX6B0BKP0391(SBOM), 1T MNPUI NO POWER
                     Add:  virent600DEVCR5PM2KBAS90(675935),    --V8R10C10 NE40E-M2K CR5PM2KBAS90(SBOM), 1T MNPUI DC
                     Add:  virent600DEVCR5PM2KBAS91(675936),    --V8R10C10 NE40E-M2K CR5PM2KBAS91(SBOM), 1T MNPUI AC
                     Add:  virent600DEVCR5B0BKP0391(675937),    --V8R10C10 NE40E-M2K CR5B0BKP0391(SBOM), 1T MNPUI NO POWER
                     Add:  virent600DEVCX6P02ABAS00(675938),    --V8R10C10 CX6602-A CX6P02ABAS00(SBOM), 1T MNPUI DC
                     Add:  virent600DEVCX6P02ABAS01(675939),    --V8R10C10 CX6602-A CX6P02ABAS01(SBOM), 1T MNPUI AC
                     Add:  virent600DEVCX6B0BKP0292(675940),    --V8R10C10 CX6602-A CX6B0BKP0292(SBOM), 1T MNPUI NO POWER	
                     Add:  virent8090DEVCR5DLPUFE071(675945),    -- for V800R010C10 CR5DLPUFE071(SBOM),Flexible Card Line Processing Unit(LPUF-200)
                     Add:  virent8090DEVCR5DLPUFE07C(675946),    -- for V800R010C10 CR5DLPUFE07C(SBOM),Flexible Card Line Processing Unit(LPUF-200-B)
                     Add:  virent8090DEVCX6DISUFE013(675948),    -- for V800R010C10 CX6DISUFE013(SBOM),Flexible Card Integrated Service Unit(ISUF-201)
                     Add:  virent8090DEVCX6D00MPUD30(675947),  --Main Processing Unit D3(4G Memory)
                     Add:  virent8090DEVCR5D0SRUAA70(567001),    -- V8R10C10 for CR5D0SRUAA70(SBOM) Switch and Route Processing Unit A10(32G Memory)
                     Add:  virent8090DEVCR5DSFUIU07D(567002),    -- V8R10C10 for CR5DSFUIU07D(SBOM) 2Tbps Switch Fabric Unit D(SFUI-2T-D)
                     Add:  virent8090DEVCX6D0SRUAA70(567003),    -- V8R10C10 for CX6D0SRUAA70(SBOM) Switch and Route Processing Unit A10(32G Memory)
                     Add:  virent8090DEVCX6DSFUIU07D(567004),    -- V8R10C10 for CX6DSFUIU07D(SBOM) 2Tbps Switch Fabric Unit D(SFUI-2T-D)
                     Add:  virent8090DEVTNRD0SRUAA70(567005),    -- V8R10C10 for TNRD0SRUAA70(SBOM) Switch and Route Processing Unit A10(32G Memory)
                     Add:  virent8090DEVTNRDSFUIU07D(567006),     -- V8R10C10 for TNRDSFUIU07D(SBOM) 2Tbps Switch Fabric Unit D(SFUI-2T-D)
                     Add:  virent8090DEVCX6D60T220A0(675755),     -- V8R10C10 for CX6D60T220A0(SBOM) 20-Port 100GBase-MACsec Integrated Line Processing Unit (LPUI-2T)
					 Add:  virent8090DEVCR5D0MPUN160(570061)     -- V8R10C10 for CR5D0MPUN160(SBOM) NE5000E-20 Main Processing Unit N1(MPUN1)
                     Add:  subbname8090DEVCR57E1NBA2(537735),         -- 1-Port 100GBase-QSFP28 Fixed Card
                     Add:  subbname8090DEVCR5D00T1NC70(537440),       --03032PCD,  1-Port 100G OTN/ETH-CFP2 Flexible Card(P240)
                     Add:  subbname8090DEVCR9D00EANB81(537441),       --10-Port 100GBase-QSFP28 MacSec Flexible Card
                     Add:  subbname8090DEVCR9D00EANB80(537442),       --10-Port 100GBase-QSFP28 Flexible Card
                     Add:  subbname8090DEVCR2D0EM4TP10(537443),       --4 Port 100/100Base -RJ45 with PoE Physical Interface Card
                     Add:  subbname8090DEVCR58EANBA(537444),          --10-Port 100GBase QSFP28 MACsec fixed Card
                     Add:  subbname8090DEVCR2D0L4XFM10(537445),       --4-Port 10GBase-SFP+MACsec Interface Card
                     Add:  subbname8090DEVNEDD0EX4SM00(537446),       --4 Channel 10GE Optical Interface Board with MACSec (SFP+)
                     Add:  subbname8090DEVNEDD0EM4TP00(537447),       --4 Port 100/1000Base-RJ45 with PoE Physical Interface Card
                       " �"V7.92,
                   Add: virent8090DEVCR9DLPUFK081(570060)     -- V8R10C10 for CR9DLPUFK081(SBOM) 480G Flexible Card Line Processing Unit C(NE9000 LPUF-480C,2 sub-slots)
                       " �"V7.91,
                   Add: bnameCEL18CQFDA(688285)        --Manufactured Board,CloudEngine 12800,CE-L18CQ-FDA,18-Port-40GE,18-Port-100GE Interface Card(FDA,QSFP+,QSFP28)
                       " �"V7.90,
                   Add: bnamePTN7900TPE1PSU(229475),    --PTN7900E-24 power board
                   Add: bnamePTN7900TPE1FAN(229476),    --PTN7900E-24 fan board
                       "�"V7.89,
                    Add: fnameATNDEV905-F-AC(225600),      --ATN905-F-AC chassis
                    Add: fnameATNDEV905-F-DC(225602),      --ATN905-F-DC chassis
                    Add: fnameETN500-F(708624),            --ETN500-F chassis
                    Add: fnameNE05E-SR(704571),            -- NE05E-SR chassis
                    Add: fnameNE08E-S9(704573),            -- NE08E-S9 chassis
                    Add: virentANPM001AICF0(225601),       -- ATN905-F System,AC,2*GE/FE Combo,2*GE/FE(o),2*GE/FE(e)
                    Add: virentANPM001DICF0(225603),       -- ATN905-F System,DC,2*GE/FE Combo,2*GE/FE(o),2*GE/FE(e)
                    Add: virentLNPM001AICF0(708625),       -- ETN500-F System,AC,2*GE/FE Combo,2*GE/FE(o),2*GE/FE(e) 
                    Add: virentANDD03CXPA00(225604),       -- ATN950B, System Control, Cross-connect and Multi-protocol Process Unit
                    Add: virentANKD01CXPA00(225605),       -- ATN950C, System Control,Cross-connect and Multi-protocol Process Unit B
                    Modify: virentANKD00CXPB00(225569)     -- 80G -> 360G
                    Add: virentNECM000AIC01(704572),       -- NE05E-SR System,Indoor,AC,2*GE/FE Combo,2*GE/FE(o),2*GE/FE(e) 
                    Add: virentNEJD00CXPA00(704574),       -- System Control,Cross-connect and Multi-protocol Process Unit A For S9
                    Add: virentNEDD00CXPB00(704575),       -- NE08E-S6E, System Control,Cross-connect and Multi-protocol Process Unit B for S6E  
                       "�"V7.88,
                   Add:fname8090NE5000E-20(561105),        --Quidway NE5000E-20 FRAME
                   Add:virent8090DEVCR5DSFUIT260(562081),   -- v8r10c10 NE5000E-20 CR5DSFUIT260(SBOM),2T CLC Switch Fabric Unit D for Single Chassis(SFU-2T-D)
                   Add:virent8090DEVCR5D0MPUB760(562164),   -- v8r10c10 NE5000-20 Main Processing Unit N1(MPUN1)
                       "�"V7.87,
                   Add:bnamePTN7900TPA1FHD1(229464), --TPA1FHD1,1-port 200 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPD1FHD1(229465), --TPD1FHD1,1-port 200 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPA1FH2(229466), --TPA1FH2,2-port 100 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPD1FH2(229467), --TPD1FH2,2-port 100 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPA1FH1(229468), --TPA1FH1,1-port 100 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPD1FH1(229469), --TPD1FH1,1-port 100 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPA1FV2(229470), --TPA1FV2,2-port 50 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPD1FV2(229471), --TPD1FV2,2-port 50 Gigabit Ethernet Switching Processing Board
                   Add:bnamePTN7900TPE1CXP(229472), --TPE1CXP,System Control, Cross-Connect and Timing Unit,1*1
                   Add:bnamePTN7900TPF1CXP(229473), --TPF1CXP,System Control, Cross-Connect and Timing Unit,1*1
                   Add:bnamePTN7900TPE1XCS(229474), --TPE1XCS,Switch Fabric Unit,1*1
                  " p"V7.86,
                    Add: bnameNEJD002FAN00(229010),          --NE08E-S9, FAN
                          "	Z"V7.85, 
                     Add: subbname8090DEVNEDD00EX4S00(225564),    --Finished Board Unit,NE08E-S6E,NED1EX4S0,4 Channels 10GE Optical Interface Board(SFP+)
                     Add: subbname8090DEVANKD001EV100(225622),       --1 Channel 50G Base QSFP28 High Speed Interface Board 
                     Add:  subbname8090DEVCR5D00E1NC7D(537713),       --1-Port 100GBase-CFP2 Flexible Card A(P240-A) 
                     Add: subbname8090DEVCX68E2NLHXF0(537426),       --2-Port 100GBase-QSFP28 + 30-Port 10GBase-X-SFP+
                     Add: subbname8090DEVCR5D00E4XF20(537427),       --4-Port 10GBase-SFP+MACsec Interface Card
                     Add: subbname8090DEVCR5D00E1NB20(537428),       --1-Port 100GBase-QSFP28+MACsec Interface Card
                     Add: subbname8090DEVCR5DE2NE4X10(537429),       --2-Port 100GBase-QSFP28/1-Port100GBase-QSFP28+4-Port 10GBase-SFP+MACsec Interface Card
                     Add: subbname8090DEVAND1EM8F(537430),    -- ATN 950B,AND1EM8F0,8 Channels GE/FE Optical Interface Board
                     Add: subbname8090DEVAND1EM8T(537431),    -- ATN 950B,AND1EM8T0,8 Channels GE/FE Electric Interface Board
                     Add: subbname8090DEVAND1EM4F(537432),    -- ATN 950B,AND1EM4F0,4 Channels GE/FE Optical Interface Board
                     Add: subbname8090DEVAND1EM4T(537433),    -- ATN 950B,AND1EM4T0,4 Channels GE/FE Electric Interface Board
                     Add: subbname8090DEVAND1EX1(537434),                -- 1 Channel 10 GE Optical Interface board
                     Add: subbname8090DEVAND2EM8M(537435),           -- 4 Channels GE/FE Optical Interface and 4 Channels GE/FE Electric Interface Board
                     Add: subbnameATNAND3MD1(537436),              -- 32 Channels E1 Interface Board
                     Add: subbnameATNNEDD001EM600(537437),            --6 Channels E&M Interface Board
                     Add: subbnameATNNED3MD1(537438),                       -- 32 Channels E1 Interface Board
                     Add: subbname8090DEVCR2D000EM890(537439),       --6 Channels E&M Interface Board
                     Add: virent8090DEVCR5DSFUIT27B(675921),    -- V8R10C00 for CR5DSFUIT27B(SBOM) 2Tbps Switch Fabric Unit B(SFUI-2T-B)
                     Add: virent8090DEVCR2DNSPD0010(562078),    -- V8R10C00 for CR2DNSPD0010(SBOM) Network Service Processor(NSP-D)
                           ""V7.84,
                    Add: virent8090DEVTNRDMPUX8670(570059),      --for V800R010C00 TNRDMPUX8670(SBOM),Main Processing Unit B6
                    Add: virentPTN6900DEVTNUD00MPUK71(229407),    --for V800R007C00 TNUD00MPUK71(SBOM), Main Processing Unit K1
		    "x"V7.83,
                    Add: bnameH901CSHD(148632),        --  8*XGS GPON and GPON combo board of MA5800.
                    Add: bnameH901CGHF(148633),        --  16*XG GPON and GPON combo board of MA5800.
                    Add: bnameH901CSHF(148634),        --  16*XGS GPON and GPON combo board of MA5800.
                    Add: bnameH901XEHF(148635),        --  16*10G EPON board of MA5800.
                    Add: bnameH902CGHD(148636),        --  8*XGS GPON and GPON combo board of MA5800.
                    Add: bnameH902CSHD(148637),        --  8*XG GPON and GPON combo board of MA5800.
                    Add: fnameMA5801-GP08(148503),     -- Backplane of the MA5801-GP08.
                    Add: bnameH911MPCA(148510),        -- control board of MA5801-GP08.
                    Add: bnameH911MPCAE(148511),       -- control board of EA5801-GP08.
                    Add: bnameH911GPHD(148540),        -- 8*GPON board of MA5801-GP08.
                    Add: bnameH911NXHC(148541),        -- 4 P2P board of MA5801-GP08.
                    Add: bnameH911GPHDE(148542),       -- 8*GPON board of EA5801-GP08.
                    Add: bnameH911PICA(148543),        -- DC Power board of MA5801-GP08.
                    Add: bnameME170-12A(148544),       -- AC Power board of MA5801-GP08.
                    Add: bnameH911CIUA(148545),        -- GPIO board of MA5801-GP08.
		    "g"V7.82,
                     Add: bnameH801CGBD(146151),         --  8-port 10G GPON and GPON combo interface board of MA5600T.
                     Add: bnameH802CGBD(146152),         --  8-port 10G GPON and GPON combo interface board of MA5600T.
                     Add: bnameH801CSBD(146153),         --  8-port 10GS-PON and GPON combo interface board of MA5600T.
                     Add: bnameH802CSBD(146154),         --  8-port 10GS-PON and GPON combo interface board of MA5600T.
                     Add: bnameH801XSBD(146155),         --  8-port 10GS-PON interface board of MA5600T.
                     " _"V7.81,
                     Modify: CR9D0MPUM80 changed to CR9D0MPUP180
                     "�"V7.80,
                 	 Add: fname8031S5720I-12X-SI-AC(537231),             --98010794 S5720I-12X-SI-AC for lsw v2r12c00                                    
                 	 Add: fname8031S5720I-12X-PWH-SI-DC(537232),   --98010795 S5720I-12X-PWH-SI-DC for lsw v2r12c00                                
                 	 Add: fname8031S5720I-28X-SI-AC(537233),             --98010796 S5720I-28X-SI-AC for lsw v2r12c00                                    
                 	 Add: fname8031S5720I-28X-PWH-SI-AC(537234),   --98010797 S5720I-28X-PWH-SI-AC for lsw v2r12c00                                                                                                                                                       
                 	 Add: fname8031S5320-52X-SI-AC-V1(537235),        -- Real name S5320-52X-SI-AC for LSW V2R11C10 from S5320-52X-LI-AC          
                 	 Add: fname8031S5320-52X-SI-DC-V1(537236),        -- Real name S5320-52X-SI-DC for LSW V2R11C10 from S5320-52X-LI-DC          
                 	 Add: fname8031S5320-52P-SI-AC-V1(537237),        -- Real name S5320-52P-SI-AC for LSW V2R11C10 from S5320-52P-LI-AC          
                 	 Add: fname8031S5320-52P-SI-DC-V1(537238),        -- Real name S5320-52P-SI-DC for LSW V2R11C10 from S5320-52P-LI-AC          
                 	 Add: fname8031S5300-52P-LI-DC-V1(537239),        -- Real name S5300-52P-LI-DC for LSW V2R11C10 from S5320-52P-LI-AC          
                 	 Add: fname8031S5320-36C-EI-28S-AC-V1(537240),    -- Real name S5320-36C-EI-28S-AC for LSW V2R11C10 from S5320-28X-LI-24S-AC  
                 	 Add: fname8031S5320-36C-EI-28S-DC-V1(537241),    -- Real name S5320-36C-EI-28S-DC for LSW V2R11C10 from S5320-28X-LI-24S-DC  
                 	 Add: fnameLE1BS9316S00(659476),                             -- Quidway S9316  FRAME
                 	 Add: bname8031S5720I-12X-SI-AC(537415),            --98010794 S5720I-12X-SI-AC for lsw v2r12c00                                        
                 	 Add: bname8031S5720I-12X-PWH-SI-DC(537416),  --98010795 S5720I-12X-PWH-SI-DC for lsw v2r12c00                                    
                 	 Add: bname8031S5720I-28X-SI-AC(537417),            --98010796 S5720I-28X-SI-AC for lsw v2r12c00                                        
                 	 Add: bname8031S5720I-28X-PWH-SI-AC(537418),  --98010797 S5720I-28X-PWH-SI-AC for lsw v2r12c00                                    
                 	 Add: bname8031S5320-52X-SI-AC-V1(537419),          -- Real name S5320-52X-SI-AC for LSW V2R11C10 from S5320-52X-LI-AC            
                 	 Add: bname8031S5320-52X-SI-DC-V1(537420),          -- Real name S5320-52X-SI-DC for LSW V2R11C10 from S5320-52X-LI-DC            
                 	 Add: bname8031S5320-52P-SI-AC-V1(537421),          -- Real name S5320-52P-SI-AC for LSW V2R11C10 from S5320-52P-LI-AC            
                 	 Add: bname8031S5320-52P-SI-DC-V1(537422),          -- Real name S5320-52P-SI-DC for LSW V2R11C10 from S5320-52P-LI-AC            
                 	 Add: bname8031S5300-52P-LI-DC-V1(537423),          -- Real name S5300-52P-LI-DC for LSW V2R11C10 from S5320-52P-LI-AC            
                 	 Add: bname8031S5320-36C-EI-28S-AC-V1(537424),      -- Real name S5320-36C-EI-28S-AC for LSW V2R11C10 from S5320-28X-LI-24S-AC    
                 	 Add: bname8031S5320-36C-EI-28S-DC-V1(537425),      -- Real name S5320-36C-EI-28S-DC for LSW V2R11C10 from S5320-28X-LI-24S-DC    
                	 Add: bnameLE1D2SRUKC01(659667),      --S9310,Main Processing Unit K(Support Security Startup) for v2r12
                	 Add: bnameLE1D2SRUH002(659668),      --S9306/S9312,Main Control Unit H(Support Security Startup) for v2r12
                	 Add: bnameLE1D2MPUA000(659669),      --S9316 Main Processing Unit A(Optional clock) for v2r12
                	 Add: bnameLE1D2SFUD000(659670),      --S9316 Switch Fabric Unit D for v2r12
                	 Add: bnameES1D2SRUKC01(663633),      --S7710,Main Processing Unit K(Support Security Startup) for v2r12
                	 Add: bnameES1D2SRUH002(663634),      --S7706/S7712,Main Control Unit H(Support Security Startup) for v2r12
                	 Add: bnameET1D2MPUBC01(700478),     --S12710,Main Processing Unit B(Support Security Startup) for v2r12
                    " �"V7.79,
                     Add: bnameH802GICK(146079),        -- GE synchronized Ethernet interface board of MA5600T
                     "�"V7.78,
                 	 Add: subbname8090DEVCX6D0E2NCA11(537491),    -- 2-Port 100GBase-CFP2 Flexible Card A(S480-A)
                 	 Add: subbname8090DEVME0M0E2NCB72(537492),    -- 2-Port 100GBase-CFP2 Flexible Card(BP480)
                 	 Add: subbname8090DEVCR2D04OTU210(561735),    -- 4-Port 10G OTU2-XFP Physical Interface Card(PIC)
                 	 Add: subbname8090DEVCR2D0E5XMF10(561736),    -- 2-Port 50GBase/1-Port 100GBase-QSFP28 Physical Interface Card(PIC)
                    Add: subbname8090DEVCR2D00LAXF11(561737),    -- 10-Port 10GBase-X-SFP+ Physical Interface Card(PIC)
 	 Add: subbname8090DEVCR2D00E1NC11(561738),    -- 1-Port 100GBase-CFP2 Physical Interface Card(PIC)
                 	 Add: subbname8090DEVCR2D00E2NF10(561739),    -- 2-Port 100GBase-QSFP28 Physical Interface Card(PIC)
                    Add: subbname8090DEVCX6D0E2NBA10(561740),      -- 2-Port 100GBase-QSFP28 Flexible Card A(S480-A)
                    Add: subbname8090DEVME0M0E2NFB70(561741),      -- 2-Port 100GBase-QSFP28 Flexible Card H(BP400-H)
	 Add: subbname8090DEVME0M0E2NFB71(561742),      -- 2-Port 100GBase-QSFP28 Flexible Card(BP480)                   
                    "j"V7.77,
                    Add: bnameH901TWEDE(148628),        --  8*10G GPON board of MA5800.
                    Add: bnameH902TWED(148629),          --  8*10G Flex-PON board of MA5800 support TWDM-PON XGS-PON.
	 Add: bnameH903XSHD(148630),          --  8*10G GPON board of MA5800.
	 Add: bnameH901XSHF(148631),          --  16*10G XGS-PON board of MA5800.
	"�"V7.76,
                     Add: subbnameH823CUVC(156064),       -- 8SV uplink Subboard of MA5811S-AE16(8SV uplink) device.
                     Add: bnameH82EBFVM(156073),        --Master board of MA5811S-AE16(8SV uplink) device.
                     Add: bnameHS2EBFVM(156074),        --16 G.FAST service board of MA5811S-AE16(8SV uplink) device.
                     Add: fnameMA5811S-G5-8SV-AE16(561658),  --Virtual frame MA5811S-AE16 of MA5811S_AE16(8SV uplink) device.
                     "P"V7.75,
                    add:fnameCX916(688173),                      -- CX916
                    add:fnameCE685648S6QHI(688175),              -- CloudEngine CE6856-48S6Q-HI Switch(48-Port 10G SFP+,6-Port 40GE QSFP+)
                    add:fnameCE685648T6QHI(688176),              -- CloudEngine CE6856-48T6Q-HI Switch(48-Port 10GE RJ45,6-Port 40GE QSFP+)
                    add:fnameCE687548S4CQEI(688178),             -- CloudEngine CE6875-48S4CQ-EI Switch(48-Port 10GE SFP+,4*100GE QSFP28)
                    add:bnameCEL24XSEC1(688260),                 -- (DXJC)Manufactured Board,CloudEngine 12800,CE-L24XS-EC1
                    add:bnameCEL04CFEC1(688261),                 -- (DXJC)Manufactured Board,CloudEngine 12800,CE-L04CF-EC1,4-Port-100GE Interface Card(EC1,CFP)
                    add:bnameCEL04CFEC1B(688264),                -- Manufactured Board,CloudEngine 12800,CE-L04CF-EC1,4-Port-100GE Interface Card(EC1,CFP)
                    add:bnameCEL06CQFD(688266),                  -- (YDJC)Manufactured Board,CloudEngine 12800,CEL06CQFD,6-Port-100GE Interface Card(FD,QSFP28)
                    add:bnameCEL06CQFDM(688267),                 -- (YDJC)Manufactured Board,CloudEngine 12800,CEL06CQFD-M,6-Port-100GE Interface Card(FD-M,QSFP28)
                    add:bnameNSEL32XSEGA(688268),                -- Board for wangan
                    add:bnameCEL36CQFG(688269),                  -- Manufactured Board,CloudEngine 12800,CE-L36CQ-FG,36-Port-100GE Interface Card(FG,QSFP28)
                    add:bnameCEL48XSFG(688270),                  -- Manufactured Board,CloudEngine 12800,CE-L48XS-FG,48-Port-10GE Interface Card(FG,SFP+)
                    add:bnameCEL48GTEGAE(688271),                -- Manufactured Board,CloudEngine 12800E,CEL48GTEGA-E,48-Port-GE,4-Port-10GE Interface ENP Card(EGA,RJ45,SFP+)
                    add:bnameCE685648S6QHI(688273),              -- Manufactured Board,CloudEngine 6800,CEM48S6QP05,48-Port SFP+ Optical,6-Port 40GE QSFP+ Optical Switch Control Unit,1*1
                    add:bnameCE685648T6QHI(688274),              -- Manufactured Board,CloudEngine 6800,CEM48T6QP02,48 Port 10GE RJ45, 6 Port 40GE QSFP+ Optical Switch Control Unit,1*1
                    add:bnameCX916(688275),                      -- CX916
                    add:bnameCEL08CFFG1(688276),                 -- Manufactured Board,CloudEngine 12800,CE-L08CF-FG1,8-Port-100GE Interface Card(FG1,CFP2)
                    add:bnameCEL16CQFD(688277),                  -- Manufactured Board,CloudEngine 12800,CE-L16CQ-FD,16-Port-100GE Interface Card(FD,QSFP28)
                    add:bnameCEL48XSFD1(688279),                 -- Manufactured Board,CloudEngine 12800,CE-L48XS-FD1,48-Port-10GE Interface Card(FD1,SFP+)
                    add:bnameCE687548S4CQEI(688280),             -- Manufactured Board,CloudEngine 6800,CEM48S4CQP01,48-Port 10GE SFP+,4-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                    add:bnameCEMPUBS(688283),                    -- Manufactured Board,CloudEngine 12800S,CE-MPUB-S
                    add:bnameCESFUGS(688284),                    -- Manufactured Board,CloudEngine 12800S,CE-SFUG-S,CE12800S Switch Fabric Unit G,1*1
                    add:subbnameCED24S2CQU(688141),       -- Manufactured Board,CloudEngine 8800,CE88-D24S2CQ-U,CE8860:24-Port-25GE/32G FC(SFP28),2-Port-100GE(QSFP28) Interface Card,1*1
                  ""V7.74,
                 Add:  virentME60DEVME0DL6XE8G70(161614),    -- for V800R010C00 ME0DL6XE8G70(SBOM),6-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Broadband Service Unit Integrated(BSUI-120)
                 Add:  virent8090DEVCR5DL6XE8G70(161615),    -- for V800R010C00 CR5DL6XE8G70(SBOM),6-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Integrated Line Processing Unit (LPUI-120)
                 Add:  virent8090DEVCR5D000VSE70(161616),    -- for V800R010C00 CR5D000VSE70(SBOM),Value-added Service Engine Unit(VSE-A)
                 Add:  subbname8090DEVCR57L6XE4GF0(537714),  -- 6-Port 10GBase LAN/WAN-SFP+ + 4-Port 100/1000Base-X-SFP Fixed Card
                 Add:  subbname8090DEVCR57E4GFC0(537715),    -- 4-Port 100/1000Base-X-SFP Fixed Card A
				 "�"V7.73,
                 Add:   virent8090DEVCR9DLPUFT280(675926),  -- 2T Flexible Card Line Processing Unit(NE9000E LPUF-2T,2 sub-slots)
                 Add:   virent8090DEVCR9D00DDNC80(675927),  -- 16-Port 100G ETH/DWDM CFP2 Integrated Line Process Unit(NE9000 LPUI-2T)
                 Add:   virent8090DEVCR9D00DDNC8P(675928),  -- 16-Port 100G ETH/DWDM CFP2 Integrated Line Process Unit CM(NE9000 LPUI-2T-CM)
                 Add:   virent8090DEVCR9D00EENB80(675923),  -- 20-Port 100GBase-QSFP28 Integrated Line Process Unit (NE9000 LPUI-2T)
                 Add:   virent8090DEVCR9D00EENB8P(675929),  -- 20-Port 100GBase-QSFP28 Integrated Line Process Unit CM(NE9000 LPUI-2T-CM)
                 Add:   virent8090DEVCR9D00DDNC8L(675930),  -- 16-Port 100GBase ETH/DWDM-CFP2 Integrated Line Process Unit L(NE9000 LPUI-2T-L)
                 Add:   virent8090DEVCR9D00EENB8L(675931)  -- 20-Port 100GBase-QSFP28 Integrated Line Process Unit L(NE9000 LPUI-2T-L)
                    "�"V7.72,
	Add: subbname8090DEVCR5D04OTU290(537488),    -- 4-Port 10G OTU2-XFP Physical Interface Card(PIC)
                   Add: subbname8090DEVCR9D00N2NC80(537489),    -- 2-Port 100G OTN/ETH-CFP2 Flexible Card
                   Add: subbname8090DEVCR5D00E2NC77(537490),    -- 2-Port 100GBase-CFP2 Flexible Card A(P480-A)
                   	Add: subbname8090DEVCR5D00LAXF91(561523),     -- 10-Port 10GBase-X-SFP+ Physical Interface Card(PIC)
	Add: subbname8090DEVCR5D00E1NC99(561524),     -- 1-Port 100GBase-CFP2 Physical Interface Card(PIC)
	Add: subbname8090DEVCR5D00E2NB91(561525),     -- 2-Port 100GBase-QSFP28 Physical Interface Card(PIC)
                   Add: subbname8090DEVANKD01EXAS00(561526),    -- Finished Board Unit,ATN 950C,ANK1EXAS0,10 Channels 10GE Optical Interface Board(SFP+)
                   Add: subbname8090DEVANKD001EH100(561527),    -- Finished Board Unit,ATN 950C,ANK1EH1,1 Channel 100GE Optical Interface Board(CFP2)
                   Add: subbname8090DEVCR5D00P4XX60(561528),    -- 4-Port OC-192c/STM-64c POS-XFP Flexible Card(CP400,Occupy 1 sub-slot)
	Add: subbname8090DEVCR58EANBB0(561529),        -- 10-Port 100GBase-QSFP28 Integrated Card
                    "�"V7.71,
	Add: virent8090DEVCX6D00DDNCA0(570054),    -- V8R10C00 for CX6D00DDNCA0(SBOM) 16-Port 100G ETH/DWDM CFP2 Integrated Line Processing Unit (LPUI-2T)
	Add: virent8090DEVCX6D00EENBA0(570055),    -- V8R10C00 for CX6D00EENBA0(SBOM) 20-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-2T)
	Add: virent8090DEVCX6D00EKNBA0(570056),    -- V8R10C00 for CX6D00EKNBA0(SBOM) 40-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-4T)
	Add: virent8090DEVCX6D00EPXFA0(570057),    -- V8R10C00 for CX6D00EPXFA0(SBOM) 60-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit (LPUI-1T)
	Add: virent8090DEVCR9D00EDNB8L(562076),    -- V8R10C00 for CR9D00EDNB8L(SBOM) 16-Port 100GBase-QSFP28 Integrated Line Process Unit L(NE9000 LPUI-2T-L)
                    ""V7.70,
	Add: subnameLND1XE2S(708624),           -- 2 Channels 10GE Optical Interface Board 
	Add: subnameLND1LM1A(708625),           -- 16 Channels E1 Interface Board(75ohm) 
	Add: subnameLND1LM1B(708626),           -- 16 Channels E1 Interface Board(120ohm)
                    "�"V7.69,
	add wlan device 
                    ADD: fnameAD9431DN-24X(692299),       --WLAN new ap ENUM_ 
	ADD: fnameAP7152DN(692300),           --WLAN new ap ENUM_ 
	ADD: fnameAP6052DN(692301),           --WLAN new ap ENUM_ 
	ADD: fnameAP8082DN(692302),           --WLAN new ap ENUM_ 
	ADD: fnameAP8182DN(692303),           --WLAN new ap ENUM_ 
	ADD: fnameAP7052DE(692304),           --WLAN new ap ENUM_ 
	ADD: fnameAP7052TN-WI(692305),        --WLAN new ap ENUM_ 
	ADD: fnameAP8050TN-HD(692306),        --WLAN new ap ENUM_ 
	ADD: fnameAP4051TN(692307),           --WLAN new ap ENUM_ 
	ADD: fnameAP7052DN(692308),           --WLAN new ap ENUM_ 
                    ""V7.68,
                    Add: subbnameH836ASDJ(156063),   --VOIP DSP Subboard H836ASDJ.
					
		    Add: bnameH82EEFUG(156066),   --Master board of MA5811S-AE08/AE16/DE16 device.    
		    Add: bnameHS2EEFUG(156067),   --16 G.FAST board of MA5811S-DE16 service board.
		    Add: bnameH82EEFMG(156068),   --Master board of MA5811S-DE48 device.    
		    Add: bnameHS2EEFMG(156069),   --48 G.FAST board of MA5811S-DE48 service board.
		    Add: bnameHS2EEFUR(156071),   --16 G.FAST remote board of MA5811S-AE16 service board.
		    Add: bnameHS2EEFJR(156072),   --8 G.FAST remote board of MA5811S-AE08 service board.
					 
		    Add: fnameMA5811S-G5-AE08(561654),  --Virtual frame MA5811S-AE08 of MA5811S_AE08 device.
		    Add: fnameMA5811S-G5-DE48(561655),  --Virtual frame MA5811S-DE48 of MA5811S_DE48 device. 
		    Add: fnameMA5811S-G5-AE16(561656),  --Virtual frame MA5811S-AE16 of MA5811S_AE16 device.
		    Add: fnameMA5811S-G5-DE16(561657),  --Virtual frame MA5811S-DE16 of MA5811S_DE16 device.
                    " n"V7.67,
                    Add: bnameH806VPED(156070),   -- support super vector board.
                    " �"V7.66,
                    add:subbnameFAN40HAB(536788),     --2359097 Fan box(HA,Back to Front,FAN panel side exhaust)
                  "?"V7.65,
                    add:subbname8090DEVCR2D00MPAA90(561651),       --4-Channel FXS/FXO+2-Channel E&M+2-Channel RS232+2-Channel RS485 Board
                    add:subbname8090DEVCR2D000SA890(561652),        --8-Channel V.35/X.21/V.24 Board
                    add:subbname8090DEVCR2D00MP8A90(561653),       --4 Channels C37.94 Optical Interface and 4 Channels CoDir64K Electric Interface Board

                    add:subbnameATNNEDD01MPAA00(225597),                --4-Channel FXS/FXO+2-Channel E&M+2-Channel RS232+2-Channel RS485 Board
                    add:subbnameATNNEDD001SA800(225598),                 --8-Channel V.35/X.21/V.24 Board
                    add:subbnameATNNEDD01MP8A00(225599),                --4 Channels C37.94 Optical Interface and 4 Channels CoDir64K Electric Interface Board
                  ""V7.64,
                     add:virent8090DEVCR5D0MPUKA90(565042),      -- for V800R010C00 CR5D0MPUKA90(SBOM) Main Processing Unit KA
                     add:virent8090DEVCX6D0MPUKA90(565043),      -- for V800R010C00 CX6D0MPUKA90(SBOM) Main Processing Unit KA
                     add:virent8090DEVTNUD0MPUKA90(565044),     -- for V800R010C00 TNUD0MPUKA90(SBOM) Main Processing Unit KA
                     add:virent8090DEVCR2D0MPUEA00(565045),     -- for V800R010C00 CR2D0MPUEA00(SBOM),Main Processing Unit EA
                     "<"V7.63,
                     Add:bnamePTN7900TPD1EHD1(229453), --TPD1EHD1,1-port 200 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EXL2(229454), --TPD1EXL2,2-port 40 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EX8S(229455), --TPD1EX8S,8-port 10 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EX16S(229456), --TPD1EX16S,16-port 10 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EG24(229457), --TPD1EG24,24-port Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1MQ1(229458), --TPD1MQ1,63 Channels E1 Interface Processing Board
                     Add:bnamePTN7900TPD1EV4(229459), --TPD1EV4,4-port 50 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EH4(229460), --TPD1EH4,4-Port 100 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPD1EH2A(229461), --TPD1EH2A,2-port 100 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPA1EH2A(229462), --TPA1EH2A,2-Port 100 Gigabit Ethernet Switching Processing Board
                     Add:bnamePTN7900TPA1EX20A(229463), --TPA1EX20A,20-port 10 Gigabit Ethernet Switching Processing Board
                     "�"V7.62,
            add:virent8090DEVCX6D0MPUP1A0(570050),    -- V8R10C00 for CX6D0MPUP1A0(SBOM) Main Processing Unit P1
            add:virent8090DEVCX6DSFUIT4AA(570051),    -- V8R10C00 for CX6DSFUIT4AA(SBOM) 4Tbps Switch Fabric Unit A(SFUI-4T-A)
            add:virent8090DEVCX6D0MPUN1A0(570052),    -- V8R10C00 for CX6D0MPUN1A0(SBOM) Main Processing Unit N1
            add:virent8090DEVCX6DSFUIT4AB(570053),    -- V8R10C00 for CX6DSFUIT4AB(SBOM) 4Tbps Switch Fabric Unit B(SFUI-4T-B)
            add:fname8090CX6620(562055),       --Quidway CX6620 FRAME
            add:fname8090CX6608(562056),       --Quidway CX6608 FRAME

            add:virent8090DEVCR5D00E2NB70(566121),    -- for V800R010C00 CR5D00E2NB70(SBOM),2-Port 100GBase-QSFP28 Integrated Line Processing Unit(LPUI-200)
            add:virent8090DEVCR5DE1NLAX78(566122),    -- for V800R010C00 CR5DE1NLAX78(SBOM),1-Port 100GBase-QSFP28 + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit(LPUI-200)
            add:virent8090DEVCR5D0E2NBL70(566123),    -- for V800R010C00 CR5D0E2NBL70(SBOM),2-Port 100GBase-QSFP28 Integrated Line Processing Unit L(LPUI-200-L)
            add:virent8090DEVCR5DE1NLAX7A(566124),    -- for V800R010C00 CR5DE1NLAX7A(SBOM),1-Port 100GBase-QSFP28 + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-200-L)
            add:virent8090DEVME0D0E2NBB70(566125),    -- for V800R010C00 ME0D0E2NBB70(SBOM),2-Port 100GBase-QSFP28 Multi Service Unit Integrated(MSUI-200)
            add:virent8090DEVME0D0E4NBM70(566126),    -- for V800R010C00 ME0D0E4NBM70(SBOM),4-Port 100GBase-QSFP28 Multi Service Unit Integrated(MSUI-400)


            add:virent8090DEVCX6DSFUIM17B(565016),      -- for V800R10C00 CX6DSFUIM17B(SBOM)	480Gbps Switch Fabric Unit B(SFUI-480-B)
            add:virent8090DEVCX6DSFUIT27B(565017),      -- for V800R10C00 CX6DSFUIT27B(SBOM)	2Tbps Switch Fabric Unit B(SFUI-2T-B)
            add:virent8090DEVCX6D0SRUA872(565018),      -- for V800R10C00 CX6D0SRUA872(SBOM)	Switch and Route Processing Unit A8(16G Memory)
            add:virent8090DEVCX6DSFUIM17C(565019),      -- for V800R10C00 CX6DSFUIM17C(SBOM)	480Gbps Switch Fabric Unit C(SFUI-480-C)
            add:virent8090DEVTNRDSFUIM17B(565020),      -- for V800R10C00 TNRDSFUIM17B(SBOM)	480Gbps Switch Fabric Unit B(SFUI-480-B)
            add:virent8090DEVTNRDSFUIT27B(565021),      -- for V800R10C00 TNRDSFUIT27B(SBOM)	2Tbps Switch Fabric Unit B(SFUI-2T-B)
            add:virent8090DEVTNRD0SRUA872(565022),      -- for V800R10C00 TNRD0SRUA872(SBOM)	Switch and Route Processing Unit A8(16G Memory)
            add:virent8090DEVTNRDSFUIM17C(565023),      -- for V800R10C00 TNRDSFUIM17C(SBOM)	480Gbps Switch Fabric Unit C(SFUI-480-C)
            add:virent8090DEVCX6DSFUIM11B(565024),      -- for V800R10C00 CX6DSFUIM11B(SBOM)	480Gbps Switch Fabric Unit B(SFUI-480-B)
            add:virent8090DEVCX6DSFUIT21B(565025),      -- for V800R10C00 CX6DSFUIT21B(SBOM)	2Tbps Switch Fabric Unit B(SFUI-2T-B)
            add:virent8090DEVCX6D0SRUA812(565026),      -- for V800R10C00 CX6D0SRUA812(SBOM)	Switch and Route Processing Unit A8(16G Memory)	
            add:virent8090DEVCX6DSFUIM11C(565027),      -- for V800R10C00 CX6DSFUIM11C(SBOM)	480Gbps Switch Fabric Unit C(SFUI-480-C)
            add:virent8090DEVME0DSFUIM17B(565028),      -- for V800R10C00 ME0DSFUIM17B(SBOM)	480Gbps Switch Fabric Unit B(SFUI-480-B)
            add:virent8090DEVME0D0SRUA872(565029),      -- for V800R10C00 ME0D0SRUA872(SBOM)	Switch and Route Processing Unit A8(16G Memory)
            add:virent8090DEVME0DSFUIM17C(565030),      -- for V800R10C00 ME0DSFUIM17C(SBOM)	480Gbps Switch Fabric Unit C(SFUI-480-C)
            
            add:virent8090DEVCR5D00EENB70(675922),      -- for V800R10C00 CR5D00EENB70(SBOM) 20-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-2T)
            add:virent8090DEVCR5D00EENB7B(565031),      -- for V800R10C00 CR5D00EENB7B(SBOM) 20-Port 100GBase-QSFP28 Integrated Line Processing Unit B(LPUI-2T-B)
            add:virent8090DEVCR5D00EENB7P(565032),      -- for V800R10C00 CR5D00EENB7P(SBOM) 20-Port 100GBase-QSFP28 Integrated Line Processing Unit CM(LPUI-2T-CM)
            add:virent8090DEVCX6D00EENB10(565033),      -- for V800R10C00 CX6D00EENB10(SBOM) 20-Port 100GBase-QSFP28 Integrated Line Processing Unit (ISUI-2T)
            
            add:virent8090DEVCX6DISUFM011(565034),      -- for V800R10C00 CX6DISUFM011(SBOM) Flexible Card Integrated Service Unit(ISUF-480)
            add:virent8090DEVME0DBSUFM071(565035),      -- for V800R10C00 ME0DBSUFM071(SBOM) Flexible Card Broadband Service Unit(BSUF-480,2 sub-slots)
            add:virent8090DEVME0DBSUFK071(565036),      -- for V800R10C00 ME0DBSUFK071(SBOM) Flexible Card Broadband Service Unit(BSUF-400,2 sub-slots)
            add:virent8090DEVME0DMSUFM071(565037),      -- for V800R10C00 ME0DMSUFM071(SBOM) Flexible Card Multi Service Unit(MSUF-480,2 sub-slots)
            add:virent8090DEVME0D0L4NCB71(565038),      -- for V800R10C00 ME0D0L4NCB71(SBOM) 4-Port 100GBase-CFP2 Broadband Service Unit Integrated(BSUI-400)
            add:virent8090DEVME0D0LKXFB71(565039),      -- for V800R10C00 ME0D0LKXFB71(SBOM) 40-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated(BSUI-400)
            add:virent8090DEVME0D0E4NCM71(565040),      -- for V800R10C00 ME0D0E4NCM71(SBOM) 4-Port 100GBase-CFP2 Multi Service Unit Integrated(MSUI-400)
            add:virent8090DEVME0D0LMXFA71(565041),    -- for V800R010C00 ME0D0LMXFA71(SBOM),48-Port 10GBase LAN/WAN-SFP+ Multi Service Unit Integrated(MSUI-480)
       " z"V7.61,
          subbname8090DEVCR53C2CF0(567890),    -- 2-Port Channelized OC-3c/STM-1c POS-SFP Flexible Card
         "^"V7.60,
          add:subbname8090DEVCR5D0LEXFE72(561520),    -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P480-A)
          add:subbname8090DEVCR5D0LAXFE71(561521),    -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P240-A)
          add:subbname8090DEVCR5D0L6XFE70(561522),    -- 6-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P120-E)
            "�"V7.59,
          add:virent8090DEVCR5DSFUIT28A(562084),  --2T Switch Fabric Unit for Single Chassis (SFU-2T-A)
          add:virent8090DEVCR5D0MPUB680(562085), --Main Processing Unit B6
          add:virent8090DEVCR5D00EDNB80(562086),  --16-Port 100GBase-QSFP28 Integrated Line Process Unit B (NE40E LPUI-2T)
          add:virent8090DEVCR5DE3NL5X60(562087),  --3-Port 100GBase-QSFP28 + 5-Port 10GBase LAN/WAN SFP+ Integrated Line Process Unit (NE5000E LPUI-1T)
            "
"V7.58,
          modify: fname8031S2720-12TP-EI(537135),            --S2720-12TP-EI           Metro Service Platform for V2R11, modify name
          modify: fname8031S2720-12TP-PWR-EI(537138),        --S2720-12TP-PWR-EI       Metro Service Platform for V2R11, modify name
          modify: fname8031S2720-52TP-EI(537140),            --S2720-52TP-EI           Metro Service Platform for V2R11, modify name
          modify: fname8031S2720-52TP-PWR-EI(537142),        --S2720-52TP-PWR-EI       Metro Service Platform for V2R11, modify name
          modify: fname8031S2720-28TP-PWR-EI-L(537144),       --S2720-28TP-PWR-EI-L      Metro Service Platform for V2R11, modify name
          modify: fname8031S2720-28TP-EI(537145),         --S2720-28TP-EI       Metro Service Platform for V2R11, modify name, modify name
          modify: fname8031S2720-28TP-PWR-EI(537148),        --S2720-28TP-PWR-EI       Metro Service Platform for V2R11, modify name

          modify: bname8031S2720-12TP-EI(537319),                --S2720-12TP-EI           Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-12TP-PWR-EI(537322),            --S2720-12TP-PWR-EI       Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-52TP-EI(537324),                --S2720-52TP-EI           Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-52TP-PWR-EI(537326),            --S2720-52TP-PWR-EI-AC       Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-28TP-PWR-EI-L(537328),           --S2720-28TP-PWR-EI-L      Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-28TP-EI(537329),             --S2720-28TP-EI        Metro Service Platform for V2R11,modify name
          modify: bname8031S2720-28TP-PWR-EI(537332),            --S2720-28TP-PWR-EI       Metro Service Platform for V2R11,modify name
           
          add: bnameET1D2L16QX2H(700476),    --16-Port 40GE QSFP+ Interface Card(X2H,QSFP+) for 12700 v2r11
          add: bnameET1D2C08HX2H(700477),    --8-Port 100GE QSFP28 Interface Card(X2H,QSFP28) for 12700 v2r11
          add: bnameES1D2L16QX2H(663631),    --16-Port 40GE QSFP+ Interface Card(X2H,QSFP+) for 7700 v2r11
          add: bnameES1D2C08HX2H(663632),    --8-Port 100GE QSFP28 Interface Card(X2H,QSFP28) for 7700 v2r11
          add: bnameLE1D2L16QX2H(659665),    --16-Port 40GE QSFP+ Interface Card(X2H,QSFP+) for 9310 v2r11   
          add: bnameLE1D2C08HX2H(659666),    --8-Port 100GE QSFP28 Interface Card(X2H,QSFP28)  for 9310 v2r11
          "y"V7.57,
                     Add: virent8090DEVCR5DE2NLFX71(564920), --CR5DE2NLFX71, 2-Port 100GBase-QSFP28 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480)
                     Add: virent8090DEVCR5DE2NLFX72(564921), --CR5DE2NLFX72, 2-Port 100GBase-QSFP28 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-480-B)
                     Add: virent8090DEVCR5DE2NLFX73(564922), --CR5DE2NLFX73, 2-Port 100GBase-QSFP28 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-480-L)
                     Add: virent8090DEVCR5D00E4NB70(564923), --CR5D00E4NB70, 4-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-480)
                     Add: virent8090DEVCR5D00E4NB7B(564924), --CR5D00E4NB7B, 4-Port 100GBase-QSFP28 Integrated Line Processing Unit B(LPUI-480-B)
                     Add: virent8090DEVCR5D00E4NB7C(564925), --CR5D00E4NB7C, 4-Port 100GBase-QSFP28 Integrated Line Processing Unit L(LPUI-480-L)
                     Add: virentME60DEVME0DE2NLEX7C(564926), --ME0DE2NLEX7C, 2-Port 100GBase-QSFP28 + 20-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated(BSUI-400)
                     Add: subbnameME0D00SP8071(159816),      --ME0D00SP8071 Versatile Service Unit Sub Card(SP80-M)
                     Add: subbnameME0D00SPD071(159815),      --ME0D00SPD071 Versatile Service Unit Sub Card(SP160-M)
                     "e"V7.56,
                     Add: fnameEF1BS7905S00(712704),              -- HUAWEI S7905 FRAME
                     Add: fnameEF1BS7908S00(712705),              -- HUAWEI S7908 FRAME
                     Add: bnameEF1D2S48TE3E(712706),        -- s7900 12-Port 100/1000BASE-X Interface Card and 36-Port 10/100/1000BASE-T(E3E,SFP/RJ45)
                     Add: bnameEF1D2G48TE3E(712707),        -- s7900 48-Port 10/100/1000BASE-T Interface Card(E3E,RJ45)                               
                     Add: bnameEF1D2G48TE3S(712708),        -- s7900 48-Port 10/100/1000BASE-T Interface Card(E3S,RJ45)                               
                     Add: bnameEF1D2G48SE3E(712709),        -- s7900 48-Port 100/1000BASE-X Interface Card(E3E,SFP)                                   
                     Add: bnameEF1D2G48SE3S(712710),        -- s7900 48-Port 100/1000BASE-X Interface Card(E3S,SFP)                                   
                     Add: bnameEF1D2S08SX3S(712711),        -- s7900 8-Port 10GE SFP+ Interface and 24-Port GE SFP Interface Card(X3S,SFP+)           
                     Add: bnameEF1D2S16SX3S(712712),        -- s7900 16-Port 10GE SFP+ Interface and 16-Port GE SFP Interface Card(X3S,SFP+)          
                     Add: bnameEF1D2X48SX3S(712713),        -- s7900 48-Port 10GE SFP+ Interface Card(X3S,SFP+)                                       
                     Add: bnameEF1D2MCUB000(712704),        -- S7905 Main Control Unit B
                     Add: bnameEF1D2SRUF000(712705),        -- S7908 Main Control Unit F
                     
                      
                     "."V7.55,
                     Add: virentANJ0002CXP00(225595),       --  System Control,Cross-connect and Multi-protocol Process Unit with 360G.
                     Add: virentANK200CXPA00(225596),       --  System Control,Cross-connect and Multi-protocol Process Unit with 360G.
                     " �"V7.54,
                     Add: bnameH80DCSPE(155960),        --  --  64-channel POTS(combo) + Vectoring board of MA5600T device, Support SuperVector board.
                     " �"V7.53,
                     Add: fnameMA5800H901BPLD(148514),     -- Backplane of the MA5800
                     Add: fnameMA5608H802Mabr(147572),     -- Backplane of the P300 broadband medium-capacity master Frame: H802MABR
                     "Z"V7.52,
                     Add: subbname8090DEVCR5D0E2NFE70(561730),        --03032LCN, CR5D0E2NFE70, 2-Port 100GBase-QSFP28 Flexible Card E(P480-E)
                     Add: subbname8090DEVCR58E4KCA0(537467),           --03032MYC, CR58E4KCA0, 4-Port 400GBase CFP8 Daughter Card
                     Add: subbname8090DEVCR58D8NCB0(537470),           --03032NAC, CR58D8NCB0, 8-Port 100G CFP2 flexible Dauhtger Card
                     Add: subbname8090DEVCR57EENBE0(537471),           --03032MWM, CR57EENBE0, 20-Port 100GBase QSFP28 Integrated Line Process Unit(NE40E LPUI-2T)
                      "�"V7.51,
                 Add:   virentME60ME0D0VSE0070(564918),      -- for V800R009C10 ME0D0VSE0070(SBOM),Value-added Service Engine Unit (VSE-A) 1.3.6.1.4.1.2011.20021210.15.564918
                 Add:   virent8090DEVCR5D0SRUA872(566111),    -- for V800R010C00 CR5D0SRUA872(SBOM),Switch and Route Processing Unit A8(16G Memory) 1.3.6.1.4.1.2011.20021210.15.566111
                 Add:   virent8090DEVCR5DSFUIM17C(566112),    -- for V800R010C00 CR5DSFUIM17C(SBOM),480Gbps Switch Fabric Unit C(SFUI-480-C) 1.3.6.1.4.1.2011.20021210.15.566112
                 Add:   virent8090DEVCR5DSFUIM17B(566113),    -- for V800R010C00 CR5DSFUIM17B(SBOM),480Gbps Switch Fabric Unit B(SFUI-480-B) 1.3.6.1.4.1.2011.20021210.15.566113)

                 Add:   virent8090DEVCR5DLPUFME71(565001),      -- for V800R10C00 CR5DLPUFME71(SBOM)	Flexible Card Line Processing Unit E(LPUF-480-E)
                 Add:   virent8090DEVCR5DLPUFK071(565002),      -- for V800R10C00 CR5DLPUFK071(SBOM)	Flexible Card Line Processing Unit E(LPUF-400-E)
                 Add:   virent8090DEVCR5DLPUFM071(565003),      -- for V800R10C00 CR5DLPUFM071(SBOM)	Flexible Card Line Processing Unit(LPUF-480)
                 Add:   virent8090DEVCR5DLPUFM17B(565004),      -- for V800R10C00 CR5DLPUFM17B(SBOM)	Flexible Card Line Processing Unit B(LPUF-480-B)						
                 Add:   virent8090DEVCR5D00LMXF71(565005),      -- for V800R10C00 CR5D00LMXF71(SBOM)	48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480)
                 Add:   virent8090DEVCR5DE2NLFX74(565006),      -- for V800R10C00 CR5DE2NLFX74(SBOM)	2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480)
                 Add:   virent8090DEVCR5D00E4NC71(565007),      -- for V800R10C00 CR5D00E4NC71(SBOM)	4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-480)
                 Add:   virent8090DEVCR5D01LMXF7B(565008),      -- for V800R10C00 CR5D01LMXF7B(SBOM)	48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-480-B)
                 Add:   virent8090DEVCR5DE2NLFX75(565009),      -- for V800R10C00 CR5DE2NLFX75(SBOM)	2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-480-B)
                 Add:   virent8090DEVCR5D01E4NC7B(565010),      -- for V800R10C00 CR5D01E4NC7B(SBOM)	4-Port 100GBase-CFP2 Integrated Line Processing Unit B(LPUI-480-B)
                 Add:   virent8090DEVCR5D01LMXF7C(565011),      -- for V800R10C00 CR5D01LMXF7C(SBOM)	48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-480-L)
                 Add:   virent8090DEVCR5DE2NLFX76(565012),      -- for V800R10C00 CR5DE2NLFX76(SBOM)	2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-480-L)
                 Add:   virent8090DEVCR5D01E4NC7C(565013),      -- for V800R10C00 CR5D01E4NC7C(SBOM)	4-Port 100GBase-CFP2 Integrated Line Processing Unit L(LPUI-480-L)
                 Add:   virent8090DEVCR5D00D4NC71(565014),      -- for V800R10C00 CR5D00D4NC71(SBOM)	4-Port 100GBase-CFP2 DWDM Integrated Line Processing Unit(LPUI-480)
                 Add:   virent8090DEVCR5D00E4NC7Q(565015),      -- for V800R10C00 CR5D00E4NC7Q(SBOM)	4-Port 100G ETH/DWDM-CFP2 Integrated Line Processing Unit CM(LPUI-480-CM)

                 Add:   virent8090DEVCR9D00EKNB80(562055), -- 40-Port 100GBase QSFP28 Integrated Line Process Unit(NE9000 LPUI-4T)
                 Add:   virent8090DEVCR9D00EKNB8P(562056), -- 40-Port 100GBase QSFP28 Integrated Line Process Unit CM(NE9000 LPUI-4T-CM)
                 Add:   virent8090DEVCR9D00EKNB8L(562057)  -- 40-Port 100GBase QSFP28 Integrated Line Process Unit L(NE9000 LPUI-4T-L)
                    ""V7.50,
                 Add:   virent8090DEVCR5D00EDNB61(562083),   -- 16-Port 100GBase-QSFP28 Integrated Line Process Unit B (NE5000E LPUI-2T-B)
                modify:virent8090DEVCR5D0MPUN080(562040)  to virent8090DEVCR9D0MPUN180(562040)
                    "."V7.49,
                     Add: subbname8090DEVCR5D00E5MF6B(537468),    -- 5-Port 40GBase-QSFP+ Flexible Card B(CP400,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR5D00LEXF6B(537469),    -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card B(CP400,Occupy 1 sub-slot)

                      "�"V7.48,
                    add:fname8031S2320-52TP-EI-DC(537206) to fname8031S5730S-68C-PWR-EI(537211)  for lsw v2r11c10
                    add:bname8031S2320-52TP-EI-DC(537390) to bname8031S5730S-68C-PWR-EI(537395)  for lsw v2r11c10 
                    add:fname8031S5330-36C-HI(537216)  to fname8031S6320-30L-HI-24S(537230)   for lsw v2r11c50
                    add:bname8031S5330-36C-HI(537400) to bname8031S6320-30L-HI-24S(537414)  for lsw v2r11c50
                    add:subbnameES2D1POE4800(536784)   for lsw v2r11c50
                    add:subbnameES2D1POE2403(536785)  for lsw v2r11c50
                    add:subbnameES5D21Q06Q00(536786)  for lsw v2r11c50
                    add:subbnameES5D2CKM0000(536787)  for lsw v2r11c50

                      " �"V7.47,
                     add:bnameLE1D2G48SX1C(659664),      --48-Port 100/1000BASE-X Interface Card(X1C,SFP) for V2R11
                     
                      " �"V7.46,
                      add wlan device 
                      ADD: fnameAP1050DN-S(692298),           --WLAN new ap ENUM_ 

                      ")"V7.45,
                     add:fname8031S5730-52X-PWH-SI-ACF(537203),       --98010786	S5730-52X-PWH-SI-ACF add for lsw v2r11c10
                     add:fname8031S5730-56C-PWH-SI-AC(537204),        --98010785	S5730-56C-PWH-SI-AC  add for lsw v2r11c10
                     add:fname8031S5730-32C-PWH-SI-AC(537205),        --98010787	S5730-32C-PWH-SI-AC  add for lsw v2r11c10
                
                     add:bname8031S5730-52X-PWH-SI-ACF(537387),       --98010786	S5730-52X-PWH-SI-ACF add for lsw v2r11c10
                     add:bname8031S5730-56C-PWH-SI-AC(537388),        --98010785	S5730-56C-PWH-SI-AC  add for lsw v2r11c10
                     add:bname8031S5730-32C-PWH-SI-AC(537389),        --98010787	S5730-32C-PWH-SI-AC  add for lsw v2r11c10 
                     
                      ""V7.44,
                     Add: subbname8090DEVCR5DE2VE1N70(537466),      --03032MVX, CR5DE2VE1N70, 2-Port 50GBase/1-Port 100GBase-QSFP28 FlexE Flexible Card (P120)
                     Add: subbname8090DEVCR5D00E25F10(561640),       --03032QNG, CR5D00E25F10, 2 Port 50G Base QSFP28 High Speed Interface Card
                     Add: subbname8090DEVCR58EENBA0(537465),           --03032MYU, CR58EENBA0,20*100GBase QSFP28 flexible Dauhtger Card
                     Add: subbnameATNANJ1EV2(564531),                              --03057706, ATNANJ1EV2, 2 Port 50GBase QSFP28 High Speed Interface Card
                     Add: subbnamePTN990TPJ1EV2(229506),                       --03057714,TPJ1EV2 , 2 Port 50G Base-Qsfp28 High-Speed Interface Card
                      "�"V7.43,
                     Add: bnameH902XSED(148623),        --  8*10G GPON board of MA5800.
                     Add: bnameH901DSHD(148624),        --  8*GE and 10GE combo board of MA5800.
                     Add: bnameH901OGHF(148625),        --  16 P2P board of MA5800.
                     Add: bnameH901OXHG(148626),        --  24*10GE board of MA5800.
                     Add: bnameH901NXLC(148627),        --  4*10GE board of MA5800.
                      "�"V7.42,
                     Add:fnamePTN7900TPD1CHASSIS(229408),   --PTN 7900E-32 Integrated Chassis Components
                     Add:bnamePTN7900TPB3CXP(229439), --TPB3CXP,System Control, Cross-Connect and Timing Unit,1*1
                     Add:bnamePTN7900TPC2CXP(229440), --TPC2CXP,System Control, Cross-Connect and Timing Unit,1*1
                     Add:bnamePTN7900TPA2SCA(229441), --TPA2SCA,System Control, Communication and Auxiliary Processing Unit,1*1
                     Add:bnamePTN7900TPD1SCA(229442), --TPD1SCA,System Control, Communication and Auxiliary Processing Unit,1*1
                     Add:bnamePTN7900TPB3XCS(229443), --TPB3XCS,Switch Fabric Unit,1*1
                     Add:bnamePTN7900TPC2XCS(229444), --TPC2XCS,Switch Fabric Unit,1*1
                     Add:bnamePTN7900TPD1XCS(229445), --TPD1XCS,Switch Fabric Unit,1*1
                     Add:bnamePTN7900TPA4EH1(229446), --TPA4EH1,1-Port 100GE Switching Processing Board
                     Add:bnamePTN7900TPA1EH4(229447), --TPA1EH4,4-Port 100GE Switching Processing Board
                     Add:bnamePTN7900TPD1EHL2(229448), --TPD1EHL2,2-Port 400GE Switching Processing Board
                     Add:bnamePTN7900TPD1PIU(229449), --TPD1PIU,Power Interface Unit
                     Add:bnamePTN7900TPD1FAN(229450), --TPD1FAN,Fan Board
                     Add:bnamePTN7900TPD1EFI(229451), --TPD1EFI,EMI Filter Interface Board
                     Add:bnamePTN7900TPA1EV2(229452), --TPA1EV2,2-Port 50GE Switching Processing Board
                     Add:virentPTN7900TPB3VXCS(229484),      --TPB3VXCS, Switch Fabric Unit Board,1*1
                     Add:virentPTN7900TPC2VXCS(229485),      --TPC2VXCS, Switch Fabric Unit Board,1*1
                    "�"V7.41,
                     --for CloudEngine 20170422
                     Add:                fnameCE688048S4Q2CQEI(688163),           -- CloudEngine CE6880-48S4Q2CQ-EI Switch(48*10G SFP+,6*40G QSFP+ or 44*10G SFP+,4*40G QSFP+,2*100G QSFP28)
                     Add:                fnameCE688024S4Q2CQEI(688164),           -- CloudEngine CE6880-24S4Q2CQ-EI Switch(24*10G SFP+,4*40G QSFP+,2*100G QSFP28)
                     Add:                fnameCE688048T4Q2CQEI(688165),           -- CloudEngine CE6880-48T4Q2CQ-EI Switch(48*10G RJ45,6*40G QSFP+ or 44*10G RJ45,4*40G QSFP+,2*100G QSFP28)
                     Add:                fnameCE12816M(688170),                   -- CE12816M DC Assembly Chassis
                     Add:                fnameCE885032CQEI(688171),               -- CloudEngine CE8850-32CQ-EI Switch(32-Port 100GE QSFP28,2-Port 10GE SFP+)
                     Add:                fnameCE12804E(688166),                   -- CE12804E Assembly Chassis
                     Add:                fnameCE12808E(688167),                   -- CE12808E Assembly Chassis
                     Add:                fnameCE12812E(688168),                   -- CE12812E Assembly Chassis
                     Add:                fnameCE12816E(688169),                   -- CE12816E Assembly Chassis
                     Add:                fnameCE687048T6CQEI(688172),             -- CloudEngine 6800,CE6870-48T6CQ-EI,CE6870-48T6CQ-EI Switch(48-Port 10GE RJ45,6-Port 100GE QSFP28)
                     Add:                bnameCE688048S4Q2CQEI(688235),           -- Manufactured Board,CloudEngine 6800,CEM48S4Q2CQP01,48-Port SFP+ Optical,4-Port 40GE QSFP+ Optical,2-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add:                bnameCE688024S4Q2CQEI(688236),           -- Manufactured Board,CloudEngine 6800,CEM24S4Q2CQP01,24-Port SFP+ Optical,4-Port 40GE QSFP+ Optical,2-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add:                bnameCE688048T4Q2CQEI(688237),           -- Manufactured Board,CloudEngine 6800,CEM48T4Q2CQP01,48-Port 10GE RJ45,4-Port 40GE QSFP+ Optical,2-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add:                bnameCESFU16GM(688238),                  -- Manufactured Board,CloudEngine 12800,CE-SFU16G-M,CE12816M Switch Fabric Unit G
                     Add:                bnameCEL36CQFDM(688239),                 -- Manufactured Board,CloudEngine 12800,CEL36CQFD-M,36-Port-100GE Interface Card(FD-M,QSFP28)
                     Add:                bnameCEL36LQFDM(688240),                 -- Manufactured Board,CloudEngine 12800,CEL36LQFD-M,36-Port-40GE Interface Card(FD-M,QSFP+)
                     Add:                bnameCEL24LQFDM(688241),                 -- Manufactured Board,CloudEngine 12800,CEL24LQFD-M,24-Port-40GE Interface Card(FD-M,QSFP+)
                     Add:                bnameCEL12CQFDM(688242),                 -- Manufactured Board,CloudEngine 12800,CEL12CQFD-M,12-Port-100GE Interface Card(FD-M,QSFP28)
                     Add:                bnameCEL48XSFDAM(688243),                -- Manufactured Board,CloudEngine 12800,CEL48XSFDA-M,48-Port-10GE,2-Port-40GE,2-Port-100GE Interface Card(FDA-M,SFP+,QSFP+,QSFP28)
                     Add:                bnameCEL48XSFDM(688244),                 -- Manufactured Board,CloudEngine 12800,CEL48XSFD-M,48-Port-10GE Interface Card(FD-M,SFP+)
                     Add:                bnameCE885032CQEI(688245),               -- Manufactured Board,CloudEngine 8800,CEM32CQP01,32-Port 100GE QSFP28,2-Port 10GE SFP+ Optical Switch Control Unit,1*1
                     Add:                bnameCESFU08G(688246),                   -- Manufactured Board,CloudEngine 12800,CE-SFU08G,CE12808 Switch Fabric Unit G,1*1
                     Add:                bnameCESFU04G(688247),                   -- Manufactured Board,CloudEngine 12800,CE-SFU04G,CE12804 Switch Fabric Unit G,1*1
                     Add:                bnameCESFU16CE(688248),                  -- Manufactured Board,CloudEngine 12800,CESFU16CE,CE12816E Switch Fabric Unit C,1*1
                     Add:                bnameCESFU12CE(688249),                  -- Manufactured Board,CloudEngine 12800,CESFU12CE,CE12812E Switch Fabric Unit C,1*1
                     Add:                bnameCESFU08CE(688250),                  -- Manufactured Board,CloudEngine 12800,CESFU08CE,CE12808E Switch Fabric Unit C,1*1
                     Add:                bnameCESFU04CE(688251),                  -- Manufactured Board,CloudEngine 12800,CESFU04CE,CE12804E Switch Fabric Unit C,1*1
                     Add:                bnameCEL16CQEGE(688252),                 -- Manufactured Board,CloudEngine 12800E,CEL16CQEG-E,16-Port-100GE Interface ENP Card(EG,QSFP28)
                     Add:                bnameCEL36LQEDE(688253),                 -- Manufactured Board,CloudEngine 12800E,CEL36LQED-E,36-Port-40GE Interface ENP Card(ED,QSFP+)
                     Add:                bnameCEL36LQEGE(688254),                 -- Manufactured Board,CloudEngine 12800E,CEL36LQEG-E,36-Port-40GE Interface ENP Card(EG,QSFP+)
                     Add:                bnameCEL48XSEGAE(688255),                -- Manufactured Board,CloudEngine 12800,CEL48XSEGA-E,48-Port-10GE,4-Port-100GE Interface Card(NGA,SFP+,QSFP28)
                     Add:                bnameCEL24XSEGAE(688256),                -- Manufactured Board,CloudEngine 12800E,CEL24XSEGA-E,24-Port-10GE,2-Port-100GE Interface ENP Card(EGA,SFP+,QSFP28)
                     Add:                bnameCEL48XSEDE(688257),                 -- Manufactured Board,CloudEngine 12800E,CEL48XSED-E,48-Port 10GBASE-X Interface ENP Card(ED,SFP+)
                     Add:                bnameCEL24XSEDE(688258),                 -- Manufactured Board,CloudEngine 12800E,CEL24XSED-E,24-Port 10GBASE-X Interface ENP Card(ED,SFP+)
                     Add:                bnameCEMPUAE(688259),                    -- Manufactured Board,CloudEngine 12800E,CE-MPUA-E,CE12800E Main Processing Unit A,1*1
                     Add:                bnameSIAMESEDFAN(688262),                -- CloudEngine 12800E,Siamesedfan
                     Add:                bnameVERTICALPOW(688263),                -- CloudEngine 12800E,Power Module for CE12808E,CE12812E and CE12816E
                     Add:                bnameCE687048T6CQEI(688265),             -- Manufactured Board,CloudEngine 6800,CEM48T6CQP01,48-Port 10GE RJ45,6-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     " �"V7.40,
                    Add: bnameLE1D2S04SX1C(659662) for lsw V2R11
                    Add: bnameLE1D2G48TX1C(659663) for lsw V2R11
                      " �"V7.39,
                     Add: fnameEA5821-GE(561638),	--Virtual frame H821MABC of the EA5821 GE(8/16/24) device.
                     Add: fnameEA5821-GE-POE(561639),	--Virtual Frame H821MABC of the EA5821 GE(24) POE device.
                      "+"V7.38,
                     Add: virent8090DEVCR5DNPU1TM71(675868),   -- for V800R010C00 CR5DNPU1TM71(SBOM),Network Processing Unit (NPU-1T)
                     Add: virent8090DEVCR5DNPU1TM70(675867),   -- for V800R010C00 CR5DNPU1TM70(SBOM),Network Processing Unit (NPU-1T)
                      "}"V7.37,
                     Add: bnameH902MPLAE(148619),        --  control board of EA5800.
                     Add: bnameH901MPSCE(148620),        --  control board of EA5800-X2.
                     Add: bnameH901GPSFE(148621),        --  16*GPON board of EA5800.
                     Add: bnameH901XGHDE(148622),        --  8*10G GPON board of EA5800.
                      "�"V7.36,
                     Add: virent8090DEVCR5DLPUFE07B(564915)    -- for V800R009C10 CR5DLPUFE07B(SBOM),Flexible Card Line Processing Unit B(LPUF-200-B)
                     
                     add wlan device
                     ADD: fnameAP8050DN(692295),           --WLAN new ap ENUM_
                     ADD: fnameAP8050DN-S(692296),         --WLAN new ap ENUM_
                     ADD: fnameAP8150DN(692297),           --WLAN new ap ENUM_7455
                     "|"V7.35,
                     Add: bnameH901GPLF(148615),         --  16*GPON board of MA5800
                     Add: bnameH901XGLD(148616),         --  8*10G GPON board of MA5800
                     Add: bnameH901XGLF(148617),         --  16*10G GPON board of MA5800
                     Add: bnameH901XELD(148618),         --  8*10G EPON board of MA5800
                     "�"V7.34,
                     Add: virent8090DEVCR9D00EDNB8P(562070),  --16-Port 100GBase-QSFP28 Integrated Line Process Unit(NE9000 LPUI-2T-PC)                 
                     Add: virent8090DEVCR9D00E8NC8P(562071),  --8-Port 100GBase-CFP2 Integrated Line Process Unit(LPUI-1T-PC)
                     Add: virent8090DEVCR9D00D8NC8P(562072),  --8-Port 100GBase-CFP DWDM Integrated Line Process Unit(LPUI-1T-PC)
                     Add: virent8090DEVCR9D00EPXF8P(562073),  --60-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit(LPUI-1T-PC)                 
                     Add: virent8090DEVCR5D00LKXF6P(562074),  --40-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit (NE5000E LPUI-400-PC)
                     Add: virent8090DEVCR5D00EDNB6P(562075),  --16-Port 100GBase-QSFP28 Integrated Line Process Unit (NE5000E LPUI-2T-PC)
                     
                     --for v8r9c10 NE9000 20170310
                     Add: subbname8090DEVCR9D00LFXF80(537455),    -- 24-Port 1000M/10GBase LAN/WAN-SFP+ Flexible Card
                     Add: subbname8090DEVCR9D00NBXF80(537456),    -- 12-Port 10G OTN/ETH-SFP+ Flexible Card
                     Add: subbname8090DEVCR9D00N6XF80(537457),    -- 6-Port 10G OTN/ETH-SFP+ Flexible Card
                     Add: subbname8090DEVCR9D00P8UF80(537458),    -- 8-Port OC-48/12/3 STM-16/4/1 POS-SFP Flexible Card
                     Add: subbname8090DEVCR9D00P4XX80(537459),    -- 4-Port OC-192/STM-64 POS-XFP Flexible Card
                     
                     --for v8r9c10 License 20170310
                     Add: subbname8090DEVCR57EFGFH3(537460),    -- 24-Port 1000Base-X-SFP Fixed Card E
                     Add: subbname8090DEVCR57L6XFI02(537461),   -- 6-Port 10GBase LAN/WAN-SFP+ Fixed Card E
                     Add: subbname8090DEVCR57LBXFE2(537462),    -- 12-Port 10GBase LAN/WAN-SFP+ Fixed Card E
                     Add: subbname8090DEVCR57E8NCB1(537463),    -- 8*100Gbps CFP2 Interface Board
                     ""V7.33,
                     Add: virentANGMHSTA0311(225592),       --ATN 910C-A,ANGM13HSTA,ATN 910C-A AC+DC system, with 4*10GE(o), 8*10GE/GE/FE(o), 16*GE/FE(o)                 
                     Add: virentANGMHSTB0311(225593),       --ATN 910C-B,ANGM13HSTB,ATN 910C-B AC+DC system,with 4*10GE(o), 8*10GE/GE/FE(o), 8*GE/FE(o), 8*GE/FE(e)
                     Add: virentANGMHSTD0311(225594),       --ATN 910C-D,ANGM13HSTD,ATN 910C-D AC+DC system,with 4*10GE(o),8*10GE/GE/FE(o),8*GE/FE(e),16E1
                     "%"V7.32,
                     --for V8R9C10 20170310
                     Add: bnameH801XP1A(155958),                         -- 1-port XG-PON/XGS-PON interface board
                     Add: subbnameH901TPUA(148601),                   -- TPM subboard of MA5800 H902MPLA
                     " �"V7.31,
                     --for V8R9C10 20170304
                     Add: virent8090DEVCR9DLPUFK080(562054),   -- NE9000 LPUF-400 CR9DLPUFK080	
                     "6"V7.30,
                     --for V8R9C10 20170228
                     Add: virent8090DEVCR5D00D4NT70(564824),  -- for V800R009C10 CR5D00D4NT70 ,4-Port 100GBase-CFP2 DWDM Integrated Line Processing Unit (LPUI-480) 1.3.6.1.4.1.2011.20021210.15.564824
                     Add: virent8090DEVCR5D0EMGFA7P(564910),   -- for V800R009C10 CR5D0EMGFA7P(SBOM),48-Port 100/1000Base-X-SFP Integrated Line Processing Unit PC(LPUI-51-PC))
                     Add: virent8090DEVCR5D00LBXF7P(564911),   -- for V800R009C10 CR5D00LBXF7P(SBOM),12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit PC(LPUI-120-PC)
                     Add: virent8090DEVCR5DL6XEFG7P(564912),   -- for V800R009C10 CR5DL6XEFG7P(SBOM),6-Port 10GBase LAN/WAN-SFP+ + 24-Port 100/1000Base-X-SFP Integrated Line Processing Unit PC(LPUI-120-PC)
                     Add: virent8090DEVCR5D00LFXF7P(564913),   -- for V800R009C10 CR5D00LFXF7P(SBOM),24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit PC(LPUI-240-PC)
                     Add: virent8090DEVCR5D00E8NC7P(564914)    -- for V800R009C10 CR5D00E8NC7P(SBOM),8-Port 100GBase-CFP2 Integrated Line Processing Unit PC(LPUI-1T-PC)
 
                     --for V8R10C00 20170228
					 Add: fname8090NE9000-8(562054),       --Quidway NE9000-8 FRAME
                     Add: virent8090DEVCR9D0MPUP180(564905),    -- V8R10C00 for CR9D0MPUP180(SBOM) NE9000-8 Main Processing Unit P1(MPUP1)
                     Add: virent8090DEVCR9D0SFUT481(564906),   -- V8R10C00 for CR9D0SFUT481(SBOM) NE9000-8 Switch Fabric Unit for Single Chassis(SFU4T-A)
                     " �"V7.29,
                     --for PTN7900 V1R8C10 20170220
                     Add:  bnamePTN7900TPA1EV4(229438), --TPA1EV4,4-port 50 Gigabit Ethernet Switching Processing Board
                     " �"V7.28,  
                     Add: bnameH802X2CS(148015),         --  10GE synchronized Ethernet interface board
                     Add: bnameH801GPND(148016),         --  8GPON board of MA5600T
                     "�"V7.27,
                     Add: fnameAR505Ke-L(667881),        -- AR505Ke-L FRAME
                     Add: fnameAR2504-D-H(667882),       -- AR2504-D-H FRAME
                     Add: fnameAR502EGRb-L(667883),      -- AR502EGRb-L FRAME
                     Add: fnameAR169CVW-4B4S(667884),    -- AR169CVW-4B4S FRAME
                     Add: fnameAR169CVW(667885),         -- AR169CVW FRAME
                     Add: fnameAR169EGW-L(667886),       -- AR169EGW-L FRAME
                     Add: fnameAR169EW(667887),          -- AR169EW FRAME
                     Add: fnameAR161EW(667888),          -- AR161EW FRAME
                     Add: fnameAR161EW-M1(667889),       -- AR161EW-M1 FRAME
                     Add: fnameAR509CGW-L(667890),       -- AR509CGW-L FRAME
                     Add: fnameAR509CG-Lt-7(667891),     -- AR509CG-Lt-7 FRAME
                     Add: fnameAR-Sc-Lc(667892),         -- AR-Sc-Lc FRAME
                     Add: fnameAR-Sc-Le(667893),         -- AR-Sc-Le FRAME
                     Add: fnameAR-Sc-La(667894),         -- AR-Sc-La FRAME
                     Add: fnameAR502ER(667895),          -- AR502ER FRAME
                     Add: fnameAR169FGVW-L-8S(667896),   -- AR169FGVW-L-8S FRAME
                     Add: fnameAR502ERb(667897),         -- AR502ERb FRAME
                     Add: fnameAAR502EGRc-Lc(667898),    -- AR502EGRc-Lc FRAME
                     
                     Add: bnameAR505Ke-L(667978),               -- AR505Ke-L Main Unit
                     Add: bnameAR2504-D-H(667979),              -- AR2504-D-H Main Unit
                     Add: bnameAR502EGRb-L(667980),             -- AR502EGRb-L Main Unit
                     Add: bnameAR169CVW-4B4S(667981),           -- AR169CVW-4B4S Main Unit
                     Add: bnameAR169CVW(667982),                -- AR169CVW Main Unit
                     Add: bnameAR169EGW-L(667983),              -- AR169EGW-L Main Unit
                     Add: bnameAR169EW(667984),                 -- AR169EW Main Unit
                     Add: bnameAR161EW(667985),                 -- AR161EW Main Unit
                     Add: bnameAR161EW-M1(667986),              -- AR161EW-M1 Main Unit
                     Add: bnameAR509CGW-L(667987),              -- AR509CGW-L Main Unit
                     Add: bnameAR509CG-Lt-7(667988),            -- AR509CG-Lt-7 Main Unit
                     Add: bnameAR-Sc-Lc(667989),                -- AR-Sc-Lc Main Unit
                     Add: bnameAR-Sc-Le(667990),                -- AR-Sc-Le Main Unit
                     Add: bnameAR-Sc-La(667991),                -- AR-Sc-La Main Unit
                     Add: bnameAR502ER(667992),                 -- AR502ER Main Unit
                     Add: bnameAR169FGVW-L-8S(667993),          -- AR169FGVW-L-8S Main Unit
                     Add: bname1LTE-Lt-7(667994),               -- 1LTE-Lt-7 Control Unit
                     Add: bnameAR502ERb(667995),                -- AR502ERb Main Control Unit
                     Add: bnameAR502EGRc-Lc(667996),            -- AR502EGRc-Lc Main Control Unit
		     
		     add wlan device
		     ADD: fnameAP4051DN(692290),           --WLAN new ap ENUM_
                     ADD: fnameAP4050DN(692291),           --WLAN new ap ENUM_
                     ADD: fnameAP4151DN(692292),           --WLAN new ap ENUM_
                     ADD: fnameAP4051DN-S(692293),         --WLAN new ap ENUM_
                     ADD: fnameAP4050DN-S(692294),         --WLAN new ap ENUM_
                     "�"V7.26,  
                     Add: fname8031S5720-28P-LI-AC-SEA(537192) to fname8031S5320-52P-PWR-LI-AC-SEA(537199) for LSW V2R10C00 support license for oversea
                     Add: bname8031S5720-28P-LI-AC-SEA(537376) to bname8031S5320-52P-PWR-LI-AC-SEA(537383) for LSW V2R10C00 support license for oversea
                     Add: bnameLE1D2S08SX2E(659661) for lsw V2R11
                     Add: fname8031S5320-12P-LI-BAT(537200),fname8031S5330-68C-SI(537201),fname8031S5730-68C-PWR-SI(537202) for lsw V2R11C10
                     Add: bname8031S5320-12P-LI-BAT(537384),bname8031S5330-68C-SI(537385),bname8031S5730-68C-PWR-SI(537386) for lsw V2R11C10
                     Add: subbnameFAN040CB(536783),              --FAN for 6720SI 
                     "N"V7.25,  
                     Add:  virentME60DEVME0D0L8NCA70(161606),   -- for V800R009C00 ME0D0L8NCA70(SBOM),8-Port 100GBase-CFP2 Multi Service Unit Integrated(MSUI-1T) 1.3.6.1.4.1.2011.20021210.15.161606
                     Add:  virentME60DEVME0D0L4NCB70(161607),   -- for V800R009C00 ME0D0LKXFB70(SBOM),4-Port 100GBase-CFP2 Broadband Service Unit Integrated(BSUI-400) 1.3.6.1.4.1.2011.20021210.15.161607
                     Add:  virentME60DEVME0D0L2NCB70(161608),   -- for V800R009C00 ME0DE2NLEX7B(SBOM),2-Port 100GBase-CFP2 Broadband Service Unit Integrated(BSUI-200) 1.3.6.1.4.1.2011.20021210.15.161608
                     Add:  virentME60DEVME0D0LFXFA70(161610),   -- for V800R009C00 ME0D0LEXFB70(SBOM),24-Port 10GBase LAN/WAN-SFP+ Multi Service Unit Integrated(MSUI-240) 1.3.6.1.4.1.2011.20021210.15.161610
                     Add:  virentME60DEVME0D0LMXFA70(161611),   -- for V800R009C00 ME0D0E2NCB70(SBOM),48-Port 10GBase LAN/WAN-SFP+ Multi Service Unit Integrated(MSUI-480) 1.3.6.1.4.1.2011.20021210.15.161611
                     Add:  virentME60DEVME0DVSUF8073(161612),    -- for V600R009C10 ME0DVSUF8073(SBOM),Flexible Card Versatile Service Unit 80(VSUF-80-J)
                     Add:  virent8090DEVCR5DVSUF8011(161613)     -- for V600R009C10 CR5DVSUF8011(SBOM),Flexible Card Versatile Service Unit 80(VSUF-80-J)
                     " �"V7.24,  
                     Add:  fnameMA5633H821MABCT(561571),              --MA5633  new frame  H821MABCT
                     Add:  bnameH822CCKRP(156065),             --  D3.0 32*10.
                     "�"V7.23,
                    for v2r11c00&C10 add 13 box device
                     Add:fname8031S6720-48Q-SI-48S-AC(537179) to fname8031S6320-52X-PWH-SI(537191),
                     Add:bname8031S6720-48Q-SI-48S-AC(537363) to bname8031S6320-52X-PWH-SI(537375),                    
                     modify fname8031S5730-56C-PWH-SI-AC(537175) to fname8031S6720-56C-PWH-SI-AC(537175)
                     modify fname8031S5730-56C-PWH-SI(537176) to fname8031S6720-56C-PWH-SI(537176)
                     modify fname8031S5730-56C-PWH-SI(537176) to fname8031S6320-56C-PWH-SI-AC(537177)
                     modify fname8031S5730-56C-PWH-SI(537176) to fname8031S6320-56C-PWH-SI(537178)

                     modify bname8031S5730-56C-PWH-SI-AC(537359) to bname8031S6720-56C-PWH-SI-AC(537359)
                     modify bname8031S5730-56C-PWH-SI(537360) to bname8031S6720-56C-PWH-SI(537360)
                     modify bname8031S5330-56C-PWH-SI-AC(537361) to bname8031S6320-56C-PWH-SI-AC(537361)
                     modify bname8031S5330-56C-PWH-SI(537362) to bname8031S6320-56C-PWH-SI(537362)
                     delete bnameLE1D2S08SX2E(659661)
                    
                    ""V7.22,
                    Add:subbnameME0D00SP8072(159814),    --Versatile Service Daught Card(SP80-T)
                    Add:virentME60DEVME0DVSUF8072(161605),   -- for V600R009C30 ME0DVSUF8072(SBOM),Flexible Card Versatile Service Unit 80(VSUF-80-T)
                    "F"V7.21,
                    Add:subbnamePTN990TPJ1EH1(229510),        --TPJ1EH1,1 Channel 100 GE Optical Interface Board
                    Add:subbnamePTN990TPL1EM4F(229511),        --Finished Board Unit,Optix PTN 930,TPL1EM4F0,4 Channels GE/FE Electrical Interface Board
                    Add:subbnamePTN990TPL1EM4T(229512),        --Finished Board Unit,Optix PTN 930,TPL1EM4T0,4 Channels GE/FE Electrical Interface Board
                    Add:subbnamePTN990TPL1ML1A(229513),        --Finished Board Unit,OptiX PTN 930,TPL1ML1A,16 Channels E1 Interface Board(75ohm)
                    Add:subbname8090DEVCR2D00EEGF11(561636), -- 20-Port 100/1000Base-X-CSFP Physical Interface Card(PIC)
                    Add:subbname8090DEVCX6D00EEGF10(561637), -- 20-Port 100/1000Base-X-CSFP Physical Interface Card(PIC)  
                    "	�"V7.20,
                     for v2r10c00 tr6 add 11 box device and 4 board
                     Add:fname8031S1720-28GWR-4P-E(537116),  to  fname8031S1720-10GW-PWR-2P-E(537126),
                     Add:bname8031S1720-28GWR-4P-E(537300),  to  bname8031S1720-10GW-PWR-2P-E(537310),                    
                     Add:bnameLE3D2C04HX2L(659654),bnameLE3D2X48SX2L(659655),bnameLE3D2G48SX1L(659659),bnameLE3D2G48TX1L(659660),
                     
                     for v2r11
                     Add:bnameLE1D2S08SX2E(659661),      --S9300 S9300E S9310X  8-Port 10GE SFP+ Interface and 24-Port GE SFP Interface Card(X2E,SFP+)  for V2R11
                     Add:bnameET1D2MPUDC00(700475),      --S12700,Main Processing Unit D(Optional clock)  
                     Add:subbnameET1D2VQ06000(700416),   --6-Port 40GE Cluster Switching System Service Unit (QSFP+) for 12700 V2R11
                     Add:subbnameET1D2VQ02000(700417),   --2-Port 40GE Cluster Switching System Service Unit (QSFP+) for 12700 and 9700   V2R11
             
                     Add:fname8031S5720-12X-LI-AC(537127), to fname8031S5330-56C-PWH-SI(537178),
                     Add:bname8031S5720-12X-LI-AC(537311), to bname8031S5330-56C-PWH-SI(537362),
                     Add:subbnameES5D21X02S02(536777),to subbnameES5D21Q02Q00(536781),
                     Add:subbnamePAC930D5612(536782),
                      
                     Add: virentME60DEVME0DVSUF8071(161603),   -- for V800R009C10 ME0DVSUF8071(SBOM),Flexible Card Versatile Service Unit 80(VSUF-80-M) 1.3.6.1.4.1.2011.20021210.15.161603
                     Add: virentME60DEVME0DVSUFD071(161604),   -- for V800R009C10 ME0DVSUFD071(SBOM),Flexible Card Versatile Service Unit 160(VSUF-160-M) 1.3.6.1.4.1.2011.20021210.15.161604
                     Add: virent8090DEVCR5D0SRUB571 (675918),  -- for V800R009C10 CR5D0SRUB571 ,Switch and Route Processing Unit B5(16G Memory) 1.3.6.1.4.1.2011.20021210.15.675918
                      
                     Add:  bnameCSM(156063),             --  48-channel Vectoring VDSL2 + POTS COMBO service board, supports super vectoring feature.
                     Add:  bnameH832PDMSA(156064),       --  DC Power board H832PDMSA of the MA5616.
                     Add:  subbnameH833XS1A(156061),     --  SD5118V2 XG-SPON subboard.
                     Add:  subbnameVPM(156062),          --  SUPER VECTOR Subboard VPM. 
                                           
                      "T"V7.19,
                     Add:  subbname8090DEVCR5D00E1NC77(561713),      -- 1-Port 100GBase-CFP2 Flexible Card A(P120-A)
                     Add:  subbname8090DEVCR5D00E1NC7A(561714),      -- 1-Port 100GBase-CFP2 Flexible CardA(P240-A)
                     Add:  subbname8090DEVME0D0E1NCB70(561715),      -- 1-Port 100GBase-CFP2 Flexible Card(BP100)
                     Add:  subbname8090DEVME0D0E1NCB71(561729),      -- 1-Port 100GBase-CFP2 Flexible Card(BP240)
                     Add:  subbname8090DEVCR57E1NCF2(561717),      -- 1-Port 100GBase-CFP2 Fixed Card
                     Add:  subbname8090DEVCX6D0E1NCA11(561718),      -- 1-Port 100GBase-CFP2 Flexible Card A(S102-A)
                     Add:  subbname8090DEVCR5CR5D00E1ND70(561719),   -- 1-Port 100GBase-QSFP28 Flexible Card A(P120-A)
                     Add:  subbname8090DEVCR5CR5D00E1ND73(561720),   -- 1-Port 100GBase-QSFP28 Flexible Card A(P240-A)
                     Add:  subbname8090DEVCR5ME0D0E1NDB70(561721),   -- 1-Port 100GBase-QSFP28 Flexible Card(BP100)
                     Add:  subbname8090DEVCR5ME0D0E1NDB71(561722),   -- 1-Port 100GBase-QSFP28 Flexible Card(BP240)
                     Add:  subbname8090DEVCR5CX6D0E1NDA10(561723),   -- 1-Port 100GBase-QSFP28 Flexible Card A(S102-A)
                     Add:  subbname8090DEVCR5D00E2NF70(561727),      -- 2-Port 100GBase-QSFP28 Flexible Card A(P480-A)
                     Add:  subbname8090DEVCR5D00MD8A70(561726),      -- 8-Channel CWDM Multiplexing & Demultiplexing (1471/1491/1511/1531/1551/1571/1591/1611nm) Flexible Card(P50)		
                     Add:  subbname8090DEVCR5D00E2NB60(561728),   -- 2-Port 100GBase-QSFP28 Flexible Card(CP400,Occupy 1 sub-slot)  
                     Add:  subbname8090DEVCR5D3DMR4M01(561724),      -- 4-Channel CWDM Optical Add/Drop Multiplexing (1471/1491/1511/1531nm) Physical Interface Card(PIC) 
                     Add:  subbname8090DEVCR5D3DMR4M02(561725),      -- 4-Channel CWDM Optical Add/Drop Multiplexing (1551/1571/1591/1611nm) Physical Interface Card(PIC)
                     Add:  subbname8090DEVCR5D00EEGF71(561635),   -- 20-Port 100/1000Base-X-CSFP Physical Interface Card(PIC) 
                     Add:  subbname8090DEVCR5D00N6GF60(561625),   -- 6-Port 10G OTN/ETH-SFP+ Flexible Card(CP400,Occupy 1 sub-slot) 
                     Add:  subbname8090DEVCR5D00NBGF60(561626),   -- 12-Port 10G OTN/ETH-SFP+ Flexible Card(CP400,Occupy 1 sub-slot) 
                     Add:  subbname8090DEVCR5D00E1NC79(561594), -- 1-Port 100GBase LAN/WAN-CFP2 Physical Interface Card(PIC)
                     Add:  subbname8090DEVCR5D00LAXF71(561595), -- 10-Port 10GBase LAN/WAN-SFP+ Physical Interface Card(PIC)
                     Add:  subbname8090DEVCR58E8NBA(561622), -- 8*100GBase QSFP28 Card
                     Add:  subbname8090DEVCR58D8NCA(561624), -- 8-Port 100GBase-CFP DWDM Card
                      ""V7.14,
                     Modify: CR57LEXFE changed to CR5D0LEXFE71
                     Modify: CR57E2NCE changed to CR5D0E2NCE71
                     Modify: CR57LEXFE changed to ME0M0LEXFB71
                     Modify: CR57E2NCE changed to ME0M0E2NCB71
                     Modify: CX68EAGFEA changed to CR5D0EAGFE70
                     Modify: CX68EAGFEA changed to CR2D0EAGFE10
                     Modify: CX68L2XFEA changed to CR5D0L2XFE71
                     Modify: CX68L2XFEA changed to CR2D0EAGFE10
                     " �"V7.17,
                     Add:  fnameMA5626BH821Mabc(561634),     -- Virtual Frame H821MABC of the MA5626B device.
                     Add:  bnameH822EPUBM(156060),           -- Master board of MA5626B(SD5103) Box type device.
                     "+"V7.16,
                     Add:  fnamePTN930(229403),                          --PTN930  chassis
                     Add:  fnamePTN905G(229404),                       --PTN905G  chassis
                     Add:  fnamePTN905E(229405),                       --PTN905E  chassis
                     Add:  fnamePTN905D(229406),                       --PTN905D  chassis
                     Add:  fnamePTN905F(229407),                       --PTN905F  chassis]
                     Add:  bnameTPLD00CXP000(229431),           --TPL1CXP, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPMD00CXPN00(229432),         --TPM1CXPN, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPMD00CXPL00(229433),          --TPM1CXPL, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPMD00CXPB00(229434),         --TPM1CXPB, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPMD00CXPM00(229435),         --TPM1CXPM, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPMD000PIU00(229436),           -- DC Power Module
                     Add:  bnameTPMD00APIU00(229437),          -- AC Power Module
                    " �"V7.15,
                     Add:subbname8090DEVCR56E4NBA1(561623), -- 4-Port 100GBase QSFP28 Flexible Card(CP1T,Occupy 1 sub-slot)
                     "*"V7.14,
                     Modify: bnameLE2D2X48SEC0(659573), LE2D2X48SED0 changed to LE2D2X48SEC0,the LE2D2X48SED0 does not support,and the 659573 was distribute to LE2D2X48SEC0 Actually 
                     Delete: bnameLE2D2X48SEC0(659647), LE2D2X48SEC0 is a old board,already has id,the id is 659573,so this id Abandoned  
                     Modify: fname8031S5720-10T-PWR-LI(537011) to fname8031Huawei-S5700-8P-G(537011)
                     Modify: bname8031S5720-10T-PWR-LI(537196) to bname8031Huawei-S5700-8P-G(537196)
                     "�"V7.13,
                     Modify: virent8090DEVCR5DLPUF5071(675899),      --V8R9C00 for SBOM, CR5DLPUF5071, Flexible Card Line Processing Unit(LPUF-50,four sub-slots) to virent8090DEVCR5DLPUF5071(675899),      --V8R9C00 for SBOM, CR5DLPUF5071, Flexible Card Line Processing Unit(LPUF-50,four sub-slots,4G Memory)
                     Modify: virent8090DEVCR5DLPUF507M(675900),      --V8R9C00 for SBOM, CR5DLPUF507M, Flexible Card Line Processing Unit L(LPUF-50-L,four sub-slots) to virent8090DEVCR5DLPUF507M(675900),      --V8R9C00 for SBOM, CR5DLPUF507M, Flexible Card Line Processing Unit L(LPUF-50-L,four sub-slots,4G Memory)
                     Modify: virent8090DEVCX6DISUF5011(675901),      --V8R9C00 for SBOM, CX6DISUF5011, Flexible Card Integrated Service Unit(ISUF-50,four sub-slots) to virent8090DEVCX6DISUF5011(675901),      --V8R9C00 for SBOM, CX6DISUF5011, Flexible Card Integrated Service Unit(ISUF-50,four sub-slots,4G Memory)
                     Modify: virent600DEVCX6B0BKP0373(564863),    --V8R9C00 CX600-M2H CX6B0BKP0373(SBOM), 480Gbps MNPUI NO POWER to virent600DEVCX6B0BKP0375(564863),    --V8R9C00 CX600-M2H CX6B0BKP0375(SBOM), 480Gbps MNPUI NO POWER
                     Modify: virent600DEVCR5B0BKP0377(564860),    --V8R9C00 NE40E-M2H CR5B0BKP0377(SBOM), 480Gbps MNPUI NO POWER to virent600DEVCR5B0BKP0377(564860),    --V8R9C00 NE40E-M2H CR5B0BKP0377(SBOM), 480Gbps MNPUI NO POWER
                     "	F"V7.12,
                     Add: virentME60DEVME0DBSUFA071(161600),   -- for ME0DBSUFA071(SBOM),Flexible Card Broadband Service Unit(BSUF-120,2 sub-slots)
                     Add: virentME60DEVME0DBSUFF071(161599),   -- for ME0DBSUFF071(SBOM),Flexible Card Broadband Service Unit(BSUF-200,2 sub-slots)
                     Add: virentME60DEVME0DBSUFK070(161601),   -- for ME0DBSUFK070(SBOM),Flexible Card Broadband Service Unit(BSUF-400,2 sub-slots)
                     Add: virent8090DEVCR5DLPUFK070(161602),   -- for CR5DLPUFK070(SBOM),Flexible Card Line Processing Unit E(LPUF-400-E)

                     Add: fname8090NE40E-X16A(561641),        --Quidway NE40E-X16A FRAME
                     Add: fname8090NE40E-X8A(561642),        --Quidway NE40E-X8A FRAME
                     Add: fnameME60-X16A(561643),        --Quidway ME60-X16A FRAME
                     Add: fnameME60-X8A(561644),        --Quidway ME60-X8A FRAME
                     Add: fname8090CX600-X16A(561645),        --Quidway CX600-X16A FRAME
                     Add: fname8090CX600-X8A(561646),        --Quidway CX600-X8A FRAME
                     Add: fnamePTN6900-16A(561647),        --Quidway PTN6900-16A FRAME
                     Add: fnamePTN6900-8A(561648),        --Quidway PTN6900-8A FRAME
                     Add: fname8090CX600-X16A-DO(561649),        --Quidway CX600-X16A-DO FRAME
                     Add: fname8090CX600-X8A-DO(561650),        --Quidway CX600-X8A-DO FRAME
												
                     Modify: fname8090NE40E-X16A(561175) to fname8090NE40E-X16A-AC(561175)
                     Modify: fname8090NE40E-X8A(561177) to fname8090NE40E-X8A-AC(561177)
                     Modify: fnameME60X16A(159756) to fnameME60X16A-AC(159756)
                     Modify: fnameME60X8A(159754) to fnameME60X8A-AC(159754)
                     Modify: fname8090CX600-X16A(536865) to fname8090CX600-X16A-AC(536865)
                     Modify: fname8090CX600-X8A(536864) to fname8090CX600-X8A-AC(536864)
                     Modify: fnamePTN6900-16A(229393) to fnamePTN6900-16A-AC(229393)
                     Modify: fnamePTN6900-8A(229391) to fnamePTN6900-8A-AC(229391)
                     Modify: fname8090CX600-X16ADO(536993) to fname8090CX600-X16ADO-AC(536993)
                     Modify: fname8090CX600-X8ADO(536995) to fname8090CX600-X8ADO-AC(536995)
                     "`"V7.11,
                     Add: fnameAR129CVW(667876),         -- AR129CVW FRAME
                     Add: fnameAR1220-8GE(667877),       -- AR1220-8GE FRAME
                     Add: fnameAR2204-24GE(667878),      -- AR2204-24GE FRAME
                     Add: fnameAR2204-48GE-P(667879),    -- AR2204-48GE-P FRAME
                     Add: fnameAR505Kc-L-RM(667880),     -- AR505Kc-L-RM FRAME

                     Add: bnameAR129CVW(667973),                -- AR129CVW Main Unit
                     Add: bnameAR1220-8GE(667974),              -- AR1220-8GE Main Unit
                     Add: bnameAR2204-24GE(667975),             -- AR2204-24GE Main Unit
                     Add: bnameAR2204-48GE-P(667976),           -- AR2204-48GE-P Main Unit
                     Add: bnameAR505Kc-L-RM(667977),            -- AR505Kc-L-RM Main Unit
                     "Y"V7.10,   
                add: fname8090NE40E-X16B(562069),       --Quidway NE40E-X16B FRAME
                add: virent8090DEVCR5D0MPUB580(562065),   -- Main Processing Unit B5,CR57MPUB5
                add: virent8090DEVCR5DSFUIT16E(562066),   -- 1Tbps Switch Fabric Unit B(SFUI-1T-E),CR57SUF1TE
                add: virent8090DEVCR5DE2NLEX80(562067),   -- 2-Port 100GBase-CFP2 + 20-Port 10GBase-SFP+ Integrated Line Process Unit (LPUI-400), CR57LPUI400
                add: virent8090DEVCR5D00E8NC80(562068),   -- 8-Port 100GBase-CFP4- Integrated Line Process Unit(LPUI-1T),CR57LPU1TF
           "H"V7.09,   
           ADD: bnameCEL24LQFD(688231),                  -- Manufactured Board,CloudEngine 12800,CE-L24LQ-FD,24-Port-40GE Interface Card(FD,QSFP+)
           ADD: bnameCEL12CQFD(688232),                  -- Manufactured Board,CloudEngine 12800,CE-L12CQ-FD,12-Port-100GE Interface Card(FD,QSFP28)
           ADD: bnameCEL48XSFD(688233),                  -- Manufactured Board,CloudEngine 12800,CE-L48XS-FD,48-Port-10GE Interface Card(FD,SFP+)
           ADD: bnameCESFUAS(688234),                    -- CloudEngine 12800S,CE-SFUA-S,CE12800S Switch Fabric Unit A
           " �"V7.08,   
           ADD: bnamePTN990TPJD002CXP00(229430),           --TPJD002CXP00,System Control,Cross-connect and Multi-protocol Process Unit 
           "�"V7.07,   
           Add: fname8031S5720-28X-PWH-LI-AC(537114),        --LSW V2R11C00 PI1 S5720-28X-PWH-LI-AC
           Add: fname8031S5320-28X-PWH-LI-AC(537115),        --LSW V2R11C00 PI1 S5320-28X-PWH-LI-AC      
                
           Add: bname8031S5720-28X-PWH-LI-AC(537298),        --LSW V2R11C00 PI1 S5720-28X-PWH-LI-AC       
           Add: bname8031S5320-28X-PWH-LI-AC(537299),        --LSW V2R11C00 PI1 S5320-28X-PWH-LI-AC  
           "	"V7.06,
                     Add: fnameAR509EG-U-A(667861),      -- AR509EG-U-A FRAME
                     Add: fnameAR169G-Lo(667862),        -- AR169G-Lo FRAME
                     Add: fnameAR161FG-Lc(667863),       -- AR161FG-Lc FRAME
                     Add: fnameAR161FGW-Lc(667864),      -- AR161FGW-Lc FRAME
                     Add: fnameAR161G-Lc(667865),        -- AR161G-Lc FRAME
                     Add: fnameAR101GW-Lc-S(667866),     -- AR101GW-Lc-S FRAME
                     Add: fnameAR201V(667867),           -- AR201V FRAME
                     Add: fnameAR503EDGW-Lc3(667868),    -- AR503EDGW-Lc3 FRAME
                     Add: fnameAR109(667869),            -- AR109 FRAME
                     Add: fnameAR109W(667870),           -- AR109W FRAME
                     Add: fnameAR109GW-L(667871),        -- AR109GW-L FRAME
                     Add: fnameAR502CG-L(667872),        -- AR502CG-L FRAME
                     Add: fnameAR2220E-S(667873),        -- AR2220E-S FRAME
                     Add: fnameAR2240C-S(667874),        -- AR2240C-S FRAME
                     Add: fnameAR3260E-S(667875),        -- AR3260E-S FRAME
                     
                     Add: bnameAR509EG-U-A(667960),             -- AR509EG-U-A Main Unit
                     Add: bnameAR169G-Lo(667961),               -- AR169G-Lo Main Unit
                     Add: bnameAR161FG-Lc(667962),              -- AR161FG-Lc Main Unit
                     Add: bnameAR161FGW-Lc(667963),             -- AR161FGW-Lc Main Unit
                     Add: bnameAR161G-Lc(667964),               -- AR161G-Lc Main Unit
                     Add: bnameAR101GW-Lc-S(667965),            -- AR101GW-Lc-S Main Unit
                     Add: bnameAR201V(667966),                  -- AR201V Main Unit
                     Add: bnameAR503EDGW-Lc3(667967),           -- AR503EDGW-Lc3 Main Unit
                     Add: bnameAR109(667968),                   -- AR109 Main Unit
                     Add: bnameAR109W(667969),                  -- AR109W Main Unit
                     Add: bnameAR109GW-L(667970),               -- AR109GW-L Main Unit
                     Add: bnameAR502CG-L(667971),               -- AR502CG-L Main Unit
                     Add: bnameAR2220E-S(667972),               -- AR2220E-S Main Unit
                     " x"V7.05,
                     Add: bnameH901PIMA(148614),         --  DC Power board of MA5800-X7.
                     " $"V7.04, add AP5030DN-C for wlan ap "
�"V7.03,
					Add: fnameNIP6860-DC (16715816),       --NIP6860 DC Basic Configuration(include X8 DC Chassis,2*SRU,1*SFU) (0x00ff1028)
					Add: fnameNIP6800-X8-CHAS-DC (16715817),       --NIP6800 Integrated Chassis Components,14U(Including 4 DC Power)  (0x00ff1029)
					Add: bnameSPU-X3-20-B-E8KE(16744461),     -- 20G X3 Firewall Service Processing Unit B(oversea)(0x00ff800d)
					Add: bnameSPUA-H(16744457),     -- X8&X16 Firewall Service Processing Unit(0x00ff8009)
					Add: bnameSPUA-M(16744458),     -- X3 Firewall Service Processing Unit(0x00ff800a)
					Add: bnameSPUA-20-O-H (16744459),     -- 20G X8&X16 Firewall Service Processing Unit (oversea)(0x00ff800b)
					Add: bnameSPUA-20-O-M(16744460),     -- 20G X3 Firewall Service Processing Unit (oversea)(0x00ff800c)
					Add: bnameSPUB-NAT-X8X16-E8KE(16744454),     -- X8&X16 NAT Service Processing Unit B(0x00ff8006)
					Add: bnamebnameNIP-SPU-B(16744462),     -- NIP6800 Service Processing Unit(Base Board)(0x00ff800e)
					Add: bnameNIP-LPUF-120 (16744463),     -- NIP6800 Flexible Card Line Processing Unit(120G,2 sub-slots)(0x00ff800f)
					Add: bnameNIP-LPUF-240 (16744464),     -- NIP6800 Flexible Card Line Processing Unit(240G,2 sub-slots)(0x00ff8010)
					Add: bnameNIP6800-X8-SRUA-200 (16744465),     -- NIP6800 X8 200Gbps Switch and Route Processing Unit A(0x00ff8011)
					Add: subbnameSPCA-H&M(16728078),    --Firewall Service Processing Card A (0x00ff400e)
					Add: subbnameSPCA-20-O-H&M(16728079),    --20 Expansion Card (oversea) (0x00ff400f)
					Add: subbnameFW-20X1G-RJ45(16728080),    --20-Port 100/1000Base-RJ45 Flexible Card (0x00ff4010)
					Add: subbnameFW-3X40G-QSFP+(16728081),    --3-Port 40GBase-QSFP+ Flexible Card (P240-A)(0x00ff4011)
					Add: subbnameSPCB-NAT-E8KE(16728068),    --X8&X16 NAT Service Processing Card B(0x00ff4004)
					Add: subbnameNIP-SAC-A(16728082),    --NIP6800 Service Processing Acceleration card-A (P240-A)(0x00ff4012)
					Add: subbnameNIP-12X10G-SFP+ (16728083),    --NIP6800 12-Port 10G Base LAN/WAN-SFP+ Flexible Card A((1/2wide,Occupy one sub-slots) (P240-A)(0x00ff4013)
					Add: subbnameNIP-6X10G-SFP+ (16728084),    --NIP6800 6-Port 10G Base LAN/WAN-SFP+ Flexible Card A(1/2wide,Occupy one sub-slots) (P240-A)(0x00ff4014)
					Add: subbnameNIP-3X40GE-QSFP+(16728085),    --NIP6800 3-Port 40GBase-QSFP+ Flexible Card(0x00ff4015)
					Add: subbnameNIP-1X100G-CFP(16728086),    --NIP6800 1-Port 100GBase-CFP Flexible Card A(0x00ff4016)
					Add: subbnameNIP-24XGE-SFP (16728087),    --NIP6800 24-Port 100/1000Base-X-SFP Flexible Card(1/2wide,Occupy one sub-slots)(0x00ff4017)
					Add: subbnameNIP-IPS-B (16728088),    --NIP6800 IPS Service Processing Card(0x00ff4018)
					"�"V7.02,
                     Add: fnameMA5898H831Mabl-DC(561633),     -- Virtual Frame H831MABL of the MA5898 DC device.
                     Add: fnameMA5821A-24GE(561578),          -- Virtual Frame H821MABS of the MA5821A-24GE device.
                     Add: bnameH825CCIA(156058),              -- Master board of MA5821A device.
                     Add: bnameH831PAIS(156059),              -- AC Power board of MA5821A device.
                     " �"V7.01,   
           Add: subnameLND1EX8F(708623),                       -- 1 Channel 10GE (SFP+),8 Channels GE/FE Optical Interface Board
           "�"V6.98,     
            Add: subbname8090DEVCR57L6XFI01(561476), --03031YYQ,  6-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P120-H)
           Add: subbname8090DEVME03L6XFI0(561477), --03031YYV,  6-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP120-H)
           Add: subbname8090DEVCR57LBXFH1(561478), --03031YYS,  12-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P240-H)
           Add: subbname8090DEVME03LBXFH0(561479), --03031YYX,  12-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP200-H)
           Add: subbname8090DEVCR57E1NCF0(561480), --03032GKY,  1-Port 100GBase-CFP2 Flexible Card A(P120-A)
           Add: subbname8090DEVCR57E1NCF1(561481), --03032GLA,  1-Port 100GBase-CFP2 Flexible CardA (P240-A)
           Add: subbname8090DEVME03E1NCF0(561482), --03032GLB,  1-Port 100GBase-CFP2 Flexible Card(BP100)
           Add: subbname8090DEVME03E1NCF1(561483), --03032GLC,  1-Port 100GBase-CFP2 Flexible Card(BP240)
           Add: subbname8090DEVCR57E1NCF2(561518), --03032GLD,  1-Port 100GBase-CFP2 Fixed Card
           Add: subbname8090DEVTNR2EF1(561484),     --03032GLE,  1 Port 100 Gigabit Ethernet Processing Flexible Card (Supporting 1588v2)
           Add: subbname8090DEVCX62E1NCF0(561485), --03032GLF,  1-Port 100GBase-CFP2 Flexible Card A(S102-A)
           Add: subbname8090DEVCR57E1NBA0(561494), --CR5D00E1ND70, 1-Port 100GBase-QSFP28 Flexible Card A(P120-A)
           Add: subbname8090DEVCR57E1NBA1(561495), --CR5D00E1ND73, 1-Port 100GBase-QSFP28 Flexible Card A(P240-A)
           Add: subbname8090DEVCX62E1NBA0(561496), --CX6D0E1NDA10, 1-Port 100GBase-QSFP28 Flexible Card A(S102-A)
           Add: subbname8090DEVME03E1NBA0(561497), --ME0D0E1NDB70, 1-Port 100GBase-QSFP28 Flexible Card(BP100)
           Add: subbname8090DEVME03E1NBA1(561498), --ME0D0E1NDB71, 1-Port 100GBase-QSFP28 Flexible Card(BP240)
           Add: subbname8090DEVCR5D0LEXFE71(561486), --20-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P480-H)
           Add: subbname8090DEVCR5D0E2NCE71(561487), --2-Port 100GBase-CFP2 Flexible Card E(P480-H)
           Add: subbname8090DEVME0M0LEXFB71(561488), --20-Port 10GBase LAN/WAN-SFP+ Flexible HCardE(BP480-H)
           Add: subbname8090DEVME0M0E2NCB71(561489), --2-Port 100GBase-CFP Flexible Card H(BP480-H)
           Add: subbname8090DEVCR5D0EAGFE70(561490), --10-Port 100/1000Base-X-SFP Physical Interface Card E(PIC-E)
           Add: subbname8090DEVCR2D0EAGFE10(561491), --10-Port 100/1000Base-X-SFP Physical Interface Card E(PIC-E)
           Add: subbname8090DEVCR5D0L2XFE71(561492), --2-Port 10GBase LAN/WAN-SFP+ Physical Interface Card E(PIC-E)
           Add: subbname8090DEVCR2D0EAGFE10(561493), --2-Port 10GBase LAN/WAN-SFP+ Physical Interface Card E(PIC-E)
           Add: virent8090DEVCR57E1NCF20(675902), --03057445,  1-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-120)
           Add: virent8090DEVCR57E1NCF21(675903), --03057446,  1-Port 100GBase-CFP2 Integrated Line Processing Unit B(LPUI-120-B)
           Add: virent8090DEVCR57E2NCF22(675904), --03057447,  2-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-240)
           Add: virent8090DEVCR57E2NLBX24(675905), --03057448,  1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-240)
           Add: virent8090DEVCR57E2NCF23(675906), --03057449,  2-Port 100GBase LAN-CFP2 Integrated Line Processing Unit B(LPUI-240-B)
           Add: virent8090DEVCR57E2NLBX25(675907), --03057450,  1-Port 100GBase-CFP2 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-240-B)
           Add: virent8090DEVCR57E1NBA20(675912), --CR5D00E1ND71, 1-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-120)
           Add: virent8090DEVCR57E1NBA21(675913), --CR5D00E1ND72, 1-Port 100GBase-QSFP28 Integrated Line Processing Unit B(LPUI-120-B)
           Add: virent8090DEVCR57E2NBA20(675914), --CR5D00E2ND70, 2-Port 100GBase-QSFP28 Integrated Line Processing Unit (LPUI-240)
           Add: virent8090DEVCR57E2NBA21(675915), --CR5D00E2ND71, 2-Port 100GBase LAN-QSFP28 Integrated Line Processing Unit B(LPUI-240-B)
           Add: virent8090DEVCR57E1NLBX25(675916), --CR5DE1NLBX73, 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit B(LPUI-240-B)
           Add: virent8090DEVCR57E1NLBX24(675917), --CR5DE1NLBX72, 1-Port 100GBase-QSFP28 + 12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-240)
           Add: virent8090DEVCR57E2NLAX20(675908), --03057451,  1-Port 100GBase-CFP2 + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-200)
           Add: virent8090DEVCR57E2NLAX21(675909), --03057452,  1-Port 100GBase-CFP2 + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-200-L)
           Add: virent8090DEVCR57E2NCF24(675910), --03057453,  2-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-200)
           Add: virent8090DEVCR57E2NCF25(675911), --03057454,  2-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-200-L)		 
                   "}"V6.96,     
                     Modify: virentANGMHSTA0100(225571) to virentANGMHSTA0111(225571)
                     Modify: virentANGMHSTB0100(225572) to virentANGMHSTB0111(225572)
                     Modify: virentANGMHSTA0200(225573) to virentANGMHSTA0211(225573)    
                     Modify: virentANGMHSTB0200(225574) to virentANGMHSTB0211(225574)
                     Modify: virentNECMHSTA0200(704538) to virentNECMHSTA0211(704538)
                     Modify: virentNECMHSTB0200(704539) to virentNECMHSTB0211(704539)
                     Modify: bnameANGD000PIU00(229008) to bnameES5M0PSD1700(229008)
                   "
�"V6.95,
                     Add: virent8090DEVCR5DLPUF5071(675899),      --V8R9C00 for SBOM, CR5DLPUF5071, Flexible Card Line Processing Unit(LPUF-50,four sub-slots)
                     Add: virent8090DEVCR5DLPUF507M(675900),      --V8R9C00 for SBOM, CR5DLPUF507M, Flexible Card Line Processing Unit L(LPUF-50-L,four sub-slots)
                     Add: virent8090DEVCX6DISUF5011(675901),       --V8R9C00 for SBOM, CX6DISUF5011, Flexible Card Integrated Service Unit(ISUF-50,four sub-slots) 

                     Add: virentME60DEVME0D0E4NCM70(161595),   -- for V800R009C10 ME0D0E4NCM70(SBOM),4-Port 100GBase-CFP2 Multi Service Unit Integrated(MSUI-400)
                     Add: virentME60DEVME0D0LKXFB70(161596),   -- for V800R009C10 ME0D0LKXFB70(SBOM),40-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated(BSUI-400)
                     Add: virentME60DEVME0DE2NLEX7B(161597),   -- for V800R009C10 ME0DE2NLEX7B(SBOM),2-Port 100GBase-CFP2+20-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated(BSUI-400)
                     Add: virentME60DEVME0D0LEXFB71(161583),   -- for V800R009C10 ME0D0LEXFB71(SBOM),20-Port 10GBase LAN/WAN-SFP+ Multi Service Unit Integrated(MSUI-200)
                     Add: virentME60DEVME0D0LEXFB70(161584),   -- for V800R009C10 ME0D0LEXFB70(SBOM),20-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated(BSUI-200)
                     Add: virentME60DEVME0D0E2NCB70(161585),   -- for V800R009C10 ME0D0E2NCB70(SBOM),2-Port 100GBase-CFP Multi Service Unit Integrated(MSUI-200)
                                                
                     Add: fname8090NE40E-X16A-HVDC(561181),        --Quidway NE40E-X16A FRAME,HVDC
                     Add: fname8090NE40E-X8A-HVDC(561182),        --Quidway NE40E-X8A FRAME,HVDC
                     Add: fnameME60-X16A-HVDC(159769),        --Quidway ME60-X16A FRAME,HVDC
                     Add: fnameME60-X8A-HVDC(159770),        --Quidway ME60-X8A FRAME,HVDC
                     Add: fname8090CX600-X16A-HVDC(561183),        --Quidway CX600-X16A FRAME,HVDC
                     Add: fname8090CX600-X8A-HVDC(561184),        --Quidway CX600-X8A FRAME,HVDC
                     Add: fnamePTN6900-16A-HVDC(561185),        --Quidway PTN6900-16A FRAME,HVDC
                     Add: fnamePTN6900-8A-HVDC(561186),        --Quidway PTN6900-8A FRAME,HVDC
                     Add: fname8090CX600-X16A-DO-HVDC(561187),        --Quidway CX600-X16A-DO FRAME,HVDC
                     Add: fname8090CX600-X8A-DO-HVDC(561188),        --Quidway CX600-X8A-DO FRAME,HVDC
                     
                     Modify: virentME60DEVMEODBSUFMO70(161593) to virentME60DEVME0DBSUFM070(161593)
                     Modify: virentME60DEVMEODMSUFMO70(161594) to virentME60DEVME0DMSUFM070(161594)              
                    ","V6.93,
                     Add: fname8031S5720-16X-PWH-LI-AC(537113),        --S5720-16X-PWH-LI-AC        Metro Service Platform for V2R10C00
                     Add: bname8031S5720-16X-PWH-LI-AC(537297),         --S5720-16X-PWH-LI-AC      Metro Service Platform for V2R10C00
                    "9"V6.93,
                     --for PTN7900 V1R8C10 20160805
                     Add:  bnamePTN7900TPA1EHD1(229426), --TPA1EHD1,1-port 200 Gigabit Ethernet Switching Processing Board
                     Add:  bnamePTN7900TPA2EH2(229427), --TPA2EH2,2-port 100 Gigabit Ethernet Switching Processing Board
                     Add:  bnamePTN7900TPA3EH1(229428), --TPA3EH1,1-port 100 Gigabit Ethernet Switching Processing Board
                     Add:  bnamePTN7900TPA2EX8S(229429), --TPA2EX8S,8-port 10 Gigabit Ethernet Switching Processing Board
                     "v"V6.92,
                     Add: bnameH901CGID(148613),         --  8*GE and 10GE combo board of MA5800
             Add: bnameH901MPLC(148507),         --  control board of MA5800
                     Add: bnameH901MPLD(148508),         --  control board of MA5800
                     Add: bnameH902MPLC(148509),         --  control board of MA5800
                     "�"V6.91,
                     Add: fnameCE686048S18CQEI(688158),        -- CloudEngine CE6860-48S18CQ-EI Switch (48-Port 25GE SFP28 Optical,18-Port 100GE QSFP28)
                     Add: fnameCE686048S8CQEI(688159),         -- CloudEngine CE6860-48S8CQ-EI Switch (48-Port 25GE SFP28 Optical,8-Port 100GE QSFP28)
                     Add: fnameCE687048S6CQEI(688160),         -- CloudEngine CE6870-48S6CQ-EI Switch (48-Port SFP+ Optical,6-Port 100GE QSFP28)
                     Add: fnameCE687024S6CQEI(688161),         -- CloudEngine CE6870-24S6CQ-EI Switch (24-Port SFP+ Optical,6-Port 100GE QSFP28)
                     Add: fnameCE785532QEI(688162),            -- CloudEngine CE7855-32Q-EI Switch(32-Port 40GE QSFP+)
                     Add: bnameCEL36CQFD(688217),              -- Manufactured Board,CloudEngine 12800,CE-L36CQ-FD,36-Port-100GE Interface Card(FD,QSFP28)
                     Add: bnameCEL36LQFD(688218),              -- Manufactured Board,CloudEngine 12800,CE-L36LQ-FD,36-Port-40GE Interface Card(FD,QSFP+)
                     Add: bnameCEL48XSFDA(688219),             -- Manufactured Board,CE-L48XS-FDA,48-Port-10GE,2-Port-40GE,2-Port-100GE Interface Card(FDA,SFP+,QSFP+,QSFP28)
                     Add: bnameCESFU08F(688220),               -- Manufactured Board,CloudEngine 12800,CE-SFU08F,CE12808 Switch Fabric Unit F,1*1
                     Add: bnameCESFU16F(688221),               -- Manufactured Board,CloudEngine 12800,CE-SFU16F,CE12816 Switch Fabric Unit F,1*1
                     Add: bnameCESFUFS(688222),                -- Manufactured Board,CloudEngine 12800S,CE01SFUFS,CE12800S Switch Fabric Unit F,1*1
                     Add: bnameCESFU16G(688223),               -- Manufactured Board,CloudEngine 12800,CE-SFU16G,CE12816 Switch Fabric Unit G,1*1
                     Add: bnameCESFU12G(688224),               -- Manufactured Board,CloudEngine 12800,CE-SFU12G,CE12812 Switch Fabric Unit G,1*1
                     Add: bnameCEL04CFEC(688225),              -- Manufactured Board,CloudEngine 12800,CE-L04CF-EC,4-Port-100GE Interface Card(EC,CFP)
                     Add: bnameCE686048S18CQEI(688226),        -- Manufactured Board,CloudEngine 6800,CEM48S18CQP01,48-Port 25GE SFP28 Optical,18-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add: bnameCE686048S8CQEI(688227),         -- Manufactured Board,CloudEngine 6800,CEM48S8CQP01,48-Port 25GE SFP28 Optical,8-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add: bnameCE687048S6CQEI(688228),         -- Manufactured Board,CloudEngine 6800,CEM48S6CQP01,48-Port SFP+ Optical,6-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add: bnameCE687024S6CQEI(688229),         -- Manufactured Board,CloudEngine 6800,CEM24S6CQP01,24-Port SFP+ Optical,6-Port 100GE QSFP28 Optical Switch Control Unit,1*1
                     Add: bnameCE785532QEI(688230),            -- Manufactured Board,CloudEngine 7800,CEM32QP02,32-Port 40GE QSFP+ Optical Switch Control Unit,1*1
                     Add: portnameDCDE01CFP10G(688140),        -- The port with 10G type split from 100G CFP type
                     Add: portnameDCDE01CFP40G(688141),        -- The port with 40G type split from 100G CFP type
                     Add: portnameDCDE01CFP210G(688142),       -- The port with 10G type split from 100G CFP2 type
                     Add: portnameDCDE01CFP240G(688143),       -- The port with 40G type split from 100G CFP2 type
                     Add: portnameDCDE01CXP10G(688144),        -- The port with 10G type split from 100G CXP type
                     Add: portnameDCDE01CXP40G(688145),        -- The port with 40G type split from 100G CXP type
                     " "V6.90,
                     Add: subbname8090DEVCR5D00E1NC79(561594),   -- 1-Port 100GBase LAN/WAN-CFP2  Physical Interface Card(PIC)
                     Add: subbname8090DEVCR5D0E2NCE70(561596), -- 2-Port 100GBase-CFP2 Flexible Card E(P480-E)
                     Add: subbname8090DEVCR5D0LEXFE70(561597), -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P480-E)
                     Add: subbname8090DEVMEOM0LEXFB70(561598), -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP480)
                     Add: subbname8090DEVMEOM0E2NCB70(561599), -- 2-Port 100GBase-CFP Flexible Card(BP480)
                     Add: subbname8090DEVCR5D00E4NB60(561600), -- 4-Port 100GBase QSFP28 Flexible Card(CP1T,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR5DE2NLEX60(561601), -- 2-Port 100GBase QSFP28+20-Port 10GBase LAN/WAN SFP+ Flexible Card(CP1T,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR5D00LFXF60(561602), -- 24-Port 10GBase LAN/WAN SFP+ Flexible Card(CP1T,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR5D00N4NC60(561603), -- 4-Port 100G OTN/ETH CFP4 Flexible Card(CP1T,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR5D00LMXB60(561604), -- 48-Port 10GBase LAN/WAN QSFP+  Sharp Flexible Card(CP1T,Occupy 1 sub-slot)
                     Add: subbname8090DEVCR57L5XFI3(561605), -- 5-Port 10GBase LAN/WAN-SFP+ Fixed Card E
                     Add: subbname8090DEVCR57L2XFI2(561606), -- 2-Port 10GBase LAN/WAN-SFP+ Fixed Card E
                     Add: subbname8090DEVCR2D00E1NC10(561607), --1-Port 100GBase-CFP2 Physical Interface Card(PIC)
                     Add: subbname8090DEVCR2D00LAXF10(561608), --10-Port 10GBase LAN/WAN-SFP+ Physical Interface Card
                     Add: subbname8090DEVCR57EFGFH2(561609), -- 24-Port 1000Base-X-SFP Fixed Card E
                     Add: subbname8090DEVCR5D08DMD1M01(561610),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1471nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M02(561611),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1491nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M03(561612),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1511nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M04(561613),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1531nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M05(561614),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1551nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M06(561615),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1571nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M07(561616),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1591nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD1M08(561617),   -- Bidirectional 1-Channel CWDM Optical Add/Drop Multiplexing (1611nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD2M01(561618),   -- Bidirectional 2-Channel CWDM Optical Add/Drop Multiplexing (1471/1491nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD2M02(561619),   -- Bidirectional 2-Channel CWDM Optical Add/Drop Multiplexing (1511/1531nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD2M03(561620),   -- Bidirectional 2-Channel CWDM Optical Add/Drop Multiplexing (1551/1571nm) Physical Interface Card(PIC) 
                     Add: subbname8090DEVCR5D08DMD2M04(561621),   -- Bidirectional 2-Channel CWDM Optical Add/Drop Multiplexing (1591/1611nm) Physical Interface Card(PIC)
                     Add: subbname8090DEVMEOM0E2NCE70(561627),   -- 2-Port 100GBase-CFP2 Flexible Card(BP480-E) 
                     Add: subbname8090DEVMEOM0LEXFE70(561628),   -- 20-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP480-E)
                     Add: subbname8090DEVCR5D0L5XFH71(561629),   -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P51-H, Occupy two sub-slots)
                     Add: subbname8090DEVME0D0L5XXH7F(561630),   -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP51-H,occupy 2 sub-slot)
                     Add: subbname8090DEVBGWD0L5XFH71(561631),   -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP100)
                     Add: subbname8090DEVCX68LGXF0(561632),   -- 28-Port 10GBase-X-SFP+ + 16-Port 100/1000Base-X-SFP
                     ""V6.89,
                     Add: subnameNE08ENED3MD1(704550),--32 Channels E1 Interface Board
                     Modify: subnameLND1ME8M(708621) to subnameLND1ME4F(708621)
                     Modify: subnameLND1XE2S(708622) to subnameLND1ME4T(708622)
                     "	�"V6.88,
                     Add:  fnameATNDEV910C-D(225559),           --ATN910C-D  chassis
                     Add:  fnamePTN970(229402),                       --PTN970  chassis
                     Add:  virentANGMHSTD0100(225575),           --ATN 910C 2 channel DC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(e),16E1
                     Add:  virentANGMHSTD0200(225576),           --ATN 910C 2 channel AC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(e),16E1
                     Add:  bnameTPKD00CXPA00(229422),           --TPK1CXPA, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPKD00CXPB00(229423),           --TPK1CXPB, System Control,Cross-connect and Multi-protocol Process Unit
                     Add:  bnameTPKD000PIU00(229424),             --TPK1PIU, Power Interface Board
                     Add:  bnameTPKM000FAN00(229425),           --TPK1FAN, Fan box
                     Add:  subbnameANKD00EX4S00(225588),       --ATN980B, 4 Channels 10GE Optical Interface Board
                     Add:  subbnameANKD00EM20F0(225589),      --ATN980B, 20 Channels GE Optical Interface Board
                     Add:  subbnameCARD1ATN910CD(225590),    --ATN910C-D virtual card,4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(e)
                     Add:  subbnameCARD2ATN910CD(225591),    --ATN910C-D virtual card,16E1
                     Add:  subbnameTPKD000SQ100(229468),       --TPK1SQ1, 4 Channels STM-1 Optical Interface Board
                     Add:  subbnameTPKD00EX2S00(229469),       --TPK1EX2S, 2 Channel 10 GE Optical Interface board(SFP+)
                     Add:  subbnameTPKD00EX1S00(229470),       --TPK1EX1S, 1 Channel 10 GE Optical Interface board(SFP+)
                     Add:  subbnameTPKD00EM8F00(229471),      --TPK1EM8F, 8 Channels GE/FE Optical Interface Board
                     Add:  subbnameTPKD00EM8T00(229472),      --TPK1EM8T, 8 Channels GE/FE Electrical Interface Board
                     Add:  subbnameTPKD00EXL100(229473),       --TPK1EXL1, 1-Port 40GBase-CFP Physical Interface Card(PIC)
                     Add:  subbnameTPKD00MD1A00(229474),      --TPK1MD1A, 32 Channels E1 Interface Board(75ohm)
                     Add:  subbnameTPKD00MD1B00(229475),      --TPK1MD1B, 32 Channels E1 Interface Board(120ohm)
                     Add:  subbnameTPKD00ML1A00(229476),       --TPK1ML1A, 16 Channels E1 Interface Board(75ohm)
                     Add:  subbnameTPKD00ML1B00(229477),       --TPK1ML1B, 16 Channels E1 Interface Board(120ohm)
                     " �"V6.87,
                     Add:  virent8090DEVCR5D00E8NB60(562064), -- V8R9C00 for CR5D00E8NB60 CR56LPUI1T(sbom)
                     "�"V6.86,
                     Add:  fname8031S5320-28X-PWR-SI(537108),           --S5320-28X-PWR-SI
                     Add:  fname8031S5320-52X-PWR-SI(537109),           --S5320-52X-PWR-SI
                     Add:  fname8031S5320-28P-SI(537110),               --S5320-28P-SI    
                     Add:  fname8031S5322-52X-LI-AC(537111),            --S5322-52X-LI-AC 
                     Add:  fname8031S6320-54C-EI-48S(537112),           --S6320-54C-EI-48S
                     "&"V6.85,
                     delete: 
                          virent8090DEVCR5D0L5XFA7F(564865),      --for V800R009C00 CR5D0L5XFA7F(SBOM),5-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-52-E,Enhanced HQos)
                          virent8090DEVCR5DLAXFAJ7F(564866),      --for V800R009C00 CR5DLAXFAJ7F(SBOM),10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                          virent8090DEVME0D0LAXXH71(564867),      --for V800R009C00 ME0D0LAXXH71(SBOM),10-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated E(BSUI-120-E)  
                     modify:
                          virent8090DEVCR5D0L5XFA8E(564841) to virent8090DEVCR5D0L5XFA7F(564841)
                          virent8090DEVCR5DLAXFAJ8E(564843) to virent8090DEVCR5DLAXFAJ7F(564843)
                          virent8090DEVME0D0LAXXE71(564846) to virent8090DEVME0D0LAXXH71(564846)
                          virent8090DEVCR5DL2XEFG8E(564842) to virent8090DEVCR5DL2XFFG7E(564842)
                          virent600DEVCR5PM2HBAS70(564858) to virent600DEVCR5PM2HBAS72(564858)
                          virent600DEVCR5PM2HBAS71(564859) to virent600DEVCR5PM2HBAS73(564859)
                          virent600DEVCX6PM2HBAS70(564861) to virent600DEVCX6PM2HBAS72(564861)
                          virent600DEVCX6PM2HBAS71(564862) to virent600DEVCX6PM2HBAS73(564862)
                     add:
                          virent8090DEVCR5DMPUX8670(564865),      --for V800R009C00 CR5DMPUX8670(SBOM),Main Processing Unit B6 
                          virent8090DEVCX6DMPUX8670(564866),      --for V800R009C00 CX6DMPUX8670(SBOM),Main Processing Unit B6 
                          virentME60DEVME0DMPUX8670(159767),      --for V800R009C00 ME0DMPUX8670(SBOM),Main Processing Unit B6              
                     "�"V6.84,
                     Add:  subbnameAND3MD10(225566), --32 Channels E1 Interface Board
                     Add:  subnameLND2DM1(708618),   --32 Channels E1 Interface Board
                     Add:  subnameLND1QC1(708619),   --4 Channels Channelized OC-3c/STM-1c POS Optical Interface Board
                     Add:  subnameLND1QP1(708620),   --4 Channels OC-3/STM-1 POS Optical Interface Board
                     Add:  subnameLND1ME8M(708621),  --4 Channels GE/FE Optical Interface and 4 Channels GE/FE Electric Interface Board
                     Add:  subnameLND1XE2S(708622),  --2 Channels 10GE Optical Interface Board(SFP+)                
                     "."V6.83,
                    Add: fnameATNDEV910C-A(225556),        --910C-A chassis               
                    Add: fnameATNDEV910C-B(225557),        --910C-B chassis             
                    Add: fnameATNDEV950C(225558),          --950C chassis
                    Add: fnameNE05E-SQ(704524),            -- NE05E-SQ chassis     
                    Add: fnameNE08E-S6E(704525),           -- NE08E-S6E chassis 
                    Add: bnameNEDD000PIU00(704512),        --NE08E, Power
                    Add: bnameNEDD000FAN00(704513),        --NE08E, FAN    
                    Add: bnameANKD000PIU00(229005),        --ATN950C, Power
                    Add: bnameANKD000FAN00(229006),        --ATN950C, FAN
                    Add: bnameANGD00APIU00(229007),        --ATN910C-A/B AC Power
                    Add: bnameANGD000PIU00(229008),        --ATN910C-A/B DC Power
                    Add: bnameANGD000FAN00(229009),        --ATN910C-A/B FAN
                    Add: subbnameANDD00EM4F00(225575),     --ATN950C, 4 Channels GE/FE Optical Interface Board
                    Add: subbnameANDD00EM4T00(225576),     --ATN950C, 4 Channels GE/FE Electrical Interface Board
                    Add: subbnameANDD00EM8F00(225577),     --ATN950C, 8 Channels GE/FE Optical Interface Board
                    Add: subbnameANDD00EM8T00(225578),     --ATN950C, 8 Channels GE/FE Electrical Interface Board
                    Add: subbnameANDD00EX1S00(225579),     --ATN950C, 1 Channel 10 GE Optical Interface board(SFP+) 
                    Add: subbnameANKD00EX2S00(225580),     --ATN950C, 2 Channel 10 GE Optical Interface board(SFP+)
                    Add: subbnameANDD16E17500(225581),     --ATN950C, 16 Channels E1 Interface Board(75ohm)
                    Add: subbnameANDD16E11200(225582),     --ATN950C, 16 Channels E1 Interface Board(120ohm)
                    Add: subbnameANDD32E17500(225583),     --ATN950C, 32 Channels E1 Interface Board(75ohm)
                    Add: subbnameANDD32E11200(225584),     --ATN950C, 32 Channels E1 Interface Board(120ohm) 
                    Add: subnameNEDD00EM4F00(704560),      --NE08E, 4 Channels GE/FE Optical Interface Board                                  
                    Add: subnameNEDD00EM4T00(704561),      --NE08E, 4 Channels GE/FE Electrical Interface Board                               
                    Add: subnameNEDD00EM8F00(704562),      --NE08E, 8 Channels GE/FE Optical Interface Board                                  
                    Add: subnameNEDD00EM8T00(704563),      --NE08E, 8 Channels GE/FE Electrical Interface Board                               
                    Add: subnameNEDD00EX1S00(704564),      --NE08E, 1 Channel 10 GE Optical Interface board(SFP+)                             
                    Add: subnameNEDD00EX2S00(704565),      --NE08E, 2 Channel 10 GE Optical Interface board(SFP+)                             
                    Add: subnameNEDD16E17500(704566),      --NE08E, 16 Channels E1 Interface Board(75ohm)                                     
                    Add: subnameNEDD16E11200(704567),      --NE08E, 16 Channels E1 Interface Board(120ohm)                                    
                    Add: subnameNEDD32E17500(704568),      --NE08E, 32 Channels E1 Interface Board(75ohm)                                     
                    Add: subnameNEDD32E11200(704569),      --NE08E, 32 Channels E1 Interface Board(120ohm) 
                    Add: subnameCARDNE05ESQ(704570),       --NE05E virtual card
                    Add: subbnameLNDD01XE8F00(225585),     --ATN980B, 1 Channel 10GE Optical(SFP+)+8 Channels GE/FE Optical Interface Board  
                    Add: subnameCARDATN910CA(225586),      --ATN910C-A virtual card
                    Add: subnameCARDATN910CB(225587)       --ATN910C-B virtual card
                    Add: virentANKD00CXPB00(225569),       --ATN950C, system Control,Cross-connect and Multi-protocol Process Unit,80G
                    Add: virentANKD00CXPA00(225570),       --ATN950C, system Control,Cross-connect and Multi-protocol Process Unit  
                    Add: virentANGMHSTA0100(225571),       --ATN 910C 2 channel DC System,with 4*10GE(o), 8*10GE /GE/FE(o),16*GE/FE(o) 
                    Add: virentANGMHSTB0100(225572),       --ATN 910C 2 channel AC System,with 4*10GE(o), 8*10GE /GE/FE(o),16*GE/FE(o)
                    Add: virentANGMHSTA0200(225573),       --ATN 910C 2 channel DC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(o),8*GE/FE(e)
                    Add: virentANGMHSTB0200(225574),       --ATN 910C 2 channel AC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(o),8*GE/FE(e)
                    Add: virentNEDD00CXPA00(704535),       --NE08E, system Control,Cross-connect and Multi-protocol Process Unit   
                    Add: virentNECMHSTA0100(704536),       --NE05E-SQ 2 channel DC System,with 4*10GE(o), 8*10GE /GE/FE(o),16*GE/FE(o)
                    Add: virentNECMHSTB0100(704537),       --NE05E-SQ 2 channel AC System,with 4*10GE(o), 8*10GE /GE/FE(o),16*GE/FE(o)
                    Add: virentNECMHSTA0200(704538),       --NE05E-SQ 2 channel DC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(o),8*GE/FE(e)
                    Add: virentNECMHSTB0200(704539),       --NE05E-SQ 2 channel AC System,with 4*10GE(o), 8*10GE /GE/FE(o),8*GE/FE(o),8*GE/FE(e)  
                           "K"V6.82,
                      --for PTN7900 V1R7C10 20160617
                      Add:   bnamePTN7900TPA2EH1(229412), --TPA2EH1,1-port 100 Gigabit Ethernet Switching Processing Board
                      Add:   bnamePTN7900TPA1EH2(229413), --TPA1EH2,2-port 100 Gigabit Ethernet Switching Processing Board
                      Add:   bnamePTN7900TPA2EXL2(229414), --TPA2EXL2,2-port 40 Gigabit Ethernet Switching Processing Board
                      Add:   bnamePTN7900TPA1EX16S(229415), --TPA1EX16S,16-port 10 Gigabit Ethernet Switching Processing Board
                      Add:   bnamePTN7900TPA2EX12(229416), --TPA2EX12,12-port 10 Gigabit Ethernet Switching Processing Board
                      Add:   bnamePTN7900TPA1EX8S(229417), --TPA1EX8S,8-port 10 Gigabit Ethernet Switching Processing Board
                      --for PTN7900/990 V1R8C00 20160617
                      Mod:   bnamePTN7900TPA1MQ1(229418),   --TPA1MQ1,63 Channels E1 Interface Processing Board
                      Mod:   bnamePTN7900TPA2EG24(229419),  --TPA2EG24,24-port Gigabit Ethernet Switching Processing Board
                      Mod:   bnamePTN7900TPA1MPA(229420),   --TPA1MPA,Multi-port GE/STM-1/E1 Processing Board              
                      Mod:   bnamePTN990TPJA000PIU00(229421),   --TPJA000PIU00,AC Power Interface Board
                           " �"V6.81,
                     ADD: bnameH901CVEC(148539),          --  Video board of MA5800 device.
                           " �"V6.80,
                     Add: bnameES1D2MCUAC00(663628),      --S7703,Main Control Unit A(Optional Clock)      
                     Add: bnameES1D2SRUAC00(663629),      --S7706/S7712,Main Control Unit A(Optional clock)
                     "	"V6.79,
                     Add: AP6150DN,AP6050DN,AP4030TN,AP4050DN-E,AP4050DN-HD,AP7050DE,AP1010SN, AP2050DN,AP2050DN-S,AP2050DN-E,AP4050DE for WLAN ap
                     Update: AP4030DN-E,AP7050DN-E,AD9430DN-24,AD9430DN-12  for WLAN ap
                     ""V6.78,
                     Add: virentME60DEVMEODBSUFMO70(161593),     -- for V800R009C00 MEODBSUFMO70(SBOM),Flexible Card Broadband Service Unit(BSUF-480,2 sub-slots)
                     Add: virentME60DEVMEODMSUFMO70(161594),     -- for V800R009C00 MEODMSUFMO70(SBOM),Flexible Card Broadband Service Unit(MSUF-480,2 sub-slots)
                     Add: virent8090DEVCR5DLPUFME70(564864),     -- for V800R009C00 CR5DLPUFME70(SBOM),Flexible Card Line Processing Unit E(LPUF-480-E)
                     Add: virent8090DEVCR5D0L5XFA7F(564865),      --for V800R009C00 CR5D0L5XFA7F(SBOM),5-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-52-E,Enhanced HQos)
                     Add: virent8090DEVCR5DLAXFAJ7F(564866),      --for V800R009C00 CR5DLAXFAJ7F(SBOM),10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-120-E)
                     Add: virent8090DEVME0D0LAXXH71(564867),      --for V800R009C00 ME0D0LAXXH71(SBOM),10-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated E(BSUI-120-E)
                     "�"V6.77,
                     Add: subbname8090DEVME0D0EAGFE70(561588), -- 10-Port 100/1000Base-X-SFP  Physical Interface Card E(PIC-E)
                     Add: subbname8090DEVME0D0L2XFE71(561589), -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card(PIC-E)
                     Add: subbname8090DEVCR5D0EFGFE71(561578), -- 24-Port 1000Base-X-SFP Flexible Card  E(P52-E)
                     Add: subbname8090DEVCR5D0L5XFE74(561579), -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P52-E, Occupy two sub-slots)
                     Add: subbname8090DEVCR5D0L2XFE75(561580), -- 2-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P52-E)
                     Add: subbname8090DEVCR5D0L5XFE76(561581), -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P120-E)
                     Add: subbname8090DEVME0D0EFGFE7E(561582), -- 24-Port 1000Base-X-SFP Flexible Card E(BP52-E)
                     Add: subbname8090DEVME0D0L5XXE7E(561583), -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP52-E,occupy 2 sub-slot)
                     Add: subbname8090DEVME0D0L5XXE8E(561584), -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP120-E)
                     Add: subbname8090DEVME0D0L2XXE7E(561585), -- 2-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP5E-E)
                     Add: subbname8090DEVCR5D0LAXFH70(561586), -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P240-H)
                     Add: subbname8090DEVCX6D0LAXFH10(561587),   -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card H(S200-H)
                     Add: subbname8090DEVCR5D0L2XFH72(561592),   -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card H (PIC-H)
                     Add: subbname8090DEVCR2D0L2XFH11(561590),   -- 8-Port 100/1000Base-X-SFP  Physical Interface Card H
                     Add: subbname8090DEVCR5D0E8GFH70(561593),   -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card H (PIC-H)
                     Add: subbname8090DEVCR2D0E8GFH10(561591),   -- 8-Port 100/1000Base-X-SFP  Physical Interface Card H

                     "	"V6.76,
                     Add: fnameMA5821-24GE-POE(561574),     --Virtual Frame H821MABC of the MA5821 24GE poe device.
                     Add: fnameMA5611SAE08PD8VDSL(561575),        --Virtual Frame MA5611S-AE08 of the MA5611S-AE08 8VDSL pd device.
                     Add: fnameMA5611SAE16PD16VDSL(561576),       --Virtual Frame MA5611S-AE16 of the MA5611S-AE16 16VDSL pd device.
                     Add: fnameMA5811SMA5811SAE08PD(561577),      --Virtual Frame MA5811S-AE08 of the MA5811S-AE08 G.fast pd device.
                     Add: bnameH825XCWA(156050),      --Master board of  of MA5821 POE.
                     Add: bnameHS22EPGP(156051),      --24 GE board of MA5821 POE.
                     Add: bnameH82BBVJM(156052),      --Master board of  of PH MA5611S-AE08 PD.
                     Add: bnameH82BBVUM(156053),      --Master board of  of PH MA5611S-AE16 PD.
                     Add: bnameH835BGUDR(156054),     --Master board of  of MA5811S-AE08 PD.
                     Add: bnameHS2BBVJM(156055),      --8 VDSL board of PH MA5611S-AE08 PD.
                     Add: bnameHS2BBVUM(156056),      --16 VDSL board of PH MA5611S-AE16 PD.
                     Add: subbnameH831CKMA(156057),   --  Clock subboard of MA5818                     
                     "�"V6.02,
                     Add: bnameH80XVPS(148014),          --  support vector board of MA5600T.
                     Add: bnameH901MPSC(148505),         --  control board of MA5800-X2
                     Add: bnameH901MPSD(148506),         --  control board of MA5800-X2
                     Add: bnameH901CGCD(148608),         --  8*GE and 10GE combo board of MA5800
                     Add: bnameH901XGSF(148609),         --  16*10GE board of MA5800
                     Add: bnameH901PISA(148610),         --  DC Power board of MA5800-X2
                     Add: bnameH901PISB(148611),         --  AC Power board of MA5800-X2
                     Add: bnameH901PISC(148612),         --  DC Power board of MA5800-X2
                     Add: subbnameH901CPCB(148513),      --  Clock subboard of MA5800-X2 H901MPSC
                     Add: subbnameH901CPCC(148514),      --  Clock subboard of MA5800-X2 H901MPSD
                     "U"V6.74,
                     Add: fnameAR161-S(667853),          -- AR161-S FRAME
                     Add: fnameAR161W-S(667854),         -- AR161W-S FRAME
                     Add: fnameAR161GW-Lc-S(667855),     -- AR161GW-Lc-S FRAME
                     Add: fnameAR509GW-L-D-H(667856),    -- AR509GW-L-D-H FRAME
                     Add: fnameSRG2340E(667857),         -- SRG2340E FRAME
                     Add: fnameSRG2320EI(667858),        -- SRG2320EI FRAME
                     Add: fnameSRG1320E(667859),         -- SRG1320E FRAME
                     Add: fnameAR1200EW-T1(667860),      -- AR1200EW-T1 FRAME

                     Add: bnameAR161-S(667951),                 -- AR161-S Main Control Unit
                     Add: bnameAR161W-S(667952),                -- AR161W-S Main Control Unit
                     Add: bnameAR161GW-Lc-S(667953),            -- AR161GW-Lc-S Main Control Unit
                     Add: bnameAR509GW-L-D-H(667954),           -- AR509GW-L-D-H Main Control Unit
                     Add: bnameSRG2340E(667955),                -- SRG2340E Main Control Unit
                     Add: bnameSRG2320EI(667956),               -- SRG2320EI Main Control Unit
                     Add: bnameSRG1320E(667957),                -- SRG1320E Main Control Unit
                     Add: bnameAR1200EW-T1(667958),             -- AR1200EW-T1 Main Control Unit
                     Add: bname1LTE-L-H(667959),                -- 1LTE-L-H Control Unit

             Modify: fnameAR1000v(667827) to fnameAR1000V(667827)
             Modify: bnameAR1000v(667917) to bnameAR1000V(667917)
             " �"V6.73,
                     Modify:  virent8090DEVCR5DSFUIT06A(562047),   -- NE5000E 1T Switch Fabric Unit for Single Chassis, 
                     ""V6.72,
                     Add: fnameATNDEV910B-DDC(225547),         
                     Add: fnameATNDEV910B-DAC(225548),         
                     Add: fnameATNDEV910B-FDC(225554),         
                     Add: fnameATNDEV910B-FAC(225555),
                     ""V6.71,
                     Modify:  fname8031E628-PWR-V2(537081), 
                     Modify:  fname8031E628-V2(537083),  
                     Modify:  bname8031E628-PWR-V2(537266),  
                     Modify:  bname8031E628-V2(537268), 
                     "e"V6.70,
                     Add:  fnameNGFW1UL0(16715814),  -- USG6300 L0 Frame Unit.
                     Add:  bnameSUF1MPUA-8GE-WL(16744453),  -- USG6300 1U Main Processing Unit Board. 
                     Add:  bnameSUF1MPUA-8GE-W(16744452),  -- USG6300 1U Main Processing Unit Board.
                     Add:  bnameSUF1MPUA-8GE(16744451),  -- USG6300 1U Main Processing Unit Board.
                     Add:  bnameSUF1MPUA-4GE-W(16744450),  -- USG6300 1U Main Processing Unit Board.
                     Add:  bnameSUF1MPUA-4GE(16744449),  -- USG6300 1U Main Processing Unit Board. 
                     ""V6.69,
                     Add:subbname8090DEVCR2D00E1NC10(561574), --1-Port 100GBase-CFP2 Physical Interface Card(PIC)
                     Add:subbname8090DEVCR2D00LAXF10(561575), --10-Port 10GBase LAN/WAN-SFP+ Physical Interface Card
                     "�"V6.68,
                           Add: virent8090DEVCR5D0MPUB571(564850),    -- V8R8C10 season 4 for CR5D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
               Add: virent8090DEVCX6D0MPUB571(564851),    -- V8R8C10 season 4 for CX6D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
               Add: virentPTN6900DEVTNRD0MPUB571(229479), -- V8R8C10 season 4 for TNRD0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
                   Add: virentME60DEVME0D0MPUB571(159764),    -- V8R8C10 season 4 for ME0D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)

                   Add: virent8090DEVCR5D0MPUD471(564852),    --V8R8C10 season 4 for CR5D0MPUD471(SBOM),Main Processing Unit D4(16G Memory)
                   Add: virent8090DEVCX6D0MPUD471(564853),    --V8R8C10 season 4 for CX6D0MPUD471(SBOM),Main Processing Unit D4(16G Memory)
                   Add: virentPTN6900DEVTNRD0MPUD471(229480), --V8R8C10 season 4 for TNRD0MPUD471(SBOM),Main Processing Unit D4(16G Memory)

                   Add: virent8090DEVCR5D0SRUA871(564854),    -- V8R8C10 season 4 for CR5D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virent8090DEVCX6D0SRUA871(564855),    -- V8R8C10 season 4 for CX6D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virentPTN6900DEVTNRD0SRUA871(229482), -- V8R8C10 season 4 for TNRD0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virentME60DEVME0D0SRUA871(159765),    -- V8R8C10 season 4 for ME0D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)

                   Add: virent8090DEVCR5D0SRUA971(564856),    -- V8R8C10 season 4 for CR5D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virent8090DEVCX6D0SRUA971(564857),    -- V8R8C10 season 4 for CX6D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virentPTN6900DEVTNRD0SRUA971(229483), -- V8R8C10 season 4 for TNRD0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virentME60DEVME0D0SRUA971(159766),    -- V8R8C10 season 4 for ME0D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                 " �"V6.67,
                     Add:virent8090DEVCR9D00D8NC80(562063),   --NE9000 V8R9C00 for CR9D00D8NC80 (sbom)                     " �"V6.66,
                     Add:bname8031S5320-28P-SI-DC(537287), bname8031S5320-52P-SI-DC(537288), bname8031S5320-56C-PWR-EI-ACF(537289)
                     "."V6.65,
                     Add: fname8031CX600-M2H(537102),       --Quidway CX600-M2H FRAME                    
                     Add: fname8090NE40E-M2H(562039),       --Quidway NE40E-M2H FRAME
                     Add: virent8090DEVCR9DEDNEIXB80(562053),   -- NE9000 LPUI-2T CR9DEDNEIXB80
                     Add: virent600DEVCR5PM2HBAS70(564858),    --V8R9C00 NE40E-M2H CR5PM2HBAS70(SBOM), 480Gbps MNPUI DC
                     Add: virent600DEVCR5PM2HBAS71(564859),    --V8R9C00 NE40E-M2H CR5PM2HBAS71(SBOM), 480Gbps MNPUI AC
                     Add: virent600DEVCR5B0BKP0373(564860),    --V8R9C00 NE40E-M2H CR5B0BKP0373(SBOM), 480Gbps MNPUI NO POWER
                     Add: virent600DEVCX6PM2HBAS70(564861),    --V8R9C00 CX600-M2H CX6PM2HBAS70(SBOM), 480Gbps MNPUI DC
                     Add: virent600DEVCX6PM2HBAS71(564862),    --V8R9C00 CX600-M2H CX6PM2HBAS71(SBOM), 480Gbps MNPUI AC
                     Add: virent600DEVCX6B0BKP0373(564863),    --V8R9C00 CX600-M2H CX6B0BKP0373(SBOM), 480Gbps MNPUI NO POWER         
                     Add: virent8090DEVCR5DNPU48070(675865),     -- V8R9C00 for SBOM ,CR5DNPU48070, Network Processing Unit (NPU-480)
                     Add: virent8090DEVCR2DNSPC0010(675866)     -- V8R9C00 for SBOM ,CR2DNSPC0010, Network Service Processor (NSP-C)
                     "�"V6.64,
                     Add: bnameSPUB-X8X16-E8KE(16748627),     -- X8&X16 Firewall Service Processing Unit B.(0x00ff9053)
                     Add: bnameSPUA-X8X16-E8KE(16748628),     -- X8&X16 Firewall Service Processing Unit A. (0x00ff9054)
                     Add: bnameSPUB-X3-E8KE(16748629),     -- X3 Firewall Service Processing Unit B.(0x00ff9055)
                     Add: bnameSPUA-X3-E8KE(16748630),     -- X3 Firewall Service Processing Unit A.(0x00ff9056)
                     Add: subbnameSPCB-D-E8KE(16748631),     -- Firewall Processing card B.(0x00ff9057)
                     Add: subbnameSPCA-S-E8KE(16748632),     -- Firewall Processing card A.(0x00ff9058)
                     Add: bnameSPU-X3-B2(16748633),     -- X3 Service Processing Unit 2(Base Board). (0x00ff9059)
                     Add: bnameSPU-X8X16-20-B-E8KE(16748634),     -- 20G X8&X16 Firewall Service Processing Unit B(oversea).(0x00ff905a)
                     Add: bnameSPU-X8X16-20-A-E8KE(16748635),     -- 20G X8&X16 Firewall Service Processing Unit A(oversea).(0x00ff905b)
                     Add: bnameSPU-X3-20-A-E8KE(16748636),     -- 20G X3 Firewall Service Processing Unit A(oversea).(0x00ff905c)
                     Add: subbnameSPC-20-B-E8KE(16748637),     -- 20G Firewall Performance Expansion Card B(oversea).(0x00ff905d)
                     Add: subbnameSPC-20-A-E8KE(16748638),     -- 20G Firewall Performance Expansion Card A(oversea).(0x00ff905e) 
                     Add: subbnameE8KE-X-20X1G-RJ45(16728066),     -- Finished Board Unit,Eudemon8000E-X,E8KE-X-20X1G-RJ45,20-Port 10/100/1000Base-RJ45 Flexible Card.(0x00ff4002)
                     Add: subbnameE8KE-X-3X40GE-QSFP(16728067),     -- Finished Board Unit,Eudemon8000E-X,E8KE-X-3X40GE-QSFP+,3-Port 40GBase-QSFP+ Flexible Card(P240-A).(0x00ff4003)
                     Add: bnameE8KE-X-LPUF-120(16748606),     -- Finished Board Unit,Eudemon8000E-X,E8KE-X-LPUF-120,Flexible Card Line Processing Unit(LPUF-120,2 sub-slots).(0x00ff903e)
                     Add: bnameE8KE-X-LPUF-240(16748607),     -- Finished Board Unit,Eudemon8000E-X,E8KE-X-LPUF-240,Flexible Card Line Processing Unit(LPUF-240,2 sub-slots).(0x00ff903f)        
                     "�"V6.63,
                     Add: fnameEDFABP21(737285),     -- Virtual frame EDFABP21 of EDFA3220D device.
                     Add: bnameEDFAHFA1(746001),     -- HFA board of EDFA3220D. 
                     Add: bnameEDFAFAN1(746002),     -- FAN board of EDFA3220D.
                     Add: bnameEDFAPWR1(746003),     -- PWR board of EDFA3220D.
                     Add: bnameEDFAEMU1(746004),     -- Master board of EDFA3220D.
                     "�"V6.62,
                   Add: virent8090DEVCR5D0MPUB571(564850),    -- V8R8C10 season 4 for CR5D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
                   Add: virent8090DEVCX6D0MPUB571(564851),    -- V8R8C10 season 4 for CX6D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
                   Add: virentPTN6900DEVTNRD0MPUB571(229479), -- V8R8C10 season 4 for TNRD0MPUB571(SBOM), Main Processing Unit B5(16G Memory)
                   Add: virentME60DEVME0D0MPUB571(159764),    -- V8R8C10 season 4 for ME0D0MPUB571(SBOM), Main Processing Unit B5(16G Memory)

                   Add: virent8090DEVCR5D0MPUD471(564852),    --V8R8C10 season 4 for CR5D0MPUD471(SBOM),Main Processing Unit D4(16G Memory)
                   Add: virent8090DEVCX6D0MPUD471(564853),    --V8R8C10 season 4 for CX6D0MPUD471(SBOM),Main Processing Unit D4(16G Memory)
                   Add: virentPTN6900DEVTNRD0MPUD471(229480), --V8R8C10 season 4 for TNRD0MPUD471(SBOM),Main Processing Unit D4(16G Memory)

                   Add: virent8090DEVCR5D0SRUA871(564854),    -- V8R8C10 season 4 for CR5D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virent8090DEVCX6D0SRUA871(564855),    -- V8R8C10 season 4 for CX6D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virentPTN6900DEVTNRD0SRUA871(229482), -- V8R8C10 season 4 for TNRD0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)
                   Add: virentME60DEVME0D0SRUA871(159765),    -- V8R8C10 season 4 for ME0D0SRUA871(SBOM), Switch and Route Processing Unit A8(16G Memory)

                   Add: virent8090DEVCR5D0SRUA971(564856),    -- V8R8C10 season 4 for CR5D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virent8090DEVCX6D0SRUA971(564857),    -- V8R8C10 season 4 for CX6D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virentPTN6900DEVTNRD0SRUA971(229483), -- V8R8C10 season 4 for TNRD0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                   Add: virentME60DEVME0D0SRUA971(159766),    -- V8R8C10 season 4 for ME0D0SRUA971(SBOM), Switch and Route Processing Unit A9(16G Memory)
                 "r"V6.61,
                     Modify:
                     virent8090DEVCR5D00E8NC61(562045),   -- 8-Port 100GBase-CFP2- Integrated Line Process Unit(NE5000E LPUI-1T)
                     virent8090DEVCR5D00EFMB61(562046),   -- 24-Port 40GBase-QSFP+ Integrated Line Process Unit (NE5000E LPUI-1T)
                     virent8090DEVCR5D00EDNC60(562050),   -- 16-Port 100GBase-CFP4 Integrated Line Process Unit (NE5000E LPUI-2T)
                     DEL:
                     virent8090DEVCR5DEDNEIXB60(562051),  -- 16-Port 100GBase-QSFP28 + 32-Port 10GBase-QSFP+ Integrated Line Process Unit (NE5000E LPUI-2T)
                 " b"V6.60,
                     The object identifier of switch V2R10 is added
                     "B"V6.59,
                     ADD: 
                     fnameCE685548T6QHI(688156),          -- CloudEngine CE6855-48T6Q-HI Switch (48-Port 10GE RJ45, 6-Port 40GE QSFP+)
                     fnameCE685548S6QHI(688157),          -- CloudEngine CE6855-48S6Q-HI Switch (48-Port SFP+ Optical,6-Port 40GE QSFP+)
                     bnameCE685548T6QHI(688215),              -- Manufactured Board,CloudEngine 6800,CEM48T6QP02,48 Port 10GE RJ45, 6 Port 40GE QSFP+ Optical Switch Control Unit,1*1
                     bnameCE685548S6QHI(688216),              -- Manufactured Board,CloudEngine 6800,CEM48S6QP05,48-Port SFP+ Optical,6-Port 40GE QSFP+ Optical Switch Control Unit,1*1
                     portnameDCDE01QSFP28(688138),           -- The port with 100G QSFP type
                     portnameDCDE01SFP25G(688139),           -- The port with 25G SFP type
                     Modify:
                     portnameDCDE01CFP2(688135),             -- The port with 100G CFP2 type
                     portnameDCDE01CXP(688136),              -- The port with 100G CXP type 
                 " �"V6.58,
                     Modify: 
                     fname8090NE9000X20(562038),       --Quidway NE9000-X20 FRAME to   fname8090NE9000-20(562038),       --Quidway NE9000-20 FRAME
                 " �"V6.57,
                     ADD: 
                     bnameH901TWED(148607),           --  8*10G GPON board of MA5800.
                 " �"V6.56,
                     ADD: 
                     bnamePTN990TPJA000PIU00(229415),           --TPJA000PIU00,AC Power Interface Board
                     "�"V6.56,              
                     Add:subbname8090DEVCR57EFGFH0(561458),       --03031YYN, CR5D0EFGFH70, 24-Port 1000Base-X-SFP Flexible Card H(P51-H)                                 
                     Add:subbname8090DEVME03EFGFH0(561459),       --03031YYT, ME0D0EFGFH7H, 24-Port 1000Base-X-SFP Flexible Card H(BP51-H)                          
                     Add:subbname8090DEVCR57L5XFI0(561460),       --03031XPT, CR5D0L5XFE70, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P51-E, Occupy two sub-slots)
                     Add:subbname8090DEVCR57L5XFI2(561461),      --03031XPU, CR5D0L5XFH71, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P51-H, Occupy two sub-slots)
                     Add:subbname8090DEVCR57L5XFI01(561462),      --03031XPV, CR5D0L5XFE71, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P101-E)                     
                     Add:subbname8090DEVCR57L5XFI02(561463),      --03031XPW, CR5D0L5XFH70, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P120-H)                    
                     Add:subbname8090DEVME03L5XFI1(561464) ,      --03031XPX, ME0D0L5XXE7F, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP51-E,occupy 2 sub-slot)   
                     Add:subbname8090DEVME03L5XFI2(561465) ,      --03031XPY, ME0D0L5XXH7F, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP51-H,occupy 2 sub-slot)   
                     Add:subbname8090DEVME03L5XFI0(561466),       --03031XQA, ME0D0L5XXE7H, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP100-E)                   
                     Add:subbname8090DEVME03L5XFI3(561467) ,      --03031XQB, ME0D0L5XFH7H, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP100-H)                    
                     Add:subbname8090DEVCR57L2XFI1(561468),       --03031YYP, CR5D0L2XFH70, 2-Port 10GBase LAN/WAN-SFP+ Flexible Card H(P51-H)                      
                     Add:subbname8090DEVCR57L2XFI0(561469),       --03031XQD, CR5D0L2XFE70, 2-Port 10GBase LAN/WAN-SFP+ Flexible Card E(P51-E)                      
                     Add:subbname8090DEVME03L2XFI0(561470),       --03031XQF, ME0D0L2XXE7H, 2-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP51-E)                     
                     Add:subbname8090DEVME03L2XFI1(561471),       --03031XQG, ME0D0L2XXE8H, 2-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP51-H)
                     Add:subbname8090DEVCR57EFGFH1(561472),       --03031XQJ, CR5D0EFGFE70, 24-Port 1000Base-X-SFP Flexible Card E(P51-E)
                     Add:subbname8090DEVME03EFGFH1(561473),       --03031XQM, ME0D0EFGFE7H, 24-Port 1000Base-X-SFP Flexible Card H(BP51-H)
                     Add:subbname8090DEVCX62L5XFH0(561474) ,      --03032AWL, CX6D0L5XFH10, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card H(S102-H)
                     Add:subbname8090DEVBGW01L5XFH0(561475) ,     --03032AWM, BGWD0L5XFH71, 5-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP100) 
                     Add:subbname600DEVCR57EFGFH2(561515),       -- V6R9C20,03031XQL,24-Port 1000Base-X-SFP Fixed Card E
                     Add:subbname600DEVCR57L5XFI3(561516),       -- V6R9C20,03031XQC,5-Port 10GBase LAN/WAN-SFP+ Fixed Card E
                     Add:subbname600DEVCR57L2XFI2(561517),       -- V6R9C20,03031XQH,2-Port 10GBase LAN/WAN-SFP+ Fixed Card E 
                     Add:virent8090DEVCR5D0L5XFA8E(564841),      --CR5D0L5XFA8E,5-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-52-E,Enhanced HQos)
                     Add:virent8090DEVCR5DL2XEFG8E(564842),      --CR5DL2XEFG8E,2-Port 10GBase LAN/WAN-SFP+ + 24-Port 1000Base-X-SFP Integrated Line Processing Unit E(LPUI-52-E,Enhanced HQos)
                     Add:virent8090DEVCR5DLAXFAJ8E(564843),      --CR5DLAXFAJ8E,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit E(LPUI-103-E)
                     Add:virent8090DEVME0DL2XEFG8E(564844),      --ME0DL2XEFG8E,2-Port 10GBase LAN/WAN-SFP++24-Port 1000Base-SFP Broadband Service Unit Integrated E(BSUI-52-E)
                     Add:virent8090DEVME0D0L5XXE71(564845),      --ME0D0L5XXE71,5-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated E(BSUI-52-E)
                     Add:virent8090DEVME0D0LAXXE71(564846),      --ME0D0LAXXE71,10-Port 10GBase LAN/WAN-SFP+ Broadband Service Unit Integrated E(BSUI-101-E)
                     Add:virent8090DEVCR5DLPUFE07E(564847),      --CR5DLPUFE07E,Flexible Card Line Processing Unit(LPUF-200-E)
                     Add:virent8090DEVME0DBSUFB070(564848),      --ME0DBSUFB070,Flexible Card Broadband Service Unit(BSUF-120,2 sub-slots)
                     Add:virent8090DEVME0DBSUFC870(564849),      --ME0DBSUFC870,Flexible Card Broadband Service Unit(BSUF-200,2 sub-slots)
                     Add:subbname8090DEVCR57LAXFH0(561441) ,     --03031EAS, CX6D0LAXFH10, 10-Port 10GBase LAN/WAN-SFP+ Flexible Card H(S200-H)
                    "�"V6.54,              
                     Add: virent8090DEVCR5DSFUFT050(562058),   -- NE5000E V8R9C00 for CR5DSFUFT050(sbom)
                     Add: virent8090DEVCR5DSFUIT06H(562059),    -- NE5000E V8R9C00 for CR5DSFUIT06H(sbom)
                     Add: virent8090DEVCR5D0MPUA750(562060),   -- NE5000E V8R9C00 for CR5D0MPUA750(sbom)
                     Add: virent8090DEVCR5D0MPUB660(562061),   -- NE5000E V8R9C00 for CR5D0MPUB660(sbom)
                     Add: virent8090DEVCR5DLPUFT060(562062),   -- NE5000E V8R9C00 for CR5DLPUFT060(sbom)
                     Add: virent8090DEVCR5D0OFCT050(561716),   -- NE5000E V8R9C00 for CR5D0OFCT050(sbom).
                     " "V6.53,              
                     Add: subbnameH831GE4A(155688),     -- 4 GE upstream subboard.
                     "_"V6.52,
                     Add: fnameMA5621-FE-DC(561572),        --Frame MA5621-FE-DC of the MA5621(sd5130) device(DC).
                     Add: fnameMA5621H831MABC-DC(561573),   --Backplane of MA5621(SD5103) Spec master Frame:H831MABC(DC).
                     Add: bnameHS22EPFFMA5621(156049),      --4 FE board of MA5621.
                     "U"V6.51,
                     Modify: bnameHS35BGUDM(155999) to bnameHS35BGUD(155999).
                     Add: bnameHS35BGUDM(156048),        --8 G.FAST board of MA5811S-AE08  device(AC).                
                     Del: fnameMA5811S-AE08-AC(561571),  --Virtual frame MA5811S-AE08 of MA5811S_AE08 device(AC).
                     "�"V6.50,
                     Add: fnameAR2204E-D(667830),        -- AR2204E-D FRAME
                     Add: fnameAR2504E-H(667831),        -- AR2504E-H FRAME
                     Add: fnameAR509G-Lc(667832),        -- AR509G-Lc FRAME
                     Add: fnameAR129CGVW-L(667833),      -- AR129CGVW-L FRAME
                     Add: fnameAR101-S(667834),          -- AR101-S FRAME
                     Add: fnameAR101W-S(667835),         -- AR101W-S FRAME
                     Add: fnameAR550C-4GE(667836),       -- AR550C-4GE FRAME
                     Add: fnameAR550C-2C6GE(667837),     -- AR550C-2C6GE FRAME
                     Add: fnameAR509CG-Lt(667838),       -- AR509CG-Lt FRAME
                     Add: fnameAR509CG-Lt-N(667839),     -- AR509CG-Lt-N FRAME
                     Add: fnameAR503EQGW-L(667840),      -- AR503EQGW-L FRAME
                     Add: fnameAR503EW(667841),          -- AR503EW FRAME
                     Add: fnameAR503EDGW-Lc(667842),     -- AR503EDGW-Lc FRAME
                     Add: fnameAR509CG-L(667843),        -- AR509CG-L FRAME
                     Add: fnameAR168FVW(667844),         -- AR168FVW FRAME
                     Add: fnameAR532(667845),            -- AR532 FRAME
                     Add: fnameAR502ERc(667846),         -- AR502ERc FRAME
                     Add: fnameAR502EGR-L(667847),       -- AR502EGR-L FRAME
                     Add: fnameAR502EG-L(667848),        -- AR502EG-L FRAME
                     Add: fnameAR502EGW-L(667849),       -- AR502EGW-L FRAME
                     Add: fnameAR550E(667850),           -- AR550E FRAME
                     Add: fnameAR509CG-Lc(667851),       -- AR509CG-Lc FRAME
                     Add: fnameAR2204-51GE-R(667852),    -- AR2204-51GE-R FRAME
                     
                     Add: bnameAR2204E-D(667920),               -- AR2204E-D Main Control Unit
                     Add: bname2VDSL2(667921),                  -- 2VDSL2 Control Unit
                     Add: bnameAR2504E-H(667922),               -- AR2504E-H Main Control Unit
                     Add: bnameAR509G-Lc(667923),               -- AR509G-Lc Main Control Unit
                     Add: bnameAR129CGVW-L(667924),             -- AR129CGVW-L Main Control Unit
                     Add: bnameAR101-S(667925),                 -- AR101-S Main Control Unit
                     Add: bnameAR101W-S(667926),                -- AR101W-S Main Control Unit
                     Add: bnameAR550C-4GE(667927),              -- AR550C-4GE Main Control Unit
                     Add: bnameAR550C-2C6GE(667928),            -- AR550C-2C6GE Main Control Unit
                     Add: bnameAR509CG-Lt(667929),              -- AR509CG-Lt Main Control Unit
                     Add: bnameAR509CG-Lt-N(667930),            -- AR509CG-Lt-N Main Control Unit
                     Add: bnameAR503EQGW-L(667931),             -- AR503EQGW-L Main Control Unit
                     Add: bnameAR503EW(667932),                 -- AR503EW Main Control Unit
                     Add: bnameAR503EDGW-Lc(667933),            -- AR503EDGW-Lc Main Control Unit
                     Add: bnameAR509CG-L(667934),               -- AR509CG-L Main Control Unit
                     Add: bnameAR168FVW(667935),                -- AR168FVW Main Control Unit
                     Add: bnameAR532(667936),                   -- AR532 Main Control Unit
                     Add: bnameAR502ERc(667937),                -- AR502ERc Main Control Unit
                     Add: bnameAR502EGR-L(667938),              -- AR502EGR-L Main Control Unit
                     Add: bnameAR502EG-L(667939),               -- AR502EG-L Main Control Unit
                     Add: bnameAR502EGW-L(667940),              -- AR502EGW-L Main Control Unit
                     Add: bnameAR550E(667941),                  -- AR550E Main Control Unit
                     Add: bname1LTE-L(667942),                  -- 1LTE-L Control Unit
                     Add: bname1LTE-Lt(667943),                 -- 1LTE-Lt Control Unit
                     Add: bname1LTE-Lo(667944),                 -- 1LTE-Lo Control Unit
                     Add: bnameHDDSATA(667945),                 -- HDDSATA Control Unit
                     Add: bname3G-HSPA7-H(667946),              -- 3G-HSPA+7-H Control Unit
                     Add: bnameARPAC-60WC(667947),              -- PAC-60WC Power Card Unit
                     Add: bnameAR509CG-Lc(667948),              -- AR509CG-Lc Main Control Unit
                     Add: bnameAR2204-51GE-R(667949),           -- AR2204-51GE-R Main Control Unit
                     Add: bname1LTE-Lc(667950),                 -- 1LTE-Lc Control Unit
                
                     Modify: fnameAR2504(667810) to fnameAR2504-H(667810)
                     Modify: bnameAR2504(667895) to bnameAR2504-H(667895)
                     Modify: bnameAR8ES3GS(667896) to bnameAR8ES2GS(667896)
                     Modify: bnameAR8ES3G(667897) to bnameAR8ES2G(667897)
                     " "V6.49,
                     Add: bnameH901XSED(148604),           --  8*10G GPON board of MA5800.
             Add: bnameH901GPHD(148605),           --  8*GPON board of MA5800. 
                     Add: bnameH901GPSD(148606),           --  8*GPON board of MA5800.
                     "B"V6.48,
                     Add: bnameH835BGUDM(156044),        --Master board of MA5811S-AE08 device(AC).
                     Add: fnameMA5811S-AE08-AC(561571),  --Virtual frame MA5811S-AE08 of MA5811S_AE08 device(AC).
                     Modify: bnameHS35BGUD(155999) to bnameHS35BGUDM(155999).
                     "�"V6.47,
                     Add: fnamePTN990-AC(229401),     -- PTN990 Chassis with AC power.
                     Add: bnamePTN7900TPA1MQ1(229412),         --TPA1MQ1,63 Channels E1 Interface Processing Board
                     Add: bnamePTN7900TPA2EG24(229413),        --TPA2EG24,24-port Gigabit Ethernet Switching Processing Board
                     Add: bnamePTN7900TPA1MPA(229414),         --TPA1MPA,Multi-port GE/STM-1/E1 Processing Board    
                     " �"V6.46,
                     Add: bnameLE1D2X48SEC1(659614)
                     Add: bnameES1D2X48SEC0(663611)
                     "�"V6.45,
                     Add: fnameCE88604CEI(688155),             -- CloudEngine CE8860-4C-EI Switch(with 4 interface slots)
                     Add: bnameCEL36LQEG(688207),              -- Manufactured Board,CloudEngine 12800-CE-L36LQ-EG,36-Port 40GE Interface Card(EG,QSFP+)-1*1
                     Add: bnameCE88604CEI(688208),             -- CloudEngine CE8860-4C-EI Switch(with 4 interface slots)
                     Add: bnameCEL02LQEC(688209),              -- Manufactured Board,CloudEngine 12800,CE-L02LQ-EC,2-Port-40G Interface Card(EC,QSFP+)
                     Add: bnameCEL04CFMD(688210),              -- Manufactured Board,CloudEngine 12800,CE-L04CF-MD,4-Port-100GE Interface Card(MD,CFP),1*1
                     Add: bnameCEL24LQMC1(688211),             -- Manufactured Board,CloudEngine 12800,CE-L24LQ-EC1,24-Port-40G Interface Card(MC1,QSFP+),1*1
                     Add: bnameCEL12LQMD(688212),              -- Manufactured Board,CloudEngine 12800,CE-L12LQ-MD,12-Port-40G Interface Card(MD,QSFP+),1*1
                     Add: bnameCEL48XSMD(688213),              -- Manufactured Board,CloudEngine 12800,CE-L48XS-MD,48-Port-10GE Interface Card(MD,QSFP+),1*1
                     Add: bnameCEL48XSMC(688214),              -- Manufactured Board,CloudEngine 12800,CE-L48XS-MC,48-Port-10GE Interface Card(MC,QSFP+),1*1
                     Add: subbnameCED24S2CQ(688137),           -- Manufactured Board,CloudEngine 8800,CE88-D24S2CQ,CE8860:24-Port-10G(SFP+),2-Port-100G(QSFP28) Interface Card,1*1
                     Add: subbnameCED24T2CQ(688138),           -- Manufactured Board,CloudEngine 8800,CE88-D24T2CQ,CE8860:24-Port 10GBASE-T(RJ45),2-Port-100G(QSFP28) Interface Card,1*1
                     Add: subbnameCED16Q(688139),              -- Manufactured Board,CloudEngine 8800,CE88-D16Q,CE8860:16-Port-40G Interface Card(QSFP+),1*1
                     Add: subbnameCED8CQ(688140),              -- Manufactured Board,CloudEngine 8800,CE88-D8CQ,CE8860:8-Port-100G Interface Card(QSFP28),1*1
                     "C"V6.44,
                      Add:     virent8090DEVCX6DISUFM010(564820),     -- V8R8C10,LPUF480,Flexible Card Line Processing Unit(LPUF-480)
                      Add:     virent8090DEVCX6DISUFE012(564821),     -- V8R8C10,LPUF-200,Flexible Card Integrated Service Unit(ISUF-201) 
                      Add:     virent8090DEVCR5D00E8NC7C(564822),      -- for V800R008C10 CR5D00E8NC7C(SBOM), 8-Port 100GBase-CFP2 Integrated Line Processing Unit B(LPUI-1T-L)
                      Add:     virent8090DEVCR5D00LMXF7C(564823),      -- for V800R008C10 CR5D00LMXF7C(SBOM), 48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCR5DE2NLFX7C(564825),      -- for V800R008C10 CR5DE2NLFX7C(SBOM), 2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCX6DSFUIM01B(564826),     --CX6DSFUIM01B,480Gbps Switch Fabric Unit B(SFUI-480-B)
                      Add:     virent8090DEVCR5D00E4NC7C(564827),      -- for V800R008C10 CR5D00E4NC7C(SBOM), 4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCX6DSFUIM01C(564828),     --CX6DSFUIM01C 480Gbps Switch Fabric Unit(SFUI-480-B)
                      Add:     virent8090DEVCX6D0MPUB510(564829),     --CX6D0MPUB510 Main Processing Unit B5
                      Add:     virent8090DEVCX6D0SRUA810(564830),     --CX6D0SRUA810 Switch and Route Processing Unit A8   
                      Add:     virent8090DEVCX6D0MPUD410(564832),     --CX6D0MPUD410,Main Processing Unit D4
                      Add:     virent8090DEVCX6D0SRUA771(564834),     --CX6D0SRUA771,Enhanced Switch and Route Processing Unit A5
                      Add:     virent8090DEVCR5DLPUFM07B(564836),      -- CR5DLPUFM07B,Flexible Card Line Processing Unit(LPUF-480-B)
                      Add:     virent8090DEVCR5D00LMXF7B(564837),      -- CR5D00LMXF7B,48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCR5DE2NLFX7B(564838),      -- CR5DE2NLFX7B,2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCR5D00E4NC7B(564839),      -- CR5D00E4NC7B,4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCX6D0LEXFA11(564840),      --CX6D0LEXFA11,20-Port 10GBase LAN/WAN-SFP+ Integrated  Integrated Service Unit (ISUI-201)            
                   
                      Add:     virentME60DEVME0D0SRUB570(161589),     --ME0D0SRUB570 Switch and Route Processing Unit A10
                      Add:     virentME60DEVME0DSFUIM07B(161590),   -- for V800R008C10 ME0DSFUIM07B(SBOM),480Gbps Switch Fabric Unit B(SFUI-480-B)
                      Add:     virentME60DEVME0DSFUIM07C(161591),   -- for V800R008C10 ME0DSFUIM07C(SBOM),480Gbps Switch Fabric Unit C(SFUI-480-C) 
                      Add:     virentPTN6900DEVTNRD0SRUB570(229481),  --TNRD0SRUB570,Enhanced Switch and Route Processing Unit A5     
              "u"V6.43,
              ADD: subbname8090DEVCR56E8NCE(561455),   -- NE5000E,CR56E8NCE , 8-Port 100GBase-CFP4
              ADD: subbname8090DEVCR56E8NLDXA(561456), --NE5000E,CR56E8NLDXA, 8-Port 100GBase-CFP4 + 16-Port 10GBase-QSFP+ 
              ADD: subbname8090DEVCR56EDNLIXV(561457), --NE5000E,CR56EDNLIXV, 16-Port 100GBase-QSFP28 + 32-Port 10GBase-QSFP+ 
              "h"V6.42,
              ADD: subbname8090DEVME0D0LAXFE7H(561420), -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card E(BP240-E)
              ADD: subbname8090DEVCX6D0E2NCA10(561667),   --2-Port 100GBase-CFP2 Flexible Card A(S480-A)
              ADD: subbname8090DEVCX6D0LFXFA11(561668),   --24-Port 10GBase LAN/WAN-SFP+ Flexible Card A(S480-A)
                    " �"V6.41,
                     Add: fnameLX1BS9303S00(659471)
                     Add: fnameLX1BS9306S00(659472)
                     Add: fnameLX1BS9312S00(659473)                      
                     " u"V6.40,
                     Add: subbnameH836ASDB(156048),     -- VOIP DSP Subboard H836ASDB.
                     "�"V6.39,
                     Add: fnameMA5800H901BPSB(148513),     -- Backplane of the MA5800-X2.
                     Add: bnameH901MPSA(148503),           -- control board of MA5800-X2
                     Add: bnameH902MPLA(148504),           -- control board of MA5800
                     Add: subbnameH901CPCA(148512),        -- Clock subboard of MA5800-X2 H901MPSA
                     Add: bnameH901MPWD(148601),           -- AC Power board of MA5800-X2
                     Add: bnameH901MPWE(148602),           -- DC Power board of MA5800-X2
                     Add: bnameH901MPWC(148603),           -- DC Power board of MA5800-X2
                     "+"V6.38,
                  ADD:
                   NE0508E HWPCBType: 0x000AC000~0x000ACFFF(704512~708607)
                   ETN HWPCBType: 0x000AD000~0x000ADFFF(708608~712703)                     
                   bnameLNDD01FAN(708608),               --Fan board, etn550-A  
                   " q"V6.37,
                   ADD: bnameHS22EPGDMA5878(156047),   --8GE board of MA5878 device.
                   "Y"V6.36,
                     Add: fnameH821MABCMA5821(561570),   --Virtual frame H821MABC of MA5821(sd5568) device.
                     Add: bnameH823TCIAT(156045),         --Master board of MA5821(sd5568) device.
                     Add: bnameHS23TCIAT(156046),         --24GE and 1*10GE board of MA5821(sd5568) device.
                     ""V6.35,
                     Add: fnameMA56948VD-DC(145958),       -- Virtual frame MA5694-VD of the MA5694(8VD) DC device.
                     Add: fnameMA56944VD-DC(145972),       -- Virtual frame MA5694-VD of the MA5694(4VD) DC device.                     
                     "�"V6.34,
                     Add: fnameH831MABMMA5818(561568),   --Frame H831MABM of the MA5818 device.
                     Add: fnameMA5621-FE(561569),        --Frame MA5621-FE of the MA5621(sd5130) device(AC).
                     Add: bnameH831CCMAMA5818(156036),   --Master board of MA5818 device.
                     Add: bnameVPJ(156037),               --G.FAST vectoring serial control engine board of the MA5818 device.
                     Add: bnameINT(156038),               --Serial board(without VP chip) of the MA5818 device.
                     Add: bnameH831PAMA(156039),         --550W AC power board of the MA5818 device.
                     Add: bnameH831PAMB(156040),         --550W AC power board(support standby power) of the MA5818 device.
                     Add: bnameH831PDMA(156041),         --550W DC power board of the MA5818 device. 
                     Add: bnameFDS(156042),              --24 line G.FAST serial board of the MA5818 device. 
                     Add: bnameH823E2IQ(156043),         --Master board of the MA5621(sd5130) device.
                     Add: subbnameH832XS1C(156044),      --XG-SPON subboard of the MA5878 device.
                     " �"V6.33,
                     Add: fnameMA5800H901BPIB(148512),     -- 19inch, 200G backplane for MA5800-X15.
                     "�"V6.32,
                      Add:     virent8090DEVCX6DISUFM010(564820),     -- V8R8C10,LPUF480,Flexible Card Line Processing Unit(LPUF-480)
                      Add:     virent8090DEVCX6DISUFE011(564821),     -- V8R8C10,LPUF-200,Flexible Card Integrated Service Unit(ISUF-201) 
                      Add:     virent8090DEVCR5D00E8NC7C(564822),      -- for V800R008C10 CR5D00E8NC7C(SBOM), 8-Port 100GBase-CFP2 Integrated Line Processing Unit B(LPUI-1T-L)
                      Add:     virent8090DEVCR5D00LMXF7C(564823),      -- for V800R008C10 CR5D00LMXF7C(SBOM), 48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCR5DE2NLFX7C(564825),      -- for V800R008C10 CR5DE2NLFX7C(SBOM), 2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCX6DSFUIM01B(564826),     --CX6DSFUIM01B,480Gbps Switch Fabric Unit B(SFUI-480-B)
                      Add:     virent8090DEVCR5D00E4NC7C(564827),      -- for V800R008C10 CR5D00E4NC7C(SBOM), 4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-480-L)
                      Add:     virent8090DEVCX6DSFUIM01C(564828),     --CX6DSFUIM01C 480Gbps Switch Fabric Unit(SFUI-480-B)
                      Add:     virent8090DEVCX6D0MPUB510(564829),     --CX6D0MPUB510 Main Processing Unit B5
                      Add:     virent8090DEVCX6D0SRUA810(564830),     --CX6D0SRUA810 Switch and Route Processing Unit A8   
                      Add:     virent8090DEVCX6D0MPUD410(564832),     --CX6D0MPUD410,Main Processing Unit D4
                      Add:     virent8090DEVCX6D0SRUA771(564834),     --CX6D0SRUA771,Enhanced Switch and Route Processing Unit A5
                      Add:     virent8090DEVCR5DLPUFM07B(564836),      -- CR5DLPUFM07B,Flexible Card Line Processing Unit(LPUF-480-B)
                      Add:     virent8090DEVCR5D00LMXF7B(564837),      -- CR5D00LMXF7B,48-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCR5DE2NLFX7B(564838),      -- CR5DE2NLFX7B,2-Port 100GBase-CFP2 + 24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCR5D00E4NC7B(564839),      -- CR5D00E4NC7B,4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-480-B)
                      Add:     virent8090DEVCX6D0LEXFA11(564840),      --CX6D0LEXFA11,20-Port 10GBase LAN/WAN-SFP+ Integrated  Integrated Service Unit (ISUI-201)
                      Add:     virentME60DEVME0DSFUIU07B(161585),     -- V8R8C10,SFU1TB,1Tbps Switch Fabric Unit B(SFUI-1T-B)               
                      Add:     virentME60DEVME0DSFUIU07C(161586),     --ME0DSFUIU07C 1Tbps Switch Fabric Unit C(SFUI-1T-C)               
                      Add:     virentME60DEVME0D0MPUB570(161587),     --ME0D0MPUB570 Main Processing Unit B5                        
                      Add:     virentME60DEVME0D0SRUA970(161588),     --ME0D0SRUA970 Switch and Route Processing Unit A9
                      Add:     virentME60DEVME0D0SRUAE70(161589),     --ME0D0SRUAE70 Switch and Route Processing Unit A10
                      Add:     virentME60DEVME0DSFUIM07B(161590),   -- for V800R008C10 ME0DSFUIM07B(SBOM),480Gbps Switch Fabric Unit B(SFUI-480-B)
                      Add:     virentME60DEVME0DSFUIM07C(161591),   -- for V800R008C10 ME0DSFUIM07C(SBOM),480Gbps Switch Fabric Unit C(SFUI-480-C)
                      Add:     virentME60DEVME0D0SRUA870(161592),   -- for V800R008C10 ME0D0SRUA870(SBOM),Switch and Route Processing Unit A8
                      Add:     virentPTN6900DEVTNRD0SRUA571(229481),  --TNRD0SRUA571,Enhanced Switch and Route Processing Unit A5     
                         " �"V6.31,
                      ADD:virent8090DEVCR58CMUB(562052),   -- NE9000 Centralized Monitoring Board
                      " �"V6.30,
             Add: subbname8090DEVCR2D00A2CF10(570048),   -- CR2D00A2CF10, 2-Port OC-3c/STM-1c ATM-SFP Physical Interface Card" �"V6.29,
                     Add: bnameH901OXEG(148600),           --  24*10GE board of MA5800.
                     Add: fnameMA5800H901BPLE(148511),     -- Backplane of the MA5800.
                     " �"V6.18,
                     ADD: fnameAD9430DN-24-FAT(692268)----WLAN new AP.
                     ADD: fnameAD9430DN-12-FAT(692269)----WLAN new AP.
                      "�"V6.27,
                   ADD: bnameH82DEFMG(156034),   --Master board of MA5811S-AE48/DE48 device.    
                   ADD: bnameHS2DEFMG(156035),   --48 G.FAST board of MA5811S-AE48/DE48 service board.
                   ADD: fnameMA5811S-AE48(561566),  --Virtual frame MA5811S-AE48 of MA5811S_AE48 device.
                   ADD: fnameMA5811S-DE48(561567),  --Virtual frame MA5811S-DE48 of MA5811S_DE48 device.                   
                   " �"V6.26,
              ADD: subbname8090DEVCR56EDNCV(561453),   -- NE5000E,CR56EDNCV,16-Port 100GBase-CFP4
              ADD: subbname8090DEVCR56EDNBV(561454),   -- NE5000E,CR56EDNBV,16-Port 100GBase-QSFP28
                    " �"V6.25,
              ADD: bnameLE1D2X08SSC0(659584),      --S9300, 8-Port 10GBASE-X Interface Card(SC,SFP+)                    "�"V6.24,
              ADD: fname8090NE9000X20(562038),       --Quidway NE9000-X20 FRAME
              ADD: virent8090DEVCR5D0MPUN080(562040),   -- NE9000 Main Processing Unit N(NE9000 MPUN)
              ADD: virent8090DEVCR9D00E8NC80(562041),   -- 8-Port 100GBase-CFP2- Integrated Line Process Unit(NE9000 LPUI-1T)
              ADD: virent8090DEVCR9D00EFMB80(562042),   -- 24-Port 40GBase-QSFP+ Integrated Line Process Unit (NE9000 LPUI-1T)
              ADD: virent8090DEVCR5D0SFUT080(562043),   -- NE9000 1T Switch Fabric Unit for Single Chassis (NE9000 SFUI-1T)
              ADD: virent8090DEVCR9D00EPXF80(562044),   -- 60-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit (NE9000 LPUI-1T)
              ADD: virent8090DEVCR5D00E8NC61(562045),   -- 8-Port 100GBase-CFP4- Integrated Line Process Unit(NE5000E LPUI-1T)
              ADD: virent8090DEVCR5DE8NEDX61(562046),   -- 8-Port 100GBase-CFP4 + 16-Port 10GBase-QSFP+ Integrated Line Process Unit (NE5000E LPUI-1T)
              ADD: virent8090DEVCR5DSFUIT06A(562047),   -- NE5000E 1T Switch Fabric Unit for Single Chassis
              ADD: virent8090DEVCR5DSFUIT26A(562048),   -- NE5000E-X16B 2T CLC Switch Fabric Unit for Single Chassis (SFU-2T-A)
              ADD: virent8090DEVCR5D00EDNB60(562049),   -- 16-Port 100GBase-QSFP28 Integrated Line Process Unit (NE5000E LPUI-2T)
              ADD: virent8090DEVCR5DEDNEIXB60(562050),   -- 16-Port 100GBase-QSFP28 + 32-Port 10GBase-QSFP+ Integrated Line Process Unit (NE5000E LPUI-2T)
                    "�"V6.23,
              ADD: fnameAR111-S(667824),          -- AR111-S FRAME
              ADD: fnameAR503GW-LcM7(667825),     -- AR503GW-LcM7 FRAME
              ADD: fnameAR511GW-LcAV2M3(667826),  -- AR511GW-LcAV2M3 FRAME
              ADD: fnameAR1000v(667827),          -- AR1000v FRAME
              ADD: fnameAR511DcGW-LcAV2(667828),  -- AR511DcGW-LcAV2 FRAME
              ADD: fnameAR2204-51GE(667829),      -- AR2204-51GE FRAME

              ADD: bnameAR111-S(667914),                 -- AR111-S Main Control Unit
              ADD: bnameAR503GW-LcM7(667915),            -- AR503GW-LcM7 Main Control Unit
              ADD: bnameAR511GW-LcAV2M3(667916),         -- AR511GW-LcAV2M3 Main Control Unit
              ADD: bnameAR1000v(667917),                 -- AR1000v Main Control Unit
              ADD: bnameAR511DcGW-LcAV2(667918),         -- AR511DcGW-LcAV2 Main Control Unit
              ADD: bnameAR2204-51GE(667919),             -- AR2204-51GE Main Control Unit
                    " l"V6.22,
                   Add: subnameSUBCMC(148511),              -- SUBCMC subboard.
                   "-"V6.21,
                     Add: fnameH832MABL(561563),             --Virtual frame H832MABL of the MA5878(SD5568) device.
                     Add: fnameH821MABCMA5821GE(561564),     --Virtual frame H821MABC of the MA5821(GE) device.
                     Add: fnameH821MABCMA5822GE(561565),     --Virtual frame H821MABC of the MA5822(GE) device.
                     Add: bnameH836CCLD(156032),             -- Master board of MA5878(SD5568).
                     Add: bnameH831EGUC(156033),             -- 8GE board of MA5878 device.
                    "	o"V6.20,
                     delete: fnameATNDEV910B-DAC(225547),         --910B-D AC chassis.
                             fnameATNDEV910B-EAC(225548),         --910B-E chassis 
                             fnameNE05E-SN(704523),             -- NE05E-SN chassis
                 fnameETN500-B(708609),              --ETN500-B chassis
                             fnameETN500-C(708610),              --ETN500-C chassis 
                     add: subbnameAND2EX8F(225565),          -- 1 Channel 10GE (SFP+),8 Channels GE/FE Optical Interface Board
                          subnameLND1ME8F(708612),                       -- 8 Channels Fast Ethernet Optical Interface Board 
                          subnameLND1ME8T(708613),                       -- 8x GE service interface board electric
                          subnameLND1XE1S(708614),                       --1 Channel 10GE Optical Interface Board 
                          subnameLND1XE8F(708615),                       -- 1 Channel 10GE (SFP+),8 Channels GE/FE Optical Interface Board
                          subnameLND1DM1A(708616),                       --32x E1 service interface board (75 ohms)
                          subnameLND1DM1B(708617),                       --32x E1 service interface board (120 ohms)
                          subnameNE08ENED1MPAA(704546),          --4-Channel FXS/FXO+2-Channel E&M+2-Channel RS232+2-Channel RS485 Board  
                          subnameNE08ENED1SA8(704547),           --8-Channel V.35/X.21/V.24 Board
                          subnameNE08EPWRPIC(704548),            --the pic of TNF1APIU
                          subnameNE08ENED1MP8A(704549),          --4-Channel C37.94,4-Channel CoDir64K
                          subnameNE08ENED3MD1(704550),--32 Channels E1 Interface Board
                          virentATN910BANG1CXPD-DC(225560),   --ATN 910B 2 channel DC System,with 8*GE/FE(e),16*GE/FE(o),4*10GE(o)
                          virentATN910BANG1CXPD-AC(225561),   --ATN 910B 2 channel AC System,with 8*GE/FE(e),16*GE/FE(o),4*10GE(o)
                          virentLND1MXUA(708611),                 --Cross-connect and Multi-protocol Process Unit
                          bnameNE08ETNF1APIU(704527),          --AC Power Interface Board 
                  fnameETN550-A(708609),                        --ETN550-A chassis  
             modify:  virentNE05E-SN(704524)  to virentNE05E-SN(704526)  "<"V6.19,
                     Add: bnameH835CCFE(156009),      -- Master board of MA5612 Box type device.
                     Add: bnameCAL(156030),           -- 32 ADSL+32 POTS serial combo board.
                     Add: bnameH832PDVSB(156031),     -- DC Power board H832PDVSB of the MA5616.
                    " M"V6.18,
                     Add: fnameAP7050DN-E-FAT(692267)----WLAN new AP" I"V6.17,
                     Add: fnameAP4030DN-E(692266)----WLAN new AP""V6.16,
              ADD: fname8031S5720-14X-PWH-SI-AC(536960),    
              ADD: fname8031S6720S-26Q-EI-24S-AC(536961),   
              ADD: fname8031S6720S-26Q-EI-24S-DC(536962),   
              ADD: fname8031S6320-26Q-EI-24S-AC(536963),    
              ADD: fname8031S6320-26Q-EI-24S-DC(536964),    
              ADD: fname8031S5300-28TP-PWR-LI-AC(536965),   
              ADD: fname8031S5300-10P-PWR-LI-AC-NEW(536966),
              ADD: fname8031S5320-28X-SI-DC(536967),        
              ADD: fname8031S5320-52X-SI-DC(536968),        
              ADD: fname8031S5720-28X-PWR-SI-DC(536969),    
                   fname8031S5720-52X-PWR-SI-DC(536970),    
              ADD: fname8031S5320-52X-PWR-SI-ACF(536971),  
              ADD: fname8031S5720-28X-SI-DC(536972),       
              ADD: fname8031S5720-52X-SI-DC(536973),       
              ADD: fname8031S5720S-28X-SI-DC(536974),      
              ADD: fname8031S5720S-52X-SI-DC(536975),      
              ADD: fname8031S5720-32X-EI-DC(536976),       
              ADD: fname8031S5720-50X-EI-DC(536977),       
              ADD: fname8031S5720-32X-EI-24S-DC(536978),   
              ADD: fname8031S5720-50X-EI-46S-DC(536979),   
              ADD: fname8031S5720-36C-EI-DC(536980),       
                    " �"V6.15,
                     Add: subbname8090DEVCR5D00A2CF70(570047),  -- CR5D00A2CF70, 2-Port OC-3c/STM-1c ATM-SFP Physical Interface Card"�"V6.13,
                     Add: fnameME60X2-M8A(161583),              -- Quidway ME60M-X2-M8A FRAME
                     Add: fnameME60X2-M8A-DC(161584),           -- Quidway ME60M-X2-M8A-DC FRAME
                     Add: fnameME60X2-M16A(161585),             -- Quidway ME60M-X2-M16A FRAME  
                     
                     Add: fnameME60S8A(161586),                 -- Quidway ME60S-X2-S8A FRAME
                     Add: fnameME60S8A-DC(161587),              -- Quidway ME60S-X2-S8A-DC FRAME
                     Add: fnameME60S16A(161588),                -- Quidway ME60S-X2-S16A FRAME                   
                
                     ADD: virent8090DEVCR5DSRUA5E71(564819),      -- for V800R008C00 CR5DSRUA5E71(SBOM), Switch and Route Processing Unit A5E
                
                     Add: fname8031CX600-X3ADO(536921),           -- Quidway CX600-3ADO Carrier Switch.
 
                Add: fname8090CX600-X16ADO(536960),               --Quidway CX600-X16ADO-AC Carrier Switch
                Add: fname8090CX600-X16ADO-DC(536961),            --Quidway CX600-X16ADO-DC Carrier Switch
                Add: fname8090CX600-X8ADO(536962),                --Quidway CX600-X8ADO-AC Carrier Switch
                Add: fname8090CX600-X8ADO-DC(536963),             --Quidway CX600-X8ADO-DC Carrier Switch
                Add: fname8031CX600-X3ADO(536964),                  -- Quidway CX600-3ADO Carrier Switch
                
                Add: fname8031CX600-M8A(536965),                  --Quidwy CX600-M8A-AC FRAME
                Add: fname8031CX600-M8A-DC(536966),               --Quidwy CX600-M8A-DC FRAME
                Add: fname8031CX600-M8ADO(536967),                --Quidwy CX600-M8ADO-AC FRAME
                Add: fname8031CX600-M8ADO-DC(536968),             --Quidwy CX600-M8ADO-DC FRAME
                Add: fname8031CX600-M16A(536969),                 --Quidwy CX600-M16AFRAME
                Add: fname8031CX600-M16ADO(536970),               --Quidwy CX600-M16ADO-AC FRAME

                Add: fname8090NE40E-X2-M8A(562035),          -- Quidwy CX600-X2-M8A FRAME, ne40e
                Add: fname8090NE40E-X2-M8A-DC(562036),       -- Quidwy CX600-X2-M8A-DC  FRAME, ne40e
                Add: fname8090NE40E-X2-M16A(562037),         -- Quidwy CX600-X2-M16A FRAME, ne40e

                Add: fnameME60X2-M8A(161583),           -- Quidway ME60M-X2-M8A FRAME
                Add: fnameME60X2-M8A-DC(161584),            -- Quidway ME60M-X2-M8A-DC FRAME
                Add: fnameME60X2-M16A(161585),          -- Quidway ME60M-X2-M16A FRAME
                Add: fnameME60S8A(161586),              -- Quidway ME60S-X2-S8A FRAME
                Add: fnameME60S8A-DC(161587),           -- Quidway ME60S-X2-S8A-DC FRAME
                Add: fnameME60S16A(161588),             -- Quidway ME60S-X2-S16A FRAME  

                Add: fnamePTN6900-M8A(229398),      --PTN 6900-2-M8A Integrated DC Chassis Components
                Add: fnamePTN6900-M8A-DC(229399),   --PTN 6900-2-M8A Integrated AC Chassis Components
                Add: fnamePTN6900-M16A(229400),     --PTN 6900-2-M16A Integrated Chassis Components

                Add: fnameNE20E-X2-M8A(675848),      --Quidway CX600-X2-M8A-AC FRAME,ne20e
                Add: fnameNE20E-X2-M8A-DC(675849),   --Quidway CX600-X2-M8A-DC FRAME,ne20e
                Add: fnameNE20E-X2-M16A(675850),     --Quidway CX600-X2-M16A FRAME,ne20e
            
                Add: virent8090DEVCR5DSRUA5E71(564819),      -- for V800R008C00 CR5DSRUA5E71(SBOM), Switch and Route Processing Unit A5E

 "1"V6.13,
                     Add: subbname8090DEVCR5D00EEGF70(561562),       -- CX68EEGFAE, 20-Port 100/1000Base-X-SFP  Physical Interface Card(PIC)
                     Add: subbname8090DEVCR2D00EEGF10(675896),       -- CX68EEGFAE, 20-Port 100/1000Base-X-SFP Physical Interface Card
                    "%"V6.12,
                     Add: bnameHS22EPGB(156006),      -- 16GE board of MA582x device.
                     Add: bnameH826XPUB(156007),      -- Master board of MA582x 16GE device.
                     Add: bnameHS22EPGD(156008),      -- 8GE board of MA582x device.
                    ""V6.11,
                     Add: fnameMA56948VD(145959),       -- Virtual frame MA5694-VD of the MA5694(8VD) device.
                     Add: fnameMA5621A4(145960),        -- Virtual frame MA5621A-4 of the MA5621A(4 serial port) device.
                    "	"V6.10,
              ADD: subbname8090DEVCR53CFE1(564527),   --24-Port Channelized E1/T1-DB100 Flexible Card
              ADD: subbname8090DEVCX6D0LAXFA12(561442),   --10-Port 10GBase LAN/WAN-SFP+ Flexible Card A(S200-A) V5 561415
              ADD: subbname8090DEVCX6D0E3MFA10(561443),   --3-Port 40GBase-QSFP+ Flexible Card(S200-A)
              ADD: subbname8090DEVCX6D0E1NCA10(561444),   --1-Port 100GBase-CFP Flexible Card A(S102-A)
              ADD: subbname8090DEVCX6D0E1MCA10(561445),   --1-Port 40GBase LAN-CFP Flexible Card A(S102-A)
              ADD: subbname8090DEVME0D0LAXFB7H(561446),   --10-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP240) V5 561419
              ADD: subbname8090DEVCR57L3XFA2(561447),   --3-Port 10GBase LAN/WAN-SFP+ Fixed Card
              ADD: subbname8090DEVCR56E8NCB(561448),   -- NE5000E,CR56E8NCB,8*100Gbps CFP2 Interface Board
              ADD: subbname8090DEVCR56EFMBB(561449),   -- NE5000E,CR56EFMBB,24*40Gbps QSFP+ Interface Board
              ADD: subbname8090DEVCR58E8NCD(561450),   -- NE9000,CR58E8NCD,8-Port 100GBase-CFP2
              ADD: subbname8090DEVCR58EFMBD(561451),   -- NE9000,CR58EFMBD,24-Port 40GBase-QSFP+
              ADD: subbname8090DEVCR58EPXFB(561452),   -- NE9000,CR58EPXFB,60-Port 10GBase LAN/WAN-SFP+
              ADD: subbname8090DEVCR5DP4C2HF7020(561547),   -- CX68P2HFC, 4-Port OC-3c/STM-1c (or 2-Port OC12c/STM-4c)  POS-SFP Physical Interface Card(PIC)
              ADD: subbnameCR5DP2C1HF70(675895),        -- CX68P2CFC, 2-Port OC-3c/STM-1c (or 1-Port OC12c/STM-4C) POS-SFP  Physical Interface Card(PIC)
              ADD: subbnameCR2DP4C2HF1120(675894),      -- CX68P2HFC, 4-Port OC-3c/STM-1c (or 2-Port OC12c/STM-4c)  POS-SFP  Physical Interface Card
              ADD: subbnameCR2DP2C1HF1120(675893),      -- CX68P1HFC, 2-Port OC-3c/STM-1c (or 1-Port OC12c/STM-4C) POS-SFP  Physical Interface Card
              ADD: subbnameCR5DP2C1HF7020(675892),      -- CX68P2CFC, 2-Port OC-3c/STM-1c (or 1-Port OC12c/STM-4C) POS-SFP  Physical Interface Card(PIC)
                    " �"V6.09,
              ADD: bnameH80XATR(146150),          --  ATR series voice board of MA5600T device,
              ADD: bnameH901CRED(148538),         --  IP backhaul board of MA5800."�"V6.08,
                    Add: fnameATNDEV980B-DC(225552),                --980B DC chassis
                    Add: fnameATNDEV980B-AC(225553),                --980B AC chassis
                    Add: fnameNE05E-SN(704523),                            -- NE05E-SN chassis       
                    Add: bnameATNANJ1FAN(225341),                     --Fan board, 980B
                    Add: bnameATNTNF5PIU(225342),                        --DC Power board, 980B
                    Add: bnameATNTNF5APIU(225343),                     --AC Power board, 980B
                    Add: subbnameANJ1EXL1(225563),                     --Channel 40GE Optical Interface Board
                    Add: virentANJ1CXP01(225556),                          --ATN 980B,ANJ1CXP01,System Control,Cross-connect and Multi-protocol Process Unit
                    Add: virentNE05E-SN(704524),                             --12G AC System with 16 Channels E1,support Temperature Harden,natural heat dissipation  " �"V6.07,
         Modify:virent8090DEVCR5DL2NLEX60(562039),   -- NE5000E,CR56E2NLEXF0,2 port 100GBase CFP2 & 20 port 10GBase LAN/WAN-SFP+ Line Processing Unit(NE5000E LPUI-400)
    
  "�"V6.06,
              ADD: fnameAR531GZ-U-D(667814),      -- AR531GZ-U-D FRAME
              ADD: fnameAR161FGW-LA(667815),      -- AR161FGW-LA FRAME
              ADD: fnameAR515GW-LM9-D(667816),    -- AR515GW-LM9-D FRAME
              ADD: fnameAR161G-U(667817),         -- AR161G-U FRAME
              ADD: fnameAR121GW-L(667818),        -- AR121GW-L FRAME
              ADD: fnameAR129GW-L(667819),        -- AR129GW-L FRAME
              ADD: fnameAR502G-L-D-H(667820),     -- AR502G-L-D-H FRAME
              ADD: fnameAR502GR-L-D-H(667821),    -- AR502GR-L-D-H FRAME
              ADD: fnameAR531G-F(667822),         -- AR531G-F FRAME
              ADD: fnameAR511CGW-LAV2M3(667823),  -- AR511CGW-LAV2M3 FRAME
                
              ADD: bnameAR531GZ-U-D(667904),             --  AR531GZ-U-D Main Control Unit
              ADD: bnameAR161FGW-LA(667905),             --  AR161FGW-LA Main Control Unit
              ADD: bnameAR515GW-LM9-D(667906),           --  AR515GW-LM9-D Main Control Unit
              ADD: bnameAR161G-U(667907),                --  AR161G-U Main Control Unit
              ADD: bnameAR121GW-L(667908),               --  AR121GW-L Main Control Unit
              ADD: bnameAR129GW-L(667909),               --  AR129GW-L Main Control Unit
              ADD: bnameAR502G-L-D-H(667910),            --  AR502G-L-D-H Main Control Unit
              ADD: bnameAR502GR-L-D-H(667911),           --  AR502GR-L-D-H Main Control Unit
              ADD: bnameAR531G-F(667912),                --  AR531G-F Main Control Unit
              ADD: bnameAR511CGW-LAV2M3(667913),         --  AR511CGW-LAV2M3 Main Control Unit
                    " p"V6.05,
                     Add: bnameH901PILB(148537),         --  Power board of MA5800
                    "_"V6.04,
                     Add:subbname8090DEVCR57E8NCB0(561561),   --8*100Gbps CFP2 Interface Board  
                     Add:subbnamePTN990J1EM16DP1(229464),        --J1EM16D-P1,16 Channel 1 GE Optical Interface board 
                     Add:subbnamePTN990J1EM16DP2(229465),        --J1EM16D-P2,16 Channel 1 GE Optical Interface board
                     Add:subbnamePTN990TPJ1EF8F(229466),        --TPJ1EF8F,8 Channel 1 GE Optical Interface board
                     Add:subbnamePTN990TPJ1EX4S(229467),        --TPJ1EX4S,4 Channel 10 GE Optical Interface board(SFP+)         
                    "�"V6.03,
                     Add: fnameME60S4(159759),                  -- Quidway ME60S-X1-S4 FRAME
                     Add: fnameME60S4-DC(159760),               -- Quidway ME60S-X1-S4-DC FRAME
                     Add: fnameME60S8(159761),                  -- Quidway ME60S-X2-S8 FRAME
                     Add: fnameME60S8-DC(159762),               -- Quidway ME60S-X2-S8-DC FRAME
                     Add: fnameME60S16(159763),                 -- Quidway ME60S-X2-S16 FRAME
                     Add: fnameME60X1M4(159764),                -- Quidway ME60M-X1-M4 FRAME
                     Add: fnameME60X1M4-DC(159765),             -- Quidway ME60M-X1-M4-DC FRAME
                     Add: fnameME60X2-M8(159766),               -- Quidway ME60M-X2-M8 FRAME
                     Add: fnameME60X2-M8-DC(159767),            -- Quidway ME60M-X2-M8-DC FRAME
                     Add: fnameME60X2-M16(159768),              -- Quidway ME60M-X2-M16 FRAME

                     Add: virent8090DEVCR5D00E8NC7B(564741),    -- V8R8C00 for CR5D00E8NC7B(SBOM)
                     Add: virentME60DEVME2D00MPUE10(159762),    --for Main Processing Unit E  ME60-S
                     Add: virentME60DEVME0D00MPUK70(159763),    --for Main Processing Unit K  ME60-M

                     Add: virentME60DEVME2DSPUA0010(161581),    --for ME2DSPUA0010 Service Processor Unit(SPU-A)
                     Add: virentME60DEVME2DSPUB0010(161582),    --for ME2DSPUB0010 Service Processor Unit(SPU-B)
                     Add: virentME60DEVME0DBSU24071(161580),    --for ME0DBSU24071 Broadband Service Unit(BSU-240-A)                     
                     Add: fnameME60X2-M8A(161583),              -- Quidway ME60M-X2-M8A FRAME
                     Add: fnameME60X2-M8A-DC(161584),           -- Quidway ME60M-X2-M8A-DC FRAME
                     Add: fnameME60X2-M16A(161585),             -- Quidway ME60M-X2-M16A FRAME  
                     Add: fnameME60S8A(161586),                 -- Quidway ME60S-X2-S8A FRAME
                     Add: fnameME60S8A-DC(161587),              -- Quidway ME60S-X2-S8A-DC FRAME
                     Add: fnameME60S16A(161588),                -- Quidway ME60S-X2-S16A FRAME                   
                    " /"V6.02,  recover for 5.97
                    "H"V6.01,
                     Add: fnameH831MABL-H833CCFE(561555),    --MA5878  new frame  H831MABL.
                     Add: bnameH833CCFE(156001),       -- Master board of MA5878.
                     Add: bnameHS31EIUC(156002),       -- 8 FE vitual board of MA5878.
                     Add: bnameHS31GE2A(156003),       -- 2 GE vitual board of MA5878.
                     Add: bnameHS31ASNB(156004),       -- 16-channel VoIP POTS service board of MA5878.
                     Add: bnameHS31ASLB(156005),       -- 8-channel VoIP POTS service board of MA5878.
                    ""V6.00,
              Add: subbnameH901CKUB(148502),          -- Clock subboard of MA5800 H901MPLB
              Add: bnameH80XSDM(148012),              -- Support SuperVector board.
              Add: bnameH80XSDP(148013),              -- Support SuperVector board.
                   "8"V5.99,
                     Add: Reserve HWFrameType(147530 ~ 147539, 148511 ~ 148540) for MA5800. 
                     Add: Reserve HWPCBType(148503 ~ 148510, 148600 ~ 148699, 156010 ~ 156029) for MA5800. 
                     Add: Reserve HWSubPCBType(148511 ~ 148525) type for MA5800. 
                    "�"V5.98,
          ADD: fnameAP5030DN-S(692254),           --WLAN new ap
              ADD: fnameAP9132DN(692255),             --WLAN new ap
              ADD: fnameAP3010DN-V2(692259),          --WLAN new ap
          ADD: fnameAC6005-8-RU(692260),          --WLAN new ac for russia
          ADD: fnameAC6005-8-PWR-RU(692261),      --WLAN new ac for russia
          ADD: fnameAC6605-26-PWR-RU(692262),     --WLAN new ac for russia
          ADD: fnameACU2-RU(692263),              --WLAN new ac for russia 
          ADD: fnameAC6003-8(692264),             --WLAN new ac 
          ADD: fnameAC6003-8-PWR(692265),         --WLAN new ac 
                   "["V5.97,
              ADD: virentPTN6900DEVTNRDSFUIU07C(229475),   -- for V800R007C00 TNRDSFUIU07C(SBOM),1Tbps Switch Fabric Unit C(SFUI-1T-C) 
              ADD: virentPTN6900DEVTNRD0MPUB570(229476),   -- for V800R007C00 TNRD0MPUB570(SBOM),Main Processing Unit B5
              ADD: virentPTN6900DEVTNRDSFUIM07B(229477),   -- for V800R007C00 TNRDSFUIM07B(SBOM),480Gbps Switch Fabric Unit B(SFUI-480-B)
              ADD: virentPTN6900DEVTNRDSFUIU07B(229478),   -- for V800R007C00 TNRDSFUIU07B(SBOM),1Tbps Switch Fabric Unit B(SFUI-1T-B)
              ADD: virent8090DEVCR5D0MPUD470(561175),      -- for V800R007C00 CR5D0MPUD470(SBOM), Main Processing Unit D4
              ADD: virent600DEVCR5DLPUF507L(564804),       -- for V800R007C00 CR5DLPUF507L(SBOM),Flexible Card Line Processing Unit L(LPUF-50-L,four sub-slots)
              ADD: virent600DEVCR5D00LBXF7L(564805),       -- for V800R007C00 CR5D00LBXF7L(SBOM),12-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-120-L)
              ADD: virent600DEVCR5D00LFXF7L(564806),       -- for V800R007C00 CR5D00LFXF7L(SBOM),24-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-240-L)
              ADD: virent600DEVCR5D00D2NT70(564807),       -- for V800R007C00 CR5D00D2NT70(SBOM),2-Port 100GE Tunable DWDM Integrated Line Processing Unit (LPUI-200)
              ADD: virent600DEVCR5DLPUFE070(564808),       -- for V800R007C00 CR5DLPUFE070(SBOM),Flexible Card Line Processing Unit(LPUF-200)
              ADD: virent600DEVCX6D0MPUD470(564809),       -- for V800R007C00 CX6D0MPUD470(SBOM),Main Processing Unit D4
              ADD: virentME60DEVME0P0MPUD470(159758),      -- for V800R007C00 ME0P0MPUD470(SBOM), Main Processing Unit D4
              ADD: virentME60DEVME0D0SRUA970(159759),      -- for V800R007C00 ME0D0SRUA970(SBOM),Switch and Route Processing Unit A9
              ADD: virentME60DEVME0D0MPUB570(159760),      -- for V800R007C00 ME0D0MPUB570(SBOM),Main Processing Unit B5   
              ADD: virentME60DEVME0D0SRUA870(159761),      -- for V800R007C00 ME0D0SRUA870(SBOM),Switch and Route Processing Unit A8
              ADD: virentME60DEVME0DSFUIU07C(160512),      -- for V800R007C00 ME0DSFUIU07C(SBOM),1Tbps Switch Fabric Unit C(SFUI-1T-C)
              ADD: virentME60DEVME0DSFUIK07B(160513),      -- for V800R007C00 ME0DSFUIK07B(SBOM),480Gbps Switch Fabric Unit(SFUI-480-B)
              ADD: virentME60DEVME0DSFUIU07B(160514),      -- for V800R007C00 ME0DSFUIU07B(SBOM),1Tbps Switch Fabric Unit B(SFUI-1T-B)
              ADD: virentME60DEVME0DSFUIK07A(160515),      -- for V800R007C00 ME0DSFUIK07A(SBOM),480Gbps Switch Fabric Unit(SFUI-480-A)
              ADD: virentPTN6900DEVTNRD0MPUD370(229405),   -- for V800R007C00 TNRD0MPUD370(SBOM),Main Processing Unit D3
              ADD: virentPTN6900DEVTNRD0MPUD470(229406),   -- for V800R007C00 TNRD0MPUD470(SBOM),Main Processing Unit D4        
              ADD: virent8090DEVCR5D00EMGF74(564811),      -- for V800R007C00 CR5D00EMGF74(SBOM), 48-Port 100/1000Base-X-SFP Integrated Line Processing Unit S(LPUI-51-S)
              ADD: virent8090DEVCR5DL2XEFG73(564812),      -- for V800R007C00 CR5DL2XEFG73(SBOM), 2-Port 10GBase LAN/WAN-SFP+ + 24-Port 100/1000Base-X-SFP Integrated Line Processing Unit S(LPUI-51-S)
              ADD: virent8090DEVCX6D0MPUK170(561176),      -- for V800R007C00 CX6D0MPUK170(SBOM), Main Processing Unit K1
              ADD: virent8090DEVCR5D0MPUK170(561177),      -- for V800R007C00 CR5D0MPUK170(SBOM), Main Processing Unit K1
              ADD: virent8090DEVCR2D0MPUE110(561178),      -- for V800R007C00 CR2D0MPUE110(SBOM), Main Processing Unit K1
              ADD: virentPTN6900DEVTNUD00MPUK71(229407),   -- for V800R007C00 TNUD00MPUK71(SBOM), Main Processing Unit K1
              ADD: virent8090DEVCR2B0BKP0210(561179),      -- for V800R007C00 CR2B0BKP0210(SBOM), Integration Processing Unit
              ADD: virent8090DEVCR5B0BKP0371(561180),      -- for V800R007C00 CR5B0BKP0371(SBOM), Integration Processing Unit
              ADD: virent8090DEVCX6B0BKP0371(561181),      -- for V800R007C00 CX6B0BKP0371(SBOM), Integration Processing Unit
              ADD: virentPTN6900DEVTNRB0BKP0371(229408),   -- for V800R007C00 TNUD00MPUK71(SBOM), Integration Processing Unit
              ADD: virent8090DEVCR2B0BKP0211(561182),      -- for V800R007C00 CR2B0BKP0211(SBOM), Integration Processing Unit
              ADD: virent8090DEVCR5B0BKP0372(561183),      -- for V800R007C00 CR5B0BKP0372(SBOM), Integration Processing Unit
              ADD: virent8090DEVCX6B0BKP0372(561184),      -- for V800R007C00 CX6B0BKP0372(SBOM), Integration Processing Unit
              ADD: virentPTN6900DEVTNRB0BKP0372(229409),   -- for V800R007C00 TNRB0BKP0372(SBOM), Integration Processing Unit
              ADD: virent8090DEVCR5D00E2NC76(564813),      -- for V800R008C00 CR5D00E2NC76(SBOM), 2-Port 100GBase-CFP Integrated Line Processing Unit(LPUI-200)
              ADD: virent8090DEVCR5D00LEXF76(564814),      -- for V800R008C00 CR5D00LEXF76(SBOM), 20-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit(LPUI-200)
              ADD: virent8090DEVCR5DE1NLAX76(564815),      -- for V800R008C00 CR5DE1NLAX76(SBOM), 1-Port 100GBase-CFP + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit(LPUI-200)
              ADD: virent8090DEVCR5D00E2NC75(564816),      -- for V800R008C00 CR5D00E2NC75(SBOM), 2-Port 100GBase-CFP Integrated Line Processing Unit L(LPUI-200-L)
              ADD: virent8090DEVCR5D00LEXF75(564817),      -- for V800R008C00 CR5D00LEXF75(SBOM), 20-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-200-L)
              ADD: virent8090DEVCR5DE1NLAX75(564818),      -- for V800R008C00 CR5DE1NLAX75(SBOM), 1-Port 100GBase-CFP + 10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit L(LPUI-200-L)         
              ADD: virent8090DEVCR5DSRUA5E71(564819),      -- for V800R008C00 CR5DSRUA5E71(SBOM), Switch and Route Processing Unit A5E
                   "�"V5.96,
              ADD: fnameH821MABCR(561554),            --MA5633   new frame  H821MABCR
              ADD: bnameH822CCKRD(155996) ,           --MA5633   mainboard   H822CCKRD
              ADD: bnameHS33CDAF(155997) ,            --MA5633   board      HS33CDAF
              ADD: bnameHS33CDAG(155601) ,            --MA5633   board      HS33CDAG
              ADD: subbnameH822UX1A(155956) ,         --10GXPON subboard    H822UX1A 
                   "�"V5.95,
              ADD: fnameAR2204-27GE(667804),      -- Quidway AR2204-27GE FRAME
              ADD: fnameAR2204-27GE-P(667805),    -- Quidway AR2204-27GE-P FRAME
              ADD: fnameAR2204-51GE-P(667806),    -- Quidway AR2204-51GE-P FRAME
              ADD: fnameAR1220C(667807),          -- Quidway AR1220C FRAME
              ADD: fnameAR1220-S2(667808),        -- Quidway AR1220-S2 FRAME
              ADD: fnameAR2240C(667809),          -- Quidway AR2240C FRAME
              ADD: fnameAR2504(667810),           -- Quidway AR2504 FRAME
              ADD: fnameAR161FV-1P(667811),       -- Quidway AR161FV-1P FRAME
              ADD: fnameAR169W-P-M9(667812),      -- Quidway AR169W-P-M9 FRAME
              ADD: fnameAR169RW-P-M9(667813),     -- Quidway AR169RW-P-M9 FRAME
              ADD: bnameAR2204-27GE(667886),             --  AR2204-27GE Main Control Unit
              ADD: bnameAR2204-27GE-P(667887),           --  AR2204-27GE-P Main Control Unit
              ADD: bnameAR2204-51GE-P(667888),           --  AR2204-51GE-P Main Control Unit
              ADD: bnameAR1220C(667889),                 --  AR1220C Main Control Unit
              ADD: bnameAR1220-S2(667890),               --  AR1220-S2 Main Control Unit
              ADD: bnameSRU40C(667891),                  --  SRU40C Main Control Unit
              ADD: bnameSRU100E(667893),                 --  SRU100E Main Control Unit
              ADD: bnameSRU200E(667894),                 --  SRU200E Main Control Unit
              ADD: bnameAR2504(667895),                  --  AR2504 Main Control Unit
              ADD: bnameAR8ES3GS(667896),                --  8ES3GS Control Unit
              ADD: bnameAR8ES3G(667897),                 --  8ES3G Control Unit
              ADD: bnameAR1LTE-LV(667898),               --  1LTE-LV Control Unit
              ADD: bnameAR24ES2GP(667899),               --  24ES2GP Control Unit
              ADD: bnameAR2X10GL(667900),                --  2X10GL Control Unit
              ADD: bnameAR161FV-1P(667901),              --  AR161FV-1P Main Control Unit
              ADD: bnameAR169W-P-M9(667902),             --  AR169W-P-M9 Main Control Unit
              ADD: bnameAR169RW-P-M9(667903),            --  AR169RW-P-M9 Main Control Unit
                    "
"V5.94,
              ADD: fnameCE6850U48S6QHI(688146),         -- CloudEngine CE6850U-48S6Q-HI Switch (24-Port 10GE SFP+,support 2/4/8G FC,2-Port 40GE QSFP+)
              ADD: fnameCE685048T6QHI(688147),          -- CloudEngine CE6850-48T6Q-HI Switch (48-Port 10GE RJ45,6-Port 40GE QSFP+)
              ADD: fnameCE681032T16S4QLI(688148),       -- CloudEngine CE6810-32T16S4Q-LI Switch (32-Port 10GE RJ45,16-Port 10GE SFP+,4-Port 40GE QSFP+ Optical)     
              ADD: fnameCE585548T4S2QEI(688150),        -- CloudEngine CE5855-48T4S2Q-EI Switch (48-Port GE RJ45,4-Port SFP+,2-Port 40GE QSFP+)
              ADD: fnameCE585524T4S2QEI(688151),        -- CloudEngine CE5855-24T4S2Q-EI Switch (24-Port GE RJ45,4-Port SFP+,2-Port 40GE QSFP+)
              ADD: fnameCE6850U24S2QHI(688152),         -- CloudEngine CE6850U-24S2Q-HI Switch (24-Port 10GE SFP+,support 2/4/8G FC,2-Port 40GE QSFP+)
              ADD: fnameCE681024S2QLI(688153),          -- CloudEngine CE6810-24S2Q-LI Switch (24-Port 10GE SFP+,2-Port 40GE QSFP+)
              ADD: fnameCE685148S6QHI(688154),          -- CloudEngine CE6851-48S6Q-HI Switch (48-Port 10GE SFP+,6-Port 40GE QSFP+)
              ADD: bnameCE6850U48S6QHI(688198),             -- CloudEngine 6800-CEM48S6QP02,48-Port 10GE SFP+,support 2/4/8G FC,6-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE685048T6QHI(688199),              -- CloudEngine 6800-CEM48T6QP01,48-Port 10GE RJ45,6-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE681032T16S4QLI(688200),           -- CloudEngine 6800-CEM32T16S4QP01,32-Port 10GE RJ45,16-Port 10GE SFP+ Optical,4-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE585548T4S2QEI(688202),            -- CloudEngine 5800-CEM48T4S2QP03,48-Port GE RJ45,4-Port SFP+ Optical,2-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE585524T4S2QEI(688203),            -- CloudEngine 5800-CEM24T4S2QP03,24-Port GE RJ45,4-Port SFP+ Optical,2-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE6850U24S2QHI(688204),             -- CloudEngine 6800-CEM24S2QP02,24-Port 10GE SFP+,support 2/4/8G FC,2-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE681024S2QLI(688205),              -- CloudEngine 6800-CEM24S2QP01,24-Port 10GE SFP+,2-Port 40GE QSFP+ Optical Switch Control Unit,1*1
              ADD: bnameCE685148S6QHI(688206),              -- CloudEngine 6800-CEM48S6QP04,48-Port 10GE SFP+,6-Port 40GE QSFP+ Optical Switch Control Unit,1*1
                    "�"V5.93,               
                ADD: bnameH832PDSA(155992),   --DC Power board H832PDSA of  the  MA5616.    
                ADD: bnameH832PDVSA(155993),  --DC Power board H832PDVSA of  the  MA5616.        
                ADD: bnameH832PDNSA(155994),  --DC Power board H832PDNSA of  the  MA5616.  
                ADD: bnameH83DSDMM(155995),   --48-channel super vectoring vdsl2+ service board
                ADD: bnameH835BGUD(155998),   --Master board of MA5811S-AE08 device.    
                ADD: bnameHS35BGUD(155999),   --8 G.FAST board of MA5811S-AE08  device (AC).
                ADD: bnameHS35BGUDR(156000),   --8 G.FAST board of MA5811S-AE08  device (RPOE).
                ADD: subbnameASDF(155669),    -- VOIP DSP Subboard H836ASDF
                ADD: subbnameVPS(155670),     -- SUPER VECTOR Subboard VPS              
                ADD: fnameMA5811S-AE08(561553),  --Virtual frame MA5811S-AE08 of MA5811S-AE08 device 
                    "�"V5.92,
                ADD: fname8031E628(536956),     
                ADD: fname8031E628-X(536957),           
                ADD: fname8031E652(536958),         
                ADD: fname8031E652-X(536959),       
                ADD: bname8031E628(537152),         
                ADD: bname8031E628-X(537153),       
                ADD: bname8031E652(537154),         
                ADD: bname8031E652-X(537155),       
                    "D"V5.91,
              ADD: fnamePTN990(229397),                       --PTN 990 Integrated DC Chassis Components
              ADD: bnamePTN990TPJD000CXP00(229408),           --TPJD000CXP00,System Control,Cross-connect and Multi-protocol Process Unit
              ADD: bnamePTN990TPJD000PIU00(229409),           --TPJD000PIU00,Power Interface Board
              ADD: bnamePTN990TPJM000FAN00(229410),           --TPJM000FAN00,Fan box
              ADD: bnamePTN990TPJD000CXP01(229411),           --TPJD000CXP01,System Control,Cross-connect and Multi-protocol Process Unit
              ADD: subbnamePTN990TPJD00EXL100(229451),        --TPJD00EXL100,1-Port 40GBase-CFP Physical Interface Card(PIC)
              ADD: subbnamePTN990TNDD00EX1S00(229452),        --TNDD00EX1S00,1 Channel 10 GE Optical Interface board(SFP+)
              ADD: subbnamePTN990TNDD00EX2S00(229453),        --TNDD00EX2S00,2 Channel 10 GE Optical Interface board(SFP+)
              ADD: subbnamePTN990TNDD00EM4T01(229454),        --TNDD00EM4T01,4 Channels GE/FE Electrical Interface Board
              ADD: subbnamePTN990TNDD00EM8T01(229455),        --TNDD00EM8T01,8 Channels GE/FE Electrical Interface Board
              ADD: subbnamePTN990TNDD00EM4F02(229456),        --TNDD00EM4F02,4 Channels GE/FE Optical Interface Board
              ADD: subbnamePTN990TNDD00EM8F02(229457),        --TNDD00EM8F02,8 Channels GE/FE Optical Interface Board
              ADD: subbnamePTN990TPJD000AUX00(229458),        --TPJD000AUX00,Auxiliary  Flexible Interface Card
              ADD: subbnamePTN990TNDD000SQ100(229459),        --TNDD000SQ100,4 Channels STM-1 Optical Interface Board
              ADD: subbnamePTN990TNDD00MD1A00(229460),        --TNDD00MD1A00,32 Channels E1 Interface Board(75ohm)
              ADD: subbnamePTN990TNDD00MD1B00(229461),        --TNDD00MD1B00,32 Channels E1 Interface Board(120ohm)
              ADD: subbnamePTN990TNDD00ML1A00(229462),        --TNDD00ML1A00,16 Channels E1 Interface Board(75ohm)
              ADD: subbnamePTN990TNDD00ML1B00(229463),        --TNDD00ML1B00,16 Channels E1 Interface Board(120ohm)  "J"V5.90,
                     ADD: subbname8090DEVCR5D00T1MC60(570029),   -- 1-Port 40G OTN-CFP Flexible Card(CP100,Occupy 2 sub-slots)      
                     ADD: subbname8090DEVCR5D00P2XX72(570030),     --2-Port OC-192c/STM-64c POS-XFP Flexible Card(P51-A)
                     ADD: subbname8090DEVCR57L4XEBGFB(570031),     --4-Port 10GBase LAN/WAN-SFP++12-Port 100/1000Base-X-SFP Integrated Integrated Service Unit B(ISUI-51-B,Supporting 1588v2)
                     ADD: subbname8090DEVCR57TBXF00(570032),         --12-Port OTU2-SFP+ Fixed Card
                     ADD: subbname8090DEVCR57T6XF00(570033),         --6-Port OTU2-SFP+ Fixed Card(P120)    
                     ADD: subbname8090DEVCX6D0EFGFA12(570034),       -- CX6D0EFGFA12,24-Port 100/1000Base-X-SFP Integrated Integrated Service Unit (ISUI-21,Supporting 1588v2)
                     ADD: subbname8090DEVCX6DL1XEDG1A(570038),       -- CX6DL1XEDG1A,1-Port 10GBase LAN/WAN-SFP++16-Port 100/1000Base-X-SFP Integrated Integrated Service Unit (ISUI-21,Supporting 1588v2)
                     ADD: subbname8090DEVCR5D0EFGFA73(570039),       -- CR5D0EFGFA73,24-Port 100/1000Base-X-SFP Integrated Integrated Service Unit (ISUI-21,Supporting 1588v2)
                     ADD: subbname8090DEVCR5DL1XEDG70(570040),       -- CR5DL1XEDG70,1-Port 10GBase LAN/WAN-SFP++16-Port 100/1000Base-X-SFP Integrated Integrated Service Unit (ISUI-21,Supporting 1588v2)
                     ADD: subbname8090DEVCR53P4UF0(570043),           -- CR53P4UF0,4-Port OC-48c/STM-16c POS-SFP Flexible Card
                     ADD: subbname8090DEVCR53P2UF0(570044),           -- CR53P2UF0,2-Port OC-48c/STM-16c POS-SFP Flexible Card
                     ADD: subbname8090DEVCR53P8HF0(570045),           -- CR53P8HF0,8-Port OC-12c/STM-4c POS-SFP Flexible Card
                     ADD: subbname8090DEVCR53P1XX0(570046),           -- CR53P1XX0,1-Port OC-192c/STM-64c POS-XFP Flexible Card(Occupy two slots)
                     ADD: subbname8090DEVCR5D00L2NC63(561418),   -- Finished Board,NE5000E,CR56E2NCC2,2-Port 100GBase-CFP2 Flexible Card(CP400,Occupy 1 sub-slot)
                     ADD: subbname8090DEVCR5D00LEXF63(561419),   -- Finished Board,NE5000E,CR56LEXF2,20-Port 10GBase LAN/WAN-SFP+ Flexible Card(CP400,Occupy 1 sub-slot) 
                     Modify: subbnameCR53P2CF(659455) to subbnameCR5D0002CF70(659455), -- --2-Port OC-3c/STM-1C POS SFP Flexible Card   
                     Modify: subbnameCR53P4CF(659465) to subbnameCR53P4CF0(659465),  --4-Port OC-3c/STM-1C POS SFP Flexible Card    
                     Modify: subbnameCR53P8CF(659454) to subbnameCR53P8CF0(659454),  --8-Port OC-3c/STM-1c POS-SFP Flexible Card    
                     Modify: subbname8090DEVCR5D00D2NT70(561549) to subbname8090DEVCR57D2NT00(561549), -- 2-Port 100GE Tunable DWDM Integrated Line Processing Unit (LPUI-200)               
                     " j"V5.89,
                     Delete ifAdminStatus and ifOperStatus                 
                     " �"V5.88,
                     ADD: bnameH901EDSH(148536),         --  TDM service board of MA5800.             
                     ""V5.87,
                 Add: fnameMA5600H803Mabc(147529),         -- Backplane of the P300 broadband master Frame: H803MABC.
                 Add: fnameMA5600H802Mabh(147571),         -- Backplane(19 Inch) of the P300 new broadband master Frame: H802MABH
                     " q"V5.86,
       ADD fname and bname of ar121w, ar121w-s, ar161w and ar129w                 
                     "*"V5.85,
       ADD virent8090DEVCR5D00TBXF71(564903),    -- V8R7C10 for 12-Port OTU2-SFP+ Integrated Line Processing Unit (LPUI-120)
       ADD: virent8090DEVCR5D00TFXF71(564904),    -- V8R7C10 for 24-Port OTU2-SFP+ Integrated Line Processing Unit (LPUI-240)                 
                     "�"V5.84,
                     ADD: fname8031S5700S-28X-LI-AC(536953),           --S5700S-28X-LI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5700S-52X-LI-AC(536954),           --S5700S-52X-LI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5700S-28P-PWR-LI-AC(536955),       --S5700S-28P-PWR-LI-AC       Metro Service Platform for V2R8C00
                     ADD: bname8031S5700S-28X-LI-AC(537149),          --S5700S-28X-LI-AC           Metro Service Platform for V2R8C00
                     ADD: bname8031S5700S-52X-LI-AC(537150),          --S5700S-52X-LI-AC           Metro Service Platform for V2R8C00
                     ADD: bname8031S5700S-28P-PWR-LI-AC(537151),      --S5700S-28P-PWR-LI-AC       Metro Service Platform for V2R8C00
                     ADD: bnameLE1D2G48VEA2(659583),      --S9300, 48-Port 10/100/1000BASE-T POE Interface Card(EA,RJ45,POE,EEE)                     
                     "r"V5.83,
                     ADD: bnameHS35BVUP(155989),               -- 16G.FAST+VECTOR board of MA5811S_BT  device.
                     ADD: bnameH835BVUP(155991),               -- Master board of MA5811S_BT device.
                     ADD: fnameMA5811S_BT_H821MABC(145957),    -- Virtual frame H821MABC of MA5811S_BT device .                
                     "�"V5.82,
    ADD:virent8090DEVCR5DLPUFK062(562033),   -- 400G Flexible Card Line Processing Unit B(NE5000E LPUF-400-B,2 sub-slots)
    ADD:virent8090DEVCR5D0MPUA451(562034),   -- NetEngine5000E Cluster-CR55MPUA5
    ADD:virent8090DEVCCR5D00ICUA51(562035),   -- NetEngine5000E Cluster-CR55ICUA1
    ADD:virent8090DEVCR5DSFUFK051(562036),   -- NetEngine5000E Cluster-CR55SFUF400D
    ADD:virent8090DEVCR5D00L4NC60(562037),   -- NE5000E,CR56E4NCC0,4-Port 100GBase-CFP2 Integrated Line Processing Unit (LPUI-400)
    ADD:virent8090DEVCR5D00LKXF60(562038),   -- NE5000E,CR56LKXFA0,40-Port 10GBase LAN/WAN-SFP+ Integrated Line Process Unit(NE5000E LPUI-400)
    ADD: virent8090DEVCR5DL2NLEX60(562039),   -- NE5000E,CR56E2NLEXF0,2 port 100GBase CFP2 & 20 port 10GBase LAN/WAN-SFP+ Line Processing Unit(NE5000E LPUI-400)
    ADD:virent8090DEVCCR5D0OFCK051(561415),   -- NetEngine5000E Cluster-CR55OFC400D-400G    
  "�"V5.81,
                     ADD: fname8031S5720S-28P-SI-AC(536922),           --S5720S-28P-SI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-28P-SI-AC(536923),            --S5321-28P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720S-28X-SI-AC(536924),           --S5720S-28X-SI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-28X-SI-AC(536925),            --S5321-28X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-28X-SI-DC(536926),            --S5321-28X-SI-DC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720S-52P-SI-AC(536927),           --S5720S-52P-SI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-52P-SI-AC(536928),            --S5321-52P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720S-52X-SI-AC(536929),           --S5720S-52X-SI-AC           Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-52X-SI-AC(536930),            --S5321-52X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5321-52X-SI-DC(536931),            --S5321-52X-SI-DC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-28P-SI-AC(536932),            --S5720-28P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-28P-SI-AC(536933),            --S5320-28P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-28X-SI-AC(536934),            --S5720-28X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-28X-SI-AC(536935),            --S5320-28X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-52P-SI-AC(536936),            --S5720-52P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-52P-SI-AC(536937),            --S5320-52P-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-52X-SI-AC(536938),            --S5720-52X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-52X-SI-AC(536939),            --S5320-52X-SI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-28X-PWR-SI-AC(536940),        --S5720-28X-PWR-SI-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-28X-PWR-SI-AC(536941),        --S5320-28X-PWR-SI-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-52X-PWR-SI-AC(536942),        --S5720-52X-PWR-SI-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S5720-52X-PWR-SI-ACF(536943),       --S5720-52X-PWR-SI-ACF       Metro Service Platform for V2R8C00
                     ADD: fname8031S5320-52X-PWR-SI-AC(536944),        --S5320-52X-PWR-SI-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S5710-28X-LI-AC(536945),            --S5710-28X-LI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S5710-52X-LI-AC(536946),            --S5710-52X-LI-AC            Metro Service Platform for V2R8C00
                     ADD: fname8031S6720-30C-EI-24S-AC(536947),        --S6720-30C-EI-24S-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S6320-30C-EI-24S-AC(536948),        --S6320-30C-EI-24S-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S6320-30C-EI-24S-DC(536949),        --S6320-30C-EI-24S-DC        Metro Service Platform for V2R8C00
                     ADD: fname8031S6720-54C-EI-48S-AC(536950),        --S6720-54C-EI-48S-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S6320-54C-EI-48S-AC(536951),        --S6320-54C-EI-48S-AC        Metro Service Platform for V2R8C00
                     ADD: fname8031S6320-54C-EI-48S-DC(536952),        --S6320-54C-EI-48S-DC        Metro Service Platform for V2R8C00
                     
                     " �"V5.80,
                     ADD: bnameAP9131DN(692253),               -- WLAN FATAP board.
                     DEL: bnameAP7110SN(692236),               -- WLAN not supported finally.
                     "g"V5.79,
                     ADD: bnameHS21GE4B(148535),               -- 4GE baoard for MA5694_4VD device.
                     ADD: bnameH821AVIC(148534),               -- Master board of MA5694_4VD device.
                     ADD: fnameMA5694-4VD-H821MABC(145956),    -- Virtual frame H821MABC of MA5694_4VD device .                
                     ""V5.78,
                     ADD: bnameMA5612ASL(155990),         -- 8-channel VoIP POTS service board of MA5612.
                     ADD: fnameMA5694SDCH821MABC(561552),  -- Virtual frame H821MABC of MA5694S  PON DOCK  DC device.                    
                    "i"V5.77,
                Modify: subbname8090DEVCR5D00L4XF71(561545) to subbname8090DEVCR5D00L4XF72(561545), -- CX68L4XFD, 4-Port 10GBase LAN/WAN-SFP+ Physical Interface Card(PIC)
                Delete: subbname8090DEVCR5DL1XE8G70(561503), -- CX68L1XE8GF, 1-Port 10GBase LAN/WAN-SFP+  8-Port 100/1000Base-X-SFP Physical Interface Card(PIC)
                    ""V5.76,
         [bnameLE1D2FW00S01(659577), bnameLE1D2FW00S01(16719992)],
         [bnameET1D2IPS0S00(700449), bnameET1D2IPS0S00(16719988)], 
         [bnameET1D2FW00S02(700452), bnameET1D2FW00S02(16719991)],
         [bnameET1D2FW00S00(700450), bnameET1D2FW00S00(16719989)], 
         [bnameET1D2FW00S01(700451), bnameET1D2FW00S01(16719990)],
         delete
                bnameUSG9100SU61SPUA(16748552),     -- Service Processing Board,with HS General Security Platform Software
                bnameUSG9100SU61E8GF(16748553),     -- 8-port GE Optical Interface Card(SFP),with HS General Security Platform Software
                bnameUSG9100SU61P4UF(16748554),     -- 4-port 2.5G POS Optical Interface Card (SFP),with HS General Security Platform Software
                bnameUSG9100SU61E1XX(16748555),     -- 1-port 10G LAN XFP Optical Interface Board,with HS General Security Platform Software
                bnameUSG9100SU61W1XX(16748556),     -- 1-port 10G WAN XFP Optical Interface Board,with HS General Security Platform Software
                bnameUSG9100SU61P1XX(16748557),     -- 1-port 10G POS XFP Optical Interface Board,with HS General Security Platform Software
                bnameUSG9100SU61MSU01(16748558),    -- ATCA Main Processing & Switching Unit,with HS General Security Platform Software
                bnameUSG9100SU61SMMD02(16748559),   -- Shelf Management Module,with HS General Security Platform Software
                bnameUSG9100SU6Z1ATCA(16748560),    -- Integrated Chassis Components-5U
                bnameUSG9100SU6Z2ATCA(16748561),    -- Integrated Chassis Components-14U
                bnameUSG9100CN6E01FFB(16748562),    -- CGA Integrated Frame Fan Box
                bnameUSG9100CN6E02FFB(16748563),    -- 5U Integrated Frame Fan Box
         "<"V5.75,
                     ADD: subbname8090DEVDVSU2(561425),     -- For V6R9C00 16G DVSU Card(VSUF160) 
                     ADD: virent8090DEVVSUI160(564810),     -- for V600R009C00 CR5DVSUID010(SBOM), Integrated Versatile Service Unit(VSUI-160-E) 
                     ADD: virentME60DEVVSUI160(161579),     -- for V600R009C00 ME0DVSUID070(SBOM),Integrated Versatile Service Unit(VSUI-160-E)  
                     Add: subbname8090DEVME2D00E8GE12(570001),    -- ME2D00E8GE12, 8-Port 100/1000Base-RJ45 Physical Interface Card
                     Add: subbname8090DEVME2D00EAGF10(570002),    -- ME2D00EAGF10, 10-Port 100/1000Base-X-SFP Physical Interface Card
                     Add: subbname8090DEVME2D00L4XF11(570003),    -- ME2D00L4XF11, 4-Port 10GBase LAN/WAN-SFP+ Physical Interface Card
                     Add: subbname8090DEVME2DL1XE8G11(570004),    -- ME2DL1XE8G11, 1-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Physical Interface Card
                     Add: subbname8090DEVME2D00L2XF12(570005),    -- ME2D00L2XF12, 2-Port 10GBase LAN/WAN-SFP+ Physical Interface Card
                     Add: subbname8090DEVCR2D00C1CF11(570006),    -- CR2D00C1CF11, 1-Port Channelized STM-1c POS-SFP Physical Interface Card
                     Add: subbname8090DEVME0D00E8GE71(570007),    -- 8-Port 100/1000Base-RJ45 Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00EAGF70(570008),    -- 10-Port 100/1000Base-X-SFP  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00L4XF72(570009),    -- 4-Port 10GBase LAN/WAN-SFP+  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0DL1XE8G71(570010),    -- 1-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00L2XF71(570011),    -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00L4XF70(570012),    -- 4-Port 10GBase LAN-SFP+  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0DL1XE8G70(570013),    -- 1-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00L2XF70(570014),    -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card(PIC)                         
                     Add: subbname8090DEVME0D00E8GF71(570015),    -- 8-Port 100/1000Base-X-SFP  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00E8GE70(570016),    -- 8-Port 100/1000Base-RJ45 Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00C4CF71(570017),    -- 4-Port Channelized STM-1c POS-SFP  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D000IE170(570018),    -- 32-Port E1 Physical Interface Card(PIC,75ohm)
                     Add: subbname8090DEVME0D000IE171(570019),    -- 32-Port E1 Physical Interface Card(PIC,120ohm)
                     Add: subbname8090DEVME0D000DE170(570020),    -- 16-Port E1 Physical Interface Card(PIC,75ohm)
                     Add: subbname8090DEVME0D000DE171(570021),    -- 16-Port E1 Physical Interface Card(PIC,120ohm)
                     Add: subbname8090DEVME0D00P4CF70(570022),    -- 4-Port OC-3c/STM-1c POS-SFP Flexible Interface Card(FIC)
                     Add: subbname8090DEVME0DP2C1HF70(570023),    -- 2-Port OC-3c/STM-1c (or 1-Port OC-12c/STM-4C) POS-SFP  Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00AUXQ10(570024),    -- Auxiliary  Flexible Interface Card with 4-Port 100Base-RJ45 (FIC,Supporting 1588v2)
                     Add: subbname8090DEVME0D08CWDM70(570025),    -- 8-Channel CWDM Multiplexing & Demultiplexing (1471/1491/1511/1531/1551/1571/1591/1611nm) Physical Interface Card(PIC)
                     Add: subbname8090DEVME0D00C4T370(570026),    -- 4-Port Clear Channel E3/Channelized T3 Physical Interface Card (PIC)
                     Add: subbname8090DEVME0D0L2XFH71(570027),    -- 2-Port 10GBase LAN/WAN-SFP+  Physical Interface Card H (PIC-H)
                     Add: subbname8090DEVME0D0EAGFH70(570028),    -- 10-Port 100/1000Base-X-SFP  Physical Interface Card H (PIC-H)
                     Delete: subbname8090DEVCX6D00EAGF10(536755),    -- CX68EAGFD, 10-Port 100/1000Base-X-SFP Service Interface Card(SIC)
                     Delete: subbname8090DEVCX6DL1XE8G11(536756),    -- CX68L1XE8GFB, 1-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP Service Interface Card(SIC)
                     Delete: subbname8090DEVCX6D00E8GE11(536757),    -- CX68E8GED, 8-Port 100/1000Base-RJ45 Service Interface Card(SIC)
                     Delete: subbname8090DEVCX6D00L4XF11(536758),    -- CX68L4XFD, 4-Port 10GBase LAN/WAN-SFP+ Service Interface Card(SIC)
                     Delete: subbname8090DEVCX6D00L2XF11(536759),    -- CX68L2XFC, 2-Port 10GBase LAN/WAN-SFP+ Service Interface Card(SIC)
             " �"V5.74,       
                     Delete the conflict emu on node HWFrameType,HWPCBType and HWSubPCBType ,
                     Modify the bnameH82BCVMM(155825) to bnameH82BCVMMMA5662(155825)  
                     "�"V5.73,
        
                     ADD: fnameCCU(16719872),                 --CCU Frame
                     ADD: bnameCCUMAIN(16752640),             -- CCU main board
                     ADD: bnameUEU(16752641),                 -- UEU board
                     ADD: bnameEEU(16752642),                 -- EEU board
                     ADD: bnameAIU(16752643),                 -- AIU board       
                     " �"V5.72,
                     Mod: virentPTN7900VPICTPA1EX12(229474),   --VPICTPA1EX12,12ch 10 Gigabit Ethernet Switching Processing Board-1*1   renew enum
                    "�"V5.71,
                     Add: fnameMA5633H821MABCP(561550),        --Virtual frame H821MABCP of horizontal MA5633(sd5130) device.
                     Add: fnameMA5633H821MABCQ(561551),        --Virtual frame H821MABCQ of vertical MA5633(sd5130) device.
                     Add: bnameHS33CDAE(155986),               --DOCSIS virtual service board of MA5633.           
                     " u"V5.70,
                  Add: fnameSVFLEAF(688145),                -- CloudEngine Svf Leaf Frame
                  "Z"V5.69,
                  Add: fnameMA5621ASH831Mabc(145955),   -- Virtual frame H831MABC of MA5621A(SD5132) device
                  Modify: bnameH821CCICM(148533) to bnameH821BVIC(148533)   -- Master board of MA5694_8VD device.
                  Delete: subbnameH821BVCM(155956)    -- Virtual  BVCM subboard of MA5694_8VD,  
                  "�"V5.68,                
                    Add: subbname8090DEVCR5D00T4XF70(564522),   -- CR5D00T4XF70, 4-Port OTU2-SFP+ Physical Interface Card(PIC)                                                                                                                                                                                                                                                                                                                                                                                                                  
                    Add: subbname8090DEVCR2D00T4XF70(564524),   -- CR2D00T4XF70, 4-Port OTU2-SFP+ Physical Interface Card(PIC)                                                                                                                                                                                                                                                                                                                                                                                                                      
                    Add: subbname8090DEVCR5D00E1MF70(564523),   -- CR5D00E1MF70, 1-Port 40GBase-CFP Physical Interface Card(PIC)                                                                                                                                                                                                                                                                                                                                                                                                                    
                    Add: subbname8090DEVCR2D00E1MF70(564525),   -- CR2D00E1MF70, 1-Port 40GBase-CFP Physical Interface Card(PIC)                                                                                                                                                                                                                                                                                                                                                                                                                    
                    Add: subbnameCR53P8CF(659454),  --8-Port OC-3c/STM-1c POS-SFP Flexible Card                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    Add: subbnameCR53P2CF(659455),  --2-Port OC-3c/STM-1C POS SFP Flexible Card                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    Add: subbname8090DEVCR5M0E8GFA30(561555),   --8-Port 100/1000Base-X-SFP Flexible Card A(P10-A,Supporting 1588v2)                                                                                                                                                                                                                                                                                                                                                                                                                
                    Add: subbname8090DEVCR5D00C2CF70(564526),   --4-Port Channelized OC-3c/STM-1c POS-SFP Flexible Card                                                                                                                                                                                                                                                                                                                                                                                                                             
                    Add: subbname8090DEVCR5D00LAXF70(561548), -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P240-A)                                                                                                                                                                                                                                                                                                                                                                                                                               
                    Add: subbname8090DEVCR5D00D2NT70(561549), -- 2-Port 100GE Tunable DWDM Integrated Line Processing Unit (LPUI-200)                                                                                                                                                                                                                                                                                                                                                                                                               
                    Add: subbname8090DEVCX6D00EAGF10(561556),   -- CX68EAGFD, 10-Port 100/1000Base-X-SFP Service Interface Card(SIC)                                                                                                                                                                                                                                                                                                                                                                                                                        
                    Add: subbname8090DEVCX6DL1XE8G11(561557),   -- CX68L1XE8GFB, 1-Port 10GBase LAN/WAN-SFP+ + 8-Port 100/1000Base-X-SFP                                                                                                                                                                                                                                                                                                                                                                                                     Service Interface Card(SIC)                
                    Add: subbname8090DEVCX6D00E8GE11(561558),   -- CX68E8GED, 8-Port 100/1000Base-RJ45 Service Interface Card(SIC)                                                                                                                                                                                                                                                                                                                                                                                                                      
                    Add: subbname8090DEVCX6D00L4XF11(561559),   -- CX68L4XFD, 4-Port 10GBase LAN/WAN-SFP+ Service Interface Card(SIC)                                                                                                                                                                                                                                                                                                                                                                                                                           
                    Add: subbname8090DEVCX6D00L2XF11(561560),   -- CX68L2XFC, 2-Port 10GBase LAN/WAN-SFP+ Service Interface Card(SIC)                                                                                                                                                                                                                                                                                                                                                                                                                           
                     "p"V5.67,
                     Add: fnamePTN7900TPC1AFBTBKP00A(229396),   --PTN 7900-12 Integrated Chassis Components
                     Add: bnamePTN7900TPA2XCS(229403),    --TPA2XCS,Switch Fabric Unit,1*1
                     Add: bnamePTN7900TPB2XCS(229404),    --TPB2XCS,Switch Fabric Unit,1*1
                     Add: bnamePTN7900TPC1XCS(229405),    --TPC1XCS,Switch Fabric Unit,1*1
                     Add: bnamePTN7900TPB2CXP(229406),    --TPB2CXP,System Control Communication and Switch Fabric Process Unit,1*1
                     Add: bnamePTN7900TPC1CXP(229407),    --TPC1CXP,System Control Communication and Switch Fabric Process Unit,1*1
                     Add: virentPTN7900TPB2VXCS(229472),      --TPB2VXCS, Switch Fabric Unit Board,1*1
                     Add: virentPTN7900TPC1VXCS(229473),      --TPC1VXCS, Switch Fabric Unit Board,1*1
                    "�"V5.66,
                     Modify: bnameH821BVCM(148532) to subbnameH821BVCM(155956) -- Virtual  BVCM subboard of MA5694_8VD,  
                     Add: bnameH831ASLB(155985),        -- 8 POTS Vitual Board of MA5612
                     Add: bnameHS22COME(155987),        -- 4-channel Serial Board of MA5621A, RS485 mode only
                     Add: bnameH832CCIQ(155988),        -- Master board of MA5621A(SD5132) Box type device
                    "�"V5.65,
                    Add: fname8031CX600-X3A(536921),           -- Quidway CX600-3A Carrier Switch.
                    Add: fname8090NE40E-X3A(562034),          -- Quidwy Ne40E-3A FRAME.
                    Add: fnameME60-X3A(159758),              -- Quidway ME60-X3A FRAME.
                    Add: fnamePTN6900-3A(229395),             --Integrated Chassis Components (PTN 6900-3A).
            Add: fname8031CX600-X3ADO(536921),           -- Quidway CX600-3ADO Carrier Switch.
                     "�"V5.64,  
                    Add: NE08E/05E fname from 704512 to 704522      
                    Add: NE08E/05E card from 704512 to 704545
                    Add: NE08E/05E bname from 704512 to 704523 
                                        
                    Add: fnameETN500 708608/708609/708610
                    Add: subnameETN 708608/708609/708610
                    Add: virentETN708608/708609/708610

                    Add: ATN fname/card/bname. ">"V5.63,
                     Add: bnameH809EPBD(146147),        --  8EPON board.
                     Add: bnameH801TOPB(146148),        --  TDM interface board of the MA5600.
                     Add: bnameH80DCCPE(146149),        --  64-channel POTS(combo) + Vectoring board of MA5600T device.
                     "�"V5.62,
                      Add: fnameMA5694-8VD-H821MABC(145954),      -- Virtual frame of the MA5694-8VD-H821MABC.
                      Add: bnameH821BVCM(148532),       -- Virtual H821BVCM board.
                      Add: bnameH821CCICM(148533),      -- Master board of MA5694_8VD device.
                      Add: gfast-port(807),             -- G.FAST PORT. 
                     " �"V5.61,
                 Add: virent8090DEVCR5DSFUIK06C(564902),     -- V8R7C10 for CR5DSFUIK06C(SBOM), X16 400G Cluster
             "u"V5.60,
                     Add: fnameMA5800H901BPMB(148502),   -- Backplane of the MA5800 
                     Add: bnameH901GPSF(148529),         --  16*GPON board of MA5800
                     Add: bnameH901EPHF(148530),         --  16*EPON board of MA5800
                     Add: bnameH901XEHD(148531),         --  8*10G EPON board of MA5800
                     "�"V5.58,
                      Modify:fnameCPF104 to fnameRPF106. 
                      Modify:bnameCPF318Power to bnameCPF318-EN11PDBE.
                      Modify:bnameRCM08 to bnameRPR008S-B.
                      Modify:bnameETP4890A2-Power(786642) to bnameETP4890A2-Power(786643).
              Modify:bnameCFS01 to CFS01Monitor.
                      Delete:bnameCFS01Power(786652).
              "e"V5.57,
              Add:subbname8090DEVBGWD0L5XFE70(561438),   -- 5-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP100)
              Add:subbname8090DEVBGWD0LAXFE70(561439),   -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card(BP200)
              Add:subbname8090DEVME0D0LAXFH7H(561440),   -- 10-Port 10GBase LAN/WAN-SFP+ Flexible Card H(BP240-H) 
              "S"V5.56,
                      Add: MA5811SH821MABC(145953),      -- Virtual frame H821MABC of MA5811S device.
                      Add: bnameHS35FDEM(155968),       -- 16G.FAST+VECTOR board of MA5811S FTTS device.
                      Add: bnameH835FDEM(155969),       -- Master board of MA5811S-DE16 FTTS device.
                      "f"V5.55,
                     Add: fnameCPF104(786434),             --The RPS's with BT-C Power Frame backplane.
                     Add: fnameCFS02(786435),              --The RPS's with BT-C Fan Frame.  
                     Add: fnameETP4830-A1(786436),         --The RPS's with AC-DC System Frame.  
                     Add: fnameETP4890-A2(786437),         --The RPS's with AC-DC System Frame.    
                     Add: fnameETP48150-A3(786438),        --The RPS's with AC-DC System Frame. 
                     Add: fnameCPF104(786439),             --The RPS's with RTF-V Power Frame backplane.

                     
                     Add: bnameCPF104Power(786637),        --BT-C Power input module board,with 0 port 
                     Add: bnameCCM08B(786638),             --BT-C Up converter module board,with 8 DC output ports
                     Add: bnameRCM08(786639),              --BT-C Down converter module board,with 12 DC input ports
                     Add: bnameCFS02Power(786640),         --BT-C Power input module board,with 0 port  
                     Add: bnameCFS02Monitor(786641),       --BT-C Fan module board,with 3 fan ports
                     Add: bnameETP4830-A1Power(786642),    --BT-C AC-DC System monitor input module board,with 0 port  
                     Add: bnameETP4890-A2Power(786642),    --BT-C AC-DC System monitor input module board,with 0 port
                     Add: bnameETP48150-A3Power(786644),   --BT-C AC-DC System monitor input module board,with 0 port
                     Add: bnameSMU01B(786645),             --AC-DC System monitor Monitoring module board 
                     Add: bnameSMU01C(786657),             --AC-DC System monitor Monitoring module board
                     Add: bnameR4830G1(786646),            --AC-DC System Power Supply Unit 
                     Add: bnameR4830N2(786647),            --AC-DC System Power Supply Unit 
                     Add: bnameR4815G1(786648),            --AC-DC System Power Supply Unit 
                     Add: bnameR4815N1(786649),            --AC-DC System Power Supply Unit 
                     Add: bnameCFS01Power(786650),         --RTF-C Power input module board,with 0 port 
                     Add: bnameCVM02(786651),              --RTF-V Up converter module board,with 8 DC output ports
                     Add: bnameCFS01Power(786652),         --RTF-V Power input module board,with 0 port 
                     Add: bnameRPF106Power(786653),        --RTF-V Power input module board,with 0 port 
                     Add: bnameRMU01(786654),              --RTF-V Monitoring module board,with 0 port 
                     Add: bnameRFS01(786655),              --RTF-V Fan module board,with 3 fan ports 
                     Add: bnameRVM04(786656),              --RTF-V Down converter module board,with 12 DC input ports                              
                     ""V5.54,
                     Add: fnameCE681048S4QLI(688140),          -- CloudEngine CE6810-48S4Q-LI Switch (48-Port 10GE SFP+,4-Port 40GE QSFP+)
                     Add: fnameCE681048SLI(688141),            -- CloudEngine CE6810-48S-LI Switch (48-Port 10GE SFP+)
                     Add: fnameCE12804S(688142),               -- CloudEngine 12800S,CE01PBK04AS,CE12804S Power Backplane,1*1
                     Add: fnameCE12808S(688143),               -- CloudEngine 12800S,CE01BAK08AS,CE12808S Backplane A,1*1
                     Add: fnameCE685048S6QHI(688144)           -- CloudEngine CE6850-48S6Q-HI Switch (48-Port 10GE SFP+,6-Port 40GE QSFP+)                            
                     Add: bnameCEL48GTEF(688187),              -- Manufactured Board,iCE,CE-L48GT-EF,48-Port 10/100/1000BASE-T Interface Card(EF,RJ45)-1*1
                     Add: bnameCE685048S6QHI(688189),          -- CloudEngine 6800,CE6850-48S6Q-HI Switch(48-Port 10GE SFP+,6-Port 40GE QSFP+)
                     Add: bnameCEMPUAS(688190),                -- Manufactured Board,CloudEngine 12800S,CE-MPUA-S
                     Add: bnameCEL48XTEC(688191),              -- Manufactured Board,CloudEngine 12800,CE-L48XT-EC,1*1
                     Add: bnameCEL12CFEG(688192),              -- Manufactured Board,CloudEngine 12800,CE-L12CF-EG,12-Port-100GE Interface Card(EG,CFP2),1*1
                     Add: bnameCEFWA(688193),                  -- Manufactured Board,CloudEngine 12800,CE-FWA,Fire Wall Card A,1*1
                     Add: bnameCEL08CCEC(688194),              -- Manufactured Board,CloudEngine 12800,CE-L08CC-EC,1*1
                     Add: bnameCEL24LQEC1(688195),             -- Manufactured Board,CE-L24LQ-EC1
                     Add: bnameCESFUBS(688196),                -- Manufactured Board,CloudEngine 12800S,CE-SFUB-S
                     Add: bnameCESFUCS(688197),                -- Manufactured Board,CloudEngine 12800S,CE-SFUC-S,CE-SFUC-S,1*1
                     Add: addentnameCMU(688128),               -- CMU  Module
             "%u"V5.50,
        add by dinglingfeng 20140630 
                Add:  bnameE8000EKW51ESPU(16748544),        --SPU Board ,Service Processing Unit
                Add:  bnameE8000EDCU(16748545),         --DCU Board ,Detection and Clean Unit
                Add:  bnameE8000ESUP3SPUA02(16748546),          --Service Processing Unit,with HS General Security Platform Software
                Add:  bnameE8000ECR52LPUKD1(16748547),     --Flexible Card Line Processing Unit(LPUF-21,2 sub-slots) B
                Add:  bnameE8000ESUP3SPUA02IPS(16748548),  --IPS Service Processing Unit,with HS General Security Platform Software
                Add:  bnameE8000EKW51ESPUIPS(16748549),      --IPS SPU Board ,Service Processing Unit
        Add:  bnameE8000ESU91SPUC(16748550),      --Eudemon8000E-X,SU91SPUC,X3 Service Processiong Unit(Base Board),with HS General Security Platform Software
        Add:  bnameE8000ESU91SPUD(16748551),      --Eudemon8000E-X,SU91SPUD,X8&X16 Service Processiong Unit(Base Board),with HS General Security Platform Software
                Add:  bnameE8000ESU91SPUC01(16748552),    --Eudemon8000E-X,SU91SPUC01,40G X3 Firewall Service Processing Unit ,with HW General Security Platform Software,include SPUC and 1*SPCC01
        Add:  bnameE8000ESU91SPUC02(16748553),    --Eudemon8000E-X,SU91SPUC02,20G X3 Firewall Service Processing Unit(oversea),with HW General Security Platform Software,include SPUC and 1*SPCB02
        Add:  bnameE8000ESU91SPUC03(16748554),    --Eudemon8000E-X,SU91SPUC03,60G X3 Firewall Service Processing Unit ,with HW General Security Platform Software
        Add:  bnameE8000ESU91SPUD01(16748555),    --Eudemon8000E-X,SU91SPUD01,40G X8&X16 Firewall Service Processing Unit ,with HW General Security Platform Software,include SPUD and  1*SPCC01
        Add:  bnameE8000ESU91SPUD02(16748556),    --Eudemon8000E-X,SU91SPUD02,80G X8&X16 Firewall Service Processiong Unit,with HW General Security Platform Software,include SPUD and 1*SPCB01
        Add:  bnameE8000ESU91SPUD03(16748557),    --Eudemon8000E-X,SU91SPUD03,20G X8&X16 Firewall Service Processing Unit(oversea),with HW General Security Platform Software,include SPUD and 1*SPCB02
                Add:  bnameE8000ESU91SPUC04(16748570),    --Eudemon8000E-X,SU91SPUC04,40G X3 Firewall Service Processing Unit ,Double CPUs,with HW General Security Platform Software,include SPUC and 1*SPCB04
                Add:  bnameE8000ESU91SPUD05(16748571),    --Eudemon8000E-X,SU91SPUD05,40G X8&X16 Firewall Service Processing Unit ,Double CPUs,with HW General Security Platform Software,include SPUD and  1*SPCB04
                Add:  bnameE8000ESU91LPUF100CA00(16748572), --Eudemon8000E-X,SU91LPUF100CA00,Flexible Card Line Processing Unit(LPUF-101,4 sub-slots),with HW General Security Platform Software
                Add:  bnameE8000ESU91LPUF100CA0(16748573),  --Eudemon8000E-X3,SU91LPUF100CA01,X3 Flexible Card Line Processing Unit(LPUF-100,4 sub-slots),with HW General Security Platform Software
                Add:  bnameE8000ESU91LPUI100CA00(16748574), --Eudemon8000E-X,SU91LPUI100CA00,10-Port 10GBase LAN/WAN-SFP+ Integrated Line Processing Unit (LPUI-100) ,with HW General Security Platform Software
                Add:  bnameE8000ESU91E1NC00(16748575),  --Eudemon8000E-X,SU91E1NC00,1-Port 100GBase-CFP Integrated Line Processing Unit (LPUI-101),with HW General Security Platform Software
                Add:  bnameEudemon8000ESU91EDXFB0(16748576),    --Eudemon8000E-X,SU91EDXFB0,16-Port 10GBase LAN-SFP+ Integrated Line Processing Unit (LPUI-100) ,with HW General Security Platform Software
                Add:  bnameEudemon8000ESU91E4XFA0(16748577),    --Eudemon8000E-X,SU91E4XFA0,4-Port 10GBase LAN-SFP+ Flexible Card(P100,1/4wide,Occupy one sub-slots)
                Add:  bnameEudemon8000ESU91LBXF0(16748578), --Eudemon8000E-X,SU91LBXF0,12-Port 10G Base LAN/WAN-SFP+ Flexible Card A(P120-A)

                Add:  subbnameEudemon8000ECR52E1XXT0(16748544), --CR52E1XX0,1*10GBase LAN-XFP Optical Interface LPU A
                Add:  subbnameEudemon8000ECR52W1XXT0(16748545), --CR52W1XX0,1*10GBase WAN-XFP Optical Interface LPU A
                Add:  subbnameEudemon8000ECR52P1XXT0(16748546), --CR52P1XX0,1*OC-192c/STM-64c POS-XFP Optical Interface LPU A
                Add:  subbnameEudemon8000ECR52R1XF(16748547),   --CR52R1XX0,1*OC-192c/STM-64c RPR-XFP Optical Interface LPU A
                Add:  subbnameEudemon8000ECR52E5GF(16748548),   --CR52E5GF,5-port GbE SFP Optical Interface LPU G
                Add:  subbnameEudemon8000ECR52C8E10(16748549),  --CR52C8E10,8-Port Channelized E1-RJ45 Flexible Service Interface Card
                Add:  subbnameEudemon8000ECR52C8T10(16748550),  --CR52C8T10,8-Port Channelized T1-RJ45 Flexible Service Interface Card
                Add:  subbnameEudemon8000ECR52C1CF1(16748551),  --CR52C1CF1,1 port Channelized OC-3/STM-1 Flexible Service Interface Card
                Add:  subbnameEudemon8000ECR52L1XX0(16748552),  --1-port 10GBase WAN/LAN XFP Flexible Interface Daughter Card
                Add:  subbnameEudemon8000ECR52EBGF0(16748553),  --12-port 100/1000Base-X SFP Flexible Interface Daughter Card
                Add:  subbnameEudemon8000ECR52EBGE0(16748554),  --12-port 10/100/1000Base-TX RJ45 Flexible Interface Daughter Card
                Add:  subbnameEudemon8000ECR52P1XXBZ0(16748555),--1 port OC-192c/STM-64c POS-XFP Flexible Card
        Add:  subbnameEudemon8000ESU91L4XX00(16748556),    --SU91L4XX00 4 Port 10G Base WAN/LAN-XFP
            Add:  subbnameEudemon8000ESU91L4XX01(16748557),    --SU91L4XX01 4 Port 10G Base LAN/LAN-XFP  
            Add:  subbnameEudemon8000ESU91SPCB02(16748558),    --Eudemon8000E-X,SU91SPCB02,20G Firewall Performance Expansion Card(oversea),with HS General Security Platform Software  
            Add:  subbnameEudemon8000ESU91SPCC01(16748559),    --Eudemon8000E-X,SU91SPCC01,40G Firewall Processing Card,with HS General Security Platform Software
            Add:  subbnameEudemon8000ESU91SPCB01(16748560),    --Eudemon8000E-X,SU91SPCB01,80G Firewall Processing card,with HS General Security Platform Software
            Add:  subbnameEudemon8000ESUP5SPCC(16748561),          --SUP,SUP5SPCC,Service Processing Card,1*1
                Add:  subbnameEudemon8000ESUP5SPCA(16748562),          --SUP,SUP5SPCA,Service Processing Card,1*1
                 
                Add:  subbnameEudemon8000ESU91SPCB04(16748572), --Eudemon8000E-X,SU91SPCB04,40G Firewall Processing card,Double CPUs,with HW General Security Platform Software
                Add:  subbnameEudemon8000ESU91IPSC01(16748573), --Eudemon8000E-X,SU91IPSC01,IPS Service Processing Card, with HW General Security Platform Software
                Add:  subbnameEudemon8000ESU91L5XXA0(16748574), --Eudemon8000E-X,SU91L5XXA0,5-Port 10GBase LAN/WAN-SFP+ Flexible Card A(P101,1/2wide,Occupy two sub-slots)
                Add:  subbnameEudemon8000ESU91EFGFA0(16748575), --Eudemon8000E-X,SU91EFGFA0,24-Port 100/1000Base-X-SFP Flexible Card(P100,1/2wide,Occupy two sub-slots)
                Add:  subbnameEudemon8000ESU91E1MCB(16748576),  --Eudemon8000E-X,SU91E1MCB,1-Port 40GBase LAN CFP Flexible Card(P100,1/2wide,Occupy two sub-slots)
                Add:  subbnameEudemon8000ESU91E4XFA0(16748577), --Eudemon8000E-X,SU91E4XFA0,4-Port 10GBase LAN-SFP+ Flexible Card(P100,1/4wide,Occupy one sub-slots)
                Add:  subbnameEudemon8000ESU91LBXF0(16748578),  --Eudemon8000E-X,SU91LBXF0,12-Port 10G Base LAN/WAN-SFP+ Flexible Card A(P120-A)
                Add:  bnameSUA2MPUA(16719976),          --USG6600 Main Processing Unit
                Add:  bnameSUA2CSPUA(16719977),         --USG6600 Content Security Process Unit
                Add:  bnameSUA2X2G8(16719978),          --USG6600 2*10GE Optical Ports+8GE Electric Ports Interface Card
                Add:  bnameSUA2E2XSF(16719979),         --USG6600 2*10GE Optical Ports Interface Card
                Add:  bnameSUE3E8GF(16719980),          --USG6600 8GE Optical Ports Interface Card
                Add:  bnameSUE3E4BY(16719981),          --USG6600 4GE Electric Ports Bypass Card
                Add:  bnameSUE3E8GE(16719982),          --USG6600 8GE Electric Ports Interface Card
                Add:  bnameSUE5MPUA(16719983),          -- USG3600 Main Processing Unit   
                Add:  bnameSUE5DSBB(16719984),          -- USG3600 HD Switch Board
                Add:  bnameSUA1MPUB(16719985),          -- USG3600 1U Main Processing Unit Board
                Add:  bnameSUE1EPSEC(16719986),         -- USG3600 The state password encryption Daughter card 
                Add:  bnameSUE5FIBA(16719987),    --Fixed Interface Board   
                Add:  bnameET1D2IPS0S00(16719988),    -- IPS Module A,with HW General Security Platform Software
                Add:  bnameET1D2FW00S00(16719989),    -- NGFW Module A,with HW General Security Platform Software
                Add:  bnameET1D2FW00S01(16719990),    -- NGFW Module B,with HW General Security Platform Software
                Add:  bnameET1D2FW00S02(16719991),    -- NGFW Module C,with HW General Security Platform Software
                Add:  bnameLE1D2FW00S01(16719992),    -- NGFW Module B,with HW General Security Platform Software
                Add:  bnameSUE6MPUA(16719993),    -- Manufactured Board,USG6600,SUE6MPUA,Main Processing Unit Board
                Add:  bnameSUE3MPUA(16719994),    -- Manufactured Board,USG6300,SUE3MPUA,Main Processing Unit Board
                Add:  bnameSUE3BPKA(16719995),    -- USG6300,SUE3BKPA,1U BackPlane Board
                " Y"V5.37,
                      Merage VRP and IAS 'S mib together.
                      "F"V5.36,
                     Add: fnameCPF318(786432),       --The RPS's Power Frame backplane.
                     Add: fnameCFS01(786433),        --The RPS's Fan Frame.
                                          
                     Add: bnameCMU01(786632),              --Monitoring module board,with 0 port.
                     Add: bnameCFS01(786633),              --Fan module board,with 3 fan ports
                     Add: bnameCPF318Power(786634),        --Power input module board,with 0 port
                     Add: bnameCCM08(786635),              --Up converter module board,with 8 DC output ports
                     Add: bnameRC12S(786636),              --Down converter module board,with 12 DC input ports
                     
                     Add: fanPort(786932),                   --Fan module fan port          
                     Add: dcoutputPort(786933),              --Up converter module DC output port
                     Add: dcinputPort(786694),               --Down converter module DC input port                                
                     " �"V5.35,
                     Add: fnameMA5694SCLKH821MABC(147455), -- Virtual frame H821MABC of MA5694S  GE 1588V2 SLAVE DOCK device.
                     Add: bnameHS22GE3A(155984),           -- 3GE LAN board of the MA5694S.
                     " �"V5.34,
                     Add: bnameH801X2CK(146078),         --10GE synchronized Ethernet interface board
                     "K"V5.33,

                      Add: frameMA5611SDE48(DT)(143377) to frameMA5611SDE48-A(DT)(143377)
                      Add: bnameCCM(155982),       -- 48-channel Vectoring VDSL2 + POTS COMBO service board
                      Add: bnameVCP(155983),       -- 64-channel Vectoring VDSL2 + SPL service board
                      " �"V5.32,
                      Add: bnameH822CCKRC(155980),        -- Master board of MA5633(sd5130) device.
                      Add: bnameHS33CDAC(155981),         -- DOCSIS virtual board of MA5633. 
                      " �"V5.31,
                     Add: bnameH802SCUB(148011),         --  control board of MA5600T 
                     Add: bnameH806CAME(146077),         -- 48-channel ADSL combo service board
                     "�"V5.30,
                     Add: fnameMA5800H901BPLB(148501),     -- Backplane of the MA5800 
                     Add: bnameH901MPLA(148501),         --  control board of MA5800
                     Add: bnameH901MPLB(148502),         --  control board of MA5800
                     Add: bnameH901XGHD(148521),         --  8*10G GPON board of MA5800
                     Add: bnameH901GPHF(148522),         --  16*GPON board of MA5800
                     Add: bnameH901OGHK(148523),         --  48 P2P board of MA5800
                     Add: bnameH901NXED(148524),         --  8*10GE board of MA5800
                     Add: bnameH901OXHD(148525),         --  8*10GE extend board of MA5800
                     Add: bnameH901PILA(148526),         --  Power board of MA5800
                     Add: bnameH901CIUA(148527),         --  GPIO board of MA5800
                     Add: subbnameH901CKUA(148501),          -- Clock subboard of MA5800 H901MPLB
                      " v"V5.29,
                      Add: bnameH801MPWE(146076),          -- Power board of MA5608T. 
                      "�"V5.28,
                      Add: bnameH831EPFF(155965),          -- 2 GE Vitual Board of MA5612.
                      Add: bnameH82BDVJM(155966),          -- Master board of MA5611S-AE08(sd5130) FTTS device.
                      Add: bnameHS2BDVJM(155967),          -- 8 VDSL2 board of MA5611S-AE08(sd5130) FTTS device.
                      Add: frameMA5611SAE08(561221),       -- Virtual frame MA5611S-AE08 of MA5611S(sd5130) FTTS device. 
                      " �"V5.27,
                      Modify: frameMA5611SCE48(561206) to frameMA5611SDE48-TELUS(561206).
                      Modify: frameMA5611SDE48(561193) to frameMA5611SDE48-A(561193)
                      ""V5.26,
                      Add: bnameH823UPVBP(155976),         -- Master board of MA5611S-AE16(sd5130) FTTS device for Oman.
                      Add: bnameHS23UPVBP(155977),         -- 16 VDSL2 board of MA5611S-AE16(sd5130) FTTS device for Oman.
                      Add: bnameH826BVUP(155978),          -- Master board of MA5611S-DE16(sd5130) FTTS device for BT.
                      Add: bnameHS26BVUP(155979),          -- 16 VDSL2 board of MA5611S-DE16(sd5130) FTTS device for BT.
                      "�"V5.25,
                      Add: frameMA5611SCE48(561206),  -- Virtual frame MA5611S-CE48 of MA5611S(sd5103) FTTS device for TELUS.
                      Add: frameMA5611SAE16(561207),  -- Virtual frame MA5611S-AE16 of MA5611S(sd5130) FTTS device for Oman.
                      Add: frameMA5611SDE16(561208),  -- Virtual frame MA5611S-DE16 of MA5611S(sd5130) FTTS device for BT. 
                      " �"V5.24,
                      Add:     bnameH831EDTB(155975),          -- E1 board of MA5616 for CCUE and CCUD.
                      "1"V5.23,
                      Add:     fnameMA5633H821MABCS(561197),   -- Virtual frame H821MABCS of mini MA5633(sd5130) device.
                      Add:     bnameH822CCKRB(155973),         -- Master board of mini MA5633(sd5130) device.
                      Add:     bnameHS33CDAB(155974),          -- DOCSIS virtual board of mini MA5633.
                      Add:     subbnameH831UP2E(155952),       -- Auto adapt upstream subboard of MA5633, It supports EQAM.
                      Add:     subbnameH831UP2F(155953),       -- Auto adapt upstream subboard of MA5633, It not supports EQAM.
                      Add:     subbnameHS21PWBB(155954),       -- Virtual power subboard of MA5633.
                      Add:     subbnameHS21MIXB(155955),       -- Virtual mixer subboard of MA5633.
                      "�"V5.22,
                      Add:     bnameH80XVPG(146138),       -- support vector board of MA5600T.
                      Add:     bnameH806CCPE(146139),      -- 64-channel POTS(combo) + Vectoring board of MA5600T device.
                      Add:     bnameH801XGBD(146141),      -- 8 ports 10G GPON board.
                      Add:     bnameH803XEBD(146142),      -- 8 ports 10G EPON board.
                      Add:     bnameH805EPFD(146143),      -- 16EPON board.
                      Add:     bnameH802GPMD(146144),      -- 8GPON board.
                      Add:     bnameH805GPFD(146145),      -- 16GPON board.
                      Add:     bnameH802XEBD(146146),      -- 8 ports 10G EPON board.
                      Add:     bnameH802SCUH(148009),      -- control board of MA5600T.
                      Add:     bnameH802SCUV(148010),      -- control board of MA5600T.
                      "�"V5.21,
                      Add:     fnameMA5611SAE-48(561205),  -- Virtual frame H831MABC of MA5611S-AE48 device.
                      Modify: bnameH831PAVD(155919),       -- Double DC Power board H832PDVAA of  the  MA5616.
                      Modify: bnameH831PAVDA(155937),      -- Double DC Power board H831PAVDA of  the  MA5616, witch vector vp subboard.
                      Modify: bnameH831CCLF(155952),       -- Master board of MA5678(sd5130)device.
                    ""V5.20,
                      Modify: bnameH82DVCMM(155949),     -- Master board of MA5611S-DE48(sd5130) FTTS device.
                      Modify: bnameHS2DVCMM(155962),     -- 48 VDSL + Vectoring board of MA5611S-DE48(sd5130) device.
                      ""V5.19,
                      Add: frameMA5611SDE48(561193),  -- Virtual frame frameMA5611S-DE48 of MA5611S(sd5130) device.
                      Add: bnameH82DVCMM2(155949),    -- Master board of MA5611S-DE48(sd5130) FTTS device.
                      Add: bnameHS2DVCMM2(155962),    -- 48 VDSL + Vectoring board of MA5611S(sd5130) device.
                      Modify:fnameMA5694SDSLH831MABC to fnameMA5694SDSLH821MABC.
                      Modify:fnameMA5694SPONH831MABC to fnameMA5694SPONH821MABC.
                      " �"V5.18,
                      Add:     veiPort(805),                             -- Vei port of board NLV.
                      Add:     vdslNNIPort(806),                         -- VDSL upstream port.
                    " �"V5.17,
                      Add:     fnameMA5600H802Mabc(145952),     -- Backplane of the P300 broadband master Frame: H802MABC.
                    "~"V5.15,
                      Add:     bnameH801SPUC(155955),        -- Interface board.
                      Add:     bnameH802OPGE(146075),        -- H802OPGE BOARD
                      Add:     subbnameH801CKMD(888891),     -- Clock subboard.
                      Add:     bnameSHG(143447),             -- P300 32-channel G.SHDSL board of the SHG series.
                    "�"V5.15,
                      Add:     fnameMA5611SDE-48(561204),              --  Virtual frame H831MABC of MA5611S-DE48 north Americal device.
                      Add:     bnameH82BCVMM(155972),                  --  Master board of MA5611S-DE48 north Americal device.
                      Modidy:  fnameMA5611S-AE16(561191),              --  Virtual frame H831MABC of MA5611S-AE16(sd5130) device.
                    "H"V5.14,
                      Add:     fnameMA5694SDSLH821MABC(561199), -- Virtual frame H821MABC of MA5694S  DSL DOCK device.
                      Add:     fnameMA5694SPONH821MABC(561203), -- Virtual frame H821MABC of MA5694S  PON DOCK device.
                      Add:     bnameH822CC3G(155957),         --  DSL DOCK for MA5694S device.
                      Add:     bnameHS31EPFB(155959),         --  3GE LAN board of the MA5694S.
                      Add:     subbnameH831VD4A(155951),      -- VD4A  Subboard for MA5694S.
                      Add:     bnameH822UPWC(155970),         --  PON DOCK for MA5694S device.
                      Add:     bnameHS22GE4A(155971),         --  4GE LAN board of the MA5694S.

                      Add:     bnameHS22EPGE(155961),         -- Virtual 24GE board of the MA5821.
                      Add:     bnameH836VPAA(155963),      -- VPA  Subboard for MA5616.
                      Add:     bnameH832PDNAA(155964),        -- Power board for NLV  of the MA5616.
                      Add:     subbnameVPA(155950),           -- VECTOR Subboard VPA." �"V5.13,
                      Add:     fnameMA5633(147527),           --  MDU device MA5633 used as remote frame.
                    " �"V5.12,
                      Add: fnameMA5898H831Mabl(561202),  -- Backplane of the MA5898 master Frame: H831MABL.
                                        "�"V5.11,
                      Add:     bnameH801MCUE(148006),         --  MA5608T control board H801MCUE.
                      Add:     bnameH801GPMD(148007),         --  gpon board of the MA5600T.
                      Add:     bnameH801SCUV(148008),         --  MA5600T control board H801SCUV.
                      Add:     subbnameH801CPCC(204934),      --  Clock subboard for the H801MCUE board." �"V5.10,
                      Add: fnameMA5633H821Mabco(561192),  -- Virtual frame H821MABCO of MA5633(sd5130) device.
          ""V5.09,
                      Add:     bnameH601XP1A(204880),           -- UA5000 XPON board which unites Broadband and narrowband has 5*FE Electric Ports, 4*E1 Ports, 2*GE Optical Ports, 1GE Electric Port and 1GPON Port
                                        " �"V5.08,
                      Add: fnameMA5622A-16(561200),    -- Virtual frame H831MABC of MA5622A-16 device.
                      Add: fnameMA5622A-8(561201),     -- Virtual frame H831MABC of MA5622A-8 device.
          "	"V5.07,
                      Add: fnameMA5818H831Maba(561195),  -- Backplane of the MA5818 master Frame: H831MABA.
                      Add: fnameMA5818H831Mabb(561196),  -- Backplane of the MA5818 master Frame: H831MABB.
                                        ",�"V5.06,

              Add:  fnameSU1Z21UHA(16715776),                   -- USG2200,SU1Z21UHA,USG2210 Host
                      Add:  fnameSU1Z21UHB(16715777),                   -- USG2200,SU1Z21UHB,USG2220 Host
                      Add:  fnameSU1Z21UHC(16715778),                   -- USG2200,SU1Z21UHC,USG2230 Host
                      Add:  fnameSU1Z21UHD(16715779),                   -- USG2200,SU1Z21UHD,USG2250 Host
                      Add:  fnameSU1Z22UHA(16715780),                   -- USG2200,SU1Z22UHA,USG2210 Host,HuaweiSymantec Overseas
                      Add:  fnameSU1Z22UHB(16715781),                   -- USG2200,SU1Z22UHB,USG2220 Host,HuaweiSymantec Overseas
                      Add:  fnameSU1Z22UHC(16715782),                   -- USG2200,SU1Z22UHC,USG2230 Host,HuaweiSymantec Overseas
                      Add:  fnameSU1Z22UHD(16715783),                   -- USG2200,SU1Z22UHD,USG2250 Host,HuaweiSymantec Overseas
                      Add:  fnameFWGZ21UHA(16715784),                   -- Quidway Eudemon,FWGZ21UHA,E200E-C Host
                      Add:  fnameFWGZ21UHD(16715785),                   -- Quidway Eudemon,FWGZ21UHD,E200E-F Host
                      Add:  fnameSRGZ2020(16715786),                    -- SRG20 Secure Routing Gateway,SRGZ2020,SRG20-20 AC Host
                      Add:  fnameSRGZ2021(16715787),                    -- SRG20 Secure Routing Gateway,SRGZ2021,SRG20-21 AC Host
                      Add:  fnameSRGZ2030(16715788),                    -- SRG20 Secure Routing Gateway,SRGZ2030,SRG20-30 AC Host
                      Add:  fnameSRGZ2031(16715789),                    -- SRG20 Secure Routing Gateway,SRGZ2031,SRG20-31 AC Host
                      Add:  fnameSRGZ2020IE(16715790),                  -- SRG20 Secure Routing Gateway,SRGZ2020IE,SRG20-20 AC Host
                      Add:  fnameSRGZ2021IE(16715791),                  -- SRG20 Secure Routing Gateway,SRGZ2021IE,SRG20-21 AC Host
                      Add:  fnameSRGZ2030IE(16715792),                  -- SRG20 Secure Routing Gateway,SRGZ2030IE,SRG20-30 AC Host
                      Add:  fnameSRGZ2031IE(16715793),                  -- SRG20 Secure Routing Gateway,SRGZ2031IE,SRG20-31 AC Host
                      Add:  fnameSU0Z11UHB(16715794),                   -- USG2100-SU0Z11UHB-USG2130 Host,HuaweiSymantec Overseas
                      Add:  fnameSU0Z13UHB(16715795),                   -- USG2100-SU0Z13UHB-USG2160 Host,HuaweiSymantec Overseas
                      Add:  fnameSRGZ23UHT(16715796),                   -- SRG3260,SRGZ23UHT,SRG3260 Host,with HS General Security Platform Software
                      Add:  fnameSU2Z12UAH(16715797),                   -- USG5100,SU2Z12UAH,USG5120 AC Host,with HS General Security Platform Software
                      Add:  fnameSU2Z12UDH(16715798),                   -- USG5100,SU2Z12UDH,USG5120 DC Host,with HS General Security Platform Software
                      Add:  fnameSU2Z13UHT(16715799),                   -- USG5100,SU2Z13UHT,USG5150 Host,with HS General Security Platform Software
                      Add:  fnameSU2Z22UAH(16715800),                   -- USG5100,SU2Z22UAH,USG5120BSR AC Host,with HS General Security Platform Software
                      Add:  fnameSU2Z22UDH(16715801),                   -- USG5100,SU2Z22UDH,USG5120BSR DC Host,with HS General Security Platform Software
                      Add:  fnameSU2Z23UHT(16715802),                   -- USG5100,SU2Z23UHT,USG5150BSR Host,with HS General Security Platform Software
                      Add:  fnameSRGZ12UAH(16715803),                   -- SRG3230,SRGZ12UAH,SRG3230 AC Host,with HS General Security Platform Software
                      Add:  fnameSRGZ22UAH(16715804),                   -- SRG3240,SRGZ22UAH,SRG3240 AC Host,with HS General Security Platform Software
                      Add:  fnameSRGZ22UDH(16715805),                   -- SRG3240,SRGZ22UDH,SRG3240 DC Host,with HS General Security Platform Software
                      Add:  fnameSRGZ13UHT(16715806),                   -- SRG3250,SRGZ13UHT,SRG3250 Host,with HS General Security Platform Software
                      Add:  fnameSU1ZAH10FE(16715807),              -- USG2200,SU1ZAH10FE,USG2210 AC Basic Configuration,(2GE,10FE,with 2*5FE MIC),with HS General Security Platform Software
                      Add:  fnameSU2Z42UAH(16715808),                 -- USG5100,SU2Z42UAH,USG5120BSR AC Host,with HS General Security Platform Software
                      Add:  fnameSU2Z43UHTO1(16715809),               -- USG5100,SU2Z43UHT,USG5150BSR Host,with HS General Security Platform Software
                      Add:  fnameSU2Z43UHTO2(16715810),               -- USG5500 1U Frame Unit
                      Add:  fnameSU2Z43UHT(16715811),                 -- USG5500 3U Frame Unit
              Add:  fnameSUAB13UAC(16715812),               -- USG6600 SUAB13UAC  Frame Unit
              Add:  fnameNGFW1UL2(16715813),                    -- USG3600 L2 Frame Unit     
              Add:  fnameNGFW1UL1(16715814),                    -- USG3600 L1 Frame Unit
              Add:  fnameNGFWSSM(16715815),                     -- NGFW SSM Frame Unit
                      Add:  bnameSU01MPUA(16719922),          -- SRG20,SU01MPUA,SRG20  Main Processing Unit ,2*1
                      Add:  bnameSU01MPUB(16719923),          -- SRG20,SU01MPUB,SRG20  Main Processing Unit ,2*1
                      Add:  bnameSU01MPUC(16719924),          -- SRG20,SU01MPUC,SRG20  Main Processing Unit ,2*1
                      Add:  bnameSU01ADPA(16719925),          -- SRG20,SU01ADPA,ADSL2+Multi-PVCs,2*2
                      Add:  bnameSU11SMX01(16719926),         -- Safety Product,SRG20,SU11SMX01,Enhanced Services Platform,ultra-low-end ,with CF Card, no Hard Disk
                      Add:  bnameSU11DMX02(16719927),         -- Safety Product,SRG20,SU11DMX02,Enhanced Services Platform,low-end , 2.5'' Hard Disk
                      Add:  bnameSU11DFX03(16719928),         -- Safety Product,SRG20,SU11DFX03, Enhanced Services Platform,mid-range , 2.5'' Hard Disk
                      Add:  bnameSU11DFX04(16719929),         -- Safety Product,SRG20,SU11DFX04, Enhanced Services Platform,mid-range , two 2.5'' Hard Disk
                      Add:  bnameSU11DFX05(16719930),         -- Safety Product,SRG20,SU11DFX05, Enhanced Services Platform,high-end ,with CF Card, two 2.5'' Hard Disk
                      Add:  bnameFWG2MPUA(16719931),          -- USG2200,FWG2MPUA,Main Process Unit Board,1*1
                      Add:  bnameSU11ADPA(16719932),          -- SRG20,SU11ADPA,ADSL2+Multi-PVCs,with HS General Security Platform Software,1*1
                      Add:  bnameFWF1E1FE(16719933),          -- USG2100,FWF1E1FE,1-Port Fast Ethernet Electrical Interface Board(RJ45),3*1
                      Add:  bnameSU11EPSEC(16719934),         -- USG5100,SU11EPSEC,High Speed IPsec Card,with HS General Security Platform Software
                      Add:  bnameSU51E4BY(16719935),          -- USG5100,SU51E4BY,4GE Electric Ports Bypass Card,with HS General Security Platform Software,1*1 duplicated with bnameSU51E4BY(16719960) add 'O'
                      Add:  bnameWCDMA(16719955),             --SVN5300,Security 3G board(WCDMA)
                      Add:  bnameTD-SCDMA(16719956),          --SVN5300,Security 3G board(TD-SCDMA)
                      Add:  bnameCDMA2000(16719957),          --SVN5300,Security 3G board(CDMA2000)
                      Add:  bnameSU51MPUB(16719958),          --USG5500,SU51MPUB,1U Main Processing Unit,1*1
                      Add:  bnameSU51SACC(16719959),          --USG5500,SU51SACC,Service Accelerate Card,1*1  duplicated with bnameSU51SACC(16719967) add 'O'
                      Add:  bnameSU51E4BY(16719960),          --USG5500,SU51E4BY,4GE Electric Ports Bypass Card,with HS General Security Platform Software,1*1
                      Add:  bnameSU51MPUA(16719961),          --USG5500,SU51MPUA,Main Processing Unit,1*1
                      Add:  bnameSU51X2G8(16719962),          --USG5500,SU51X2G8,2*10GE Optical Ports+8GE Electric Ports Interface Card,with HS General Security Platform Software,1*1
                      Add:  bnameSU51E2XSM(16719963),         --USG5500,SU51E2XSM,2*10GE Optical Ports Interface Card,with HS General Security Platform Software,3*1
                      Add:  bnameSU51E8GF(16719964),          --USG5500,SU51E8GF,8GE Optical Ports Interface Card,with HS General Security Platform Software,2*1
                      Add:  bnameSU51E8GE(16719965),          --USG5500,SU51E8GE,8GE Electric Ports Interface Card,with HS General Security Platform Software,1*1
                      Add:  bnameSU51E2XSF(16719966),         --USG5500,SU51E2XSF,2*10GE Optical Ports Interface Card,with HS General Security Platform Software,1*1
                      Add:  bnameSU51SACC(16719967),          --USG5500,SU51SACC,Service Accelerate Card,1*1
                      Add:  bnameSU51F2BY(16719968),          --USG5500,2 Link LC/UPC Optical Interface Bypass Protect Card
                      Add:  bnameSU51E8GFF(16719969),         --USG5500,8GE Optical Ports FIC Interface Card
                      Add:  bnameSU71DFX01(16719970),         --Safety Product,NIP5100,SU71DFX01,Enhanced Services Platform,High-end,for IPS
                      Add:  bnameSU51ESPA(16719971),          --NIP5100,ESP,SU51ESPA,X86 Process Card,1*1
                      Add:  bnameSU51ESPC(16719972),          --NIP5100,ESP,SU51ESPC,IPS Process Card,1*1
                      Add:  bnameSU51F2BY01(16719973),        --USG5500,SU51F2BY01,2 Link LC/UPC Multimode Optical Interface Bypass Protect Card,with HS General Security Platform Software
                      Add:  bnameSU51F2BY02(16719974),        --USG5500,SU51F2BY02,2 Link LC/UPC Singlemode Optical Interface Bypass Protect Card,with HS General Security Platform Software
                      Add:  bnameSUA1CPUA(16719975),          --Eudemon1000E-N CPU Card
                      Add:  bnameE8000ESU91SPUC(16748550),    --Eudemon8000E-X,SU91SPUC,X3 Service Processiong Unit(Base Board),with HS General Security Platform Software
                      Add:  bnameE8000ESU91SPUD(16748551),    --Eudemon8000E-X,SU91SPUD,X8&X16 Service Processiong Unit(Base Board),with HS General Security Platform Software
                      Add:  subbnameSVN5500CN1620(16740353),  -- SVN5500,SE41HSVA,High Speed SSL VPN Card,with HS General Security Platform Software,1*1
                      Add:  subbnameSUP34SFPCard(16732162),   --SUP,SUP34SFP,4-port GE Optical Interface Board(SFP),1*2
                      Add:  subbnameEudemon8000ESU91L4XX00(16748556),      --SU91L4XX00 4 Port 10G Base WAN/LAN-XFP
                      Add:  subbnameEudemon8000ESU91L4XX01(16748557),      --SU91L4XX01 4 Port 10G Base LAN/LAN-XFP
                      Add:  subbnameEudemon8000ESU91SPCB02(16748558),      --Eudemon8000E-X,SU91SPCB02,20G Firewall Performance Expansion Card(oversea),with HS General Security Platform Software
                      Add:  subbnameEudemon8000ESU91SPCC01(16748559),      --Eudemon8000E-X,SU91SPCC01,40G Firewall Processing Card,with HS General Security Platform Software
                      Add:  subbnameEudemon8000ESU91SPCB01(16748560),      --Eudemon8000E-X,SU91SPCB01,80G Firewall Processing card,with HS General Security Platform Software
                     
                                        "l"V5.05,
                      Add:  frameMA5611S-DE16(561194),  -- Virtual frame MA5611S-DE16 of MA5611S FTTS device.
                      Add:  bnameHS26BVVS(155950),      -- 16 VDSL + Vectoring board of MA5611S FTTS device.
                      Add:  bnameH826BVVS(155951),      -- Master board of MA5611S FTTS device.
                                        " �"V5.03,
                      Modidy:  frameMa5662AH831MABC(561177),    -- Virtual Backplane of MA5662(SD5103) , master Frame:MA5662(SD5103).
                                        " �"V5.02,
                      Add:     bnameH801XESD(146137),        --  8 ports 10G EPON board of MA5600T.
                                        " o"V5.01,
                      Add:     subbnameVPD(155949),      -- VECTOR Subboard VPD
                      "a"V5.00,
                      Add: fnameMA5611SH831Mabc(561191),  -- Virtual frame H831MABC of MA5652(sd5130) device.
                      Add: bnameH823UPVB(155947),         -- Master board of MA5652(sd5130) device.
                      Add: bnameHS23UPVB(155948),        -- 16 VDSL + Vectoring board of MA5652(sd5130) device.
                      " �"V4.99,
                      Add: bnameHS3BCVSB(155945),  -- 16 VDSL+16 POTS combo board of MA5622A.
                      Add: bnameHS3BCVSD(155946),  --  8 VDSL+ 8 POTS combo board of MA5622A.
                      " {"V4.98,
                      Add:     bnameH801MCUD1(148005),        --  control board of MA5608T.
                      "["V4.97,
                      Add: fnameMA5821H821Mabc(561189),  -- Virtual frame H821MABC of MA5821(sd5133) device.
                      Add: fnameMA5822H821Mabc(561190),  -- Virtual frame H821MABC of MA5822(sd5133) device.
                      Add: bnameH825XPUB(155944),        -- Master board of MA582x(sd5133)device.
                      "["V4.96,
                      Add: fnameMA5821H821Mabc(561189),  -- Virtual frame H821MABC of MA5821(sd5133) device.
                      Add: fnameMA5822H821Mabc(561190),  -- Virtual frame H821MABC of MA5822(sd5133) device.
                      Add: bnameH825XPUB(155942),        -- Master board of MA582x(sd5133)device.
                      " �"V4.95,
                      Add:     bnameH801SPUF(146073),        -- interface board.
                      Add:     bnameH801MPWD(146074),        -- Power board of MA5608T.
                      " �"V4.94,
                      Add:     bnameH801SCUK(148003),         --  MA5600T control board H801SCUK.
                      Add:     bnameH801SCUE(148004),         --  MA5600T control board H801SCUE.
                      " �"V4.93,
                      Modidy:  fnameMA5608H801Mabr(147525),    -- Backplane of the P300 broadband medium-capacity master Frame: H801MABR
                      " �"V4.92,
                      Add:     bnameH802SCUN(148001),         --  MA5600T control board H802SCUN.
                      Add:     bnameH801SPUH(148002),         --  interface board of the MA5600T.
                      " �"V4.91,
                      Add:     fnameMA5623AR(147526),          --  MDU device MA5623A used as remote frame.
                    "S"V4.90,
                      Modidy:  fnameMA5694H821Mabc(561187),    -- Virtual frame H821MABC of MA5694(sd5130) device.
                      Modidy:  bnameH821CCIC(155935),          -- Master board of MA5694(sd5130)device.
                      Modidy:  bnameHS21GE4A(155936),          -- 4GE baoard for MA5694.
                      "x"V4.89,
                      Add:     bnameH831PAVD(155942),          -- 400W AC for MA5616.
                      Add:     bnameH831PAVDA(155943),         -- 400W AC+Vector for MA5616.
                      Add:     subbnameH833XP1A(155935),       -- 10 GPON Subboard
                      Add:     subbnameH833XP1C(155936),       -- 10 GPON Subboard
                      "�"V4.88,
                      Add:     bnameH832PDVAA(155933),   -- Double DC Power board H832PDVAA of  the  MA5616, supportting vector vp subboard.
                      Add:     subbnameVPB(155934),      -- VECTOR Subboard VPB
                      Update:  bnameVPB(155922)
                      Modidy:  bnameH831CCMC(155941),    -- Master board of MA5698(sd5130)device.
                      "\"V4.87,
                      Add: fnameMA5698H821Mabc(561186),     -- Virtual frame H821MABC of MA5698(sd5130) device.
                      Add: fnameMA5691H821Mabc(561187),     -- Virtual frame H821MABC of MA5691(sd5130) device.
                      Add: fnameMA5678H821Mabc(561188),     -- Virtual frame H821MABC of MA5678(sd5130) device.
                      Add: bnameH831CCMC(155933),           -- Master board of MA5698(sd5130)device.
                      Add: bnameHS31GC4A(155934),           -- 4GE baoard(2GE+2GE COMBO) for MA5698.
                      Add: bnameH821CCIC(155935),           -- Master board of MA5691(sd5130)device.
                      Add: bnameHS21GE4A(155936),           -- 4GE baoard for MA5691.
                      Add: bnameH831CCLF(155937),           -- Master board of MA5678(sd5130)device.
                      Add: bnameH831E41B(155938),           -- 4E1 baoard for MA5678.
                      Add: bnameHS38ASRB(155939),           -- 32POTS baoard for MA5678.
                      Add: bnameHS31GE4A(155940),           -- 4GE baoard for MA5678.
                    " 4"V4.86, Modified the illegal comment symbol for FT.""V4.85,
                      Add:     bnameH801MABR(147525),         --  Backplane of the P300 broadband master Frame: H801MABR.
                      Add:     subbnameH801CPCA(204923),      --  Clock subboard for the H801MCUD board.
                      Add:     subbnameH801CPCA(204933),      --  Clock subboard for the H801MCUD board.
                      Update:  bnameAF11SPLTA(745751),        --  AF11SPLTA.
                      Update:  bnameAF11SPPTA(745752),        --  AF11SPPTA.
                    " �"V4.84,
                      Add: docsisPort(804),       -- docsis port of board HS33CDAA,the board has only one port(docsisPort).
                    "�"V4.83,
                      Add: bnameH822CCKRA(155930),       -- Master board of MA5633(sd5130)device.
                      Add: bnameHS33CDAA(155931),        -- DOCSIS virtual board of MA5633
                      Add: bnameH83BVCL(155932),         -- 32 VDSL + Vectoring board of MA5616
                      Add: fnameMA5633H821Mabc(561185),  -- Virtual frame H821MABC of MA5633(sd5130) device.
                    "S"V4.82,
                      Add:  bnameHS22CCVW(155928) ,    -- Master board of MA5623A(sd5130)device.
                      Add:  bnameHS3BVCMM(155929),        -- 48 VDSL baoard, supportting for vector
                      Add: fnameMA5623AH823Maba(561184),    -- Virtual frame H823MABA of MA5623A(sd5130) device.
                    "D"V4.80,
                    Add: fnameMA562XS2H821Mabc(561182),    -- Virtual frame H821MABC of MA562X(sd5130) device.
                    Add: fnameMA562XS3H821Mabc(561183),    -- Virtual frame H821MABC of MA562X(sd5132) device.
                    Add: bnameH831CCUD(155923),        -- Master board of MA5616(SD5130) Box type device
                    Add: bnameH831PAIBA(155924),       -- Power board H831PAIBA of the MA561X
                    Add: bnameH825EPUB(155925),        -- Master board of MA5620/26(SD5132) Box type device
                    Add: bnameH823EPUB(155926),        -- Master board of MA5626-8 PoE(SD5130) Box type device
                    Add: bnameHS22EPFG(155927),        -- 8 GE board of MA5626(SD5130)
                    Add: subbnameH832TP1C(155668),          --1*10G EPON subboard
                  " �"V4.79,
                    Add 8 ports GPON board, 16 ports GPON board, 8 ports EPON board, 16 ports EPON board. The range of type is 146102 to 146136.
                  " �"V4.78,
                    Add: bnameH801SCUH(146101),         --two GE port and two 10GE port H801SCUH control board of MA5600T.
                  " j"V4.77,
                    Add: subbnameH821PRCA(155667),          --RFT-C subboard
                    "&�"V4.76,
                    Add: iODN devices to HWFrameType, HWPCBType, and HWSubPCBType, range 0x000B0000~0x000BFFFF, which are:
                    Add: fnameMPU3101B-AC-1U(720898),              --MPU3101B-AC-1U
                    Add: fnameMPU3101C-AC-1U(720899),              --MPU3101C-AC-1U
                    Add: fnameMPU3101D-AC-1U(720900),              --MPU3101D-AC-1U
                    Add: fnameMPU3101B-DC-1U(720901),              --MPU3101B-DC-1U
                    Add: fnameMPU3101C-DC-1U(720902),              --MPU3101C-DC-1U
                    Add: fnameMPU3101D-DC-1U(720903),              --MPU3101D-DC-1U
                    Add: fnameAF11FPUA(721153),                    --AF11FPUA
                    Add: fnameAF11FPUAT(721154),                   --AF11FPUAT
                    Add: fnameGPX147-iMODF-6U(721155),             --GPX147-iMODF-6U
                    Add: fnameAF11FATA(721156),                    --AF11FATA
                    Add: fnameAF11FATC(721409),                    --AF11FATC
                    Add: fnameAF11FATB(721410),                    --AF11FATB
                    Add: fnameGPX147-iODF3101(729089),             --GPX147-iODF3101
                    Add: fnameGXF147-iFDT3101(729090),             --GXF147-iFDT3101
                    Add: fnameGXF147-iFDT3101D(729091),            --GXF147-iFDT3101D
                    Add: fnameGXF147-FDT2107D(729092),             --GXF147-FDT2107D
                    Add: fnameGPX147-iFAT3101(729093),             --GPX147-iFAT3101
                    Add: fnameGPX147-iFAT3102-12(729094),          --GPX147-iFAT3102-12
                    Add: fnameGPX147-iFAT3102(729095),             --GPX147-iFAT3102
                    Add: fnameGPX147-ODF5101-CH2-1200mm(729096),   --GPX147-ODF5101-CH2-1200mm
                    Add: fnameGPX147-ODF5101-FH2-1200mm(729097),   --GPX147-ODF5101-FH2-1200mm
                    Add: fnameGPX147-ODF5101-CH2-900mm(729098),    --GPX147-ODF5101-CH2-900mm
                    Add: fnameGPX147-ODF5101-FH2-900mm(729099),    --GPX147-ODF5101-FH2-900mm
                    Add: fnameGPX147-ODF5101-CH9(729100),          --GPX147-ODF5101-CH9
                    Add: fnameGPX147-ODF5101-FH9(729101),          --GPX147-ODF5101-FH9
                    Add: fnameGXF147-iFDT3101D-A(729102),          --GXF147-iFDT3101D-A
                    Add: fnameGXF147-iFDT3103D-432(729104),        --GXF147-iFDT3103D-432
                    Add: fnameGPX147-iFAT3103T-16(729345),         --GPX147-iFAT3103T-16
                    Add: fnameGPX147-iFAT3103T-24(729346),         --GPX147-iFAT3103T-24
                    Add: fnameGPX147-iFAT3105T-32(729347),         --GPX147-iFAT3105T-32
                    Add: fnameGPX147-iFAT3105T-36(729348),         --GPX147-iFAT3105T-36
                    Add: fnameGPX147-iFAT3101TD-32(729349),        --GPX147-iFAT3101TD-32
                    Add: fnameGPX147-iFAT3101TD-36(729350),        --GPX147-iFAT3101TD-36
                    Add: fnameGPX147-iFAT3103TD-96-F(729351),      --GPX147-iFAT3103TD-96-F
                    Add: fnameGPX147-iFAT3103TD-96-P(729352),      --GPX147-iFAT3103TD-96-P
                    Add: fnameGPX147-SR5101-5U(737281),            --GPX147-SR5101-5U
                    Add: fnameGPX147-SR5101-5U-2(737282),          --GPX147-SR5101-5U-2
                    Add: fnameGPX147-SR5102-5U(737283),            --GPX147-SR5102-5U
                    Add: fnameGXF147-FAT5201T(737284),             --GXF147-FAT5201T

                    Add: bnameAF11TMSA(745473),                    -- AF11TMSA
                    Add: bnameAF11TMUA(745474),                    -- AF11TMUA
                    Add: bnameAF11TMLA(745475),                    -- AF11TMLA
                    Add: bnameAF11TMPA(745476),                    -- AF11TMPA
                    Add: bnameAF11STSA(745477),                    -- AF11STSA
                    Add: bnameAF11STUA(745478),                    -- AF11STUA
                    Add: bnameAF11STLA(745479),                    -- AF11STLA
                    Add: bnameAF11STPA(745480),                    -- AF11STPA
                    Add: bnameAF11SPSIA(745481),                   -- AF11SPSIA
                    Add: bnameAF11SPUIA(745482),                   -- AF11SPUIA
                    Add: bnameAF11SPLIA(745483),                   -- AF11SPLIA
                    Add: bnameAF11SPPIA(745484),                   -- AF11SPPIA
                    Add: bnameAF11SPSHA(745485),                   -- AF11SPSHA
                    Add: bnameAF11SPUHA(745486),                   -- AF11SPUHA
                    Add: bnameAF11SPLHA(745487),                   -- AF11SPLHA
                    Add: bnameAF11SPPHA(745488),                   -- AF11SPPHA
                    Add: bnameAF11SPSOA(745489),                   -- AF11SPSOA
                    Add: bnameAF11SPUOA(745490),                   -- AF11SPUOA
                    Add: bnameAF11SPLOA(745491),                   -- AF11SPLOA
                    Add: bnameAF11SPPOA(745492),                   -- AF11SPPOA
                    Add: bnameAF11SPSPA(745493),                   -- AF11SPSPA
                    Add: bnameAF11SPUPA(745494),                   -- AF11SPUPA
                    Add: bnameAF11SPLPA(745495),                   -- AF11SPLPA
                    Add: bnameAF11SPPPA(745496),                   -- AF11SPPPA
                    Add: bnameAF11SPSJA(745497),                   -- AF11SPSJA
                    Add: bnameAF11SPUJA(745498),                   -- AF11SPUJA
                    Add: bnameAF11SPLJA(745499),                   -- AF11SPLJA
                    Add: bnameAF11SPPJA(745500),                   -- AF11SPPJA
                    Add: bnameAF11SPSQA(745501),                   -- AF11SPSQA
                    Add: bnameAF11SPUQA(745502),                   -- AF11SPUQA
                    Add: bnameAF11SPLQA(745503),                   -- AF11SPLQA
                    Add: bnameAF11SPPQA(745504),                   -- AF11SPPQA
                    Add: bnameAF11SPSKA(745729),                   -- AF11SPSKA
                    Add: bnameAF11SPUKA(745730),                   -- AF11SPUKA
                    Add: bnameAF11SPLKA(745731),                   -- AF11SPLKA
                    Add: bnameAF11SPPKA(745732),                   -- AF11SPPKA
                    Add: bnameAF11SPSRA(745733),                   -- AF11SPSRA
                    Add: bnameAF11SPURA(745734),                   -- AF11SPURA
                    Add: bnameAF11SPLRA(745735),                   -- AF11SPLRA
                    Add: bnameAF11SPPRA(745736),                   -- AF11SPPRA
                    Add: bnameAF11SPSLA(745737),                   -- AF11SPSLA
                    Add: bnameAF11SPULA(745738),                   -- AF11SPULA
                    Add: bnameAF11SPLLA(745739),                   -- AF11SPLLA
                    Add: bnameAF11SPPLA(745740),                   -- AF11SPPLA
                    Add: bnameAF11SPSSA(745741),                   -- AF11SPSSA
                    Add: bnameAF11SPUSA(745742),                   -- AF11SPUSA
                    Add: bnameAF11SPLSA(745743),                   -- AF11SPLSA
                    Add: bnameAF11SPPSA(745744),                   -- AF11SPPSA
                    Add: bnameAF11SPSMA(745745),                   -- AF11SPSMA
                    Add: bnameAF11SPUMA(745746),                   -- AF11SPUMA
                    Add: bnameAF11SPLMA(745747),                   -- AF11SPLMA
                    Add: bnameAF11SPPMA(745748),                   -- AF11SPPMA
                    Add: bnameAF11SPSTA(745749),                   -- AF11SPSTA
                    Add: bnameAF11SPUTA(745750),                   -- AF11SPUTA
                    Add: bnameAF11SPLTA(745741),                   -- AF11SPLTA
                    Add: bnameAF11SPPTA(745742),                   -- AF11SPPTA
                    Add: bnameAF11STUB(745985),                    -- AF11STUB
                    Add: bnameAF11STSB(745986),                    -- AF11STSB
                    Add: bnameAF11STLB(745987),                    -- AF11STLB
                    Add: bnameAF11STPB(745988),                    -- AF11STPB
                    Add: bnameAF11STUC(745989),                    -- AF11STUC
                    Add: bnameAF11STSC(745990),                    -- AF11STSC
                    Add: bnameAF11STLC(745991),                    -- AF11STLC
                    Add: bnameAF11STPC(745992),                    -- AF11STPC
                    Add: bnameAF11TMUB(745993),                    -- AF11TMUB
                    Add: bnameAF11TMSB(745994),                    -- AF11TMSB
                    Add: bnameAF11TMLB(745995),                    -- AF11TMLB
                    Add: bnameAF11TMPB(745996),                    -- AF11TMPB
                    Add: bnameAF11TMUC(745997),                    -- AF11TMUC
                    Add: bnameAF11TMSC(745998),                    -- AF11TMSC
                    Add: bnameAF11TMLC(745999),                    -- AF11TMLC
                    Add: bnameAF11TMPC(746000),                    -- AF11TMPC

                    Add: subbnameAF11AMCX1(753921),                --AF11AMCX1
                    Add: subbnameAF11AMCB1(753922),                --AF11AMCB1
                    Add: subbnameAF11AMCC1(753923),                --AF11AMCC1
                    Add: subbnameAF11AMCD1(753924),                --AF11AMCD1
                    Add: subbnameAF11AMCX2(753925),                --AF11AMCX2
                    Add: subbnameAF11AMCB2(753926),                --AF11AMCB2
                    Add: subbnameAF11AMCC2(753927),                --AF11AMCC2
                    Add: subbnameAF11AMCD2(753928),                --AF11AMCD2
                    " �"V4.75,
                    Add: bnameH83BVCMM(155921),  -- 48 VDSL baoard, supportting for vectoring.
                    Add: bnameH831VPBB(155922),  -- vector control engine board.
                    " �"V4.74,
                    Add: bnameH80BCVME(146099),   -- 48-channel VDSL2+ and POTS(combo) service board.
                    Add: bnameH801XGBC(146100),   -- 4-channel 10GE GPON board.
                  " �"V4.73,
                    Add: bnameH80XVPE(146097),   -- support vector board.
                    Add: bnameH80XVCM(146098),   -- support vector board.
                    " �"V4.72,
                    Add: bnameH831CCUE(155912),        -- Master board of MA5616(SD5130) Box type device
                    " n"V4.71,
                    Add: subbnameH821MODA(155666),          --56K MODEM subboard
                    " �"V4.70,
                    Delete: bnameH806EPBD(146088),    -- 8EPON board.
                    Modify: bnameH803GPFD(146097) to bnameH803GPFD(146088).
                    "�"V4.69,
                    Add: bnameH806EPBD(146088),   -- 8EPON board.
                    Add: bnameH807EPBD(146089),   -- 8EPON board.
                    Add: bnameH808EPBD(146090),   -- 8EPON board.
                    Add: bnameH806EPFD(146091),   -- 16EPON board.
                    Add: bnameH806GPBD(146092),    -- 8GPON board.
                    Add: bnameH807GPBD(146093),    -- 8GPON board.
                    Add: bnameH808GPBD(146094),    -- 8GPON board.
                    Add: bnameH801GPFD(146095),    -- 16GPON board.
                    Add: bnameH802GPFD(146096),    -- 16GPON board.
                    Add: bnameH803GPFD(146097),    -- 16GPON board.
                    "3"V4.68,
                    Add: fnameMA5626POEH821Mabc(143451),  -- Virtual Frame of MA5626 POE Spec master Frame:H821MABC
                    Add: fnameMA5621AH831Mabc(561181),    -- Virtual Frame H831MABC of MA5621A device.
                    Add: bnameHS22EPFA(155910),         -- 24 POE board of 5626.
                    Add: bnameHS22EPFB(155911),         -- 16 POE board of 5626.
                    Add: bnameHS22EPFD(155913),         -- 8  POE board of 5626.
                    Add: bnameH832PDVA(155914),         -- Double DC Power board H832PDVA of  the  MA5616.
                    Add: bnameHS22EPFF(155915),        -- 4 FE board of MA5621A.
                    Add: bnameHS22COMF(155916),        -- 2-channel Serial board of MA5621A.
                    Add: bnameH823CCIQ(155917),        -- Master board of MA5621A Box type device.
                    Add: bnameH83BCVL(155918),         -- 32 VDSL+32 POTS combo board of MA5616.
                    Add: bnameHS22CCVB(155920),        -- Master board of MA5622A(SD5103) Box type device.
                    Add: subbnameH831XP1A(155665),     --10G GPON subboard.
                    Modify: bnameH822EPUC to bnameHS22CCVA.
                    Modify: bnameH828ASNB to bnameHS3BCVSE.
                    Modify: bnameHS25VDUE to bnameHS3BVDSE.
                    "6"V4.67,
                    Add: fnameMA5632DH821Mabc(561179),   -- Virtual frame H821MABC of 5632 device with GE and Auto.
                    Add: fnameMA5616H831Mabb(561180),   -- vector frame of 5616 ARM device.
                    Modify: fnameMA5632H821Mabc to fnameMA5632SH821Mabc.
                    " �"V4.66,
                    Add: fnameMA5603H802Mabo(147523),     -- Backplane of the P300 broadband medium-capacity master Frame: H802MABO
                    " _"V4.65,
                    Add: bnameH808EPSD(146087),   -- 8EPON board.
                    "�"V4.64,
                    Add: fnameMA5669H831Mabc(561178),   -- Virtual Frame H831MABC of MA5669 device.
                    Add: bnameH822EPUD(155827),         -- 1-port autoAdpt Master board of MA5669 Box type device.
                    Add: bnameH822UPIG(155828),         -- 2-port GE board without POE of MA5669.
                    Add: bnameH822UPWG(155829),         -- 2-port GE board with POE of MA5669.
                    Add: frameMa5662AH831MABC(561175),  -- Virtual Backplane of MA5662(SD5103) , master Frame:MA5662(SD5103).
                    Add: bnameH82BCVMM(155825),         -- Master board of MA5662(SD5103) Box type device.
                    Add: bnameHS3BVDMM(155826),         -- 48-channel VDSL2  board for MA5662(SD5103).
                    Modify: fnameMA5653H831Mabc to fnameMA5661H831Mabc.
                    Modify: bnameH832PAIA to bnameH831PAIC.
                    ""V4.63,
                    Add: frameH612MainHABA(196615),      -- Rear-access PVM high-density master Frame, with the H612HABA backplane.
                    Add: frameH612SlaveHABA(196616),     -- Rear-access PVM high-density slave Frame, with the H612HABA backplane.
                    Add: bnameH612HWCB(262216),          -- H612HWCB board.
                    Add: bnameH612HWTB(262217),          -- H612HWTB board.
                    Add: bnameH612PVMD(262218),          -- H612PVMD main board.
                    "�"V4.62,
                    Add: frameH612SlaveHABD(196611),     -- Front-access PVM high-density slave Frame, with the H612HABD backplane.
                    Add: frameH612MainHABT(196612),      -- Front-access PVM high-density master Frame, with the H612HABD backplane.
                    Add: frameH612SlaveHABT(196613),     -- Front-access PVM high-density slave Frame, with the H612HABD backplane.
                    Add: frameH612SlaveHABT1(196614),    -- Front-access PVM high-density slave Frame, with the H612HABE backplane.
                    Add: bnameH612PVMT(262214),          -- H612PVMT board.
                    Add: bnameGIU(262215),               -- GIU board(H612IPMD).
                    " �"V4.61,
                    Add: fnameMA5631SH821Mabc(561176),  -- Virtual Backplane of MA5631(2 IN 2 OUT) Spec master Frame:H821MABC.
                    "2"V4.60,
                    Add: fnameMA5632H821Mabc(561173),   -- Virtual frame H821MABC of 5632 device.
                    Add: fnameMA5653H831Mabc(561174),   -- Virtual Frame H821MABC of 5653 device.
                    Add: fnameMA5612AH831MABL(561175),  -- Frame H831MABL of 5612A device.
                    Add: bnameH822CCJS(155817),         -- Master board of MA5632 Box type device.
                    Add: bnameH832PAIA(155818),         -- Power board H832PAIA of the MA5616.
                    Add: bnameH83BVDLE(155819),         -- 32-port VDSL interface board.
                    Add: bnameH836ADPE(155820),         -- 64-port ADSL2 interface board.
                    Add: bnameH82BCVRJ(155821),         -- Master board of MA5653 Box type device.
                    Add: bnameHS2CCVPE(155822),         -- 64 VDSL+64 POTS combo board of MA5653.
                    Add: bnameH821PTBA(155823),         -- Power board H821PTBA of the MA5653
                    Add: bnameHS21WF1A(155824),         -- WIFI board HS21WF1A of the MA5653.
                    " T"V4.59,
                    Change: eponOltPor to eponOltPort,
                    " L"V4.58, Add a new menu vdslPstnPort(701) of HWPortType
                    ""V4.57,
                    Add: bnameH85BCVME(146070),    --48-channel VDSL2+ and POTS(combo) service board
                    Add: bnameH801VRGA(146071),    --Virtual Route Gateway Board
                    Add: bnameH806EPBD(146072),    --8EPON board
                    " ^"V4.56,
                    Add: bnameH805EPBD(146086),    --8EPON board
                    "2"V4.55, The following boards are modified, and the fname of fnameMA5628OSH821Mabc(561172) is added.
                    bnameHS22GRVD(155810),  -- 8  VDSL2 + over POTS + RF board.
                    fnameMA5628OSH821Mabc(561172),    -- Backplane of MA5628O Spec master Frame:H821MABC
                    ""V4.54, The following boards are modified.
                    serialSrvPort(799),              -- serial service port
                    fnameMA5626H821Mabc(143368),  -- Virtual Backplane of MA5626(Reduce Cost) Spec master Frame:H821MABC
                    " "V4.53,
                    Change: bnameH80BVDPM to bnameH80XVDP,
                    Change: bnameH801ASPB to bnameH80XASP,
                    Delete: bnameH80BVDPE,
                    Add: bnameH805GPBD(146085),    -- 8GPON board
                    ""V4.52, The following boards are modified.
                    bnameH831CCUC(155703),        -- Master board of MA5616(SD5103) Box type device
                    bnameH831CCUN(155716),        -- Master board of MA5631(SD5103) Box type device
                    " B"V4.51, The board of bnameH822CCGJA(155718) is added and changed." �"V4.50, The following boards are added.
                    bnameH803TPBA(146083),        -- 2-port 10G EPON interface board
                    bnameH803TPBC(146084),        -- 4-port 10G EPON interface board
                    " 6"V4.49, The board of bnameH822CCGJA(155713) is added."�"V4.48, The following boards and subboard are added for MA5652 & MA5622 & MA5621 & MA5612 & MA5616 device:
                    fnameMA5622SH831Mabc(561169),  -- Backplane of MA5622 Spec master Frame:H831MABC.
                    fnameMA5652SH831Mabc(561170),  -- Backplane of MA5652 Spec master Frame:H831MABC.
                    fnameMA5621H831Mabc(561171),   -- Backplane of MA5621 Spec master Frame:H831MABC.
                    bnameH832PDIA(155803),  -- 2 DC input power board of MA5616
                    bnameH822EPUC(155804),  -- Master board of MA5622 Box type device.
                    bnameH828ASNB(155805),  -- 16-channel POTS board of MA5622.
                    bnameHS25VDUE(155806),  -- 16-channel vdsl2 board of MA5622.
                    bnameH832EPUA(155807),  -- Master board of MA5652 Box type device.
                    bnameHS22VDRE(155808),  -- 24 VDSL2 + over POTS board.
                    bnameHS22VDGE(155809),  -- 16 VDSL2 + over POTS board.
                    bnameHS22VDJE(155810),  -- 8  VDSL2 + over POTS board.
                    bnameHS22VDOE(155811),  -- 24 VDSL2 + over ISDN board.
                    bnameHS22VDHE(155812),  -- 16 VDSL2 + over ISDN board.
                    bnameHS22VDKE(155813),  -- 8  VDSL2 + over ISDN board.
                    bnameH822CCIQ(155814),  -- Master board of MA5621 Box type device.
                    bnameH821EPFF(155815),  -- 4-channel GE board of MA5621.
                    bnameH821COME(155816),  -- 4-channel Serial board of MA5621.
                    subbnameH832TP2C(155663),  --10G EPON subboard.
                    subbnameH832TP2D(155664),  --10G EPON subboard.
                    "�"V4.47, The following boards are added.
                    bnameH80BCAME(146069),        -- 48-channel ADSL2+ and POTS(combo) service board
                    bnameH80BVDPM(146066),        -- 64-channel VDSL2 over POTS service board
                    bnameH80BVDPE(146067),        -- 64-channel VDSL2 service board
                    bnameH801PAIC(146082),        -- H801PAIC Power board.
                    Modified the description of hwTrapType." �"V4.46, The following boards are added:
                    Add 48L VDSL board of MA5616:bnameH83BVDMM(155802)
                    " �"V4.45, The following boards are added:
                    Add 24L VDSL board of MA5616:bnameH83BVDSB(155800)
                    Add 24L POTS board of MA5612:bnameH837ASMB(155801)
                    " T"V4.44, modified the description of the objects in this MIB file for standard trap."U"V4.43, The following value are added for the MxU MA5631 device:
                    fnameMA5631SH821Mabc(561168), -- Virtual Backplane of MA5631(SD5103) Spec master Frame:H821MABC
                    bnameH832CCUC(155716),        -- Master board of MA5631(SD5103) Box type device
                    bnameH831HE1A(155717),        -- 1 port EoC board of MA5631(SD5103)
                    subbnameH831UP2D(155661),   -- Auto adapt upstream subboard, which is used for the MA5631(SD5103) upstream service
                    eocport(803),                 -- EoC master RF port
                    " �"V4.42, The following SubBoard is added for the MxU MA5616 device:
                    subbnameH836ASDM(155662),          --VOIP 128 Tunnel DSP Subboard H836ASDM
                    ""V4.41, The following shelves, boards are added and changed.
                    Add 24L VDSL2(IFX,17a),GPON(RF) ,Over POTS service board of MA5652:bnameH821GRVAA(155713)
                    Change 24L VDSL2(IFX,17a),GPON(RF) ,Over POTS service board of MA5652:bnameH821GRVAB(155715)" �"V4.40, The following Backplane is added for the SCU 300mm Frame:
                    fnameMA5600H801Mabv(143359),     -- Backplane(19 Inch) of the P300 new broadband master Frame: H801MABV" 4"V4.39, Modify the Chinese characters in Mib files." �"V4.38, The following shelves, boards are added.
                    Add 24L VDSL2(IFX,17a),GPON(RF) ,Over POTS service board of MA5652:bnameH821GRVA(155713)
                    Add 64-channel VoIP POTS service board of MA5616: bnameASP(155714)" �"V4.37, Add Virtual Backplane of MA5628(SD5103) Spec master Frame: fnameMA5628SH821Mabc,
                    Add Master board of MA5628(SD5103) Box type device: bnameH822CCGJ,
                    Add 4E1 Vitual board of H822CCGJ: bnameH831EDVB."�"V4.36, The following shelves, boards are added.
                    fnameSRGFWG2BKPA(190001),       -- SRG master Frame: FWG2BKPA(R2 1U)
                    fnameSRGSU11BKPA(190002),       -- SRG master Frame: SU11BKPA(R2 2U)
                    fnameSRGSU21BKPA(190003),       -- SRG master Frame: SU21BKPA(R2 3U)
                    bnameSU11EWFS(190012),          -- 32-pots fxs board
                    bnameSU11E4MS(190013),          -- 4-pots fxs board
                    bnameSU11E4MO(190014),          -- 4-pots fxo board
                    bnameSU11E4MM(190015),          -- 2-pots fxs + 2-pots fxo board
                    bnameSU11E2MV(190016),          -- 2-pots ve1 board
                    bnameSU11UP2A(190017),          -- PON board(3 mode)"�"V4.35, The following shelves, boards, subboard are added.
                    fnameWLANWS6603(160000): Backplane of the WLAN V1R2 master Frame: WS6603.
                    fnameWLANWAC(160001): Backplane of the WLAN V1R3 master Frame: WAC.
                    bnameWA611WACA(160000): Master board of WS6603(WLAN V1R2) Box type device.
                    bnameWA611PAIA(160001): power board of WS6603(WLAN V1R2) Box type device.
                    bnameWA611PDIA(160002): power board of WS6603(WLAN V1R2) Box type device.
                    bnameH801WACA(160003): AC service Board of WS6800/WS6803(WLAN V1R3).
                    subbnameWA611POEA(160000): Power Subboard of WA611WACA." 5"V4.34, The board of bnameH802P2CA(146065) is added." "V4.33, Modified the revision." `"V4.32, DT requirements are implemented and the syntax and semantics of SIMPLETEST are changed."'"V4.31, The following boards are added.
                    bnameE8000ESUP3SPUA02IPS(16748548):IPS Service Processing Unit,
                    with HS General Security Platform S
                    bnameE8000EKW51ESPUIPS(16748549): IPS SPU Board ,Service Processing Unit
                    subbnameUSG9100E2XS(16748570): 2*SFP+ Interface Broad,
                    with HS General Security Platform Software
                    subbnameUSG9100E16GF(16748571): 16*SFP Interface Board,
                    with HS General Security Platform Software." 5"V4.30, The board of bnameH821EPFE(155709) is added." 3"V4.29, The enumerated value of H802EDTB is added." Y"V4.28, The NMS enumerated value of H85BVDMD is added and revision description is added." r"V4.27, 1 The syntax of SIMPLETEST MIB BROWSER is changed.
                     2 The MIB description is changed." �"V4.26, One board is added for the SVN5300.
                    bnameSE21MPUA(16719954): SVN5300,Security virtual Gateway Mainboard(4GE). "|"V4.25, Two types for daughter board subbnameH801CKMA are recorded in MIB files.
                    One enumerated value is 145935 and another enumerated value is 146020.
                    The two values, however, refers to the same daughter board, and enumerated
                    value 145935 is used in codes. Therefore, enumeration definition of value 146020 is deleted."Z"V4.24,The following shelves are added.
                    fnameSRGZ23UHT(16715796):SRG3260,SRGZ23UHT,SRG3260 Host,
                    with HS General Security Platform Software.
                    fnameSU2Z12UAH(16715797):USG5100,SU2Z12UAH,USG5120 AC Host,
                    with HS General Security Platform Software.
                    fnameSU2Z12UDH(16715798): USG5100,SU2Z12UDH,USG5120 DC Host,
                    with HS General Security Platform Software.
                    fnameSU2Z13UHT(16715799):USG5100,SU2Z13UHT,USG5150 Host,
                    with HS General Security Platform Software.
                    fnameSU2Z22UAH(16715800):USG5100,SU2Z22UAH,USG5120BSR AC Host,
                    with HS General Security Platform Software.
                    fnameSU2Z22UDH(16715801): USG5100,SU2Z22UDH,USG5120BSR DC Host,
                    with HS General Security Platform Software.
                    fnameSU2Z23UHT(16715802): USG5100,SU2Z23UHT,USG5150BSR Host,
                    with HS General Security Platform Software.
                    fnameSRGZ12UAH(16715803):SRG3230,SRGZ12UAH,SRG3230 AC Host,
                    with HS General Security Platform Software.
                    fnameSRGZ22UAH(16715804):SRG3240,SRGZ22UAH,SRG3240 AC Host,
                    with HS General Security Platform Software.
                    fnameSRGZ22UDH(16715805): SRG3240,SRGZ22UDH,SRG3240 DC Host,
                    with HS General Security Platform Software.
                    fnameSRGZ13UHT(16715806): SRG3250,SRGZ13UHT,SRG3250 Host,
                    with HS General Security Platform Software." 2"V4.23, Daughter board H801M2XA(146025) is added."�"V4.22,The following boards are added.
                    bnameSRGM1WCDMA(16719917): SRG,SRGM1WCDMA,USB 3G WCDMA Card.
                    bnameSRGM1CD2K(16719918): SRG,SRGM1CD2K,USB 3G CDMA2000.
                    bnameSRGM1TD(16719919): SRG,SRGM1TD,USB 3G TDSCDMA.
                    bnameSU11X86HS02(16719920): Safety Product,USG2200,SU11X86HS02,
                    Enhanced Services Platform Enterprise Version,X86 Board,CPU T7500,
                    2GB Memory,160G Enterprise Hard Disk.
                    bnameSU11X86HS01(16719921): Safety Product,USG2200,SU11X86HS01,
                    Enhanced Services Platform Common Version,X86 Board,CPU T7500,
                    2GB Memory,160G Universal Hard Disk."�"V4.21,The following boards are added for the USG2200 V3R2.
                    bnameSU11F8E1(16719905): SRG20,SU11F8E1,8-port E1 Interface Card-DB44-75ohm.
                    bnameSU11FC8E1(16719906): SRG20,SU11FC8E1,8-port Channelized E1 Interface Card-DB44-75ohm.
                    bnameSU11F4E1(16719907): SRG20,SU11F4E1,4-port E1 Interface Card-DB44-75ohm.
                    bnameSU11FC4E1(16719908): SRG20,SU11FC4E1,4-port Channelized E1 Interface Card-DB44-75ohm.
                    bnameSU11APWN(16719909): SRG20,SU11APWN,WLAN Service Board.
                    bnameSU21MPUA(16719910): USG5100,SU21MPUA,Main Process Unit Board .
                    bnameSU11MPUA(16719911): USG5100,SU11MPUA,Main Process Unit Board .
                    bnameFWE1E4GE(16719912): USG5100,FWE1E4GE,4-port Gigabit Ethernet Interface Card(RJ45).
                    bnameFWG1F2F2C(16719913): USG2200,FWG1F2F2C,2FE(RJ45)+2FE(RJ45&SFP) MIXED INTERFACE CARD.
                    bnameSU21F18S2(16719914): USG5100,SU21F18S2,18FE(RJ45)+2GE(SFP) Mixed Interface Card.
                    bnameSU21G16S4(16719915): USG5100,SU21G16S4,16GE(RJ45)+4GE(SFP) Mixed Interface Card.
                    bnameSU11E8F2G(16719916): SRG20,SU11E8F2G,8FE(RJ45)+2GE(RJ45) Mixed Interface Card."O"V4.20, The boards of the following two types are added for the USG2100.
                    bnameFWF1MPUCO1(16719903),bnameSU11ADPAO2(16719904),
                    The boards of the following four types are added for the USG3000.
                    bnameRTB21CT1(16719950),bnameRRTB21CE1(16719951),bnameRTB21T1(16719952),
                    bnameRTB21E1(16719953).
                    The daughter board of the following type is added for the TUSG9100.
                    subbnameUSG9100SU61X2G16(16748569).
                    The following port is added for the USG3000.T1(16711685)." �"V4.19, Many MIB compilation problems are found in DT tests.
                    These compilation problems are solved and MIBs are archived."�"V4.18, MIB enumerated values are added for the 562x, the 5612,
                    and the 5616 that are in SD5103 architecture.
                    The following boards are added.
                    bnameH822EPUB(155702): Master board of MA562X(SD5103) Box type device.
                    bnameH832CCUB(155703): Master board of MA5616(SD5103) Box type device.
                    bnameH832CCFE(155704): Master board of MA5612(SD5103) Box type device.
                    bnameH835CALE(155705): 32 ADSL+32 POTS combo board .
                    bnameH831EIUD(155706): 4GE(combo)+4FE board.
                    bnameH831E81A(155707): 8E1 board.
                    bnameH831EPWA(155708): POE board.
                    The following shelves are added.
                    fnameMA562XSH821Mabc(561164): Virtual Backplane of MA562X(SD5103) Spec master Frame H821MABC.
                    fnameMA5616SH831MABA(561165): Backplane of the MA5616(SD5103) master Frame  H831MABA.
                    fnameMA5612SH831MABL(561166): Backplane of the MA5612(SD5103) master Frame  H831MABL.
                    The following daughter boards are added:
                    subbnameH831UP2A(155658)L: Auto adapt upstream subboard, which is used for the MDU upstream service.
                    subbnameH831UP2C(155659): Auto adapt upstream subboard with Clock, which is used for the MDU upstream service.
                    subbnameH831GR1A(155660): RF upstream subboard, which is used for the MDU upstream service.
                    The following ports are added.
                    autoAdptPort(800): auto adpt port.
                    catvPort(801): CATV port.
                    In addition, MIB compilation of version 4.17 fails; 3G in version 4.18 is changed to _3G."O"V4.17, VEPort(16711681): The Virtual Ethernet (VE) is applied to the PPPoEoA and IPoEoA.
                    It functions on the interface board. Externally it features Ethernet attributes.
                    3GPort(16711682):3G supports three wireless communication mode,
                    including both WCDMA/CDMA2000/TD-SCDMA and corresponding 2G mode.
                    SerialPort(16711683): The serial port is used for the exchange of information between computers
                    or devices one bit at a time over a single channel. Serial communications can be synchronous
                    or asynchronous. Both sender and receiver must use the same baud rate, parity, and control information.
                    DialerPort(16711684):The dialer interface is used as dialing interface of pppoe client, supports pppoe protocol." S"V4.16, The NMS enumerated value of H802OPGD needs to be added for the MA5600V8R8."D"V4.15, The NMS enumerated value of H801CKMC and the enumerated value of H808ASPB.
                    are added for V8R7.
                    bnameH808ASPB(146081): H808ASPB BOARD 64-channel voice service board of the MA5600.
                    subbnameH801CKMC(146024):Clock subboard for the H801SCUL and H801SCUN board."�"V4.14, The following shelf, control board, ADSL board and power board are added for the ATN931.
                    fnameATN931TNC1AFB(561163): Backplane of the ATN931 master Frame: TNC1AFB.
                    bnameH831CCEL(155699): Master board of ATN931 Box type device.
                    bnameH835BVJA(155700): adsl board of ATN931 Box type device.
                    bnameTNC1PIU(155701): power board of ATN931 Box type device."9"V4.13,The following boards are added for the USG2100.
                    bnameFWF1SPUA(16719900):FWF1SPUA,Main Process Unit Board,USG2100.
                    bnameFWF1SPUB(16719901):FWF1SPUB,Main Process Unit Board,USG2100.
                    bnameFWF1MPUD(16719902):FWF1MPUD,Main Process Unit Board,USG2100." �"V4.12,  USG2200,USG2100
                    wifi(233):WIFI card communicates with WIFI terminals as a wireless AP,
                    and supports IEEE 802.11b/ 802.11g."�"V4.11, 1.Mother board H831CCIK is added because the MXU ATN930 is independent of the OT920.
                    The NMS enumerated value corresponding to the mother board needs to be applied for.
                    Apply for the NMS enumerated value:
                    bnameH831CCIK(155698):Master board of ATN930 Box type device.
                    2. The 5620 supports 8 FE + 8 POTS mother board. The name of the virtual 8 POTS board
                    is changed from H822ASL to H848ASLB according to naming rules.
                    The NMS enumerated value (155697) that is applied for is not changed.
                    bnameH848ASLB(155697): MA562XP 8POTS." "V1.00, Complete the Draft."               Z"The trap id only valids in the alarm trap Varible binding parameters .
                 "                       ^"The trap  time  only valids in the alarm trap Varible binding parameters .
                 "                       a"The serial number  only valids in the alarm trap Varible binding parameters .
                 "                       5"The cause for   sending  a trap .
                 "                      "The trap type .
                Options:
                1.eventAlarm(0)                 - Event alarm
                2.faultAlarm(1)                 - Fault alarm
                3.clearAlarm(2)                 - Recovery alarm
                4.synAlarm(3)                   - Synchronization alarm
                5.maitainTrap(10)               - Maintenance trap
                6.topDiscovery(11)              - Topology discovery trap
                7.debugTrap(12)                 - Debugging trap
                "                       /"the Frames definition only for Entity-Mib use"                       ."the slots definition only for Entity-Mib use"                       3"the sub slots  definition only for Entity-Mib use"                       ."the ports definition only for Entity-Mib use"                       4"The virtual entity definition only for Entity-mib."                       7"The additional entity definition only for Entity-mib."                          