const express = require("express");
const app = express();

import { Database } from "sqlite3";

const db = new Database("./dblive/test.db");
const port = 5000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((request, response, next) => {
  console.log(`${request.method} ${request.originalUrl}`);
  next();
});

app.get("/", (request, response, next) => {
  response.send("hello woooooorld");
});

app.post("/", (request, response) => {
  response.json(request.body);
});

app.get("/players", (request, response) => {
  db.all("SELECT * FROM players", (err, rows) => {
    console.log(err, rows);
    response.send(rows);
  });
});
app.get("/players/:id", (request, response) => {
  response.json({
    id: request.params.id
  });
  // db.all("SELECT * FROM players", (err, rows) => {
  //   console.log(err, rows);
  //   response.send(rows);
  // });
});

app.use((request, response) => response.status(404).send("route desnt exist"));

app.listen(port, () => console.log(`server is runing on port ${port}`));
