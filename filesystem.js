let http = require('http');
let fs = require('fs')
// let server = 3010;
http.createServer((req,res)=>{
    fs.readFile('hi.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });                                                                        
}).listen(8080);

