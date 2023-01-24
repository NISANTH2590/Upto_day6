let arr = [7,6,5,4,3,2,1],j=1;
let arr1 = Array(arr.length).fill(1)
for(let i=0;i<arr.length;i++){
if(arr[i+1]<arr[i])
arr1[i+1] = arr1[i]+1;
}
//console.log(arr1)
for(let i=arr.length-1;i>=0;i--){
    if(arr[i-1]<arr[i]){
      if(arr1[i-1] < arr1[i]+1){
        arr1[i-1] = arr1[i]+1
      }  
    }
}
console.log(arr1)
/*
let arr1 = Array(arr.length).fill(1);
  let arr2 = Array(arr.length).fill(1);
  if(arr.length ==1){
      return 1;
  }
for(let i=0;i<arr.length;i++){
if(arr[i]>arr[i-1])
arr1[i] = arr1[i-1]+1;
}
//console.log(arr1)
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]>arr[i+1]){
        arr2[i] = arr2[i+1]+1;
      }  
    }
let s = 0;
for(let i=0;i<arr.length;i++)
s += Math.max(arr1[i],arr2[i])

return s;
*/