// Number of Characters Escaped

// function numberOfCharactersEscaped(expression) {
//   let indexes = [];

//   for (let i = 0; i < expression.length; i++) {
//     let cur = expression[i];

//     if (cur === "#") {
//       indexes.push(i);
//     }
//   }

//   let pairs = [];

//   for (let i = 0; i < indexes.length; i += 2) {
//     let cur = indexes[i];
//     let nex = indexes[i + 1];

//     if (nex === undefined) {
//       break;
//     }

//     pairs.push([cur, nex]);
//   }

//   let lowers = "abcdefghijklmnopqrstuvwxyz";
//   let obj = {};

//   for (let char of lowers) {
//     obj[char] = true;
//   }

//   let res = 0;

//   for (let pair of pairs) {
//     let start = pair[0];
//     let end = pair[1];

//     let cur = expression.slice(start + 1, end);

//     for (let i = 0; i < cur.length; i++) {
//       if (cur[i] === "!") {
//         if (obj[cur[i + 1]] === true) {
//           res++;
//         }
//       }
//     }
//   }

//   return res;
// }

function numberOfCharactersEscaped(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      let j = i + 1;
      let tmpCount = 0;

      while (str[j] !== "#" && j < str.length) {
        if (str[j] === "!") {
          if (str.charCodeAt(j + 1) >= 97 && str.charCodeAt(j + 1) <= 122) {
            tmpCount++;
          }
        }

        j++;
      }

      let isValid = str[j] === "#";

      if (isValid) {
        count += tmpCount;
      }

      if (Math.abs(i - j) !== 1) {
        i = j - 1;
      } else {
        i = j;
      }
    }
  }

  return count;
}

let input1 = "#ab!c#de!f"; // 1
let input2 = "##!r#po#"; // 0
let input3 = "#a!b#c"; // 1

// str.charCodeAt(idx) => lower case are from 97 - 122 inclusive
// upper case is 65 - 90 inclusive

console.log(numberOfCharactersEscaped(input3));
