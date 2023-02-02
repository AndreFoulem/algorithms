// @ts-nocheck
//? Binary Search Tree

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

  insert(value: number) {
    let newNode = new BSTNode(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (value === current.value) return 'equal value'
      if (value < current.value) {
        if (current.left === null) {
          //> found a place
          current.left = newNode
          return this
        } else {
          current = current.left
        }
      } else if (value > current.value) {
        //> found a place
        if (current.right === null) {
          current.right = newNode
          return this
        } else current = current.right
      }
    }
  }
}

let tree = new BinarySearchTree()
tree.root = new BSTNode(10)
console.log(tree)
