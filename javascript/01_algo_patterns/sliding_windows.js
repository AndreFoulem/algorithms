//! Sliding Window: - Involves creating a 'window' which can either be an
//!     array or number from 1 pos to another.
//!   - Depending on condition, the window increases or closes(open new win)

//? 1) Find longest string of unique characters "hellothere"
//? 2) Write a fn which accepts arr of ints + 1 num called N.
//?       Fn should calculate the max sum of N consecutive ele in arr.

//? Ex: maxSubarraySum([1,2,5,2,8,15],2)  => 10

//& Naive solution

function maxSubarraySum(arr, num) {
  const args = guards(arr, num);
  if (args.isInvalid) return args.error;

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 15], 3));

function guards(arr, num) {
  if (!Array.isArray(arr)) {
    return { isInvalid: true, error: 'arr is not an array' };
  }
  if (!(arr.length > 2)) {
    return { isInvalid: true, error: 'arr is not an array' };
  }
  if (typeof num !== 'number') {
    return { isInvalid: true, error: 'sum param is not a number' };
  }
  return false;
}
