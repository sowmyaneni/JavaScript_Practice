class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_paths = function(root, sum) {
    allPaths = 0;
    // TODO: Write your code here
    let stack = [];
    let stackSum = [];
    stack.push(root);
    stackSum.push(sum);
    if (root === null) {
        return 0;
    }
    while (stack.length > 0) {
        let poppedNode = stack.pop();
        let currentSum = stackSum.pop();
        if (poppedNode.value === currentSum && poppedNode.left === null && poppedNode.right === null) {
            allPaths++;
        }
        if (poppedNode.left) {
            stack.push(poppedNode.left);
            stackSum.push(currentSum - poppedNode.value);
        }
        if (poppedNode.right) {
            stack.push(poppedNode.right);
            stackSum.push(currentSum - poppedNode.value);
        }
    }
    return allPaths;
  };
  
  
  
//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(4)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)
//   sum = 23
  var root = new TreeNode(1)
  root.left = new TreeNode(7)
  root.right = new TreeNode(9)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(2)
  root.right.right = new TreeNode(7)
  sum = 12
  console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
  