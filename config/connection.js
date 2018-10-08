// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// Added for Heroku.
if (process.env.burger_db_url) {
  connection = mysql.createConnection(process.env.burger_db_url);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burger_db'
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
