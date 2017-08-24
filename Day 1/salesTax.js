/*Next Question:
====================
PROBLEM TWO: SALES TAXES

Basic sales tax is applicable at a rate of 10% on all goods, except books,food, and medical products that are exempt. 
Import duty is an additionalsales tax applicable on all imported goods at a rate of 5%, with noexemptions.

When I purchase items I receive a receipt which lists the name of all theitems and their price (including tax),
 finishing with the total cost of theitems, and the total amounts of sales taxes paid. The rounding rules for
sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05)
 amount of sales tax.

Write an application that prints out the receipt details for these shoppingbaskets...
INPUT:

Input 1:
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85

Input 2:
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50

Input 3:
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25

OUTPUT

Output 1:
1 book : 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83

p:1:27.99:1:1
p:1:18.99::1
c:1:11.25:1:
pills:1:9.75::

Output 2:
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15

Output 3:
1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
1 imported box of chocolates: 11.85
Sales Taxes: 6.70
Total: 74.68

========================
*/



let readlineSync = require('readline-sync');
let items = [];
let totalSalesTax = 0;
let grandTotal = 0;
console.log("Enter the data as separated by ':', if tax applicable or imported then write '1' else leave blank.");
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

	if(item.name == 'q')
		break;
	items.push(item);
}

items.forEach(function(item, index){
	let taxApplicable = 0;
	if(item.taxable){
		taxApplicable += 0.1;
	}
	if(item.imported){
		taxApplicable += 0.05;
	}
	item.totalTax = Number((Math.round(item.cost*taxApplicable*20)/20).toFixed(3));
	item.totalCost = Number((Math.round((item.cost + item.totalTax)*20)/20).toFixed(3));

	grandTotal += item.totalCost;
	totalSalesTax += item.totalTax;

})

function outputTheReceipt(){
	console.log("OUTPUT");
	let line = "";
	items.forEach(function(item, index){
		//1 imported bottle of perfume: 32.19
		line = line.concat(item.quantity + " ");
		if(item.imported){
			line = line.concat("imported");
		}
		line = line.concat(" " + item.name + ": " + item.totalCost);

		console.log(line);

	})

}

outputTheReceipt();
console.log("Sales Taxes: " + totalSalesTax);
console.log("Total: " + grandTotal);