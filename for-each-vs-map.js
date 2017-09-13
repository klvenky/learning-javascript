let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

a = a.map(element => {
    console.log(element);
    element = element * 2;
    return element;
});

b.forEach((element) => {
    element *= 2;
    // return element;
});
console.log('a : ', a);
console.log('b : ', b);

// for (let test of a) {
//     console.log(' of : ',test);
// }
// for (let test in a) {
//     console.log(' in : ', test);
// }

// a = { test: 1, test2: 2, test3: 3, test4:  4 };
// for(let test of a) {
//     console.log(' of : ',test);
// }