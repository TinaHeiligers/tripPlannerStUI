'use strict';

var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var db = require('../models');
var Hotel = db.model('hotel');
var Restuarant = db.model('restaurant');
var Activity = db.model('activity');

//rendering the index page in views
router.get('/', function(req, res, next) {
    Promise.all([
        Hotel.findAll(),
        Restuarant.findAll(),
        Activity.findAll()
    ])
    .spread(function(hotels, restuarants, activities) {
        res.render('index', {
            hotels: hotels,
            restuarants: restuarants,
            activities: activities
        })
    })
    .catch(next)
});

module.exports = router;
//rendering the index page in views
//we can redirect to this route if there's an error loading a page.
