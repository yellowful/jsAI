console.log("starting...");
var fs = require("fs");
var port = 80;
var host = "127.0.0.1";
var express = require("express");
var app = express();
app.get("/", function(request, response){
    response.send("Hello");
});
app.listen(port, host);