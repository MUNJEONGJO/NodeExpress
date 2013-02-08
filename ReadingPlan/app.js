
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function (request, response) { 
	response.render('index', {
		title: 'index page',
		layout: 'layout_main.jade'
	});
});

app.get('/byYear', function (request, response) { 
	response.render('year', {
		title: 'Year page',
		layout: 'layout_sub.jade'
	});
});

app.get('/byYear/:category', function (request, response, next) {  
	response.render('year_list', {
		title: request.params.category + 'Year page',
		layout: 'layout_sub.jade'
	});
});

app.get('/byField', function (request, response) { 
	response.render('field', {
		title: 'Field page',
		layout: 'layout_sub.jade'
	});
});

app.get('/byField/:category', function (request, response, next) { 
	response.render('field_list', {
		title: request.params.category + 'Field page',
		layout: 'layout_sub.jade'
	});
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
