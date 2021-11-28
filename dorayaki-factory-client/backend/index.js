const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ricoepisode123#',
    database: 'databasepabrik'
});

//create connection
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
  CREATE TABLE IF NOT EXISTS bahanbaku (
    idbahanbaku int NOT NULL AUTO_INCREMENT,
    namabahanbaku varchar(45) NOT NULL,
    amount int NOT NULL,
    PRIMARY KEY (idbahanbaku)
  )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table request created");
  });
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.put("/api/edit", (req,res) => { //belom bisaa
    //ini buat update
    const namabahanbaku = req.body.namabahanbaku;
    const banyakbahanbaku = req.body.banyakbahanbaku;
    const idbahan = req.body.idbahan;
    console.log(namabahanbaku);
    console.log(banyakbahanbaku);
    console.log(idbahan);
    const sqlselet = "UPDATE `bahanbaku` SET `namabahanbaku` = ?, `amount` = ? WHERE `idbahanbaku` = ?; ";
    db.query(sqlselet, [namabahanbaku, banyakbahanbaku, idbahan], (err, result) => {
        if (err) console.log(err);

    })
})

app.get("/api/view", (req,res) => {
    const sqlselet = "SELECT * FROM bahanbaku";
    db.query(sqlselet, (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.get("/api/view1:id", (req,res) => {
    const ids = req.params.id;
    const sqlselet = "SELECT * FROM bahanbaku WHERE ?";
    db.query(sqlselet, [ids], (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.post("/api/insert", (req, res) => {

    const namabahanbaku = req.body.namabahanbaku;
    const banyakbahanbaku = req.body.banyakbahanbaku;

    const sqlinsert = "INSERT INTO bahanbaku (namaBahanBaku, amount) VALUES (?,?)";
    db.query(sqlinsert, [namabahanbaku, banyakbahanbaku], (err, result) => {
        console.log(result);
    }); 
})

app.listen(3001, () =>{
    console.log("running on port 3001");
})