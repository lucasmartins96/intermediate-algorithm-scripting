const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional>

Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
function myAddTogether(...num1) {
  const checkNumber = (n) => typeof n === 'number';

  if (!num1.every((num) => checkNumber(num))) {
    return undefined;
  }

  if (num1.length > 1) {
    return num1.reduce((acc, curr) => acc + curr);
  }
  return function (num2) {
    return (checkNumber(num2) ? num1[0] + num2 : undefined);
  }
}

myAddTogether(2, 3);

assert.strictEqual(myAddTogether(2, 3), 5);
assert.strictEqual(myAddTogether(23, 30), 53);
assert.strictEqual(myAddTogether(5)(7), 12);
assert.strictEqual(myAddTogether("http://bit.ly/IqT6zt"), undefined);
assert.strictEqual(myAddTogether(2, "3"), undefined);
assert.strictEqual(myAddTogether(2)([3]), undefined);
/*
Get a help > Get a hint <>
*/

