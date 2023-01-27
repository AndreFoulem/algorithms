function isAnagram(string1, string2) {
  if (!string1.length) return 'string1 empty'
  if (!string2.length) return 'string2 empty'
  if (string1.length !== string2.length) return 'not equal'

  let string1LetterCounter = {}
  let string2LetterCounter = {}

  //! Construct counter object 1
  for (let char of string1) {
    string1LetterCounter[char] = (string1LetterCounter[char] || 0) + 1
  }
  //! Construct counter 2
  for (let char of string2) {
    string2LetterCounter[char] = (string2LetterCounter[char] || 0) + 1
  }

  //! Compare counters values with keys
  for (let key in string1LetterCounter) {
    if (string1LetterCounter[key] !== string2LetterCounter[key]) {
      return false
    }
  }
  return true
}

console.log(isAnagram('erdna', 'andre'))
