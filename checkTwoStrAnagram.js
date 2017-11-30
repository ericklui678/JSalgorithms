/*
Given two strings, check if a string is an anagram of the other string
  Ex 1) 'abc' 'cab' => true
  Ex 2) 'abc' 'dacb' => false
*/

const checkAnagramOf = (str1, str2) => {
  const letterMap = new Map();

  for (let char of str1) {
    letterMap.set(char, letterMap.get(char) + 1 || 1);
  }

  for (let char of str2) {
    if (!letterMap.has(char)) return false;

    let charVal = letterMap.get(char);
    if (charVal === 1) letterMap.delete(char);
    else letterMap.set(char, charVal - 1);
  }
  return !letterMap.size;
};

const str1 = 'abca';
const str2 = 'aba';
console.log(checkAnagramOf(str1, str2));
