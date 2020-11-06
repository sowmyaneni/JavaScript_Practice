class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
        
    }
    dequeue() {
        if (!this.first) {
            return null;
        } 
        let removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = removedNode.next;
        removedNode.next = null;
        this.size--;
        return removedNode;
    }
}

let queue = new Queue();
queue.enqueue(23);
queue.enqueue(46);
queue.enqueue(11);
console.log(queue);
