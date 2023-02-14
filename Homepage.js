var express = require('express');
var app = express();
var cors = require('cors');
var routepage1 = require('./routepage1');
var routepage2 = require('./routepage2');
app.use(cors());
// This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })
app.get("/homepage",(req,res)=>{
    res.send("Connected to HomePage");
});

app.get("/homepage:id",(req,res)=>{
    res.send("HomePage ID : "+req.params.id);
})
app.use("/routepage2/",routepage2);
app.use("/routepage1/",routepage1);
app.listen(3000,(err)=>{
 if(err)
 throw err;
 else
 console.log("Connected to 3000")
})
