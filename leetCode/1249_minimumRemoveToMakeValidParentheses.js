// function minRemoveToMakeValid(str) {
//   if (!str.length) return "";

//   let stack = [];
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (alphabet.includes(char)) continue;

//     if (char === "(") stack.push(i);

//     if (stack.length && char === ")") {
//       stack.pop();
//       continue;
//     }

//     if (!stack.length && char === ")") {
//       return minRemoveToMakeValid(str.slice(0, i) + str.slice(i + 1));
//     }
//   }

//   let res = [];

//   for (let i = 0; i < str.length; i++) {
//     if (stack.includes(i)) {
//       continue;
//     }

//     res.push(str[i]);
//   }

//   return res.join("");
// }

function minRemoveToMakeValid(str) {
  let res = str.split("");
  let stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      // Left parentheses means we push onto stack
      // potential idx to remove since we don't know if right parentheses incoming or not
      stack.push(i);
    } else if (res[i] === ")" && !stack.length) {
      // right parentheses encountered before seeing a left
      // this case will never be valid so we replace char with empty string
      res[i] = "";
    } else if (res[i] === ")" && stack.length) {
      // right parentheses encountered after seeing a left, so remove from stack the idx of left
      // notice the stack only holds indexes of potential invalid LEFT parentheses, never the idx of any right
      // this is a valid case so we remove the idx since we won't want to remove this char
      stack.pop();
    }
  }

  while (stack.length) {
    let i = stack.pop();
    res[i] = "";
  }

  return res.join("");
}

let input1 = "lee(t(c)o)de)";
let input2 = "a)b(c)d";
let input3 = "))((";

console.log(minRemoveToMakeValid(input1));
