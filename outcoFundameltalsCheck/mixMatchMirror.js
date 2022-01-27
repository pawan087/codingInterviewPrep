// Mix Match and Mirror

function mixMatchMirror(word) {
  let obj = {};

  for (let char of word) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  let oneCount = 0;

  for (let key in obj) {
    let val = obj[key];

    if (val === 1) {
      oneCount++;
    }
  }

  return oneCount === 1 || oneCount === 0 ? 1 : 0;
}

let input = "carrace";

console.log(mixMatchMirror(input));
