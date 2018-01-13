// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Method 1: Using dictionary
// Time: O(n)
// Space: O(n)
const isUnique = (str) => {
  let dict = {};
  for (let char of str) {
    // add to dict if unique char, else return false
    if (char in dict) return false;
    dict[char] = 1;
  }
  return true;
};

// Method 2: Nested for loop
// Time: O(n^2)
// Space: O(1)
const isUniqueNoDS = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

const str = 'hello';
console.log(isUnique(str));
console.log(isUniqueNoDS(str));
