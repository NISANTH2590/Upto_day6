var http = require("http");

http.createServer((req,res)=>{
    // res.write("Hello world");
    res.writeHead(203,{'content-type' :'text/html'});
    res.end();
}).listen(8080);

// var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080