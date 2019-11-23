const express = require("express");
let app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise ;
const bodyParser = require("body-parser");
app.use(express.static("client/dist"));
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("../public"));
var db = require("./data.js");

app.get("/flower", (req, res) => {
 db.Flower.find({})
   .sort({ date: -1 })
   .then(items => res.json(items), console.log("items inside the.Get server"));
 // .then(items => res.json(items));
});

app.get('/id', function (req, res) {
  var n = req.query.id;
  console.log(n);

  db.Flower.findOne({_id: n},(err,data) => {
   if(err){
     console.log("error",err);
   }
   console.log(data);
   res.status(200).send(data);
 })
  });
//var proxy = httpProxy.createProxyServer(options);
let port = process.env.PORT || 4005;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
 });
 
app.listen(port, function() {
 console.log("hi from 4005");
 console.log("listening from 4005");
});