let readlineSync = require('readline-sync');

var shop_bag = function(){
	this.name = "";
	this.quantity = 0;
	this.cost = 0;
	this.imported = "";
	this.taxable = "";
}

exports.inputList = function() {
	console.log("Enter the data separated by ':'; if tax applicable or imported then write 'yes' else leave blank.");
	let item = [];
	let i = 0;
	while(1){	
		console.log("If you wish to end then press 'q' and Enter");
		let response = readlineSync.question('Name:Quantity:Cost:Imported:Taxable ').split(':');
		console.log();

		item[i] = new shop_bag();

		item[i].name = response[0] 
		item[i].quantity = Number(response[1]); 
		item[i].cost = Number(response[2]); 
		item[i].imported = String(response[3]); 
		item[i].taxable = String(response[4]);

		if(item[i].name == 'q')
			break;
		i++;

	}
	item.pop();
	return item;
}


