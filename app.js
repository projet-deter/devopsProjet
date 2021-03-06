const request = require("request");
const express = require("express");
const cors = require("cors");
// Set up the express app
const app = express();
//test
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// get all todos
app.get("/messages", (req, res) => {
  return request.get(
    {
      url:
        "https://modifymsgfunction20200312042701.azurewebsites.net/api/ModifyMessage?code=KL/UClMGc0CE55ofgVAGUhALAF5w7pcuozWQAQhyKq81Ihei/XHzPA=="
    },
    function(error, response, body) {
      console.log(body);
      res.json(body);
    }
  );
});

app.post("/messages", (req, res) => {
  console.log(req.body.message);

  return request.post(
    {
      url:
        "https://modifymsgfunction20200312042701.azurewebsites.net/api/ModifyMessage?code=KL/UClMGc0CE55ofgVAGUhALAF5w7pcuozWQAQhyKq81Ihei/XHzPA==&name=" +
        req.body.message
    },
    function(error, response, body) {
      console.log(body);
      res.json(body);
    }
  );

  /*
  return request.post(
    {
      url: "https://devops-functions.azurewebsites.net/api/FormatMessage",
      body: req.body,
      json: true
    },
    function(error, response, body) {
      console.log(body);
      res.json(body);
    }
  );  */
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
