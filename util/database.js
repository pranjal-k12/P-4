const Sequelize = require("sequelize")

const sequelize = new Sequelize('new_schema', 'root', 'Gangrinpoche&112', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize;

/*

const mysql = require('mysql2');

// create the connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'new_schema',
  password: 'Gangrinpoche&112'
});

module.exports = pool.promise();
*/