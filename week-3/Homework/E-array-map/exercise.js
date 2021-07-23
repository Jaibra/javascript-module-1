// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply(number) {
    return number * 100;
  }

  var numbersMulti = numbers.map(multiply);

  console.log(numbersMulti);

var numbersMulti2 = numbers.map(function multiporcien(number) {
    return number * 100;
    });
    console.log(numbersMulti2);

var numberscien = numbers.map(function (number) {
    return number * 100;
  });

  console.log(numberscien);

  var numbersarrow100 = numbers.map(number => {
    return number * 100;
  });

  console.log(numbersarrow100);

  var numbersimpli100 = numbers.map(number => number * 100);
  console.log(numbersimpli100);


