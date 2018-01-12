const checkOneAway = (str1, str2) => {
  if (str1 === str2) return true;

  let lengthDif = Math.abs(str1.length - str2.length);
  if (lengthDif > 1) return false;

  // check if there are one than one edits using boolean
  let changed = false;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let maxLength = 0;
  let longer = [];
  arr1.length > arr2.length ? maxLength = arr1.length : maxLength = arr2.length;
  arr1.length > arr2.length ? longer = arr1 : longer = arr2;

  // if same lengths for both strings, check for multiple edits
  if (!lengthDif) {
    for (let i = 0; i < maxLength; i++) {
      if (arr1[i] !== arr2[i]) {
        if (changed) return false;
        else changed = true;
      }
    }
    return changed;
  }

  // if lengths differ by one, just for any edits/add/remove
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== arr2[i]) longer.splice(i, 1)
    console.log(arr1, arr2);
  }
  return arr1.join('') === arr2.join('') ? true : false;
};

let str1 = 'plle';
let str2= 'pel';
console.log(checkOneAway(str1, str2));
