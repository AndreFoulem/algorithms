/**
 * 
    1) We create an object for string 1 key/values
    2) We loop string2 and mutage str1 obj by decrementing the keys 
      toward zero. If zero, it trips the wire and return false, meaning 
      that str2 has more counts than str1.
 */

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
      //! mutation the str1 obj
      lookup[letter] = lookup[letter] - 1;
    }
  }
  console.log(lookup);
  return true;
}

console.log(isAnagram('acddd', 'dddac'));
