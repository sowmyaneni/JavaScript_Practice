// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
// one [1,5].

// Example 2:

// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
 
// Example 3:

// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

function sortArrays(intervals) {
    if (intervals.length < 2) {
      return intervals;
    }
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    let mergedIntervals = [];
    let start = sortedIntervals[0][0];
    let end = sortedIntervals[0][1];
    for (let i = 1; i < sortedIntervals.length; i++) {
      let interval = sortedIntervals[i];
      if (interval[0] <= end) {
        end = Math.max(interval[1], end);
      } else {
          mergedIntervals.push([start,end]);
          start = interval[0];
          end = interval[1];
      }
    }
    mergedIntervals.push([start, end]);
    return mergedIntervals;
  }
  
  console.log(sortArrays([[1,4], [2,5], [7,9]]));