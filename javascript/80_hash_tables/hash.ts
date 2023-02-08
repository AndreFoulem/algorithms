console.log('A'.charCodeAt(0))

function hash(key: string, arrayLen: number): number {
  let total = 0
  let WEIRD_PRIME = 1

  for (let i = 0; i < Math.min(key.length, 100)) {
   let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total + WEIRD_PRIME + value) % arrayLen
  }

  return total
}
