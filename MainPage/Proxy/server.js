const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));


var db = require("./data.js");

app.get('/', function (req, res) {
  res.send("Hi Nour")
})


app.get("/cards", (req, res) => {
  db.Flower.find({})
    .limit(16)
    .exec((err, data) => {
      if (err) {
        console.log(err);
        req.send();
      }
      res.json(data);
    });
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



// user register
app.post('/register', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(req.body.username);
  User.create({
    username:req.body.username,
    email: req.body.email,
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
  
app.get('/me', function(req, res) {
var token = req.headers['x-access-token'];
if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

jwt.verify(token, config.secret, function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  
  User.findById(decoded.id, 
    { password: 0 }, // projection
    function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      res.status(200).send(user);
  });
});
});  


let port = process.env.PORT || 8000;
app.listen(port, () => console.log("we rock on 8000"));
