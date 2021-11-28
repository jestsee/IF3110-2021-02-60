package com.dorayaki.services;

import com.dorayaki.model.DorayakiRequest;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.DOCUMENT)
public interface RequestService {

    // Melakukan request pengiriman dorayaki (penambahan stok)
    @WebMethod
    public String addRequest(String varian, Integer jumlah);

    // Membaca status request pengiriman yang dilakukan toko tersebut
    @WebMethod
    public DorayakiRequest[] getAllRequestStatus();
}
