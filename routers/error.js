'use strict';

var express = require('express');
var router = express.Router();

module.exports = router;

//rendering the index page in views
router.get('/', function(req, res, next) {
    res.render('error');
    next();
});

//rendering the index page in views
//we can redirect to this route if there's an error loading a page.
