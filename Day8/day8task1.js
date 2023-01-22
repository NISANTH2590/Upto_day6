let prices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2]];
let out = 0;
let m = 0,x1=0,y1=0,x2=0,y2=0,arr=[],j=0;
let len = 7;
for(let i=0;i<prices.length;i+=1){
    if(i+1<len){
        x1 = prices[i][j];
        y1 = prices[i][j+1];
        x2 = prices[i+1][j];
        y2 = prices[i+1][j+1];
    m = (Math.floor(y2-y1))/(Math.floor(x2-x1))
    arr.push(m)
    }
    //console.log(i)
}
//console.log(arr)
for(let i=1;i< arr.length;i++){
    if(arr[i]!=arr[i-1])
    out++;
}
console.log(out+1);