"use strict"
let a = {t1:'t1', t2:'t2'}, b = {t1:'text', ...a};
console.log('ran b = {t1:\'text\',...a}');
console.log(b);
let testRest = function(a,b,...rest) {
        console.log("arguments array :: ",arguments);
        console.log("rest array :: ",rest);
}

testRest('a','b','c','d','e','f');
