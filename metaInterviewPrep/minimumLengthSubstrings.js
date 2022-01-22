// Minimum Length Substrings
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2237975393164055&ppid=454615229006519&practice_plan=0

let str1 = "dcbefebce";
let str2 = "fd";

let str12 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
let str22 = "cbccfafebccdccebdd";

function minLengthSubstring(s, t) {
  let len = t.length;
  let i = 0;
  let tCharMap = characterMap(t);
  let res = Infinity;

  while (i < s.length) {
    for (let j = len; j < s.length; j++) {
      let curPortion = s.slice(i, j);

      let curCharMap = characterMap(curPortion);

      let bool = compareCharacterMaps(curCharMap, tCharMap);

      if (bool === true) {
        let curPortionLen = curPortion.length;

        res = Math.min(res, curPortionLen);
      }
    }

    i++;
  }

  return res === Infinity ? -1 : res;
}

function characterMap(str) {
  let obj = {};

  for (let char of str) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  return obj;
}

function compareCharacterMaps(obj1, obj2) {
  for (let char in obj2) {
    let num = obj2[char];

    if (obj1[char] === undefined) return false;

    if (obj1[char] !== num) return false;
  }

  return true;
}

console.log(minLengthSustring(str12, str22));
