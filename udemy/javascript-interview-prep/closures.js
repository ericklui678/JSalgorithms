const globalVariable = "global var";

function outer(param1) {
  const variable1 = "var one";

  function inner(param2) {
    const variable2 = "var two";
    console.log("globalVariable", globalVariable);
    console.log("variable1", variable1);
    console.log("variable2", variable2);
    console.log("param1", param1);
    console.log("param2", param2);
  }
  inner("param1");
}

outer("param2");
console.log(this);
