var express = require('express');
var http = require("http");
var path = require("path");
var app = express();

app.configure(function () {
    // Define the static file directory, it will be 'app'
    app.use('/', express.static(path.join(__dirname, 'app'), {maxAge: 600000}));
});

// Create the http server and get it to
// listen on the specified port 8080
var port = process.env.PORT || 8080;
http.createServer(app).listen(port, function(){
    console.log("Express server listening on port: " + port);
});

