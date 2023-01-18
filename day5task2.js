let read = require("readline-sync")
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bst4{
    constructor(){
        this.root = null;
        this.sum = 0;
    }

    insert(data){
        let newnode = new Node(data);
        if(this.root==null){
            this.root = newnode;
        }else{
            this.insertele(this.root,newnode);
        }
    }

    insertele(node,newnode){
        if(newnode.value<node.value){
            if(node.left == null){
                node.left = newnode;
            }else{
                this.insertele(node.left,newnode);
            }
        }else{
            if(node.right == null){
                node.right = newnode;
            }else{
                this.insertele(node.right,newnode);
            }
        }
    }

    ancestor(node,ind1,ind2){
        if(node==null)
        return null;
           if(ind1<node.value && ind2<node.value)
           {
            return this.ancestor(node.left,ind1,ind2)
           }
           else if(ind1>node.value && ind2>node.value)
           {
             return this.ancestor(node.right,ind1,ind2)
           }
           else
           return node.value;
    }

}

let l1 = new bst4();
/*
l1.insert(50);
l1.insert(30);
l1.insert(70);
l1.insert(20);
l1.insert(40);
l1.insert(60);
l1.insert(90);
l1.insert(10);
l1.insert(35);
l1.insert(80);
l1.insert(85);
console.log(l1.singlechild(l1.root))
*/
let input;
do{
console.log("Enter \n1.for insertion \n2.Enter datas for ancestor")
input = read.question();
switch(input)
{
    case "1" : console.log("Enter the data ");
    let input1 =  parseInt(read.question());
    l1.insert(input1);
    break;
    case "2" : console.log("Enter the datas for finding common ancestor\n");
    let inp1 = parseInt(read.question());
    let inp2 = parseInt(read.question());
    console.log("Ancestors are :"+ l1.ancestor(l1.root,inp1,inp2));
    break
  
}
}while(input<=2)
