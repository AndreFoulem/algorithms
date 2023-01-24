//! Radix sort
/**
 * 
  PSEUDO:
  A) Define a fn that accepts list of numbers
  B) Find (Z) how many digits largest num have for radix sort loop 
     iteration count
  C) Loop from K = 0 to Z
  D) For each iteration:
      i) create buckets for 0 to 9
      ii) place each num corresponding to bucket based on 
          its Kth digit
  E) Re-cocatenate our array with values from bucket starting from 
    0 to 9
  F) RETURN LIST
 **/

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

//! 1: Loop to find largest digit for the radix loop iteration count
function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}
console.log(radixSort([2, 333, 44, 6666, 222, 345, 2, 345, 2222]))
