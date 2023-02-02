class BSTNode {
  value: number
  left: null | object = null
  right: null | object = null

  constructor(value: number) {
    this.value = value
  }
}

class BinarySearchTree {
  root: null | object
  constructor() {
    this.root = null
  }
}

let tree = new BinarySearchTree()
tree.root = new BSTNode(10)
console.log(tree)
