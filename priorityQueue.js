class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if (element.priority <= parent.priority) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue() {
        let lastElement = this.values.length - 1;
        [this.values[0], this.values[lastElement]] = [this.values[lastElement], this.values[0]];
        let maxElement = this.values.pop();
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) {
                break;
            }
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;

        }
        return maxElement;
    }

}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gun shot wound", 5);
ER.enqueue("high fever", 3);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

