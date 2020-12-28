
// Given a set of investment projects with their respective profits, we need to find the most profitable projects. 
// We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects 
// that give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable 
// projects.

// We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its 
// profit has become our capital.

// Example 2:

// Input: Project Capitals=[0,1,2,3], Project Profits=[1,2,3,5], Initial Capital=0, Number of Projects=3
// Output: 8
let Heap = require('collections/heap');

const find_maximum_capital = function(capital, profits, numberOfProjects, initialCapital) {
    //Initiate min and max heap
    let minHeap = new Heap([], null, ((a,b) => b[0] - a[0]));
    let maxHeap = new Heap([], null, ((a,b) => a[0] - b[0]));
    //Initate a min-Heap
    for (let i = 0; i < capital.length; i++) {
        minHeap.push([capital[i], i]);
    }
    let availableCapital = initialCapital;
    for (let j=0; j < numberOfProjects; j++) {
        while(minHeap.length > 0 && minHeap.peek()[0] <= availableCapital) {
            const [capital, index] = minHeap.pop();
            maxHeap.push([profits[index], index]);
        }
        if (maxHeap.length === 0) {
            break;
        }
        availableCapital += maxHeap.pop()[0];
    }
    return availableCapital;
    
  };
  
  
  console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`)
  console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`)
  