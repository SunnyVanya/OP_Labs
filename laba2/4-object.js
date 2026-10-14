'use strict';

const ab = () => {
  const userConst = { name: 'Ivan' };
  let userLet = { name: 'Ivan' };

  userConst.name = 'Marcus';
  userLet.name = 'Marcus';

  userLet = { name: 'Aurelius' };

  console.log('Результат ab:', { userConst, userLet });
};

const createUser = (name, city) => ({ name, city });

ab();
console.log('Результат createUser:', createUser('Marcus', 'Roma'));

module.exports = { ab, createUser };