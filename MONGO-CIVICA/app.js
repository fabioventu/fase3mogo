var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var users2Router = require('./routes/users2');
var users3Router = require('./routes/users3');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/coll1', usersRouter);
app.use('/coll2', usersRouter);
app.use('/coll3', usersRouter);




module.exports = app;
