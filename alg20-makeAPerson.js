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
  const [first, last] = firstAndLast.split(' ');
  let firstName = first;
  let lastName = last;
  let fullName = firstAndLast;
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => `${firstName} ${lastName}`;
  this.setFirstName = (first) => firstName = first;
  this.setLastName = (last) => lastName = last;
  this.setFullName = (firstAndLast) => {
    const [first, last] = firstAndLast.split(' ');
    fullName = firstAndLast;
    this.setFirstName(first);
    this.setLastName(last);
  }
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
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020>
*/
//Solution 1
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};