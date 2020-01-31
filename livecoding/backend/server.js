const fs = require('fs');
const express = require("express");
const sqlite = require("sqlite3");
const db = new sqlite.Database("./dblive/test.db");
const app = express();
const https = require('https');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(({ method, originalUrl }, res, next) => {
  console.log(`${method} ${originalUrl}`);
  next();
});
app.use('/', express.static('/home/wilder/promoSept19/livecoding/matrix/build'));

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

app.listen(80, () => console.log("server running on 5000"));

const httpsoptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/cert.pem"),
  ca: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/chain.pem"),
}
const httpsServer = https.createServer(httpsoptions, app);
httpsServer.listen(443, () => {
  console.log(`https server listen on port ${httpsServer.address().port}`);
});

