let n = 3, we = 10
let profits = [1,2,3]
let weight = [4,5,6]
let knap = [];
//let profits1 = profitsay(16).fill(0)
for(let i=0;i<=profits.length;i++){
    knap.push(Array(we+1).fill(0))   
}
//console.log(knap);

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= we; j++) {
        if (i == 0 || j == 0) {
            knap[i][j] = 0;
        } else if (j >= weight[i - 1]) {
            knap[i][j] = Math.max(knap[i - 1][j], knap[i - 1][j - weight[i - 1]] + profits[i - 1]);
        } else {
            knap[i][j] = knap[i - 1][j];
        }
    }
}
// for (int i = 0; i <= n; i++) {
//     for (int w = 0; w <= weight; w++) {
//         System.out.print(knap[i][w] + " ");
//     }
//     System.out.println();
// }
console.log(knap[n][we]);
//console.log(knap)
//console.log(result[profits.length-1][W])

let max = knap[n][we];
let count=n;
let res=new Array(n).fill(0);
while(max!=0){
    if(knap[count].includes(max) && (!knap[count-1].includes(max))){
        res[count-1]=1;
        max-=profits[count-1];
    }
    count--;
}

console.log(res);