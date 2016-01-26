var helpers = require('./_helpers.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  req.models.users.find().all(function (err, data) {
    if (err) return next(err);

    /*
    TODO: implement pagging
    //res.setHeader("next", "xxx");
    req.models.users.count({ }, function (err, count) {
        console.log(count);
    });
    */

    var items = data.map(function (m) {
      return m.serialize();
    });

    res.send({ users: items });

  });

});


router.get('/:id', function(req, res, next) {
  req.models.users.get( req.params.id , function (err, data) {
    res.send({ user: data.serialize() });
  });
});


router.delete('/:id', function(req, res, next) {
  req.models.users.get(req.params.id, function (err, User) {
    User.remove(function(err) {
      if (err) {
        console.log(err);
        return res.status(400).send( { errors: helpers.formatErrors(err) } );
      } else {
        return res.sendStatus(200);
      }
    });
  });
});


router.put('/:id', function (req, res, next) {

  req.models.users.get(req.params.id, function (err, User) {
    var params = req.body;
    User.save(params, function(err) {
      if (err) {
        console.log(err);
        return res.status(400).send( { errors: helpers.formatErrors(err) } );
      } else {
        return res.sendStatus(200);
      }
    });
  });
});


router.post('/', function (req, res, next) {

  var params = req.body;
  req.models.users.create(params, function (err, message) {
    if (err) {
      return res.status(400).send( { errors: helpers.formatErrors(err) } );
    } else {
      return res.sendStatus(200);
    }

  });

});

module.exports = router;
