o--====================================================================
-- Copyright (C) 2009 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: Huawei Device extent MIB File for base device infomation
-- Reference:
-- Version: V1.0
-- History:
-- V1.0 2009-01-05, publish
-- ===================================================================
     5"The MIB module for collect base device information.""Huawei Industrial Base
                    Bantian, Longgang
                     Shenzhen 518129
                     People's Republic of China
                     Website: http://www.huawei.com
                     Email: support@huawei.com
                   " "200812171414Z" +"The initial revision of this MIB module ."                   �"The equipment serial number of device.Its type is string.If the esn of lr0 is xxx,
                 then the esn of lrn is xxx.ss,ss is the lrn's id."                       P"The name of a platform.For example,Huawei Versatile Routing Platform Software."                       F"The version of a platform.For example,VRP (R) Software,Version 3.10."                      #"The name of a product.For example,Quidway NetEngine 5000E.The product name is not equal to the system name.
                the system name is an instance of the product name.User can config the system name of a device,but can not change 
                the  product name of the device."                       ?"The version of a product.For example,NE5000E V200R002C01B39L."                               ^"Compliance statement for agents that provide full support for 
                hwDeviceExt."                   $"Group for base device information."                            