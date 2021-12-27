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

    //Handle chat event
    socket.on('chat', function(data){
        io.emit('chat', data);
    });

    //Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});