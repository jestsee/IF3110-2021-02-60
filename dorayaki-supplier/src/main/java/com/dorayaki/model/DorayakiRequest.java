package com.dorayaki.model;

import java.sql.ResultSet;

public class DorayakiRequest {
    private int jumlah;
    private int request_id;
    private Status status;
    private String varian;
    private String waktu;

    public DorayakiRequest(ResultSet rs) {
        try {
            this.request_id = rs.getInt("request_id");
            this.jumlah = rs.getInt("jumlah");
            this.status = stringToStatus(rs.getString("status"));
            this.varian = rs.getString("varian");
            this.waktu = rs.getString("waktu");
        } catch (Exception e) {
            e.printStackTrace();
            this.request_id = -1;
            this.jumlah = -1;
            this.status = Status.UNKNOWN;
            this.varian = null;
            this.waktu = null;
        }
    }

    public int getjumlah() {
        return this.jumlah;
    }

    public void setjumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    public Status getStatus() {
        return this.status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getVarian() {
        return this.varian;
    }

    public void setVarian(String varian) {
        this.varian = varian;
    }

    public String getWaktu() {
        return this.waktu;
    }

    public void setWaktu(String waktu) {
        this.waktu = waktu;
    }

    public Status stringToStatus(String s) {
        if (s.equals("WAITING")) {
            return Status.WAITING;
        } else if (s.equals("ACCEPTED")) {
            return Status.ACCEPTED;
        } else if (s.equals("DECLINED")) {
            return Status.DECLINED;
        } else {
            return Status.UNKNOWN;
        }
    }

    @Override
    public String toString() {
        String str = String.format("request_id: %s\nvarian: %s\njumlah: %d\nstatus: %s\nwaktu: %s\n", this.request_id,
                this.varian, this.jumlah,
                this.status, this.waktu);

        return str;
    }
}
