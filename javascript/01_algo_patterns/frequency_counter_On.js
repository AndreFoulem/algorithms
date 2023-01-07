//* -----------  Frequency Counter: O(n)  ------------- //
//? 2 loops is better than 2 nested loops

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'array not equal';
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //! Construct Counter 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //! Construct Counter 2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //! compare
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      // Look if there is a key squared in counter 2
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      // Look if the property counts is the same in the 2 counters
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
