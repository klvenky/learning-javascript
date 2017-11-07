let letPrinter = ()=>{
    for(let i = 0; i<5;i++) {
        setTimeout(()=>{
            console.log('letPrinter : ',i);
        },1000)
    }
};

let letPassingIPrinter = ()=>{
    for(let i = 0; i<5;i++) {
        console.log('calling setTimeout with : ',i);
        setTimeout((i)=>{
            console.log('letPassingIPrinter : ',i);
        },1000)
    }
};

let varPassingIPrinter = ()=>{
    for(var i = 0; i<5;i++) {
        console.log('calling setTimeout with : ',i);
        setTimeout((i)=>{
            console.log('varPassingIPrinter : ',i);
        },1000);
    }
};

let varPrinter = ()=>{
    for(var i = 0; i<5;i++) {
        setTimeout(()=>{
            console.log('varPrinter : ',i);
        },1000)
    }
};

letPrinter();
letPassingIPrinter();
varPrinter();
varPassingIPrinter();