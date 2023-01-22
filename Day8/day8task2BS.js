// binary search
function binarysearch(arr,target){
  let s = 0,e = arr.length-1;
  while(s<=e){
    let mid = Math.floor((s+e)/2);
    if(arr[mid]==target)
    return mid;
    else if(target < arr[mid]){
    e = mid-1;
    }else if(target > arr[mid]){
        s = mid+1;
    }
  }
  return 0;
}


let arr = [1,5,7,9,10,12,15,17,18,21,25,45];
let val = 9;
console.log(binarysearch(arr,val))

