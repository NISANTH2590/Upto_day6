let read = require("readline-sync")
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bst6{
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

    deletechild(node){
        if(!node.left && node.right){
            if(node.right.left == null && node.right.right ==null)
             node.right = null;
        }
        if(node.left){
            this.deletechild(node.left)
        }
        if(node.right){
            this.deletechild(node.right)
        }
    }

    inorder(node){
        if(node==null)
        return;
        else{
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
}
}

let l1 = new bst6();
let input;
do{
console.log("Enter \n1.for insertion\n2.delete leaf node with right child\n3.display")
input = read.question();
switch(input)
{
    case "1" : console.log("Enter the data ");
    let input1 =  parseInt(read.question());
    l1.insert(input1);
    break;
    case "2" : l1.deletechild(l1.root);
    break;
    case "3" : l1.inorder(l1.root);
    break;
}
}while(input<=3)

/*
let l1 = new bst6();
let input=0,data=0,input1=0;
do{
    console.log("Enter the data ");
    input1 =  parseInt(read.question());
    if(input1>=0)
    l1.insert(input1);
}while(input1>=0)
do{
console.log("Enter\n1.delete leaf node with right child\n2.display")
input = read.question();
switch(input)
{
    case "1" : l1.deletechild(l1.root);
    break;
    case "2" : l1.inorder(l1.root);
    break;
}
}while(input<=3)
*/