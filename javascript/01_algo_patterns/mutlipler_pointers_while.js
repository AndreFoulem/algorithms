//? This function use a while loop with 2 pointers (left + right)

//! Sum zero = Find the first pair of 2 int that sum to zero in a
//!   sorted array. ex: ex: sumZero([-2,-1,0,1,2]) => [ -2,-2]

function findSumInSortedArray(arrayParam) {
  //! guard:

  //& declare pointers
  let leftPointer = 0;
  let rightPointer = arrayParam.length - 1;

  //& while
  while (rightPointer > leftPointer) {
    let sum = arrayParam[leftPointer] + arrayParam[rightPointer];
    console.log(leftPointer, rightPointer);
    if (sum === 0) {
      return 'match';
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return 'no match';
}
findSumInSortedArray([-2, -0, 1, 3]);
