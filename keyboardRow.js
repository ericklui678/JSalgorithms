/*
Given a list of words, return the words that can be typed using letters of alphabet on only one row's of QWERTY keyboard

Assumptions
1) You may use one character in the keyboard more than once
2) You may assume the input string will only contain letters of alphabet

Ex 1)
  In: ['Hello', 'Alaska', 'Dad', 'Peace']
  Out: ['Alaska', 'Dad']
*/

const findWords = arr => {
  const TOP_ROW = new Set(['Q','W','E','R','T','Y','U','I','O','P']);
  const MID_ROW = new Set(['A','S','D','F','G','H','J','K','L']);
  const BOT_ROW = new Set(['Z','X','C','V','B','N','M']);
  const KEYBOARD_MAP = {
    1: TOP_ROW,
    2: MID_ROW,
    3: BOT_ROW
  };
  let words = [];

  // look through each word in arr
  for (let word of arr) {
    let skipWord = false;
    let firstChar = word[0].toUpperCase();
    let rowNum;
    if (firstChar) {
      if (TOP_ROW.has(firstChar)) rowNum = 1;
      else if (MID_ROW.has(firstChar)) rowNum = 2;
      else rowNum = 3;
    }
    for (let i = 1; i < word.length; i++) {
      let char = word[i].toUpperCase();
      if (!(KEYBOARD_MAP[rowNum].has(char))) {
        skipWord = true;
        break;
      }
    }
    if (!skipWord) words.push(word);
  }
  return words;
};

const arr = ['Hello', 'Alaska', 'Dad', 'Peace'];
console.log(findWords(arr));
