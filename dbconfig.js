let db = require('mysql');

let dbconn = db.createConnection({
    host : "localhost",
    user : "root",
    password : " ",
    database : "logindb"
});

dbconn.connect((err)=>{
  if(err)
  console.log("Not connected");
  else
  console.log("connected");
})