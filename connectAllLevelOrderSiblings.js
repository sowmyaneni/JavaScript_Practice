class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
    
    // tree traversal using 'next' pointer
    print_tree() {
      let result = "Traversal using 'next' pointer: ";
      let current = this;
      while (current != null) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result);
    }
  };
  
  const connect_all_siblings = function(root) {
    // TODO: Write your code here
    if (root === null) {
        return root;
    }
    let queue = [];
    queue.push(root);
    let previousNode = null;
    while (queue.length > 0) {
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
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(connect_all_siblings(root));
//   root.print_tree()