//1.Simple Tuple
//tuple contains first value as string and second as a number.
let val:[string,number];

//rules for tuples
//1. value types must be followed in tuple 
//2. tuple must be initialized

val = ["a",101]; //tuple initilization.

console.log(`${val[0]} ${val[1]}`);

//define a tuple using "type" for a complex data.
//tuple data is a type and RHS is a type of TupleData
type TupleData = [number,{}];

let productrecord : TupleData; //Defining a reference of type TupleData.

//Initilizing TupleData reference type.
productrecord = [1,{
    ProductId:101,
    ProductName:"Laptop"
    }];
productrecord.push(2,{
    ProductId:101,
    ProductName:"Laptop"
    });

for(let p of productrecord){
    console.log(p);
}