function averagePair(arr, target) {
  // if arr empty, return false
  if (arr.length === 0) {
    return false;
  }
  // create pointer for start and end of array
  let lowPointer = 0;
  let highPointer = arr.length - 1;
  // while the pointers don't overlap
  while (lowPointer < highPointer) {
    // create a var for curr average
    // take the average of the two pointer values
    let curAvg = (arr[lowPointer] + arr[highPointer]) / 2;
    // if the average equals the target, return true
    if (curAvg === target) {
      return true;
    } else if (curAvg < target) {
      // if the average is lower than the target, increment low pointer
      lowPointer++;
    } else {
      // if the average is higher than the target, decrement the high pointer
      highPointer--;
    }

  }
  // return false if the loop ends
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false