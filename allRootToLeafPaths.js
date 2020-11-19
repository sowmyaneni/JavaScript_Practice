// Given a binary tree, return all root-to-leaf paths

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

function find_paths(root) {
    let allPaths = [];
    let currentPath = [];

    function find_each_path(currentNode, currentPath, allPaths) {
        if (currentNode === null) {
            return;
        }
        currentPath.push(currentNode.val);
        if (currentNode.left === null && currentNode.right === null) {
            allPaths.push([...currentPath]);
        } else {
            find_each_path(currentNode.left, currentPath, allPaths);
            find_each_path(currentNode.right, currentPath, allPaths);
        }
        currentPath.pop();
    }
    find_each_path(root, currentPath, allPaths);
    return allPaths;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(find_paths(root));