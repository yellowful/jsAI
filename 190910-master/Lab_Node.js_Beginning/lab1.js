console.log("Hello!! Node.js");

var fileSystem = require("fs"); //use other's model
console.log("starting");
//fileSystem.writeFile
fileSystem.writeFile("./world.html","<html><body><h1>Hello! async</h1></body></html>",function(error){
    console.log("file established")
}
);
console.log("finish flag")