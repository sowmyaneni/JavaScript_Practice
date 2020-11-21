// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    // TODO: Write your code here
    let pathSequence = '';
    let stringSequence = sequence.join('');
    let found = false;
    function traverse_path(currentNode, pathSequence, stringSequence) {
        if (currentNode === null) {
            return;
        }
        pathSequence += currentNode.value;
        if (currentNode.left === null && currentNode.right === null) {
            if (Number(pathSequence) === Number(stringSequence)) {
                found = true;
            }
        } else {
            traverse_path(currentNode.left, pathSequence, stringSequence);
            traverse_path(currentNode.right, pathSequence, stringSequence);
        }
        pathSequence.slice(0, -1);
    }
    traverse_path(root, pathSequence, stringSequence);
    return found;

  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(7)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  