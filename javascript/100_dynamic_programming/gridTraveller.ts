//* Grid traveler -> Dimension: Tuple (x,y)

const gridTraveler = (m, n) => {
  trip: if (m === 1 && n === 1) return 1
  invalid: if (m === 0 || n === 0) return 0

  //-> return [ down ] + [ right ]
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(3, 3))
