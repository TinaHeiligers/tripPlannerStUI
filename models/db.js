'use strict';

var Sequelize = require("sequelize");
var db = new Sequelize('postgres://localhost:5432/tripplannerstatic', {
  logging: false
});

var Hotel = db.define('hotel',{
    name:  {
      type: Sequelize.STRING,
      allowNull: false
    },

    num_start: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
  // amenities (string of comma delimited items)
  // not sure about how to define this model
    amenities: {
      type: Sequelize.STRING,
      allowNull: true
      }
});

module.exports = {
  db: db,
  hotel: Hotel
}
