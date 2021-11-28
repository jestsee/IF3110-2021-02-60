var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "user"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS recipe (name VARCHAR(255) PRIMARY KEY, telur INT, tepungTerigu INT, gulaPasir INT, madu INT, garam INT, susuCair INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "user"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO recipe (name, telur, tepungTerigu, gulaPasir, madu, garam, susuCair) VALUES ('coklat', 1, 1, 1, 1, 1, 1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Inserted");
  });
});
