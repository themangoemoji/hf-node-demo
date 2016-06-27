var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

http.createServer(function (request, response) {

  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello, World\n")

}).listen(process.env.PORT)
