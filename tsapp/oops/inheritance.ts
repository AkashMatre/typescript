class Product{
    constructor(public ProdId:number,public ProdName:string){}
}

class ProductLogic{
    product:Product;
    products:Array<Product>;

    constructor()
    {
        this.product = new Product(0,"");
        this.products = new Array<Product>();
        
        this.products.push( new Product( 101,"P1"));
        this.products.push( new Product( 102,"P1"));

    }

    getProducts():Array<Product>{
        return this.products;

    }
    saveProduct(p:Product):Array<Product>{
        this.products.push(p);
        return this.products;
    }
}

class ProductOperations extends ProductLogic{
    constructor(){
        super();
    }
    // getProductById(id:number):Product{
    //     let prod:Product[] =  this.products.filter((element)=>{
    //         return element.ProdId == id;
    //     });
    //     return prod;
    // }

    getProductsByCatagory(cat:string):Array<Product>{
        return this.products;
    }
}
class Presenter{
    generateTable():string{
        let Products = [
            {ProdId:101, ProdName:"P1"},
            {ProdId:102, ProdName:"P2"},
            {ProdId:103, ProdName:"P3"}
        ];

        let Table = "<table><tr><th>ProdId</th><th>ProdName</th></tr>";

        for(let p of Products){
            Table += `<tr><td>${p.ProdId} </td><td>${p.ProdName} </td></tr>`;
        }
        Table += "</table>";
        return Table;
    }
}





let prodOperation = new ProductOperations();

console.log(JSON.stringify(prodOperation.getProducts()));

let prd = new Product(103,"P3");
console.log();
console.log(JSON.stringify(prodOperation.saveProduct(prd)));






