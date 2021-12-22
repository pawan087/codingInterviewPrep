function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(selectionSort(numbers));
