var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3001, function(){
    console.log('listening to request on port 3001');
})

//Static Fiiles
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    //listen for the message being sent to the server
    socket.on('chat', function(data){
        io.emit('chat', data);
    });
});