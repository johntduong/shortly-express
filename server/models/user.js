var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here
var addUser = function(hash, salt, username, callback) {
  var queryString = 'INSERT INTO users SET password = ?, salt = ?, username = ?';
  console.log('addUser arguments', arguments);
  return db.queryAsync(queryString, [hash, salt, username]);
};

var checkUser = function(username, callback) {
  var result;
  var queryString = 'SELECT * FROM users WHERE username = ?';
  return db.queryAsync(queryString, [username], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var getPassword = function(password, username, callback) {
  var queryString = 'SELECT password FROM users WHERE username = ?';
  return db.queryAsync(queryString, [username], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results); 
    }
  });
};

module.exports = {
  addUser: addUser,
  checkUser: checkUser
};
