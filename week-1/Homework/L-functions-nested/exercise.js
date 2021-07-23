var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutgreet(name) {
    var greeting = "HELLO " + uppercaser(name);
    return greeting
}

function uppercaser(name) {
    return name.toUpperCase();
}

console.log(shoutgreet(mentor1));
console.log(shoutgreet(mentor2));
console.log(shoutgreet(mentor3));
console.log(shoutgreet(mentor4));
console.log(shoutgreet(mentor5));
