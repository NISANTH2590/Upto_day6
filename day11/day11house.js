let read = require('readline-sync')
console.log("Enter the array");
let a = 0,arr=[];
do{
  a = parseInt(read.question());
  arr.push(a)
}while(a!=-500)
arr = arr.slice(0,arr.length-1)
if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return Math.max(arr[0], arr[1]);

    let dp = new Array(arr.length);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for(let i = 2; i < arr.length; i++) {
//        console.log(dp[i - 1]+" "+ dp[i - 2] +" "+ arr[i])
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }

console.log(dp[dp.length-1])
