'use strict';
//note that this might through an error that something's being defined in lowercase
var Sequelize = require("sequelize");

// name
// num_stars (float from 1-5)
// amenities (string of comma delimited items)

var hotel = {
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
};

module.exports = hotel;
