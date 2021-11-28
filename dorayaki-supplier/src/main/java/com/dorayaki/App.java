package com.dorayaki;

import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.ws.Endpoint;

import com.dorayaki.services.DorayakiServiceImpl;
import com.dorayaki.services.RequestServiceImpl;

/**
 * mvn clean compile assembly:single
 * .\target\demo-1.0-SNAPSHOT-jar-with-dependencies.jar
 */

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public class App {
    public static void main(String[] args) {
        final String addr = "http://localhost:8080/service/";
        Endpoint.publish(addr + "DorayakiService", new DorayakiServiceImpl());
        Endpoint.publish(addr + "RequestService", new RequestServiceImpl());
    }
}
