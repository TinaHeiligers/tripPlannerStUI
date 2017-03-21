'use strict';

//importing the connection to the db
var db = require('./db.js').db;
//importing models
var hotels = require('./hotel');
var activities = require('./activity');
var places = require('./place');
var restaurants = require('./restaurant');

var Hotel = db.define('hotels', hotels);
var Activity = db.define('activities', activities);
var Place = db.define('places', places);
var Restaurant = db.define('restaurants', restaurants);

//create associations:
//belongsTo creates the following:
//
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

//check case here, to seed we need lowercase but I'm not sure exactly where?
//in the object definition perhaps? look at the instructions
module.exports = {
  db: db,
  hotel: Hotel,
  activity: Activity,
  place: Place,
  restaurant: Restaurant
}

