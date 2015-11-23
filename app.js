var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/client'));

app.get('/',function(req,res){
	res.sendfile('index.html');
})

var connectedSockets={};
var allUsers=[{nickname:""}];

io.on('connection',function(){
	socket.on('addUser',function(data){});
	
	socket.on('addMessage',function(data){});

	socket.on('disconnect',function(data){});
})

http.listen('3000',function(){
	console.log('app is running at port 3000!')
})
