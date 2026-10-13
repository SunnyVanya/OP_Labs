'use strict';

const mixedArray = [true, 'hello', 5, 12, 200, 'elephant', false, false, 'world', 15];

const countTypesInArray = (arr) => {
  const counters = {};

  for (const element of arr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }

  return counters;
};

console.dir(countTypesInArray(mixedArray));

module.exports = { countTypesInArray };