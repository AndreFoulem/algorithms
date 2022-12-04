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

//?      TREE
//?       10
//?   5        13
//? 2   7   11    16

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);

tree.root.right = new Node(15);
tree.root.left = new Node(7);

tree.root.left.right(0);
