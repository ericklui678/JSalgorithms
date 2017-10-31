function longestPalindrome(str, sLength = 0) {
  if (sLength === str.length - 1) return str[0];

  for (let i = 0; i <= sLength; i++) {
    let subStr = str.slice(i, str.length - sLength + i);
    if (isPalindrome(subStr)) return subStr;
  }

  return longestPalindrome(str, sLength + 1);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

const str = 'abcdefg';
console.log(longestPalindrome(str));
