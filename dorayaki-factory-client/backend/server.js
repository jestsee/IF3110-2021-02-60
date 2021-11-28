require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// access config var
process.env.TOKEN_SECRET;

const db = mysql.createPool({
  host: "localhost", //localhost
  user: "root", //root
  password: "password", //password
  database: "user",
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});

const verifyToken = (req, res, next) => {
  const auth = req.get("Authorization");
  //console.log(auth)
  const tk_secret = "" + process.env.SECRET_KEY;
  //console.log(tk_secret);
  jwt.verify(auth, tk_secret, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }
    next();
  });
};

app.post("/register", (req, res) => {
  const insertQuery =
    "INSERT INTO user(email, password, username) VALUES (?,?,?)";
  db.query(
    insertQuery,
    [req.body.username, req.body.password, req.body.email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        tk_secret = "" + process.env.SECRET_KEY;
        const token = jwt.sign({}, tk_secret, {
          expiresIn: 60 * 60,
        });
        res.json(token);
      }
    }
  );
});

app.post("/login", function (req, res) {
  const user = req.body.username;
  const pwd = req.body.password;
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password is required.",
    });
  }
  const select1 = "SELECT * FROM user where username=(?) AND password=(?)";
  db.query(select1, [user, pwd], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        tk_secret = "" + process.env.SECRET_KEY;
        const token = jwt.sign({}, tk_secret, {
          expiresIn: 60 * 60,
        });
        res.send({ msg: "success", token: token });
      } else {
        console.log(err);
      }
    }
  });
});

app.post("/insertRecipe", (req, res) => {
  const insertQuery = "INSERT INTO recipe VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    insertQuery,
    [
      req.body.nama,
      req.body.telur,
      req.body.tepungTerigu,
      req.body.gulaPasir,
      req.body.madu,
      req.body.garam,
      req.body.susuCair,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/cek", verifyToken, (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/resep", verifyToken, (req, res) => {
  db.query("SELECT * FROM recipe", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/verifyToken", verifyToken, (req, res) => {
  if (err) {
    console.log(err);
  } else {
    next();
  }
});

app.get("/dafreq", verifyToken, (req, res) => {
  db.query("SELECT * FROM request", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("SOAP SABUN");
      // var soap1 = require("soap");
      // var url1 = "http://localhost:8080/service/RequestService?wsdl";
      // var args2 = {};
      // /* WORK */
      // soap1.createClient(url1, function (err, client) {
      //   client.getAllRequestStatus(args2, function (err, result) {
      //     console.log(result);
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log(result["return"]);
      //     }
      //   });
      // });
      // console.log(result);
      res.send(result);
    }
  });
  // var soap1 = require("soap");
  // var url1 = "http://localhost:8080/service/RequestService?wsdl";
  // var args2 = {};
  // /* WORK */
  // soap1.createClient(url1, function (err, client) {
  //   client.getAllRequestStatus(args2, function (err, result) {
  //     console.log(result);
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result["return"]);
  //     }
  //   });
  // });
});

app.post("/accept", (req, res) => {
  console.log(req.body.id.varian);
  bahancukup = true;

  if (req.body.id.status == "WAITING") {
    // cek resep
    const resep = "SELECT * FROM recipe WHERE name LIKE ?";
    db.query(resep, [req.body.id.varian], (err, resepnya) => {
      if (err) console.log(err);
      else {
        // res.send(result);
        console.log("jumlah TELUR");
        console.log(resepnya);

        var ntelur = resepnya[0].telur;
        var ntepung = resepnya[0].tepungTerigu;
        var ngula = resepnya[0].gulaPasir;
        var nmadu = resepnya[0].madu;
        var ngaram = resepnya[0].garam;
        var nsusu = resepnya[0].susuCair;

        // cek bahan cukup ga
        const bahan = "SELECT * FROM bahanbaku";
        db.query(bahan, (err, bahannya) => {
          if (err) console.log(err);
          else {
            console.log(bahannya[0].amount); //tellur
            console.log(ntelur);

            if (
              // stok harus > resep kalo ada salah satu yg ga cukup ga bisa
              bahannya[0].amount < ntelur ||
              bahannya[1].amount < ntepung ||
              bahannya[2].amount < ngula ||
              bahannya[3].amount < nmadu ||
              bahannya[4].amount < ngaram ||
              bahannya[5].amount < nsusu
            ) {
              res.status(400).json({
                message: "Stok bahan baku tidak mencukupi!",
              });
            }
            // bahan baku mencukupi
            else {
              const sqlaccept =
                "UPDATE request SET status = 'ACCEPTED' WHERE request_id = ?";
              db.query(sqlaccept, [req.body.id.request_id], (err, result) => {
                if (err) console.log(err);
                else {
                  // res.send(result);
                  console.log("Berhasil menerima request");

                  // kurangin stok
                  var telurbaru = bahannya[0].amount - ntelur;
                  var tepungbaru = bahannya[1].amount - ntepung;
                  var gulabaru = bahannya[2].amount - ngula;
                  var madubaru = bahannya[3].amount - nmadu;
                  var garambaru = bahannya[4].amount - ngaram;
                  var susubaru = bahannya[5].amount - nsusu;

                  const sqlupdate =
                    "UPDATE bahanbaku SET amount = (CASE idbahanbaku WHEN 1 THEN ? WHEN 2 then ? WHEN 3 THEN ? WHEN 4 THEN ? WHEN 5 THEN ? WHEN 6 THEN ? END) WHERE idbahanbaku IN (1,2,3,4,5,6)";

                  db.query(
                    sqlupdate,
                    [
                      telurbaru,
                      tepungbaru,
                      gulabaru,
                      madubaru,
                      garambaru,
                      susubaru,
                    ],
                    (err, result) => {
                      if (err) {
                        console.log(err);
                      } else {
                        res.send(result);
                        console.log("berhasil memperbaharui database");
                      }
                    }
                  );
                }
              });
            }
          }
        });
      }
    });
  } else {
    // console.log("Pastikan memilih request yang berstatus WAITING");
    res
      .status(400)
      .json({ message: "Pastikan memillih request berstatus WAITING" });
  }
});

app.post("/decline", (req, res) => {
  if (req.body.id.status == "WAITING") {
    const sqldecline =
      "UPDATE request SET status = 'DECLINED' WHERE request_id = ?";

    db.query(sqldecline, [req.body.id.request_id], (err, result) => {
      if (err) console.log(err);
      else {
        res.send(result);
        console.log("Berhasil menolak request");
      }
    });
  } else {
    res
      .status(400)
      .json({ message: "Pastikan memillih request berstatus WAITING" });
  }
});

app.put("/api/edit", (req, res) => {
  //belom bisaa
  //ini buat update
  const namabahanbaku = req.body.namabahanbaku;
  const banyakbahanbaku = req.body.banyakbahanbaku;
  const idbahan = req.body.idbahan;
  console.log(namabahanbaku);
  console.log(banyakbahanbaku);
  console.log(idbahan);
  const sqlselet =
    "UPDATE `bahanbaku` SET `namabahanbaku` = ?, `amount` = ? WHERE `idbahanbaku` = ?; ";
  db.query(
    sqlselet,
    [namabahanbaku, banyakbahanbaku, idbahan],
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

app.get("/api/view", (req, res) => {
  const sqlselet = "SELECT * FROM bahanbaku";
  db.query(sqlselet, (err, result) => {
    res.send(result);
    //console.log(result);
  });
});

app.get("/api/view1:id", (req, res) => {
  const ids = req.params.id;
  const sqlselet = "SELECT * FROM bahanbaku WHERE ?";
  db.query(sqlselet, [ids], (err, result) => {
    res.send(result);
    //console.log(result);
  });
});

app.post("/api/insert", (req, res) => {
  const namabahanbaku = req.body.namabahanbaku;
  const banyakbahanbaku = req.body.banyakbahanbaku;

  const sqlinsert =
    "INSERT INTO bahanbaku (namaBahanBaku, amount) VALUES (?,?)";
  db.query(sqlinsert, [namabahanbaku, banyakbahanbaku], (err, result) => {
    console.log(result);
  });
});
