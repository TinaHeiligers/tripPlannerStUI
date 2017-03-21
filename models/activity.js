'use strict';

var Sequelize = require('sequelize');
var db = require('./db');

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  city: {
    type: Sequelize.INTEGER,
    // allowNull: false
  }
}

module.exports = Activity;
