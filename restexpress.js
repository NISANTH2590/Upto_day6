let express = require('express');
let cors = require('cors')
let app = express();
app.use(cors());
var server = app.listen(3010,(req,res)=>{
    // let port = server.address().port
    // console.log(port)
})

app.put('/put',()=>{
    console.log("put Method");
})

// app.get('/:id',(req,res)=>{
//     if(req.params.id==100)
//     console.log('Same');
//     else
//     {
//     res.send("HelloDifferent");
//     res.status(404);
//     //throw err;
//     }//error code as Not found
//     //res.send(req.params.id);
// })

// app.post('/:id',(req,res)=>{
//     res.send(req.params.id);
// })



// app.put('')

// var express = require('express');
// var app = express();

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })var app = express();

// This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//     console.log("Got a GET request for the homepage");
//     res.send('Hello GET');
//  })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var express = require('express');
// var app = express();
// var PORT = 3000;

// app.put('/', (req, res) => {
// res.send("PUT Request Called")
// })


// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
