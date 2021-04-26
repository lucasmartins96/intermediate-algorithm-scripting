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
  const { pow, sqrt, round, PI } = Math;

  const calculateOrbitalPeriod = (avgAltObject) => {
    const a = pow(earthRadius + avgAltObject, 3);
    const orbitalPeriod = (2 * PI) * sqrt(a / GM);
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
function orbitalPeriod1(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];

  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

//Solution 2
function orbitalPeriod2(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

  //Looping through each key in arr object
  for (var elem in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

//Solution 3
function orbitalPeriod3(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // Create new array to prevent modification of the original
  var newArr = JSON.parse(JSON.stringify(arr));
  // Loop through each item in the array arr
  newArr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return newArr;
}

//Solution 4
function orbitalPeriod4(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}