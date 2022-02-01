function solution(numbers, pivot) {
  if (pivot > 0) {
    return positivePivot(numbers);
  }

  if (pivot < 0) {
    return negativePivot(numbers);
  }
}

function positivePivot(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numbers[i] = 1;
      continue;
    }

    if (numbers[i] < 0) {
      numbers[i] = -1;
      continue;
    }

    if (numbers[i] === 0) {
      continue;
    }
  }

  return numbers;
}

function negativePivot(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      numbers[i] = 1;
      continue;
    }

    if (numbers[i] > 0) {
      numbers[i] = -1;
      continue;
    }

    if (numbers[i] === 0) {
      continue;
    }
  }

  return numbers;
}

console.log(solution([9, 0, -5], -1));
