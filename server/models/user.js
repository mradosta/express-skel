var moment = require('moment');
var uuid = require('node-uuid');

module.exports = function (orm, db) {
  var User = db.define('users', {
    id            : { type: 'text', required: false },
    firstname     : { type: 'text', required: true },
    email         : { type: 'text', required: true },
    createdAt     : { type: 'date', required: true, time: true }
  },
  {
    validations: {
      firstname: [
        orm.enforce.ranges.length(4, undefined, "must be at least 4 letter long"),
        orm.enforce.ranges.length(undefined, 50, "cannot be longer than 50 letters"),
      ],
      email: orm.enforce.unique("email already taken!")
    },
    hooks: {
      beforeValidation: function () {
        this.id           = uuid.v4();
        this.createdAt    = new Date();
      }
    },
    methods: {
      serialize: function () {
        return {
          id              : this.id,
          firstname       : this.firstname,
          email           : this.email,
          createdAt       : moment(this.createdAt).fromNow()
        }
      }
    }
  })
};
