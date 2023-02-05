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
        }
        current = current.left
      } else if (value > current.value) {
        //> found a place
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  contains(value: number) {
    if (!this.root) return false

    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value < current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return true
  }

  breadthFirstSearch() {
    let visited = []
    let queue = []
    let node = this.root

    queue.push(node)
    while (queue.length) {
      // 1) Put the node value from queue to visited
      node = queue.shift()
      visited.push(node.value)

      // 2) Add children to queue
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }

  //* 1) Visit node first 2)Grab the children 3) Cycle
  depthFirstSearch_PreOrder() {
    let visited = []
    let current = this.root
    function traverse(node: object) {
      visited.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)

    return visited
  }

  //* Traverse to children then work our way back
  depthFirstSearch_PostOrder() {
    let visited = []
    function traverse(node: object) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.value)
    }
    traverse(this.root)
    return visited
  }

  depthFirstSearch_InOrder() {
    let visited = []
    function traverse(node: object) {
      if (node.left) traverse(node.left)
      visited.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }
}

let tree = new BinarySearchTree()
tree.root = new BSTNode(10)
console.log(tree)
