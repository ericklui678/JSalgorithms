/*
Check whether two strings are one edit from each other. One edit meaning there can only be one char modified, one char added, or one char removed

1) How to handle if both strings are same?
  - Same strings are considered as true case

Logic:
1) If lengths differ by 2, return false
2) If lengths are equal
  a) Loop through str
    i) if char does not equal other char
      - incr count
  b) if count < 2 return true, else return false
Set count back to 0
3) Set i as length of shorter string
4) Set j as length of longer string
5) Loop through longer str
  a) if characters don't equal
    i) decr shorter pointer i while letting j increment to check next char
    ii) incr count
6) if count < 2 return true, else return false
*/

const one_away = (str1, str2) => {
  const one_away_same_length = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    return true;
  };
  const one_away_dif_length = (str1, str2) => {
    let count = 0;
    let j = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[j]) {
        count++;
        if (count > 1) return false;
      } else {
        j++;
      }
    }
    return true;
  };

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  } else if (str1.length === str2.length) {
    return one_away_same_length(str1, str2);
  } else if (str1.length > str2.length) {
    return one_away_dif_length(str1, str2);
  } else {
    return one_away_dif_length(str2, str1);
  }
};

let a1 = "abcde";
let a2 = "abfde";

let b1 = "abcde";
let b2 = "abde";

let c1 = "xybz";
let c2 = "xyz";

console.log(one_away(c1, c2));
