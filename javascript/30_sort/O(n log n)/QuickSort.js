//! Quick Sort -> Split the sea -> array of 0 or 1 entry
//& Find a pivot - rearange in place
//* -> finding pivot is important: ideal mid range

function pivotHelper(arr, start = 0, end = arr.legnth + 1) {
  function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  let pivotValue = arr[start]
  let cumulativeIndex = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotValue > arr[i]) {
      cumulativeIndex++
      swap(arr, cumulativeIndex, i)
    }
  }
  swap(arr, start, cumulativeIndex)
  return cumulativeIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right)

    //left
    quickSort(arr, left, pivotIndex - 1)
    //right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
