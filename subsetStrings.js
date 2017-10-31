let numArr = [1,2,0,5,2,0,1,3,0];
// [1,2,5,2,1,3,0,0,0];



// var c = [ "xxx", "aaa", "yyy", "hij", 'ggg' ];
// var s = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ] ];
//
//
//
// function stringSort(current, seen){
//
//   // Space S
//   var seen_flattened = seen.reduce(function(a, b) {
//     return a.concat(b);
//   }, []);
//
//   //sort the flattened array alphabetically
//   console.log('current', current);
//   console.log('seen_flattened', seen_flattened);
//
//   // Space S
//   let seenDict = {};
//   let newstrings = [];
//
//   // O(S)
//   for (let i = 0; i < seen_flattened.length; i++) {
//     seenDict[seen_flattened[i]] = 1;
//   }
//
//   // O(C)
//   for (let i = 0; i < current.length; i++) {
//     if (!(current[i] in seenDict)) {
//       newstrings.push(current[i]);
//     }
//   }
//
//   // O(C + S)
//   console.log(newstrings);
//
//   //sort the current array alphabetically
//   // current.sort('')
//
//   // var newstrings = [];
//   //
//   //
//   // for(var i = 0; i < current.length; i++){
//   //
//   //   for(var j = 0; j < seen_flattened.length; j++){
//   //
//   //   //check to see if the string in current is greater than the string in seen
//   //   if(current[i] >= seen_flattened[j]){
//   //
//   //   //if they are the same, get rid of it so you wont have to iterate through it next time
//   //   if(current[i] == seen_flattened[j]){
//   //   seen_flattened.splice(j, 1);
//   //   break;
//   //   }
//   //
//   //   //checking if j is at the end
//   //   //if j is at the end it means that it did not have any string in common so add it to the array
//   //
//   //   if(j == seen_flattened.length - 1){
//   //   newstrings.push(current[i]);
//   //   }
//   //
//   //   //if the current string is then smaller than the seen string then it means that there is no need to keep iterating
//   //   //through the array and can add it to the new string array
//   //   }else if(current[i] < seen_flattened[j]){
//   //     newstrings.push(current[i]);
//   //     }
//   //   }
//   //
//   // }
//   //
//   // //removing the first element in the seen array;
//   // seen.splice(0, 1);
//   //
//   // //pushing the newstring array to the end of the seen array
//   // seen.push(newstrings);
//
//   // console.log("newstrings: ", newstrings);
//   // console.log("newseen: ", seen);
//
// }
//
// stringSort(c, s);
