var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  console.log(req.body);
});

app.listen(port, function () {
  console.log('Listening on port 3000!');
});