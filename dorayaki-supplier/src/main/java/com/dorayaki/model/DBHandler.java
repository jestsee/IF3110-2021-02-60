package com.dorayaki.model;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBHandler {
    static final String dbDriver = "com.mysql.cj.jdbc.Driver";
	static final String dbUrl = "jdbc:mysql://localhost:3306/";
	static final String dbName = "user";
	static final String dbUsername = "root";
	static final String dbPassword = "password"; // disesuaiin aja sama pw db kalian

    public Connection connection;
    public PreparedStatement statement;
    public ResultSet rs;

    public void initialize() {
        try {
            
            Class.forName(dbDriver);
            this.connection = DriverManager.getConnection(dbUrl+dbName, dbUsername, dbPassword);
            System.out.println("Connected to database");
            // Statement statement = connection.createStatement();
            // ResultSet rs = statement.executeQuery("SELECT * FROM recipe");

            // ResultSetMetaData md = rs.getMetaData(); 
            // int colCount = md.getColumnCount();  

            // for (int i = 1; i <= colCount ; i++){  
            // String col_name = md.getColumnName(i);  
            // System.out.println(col_name);  
            // }

            // if (!rs.isBeforeFirst() ) {    
            //     System.out.println("No data"); 
            // } else {
            //     rs.next();
            //     System.out.println(rs.getString("name"));
            // }
       
        } catch (Exception e) {
            
            e.printStackTrace();
            System.out.println("Not Connected");
        }
    }

    // buat query yang ada return value nya kayak select
    public ResultSet execute(String query) {
        initialize();
        rs = null;

        try {
            
            statement = connection.prepareStatement(query);
            rs = statement.executeQuery();

        } catch (SQLException e) {
            
            e.printStackTrace();
        }
        
        return rs;
    }

    // buat query yang ga ada return value kayak update insert delete
    public void update(String query) {
        initialize();

        try {
            
            statement = connection.prepareStatement(query);
            statement.executeUpdate();

        } catch (SQLException e) {
            
            e.printStackTrace();
        }       
    }

    public boolean isEmptyRecord(ResultSet rs) {
        boolean empty = true;
        try {
            
            if(rs.isBeforeFirst()) {
                rs.next();
                empty = false;
            } else {
                System.out.println("Record empty"); 
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return empty;
    }

    public void closeConnection() {
        try {
            if (connection != null) {
                connection.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (rs != null) {
                rs.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
