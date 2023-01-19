//depth first search o
let read = require('readline-sync')

class Graph2{
    constructor(total){
        this.total = total;
        this.map = new Map();
        this.visited = new Set();
    }
  createlist(key)
{
   this.map.set(key,[])
}
addedge(source,destination){
   this.map.get(source).push(destination)
   this.map.get(destination).push(source)
}

depthfirstsearch(start){
    this.visited.add(start);
    console.log(start);
    //first value alone inserted
    let destinations = this.map.get(start); // taking values of key
    for(let i of destinations){
        if(!this.visited.has(i))
        this.depthfirstsearch(i)//pushing the key values if not available in the set
    }
}

display(){
    console.log(this.map)
}
}

let g = new Graph2;
console.log("Enter the total number of vertices");
let total = read.question();
console.log("Enter the Vertices:");
let arr=[];
for(let i=0;i<total;i++){
let inp = read.question();
arr.push(inp);
g.createlist(inp)
}
do {
    let input = read.question("Enter input edges: "). split(" ");
    if(input == -1) {
        break;
    }
    let e1 = input[0];
    let e2 = input[1];
    g.addedge(e1, e2);
} while(true);
// g.addedge("1","2");
// g.addedge("1","3");
// g.addedge("2","3");
g.depthfirstsearch(arr[0]);
g.display();