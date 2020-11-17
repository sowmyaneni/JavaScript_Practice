// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate 
// the values of all nodes of the first level from left to right, then right to left for the next level and keep 
// alternating in the same manner for the following levels.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const traverse = function(root) {
    let visited = [];
    let queue = [];
    if (root === null) {
        return [];
    }
    queue.push(root);
    let counter = 0;
    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            let poppedNode = queue.shift();
            if (counter % 2 === 0) {
                currentLevel.push(poppedNode.value);
            } else {
                currentLevel.unshift(poppedNode.value);
            }
            if (poppedNode.left) {
                queue.push(poppedNode.left);
            }
            if (poppedNode.right) {
                queue.push(poppedNode.right);
            }
        }
        counter++;
        visited.push(currentLevel);
    }
    return visited;
};

// var root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)
// root.right.left.left = new TreeNode(20)
// root.right.left.right = new TreeNode(17)
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)
console.log(`Zigzag traversal: ${traverse(root)}`)