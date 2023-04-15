--  ==================================================================
-- Copyright (C) 2018 by  HUAWEI TECHNOLOGIES. All rights reserved.
-- 
-- Description: HUAWEI Hierarchy Quality Of Service MIB
-- Reference:
-- Version: V2.32
-- History:
-- <author>,  <date>,  <contents>
-- jugaoming   2015-05-29   V5 to V8
-- ==================================================================
-- ==================================================================
--  HUAWEI-DSLITE-MIB.mib
-- Tuesday, March 06, 2012 at 17:50:32
-- 
  Z�"The RowStatus textual convention is used to manage the
				creation and deletion of conceptual rows, and is used as the
				value of the SYNTAX clause for the status column of a
				conceptual row (as described in Section 7.7.1 of [2].)
				The status column has six defined values:
				
				     - `active', which indicates that the conceptual row is
				     available for use by the managed device;
				
				     - `notInService', which indicates that the conceptual
				     row exists in the agent, but is unavailable for use by
				     the managed device (see NOTE below); 'notInService' has
				     no implication regarding the internal consistency of
				     the row, availability of resources, or consistency with
				     the current state of the managed device;
				
				     - `notReady', which indicates that the conceptual row
				     exists in the agent, but is missing information
				     necessary in order to be available for use by the
				     managed device (i.e., one or more required columns in
				     the conceptual row have not been instanciated);
				
				     - `createAndGo', which is supplied by a management
				     station wishing to create a new instance of a
				     conceptual row and to have its status automatically set
				     to active, making it available for use by the managed
				     device;
				
				     - `createAndWait', which is supplied by a management
				     station wishing to create a new instance of a
				     conceptual row (but not make it available for use by
				     the managed device); and,
				
				     - `destroy', which is supplied by a management station
				     wishing to delete all of the instances associated with
				     an existing conceptual row.
				
				Whereas five of the six values (all except `notReady') may
				be specified in a management protocol set operation, only
				three values will be returned in response to a management
				protocol retrieval operation:  `notReady', `notInService' or
				`active'.  That is, when queried, an existing conceptual row
				has only three states:  it is either available for use by
				the managed device (the status column has value `active');
				it is not available for use by the managed device, though
				the agent has sufficient information to attempt to make it
				so (the status column has value `notInService'); or, it is
				not available for use by the managed device, and an attempt
				to make it so would fail because the agent has insufficient
				information (the state column has value `notReady').
				                         NOTE WELL
				
				     This textual convention may be used for a MIB table,
				     irrespective of whether the values of that table's
				     conceptual rows are able to be modified while it is
				     active, or whether its conceptual rows must be taken
				     out of service in order to be modified.  That is, it is
				     the responsibility of the DESCRIPTION clause of the
				     status column to specify whether the status column must
				     not be `active' in order for the value of some other
				     column of the same conceptual row to be modified.  If
				     such a specification is made, affected columns may be
				     changed by an SNMP set PDU if the RowStatus would not
				     be equal to `active' either immediately before or after
				     processing the PDU.  In other words, if the PDU also
				     contained a varbind that would change the RowStatus
				     value, the column in question may be changed if the
				     RowStatus was not equal to `active' as the PDU was
				     received, or if the varbind sets the status to a value
				     other than 'active'.
				
				
				Also note that whenever any elements of a row exist, the
				RowStatus column must also exist.
				To summarize the effect of having a conceptual row with a
				status column having a SYNTAX clause value of RowStatus,
				consider the following state diagram:
				
				
				                             STATE
				  +--------------+-----------+-------------+-------------
				  |      A       |     B     |      C      |      D
				  |              |status col.|status column|
				  |status column |    is     |      is     |status column
				ACTION    |does not exist|  notReady | notInService|  is active
				--------------+--------------+-----------+-------------+-------------
				set status    |noError    ->D|inconsist- |inconsistent-|inconsistent-
				column to     |       or     |   entValue|        Value|        Value
				createAndGo   |inconsistent- |           |             |
				  |         Value|           |             |
				--------------+--------------+-----------+-------------+-------------
				set status    |noError  see 1|inconsist- |inconsistent-|inconsistent-
				column to     |       or     |   entValue|        Value|        Value
				createAndWait |wrongValue    |           |             |
				--------------+--------------+-----------+-------------+-------------
				set status    |inconsistent- |inconsist- |noError      |noError
				column to     |         Value|   entValue|             |
				active        |              |           |             |
				  |              |     or    |             |
				  |              |           |             |
				  |              |see 2   ->D|see 8     ->D|          ->D
				--------------+--------------+-----------+-------------+-------------
				set status    |inconsistent- |inconsist- |noError      |noError   ->C
				column to     |         Value|   entValue|             |
				notInService  |              |           |             |
				  |              |     or    |             |      or
				  |              |           |             |
				  |              |see 3   ->C|          ->C|see 6
				--------------+--------------+-----------+-------------+-------------
				set status    |noError       |noError    |noError      |noError   ->A
				column to     |              |           |             |      or
				destroy       |           ->A|        ->A|          ->A|see 7
				--------------+--------------+-----------+-------------+-------------
				set any other |see 4         |noError    |noError      |see 5
				column to some|              |           |             |
				value         |              |      see 1|          ->C|          ->D
				--------------+--------------+-----------+-------------+-------------
				
				(1) goto B or C, depending on information available to the
				agent.
				
				(2) if other variable bindings included in the same PDU,
				provide values for all columns which are missing but
				required, and all columns have acceptable values, then
				return noError and goto D.
				
				(3) if other variable bindings included in the same PDU,
				provide legal values for all columns which are missing but
				required, then return noError and goto C.
				
				(4) at the discretion of the agent, the return value may be
				either:
				
				     inconsistentName:  because the agent does not choose to
				     create such an instance when the corresponding
				     RowStatus instance does not exist, or
				
				     inconsistentValue:  if the supplied value is
				     inconsistent with the state of some other MIB object's
				     value, or
				
				     noError: because the agent chooses to create the
				     instance.
				
				If noError is returned, then the instance of the status
				column must also be created, and the new state is B or C,
				depending on the information available to the agent.  If
				inconsistentName or inconsistentValue is returned, the row
				remains in state A.
				
				(5) depending on the MIB definition for the column/table,
				either noError or inconsistentValue may be returned.
				
				(6) the return value can indicate one of the following
				errors:
				
				     wrongValue: because the agent does not support
				     notInService (e.g., an agent which does not support
				     createAndWait), or
				
				     inconsistentValue: because the agent is unable to take
				     the row out of service at this time, perhaps because it
				     is in use and cannot be de-activated.
				
				(7) the return value can indicate the following error:
				
				     inconsistentValue: because the agent is unable to
				     remove the row at this time, perhaps because it is in
				     use and cannot be de-activated.
				(8) the transition to D can fail, e.g., if the values of the
				conceptual row are inconsistent, then the error code would
				be inconsistentValue.
				
				NOTE: Other processing of (this and other varbinds of) the
				set request may result in a response other than noError
				being returned, e.g., wrongValue, noCreation, etc.
				
				
				                  Conceptual Row Creation
				
				There are four potential interactions when creating a
				conceptual row:  selecting an instance-identifier which is
				not in use; creating the conceptual row; initializing any
				objects for which the agent does not supply a default; and,
				making the conceptual row available for use by the managed
				device.
				
				Interaction 1: Selecting an Instance-Identifier
				
				The algorithm used to select an instance-identifier varies
				for each conceptual row.  In some cases, the instance-
				identifier is semantically significant, e.g., the
				destination address of a route, and a management station
				selects the instance-identifier according to the semantics.
				
				In other cases, the instance-identifier is used solely to
				distinguish conceptual rows, and a management station
				without specific knowledge of the conceptual row might
				examine the instances present in order to determine an
				unused instance-identifier.  (This approach may be used, but
				it is often highly sub-optimal; however, it is also a
				questionable practice for a naive management station to
				attempt conceptual row creation.)
				
				Alternately, the MIB module which defines the conceptual row
				might provide one or more objects which provide assistance
				in determining an unused instance-identifier.  For example,
				if the conceptual row is indexed by an integer-value, then
				an object having an integer-valued SYNTAX clause might be
				defined for such a purpose, allowing a management station to
				issue a management protocol retrieval operation.  In order
				to avoid unnecessary collisions between competing management
				stations, `adjacent' retrievals of this object should be
				different.
				
				Finally, the management station could select a pseudo-random
				number to use as the index.  In the event that this index
				was already in use and an inconsistentValue was returned in
				response to the management protocol set operation, the
				management station should simply select a new pseudo-random
				number and retry the operation.
				
				A MIB designer should choose between the two latter
				algorithms based on the size of the table (and therefore the
				efficiency of each algorithm).  For tables in which a large
				number of entries are expected, it is recommended that a MIB
				object be defined that returns an acceptable index for
				creation.  For tables with small numbers of entries, it is
				recommended that the latter pseudo-random index mechanism be
				used.
				
				Interaction 2: Creating the Conceptual Row
				
				Once an unused instance-identifier has been selected, the
				management station determines if it wishes to create and
				activate the conceptual row in one transaction or in a
				negotiated set of interactions.
				
				Interaction 2a: Creating and Activating the Conceptual Row
				
				The management station must first determine the column
				requirements, i.e., it must determine those columns for
				which it must or must not provide values.  Depending on the
				complexity of the table and the management station's
				knowledge of the agent's capabilities, this determination
				can be made locally by the management station.  Alternately,
				the management station issues a management protocol get
				operation to examine all columns in the conceptual row that
				it wishes to create.  In response, for each column, there
				are three possible outcomes:
				
				     - a value is returned, indicating that some other
				     management station has already created this conceptual
				     row.  We return to interaction 1.
				
				     - the exception `noSuchInstance' is returned,
				     indicating that the agent implements the object-type
				     associated with this column, and that this column in at
				     least one conceptual row would be accessible in the MIB
				     view used by the retrieval were it to exist. For those
				     columns to which the agent provides read-create access,
				     the `noSuchInstance' exception tells the management
				     station that it should supply a value for this column
				     when the conceptual row is to be created.
				     - the exception `noSuchObject' is returned, indicating
				     that the agent does not implement the object-type
				     associated with this column or that there is no
				     conceptual row for which this column would be
				     accessible in the MIB view used by the retrieval.  As
				     such, the management station can not issue any
				     management protocol set operations to create an
				     instance of this column.
				
				Once the column requirements have been determined, a
				management protocol set operation is accordingly issued.
				This operation also sets the new instance of the status
				column to `createAndGo'.
				
				When the agent processes the set operation, it verifies that
				it has sufficient information to make the conceptual row
				available for use by the managed device.  The information
				available to the agent is provided by two sources:  the
				management protocol set operation which creates the
				conceptual row, and, implementation-specific defaults
				supplied by the agent (note that an agent must provide
				implementation-specific defaults for at least those objects
				which it implements as read-only).  If there is sufficient
				information available, then the conceptual row is created, a
				`noError' response is returned, the status column is set to
				`active', and no further interactions are necessary (i.e.,
				interactions 3 and 4 are skipped).  If there is insufficient
				information, then the conceptual row is not created, and the
				set operation fails with an error of `inconsistentValue'.
				On this error, the management station can issue a management
				protocol retrieval operation to determine if this was
				because it failed to specify a value for a required column,
				or, because the selected instance of the status column
				already existed.  In the latter case, we return to
				interaction 1.  In the former case, the management station
				can re-issue the set operation with the additional
				information, or begin interaction 2 again using
				`createAndWait' in order to negotiate creation of the
				conceptual row.
				                         NOTE WELL
				
				     Regardless of the method used to determine the column
				     requirements, it is possible that the management
				     station might deem a column necessary when, in fact,
				     the agent will not allow that particular columnar
				     instance to be created or written.  In this case, the
				     management protocol set operation will fail with an
				     error such as `noCreation' or `notWritable'.  In this
				     case, the management station decides whether it needs
				     to be able to set a value for that particular columnar
				     instance.  If not, the management station re-issues the
				     management protocol set operation, but without setting
				     a value for that particular columnar instance;
				     otherwise, the management station aborts the row
				     creation algorithm.
				
				Interaction 2b: Negotiating the Creation of the Conceptual
				Row
				
				The management station issues a management protocol set
				operation which sets the desired instance of the status
				column to `createAndWait'.  If the agent is unwilling to
				process a request of this sort, the set operation fails with
				an error of `wrongValue'.  (As a consequence, such an agent
				must be prepared to accept a single management protocol set
				operation, i.e., interaction 2a above, containing all of the
				columns indicated by its column requirements.)  Otherwise,
				the conceptual row is created, a `noError' response is
				returned, and the status column is immediately set to either
				`notInService' or `notReady', depending on whether it has
				sufficient information to (attempt to) make the conceptual
				row available for use by the managed device.  If there is
				sufficient information available, then the status column is
				set to `notInService'; otherwise, if there is insufficient
				information, then the status column is set to `notReady'.
				Regardless, we proceed to interaction 3.
				
				Interaction 3: Initializing non-defaulted Objects
				
				The management station must now determine the column
				requirements.  It issues a management protocol get operation
				to examine all columns in the created conceptual row.  In
				the response, for each column, there are three possible
				outcomes:
				     - a value is returned, indicating that the agent
				     implements the object-type associated with this column
				     and had sufficient information to provide a value.  For
				     those columns to which the agent provides read-create
				     access (and for which the agent allows their values to
				     be changed after their creation), a value return tells
				     the management station that it may issue additional
				     management protocol set operations, if it desires, in
				     order to change the value associated with this column.
				
				     - the exception `noSuchInstance' is returned,
				     indicating that the agent implements the object-type
				     associated with this column, and that this column in at
				     least one conceptual row would be accessible in the MIB
				     view used by the retrieval were it to exist. However,
				     the agent does not have sufficient information to
				     provide a value, and until a value is provided, the
				     conceptual row may not be made available for use by the
				     managed device.  For those columns to which the agent
				     provides read-create access, the `noSuchInstance'
				     exception tells the management station that it must
				     issue additional management protocol set operations, in
				     order to provide a value associated with this column.
				
				     - the exception `noSuchObject' is returned, indicating
				     that the agent does not implement the object-type
				     associated with this column or that there is no
				     conceptual row for which this column would be
				     accessible in the MIB view used by the retrieval.  As
				     such, the management station can not issue any
				     management protocol set operations to create an
				     instance of this column.
				
				If the value associated with the status column is
				`notReady', then the management station must first deal with
				all `noSuchInstance' columns, if any.  Having done so, the
				value of the status column becomes `notInService', and we
				proceed to interaction 4.
				Interaction 4: Making the Conceptual Row Available
				
				Once the management station is satisfied with the values
				associated with the columns of the conceptual row, it issues
				a management protocol set operation to set the status column
				to `active'.  If the agent has sufficient information to
				make the conceptual row available for use by the managed
				device, the management protocol set operation succeeds (a
				`noError' response is returned).  Otherwise, the management
				protocol set operation fails with an error of
				`inconsistentValue'.
				
				                         NOTE WELL
				
				     A conceptual row having a status column with value
				     `notInService' or `notReady' is unavailable to the
				     managed device.  As such, it is possible for the
				     managed device to create its own instances during the
				     time between the management protocol set operation
				     which sets the status column to `createAndWait' and the
				     management protocol set operation which sets the status
				     column to `active'.  In this case, when the management
				     protocol set operation is issued to set the status
				     column to `active', the values held in the agent
				     supersede those used by the managed device.
				
				If the management station is prevented from setting the
				status column to `active' (e.g., due to management station
				or network failure) the conceptual row will be left in the
				`notInService' or `notReady' state, consuming resources
				indefinitely.  The agent must detect conceptual rows that
				have been in either state for an abnormally long period of
				time and remove them.  It is the responsibility of the
				DESCRIPTION clause of the status column to indicate what an
				abnormally long period of time would be.  This period of
				time should be long enough to allow for human response time
				(including `think time') between the creation of the
				conceptual row and the setting of the status to `active'.
				In the absence of such information in the DESCRIPTION
				clause, it is suggested that this period be approximately 5
				minutes in length.  This removal action applies not only to
				newly-created rows, but also to previously active rows which
				are set to, and left in, the notInService state for a
				prolonged period exceeding that which is considered normal
				for such a conceptual row.
				                 Conceptual Row Suspension
				
				When a conceptual row is `active', the management station
				may issue a management protocol set operation which sets the
				instance of the status column to `notInService'.  If the
				agent is unwilling to do so, the set operation fails with an
				error of `wrongValue' or `inconsistentValue'.  Otherwise,
				the conceptual row is taken out of service, and a `noError'
				response is returned.  It is the responsibility of the
				DESCRIPTION clause of the status column to indicate under
				what circumstances the status column should be taken out of
				service (e.g., in order for the value of some other column
				of the same conceptual row to be modified).
				
				
				                  Conceptual Row Deletion
				
				For deletion of conceptual rows, a management protocol set
				operation is issued which sets the instance of the status
				column to `destroy'.  This request may be made regardless of
				the current value of the status column (e.g., it is possible
				to delete conceptual rows which are either `notReady',
				`notInService' or `active'.)  If the operation succeeds,
				then all instances associated with the conceptual row are
				immediately removed."                                                 5"HUAWEI-DSLITE-MIB is used to configure alarms.
				" �"Huawei Industrial Base
				  Bantian, Longgang
				   Shenzhen 518129
				   People's Republic of China
				   Website: http://www.huawei.com
				   Email: support@huawei.com
				 " "201801131500Z" "201712131132Z" "201711021132Z" "201708291132Z" "201708031000Z" "201706241117Z" "201706151111Z" "201706052111Z" "201703141945Z" "201701101844Z" "201604271030Z" "201512161030Z" "201512041230Z" "201511171030Z" "201509282100Z" "201505291130Z" "201502281600Z" "201412290000Z" "201412270000Z" "201407010000Z" "201403280000Z" "201302050000Z" "Modify the Discription." ?"Add hwVSMBoardNotSupportAlarm and hwVSMBoardNotSupportResume." :"Add hwMAPBoardNotSupport and hwMAPBoardNotSupportResume." m"Add hwCGNDAPUPCPConfigInconsistent and hwCGNDAPPoolSectionSyncFail. Modify hwCGNDAPBackupConfigInconsistent" D"Add hwCGNGlobalPoolReleaseFail and hwCGNDAPBackupConfigInconsisten" "Add description" "Add description"  "Add VSUServiceFaultResumeAlarm" "Add CGN server map alarm." O"Add hwVSUDevicePerformanceExhaustAlarm and hwVSUDevicePerformanceExhaustAlarm" -"Modify DevicePerformance change CGN to VSU." f"Add hwCGNRadiusSpecificAddressUserNumFullAlarm and hwCGNRadiusSpecificAddressUserNumFullResumeAlarm."  "Modify hwCGNAlarmbpsRate name." &"Modify mutlti CPU Performance alarm." #"Add mutlti CPU Performance alarm." "Add mutlti board alarm." $"Add 'Session Spec Overload Alarm'." "Rename dap traps." "Add dap traps." "Add 'Device Performance'." *"Add 'No Pat','Access list','User table'." "Initial version."       !--Janurary 13, 2018 at 15:00 GMT
               2"Enable or Disable DS-Lite tunnel PMTU detection."                       1"Timeout value of DS-Lite tunnel PMTU detection."                       ,"Duration of DS-Lite tunnel PMTU detection."                       s"DS-Lite will modify TCP SYNC packet'MSS to this value. 
				Valid range : 536~1460. 1461 means do not modify MSS."                       #"Threshold of routing table alarm."                       )"Threshold of DS-Lite connections alarm."                       *"Aging time of DS-Lite tunnel PMTU items."                       P"Indicate which type of aging time is to configure by hwDsliteSessionAgingTime."                       d"Aging time value of type hwDsliteSessionAgingTimeType.
				(fragment :millisecond ,other : second)"                           v"Indicate which type the routing table alarm is . 
				4 for ipv4 routing table alarm,6 for ipv6 routing table alarm."                       T"The object indicates the type of instance in which port usage reaches a threshold."                       f"The object indicates the user CPE IP address in an instance in which port usage reaches a threshold."                       �"The object indicates the protocol type of an instance in which port usage reaches a threshold. The value can be TCP, UDP, ICMP, or TOTAL."                       j"The object indicates the name of an address pool of an instance in which port usage reaches a threshold."                       ;"Indicate the IP address whose port usage reach threshold "                       s"The object indicates the name of an instance in which user- or address pool-based port usage reaches a threshold."                       \"The object indicates the alarm threshold of user- or public address pool-based port usage."                       �"The value of this object specifies the number of ports used when user- or public address pool-based port usage reaches an alarm threshold."                       �"The object indicates the slot ID of a board on which user- or public address pool-based port usage reaches an alarm threshold."                       "The object indicates the CPU ID of a board on which user- or public address pool-based port usage reaches an alarm threshold."                       l"The value of this object specifies the number of IPv4 sessions when port usage reaches an alarm threshold."                       S"The object indicates the user ID used when port usage reaches an alarm threshold."                       '"Indicate the threshold of the chassis"                       +"Indicate the total session of the chassis"                       �"The value of this object specifies the number of IP addresses used in an address pool when port usage reaches an alarm threshold."                       "Access user number "                       ?"The value of this object specifies the number of user tables."                       6"The object indicates the usage of the rate at bit/s."                       7"The object indicates the usage of the rate at Mbit/s."                       4"The object indicates the usage of the rate at pps."                       !"The object indicates CPU usage."                       b"The value of this object specifies the number of used addresses in a global static address pool."                       @"The object indicates the name of a global static address pool."                       "Indicate the alarm reason"                       D"The object indicates the sub-mask of a global static address pool."                       @"The object indicates the mask of a global static address pool."                       �"The object indicates the name of the VSUF-80/VSUF-160 board on which user- or public address pool-based port usage reaches an alarm threshold."                       F"The value of this object specifies the number of server-map entries."                       2"The object indicates the VSU service error code."                       6"The object indicates the VSU service fault keywords."                       D"The object indicates the description of a VSU service fault cause."                       '"Indicate the LPU board's frame number"                       &"Indicate the LPU board's slot number"                       "Indicate the function's name."                        "Indicate the LPU board's name."                       3"This table is used to configure DS-Lite instance."                       3"This table is used to configure DS-Lite instance."                       "Instance name."                       G"Indicates whether address groups of this instance use full-cone mode."                       "Local ip of this instance."                       "Mtu of this instance."                       *"Whether log of this instance is enabled."                       0"Whether Portlimit of this instance is enabled."                       0"Whether Portlimit of this instance is enabled."                       C"Traffic class value of IPv6 packets when entering DS-Lite tunnel."                       2"Whether to copy IPv6 packet'DSCP to IPv4 packet."                       !"IPv6 prefix length of local ip."                       /"Threshold of used NAT port number when alarm."                       T"Indicates the application protocols that need DS-Lite to process at NAT transform."                       "Create or delete table row."                       J"This table is used to configure processing board for a DS-Lite instance."                       "Description."                       +"Instance name the slot(board) belongs to."                       )"Indicates which slot the instance uses."                       A"Indicates the instance uses the board as a master or slave one."                       "Create or delete table row."                       K"This table is used to configure the address groups of a DS-Lite instance."                       "Description."                       -"Instance name the address group belongs to."                       "Address group name."                       !"Start address of address group."                       "End address of address group."                       :"Indicates whether the address groups use full-cone mode."                       "Create or delete table row."                       F"This table is used to configure the remote IP of a DS-Lite instance."                       "Description."                       )"Instance name the remote ip belongs to."                       "Remote IPv6 address."                       $"Remote IPv6 address prefix length."                       "Create or delete table row."                       D"This table is used to configure a outbound for a DS-Lite instance."                       "Description."                       ("Instance name the outbound belongs to."                       "Acl6 number of the outbound."                       %"Address group name of the outbound."                       "Create or delete table row."                       C"This table is used to configure log hosts for a DS-Lite instance."                       "Description."                       ("Instance name the log host belongs to."                       "Source ip of log host."                       "Source port of log host."                       "Host ip of log host."                       "Host port of log host."                       "Create or delete table row."                       @"This table is used to configure servers in a DS-Lite instance."                       "Description."                       ,"Instance name the server is configured in."                       "Server protocol."                       ."Published public ip address of this server ."                       ("Published public port of this server ."                       $"Inside ip address of this server ."                       "Inside port of this server ."                       "CPE which the server is from."                       "Create or delete table row."                       H"This table is used to configure session limits for a DS-Lite instance."                       "Description."                        "Instance name that is limited."                       -"Session limit type : tcp or udp or totally."                       "The limit number."                       "Create or delete table row."                       E"This table is used to configure port limits for a DS-Lite instance."                       "Description."                        "Instance name that is limited."                       )"Port limit type: tcp or udp or totally."                       "The limit number."                       "Create or delete table row."                       :"This table provides statistical information of DS-Lite ."                       "Description."                       5"Indicate the information is from which slot(board)."                       :"Indicate the information is from which cpu of the board."                       "Discarded packet count."                       "Received packet count."                       "Transmitted packet count."                       "Current IPv4 Session number."                       "Current IPv6 Session number."                       "Create or delete table row."                       K"This table is used to configure the address groups of a DS-Lite instance."                       "Description."                       -"Instance name the address group belongs to."                       "Address group name."                        "The slot ID of NAT board,1..16"                       "The ID of CPU,0..3"                       #"Port usage of specific IP address"                       ""Port usage of full address group"                       "Port usage of port-range"                       "Port usage of portforwarding"                       #"Port usage of specific IP address"                       "Create or delete table row."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                       "Description."                           "Description."                       "Description."                       "Description."                       "Description."                           "Description."                       "Description."                       "Description."                       "Description."                           "Description."                 v"The object indicates the alarm generated when the total number of session connections exceeds a specified threshold."                 "Description."                 ^"The object indicates the alarm generated when user port usage exceeds a specified threshold."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 �"The object indicates the alarm generated when the number of IPV4 sessions exceeds a specified threshold on a NAT/DS-Lite/NAT64 board."                 b"The object indicates the clear alarm generated when CGN user port usage falls to a normal range."                 "Description."                 �"The object indicates the alarm generated when the number of pre-allocated ports based on a public network address pool reaches a specified threshold."                 �"The object indicates the clear alarm generated when the number pre-allocated ports based on a public network address pool falls to a normal range."                 "Description."                 "Description."                 "Description."                 "Description."                 "User port exhaust alarm."                 !"User port exhaust resume alarm."                 W"The object indicates the alarm generated when system session connections are used up."                 _"The object indicates the alarm generated when the session connections become available again."                 ["The object indicates the alarm generated when ports in a public address pool are used up."                 p"The object indicates the clear alarm generated when the ports in a public address pool become available again."                 u"The object indicates the alarm generated when usage of the NAT64 no-PAT address pool reaches a specified threshold."                 u"The object indicates the clear alarm generated when usage of the NAT64 no-PAT address pool falls to a normal range."                 _"The object indicates the alarm generated when addresses in a no-PAT address pool are used up."                 p"The object indicates the clear alarm generated when addresses in a no-PAT address pool become available again."                 }"The object indicates the alarm generated when address usage of the no-PAT address pool reaches a specified alarm threshold."                 �"The object indicates the clear alarm generated when no-PAT of IP addresses in the address pool usage reaches a specified threshold is cleared."                 0"The number of access-users reach the threshold"                 0"The number of access-users within normal range"                  "The access-users exhaust alarm"                 '"The access-users exhaust resume alarm"                 H"The object indicates the alarm generated when user tables are used up."                 Y"The object indicates the clear alarm generated when user tables become available again."                 p"The object indicates the alarm generated when the number of created user tables reaches a specified threshold."                 h"The object indicates the clear alarm generated when the number of user tables falls to a normal range."                 i"The object indicates the alarm generated when CPU forwarding performance exceeds a specified threshold."                 R"The object indicates the clear alarm generated when CPU performance is restored."                 �"The object indicates the alarm generated when IP address usage of the global public IP address pool reaches a specified threshold."                 �"The object indicates the clear alarm generated when IP address usage of the global public IP address pool falls to a normal range."                 s"The object indicates the alarm generated when IP addresses in the global public network address pool are used up."                 ~"The object indicates the clear alarm generated when IP addresses in the global public network address pool become available."                 "Fail to apply for the subnet."                 "Fail to release the subnet."                 :"The number of subnet in the IP global pool is exhausted."                 2"The number of subnet in the device is exhausted."                 x"The object indicates the alarm generated when an attempt to apply for an address range in a global address pool fails."                 3"The number of subnet in the IP pool is exhausted."                 "Session spec overload alarm."                 %"Session spec overload resume alarm."                 v"The object indicates the alarm generated when the total number of session connections exceeds a specified threshold."                 j"The object indicates the clear alarm generated when the total number of session connections is restored."                 W"The object indicates the alarm generated when system session connections are used up."                 _"The object indicates the alarm generated when the session connections become available again."                 _"The object indicates the alarm generated when addresses in a no-PAT address pool are used up."                 >"Addresses in the no-pat public address pool became available"                 p"The object indicates the clear alarm generated when addresses in a no-PAT address pool become available again."                 �"The object indicates the clear alarm generated when no-PAT of IP addresses in the address pool usage reaches a specified threshold is cleared."                 �"The object indicates the alarm generated when the number of pre-allocated ports based on a public network address pool reaches a specified threshold."                 �"The object indicates the clear alarm generated when the number pre-allocated ports based on a public network address pool falls to a normal range."                 ["The object indicates the alarm generated when ports in a public address pool are used up."                 p"The object indicates the clear alarm generated when the ports in a public address pool become available again."                 f"The object indicates the alarm generated when port usage of CGN users exceeds a specified threshold."                 b"The object indicates the clear alarm generated when CGN user port usage falls to a normal range."                 H"The object indicates the alarm generated when user tables are used up."                 Y"The object indicates the clear alarm generated when user tables become available again."                 p"The object indicates the alarm generated when the number of created user tables reaches a specified threshold."                 h"The object indicates the clear alarm generated when the number of user tables falls to a normal range."                 i"The object indicates the alarm generated when CPU forwarding performance exceeds a specified threshold."                 R"The object indicates the clear alarm generated when CPU performance is restored."                 G" The number of radius-specific-address users reaches the upper limit."                 L"The number of radius-specific-address users is lower than the upper limit."                 V"The object indicates the alarm generated when CPU forwarding performance is used up."                 c"The object indicates the clear alarm generated when CPU forwarding performance becomes available."                 �"The object indicates the alarm generated when address usage of NAT64 no-PAT address pool reaches a specified threshold in a virtual cluster scenario."                 �"The object indicates the clear alarm generated when address usage of NAT64 no-PAT address pool falls to a normal range in a virtual cluster scenario."                 _"The object indicates the alarm generated when server-map usage reaches a specified threshold."                 _"The object indicates the clear alarm generated when server-map usage falls to a normal range."                 O"The object indicates the alarm generated when server-map entries are used up."                 `"The object indicates the clear alarm generated when server-map entries become available again."                 D"The object indicates the alarm generated when a VSU service fails."                 \"The object indicates the clear alarm generated when a VSU service becomes available again."                 "Fail to release the subnet."                 ["The global address pool configurations of the master and backup devices are inconsistent."                 t"The configuration of the local-up-id of the global address pool is inconsistent with the effective UPID on the CP."                 g"The peer processing failed during the synchronization of address sections of the global address pool."                 !"The board does not support MAP."                 �"The alarm was cleared because the board that does not support MAP was removed or the MAP configuration was deleted from the board."                 +"The board does not support this function."                 �"The alarm was cleared because the board that does not support this function was removed or this function configuration was deleted from the board."                         "Description."                   "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                     "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                            