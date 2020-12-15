class maxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1)/2);
        while (index > 0 && this.values[parentIndex] < this.values[index]) {
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
    }
    extractMax() {
        let lastElement = this.values.length - 1;
        [this.values[0], this.values[lastElement]] = [this.values[lastElement], this.values[0]];
        let maxElement = this.values.pop();
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            //compare first element to its left and right child
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let heap = new maxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);