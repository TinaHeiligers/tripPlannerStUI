'use strict';
//note that this might throw an error that something's being defined in lowercase
//Here we also need to import our db connection
const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: Sequelize.FLOAT,
  amenities: Sequelize.STRING
})

module.exports = Hotel;
