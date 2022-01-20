// Simple Max Difference

let input1 = [7, 1, 2, 5]; // => 4, 5 - 1 = 4
let input2 = [7, 5, 3, 1]; // => -1, There's never a difference greater than zero
let input3 = [7, 9, 5, 6, 3, 2];

function maxDifference(px) {
  let maxDif = -Infinity;

  for (let i = 0; i < px.length; i++) {
    let curNum = px[i];

    for (let j = 0; j < i; j++) {
      let comparator = px[j];

      if (comparator > curNum) {
        continue;
      }

      let curDif = curNum - comparator;

      maxDif = Math.max(curDif, maxDif);
    }
  }

  return maxDif === -Infinity ? -1 : maxDif;
}

console.log(maxDifference(input1));
