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
    let temp = this.head
    let newTail = temp
    while (temp.next) {
      newTail = temp
      temp = temp.next
    }
    this.tail = newTail
    //!sever the last tail
    this.tail.next = null

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  //* -----------  SHIFT  ------------- //
  shift() {
    if (!this.head) return undefined
    let originalFirstNodeHead = this.head
    this.head = originalFirstNodeHead.next

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return originalFirstNodeHead
  }
}

let list = new SinglyLinkedList()
list.push('first')
list.push('second')
list.push('third')
console.log(list.pop())
console.log(list)
