//DoublyLinkedList
class Node2{
    constructor(value){
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class linkedlist2{
    constructor(){
        this.head = null;
        this.size = 0;
    }
insertatfront(val){
    let newnode = new Node2(val);
    if(this.head==null){
        this.head = newnode;
    }else{
        newnode.next = this.head;
        newnode.prev = null;
        this.head.prev = newnode;
    }
    this.head = newnode;
    this.size++;
}

insertatback(val){
    let newnode = new Node2(val);
    if(this.head == null){
        this.head = newnode;
    }else{
        let temp = this.head;
        while(temp.next!=null){
        temp = temp.next;
        }
        temp.next = newnode;
        newnode.prev = temp;   
    }
    this.size++;
}

insertnodeatindex(val,ind){
    let newnode =new Node2(val),i=0;
    if(this.head==null){
        this.head = newnode;
    }else{
        let temp = this.head;
     for(i=0;i<ind-1;i++){
         temp = temp.next;
     }
     let curr = temp.next;
     curr.prev = newnode;
     temp.next = newnode;
     newnode.prev = temp;
     newnode.next = curr;
    }
    this.size++;
}
display(){
    let temp = this.head;
    while(temp!=null){
        console.log(temp.value)
        temp = temp.next;
    }
}
}

let list =new linkedlist2();
list.insertatfront(2);
list.insertatfront(3);
list.insertatfront(4);
list.insertatback(5);
list.insertatback(10);
list.insertnodeatindex(100,3);
list.insertnodeatindex(101,4);
list.display();