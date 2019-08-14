// start this file to run the server

// getting started with hello world socket.io
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT;


// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });
// });
  
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log('Friend Finder is listening on PORT: ' + PORT);
});