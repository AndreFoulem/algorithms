//* -> Breath First

let graphAL: {
  a: string[]
  b: string[]
  c: string[]
  d: string[]
  e: string[]
  f: string[]
}

const breathFirstPrint = (graph, source) => {
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.shift()
    console.log(current)
    for (let neighbour of graphAL[current]) {
      queue.push(neighbour)
    }
  }
}

graphAL = {
  a: ['a', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: ['g'],
  f: [],
}
