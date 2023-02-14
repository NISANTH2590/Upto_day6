let express = require('express');
 let app = express();
let router = express.Router();
// let cors = require('cors');
// app.use(cors());
app.get("/method1",(req,res)=>{
    res.send("Hello This is Route Page 2 method 1:")
})
app.get("/method2",(req,res)=>{
    res.send("Hello this is the method two of the route page 2 method 2");
})

app.route("/approute")
.get((req,res)=>{
    res.send("This is the get route method of the routepage 2 using app route");
})
.post((req,res)=>{
    res.send("This is the post route method of the routepage 2 using app route");
})
.put((req,res)=>{
    res.send("This is the put route method of the routepage 2 using app route");
})
.delete((req,res)=>{
    res.send("This is the delete route method of the routepage2 using app route");
})

module.exports = app;