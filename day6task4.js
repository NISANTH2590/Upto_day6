//vertical order traversal
let read =require('readline-sync')
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarytree6{
constructor(){
    this.root = null;
    this.left1 = 0;
    this.right1 = 0;
}

insert(data){
    let newnode = new Node(data);
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
inorder(temp){
    if(temp==null)
    {
        return ;
    }else{
        this.inorder(temp.left);
        console.log(temp.value);
        this.inorder(temp.right);
    }
}
mirrorfn(temp){
    if(temp==null)
    return "empty";
    else{
        if(temp.left){
            this.mirrorfn(temp.left)
        }
        if(temp.right){
            this.mirrorfn(temp.right)
        }

        let temp1 = temp.left;
        temp.left = temp.right;
        temp.right = temp1;
    }
}

}

let bst = new Binarytree6();
let input;
do{
    console.log("Enter \n1.for insertion \n2.vertical order operation \n3.inorder traversal")
    input = read.question();
    switch(input){
        case "1" : console.log("Enter the input:");
        let inp = parseInt(read.question());
        bst.insert(inp);
        break;
        case "2" : console.log(bst.mirrorfn(bst.root));
        break;
        case "3":bst.inorder(bst.root);
        break;
    }
}while(input<=3)