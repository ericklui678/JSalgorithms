function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
// function makePesto() {
//   console.log("Making Pesto");
//   return "pesto";
// }
let makePesto = () => {
  console.log('Making Pesto');
  return 'pesto';
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

/*
1) "Penne" and makePesto is passed into makePasta
2) Print 'Boiling water'
3) Print 'Putting Penne pasta in the water'
4) Call makePesto function and set to var sauce
  - 'Making Pesto'
5) Print 'Mixing sauce'
6) Print 'Pasta is done'
7) Return Penne Pasta with pesto sauce! Voila!
*/
