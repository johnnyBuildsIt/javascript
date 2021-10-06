function bSort(arr) {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if(arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }
  return arr;
}

function bSort1(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bSort([5, 4, 3, 2, 1]));
console.log(bSort([3, 1, 4, 2 ,5]));
console.log(bSort([5, 4])); 

console.log(bSort1([5, 4, 3, 2, 1]));
console.log(bSort1([3, 1, 4, 2 ,5]));
console.log(bSort1([5, 4])); 