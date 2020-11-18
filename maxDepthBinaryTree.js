// Given a binary tree, find its maximum depth (or height).

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

const find_maximum_depth = function(root) {
    if (root === null) {
        return 0;
    }
    let queue = [];
    queue.push(root);
    let maximumDepth = 0;
    while (queue.length > 0) {
        maximumDepth++;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let poppedNode = queue.shift();
            if (poppedNode.left) {
                queue.push(poppedNode.left);
            }
            if (poppedNode.right) {
                queue.push(poppedNode.right);
            }
        }
    }
    return maximumDepth;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);