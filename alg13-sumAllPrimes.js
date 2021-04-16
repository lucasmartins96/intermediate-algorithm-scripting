const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes>

Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function mySumPrimes(num) {
  /* source isPrime(): <https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100?page=1&tab=votes#tab-top> */
  const isPrime = (number) => {
    if (number < 2) return false;
    
    const squareRootN = Math.floor(Math.sqrt(number));
    for (let index = 2; index <= squareRootN; index += 1) {
      if (number % index === 0) return false;
    }
    return true;
  }

  const primeNumbers = [];
  for (let dividend = 0; dividend <= num; dividend += 1) {
    if (isPrime(dividend)) primeNumbers.push(dividend);
  }
  return primeNumbers.reduce((acc, curr) => acc + curr);
}

mySumPrimes(10);

assert.strictEqual(typeof mySumPrimes(10), 'number');
assert.strictEqual(mySumPrimes(10), 17);
assert.strictEqual(mySumPrimes(977), 73156);
/*
Get a help > Get a hint <>
*/