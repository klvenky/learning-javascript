function arguments() {

}

function magicCalc(init) {
    this.add = function (argument) {
        if (!init)
            this.init = 0;
        typeof (argument) === 'number'
            ? init += argument
            : ((typeof (argument) === 'array')
                ? argument.reduce(function (sum, value) { }, this.init)
                : this.init
            );
        return this;
    }
}

console.log(new magicCalc(0).add([1]));