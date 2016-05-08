var express = require('express');
var config = require('./config/config');
var userRouting = require('./routes/userRouting');


var app = express();


app.use('/api/v1/users', userRouting);

console.log('Everything starts at port: ' + config.port);
app.listen(config.port);
