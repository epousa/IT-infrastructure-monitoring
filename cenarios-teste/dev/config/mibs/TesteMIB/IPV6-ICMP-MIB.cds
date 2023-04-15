 �-- =================================================================
-- Description: IPV6ICMP mib
-- Reference:   This mib was extracted from RFC2466
-- =================================================================
                             D"The MIB module for entities implementing
             the ICMPv6."-"           Dimitry Haskin

              Postal: Bay Networks, Inc.
                      660 Techology Park Drive.
                      Billerica, MA  01821
                      US

                 Tel: +1-978-916-8124
              E-mail: dhaskin@baynetworks.com

                      Steve Onishi

              Postal: Bay Networks, Inc.
                      3 Federal Street
                      Billerica, MA 01821
                      US

                 Tel: +1-978-916-3816
              E-mail: sonishi@baynetworks.com"                   �"IPv6 ICMP statistics. This table contains statistics
            of ICMPv6 messages that are received and sourced by
            the entity."                       "An ICMPv6 statistics entry containing
            objects at a particular IPv6 interface.
            
            Note that a receiving interface is
            the interface to which a given ICMPv6 message
            is addressed which may not be necessarily
            the input interface for the message.
            
            Similarly,  the sending interface is
            the interface that sources a given
            ICMP message which is usually but not
            necessarily the output interface for the message."                      M"The total number of ICMP messages received
            by the interface which includes all those
            counted by ipv6IfIcmpInErrors. Note that this
            interface is the interface to which the
            ICMP messages were addressed which may not be
            necessarily the input interface for the messages."                       �"The number of ICMP messages which the interface
            received but determined as having ICMP-specific
            errors (bad ICMP checksums, bad length, etc.)."                       ]"The number of ICMP Destination Unreachable
            messages received by the interface."                       �"The number of ICMP destination
            unreachable/communication administratively
            prohibited messages received by the interface."                       T"The number of ICMP Time Exceeded messages
             received by the interface."                       X"The number of ICMP Parameter Problem messages
             received by the interface."                       T"The number of ICMP Packet Too Big messages
            received by the interface."                       U"The number of ICMP Echo (request) messages
             received by the interface."                       P"The number of ICMP Echo Reply messages received
            by the interface."                       U"The number of ICMP Router Solicit messages
             received by the interface."                       Z"The number of ICMP Router Advertisement messages
            received by the interface."                       W"The number of ICMP Neighbor Solicit messages
             received by the interface."                       \"The number of ICMP Neighbor Advertisement
            messages received by the interface."                       I"The number of Redirect messages received
            by the interface."                       ^"The number of ICMPv6 Group Membership Query
            messages received by the interface."                       a"The number of ICMPv6 Group Membership Response messages
            received by the interface."                       b"The number of ICMPv6 Group Membership Reduction messages
            received by the interface."                       �"The total number of ICMP messages which this
            interface attempted to send.  Note that this counter
            includes all those counted by icmpOutErrors."                      �"The number of ICMP messages which this interface did
            not send due to problems discovered within ICMP
            such as a lack of buffers.  This value should not
            include errors discovered outside the ICMP layer
            such as the inability of IPv6 to route the resultant
            datagram.  In some implementations there may be no
            types of error which contribute to this counter's
            value."                       Y"The number of ICMP Destination Unreachable
            messages sent by the interface."                       h"Number of ICMP dest unreachable/communication
             administratively prohibited messages sent."                       O"The number of ICMP Time Exceeded messages sent
            by the interface."                       S"The number of ICMP Parameter Problem messages
            sent by the interface."                       P"The number of ICMP Packet Too Big messages sent
            by the interface."                       P"The number of ICMP Echo (request) messages sent
            by the interface."                       L"The number of ICMP Echo Reply messages sent
            by the interface."                       V"The number of ICMP Router Solicitation messages
             sent by the interface."                       V"The number of ICMP Router Advertisement messages
            sent by the interface."                       X"The number of ICMP Neighbor Solicitation
             messages sent by the interface."                       X"The number of ICMP Neighbor Advertisement
            messages sent by the interface."                       �"The number of Redirect messages sent. For
            a host, this object will always be zero,
            since hosts do not send redirects."                       I"The number of ICMPv6 Group Membership Query
            messages sent."                       L"The number of ICMPv6 Group Membership Response
            messages sent."                       M"The number of ICMPv6 Group Membership Reduction
            messages sent."                               R"The compliance statement for SNMPv2 entities which
           implement ICMPv6."                   U"The ICMPv6 group of objects providing information
             specific to ICMPv6."                        