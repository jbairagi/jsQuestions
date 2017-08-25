exports.outputForSalesTax = function(bag, totalTaxes){
	let total = 0;;
	console.log("Output: ");
	bag.forEach(function(item){

		let receipt = "";
		receipt = receipt.concat(item.quantity + " ");
		if(item.imported){
			receipt = receipt.concat("imported ");
		}
		receipt = receipt.concat(item.name + ": " + item.cost);
		console.log(receipt);
		total += item.cost;
	})

	console.log("Sales Taxes: "+ totalTaxes);
	console.log("Total: "+ total);
}
