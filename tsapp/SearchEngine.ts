
let products = [{
    ProductID: 1,
    ProductName: "Mobile",
    ProductQuality: "Good",
},
{
    ProductID: 2,
    ProductName: "TV",
    ProductQuality: "Better"
},
{
    ProductID: 3,
    ProductName: "Ambuja",
    ProductQuality: "Good"
},
{
    ProductID: 4,
    ProductName: "Bhim",
    ProductQuality: "Bad"
},
{
    ProductID: 5,
    ProductName: "Chocolate",
    ProductQuality: "Worst"
},
{
    ProductID: 6,
    ProductName: "xerox",
    ProductQuality: "Good"
}];


console.log("Sort Array On Element Length And Alphabetical Order.");

let mynames1:Array<string>;
mynames1 = new Array<string>();

mynames1.push("qames Bond");
mynames1.push("aames Bond1");
mynames1.push("eames Bond22");
mynames1.push("rames Bond333");
mynames1.push("tames Bond4444");
mynames1.push("james Bond5555");

function Sortarray(){
    mynames1.sort((a, b) =>{
        return a.length - b.length;
      });
    return mynames1.sort();
}
console.log(Sortarray());
console.log();



let mynames2:Array<string>;
mynames2 = new Array<string>();

mynames2.push("qames Bond");
mynames2.push("Aames Bond1");
mynames2.push("eames Bond22");
mynames2.push("Rames Bond333");
mynames2.push("tames Bond4444");
mynames2.push("james Bond5555");


console.log("Filtered Array Based On First Capital Letter")
let printmynames2:Array<string>;
printmynames2 = new Array<string>();
mynames2.forEach(element => {
if(element.charAt(0) === element.charAt(0).toUpperCase()) {
    printmynames2.push(element);
}   
});
console.log(printmynames2);

console.log();

console.log("Sorting Product Data Based On Product Name");

function SortProductsarray(){
   return products.sort((a,b) =>(a.ProductName > b.ProductName) ? 1 : (a.ProductName < b.ProductName)? -1 : 0);
} 
console.log(SortProductsarray());

console.log();


console.log("Searching Product from Products Array Based On Product Name, Here i Passed Produc Name As 2.")

function GetSearchQueryByParams(params:any){
    let newArray = new Array<object>();
    products.forEach(element => {
        Object.keys(element).map(prodkey => { 
            if(element[prodkey] == params){
                newArray.push(element);
            }
        });
    
        // if(typeof (params) == "number"){
        //     if(element.ProductID == params){
        //         newArray.push(element);
        //     }
        // }
        // else if(typeof (params) == "string"){
        //     if(element.ProductName == params){
        //         newArray.push(element);
        //     }
        //     else if(element.ProductQuality == params){
        //         newArray.push(element);
        //     }
        // }
    });
    return newArray;
}

let newObjArray:Object[] = GetSearchQueryByParams("Mobile");
console.log(newObjArray);






