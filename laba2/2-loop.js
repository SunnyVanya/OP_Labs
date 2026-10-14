'use strict' 

const range = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

const vcl = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !==0){
            result.push(i);
        }
    }
    return result;

};

console.log('Всі числа:', range(15, 30));

console.log('Непарні числа:', vcl(15, 30));

module.exports = { range, vcl }; 