//Circular Doubly Linked List
let read = require('readline-sync');
class Node{
constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertatbeggining(val){
           let newnode = new Node(val);
           if(this.head==null){
           this.head = newnode;
           this.tail = newnode;
           this.head.next = newnode;
           this.head.prev = newnode;
           }
           else{
           newnode.next = this.head ;
           this.head.prev = newnode;
           this.tail.next = newnode;
           this.head = newnode;
           this.head.prev = this.tail;
           }
           this.size++;
    }
    deleteatend(){
        let temp = this.head;
        if(this.tail==temp){
            this.head = null;
        }else{
        while(temp.next!=this.tail){
            temp = temp.next;
        }
        temp.next = this.head;
        this.head.prev = temp;
        this.tail = temp;
        }
    }
    insertatpos(val,ind){
        let temp = this.head;
        let newnode = new Node(val);
        let pos = this.size - ind;
        if(pos==0){
            this.head = newnode;
        }
        for(let i=0;i<pos;i++){
        temp = temp.next;
        }
        newnode.next = temp;
        newnode.prev = temp.prev;
        temp.prev.next = newnode;
        temp.prev = newnode; 
    }
    deletepos(ind){
        let temp = this.head;
        let pos = this.size - ind;
        if(pos==0){
            console.log("List is empty")
        }
        for(let i=0;i<pos;i++){
        temp = temp.next;
        }
        temp.prev.next = temp.next
        temp.next.prev = temp.prev 
    }
    display(){
        let temp = this.head;
        if(this.head==null){
            console.log("List is empty");
        }else{
        do{
            
            console.log(temp.value);
                temp = temp.next;
        } while(temp!=this.head)
        }
    }
}

let input;
let cirll = new CircularDoublyLinkedList();

do{
    console.log("\nEnter 1. for Inserting at Beginning // 2. For Inserting at position // 3. For Deleting at position \n // 4.For Deleting at End // 5. For display // 6.Exit")
    input = read.question();
switch(input){
   
    case "1":console.log("\nEnter data to insert at beginning\n") ;
    let input7 = read.question();
    cirll.insertatbeggining(input7);
        break;

    case "2":console.log("\nEnter index and data to insert at the given position\n") ;
    let index = read.question();
    let val = read.question();
    cirll.insertatpos(val,index);
        break;

    case "3":console.log("\nEnter index to delete at the position") ;
    let input2 = read.question();
    cirll.deletepos(input2);
    console.log("\nDeleted at positon\n") ;
        break;

    case "4":console.log("\nDeleted at end\n") ;
    cirll.deleteatend();
        break;

    case "5":console.log("\nDatas are ->");cirll.display()
        break;
    }
}while(input!=6)
