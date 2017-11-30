/*
Given two strings, check if a string is an anagram of the other string
  Ex 1) 'abc' 'cab' => true
  Ex 2) 'abc' 'dacb' => false
*/

const checkAnagramOf = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const dict = {};

  for (let char of str1) {
    dict[char] = dict[char] + 1 || 1;
  }
  for (let char of str2) {
    if (!(char in dict)) return false;
    if (dict[char] === 1) delete dict[char];
    else dict[char]--;
  }
  return !Object.keys(dict).length;
};

const str1 = 'baa';
const str2 = 'aba';
console.log(checkAnagramOf(str1, str2));
