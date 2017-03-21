'use strict';

var Sequelize = require('sequelize');
var db = require('./db');
// name
// cuisine (comma delimited string list)
// price (integer from 1-5 for how many dollar signs)

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	}
};);

module.exports = Restaurant;
