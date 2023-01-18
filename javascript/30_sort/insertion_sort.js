//! Insertion sort
//* Builds the sort by gradually creating a large left half
//* which is  always sorted

//? A) Start by picking the 2d element in Array
//? B) iterate to the left AND skip while you can insert it

function insertionSort(arr) {
  //-> pass loop
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i]
    //-> comparing loop
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current // we are putting current at j+1 because
    // j is smaller than current
  }
  return arr
}

console.log(insertionSort([2, 1, 5, 3, 6, 4]))
