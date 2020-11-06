// Given a binary tree, populate an array to represent its level-by-level traversal.
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  result = [];
  let queue = [[root, 1]];
  while (queue.length > 0) {
    let nodeLevelArray = queue.shift();
    let node = nodeLevelArray[0];
    let nodeLevel = nodeLevelArray[1];
    if (nodeLevel > result.length) {
      result.push([]);
      result[nodeLevel - 1].push(node.value);
    } else {
      result[nodeLevel - 1].push(node.value);
    }
    console.log(node.value, nodeLevel);
    if (node.left) {
      queue.push([node.left, nodeLevel + 1]);
    }
    if (node.right) {
      queue.push([node.right, nodeLevel + 1]);
    }
  }
  // TODO: Write your code here
  console.log(result);
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
