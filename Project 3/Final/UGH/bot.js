var twit = require('twit')
var config = require('./config.js');

var twitter = new twit(config);

var messages = ["Hello world", "Hi People", "Goodnight"];
var messagelocation = 0

var writetweet = function() {
  twitter.post('statuses/update', {
    status: messages[messagelocation]
  }, function(err, data, response) {
    console.log(data);
  });
  messagelocation += 1;
}


setInterval(writetweet, 1800000);
