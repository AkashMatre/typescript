var MathClass = /** @class */ (function () {
    function MathClass(x, y) {
        this.x = x;
        this.y = y;
        // private x:number = 0;
        // private y:number = 0;
        this.z = 0;
        // this.x = x;
        // this.y = y;
    }
    MathClass.prototype.add = function () {
        return this.z = this.x + this.y;
    };
    MathClass.prototype.sub = function () {
        return this.z = this.x - this.y;
    };
    return MathClass;
}());
var mObj = new MathClass(20, 10);
console.log("Add = " + mObj.add());
console.log("Add = " + mObj.sub());
