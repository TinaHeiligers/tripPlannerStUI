'use strict';
var express = require('express');

var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var db = require('./models');
var router = require('./routers');
//require all models through routers! Models can be accessed off the db.js file calling on the model name in the db object
//eg: var hotel = require('./models/db').hotel
//
var app = express();

//MIDDLEWARE
//logging server requests
app.use(morgan('dev'));


//serving static files
app.use(express.static(path.join(__dirname, '/public')));
//jquery and bootstrap
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

//parsing url and json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//templating
nunjucks.configure('views', {noCache: true});
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


//routes
app.use(router);

//handling all errors
app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      console.error(err.stack);
      // res.render('error');//error page
});

//synching db (should individual tables be synched?) and
//starting server
db.sync({force: false})
    .then(function() {
        console.log('db has been synched....');
    }).then(function() {
        app.listen(3000, function() {
          console.log("and server is listening on port 3000");
    });
});

