const { Sequelize } = require('sequelize');

// Replace these values with your database information
const sequelize = new Sequelize('pinterest', 'postgres', 'postgres', {
  host: 'localhost', // or your database host
  dialect: 'postgres', // or the dialect of your database (e.g., 'mysql' for MySQL)
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
