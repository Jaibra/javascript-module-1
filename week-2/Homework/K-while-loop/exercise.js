/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 3;


function sumTillNum(num) {
	let i = 1;
	let result = "0";
	while (i <= num) {
		result += " +" + i;
		i++;
	 };
	 return result;
	//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
//   console.log(text);
// }
