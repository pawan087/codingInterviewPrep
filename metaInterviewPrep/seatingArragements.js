let input = [5, 10, 6, 8];
let input2 = [1, 2, 5, 3, 7];

function minOverallAwkwardness(arr) {
  arr.sort((a, b) => a - b);
  
  return Math.max(
    arr[arr.length - 1] - arr[arr.length - 2],
    arr[arr.length - 1] - arr[arr.length - 3]
  );
}

console.log(minOverallAwkwardness(input));
