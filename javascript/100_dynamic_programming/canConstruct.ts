// -> Can construct

//*  Write canConstruct(target: String, [wordBank]: String) -> Bool
//* Returns true if target can be constructed by concatenating of arr elements. ** May reuse elements

//& ex: canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true

//& ex: canConstruct('', [ cat, dog, mouse ] ) -> true. Takes place in all place... base case?

const canConstruct = (target, wordBank) => {
  if (target === '') return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)

      // early return for exact match
      if (canConstruct(suffix, wordBank) === true) {
        return true
      }
    }
  }
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
