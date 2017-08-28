let toAdd = require("./toAddNumber.js");

exports.taxForImportedGood =  function(itemPrice){
	let taxes = 0;
	taxes = toAdd.toAddNumbers(0, (5*itemPrice)/100);
	taxes = Number((Math.ceil((taxes)*20)/20).toFixed(2));
	return taxes;

}