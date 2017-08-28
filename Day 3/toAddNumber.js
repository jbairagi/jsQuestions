exports.toAddNumbers = function(num1, num2){
	let total = parseFloat(num1) + parseFloat(num2);
	total = Number(total.toFixed(2));
	return total;
}