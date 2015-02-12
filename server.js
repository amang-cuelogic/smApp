//Include Express Framework
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var db = require('./db');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.post('/login', routes.login);
app.post('/getuser', routes.getuser);

module.exports = app;
http.createServer(app).listen(3000);