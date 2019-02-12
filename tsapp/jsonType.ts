//The JSON Object/Object literal
let product = {
ProductId:101,
ProductName:"Laptop"
};

//JSON Serialization or string parsing for JSON.
console.log(JSON.stringify(product));
//Getting length of all keys of JSON Object
let Info = Object.keys(product).length;
console.log(Info);

console.log();
//Read all property names
for(let p of Object.keys(product)){
    console.log(p);
}

