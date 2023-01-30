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
    if (length === 0) return undefined
  }
}

let myList = new DoublyLinkedlIst()
myList.push('00')
console.log(myList)
myList.push('10')
console.log(myList)
myList.push('20')
console.log(myList)
myList.pop()
console.log(myList)
