// server.js
// where your node app starts

// node server.js > out.log

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.post("senddata", function (request, response) {
console.log(request.body)
response.redirect('https://kajab.github.io/interactive1/');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
console.log('Your app is listening on port ' + listener.address().port);
});
