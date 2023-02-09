console.log('A'.charCodeAt(0))
//* Seperate Chaining -> Nested object
//* Linear Chaining -> flat object (skip occupied slot)

function hash(key: string, arrayLen: number): number {
  let total = 0
  let SHOTGUN_PRIME = 31

  for (let i = 0; i < Math.min(key.length, 100)) {
   let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total + SHOTGUN_PRIME + value) % arrayLen
  }

  return total
}
