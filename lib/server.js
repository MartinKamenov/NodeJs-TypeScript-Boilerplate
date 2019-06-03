"use strict";
var express = require('express');
var app = express();
app.get('/home', function (req, res) {
    res.send('Home');
});
app.listen(5000, function () { return console.log('Listening'); });
