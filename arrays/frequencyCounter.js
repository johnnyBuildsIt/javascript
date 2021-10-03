function sameFrequency(in1, in2) {
  n1 = in1.toString();
  n2 = in2.toString();
  const frequencies = {};
  for (let curDigit of n1){
    if(!frequencies[curDigit]) {
      frequencies[curDigit] = 1;
    } else {
      frequencies[curDigit] += 1;
    }
  }
  
  for (let curDigit of n2) {
    if(!frequencies[curDigit]){
      return false;
    }
    
    if(frequencies[curDigit] === 1) {
      delete frequencies[curDigit];
    } else {
      frequencies[curDigit] -= 1;
    }
  }
  
  if(Object.keys(frequencies).length === 0) {
    return true;
  } else {
    return false;
  }
}

function sameFrequencyImproved (num1, num2) {
  // convert the inputs to strings so they are iterable
  const n1 = num1.toString();
  const n2 = num2.toString();

  // if the the lengths are different, return false
  if (n1.length !== n2.length) {
    return false;
  }

  // create an object to store the frequencies of the first input
  const frequencies = {};
  
  // loop through the first input and add the frequencies to the object
  for (let curChar of n1) {
    if (!frequencies[curChar]) {
      frequencies[curChar] = 1;
    } else {
      frequencies[curChar] += 1;
    }
  }

  // loop through the second input
  for (let curChar of n2) {
    if (frequencies[curChar]) {
      // if the cur char is in the object, decrement the count
      frequencies[curChar] -= 1;
      // if the count is zero, remove it from the object
      if (frequencies[curChar] == 0) {
        delete frequencies[curChar];
      }
    } else {
      // if the cur char is not in the object, return false
      return false;
    }
  }
  // return true
  return true;
}

console.log(sameFrequencyImproved(182, 281)); // true
console.log(sameFrequencyImproved(34, 14)); // false
console.log(sameFrequencyImproved(3589578, 5879385)); // true
console.log(sameFrequencyImproved(22, 222)); // false