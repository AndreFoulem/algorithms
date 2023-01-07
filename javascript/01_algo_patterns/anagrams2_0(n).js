function isAnagram(string1, string2) {
  // guard
  if (string1.length !== string2.length) return false;

  const lookup = {};

  //! Construct string1 object
  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    //a
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    // If lookup['a'] exists yet increment the count by 1
    // If lookup['a'] does not exists yet, set the count to 1
  }
  console.log(lookup);

  //! Compare string2 to string1 object. Replace the value(letter) of string 2
  //!   to keys of string1
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];

    //! IF: First look for false(undefined)
    //! Else: if true decrement towards zero. If the keys matches
    //!   zero will never be attain and loop will conclude.
    if (!lookup[letter]) {
      return false;
    } else {
      console.log(lookup[letter]);
      lookup[letter] = lookup[letter] - 1;
    }
  }
  return true;
}

console.log(isAnagram('acddd', 'dddan'));
