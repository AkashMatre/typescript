//1. explicit datatypes
let num1 : number = 200;
//2. Implicit datatypes, based on type-of initial value
let num2 = 200;


function performOperation(val:any){
if(typeof(val) == "number"){
        console.log("Square" + (val * val));

}
if(typeof(val) == "string"){
    console.log("Upper case " + val.toUpperCase());
}
else{
    console.log("Invalid DataType");
}
}

performOperation(10);
performOperation("Satish");
performOperation(true);

function unionTypeOperation(val:string|number){
    if(typeof(val) == "number"){
            console.log("Square" + (val * val));
    
    }
    if(typeof(val) == "string"){
        console.log("Upper case " + val.toUpperCase());
    }
    }

    
    unionTypeOperation(10);
    unionTypeOperation("Satish");