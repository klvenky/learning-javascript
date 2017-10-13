let str = '1', num = 2;
let boolTrue = true, boolFalse = false;
console.log('**** String and Number ****');
console.log('----------------------------');
console.log('\'1\' + 2 :: ', str + num);
console.log('\'1\' - 2 :: ', str - num);
console.log('\'1\' * 2 :: ', str * num);
console.log('\'1\' / 2 :: ', str / num);
console.log('\'1\' % 2 :: ', str % num);

console.log('\n**** Number and String ****');
console.log('-----------------------------');
console.log('2 + \'1\' :: ', num + str);
console.log('2 - \'1\' :: ', num - str);
console.log('2 * \'1\' :: ', num * str);
console.log('2 / \'1\' :: ', num / str);
console.log('2 % \'1\' :: ', num % str);

console.log('\n*** Number and True ***');
console.log('----------------------------');
console.log('2 + true  :: ', num + boolTrue);
console.log('2 + true  :: ', num + boolTrue);
console.log('2 + true  :: ', num + boolTrue);
console.log('2 + true  :: ', num + boolTrue);
console.log('2 + true  :: ', num + boolTrue);

console.log('\n*** Number and False ***');
console.log('----------------------------');
console.log('2 + false :: ', num + boolFalse);
console.log('2 - false :: ', num - boolFalse);
console.log('2 * false :: ', num * boolFalse);
console.log('2 / false :: ', num / boolFalse);
console.log('2 % false :: ', num % boolFalse);

console.log('\n*** String and boolean ***');
console.log('----------------------------');
console.log('**** true and String ****');
console.log('-------------------------');
console.log('true + \'1\'', boolTrue + str);
console.log('true - \'1\'', boolTrue - str);
console.log('true * \'1\'', boolTrue * str);
console.log('true / \'1\'', boolTrue / str);
console.log('true % \'1\'', boolTrue % str);

console.log('**** false and String ****');
console.log('-------------------------');
console.log('false + \'1\'', boolFalse + str);
console.log('false - \'1\'', boolFalse - str);
console.log('false * \'1\'', boolFalse * str);
console.log('false / \'1\'', boolFalse / str);
console.log('false % \'1\'', boolFalse % str);

console.log('\n*** Boolean Operations ***');
console.log('============================');
console.log('\n**** true and false ****');
console.log('--------------------------');
console.log('true + false :: ', boolTrue + boolFalse);
console.log('true - false :: ', boolTrue - boolFalse);
console.log('true * false :: ', boolTrue * boolFalse);
console.log('true / false :: ', boolTrue / boolFalse);
console.log('true + false :: ', boolTrue + boolFalse);

console.log('\n**** All true Operations ****')
console.log('-------------------------------');
console.log('true + true :: ', boolTrue + boolTrue);
console.log('true - true :: ', boolTrue - boolTrue);
console.log('true * true :: ', boolTrue * boolTrue);
console.log('true / true :: ', boolTrue / boolTrue);
console.log('true % true :: ', boolTrue % boolTrue);

console.log('\n**** All false Operations ****')
console.log('--------------------------------');
console.log('false + false :: ', boolFalse + boolFalse);
console.log('false - false :: ', boolFalse - boolFalse);
console.log('false * false :: ', boolFalse * boolFalse);
console.log('false / false :: ', boolFalse / boolFalse);
console.log('false % false :: ', boolFalse % boolFalse);
