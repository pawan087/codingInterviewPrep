// Beautiful String

function getMinimumOperationCount(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let count = 0;
  let str = s.split("");

  for (let i = 0; i < str.length; i += 2) {
    let cur = str[i];
    let nex = str[i + 1];

    if (nex === undefined) {
      continue;
    }

    let curIdx = alphabet.indexOf(cur);
    let nexIdx = alphabet.indexOf(nex);

    if (nexIdx - curIdx === 1 || nexIdx - curIdx === 0) {
      count++;
    }
  }

  console.log(s);

  return count;
}

let input = "abdde"; // => 2

console.log(getMinimumOperationCount(input2));
