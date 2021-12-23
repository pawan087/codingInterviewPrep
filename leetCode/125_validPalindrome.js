function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";

  while (i < j) {
    let bool = false;
    let left = str[i];
    let right = str[j];

    if (!allowedChars.includes(left.toLowerCase())) {
      bool = true;
      i++;
    }

    if (!allowedChars.includes(right.toLowerCase())) {
      bool = true;
      j--;
    }

    if (bool) {
      continue;
    }

    if (left.toLowerCase() === right.toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

// let input = "A man, a plan, a canal: Panama";
let input = "0P";

console.log(isPalindrome(input));

// console.log(".".toLowerCase());
