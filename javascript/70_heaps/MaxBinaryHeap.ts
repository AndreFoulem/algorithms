class MaxBinaryHeap {
  values: number[]
  constructor(values: number[]) {
    this.values = values
  }

  insert(element: number) {
    this.values.push(element)
    this.bubbleup()
  }

  bubbleup() {
    //*1 find element index
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2)
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
