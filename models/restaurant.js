const Sequelize = require('sequelize');
var db = require('./index');

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
		validate: {min: 1, max: 5}
	}
}

var Restaurant = db.define('restaurant', restaurant);

module.exports = Restaurant;