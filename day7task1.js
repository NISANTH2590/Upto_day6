let profit = [2,4,1]
let output = 0,max=0,k=2,arr1=[];
/*
for(let i=1;i<profit.length;i++){
    for(let j=i+1;j<profit.length;j++){
        if(j<profit.length && profit[j]>profit[i]){
            output+=profit[i+1]-profit[i];
        }
        i=j;
    }
    if(output>max)
    max = output
}
console.log(max);
*/
let max1 = 0,max2=0
for(let i=1;i<profit.length;i++){
    output=0;
    if(profit[i]>profit[i-1])
    {
        output+=profit[i]-profit[i-1]; 
        arr1.push(output);
    }
}
output=0;
let c = arr1.length-k;
if(profit.length==1 || arr1.length==0)
output = 0;
else if(arr1.length==1){
    output = arr1[0];
}else{
for(let i=arr1.length-1;i>=c;i--)
output+=arr1[i];
}
console.log(output);
