// Given string s, find the longest palindrome substring in s
// Input: 'babad'
// Output: 'bab'

// Input: 'cbbd'
// Output: 'bb'

const longestPalindromeSubstring = (str, subLength = 0) => {
  if (str.length === 1) return str;

  for (let i = 0; i <= subLength; i++) {
    let substring = str.substring(i, str.length + i - subLength);
    if (isPalindrome(substring)) return substring;

  }
  return longestPalindromeSubstring(str, subLength + 1);
};

const isPalindrome = (str) => {
  if (!str) return false;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

const str = 'abcdradarefg';
console.log(longestPalindromeSubstring(str));
