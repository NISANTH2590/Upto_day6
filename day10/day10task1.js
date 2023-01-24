let read = require('readline-sync')
function search(x,y,k,level){
    if(x<0 || y<0 || x>=arr.length || y>=arr.length)
    return false;
    if(level==str[k].length)
    return true;
if(arr[x][y]==str[k].charAt(level)){
    let temp=arr[x][y];
    arr[x][y]="$";
    let res = search(x,y-1,k,level+1)||search(x,y+1,k,level+1)||search(x-1,y,k,level+1)||search(x+1,y,k,level+1);
    arr[x][y]=temp;
    return res;
}
else
    return false;

}
let arr = [['C','O','D','K','X','T'],['G','T','I','N','G','P'],['L','K','O','L','M','W'],['G','A','A','X','A','L'],['K','F','T','G','R','F'],['Z','W','L','M','T','O']];
let str=[],val=0;
do{
     val=read.question("Enter the String : ");
     str.push(val);
}while(val!=-1);

for(let k=0;k<str.length;k++){
 for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr[i].length;j++){
           if(arr[i][j]==str[k].charAt(0)){
              if(search(i,j,k,0)){
                  console.log(str[k]);
                }
        }   
    }
 }
}

