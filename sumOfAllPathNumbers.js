// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
// Find the total sum of all the numbers represented by all paths.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_sum_of_path_numbers = function(root) {
    // TODO: Write your code here
    let totalSum = 0;
    let pathValues = '';
    function traverse_paths(currentNode, pathValues) {
        if (currentNode === null) {
            return;
        }
        pathValues += currentNode.value;
        if (currentNode.left === null && currentNode.right === null) {
            totalSum += Number(pathValues);
        } else {
            traverse_paths(currentNode.left, pathValues);
            traverse_paths(currentNode.right, pathValues);
        }
        pathValues.slice(0, -1);
    }
    traverse_paths(root, pathValues);
    return totalSum;
  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)