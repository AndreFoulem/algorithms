//! Base case : trip wire
//! Reducing input

function countDown(num) {
  //? trip wire
  if (num <= 0) {
    console.log('allDone')
    return
  }

  console.log(num)
  //? Reduce input
  num--
  //? Reducer
  countDown(num)
}

countDown(5)

function count(num) {
  if (num <= 0) return //trip wire

  num--
  count(num) //reducer
}
count(3)

function sumRange(num) {
  if (num === 0) return 0 //trip
  return num + sumRange(num - 1)
  /**
   *  return 5 + sumRange(4)
   *             4 + sumRange(3)
   *                  3 + sumRange(2)
   *                      2 + sumRange(1)
   *                          1  + sumRange(0) */
}

console.log(sumRange(5))
