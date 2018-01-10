// Given two strings, write a method to decide if one is a permutation
// of the other

const checkPermutations = (str1, str2)  => {
  let dict = {};
  // create dict from str1 to count letter occurances
  for (let char of str1) {
    dict[char] = dict[char] + 1 || 1;
  }
  // if str2 char exists in str1, subtract occurances
  // else str2 char is unique and immediately return false
  // delete key from dict if same number of letter occurance
  for (let char of str2) {
    if (char in dict) dict[char] = dict[char] - 1;
    else return false;
    if (dict[char] === 0) delete dict[char];
  }
  // empty dictionary means one str is permutation of the other
  return Object.keys(dict).length ? false : true;
};

console.log(checkPermutations('abca','bcaa'));
