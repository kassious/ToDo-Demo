

var express = require('express')
var add = require('./add');

var result = add(5,2);
var app = express()

app.get('/', function (req, res) {
    res.send('result is'+" " + result);
})

app.listen(3000)