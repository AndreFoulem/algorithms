//! singlyLinkList
// @ts-nocheck

class myNode {
  value: string
  next = null

  constructor(value: string) {
    this.value = value
  }
}

class SinglyLinkedList {
  length: number
  head: null
  tail: null
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  //* ----------- PUSH  ------------- //
  push(value: string): object {
    let newNode: myNode | null
    newNode = new myNode(value)
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
  pop(): object | string {
    if (!this.head) {
      return 'empty'
    }
    //! first thing is to traverse the list
    let temp: null | myNode

    temp = this.head
    let newTail = temp
    while (temp.next !== null) {
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
  shift(): object {
    if (!this.head) return undefined
    let originalFirstNodeHead: null | myNode
    originalFirstNodeHead = this.head
    this.head = originalFirstNodeHead.next

    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return originalFirstNodeHead
  }

  //* -----------  UNSHIFT  ------------- //
  unshift(value): object {
    let newNode: myNode | null
    newNode = new myNode(value)

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
  get(index): number {
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
  set(index, value): boolean {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }

  //* -----------  INSERT  ------------- //
  //* > Find the node previous to value with get() (index -1)
  insert(index, value) {
    // guard
    if (index < 0 || index > this.length) return false
    // push
    if (index === this.length) return this.push(value)
    // unshift
    if (index === 0) return this.unshift(value)

    // create new node
    let newNode = new Node(value)
    // get previous node
    let prev = this.get(index - 1)
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
