const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers>

Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function mySumFibs(num) {
  //It's Fibonacci sequence
  let sqrt5 = Math.sqrt(5);
  let t1 = (1 + sqrt5) / 2;
  let t2 = (1 - sqrt5) / 2;
  let powT1 = Math.pow(t1, num);
  let powT2 = Math.pow(t2, num);
  console.log(parseInt((1 / sqrt5) * Math.abs(powT1 - powT2)));
}
mySumFibs(10);
// assert.strictEqual(type4of mySumFibs(1), 'number');
// assert.strictEqual(mySumFibs(1000), 1785);
// assert.strictEqual(mySumFibs(4000000), 4613732);
// assert.strictEqual(mySumFibs(4), 5);
// assert.strictEqual(mySumFibs(75024), 60696);
// assert.strictEqual(mySumFibs(75025), 135721);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-odd-fibonacci-numbers/16084>
*/
//Solution 1
function sumFibs1(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

//Solution 2
function sumFibs2(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}
