const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person>

Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
assert.strictEqual(Object.keys(bob).length, 6);
assert.strictEqual(bob instanceof Person, true);
assert.strictEqual(bob.firstName, undefined);
assert.strictEqual(bob.lastName, undefined);
assert.strictEqual(bob.getFirstName(), 'Bob');
assert.strictEqual(bob.getLastName(), 'Ross');
assert.strictEqual(bob.getFullName(), 'Bob Ross');

bob.setFirstName("Haskell");
assert.strictEqual(bob.getFullName(), 'Haskell Ross');
bob.setLastName("Curry");
assert.strictEqual(bob.getFullName(), 'Haskell Curry');
bob.setFullName("Haskell Curry");
assert.strictEqual(bob.getFullName(), 'Haskell Curry');
assert.strictEqual(bob.getFirstName(), 'Haskell');
assert.strictEqual(bob.getLastName(), 'Curry');

/*
Get a help > Get a hint <>
*/