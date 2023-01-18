//duplicates
let read = require('readline-sync')
class Node5{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class lllist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insert(val){
            let newnode = new Node5(val);
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
    duplicates(){
    let temp = this.head;
    while(temp!=null){
        let temp1 = temp;
        //console.log("outer :"+temp.value)
    while((temp1!=null)){
        if(temp.value==temp1.value && temp != temp1){
          //  console.log(temp1.value)
           if(temp1.next==null){
           // temp1.prev.next = null;
          //specification
           temp1.value = temp1.value - temp1.prev.value 
           }else{
            //  temp1.next.prev = temp1.prev;
              //temp1.prev.next = temp1.next;
            //specification
           temp1.value = temp1.prev.value + temp1.next.value
           }
           temp1 = temp1.next;
        }else{
            temp1 = temp1.next;
        }
    }
    temp = temp.next;
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
    
}

let l1 = new lllist();
let input;
do{
    console.log("Enter \n1 for Insertion \n2 for remove duplicates \n3 for display \n4 for exit")
    input = read.question();
    switch(input){
    case "1" :
        console.log("Enter the number")
        let input1 = read.question()
    l1.insert(input1)
    break;
    case "2":
        console.log("Duplicate operation is Performed\n");
        l1.duplicates();
        break;
    case "3" :
        console.log("The elements are-->")
        l1.display();
        break;

    }
}while(input<=3)
/*l1.insert(1);
l1.insert(3);
l1.insert(4);
l1.insert(1);
l1.insert(3);
l1.insert(2);
l1.insert(4);
l1.insert(5);
l1.insert(3);

l1.display();
*/

