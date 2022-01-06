// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

let input = "abcac";
let n = 10;

function repeatedString(str, n) {
  if (str.length === 1 && str[0] === "a") return n;

  let len = 0;
  let res = 0;
  let i = 0;

  while (len !== n) {
    len++;

    if (str[i] === "a") res++;

    i++;

    if (i >= str.length) i = 0;
  }

  return res;
}

let input2 = "aba";
let n2 = 10;

function repeatedStringOptimal(s, n) {
  let count = 0;

  for (let char of s) {
    if (char === "a") count++;
  }

  let remainder = n % s.length; // When dividing 'n' by the length of the string we can determine the remainder (if any) using modulo

  let howManyRepeats = (n - remainder) / s.length; // Knowing the remainder we can 'even' the division by removing the remainder amount from n and then dividing by the str length to get an integer (without a remainder)
  let howManyReatingAs = howManyRepeats * count; // Since we know how many times we str repeats and we know how many 'a's are included in the str we can determine how many total times the 'a' repeats

  if (remainder !== 0) {
    // We have to also account for the remainder amount which will determine how much (if any) of the str repeats at the tail end
    let remainingStr = s.slice(0, remainder); // Knowing the remeainer amount we can determine what the str will be up to that point (cutoff)

    for (let char of remainingStr) {
      if (char === "a") howManyReatingAs += 1; // We add how many times 'a' appears once more in the remainingStr at the tail
    }
  }

  return howManyReatingAs;
}

console.log(repeatedStringOptimal(input2, n2));
