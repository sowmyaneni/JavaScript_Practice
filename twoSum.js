// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 2].

//input: Array, number
//output: array

function twoSum(arr, target) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        var diff = target - arr[i];
        if (map.hasOwnProperty(diff)) {
            return [map[diff], i];
        } else {
            map[arr[i]] = i; 
        }
    }
    return null;
}
console.log(twoSum([2, 7, 11, 15], 9));