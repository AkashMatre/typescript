var names; //declaration with default initilization.
names = [];
names.push("James Bond");
names.push("James Bond1");
names.push("James Bond2");
names.push("James Bond3");
names.push("James Bond4");
names.push("James Bond5");
//Traditional Iteration using for loop
console.log("Using for loop");
for (var i = 0; i < names.length - 1; i++) {
    console.log("name at " + i + " is " + names[i]);
}
console.log();
//ES 5 Iteraion using for..in loop
//Simplification of for loop
console.log("Üsing For loop");
for (var i in names) {
    console.log("name at " + i + " is " + names[i]);
}
console.log();
//for...of loop
//internally uses symbol.iterator() of ES6
//typescript uses for loop for symbol.iterator
console.log("Üsing For loop");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("name = " + n);
}
console.log();
