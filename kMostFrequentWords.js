function kMostFreqWords(words, k) {
  let wordMap = {};
  let result = [];

  for (word of words) {
    if (word in wordMap) wordMap[word]++;
    else wordMap[word] = 1;
  }
  console.log(wordMap);

  for (word in wordMap) {
    let temp = [];
    temp.push(word, wordMap[word]);

    if (!result.length) {
      result.push(temp);
    } else {
      for (let i = 0; i < result.length; i++) {

      }
    }
  }
  console.log(result);
  // let wordArr = Object.keys(wordMap).sort(function (a, b) {
  //   return wordMap[b] - wordMap[a];
  // });
  // console.log(wordArr);
  //
  // let valueArr = Object.values(wordMap).sort(function (a, b) {
  //   return b - a;
  // });
  // console.log(valueArr);

}


// function sortAlphabet(arr) {
//   console.log(arr.sort());
// }

const words = ["plpaboutit","jnoqzdute","sfvkdqf","mjc","nkpllqzjzp","foqqenbey","ssnanizsav","nkpllqzjzp","sfvkdqf","isnjmy","pnqsz","hhqpvvt","fvvdtpnzx","jkqonvenhx","cyxwlef","hhqpvvt","fvvdtpnzx","plpaboutit","sfvkdqf","mjc","fvvdtpnzx","bwumsj","foqqenbey","isnjmy","nkpllqzjzp","hhqpvvt","foqqenbey","fvvdtpnzx","bwumsj","hhqpvvt","fvvdtpnzx","jkqonvenhx","jnoqzdute","foqqenbey","jnoqzdute","foqqenbey","hhqpvvt","ssnanizsav","mjc","foqqenbey","bwumsj","ssnanizsav","fvvdtpnzx","nkpllqzjzp","jkqonvenhx","hhqpvvt","mjc","isnjmy","bwumsj","pnqsz","hhqpvvt","nkpllqzjzp","jnoqzdute","pnqsz","nkpllqzjzp","jnoqzdute","foqqenbey","nkpllqzjzp","hhqpvvt","fvvdtpnzx","plpaboutit","jnoqzdute","sfvkdqf","fvvdtpnzx","jkqonvenhx","jnoqzdute","nkpllqzjzp","jnoqzdute","fvvdtpnzx","jkqonvenhx","hhqpvvt","isnjmy","jkqonvenhx","ssnanizsav","jnoqzdute","jkqonvenhx","fvvdtpnzx","hhqpvvt","bwumsj","nkpllqzjzp","bwumsj","jkqonvenhx","jnoqzdute","pnqsz","foqqenbey","sfvkdqf","sfvkdqf"];
const k = 3;

// console.log(sortAlphabet(words));

console.log(kMostFreqWords(words, k));



/*

'paymentsandpaypal'

payments and PayPal
payment sand PayPal
payments and pay pal
payment sand pay pal
