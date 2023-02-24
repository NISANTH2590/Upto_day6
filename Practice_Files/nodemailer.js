const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
let port = process.env.PORT || 3000
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    //   type: 'OAuth2',
      user: "periyasamynishanth@gmail.com",
      pass: "nisanth46110",
    },
    tls:{
         rejectUnauthorized : false
    }
  });

let mailoptions = {
from : "periyasamynishanth@gmail.com",
to : "nisanth2590@gmail.com",
subject : "Test",       
text : "this is my first email using node"
}

transporter.sendMail(mailoptions,(err,success)=>{
    if(err)
    console.log(err);
    else
    console.log("Email sent successfully");
})

app.get("/",(req,res)=>{
    res.send("Helloworld")
})

app.listen(port,(err)=>{
    if(err)
    console.log("Not listened");
    console.log("connected");
});