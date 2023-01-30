let read = require('readline-sync');
console.log("Enter the Length of the board");
let N = read.question();
function isSafe(board, row, col)
{
let i,j;
    // Check row on left side
    for(i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false
    }

    //upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false

    //lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
        if (board[i][j])
            return false

    return true
}

function nqueenUtil(board, col){
    
    // If all queens are placed then true
    if(col >= N)
        return true
    for(let i=0;i<N;i++){

        if(isSafe(board, i, col)==true){
            
            board[i][col] = 1

            if(nqueenUtil(board, col + 1) == true)
                return true
            board[i][col] = 0
        }
    }
    return false
}

function nqueen(){
    for(let j=0;j<N;j++){
        tempArr=[];
    for(let i=0;i<N;i++){
        tempArr.push(0)
    }
    board.push(tempArr)
}

    if(nqueenUtil(board, 0) == false){
        console.log("FALSE")
        return false
    }
    return true
}
let board = [];
let tempArr = []
nqueen();
console.log(board);
