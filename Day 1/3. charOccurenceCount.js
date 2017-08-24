//Using objects(Hash Tables), print the frequency of occurence of each character inside an array.
var arr = ['a','b','c','d','e','a','c','a','d','A','B','A'];
console.log("Input array: " + arr);


function count(countArr){
	var countArray = {};
	for(var i = 0; i< arr.length; i++) {
 	   var char = arr[i];
	   if(countArr[char])		//since countArr[char] will be undefined if the character in the array 
	    	countArr[char]++;	//is new the 'if' statement will not run. Hence, the else block will be 
	    else					//executed for the first time
	    	countArray[char] = 1;
	}	
	console.log("Output array: ")
	console.log(countArray);
}

count(arr);