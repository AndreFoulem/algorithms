//! SORT UNIQUE W/ SWAPPY VALUES + 2 POINTERS
//! Count unique values with pointers

function countUniqueValues(arrayParam) {
  //! Guards
  if (!Array.isArray(arrayParam)) {
    return { result: false, errMsg: 'arg is not an array' };
  }
  if (Array.isArray(arrayParam)) {
    if (!(arrayParam.length > 2)) {
      return { result: false, errMsg: 'array length is not > 2' };
    }
  }

  const mutatedArray = [...arrayParam];

  let i = 0;
  for (j = 1; j < mutatedArray.length; j++) {
    if (mutatedArray[i] !== mutatedArray[j]) {
      i++;
      mutatedArray[i] = mutatedArray[j];
    }
  }

  const resultArray = mutatedArray.splice(0, i + 1);
  const uniqueItems = resultArray.length;

  return `We have ${uniqueItems} items in the array: ${resultArray}`;
}

/**
 
                    i
[1, 3, 3, 4, 8, 10, 12, 10, 10, 12];
                                j

*/
console.log(countUniqueValues([-2, -1, 1, 1, 1, 3]));
