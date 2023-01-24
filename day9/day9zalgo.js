let read = require('readline-sync')
function zalgo(resstr,pat,arr){
    let i=0,count=0,k=0;
for(let j=1;j<resstr.length;j++){
    i=0;
    k = j;
    count = 0;
    while(resstr[k]==resstr[i]){
        count++;
        i++;
        k++;
    }
    arr.push(count);
}
for(let i=0;i<resstr.length;i++){
    if(arr[i]==pat.length)
    console.log(i-(pat.length+1))
}
}



console.log("Enter the String");
let str = read.question();
console.log("Enter the Pattern");
let pat = read.question();
let resstr =  pat+"$"+str
let arr = [0];
zalgo(resstr,pat,arr);

