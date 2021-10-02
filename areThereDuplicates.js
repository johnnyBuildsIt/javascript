function areThereDuplicates() {
  // create a set to keep track of unique values
  const values = new Set();
  // loop through arg values
  for (let arg of arguments) {
    if (!values.has(arg)) {
      // if not in set, add
      values.add(arg);
    } else {
      // if in set, return false
      return true;
    }
  }
  // return true 
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true