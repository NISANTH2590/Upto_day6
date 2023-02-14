let express = require('express');
let path = require('path');
let app = express();
// app.get('/',function(req,res){
//     res.send("Helloworld");
//     res.end();
// })

// app.use('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../../hi.html'))
// })
app.get('/hello',function(req,res){
    res.send("Helloworldhello");
})
app.get('/hi',function(req,res){
    res.send("Helloworld");
})
app.listen(3000,function(){
    console.log("Listening on port 3000");
})

// app.listen(PORT, function(err){
// 	if (err) console.log(err);
// 	console.log("Server listening on PORT", PORT);
// });

