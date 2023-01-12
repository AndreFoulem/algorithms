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
