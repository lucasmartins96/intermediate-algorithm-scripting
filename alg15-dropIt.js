const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it>

Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
function myDropElements(arr, func) {
  let indexTrueCondition = arr.length; //3
  return arr.reduce((arrReduce, curr, index)=> {
    const acc = arrReduce;
    if (indexTrueCondition > index) {
      if (func(curr) ) {
        acc.push(curr);
        indexTrueCondition = index;
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

assert.deepStrictEqual(
  myDropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]
);

assert.deepStrictEqual(
  myDropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]
);

assert.deepStrictEqual(
  myDropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]
);

assert.deepStrictEqual(
  myDropElements([1, 2, 3, 4], function(n) {return n > 5;}), []
);

assert.deepStrictEqual(
  myDropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]
);

assert.deepStrictEqual(
  myDropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]
);
/*
Get a help > Get a hint <>
*/