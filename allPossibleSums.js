// Given an unsorted arr and value k, find all combinations where two numbers sum // up to k. Return the number of combinations

function possibleSums(arr, k) {
  arr = arr.filter(function (num) {
    return num <= k;
  })
  console.log(arr);

  return arr;
}

let arr = [1,2,3,4,5,6,7,8,9];
let k = 7;
console.log(possibleSums(arr, k));

// returns [[1,3,], [2,2,3]]
