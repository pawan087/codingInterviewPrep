// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

let input = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(arr) {
  let obj = {};
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
      continue;
    }

    if (obj[arr[i]] !== undefined) {
      obj[arr[i]] += 1;
    }
  }

  for (let key in obj) {
    let val = obj[key];

    res += Math.floor(val / 2);
  }

  return res;
}

console.log(sockMerchant(input));
