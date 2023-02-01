//? stack -> singly linked list

class StackNode {
  value: string
  next = null

  constructor(value: string) {
    this.value = value
  }
}

class Stack {
  first: object | null
  last: object | null
  size: number

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  unshift(value) {
    let myNode = new StackNode(value)

    if (this.size === 0) {
      this.first = myNode
      this.last = myNode
    } else {
      myNode.next = this.first
      this.first = myNode
    }
    return ++this.size
  }
}

let myStack = new Stack()
myStack.unshift('last')
myStack.unshift('mid')
myStack.unshift('first')
console.log(myStack)
