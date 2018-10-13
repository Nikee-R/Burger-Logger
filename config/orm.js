// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(table, cb) {
    var query = "SELECT * FROM " + table;
    connection.query(query, function(err,
    result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },

  insert: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?)";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, vals, condition, cb) {
    var query = "Update " + table + " SET " + vals + " WHERE " + condition;
    console.log(query)
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var query = "DELETE FROM  " + table + "WHERE " + condition;
    console.log(query)
    connection.query(query, condition, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
