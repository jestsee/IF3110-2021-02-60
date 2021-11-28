package com.dorayaki.services;

import java.sql.ResultSet;
import java.util.ArrayList;
import javax.jws.WebService;

import com.dorayaki.model.DBHandler;
import com.dorayaki.model.Dorayaki;

@WebService
public class DorayakiServiceImpl implements DorayakiService{
    
    @Override
    // Membaca varian dorayaki yang disediakan pabrik
    public Dorayaki[] getVarians() {
        
        DBHandler db = new DBHandler();
        String sql = "SELECT name FROM recipe";
        
        try {
            
            ArrayList<Dorayaki> dors = new ArrayList<Dorayaki>();
            ResultSet rs = db.execute(sql);

            while(rs.next()) {
                dors.add(new Dorayaki(rs));
            }

            Dorayaki[] dorayakis = new Dorayaki[dors.size()];
            for (int i=0; i < dors.size(); i++) {
                dorayakis[i] = dors.get(i);
            }
            return dorayakis;
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            db.closeConnection();
        }
    }

}
