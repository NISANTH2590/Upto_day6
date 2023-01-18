let rows = 3;
let str = "CIRNOGTMDA";
let count = 0;
let direction = true;
let arr = new Array(rows).fill("");
for(let i=0;i<str.length;i++){
    arr[count]+=str[i];
    if(count==0 || count>=rows-1)direction = !direction;
    direction ? count-- : count++;
}
console.log(arr.join(""))
