const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true>

Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/
function myTruthCheck(collection, pre) {
  return collection.every((objCollection) => objCollection[pre]);
}

myTruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

assert.strictEqual(
  myTruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), 
  true
);

assert.strictEqual(
  myTruthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), 
  false
);

assert.strictEqual(
  myTruthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), 
  false
);

assert.strictEqual(
  myTruthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"), 
  false
);

assert.strictEqual(
  myTruthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"), 
  true
);

assert.strictEqual(
  myTruthCheck([{"single": "yes"}], "single"), 
  true
);

assert.strictEqual(
  myTruthCheck([{"single": ""}, {"single": "double"}], "single"), 
  false
);

assert.strictEqual(
  myTruthCheck([{"single": "double"}, {"single": undefined}], "single"), 
  false
);

assert.strictEqual(
  myTruthCheck([{"single": "double"}, {"single": NaN}], "single"), 
  false
);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-everything-be-true/16011>
*/
//Solution 1
function truthCheck1(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

//Solution 2
function truthCheck2(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

//Solution 3
function truthCheck3(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}