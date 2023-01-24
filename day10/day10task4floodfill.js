function fill(x,y,ele,key){
   // console.log(x)
    if(x<0 || y<0 || x>=arr.length || y>=arr[0].length)
    return false;
    if(arr[x][y]==ele)
    {
        arr[x][y] = "$"
        let res=fill(x,y+1,ele,key)||fill(x,y-1,ele,key)||fill(x+1,y,ele,key)||fill(x-1,y,ele,key);
        arr[x][y] = key;
        return res;
    }
    
}


let arr = [[1,1,1],[1,1,0],[1,0,1]];
let read = require('readline-sync');
console.log("Enter the first index");
let x = parseInt(read.question());
console.log("Enter the Second index");
let y = parseInt(read.question());
console.log("Enter the fill Element");
let val  = parseInt(read.question());
let ele = arr[x][y]
fill(x,y,ele,val)
console.log(arr)
