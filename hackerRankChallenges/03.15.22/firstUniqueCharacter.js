// First Unique Character

function getUniqueCharacter(s) {
  if (s.length === 0) {
    return -1;
  }
  
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (obj[char] === undefined) {
      obj[char] = [i + 1, 1];
    } else {
      obj[char][1]++;
    }
  }

  for (let key in obj) {
    let val = obj[key];
    let count = val[1];

    if (count === 1) {
      return val[0];
    }
  }

  return -1;
}

let s = "statistics";

console.log(getUniqueCharacter(s));
