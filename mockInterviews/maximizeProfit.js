let input = [7, 1, 3, 2, 5, 6, 4];

function maximizeProfit(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let maxDif = 0;

  while (leftPointer !== rightPointer) {
    let difference = arr[rightPointer] - arr[leftPointer];

    maxDif = Math.max(maxDif, difference);

    if (arr[rightPointer] > arr[leftPointer]) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return maxDif;
}

console.log(maximizeProfit(input));
