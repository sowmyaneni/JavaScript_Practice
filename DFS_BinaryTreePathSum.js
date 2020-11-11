class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

function hasPath(root, sum) {
    let stack = [];
    let sumStack = [];
    stack.push(root);
    sumStack.push(sum);

    while (stack.length > 0) {
        let currentNode = stack.pop();
        let currentSum = sumStack.pop();
        if (currentNode.value === currentSum && currentNode.left === null && currentNode.right === null) return true;
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
            sumStack.push(currentSum - currentNode.value);
        }
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
            sumStack.push(currentSum - currentNode.value);
        }
    }
    return false;

}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${hasPath(root, 23)}`)
// console.log(`Tree has path: ${hasPath(root, 16)}`)

// var root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3)
// root.left.left = new TreeNode(4)
// root.left.right = new TreeNode(5)
// root.right.left = new TreeNode(6)
// root.right.right = new TreeNode(7)
// console.log(`Tree has path: ${hasPath(root, 10)}`)
