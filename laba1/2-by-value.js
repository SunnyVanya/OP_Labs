'use strict'

const per = (n) => ++n;

const a = 5;
const b = per(a);

console.dir({a,b});

module.exports = {per};