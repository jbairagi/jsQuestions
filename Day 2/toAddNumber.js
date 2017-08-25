exports.toAddNumbers = function(num1, num2){
	let totalPrice = parseFloat(num1) + parseFloat(num2);
	totalPrice = Number(totalPrice.toFixed(2));
	return totalPrice;
}