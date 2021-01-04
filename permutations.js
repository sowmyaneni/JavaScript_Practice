// Given a set of distinct numbers, find all of its permutations.

// Example 1:

// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

function findPermutations(nums) {
    let result = [];
    let subsets = [];
    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        let n = subsets.length;
        for (j = 0; j < n; j++) {
            let oldsubsets = subsets.shift();
            for (let k = 0; k < oldsubsets.length + 1; k++) {
                let cloneOldSubsets = oldsubsets.slice(0);
                cloneOldSubsets.splice(k,0,nums[i]);
                if (cloneOldSubsets.length === nums.length) {
                    result.push(cloneOldSubsets);
                } else {
                    subsets.push(cloneOldSubsets);
                }
            }
        }
    }
    return result;
}

console.log(findPermutations([1,3,5]));