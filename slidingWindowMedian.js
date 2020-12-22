// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

// [1, 2, -1, 3, 5] -> median is 1.5
// [1, 2, -1, 3, 5] -> median is 0.5
// [1, 2, -1, 3, 5] -> median is 1.0
// [1, 2, -1, 3, 5] -> median is 4.0
let Heap = require('collections/heap');

class SlidingWindowMedian {
    constructor() {
        this.maxHeap = new Heap([], null, ((a,b) => a - b));
        this.minHeap = new Heap([], null, ((a,b) => b - a));
    }
    find_sliding_window_median(nums, k) {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            if (this.maxHeap.length === 0 || this.maxHeap.peek() >= nums[i]) {
                this.maxHeap.push(nums[i]);
            } else {
                this.minHeap.push(nums[i]);
            }

            this.rebalanceHeaps();

            if (i - k + 1 >= 0) {
                if (this.maxHeap.length === this.minHeap.length) {
                    result.push(this.maxHeap.peek()/2.0 + this.minHeap.peek()/2.0);
                } else {
                    result.push(this.maxHeap.peek());
                }

                let elementToBeRemoved = nums[i-k+1];
                if (elementToBeRemoved <= this.maxHeap.peek()) {
                    this.maxHeap.delete(elementToBeRemoved);
                } else {
                    this.minHeap.delete(elementToBeRemoved);
                }
                this.rebalanceHeaps();
            }
        }
        return result;

    }
    rebalanceHeaps() {
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
};

let slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);