//Continue on the sales tax problem, but refactor the code & distribute separate files. 
//Use module.exports & require etc.

let generalTax= require("./taxForGeneralGoods.js");
let importedTax= require("./taxForImportedGoods.js");
let output= require("./outputForSalesTax.js");
let toAdd= require("./toAddNumber.js");
let getShoppingList= require("./inputForSalesTax.js"); //get data

let shoppingBag = getShoppingList.inputList();
let totalTaxes = 0;

shoppingBag.forEach(function(item){
	let salesTaxes = 0;
	for(let i=0; i<item.quantity; i++){
		if(item.imported)
			salesTaxes += importedTax.taxForImportedGood(item.cost); 

		if(item.taxable)
			salesTaxes += generalTax.taxForGeneralGood(item.cost);

		item.cost = toAdd.toAddNumbers(item.cost, Number((Math.ceil(salesTaxes*20)/20).toFixed(2)));
		totalTaxes = toAdd.toAddNumbers(totalTaxes, Number((Math.ceil(salesTaxes*20)/20).toFixed(2)));
	}
})

output.outputForSalesTax(shoppingBag, totalTaxes);