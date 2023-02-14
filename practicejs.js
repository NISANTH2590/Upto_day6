
// class nam1{
//     constructor(value){
// //     let obj = {
// //     name:"nishanth"
// // }
//    this.value = value;
//    console.log(this.value);
//     }
// }
// let n = new nam1("hi");

// ---------------------------------------------------------------------------------------------------------

// function hi(hel){
//     this.hello = hel
//     console.log(this.hello)
// }
// function hellohi(how){
//     console.log(how)
// }

// let h = new hi("Nishanth");
// console.log(h.hello);
// hellohi("jii");

// ---------------------------------------------------------------------------------------------------------

// const x = (hello)=>{
//      let him= new Object();
//     //  him = hello;
//   console.log(him);
// }
// let h = new x;
// x("Hello Nisanth");
// ---------------------------------------------------------------------------------------------------------

// let obj ={
// "hi" : "hello",
// "hi1" : "hello1"
// };
// for(let i in obj)
// console.log(i)
// "hi" : "hello"

// ---------------------------------------------------------------------------------------------------------

// function hello(){
//     function hi(){
//         return "hello";
//     }
//     return { hi };
// }

// let a = hello();
// console.log(a.hi());

// ---------------------------------------------------------------------------------------------------------
// function hi(){
//     console.log("Hello")
// }
// setInterval(hi,1000);
// ---------------------------------------------------------------------------------------------------------

let arr = [1,2,3,4,5,6];
function call(arr,callback){
   let sum=0;
    for(let i=0;i<arr.length;i++){
        callback(arr[i],sum)
    }
    return sum;
}

function print(val,sum){
    if(val>0)
    sum+=val;

}

console.log(call(arr,print));
// console.log(sum);