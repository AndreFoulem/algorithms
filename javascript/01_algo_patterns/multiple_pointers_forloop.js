//? Multiple pointer with for loop with index + 1 pointer

//! Sum zero = Find the first pair of 2 int that sum to zero in a
//!   sorted array. ex: ex: sumZero([-2,-1,0,1,2]) => [ -2,-2]

//? 1 - Sort the array
//? * - add guards (type of number)

//* 2 - find the sum with 2 pointers

function findSumInSortedArray(sortedArray) {
  let rightPointer = sortedArray.length - 1;
  let iterationCounter = 1;

  //? loop the array

  for (let i = 0; i < sortedArray.length; i++) {
    //! trip wire

    if (rightPointer <= i) return 'sum not found';

    if (sortedArray[i] + sortedArray[rightPointer] == 0) {
      return (
        [sortedArray[i], sortedArray[rightPointer]] +
        ` found on iteration number ${iterationCounter}`
      );
    } else {
      rightPointer += -1;
    }
    iterationCounter += 1;
  }
}

console.log(findSumInSortedArray([-3, 1, 0, 1, 2]));
