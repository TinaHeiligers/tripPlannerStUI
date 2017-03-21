'use strict';
//logic to connect to the db through postgress
var Sequelize = require("sequelize");
var db = new Sequelize('postgres://localhost:5432/tripplannerstatic', {
  logging: false
});

module.exports = {
  db: db
};
