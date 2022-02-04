// Encrypted Words
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=223547538732703&ppid=454615229006519&practice_plan=0

function findEncryptedWord(str) {
  if (str.length === 0) {
    return "";
  }

  let midIdx = Math.floor((str.length - 1) / 2);
  let mid = str[midIdx];

  let left = str.slice(0, midIdx);
  let right = str.slice(midIdx + 1);

  left = findEncryptedWord(left);
  right = findEncryptedWord(right);

  return mid + left + right;
}

let S1 = "abc";
let R1 = "bac";

let S2 = "abcd";
let R2 = "bacd";

let S3 = "abcxcba";
let R3 = "xbacbca";

let S4 = "facebook";
let R4 = "eafcobok";

console.log(findEncryptedWord(S3));
