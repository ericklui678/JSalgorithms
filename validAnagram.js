// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var dict = {};
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (char in dict) {
      dict[char] += 1;
    } else {
      dict[char] = 1;
    }
  }

  for (var i = 0; i < t.length; i++) {
    var char = t[i];
    if (char in dict) {
      dict[char] -= 1;
    } else {
      return false;
    }
  }

  for (key in dict) {
    if (dict[key] !== 0) {
      return false;
    }
  }
  return true;
}

var s = 'anagram';
var t = 'nagaram';
console.log(validAnagram(s, t));
