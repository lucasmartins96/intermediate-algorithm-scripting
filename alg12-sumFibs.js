const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers>

Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function mySumFibs(num) {
  return num;
}

assert.strictEqual(typeof mySumFibs(1), 'number');
assert.strictEqual(mySumFibs(1000), 1785);
assert.strictEqual(mySumFibs(4000000), 4613732);
assert.strictEqual(mySumFibs(4), 5);
assert.strictEqual(mySumFibs(75024), 60696);
assert.strictEqual(mySumFibs(75025), 135721);
/*
Get a help > Get a hint <>
*/