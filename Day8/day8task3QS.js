//Quicksort
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

let arr = [-2,5,98,54,-25,0,64];
console.log(quicksort(arr))