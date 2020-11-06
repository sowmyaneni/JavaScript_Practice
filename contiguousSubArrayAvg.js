// Find the average of all contiguous subarrays of size ‘5’ in the given array. 
//Brute Force
function contiguousSubArrayAvg(arr, K) {
    var output = [];
    for (var i = 0; i < arr.length - K+1; i++) {
        var sum = 0;
        for (var j = i; j < i+K ;j++) {
            sum += arr[j];
        }
        output.push(sum/K);
    }
    return output;
}

//Sliding Window Approach
function contiguousSubArrayAvg(arr, K) {
   let output = [];
   let windowSum = 0;
   let windowStart = 0;
   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
       windowSum += arr[windowEnd];
       if (windowEnd >= K - 1) {
           output.push(windowSum/K);
           windowSum -= arr[windowStart];
           windowStart++;
       }
   }
   return output;
}

console.log(contiguousSubArrayAvg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));