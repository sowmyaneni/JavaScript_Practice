class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if (val === current.val) {
                    return undefined;
                }
                if(val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (val > current.val) {
                        if (current.right === null) {
                            current.right = newNode;
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                }
            }
        }
        
    }
    search(val) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }
    BFS() {
        let queue = [];
        let visited = [];
        let current = this.root;
        let removedNode;
        queue.push(current);
        while (queue.length !== 0) {
            removedNode = queue.shift();
            visited.push(removedNode);
            if (removedNode.left) {
                queue.push(removedNode.left);
            }
            if (removedNode.right) {
                queue.push(removedNode.right);
            }
        } 
        return visited;
    }
    DFSPreorder() {
        let visited = [];
        let current = this.root;
        let helper = function(node) {
            visited.push(node);
            if (node.left) {
                helper(node.left);
            }
            if (node.right) {
                helper(node.right);
            }
        }
        helper(current);
        return visited;
    }
    DFSPostOrder() {
        let visitedNodes = [];
        let current = this.root;
        let traverse = function(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visitedNodes.push(node);
        }
        traverse(current);
        return visitedNodes;
    }
    DFSInOrder(){
        let visitedNodes = [];
        let current = this.root;
        let traverse = function(node) {
            if (node.left) {
                traverse(node.left);
            }
            visitedNodes.push(node.val);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return visitedNodes;
    }
 }

let tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(8);
tree.insert(9);
console.log(tree.BFS());