import express from "express";
import { createConnection } from 'mysql';
const app = express();
import cors from 'cors';

app.use(cors())

const conn = createConnection({
  host: 'localhost',
  user: 'service',
  password: 'password',
  database: 'paint'
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(({ method, originalUrl }, res, next) => {
  console.log(`${method} ${originalUrl}`);
  next();
});

app.get("/", (req, res) => res.send("hello world"));
app.post("/", (req, res) => res.send(req.body.hello));

app.get("/pcolors", (req, res) => {

  conn.query('SELECT * FROM primitive_color', function (error, results, fields) {
    console.log(error, results)
    if (error) res.status(500).send(error);
    res.json(results);
  });
});

app.get("/pshapes", (req, res) => {

  conn.query('SELECT * FROM primitive_shape', function (error, results, fields) {
    console.log(error, results)

    if (error) res.status(500).send(error);
    res.json(results);
  });
});

app.post("/paints/:id/cshapes", (req, res) => {
  
  conn.query(`INSERT INTO form  (drawing_id, primitive_shape_id, primitive_color_id, size, x, y, orientation) VALUES (?,?,?,?,?,?,?)`, 
  [
    parseInt(req.params.id), 
    req.body.primitive_shape_id,
    req.body.primitive_color_id,
    req.body.size,
    req.body.x,
    req.body.y,
    req.body.orientation,
  ], 
  function (error, result, fields) {
    console.log(error, result)
    if (error) res.status(500).send(error);
    res.json(result);
  });
});

app.put("/paints/:id/cshapes/:sid", (req, res) => {
  
  conn.query(`UPDATE form  SET ? WHERE id=?`, 
  [
   req.body,
   req.params.sid
  ], 
  function (error, result, fields) {
    console.log(error, result)
    if (error) res.status(500).send(error);
    res.json(result);
  });
});

app.get("/paints", (req, res) => {

  conn.query(`SELECT * FROM drawing`, function (error, results, fields) {
    console.log(error, results)
    
    if (error) res.status(500).send(error);
    res.json(results);
  });
});

app.get("/paints/:id", (req, res) => {
  
  conn.query(`SELECT d.name,  f.* FROM drawing as d
  INNER JOIN form as f ON d.id = f.drawing_id
  WHERE d.id=?`, [req.params.id], function (error, results, fields) {
    console.log(error, results)
    if (error) res.status(500).send(error);
    res.json(results);
  });
});

app.get("/paints/:id", (req, res) => {
  
  conn.query(`SELECT d.name, ps.display_name, pc.display_name, pc.code, f.size, f.x, f.y, f.orientation FROM drawing as d
  INNER JOIN form as f ON d.id = f.drawing_id
  INNER JOIN primitive_shape AS ps ON ps.id =	 f.primitive_shape_id
  INNER JOIN primitive_color AS pc ON pc.id = f.primitive_color_id
  WHERE d.id=?`, [req.params.id], function (error, results, fields) {
    console.log(error, results)
    if (error) res.status(500).send(error);
    res.json(results);
  });
});

app.listen(5000, () => console.log("server running on 5000"));
