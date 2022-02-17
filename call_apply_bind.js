/// Understanding call, apply and bind

let name1 = {
    first: "Ella",
    last: "Ray",
    printName: function(){
        console.log("first "+ this.first + "last "+ this.last);
    }
}

name1.printName();

let name2 = {
    first: "Ethan",
    last: "Santiago",
}

// try these
name1.printName.call(name2);
name1.printName.apply(name2);


//// Diff bw call and apply

let name3 = {
    first: "Ella",
    last: "Ray"
}

let name4 = {
    first: "Ethan",
    last: "Santiago",
}

let printfullname = function(){
    console.log("first: "+ this.firstName + " last: "+ this.lastName);
}

let printBio = function(city, university){
    console.log("first: "+ this.firstName + " last: "+ this.lastName + " grad from "+ university +","+ city);
}

printfullname.call(name3);
printfullname.call(name3, "Cbe", "BU");
printfullname.apply(name4, ["Cbe", "BU"])


// bind does not invoke immediately, but gives a copy of the function which can be invoked later.
let printCopy = printfullname.bind(name4, "chn", "AU");
console.log(printCopy);