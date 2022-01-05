let input = [0, 0, 1, 0, 0, 1, 0]; // => 4

let jumpingOnClouds = (arr) => {
  let i = 0;
  let res = 0;

  while (i < arr.length) {
    if (arr[i + 2] !== 1) {
      i += 2;
    } else {
      i++;
    }

    if (i !== arr.length - 1) res++;
  }

  return res;
};

console.log(jumpingOnClouds(input));
