m-- ===================================================================
-- Copyright (C) 2017 by HUAWEI TECHNOLOGIES. All rights reserved.
-- Description: This MIB contains private managed object and notification 
--              trap definitions for PCE.
-- Reference:
-- Version: V1.10
-- ===================================================================
     g"This MIB contains private managed object and notification trap 
                definitions for PCE." �"Huawei Industrial Base
                 Bantian, Longgang
                 Shenzhen 518129
                 People's Republic of China 
                 Website: http://www.huawei.com
                 Email: support@huawei.com" "201703041000Z" "201612051000Z" "201610101600Z" "201607201600Z" "201605121600Z" "201604181600Z" "201602201600Z" "201504121600Z" "201503251000Z" "201410211600Z" "201308131600Z" 0"V1.10, Support PCE resource limit exceed trap." $"V1.09, Support delegate LSP limit." +"V1.08, add user handle for compute trap ." "V1.07, PCECC." "V1.06, PCECC." "V1.05, PCECC." "V1.04, modify name." "V1.03, modify name." "V1.02, add new feature." "V1.01, modify name ." "V1.00, initial version."       !-- Mar 04, 2017 at 13:00:00 GMT
          �"Indicates the reason of LSP path computation result change.
                Options:
                1. appSingleLspComputation(1),           -indicates single lsp computation caused by app.
                2. globalReoptimizationComputation(2)    -indicates global reoptimization computation.
                3. appMultipleReoptimizationComputation(3)   -indicates multiple reoptimization computation.
                4. autoCompletePathFailedComputation(4)  -indicates single lsp computation caused by completing path failed.
                5. lspRerouteComputation(5)              --indicates lsp reroute computation
                6. computeResultReady(6)   --indicates the compute result is ready."                       �"Indicates the reason of delegate LSP change.
                Options:
                1. receiveFristDelegateLsp(1)  -indicates receive the frist delegate LSP.
                2. deleteLastDelegateLsp(2)    -indicates delete the last delegate LSP."                       '"Indicates path changed  LSP batch ID."                      ;"Indicates the result of approving.
                Options:
                1. success(1)  -indicates the result of LSP change is successful.
                2. fail(2)     -indicates the result of LSP change is failed.
                3. failNoStop(3)     -indicates the result of LSP change is fail no stop."                       &"Indicates the Adjency Local Node Id."                       $"Indicates the Adjency Local Tp Id."                       '"Indicates the Adjency Remote Node Id."                       %"Indicates the Adjency Remote Tp Id."                       �"Indicates the operation of the Adjency SID .
                Options:
                1. add(1)       -indicates the operation of add  Adjency SID .
                2. delete(2)    -indicates the operation of delete Adjency SID "                       ,"Indicates the Adjency Segment Identifier ."                       7"Indicates the Adjency Segment Identifier trap Index ."                       �"Indicates the Status of the Link .
                Options:
                1. up(1)       -indicates the terminal point is up .
                2. down(2)    -indicates the  terminal point  is down"                       �"Indicates the Type of the Node .
                Options:
                1. lsrid(1)       -indicates the type of node is LSR-ID ."                        "Indicates the id of the node ."                       �"Indicates the Type of the terminal point .
                Options:
                1. ipv4(1)       -indicates the type of terminal-point is ipv4."                       +"Indicates the id of the terminal point  ."                       ="Indicates the reason of LSP path computation result change."                       -"PCE server wait ha date smooth expire time."                        "Indicates the id of the node ."                       *"Indicates delegated lsp threshold limit."                        "Indicates delegated lsp limit."                           H"This notification indicates that LSP path's computation result change."                 ="This notification indicates that delegate LSP State change."                 L"This notification indicates current Path changed LSP Batch ID information."                 B"This notification indicates that some PCE LSP is out of control."                 E"This notification indicates that no more PCE LSP is out of control."                 5"This notification indicates the adjency SID change."                 8"This notification indicates the terminal point status."                 Z"This notification indicates that PCE server system is started and waiting for role type."                 S"This notification indicates that PCE server wait ha batch update message expired."                 K"This notification indicates that PCE erver has received ha batch message."                 S"This notification indicates that PCE server received request from unknown client."                 >"This notification indicates that PCEP session has confirmed."                 E"This notification indicates that PCEP session has non delegete LSP."                 F"This notification indicates that PCEP session receive delegated LSP."                 ]"This notification indicates that the number of delegated LSP count reached threshold limit."                 a"This notification indicates that the number of delegated LSP count falls under threshold limit."                 X"This notification indicates that PCE server is entering resource limit exceeded state."                 W"This notification indicates that PCE server is exiting resource limit exceeded state."                         N"Compliance statement for agents that provide full support for hwBaseTrapMIB."                   "Group for base trap objects."                 "Group for all base traps."                                