// settimeout closure quesions and explanations

for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000)
}


function a(){
    var b = 10;
    console.log("outerFun:", b);
    return function c(){
        console.log("innerFun:", b);
        return b;
    }
}

/** 
 *  what will be the output of 
*/

const g = a.c;
const t = g.c();
const s = a();