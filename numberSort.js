function numberSort(arr) {
    let newArray = arr.sort((a,b) => a - b);
    return newArray;
}
console.log(numberSort([2, 6, 4, 3, 1, 5]));