function firstRecurringCharacter(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log("\nReturn Value: ");
      return input[i];
    } else {
      map[input[i]] = i;
    }

    console.log(map);
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
