const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from module one");
});

var db = require("./data.js");

app.get("/flower", function(req, res) {
  db.Flower.find({}).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});

app.get("/id", function(req, res) {
  var n = req.query.id;
  console.log(n);

  db.Flower.findOne({ _id: n }, (err, data) => {
    if (err) {
      console.log("error", err);
    }
    console.log(data);
    res.status(200).send(data);
  });
});

const port = process.env.PORT || 4001;
app.listen(port, function() {
  console.log("listening on port 4001!");
});
//
