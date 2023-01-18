//Stack implementation
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }
    //like prepend
    push(val){
        let newnode = new Node(val);
      if(this.head==null){
        this.head = newnode;
      }else{
        newnode.next = this.head;
        this.head = newnode;
      }
    }

    peek(){
        console.log(this.head.value);
    }

    pop(){
        if(this.head==null){
            console.log("stack underflow or empty");
        }else{
            this.head = this.head.next;
    }
}

    display(){
        let temp = this.head;if(temp==null){
            console.log("Empty Stack");
        }else{
        while(temp!=null){
            console.log(temp.value)
            temp = temp.next;
        }
    }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
//stack.peek();
stack.pop();
stack.display();
