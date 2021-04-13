const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes>

Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function mySumPrimes(num) {
  return num;
}

mySumPrimes(10);
assert.strictEqual(typeof mySumPrimes(10), 'number');
assert.strictEqual(mySumPrimes(10), 17);
assert.strictEqual(mySumPrimes(977), 73156);
/*
Get a help > Get a hint <>
*/