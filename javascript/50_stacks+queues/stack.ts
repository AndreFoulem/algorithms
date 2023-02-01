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

  shift() {
    let firstNode = this.first

    if (this.size === 0) {
      return null
    }
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      // @ts-ignore
      this.first = firstNode.next
      // @ts-ignore
      firstNode.next = null
    }
    this.size--
    return this
  }
}

let myStack = new Stack()
myStack.unshift('3')
myStack.unshift('2')
myStack.unshift('1')
myStack.shift()
console.log(myStack)
