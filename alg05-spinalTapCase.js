/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case>

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function mySpinalCase(str) {
  return str.replace(/(\B[A-Z])/g, ' $1').split(/\_?\W/g).map((word) => word.toLowerCase()).join('-');
}
const out1 = mySpinalCase('This Is Spinal Tap');
const out2 = mySpinalCase('thisIsSpinalTap');
const out3 = mySpinalCase('The_Andy_Griffith_Show');
const out4 = mySpinalCase('Teletubbies say Eh-oh');
const out5 = mySpinalCase('AllThe-small Things');
console.log(`${out1}\n${out2}\n${out3}\n${out4}\n${out5}`);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078>
*/
//Solution 1
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

//Solution 2
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

//Solution 3
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}