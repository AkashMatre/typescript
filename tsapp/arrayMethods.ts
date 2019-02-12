let mynames:Array<string>;
mynames = new Array<string>();

mynames.push("James Bond");
mynames.push("James Bond1");
mynames.push("James Bond2");
mynames.push("James Bond3");
mynames.push("James Bond4");
mynames.push("James Bond5");


// Simple Array Iteration

mynames.forEach(printValues);

function printValues (val:string,idx:number){
    console.log(`Data at ${idx} is ${val}`);
}
console.log();
console.log("Anonymous Callback.");
//Anpnymous callback function

mynames.forEach(function(val:string,idx:number){
    console.log(`Data at ${idx} is ${val}`);
});

//ES6 Arrow functions
console.log();
console.log("Arrow Operator");

mynames.forEach((val:string,idx:number)=>{
    console.log(`Data at ${idx} is ${val}`);
})

mynames.map((v:string,i:number)=>{
    console.log(`Data at ${i} is ${v}`);
});

//returning all strings having lenth more than 12 and returning new array.
let newArray = new Array<string>();
let newArray1 = new Array<string>();
mynames.filter((v:string,i:number)=> {
    if(v.length > 6){
        newArray1.push(v[i]);
    }
});
newArray1.sort();

newArray.forEach((v:string,i:number)=>{
    console.log(v);
});



