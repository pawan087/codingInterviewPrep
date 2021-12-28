// https://leetcode.com/problems/valid-parentheses/

function validParentheses(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];

    if (curChar === ")" || curChar === "]" || curChar === "}") {
      if (stack.length === 0) {
        return false;
      }

      let lasSeen = stack[stack.length - 1];

      if (curChar === ")" && lasSeen !== "(") {
        return false;
      }

      if (curChar === "]" && lasSeen !== "[") {
        return false;
      }

      if (curChar === "}" && lasSeen !== "{") {
        return false;
      }

      stack.pop();
    } else {
      stack.push(curChar);
    }
  }

  return stack.length === 0;
}

let input1 = "()[]{}";
let input2 = "(]";
let input3 = "{[]}";
let input4 = "()";

console.log(validParentheses(input4));
