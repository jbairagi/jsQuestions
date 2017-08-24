var a = [1,2,3];
var b = [4,5,6,7];


function toJoin(a,b){
	for(var i = 0; i<b.length; i++){
		a.push(b[i]); 
	}
	console.log(a);
}

toJoin(a,b);




