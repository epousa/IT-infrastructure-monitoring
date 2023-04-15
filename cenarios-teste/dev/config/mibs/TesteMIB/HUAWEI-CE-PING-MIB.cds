r--  =================================================================
-- Copyright (C) 2017 by  HUAWEI TECHNOLOGIES. All rights reserved
-- 
-- Description: CE Ping MIB. 
-- Reference:
-- Version:     V2.01
-- History:
--              V1.0 zhuxiao 2008.10.16,publish 
--              
--  
-- =================================================================
                                     %"HUAWEI VPLS quality detect funcion."d"Huawei Industrial Base
                                  Bantian, Longgang
                                   Shenzhen 518129
                                   People's Republic of China
                                   Website: http://www.huawei.com
                                   Email: support@huawei.com
                                 " "201708172012Z" e"V2.01, changes in this revision:
                          Modify the description of hwCePingCount"       --Aug 17, 2017 at 20:12GMT
       i"This table is used to configure and initiate a CE ping test. The test starts when the table is created."                       "The entry of hwCePingTable."                       ,"The index of hwCePingTable,it is always 1."                       9"Specifies the IP address to be used as the destination."                       T"Specify an unused IP address in the same network that is associated with the VPLS."                       -"The VSI name that is uesd by the operation."                       Q"This value represents the inter-packet delay between packets and is in seconds."                       n"The value of this object specifies the number of packets sent for one probe. The value ranges from 1 to 255."                       N"This object indicates the TTL of echo request packets. Default value is 255."                       L"This object indicates the EXP of echo request packets. Default value is 0."                       �"The value of this object identifies whether the detailed information about the remote PE can be displayed. The default value is 0."                       Q"Special MAC address for CE-PING, ranging from E024-7FA4-D2CB to E024-7FA4-D2DA."                       !"The operating state of the row."                       "The table of CE Ping result."                       #"The entry of hwCePingResultTable."                      "Reflects the operational state of a hwCePingEntry:
                                  successful(1)  - Test is successful.
                                  inProcess(2) - Test is in process.
                                  timeout(3) - Test is timeout."                       '"The Mac that is detected by the test."                       4"This object indicates the LSR ID of the remote PE."                       F"This object indicates the name of the AC interface on the remote PE."                       ("This object indicates the average RTT."                       6"This object indicates the number of Request packets."                       4"This object indicates the number of Reply packets."                       D"This object indicates the number of packets discarded in the test."                       l"This object indicates the percentage of discarded packets to the total number of sent packets in the test."                               "Description."                 "Description."                 4"This object indicates the description information."                     "Description."               <"This object indicates the historical table of the CE ping."                       :"This object indicates the entry in hwCePingHistoryTable."                       @"This object indicates the sequence number of a Request packet."                       7"This object indicates the RTT of each Request packet."                                                      