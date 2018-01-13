// Check if any of a string's permutations is a palindrome, ignore spaces
// EX: 'Tact Coa';
  // True (permutations: 'taco cat', 'atco cta')

// Method 1: Dictionary to track letter occurances
  // Even length palindrome has all even letter occurances
  // Odd length palindrome only has one odd letter occurances, rest are evens
// Time: O(n)
// Space: O(n)
const palindromePermutations = (str) => {
  str = str.toLowerCase();
  let dict = {};
  let numOfOdd = 0;
  for (char of str) {
    if (char === ' ') continue;
    dict[char] = dict[char] + 1 || 1;
  }
  for (key in dict) {
    // keep track of number of odd char occurances
    if (dict[key] % 2 === 1) numOfOdd++;
  }
  // if numOfOdd is less than 2, true, otherwise false
  return numOfOdd < 2 ? true : false;
};

const str = 'Tact Coa';
console.log(palindromePermutations(str));
