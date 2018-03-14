const counter = (() => {
  let privateCounter = 0; // private variable

  function changeBy(val) { // private function
    privateCounter += 1;
  }

  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})(); // immediately invoked function

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
