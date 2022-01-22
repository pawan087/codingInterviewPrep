// Largest Triple Products
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=510655302929581&ppid=454615229006519&practice_plan=0

let input = [2, 4, 7, 1, 5, 3];
let input2 = [1, 2, 3, 4, 5];
let output = [-1, -1, 6, 24, 60];

function shiftDown(arr, idx, num) {
  if (idx >= arr.length) return arr;

  for (let i = 0; i <= idx; i++) {
    arr[i] = arr[i + 1];

    if (i === idx) arr[i] = num;
  }
  return arr;
}

function findMaxProduct(arr) {
  let threeLargest = new Array(3);
  let res = [];
  res[0] = -1;
  res[1] = -1;

  for (let i = 0; i < 3; i++) {
    threeLargest[i] = arr[i];
  }

  let product = 1;

  for (let num of threeLargest) {
    product *= num;
  }

  res[2] = product;

  for (let i = 3; i < arr.length; i++) {
    for (let j = 2; j >= 0; j--) {
      let curThreeLargest = threeLargest[j];
      let curNum = arr[i];

      if (curNum >= curThreeLargest) {
        shiftDown(threeLargest, j, curNum);

        product = 1;

        for (let num of threeLargest) {
          product *= num;
        }

        break;
      }
    }

    res.push(product);
  }

  return res;
}

console.log(findMaxProduct(input));
