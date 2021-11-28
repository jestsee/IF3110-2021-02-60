package com.dorayaki.services;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

import com.dorayaki.model.Dorayaki;

@WebService
@SOAPBinding(style = Style.DOCUMENT) // apa RPC ya
public interface DorayakiService {

    // Membaca varian dorayaki yang disediakan pabrik
    @WebMethod
    public Dorayaki[] getVarians();

}
