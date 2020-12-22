// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:
// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// Example 2:
// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

let Heap = require("collections/heap");

class MedianOfAStream {
    constructor() {
        this.maxHeap = new Heap([], null, ((a,b) => a - b));
        this.minHeap = new Heap([], null, ((a,b) => b - a));
    }
    insert_num(num) {
        //insert the first num into maxHeap
        if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    find_median() {
        if (this.maxHeap.length === this.minHeap.length) {
            return this.maxHeap.peek()/2.0 + this.minHeap.peek()/2.0;
        } else {
            return this.maxHeap.peek();
        }
    }
};

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(10);
console.log(`The median is: ${medianOfAStream.find_median()}`);