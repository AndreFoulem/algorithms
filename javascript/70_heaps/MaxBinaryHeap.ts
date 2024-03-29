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

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    // switch
    this.values[0] = end

    this.sinkDown()
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      // find 2 childs
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = leftChildIdx + 1
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap == null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
    }
  }
}

let heap = new MaxBinaryHeap([12, 34, 56, 45, 34, 23])
heap.insert(55)
