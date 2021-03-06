var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var passport     = require('passport');

var index   = require('./routes/index');
var editer  = require('./routes/editer');
var print   = require('./routes/print');
var archive = require('./routes/archive');
var authentication = require('./routes/authentication');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/stylesheets-pure', express.static(path.join(__dirname, '/node_modules/purecss/build/')));
app.use('/stylesheets-pure', express.static(path.join(__dirname, '/node_modules/normalize.css/')));

app.use('/', index);
app.use('/puzzle-creator', editer);
app.use('/print-out', print);
app.use('/search-archive', archive);
app.use('/authentication', authentication);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
