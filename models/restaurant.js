'use strict';

var Sequelize = require('sequelize');

// name
// cuisine (comma delimited string list)
// price (integer from 1-5 for how many dollar signs)

var restaurant = {
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
};

module.exports = restaurant;
