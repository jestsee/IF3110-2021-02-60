var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "user"
});

// table request
con.connect(function(err) {
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
