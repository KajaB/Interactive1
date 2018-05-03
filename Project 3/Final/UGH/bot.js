var twit = require('twit')
var config = require('./config.js');

var twitter = new twit(config);

var messages = ["Marijuana", "One fish two fish I’m the buzzed blue fish😂😂😂😂🤷🏽‍♀️", "Marijuana is just my thing", "The potholes in Michigan are now housing families of 4😂😂😂", "Awesome sauce!", "Amazing in every way. Truly a job well done.", "You're the talk of the town kid, thanks to those photos!"
, "Okay I was nice, so what do I do now?", "Why does the link have mayonnaise in the name?", "Who's that pokemon?", "The pokemon is Pikachu. Aka greatest of them all. I'm kidding.", "My name is Goku and I'm a sayain from Earth.", "Art is fun, art is nice. Also stressful"
, "Vegeta what's the scouter say about his power level?", "It's over 9000!", "If you drilled a hole through the Earth and it takes 46 minutes to fall through to the other side, do you land feet first or what? Like how the hell does gravity work with that?", "Guess the world would never know."
, "Watching Infinity War hurt my soul. Dammit Marvel.", "Go go Power Rangers", "Mighty Morphin Power Rangers", "That crystal skull belongs in a museum", "The answer lies in the heart of battle.", "Welcome to the stage of history", "Cats are the best okay.", "Mosquitos, cockroaches, and flies are all useless and they can all die and be erased from existence for all I care"
, "Spiders serve their purpose, but they still look creepy. Ew", "Too many eyes, too many legs.", "I still can't believe scorpions and spiders are related. Both are aracnids. I look at scorpions differently now. *shiver*", "There needs to be a better way to transfer food dammit. I want my grandma to send me some tamales, but it'd get all sorts of messed up."
, "Okay, teleporters, what year can I expect you to instantly deliver my to me? Because Back To The Future lied to me.", "Okay, I'm hungry now, goodbye"
, "When my work seems meaningless it's difficult not to curl up with a good RPG", "BLACKPINK IN YOUR AREA", "That moment you realize Bill Cosby made the JELL-O😳"
, "I scream, U scream we awwwl scream...... for Pudding Pops🤣🤣🤣", "o", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var messagelocation = 0

var writetweet = function() {
  twitter.post('statuses/update', {
    status: messages[messagelocation]
  }, function(err, data, response) {
    console.log(data);
  });
  messagelocation += 1;
}


setInterval(writetweet, 600000);
