//Adjacency matrix
let read = require('readline-sync')
class Graph1{
  constructor(totalvertices,arr,resarr){
    this.totalvertices = totalvertices;
    this.arr = arr;
    this.resarr = resarr;
  }

  insertvertices(ind1,ind2){
    let a = this.arr.indexOf(ind1);//console.log(a);
    let b = this.arr.indexOf(ind2);//console.log(b);
     this.resarr[a][b] = "1";
     this.resarr[b][a] = "1";
  }

  display(){
    console.log(this.resarr)
  }

}
console.log("Enter the total Vertices")
let total = read.question();
let res=[],vert=[]

for(let i=0;i<total;i++){
  let temparr=[];
 for(let j=0;j<total;j++){
    temparr.push(0)
}
res.push(temparr);
}

console.log("Enter the vertices")
for(let i=0;i<total;i++){
    vert[i]=read.question();
}
let graph = new Graph1(total,vert,res);
do {
    let input = read.question("Enter input edges: "). split(" ");
    if(input == -1) {
        break;
    }
    let e1 = input[0];
    let e2 = input[1];
    graph.insertvertices(e1, e2);
} while(true);
// graph.insertvertices("A","B")
// graph.insertvertices("B","C")
// graph.insertvertices("A","C")
//graph.insertvertices("4","5");
//graph.insertvertices("2","3")
graph.display();