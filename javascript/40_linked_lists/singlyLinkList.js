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
      //!-> tail holds ref to old node
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) {
      return 'empty'
    }
    //! first thing is to traverse the list
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    //!sever the last tail
    this.tail.next = null

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
    console.log(current.value)
    console.log(newTail.value)
  }
}

let list = new SinglyLinkedList()
list.push('first')
list.push('second')
list.push('third')
console.log(list.pop())
console.log(list)
