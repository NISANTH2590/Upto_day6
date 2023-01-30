let read = require('readline-sync');

function Subset(arr,subset,out,index){

    if(index==arr.length){
       console.log("Out is "+out);
        subset.push(out);
        return;
    }

    Subset(arr,subset,[...out],index+1);
    out.push(arr[index]);
    console.log("arr Index is "+index+" Out is "+out);
    Subset(arr,subset,[...out],index+1);
    console.log("fo")
}



let arr = [],arr1=[],data;
console.log("Enter the Elements");
do{
    data = parseInt(read.question());
    arr.push(data)
}while(data!=-500)
arr = arr.slice(0,arr.length-1);
Subset(arr,arr1,[],0);
console.log(arr1)
//console.log(arr);
