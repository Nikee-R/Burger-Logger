// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// Added for Heroku.
if (process.env.burger_db_url) {
  connection = mysql.createConnection(process.env.burger_db_url);
} else {
  connection = mysql.createConnection({
    host: 'l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'lfj0ox2udfu0j46m',
    password: 'kurdtobiz3fbobta',
    database: 'n82s8uriig2iq71f'
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
