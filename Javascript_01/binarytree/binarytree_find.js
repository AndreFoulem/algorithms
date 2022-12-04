//Binary search tree (sorted)

//* ----------- Find a node  ------------- //
//& 1) Start at Root
//& 2) IF (!root) => return FALSE
//&   A) If (root) =>
//&       i) IF(value = root) return TRUE
//&       ii) ELSE
//&           IF(value > root)
//&           a) IF (root.right) => Move to it, repeat steps
//&           b) if (!root.right) => return FALSE
//&           ELSE(value < root)
//&           a) if (root.left) => Move to it, repeat steps
//&           b) if (!root.left) => return FALSE

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let head = this.root;
    while (true) {
      if (value === head.value) return 'undefined';
      if (value < head.value) {
        //! left side
        if (head.left === null) {
          head.left = newNode;
          return this;
        }
        head = head.left;

        //! right side
      } else if (value > head.value) {
        if (head.right === null) {
          head.right = newNode;
          return this;
        }
        head = head.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//?      TREE
//?       10
//?   5        13
//? 2   7   11    16

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(16);
// tree.root = new Node(10);

// tree.root.right = new Node(15);
// tree.root.left = new Node(7);

// tree.root.left.right(0);

console.log(tree);
console.log(tree.contains(16));
