//! Merge + Sort
//? A) In is usefult to first implement a fn for merging two
//?   arrays. Should then create a new array of sorted values
//!  1) Halves the array  2) Merge + sort back the array
//* Decompositions O(log n) + merge O(n) = O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return mergeHelper(left, right)
}

console.log(mergeSort([10, 25, 34, 23, 12, 44]))

function mergeHelper(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}
