const namesArray = ['andre', 'zillam', 'bob', 'steve', 'zak', 'clark', 'denis']

const sortedNames = namesArray.sort()

//? Divide and Conquer

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function binarySearch(arr, target) {
  start = 0
  end = arr.length - 1
  middle = Math.floor((start + end) / 2)
  if (arr[middle] === target) return 'true on first pass'

  while (arr[middle] !== target && arr[middle] <= end) {
    if (target < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }

    middle = Math.floor((start + end) / 2)
    if (arr[middle] === target) return `true on second pass index: ${middle}`
  }
  return false
}

console.log(binarySearch(numbers, 11))
