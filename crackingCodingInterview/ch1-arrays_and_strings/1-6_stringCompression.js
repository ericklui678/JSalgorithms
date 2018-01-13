// Compress a string that counts repeated chars. Only return newStr if shorter
// Input: 'aabcccccaa'
// Output: 'a2b1c5a2'

// Method 1
  // 1) Iterate through each char
  // 2) If next char repeats, increment count, otherwise concat to newStr and
  //    reset count
// Time: O(n)
// Space: O(1)
const stringCompression = (str) => {
  let newStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) count++;
    else {
      newStr = newStr + str[i] + count;
      count = 1;
    }
  }
  return newStr.length > str.length ? str : newStr;
};

const str1 = 'aabcccccaaa';
console.log(stringCompression(str1));
