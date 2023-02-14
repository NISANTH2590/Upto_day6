// import {a,name} from "./practice2.js"

// console.log(a,name);
// function hello(value,callback){
//     console.log("HI "+value);
//     callback(value)
// }

// function call(value){
//     console.log(value)
// }

// // hello("Nisanth",call)

// let numbers = [1,2,3,4,5];
// let h =[]
// let result = numbers.map(i=>{
//     h[i] = i*2;
// })
// // console.log(h)

// let arr = [2,4,8,10,12];
// let res = [];
// function odd(arr,callback){
//     for(let i=0;i<arr.length;i++){
//       callback(arr[i])?res.push(arr[i]):null;
//     }
// }

// function isodd(value){
//     if(value%2==0)
//     return value;
// }

// odd(arr,isodd);
// console.log(res)

// let obj=require("./practice2.js");
// console.log(obj);
async function pro(){
    await new Promise((resolve,reject)=> setTimeout(()=> {
        console.log("1");
        resolve("hello");
    },2000)).then((data,err)=>{console.log(data);})
    await new Promise((resolve,reject)=> setTimeout(()=>{
        console.log("2");
        resolve("yoo")
    },1000)).then((data,err)=>{console.log(data);})
    await new Promise((resolve,reject)=> setTimeout(()=> {
        console.log("3");
        resolve("suma");
    },4000)) .then((data,err)=>{console.log(data);})
}
pro();