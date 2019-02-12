var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(ProdId, ProdName) {
        this.ProdId = ProdId;
        this.ProdName = ProdName;
    }
    return Product;
}());
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.product = new Product(0, "");
        this.products = new Array();
        this.products.push(new Product(101, "P1"));
        this.products.push(new Product(102, "P1"));
    }
    ProductLogic.prototype.getProducts = function () {
        return this.products;
    };
    ProductLogic.prototype.saveProduct = function (p) {
        this.products.push(p);
        return this.products;
    };
    return ProductLogic;
}());
var ProductOperations = /** @class */ (function (_super) {
    __extends(ProductOperations, _super);
    function ProductOperations() {
        return _super.call(this) || this;
    }
    // getProductById(id:number):Product{
    //     let prod:Product[] =  this.products.filter((element)=>{
    //         return element.ProdId == id;
    //     });
    //     return prod;
    // }
    ProductOperations.prototype.getProductsByCatagory = function (cat) {
        return this.products;
    };
    return ProductOperations;
}(ProductLogic));
var Presenter = /** @class */ (function () {
    function Presenter() {
    }
    Presenter.prototype.generateTable = function () {
        var Products = [
            { ProdId: 101, ProdName: "P1" },
            { ProdId: 102, ProdName: "P2" },
            { ProdId: 103, ProdName: "P3" }
        ];
        var Table = "<table><tr><th>ProdId</th><th>ProdName</th></tr>";
        for (var _i = 0, Products_1 = Products; _i < Products_1.length; _i++) {
            var p = Products_1[_i];
            Table += "<tr><td>" + p.ProdId + " </td><td>" + p.ProdName + " </td></tr>";
        }
        Table += "</table>";
        return Table;
    };
    return Presenter;
}());
var prodOperation = new ProductOperations();
console.log(JSON.stringify(prodOperation.getProducts()));
var prd = new Product(103, "P3");
console.log();
console.log(JSON.stringify(prodOperation.saveProduct(prd)));
