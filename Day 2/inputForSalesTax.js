let readlineSync = require('readline-sync');

exports.inputList = function() {
	console.log("Enter the data separated by ':', if tax applicable or imported then write '1' else leave blank.");
	let items = [];
	while(1){	
		console.log("If you wish to end then press 'q' and Enter");
		let response = readlineSync.question('Name:Quantity:Cost:Imported:Taxable ').split(':');
		console.log();
		let item = {
			name: response[0], 
			quantity: Number(response[1]), 
			cost: Number(response[2]), 
			imported: Boolean(response[3]), 
			taxable:Boolean(response[4]) 
		};
		//check values
		if(item.name == 'q')
			break;
		items.push(item);
	}
	return items;
}


