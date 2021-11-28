package com.dorayaki.services;

import java.sql.ResultSet;
import java.util.ArrayList;

import javax.jws.WebService;

import com.dorayaki.model.DBHandler;
import com.dorayaki.model.DorayakiRequest;
import com.dorayaki.model.SendEmail;

@WebService
public class RequestServiceImpl implements RequestService {

    static ResultSet rs;

    @Override
    // Melakukan request pengiriman dorayaki (penambahan stok)
    public String addRequest(String varian, Integer jumlah) {
        DBHandler db = new DBHandler();
        String response = "";

        // cari dulu apakah varian tersedia
        String query = String.format("SELECT * FROM recipe WHERE name LIKE '%s'", varian);
        System.out.println(query);
        rs = db.execute(query);

        try {

            if (db.isEmptyRecord(rs)) { // kalo kosong
                // TODO do something with webservice
                response = "Varian dorayaki tidak ditemukan";

            } else {

                String sql1 = "INSERT INTO request (varian, jumlah, status, waktu)";
                String sql2 = String.format(" VALUES ('%s', '%s', 'WAITING', NOW())", varian, jumlah.toString());
                String sql = sql1 + sql2;
                System.out.println(sql);
                db.update(sql);
                response = "Request berhasil ditambahkan";

                String[] emails = getEmails();

                for (int i = 0; i < emails.length; i++) {
                    SendEmail email = new SendEmail(emails[i]);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            db.closeConnection();
        }
        return response;
    }

    @Override
    // Membaca status request pengiriman yang dilakukan toko tersebut
    public DorayakiRequest[] getAllRequestStatus() {

        DBHandler db = new DBHandler();
        String sql = "SELECT * FROM request";

        try {

            rs = db.execute(sql);
            ArrayList<DorayakiRequest> dr = new ArrayList<DorayakiRequest>();
            while (rs.next()) {
                dr.add(new DorayakiRequest(rs));
            }

            DorayakiRequest[] dreq = new DorayakiRequest[dr.size()];
            for (int i = 0; i < dr.size(); i++) {
                dreq[i] = dr.get(i);
                // System.out.println(dreq[i]);
            }
            return dreq;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            db.closeConnection();
        }
    }

    public String[] getEmails() {

        DBHandler db = new DBHandler();
        String sqlMail = "SELECT * FROM user";

        try {

            ArrayList<String> mails = new ArrayList<String>();
            ResultSet rsMail = db.execute(sqlMail);
            while (rsMail.next()) {
                mails.add(rsMail.getString("email"));
            }
            String[] arrmail = new String[mails.size()];
            for (int i = 0; i < mails.size(); i++) {
                arrmail[i] = mails.get(i);
            }

            return arrmail;

        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            return null;
        } finally {
            db.closeConnection();
        }

    }
}
