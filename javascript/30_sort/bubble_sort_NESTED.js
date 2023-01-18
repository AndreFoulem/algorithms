//!-> bubble sort
//! Calculation swaps: N*(n-1)/2
//! ex: 7 numbers = (6*7)/2 = 28 swaps

//! A) Loop with var i from the end of array towards start
//! B) Inner loop var j from start until i - 1
//! C) if(arr[j]) > arr[j+1] swap

function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //! if 37 > 45

        var temp = arr[j]

        arr[j] = arr[j + 1]

        arr[j + 1] = temp
      }
    }
  }
  return arr
}

bubbleSort[(37, 45, 29, 8)]

// bubble sort 7 elements
console.log(6 + 5 + 4 + 3 + 2 + 1)
