let n = 841;
let x = 1;

for (let i = 0; i < 50; i++) {
  let nx = (x + n / x) / 2;
  x = nx;
}

console.log(x);

//

let a = 315;
let b = 840;

while (b > 0) {
  a %= b;

  let tmp = b;
  b = a;
  a = tmp;
}

console.log(a);

for (let i = 5; i <= 50; i = 5 * i) {
  console.log('x');
}

let z = 0;

for (let i = 0; i < 10000000; i++) {
  z = x + 1;
}
