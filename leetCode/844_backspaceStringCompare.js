function backspaceStringCompare(str1, str2) {
  let res1 = "";
  let res2 = "";

  let i = str1.length - 1;
  let j = str2.length - 1;

  let count = 0;

  while (i >= 0) {
    let curChar = str1[i];

    if (curChar !== "#" && count === 0) {
      res1 += curChar;
    }

    if (curChar !== "#" && count > 0) {
      count--;
    }

    if (curChar === "#") {
      count++;
    }

    i--;
  }

  count = 0;

  while (j >= 0) {
    let curChar = str2[j];

    if (curChar !== "#" && count === 0) {
      res2 += curChar;
    }

    if (curChar !== "#" && count > 0) {
      count--;
    }

    if (curChar === "#") {
      count++;
    }

    j--;
  }

  return res1 === res2;
}

let string1 = "abc#d";
let string2 = "abzz##d";

let string3 = "a##c";
let string4 = "#a#c";

console.log(backspaceStringCompare(string3, string4));
