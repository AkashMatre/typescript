let customeProds = [

    {
        "prodid": 1,
        "prodname": "delectus aut autem",
      },
      {
        "prodid": 2,
        "prodname": "delectus aut autem",
      },
      {
        "prodid": 3,
        "prodname": "delectus aut autem",
      }
];

class StringOperations{
    getLength(str:string):number{
        return str.length;
    }
    changeCase(str:string,format:string):string{
        if(format == "U"){
            return str.toUpperCase();
        }
        if(format === "L"){
            return str.toLowerCase();
        }
        return str;
    }
    addProduct(prodid:number,prodname:string){
        let customeprod = {
            prodid: prodid,
            prodname:prodname
        }
        customeProds.push(customeprod);
        return this.getTable();
    }
    getTable():string{
        let table:string = "<table class='table'><tr><th>Product ID</th><th>Prod Name</th></tr>";
        for(let p of customeProds)
        {
            table += `<tr><td>${p.prodid}</td><td>${p.prodname}</td></tr>`;
        }
        table+="</table>";
        return table;
    }
}