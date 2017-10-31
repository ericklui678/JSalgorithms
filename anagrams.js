/*
time complexity: O(n * n!) - quadratic
space complexity: O(n!)
*/

// function getAnagrams(word, anagram = '', anagrams = []) {
//   if (!word) {
//     console.log('---PUSHING---', anagram);
//     anagrams.push(anagram);
//     return;
//   }
//
//   for (var i = 0; i < word.length; i++) {
//     anagram += word[i];
//     console.log(word, anagram, i);
//     console.log('gA(', word.slice(0, i) + word.slice(i + 1), ',', anagram, ')');
//     getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
//     console.log('Returned Word:', word, 'Anagram:', anagram);
//     anagram = anagram.slice(0, anagram.length - 1);
//   }
//   return [...new Set(anagrams)];
// }
//
// console.log(getAnagrams('abc'));

// str.slice(1) keep everything starting from index 1
// str.slice(0,2) keep indicies 0-1

// function getAnagrams(word, anagram = '', anagrams = []) {
//   if (!word) {
//     console.log('---PUSHING---', anagram);
//     anagrams.push(anagram);
//     return;
//   }
//
//   for (var i = 0; i < word.length; i++) {
//     anagram += word[i]; // add first char of word to anagram
//     // then remove first char of word from front
//     console.log('gA(', word.slice(0, i) + word.slice(i + 1), ',', anagram, ')');
//     getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
//     anagram = anagram.slice(0, anagram.length - 1);
//     console.log('Returned Word:', word, 'Anagram:', anagram, 'i', i);
//   }
//   return [...new Set(anagrams)];
// }
//
//
// console.log(getAnagrams('abc'));

function getAnagrams(word, anagram = '', anagrams = []) {
  if (!word) {
    anagrams.push(anagram);
    return;
  }
  for (var i = 0; i < word.length; i++) {
    anagram += word[i];
    getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [...new Set(anagrams)];
}

console.log(getAnagrams('abc'));
