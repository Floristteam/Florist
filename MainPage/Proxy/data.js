const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://nours:nour1236@floristcluster-riqdf.mongodb.net/florist?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected to database!");
});

const FlowerSchema = Schema({ //flower description schema
  name:{type: String},
  image:{type: String}, 
  dprice:{type: Number},
  pprice:{type: Number},
  sprice:{type: Number},
  deluxdescription:{type:String},
  premiumdescription:{type:String},
  productdescription:{type:String},
  productifo: {type: String}
})

const Flower = mongoose.model('Flower', FlowerSchema);

let save = (flower) => {  
  var store = new Flower({
    name: flower.name,
    image: flower.image,
    dprice: flower.dprice,
    pprice: flower.pprice,
    sprice: flower.sprice,
    deluxdescription: flower.deluxdescription,
    premiumdescription: flower.premiumdescription,
    productdescription: flower.productdescription,
    productifo: flower.productifo
  })
  store.save();
}

const UserSchema = Schema({ //a schema for the authentication purpose
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String},
  // token: {type: String}
})

const User = mongoose.model('User', UserSchema);

let saveuser = (user) => {  
  var buyer = new User({
  username: user.username,
  email: user.email,
  password: user.password,
  token: user.token
  })
  buyer.save();
}

const ShoppingSchema = Schema ({ //
  name: {type: String},
  image:{type: String},
  name:{type: String},
  pricetype:{type: String},
  price: {type: Number},
  quantity: {type: Number},
  deliveryDate: {type: Date},
})

const ShoppingCart = mongoose.model('ShoppingCart', ShoppingSchema);

let savecart = (receipt) => {  
  var cart = new ShoppingCart({
    // image: "nnnnnnnnn"
    image: receipt.image,
    name: receipt.name,
    pricetype: receipt.Pricetype,
    price: receipt.price,
    quantity: receipt.quantity,
    deliveryDate: receipt.deliveryDate
  })
  cart.save();
}

module.exports={Flower, User, save, saveuser, ShoppingCart, savecart};
