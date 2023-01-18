let read =require('readline-sync')
class Node0{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarytree1{
constructor(){
    this.root = null;
}

insert(data){
    let newnode = new Node0(data);
    if(this.root==null){
        this.root = newnode;
    }else{
        return this.insertdata(this.root,newnode);
    }
}

insertdata(node,newnode){
    if(newnode.value<node.value){
        if(node.left==null){
            node.left = newnode;
        }else{
            return this.insertdata(node.left,newnode);
        }
    }else{
        if(node.right==null){
            node.right = newnode;
        }else{
            return this.insertdata(node.right,newnode);
        }
    }
}

height(temp){
   if(temp == null){
    return 0;
   }else{
    var lheight = this.height(temp.left);
    var rheight = this.height(temp.right);

    if(lheight>rheight)
    return lheight+1;
    else
    return rheight+1;
   }
}



}

let bst = new Binarytree1();
/*
bst.insert(10);
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.height(bst.root));
*/
let input;
do{
    console.log("Enter \n1.for insertion \n2.height operation ")
    input = read.question();
    switch(input){
        case "1" : console.log("Enter the input\n");
        let inp = parseInt(read.question());
        bst.insert(inp);
        break;
        case "2" : console.log(bst.height(bst.root));
        break;
    }
}while(input<=2)
