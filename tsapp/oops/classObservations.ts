class DemoES6 {

    summation(...values:number[]):number{
        let sum : number = 0;
        if(values.length > 0){
            values.forEach((v,i)=>{
                sum += v;
            });
        }
        return sum;
    }
}

let obj = new DemoES6();
//obj.summation();

console.log(`2 parameters ${obj.summation(2,3)}`);
console.log(`3 parameters ${obj.summation(2,3,4)}`);
console.log(`4 parameters ${obj.summation(2,3,4,5)}`);
console.log(`5 parameters ${obj.summation(2,3,4,5,6)}`);