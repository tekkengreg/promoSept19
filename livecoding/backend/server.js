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

const key = "/etc/letsencrypt/live/wilder2.greenterroir.com/privkey.pem",
const cert = "/etc/letsencrypt/live/wilder2.greenterroir.com/cert.pem",
const chain = "/etc/letsencrypt/live/wilder2.greenterroir.com/chain.pem"
if (server.https) {
  const httpsoptions = {
    key: fs.readFileSync(server.key),
    cert: fs.readFileSync(server.cert),
    ca: fs.readFileSync(server.chain),
  };
  const httpsServer = https.createServer(httpsoptions, app);
  httpsServer.listen(server.https, () => {
    console.log(`https server listen on port ${httpsServer.address().port}`);
  });
}