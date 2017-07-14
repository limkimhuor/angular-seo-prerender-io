var express = require("express");
var app = module.exports = express();
var path = require("path");
const port = process.env.PORT || 8080

app.use(require("prerender-node").set("prerenderToken", "TqTy4X06zMRMmXL5qrBB"));
// app.use(express.static(path.join(__dirname, "public")));
app.use('/', express.static(path.join(__dirname, "public")));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.on('listening',function(){
    console.log('ok, server is running');
});

app.listen(port);
console.log("Web listening port " + port+ "\nhttp://localhost:" + port)
