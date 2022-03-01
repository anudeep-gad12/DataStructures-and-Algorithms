class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Insert a node into BST

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (value === temp.val) return null;
      if (value < temp.val) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else if (value > temp.val) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  // Find a node

  find(value) {
    if (!this.root) return null;
    if (value === this.root.value) return this.root;
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.val) return currentNode;
      if (value < currentNode.val) {
        if (!currentNode.left) return null;
        currentNode = currentNode.left;
      } else if (value > currentNode.val) {
        if (!currentNode.right) return null;
        currentNode = currentNode.right;
      }
    }
  }

  // Breadth-First Search
  BFS() {
    let queue = [];
    let data = [];
    if (!this.root) return data;
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // Depth-First Search - Preorder
  DFS_PreOrder() {
    let data = [];
    let current = this.root;
    const traverse = (current) => {
      data.push(current.val);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };
    traverse(current);

    return data;
  }
  // Depth-First Search - Postorder
  DFS_PostOrder() {
    let data = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      data.push(current.val);
    };
    traverse(current);

    return data;
  }
  // Depth-First Search - Inorder
  DFS_InOrder() {
    let data = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) traverse(current.left);
      data.push(current.val);
      if (current.right) traverse(current.right);
    };
    traverse(current);

    return data;
  }
}

let bst = new BinarySearchTree();
