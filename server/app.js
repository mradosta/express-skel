var settings      = require('./config/settings');
var express       = require('express');
var path          = require('path');
//var favicon     = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var orm           = require('orm');

var models        = require('./models/');

var routes        = require('./routes/index');
var users         = require('./routes/users');


var app = express();

app.use(function (req, res, next) {
  req.settings = settings;
  return next();
});

app.use(function (req, res, next) {
  models(function (err, db) {
    if (err) return next(err);

    req.models = db.models;
    req.db     = db;

    return next();
  });
}),

//app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/// error handlers

/**
 * Development Settings
 */
if (app.get('env') === 'development') {
	// This will change in production since we'll be using the dist folder
	// This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client')));
	app.use(express.static(path.join(__dirname, '../client/.tmp')));
	app.use(express.static(path.join(__dirname, '../client/app')));

	// Error Handling
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

	// changes it to use the optimized version for production
	app.use(express.static(path.join(__dirname, '/dist')));

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}

/*
* Routes
*/
app.use('/users', users);

module.exports = app;
