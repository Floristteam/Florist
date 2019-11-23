const app = require('./app.js') 
//var proxy = httpProxy.createProxyServer(options);
let port = process.env.PORT || 4005;

app.listen(port, function() {
 console.log("hi from 4005");
 console.log("listening from 4005");
});