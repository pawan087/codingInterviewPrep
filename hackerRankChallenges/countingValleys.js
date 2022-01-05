// let input = "UDDDUDUU";
// let input = "UDUUUDUDDD";
let input = 'DUDDDUUDUU'

function countingValleys(steps, path) {
  let arr = [];
  let res = 0;
  let level = 0;

  for (let char of path) {
    if (char === "U") {
      level++;
    }

    if (char === "D") {
      level--;
    }

    arr.push(level);
  }

  for (let i = 0; i < arr.length; i++) {
    let level = arr[i];

    if (level === 0 && arr[i - 1] === -1) {
      res++;
    }
  }

  return res;
}

console.log(countingValleys(10, input)); // anytime we come up to sea level
