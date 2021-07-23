/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function findLongNameThatStartsWithA(names){
  // iterar elementos del array y encontrar nombres que empiecen por A
  // for (let i = 0; i < names.length; i++) {
  //   let element = names[i];
  //   if(element.startsWith('A') && element.length > 7){
  //     return element;
  //   }
  // }
  // names.forEach(element => {
    // if (element.startsWith('A') && element.length > 7){
    //   // return element;
    // }
  // });
  return names.find(element=>element.startsWith('A') && element.length > 7);
}

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
