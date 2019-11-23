const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
var app = express()
var db = require('./database/data.js');


app.use(express.static("./client/src/dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Mainbody server");
});

app.get("/cards", (req, res) => {
  // console.log(req.query)
  var n = req.query.id;
  if(!n) {
    db.Flower.find({})
    .limit(16)
    .exec((err, data) => {
      if (err) {
        console.log(err);
        req.send();
      }
      res.json(data);
    });
  } else {
    db.Flower.find({_id:n})
    .limit(16)
    .exec((err, data) => {
      if (err) {
        console.log(err);
        req.send();
      }
      res.json(data);
    });
  }

});

app.get("/user", (req, res) => {
  // console.log(req.body)
  db.User.find({}).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});

app.get("/cart", (req, res) => {
  db.ShoppingCart.find({}).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});

module.exports = app;
