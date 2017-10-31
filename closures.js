/*
Closures: Nested functions that have access to local variables, the outer functions variables, and global functions

Downsides:
- Can cause memory leaks
  - If the closure function accesses the outer function's variables, even when the outer function returns, the closure function is still holding on that variable's reference and will not be garbage collected
  - To resolve this, release memory by setting the accessed variable to null
*/

function parent() {
  let num = 5;

  function child() {
    return num;
  }

  return child;
}

let result = parent();
console.log(result());
