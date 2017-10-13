let Calculator = function (init) {
  this.add = function (x) {
    init += x;
    return this;
  }
  this.multiply = function (x) {
    init *= x;
    return this;
  }
  this.print = function () {
    console.log(init);
  }
}
new Calculator(0).add(1).add(2).print();
