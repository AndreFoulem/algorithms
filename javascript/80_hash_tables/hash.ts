// @ts-nocheck
console.log('A'.charCodeAt(0))
//* Seperate Chaining -> Nested object
//* Linear Chaining -> flat object (skip occupied slot)

class HashTable {

  constructor(size: number = 17) {
    this.keyMap = new Array(size)
  }

  _hash(key: string) {
    let total = 0
    let SHOTGUN_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100)) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total + SHOTGUN_PRIME + value) % arrayLen
    }
    return total
  }

  set(key: string, value: string) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
    return index
  }

  get(key: string) {
    // 1 accetps key
    // 2 hashes the key
    // 3 retrieve key value pair
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index]
        }
      }

    }
    return null
  }

}

let hashTable = new HashTable()
hashTable.set("maroon", "#800000")
hashTable.set("black", "#000000")
hashTable.set("white", "#ffffff")


