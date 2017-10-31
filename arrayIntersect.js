function intersect(arr1, arr2) {
  var dict1 = {};
  var dict2 = {};
  var unique = [];
  for (var i = 0; i < arr1.length; i++) {
    if (!(arr1[i] in dict1)) {
      dict1[arr1[i]] = arr1[i];
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (!(arr2[i] in dict2)) {
      dict2[arr2[i]] = arr2[i];
    }
  }
  for (key in dict1) {
    if (key in dict2) {
      unique.push(dict1[key]);
    }
  }
  return unique;
}

arr1 = [1];
arr2 = [1];
console.log(intersect(arr1, arr2));
