// getting started with hello world socket.io
var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// if the user is logged in, send the request and mute the sound locally

// if the user is logged out, play the noise locally only