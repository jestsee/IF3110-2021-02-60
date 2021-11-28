package com.dorayaki.model;

import java.sql.ResultSet;

public class Dorayaki {
    private String varian;
    // tambahin atribut apalagi ya?

    public Dorayaki(ResultSet rs) {
        try {
            this.varian = rs.getString("name");
        } catch (Exception e) {
            e.printStackTrace();
            this.varian = null;
        }
    }

    public String getVarian() {
        return this.varian;
    }

    public void setVarian( String var ) {
        this.varian = var;
    }

    @Override
    public String toString() {
        return this.varian;
    }
}
