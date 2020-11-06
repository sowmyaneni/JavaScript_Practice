//Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
//Input: [2,1,5,1,3,2], k=3
//Output: 9;
function maxSumSubArray(arr, K) {
    // let output = [];
    let start = 0;
    let end = K-1;
    let windowStart = 0;
    let sum = 0;
    let max = sum;
    for (start = 0; start <= arr.length-1; start++) {
        sum += arr[start];
        if (start >= end) {
            // output.push(sum);
            // if (sum > max) {
            //     max = sum;
            // }
            max = Math.max(sum, max);
            sum -= arr[windowStart];
            windowStart++;
        }
    }
    return max;
    // return output;
}
console.log(maxSumSubArray([2,1,5,1,3,2],3));