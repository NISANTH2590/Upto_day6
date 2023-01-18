let str = "1ABC45FMG125CD";
let sum = 0,value=0;
for(let i=0;i<str.length-1;i++){
    value = 0;
    for(let j=i;str.charCodeAt(j)>=48 && str.charCodeAt(j)<=57;j++)
    {
        let a = str.charCodeAt(j)
        if(a>=48 && a<=57)
        value = value*10+(a-48);
    i++;
    }
   // console.log(value)
    sum+= value
}
console.log(sum)

let m=0,val=0,s=0;
while(m<str.length)
{
    
    if(str.charCodeAt(m)>=48 &&str.charCodeAt(m)<=57)
    {
     val = val*10+(str.charCodeAt(m) - 48)
    }else{
        s+=val;
        val=0;
    }
    m++;
}
console.log(s)