let express = require('express');
let app = express();

app.get('/homepage',(req,res)=>{
    res.json("Welcome to homepage");
})
// debugger; // breakpoint
app.listen(3010,(err,res)=>{
    // debugger;
    // var h = "hello";
    // h+="hii";
    if(err)
    console.log(err);
    else
    console.log('Listening on port :3010');
    // h+="hii";
});
