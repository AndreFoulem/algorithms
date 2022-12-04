//Binary search tree (sorted)

//* -----------  Inserting A Node  ------------- //
//& 1) Create a new node
//& 2) Start at the root
//&   A) If !Root  => node = root
//&   B) If Root:
//&      i) if node > root =>
//&           a) if (!right node) => node = right node
//&           b) if(right node) => move to it + repeat steps
//&      ii) if node < root => check if (left node)
//&           a) if (!left node) => node = left node
//&           b) if (left node)=> move to it + repeat steps

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    console.log('newnode', newNode);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
        }
      }
    }
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
tree.insert(5);
// tree.root = new Node(10);

// tree.root.right = new Node(15);
// tree.root.left = new Node(7);

// tree.root.left.right(0);

console.log(tree);
