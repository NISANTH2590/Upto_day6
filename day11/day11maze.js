let read = require('readline-sync');
function intializearray(maze,length){
    let arr = [];
    for(let i=0;i<length;i++){
    arr.push([]);
    for(let j=0;j<length;j++)
    arr[i].push(0)
    }
   if(ratmaze(maze,arr,0,0))
   {console.log("Path found");
   console.log(arr)}
   else
   {console.log("Path Notfound");;
}
}

function ratmaze(maze,arr,x,y){
  if(x<0||y<0||x>=length||y>=length||maze[x][y]==0||arr[x][y]==1)
  return false;
  if(x==length-1 && y==length-1){
    arr[x][y]=1;
    return true;
  }
  
  arr[x][y]=1
  if(maze[x][y]==1){
     if(ratmaze(maze,arr,x,y+1) ||(ratmaze(maze,arr,x,y-1)) ||(ratmaze(maze,arr,x+1,y)) ||(ratmaze(maze,arr,x-1,y))) 
     return true;
  }
  arr[x][y]=0;
  return false;
}
let maze=[[ 1, 0, 0, 0 ],[ 1, 1, 0, 1 ],[ 0, 1, 0, 0 ],[ 1, 1, 1, 1 ] ];
let length= maze.length;
intializearray(maze,length);