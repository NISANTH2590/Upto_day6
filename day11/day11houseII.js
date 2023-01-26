let read = require('readline-sync')
console.log("Enter the array");
let a = 0,nums1=[],nums=[];
do{
  a = parseInt(read.question());
  nums1.push(a)
}while(a!=-500)
nums = nums1.slice(0,nums1.length-1)
//let nums = [1,2,1,1];
//let data = 0;
if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let arr = nums.slice(0,nums.length-1);
    let dp = new Array(arr.length);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
    for(let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }
  //  console.log(dp[dp.length-1])


    let arr1 = nums.slice(1);
    let dp1 = new Array(arr1.length);
    //console.log(arr1)
    dp1[0] = arr1[0];
    dp1[1] = Math.max(arr1[0], arr1[1]);
  //  console.log(dp1)
    for(let i = 2; i < arr1.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + arr1[i]);
    }
  //  console.log(dp1[dp1.length-1])
    
console.log(Math.max((dp[dp.length-1]),dp1[dp1.length-1]))
