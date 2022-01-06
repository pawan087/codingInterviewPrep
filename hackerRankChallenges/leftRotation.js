// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(arr, num) {
  while (num !== 0) {
    arr = [...arr.slice(1), ...arr.slice(0, 1)];
    num--;
  }

  return arr;
}

function rotLeftOptimized(arr, num) {
  const helper = (arr) => {
    let first = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        arr[i] = first;
        break;
      }

      arr[i] = arr[i + 1];
    }

    return arr;
  };

  while (num !== 0) {
    helper(arr);
    num--;
  }

  return arr;
}

let input = [1, 2, 3, 4, 5];
let rotations = 4;

console.log(rotLeftOptimized(input, rotations));
