var a = 'foo', 
    b = 42, 
    c = {};

// Shorthand property names (ES2015)
var o = {a, b, c};

// In other words,
console.log('o.a :: ',o.a);
console.log('{a} :: ',{a});
console.log('{a}.a :: ',{a}.a);
console.log((o.a === {a}.a)); // true