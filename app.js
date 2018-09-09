const hbs = require('hbs');
var createError = require('http-errors');
var express = require('express');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const clearModule = require('clear-module');
var debug = require('debug')('seller:server');

var indexRouter = require('./routes/index');

var storefrontRouter = require('./routes/storefront');
var productRouter = require('./routes/product');
var aboutRouter = require('./routes/about');

var app = express();

//view engine setup

hbs.registerPartials( path.join(__dirname, 'views', 'partials') )

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

fs.readdirSync(path.join(__dirname, 'views', 'helpers')).forEach(function(helper){
  hbs.registerHelper(helper, require(path.join(__dirname, 'views', 'helpers', helper))(app));
});

if(debug.enabled){
app.use(function(req, res, next) {
  fs.readdirSync(path.join(__dirname, 'views', 'helpers')).forEach(function(helper){
    const tango = path.join(__dirname, 'views', 'helpers', helper);
    clearModule(tango);
    hbs.registerHelper(helper, require(tango)(app));
  });
  next();
});
}

app.config = require('./config.js');
app.use(function(req, res, next) {
  if(!app.config) app.config = require('./config.js');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/about', aboutRouter); //NOTE: req.params stores the route variables
app.use('/a', productRouter); //NOTE: req.params stores the route variables
app.use('/a', storefrontRouter); //NOTE: req.params stores the route variables

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
