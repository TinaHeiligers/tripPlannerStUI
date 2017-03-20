'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

//MIDDLEWARE
//logging server requests
app.use(morgan('dev'));

//serving static files
app.use(express.static(path.join(__dirname, '/public')));

//parsing url and json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//handling not found pages
app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
});

//handling all errors
app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      console.error(err);
      // res.render('error');//error page
});

//synching db and
//starting server
app.listen(3000, function() {
      console.log("server is listening on port 3000");
})
