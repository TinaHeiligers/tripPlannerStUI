'use strict';

//importing the connection to the db
var db = require('./db');
//importing models
var Hotel = require('./hotel');
var Activity = require('./activity');
var Place = require('./place');
var Restaurant = require('./restaurant');

//create associations:
//belongsTo creates the following:
//
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

//check case here, to seed we need lowercase but I'm not sure exactly where?
//in the object definition perhaps? look at the instructions
module.exports = db: db;

