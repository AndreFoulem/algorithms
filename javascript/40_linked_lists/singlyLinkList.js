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

  //* ----------- PUSH  ------------- //
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

  //* -----------  POP  ------------- //
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

  //* -----------  UNSHIFT  ------------- //
  unshift(value) {
    let newNode = new Node(value)

    if (this.head) {
      //!-> tail holds ref to old node
      newNode.next = this.head
      this.head = newNode
    } else if (!this.head) {
      this.tail = this.head = newNode
    }
    this.length++
    return this
  }

  //* -----------  GET  ------------- //
  get(index) {
    //! guard
    if (index < 0 || index >= this.length) return null

    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  //* -----------  SET NODE VALUE ------------- //
  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }
}

let list = new SinglyLinkedList()
list.push('first')
list.push('second')
list.push('third')
list.set(2, 'yo')

console.log(list.pop())
console.log(list.length)
console.log(list)
