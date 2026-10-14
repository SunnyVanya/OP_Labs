'use strict'

let myname = 'Ivan';

const year = 2008;

const greeting = (name) => {
    console.log('Вiтаю, ' + name + '!');
};

greeting(myname)

module.exports = { myname, year, greeting };