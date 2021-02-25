// Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let isAscending = arr[start] < arr[end];
    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if (arr[mid] === key) {
            return mid;
        }
        if (isAscending) {
            if (arr[mid] < key) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] < key) {
                end = mid -1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}

console.log(binarySearch([4, 6, 10], 10));
console.log(binarySearch([1,2,3,4,5,6,7], 5));
console.log(binarySearch([10, 6, 4], 10));
console.log(binarySearch([10, 6, 4], 4));