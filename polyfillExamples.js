// polyfill for forEach

let arr = [1, 2, 5, 67, 8];

Array.prototype.forEach = function(callback){
    let array = this;
    for(let i=0; i< array.length;i++){
        callback(array[i], i,);
    }
}

arr.forEach(d=>console.log(d+3));

// polyfill for map

