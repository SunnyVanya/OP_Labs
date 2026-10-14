'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Ivan': '+380501112233',
  'Alexandr': '+380671234567',
};

const findPhoneByName = (name) => phonebook[name];

console.log('Пошук Ivan:', findPhoneByName('Ivan'));
console.log('Пошук Marcus:', findPhoneByName('Marcus Aurelius'));
console.log('Пошук неіснуючого:', findPhoneByName('Unknown'));

module.exports = { phonebook, findPhoneByName };