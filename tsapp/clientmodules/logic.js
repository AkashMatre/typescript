var customeProds = [
    {
        "prodid": 1,
        "prodname": "delectus aut autem"
    },
    {
        "prodid": 2,
        "prodname": "delectus aut autem"
    },
    {
        "prodid": 3,
        "prodname": "delectus aut autem"
    }
];
var StringOperations = /** @class */ (function () {
    function StringOperations() {
    }
    StringOperations.prototype.getLength = function (str) {
        return str.length;
    };
    StringOperations.prototype.changeCase = function (str, format) {
        if (format == "U") {
            return str.toUpperCase();
        }
        if (format === "L") {
            return str.toLowerCase();
        }
        return str;
    };
    StringOperations.prototype.addProduct = function (prodid, prodname) {
        var customeprod = {
            prodid: prodid,
            prodname: prodname
        };
        customeProds.push(customeprod);
        return this.getTable();
    };
    StringOperations.prototype.getTable = function () {
        var table = "<table><tr><th>Product ID</th><th>Prod Name</th></tr>";
        for (var _i = 0, customeProds_1 = customeProds; _i < customeProds_1.length; _i++) {
            var p = customeProds_1[_i];
            table += "<tr><td>" + p.prodid + "</td><td>" + p.prodname + "</td></tr>";
        }
        table += "</table>";
        return table;
    };
    return StringOperations;
}());
