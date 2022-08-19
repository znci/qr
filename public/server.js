// Local debug server @ localhost:3000
// ===================================
// Intended for use with znci/qr, but it's generic enough to be used elsewhere.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

// directory to serve
app.use(express.static(__dirname));

// main
app.get('/', function(req, res) {
	  res.status(200).sendFile(__dirname + '/index.html');
});

// serve
server.listen(port, function() {
	console.log('listening on *:' + port);
});

// 404
app.use(function(req, res, next) {
	res.status(404).sendFile(__dirname + '/404.html');
});
