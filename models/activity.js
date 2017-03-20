const Sequelize = require('sequelize');
var db = require('./index');

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

var Activity = db.define('activity', activity);

module.exports = Activity;
