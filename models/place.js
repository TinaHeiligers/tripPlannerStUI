//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
var db = require('./index');
//this is where we create our tables in our db

//create an object with the schema we want
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
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
}

//create the model name by defining the object we've just created as a sequelize Table.
console.log(db);
var Place = db.define('place', place);

// //testing db connection:
// //
// Place.sync({force: true}).then(function () {
//   // Table created
//   return Place.create({
//     //fields
//   });
// });

module.exports = Place;
