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
  insert(index, value): boolean {
    // guard
    if (index < 0 || index > this.length) return false
    // push
    if (index === this.length) {
      return !!this.push(value)
    }

    // unshift
    if (index === 0) return this.unshift(value)

    // create new node
    let newNode = new myNode(value)
    // get previous node
    let prev = this.get(index - 1)

    //* switch arroo
    let temp = prev.next
    // connect old node to inserted node
    prev.next = newNode
    // connect next to newNode
    newNode.next = temp
    //* end switch arroo

    this.length++
    return true
  }

  //* -----------  REMOVE  ------------- //
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let previousNode = this.get(index - 1)
    let removed = previousNode.Next
    previousNode.next = removed.next

    this.legnth--
    return removed
  }

  //* -----------  PRINT  ------------- //
  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  //* -----------  REVERSE (IN PLACE) ------------- //
  reverse() {}
}

let list = new SinglyLinkedList()
list.push('first')
list.push('second')
list.push('third')
// list.insert(1, 'insert')

console.log(list.print())
