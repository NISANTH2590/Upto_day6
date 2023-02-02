let read = require('readline-sync');
console.log("Enter the String 1")
let x = read.question();
let y = x.split("").reverse();
// let x = "abcd";
// let y = "def";
let arr = [];

for(let i=0;i<=x.length;i++){
    arr.push(Array(y.length+1).fill(0));
}

for(let i=0;i<=x.length;i++){
    for(let j=0;j<=y.length;j++){
        if(i==0||j==0)
        { 
         arr[i][j]=0
        }
        else if((i>0 && j>0) && x[i-1]!=y[j-1]){
            arr[i][j] = Math.max(arr[i-1][j],arr[i][j-1])
        }else{
            arr[i][j] = 1 + arr[i-1][j-1]
        }
    }
}

console.log("Length of Longest Common Subsequence is : ")
console.log(arr[x.length][y.length]);