class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let temp = this.tail;
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let mid = Math.floor(this.length/2);
        let current = this.head;
        let pointerTail = this.tail;
        let counter = 0;
        let tailCounter = this.length-1;
        if (index <= mid) {
            while(counter!== index) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            while(tailCounter !== index) {
                pointerTail = pointerTail.prev;
                tailCounter--;
            }
            return pointerTail;
        }
    }
    set(index, val) {
        let getNode = this.get(index);
        if (getNode !== null) {
            getNode.val = val;
            return true
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.unshift(val);
        }
        if (index === this.length) {
            return this.push(val);
        } 
        let getNode = this.get(index-1);
        let newNode = new Node(val);
        let nextNode = getNode.next;
        getNode.next = newNode;
        newNode.prev = getNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length-1) {
            return this.pop();
        }
        let getNode = this.get(index-1);
        let removeNode = getNode.next;
        let afterNode = removeNode.next;
        getNode.next = afterNode;
        afterNode.prev = getNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;

    }
}

let list = new DoublyLinkedList();
list.push(12);
list.push(24);
list.push("HELLO");
list.unshift("Where");
// list.get(3);
list.insert(3, "INSERTED");
console.log(list);
