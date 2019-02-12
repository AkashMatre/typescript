class MathClass{
    // private x:number = 0;
    // private y:number = 0;
    private z:number = 0;
    constructor( private x:number, private y:number){
        // this.x = x;
        // this.y = y;
    }
    add():number{
        return this.z = this.x + this.y;
    }
    sub():number{
        return this.z = this.x - this.y;
    }
}

let mObj = new MathClass(20,10);
console.log(`Add = ${mObj.add()}`);
console.log(`Add = ${mObj.sub()}`);