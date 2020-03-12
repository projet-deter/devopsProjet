const express = require("express");
const db = require("./db/db");
// Set up the express app
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// get all todos
app.get("/histo", (req, res) => {
  res.status(200).send({
    success: "true"
  });
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.status(200).send({
    success: "true"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
