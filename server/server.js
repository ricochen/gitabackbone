var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var parseURL = require('./parseURL.js');

var port = process.env.PORT || 3468;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  var text = req.body.text.toLowerCase().split(' ');
  var url = parseURL.parseURL(text);

  // External API get request from url
  axios.get(url)
    .then(function(response) {
      res.send(response.data); // Send data to client for rendering
    })
    .catch(function (response) {
      console.log('GET request from ' + url + ' unsuccessful.' + response);
    });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});