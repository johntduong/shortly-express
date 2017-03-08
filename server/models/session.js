var db = require('../db');
var util = require('../lib/utility');
var crypto = require('crypto');

// Write you session database model methods here

var initialize = function(req, res) {
  //create a new hash
  var hash = crypto.createHash('sha256')
  .update(req.get('User-Agent'))
  .digest('hex');
  //create a session property on request => request.set(cookie, hash)
  req.session.set('cookie', hash);
  //sets a new cookie on response => response.set(cookie, hash)
};

module.exports = {
  initialize: initialize
};
