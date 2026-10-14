'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

console.log('Випадкове число (0 - 10):', random(10));
console.log('Випадкове число (5 - 15):', random(5, 15));

module.exports = { random };