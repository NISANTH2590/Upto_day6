let read = require('readline-sync');
function intializearray(maze,k){
    let arr = [];
    for(let i=0;i<k;i++){
    arr.push([]);
    for(let j=0;j<k;j++)
    arr[i].push(0)
    }
   if(ratmaze(maze,arr,0,0))
   {console.log("Path found");
   console.log(arr)}
   else
   {console.log("Path Notfound");
    console.log(arr)
}
}

function ratmaze(maze,arr,x,y){
  if(x<0||y<0||x>=k||y>=k||maze[x][y]==0)
  return false;
  if(x==k-1 && y==k-1){
    arr[x][y]=1;
    return true;
  }
  
  arr[x][y]=1
    for(let i=1;i<=maze[x][y]&&i<k;i++){
     if((ratmaze(maze,arr,x+i,y)||ratmaze(maze,arr,x,y+i) )) 
     return true;
  }
  arr[x][y]=0;
  return false;
}
let maze=[[2, 1, 0, 0],
[3, 0, 0, 1],
[0, 1, 0, 1],
[0, 0, 0, 1]];
let k=4;
intializearray(maze,k);