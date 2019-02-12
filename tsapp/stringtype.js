//Variable names must start from lower case
//Use camelcase for multiword variable name
var firstName = "Satish";
var middleName = "Bhanudas";
var lastName = "Pawar";
//1. Concatinate using old js style (ES 3 to 5)
var fullNameOld = firstName + " " + middleName + " " + lastName;
console.log("fullName With Old Style " + fullNameOld);
var fullNameWithTemplateString = firstName + " " + middleName + " " + lastName;
console.log("With Tempate String \n\n                " + fullNameWithTemplateString);
