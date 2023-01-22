//mergesort
function mergesort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    //console.log(mid+""+arr[mid])
    let leftarr = arr.slice(0,mid);
    let rightarr = arr.slice(mid);
    //console.log(leftarr);
    //console.log(rightarr);
    return merge(mergesort(leftarr),mergesort(rightarr));
}
function merge(leftarr,rightarr){
 //   console.log("leftarr"+" "+leftarr);
  //  console.log("rightarr"+" "+rightarr);
const resultarr=[];
while(leftarr.length && rightarr.length){
    if(leftarr[0]<rightarr[0]){
      //  console.log("leftshift is"+a)
        resultarr.push(leftarr.shift())
    //    console.log(resultarr)
    }else{
        resultarr.push(rightarr.shift())
    }
}

const arr =  [...resultarr,...leftarr,...rightarr];
return arr;
}


let arr =  [8, 20, -2, 4, -6]
mergesort(arr);
