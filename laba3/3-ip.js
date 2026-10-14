'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');

  const numbers = [];
  for (let i = 0; i < parts.length; i++) {
    numbers.push(Number(parts[i]));
  }

  const shifted = [];
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    const shiftCount = 3 - i;

    for (let j = 0; j < shiftCount; j++) {
      value = value << 8;
    }

    shifted.push(value);
  }

  let sum = 0;
  for (let i = 0; i < shifted.length; i++) {
    sum += shifted[i];
  }

  return sum;
};

console.log('10.0.0.1   ->', ipToInt('10.0.0.1'));
console.log('127.0.0.1  ->', ipToInt('127.0.0.1'));
console.log('192.168.1.10  ->', ipToInt('192.168.1.10'));



module.exports = { ipToInt };