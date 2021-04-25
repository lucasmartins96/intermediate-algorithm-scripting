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
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-drop-it/16010>
*/
//Solution 1
function dropElements1(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//Solution 2
function dropElements2(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

//Solution 3
function dropElements3(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

//Solution 4
function dropElements4(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}