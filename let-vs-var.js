let letFunc = function() {
    let a = 7, b =[];
    for(var i =0;i<a;i++) {
        b.push(()=>{
            console.log(i);
        });
    }
    print: () => {
        b.map(a => {
        });
    }
};
let varFunc = function () {
    let a = 7, b = [];
    for (var i = 0; i < a; i++) {
        b.push(() => {
            console.log(i);
        });
    }
    print:()=>{
        b.map(a=>{
            return a;
        });
    }
};

console.log('var one');
letFunc.print();
console.log('let one');
varFunc.print();
