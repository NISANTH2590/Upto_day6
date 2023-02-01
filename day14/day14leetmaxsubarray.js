let nums=[-2,1,-3,4,-1,2,1,-5,4]
let curr=nums[0],sum=nums[0];
for(let i=1;i<nums.length;i++){
    curr = Math.max(nums[i],curr+nums[i]);
  //  console.log(curr)
    sum = Math.max(curr,sum);
   // console.log(sum)
}
console.log(sum)
// if(nums.length==1 && nums[0]<0)
// return nums[0];
// let c=0,max=nums[0];
// for(let i=0;i<nums.length;i++){
//     if(nums[i]<0)
//     {
//         max = Math.max(max,nums[i])
//         c++;
//     }
// }
// if(c==nums.length)
// console.log(max) ;

// let curr=0,sum=0;
// for(let i=0;i<nums.length;i++){
//     curr = Math.max(0,curr+nums[i]);
//     //console.log(curr)
//     sum = Math.max(curr,sum);
//     //console.log(sum)
// }
// console.log(sum)