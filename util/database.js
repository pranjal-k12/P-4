const mysql = require('mysql2');

// create the connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'new_schema',
  password: 'Gangrinpoche&112'
});

module.exports = pool.promise();
