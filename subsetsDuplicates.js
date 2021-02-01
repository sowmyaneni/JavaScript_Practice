// Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Example 1:

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]

function find_subsets(nums) {
    nums.sort();
    let subsets = [];
    subsets.push([]);
    let startIndex = 0;
    let endIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            startIndex = endIndex;
        }
        endIndex = subsets.length;
        for (let j = startIndex; j < endIndex; j++) {
            let set1 = subsets[j].slice(0);
            set1.push(nums[i]);
            subsets.push(set1);

        }
    }
    return subsets;

}

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});
