// Break a Palindrome

function breakPalindrome(palindromeStr) {
  if (palindromeStr.length === 1 && palindromeStr[0] === "a") {
    return "IMPOSSIBLE";
  }

  let arr = [];
  let bool = false;

  for (let i = 0; i < palindromeStr.length; i++) {
    let char = palindromeStr[i];

    if (char !== "a" && bool === false) {
      bool = true;
      arr.push("a");
      continue;
    }

    if (char !== "a" && bool === true) {
      arr.push(char);
      continue;
    }

    if (bool === false && i === palindromeStr.length - 1 && char === "a") {
      return "IMPOSSIBLE";
    }

    if (char === "a") {
      arr.push(char);
    }
  }

  if (arr.length === 1) return "IMPOSSIBLE";

  let res = arr.join("");

  let palindrome = isPalindrome(res);

  if (palindrome) {
    return "IMPOSSIBLE";
  } else {
    return res;
  }
}

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    let left = str[i];
    let right = str[j];

    if (left !== right) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

let input1 = "aaabbaaa"; // => 'aaaabaaa'
let input2 = "bab"; // => 'aab'
let input3 = "aaa"; // => 'Impossible'
let input4 = "acca"; // => 'aaca'

console.log(breakPalindrome(input4));
