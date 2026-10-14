'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Ivan', phone: '+380501112233' },
  { name: 'Alexandr', phone: '+380671234567' },
];

const findPhoneByName = (name) => {
  for (const record of phonebook) {
    if (record.name === name) {
      return record.phone;
    }
  }
};

console.log('Пошук Ivan:', findPhoneByName('Ivan'));
console.log('Пошук Marcus:', findPhoneByName('Marcus Aurelius'));
console.log('Пошук неіснуючого:', findPhoneByName('Unknown'));

module.exports = { phonebook, findPhoneByName };