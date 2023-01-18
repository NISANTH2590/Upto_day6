//Singly linked list
const read = require('readline-sync');
class Node1{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedlist1{
    constructor(){
        this.head = null;
        this.size=0
    }

    append(val){
       let newnode = new Node1(val);
       if(this.size==0){
        this.head = newnode;
       }else{
        let temp = this.head;
       while(temp.next!=null){
        temp = temp.next;
       }
       temp.next = newnode;
    }
    this.size++;
    }

    display(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    insertat(val,ind){
        let newnode = new Node1(val);
        let temp = this.head;
        if(this.ind==0){
            this.append(val);
        }else{
        for(let i=0;i<ind-1;i++){
            temp = temp.next;
        }
        newnode.next = temp.next;
        temp.next = newnode;
    }
        this.size++;
    }
}

let list = new linkedlist1();
let data;
do{
    data = read.question();
    if(data >=0)
    list.append(data)
    
}while(data>=0)
console.log("The elements are :")
list.insertat(100,3)
list.insertat(101,5)
list.display()
