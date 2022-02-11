// Determine idx of first unique char

let input = "statistics";

function firstUnique(s) {
  let obj = {};
  let i = 0;
  let minIdx = Infinity;

  for (let char of s) {
    if (obj[char] === undefined) {
      obj[char] = [1, i];
    } else {
      obj[char][0]++;
    }
    i++;
  }

  for (let key in obj) {
    let val = obj[key];

    if (val[0] === 1) {
      minIdx = Math.min(minIdx, val[1]);
    }
  }

  return minIdx === Infinity ? -1 : minIdx + 1;
}

console.log(firstUnique(input));
