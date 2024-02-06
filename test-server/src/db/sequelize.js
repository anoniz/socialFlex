const { Sequelize } = require('sequelize');

const dbname = process.env.DBNAME;
const username = process.env.USERNAMEE;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(dbname, username, password, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
