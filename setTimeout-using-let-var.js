let letFun = function () {
    for(let i=0;i<5;i++)
    {
        setTimeout(function(){
            console.log(i);
        },1000);
    }

}, varFun = function () {
    for(var i=0;i<5;i++)
    {
        setTimeout(function(){
            console.log(i);
        },1000);
    }
};

letFun();
varFun();