// Given an array of intervals, find the next interval of each interval. In a list of intervals, for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

// Write a function to return an array containing indices of the next interval of each input interval. If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.

// Example 1:

// Input: Intervals [[2,3], [3,4], [5,6]]
// Output: [1, 2, -1]

const Heap = require('collections/heap');

function find_next_interval(intervals) {
    let maxStartHeap = new Heap([], null, ((a,b) => a[0] - b[0]));
    let maxEndHeap = new Heap([], null, ((a,b) => a[0] - b[0]));

    let n = intervals.length;
    let result = Array(n).fill(0);
    for (let endIndex = 0; endIndex < n; endIndex++ ) {
        maxStartHeap.push([intervals[endIndex][0], endIndex]);
        maxEndHeap.push([intervals[endIndex][1], endIndex]);
    }

    for (let i = 0; i < n; i++) {
        const [topEnd, endIndex] = maxEndHeap.pop();
        result[endIndex] = -1;
        if(maxStartHeap.peek()[0] >= topEnd) {
            let [topStart, startIndex] = maxStartHeap.pop();
            while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
                [topStart, startIndex] = maxStartHeap.pop();
            }
            result[endIndex] = startIndex;
            maxStartHeap.push([topStart, startIndex]);
        }
    }
    return result;
}


result = find_next_interval([[2, 3], [3, 4], [5, 6]]);
console.log(result);