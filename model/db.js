
const Sequelize = require('sequelize');
const config = require('../config/dbconfig');

  module.exports = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
