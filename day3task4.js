//merge list with index
let read = require('readline-sync');
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class llist{
    constructor(){
        this.head = null;
        this.head1 = null;
        this.tail1 = null;
        this.size=0;
    }

    insert(val){
        let newnode = new Node(val);
        if(this.head == null){
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
    insert1(val){
        let newnode = new Node(val);
        if(this.head1 == null){
            this.head1 = newnode;
            this.tail1 = newnode;
        }else{
            let temp = this.head1;
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = newnode;
            this.tail = newnode;
        }
    }
    display(){
        let temp = this.head;
        if(temp==null)console.log("empty list")
        else{
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next;
        }}
    }
    display1(){
        let temp = this.head1;
        if(temp==null)console.log("empty list")
        else{
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next;
        }}
    }
    mergedisplay(ind){
        let temp = this.head;
        if(ind==0){
            this.tail.next = this.head;
            this.head = this.head1
        }else{
      for(let i=0;i<ind-1;i++){
         temp = temp.next;
      }
      this.tail.next = temp.next
      temp.next = this.head1
    }
      this.display();
    }
}

let l1 = new llist();
l1.insert(10);
l1.insert(20);
l1.insert(30);
l1.insert(40);
l1.insert(50);
l1.insert1(100);
l1.insert1(200);
l1.insert1(300);
l1.insert1(400);
l1.insert1(500);
console.log("Enter the index =>")
let input = read.question();
l1.mergedisplay(input);
