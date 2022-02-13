// Combinations

function combinations(elements) {
  if (elements.length === 0) {
    // debugger;
    return [[]];
  }

  //   debugger;
  let first = elements[0];
  let rest = elements.slice(1);

  let combinationsWithoutFirst = combinations(rest);

  let combinationsWithFirst = [];

  for (let combinationWithoutFirst of combinationsWithoutFirst) {
    // debugger;
    let combinationWithFirst = [...combinationWithoutFirst, first];

    combinationsWithFirst.push(combinationWithFirst);
  }

  //   debugger;
  return [...combinationsWithoutFirst, ...combinationsWithFirst];
}

let input = ["a", "b", "c"];

// debugger;
console.log(combinations(input));
