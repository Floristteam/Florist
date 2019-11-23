const app = require('./app.js') 

//var proxy = httpProxy.createProxyServer(options);
let port = process.env.PORT || 4003;
app.listen(port, function() {
  console.log("hi from 4003");
  console.log("lestining from 4003");
});
