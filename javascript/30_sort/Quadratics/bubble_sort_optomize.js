//! Bubble sort is good for nearly sorted data

function swap(arr, idx1, idx2) {
  var temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function bubbleSort(arr) {
  var noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //! if 37 > 45
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}

console.log(bubbleSort([37, 45, 29, 8]))
