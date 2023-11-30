var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8001;
//var knex = require('./knexfile');
// var cors = require('cors');
// var logger = require('morgan');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, function() {
    console.log("listening on port: ", port);
  })