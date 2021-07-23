function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  };

  
  
function upper(str) {

  return str.toUpperCase();
  
};

function abracamayus(arr)  {
    return arr.map(upper)
};

console.log(abracaFunction(abracamayus));
