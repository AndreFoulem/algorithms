//? QUEUES
// First In - First Out
// USE:
// -> background tasks
// -> uploading ressources

class QueueElement {
  value: string
  next = null

  constructor(value: string) {
    this.value = value
  }
}

class Queue {
  first: object | null
  last: object | null
  size: number

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    let newNode = new QueueElement(value)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
    }
  }

  dequeue() {}
}
