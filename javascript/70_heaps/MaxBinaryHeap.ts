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
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (element <= parent) break
      // swap values
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  extractMax() {}
}

let heap = new MaxBinaryHeap([12, 34, 56, 45, 34, 23])
heap.insert(55)
