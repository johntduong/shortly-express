var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here
var addUser = function(hash, salt, username, callback) {
  var queryString = 'INSERT INTO users SET hash = ?, salt = ?, username = ?';
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
    // console.log('callback arguments', arguments);
    // console.log('RESULTS ARRAY', results);
    // console.log('LENGTH OF RESULTS', results.length);
    // console.log(results.length > 0);
  });
};

module.exports = {
  addUser: addUser,
  checkUser: checkUser
};
