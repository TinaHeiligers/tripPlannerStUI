'use strict';

//importing the connection to the db
var db = require('./db.js');
//importing models
var hotel = require('./hotel');
var activity = require('./activity');
var place = require('./place');
var restaurant = require('./restaurant');

var Hotel = db.define('hotel', hotel);
var Activity = db.define('activity', activity);
var Place = db.define('place', place);
var Restaurant = db.define('restaurant', restaurant);

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

