let read = require('readline-sync')
console.log("Enter the String");
let str = read.question();
let arr =[];
console.log("Enter the String");
let row = parseInt(read.question());
let q=0,k=0;
for(let i=0;i<row;i++){
    arr.push([])
}
for(let o = 0;o<row+2;o++){
  //  console.log(k)
for(let i=0;i<row;i++){
    for(let j=k;j<k+row;j++){
        arr[i][j] = str[q];
        console.log(i+" "+j)
        q++;
        i++;
    }
}
k++;
}
let pos = 0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        let a =""+arr[i][j];
        if(a.charCodeAt(0)>=65 && a.charCodeAt(0)<=90)
        {
             pos = j;
        }
            //==" " || arr[i][j]==undefined)
        //arr[i][j] = "*"
    }
    for(let k=0;k<=pos;k++){
        if(arr[i][k]==" " || arr[i][k]==undefined)
        arr[i][k] = "*"
    }
}

console.log(arr)