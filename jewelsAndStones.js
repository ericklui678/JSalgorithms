// You're given strings J representing the types of stones that are jewels, and S
// representing the stones you have. Each character in S is a type of stone you have. You
// want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so 'a' is considered a differnt type of stone from 'A'

// EX 1:
// Input: J = 'aA', S = 'aAAbbbb'
// Output: 3

// EX 2:
// Input: J = 'z', S = 'ZZ'
// Output: 0

/*
Space Complexity: O(J) where J is length of sting J
Time Complexity: O(n) where n is longest string of J or S

1) Create empty dictionary
2) For loop string J to save unique jewels as keys into dictionary
3) For loop string S
  a) if a char is in jewel dict, increment count
*/
const numJewelsInStones = (J, S) => {
  let uniqueJewel = {};
  let count = 0;

  for (jewel of J) {
    uniqueJewel[jewel] = true;
  }
  for (s of S) {
    if (s in uniqueJewel) count++;
  }

  return count;
};

/*
Space Complexity: O(1)
Time Complexity: O(n^2) since includes has to iteratively search through J for each char s

1) Init count to 0
2) For loop string S
  a) If string J includes char s, increment count
*/
const numJewelsInStonesNoSpace = (J, S) => {
  let count = 0;

  for (s of S) {
    if (J.includes(s)) count++;
  }
  return count;
}

const J = 'aA';
const S = 'aAAbbbb';
let numJewels = numJewelsInStonesNoSpace(J, S);
console.log(numJewels);
