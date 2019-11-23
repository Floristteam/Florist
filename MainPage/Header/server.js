const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
var app = express()
var db = require('./db.js');
var User = require('./db.js').User;
app.use(express.static(__dirname + '/client/src/dist'));
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
var VerifyToken = require('./auth/AuthController.js');
app.use(express.json());
const { check, validationResult } = require('express-validator');


// user register
app.post('/register',[
 
  
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
    ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  var email = req.body.email;
  var username = req.body.username;
   var password =req.body.password;

    var hashedPassword = bcrypt.hashSync(password, 8);
    console.log(req.body.username);
    User.create({
      username:username,
      email: email,
      password: hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });  
  });
    //user login
    app.post('/login', function(req, res) {
      User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      });
    });
    
    app.get('/me', VerifyToken, function(req, res, next) {

      User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        
        res.status(200).send(user);
      });
      
    });

app.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

app.get("/", (req, res) => {
  res.json({ status: "success", message: "hello" });
});

app.listen(process.env.PORT || 1200); 
console.log('We party on port', 1200);

module.exports = app;