var maxSumSubmatrix = function(matrix, k)
{
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }
        let  maxs = [],max1=[];
        for(let i=0;i<matrix.length;i++)
        {
            for(let j=0;j<matrix[0].length;j++){
             max1.push(0);
            }
          maxs.push(max1);
        }
        // console.log(maxs);
        init(maxs, matrix, k);
        for (let i = 1; i < matrix.length; i ++) {
            for (let j = 1; j < matrix[0].length; j ++) {
                maxs[i][j] = maxs[i - 1][j] + maxs[i][j - 1] - maxs[i - 1][j - 1] + matrix[i][j];
            }
        }
        let max = Number.MIN_VALUE;
        for (let i = 0; i < maxs.length; i ++) {
            for (let j = 0; j < maxs[0].length; j ++) {
                for (let m = i; m < maxs.length; m ++) {
                    for (let n = j; n < maxs[0].length; n ++) {
                        let tmp = maxs[m][n];
                        if (i - 1 >= 0) {
                            tmp -= maxs[i - 1][n];
                        }
                        if (j - 1 >= 0) {
                            tmp -= maxs[m][j - 1];
                        }
                        if (i - 1 >= 0 && j - 1 >= 0) {
                            tmp += maxs[i - 1][j - 1];
                        }
                        if (tmp <= k) {
                            max = Math.max(max, tmp);
                        }
                    }
                }
            }
        }
        console.log(max); ;
    }
     function init (maxs,matrix,k) {
        for (let i = 0; i < matrix.length; i ++) {
            // console.log(matrix[i][0]);
            if (i == 0) {
                maxs[i][0] = matrix[i][0];
            }
            else {
                maxs[i][0] = maxs[i - 1][0] + matrix[i][0];
            }
        }
        for (let j = 0; j < matrix[0].length; j ++) {
            if (j == 0) {
                maxs[0][j] = matrix[0][j];
            }
            else {
                maxs[0][j] = maxs[0][j - 1] + matrix[0][j];
            }
        }
}
let matrix = [[2,2,-1]], k = 0
maxSumSubmatrix(matrix,k);