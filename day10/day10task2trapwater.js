//TrappingWater
let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
let leftmax = [];
let rightmax = [];
let max = 0;
for(let i=0;i<arr.length;i++){
    leftmax.push(max);
    if(arr[i]>max)
    max = arr[i];
}
max = 0;
for(let i=arr.length-1;i>=0;i--){
    rightmax.push(max);
    if(arr[i]>max)
    max = arr[i];
}
let temp = rightmax;
rightmax = temp.reverse();
for(let i=0;i<arr.length;i++){
    leftmax[i] = Math.min(leftmax[i],rightmax[i])
}
max = 0;
for(let i=0;i<arr.length;i++){
    let a = leftmax[i]-arr[i];
    if(a<0)
    a=0;
    max+=a;
}
console.log(max)