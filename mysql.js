let mysql = require('mysql');

let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "mydb"
})

conn.connect((res,err)=>{
 if(err)
 console.log(err)
 var sql = "CREATE TABLE customers"
 conn.query(sql,(req,res)=>{
  
 })
})