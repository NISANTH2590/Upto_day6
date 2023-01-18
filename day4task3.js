let read = require('readline-sync')
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bstm{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newnode = new Node(val);
        if(this.root==null){
            this.root = newnode;
        }else{
             this.insertdata(this.root,newnode)
        }
    }

    insertdata(node,newnode){
        if(newnode.value<node.value){
            if(node.left==null){
                node.left = newnode;
            }else{
                this.insertdata(node.left,newnode);
            }
        }else{
            if(node.right==null){
                node.right = newnode;
            }else{
                this.insertdata(node.right,newnode);
            }
        }
    }

    levelorder(){
        const queue=[];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}

let i = new bstm();
/*
i.insert(10);
i.insert(5);
i.insert(15);
i.insert(3);
i.insert(7);
i.levelorder();
*/
let input;

do{
    console.log("Enter 1.for insertion 2.levelorder operation")
    input = read.question();
    switch(input){
        case "1" : console.log("Enter the input\n");
        let inp = parseInt(read.question());
        i.insert(inp);
        break;
        case "2" : i.levelorder();
        break;
    }
}while(input<=2)

