//Variable names must start from lower case
//Use camelcase for multiword variable name
let firstName : string = "Satish";
let middleName:string = "Bhanudas";
let lastName:string = "Pawar";

//1. Concatinate using old js style (ES 3 to 5)

let fullNameOld = firstName + " " + middleName + " " + lastName;

console.log("fullName With Old Style " + fullNameOld);

let fullNameWithTemplateString = `${firstName} ${middleName} ${lastName}`;

console.log(`With Tempate String
                ${fullNameWithTemplateString}`);
