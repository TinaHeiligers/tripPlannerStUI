//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
//this is where we create our tables in our db

// create an object with the schema we want:
// address
// city
// state
// phone (string)
// location (lat, lon float array)

var place = {
// address
  address:  {
    type: Sequelize.STRING,
    allowNull: false
  },
// city
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
// state
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
// phone (string)
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
// location (lat, lon float array)
// not too sure how the seed is going to react to seeding with lat and long
// look this up in the docs
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
};

module.exports = place;
