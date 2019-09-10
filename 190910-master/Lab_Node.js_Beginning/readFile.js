var fs = require("fs");
console.log("start...")
var data = fs.readFileSync("./world.html")
console.log("content :" + data)