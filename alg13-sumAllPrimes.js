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
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085>
*/
//Solution 1
function sumPrimes1(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

//Solution 2
function sumPrimes2(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

//Solution 3
function sumPrimes3(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}