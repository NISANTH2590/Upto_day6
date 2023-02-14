let str = "cbacdcbc";
let str1 = ""
for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
       if(str[i]==str[j])
    //    console.log(str[0][j])
    {
        str1+=(str.substring(0,i)+"A"+str.substring(i,str[0].length));
    }
}
}

console.log(str1);