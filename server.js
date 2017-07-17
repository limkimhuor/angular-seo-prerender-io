var express = require("express");
var app = module.exports = express();
var path = require("path");
const port = process.env.PORT || 8080
var prerenderio = require("prerender-node");

// app.use(express.static(path.join(__dirname, "public")));
// prerenderio.set("prerenderToken", "TqTy4X06zMRMmXL5qrBB");
// prerenderio.set( "prerenderServiceUrl", "http://service.prerender.io/");
// prerenderio.set('protocol', 'https');
// prerenderio.set('host', '187a1ba0.ngrok.io');
prerenderio.set( "prerenderServiceUrl", "http://localhost:3000/");
prerenderio.set('protocol', 'http');
prerenderio.set('host', 'localhost:8080');
app.use('/', express.static(path.join(__dirname, "dist")));
// app.use(require("prerender-node").set( "prerenderServiceUrl", "http://localhost:3000/").set("prerenderToken", "TqTy4X06zMRMmXL5qrBB"));
app.use(prerenderio);

// app.get('/', function(req, res, next) {
//   console.log("req homepage");
//   next()
//   }, function(req, res) {
//     res.sendFile(path.resolve(__dirname, "dist", "public.html"));
// });

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "public.html"));
});

// app.on('listening',function(){
//     console.log('ok, server is running');
// });

app.listen(port);
console.log("Web listening port " + port+ "\nhttp://localhost:" + port)
module.exports = app;
