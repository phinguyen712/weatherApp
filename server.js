var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Journey has started ");
});