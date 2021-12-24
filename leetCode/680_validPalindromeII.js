function validPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  function validPalindromeHelper(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
      let left = str[i];
      let right = str[j];

      if (left === right) {
        i++;
        j--;
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  while (i < j) {
    let left = str[i];
    let right = str[j];

    if (left === right) {
      i++;
      j--;

      continue;
    }

    if (left !== right) {
      let possibilityOne = validPalindromeHelper(str.slice(i + 1, j + 1));

      let possibilityTwo = validPalindromeHelper(str.slice(i, j));

      if (possibilityOne || possibilityTwo) {
        return true;
      } else {
        return false;
      }
    }
  }

  return true;
}

let input = "abca";
console.log(validPalindrome("abca"));
