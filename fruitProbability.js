function fruitProbability(fruits) {
  var sum = 0;
  var total = 0;


  var fruitsSorted = Object.keys(fruits).sort(function (a, b) {
    return fruits[a] - fruits[b];
  });

  for (fruit of fruitsSorted) {
    total += fruits[fruit]
  }

  var random = Math.trunc(Math.random() * total + 1);
  for (fruit of fruitsSorted) {
    if (random <= fruits[fruit] + sum) {
      return fruit;
    }
    sum += fruits[fruit];
  }
}

var fruits = {
  'apple': 2,
  'orange': 5,
  'mango': 1,
}
console.log(fruitProbability(fruits));
