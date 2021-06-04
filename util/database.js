const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "0<dk|^TduK~|v~0*>rO>",
});

module.exports = pool.promise();