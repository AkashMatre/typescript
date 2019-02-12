//The JSON Object/Object literal
var product = {
    ProductId: 101,
    ProductName: "Laptop"
};
//JSON Serialization or string parsing for JSON.
console.log(JSON.stringify(product));
//Getting length of all keys of JSON Object
var Info = Object.keys(product).length;
console.log(Info);
console.log();
//Read all property names
for (var _i = 0, _a = Object.keys(product); _i < _a.length; _i++) {
    var p = _a[_i];
    console.log(p);
}
