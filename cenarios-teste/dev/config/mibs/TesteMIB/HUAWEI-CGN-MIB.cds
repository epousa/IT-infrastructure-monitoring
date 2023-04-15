 �-- Copyright (C) 2015 by HUAWEI TECHNOLOGIES. All rights reserved.
-- HUAWEI-CGN-MIB.mib
-- Monday, May 07, 2012 at 10:00:00
-- Version:V2.21
  \�"The RowStatus textual convention is used to manage the
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
				destiCGNion address of a route, and a management station
				selects the instance-identifier according to the semantics.
				
				In other cases, the instance-identifier is used solely to
				distinguish conceptual rows, and a management station
				without specific knowledge of the conceptual row might
				examine the instances present in order to determine an
				unused instance-identifier.  (This approach may be used, but
				it is often highly sub-optimal; however, it is also a
				questionable practice for a naive management station to
				attempt conceptual row creation.)
				
				AlterCGNely, the MIB module which defines the conceptual row
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
				knowledge of the agent's capabilities, this determiCGNion
				can be made locally by the management station.  AlterCGNely,
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
				immediately removed."                                 R"The HUAWEI-CGN-MIB contains objects to Manage the CGN 
				configuration.
				" �"Huawei Industrial Base

				  Bantian, Longgang

				   Shenzhen 518129

				   People's Republic of China

				   Website: http://www.huawei.com

				   Email: support@huawei.com

				 " "201508071100Z" "201506021600Z" "201504161143Z" "201502251446Z" "201412222046Z" "201410151143Z" "201409152106Z" "201408211140Z" "201407081140Z" "201302211530Z" "201305221130Z" "V2.21, initial version." "V2.20, initial version." "V2.19, initial version." D"Change the type of leaf node of hwCGNStatisticsPortNumDistrTable ." C"Add a new table for the statistisc of distribution of port usage." "V2.16, initial version." "V2.15, initial version." "V2.14, initial version." "V2.13, initial version." "V2.11, initial version." "V2.12, initial version."       --Aug.7, 2015 at 11:00 GMT
           C"The hwCGNInstanceTable provides the configuration of CGN instance"                       "Description."                       "Instance type."                       "Instance index."                       "Instance name."                        "NAT session limit enable flag."                       "ICMP session limit number."                       "TCP session limit number."                       "UDP session limit number."                       "Total session limit number."                       "NAT port range number."                       A"The hwCGNSessionTable provides the configuration of CGN Session"                       "Description."                       "Physical index."                       !"Total session number,unit is M."                       L"The hwCGNAddressGroupTable provides the configuration of CGN address group"                       "Description."                       "Instance type."                       "Instance index."                       "Address group index."                       "Instance name."                       "Address group name."                       "Address group usage."                       P"The hwCGNUserPortInformationTable provides the configuration of CGN user port."                       "Description."                       
"User ID."                       "User port ICMP number."                       "User port TCP number."                       "User port UDP number."                       "User port total number."                       U"The hwCGNUserSessionInformationTable provides the configuration of CGN user session"                       "Description."                       
"User ID."                       "User session ICMP number"                       "User session TCP number."                       "User session UDP number."                       "User session total number."                       #"Reverse user session ICMP number."                       ""Reverse user session TCP number."                       ""Reverse user session UDP number."                       I"The hwCGNDsliteTunnelTable provides the configuration of DS-LITE tunnel"                       "Description."                       "Physical index."                       "Current tunnel number."                       J"The hwCGNTransmitAbilityTable provides the configuration of CGN transmit"                       "Description."                       "Physical index."                       ,"Total packet forwarding throughput number."                       )"Total bit forwarding throughput number."                       4"Total packet reverse forwarding throughput number."                       1"Total bit reverse forwarding throughput number."                       "Total flow setup rate."                        "Total reverse flow setup rate."                       "The current session table"                       "Description."                       "Physical index."                       "Current session number."                       L"The hwCGNAddressGroupTable provides the configuration of CGN address group"                       "Description."                       "Instance type,NAT or ds-lite."                       "NAT or ds-lite instance index"                       "Address group index"                       "Address group section ID"                       "Address group start address"                       "Address group end address"                       "Address group mask address"                       "Address group mask number"                       ""Address group VPN instance name."                       ""NAT statistics information table"                       "Description."                       "Physical index."                       "NAT discard number."                       "NAT error number."                       "Server-map number."                       "Frag SSN number."                       "NAT444 session number."                       "Ds-lite session number."                       &"NAT Packets received from interface."                       '"NAT Packets transmitted to interface."                       "NAT session table number."                       "NAT user table number."                       )"Total current nat64 sessions in Memory."                       '"Total current PCP sessions in Memory."                       -"Current PCP sessions from NAT444 in Memory."                       -"Current PCP sessions from DSLITE in Memory."                       ,"Current PCP sessions from LAFT6 in Memory."                       "Current session speed."                       "Total setup sessions."                       "Total teardown sessions."                       C"The hwCGNSessionTable provides the configuration of CGN bandwidth"                       "Description."                       "Physical index."                       "Bandwidth number,unit is G."                       C"The hwCGNSessionTable provides the configuration of CGN bandwidth"                       "Description."                       "Slot index."                        "Board session number,unit is M"                       "Board current session number."                        "Board packet thoughput number."                       ("Board reverse packet thoughput number."                       "Board bit thoughput number."                       %"Board reverse bit thoughput number."                       "Flow setup number "                       "Reverse flow setup number ."                       ""Board bandwidth number,unit is G"                       "Board dslite tunnel number"                           !"Total sesssion number,uint is M"                        "Total current sesssion number."                       !"Total packet throughput number."                       )"Total reverse packet throughput number."                       "Total bit throughput number."                       &"Total reverse bit throughput number."                       "Total flow setup number."                       ""Total reverse flow setup number."                       !"Total bandwith number,unit is G"                       "Total dslite tunnel number"                       Z"The hwCGNSessionTable provides the configuration of address-group exclude ip information"                       "Description."                       "Instance type."                       "Instance index."                       "Address-group index."                       "Address-group index."                       "Exclude rule index."                       "Exclude start ip address."                       "Exclude end ip address."                       $"NAT statistics information discard"                       "Description."                       "Physical index."                        "NAT discard information index."                       "NAT discard information."                       "NAT discard number."                       ;"Statistic the distribution of port usage of NAT instance."                       "Description."                       "The instance type."                       "The instance index."                       "The instance name."                       /"The distribution of port usage from 0 to 127."                       1"The distribution of port usage from 128 to 255."                       1"The distribution of port usage from 256 to 511."                       2"The distribution of port usage from 512 to 1023."                       3"The distribution of port usage from 1024 to 2047."                       3"The distribution of port usage from 2048 to 4095."                       3"The distribution of port usage from 4096 to 6143."                       3"The distribution of port usage from 6144 to 8191."                       4"The distribution of port usage from 8192 to 10239."                       5"The distribution of port usage from 10240 to 65535."                       C"The hwCGNSessionTable provides the configuration of CGN bandwidth"                       "Description."                       "Slot Index."                       "Frame Index."                        "Board session number,unit is M"                       "Board current session number."                        "Board packet thoughput number."                       ("Board reverse packet thoughput number."                       "Board bit thoughput number."                       %"Board reverse bit thoughput number."                       "Flow setup number "                       "Reverse flow setup number ."                       ""Board bandwidth number,unit is G"                       "Board dslite tunnel number"                               "Description."                   "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."         --modified
       "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                 "Description."                            