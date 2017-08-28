exports.outputForSalesTax = function(shoppingBag, totalTaxes){
	let total = 0;;
	console.log("Output: ");
	for(let i = 0; i<shoppingBag.length ; i++){

		let receipt = "";
		receipt = receipt.concat(shoppingBag[i].quantity + " ");
		if(shoppingBag[i].imported == "yes"){
			receipt = receipt.concat("imported ");
		}
		receipt = receipt.concat(shoppingBag[i].name + ": " + (shoppingBag[i].quantity * shoppingBag[i].cost));
		console.log(receipt);
		total += (shoppingBag[i].cost * shoppingBag[i].quantity);
	}

	console.log("Sales Taxes: "+ totalTaxes);
	console.log("Total: "+ total);
}
