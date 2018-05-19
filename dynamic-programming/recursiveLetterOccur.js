// Given an array of integers, find the number of subsets that equal
// to sum k

// Input: [2,4,6,10] k = 16
// Output: 2 since there are 2 subsets that equal to 16
// Subset1: {2,4,10} Subset2: {6,10}

const countLetter = (str, L) => {
  // Base Case 1: Empty string, return 0
  if (str === '') return 0;

  // Base Case 2: String is one char
  if (str.length === 1) return str === L ? 1 : 0;

  // Recursive Case: String more than one char
  return countLetter(str.substring(1), L) + countLetter(str[0], L);
};

const str = 'abcdeaba';
console.log(countLetter(str, 'a'));
