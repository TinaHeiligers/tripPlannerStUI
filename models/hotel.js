'use strict';
//note that this might throw an error that something's being defined in lowercase
//Here we also need to import our db connection
var Sequelize = require("sequelize");
var db = require('./db');

var Hotel = db.define('hotels', {
    name:  {
      type: Sequelize.STRING,
      allowNull: false
    },

    num_stars: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
  // amenities (string of comma delimited items)
  // not sure about how to define this model
    amenities: {
      type: Sequelize.STRING,
      allowNull: true
      }
}0;



module.exports = Hotel;
