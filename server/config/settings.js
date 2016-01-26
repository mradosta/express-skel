var path       = require('path');

var settings = {
  baseUrl    : 'http://localhost',
  url        : function() {
    return this.baseUrl + ':' + this.port;
  },
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.NODE_PORT || 3000,
  database   : {
    protocol : "mysql", // or "mysql"
    query    : { pool: true },
    host     : "localhost",
    port     : 8889,
    database : "bycap",
    user     : "root",
    password : "root"
  },
};

module.exports = settings;
