/*
Given a string, return a character that appears only once
'aabcb' -> 'c'
'xxyz' -> 'y'
'aabb' -> null

Clarifying Questions:
1) Can we assume input will always be string?
  - Yes
2) How to handle if there are multiple nonrepeating characters?
  - You can return any one of them

Logic:
1) Create empty hash table to track char occurance
2) Loop through str
  a) If str is in hash table, increment string's value
  b) else set string's value to 1
3) Loop through hash table
  a) If key's value is 1, return the key
4) Return null
*/

const non_repeating = str => {
  let occur = {};
  for (char of str) {
    occur[char] = occur[char] + 1 || 1;
  }
  for (key in occur) {
    if (occur[key] === 1) return key;
  }
  return null;
};

let a = "aabcb";
let b = "xxyz";
let c = "aabb";
console.log(non_repeating(c));
