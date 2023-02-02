function solve(len,k){
    if(len==0 || k==0)
    return 0;
    if(len==1)
    return k;
    else{
    let first = k;
    let second = k*(k-1);
    for(let i=2;i<len;i++){
    let temp = second;
    second = (first+second)*(k-1);
    first = temp 
    }
    return second+first;
}
}

let len = 4,colour = 3,count = 0,sol,sec;
console.log(solve(len,colour))