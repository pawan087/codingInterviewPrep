function longestEvenWord(str) {
  let count = 0;
  let max = 0;
  let lastIdx = 0;

  for (let i = 0; i < str.length; i++) {
    let curChar = str.substring(i, i + 1);

    if (curChar === " ") {
      if (count % 2 === 0) {
        if (count > max) {
          max = count;
          lastIdx = i;
        }

        count = 0;
      } else {
        count = 0;
      }
    } else {
      count++;
    }
  }

  if (max == 0) {
    return count % 2 === 0 ? str.substring(str.length - count, count) : "00";
  }

  return str.substring(lastIdx - max, max);
}

// console.log(longestEvenWord("Time to write great code"));
console.log(longestEvenWord("It is a pleasant day today"));
