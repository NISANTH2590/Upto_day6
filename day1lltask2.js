//circular linked list
class Node3{
    constructor(value){
    this.value =value;
    this.next = null;
    }
}

class linkedlist3{
    constructor(){
    this.head = null;
    this.tail = null;
    this.size=0
}

    append(val){
        let newnode = new Node3(val);
        if(this.head==null){
            this.head = newnode;
            this.tail = newnode;
            newnode.next = this.head;
        }else{
            newnode.next = this.head;
            this.tail.next = newnode;
            this.tail = newnode
        }
        this.size++;
    }

    prepend(val){
    let newnode = new Node3(val);
    if(this.head==null){
        this.head = newnode;
        this.tail = newnode;
        newnode.next = this.head;
    }else{
        newnode.next = this.head;
        this.tail.next = newnode;
        this.head = newnode;
    }
    }

    display(){
        let temp = this.head;
        do{
            console.log(temp.value)
            temp = temp.next;
        }while(temp!=this.head)
    }
}

let list = new linkedlist3();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.display()
