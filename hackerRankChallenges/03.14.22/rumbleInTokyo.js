// Rumble in Tokyo

function getMinimumBlows(height) {
  let left = [];
  let right = [];
  let i = 0;
  let j = i + 1;

  while (i < height.length) {
    let start = i;

    while (true) {
      if (height[i] === height[j] - 1) {
        i++;
        j++;
      } else {
        break;
      }
    }

    left.push(height.slice(start, j));

    i += 1;
    j = i + 1;
  }

  i = height.length - 1;
  j = i - 1;

  while (i >= 0) {
    let end = i;

    while (true) {
      if (height[j] === height[i] + 1) {
        i--;
        j--;
      } else {
        break;
      }
    }

    right.push(height.slice(j + 1, end + 1));

    i--;
    j = i - 1;
  }

  return right;
}

let height = [1, 2, 3, 4, 3, 2, 3, 2, 1];

console.log(getMinimumBlows(height));
