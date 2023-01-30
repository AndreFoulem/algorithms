//? Doubly linked list

type pointer = object | null

class listNode {
  val: string
  next: pointer
  prev: pointer

  constructor(value: string) {
    this.val = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedlIst {
  head: pointer
  tail: pointer
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

console.log(