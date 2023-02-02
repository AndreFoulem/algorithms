class BSTNode {
  value: string
  next: null | object = null
  right: null | object = null

  constructor(value: string) {
    this.value = value
  }
}

class BST {
  root: null | string | object
  constructor() {
    this.root = null
  }
}
