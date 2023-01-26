function quicksort(arr){
    if(arr.length<=1){
      return arr;
    }
   let leftarr = [];
   let rightarr = [];
   let pivot = arr[arr.length-1];
   for(let i=0;i<arr.length-1;i++){
     if(arr[i]<pivot){
      leftarr.push(arr[i])
     }else{
      rightarr.push(arr[i])
     }
   }
  
   return [...quicksort(leftarr),pivot,...quicksort(rightarr)]
  }
  let read = require('readline-sync')
  console.log("Enter the array");
  let a = 0,arr=[];
  do{
    a = parseInt(read.question());
    arr.push(a)
  }while(a!=-500)
 // console.log(arr.sort())
//let arr=[18,12,17,15,13,11,14,19,16]
let arr1 = quicksort(arr.slice(0,arr.length-1));
//console.log(arr1);
let resarr=[],l=1,k=2;
resarr.push(arr1[0]);
for(let i=1;i<arr1.length;i++){
    if(k==arr1.length-1 || k+2<=arr1.length )
    {
        resarr.push(arr1[k]);
        k+=2;
    }else i++;
    if(l==arr1.length-1 || l+2<=arr1.length)
    {
        resarr.push(arr1[l]);
    l+=2;
    }else i++;
}

console.log(resarr)