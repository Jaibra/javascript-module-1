/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var namesplit = str.split("");
  var primeraUpper = namesplit[0].toUpperCase();
  var strCortada = namesplit.slice(1);
  return primeraUpper + strCortada.join(``)
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var nombre = "daniel";

console.log(capitalise(nombre));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
