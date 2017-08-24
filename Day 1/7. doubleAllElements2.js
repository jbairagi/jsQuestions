//Use the map function to double all the elements in the array. However, handle edge cases (like array can have a character) as well.

var numbers=[10,'abc',20,'def',30,'ghi',40];
console.log("Input Array: "+ numbers);
function doubleAllElements(num){
   if(isNaN(num))
		return num;
	else
		return 2*num;
}

var arr=numbers.map(doubleAllElements);
console.log("Output Array: "+arr);