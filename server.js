/* mount server */
var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');

/* app epress */
var app = express();

/* Static all routes */
app.use(express.static(path.join(__dirname, 'public')));

//adding all routes to path *
app.get('*', function(req, res) {
  //Response index
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* port and repo */
var PORT = process.env.PORT || 3100;
var server = http.createServer(app);

/* Server listen */
server.listen(PORT, function() {
  //Log iinit Server
  console.log('Server is running at localhost: ' + PORT + ' ->> http://localhost:' + PORT);
});
