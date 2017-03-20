'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var db = require('./models/index').db;
//require all models through routers! Models can be accessed off the db.js file calling on the model name in the db object
//eg: var hotel = require('./models/db').hotel
//
var indexRouter = require('./routers');
var errorRouter = require('./routers/error');



//MIDDLEWARE
//logging server requests
app.use(morgan('dev'));

//serving static files
app.use(express.static(path.join(__dirname, '/public')));

//parsing url and json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//templating
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/index', indexRouter);
app.use('/error', errorRouter);

//handling not found pages
// app.use(function(req, res, next) {
      // var err = new Error('Not Found');
      // err.status = 404;
      // next(err);
// });

//handling all errors
app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      console.error(err.stack);
      // res.render('error');//error page
});

//synching db (should individual tables be synched?) and
//starting server
db.sync({force: true})
    .then(function() {
        console.log('db has been synched....');
    }).then(function() {
        app.listen(3000, function() {
          console.log("and server is listening on port 3000");
    });
});

