let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

a = a.map(element => {
    console.log(element);
    element = element * 2;
    return element;
    // return is required because map creates a new array pushing the values returned
});

// direct editing variables is possible and is reflected directly
b.forEach((element) => {
    element *= 2;
    // return element;
    // no need to return as the elements get updated automatically
});
console.log('a : ', a);
console.log('b : ', b);
