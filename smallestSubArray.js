// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
function smallestSubArray(arr, S) {
    let windowSum = 0;
    let windowStart = 0;
    let minLength = Infinity;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++ ) {
        windowSum += arr[windowSum];
        while(windowSum >= S) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
  
}
// console.log(smallestSubArray([2, 1, 5, 2, 3, 2],7));
console.log(smallestSubArray([2, 1, 5, 2, 8],7));
console.log(`Smallest subarray length: ${smallestSubArray([3, 4, 1, 1, 6],8)}`);
