
var version = '1.1-BETA';
var express = require('express');
var requestify = require('requestify');
var app = express();

app.get('/', function (req, res) {

  res.set('Content-Type', 'text/plain');

  requestify.get('http://169.254.169.254/latest/meta-data/instance-id', {timeout: 2000}).then(
    function (meta) {
      res.send('this is version ' + version + ' on instance ' + meta.body + '\n').end();
    },
    function () {
      res.send('this is version ' + version + '\n').end();
    }
  );

});

app.listen(80);

