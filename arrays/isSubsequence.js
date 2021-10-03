/*
  isSubsequence takes two strings and checks weather the 
  characters in the first string form a subsequence of the
  characters in the second string. In other words, the function
  should check whether the characters in the first string appear
  somewhere in the second string, without their order changing.
*/

function isSubsequence(s1, s2) {
  // create a pointer to the start of the first string
  let s1Pointer = 0;
  // loop through the second string
  for (let curChar of s2) {
    // if the values at the pointers match
    if (s1[s1Pointer] === curChar){
      // if the first pointer is not at the end of the first string, increment
      if(s1Pointer < s1.length - 1) {
        s1Pointer++;
      } else if(s1Pointer === s1.length - 1){
        // if the first pointer is at the end of the first string, return true
        return true;
      }
    }
  }
  // return false
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)