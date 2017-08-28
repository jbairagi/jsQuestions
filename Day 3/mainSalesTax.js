//Continue on the sales tax problem, but refactor the code & distribute separate files. 
//Use module.exports & require etc.

let generalTax= require("./taxForGeneralGoods.js");
let importedTax= require("./taxForImportedGoods.js");
let output= require("./outputForSalesTax.js");
let toAdd= require("./toAddNumber.js");
let input= require("./inputForSalesTax.js");

let shoppingBag = input.inputList();
let totalTaxes = 0;


let k = shoppingBag.length;

for(let j = 0; j< k; j++){
	let salesTaxes = 0;
	
	if(shoppingBag[j].imported == "yes")
		salesTaxes += importedTax.taxForImportedGood(shoppingBag[j].cost); 

	if(shoppingBag[j].taxable == "yes")
		salesTaxes += generalTax.taxForGeneralGood(shoppingBag[j].cost);

		
	shoppingBag[j].cost = toAdd.toAddNumbers(shoppingBag[j].cost, Number((Math.ceil(salesTaxes*20)/20).toFixed(2)));
	salesTaxes *= shoppingBag[j].quantity;
	totalTaxes = toAdd.toAddNumbers(totalTaxes, Number((Math.ceil(salesTaxes*20)/20).toFixed(2)));
	
}

output.outputForSalesTax(shoppingBag, totalTaxes);