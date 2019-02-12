var mynames;
mynames = new Array();
mynames.push("James Bond");
mynames.push("James Bond1");
mynames.push("James Bond2");
mynames.push("James Bond3");
mynames.push("James Bond4");
mynames.push("James Bond5");
// Simple Array Iteration
mynames.forEach(printValues);
function printValues(val, idx) {
    console.log("Data at " + idx + " is " + val);
}
console.log();
console.log("Anonymous Callback.");
//Anpnymous callback function
mynames.forEach(function (val, idx) {
    console.log("Data at " + idx + " is " + val);
});
//ES6 Arrow functions
console.log();
console.log("Arrow Operator");
mynames.forEach(function (val, idx) {
    console.log("Data at " + idx + " is " + val);
});
mynames.map(function (v, i) {
    console.log("Data at " + i + " is " + v);
});
//returning all strings having lenth more than 12 and returning new array.
var newArray = new Array();
newArray = mynames.filter(function (v, i) { return v.length > 12; });
newArray.forEach(function (v, i) {
    console.log(v);
});
