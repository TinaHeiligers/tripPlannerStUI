'use strict';

var Sequelize = require('sequelize');

var activity = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}

module.exports = activity;
