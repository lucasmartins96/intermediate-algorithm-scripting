const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple>

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/
function mySmallestCommons(arr) {
  return arr;
}


mySmallestCommons([1,5]);

assert.strictEqual(typeof mySmallestCommons([1, 5]), 'number');
assert.strictEqual(mySmallestCommons([1, 5]), 60);
assert.strictEqual(mySmallestCommons([5, 1]), 60);
assert.strictEqual(mySmallestCommons([2, 10]), 2520);
assert.strictEqual(mySmallestCommons([1, 13]), 360360);
assert.strictEqual(mySmallestCommons([23, 18]), 6056820);

/*
Get a help > Get a hint <>
*/