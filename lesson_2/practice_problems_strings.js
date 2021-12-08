// 1 
const firstName = 'Andrew';
const lastName = 'Moore';

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// 2
console.log(firstName.concat(lastName));

// The name is missing a space when concat is used like so. It could be passed a space or other delimiter as an additional argument if desired.

// 3
console.log(fullName.split(' '));

// 4
let language = 'JavaScript';
let idx = language.indexOf('S');

console.log(idx);

// 5
let charCode = language.charCodeAt(idx);
console.log(charCode);

// 6
console.log(String.fromCharCode(charCode));

// 7
console.log(language.lastIndexOf('a'));

// 8
let a = 'a';
let b = 'b';

console.log(a > b);

b = 'B';

console.log(a > b);

// 9
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// 10
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

// 11
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);

console.log(compoundSentence);

// 12
console.log(fact1[0]);
console.log(fact2[0]);

// 13
let pi = 22 / 7;
let piString = pi.toString();

console.log(piString.lastIndexOf('14'));

// 14
let boxNumber = (356).toString();
console.log(boxNumber);

// 15
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// 16
const rlSync = require('readline-sync');

const userName = rlSync.question('What is your name? ');

if (userName.endsWith('!')) {
  console.log(`HELLO ${userName.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}
