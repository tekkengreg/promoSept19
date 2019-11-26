const express = require("express");
const sqlite = require("sqlite3");
const db = new sqlite.Database("./dblive/test.db");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(({ method, originalUrl }, res, next) => {
  console.log(`${method} ${originalUrl}`);
  next();
});

app.get("/", (req, res) => res.send("hello world"));
app.post("/", (req, res) => res.send(req.body.hello));

app.get("/players", (req, res) => {
  console.log(db);
  db.all("SELECT * FROM players", (err, row) => {
    if (err) console.log(err);
    console.log("gp", row);
    res.json(row);
  });
});

app.listen(5000, () => console.log("server running on 5000"));
