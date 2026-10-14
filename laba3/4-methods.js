'use strict';

const methods = (iface) => {
  const result = [];

  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      result.push([name, fn.length]);
    }
  }

  return result;
};

const api = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  variable: 42,
};

console.dir(methods(api));

module.exports = { methods };