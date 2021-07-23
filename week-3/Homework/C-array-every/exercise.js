/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Jose"];

var groupIsOnlyStudents = group.every(function(name) {
  //quiero una funcion que busque si los elementos de "group pertenecen a "students"
  return students.some(function (student) {
    return name == student
  })
}); 
// complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
