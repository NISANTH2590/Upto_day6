let arr = [2,5],resultarr=[];
let val = 5;
//let arr1 = Array(16).fill(0)
for(let i=0;i<arr.length;i++){
    resultarr.push(Array(val+1).fill(0))
    resultarr[i][0]=1;
}
//console.log(resultarr)
for(let i=0;i<arr.length;i++){
    for(let j=0;j<=val;j++){
        if(i==0 && j%arr[i]==0){  
            resultarr[i][j] = 1;
        }
        if(arr[i]>j&&i>0){
            resultarr[i][j] = resultarr[i-1][j]
        }
        else{
            if(i>0){
            resultarr[i][j] = resultarr[i-1][j]+resultarr[i][j-arr[i]]; 
            }
        }
    }
}

console.log(resultarr[arr.length-1][val])
