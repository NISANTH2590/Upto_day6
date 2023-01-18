//Queue Implementation
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
    }

    insert(val){
        let newnode = new Node(val);
        if(this.head==null){
            this.head = newnode;
        }else{
            let temp = this.head;
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = newnode;
        }
    }

    peek(){
        let temp = this.head;
       console.log(temp.value);
    }

    delete(){
        if(this.head==null){
            console.log("Queue is empty");
        }else{
            this.head = this.head.next; 
        }
    }

    display(){
        let temp = this.head;
        if(temp==null){
            console.log("Queue is empty")
        }
        while(temp!=null){
            console.log(temp.value)
            temp = temp.next;
        }
    }
}

let queue = new Queue();
queue.insert(10);
queue.insert(20);
queue.insert(30);
queue.insert(40);
queue.insert(50);
queue.delete();
//queue.peek();
queue.display();