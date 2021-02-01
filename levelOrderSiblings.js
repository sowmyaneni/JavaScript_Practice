class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
    print_level_order() {
        console.log("Level order traversal using 'next' pointer: ");
        let nextLevelRoot = this;
        while (nextLevelRoot !== null) {
          let current = nextLevelRoot;
          nextLevelRoot = null;
          while (current != null) {
            process.stdout.write(`${current.val} `);
            if (nextLevelRoot === null) {
              if (current.left !== null) {
                nextLevelRoot = current.left;
              } else if (current.right !== null) {
                nextLevelRoot = current.right;
              }
            }
            current = current.next;
          }
          console.log();
        }
      }
}

// const connect_level_order_siblings = function(root) {
//     let result = [];
//     let queue = [];
//     if (root === null) {
//         return result;
//     }
//     queue.push(root);
//     while(queue.length > 0) {
//         let levelSize = queue.length;
//         let currentLevel = [];
//         for (let i = 0; i < levelSize; i++) {
//             let poppedNode = queue.shift();
//             let leftNode, rightNode;
//             if (poppedNode.left) {
//                 leftNode = poppedNode.left;
//                 queue.push(poppedNode.left);
//             }
//             if (poppedNode.right) {
//                 rightNode = poppedNode.right;
//                 queue.push(poppedNode.right);
//             }
//             currentLevel.push(poppedNode);
//         }
//         for (let i = 0; i < currentLevel.length; i++) {
//             if (currentLevel.length > 1 && i < currentLevel.length-1) {
//                 currentLevel[i].next = currentLevel[i+1];
//             }
//         }
//         result = result.concat(currentLevel);
//     }
//     return result;
// };
const connect_level_order_siblings = function(root) {
    if (root === null) {
        return;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let previousNode = null;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let poppedNode = queue.shift();
            if (previousNode !== null) {
                previousNode.next = poppedNode;
            }
            previousNode = poppedNode;
            if (poppedNode.left) {
                queue.push(poppedNode.left);
            }
            if (poppedNode.right) {
                queue.push(poppedNode.right);
            }
        }
    }
    return root;
};
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(connect_level_order_siblings(root));
// root.print_level_order();