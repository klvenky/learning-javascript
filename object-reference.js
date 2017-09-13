let a = {text:"Hello"}, b = a;
console.log('a : ',a);
console.log('b : ',b);
b.text = "World";
console.log('assigned b.text to World');
console.log('a : ',a);
console.log('b : ',b);

let c = Object.create(a);
console.log('created c : ',c,' using Object.create' );
c.text = 'Kris';
console.log('Assigned c.text to "Kris"');
console.log('a : ',a);
console.log('b : ',b);
console.log('c : ',c);