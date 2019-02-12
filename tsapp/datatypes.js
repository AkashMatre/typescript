//1. explicit datatypes
var num1 = 200;
//2. Implicit datatypes, based on type-of initial value
var num2 = 200;
function performOperation(val) {
    if (typeof (val) == "number") {
        console.log("Square" + (val * val));
    }
    if (typeof (val) == "string") {
        console.log("Upper case " + val.toUpperCase());
    }
    else {
        console.log("Invalid DataType");
    }
}
performOperation(10);
performOperation("Satish");
performOperation(true);
function unionTypeOperation(val) {
    if (typeof (val) == "number") {
        console.log("Square" + (val * val));
    }
    if (typeof (val) == "string") {
        console.log("Upper case " + val.toUpperCase());
    }
}
unionTypeOperation(10);
unionTypeOperation("Satish");
