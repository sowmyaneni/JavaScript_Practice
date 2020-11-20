// Given a binary tree, find the root-to-leaf path with the maximum sum.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

function find_paths(root) {
    let maxSumPath = [];
    let currentPath = [];
    let maxSum = 0;
    // let pathSum = 0;
    let sum = 0;
    let tempPathSum = [];
    function traverse_all_paths(currentNode, sum) {
        if (currentNode === null) {
            return;
        }
        currentPath.push(currentNode.val);
        if (currentNode.left === null && currentNode.right === null && sum + currentNode.val > maxSum) {
            maxSum = sum + currentNode.val;
            maxSumPath = [];
            maxSumPath.push([...currentPath]);
        } else if (currentNode.left === null && currentNode.right === null && sum + currentNode.val === maxSum) {
            maxSumPath.push([...currentPath]);
        } else {
            traverse_all_paths(currentNode.left, sum + currentNode.val);
            traverse_all_paths(currentNode.right, sum + currentNode.val);
        }
        currentPath.pop();

    }
    traverse_all_paths(root, sum);
    return maxSumPath;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(find_paths(root));