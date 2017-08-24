//Use the map function to double all the elements in the array.

var numbers=[20,30,10,40];
console.log("Input Array: "+ numbers);

function doubleAllElements(num){
	return num*2;
}

var arr=numbers.map(doubleAllElements);
console.log("Output Array: "+arr);
