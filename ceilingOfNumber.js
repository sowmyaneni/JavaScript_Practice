// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The 
// ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

function search_ceiling_of_a_number(arr,key) {
    //find greater or equal to the key
//sorted in ascending order
    let start = 0;
    let end = arr.length - 1;
    if (key > arr[end]) {
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
    return start;
}


console.log(search_ceiling_of_a_number([4, 6, 10], 6))
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
console.log(search_ceiling_of_a_number([4, 6, 10], 17))
console.log(search_ceiling_of_a_number([4, 6, 10], -1))