//! singlyLinkList

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(value) {
    let newNode = new Node(value)
    // assign refs
    if (this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
}

let list = new SinglyLinkedList()
list.push('hello')
console.log(list.push('hi'))
