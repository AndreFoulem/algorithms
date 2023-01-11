//! Sliding Window: - Involves creating a 'window' which can either be an
//!     array or number from 1 pos to another.
//!   - Depending on condition, the window increases or closes(open new win)

//? 1) Find longest string of unique characters "hellothere"
//? 2) Write a fn which accepts arr of ints + 1 num called N.
//?       Fn should calculate the max sum of N consecutive ele in arr.

//? Ex: maxSubarraySum([1,2,5,2,8,15],2)  => 10

//! O(N)
function maxSubarraySum1(arr, num) {
  const passedArgs = guards(arr, num);
  if (passedArgs.isInvalid) return passedArgs.error;

  let maxSum = 0;
  let tempSum = 0;
  for (i = 0; i < num; i++) {
    //i/0   i<3  i++
    //! sum = 1
    //i/1   i<3  i++
    //! sum = 1+2
    //i/2   i<3  i++
    //! sum = 3+5 = 7

    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //! 8 =8  - arr[0] + arr[3]
    //! 8 =8  - arr[1] + arr[4] = 9

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 15], 3));

//! Naive solution - Quadratic
function maxSubarraySum(arr, num) {
  const args = guards(arr, num);
  if (args.isInvalid) return args.error;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      console.log(temp);
    }
    if (temp > max) {
      console.log(temp);
      max = temp;
    }
  }
  return max;
}

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
