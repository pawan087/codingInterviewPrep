// function insertionSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] < array[0]) {
//       array.unshift(array.splice(i, 1)[0]);
//     } else {
//       for (let j = 1; j < i; j++) {
//         if (array[i] > array[j - 1] && array[i] < array[j]) {
//           array.splice(j, 0, array.splice(i, 1)[0]);
//         }
//       }
//     }
//   }

//   return array;
// }

function insertionSort(arr) {
  let div = 1;

  while (div < arr.length) {
    // console.log(arr.join(","));

    let curr = arr[div];
    let i = div;

    while (i > 0) {
      if (arr[i - 1] < curr) {
        break;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }

    arr[i] = curr;
    div++;
  }

  return arr;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(insertionSort(numbers));
