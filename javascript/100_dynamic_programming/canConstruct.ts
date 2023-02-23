// -> Can construct

//*  Write canConstruct(target: String, [wordBank]: String) -> Bool
//* Returns true if target can be constructed by concatenating of arr elements. ** May reuse elements

//& ex: canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true

//& ex: canConstruct('', [ cat, dog, mouse ] ) -> true. Takes place in all place... base case?

const canConstruct = (target, wordBank) => {
  if (target === '') return true
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
