// Write a method to replace all spaces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional
// characters, and that you are given the 'true' length of the string
// Please use char arr to perform inplace


const URLify = (arr) => {
  // iterate through each char
  for (let i = 0; i < arr.length; i++) {
    // if space is found, shift all chars to the right by 2 to make room for %20
    if (arr[i] === ' ') {
      console.log(i);
      for (let j = arr.length - 1; j > i + 2; j--) {
        arr[j] = arr[j-2];
      }
      // set the space and next 2 indicies to %20
      arr[i] = '%';
      arr[i+1] = '2';
      arr[i+2] = '0';
    }
  }
  return arr;
};

const charArr = ['M','r',' ','J','o','h','n',' ','S','m','i','t','h',' ',' ',' ',' '];
console.log(URLify(charArr).join(''));
