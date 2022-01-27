// Non Consecutive Ones

function nonConsecutiveOnes(num) {
  let n = 2 ** num - 1;
  let res = [];
  let longest = binaryConverter(n).length;

  for (let i = 0; i <= n; i++) {
    let cur = binaryConverter(i);

    let padded = pad(cur, longest);

    let hasConsecutiveOnes = checkConsecutiveOnes(padded);

    if (hasConsecutiveOnes === false) {
      res.push(padded);
    }
  }

  return res;
}

function checkConsecutiveOnes(str) {
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    let nex = str[i + 1];

    if (cur === "1" && nex === "1") {
      return true;
    }
  }

  return false;
}

function binaryConverter(num) {
  return (num >>> 0).toString(2);
}

function pad(num, len) {
  let padding = "";

  for (let i = 1; i <= len - num.length; i++) {
    padding += "0";
  }

  return padding + num;
}

let input = 0;

console.log(nonConsecutiveOnes(input));
