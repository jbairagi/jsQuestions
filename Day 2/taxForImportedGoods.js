
let toAddNumbers = require("./toAddNumber.js");

exports.taxForGeneralGood =  function(itemPrice){
	var taxes = 0;
	taxes = toAddNumbers.toAdd(0, (5*itemPrice)/100);
	taxes = Number((Math.ceil((taxes)*20)/20).toFixed(3));
	return taxes;
}