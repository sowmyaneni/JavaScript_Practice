// Task: Write a function that removes duplicates and non-integers from an array list
// Sample Array: [1, 3, 5, 10, 3, !, oops]

function removeDup(arr) {
    let map = {};
    for (var i = 0; i <= arr.length; i++) {
        if (typeof(arr[i]) === "number") {
          if (map[arr[i]]) {
            map[arr[i]] = false;
          } else {
            map[arr[i]] = true;
          }
        } 
    }
    let keys = Object.keys(map);
    let filteredArray = keys.filter(function(key) {
        return map[key];
    });
    return filteredArray.map(function(key) {
        return Number(key);
    })

    // or 
    // let filteredArray = keys.filter(function(key) {
    //     return map[key];
    // }).map(function(key) {
    //     return Number(key);
    // });
    // return filteredArray;
}

console.log(removeDup([1, 3, 5, 10, 3, '!', 'oops']))