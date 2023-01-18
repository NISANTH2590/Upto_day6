let read = require('readline-sync')
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarysearchtree{
    constructor(){
        this.root = null;
    }

    insert(ele){
        let newnode = new Node(ele);
        if(this.root == null){
            this.root = newnode;
        }else{
            this.insertele(this.root,newnode)
        }
    }

    insertele(node,newnode){
        if(newnode.value<node.value){
            if(node.left==null){
                node.left = newnode;
            }else{
                this.insertele(node.left,newnode)
            }
        }else{
            if(node.right==null){
                node.right = newnode;
            }else{
                this.insertele(node.right,newnode)
            }
        }
    }

   

    postorder(temp)
    {
        if(temp==null)
        return;
        this.postorder(temp.left)
        this.postorder(temp.right)
        console.log(temp.value)
    }

    preorder(temp){
        if(temp==null)
        return;
        console.log(temp.value)
        this.preorder(temp.left)
        this.preorder(temp.right)
    }

    inorder(temp){
        if(temp==null)
        return;
        this.inorder(temp.left)
        console.log(temp.value)
        this.inorder(temp.right)
    }
}

let l = new binarysearchtree();
/*l.insert(10);
l.insert(5);
l.insert(15);
l.insert(3);
l.insert(7);
l.postorder(l.root)
l.inorder(l.root)
l.preorder(l.root)
*/
let input;

do{
    console.log("Enter \n1.for insertion \n2.preorder operation \n3.postorder operation \n4.inorder operation")
    input = read.question();
    switch(input){
        case "1" : console.log("Enter the input\n");
        let inp = parseInt(read.question());
        l.insert(inp);
        break;
        case "2" : l.preorder(l.root);
        break;
        case "3" : l.postorder(l.root);
        break;
        case "4" : l.inorder(l.root);
        break;
    }
}while(input<=4)
