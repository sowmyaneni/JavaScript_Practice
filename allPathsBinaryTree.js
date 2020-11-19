class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

const find_paths = function(root, sum) {
    let allPaths = [];
    let currentPath = [];

    function traverse(currentNode, sum, currentPath, allPaths) {
        if (currentNode === null) {
            return;
        }
        currentPath.push(currentNode.val);

        if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
            allPaths.push([...currentPath]);
        } else {
            traverse(currentNode.left, sum - currentNode.val, currentPath, allPaths);
            traverse(currentNode.right, sum - currentNode.val, currentPath, allPaths);
        }
        currentPath.pop();
    }
    traverse(root, sum, currentPath, allPaths);
    return allPaths;
};

//Iterative
// const find_paths = function(root, sum) {
//     let result = [];
//       let allPaths = [[root.val]];
//       let stack = [];
//       stack.push(root);
//       let stackSum = [];
//       stackSum.push(sum);
//       while (stack.length > 0) {
//         let poppedNode = stack.pop();//currentNode
//         let currentSum = stackSum.pop();
//         //current path
//         let currentPath = allPaths.pop();
//         if (poppedNode.val === currentSum && !poppedNode.left && !poppedNode.right) {
//           result.push(currentPath);
//         }
//         if (poppedNode.left) {
//           stack.push(poppedNode.left);
//           allPaths.push(currentPath.concat(poppedNode.left.val));
//           stackSum.push(currentSum - poppedNode.val);
          
  
//         }
//         if (poppedNode.right) {
//           stack.push(poppedNode.right);
//           allPaths.push(currentPath.concat(poppedNode.right.val));
//           stackSum.push(currentSum - poppedNode.val);
  
//         }
        
//       }
//       return result;
//   };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(find_paths(root, 23)); 
 