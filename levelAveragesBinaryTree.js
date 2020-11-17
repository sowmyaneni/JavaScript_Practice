// Given a binary tree, populate an array to represent the averages of all of its levels.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const find_level_averages = function(root) {
    let result = [];
    let queue = [];
    if (root === null) {
        return result;
    }
    queue.push(root);
    while (queue.length > 0) {
        let currentAverage = 0;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let poppedNode = queue.shift();
            currentAverage += poppedNode.val;
            if (poppedNode.left) {
                queue.push(poppedNode.left);
            }
            if (poppedNode.right) {
                queue.push(poppedNode.right);
            }
        }
        currentAverage = currentAverage/levelSize;
        result.push(currentAverage);
    }
    return result;
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)