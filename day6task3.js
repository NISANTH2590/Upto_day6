//vertical order traversal
let read =require('readline-sync')
let right1=0,left1=0,lmax=0,rmax=0;
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
        // right1++;
        // left1--;

    }else{
        return this.insertdata(this.root,newnode);
    }
}

insertdata(node,newnode){
    if(newnode.value<node.value){
        if(node.left==null){
            node.left = newnode;
            left1++;
            right1--;
            if(lmax<left1)
            lmax = left1
            if(rmax<right1)
            rmax = right1
            //console.log(left1+" "+right1+" "+newnode.value)
            left1=0;
            right1=0;
        }else{
            left1++;
            right1--;
            // if(lmax<left1)
            // lmax = left1
            // if(rmax<right1)
            // rmax = right1
            return this.insertdata(node.left,newnode);
        }
    }else{
        if(node.right==null){
            node.right = newnode;
            right1++;
            left1--;
            if(lmax<left1)
            lmax = left1
            if(rmax<right1)
            rmax = right1
            //console.log(left1+" "+right1+" "+newnode.value)
            left1=0;
            right1=0;
        }else{
            right1++;
            left1--;
            // if(lmax<left1)
            // lmax = left1
            // if(rmax<right1)
            // rmax = right1
            return this.insertdata(node.right,newnode);
        }
    }
}

verticalorder(temp,lmax,left1){
    if(temp==null)
    return "empty";
    else{
        if(left1==)
        if(temp.left){
            this.verticalorder(temp.left);
        }
        if(temp.right){
            this.verticalorder(temp.right);
        }
    }

}

}

let bst = new Binarytree6();
let input;
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);
bst.verticalorder(bst.root,lmax,left1);
/*
do{
    console.log("Enter \n1.for insertion \n2.vertical order operation")
    input = read.question();
    switch(input){
        case "1" : console.log("Enter the input:");
        let inp = parseInt(read.question());
        bst.insert(inp);
        break;
        case "2" : bst.verticalorder(bst.root);
        break;
    }
}while(input<=2)*/