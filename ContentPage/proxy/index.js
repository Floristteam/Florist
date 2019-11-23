const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
let port = process.env.PORT || 7000;
app.use(express.static(__dirname + "/public"));

var db = require("./data.js");
app.get('/flower', function (req, res) {
  db.Flower.find({})
  .exec((err,data) => { 
    if(err){
      console.log(err);
      req.send()
   }
   res.json(data);
  })  
})

  app.get('/id', function (req, res) {
    var n = req.query.id;
    console.log(n);
  
    db.Flower.findOne({_id: n },(err,data) => {
     console.log(data,'//////////////')
     if(err){
       console.log("error",err);
     }
     console.log(data);
     res.status(200).send(data);
   })
 });
 
app.listen(port, () => console.log("proxy is listening on 7000"));
