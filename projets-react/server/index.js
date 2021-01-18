const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "theotime",
    secret: "root",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24
    }
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rencontre"
});

// Création de la table signIN faire localhost:5000/creatsignIn
app.get("/creatsignIn", (req, res) => {
  let sql =
    "CREATE TABLE signIn(id int AUTO_INCREMENT, name TEXT(255) NOT NULL, age INT NOT NULL, sex TEXT(255) NOT NULL, mail TEXT(255) NOT NULL, password TEXT(255) NOT NULL, PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});

// rentré les donners sur sql de la page register
app.post("/signIn", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const mail = req.body.mail;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO signIn (name, age, sex, mail, password) VALUES (?, ?, ?, ?, ?)",
      [name, age, sex, mail, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// vérrifier le mot de passe et le mail
app.post("/login", (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;

  db.query("SELECT * FROM signIn WHERE mail = ?;", mail, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: " mot de passe incorecte !" });
        }
      });
    } else {
      res.send({ message: "Mail incorecte" });
    }
  });
});

app.listen(5000, () => {
  console.log("Cool le server tourne sur le port 5000");
});
