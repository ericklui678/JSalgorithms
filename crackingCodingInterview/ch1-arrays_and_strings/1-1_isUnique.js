// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUnique = (str) => {
  let dict = {};
  for (let char of str) {
    // add to dict if unique char, else return false
    if (char in dict) return false;
    dict[char] = 1;
  }
  return true;
};

// Implementation without data structures
// Nested for loop to check char with rest of chars
const isUniqueNoDS = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

console.log(isUniqueNoDS('helo'));
