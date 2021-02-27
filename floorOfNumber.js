// Given an array of numbers sorted in ascending order, find the floor of a given number ‘key’. 
// The floor of the ‘key’ will be the biggest element in the given array smaller than or equal to the ‘key’

// Write a function to return the index of the floor of the ‘key’. If there isn’t a floor, return -1.

// Example 1:

// Input: [4, 6, 10], key = 6
// Output: 1
// Explanation: The biggest number smaller than or equal to '6' is '6' having index '1'.

function searchFloorOfNumber(arr, key) {
    //biggest element in the given array that is smaller or equal to the key
    let start = 0;
    let end = arr.length - 1;
    if (arr[start] > key) {
        return -1;
    }
    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);

        if (arr[mid] > key) {
            end = mid - 1;
        } else if (arr[mid] < key) {
            start = mid+1;
        } else {
            return mid;
        }
    }
    return end;
}
console.log(searchFloorOfNumber([4, 6, 10], 6));
console.log(searchFloorOfNumber([1, 3, 8, 10, 15], 12));
console.log(searchFloorOfNumber([4, 6, 10], 17));
console.log(searchFloorOfNumber([4, 6, 10], -1));