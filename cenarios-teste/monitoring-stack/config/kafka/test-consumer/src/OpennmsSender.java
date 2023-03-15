

import java.io.IOException;
import java.io.OutputStream;

import java.net.Socket;
import java.net.UnknownHostException;



public class OpennmsSender {
    public static void main(String[] args) throws UnknownHostException, IOException{
        String host = "192.168.1.30"; // Replace with the IP address of your OpenNMS server
        int port = 5817;

        // Create a new socket and connect to the OpenNMS eventd service
        Socket socket = new Socket(host, port);
        OutputStream outputStream = socket.getOutputStream();
        String xml = "<event><uei>uei.foohello</uei><interface>192.168.1.30</interface>";
        outputStream.write(xml.getBytes());
        // Close the output stream and socket
        outputStream.close();
        socket.close();
      
    }



}
