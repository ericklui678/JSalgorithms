// Given two strings, check whether s2 is a rotation of s1
// EX: 'waterbottle' is a rotation of 'erbottlewat'

// Method 1: Add s2 to itself, if the newStr includes s1 then true
// Time: O(1)
// Space: O(n)
const checkStringRotated = (s1, s2) => {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  let newStr = s2 + s2;
  return newStr.includes(s1) ? true : false;
};

const s1 = 'waterbottle';
const s2 = 'erbottlewat';
console.log(checkStringRotated(s1, s2));
