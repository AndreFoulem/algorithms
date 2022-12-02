//* -----------  RECURSIVE HELPER FUNCTION  ------------- //

//& outer none recursive function
function collectOddValues(arr) {
  let result = [];

  //& inner recursive function
  function helper(helperInput) {
    //!begin recursive logic
    if (helperInput.length === 0) {
      return; // StopGap
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
    //!end recursive logic
  }

  helper(arr);

  return result;
}

// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//* -----------  PURE RECURSION  ------------- //
function pureCollectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
  return newArr;
}

pureCollectOddValues([1, 2, 3, 4, 5]);
