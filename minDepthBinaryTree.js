// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root 
// node to the nearest leaf node.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_minimum_depth = function(root) {
    // TODO: Write your code here
    if (root === null) {
        return 0;
    }
    let queue = [];
    queue.push(root);
    let minimumTreeDepth = 0;
    while (queue.length > 0) {
        minimumTreeDepth++;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let poppedNode = queue.shift();
            if (poppedNode.left === null && poppedNode.right === null) {
                return minimumTreeDepth;
            }
            if (poppedNode.left) {
                queue.push(poppedNode.left);
            }
            if (poppedNode.right) {
                queue.push(poppedNode.right);
            }
        }
    }
  };
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  root.left.left = new TreeNode(9)
  root.right.left.left = new TreeNode(11)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)