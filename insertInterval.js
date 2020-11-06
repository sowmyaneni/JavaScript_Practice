// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
// Example 1:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

function insertInterval(intervals, newInterval) {
    let mergedInterval = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        mergedInterval.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    mergedInterval.push([newInterval[0], newInterval[1]]);

    while (i < intervals.length) {
        mergedInterval.push(intervals[i]);
        i++;
    }
    return mergedInterval;
}

console.log(insertInterval([[1,3], [5,7], [8,12]], [4,6]));
console.log(insertInterval([[1,3], [5,7], [8,12]], [4,10]));
console.log(insertInterval([[2,3], [5,7]], [1,4]));
