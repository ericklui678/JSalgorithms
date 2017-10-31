function canPlaceFlowers(fB, n) {
  var prev;
  var emptySlots = 0;

  for (var i = 0; i < fB.length; i++) {
    var curr = fB[i];
    var next = fB[i+1];

    if (!prev && !curr && !next) {
      prev = 1;
      emptySlots++;
    } else {
      prev = curr;
    }
  }
  return emptySlots >= n;
}

var fB = [1,0,0,0,1];
var n = 1;
console.log(canPlaceFlowers(fB, n));
