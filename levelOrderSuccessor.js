// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order 
// successor is the node that appears right after the given node in the level order traversal.
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_successor = function(root, key) {
    // TODO: Write your code here
    if (root === null) {
        return null;
    }
    // let visited = [];
    // let queue = [];
    // queue.push(root);
    // while (queue.length > 0) {
    //     let levelSize = queue.length;
    //     for (let i = 0; i < levelSize; i++) {
    //         let poppedNode = queue.shift();
    //         visited.push(poppedNode.val);
    //         if (poppedNode.left) {
    //             queue.push(poppedNode.left);
    //         }
    //         if (poppedNode.right) {
    //             queue.push(poppedNode.right);
    //         }
    //     }
    // }
    // for (let i = 0; i < visited.length; i++) {
    //     if (visited[i] === key) {
    //         return visited[i+1];
    //     } 
    // }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let poppedNode = queue.shift();
        if (poppedNode.left) {
            queue.push(poppedNode.left);
        }
        if (poppedNode.right) {
            queue.push(poppedNode.right);
        }
        if (poppedNode.val === key) {
            break;
        }
    }
    if (queue.length > 0) {
        return queue[0];
    }
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  result = find_successor(root, 12)
  if (result != null)
    console.log(result.val)
  result = find_successor(root, 9)
  if (result != null)
    console.log(result.val)