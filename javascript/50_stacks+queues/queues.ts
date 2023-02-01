//? QUEUES
// First In - First Out
// USE:
// -> background tasks
// -> uploading ressources

class QueueNode {
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
}
