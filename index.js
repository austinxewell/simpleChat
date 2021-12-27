var express = require('express');

// App setup
var app = express();
var server = app.listen(3001, function(){
    console.log('listening to request on port 3001')
})

//Static Fiiles
app.use(express.static('public'))