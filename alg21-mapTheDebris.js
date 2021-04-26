const assert = require('assert');
/*
Source: <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris>

Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
function myOrbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const { pow, sqrt, round } = Math;

  const calculateOrbitalPeriod = (avgAltObject) => {
    const a = pow(earthRadius + avgAltObject, 3);
    const orbitalPeriod = (2 * Math.PI) * sqrt(a / GM);
    return round(orbitalPeriod);
  }

  arr.forEach((astronomicalObject) => {
    const orbitalPeriod = calculateOrbitalPeriod(astronomicalObject['avgAlt']);
    Object.assign(astronomicalObject, {
      orbitalPeriod: orbitalPeriod
    });
    delete astronomicalObject['avgAlt'];
  });
  return arr;
}

myOrbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

assert.deepStrictEqual(
  myOrbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), 
  [{name: "sputnik", orbitalPeriod: 86400}]
);

assert.deepStrictEqual(
  myOrbitalPeriod([
    {name: "iss", avgAlt: 413.6}, 
    {name: "hubble", avgAlt: 556.7}, 
    {name: "moon", avgAlt: 378632.553}
  ]), 
  [
    {name : "iss", orbitalPeriod: 5557}, 
    {name: "hubble", orbitalPeriod: 5734}, 
    {name: "moon", orbitalPeriod: 2377399}
  ]
);
/*
Get a help > Get a hint <https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-map-the-debris/16021>
*/
//Solution 1

//Solution 2

//Solution 3

//Solution 4