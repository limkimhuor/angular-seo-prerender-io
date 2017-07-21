var express = require("express");
var app = module.exports = express();
var path = require("path");
const port = 8080;
var prerenderio = require("prerender-node");

prerenderio.set( "prerenderServiceUrl", "http://localhost:3000/");
prerenderio.set('protocol', 'http');
prerenderio.set('host', 'localhost:8080');

app.use('/', express.static(path.join(__dirname, "dist")));
app.use(prerenderio);

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "public.html"));
});

app.listen(port);
console.log("Web listening port " + port+ "\nhttp://localhost:" + port)
module.exports = app;
