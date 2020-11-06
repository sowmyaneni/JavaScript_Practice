// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
       
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next;
        }
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        this.head = this.head.next;
        if (this.length === 0) {
            this.tail = null;
        }
        this.length--;
        return current;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return this.push(val);
        }
        if (index === 0) {
            return this.unshift(val);
        }
        let newNode = new Node(val);
        let insertNode = this.get(index-1);
        newNode.next = insertNode.next;
        insertNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        let previousNode = this.get(index-1);
        let currentNode = previousNode.next;
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
    reverse() {
        if (this.length === 0){
            return undefined;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        while(node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO");
list.push("GOODBYE")
list.push("How");
list.push("are");
list.push("you");
list.reverse();
// list.unshift('addme');
// console.log(list.insert(3, 'well'));
console.log(list);