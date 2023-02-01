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
}
