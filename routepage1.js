let express = require('express');
let router = express.Router();
let app = express();

router.get("/routerone",(req,res)=>{
  res.send("Hello this is the method one");
})

router.get("/router1",(req,res)=>{
    res.send("Hello this is the second method of the router page one");
  })

module.exports = router;