 �-- =================================================================
-- Description: IPV6-TCP-MIB
-- Reference:   This mib was extracted from RFC 2452
-- =================================================================
                         9"The MIB module for entities implementing TCP over IPv6."5"       Mike Daniele
    
                    Postal: Compaq Computer Corporation
                            110 Spitbrook Rd
                            Nashua, NH 03062.
                            US
    
                    Phone:  +1 603 884 1423
                    Email:  daniele@zk3.dec.com"                       Z"The compliance statement for SNMPv2 entities which
            implement TCP over IPv6."                   J"The group of objects providing management of
            TCP over IPv6."                             �"A table containing TCP connection-specific information,
            for only those connections whose endpoints are IPv6 addresses."                      
"A conceptual row of the ipv6TcpConnTable containing
            information about a particular current TCP connection.
            Each row of this table is transient, in that it ceases to
            exist when (or soon after) the connection makes the transition
            to the CLOSED state.
    
            Note that conceptual rows in this table require an additional
            index object compared to tcpConnTable, since IPv6 addresses
            are not guaranteed to be unique on the managed node."                      
"The local IPv6 address for this TCP connection. In
            the case of a connection in the listen state which
            is willing to accept connections for any IPv6
            address associated with the managed node, the value
            ::0 is used."                       0"The local port number for this TCP connection."                       2"The remote IPv6 address for this TCP connection."                       1"The remote port number for this TCP connection."                      �"An index object used to disambiguate conceptual rows in
            the table, since the connection 4-tuple may not be unique.
    
            If the connection's remote address (ipv6TcpConnRemAddress)
            is a link-local address and the connection's local address
            (ipv6TcpConnLocalAddress) is not a link-local address, this
            object identifies a local interface on the same link as
            the connection's remote link-local address.
    
            Otherwise, this object identifies the local interface that
            is associated with the ipv6TcpConnLocalAddress for this
            TCP connection.  If such a local interface cannot be determined,
            this object should take on the value 0.  (A possible example
            of this would be if the value of ipv6TcpConnLocalAddress is ::0.)
    
            The interface identified by a particular non-0 value of this
            index is the same interface as identified by the same value
            of ipv6IfIndex.
    
            The value of this object must remain constant during the life
            of the TCP connection."                      �"The state of this TCP connection.
    
            The only value which may be set by a management station is
            deleteTCB(12).  Accordingly, it is appropriate for an agent
            to return an error response (`badValue' for SNMPv1, 'wrongValue'
            for SNMPv2) if a management station attempts to set this
            object to any other value.
    
            If a management station sets this object to the value
            deleteTCB(12), then this has the effect of deleting the TCB
            (as defined in RFC 793) of the corresponding connection on
            the managed node, resulting in immediate termination of the
            connection.
    
            As an implementation-specific option, a RST segment may be
            sent from the managed node to the other TCP endpoint (note
            however that RST segments are not sent reliably)."                          