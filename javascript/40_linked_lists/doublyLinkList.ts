//? Doubly linked list

type pointer = object | null

class ListNode {
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

  push(value: string) {
    let newNode: ListNode
    newNode = new ListNode(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // @ts-ignore
      //- << Link tail to newNode
      this.tail.next = newNode
      //- >> Link newNode to Tail
      newNode.prev = this.tail

      this.tail = newNode
    }
    this.length++

    return this
  }

  pop() {
    if (this.length === 0) return undefined

    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    // @ts-ignore
    this.tail = poppedNode.prev
    // @ts-ignore
    this.tail.next = null
    // @ts-ignore
    poppedNode.prev = null

    this.length--
    return this
  }

  shift() {
    if (this.length === 0) return undefined

    let oldNode = this.head

    if (this.length === 1) {
      this.head = null
      // @ts-ignore
      this.head.prev = null
      // @ts-ignore
      this.head.next = null
    } else {
      // @ts-ignore
      this.head = oldNode.next
      // @ts-ignore
      this.head.prev = null
      // @ts-ignore
      oldNode.next = null
    }
    this.length--
    return oldNode
  }

  unshift(value: string) {
    let newNode = new ListNode(value)

    //1
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      // @ts-ignore

      this.head.prev = newNode

      this.head = newNode
    }
    this.length++
    return this
  }

  get(nodeAtIndex) {
    guard: if (nodeAtIndex < 0 || nodeAtIndex >= this.length) return null

    if (nodeAtIndex <= this.length / 2) {
      let index = 0
      let tempHead = this.head
      while (index != nodeAtIndex) {
        // @ts-ignore
        tempHead = tempHead.next
        index++
      }
      return tempHead
    } else {
      let index = this.length - 1
      let tempTail = this.tail
      while (index != nodeAtIndex) {
        // @ts-ignore
        tempTail = tempTail.prev
        index--
      }
      return tempTail
    }
  }

  set(index: number, value: string) {
    let getNode = this.get(index)
    if (getNode === null) return null

    // @ts-ignore
    getNode.value = value

    return true
  }

  insert(index: number, value: string) {
    // unshift
    if (index === 0) return this.unshift(value)
    // push
    if (index === this.length) return this.push(value)

    // insert
    let afterNode = this.get(index - 1)
    if (afterNode === null) return null

    // @ts-ignore
    let previousNode = afterNode.prev

    let insertNode = new ListNode(value)

    // @ts-ignore
    insertNode.prev = previousNode
    insertNode.next = afterNode
    //prevNode
    // @ts-ignore
    previousNode.next = insertNode

    //nextNode
    // @ts-ignore
    afterNode.prev = insertNode
  }

  remove(index: number) {
    // shift
    if (index === 0) return this.shift()
    // pop
    if (index === this.length) return this.pop()

    //get
    let removeNode = this.get(index)
    if (removeNode === null) return null

    // previousNode
    // @ts-ignore
    let previousNode = removeNode.prev
    // @ts-ignore
    let afterNode = removeNode.next
    // reconnect pointers
    previousNode.next = afterNode
    afterNode.prev = previousNode
    //clean remove node pointers
    // @ts-ignore
    removeNode.prev = null
    // @ts-ignore
    removeNode.next = null

    this.length--
    return removeNode
  }
}

let myList = new DoublyLinkedlIst()
myList.push('00')
console.log(myList)
myList.push('10')
console.log(myList)
myList.push('20')

console.log(myList)
console.log(myList.get(0))
console.log(myList.set(2, 'yo'))
console.log(myList)
