let available = {
  eggs: 9000,
  cream: 8100,
  milk: 6000,
  flour: 6800,
  crumbles: 9300,
  apples: 6500,
  butter: 9100,
  cocoa: 600,
  sugar: 3200,
  oil: 5500,
  nuts: 9100,
  chocolate: 1300,
  pears: 100,
};

let recipe = { cream: 15, chocolate: 85, crumbles: 100 };

function cakes(recipe, available) {
  let howMany = {};

  for (let key in recipe) {
    if (!available[key]) {
      return 0;
    }
  }

  for (let key in available) {
    let num = Math.floor(available[key] / recipe[key]);

    // console.log(num);

    if (num === 0) {
      return 0;
    }

    if (!num) continue;

    howMany[key] = num;
  }

  let smallest = Infinity;
  let theKey;

  for (let key in howMany) {
    let val = howMany[key];

    if (val < smallest) {
      smallest = val;
      theKey = key;
    }
  }

  return howMany[theKey];
}

console.log(cakes(recipe, available));
