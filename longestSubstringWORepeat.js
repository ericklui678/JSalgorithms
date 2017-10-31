// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  var dict = {};
  var subStr = '';
  for (var i = 0; i < s.length; i++) {
    var curr = s[i];
    if (!(curr in dict)) {
      dict[curr] = 1;
      subStr += s[i];
    } else {
      dict = {};

    }
  }
}

s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
