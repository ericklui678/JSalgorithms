// Given an array of numbers, return an array of numbers sorted by occurance
// If multiple numbers have same # of occurance, sort number in ascending order
// EX: [1,4,2,3,2,5] => [1,3,4,5,2,2]

function sortedOccurance(arr) {
  var dict = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in dict) {
      dict[arr[i]] += 1;
    } else {
      dict[arr[i]] = 1;
    }
  }
  console.log(dict);
  var keys = Object.keys(dict).sort(function(a, b) {
    return dict[b] - dict[a];
  })
  console.log(keys);

}

let arr = 'zzartt';
sortedOccurance(arr)
