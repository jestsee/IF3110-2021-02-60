var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS user (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255), email VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

// table bahanbaku
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `
  CREATE TABLE IF NOT EXISTS bahanbaku (
    idbahanbaku int NOT NULL AUTO_INCREMENT,
    namabahanbaku varchar(45) NOT NULL,
    amount int NOT NULL,
    PRIMARY KEY (idbahanbaku)
  )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table bahanbaku created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (username, password) VALUES ('Company Inc', 'Highway37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Inserted");
  });
}); */

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS recipe (name VARCHAR(255) PRIMARY KEY, telur INT, tepungTerigu INT, gulaPasir INT, madu INT, garam INT, susuCair INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

// table request
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `
CREATE TABLE IF NOT EXISTS request (
  request_id int NOT NULL AUTO_INCREMENT,
  varian varchar(255) NOT NULL,
  jumlah int NOT NULL,
  status varchar(50) NOT NULL,
  waktu TIMESTAMP,
  PRIMARY KEY (request_id)
)`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table request created");
  });
});
