var express = require('express');
var app = express();

app.get('/Patient/1', function (req, res) {

    console.log('get first url');

    res.redirect('/Patient/2');
})

app.get('/Patient/2', function (req, res) {

    console.log('redirected successfully');
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
