const express = require("express");
const request = require("request");
// Set up the express app
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get all todos
app.get("/histo", (req, res) => {
  Promise.resolve()
    .then(() => {
      return request.get({ url: "" });
    })
    .then(body => {
      res.json(body);
    });
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.json(req.body.messages);

  Promise.resolve()
    .then(() => {
      return request.post({ url: "", data: res.json(req.body.messages) });
    })
    .then(body => {
      res.json(body);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
