const validParenthesis = (str) => {
  if (str.length % 2 !== 0) return false;

  let map = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  let arr = [];

  for (char of str) {
    if (char in map) {
      arr.push(char);
    } else {
      let lastOpenParen = arr[arr.length - 1];
      if (char !== map[lastOpenParen]) return false;
      else arr.pop();
    }
  }
  return !arr.length;
};

const str0 = '[()]';
const str1 = '[)(]';
// console.log(validParenthesis(str1));

///////////////////////////////////////////////////////////

const findKOccuranceInArr = (arr, k) => {
  const map = {};
  let result = [];

  for (num of arr) {
    map[num] = map[num] + 1 || 1;
  }
  for (num of k) {
    if (num in map) result.push(map[num]);
  }
  return result;
};

const arr = [3,2,10,1,5,3,2];
const k = [1,2,3]
console.log(findKOccuranceInArr(arr, k));
// return [1,2,2]


///////////////////////////////////////////////////////////

const hash = (str) => {
  let newStr = '';
  for (char of str) {
    newStr += char.charCodeAt(0);
  }
  return newStr;
};

const str3 = 'erick';
const str4 = 'Erick';

// console.log(hash(str1));
// console.log(hash(str2));
