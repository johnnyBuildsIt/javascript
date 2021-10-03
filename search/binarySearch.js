/*
  Create a function binarySearch which accepts a sorted array and a value
  Creat a left pointer at the start of the array and a right pointer at the end of the array
  While the left pointer comes before the right pointer:
    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down
  If the value is never found, return -1
*/

function binarySearch(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while(leftPointer <= rightPointer){
    let middlePointer = Math.floor((rightPointer + leftPointer) / 2);
    if(arr[middlePointer] === target) {
      return middlePointer;
    } else if(arr[middlePointer] < target) {
      leftPointer = middlePointer + 1;
    } else if(arr[middlePointer] > target) {
      rightPointer = middlePointer - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 98, 99], 99)); // 18
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 98, 99], 100)); // -1 