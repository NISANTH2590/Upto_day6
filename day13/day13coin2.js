let coins = [1,2,5]
let n = coins.length;
let dp=[],amount=11;
for(let i=0;i<=n;i++)
dp.push(Array(n+1).fill(0))

//console.log(dp)
    
    for(let i=0;i<=n;++i)
    {
        for(let j=0;j<=amount;++j)
        {
            if(j==0)
                dp[i][j] = 0;
            else if(i==0)
                dp[i][j] = 100000;
            else if(coins[i-1]>j)
                dp[i][j] = dp[i-1][j];
            else
                dp[i][j] = Math.min(1 + dp[i][j-coins[i-1]], dp[i-1][j]);
        }
    }
    console.log(dp[n][amount]>1e4 ? -1:dp[n][amount]);
//console.log(resultarr[arr.length-1][val])
