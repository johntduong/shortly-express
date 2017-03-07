var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here
var addUser = function(hash, salt, username) {
  var queryString = 'INSERT INTO users SET hash = ?, salt = ?, username = ?';
  console.log('addUser arguments', arguments);
  return db.queryAsync(queryString, [hash, salt, username]);
};

module.exports = {
  addUser: addUser
};
