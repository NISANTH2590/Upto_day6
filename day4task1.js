let arr = [[1,2,3],[4,5,6],[7,8,9]]
let arr1=[]
let k=0,l=0,m=0;
let row = arr.length-1;
let col = row;
while(l<=row){
 for(let i=l;i<=col;i++){
    arr1[m++]=arr[k][i]+" "
 }
 k++;
 for(let i=k;i<=row;i++){
   arr1[m++]=arr[i][col]+" "
 }
 col--;
 for(let i=col;i>=l;i--){
   arr1[m++]=arr[row][i]+" ";
 }
 row--;
 for(let i=row;i>=k;i--){
   arr1[m++]=arr[i][l]+" ";
 }
 l++;
}
let a = arr.length-1,arr2=[];

for(let i=0;i<m;i++){
   if(i<=a){
     arr2.push(arr1[i]);
   }else{
      arr2.push(arr1[i]);
      a+=3;
   }
   if(i==a){
   console.log(arr2);
   arr2=[]
   }
}