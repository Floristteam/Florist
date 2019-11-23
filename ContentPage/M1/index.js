const app = require('./app.js')

const port = process.env.PORT || 4001;
app.listen(port, function() {
  console.log("listening on port 4001!");
});
//
