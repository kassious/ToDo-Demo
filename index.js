

var express = require('express')
var add = require('./add');


var app = express()

app.get('/:a/:b', function (req, res) {
    var result = add(req.params.a,req.params.b)
    res.send('result is'+" " + result);
})

app.listen(3000)