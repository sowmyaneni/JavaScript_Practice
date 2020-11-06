class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return this.size++;
    }
    pop() {
        if (!this.first) {
            return null;
        } 
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push("H");
stack.push("I");
console.log(stack);