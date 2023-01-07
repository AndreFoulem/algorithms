//* -----------  Frequency Counter: Naive  ------------- //

//! Quadratic time - Nested Loop
//? 2 loops is better than 2 nested loops

function same(arr1, arr2) {
  if (!arr1.length || !arr2.length) {
    return 'no empty array';
  }

  if (arr1.length !== arr2.length) {
    return 'array not equal';
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // arr2.indexOf(4) = 1

    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
    // arr2.splice(1,1)
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
