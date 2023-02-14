// const { resolve } = require("path")

const promiseA = new Promise((resolve,reject)=>{
    resolve(777);
})

promiseA.then((val)=>{
    console.log("Hey the value is :",val);
})