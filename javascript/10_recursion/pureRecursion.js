//! Pure recursion

function collectOddValues(arr) {
  //
  let newArr = []

  //! Trip
  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 2) {
    //! Mutate
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))

  return newArr
}

collectOddValues([1, 2, 3, 4, 5])

//! mutated.concat(fun(arr.sliced))
