//! Selected sort 0(n^)
//! Could be good if you want to reduce the number of swap compare to bubble sort
//! Look for the min value - compare to min temp

//& A) Store the 1st element as the smallest val
//& B) Compare to next item until you find a smallest val
//& C) If a smaller val is found, make it the smallest val and continue loop
//& D) If the min is not the value you begin with swap it

function selectionSort(arr) {
  count = 1
  for (i = 0; i < arr.length; i++) {
    let lowest = i
    //* find the lowest index at a pass
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    //* do the swap
    if (i !== lowest) {
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }

  return arr
}

console.log(selectionSort([5, 3, 7, 5, 3, 5, 8, 9]))
