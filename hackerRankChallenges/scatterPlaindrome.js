function myFunc(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let curStr = str.slice(i, j + 1);

      if (curStr.length === 1) {
        res.push(curStr);

        continue;
      }

      let obj = freqCounter(curStr);

      let count = 0;

      for (let key in obj) {
        let val = obj[key];

        if (val === 1) {
          count++;
        }
      }

      if (count > 1) {
        // console.log("FAIL");
      } else {
        res.push(curStr);
      }
    }
  }

  return res;
}

function freqCounter(str) {
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

let input = ["b", "b", "r", "r", "g"].join('');

console.log(myFunc(input));

/*

To optimize, one can instead count letter frequency in a 26 length array holding how many times a character appears using the index as representation for which alphabet character

*/
