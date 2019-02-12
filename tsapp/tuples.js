//1.Simple Tuple
//tuple contains first value as string and second as a number.
var val;
//rules for tuples
//1. value types must be followed in tuple 
//2. tuple must be initialized
val = ["a", 101]; //tuple initilization.
console.log(val[0] + " " + val[1]);
var productrecord; //Defining a reference of type TupleData.
//Initilizing TupleData reference type.
productrecord = [1, {
        ProductId: 101,
        ProductName: "Laptop"
    }];
productrecord.push(2, {
    ProductId: 101,
    ProductName: "Laptop"
});
for (var _i = 0, productrecord_1 = productrecord; _i < productrecord_1.length; _i++) {
    var p = productrecord_1[_i];
    console.log(p);
}
