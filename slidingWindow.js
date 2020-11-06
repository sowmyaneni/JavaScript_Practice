function slidingWindow(arr, K) {
    let result = [];
    let start = 0;
    let sum = 0;
    let end = K-1;
    let windowStart = 0;
    for (let start = 0; start < arr.length; start++) {
        sum += arr[start];
        if (start >= end) {
            result.push(sum/K);
            sum-= arr[windowStart];
            windowStart++;
        }
    }
    return result;
}

console.log(slidingWindow([1, 3, 2, 6, -1, 4, 1, 8, 2],5));