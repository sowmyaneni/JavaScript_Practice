// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:
// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// Example 2:
// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

function findSubsets(arr) {
    let subsets = [];
    subsets.push([]);
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let n = subsets.length;
        for (let j = 0; j < n; j++) {
            let subsetsCopy = subsets[j].slice(0);
            subsetsCopy.push(currentNumber);
            subsets.push(subsetsCopy);
        }
    }
    return subsets;
}
console.log(findSubsets([1,3]));
console.log(findSubsets([1,3, 5]));
