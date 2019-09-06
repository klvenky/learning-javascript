function ConstructorFn(name) {
  return {
    name: "constructor",
    toString: function() {
      return `to string of ConstructorFn invoked with ${name}`;
    }
  };
}
const exFunc = ConstructorFn("func");
const exOb = new ConstructorFn("new");
console.log(exFunc);
console.log(exOb);
console.log(exFunc === exOb);
console.log(exFunc.toString());
