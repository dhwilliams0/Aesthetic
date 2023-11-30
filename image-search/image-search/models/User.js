// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");
// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define("User", {
//         firstName: {
//             type: Database.STRING,
//             allowNull: false,
//             validate  : {
//                 notEmpty: true,
//             },
//     }
// });
// return User;
// }; 

const { DataTypes } = require('sequelize');
const Knex = require('knex');
//const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    // Define your model properties here
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    // Add other model properties as needed
  });
};

