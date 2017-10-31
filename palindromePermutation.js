function palindromePermutation(str) {
  const anagrams = getAnagrams(str);

  for (anagram of anagrams) {
    if (isPalindrome(anagram)) return true;
  }
  return false;
}

function getAnagrams(word, anagram = '', anagrams = []) {
  if (!word) {
    anagrams.push(anagram);
    return;
  }

  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    getAnagrams(word.slice(0, i) + word.slice(i+1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [... new Set(anagrams)];
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(palindromePermutation('aadrr'));
