let n = 7;
let t = n,s=0;
let k1=1,k2=0,k=1,m=0,u=0;
for(i=0;i<t;i++){
    let str="",m=0;
    for(let c = 0;c<s;c++)
     str+=" ";
    for(j=0;j<2*(n-u);j++){
    if(j<(n-u)){
      str += k1;
      str +="*";
      k1++;
      m++;
    }else{
     k2 = m*m + k;
     str += k2;
     str += "*";
     k++; 
    }
    }
    u++;
    console.log(str)
    s+=2;
}