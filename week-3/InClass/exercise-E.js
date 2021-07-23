let birthyears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let ages = [];

function ageCheck(birthyear) {
    return 2021 - birthyear;
}

birthyears.forEach(birthyear => {
  let age = ageCheck(birthyear);
  ages.push(age);
});

console.log(ages);

// let ages = (birthyears.map(ageCheck));

