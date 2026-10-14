'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const base = possible.length;

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }

  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

console.log('Ключ 16:', generateKey(16, characters));
console.log('Ключ 8:', generateKey(8, characters));

module.exports = { generateKey };