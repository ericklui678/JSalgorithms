function isValidParen(str) {
  let arr = [];
  let map = {
    '(': ')',
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] in map) {
      arr.push(str[i]);
    } else {
      let recentOpen = arr[arr.length - 1];
      if (str[i] !== map[recentOpen]) {
        return false;
      } else {
        arr.pop();
      }
    }
  }
  return arr.length ? false: true;
}

function possibleParenthesis(n, str = '()'.repeat(n), anagram = '', anagrams = new Set()) {

  if (!str.length) {
    if (isValidParen(anagram)) {
      anagrams.add(anagram);
    }
    return;
  }

  for (let i = 0; i < str.length; i++) {
    anagram += str[i];
    possibleParenthesis(n, str.slice(0, i) + str.slice(i+1), anagram, anagrams)
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return anagrams;
}

let n = 2

console.log(possibleParenthesis(3));
